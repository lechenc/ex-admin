<template>
  <div class="validatedUserlist-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :excelLoading="excelLoading" :exportExcel="true" @do-exportExcel="exportExcel" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"></el-pagination>
    </div>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { validatedUserlistCol, validatedUserlistColNoBtn, validatedUserlistConfig } from '@/config/column/user';
import $api from '@/api/api';
import utils from '@/utils/util';
export default {
  name: 'ValidatedUserlist',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
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
      excelTitle: '有效用户列表',
    };
  },
  filters: {
    userType(val) {},
  },
  methods: {
    doHandle(data) {
      const { fn, row } = data;
      if (fn === 'detail') {
        this.$router.push({
          path: '/user/validatedUserlistDetail',
          query: {
            id: row.uid,
          },
        });
      }
    },
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
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    // 首屏表格
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getValidatedUserList(params);
      if (res) {
        const { records, total, pages, current } = res.data.data;
        this.total = +total;
        this.pages = +pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getvalidatedUserList(params);
      this.excelLoading = false;
      return res;
    },
    // 时间戳
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        // 组件时间初始必须format格式
        let befV = parseInt(new Date(this.toDay).getTime() / 1000);
        let nowV = parseInt(new Date(this.ago).getTime() / 1000);
        this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.today, 'YYYY/MM/DD HH:mm:ss')];
        params.endTime = befV;
        params.startTime = nowV;
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
    let authObj = this.$util.getAuthority('ValidatedUserList', validatedUserlistCol, validatedUserlistColNoBtn);
    this.configs = authObj.val;

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(validatedUserlistConfig);
    this.getList();
  },
};
</script>

<style lang="scss">
.validatedUserlist-container {
  padding: 4px 10px 10px 10px;

  .container-top {
    margin: 10px 0;
  }

  .container-footer {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
}
</style>
