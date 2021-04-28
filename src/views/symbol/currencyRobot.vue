<template>
<div class="currencyRobot-container">
  <div class="container-top">
    <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
  </div>
  <div class="container-btn" v-if="isCURDAuth">
    <el-button type="primary" size="medium" @click="addRobot">添加</el-button>
  </div>
  <div>
    <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
  </div>
  <div class="container-footer">
    <icon-page :total="total" :pages="pages"></icon-page>
    <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total">
    </el-pagination>
  </div>
  <!-- 添加 编辑 -->
  <el-dialog :title="formName" :visible.sync="dialogFormVisible">
    <el-form :model="robotForm" ref="robotForm" :rules="rules">
      <el-form-item label="主流币机器人ID" :label-width="formLabelWidth" prop="uid">
        <el-select v-model="robotForm.uid" placeholder="" wdith="20%" :disabled="!!robotForm.id">
          <el-option v-for="(item, idx) in userArr" :key="idx" :label="item.phone" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="交易对" :label-width="formLabelWidth" prop="coinMarket">
        <el-select v-model="robotForm.coinMarket" placeholder="" wdith="20%" :disabled="!!robotForm.id">
          <el-option v-for="(item, idx) in coin_list" :key="idx" :label="item.label" :value="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="下单委托深度取值比例" :label-width="formLabelWidth" prop="proportion">
        <el-input type="number" v-model="robotForm.proportion" autocomplete="off" @input="checkVal('proportion')">
          <div slot="append">%</div>
        </el-input>
      </el-form-item>
      <el-form-item label="深度参数" :label-width="formLabelWidth" prop="depthParameter">
        <el-input v-model="robotForm.depthParameter" autocomplete="off" type="number"></el-input>
      </el-form-item>
      <el-form-item label="启动开关" :label-width="formLabelWidth" prop="status">
        <el-switch v-model="robotForm.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
      </el-form-item>
      <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
        <el-input v-model="robotForm.googleCode" autocomplete="off" type="number"></el-input>
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
import Precision from '@/utils/number-precision';
import {
  currencyRobotCol,
  currencyRobotColNoBtn,
  currencyRobotConfig
} from '@/config/column/symbol';
import $api from '@/api/api';

export default {
  name: 'CurrencyRobot',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      dialogFormVisible: false,
      robotForm: {
        id: '',
        uid: '',
        coinMarket: '',
        proportion: '',
        depthParameter: '',
        status: false,
        googleCode: '',
      },
      rules: {
        uid: [{
          required: true,
          message: '必填',
          trigger: 'change'
        }],
        coinMarket: [{
          required: true,
          message: '必填',
          trigger: 'change'
        }],
        proportion: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
        depthParameter: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
        status: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
        googleCode: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
      },
      formName: '',
      formLabelWidth: '195px',
      coin_list: [], // 交易对下拉列表
      userArr: [], // 主流币机器人列表
    };
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const {
        fn,
        row
      } = data;
      // 列表里去除，只在编辑里才能修改
      // // 设置上架开关
      // if (fn === 'trstart') {
      //   let params = {
      //     id: row.id,
      //   };
      //   const res = await $api.setRoboEditRobot(params);
      //   if (res) {
      //     this.$message({ message: res.data.message, type: 'success' });
      //   } else {
      //     console.log('editRobot error');
      //     // this.getList();
      //   }
      // }
      // 编辑币种
      if (fn === 'edit') {
        this.getRobotUserArr();
        this.formName = '编辑主流币机器人';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['robotForm'].resetFields();
          const {
            id,
            uid,
            coinMarket,
            proportion,
            depthParameter,
            status,
            googleCode
          } = row;
          this.robotForm = {
            id,
            uid,
            coinMarket,
            proportion: (proportion + '').replace(/\%/g, ''),
            depthParameter,
            status,
            googleCode,
          };
        });
      }
    },
    // 添加交易对
    addRobot() {
      if (!this.userArr.length) {
        this.$message({
          message: "机器人列表为空，不可添加",
          type: 'error'
        });
        return;
      }
      this.getRobotUserArr();
      this.formName = '添加主流币机器人';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['robotForm'].resetFields();
        this.robotForm = {
          id: '',
          uid: '',
          coinMarket: '',
          proportion: '',
          depthParameter: '',
          status: false,
          googleCode: '',
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['robotForm'].validate(async valid => {
        if (valid) {
          const {
            id,
            proportion,
            uid,
            status,
            ...prop
          } = this.robotForm;
          let userId = "";
          if (id !== '') {
            userId = this.robotForm.userId;
          }
          const params = {
            uid: uid,
            status: status ? 2 : 1,
            proportion: Precision.divide(proportion, 100),
            ...prop,
          };
          id === '' ? params.userId = this.userArr.length && this.userArr.filter(v => v.uid == uid) && this.userArr.filter(v => v.uid == uid)[0].userId || '' : userId,
            this.btnLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.setRoboAddRobot(params) : await $api.setRoboEditRobot({
            id,
            ...params
          });
          if (res) {
            let txt = id === '' ? "添加成功" : "编辑成功";
            this.$message({
              message: res.data.message,
              type: 'success'
            });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
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
      if (this.search_params_obj.coinMarket) {
        this.search_params_obj.coinMarket = this.coin_list.filter(v => v.value == this.search_params_obj.coinMarket)[0].label || '';
      }
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getRobotRobotPage(query_data);
      if (res) {
        const {
          records,
          total,
          current,
          pages
        } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          // 自己增字段用来在列表显示
          v['statusText'] = v['status'];
          // 下单状态：1-不允许下单, 2-可下单
          v['status'] = v['status'] == 2 ? true : false;
          v['proportion'] = v['proportion'] && (Precision.times(v['proportion'], 100) + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') + '%';
        });
        this.list = records;
        this.listLoading = false;
      }
    },
    // 获取主流币机器人列表数组
    async getRobotUserArr() {
      const res = await $api.getRobotRobotList({});
      if (res) {
        this.userArr = res.data.data;
      }
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      // this.robotForm[val] = this.robotForm[val] > 100 ? 100 : this.robotForm[val];
      this.robotForm[val] = (this.robotForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d).*$/, '$1$2.$3'); //两个小数
      if (this.robotForm[val] < 0) {
        this.robotForm[val] = 0;
      }
    },
    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getSymbolList').then(() => {
        this.searchCofig[0]['list'] = this.$store.state.common.symbollist;
        this.coin_list = this.$store.state.common.symbollist;
      });
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('CurrencyRobot', currencyRobotCol, currencyRobotColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(currencyRobotConfig);
    this.getSymbolList();
    this.getRobotUserArr();
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.currencyRobot-container {
  padding: 4px 20px 10px 20px;

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

  // icon
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
}

/deep/ .el-dialog__body {
  max-height: 600px;
  overflow: auto;
}
</style>
