<template>
  <div class="coinFundsPay-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="true"
        @do-exportExcel="exportExcel"
        :calLoading="calLoading"
      />
    </div>
    <!-- :calTotal="true"
        @do-calTotal="calTotal"
        calText="特殊调账统计" -->
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
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
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { coinFundsCol, coinFundsConfig } from '@/config/column/coinPay';
import $api from '@/api/api';
import utils from '@/utils/util';
import activePage from '@/mixin/keepPage';

export default {
  name: 'CoinFundsPay',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  mixins: [activePage],
  data() {
    return {
      listLoading: false, // 表格loading
      calLoading: false,
      excelLoading: false, // 导出loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      excelTitle: '币币资金流水列表',
      coinList: [], //币种列表
      // totalExFee: "", // 手续费总计
      // totalArrivalAccount: "", // 到账总计
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
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
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
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      if (!this.search_params_obj.coinId) {
        this.$message({ type: 'error', message: '币种必须选择!', duration: 2000 });
        return;
      }

      this.calLoading = true;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getCoinChangeQuerySum(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          let coin = this.searchCofig[2]['list'].filter(v => v.value == this.search_params_obj.coinId)[0].label;
          this.$alert(`<p>币种：${coin}</p><p>增加金额总计：${getObj.addAmountSum}</p><p>减少金额总计：${getObj.subAmountSum}</p>`, '统计结果', {
            dangerouslyUseHTMLString: true,
          }).catch(()=>{});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        appId:3,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.queryCoinChange(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        // records.forEach(v => {
        //   debugger
        //   v.coinName = this.coinList.filter(f => f.value == v.coinId)[0].label;
        // });
        // //console.log(records)
        // this.totalExFee = totalExFee;
        // this.totalArrivalAccount = totalArrivalAccount;
        this.list = records;
        this.dataList = records;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : val.replace(/\//gi, '-');
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      params.appId = 3;
      Object.assign(params, this.search_params_obj);
      const res = await $api.queryCoinChange(params);
      // if (res.data.data && res.data.data.records) {
      //   res.data.data.records.forEach(v => {
      //     v.coinName = this.coinList.filter(f => f.value == v.coinId)[0].label;
      //   });
      // }
      this.excelLoading = false;
      return res;
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
      if (this.search_params_obj.coinName) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)) {
          let tmpName = '';
          tmpName = this.coinList.filter(v => v['value'] == this.search_params_obj.coinName)[0].label;
          this.search_params_obj.coinName = tmpName;
        }
      }
    },
  },
  // mounted() {},
  mounted() {
    // debugger
    // window.a = this
    // if (this.isInTags()) {
    //   return;
    // }
    this.list = []; //委托列表
    this.dataList = []; // 用于导出的数据
    this.configs = []; // 委托列表列配置
    this.searchCofig = []; // 搜索框配置
    this.search_params_obj = {}; // 搜索框对象
    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.total = 0; // 总条数
    this.pages = 0; // 总页数

    this.configs = coinFundsCol;
    this.searchCofig = this.$util.clone(coinFundsConfig);

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.$store.dispatch('common/getCoinList').then(() => {
      // this.searchCofig[2]['list'] = this.$store.state.common.coinlist;
      // this.coinList = this.$store.state.common.coinlist;
                 let list = this.$store.state.common.coinlist;
      let getList = list.filter(f => f.label == 'USDT') || [];
            this.searchCofig[2]['list'] = getList;
      this.coinList = getList;

      const uid = this.$route.query.uid;
      const coinId = this.$route.query.coinId;
      if (uid) {
        // 从列表页传参
        this.searchCofig[1].value = uid;
        this.searchCofig[2].value = coinId;
        this.search_params_obj = { uid: uid, coinName: coinId };
        this.getList();
      } else {
        this.getList();
      }
    });
  },
};
</script>
<style scope lang="scss">
.coinFundsPay-container {
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
