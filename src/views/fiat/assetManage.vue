<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-08-05 20:33:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="appealJudge-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :exportExcel="btnArr.includes('excel')" @do-exportExcel="exportExcel" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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
    <!-- 驳回通过弹窗 -->
    <el-dialog :visible.sync="rejectVisible" width="500px" title="驳回">
      <el-form :model="rejectForm" ref="rejectForm" :rules="rejectRules">
        <el-form-item label="驳回理由" prop="mark">
          <el-input type="textarea" placeholder="请输入驳回理由" v-model="rejectForm.mark"></el-input> </el-form-item
      ></el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="rejectVisible = false" style="margin-right:50px;">取消</el-button>
        <el-button type="primary" @click.stop="confirmReject" :loading="btnLoading">驳回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { assetManageCol, assetManageColNoBtn, assetManageConfig } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      btnLoading: false, // 提交 loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      curRow: {}, // 当前操作的数据
      rejectVisible: false, // 是否显示驳回弹出框
      rejectForm: {
        mark: '',
      },
      rejectRules: {
        mark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      btnArr:[]
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      // 审核状态 1是成功，2是失败
      if (fn === 'checkOut') {
        // 驳回
        this.rejectVisible = true;
        this.$nextTick(() => {
          this.$refs['rejectForm'].resetFields();
        });
      } else {
        // 通过
        this.$confirm('确定通过？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              recdId: this.curRow.recdId,
              status: 1,
            };
            const res = await $api.updateAuditAssetCeRecdStatus(params);
            if (res) {
              this.$message({ type: 'success', message: '通过操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消删除' });
          });
      }
    },
    async confirmReject() {
      const params = {
        recdId: this.curRow.recdId,
        status: 2,
        auditComment: this.rejectForm.mark,
      };
      this.btnLoading = true;
      const res = await $api.updateAuditAssetCeRecdStatus(params);
      if (res) {
        this.$message({ type: 'success', message: '驳回操作成功!' });
        this.rejectVisible = false;
        this.getList();
      }
      this.btnLoading = false;
    },
    async updateAuditAssetCeRecdStatus(recdId, status) {
      const params = {
        recdId: this.curRow.recdId,
        status: status,
      };
      const res = await $api.updateAuditAssetCeRecdStatus(params);
      if (res) {
        this.$message({ type: 'success', message: '操作成功!' });
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
      const res = await $api.checkAuditAssetCeRecd(query_data);
      if (res) {
        let { list, total, pageNum, pages } = res.data.result;
        // 只有处于待审核状态的才能点击审核操作
        list.forEach(v => {
          v['isclick'] = parseInt(v['auditStatus']) === 0 ? false : true;
        });
        this.list = list;
        this.dataList = list;
        this.total = +total;
        this.pages = +pages;
        this.current_page = +pageNum;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD hh:mm:ss');
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("FiatAssetManage");
    // if (authStatus === 2) {
    //   this.configs = assetManageColNoBtn;
    //   this.isCURDAuth = false;
    // } else {
    //   this.configs = assetManageCol;
    // }
    let authObj = this.$util.getAuthority('AssetManage', assetManageCol, []);
    this.btnArr = authObj.btnArr || [] || [];
    this.configs = assetManageCol;
    this.searchCofig = this.$util.clone(assetManageConfig);
    this.getList();
  },
};
</script>
<style scope lang="scss">
.appealJudge-container {
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
