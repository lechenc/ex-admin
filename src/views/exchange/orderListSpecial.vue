<!--
 * @Author: your name
 * @Date: 2020-04-26 18:17:07
 * @LastEditTime: 2020-11-03 15:35:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\aIphaex-bg\src\views\trade\order.vue
 -->
<template>
  <div class="orderlistspecail-container">
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
import { orderCol, orderCofig, rowCol } from '@/config/column/exchange';
import $api from '@/api/api';
export default {
  name: "OrderListSpecial",
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
      calLoading:false,
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
      if (!this.search_params_obj.type) {
        this.$message({ type: 'error', message: '委托方向必须选择!', duration: 2000 });
        return;
      }
      if (!this.search_params_obj.priceType) {
        this.$message({ type: 'error', message: '委托类型必须选择!', duration: 2000 });
        return;
      }
      if (!this.search_params_obj.coinMarket) {
        this.$message({ type: 'error', message: '交易对必须选择!', duration: 2000 });
        return;
      }
      this.calLoading = true;
      const params = { userType: 2 };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getOrderEntrustTotal(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          const tm1 = this.searchCofig[4]['list'].filter(v => v.value == this.search_params_obj.type)[0].label;
          const tm2 = this.searchCofig[3]['list'].filter(v => v.value == this.search_params_obj.priceType)[0].label;
          // const tm3 = this.searchCofig[5]["list"].filter(v => v.value == this.search_params_obj.exchangeId)[0].label
          this.$alert(
            `<p>委托方向：${tm1}</p><p>委托类型：${tm2}</p><p>交易对：${this.search_params_obj.coinMarket}</p><p>委托量总计：${getObj.amount}</p>`,
            '统计结果',
            {
              dangerouslyUseHTMLString: true,
            },
          ).catch(()=>{});
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
        userType: 2,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getOrderList(query_data);
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
        this.searchCofig[0].value = [
          this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
          this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss'),
        ];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.symbollist.filter(v => v['value'] == this.search_params_obj.coinMarket)[0].label;
          this.search_params_obj.coinMarket = tmpName;
        }
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getSymbolList').then(() => {
        this.searchCofig[5]['list'] = this.$store.state.common.symbollist;
        this.symbollist = this.$store.state.common.symbollist;
      });
    },
  },
  created() {
    this.configs = orderCol;
    this.searchCofig = this.$util.clone(orderCofig);
    // 初始化今天，和以前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>

<style scope lang="scss">
.orderlistspecail-container {
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
  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        margin-right: 40px;
        font-size: 18px;
        line-height: 40px;
      }
    }
  }
}
</style>
