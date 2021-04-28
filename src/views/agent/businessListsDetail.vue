<template>
  <div class="businessListsDetail-container">
        <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>基本信息</H3>
        <div>
          <div>商务UID：{{ current_row.businessUid }}</div>
          <div>团队总人数：{{ current_row.teamCount }}</div>
            <div>低流量返佣比例：{{ current_row.feeCommissionLow }}</div>
          <div>商务级别: {{ current_row.level }}</div>
          <div>代理模式：{{ current_row.agentModeStr }}</div>
          <div>手续费返佣比例：{{ current_row.feeCommission }}</div>
          <div>返佣结算时间：{{ current_row.delayDay }}</div>
        </div>
      </div>
    </el-card>
    <el-card>
      <H3>资产信息</H3>
      <Btable :listLoading="assetsListLoading" :data="list" :configs="listConfigs" @do-handle="doHandle" />
    </el-card>
    <el-card>
      <H3>代理团队信息</H3>
      <Btable :listLoading="teamLoading" :data="teamList" :configs="otcConfigs" />
            <div class="container-footer">
        <el-pagination
          background
          @size-change="pageSizeChange"
          @current-change="goPage"
          layout="total,sizes, prev, pager, next, jumper"
          :current-page="current_page"
          :page-sizes="[10, 50, 100, 200]"
          :page-size="pageSize"
          :total="total"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import $api from '@/api/api';
import Btable from '@/components/table/b-table';
import { teamAssetsCol, teamInfoColBusiness } from '@/config/column/contractAgent';

export default {
  components: {
    Btable,
  },
  name: 'BusinessListsDetail',
  data() {
    return {
      listLoading: false, // 表格loading
      teamLoading: false, // 代理团队loading
      assetsListLoading: false, // 资产loading
      listConfigs: [], // 资产信息列表
      otcConfigs: [], // 代理团队信息配置
      isModify: false, // 是否可以修改
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0,
      pages: 0,
      current_row: {}, // 查看详情的条目
      list: [], // 资产信息列表
      teamList: [], // 代理团队信息列表

      nowUserId: 0, // 详情页面的用户id
      assetsList: [], // 用户资产数组
      assets_curr_page: 0, //  用户资产页码
      assets_total: 0, //用户资产总数
      inviteList: [], // 邀请明细数组
      invite_curr_page: 0, //  邀请明细页码
      invite_total: 0, //邀请明细总数

      userId: ''
    };
  },
  filters: {
    agentMode(val) {
      if (val == 1) {
        return '手续费模式';
      } else {
        return '';
      }
    },
  },
  methods: {
    reloadPage(val) {
      this[val] = false;
      this.getAssetsListFunc();
    },
    // 资产信息操作按钮
    async doHandle(data) {
      const { fn, row } = data;
      if (fn == 'edit') {
        this.isWithdrawDialog = true;
      }
    },

    goInvitePage(val) {
      this.invite_curr_page = val;
      this.getInviteList();
    },
    goAssetsPage(val) {
      this.assets_curr_page = val;
      this.getAssetsList();
    },

    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1;
      this.pageSize = val;
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    async getDetail() {
      if (this.listLoading) return;
      this.listLoading = true;
      const res = await $api.businessBasicInfo({userId: this.userId});
      if (res) {
        this.current_row =res.data.data;
      }
      this.listLoading = false;
    },
    // 获取 资产信息表格
    async getAssetsListFunc() {
      if (this.assetsListLoading) return;
      this.assetsListLoading = true;
      const res = await $api.getAgentBusinessInfo({userId: this.userId});
      if (res) {
        const records = res.data.data &&  res.data.data.coinAccountList
        if (records && records.length > 0) {
          this.list = records;
        }else {
          this.list =[]
        }
      }
      this.assetsListLoading = false;
    },
    // 获取 团队信息表格
    async getTeamListFunc() {
      if (this.teamLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        userId: this.userId
      };
      this.teamLoading = true;
      const res = await $api.getBusinessTeamInfo(params);
      if (res) {
        const { records, pages, current, total } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        if (records && records.length > 0) {
          this.teamList = records;
        }else {
           this.teamList = []
        }
      }
      this.teamLoading = false;
    },
  },
  mounted() {
    this.listConfigs = teamAssetsCol;
    this.otcConfigs = teamInfoColBusiness;

    this.userId = this.$route.query.userId

    this.getDetail();
    this.getAssetsListFunc();
    this.getTeamListFunc();
  },
};
</script>

<style lang="scss">
.businessListsDetail-container {
  padding: 4px 10px 10px 10px;

  .container-top {
    margin: 10px 0;
  }

  .container-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;

    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }

    .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }

  .colline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 8px;

      .label {
        width: 60px;
      }
    }
  }

  .box-card {
    margin-bottom: 20px;

    .box-card-con {
      > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        > div {
          min-width: 300px;
          margin-right: 40px;
          font-size: 18px;
          line-height: 40px;
        }
      }
    }
  }
}

.el-table td,
.el-table th {
  text-align: center;
}

.el-switch.is-disabled {
  opacity: 1;
}

.el-switch.is-disabled .el-switch__core,
.el-switch.is-disabled .el-switch__label {
  cursor: pointer !important;
}
</style>
