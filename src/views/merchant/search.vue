<template>
  <div class="search-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
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
import Bsearch from "@/components/search/b-search";
import Btable from "@/components/table/b-table";
import { searchCol, searchColNoBtn, searchConfig } from "@/config/column/merchant";
import $api from "@/api/api";
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
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
    };
  },
  filters: {
    userType(val) {},
  },
  methods: {
    handleUpdate(type) {
      const beforeStatus = this[type];
      this.$confirm(`确认更改状态?`, "提示", { confirmButtonText: "确定", cancelButtonText: "取消" })
        .then(async () => {
          let params = {
            userId: this.current_row.userId,
            operate: this.operareObj[type],
            status: !!this[type] ? 0 : 1,
          };
          const res = await $api.updateOperateStatus(params);
          if (res) {
            this.$message({ message: res.data.message, type: "success" });
            this[type] = !beforeStatus;
            this.getList();
          } else {
            this.$message({ message: "更新失败", type: "danger" });
          }
        })
        .catch(() => {
          //console.log("cancel");
        });
    },
    doHandle(data) {
      const { fn, row } = data;
      if (fn === "detail") {
        this.$router.push({ name: "SearchDetail", params: { id: row.userId } });
      }
    },
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
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 首屏表格
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        coinName: "USDT"
      };
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getMerchantList(params);
      if (res) {
        const { list, total, pages, pageNum } = res.data.result.page;
        this.total = +total;
        this.pages = +pages;
        this.current_page = +pageNum;
        this.list = list;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return ~(val+"").indexOf("-") ? val : this.$util.dateFormat(val, "YYYY-MM-DD hh:mm:ss");
    },
  },

  mounted() {
    // let authStatus = this.$util.getAuthority("Search");
    // if (authStatus === 2) {
    //   this.configs = searchColNoBtn;
    //   this.isCURDAuth = false;
    // } else {
    //   this.configs = searchCol;
    // }
    this.configs = searchCol;
    this.searchCofig = searchConfig;
    this.getList();
  },
};
</script>

<style lang="scss" scope>
.search-container {
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
