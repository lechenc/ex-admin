
<template>
  <div class="sprecon-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="headBtnArr.includes('excel')"
        @do-exportExcel="exportExcel"
      />
    </div>
    <div class="sprecon-button">
      <el-button
        :disabled="!isTableSelect"
        v-if="~headBtnArr.indexOf('passBatch') && checkBtnIsShow"
        type="primary"
        size="medium"
        @click="passBatch"
        >批量审核</el-button
      >
      <el-button
        v-if="~headBtnArr.indexOf('adjustAccountAdd')"
        type="primary"
        size="medium"
        @click="addOrder('add')"
        >创建调账（增）</el-button
      >
      <el-button
        v-if="~headBtnArr.indexOf('adjustAccountReduce')"
        type="primary"
        size="medium"
        @click="addOrder('')"
        >创建调账（减）</el-button
      >
      <el-button
        v-if="~headBtnArr.indexOf('adjustAccountBatch')"
        type="primary"
        size="medium"
        @click="addGroupOrder"
        >批量创建</el-button
      >
    </div>

    <div>
      <Btable
        :spreconCheckBtnIsShow="checkBtnIsShow"
        @select="getSelectRow"
        :selection="isTableSelect"
        :listLoading="listLoading"
        :data="list"
        :configs="configs"
        @do-handle="doHandle"
      />
    </div>
    <!-- <div class="container-tip">当前调账总增加金额：{{ sumList.curAddAmountSum }}</div>
    <div class="container-tip">当前调账总增加金额：{{ sumList.curSubAmountSum }}</div> -->
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
    <el-dialog :title="addOrderTitle" :visible.sync="addOrderDialog" width="600px">
      <el-form :model="orderForm" :rules="rules" ref="orderForm">
        <el-form-item label="账户类型：" :label-width="formLabelWidth" prop="accountType">
          <el-select @change="accountTypeChange" v-model="orderForm.accountType" size="small">
            <el-option
              v-for="(item, idx) in accountList"
              :key="idx"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- orderForm.accountType == 5  显示合约账户-->
        <el-form-item
          v-if="orderForm.accountType == 5"
          label="合约账户："
          :label-width="formLabelWidth"
          prop="coinId"
        >
          <el-select v-model="orderForm.coinId" size="small">
            <el-option
              v-for="(item, idx) in contractCoinList"
              :key="idx"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 其余 显示币种-->
        <el-form-item v-else label="币种：" :label-width="formLabelWidth" prop="coinId">
          <el-select v-model="orderForm.coinId" size="small">
            <el-option
              v-for="(item, idx) in coinList"
              :key="idx"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!--<el-input v-model="orderForm.uid" prop="uid" id="uid" clearable @blur.native.capture="searchAssets"></el-input> -->
        <el-form-item label="UID：" prop="uid" :label-width="formLabelWidth">
          <el-input maxlength="20" v-model="orderForm.uid" @input="checkVal('orderForm', 'uid', 'not')" clearable>
            <div slot="append" class="gcode" @click.stop="searchAssets">查询资产</div>
          </el-input>
        </el-form-item>
        <el-form-item label="可用数量：" :label-width="formLabelWidth">
          <el-row :span="24">
            <el-col :span="19">
              <el-input v-model="orderForm.amountAvail" clearable :disabled="true"> </el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="调账数量：" prop="amount" :label-width="formLabelWidth">
          <el-row>
            <!--
            <el-col :span="4">
              <el-select v-model="orderForm.amountSymbol" size="small">
                <el-option label="+" :value="'+'"></el-option> <el-option label="-" :value="'-'"></el-option></el-select
            ></el-col>
            -->
            <el-col :span="19">
              <!-- 限制20长度 -->
              <el-input @input="orderForm.amount = orderForm.amount.slice(0,20)" v-model="orderForm.amount" type="number" size="small"></el-input></el-col
          ></el-row>
        </el-form-item>
        <el-form-item label="调账原因：" :label-width="formLabelWidth" prop="remark">
          <el-input maxlength="100" type="textarea" placeholder="请输入描述" v-model="orderForm.remark"></el-input>
        </el-form-item>

        <el-form-item prop="transferUserId" label="资金出入账户：" :label-width="formLabelWidth">
          <el-select
            @change="spreconGetAccount(orderForm.transferUserId)"
            v-model="orderForm.transferUserId"
            size="small"
          >
            <el-option
              v-for="(item, idx) in outputAccountList"
              :key="idx"
              :label="item.realName"
              :value="item.userId"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-row :span="24">
          <el-col>
            <el-form-item
              :label-width="formLabelWidth"
              label="调账类型："
              prop="reconciliationType"
            >
              <el-radio-group v-model="orderForm.reconciliationType">
                <el-radio :label="1">异常补发</el-radio>
                <el-radio :label="2">财务工资</el-radio>
                <el-radio :label="3">运营活动奖励</el-radio>
                <el-radio :label="4">违规扣除</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="账户余额：" :label-width="formLabelWidth">
          <el-row :span="24">
            <el-col :span="19">
              <el-input disabled v-model="curTotalAmount"> </el-input>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addOrderDialog = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="confirmAddOrder" size="medium" :loading="btnLoading"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <!-- 创建批量导入 -->
    <el-dialog title="创建特殊调账" :visible.sync="groupOrderDialog" width="850px">
      <el-form label-width="150px" ref="batchOrderForm" :model="batchOrderForm" :rules="batchRules">
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="资金出入账户：" prop="transferUserId">
              <el-select
                @change="spreconGetAccount(batchOrderForm.transferUserId)"
                v-model="batchOrderForm.transferUserId"
                size="small"
              >
                <el-option
                  v-for="(item, idx) in outputAccountList"
                  :key="idx"
                  :label="item.realName"
                  :value="item.userId"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="19">
            <el-form-item label="账户余额：">
              {{ curTotalAmount }}
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="获取表格：">
              <el-button type="text" @click="downLoadDefaultExcel"> 下载初始表格</el-button>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="格式列说明：">
              <!-- [(账户类型) 1 = 币币， 5 = 合约] &nbsp; &nbsp; [(调账类型) 1 = 异常补发，2 = -->
              [(账户类型) 1 = 币币] &nbsp; &nbsp; [(调账类型) 1 = 异常补发，2 =
              财务工资，3 = 运营活动奖励，4 = 违规扣除]
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="上传表格：">
              <el-upload
                :action="$special_file_api"
                :headers="importHeaders"
                multiple
                name="file"
                :disabled="!batchOrderForm.transferUserId"
                :data="{ userId: batchOrderForm.transferUserId }"
                :show-file-list="true"
                accept=".xlsx,.xls"
                :before-upload="batchBeforeUpload"
                :on-success="batchUpload"
                :on-error="uploadCompressError"
                :limit="1"
                :on-exceed="exceed"
                ref="batchUploads"
                :before-remove="batchRemove"
              >
                <el-button size="small" type="primary" @click="batchUploadsClick"
                  >点击上传</el-button
                >
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <div class="dialog-footer">
          <el-button type="primary" @click="confirmGroupOrder" size="medium" :loading="groupLoading">确定上传</el-button>
        </div> -->
      </el-form>
      <h3>错误列表</h3>
      <Btable :listLoading="errorListLoading" :data="errorList" :configs="errorConfigs" />
    </el-dialog>

    <!-- 调账详情，审核 -->
    <el-dialog title="查看调账详情：" :visible.sync="dialogVisible" width="600px">
      <el-form :model="dataForm" ref="dataForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="订单号：" :label-width="formLabelWidth">{{
              curRow.orderNo
            }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="UID：" :label-width="formLabelWidth">{{ curRow.uid }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="账户类型：" :label-width="formLabelWidth">{{
              curRow.accountType | fStatus
            }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="币种/合约账户：" :label-width="formLabelWidth">{{
              curRow.coinName
            }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="调账数量：" :label-width="formLabelWidth">{{
              curRow.amount
            }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="申请时间：" :label-width="formLabelWidth">{{
              curRow.createTime | typeTime
            }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申请人：" :label-width="formLabelWidth">{{
              curRow.appliName
            }}</el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="hasChecked">
          <el-col :span="12">
            <el-form-item label="审核时间：" :label-width="formLabelWidth">{{
              curRow.auditTime | typeTime
            }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="审核人：" :label-width="formLabelWidth">{{
              curRow.auditName
            }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="调账原因：" :label-width="formLabelWidth">{{
              curRow.remark
            }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer" v-if="!isCheckStatus">
        <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
      </div>
      <div slot="footer" class="dialog-footer" v-else>
        <el-button @click="dialogVisible = false" size="medium">取消</el-button>
        <el-button type="primary" @click="confirmReview(true)" size="medium" :loading="conLoading"
          >审核通过</el-button
        >
      </div>
    </el-dialog>

    <!-- 驳回弹窗 -->
    <el-dialog :visible.sync="rejectVisible" width="500px" title="驳回">
      <el-form :model="rejectForm" ref="rejectForm" :rules="rejectRules">
        <el-form-item label="驳回理由: " prop="mark">
          <el-input
            type="textarea"
            rows="3"
            placeholder="请输入驳回理由"
            v-model="rejectForm.mark"
          ></el-input> </el-form-item
      ></el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="rejectVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmReject">驳回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import {
  spreconCol,
  spreconColNoBtn,
  spreconConfig,
  spreconErrorCol
} from '@/config/column/financial'
import $api from '@/api/api'
import utils from '@/utils/util'
import { parseTime } from '@/utils/index'
import fileDownload from 'js-file-download'
export default {
  name: 'Sprecon',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 按钮栏目权限：是否能增删改查
      groupLoading: false, // 批量loading
      btnLoading: false, // 创建loadding
      conLoading: false, // 审核loading
      listLoading: false, // 表格loading
      excelLoading: false, // 导出loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      headBtnArr: [], // 后台节点树配置的按钮数组

      coinList: [], // 币种
      formLabelWidth: '120px',
      // totalExFee: "", // 手续费总计
      // totalArrivalAccount: "", // 到账总计
      isCheckStatus: false, // 是否审核(true:审核,false:查看详情)
      dialogVisible: false, // 详情弹出窗
      groupOrderDialog: false, // 是否弹出批量导入弹窗
      curRow: {}, // 当前点击行的数据(展示详情使用)
      dataForm: {},

      accountList: [
        { label: '币币', value: 1 },
        // { label: '法币', value: 2 },
        // { label: '理财', value: 3 },
        // { label: '币汇', value: 4 },
        { label: '合约', value: 5 }
      ],
      addOrderTitle: '创建调账（增）',
      addOrderDialog: false, // 创建弹出窗
      orderForm: {},
      rules: {
        accountType: [{ required: true, message: '必填', trigger: 'change' }],
        coinId: [{ required: true, message: '必填', trigger: 'change' }],
        uid: [{ required: true, message: '必填', trigger: 'blur' }],
        amount: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
        reconciliationType: [{ required: true, message: '必填', trigger: 'change' }],
        transferUserId: [{ required: true, message: '必填', trigger: 'change' }]
      },
      groupOrderForm: {
        coinId: '',
        amount: '',
        uidString: ''
      },
      groupRules: {
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        amount: [{ required: true, message: '必填', trigger: 'blur' }],
        uidString: [{ required: true, message: '必填', trigger: 'blur' }]
      },
      isTableSelect: false, // 是否可以勾选表格条目（状态切换待审核时可以勾选）
      allAuditArr: [], // 勾选批量审核的条目
      rejectVisible: false,
      rejectForm: {},
      rejectRules: {
        mark: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 1, max: 20, message: '不能超过20字符', trigger: 'blur' }
        ]
      },

      importHeaders: { token: window.localStorage.getItem('admin_token') },
      errorListLoading: false,
      errorList: [],
      errorConfigs: [],
      curTotalAmount: '',
      isBranchPass: false,
      checkBtnIsShow: false,
      outputAccountList: [],
      contractCoinList: [],
      toDay: '',
      ago: '',
      sumList: {},
      batchOrderForm: {},
      batchRules: {
        transferUserId: [{ required: true, message: '必选', trigger: 'blur' }]
      }
    }
  },
  watch: {
    // 状态处于'商户待审核'
    'search_params_obj.status'(newVal) {
      if (newVal === 0) {
        this.isTableSelect = true
      } else {
        this.isTableSelect = false
      }
    }
  },
  computed: {
    hasChecked() {
      // 处于查看详情状态，并且该条数据不是待审核的状态，才能显示审核信息
      return !this.isCheckStatus && this.curRow.status != 0
    }
  },
  filters: {
    fStatus(val) {
      let tmp = ''
      switch (val) {
        case 1:
          tmp = '币币'
          break
        case 2:
          tmp = '法币'
          break
        case 3:
          tmp = '理财'
          break
        case 4:
          tmp = '币汇'
          break
        case 5:
          tmp = '合约'
          break
      }
      return tmp
    },
    typeTime(v) {
      if (!v) return ''
      return parseTime(v)
    }
  },
  methods: {
    batchUploadsClick() {
      let valid = true
      this.$refs['batchOrderForm'].validateField(['transferUserId'], (errorMessage) => {
        if (errorMessage) {
          valid = false

          return
        }
      })
      if (!valid) return
    },
    // 对输入值的范围进行限制
    checkVal(obj, val, nodot) {
      // 有第这个参数则是禁止小数位，必须整数
      if (nodot) {
        this[obj][val] = this[obj][val].replace(/[^\d]/g, '')
      }
    },
    accountTypeChange(val) {
      this.orderForm.coinId = ''
    },

    // 审核按钮是否隐藏
    async spreconCheckBtnIsShow() {
      const res = await $api.apiSpreconCheckBtnIsShow({})
      if (res) {
        this.checkBtnIsShow = res.data.data.reconciliationSwitch
      }
    },
    // 批量审核
    passBatch() {
      if (!this.allAuditArr.length) {
        this.$message({ type: 'error', message: '尚未勾选条目!' })
        return
      }
      this.$confirm('涉及资产谨慎操作', {
        confirmButtonText: '通过',
        cancelButtonText: '驳回',
        distinguishCancelAndClose: true,
        center: true
      })
        .then(() => {
          this.$confirm('请确认是否通过?', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          })
            .then(() => {
              this.isBranchPass = true
              this.confirmPassBatch(1)
            })
            .catch(() => {})
        })
        .catch((action) => {
          if (action == 'cancel') {
            this.rejectVisible = true
            this.$nextTick(() => {
              this.rejectForm = {
                mark: ''
              }
              this.isBranchPass = true
              this.$refs['rejectForm'].resetFields()
            })
          } else if (action == 'close') {
          }
        })
    },
    // 确定批量审核
    async confirmPassBatch(type) {
      let parmas
      if (this.isBranchPass) {
        parmas =
          type == 1
            ? {
                idSet: this.allAuditArr,
                type
              }
            : {
                idSet: this.allAuditArr,
                type,
                rejectionReason: this.rejectForm.mark
              }
      } else {
        const { mark } = this.rejectForm
        parmas = {
          idSet: [this.curRow.id],
          rejectionReason: mark,
          type
        }
      }

      const res = await $api.apiSpreconBatchCheck(parmas)
      if (res) {
        this.$message({ message: res.data.message, type: 'success' })
        this.getList()
        if (type == 2) {
          this.rejectVisible = false
        }
      }
    },
    // 驳回确定
    confirmReject() {
      this.$refs['rejectForm'].validate((valid) => {
        if (valid) {
          this.confirmPassBatch(2)
        }
      })
    },
    batchRemove() {
      this.errorList = []
    },
    // 勾选
    getSelectRow(val) {
      // if (val && val.length > 0) {
      let tmp = []
      val.forEach((v) => {
        tmp.push(v.id)
      })
      this.allAuditArr = tmp
      // }
    },
    async spreconGetAccount(id) {
      let params = {
        userId: id
      }
      const res = await $api.apiSpreconGetAccount(params)
      if (res) {
        const obj = res.data.data || {}
        this.curTotalAmount = obj.totalAmount || 0
      }
    },
    // 创建批量导入
    async addGroupOrder() {
      this.groupOrderDialog = true
      this.getSpreconOutputAccountList()
      this.$nextTick(() => {
        this.errorList = []
        this.$refs.batchUploads.clearFiles()
        this.curTotalAmount = ''
        this.$refs['batchOrderForm'].resetFields()
        this.batchOrderForm = {
          userId: ''
        }
      })
    },
    downLoadDefaultExcel() {
      $api
        .apiSpreconDownLoadDefaultExcel({})
        .then((res) => {
          console.log('res', res)
          fileDownload(res.data, '特殊调账模板.xlsx')
        })
        .catch(() => {})
      // window.open(window.SERVER_PATH + '/admin/account/special-reconciliation-excel/download')
    },

    exceed(file, fileList) {
      this.$message.error('单次只能选择一个文件进行上传！')
    },
    uploadCompressError() {
      this.$message.error('文件上传失败')
    },
    batchUpload(response, file, fileList) {
      if (response.code == 1) {
        this.groupOrderDialog = false
        this.$message.success(response.message)
        this.getList()
      } else if (response.code == -2) {
        this.errorList = response.data
        this.$message.error(response.message)
      } else {
        this.$message.error(response.message)
      }
    },
    // 文件限制
    batchBeforeUpload(file) {
      // let valid = true
      // this.$refs['batchOrderForm'].validateField(['transferUserId'], (errorMessage) => {
      //   if (errorMessage) {
      //     valid = false

      //     return
      //   }
      // })
      // if (!valid) return

      const testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      const extension = testmsg === 'xls'
      const extension2 = testmsg === 'xlsx'
      const isLt2M = true
      // const isLt2M = file.size / 1024 / 1024 < 8;
      if (!extension && !extension2) {
        this.$message({
          message: '上传文件只能是 xls、xlsx格式!',
          type: 'error'
        })
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 8MB!',
          type: 'error'
        })
      }
      return (extension && isLt2M) || (extension2 && isLt2M)
    },

    async doHandle(data) {
      const { fn, row } = data
      this.curRow = row
      if (fn === 'checkPass') {
        this.isCheckStatus = true
        this.dialogVisible = true
      } else if (fn === 'checkOut') {
        this.rejectVisible = true
        this.$nextTick(() => {
          this.rejectForm = {
            mark: ''
          }
          this.isBranchPass = false
          this.$refs['rejectForm'].resetFields()
        })

        // this.confirmReview(false);
      } else if (fn === 'viewDetail') {
        this.isCheckStatus = false
        this.dialogVisible = true
      }
    },
    // 打开新建弹出框
    openAddDialog() {
      this.addOrderDialog = true
      this.$nextTick(() => {
        this.$refs['orderForm'].resetFields()
        this.orderForm = {
          accountType: '',
          coinId: '',
          uid: 0,
          amountAvail: 0,
          amountSymbol: '+',
          amount: 0,
          remark: '',
          reconciliationType: '',
          transferUserId: ''
        }
      })
    },
    // 审批
    async confirmReview(val) {
      // 1审核通过，2驳回
      const params = {
        id: this.curRow.id,
        type: val ? 1 : 2
      }
      this.conLoading = true
      const res = await $api.auditReconciliation(params)
      if (res) {
        this.$message({ type: 'success', message: res.data.message })
        this.getList()
        this.dialogVisible = false
      }
      this.conLoading = false
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1
      }
      this.getList()
    },
    doReset() {
      this.search_params_obj = {}
      this.searchCofig.forEach((v) => {
        v['value'] = ''
      })
      this.searchCofig[0].value = [
        this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
        this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
      ]
      this.getList()
    },
    exportExcel(val) {
      this.search_params_obj = val.query
      const num = val.num
      utils.exportData.apply(this, [num])
    },
    // 创建特殊调账
    addOrder(val) {
      let symbolNow = val === 'add' ? '+' : '-'
      this.addOrderTitle = val === 'add' ? '创建调账（增）' : '创建调账（减）'
      this.addOrderDialog = true
      this.$nextTick(() => {
        this.orderForm = {
          accountType: 1,
          coinId: '',
          uid: '',
          amountAvail: '',
          amountSymbol: symbolNow,
          amount: '',
          remark: '',
          reconciliationType: '',
          transferUserId: ''
        }
        this.$refs['orderForm'].resetFields()
        this.curTotalAmount = ''
      })
      this.getSpreconOutputAccountList()
    },
    // 获取资金出入账户列表
    async getSpreconOutputAccountList() {
      const res = await $api.apiGetSpreconOutputAccountList({})
      if (res) {
        this.outputAccountList = res.data.data
      }
    },

    // 新建调账
    confirmAddOrder() {
      this.$refs['orderForm'].validate(async (valid) => {
        if (valid) {
          const {
            accountType,
            amountSymbol,
            amount,
            coinId,
            uid,
            remark,
            reconciliationType,
            ...key
          } = this.orderForm
          let coinName
          if (accountType == 1) {
            coinName = this.coinList.filter((v) => v.value == coinId)[0].label
          } else if (accountType == 5) {
            coinName = this.contractCoinList.filter((v) => v.value == coinId)[0].label
          }
          let params = {
            ...key,
            accountType: accountType,
            // accountType: 1, // 规定是币币类型
            uid: +uid,
            coinId: +coinId,
            coinName: coinName,
            reconciliationType,
            amount:
              amountSymbol == '+'
                ? amount + ''
                : amountSymbol == '-'
                ? amountSymbol + amount + ''
                : amount + '',
            remark: remark
          }
          this.btnLoading = true
          const res = await $api.addReconciliation(params)
          if (res) {
            this.$message({ message: res.data.message, type: 'success' })
            this.addOrderDialog = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
    },
    // 新建批量导入
    confirmGroupOrder() {
      this.$refs['groupOrderForm'].validate(async (valid) => {
        if (valid) {
          const { amount, coinId, uidString } = this.groupOrderForm
          let params = {
            // accountType: 1, // 规定是币币类型
            uidString: uidString,
            coinId: +coinId,
            // coinName: this.coinList.find(v => v.value == coinId).label || "",
            amount: amount + ''
          }
          this.groupLoading = true
          const res = await $api.addReconciliationBatch(params)
          if (res) {
            this.$message({ message: res.data.message, type: 'success' })
            this.groupOrderDialog = false
            this.getList()
          }
          this.groupLoading = false
        }
      })
    },
    changeInput(val) {
      this.groupOrderForm.amount = val
      // 处理弹出层嵌套太深的hack方法
      // this.$forceUpdate();
    },
    changeGroup(val) {
      // this.$forceUpdate();
      // 输入限制防止违规的中文字符
      val = val && val.replace(/[^\,a-zA-Z\d]/gi, '')
      // val = val && val.replace(/[\r\n]/g, "");
      this.groupOrderForm.uidString = val
      // this.$forceUpdate();
    },
    // 获取当前资产
    async searchAssets() {
      let tip = ''
      if (!this.orderForm.accountType) {
        tip = '请先选择资金账户类型'
      }
      if (!this.orderForm.coinId) {
        tip = '请先选择币种或合约账户'
      }
      if (tip) {
        this.$message({
          message: tip,
          type: 'error'
        })
        return
      }
      const params = {
        accountType: this.orderForm.accountType + '',
        coinId: this.orderForm.coinId,
        uid: +this.orderForm.uid
      }
      const res = await $api.accountUseraccount(params)
      if (res) {
        this.orderForm.amountAvail = res.data.data.amount
        this.$forceUpdate()
      }
    },
    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1
      this.pageSize = val
      this.getList()
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getList()
    },
    async getSpecialReconciliationSum(query_data) {
      const res = await $api.apiGetSpecialReconciliationSum(query_data)
      if (res) {
        this.sumList = res.data.data || {}
      }
    },
    // getlist
    async getList() {
      if (this.listLoading) return
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      this.requiredParams(query_data)
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      this.getSpecialReconciliationSum(query_data)
      const res = await $api.specialReconciliation(query_data)
      if (res) {
        const { records, total, current, pages } = res.data.data
        this.total = total
        this.pages = pages
        this.current_page = current
        // records.forEach((v) => {
        //   v.coinName = this.coinList.filter((f) => f.value == v.coinId)[0].label
        // })
        this.list = records
        this.dataList = records
      }
      this.listLoading = false
    },
    async queryData(params) {
      this.excelLoading = true
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.specialReconciliation(params)
      if (res.data.data && res.data.data.records) {
        res.data.data.records.forEach((v) => {
          v.coinName = this.coinList.filter((f) => f.value == v.coinId)[0].label
        })
      }
      this.excelLoading = false
      return res
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        this.searchCofig[0].value = [befV, nowV]
        params.endTime = nowV.replace(/\//gi, '-')
        params.startTime = befV.replace(/\//gi, '-')
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
    }
  },

  mounted() {
    let authObj = this.$util.getAuthority('Sprecon', spreconCol, spreconColNoBtn)
    this.configs = authObj.val
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.errorConfigs = spreconErrorCol
    this.isCURDAuth = authObj.isAdd
    this.headBtnArr = authObj.btnArr || []

    this.searchCofig = this.$util.clone(spreconConfig)
    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[3]['list'] = this.$store.state.common.coinlist
      this.coinList = this.$store.state.common.coinlist
    })

    this.$store.dispatch('common/getContractCoinmarket').then(() => {
      this.contractCoinList = this.$store.state.common.contractCoinmarket
    })

    this.spreconCheckBtnIsShow()
    this.getList()

    this.$watch(
      function () {
        return this.searchCofig[5].value
      },
      // 合约出入金,type=1为合约出金,type=2为合约入金
      function (newVal, oldValue) {
        if (newVal == 1) {
          // 商务
          this.searchCofig[3]['value'] = ''
          this.searchCofig[3].list = this.coinList
        }

        if (newVal == 5) {
          // 商务
          this.searchCofig[3]['value'] = ''
          this.searchCofig[3].list = this.contractCoinList
        }
      }
    )
  }
}
</script>
<style scope lang="scss">
.sprecon-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-tip {
    margin: 10px 0;
    font-size: 14px;
  }
  .inner-footer {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  .sprecon-button {
    margin: 20px auto 15px;
    > button {
      margin: 5px 0 5px 5px;
    }
    > button:last-child {
      margin: 5px 0 5px 5px;
    }
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    padding: 5px 0 20px;
    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }
}
</style>
