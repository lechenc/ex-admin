<template>
  <div class="userdetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>用户信息</H3>
        <div>
          <div>UID：{{ current_row.uid }}</div>
          <div>用户类型：{{ userTypeObj[current_row.userType] }}</div>
          <div>手机：{{ current_row.phone }}</div>
          <div>邮箱：{{ current_row.email }}</div>
          <div>实名状态：{{ current_row.userVerifiedStatus | userCheckStatus }}</div>
          <div>姓名：{{ current_row.realName }}</div>
          <div>证件类型：{{ current_row.certificateName }}</div>
          <div>证件号码：{{ current_row.cardNo }}</div>
          <div>上级邀请人：{{ current_row.inviterUid }}</div>
          <div>邀请码：{{ current_row.inviteCode }}</div>
          <div>注册时间：{{ current_row.registerTime }}</div>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div style="margin-bottom: 20px" class="box-card-con">
        <H3>资产信息（以下所有折合字段均为USDT）</H3>
        <div>
          <div>总资产折合:{{ account_row.totalAmount }}</div>
          <div>可用资产折合:{{ account_row.availableAmount }}</div>
          <div>冻结资产折合:{{ account_row.freezeAmount }}</div>
          <div>总充值折合:{{ account_row.rechargeAmount }}</div>
          <div>总提现折合:{{ account_row.withdrawAmount }}</div>
          <div>总空投折合:{{ account_row.airdropAmount }}</div>
          <div>总币币交易笔数:{{ account_row.transactionCount }}</div>
          <div>总交易折合:{{ account_row.transactionAmount }}</div>
          <div>总交易手续费折合:{{ account_row.transactionFee }}</div>
        </div>
      </div>
      <Btable :listLoading="accountListLoading" :data="accountList" :configs="accountConfigs" @do-handle="doHandle" />
    </el-card>
    <el-card style="margin-bottom: 40px">
      <H3
        >尊贵邀请会员 <span> ({{ invite_total }}/{{ current_total }}) </span>
      </H3>
      <Btable :listLoading="inviteLoading" :data="inviteList" :configs="inviteConfigs" />
      <div class="container-footer">
        <icon-page :total="invite_total" :pages="invite_page"></icon-page>
        <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="invite_curr_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="invite_total"> </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';
import Btable from '@/components/table/b-table';
import { validatedUserAccountCol, validatedVipUserCol } from '@/config/column/user';
import iconPage from '@/components/icon-page';
export default {
  components: {
    Btable,
    iconPage,
  },
  name: 'ValidatedUserlistDetail',
  mixins: [activePage],
  data() {
    return {
      userTypeObj: {
        1: '普通用户',
        20: 'TP商户账号',
        21: '顶级代理商账号',
        22: '代理商账号',
        24: '顶级广告商',
        25: '广告商代理',
        31: '商务端',
        32: '商务代理',
      },

      activeName: 'ValidatedUserlistDetail',
      vipConfigs: [], // 法币收款方式配置

      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      current_row: {}, // 查看详情的条目
      vipList: [], // 法币收款方式列表
      account_row: {},
      nowUserId: 0, // 详情页面的用户id
      accountList: [], // 用户资产数组
      accountListLoading: false,
      accountConfigs: [],
      inviteList: [], // 邀请明细数组
      inviteLoading: false,
      invite_curr_page: 1, //  邀请明细页码
      invite_total: 0, //邀请明细总数
      invite_page: 0,
      current_total: 0,
      inviteConfigs: [],
      btnArr: [],
    };
  },
  filters: {
    userType(val) {},
    boolDiy(val) {
      if (val) {
        return '是';
      } else {
        return '否';
      }
    },
  },
  methods: {
    // 页容变化
    pageSizeChange(val) {
      this.invite_curr_page = 1;
      this.pageSize = val;
      this.getInviteList();
    },
    // 分页
    goPage(val) {
      this.invite_curr_page = val;
      this.getInviteList();
    },
    // 法币收款方式表格操作按钮
    async doHandle(data) {
      const { fn, row } = data;
      if (fn == 'record') {
        if (row.coinName == 'USDT') {
          this.$router.push({
            path: '/exchange/tradelist',
            query: {
              uid: this.$route.query.id,
              coinMarket: 'ALPT/' + row.coinName,
            },
          });
        } else {
          this.$router.push({
            path: '/exchange/tradelist',
            query: {
              uid: this.$route.query.id,
              coinMarket: row.coinName + '/USDT',
            },
          });
        }
      }
    },
    // 获取用户资产数据
    async getAccountList() {
      const params = {
        userId: this.nowUserId,
      };
      if (this.accountListLoading) return;
      this.accountListLoading = true;
      const res = await $api.getValidatedUserAccount(params);
      if (res) {
        let tmp = res.data.data;
        this.account_row = tmp;
        this.accountList = tmp.list;
      }
      this.accountListLoading = false;
    },
    // 获取邀请明细数据
    async getInviteList() {
      const params = {
        pageNum: this.invite_curr_page,
        pageSize: this.pageSize,
        superUid: this.$route.query.id,
      };
      if (this.inviteLoading) return;
      this.inviteLoading = true;
      const res = await $api.getVoucherVipUserDetails(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.invite_total = total;
        this.invite_curr_page = current;
        this.invite_page = pages;
        this.inviteList = records;
        if (records.length > 0) {
          this.current_total = records[0].inviteSum || 0;
        } else {
          this.current_total = 0;
        }
      }
      this.inviteLoading = false;
    },
    async getDetail(_id) {
      if (this.listLoading) return;
      const params = {
        uid: _id,
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.listLoading = true;
      const res = await $api.getUserList(params);
      if (res) {
        const { records } = res.data.data;
        if (records && records.length > 0) {
          this.current_row = records[0];
          this.nowUserId = this.current_row.userId;
          this.getInviteList();
          this.getAccountList();
        }
      }
      this.listLoading = false;
    },
  },
  mounted() {
    this.getDetail(this.$route.query.id);
  },
  activated() {
    this.activeName = 'ValidatedUserlistDetail';
    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.current_row = {}; // 查看详情的条目
    this.accountList = []; // 用户资产数组
    this.assets_curr_page = 0; //  用户资产页码
    this.assets_total = 0; //用户资产总数
    this.inviteList = []; // 邀请明细数组
    this.invite_curr_page = 0; //  邀请明细页码
    this.invite_total = 0; //邀请明细总数

    this.accountConfigs = validatedUserAccountCol;
    this.inviteConfigs = validatedVipUserCol;
    this.getDetail(this.$route.query.id);
  },
};
</script>

<style lang="scss">
.userdetail-container {
  padding: 4px 10px 10px 10px;

  .container-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }

  .container-top {
    margin: 10px 0;
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

  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
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
