<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="coinForexRate-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <div class="container-btn" v-if="btnArr.includes('add')">
      <el-button type="primary" size="medium" @click="addRobot">添加</el-button>
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加 编辑 -->
    <el-dialog width="600px" :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="robotForm" ref="robotForm" :rules="rules">
        <el-form-item label="交易产品" :label-width="formLabelWidth" prop="name">
          <el-select v-model="robotForm.name" placeholder="" wdith="20%" :disabled="!!robotForm.id">
            <el-option v-for="(item, idx) in coinForexList" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="入金汇率" :label-width="formLabelWidth" prop="rateIn">
              <el-input @input="checkVal('rateIn')" v-model="robotForm.rateIn" autocomplete="off" type="number"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="出金汇率" :label-width="formLabelWidth" prop="rateOut">
              <el-input @input="checkVal('rateOut')" v-model="robotForm.rateOut" autocomplete="off" type="number"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="启动开关" :label-width="formLabelWidth" prop="enable">
          <el-switch v-model="robotForm.enable" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>
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
import { coinForexRateCol, coinForexRateColNoBtn, coinForexRateConfig } from '@/config/column/coinForex';
import $api from '@/api/api';

export default {
  name: 'CoinForexRate',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      searchCofig: [], // 搜索框配置
      btnLoading: false, // 提交
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchConfig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pages: 0, // 总页数
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      toDay: '',
      ago: '',

      btnArr: [],
      formName: '',
      robotForm: {},
      rules: {
        name: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],

        rateIn: [
          {
            required: true,
            message: '必填',
            trigger: 'change',
          },
        ],

        rateOut: [
          {
            required: true,
            message: '必填',
            trigger: 'change',
          },
        ],
      },
      formLabelWidth: '120px',
      userArr: [], // 主流币机器人列表
      coinForexList: [{ label: 'USD', value: 'USD' }],
      dialogFormVisible: false,
    };
  },

  methods: {
    // 对输入值的范围进行限制
    checkVal(val) {
      // this.robotForm[val] = (this.robotForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3'); // 4小数
      if (this.robotForm[val] < 0) {
        this.robotForm[val] = 0;
      }
    },
    // 添加交易对
    addRobot() {
      this.formName = '添加汇率';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['robotForm'].resetFields();
        this.robotForm = {
          id: '',
          name: '',
          rateIn: '',
          rateOut: '',
          enable: false,
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['robotForm'].validate(async (valid) => {
        if (valid) {
          const { id, enable, ...prop } = this.robotForm;

          const params = {
            enable: enable ? 1 : 0,
            ...prop,
          };

          // 新增 编辑
          const res = !id
            ? await $api.apiSaveCoinForexRate(params)
            : await $api.apiSaveCoinForexRate({
                id,
                ...params,
              });
          if (res) {
            let txt = !id ? '添加成功' : '编辑成功';
            this.$message({
              message: res.data.message,
              type: 'success',
            });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'edit') {
        // this.getRobotUserArr();
        this.formName = '编辑汇率';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['robotForm'].resetFields();
          const { id, name, rateIn, rateOut, enable } = row;
          this.robotForm = {
            id,
            name,
            rateIn,
            rateOut,
            enable: enable == 1 ? true : false,
          };
        });
      }
      if (fn === 'trswitch') {
        const { id, name, rateIn, rateOut, enable } = row;
        let params = {
          id,
          name,
          rateIn,
          rateOut,
          enable: enable ? 1 : 0,
        };
        const res = await $api.apiSaveCoinForexRate(params);
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },

    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },

    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;

      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(this.search_params_obj);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getCoinForexRateList(params);
      if (res) {
        const { records, current, total, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        records.forEach((v) => {
          v['enable'] = v['enable'] === 1 ? true : false;
        });
        this.list = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    // 时间格式 YYYY-MM-DD
    requiredParams(params) {
      return;
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

    // 币汇产品
    async getCoinForexList() {
      this.$store.dispatch('common/getCoinForexList').then(() => {
        this.coinForexList = this.$store.state.common.coinForexList;
        this.searchCofig[0]['list'] = this.coinForexList;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('CoinForexRate', coinForexRateCol, coinForexRateColNoBtn);
    
    this.btnArr = authObj.btnArr || [];
    this.configs = authObj.val;
    this.searchCofig = coinForexRateConfig;
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    // this.getCoinForexList();
    this.getList();
  },
};
</script>
<style lang="scss">
.coinForexRate-container {
  .el-form-item__content {
    margin-left: 0;
  }
  .container-btn {
    margin: 20px 0;
  }

  padding: 4px 10px 10px 10px;
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 30px auto 10px;
  }

  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
}
</style>
