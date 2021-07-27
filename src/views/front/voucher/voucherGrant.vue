<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-12-21 12:07:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="voucherGrant-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :exportExcel="true" @do-exportExcel="exportExcel" />
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
import { voucherGrantCol, voucherGrantConfig } from '@/config/column/voucher';
import $api from '@/api/api';
import utils from '@/utils/util';
import activePage from "@/mixin/keepPage"

export default {
  name: 'VoucherGrant',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  mixins:[activePage],
  data() {
    return {
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
      getId: 0, // 列表页传入的参数
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
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.grantExperienceList(query_data);
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
  },
  // mounted(){
  mounted() {

    this.list = [];
    this.dataList = [];
    this.configs = [];
    this.searchCofig = [];
    this.search_params_obj = {};
    this.current_page = 1;

    this.configs = voucherGrantCol;
    this.searchCofig = this.$util.clone(voucherGrantConfig);
    this.$store.dispatch('common/getSymbolListContract').then(() => {
      this.searchCofig[1]['list'] = this.$store.state.common.symbollistContract;
    });

    this.getId = this.$route.query.uid;
    if (this.getId) {
      this.searchCofig[2].value = this.getId;
      this.search_params_obj = { uid: this.getId };
      this.getList();
    } else {
      this.getList();
    }
  }
};
</script>
<style scope lang="scss">
.voucherGrant-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
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
