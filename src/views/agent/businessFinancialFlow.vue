<template>
  <div class="businessFinancialFlow-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset"/>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { businessFinancialFlowCol, businessFinancialFlowConfig } from '@/config/column/contractAgent';
import $api from '@/api/api';

export default {
  name: 'BusinessFinancialFlow',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      isCURDAuth: true, // 是否可修改路径配置
      calLoading:false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      curRow: {},
    };
  },
  methods: {
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
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getBusinessAndAgentQueryCoinChange(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
        this.listLoading = false;
      }
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
  },
  mounted() {
    // let authObj = this.$util.getAuthority('BusinessFinancialFlow', businessFinancialFlowCol, []);
    this.configs = businessFinancialFlowCol;
    this.searchCofig = this.$util.clone(businessFinancialFlowConfig);
    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style lang="scss">
.businessFinancialFlow-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
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

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
</style>
