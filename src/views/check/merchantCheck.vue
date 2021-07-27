<template>
  <div class="mersub-container">
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
    <!-- 驳回通过弹窗 -->
    <el-dialog :visible.sync="rejectVisible" width="500px" title="审核">
      <el-form :model="rejectForm" ref="rejectForm" :rules="rejectRules">
        <el-form-item label="审核意见" prop="mark">
          <el-input type="textarea" placeholder="请输入意见" v-model="rejectForm.mark"></el-input> </el-form-item
      ></el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="confirmReject(1)">通过</el-button>
        <el-button type="primary" @click.stop="confirmReject(2)">驳回</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { merchantCol, merchantColNoBtn, merchantColConfig } from '@/config/column/check';
import $api from '@/api/api';
import { formatTime } from '../../utils';
export default {
  components: {
    Btable,
    Bsearch,
  },
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
      row: {}, // 当前操作的数据
      rejectVisible: false, // 是否显示驳回弹出框
      rejectForm: {
        mark: '',
      },
      rejectRules: {
        mark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    async doHandle(data) {
      const { fn, row } = data;
      this.row = row;
      if (fn === 'pass') {
        // 驳回
        this.rejectVisible = true;
        this.$nextTick(() => {
          this.$refs['rejectForm'].resetFields();
        });
      }
    },
    async confirmReject(status) {
      let params = {
        applyId: this.row.id,
        desc: this.rejectForm.mark,
        status: status,
      };
      const res = await $api.getMerchantApplyCheck(params);
      if (res) {
        this.$message({ type: 'success', message: '审核操作成功!' });
        this.getList();
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
        v['value'] = '';
      });
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
      const res = await $api.getMerchantList(query_data);
      if (res) {
        const { list, total, pageNum, pages } = res.data.result.page;
        this.total = +total;
        this.pages = +pages;
        this.current_page = pageNum;
        this.list = list;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD hh:mm:ss');
    },
  },

  mounted() {
    // let authStatus = this.$util.getAuthority("Merchant");
    // if (authStatus === 2) {
    //   this.configs = merchantColNoBtn;
    // } else {
    //   this.configs = merchantCol;
    // }
    this.configs = merchantCol;
    this.searchCofig = this.$util.clone(merchantColConfig);
    this.getList();
  },
};
</script>

<style lang="scss">
.mersub-container {
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
