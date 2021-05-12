<template>
  <div class="account-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addLine">添加永久积分</el-button>
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

    <!-- 添加永久积分弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="UID" prop="uid" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.uid" @blur="getBalance"> </el-input>
        </el-form-item>
        <el-form-item label="永久积分余额" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" :disabled="true" :value="balance"> </el-input>
        </el-form-item>
        <el-form-item label="数量" prop="amount" :label-width="labelWidth">
          <el-input type="number" placeholder="数量" v-model="form.amount">
            <el-select v-model="form.select" slot="prepend" placeholder="请选择" style="width:90px;">
              <el-option label="+" value="+"></el-option>
              <el-option label="-" value="-"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="原因" prop="remark" :label-width="labelWidth">
          <el-input type="textarea" rows="5" placeholder="" v-model="form.remark"> </el-input>
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
import iconPage from '@/components/icon-page';
import { integralCol, integralColNoBtin, integralConfig } from '@/config/column/warehouse';
import $api from '@/api/api';

export default {
  name: 'WarehouseIntegral',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
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
      title: '添加永久积分',
      labelWidth: '110px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        uid: '',
        select: '+',
        amount: '',
        remark: '',
      },
      rules: {
        mark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      balance: 0, // 积分余额
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      if (fn == 'detail') {
        // 周薪奖励
        this.$router.push({ path: '/warehouse/integralDetail', query: { id: row.uid } });
      }
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
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    addLine() {
      this.formName = '添加永久积分';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {
          uid: '',
          select: '',
          amount: '',
          remark: ''
        }
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      if(!this.form.select){
         this.$message({ message: '请先选择数量加减', type: 'error' });
        return;
      }
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { select, amount, ...prop } = this.form;
          const params = {
            amount: this.form.select == '+' ? amount : '-' + amount,
            ...prop,
          };
          this.btnLoading = true;
          // 新增
          const res = await $api.warehouseEditIntegralPermanent(params);
          if (res) {
            this.$message({ message: '添加成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          // //console.log('error submit!!');
          return false;
        }
      });
    },
    // 获取余额
    async getBalance() {
      if (!this.form.uid) {
        this.$message({ message: '请填写uid', type: 'error' });
        return;
      }
      const res = await $api.warehouseUserIntegralPermanent({ uid: this.form.uid });
      if (res) {
        this.balance = res.data.data && res.data.data.permanentPoint;
      }
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.warehousebonusIntegral(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        if (records.length > 0) {
          records.forEach(v => {
            v.emblemOld = v.emblem;
            v.emblem = v.emblem && v.emblem > 0 ? '加加林' + v.emblem : '--';
          });
        }
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
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
  },
  mounted() {
    let authObj = this.$util.getAuthority('WarehouseIntegral', integralCol, integralColNoBtin);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(integralConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.account-container {
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
