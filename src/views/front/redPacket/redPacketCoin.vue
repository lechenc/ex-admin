<template>
  <div class="treatyAssetsContract-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth" >
      <el-button type="primary" size="medium" @click="addCoin">添加币种</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!-- <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div> -->

    <!-- 添加 编辑 -->

    <el-dialog :title="formName" width="500px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="16">
            <el-form-item label="币种名称" :label-width="formLabelWidth" prop="coinName">
              <el-select @change="changeDecimal" v-model="cForm.coinName" placeholder="请选择">
                <el-option v-for="(item, idx) in coin_List" :key="idx" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="固定限制额" :label-width="formLabelWidth" prop="fixAmount">
              <el-input @input="checkVal('fixAmount')"  type="number" v-model.trim="cForm.fixAmount" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="红包最小额" :label-width="formLabelWidth" prop="minAmount">
              <el-input @input="checkVal('minAmount')" type="number" v-model.trim="cForm.minAmount" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="红包最大额" :label-width="formLabelWidth" prop="maxAmount">
              <el-input @input="checkVal('maxAmount')" v-model.trim="cForm.maxAmount" type="number" autocomplete="off" placeholder="请输入"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="是否启用" :label-width="formLabelWidth" prop="status">
              <el-switch v-model="cForm.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
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
import { redPacketCoinCol, redPacketCoinNoBtn, redPacketCoinConfig } from '@/config/column/redPacket';
import $api from '@/api/api';

export default {
  name: 'GetRecordMimic',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    // const decimalReg = /^\d{6}$/;
    // const checkDecimal = (rule, value, callback) => {
    //   if (!decimalReg.test(value)) {
    //     return callback(new Error(rule.message));
    //   }
    //   callback();
    // };
    return {
      isCURDAuth:false,
      rules: {
        coinName: [{ required: true, message: '必填', trigger: 'blur' }],
        maxAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        minAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        fixAmount: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      formLabelWidth: '150px',
      cForm: {
        coinName: '',
        id: '',
        coinId: '',
        maxAmount: '',
        minAmount: '',
        fixAmount: '',
        status: false,
      },
      btnLoading: false,
      formName: '添加币种',
      dialogFormVisible: false,
      listLoading: false, // 表格loading
      calLoading: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      symbollist: [],
      toDay: '',
      ago: '',
      rowObj: {},
      coin_List: [],
      decimalReg: /^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/,
    };
  },
  watch: {
    dialogFormVisible(newVal) {
      if (!newVal) {
        this.cForm = {
          id: '',
          coinName: '',
          coinId: '',
          maxAmount: '',
          minAmount: '',
          fixAmount: '',
          status: false,
        };
        this.decimalReg = /^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/;
      }
    },
  },

  methods: {
    changeDecimal(val) {
      this.cForm.minAmount = '';
      this.cForm.maxAmount = '';
      let decimal = this.coin_List.filter((v) => v['label'] == val)[0].decimalPlaces;

      let arr = [];
      for (let i = 0; i < decimal; i++) {
        arr.push('\\d');
      }
      let s1 = '/^(\\-)*(\\d+)\\.(';
      let s2 = arr.join('');
      let s3 = ').*$/';

      let reg = s1.concat(s2, s3);
      this.decimalReg = eval(reg);
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (val === 'minAmount' || val === 'maxAmount') {
        //  this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/, '$1$2.$3');
        this.cForm[val] = (this.cForm[val] + '').replace(this.decimalReg, '$1$2.$3');
      }

      if (this.cForm[val] < 0) {
        this.cForm[val] = 0;
      }
    },
    async confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          let { id, ...repo } = this.cForm;
          let params = {
            ...repo,
          };
          if (Number(params.minAmount) >= Number(params.maxAmount)) {
            return this.$message.error('红包最小额不得大于等于最大额');
          }
          params.coinId = this.coin_List.filter((v) => v['label'] == this.cForm.coinName)[0].value;
          params.minAmount = Number(params.minAmount);
          params.maxAmount = Number(params.maxAmount);
          params.status = this.cForm.status ? 1 : 0;
          id === '' ? params : Object.assign(params, { id });
          this.btnLoading = true;
          const res = !id ? await $api.addRedPacketCoin(params) : await $api.editRedPacketCoin(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    addCoin() {
      this.formName = '添加币种';
      this.dialogFormVisible = true;
    },
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑档位
      if (fn == 'edit') {
        this.formName = '编辑币种';
        this.dialogFormVisible = true;
        const { coinId, coinName, maxAmount, minAmount, fixAmount, status, id } = row;
        this.cForm = {
          coinId,
          coinName,
          maxAmount,
          minAmount,
          fixAmount,
          status: status ? true : false,
          id,
        };
      }
      if (fn === 'status') {
        let params = {
          id: row.id,
          status: row.status ? 1 : 0,
        };
        const res = await $api.editRedPacketCoin(params);
        if (res) {
          this.$message({ message: '切换成功', type: 'success' });
          this.getList();
        } else {
          this.getList();
        }
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
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
        // pageNum: this.current_page,
        // pageSize: this.pageSize,
      };
      // this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getRedPacketCoinList(query_data);
      if (res) {
        // const { records, total, current, pages } = res.data.data;
        // this.total = total;
        // this.pages = pages;
        // this.current_page = current;
        // this.list = records;
        let list = res.data.data;
        list.forEach((v) => {
          v.status = v.status ? true : false;
        });
        this.list = list;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.symbollist.filter((v) => v['id'] == this.search_params_obj.coinId)[0].value;
          this.search_params_obj.coinMarket = tmpName;
        }
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    async getSymbolList() {
      this.$store.dispatch('common/getCoinList').then(() => {
        this.coin_List = this.$store.state.common.coinlist;
        this.searchCofig[0]['list'] = this.$store.state.common.coinlist;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('RedPacketCoin', redPacketCoinCol, redPacketCoinNoBtn);
    
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(redPacketCoinConfig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style scope lang="scss">
.treatyAssetsContract-container {
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
}
</style>
