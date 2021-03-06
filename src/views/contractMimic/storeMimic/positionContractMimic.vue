<template>
  <div class="positionContract-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
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
import { positionContractMockCol, positionContractMockConfig } from '@/config/column/contractMimic';
import $api from '@/api/api';
import Precision from '@/utils/number-precision';
import activePage from '@/mixin/keepPage';

export default {
  name: 'PositionContract',
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
      getId: 0,
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
      this.searchCofig.forEach((v) => {
        v['value'] = '';
        if (v.type == 'text_rank') {
          v['value'] = [];
        }
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
        isMocke: 1,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getPositionEntrustPagination(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        records.forEach((v) => {
          v['strongPrice'] = (v['strongPrice'] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
          v['fixedDeposit'] = (v['fixedDeposit'] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');

          v['marginRatio'] = (Precision.times(v['marginRatio'], 100) + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') + '%';
          v['rateReturn'] = (Precision.times(v['rateReturn'], 100) + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') + '%';
        });
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
      // 交易对获取
      this.$store.dispatch('common/getSymbolMimicListAnalystAll').then(() => {
        this.symbollist = this.$store.state.common.symbolMimicListAnalystAll;

        this.searchCofig[3]['list'] = this.symbollist;
      });
    },
  },
  mounted() {
    this.configs = positionContractMockCol;
    this.searchCofig = this.$util.clone(positionContractMockConfig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getId = this.$route.query.uid;
    if (this.getId) {
      this.searchCofig[1].value = this.getId;
      this.search_params_obj = { uid: this.getId };
      this.getList();
      this.getSymbolList();
    } else {
      this.getList();
      this.getSymbolList();
    }
  },
  activated() {
    if (this.isInTags()) {
      return;
    }

    this.list = [];
    this.configs = [];
    this.searchCofig = [];
    this.search_params_obj = {};

    this.configs = positionContractMockCol;
    this.searchCofig = this.$util.clone(positionContractMockConfig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.getId = this.$route.query.uid;
    if (this.getId) {
      this.searchCofig[1].value = this.getId;
      this.search_params_obj = { uid: this.getId };
      this.getList();
      this.getSymbolList();
    } else {
      this.getList();
      this.getSymbolList();
    }
  },
};
</script>
<style scope lang="scss">
.positionContract-container {
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
