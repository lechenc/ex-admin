<template>
<div class="robot-container">
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
    <div>
      <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
    </div>
    <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total">
    </el-pagination>
  </div>
  <!-- 添加 编辑 -->
  <el-dialog :title="formName" :visible.sync="dialogFormVisible" width="650px">
    <el-form :model="robotForm" ref="robotForm" :rules="rules">
      <el-form-item label="交易对" :label-width="formLabelWidth" prop="coinMarketId">
        <el-select v-model="robotForm.coinMarketId" placeholder="" wdith="20%">
          <el-option v-for="(item, idx) in coin_list" :key="idx" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="下单开始时间" prop="startTime" :label-width="formLabelWidth">
        <el-date-picker v-model="robotForm.startTime" type="datetime" placeholder="选择日期时间"> </el-date-picker>
      </el-form-item>
      <el-form-item label="下单结束时间" prop="endTime" :label-width="formLabelWidth">
        <el-date-picker v-model="robotForm.endTime" type="datetime" placeholder="选择日期时间"> </el-date-picker>
      </el-form-item>
      <el-form-item label="账号" :label-width="formLabelWidth" prop="account">
        <el-input v-model="robotForm.account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="loginPassword">
        <el-input v-model="robotForm.loginPassword" autocomplete="off" type="number"></el-input>
      </el-form-item>
      <b-range-choose @handler="rangeValue" ref="range" :label="'单次下单数据区间'" :value="robotForm.amountSection"></b-range-choose>
      <el-form-item label="启动状态" :label-width="formLabelWidth" prop="status" v-if="!isAdd">
        <el-switch v-model="robotForm.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
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
import BRangeChoose from '@/components/b-range-choose';
import {
  robotCol,
  robotColNoBtn,
  robotConfig
} from '@/config/column/symbol';
import $api from '@/api/api';

export default {
  name: 'Robot',
  components: {
    Btable,
    Bsearch,
    BRangeChoose,
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
      isAdd: false, // 是否是编辑false还是增加数据true
      getAmountSection: '', // 获取的数值范围
      robotForm: {
        id: '',
        startTime: '',
        endTime: '',
        account: '',
        loginPassword: '',
        coinMarket: '',
        amountSection: '',
        coinMarketId: '',
        status: 1,
      },
      rules: {
        startTime: [{
          required: true,
          message: '必填',
          trigger: 'change'
        }],
        endTime: [{
          required: true,
          message: '必填',
          trigger: 'change'
        }],
        account: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
        loginPassword: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
        // coinMarket: [{ required: true, message: "必填", trigger: "blur" }],
        coinMarketId: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
        amountSection: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
      },
      formName: '新增交易对',
      formLabelWidth: '150px',
      coin_list: [], // 交易对下拉列表
    };
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const {
        fn,
        row
      } = data;
      // 设置上架开关
      if (fn === 'switchCoin') {
        let params = {
          id: row.id,
        };
        params.status = row.status ? 0 : 1;
        const res = await $api.editRobot(params);
        if (res) {
          this.$message({
            message: res.data.message,
            type: 'success'
          });
        } else {
          console.log('editRobot error');
          // this.getList();
        }
      }
      // 编辑币种
      if (fn === 'edit') {
        this.isAdd = false;
        this.formName = '编辑机器人';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['robotForm'].resetFields();
          this.$refs['range'].resetForm();
          const {
            id,
            startTime,
            endTime,
            account,
            loginPassword,
            coinMarket,
            amountSection,
            coinMarketId,
            status
          } = row;
          this.robotForm = {
            id,
            startTime,
            endTime,
            account,
            loginPassword,
            amountSection,
            coinMarketId,
            coinMarket,
            status,
          };
        });
      }
    },
    // 范围组件更新范围数值
    rangeValue(ret) {
      if (ret.valid) {
        this.getAmountSection = ret.form.min + '-' + ret.form.max;
      } else {
        // console.log('rangeValue error');
      }
    },
    // 添加交易对
    addRobot() {
      this.isAdd = true;
      this.formName = '新增机器人';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['robotForm'].resetFields();
        this.$refs['range'].resetForm();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['range'].validate();
      // let aaa = this.$refs['range'].validate();
      this.$refs['robotForm'].validate(async valid => {
        if (valid) {
          const {
            id,
            coinMarketId,
            coinMarket,
            startTime,
            amountSection,
            endTime,
            status,
            ...prop
          } = this.robotForm;
          const params = {
            coinMarketId,
            startTime: this.formatTime(startTime),
            endTime: this.formatTime(endTime),
            status: status ? 0 : 1,
            amountSection: this.getAmountSection ? this.getAmountSection : amountSection ? amountSection : '',
            coinMarket: coinMarket ? coinMarket : this.coin_list.find(v => v.value == coinMarketId).label || '',
            ...prop,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.addRobot(params) : await $api.editRobot({
            id,
            status,
            ...params
          });
          if (res) {
            this.$message({
              message: res.data.message,
              type: 'success'
            });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          // console.log('error submit!!');
          return false;
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
    formatTime(val) {
      return typeof val === 'string' ? val : parseInt(new Date(val).getTime() / 1000);
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
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getRobotList(query_data);
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
        const s_list = [];
        records.forEach(v => {
          // s_list.push({label: v["coinMarket"], value: v["coinMarketId"]})
          // 状态0有效 1失效
          v['status'] = v['status'] ? false : true;
        });
        this.list = records;
        this.listLoading = false;
      }
    },
    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getSymbolList').then(() => {
        this.searchCofig[0]['list'] = this.$store.state.common.symbollist;
        this.coin_list = this.$store.state.common.symbollist;
      });
      // 币种获取（交易对由币种组合而成嘛）
      // this.$store.dispatch("common/getCoinList").then(() => {
      //   this.coin_list = this.$store.state.common.coinlist;
      // });
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('Robot', robotCol, robotColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(robotConfig);
    this.getList();
    this.getSymbolList();
  },
};
</script>

<style lang="scss" scoped>
.robot-container {
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
