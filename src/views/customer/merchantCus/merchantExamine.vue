<!--
 * @Author: your name
 * @Date: 2020-04-27 17:15:29
 * @LastEditTime: 2020-09-14 12:16:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\user\examine.vue
 -->
<template>
  <div class="merchantExamine-container">
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
    <el-dialog :visible.sync="rejectVisible" width="500px" :title="title">
      <el-form :model="rejectForm" ref="rejectForm" :rules="rejectRules">
        <el-form-item label="备注" prop="auditComment">
          <el-input type="textarea" rows="5" placeholder="请输入审核备注" v-model="rejectForm.auditComment"></el-input> </el-form-item
      ></el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="rejectVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmReject" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { merchantExamineConfig, merchantExamineCol, merchantExamineColNoBtn } from '@/config/column/customer';
import $api from '@/api/api';
import { formatTime } from '@/utils/index';
export default {
  name: 'MerchantExamine',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false, // 提交
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      curRow: {}, // 当前操作的数据
      fn:'', // 审核操作名
      title:"",
      rejectVisible: false, // 是否显示驳回弹出框
      rejectForm: {
        auditComment: '',
      },
      rejectRules: {
        auditComment: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.fn = fn;
      this.curRow = row;
      if (fn === 'refuse' || fn === 'pass') {
        this.title = fn === 'refuse' ? '驳回' : '审核通过'
        this.rejectVisible = true;
        this.$nextTick(() => {
          this.$refs['rejectForm'].resetFields();
        });
      }
    },
    // 驳回按钮
    async confirmReject() {
      const params = {
        id: this.curRow.id,
        auditComment: this.rejectForm.auditComment,
      };
      params.auditStatus = this.fn === 'refuse' ? 2 : 1;
      this.btnLoading = true;
      const res = await $api.updateAuditStatusNew(params);
      if (res) {
        let txt = this.fn === 'refuse' ? '驳回操作成功!' : '审核通过';
        this.$message({ type: 'success', message: txt });
        this.rejectVisible = false;
        this.getList();
      }
      this.btnLoading = false;
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
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.checkGetAuditListNew(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // 只有处于待审核状态的才能点击审核操作
        records.forEach(v => {
          v['isclick'] = parseInt(v['auditStatus']) === 0 ? false : true;
        });
        this.total = +total;
        this.pages = +pages;
        this.current_page = +current;
        this.list = records;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.createEndTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.createStartTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [
          this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
          this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss'),
        ];
      }
      // 提交时间
      if (this.search_params_obj.createStartTime) {
        this.search_params_obj.createEndTime = this.formatTime(this.search_params_obj.createEndTime);
        this.search_params_obj.createStartTime = this.formatTime(this.search_params_obj.createStartTime);
      }
      // 审核时间
      if (this.search_params_obj.auditStartTime) {
        this.search_params_obj.auditEndTime = this.formatTime(this.search_params_obj.auditEndTime);
        this.search_params_obj.auditStartTime = this.formatTime(this.search_params_obj.auditStartTime);
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('MerchantExamine', merchantExamineCol, merchantExamineColNoBtn);
    this.configs = authObj.val;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    // this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(merchantExamineConfig);
    this.getList();
  },
};
</script>

<style lang="scss">
.merchantExamine-container {
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
