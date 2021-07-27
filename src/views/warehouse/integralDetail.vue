<template>
  <div class="account-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :no-reset="true" />
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
import { integralDetailCol, integralDetailColNoBtn, integralDetailConfig } from '@/config/column/warehouse';
import $api from '@/api/api';
import activePage from "@/mixin/keepPage"

export default {
	name: 'WarehouseIntegralDetail',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
	mixins:[activePage],
  data() {
    return {
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      getId: 0, // 从列表页得到的数值
    };
  },
  methods: {
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      this.getDetail();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.getDetail();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getDetail();
    },
    // 数据列表
    async getDetail() {
      if (this.listLoading) return;
      const end = parseInt(new Date().getTime() / 1000);
      let start = end;
      start = start - 3600 * 24 * 2;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.warehouseIntegralDetail(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('-') ? val : parseInt(new Date(val).getTime() / 1000);
    },
  },
  // mounted() {
  //   this.getId = this.$route.query.id;
  //   this.configs = integralDetailCol;
  //   this.searchCofig = this.$util.clone(integralDetailConfig);
  //   // 从列表页传入的id
  //   this.searchCofig[1].value = this.getId;

  //   if (this.getId) {
  //     this.searchCofig[1].value = this.getId;
  //     this.search_params_obj = { queryCriteria: this.getId };
  //     this.getDetail();
  //   } else {
  //     this.getDetail();
  //   }
  // },
	activated(){
		  if(this.isInTags()){
        return;
      }
      this.list= []; //委托列表
      this.configs= []; // 委托列表列配置
      this.searchCofig= []; // 搜索框配置
      this.search_params_obj= {}; // 搜索框对象
      this.current_page= 1; // 当前页码
      this.pageSize= 10; // 当前每页显示页码数
      this.total= 0; // 总条数
      this.pages= 0; // 总页数
      this.getId= 0; // 从列表页得到的数值

    this.getId = this.$route.query.id;
    this.configs = integralDetailCol;
    this.searchCofig = this.$util.clone(integralDetailConfig);
    // 从列表页传入的id
    this.searchCofig[1].value = this.getId;

    if (this.getId) {
      this.searchCofig[1].value = this.getId;
      this.search_params_obj = { queryCriteria: this.getId };
      this.getDetail();
    } else {
      this.getDetail();
    }
	}
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
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
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
