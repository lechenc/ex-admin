<template>
  <div class="highFrequencyMonitor-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :calLoading="calLoading" calText="一键移出" :calTotal="btnArr.includes('removeAll')" @do-calTotal="calTotal" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加 编辑 -->
    <el-dialog title="代理商补充保证金" width="600px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="代理商UID" :label-width="formLabelWidth" prop="agentUID">
              <el-input type="text" v-model.trim="cForm.agentUID" placeholder="请输入" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="16">
            <el-form-item label="账户类型" :label-width="formLabelWidth" prop="type">
              <el-select v-model="cForm.type" placeholder="请选择">
                <el-option v-for="(item, idx) in type_List" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="16">
            <el-form-item label="币种" :label-width="formLabelWidth" prop="coinId">
              <el-select v-model="cForm.coinId" placeholder="请选择">
                <el-option v-for="(item, idx) in coin_List" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="可用数量" :label-width="formLabelWidth" prop="amountAll">
              <el-input type="text" disabled v-model.trim="cForm.amountAll" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="扣除数量" :label-width="formLabelWidth" prop="amount">
              <el-input @input="checkVal('amount')" class="my-mumber-input" type="number" v-model.trim="cForm.amount" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { highFrequencyMonitorConfig, highFrequencyMonitorColNoBtn, highFrequencyMonitorCol } from '@/config/column/contract';
import $api from '@/api/api';

export default {
  name: 'HighFrequencyMonitor',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      rules: {
        amount: [{ required: true, message: '必填', trigger: 'blur' }],
        agentUID: [{ required: true, message: '必填', trigger: 'blur' }],
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        amountAll: [{ required: true, message: '必填', trigger: 'blur' }],
        type: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      coin_List: [
        {
          label: 'USDT',
          value: 4,
        },
      ],
      type_List: [
        {
          label: '币币账户',
          value: 1,
        },
      ],
      cForm: {
        amount: '',
        agentUID: '',
        coinId: 4,
        type: 1,
        amountAll: '',
      },
      btnLoading: false,
      dialogFormVisible: false,
      btnArr: [],
      listLoading: false, // 表格loading
      isCURDAuth: true, // 是否可修改路径配置
      calLoading: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 20, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      curRow: {},
      symbollist: [],
      formLabelWidth: '120px',
    };
  },
  watch: {
    dialogFormVisible(newVal) {
      if (!newVal) {
        this.cForm = {
          amount: '',
          agentUID: '',
          coinId: 4,
          type: 1,
          amountAll: '',
        };
      }
    },
  },
  methods: {
    calTotal(data) {
      this.$confirm('确认一键移出所有监控操作吗?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const res = await $api.apiHighFrequencyMonitorRemoveAll({});
          if (res) {
            this.$message({ type: 'success', message: '移出成功' });
            this.getList();
          }
        })
        .catch(() => {});
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (this.cForm[val] < 0) {
        this.cForm[val] = 0;
      }
    },
    confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          if (this.cForm.amount > this.cForm.amountAll || this.cForm.amountAll == 0) {
            return this.$message.error('可用数量不足');
          }
          const res = await $api.userMonitorAdd({
            amount: this.cForm.amount,
            agentUID: this.cForm.agentUID,
            type: 2,
          });
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      // //console.log('data', data);
      if (fn == 'remove') {
        this.$confirm('确认移出监控操作吗?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const res = await $api.apiHighFrequencyMonitorRemove({
            userId:row.userId,
            createTime:row.createTime
          });
          if (res) {
            this.$message({ type: 'success', message: '移出成功' });
            this.getList();
          }
        })
        .catch(() => {});

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
      this.searchCofig.forEach((v) => {
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
      const res = await $api.apiGetHighFrequencyMonitorList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    // 时间格式 YYYY-MM-DD
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        this.searchCofig[0].value = [befV, nowV];
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('HighFrequencyMonitor', highFrequencyMonitorCol, highFrequencyMonitorColNoBtn);
    // //console.log('authObj', authObj);
    this.btnArr = authObj.btnArr || [];
    this.configs = authObj.val;
    this.searchCofig = this.$util.clone(highFrequencyMonitorConfig);

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style lang="scss">
.highFrequencyMonitor-container {
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
