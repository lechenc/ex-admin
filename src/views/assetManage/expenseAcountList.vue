<template>
  <div class="expenseAcountList-container">
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addLine('transfer')">划转</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!-- 划账 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinId">
          <el-select v-model="form.coinId" size="small" @change="getCoinNum">
            <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="`${curCoinName}可用余额`" :label-width="formLabelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.coinNum" :disabled="true"> </el-input>
        </el-form-item>
        <el-form-item label="转出数量" prop="amount" :label-width="formLabelWidth">
          <el-input type="number" placeholder="请输入" v-model="form.amount" @input="checkVal('amount')"> </el-input>
        </el-form-item>
        <el-form-item label="接收账户" :label-width="formLabelWidth" prop="toUserId">
          <el-select v-model="form.toUserId" size="small">
            <el-option v-for="(item, idx) in accountList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
          <el-input type="textarea" :row="5" placeholder="请输入" v-model="form.remark"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { expenseAcountCol, expenseAcountColNoBtn, expenseAcountConfig } from '@/config/column/assetManage';
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';
import utils from '@/utils/util';

export default {
  name: 'ExpenseAcountList',
  components: {
    Btable,
    Bsearch,
  },
  mixins: [activePage],
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      btnLoading: false,
      excelLoading: false, // 导出loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      title: '添加黑名单',
      formLabelWidth: '120px',
      dialogVisible: false, // 是否显示弹窗
      earnUserType: 103, // 支出账号类型值
      form: {
        coinNum: '',
        coinId: '',
        amount: '',
        toUserId: '',
        remark: '',
      },
      rules: {
        coinId: [{ required: true, message: '必填' }],
        amount: [{ required: true, message: '必填' }],
        toUserId: [{ required: true, message: '必填' }],
        remark: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
      coinList: [],
      curCoinName: '', // 当前选择的币种
      accountList: [], //  接收账号
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'transferEdit') {
        //  划转记录
        this.$router.push({ path: '/assetManage/transferRecord', query: { uid: row.uid } });
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
    // 获取接收用户列表
    async getTransferUserList(val) {
      const params = {
        userType: this.earnUserType,
      };
      const res = await $api.getUserTransferUserList(params);
      if (res.data && res.data.data) {
        let tmp = res.data.data;
        this.accountList = tmp.map(v => {
          return { label: v.realName, value: v.userId, typeId: v.userType, realName: v.realName };
        });
      }
    },
    // 获取该币种的余额
    async getCoinNum(val) {
      this.curCoinName = this.coinList.filter(v => v.value == this.form.coinId)[0].label;
      const params = {
        userId: this.list[0].userId,
        coinId: this.form.coinId,
      };
      const res = await $api.getAccountGetBalance(params);
      if (res.data && res.data.data) {
        this.form.coinNum = res.data.data.amount;
      }
    },
    // 控制输入的范围
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3'); 
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    addLine(val) {
      if (this.list.length == 0) {
        this.$message({ message: '没有账户禁止操作', type: 'error' });
        return;
      }
      this.title = '添加划转';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {
          coinNum: '',
          coinId: '',
          amount: '',
          toUserId: '',
          remark: '',
        };
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { coinId, amount, toUserId, remark } = this.form;
          const params = {
            coinId,
            amount,
            remark,
            fromUserId: this.list[0].userId,
            fromUserType: this.earnUserType,
            toUserId,
            toUserType: this.accountList.filter(v => v.value == toUserId)[0].typeId,
            realName: this.accountList.filter(v => v.value == toUserId)[0].realName,
          };
          this.btnLoading = true;
          const res = await $api.getExpendUserTransfer(params);
          if (res) {
            this.$message({ message: '划转添加成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getExpendDetail(params);
      if (res.data && res.data.data) {
        this.list = res.data.data;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (!params.userType) {
        params.userType = this.earnUserType;
      }
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   params.userType = this.earnUserType;
      // }
    },
    initFunc() {
      let authObj = this.$util.getAuthority('ExpenseAcountList', expenseAcountCol, expenseAcountColNoBtn);
      this.configs = authObj.val;
      this.isCURDAuth = authObj.isAdd;

      this.$store.dispatch('common/getCoinList').then(() => {
        this.coinList = this.$store.state.common.coinlist;
      });
      this.getTransferUserList();

      let tmpId = this.$route.query.userId;
      if (tmpId) {
        this.search_params_obj = { userId: tmpId };
        this.getList();
      } else {
        this.getList();
      }
    },
  },
  // mounted() {
  //   this.initFunc();
  // },
  activated() {
    if (this.isInTags()) {
      return;
    }

    this.list = []; //委托列表
    this.configs = []; // 委托列表列配置
    this.searchCofig = []; // 搜索框配置
    this.search_params_obj = {}; // 搜索框对象
    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.total = 0; // 总条数
    this.pages = 0; // 总页数

    this.initFunc();
  },
};
</script>
<style lang="scss">
.expenseAcountList-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
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

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
</style>
