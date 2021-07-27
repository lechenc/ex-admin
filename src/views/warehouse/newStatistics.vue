<template>
  <div class="newStatistics-container">
    <div class="container-top">
      <div class="line">新增统计</div>
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
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { newStatisticsCol, newStatisticsColNoBtn } from '@/config/column/warehouse';
import $api from '@/api/api';

export default {
	name: 'WarehouseNewStatistics',
  components: {
    Btable,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 1000, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
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
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.warehouseGetRegisterHistory(params);
      if (res) {
        this.list = res.data.data;
        // const { records, total, current, pages } = res.data.data;
        // this.list = records;
        this.total = this.list.length;
        this.current_page = 1;
        this.pages = 1;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    this.configs = newStatisticsCol;
    // this.searchCofig = accountConfig;

    this.getList();
  },
};
</script>
<style lang="scss">
.newStatistics-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 15px 0;
    .line {
      font-size: 18px;
      font-weight: 500;
      color: #333;
      span {
        font-size: 16px;
        color: #606266;
      }
    }
    .line::before {
      content: '';
      border-left: 5px solid #03a7f0;
      margin-right: 10px;
    }
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
