
<template>
  <div class="sprecon-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="true"
        @do-exportExcel="exportExcel"
      />
    </div>
    <div class="sprecon-button">
      <el-button v-if="~headBtnArr.indexOf('adjustAccountAdd')" type="primary" size="medium" @click="addOrder('add')">创建调账（增）</el-button>
      <el-button v-if="~headBtnArr.indexOf('adjustAccountReduce')" type="primary" size="medium" @click="addOrder('')">创建调账（减）</el-button>
      <el-button v-if="~headBtnArr.indexOf('adjustAccountBatch')" type="primary" size="medium" @click="addGroupOrder">创建批量导入</el-button>
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
    <el-dialog :title="addOrderTitle" :visible.sync="addOrderDialog" width="600px">
      <el-form :model="orderForm" :rules="rules" ref="orderForm">
        <el-form-item label="账户类型" :label-width="formLabelWidth" prop="accountType">
          <el-select v-model="orderForm.accountType" size="small">
            <el-option v-for="(item, idx) in accountList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinId">
          <el-select v-model="orderForm.coinId" size="small">
            <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <!--<el-input v-model="orderForm.uid" prop="uid" id="uid" clearable @blur.native.capture="searchAssets"></el-input> -->
        <el-form-item label="UID:" prop="uid" :label-width="formLabelWidth">
          <el-input v-model="orderForm.uid" clearable>
            <div slot="append" class="gcode" @click.stop="searchAssets">查询资产</div>
          </el-input>
        </el-form-item>
        <el-form-item label="可用数量" :label-width="formLabelWidth">
          <el-input v-model="orderForm.amountAvail" clearable :disabled="true"> </el-input>
        </el-form-item>
        <el-form-item label="调账数量:" prop="amount" :label-width="formLabelWidth">
          <el-row>
            <!--
            <el-col :span="4">
              <el-select v-model="orderForm.amountSymbol" size="small">
                <el-option label="+" :value="'+'"></el-option> <el-option label="-" :value="'-'"></el-option></el-select
            ></el-col>
            -->
            <el-col :span="10"> <el-input v-model="orderForm.amount" size="small"></el-input></el-col
          ></el-row>
        </el-form-item>
        <el-form-item label="调账原因:" :label-width="formLabelWidth" prop="remark">
          <el-input type="textarea" placeholder="请输入描述" v-model="orderForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addOrderDialog = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="confirmAddOrder" size="medium" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 创建批量导入 -->
    <el-dialog title="创建特殊调账" :visible.sync="groupOrderDialog" width="850px">
      <el-form :model="groupOrderForm" :rules="groupRules" ref="groupOrderForm">
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinId">
          <el-select v-model="groupOrderForm.coinId" size="small">
            <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量:" prop="amount" :label-width="formLabelWidth">
          <el-input v-model="groupOrderForm.amount" clearable> </el-input>
        </el-form-item>
        <el-form-item label="调账人员UID:" prop="uidString" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            rows="5"
            v-model="groupOrderForm.uidString"
            placeholder="用英文逗号分隔"
            size="small"
            @input="changeGroup"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="groupOrderDialog = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="confirmGroupOrder" size="medium" :loading="groupLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 调账详情，审核 -->
    <el-dialog title="查看调账详情" :visible.sync="dialogVisible" width="600px">
      <el-form :model="dataForm" ref="dataForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="订单号" :label-width="formLabelWidth">{{ curRow.orderNo }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="UID" :label-width="formLabelWidth">{{ curRow.uid }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="账户类型" :label-width="formLabelWidth">{{ curRow.accountType | fStatus }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="币种" :label-width="formLabelWidth">{{ curRow.coinName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="调账数量" :label-width="formLabelWidth">{{ curRow.amount }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="申请时间" :label-width="formLabelWidth">{{ curRow.createTime | typeTime }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申请人" :label-width="formLabelWidth">{{ curRow.appliName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="hasChecked">
          <el-col :span="12">
            <el-form-item label="审核时间" :label-width="formLabelWidth">{{ curRow.auditTime | typeTime }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="审核人" :label-width="formLabelWidth">{{ curRow.auditName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="调账原因" :label-width="formLabelWidth">{{ curRow.remark }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer" v-if="!isCheckStatus">
        <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
      </div>
      <div slot="footer" class="dialog-footer" v-else>
        <el-button type="primary" @click="dialogVisible = false" size="medium">取消</el-button>
        <el-button type="primary" @click="confirmReview(true)" size="medium" :loading="conLoading">审核通过</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { spreconCol, spreconColNoBtn, spreconConfig } from '@/config/column/financial';
import $api from '@/api/api';
import utils from '@/utils/util';
import { parseTime } from '@/utils/index';

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
      headBtnArr:[], // 后台节点树配置的按钮数组
      excelTitle: '特殊调账列表',
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
        { label: '法币', value: 2 },
        { label: '理财', value: 3 },
        { label: '币汇', value: 4 },
        { label: '合约', value: 5 },
      ],
      addOrderTitle:"创建调账（增）",
      addOrderDialog: false, // 创建弹出窗
      orderForm: {
        accountType: '',
        coinId: '',
        coinName: '',
        uid: 0,
        amountAvail: 0,
        amountSymbol: '+',
        amount: 0,
        remark: '',
      },
      rules: {
        accountType: [{ required: true, message: '必填', trigger: 'blur' }],
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        uid: [{ required: true, message: '必填', trigger: 'blur' }],
        amount: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      groupOrderForm: {
        coinId: '',
        amount: '',
        uidString: '',
      },
      groupRules: {
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        amount: [{ required: true, message: '必填', trigger: 'blur' }],
        uidString: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  computed: {
    hasChecked() {
      // 处于查看详情状态，并且该条数据不是待审核的状态，才能显示审核信息
      return !this.isCheckStatus && this.curRow.status != 0;
    },
  },
  filters: {
    fStatus(val) {
      let tmp = '';
      switch (val) {
        case 1:
          tmp = '币币';
          break;
        case 2:
          tmp = '法币';
          break;
        case 3:
          tmp = '理财';
          break;
        case 4:
          tmp = '币汇';
          break;
        case 5:
          tmp = '合约';
          break;
      }
      return tmp;
    },
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'checkPass') {
        this.isCheckStatus = true;
        this.dialogVisible = true;
      } else if (fn === 'checkOut') {
        this.$confirm('确定驳回?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            await this.confirmReview(false);
          })
          .catch(() => {
            // this.$message({ type: "info", message: "已取消驳回" });
          });
      } else if (fn === 'viewDetail') {
        this.isCheckStatus = false;
        this.dialogVisible = true;
      }
    },
    // 打开新建弹出框
    openAddDialog() {
      this.addOrderDialog = true;
      this.$nextTick(() => {
        this.$refs['orderForm'].resetFields();
        this.orderForm = {
          accountType: '',
          coinId: '',
          coinName: '',
          uid: 0,
          amountAvail: 0,
          amountSymbol: '+',
          amount: 0,
          remark: '',
        };
      });
    },
    // 审批
    async confirmReview(val) {
      // 1审核通过，2驳回
      const params = {
        id: this.curRow.id,
        type: val ? 1 : 2,
      };
      this.conLoading = true;
      const res = await $api.auditReconciliation(params);
      if (res) {
        this.$message({ type: 'success', message: res.data.message });
        this.getList();
        this.dialogVisible = false;
      }
      this.conLoading = false;
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
      this.searchCofig[2]['value'] = this.coinList[0].value;
      this.getList();
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    // 创建特殊调账
    addOrder(val) {
      let symbolNow = val === "add" ? "+" : "-";
      this.addOrderTitle = val === "add" ? "创建调账（增）" : "创建调账（减）";
      this.addOrderDialog = true;
      this.$nextTick(() => {
        this.orderForm = {
          accountType: '',
          coinId: '',
          coinName: '',
          uid: '',
          amountAvail: '',
          amountSymbol: symbolNow,
          amount: '',
          remark: '',
        };
        this.$refs['orderForm'].resetFields();
      });
    },
    // 创建批量导入
    addGroupOrder() {
      this.groupOrderDialog = true;
      this.$nextTick(() => {
        this.groupOrderForm = {
          coinId: '',
          amount: '',
          uidString: '',
        };
        this.$refs['groupOrderForm'].resetFields();
      });
    },
    // 新建调账
    confirmAddOrder() {
      this.$refs['orderForm'].validate(async valid => {
        if (valid) {
          const { accountType, amountSymbol, amount, coinId, uid, remark } = this.orderForm;
          let vm = this;
          let params = {
            accountType: accountType,
            // accountType: 1, // 规定是币币类型
            uid: +uid,
            coinId: +coinId,
            coinName: vm.coinList.filter(v => v.value == coinId)[0].label || '',
            amount: amountSymbol == '+' ? amount + '' : amountSymbol == '-' ? amountSymbol + amount + '' : amount + '',
            remark: remark,
          };
          this.btnLoading = true;
          const res = await $api.addReconciliation(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.addOrderDialog = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // 新建批量导入
    confirmGroupOrder() {
      this.$refs['groupOrderForm'].validate(async valid => {
        if (valid) {
          const { amount, coinId, uidString } = this.groupOrderForm;
          let params = {
            // accountType: 1, // 规定是币币类型
            uidString: uidString,
            coinId: +coinId,
            // coinName: this.coinList.find(v => v.value == coinId).label || "",
            amount: amount + '',
          };
          this.groupLoading = true;
          const res = await $api.addReconciliationBatch(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.groupOrderDialog = false;
            this.getList();
          }
          this.groupLoading = false;
        }
      });
    },
    changeInput(val) {
      this.groupOrderForm.amount = val;
      // 处理弹出层嵌套太深的hack方法
      // this.$forceUpdate();
    },
    changeGroup(val) {
      // this.$forceUpdate();
      // 输入限制防止违规的中文字符
      val = val && val.replace(/[^\,a-zA-Z\d]/gi, '');
      // val = val && val.replace(/[\r\n]/g, "");
      this.groupOrderForm.uidString = val;
      // this.$forceUpdate();
    },
    // 获取当前资产
    async searchAssets() {
      let tip = '';
      if (!this.orderForm.accountType) {
        tip = '请先选择资金账户类型';
      }
      if (!this.orderForm.coinId) {
        tip = '请先选择币种';
      }
      if (tip) {
        this.$message({
          message: tip,
          type: 'danger',
        });
        return;
      }
      const params = {
        accountType: this.orderForm.accountType + '',
        coinId: this.orderForm.coinId,
        uid: +this.orderForm.uid,
      };
      const res = await $api.accountUseraccount(params);
      if (res) {
        this.orderForm.amountAvail = res.data.data.amount;
        this.$forceUpdate();
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
      const res = await $api.specialReconciliation(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          v.coinName = this.coinList.filter(f => f.value == v.coinId)[0].label;
        });
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.specialReconciliation(params);
      if (res.data.data && res.data.data.records) {
        res.data.data.records.forEach(v => {
          v.coinName = this.coinList.filter(f => f.value == v.coinId)[0].label;
        });
      }
      this.excelLoading = false;
      return res;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        this.searchCofig[2]['value'] = this.coinList[0].value;
        params.coinId = this.coinList[0].value;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Sprecon', spreconCol, spreconColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.headBtnArr = authObj.btnArr || [];

    this.searchCofig = this.$util.clone(spreconConfig);
    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[2]['list'] = this.$store.state.common.coinlist;
      this.coinList = this.$store.state.common.coinlist;
      this.getList();
    });
  },
};
</script>
<style scope lang="scss">
.sprecon-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .sprecon-button {
    margin: 20px auto 15px;
    >button{
      margin:5px 0 5px 5px;
    }
    >button:last-child{
      margin:5px 0 5px 5px;
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
