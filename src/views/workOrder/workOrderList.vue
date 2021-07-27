<template>
  <div class="lockManage-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="sprecon-button" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addOrder('')">创建工单</el-button>
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

    <!-- 创建调账 -->
    <el-dialog :title="orderTitle" :visible.sync="addOrderDialog" width="600px">
      <el-form :model="orderForm" :rules="rules" ref="orderForm">
        <el-form-item label="标题" :label-width="formLabelWidth" prop="title">
          <el-input :disabled="isDisabled" v-model="orderForm.title" clearable> </el-input>
        </el-form-item>
        <el-form-item label="工单类型" :label-width="formLabelWidth" prop="workType">
          <el-select :disabled="isDisabled" v-model="orderForm.workType" size="small" clearable>
            <el-option v-for="(item, idx) in workOrderList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="紧急程度" :label-width="formLabelWidth" prop="degreeUrgency">
          <el-select :disabled="isDisabled" v-model="orderForm.degreeUrgency" size="small" clearable>
            <el-option v-for="(item, idx) in urgencyList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接收人角色" :label-width="formLabelWidth" prop="roleId">
          <el-select :disabled="isDisabled" v-model="orderForm.roleId" size="small" clearable @change="checkItem('toAccount')">
            <el-option v-for="(item, idx) in roleList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接收人" :label-width="formLabelWidth" prop="toAccount">
          <el-select :disabled="isDisabled" v-model="orderForm.toAccount" size="small" @focus="checkRole('roleId')" clearable>
            <el-option v-for="(item, idx) in toAccountList" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容" prop="content" :label-width="formLabelWidth">
          <el-input :disabled="isDisabled" type="textarea" rows="5" v-model="orderForm.content" size="small"></el-input>
        </el-form-item>

        <!-- !!!orderForm.id为新建状态,否则编辑状态 -->
        <div v-if="!!!orderForm.id">
          <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="authGoogle">
            <el-input v-model="orderForm.authGoogle" clearable> </el-input>
          </el-form-item>
        </div>
        <div v-else>
          <h5></h5>
          <el-form-item label="转移人角色" :label-width="formLabelWidth" prop="transferRole">
            <el-select v-model="orderForm.transferRole" size="small" clearable :disabled="isModify" @change="checkItem('transfer')">
              <el-option v-for="(item, idx) in roleList" :key="idx" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="转移工单" :label-width="formLabelWidth" prop="transfer">
            <el-select v-model="orderForm.transfer" size="small" @focus="checkRole('transferRole')" clearable :disabled="isModify">
              <el-option v-for="(item, idx) in transferList" :key="idx" :label="item.label" :value="item.label"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标记工单状态" :label-width="formLabelWidth" prop="status">
            <el-select v-model="orderForm.status" size="small" clearable :disabled="isModify">
              <el-option v-for="(item, idx) in statusList" :key="idx" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
            <el-input type="textarea" rows="5" v-model="orderForm.remark" size="small" :disabled="isModify"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="24">
              <el-form-item label="工单接收人" :label-width="formLabelWidth">{{ curRow.receiver }}</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span style="color:#D14B48;">注：请勿随意更改工单状态，请在确认完成工单事项后，进行工状态的修改</span>
            </el-col>
          </el-row>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addOrderDialog = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="confirmOrder" size="medium" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    <!-- 调账详情，审核 -->
    <el-dialog :title="dialogTitle" custom-class="work-order-list-dialog" :visible.sync="dialogVisible" width="600px">
      <el-form :model="dataForm" ref="dataForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="标题" :label-width="formLabelWidth">{{ curRow.title }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工单类型" :label-width="formLabelWidth">{{ workTypeDiy(curRow.workType) }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="紧急程度" :label-width="formLabelWidth">{{ degreeUrgencyDiy(curRow.degreeUrgency) }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="接收人角色" :label-width="formLabelWidth">{{ roleIdDiy(curRow.roleId) }}</el-form-item>
          </el-col>
        <!--  <el-col :span="12">
            <el-form-item label="接收人" :label-width="formLabelWidth">{{ curRow.toAccount }}</el-form-item>
          </el-col>   -->
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="内容" :label-width="formLabelWidth">{{ curRow.content }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="标记工单状态" :label-width="formLabelWidth">{{ statusDiy(curRow.status) }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="工单接收人" :label-width="formLabelWidth">{{ curRow.receiver }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注" :label-width="formLabelWidth">{{ curRow.remark }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <span class="redText">注：请勿随意更改工单状态，请在确认完成工单事项后，进行工状态的修改</span>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { workOrderListCol, workOrderListColNoBtn, workOrderListConfig } from '@/config/column/workOrder';
import $api from '@/api/api';
import utils from '@/utils/util';
import { parseTime } from '@/utils/index';
import Cookies from 'js-cookie';

export default {
  name: 'WorkOrderList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 按钮栏目权限：是否能增删改查
      groupLoading: false, // 批量loading
      btnLoading: false, // 创建loadding
      conLoading: false, // 审核loading
      listLoading: false, // 表格loading
      excelLoading: false, // 导出loading
      roleList: [], // 角色列表
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      isDisabled: false, // 处理中的工单发起人不可编辑，接收人可编辑(工单状态status=1待处理 and (fromAccount=‘当前登录人’ or  toAccoun=‘当前登录人’  )
      isModify: false,
      workOrderList: [], // 工单类型
      formLabelWidth: '110px',
      user_name: '', // 当前账户
      orderTitle: '',

      hasChecked: false,
      isCheckStatus: false, // 是否审核(true:审核,false:查看详情)
      dialogVisible: false, // 详情弹出窗
      curRow: {}, // 当前点击行的数据(展示详情使用)

      urgencyList: [{ label: '非常紧急', value: 1 }, { label: '很紧急', value: 2 }, { label: '一般紧急', value: 3 }, { label: '不紧急', value: 4 }],
      statusList: [{ label: '待处理', value: 1 }, { label: '处理中', value: 2 },{ label: '处理完成', value: 3 }, { label: '已驳回', value: 4 }],
      toAccountList: [], // 接收人列表
      transferList: [], // 转移人列表
      addOrderDialog: false, // 创建弹出窗
      orderForm: {
        id: '',
        title: '',
        workType: '',
        degreeUrgency: '',
        roleId: '',
        toAccount: '',
        content: '',
        authGoogle: '',
        transferRole: '',
        transfer: '',
        status: '',
        remark: '',
      },
      rules: {},
      rulesAll: {
        title: [{ required: true, message: '必填', trigger: 'blur' }],
        workType: [{ required: true, message: '必填', trigger: 'blur' }],
        degreeUrgency: [{ required: true, message: '必填', trigger: 'blur' }],
        roleId: [{ required: true, message: '必填', trigger: 'blur' }],
        toAccount: [{ required: true, message: '必填', trigger: 'blur' }],
        content: [{ required: true, message: '必填', trigger: 'blur' }],
        authGoogle: [{ required: true, message: '必填', trigger: 'blur' }],
        // status: [{ required: true, message: '必填', trigger: 'blur' }],
        // remark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      rulesFrom: {
        title: [{ required: true, message: '必填', trigger: 'blur' }],
        workType: [{ required: true, message: '必填', trigger: 'blur' }],
        degreeUrgency: [{ required: true, message: '必填', trigger: 'blur' }],
        roleId: [{ required: true, message: '必填', trigger: 'blur' }],
        toAccount: [{ required: true, message: '必填', trigger: 'blur' }],
        content: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      rulesTo: {
        status: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      rulesEdit: {
        title: [{ required: true, message: '必填', trigger: 'blur' }],
        workType: [{ required: true, message: '必填', trigger: 'blur' }],
        degreeUrgency: [{ required: true, message: '必填', trigger: 'blur' }],
        roleId: [{ required: true, message: '必填', trigger: 'blur' }],
        toAccount: [{ required: true, message: '必填', trigger: 'blur' }],
        content: [{ required: true, message: '必填', trigger: 'blur' }],
        status: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      dataForm: {},
      dialogTitle: '查看详情',
    };
  },
  watch: {
    'orderForm.roleId': {
      async handler(newVal, oldVal) {
        if (newVal) {
          const res = await $api.systemUserList({ id: parseInt(this.orderForm.roleId) });
          if (res) {
            const list = res.data.data.map(v => {
              return { label: v['account'], value: v['account'] };
            });
            this.toAccountList = list;
          }
        }
      },
      // immediate: true,
    },
    'orderForm.transferRole': {
      async handler(newVal, oldVal) {
        if (newVal) {
          const res = await $api.systemUserList({ id: parseInt(this.orderForm.transferRole) });
          if (res) {
            const list = res.data.data.map(v => {
              return { label: v['account'], value: v['account'] };
            });
            this.transferList = list;
          }
        }
      },
      // immediate: true,
    },
  },
  filters: {
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
  },
  methods: {
    workTypeDiy(val) {
      if (!val) return '';
      return (this.workOrderList.length && this.workOrderList.filter(f => f.label == val)[0].label) || '';
    },
    degreeUrgencyDiy(val) {
      if (!val) return '';
      return this.urgencyList.filter(f => f.value == val)[0].label || '';
    },
    roleIdDiy(val) {
      if (!val) return '';
      return (this.roleList.length && this.roleList.filter(f => f.value == val)[0].label) || '';
    },
    statusDiy(val) {
      if (!val) return '';
      return this.statusList.filter(f => f.value == val)[0].label || '';
    },
    checkItem(val) {
      this.orderForm[val] = '';
    },
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'edit') {
        this.addOrderDialog = true;
        this.orderTitle = '编辑工单';
        // 发起人是登录用户，才能编辑接收人部分
        this.isDisabled = this.curRow.fromAccount != this.user_name;
        this.isModify = this.curRow.toAccount != this.user_name;

        // if( this.curRow.fromAccount == this.user_name && this.curRow.toAccount == this.user_name){
        //   this.isDisabled = false;
        //   this.isModify = true;
        // }
        // this.rules = this.isModify ? this.rulesFrom : this.isDisabled ? this.rulesTo : this.rulesEdit;
        this.rules = this.isModify ? this.rulesFrom : this.isDisabled ? this.rulesTo : this.rulesEdit;

        this.$nextTick(() => {
          this.$refs['orderForm'].resetFields();
          this.orderForm = {
            id: this.curRow.id,
            title: this.curRow.title,
            workType: (this.workOrderList.length && this.workOrderList.filter(f => f.label == this.curRow.workType)[0].value) || -1,
            degreeUrgency: this.curRow.degreeUrgency,
            roleId: this.curRow.roleId,
            toAccount: this.curRow.toAccount,
            content: this.curRow.content,
            authGoogle: '',
            transferRole: '',
            transfer: '',
            status: this.curRow.status,
            remark: this.curRow.remark,
          };
        });
      } else if (fn === 'detail') {
        // 详情
        this.dialogTitle = '查看详情';
        this.dialogVisible = true;
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
    // 创建工单
    addOrder(val) {
      this.isDisabled = false;
      this.isModify = false;
      this.rules = this.rulesAll;
      this.addOrderDialog = true;
      this.orderTitle = '创建工单';
      this.$nextTick(() => {
        this.$refs['orderForm'].resetFields();
        this.orderForm = {
          id: '',
          title: '',
          workType: '',
          degreeUrgency: '',
          roleId: '',
          toAccount: '',
          content: '',
          authGoogle: '',
        };
      });
    },
    // 新建 编辑 工单 提交
    confirmOrder() {
      this.$refs['orderForm'].validate(async valid => {
        if (valid) {
          const { id, workType, degreeUrgency, roleId, toAccount, transferRole, transfer, status, remark, authGoogle, ...repo } = this.orderForm;
          let vm = this;
          // transferRole不用传给后台,后台他说会用transfer自动匹配角色
          let params = {
            workType: workType,
            degreeUrgency: degreeUrgency,
            toAccount: toAccount,
            ...repo,
          };
          this.btnLoading = true;
          id === '' ? Object.assign(params, { authGoogle, roleId }) : Object.assign(params, { id, transfer, status, remark });
          const res = id === '' ? await $api.addWorkOrder(params) : await $api.editWorkOrder(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.addOrderDialog = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    changeGroup(val) {
      // 非英文逗号和数字字母,全屏蔽
      val = val && val.replace(/[^\,a-zA-Z\d]/gi, '');
      this.orderForm.uid = val;
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (val === 'percent') {
        this.orderForm[val] = this.orderForm[val] > 100 ? 100 : this.orderForm[val];
        this.orderForm[val] = (this.orderForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      }
      if (this.orderForm[val] < 0) {
        this.orderForm[val] = 0;
      }
    },
    // 未选择角色,不可选接收人(联动需求)
    checkRole(val) {
      if (!this.orderForm[val]) {
        this.$message({ message: '必须先选择角色!', type: 'error' });
      }
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
      this.listLoading = true;
      const res = await $api.userWorkOrder(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
        this.listLoading = false;
      }
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    async getRoleList() {
      const res = await $api.addRoleList({});
      if (res) {
        const list =
          res.data.data &&
          res.data.data.map(v => {
            return { label: v['name'], value: v['id'] };
          });
        this.roleList = list;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('WorkOrderList', workOrderListCol, workOrderListColNoBtn);
    this.isCURDAuth = authObj.isAdd;
    let tmpList = authObj.val;
    // 处理中status=2,发起人不可编辑，接收人可编辑   { toAccoun=‘当前登录人’}
    // status=1待处理 and (fromAccount=‘当前登录人’ or  toAccoun=‘当前登录人’  )
    this.user_name = localStorage.getItem('user_name');
    if (tmpList[tmpList.length - 1].btnGroup[0].alias === 'edit') {
      tmpList[tmpList.length - 1].btnGroup[0].filter_status[1] = this.user_name;
      tmpList[tmpList.length - 1].btnGroup[0].filter_status[2] = this.user_name;
      tmpList[tmpList.length - 1].btnGroup[1].filter_status[1] = this.user_name;
    }
    this.configs = tmpList;

    this.searchCofig = this.$util.clone(workOrderListConfig);
    this.$store.dispatch('common/getWorkOrderList').then(() => {
      this.searchCofig[5]['list'] = this.$store.state.common.workorderlist;
      this.workOrderList = this.$store.state.common.workorderlist;
    });
    this.getList();
    this.getRoleList();
  },
};
</script>
<style scope lang="scss">
.lockManage-container {
  padding: 4px 10px 10px 10px;
  .redText {
    color: #d14b48;
  }
  h5 {
    width: 100%;
    border: 1px solid #f5f7fa;
  }
  .container-top {
    margin: 10px 0;
  }
  .sprecon-button {
    margin: 20px auto 15px;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
    padding: 20px 0;
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

  @media screen and(max-width: 750px) {
    .work-order-list-dialog {
      .el-form {
        .el-row {
          .el-form-item {
            display: flex;
            flex-direction: row;
          }
        }
      }
    }
  }
}
</style>
