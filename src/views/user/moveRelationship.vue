<template>
  <div class="moveRelationship-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addMoveRelationship">创建迁移</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加 -->
    <el-dialog title="迁移邀请关系" labelw :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="roleForm" label-width="120px" ref="roleForm" :rules="rules">
        <el-form-item label="需迁移的UID" prop="changeUid">
          <el-input v-model.trim="roleForm.changeUid" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="迁移至的UID" prop="laterParentUid">
          <el-input v-model.trim="roleForm.laterParentUid" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="谷歌验证码" prop="googleCode">
          <el-input v-model.trim="roleForm.googleCode" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 审核/ 详情 -->
    <el-dialog :title="checkTitle" labelw :visible.sync="checkDialogFormVisible" width="700px">
      <el-form :model="checkForm" label-width="120px" ref="checkForm" :rules="checkRules">
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="当前状态: "> {{ typeObj[currentForm.auditStatus] }}}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="迁移至的UID: "> {{ currentForm.laterParentUid }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="需要迁移的UID: "> {{ currentForm.changeUid }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="原上级的UID: "> {{ currentForm.formerParentUid }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="提交时间: "> {{ currentForm.createTime }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="提交人: "> {{ currentForm.creatorUserName }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="订单号: "> {{ currentForm.orderId }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24" v-if="recheckType != 1">
          <el-col :span="12">
            <el-form-item label="初审时间: "> {{ currentForm.firstAuditTime }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="初审人: "> {{ currentForm.firstAuditUserName }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="初审备注: " prop="firstAuditRemark">
              <el-input rows="2" :disabled="recheckType != 1" v-model="checkForm.firstAuditRemark" placeholder="请输入内容" type="textarea"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24" v-if="recheckType == 3">
          <el-col :span="12">
            <el-form-item label="复审时间: "> {{ currentForm.reviewAuditTime }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="复审人: "> {{ currentForm.reviewAuditUserName }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24" v-if="recheckType != 1">
          <el-col :span="24">
            <el-form-item label="复审备注: " prop="reviewAuditRemark">
              <el-input rows="2" :disabled="recheckType == 3" v-model="checkForm.reviewAuditRemark" placeholder="请输入内容" type="textarea"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div v-if="recheckType == 3" slot="footer" class="dialog-footer dialog-footer-check">
        <el-button @click="checkDialogFormVisible = false">确 定</el-button>
        <!-- <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button> -->
      </div>

      <div v-else slot="footer" class="dialog-footer dialog-footer-check">
        <el-button type="success" @click="checkConfirmOp(recheckType, 1)">审核通过</el-button>
        <el-button type="danger" @click="checkConfirmOp(recheckType, 0)">审核驳回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { moveRelationshipCol, moveRelationshipColNoBtn, moveRelationshipConfig } from '@/config/column/user';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'MoveRelationship',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      // { val: 0, text: '待初审' }, { val: 1, text: '待复审' }, { val: 2, text: '初审驳回' }, { val: 3, text: '复审通过' }, { val: 4, text: '复审驳回' },
      typeObj: {
        0: '待初审',
        1: '待复审',
        2: '初审驳回',
        3: '复审通过',
        4: '复审驳回',
      },
      checkForm: {},
      currentForm: {},
      btnLoading: false,
      recheckType: '',
      checkTitle: '',
      checkRules: {
        firstAuditRemark: [{ required: true, message: '必填', trigger: 'blur' }],
        reviewAuditRemark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      roleForm: {
        changeUid: '',
        laterParentUid: '',
        googleCode: '',
      },
      rules: {
        changeUid: [{ required: true, message: '必填', trigger: 'blur' }],
        laterParentUid: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      dialogFormVisible: false,
      checkDialogFormVisible: false,
      isCURDAuth: false, // 权限：是否能增删改查
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
    checkConfirmOp(type, State) {
      this.$refs['checkForm'].validate(async (valid) => {
        if (valid) {
          const { id, firstAuditRemark, reviewAuditRemark } = this.checkForm;
          const params = {
            id,
          };

          const res =
            type === 1
              ? await $api.apiUpdateFirstAuditStatus({
                  ...params,
                  firstAuditRemark,
                  changeState: State ? 1 : 2,
                })
              : await $api.apiUpdateReviewAuditStatus({
                  ...params,
                  reviewAuditRemark,
                  changeState: State ? 3 : 4,
                });
          if (res) {
            this.$message({ message: '成功', type: 'success' });
            this.checkDialogFormVisible = false
            this.getList()
          }
        }
      });
    },
    async confirmOp() {
      this.$refs['roleForm'].validate(async (valid) => {
        if (valid) {
          const { changeUid, laterParentUid, googleCode } = this.roleForm;
          const params = {
            changeUid,
            laterParentUid,
            googleCode,
          };
          const res = await $api.apiAddMoveRelationshipList(params);
          if (res) {
            this.$message({ message: '迁移成功', type: 'success' });
            this.dialogFormVisible = false;
            this.getList()
          }
        }
      });
    },
    // 创建迁移
    addMoveRelationship() {
      this.dialogFormVisible = true;
    },
    // 表格里的操作
    async doHandle(data) {
      let { fn, row } = data;
      this.row = row;
      console.log('row', row);
      if (fn === 'firstTrial') {
        this.checkDialogFormVisible = true;
        this.checkTitle = '初审';
        this.recheckType = 1;
        this.currentForm = row;
        this.$nextTick(() => {
          this.checkForm = {
            id: row.id,
            firstAuditRemark: '',
            reviewAuditRemark: '',
          };
        });
      }
      if (fn === 'recheck') {
        this.checkDialogFormVisible = true;
        this.checkTitle = '复审';
        this.recheckType = 2;
        this.currentForm = row;
        this.$nextTick(() => {
          this.checkForm = {
            id: row.id,
            firstAuditRemark: row.firstAuditRemark,
            reviewAuditRemark: '',
          };
        });
      }
      if (fn === 'detail') {
        this.checkDialogFormVisible = true;
        this.checkTitle = '详情';
        this.recheckType = 3;
        this.currentForm = row;
        this.$nextTick(() => {
          this.checkForm = {
            id: row.id,
            firstAuditRemark: row.firstAuditRemark,
            reviewAuditRemark: row.reviewAuditRemark,
          };
        });
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
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
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      //console.log('query_data', query_data, this.search_params_obj)
      this.listLoading = true;
      const res = await $api.apiGetMoveRelationshipList(query_data);
      if (res) {
        let { records, total, current, pages } = res.data.data;
        this.total = +total;
        this.pages = +pages;
        this.current_page = +current;
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('MoveRelationship', moveRelationshipCol, moveRelationshipColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.searchCofig = this.$util.clone(moveRelationshipConfig);
    this.getList();
  },
};
</script>
<style scope lang="scss">
.moveRelationship-container {
  padding: 4px 10px 10px 10px;
  .dialog-footer-check {
    display: flex;
    justify-content: center;
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
