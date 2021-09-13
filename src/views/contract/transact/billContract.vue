<template>
  <div class="billContract-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :calLoadingExcel="calLoadingExcel"
        calTextExcel="快速导出excel"
        :calTotalExcel="btnArr.includes('excel')"
        @do-calTotal-excel="calTotalExcel"
        :excelLoading="excelLoading"
        :exportExcel="btnArr.includes('excel')"
        @do-exportExcel="exportExcel"
        :calLoading="calLoading"
        :calTotal="true"
        @do-calTotal="calTotal"
        calText="合约账单统计"
      />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { billContractCol, billContractConfig } from '@/config/column/contract';
import $api from '@/api/api';
import fileDownload from 'js-file-download';
import utils from '@/utils/util';

export default {
  name: 'BillContract',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      calLoadingExcel: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      symbollist: [],
      toDay: '',
      ago: '',
      btnArr: [],
      excelLoading: false,
      dataList: [],
      calLoading: false,
      typeObj: {
        1: '爆仓平空',

        2: '爆仓平多',

        3: '平空',

        4: '平多',

        5: '开空手续费',

        6: '开多手续费',

        7: '币币转入合约',

        8: '合约转出币币',

        9: '资金费用',

        10: '开仓手续费',

        11: '平仓手续费',

        12: '法币转入合约',

        13: '合约转出法币',

        15: '合约划转',

        18: '开多',

        19: '开空',
      },
    };
  },
  methods: {
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.type) {
        return this.$message.error('请选择类型');
      }
      this.calLoading = true;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      let tmpName = '';
      if (this.search_params_obj.coinId) {
        tmpName = this.symbollist.filter((v) => v['value'] == this.search_params_obj.coinId)[0].label;
      } else {
        tmpName = '全部';
      }
      const res = await $api.getBillContractTotal(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(`<p>类型：  ${this.typeObj[params.type] || '全部'}</p>  <p>币对：${tmpName}</p> <p>金额：${getObj.amount}</p>  `, '统计结果', {
            dangerouslyUseHTMLString: true,
          }).catch(() => {});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
    },
    // 导出excel
    calTotalExcel(data) {
      this.search_params_obj = data;
      const params = {};

      this.calLoadingExcel = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      $api
        .apiBillContractListExport(params)
        .then((res) => {
          this.calLoadingExcel = false;
          fileDownload(res.data, '合约账单.xlsx');
        })
        .catch(() => {
          this.calLoadingExcel = false;
        });
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getUserBillPagination(params);
      this.excelLoading = false;
      if (res) {
        return res;
      }
    },
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
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
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
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getUserBillPagination(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },

    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.today, 'YYYY/MM/DD HH:mm:ss')];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.symbollist.filter((v) => v['value'] == this.search_params_obj.coinMarket)[0].label;
          this.search_params_obj.coinMarket = tmpName;
        }
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getSymbolListContract').then(() => {
        this.symbollist = this.$store.state.common.symbollistContract;
        this.searchCofig[4]['list'] = this.symbollist;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('BillContract', billContractCol, []);
    // //console.log('authObj', authObj);
    this.btnArr = authObj.btnArr || [] || [];
    this.configs = billContractCol;
    this.searchCofig = this.$util.clone(billContractConfig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style scope lang="scss">
.billContract-container {
  padding: 4px 10px 10px 10px;
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
}
</style>
