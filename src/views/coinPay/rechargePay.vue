<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-12-01 11:44:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="rechargePay-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :excelLoading="excelLoading" :exportExcel="btnArr.includes('excel')" @do-exportExcel="exportExcel" :calLoading="calLoading" :calTotal="true" @do-calTotal="calTotal" />
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
import { rechargeCol, rechargeConfig } from '@/config/column/coinPay';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'RechargePay',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      calLoading: false,
      excelLoading: false, // 导出loadiing
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
       
      symbollist:[],
      btnArr:[]
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
      const res = await $api.getCPDepositQueryList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
        this.listLoading = false;
      }
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getCPDepositQueryList(params);
      this.excelLoading = false;
      if (res) {
        return res;
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
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
    async getRechargeChainName() {
      const res = await $api.apiGetRechargeChainName({});
      if (res) {
        let arr = res.data.data;
        this.searchCofig[10]['list'] = arr.map((v) => {
          return {
            label: v.chainName,
            value: v.chainName,
          };
        });
      }
    },
    async calTotal(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      if (this.calLoading) return;
      this.calLoading = true;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };

      Object.assign(params, this.search_params_obj);
      let tmpName = '';
      if (this.search_params_obj.coinId) {
        tmpName = this.symbollist.filter((v) => v['value'] == this.search_params_obj.coinId)[0].label;
      } else {
        tmpName = '全部';
      }
      const res = await $api.apiGetRechargePayTotal(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(`   <p>币种：${tmpName}</p>  <p>充币数量总计：${getObj.sum}</p>   <p>到账数量总计：${getObj.arrive}</p>`, '统计结果', {
            dangerouslyUseHTMLString: true,
          }).catch(() => {});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('RechargePay', rechargeCol, [])
    this.btnArr = authObj.btnArr || [] || []
    this.configs = rechargeCol;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(rechargeConfig);
    this.$store.dispatch('common/getCoinList').then(() => {
      let list = this.$store.state.common.coinlist;
      // this.searchCofig[3]['list'] = this.$store.state.common.coinlist;
      this.searchCofig[3]['list'] = list.filter((f) => f.label == 'USDT') || [];
      this.symbollist = list.filter((f) => f.label == 'USDT') || [];
    });

    let tmpId = this.$route.query.uid;
    if (tmpId) {
      this.searchCofig[2].value = tmpId;
      this.search_params_obj = { uid: tmpId };
      this.getList();
    } else {
      this.getList();
    }
    this.getRechargeChainName();
      
  },
};
</script>
<style scope lang="scss">
.rechargePay-container {
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
