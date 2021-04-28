<template>
  <div class="lockManage-container">
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
    <div class="sprecon-button" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addOrder('')">创建锁仓订单</el-button>
      <el-button type="primary" size="medium" @click="addOrder('group')">批量创建锁仓订单</el-button>
      <el-button type="primary" size="medium" @click="$router.push('/financial/lockConfig')">锁仓配置</el-button>
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
    <el-dialog :title="updateDialog" :visible.sync="addOrderDialog" width="600px">
      <el-form :model="orderForm" :rules="rules" ref="orderForm">
        <el-form-item label="账户类型" :label-width="formLabelWidth" prop="accountType">
          <el-select v-model="orderForm.accountType" size="small" :disabled="true">
            <el-option v-for="(item, idx) in accountList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="锁仓类型" :label-width="formLabelWidth" prop="orderType">
          <el-select v-model="orderForm.orderType" size="small" :disabled="!!orderForm.id">
            <el-option v-for="(item, idx) in lockList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinId">
          <el-select v-model="orderForm.coinId" size="small" :disabled="!!orderForm.id">
            <el-option v-for="(item, idx) in nowCoinArr" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <!--<el-input v-model="orderForm.uid" prop="uid" id="uid" clearable @blur.native.capture="searchAssets"></el-input> -->
        <el-form-item label="UID:" prop="uid" :label-width="formLabelWidth" v-if="!isBatchImport">
          <el-input v-model="orderForm.uid" clearable :disabled="!!orderForm.id"></el-input>
        </el-form-item>

        <el-form-item label="UID:" prop="uid" label-width="110px" v-else>
          <el-input
            :disabled="!!orderForm.id"
            type="textarea"
            rows="5"
            v-model="orderForm.uid"
            placeholder="用英文逗号分隔"
            size="small"
            @input="changeGroup"
          ></el-input>
        </el-form-item>

        <el-form-item label="锁仓数量" :label-width="formLabelWidth" prop="lockAmount">
          <el-input v-model="orderForm.lockAmount" @input="checkVal('lockAmount')" clearable> </el-input>
        </el-form-item>
        <el-form-item label="固定释放比例:" prop="percent" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="21">
              <el-input v-model="orderForm.percent" @input="checkVal('percent')" size="small">
                <div slot="prepend">
                  <el-select v-model="orderForm.lockType" placeholder="请选择锁仓时间类型" style="width:165px;">
                    <el-option label="日锁仓" :value="1"></el-option>
                    <el-option label="月锁仓" :value="2"></el-option>
                  </el-select>
                </div>
                <div slot="append">%</div>
              </el-input></el-col
            ></el-row
          >
        </el-form-item>
        <el-form-item label="锁仓原因:" :label-width="formLabelWidth" prop="remark">
          <el-input type="textarea" placeholder="请输入描述" v-model="orderForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addOrderDialog = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="confirmAddOrder" size="medium" :loading="btnLoading">确定锁仓</el-button>
      </div>
    </el-dialog>

    <!-- 调账详情，审核 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="600px">
      <el-form :model="dataForm" ref="dataForm" :rules="dataFormRules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="订单号" :label-width="formLabelWidth">{{ curRow.id }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="UID" :label-width="formLabelWidth">{{ curRow.uid }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="账户类型" :label-width="formLabelWidth">{{ curRow.accountType | aStatus }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="锁仓类型" :label-width="formLabelWidth">{{ curRow.orderType | oStatus }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="币种" :label-width="formLabelWidth">{{ curRow.coinName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="锁仓数量" :label-width="formLabelWidth">{{ curRow.lockAmount }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="锁仓时间类型" :label-width="formLabelWidth">{{ curRow.lockType | locktypeDiy }} </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="固定释放比例" :label-width="formLabelWidth">{{ curRow.percent }} %</el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="hasChecked">
          <el-col :span="12">
            <el-form-item label="锁仓时间" :label-width="formLabelWidth">{{ curRow.createTime }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="操作人" :label-width="formLabelWidth">{{ curRow.operatorUser }}</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="已解冻数量" :label-width="formLabelWidth">{{ curRow.releaseAmount }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="未解冻数量" :label-width="formLabelWidth">{{
              (curRow.lockAmount - curRow.releaseAmount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3')
            }}</el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="!isCheckStatus">
          <el-col :span="24">
            <el-form-item label="冻结原因" :label-width="formLabelWidth">{{ curRow.remark }}</el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="isCheckStatus">
          <el-col :span="24">
            <el-form-item label="解冻数量" :label-width="formLabelWidth" prop="amount">
              <el-input v-model="dataForm.amount" clearable> </el-input>
            </el-form-item>
            <el-form-item label="解冻原因:" style=" position: relative;" :label-width="formLabelWidth" prop="remark">
              <el-input type="textarea" placeholder="请输入描述" v-model="dataForm.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer" v-if="!isCheckStatus">
        <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
      </div>
      <div slot="footer" class="dialog-footer" v-else>
        <el-button type="primary" @click="dialogVisible = false" size="medium">取消</el-button>
        <el-button type="primary" @click="confirmReview(true)" size="medium" :loading="conLoading">确定解冻</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { lockManageCol, lockManageColNoBtn, lockManageConfig } from '@/config/column/financial';
import $api from '@/api/api';
import utils from '@/utils/util';
import { parseTime } from '@/utils/index';
import Precision from '@/utils/number-precision';

export default {
  name: 'LockManage',
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
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      excelTitle: '锁仓管理列表',
      coinList: [], // 币种
      formLabelWidth: '150px',
      isBatchImport: false, // 是否是批量导入状态
      // totalExFee: "", // 手续费总计
      // totalArrivalAccount: "", // 到账总计
      isCheckStatus: false, // 是否审核(true:审核,false:查看详情)
      dialogVisible: false, // 详情弹出窗
      groupOrderDialog: false, // 是否弹出批量导入弹窗
      curRow: {}, // 当前点击行的数据(展示详情使用)
      dataForm: {},

      lockList: [{ label: '星球算力冻结', value: 1 },{ label: '原始合伙人冻结', value: 2 },{ label: '私募冻结', value: 3 }],
      accountList: [{ label: '币币账户', value: 1 }],
      nowCoinArr: [],
      addOrderDialog: false, // 创建弹出窗
      orderForm: {
        id: '',
        accountType: 1,
        orderType: 1,
        coinId: '',
        uid: '',
        lockAmount: '',
        lockType: '',
        percent: '',
        remark: '',
      },
      rules: {
        accountType: [{ required: true, message: '必填', trigger: 'blur' }],
        orderType: [{ required: true, message: '必填', trigger: 'blur' }],
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        uid: [{ required: true, message: '必填', trigger: 'blur' }],
        lockAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        percent: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      dataForm: {
        id: '',
        amount: '',
        remark: '',
      },
      dataFormRules: {
        amount: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      dialogTitle: '查看详情',
      updateDialog: '创建锁仓订单',
    };
  },
  computed: {
    hasChecked() {
      // 处于查看详情状态，并且该条数据不是待审核的状态，才能显示审核信息
      return !this.isCheckStatus && this.curRow.status != 0;
    },
  },
  filters: {
    aStatus(val) {
      let tmp = '';
      switch (val) {
        case 1:
          tmp = '币币账户';
          break;
      }
      return tmp;
    },
    oStatus(val) {
      let tmp = '';
      switch (val) {
        case 1:
          tmp = '星球算力冻结';
          break;
        case 2:
          tmp = '原始合伙人冻结';
          break;
        case 3:
          tmp = '私募冻结';
          break;
      }
      return tmp;
    },
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
    locktypeDiy(val) {
      let tmp = '';
      switch (val) {
        case 1:
          tmp = '日锁仓';
          break;
        case 2:
          tmp = '月锁仓';
      }
      return tmp;
    },
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'edit') {
        this.updateDialog = '编辑锁仓订单';
        this.addOrderDialog = true;
        this.$nextTick(() => {
          this.$refs['orderForm'].resetFields();
          this.isBatchImport = ~(this.curRowuid + '').indexOf(',') ? true : false; // 是否是批量导入状态
          this.orderForm = {
            id: this.curRow.id,
            accountType: 1,
            orderType: 1,
            coinId: this.nowCoinArr[0].value || -1,
            uid: this.curRow.uid,
            lockAmount: this.curRow.lockAmount,
            lockType: this.curRow.lockType,
            percent: this.curRow.percent,
            remark: this.curRow.remark,
          };
        });
      } else if (fn === 'freeze') {
        // 解冻
        this.dialogTitle = '解冻操作';
        this.isCheckStatus = true;
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields();
          this.dataForm = {
            amount: '',
            remark: '',
          };
        });
      } else if (fn === 'detail') {
        // 详情
        this.dialogTitle = '查看详情';
        this.isCheckStatus = false;
        this.dialogVisible = true;
      }
    },
    // 解冻
    async confirmReview(val) {
      this.$refs['dataForm'].validate(async valid => {
        if (valid) {
          const { amount, remark } = this.dataForm;
          const params = {
            id: this.curRow.id,
            amount: parseFloat(amount),
            remark: remark,
          };
          this.conLoading = true;
          const res = await $api.unlockOrderByHand(params);
          if (res) {
            this.$message({ type: 'success', message: res.data.message });
            this.getList();
            this.dialogVisible = false;
          }
          this.conLoading = false;
        }
      });
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
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
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    // 创建特殊调账
    addOrder(val) {
      this.updateDialog = '创建锁仓订单';
      this.isBatchImport = val ? true : false; // 是否是批量导入状态
      this.addOrderDialog = true;
      this.$nextTick(() => {
        this.orderForm = {
          id: '',
          accountType: 1,
          orderType: 1,
          coinId: this.nowCoinArr[0].value || -1,
          uid: '',
          lockAmount: '',
          lockType: '',
          percent: '',
          remark: '',
        };
        this.$refs['orderForm'].resetFields();
      });
    },
    // 新建调账
    confirmAddOrder() {
      if (!this.orderForm.lockType) {
        this.$message({ type: 'error', message: '锁仓时间类型必须勾选！' });
        return;
      }
      this.$refs['orderForm'].validate(async valid => {
        if (valid) {
          const { id, accountType, orderType, coinId, lockType, percent, lockAmount, ...repo } = this.orderForm;
          let vm = this;
          let params = {
            accountType: +accountType,
            orderType: +orderType,
            lockAmount: +lockAmount,
            coinName: vm.coinList.filter(v => v.value == coinId)[0].label || '',
            lockType: +lockType,
            percent: Precision.divide(percent, 100),
            ...repo,
          };
          this.btnLoading = true;
          id === '' ? Object.assign(params) : Object.assign(params, { id });
          const res = id === '' ? await $api.addLockOrder(params) : await $api.editLockOrder(params);
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
        this.orderForm[val] = (this.orderForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //两个小数
      }
      if (val === 'lockAmount') {
        this.orderForm[val] = (this.orderForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3'); // 四个小数
      }
      if (this.orderForm[val] < 0) {
        this.orderForm[val] = 0;
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
      const res = await $api.getLockOrderList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          v.percent = v.percent && (Precision.times(v.percent, 100) + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
          v.amount = v.amount && (v.amount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
          v.remainingAmount = v.remainingAmount && (v.remainingAmount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
          v.releaseAmount = v.releaseAmount && (v.releaseAmount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
          v.lockAmount = v.lockAmount && (v.lockAmount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
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
      const res = await $api.getLockOrderList(params);
      // if (res.data.data && res.data.data.records) {
      //   res.data.data.records.forEach(v => {
      //     v.coinName = this.coinList.filter(f => f.value == v.coinId)[0].label;
      //   });
      // }
      this.excelLoading = false;
      return res;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [
          this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
          this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss'),
        ];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('LockManage', lockManageCol, lockManageColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(lockManageConfig);
    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[3]['list'] = this.$store.state.common.coinlist;
      this.coinList = this.$store.state.common.coinlist;
      // 强制默认只有两种币种
      let tmp = []
      tmp.push(this.coinList.filter(f => f.label == 'USDT')[0]);
      tmp.push(this.coinList.filter(f => f.label == 'ALPT')[0]);
      this.nowCoinArr = tmp;
    });
    this.getList();
  },
};
</script>
<style scope lang="scss">
.lockManage-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
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
