<template>
  <div class="voucherData-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :calLoading="calLoading" :calTotal="true" @do-calTotal="calTotal" />
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
import { voucherDataCol, voucherDataConfig } from '@/config/column/voucher';
import $api from '@/api/api';

export default {
  name: 'VoucherData',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      isCURDAuth: true, // 是否可修改路径配置
      calLoading: false,
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
      symbollist: [],
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
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD')];
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
      if(!this.search_params_obj.startTime || !this.search_params_obj.coinMarket){
         this.$message({ type: 'error', message: '时间 和 合约币对 必选!' });
        return;
      }
      this.calLoading = true;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getCouponProfitStatistics(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(
            `<p>时间段：${getObj.period}</p>
            <p>合约交易对：${getObj.coinMarket}</p>
            <p>合计盈亏总计：${ this.cutLength(getObj.warehouseProfit)}</p>`,
            '统计结果',
            {
              dangerouslyUseHTMLString: true,
            },
          ).catch(() => {});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
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
      const res = await $api.getProfitRecord(params);
      if (res && res.data && res.data.data) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
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
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmp = '';
          tmp = this.symbollist.filter(v => v['value'] == this.search_params_obj.coinMarket)[0].label;
          this.search_params_obj.coinMarket = tmp;
        }
      }
    },
    formatTime(val) {
      let tmp = ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
      return (tmp + '').slice(0,10)
    },
    cutLength(val){
      return (val + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3')
    }
  },
  mounted() {
    this.configs = voucherDataCol;
    this.searchCofig = this.$util.clone(voucherDataConfig);

    this.$store.dispatch('common/getSymbolListContract').then(() => {
      this.symbollist = this.$store.state.common.symbollistContract;
      this.searchCofig[1]['list'] = this.$store.state.common.symbollistContract;
    });

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style lang="scss">
.voucherData-container {
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
