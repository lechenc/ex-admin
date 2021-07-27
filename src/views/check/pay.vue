<template>
  <div class="pay-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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
    <!-- 驳回通过弹窗 -->
    <el-dialog :visible.sync="rejectVisible" width="500px" title="驳回">
      <el-form :model="rejectForm" ref="rejectForm" :rules="rejectRules">
        <el-form-item label="驳回理由" prop="auditComment">
          <el-input type="textarea" rows="5" placeholder="请输入驳回理由" v-model="rejectForm.auditComment"></el-input> </el-form-item
      ></el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="rejectVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmReject" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
    <!-- 审核弹窗 -->
    <el-dialog :visible.sync="checkVisible" width="1000px" title="当前待审核">
      <Btable :listLoading="checkListLoading" :data="checkList" :configs="checkConfigs" @do-handle="checkDoHandle" />
    </el-dialog>
    <!-- 查看详情弹窗 当前待绑定 详情-->
    <el-dialog :visible.sync="scanVisible" width="1000px" title="详情">
      <Btable :listLoading="scanListLoading" :data="scanList" :configs="scanConfigs" @do-handle="scanDoHandle" />
    </el-dialog>
    <!-- 验证码弹窗 -->
    <el-dialog title="验证收款码" :visible.sync="qrcodeShow" width="500px">
      <div style="padding-left:20px;width:100%;">
        <vue-qr :text="analysisQrCode" :margin="0" colorDark="#000" colorLight="#fff" :size="420"></vue-qr>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import vueQr from 'vue-qr';
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { payCol, payColNoBtn, payColConfig, paySubPageCol, paySubPageColNoBtn } from '@/config/column/check';
import $api from '@/api/api';
import { formatTime } from '../../utils';
export default {
  name: 'Pay',
  components: {
    Btable,
    Bsearch,
    vueQr,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false, // 提交驳回
      checkListLoading: false, // 审核loading
      scanListLoading: false, // 查看详情loading
      list: [], //列表
      checkList: [], // 审核列表
      scanList: [], // 查看详情列表
      configs: [], // 列表列配置
      checkConfigs: [], // 审核表格列表配置
      scanConfigs: [], // 查看详情列表配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      mainRow: {}, // 总表格当前的操作数据
      curRow: {}, // 审核列表当前操作的数据
      rejectVisible: false, // 是否显示驳回弹出框
      checkVisible: false, // 是否显示审核弹出框
      scanVisible: false, // 是否显示查看详情弹出框
      rejectForm: {
        auditComment: '',
      },
      rejectRules: {
        auditComment: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      analysisQrCode: '', // 验证码信息
      qrcodeShow: false, // 是否显示验证码
    };
  },
  methods: {
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    // 主表格操作
    async doHandle(data) {
      const { fn, row } = data;
      this.mainRow = row;
      if (fn === 'showqr') {
        // 查看二维码
        this.verify(row);
        return;
      }
      this.checkList = [];
      this.checkListLoading = true;
      this.scanList = [];
      this.scanListLoading = true;
      this.checkVisible = false;
      this.scanVisible = false;
      if (fn === 'pass') {
        this.checkVisible = true;
      } else {
        this.scanVisible = true;
      }
      this.getDetail(fn);
    },
    // 获取详情列表（审核表格和绑定表格数据）(新版的逻辑是不请求接口，直接把条目数据带入)
    async getDetail(fn) {
      if (fn && fn === 'pass') {
        this.checkList = [this.mainRow];
        this.checkListLoading = false;
      } else if (fn && fn === 'detail') {
        this.scanList = [this.mainRow];
        this.scanListLoading = false;
      }
      // const params = { userId: this.mainRow.userId };
      // const res = await $api.getCustomPayDetailInfo(params);
      // if (res) {
      //   const { OtcAuditPayRecdList, otcBindInfoList } = res.data.result;
      //   this.checkList = OtcAuditPayRecdList;
      //   this.scanList = otcBindInfoList;
      //   if (fn && fn === 'pass') {
      //     this.checkListLoading = false;
      //   } else if (fn && fn === 'detail') {
      //     this.scanListLoading = false;
      //   }
      // }
    },
    // 审核表格弹出框操作
    async checkDoHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'pass') {
        this.$confirm(`确认审核通过?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消' })
          .then(async () => {
            this.updateAuditPayStatus(this.curRow, 1);
          })
          .catch(() => {
            //console.log('cancel');
          });
      } else if (fn === 'refuse') {
        this.rejectVisible = true;
        this.$nextTick(() => {
          this.$refs['rejectForm'].resetFields();
        });
      } else if (fn === 'showqr') {
        // 查看二维码
        this.verify(row);
      }
    },
    // 绑定表格弹出框操作 (这个逻辑迁移至用户详情的法币管理里)
    async scanDoHandle(data) {
      const { fn, row } = data;
      let params = {
        userId: row.userId,
        payId: row.recdId,
      };
      if (fn === 'open') {
        // 开启使用
        params.status = 1;
      } else if (fn === 'close') {
        // 停止使用
        params.status = 2;
      } else if (fn === 'showqr') {
        this.verify(row);
        return;
      }
      const res = await $api.updatePayStatus(params);
      if (res) {
        this.$message({ type: 'success', message: fn === 'open' ? '开启成功' : '停止使用操作成功' });
        this.getDetail();
      }
    },
    verify(data) {
      if (data.payType == 2) {
        this.analysisQrCode = 'http://devadmin.hongmo.io/test.html?analysisQrCode=' + data.analysisQrCode;
      } else {
        this.analysisQrCode = data.qrcode;
      }
      this.qrcodeShow = true;
    },
    // 对于审核表格的数据项进行通过或驳回操作
    async updateAuditPayStatus(data, state) {
      if(state != 1 && !this.rejectForm.auditComment){
        this.$message({ type: 'error', message: '驳回原因必填' });
        return
      }
      const params = {
        // userId: data.userId,
        // recdId: data.recdId,
        // payId: data.payId,
        id: data.id,
        auditComment: this.rejectForm.auditComment,
        auditStatus: state,
      };
      this.btnLoading = true;
      const res = await $api.updateAuditPayStatusNew(params);
      if (res) {
        this.$message({ type: 'success', message: state === 1 ? '审批成功' : '驳回操作成功' });
        this.checkVisible = false;
        this.rejectVisible = false;
        // this.getDetail();
        this.getList();
      }
      this.btnLoading = false;
    },
    // 点击驳回
    confirmReject() {
      this.updateAuditPayStatus(this.curRow, 2);
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
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getCustomPayInfoNew(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = +total;
        this.pages = +pages;
        this.current_page = +current;
        this.list = records;
      }
      this.listLoading = false;
    },
  },

  mounted() {
    let authObj = this.$util.getAuthority('Pay', payCol, payColNoBtn);
    this.configs = authObj.val;
    // this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(payColConfig);
    this.checkConfigs = paySubPageCol;
    this.scanConfigs = paySubPageColNoBtn;
    this.getList();
  },
};
</script>
<style lang="scss">
.pay-container {
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
    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }
}
</style>
