<template>
  <div class="authGroup-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="goNewPage">创建分组</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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
import { authGroupCol, authGroupColNoBtn, authGroupConfig } from "@/config/column/customer";
import $api from "@/api/api";
import utils from "@/utils/util";

export default {
  name: 'AuthGroup',
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
    doHandle(data) {
      const { fn, row } = data;
      if (fn === "edit") {
        this.$router.push({path:'/customer/groupAuthDetail',query:{id:row.recdId,createTime:this.formatTime(row.createTime),groupName:row.groupName}});
      } else if (fn === "del") {
        this.$confirm("确认删除吗?", "温馨提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            const res = await $api.delSubGroup({
              groupId: row.recdId,
            });
            if (res) {
              this.$message({ type: "success", message: "删除成功" });
              this.getList();
            }
          })
          .catch(() => {});
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
    goNewPage() {
      this.$router.push({ name: "AuthGroupDetail" });
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
      const res = await $api.checkMerchantGroupRecd(query_data);
      if (res) {
        const { list, total, pageNum, pages } = res.data.result;
        this.total = +total;
        this.pages = +pages;
        this.current_page = pageNum;
        this.list = list;
        this.dataList = list;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return ~(val+"").indexOf("-") ? val : this.$util.dateFormat(val, "YYYY-MM-DD hh:mm:ss");
    },
  },
  mounted() { 
     let authObj = this.$util.getAuthority('AuthGroup', authGroupCol, authGroupColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(authGroupConfig);
    this.getList();
  },
};
</script>
<style scope lang="scss">
.authGroup-container {
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
}
</style>
