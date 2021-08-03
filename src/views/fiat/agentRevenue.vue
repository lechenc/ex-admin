<template>
  <div class="agentRevenue-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="true"
        @do-exportExcel="exportExcel"
        :calLoading="calLoading"
        :calTotal="true"
        @do-calTotal="calTotal"
      />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="page-detail">当前页面收益数量{{ pageAmountSum }}&nbsp; &nbsp;总计收益数量{{ amountSum }}</div>
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
import { agentRevenueCol, agentRevenueConfig } from '@/config/column/fiat';
import Precision from '@/utils/number-precision';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'AgentRevenue',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
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
      
      coinList: [], //币种列表
      amountSum: '', // 总计收益数量
      pageAmountSum: '', // 当前页面收益数量
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
      const res = await $api.getTpGetGenefit(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data.page;
        records.forEach(v=>{
          v.rate = Precision.times(v.rate, 100) + "%"
        })
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
        this.listLoading = false;
        this.amountSum = res.data.data.amountSum;
        this.pageAmountSum = res.data.data.pageAmountSum;
      }
    },
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      if (!(this.search_params_obj.startTime || this.search_params_obj.advertType)) {
        this.$message({ type: 'error', message: '时间或者订单类型至少选择选择其中一项!', duration: 2000 });
        return;
      }
      this.calLoading = true;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getTpGetBenefitSum(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          let txt = `<p>合计统计：</p>`;
          if (this.search_params_obj.startTime) {
            txt += `时间：${this.$util.dateFormat(this.search_params_obj.startTime * 1000, 'YYYY/MM/DD')} - ${this.$util.dateFormat(
              this.search_params_obj.endTime * 1000,
              'YYYY/MM/DD',
            )}`;
          }
          if (this.search_params_obj.uid) {
            txt += `<p>UID: ${this.search_params_obj.uid}</p>`;
          }
          if (this.search_params_obj.advertType) {
            const tm1 = this.searchCofig[3]['list'].filter(v => v.value == this.search_params_obj.advertType)[0].label;
            txt += `<p>订单类型: ${tm1}</p>`;
          }
          getObj.amount = (getObj.amount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
          txt += `<p>收益数量总计：${getObj.amount}</p>`;
          this.$alert(txt, '统计结果', {
            dangerouslyUseHTMLString: true,
          }).catch(()=>{});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getTpGetGenefit(params);
      if (res.data.data && res.data.data.records) {
        const records = res.data.data.records
        records.forEach(v=>{
          v.rate = Precision.times(v.rate, 100) + "%"
        })
      }
      this.excelLoading = false;
      return res;
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
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
  },
  mounted() {
    this.configs = agentRevenueCol;
    this.searchCofig = this.$util.clone(agentRevenueConfig);

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.getList();
  },
};
</script>
<style scope lang="scss">
.agentRevenue-container {
  padding: 4px 10px 10px 10px;
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  .container-top {
    margin: 10px 0;
  }
  .page-detail {
    margin: 25px 0 0 0;
    font-size: 13px;
    color: #606266;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    span {
      display: inline;
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }
}

@media screen and(max-width: 750px) {
  .page-detail {
    margin: 25px 0 0 0 !important;
    display: block !important;
  }
}
</style>
