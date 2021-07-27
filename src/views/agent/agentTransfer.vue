<template>
  <div class="businessTeam-container">
    <el-card class="transfer-head" shadow="always">
      <el-row class="my-row" :span="24">
        <el-col :span="8" class="my-col"> 划入金额(USDT)</el-col>
        <el-col :span="8" class="my-col"> 划出金额(USDT)</el-col>
        <el-col :span="8" class="my-col"> 净划入金额(USDT)</el-col>
      </el-row>
      <el-row class="my-row" :span="24">
        <el-col :span="8" class="my-col"> {{ infoObj.intoTotal || 0 }} </el-col>
        <el-col :span="8" class="my-col"> {{ infoObj.outTotal || 0 }} </el-col>
        <el-col :span="8" class="my-col"> {{ infoObj.netIncome || 0 }} </el-col>
      </el-row>
    </el-card>
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <div class="container-table">
      <Btable :listLoading="listLoading" :data="tableList" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search.vue';
import iconPage from '@/components/icon-page.vue';
import Btable from '@/components/table/b-table';
import { agentTransferCol, agentTransferfig } from '@/config/column/contract';
import $api from '@/api/api';
export default {
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  name: 'AgentTransfer',
  data() {
    const numberReg = /^\d{6}$/;
    const checkNumberPwd = (rule, value, callback) => {
      if (!numberReg.test(value)) {
        return callback(new Error(rule.message));
      }
      callback();
    };

    const noEmpty = (rule, value, callback) => {
      if (value.trim() === '') {
        return callback(new Error(rule.message));
      }
      callback();
    };
    return {
      search_params_obj: {},
      pages: 0,
      total: 0,
      current_page: 1,
      pageSize: 10,
      toDay: '',
      ago: '',
      searchCofig: [],
      coinOptions: [],
      listLoading: false,
      list: [],
      configs: [],
      tableList: [],
      infoObj: {},
    };
  },
  methods: {
    // 时间格式专用
    // formatTime(val) {
    //   return (val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD HH:mm:ss');
    // },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.searchCofig[3].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    // 法币收款方式表格操作按钮
    async doHandle(data) {
      const { fn, row } = data;
    },
    // 时间戳专用
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
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

    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[3].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.today, 'YYYY/MM/DD HH:mm:ss')];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    //获取列表
    async getList() {
      try {
        if (this.listLoading) return;
        const query_data = {
          pageNum: this.current_page,
          pageSize: this.pageSize,
        };
        this.requiredParams(query_data);
        this.requiredParams(this.search_params_obj);
        Object.assign(this.search_params_obj, { userType: 1 });
        const _res = await $api.getAgentTransferInfo(this.search_params_obj);
        this.infoObj = _res.data.data;
        Object.assign(query_data, this.search_params_obj);
        this.listLoading = true;
        const res = await $api.getAgentTransferList(query_data);
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.tableList = records;
        this.listLoading = false;
      } catch (error) {
        this.listLoading = false;
      }
    },
  },
  mounted() {
    this.configs = agentTransferCol;
    this.searchCofig = this.$util.clone(agentTransferfig);

    this.$store.dispatch('common/getSymbolListContract').then(() => {
      this.searchCofig[1]['list'] = this.$store.state.common.symbollistContract;
    });
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>

<style lang="scss">
.businessTeam-container {
  padding: 4px 10px 10px 15px;
  .container-top {
    margin: 10px 0;
  }
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

  .transfer-head {
    margin-bottom: 15px;
    .el-card__body {
      padding: 10px 20px;
    }
    .my-col {
      text-align: center;
    }
    .my-row {
      &:nth-of-type(1) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
