<template>
  <div class="account-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" calText="交易统计" :calTotal="true" @do-calTotal="calTotal" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <div>
        <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
      </div>
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
import { exchangeStatisticCol, exchangeStatisticNoBtn, exchangeStatisticConfig } from '@/config/column/dashboard';
import $api from '@/api/api';

export default {
  name: 'ExchangeStatistic',
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      delBtnLoading: false, // 移出提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      pairList: [], // 交易对列表
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
      // this.searchCofig[1].value = 1;
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
      if (!this.search_params_obj.coinMarket) {
        this.$message({ type: 'error', message: '交易对必须选择!', duration: 2000 });
        return;
      }
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.orderEntrustAmountTotal(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(
            `<p>交易对：${this.search_params_obj.coinMarket}</p><p>成交额：${getObj.turnover}</p><p>均价：${getObj.averagePrice}</p>`,
            '统计结果',
            {
              dangerouslyUseHTMLString: true,
            },
          ).catch(()=>{});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
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
      const res = await $api.orderEntrustAmount(params);
      if (res) {
        // this.list = res.data.data;
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        // this.searchCofig[1].value = 1;
        // let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        // let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        // params.endTime = nowV.replace(/\//gi,"-");
        // params.startTime = befV.replace(/\//gi,"-");
        // // 组件时间初始必须format格式
        // this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.pairList.filter(v => v['value'] == this.search_params_obj.coinMarket)[0].label;
          this.search_params_obj.coinMarket = tmpName;
        }
      }
    },
  },
  mounted() {
    this.configs = exchangeStatisticCol;
    this.searchCofig = this.$util.clone(exchangeStatisticConfig);
    this.$store.dispatch('common/getSymbolList').then(() => {
      this.searchCofig[1]['list'] = this.$store.state.common.symbollist;
      this.pairList = this.$store.state.common.symbollist;
    });
    this.getList();
  },
};
</script>
<style lang="scss">
.account-container {
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
