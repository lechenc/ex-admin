<template>
  <div class="agentFinancialFlow-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { agentFinancialFlowCol, agentFinancialFlowConfig } from '@/config/column/contractAgent';
import $api from '@/api/api';

export default {
  name: 'AgentFinancialFlow',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },

  data() {
    return {
      showType: 1,
      listLoading: false, // 表格loading
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
    selectChange(val) {
      if (val == 1) {
        this.searchCofig[2].value = '';
        this.searchCofig[2].list = [
          { label: '提币待审核', value: 1 },
          { label: '提币成功', value: 2 },
          { label: '提币失败', value: 3 },
          { label: '合约返佣结算', value: 95 },
          { label: '合约返佣', value: 101 },
        ];
        this.showType = 1;
      } else if (val == 2) {
        this.searchCofig[2].value = '';
        this.searchCofig[2].list = [{ label: '团队队长返佣', value: 1 }];
        this.showType = 2;
      }
    },
    doSearch(data) {
      this.current_page = 1;
      // if (this.showType == 1) {
      //   this.configs[3].filters = [
      //     { text: '提币待审核', val: 1 },
      //     { text: '提币成功', val: 2 },
      //     { text: '提币失败', val: 3 },
      //     { text: '合约返佣结算', val: 95 },
      //     { text: '合约返佣', val: 101 }
      //   ];
      //   this.configs[7] = {
      //     label: '操作资金类型',
      //     prop: 'amountType',
      //     type: 'filter',
      //     show_type: 'text',
      //     filters: [
      //       { text: '可用余额', val: 1 },
      //       { text: '冻结金额', val: 2 },
      //     ],
      //   };
      // } else {
      //   this.configs[3].filters = [{ text: '团队队长返佣', val: 1 }];
      //   this.configs[7] = {
      //     label: '操作资金类型',
      //     prop: 'amountType',
      //     type: 'filter',
      //     show_type: 'text',
      //     filters: [
      //       { text: '准可用余额', val: 1 },
      //       { text: '准可用余额', val: 2 },
      //     ],
      //   };
      // }
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      // this.searchCofig[4].value = 1;
      // this.configs[7] = {
      //   label: '操作资金类型',
      //   prop: 'amountType',
      //   type: 'filter',
      //   show_type: 'text',
      //   filters: [
      //     { text: '可用余额', val: 1 },
      //     { text: '冻结金额', val: 2 },
      //   ],
      // };
      // this.configs[3].filters = [
      //   { text: '提币待审核', val: 1 },
      //   { text: '提币成功', val: 2 },
      //   { text: '提币失败', val: 3 },
      //   { text: '合约返佣', val: 88 },
      //   { text: '队长返佣', val: 95 },
      // ];
      // this.searchCofig[2].list = [
      //   { label: '提币待审核', value: 1 },
      //   { label: '提币成功', value: 2 },
      //   { label: '提币失败', value: 3 },
      //   { label: '合约返佣', value: 88 },
      //   { label: '队长返佣', value: 95 },
      // ];
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
        balanceType : 1,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getBusinessAndAgentCoinChange(params);
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
    // let authObj = this.$util.getAuthority('AgentFinancialFlow', agentFinancialFlowCol, []);
    this.configs = agentFinancialFlowCol;
    this.searchCofig = this.$util.clone(agentFinancialFlowConfig);
    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style lang="scss">
.agentFinancialFlow-container {
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
