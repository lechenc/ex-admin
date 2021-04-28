<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-07-29 14:53:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="transaction-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
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
import Bsearch from "@/components/search/b-search";
import Btable from "@/components/table/b-table";
import { transactionAdCol, transactionAdColNoBtn, transactionAdConfig } from "@/config/column/merchant";
import $api from "@/api/api";
import utils from "@/utils/util";

export default {
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
    };
  },
  methods: {
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v["value"] = "";
      });
      this.getList();
    },
    exportExcel() {
      utils.exportData.apply(this, [0]);
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
      if (this.search_params_obj.startDate) {
        this.search_params_obj.endDate = this.formatTime(this.search_params_obj.endDate);
        this.search_params_obj.startDate = this.formatTime(this.search_params_obj.startDate);
      }
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getCashoutAuditList(query_data);
      if (res) {
        const { list, total, pageNum, pages } = res.data.result.pageInfo;
        this.total = +total;
        this.pages = +pages;
        this.current_page = +pageNum;
        this.list = list;
        this.dataList = list;
        this.listLoading = false;
				// if(list.length<1) {
				// 	this.sumInfo = {sumApiStock: "0",sumApiAmount: "0",sumFee: "0"}
				// }else{
				// 	this.sumInfo = res.result.sumInfo
				// }
      }
    },
    formatTime(val) {
      return ~(val+"").indexOf("-") ? val : this.$util.dateFormat(val, "YYYY-MM-DD hh:mm:ss");
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("TransactionAd");
    // if (authStatus === 2) {
    //   this.configs = transactionAdColNoBtn;
        //   this.isCURDAuth = false;
    // } else {
    //   this.configs = transactionAdCol;
    // }
    this.configs = transactionAdCol;
    this.searchCofig = transactionAdConfig;
    this.getList();
  },
};
</script>
<style scope lang="scss">
.transaction-container {
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
