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
          <div>UID：{{ current_row.uid }}</div>
          <!-- <div>用户类型{{ current_row.teamCount }}</div> -->
          <div>手机: {{ current_row.phone }}</div>
          <div>邮箱: {{ current_row.email }}</div>
        </div>
      </div>
    </el-card>
    <el-card>
      <H3>账户信息</H3>
      <Btable :listLoading="assetsListLoading" :data="list" :configs="listConfigs"  />
    </el-card>
  </div>
</template>

<script>
import $api from '@/api/api';
import Btable from '@/components/table/b-table';
import { analystMimicDetailCol } from '@/config/column/contractMimic';

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
      uid: '',
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
      const res = await $api.getAnalystMimicDetail({ uid: this.uid });
      if (res) {
        this.current_row = res.data.data;
      }
      this.listLoading = false;
    },
    // 获取 资产信息表格
    async getAssetsListFunc() {
      if (this.assetsListLoading) return;
      this.assetsListLoading = true;
      const res = await $api.getAnalystMimicAccount({ uid: this.uid });
      // console.log('res',res)
      if (res) {
        this.list = res.data.data.coinAccountList
      }
      this.assetsListLoading = false;
    },
  },
  mounted() {
    this.listConfigs = analystMimicDetailCol;

    this.uid = this.$route.query.uid;

    this.getDetail();
    this.getAssetsListFunc();
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
