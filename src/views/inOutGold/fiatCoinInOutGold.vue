<template>
  <div class="fiatCoinInOutGold-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :calLoading="calLoading" :calTotal="true" @do-calTotal="calTotal" />
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
import { fiatCoinInOutGoldCol, fiatCoinInOutGoldConfig } from '@/config/column/inOutGold';
import $api from '@/api/api';

export default {
  name: 'FiatCoinInOutGold',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      calLoading: false,
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
      typeObj: {
        1: '法币入金',
        2: '法币出金',
      },
    };
  },
  watch: {
    'search_params_obj.type': function (newVal, oldVal) {
      //console.log('newVal',newVal)
      if (newVal == 1) {
        this.searchCofig[3]['value'] = '';
        this.searchCofig[3]['list'] = [
          { label: '法币买入', value: '36' },
          { label: '申诉买家赢，法币买入', value: '37' },
          { label: '法币交易返佣', value: '40' },
        ];
      } else if (newVal == 2) {
        this.searchCofig[3]['value'] = '';
        this.searchCofig[3]['list'] = [
          { label: '法币卖出', value: '32' },
          { label: '法币交易手续费', value: '82' },
          { label: '划出至币币', value: '11' },
          { label: '划出至合约', value: '52' },
        ];
      } else {
        this.searchCofig[3]['value'] = '';
        this.searchCofig[3]['list'] = [
          { label: '法币买入', value: '36' },
          { label: '申诉买家赢，法币买入', value: '37' },
          { label: '法币交易返佣', value: '40' },
          { label: '法币卖出', value: '32' },
          { label: '法币交易手续费', value: '82' },
          { label: '划出至币币', value: '11' },
          { label: '划出至合约', value: '52' },
        ];
      }
    },
  },
  methods: {
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
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
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data;
      this.calLoading = true;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      let tmpName = '';
      if (this.search_params_obj.coinId) {
        tmpName = this.symbollist.filter((v) => v['value'] == this.search_params_obj.coinId)[0].label;
      } else {
        tmpName = '全部';
      }
      const res = await $api.getFiatCoinInOutGoldTotal(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(`<p>出入金类型：  ${this.typeObj[params.type] || '全部'}</p>  <p>币种：${tmpName}</p> <p>数量：${getObj.amount}</p>  `, '统计结果', {
            dangerouslyUseHTMLString: true,
          }).catch(() => {});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getFiatCoinInOutGoldList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
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
      // 币种获取
      this.$store.dispatch('common/getCoinList').then(() => {
        this.symbollist = this.$store.state.common.coinlist;
        this.searchCofig[4]['list'] = this.symbollist;
      });
    },
  },
  mounted() {
    this.configs = fiatCoinInOutGoldCol;
    this.searchCofig = this.$util.clone(fiatCoinInOutGoldConfig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style scope lang="scss">
.fiatCoinInOutGold-container {
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
