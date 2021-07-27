<template>
  <div class="runRecord-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
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
import { runRecordCol, runRecordColNoBtn, runRecordConfig } from '@/config/column/assetManage';
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';
import utils from '@/utils/util';

export default {
  name: 'RunRecord',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  mixins: [activePage],
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      list: [], //委托列表
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
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 数据列表
    async getList() {
      if (!this.search_params_obj.uid) {
        this.$message({ message: 'UID为必填字段!', type: 'error' });
        return;
      }
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getSubExpendRecord(params);
      if (res) {
        // this.list = res.data.data;
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = +total;
        this.current_page = current;
        this.pages = pages;
        this.listLoading = false;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    initFunc() {
      // let authObj = this.$util.getAuthority('RunRecord', runRecordCol, runRecordColNoBtn);
      this.configs = runRecordCol;
      // this.isCURDAuth = authObj.isAdd;

      this.searchCofig = this.$util.clone(runRecordConfig);

      this.$store.dispatch('common/getCoinList').then(() => {
        this.searchCofig[2].list = this.$store.state.common.coinlist;
      });

      let tmpId = this.$route.query.uid;
      let optId = this.$route.query.optType;
      if (tmpId) {
        this.searchCofig[1].value = tmpId;
        // this.searchCofig[4].value = optId;, optType: optId
        this.search_params_obj = { uid: tmpId };
        this.getList();
      } else {
        this.getList();
      }
    },
  },
  // mounted() {
  //   this.initFunc();
  // },
  activated() {
    if (this.isInTags()) {
      return;
    }

    this.list = []; //委托列表
    this.configs = []; // 委托列表列配置
    this.searchCofig = []; // 搜索框配置
    this.search_params_obj = {}; // 搜索框对象
    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.total = 0; // 总条数
    this.pages = 0; // 总页数

    this.initFunc();
  },
};
</script>
<style lang="scss">
.runRecord-container {
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
