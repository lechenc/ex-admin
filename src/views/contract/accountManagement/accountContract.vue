<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-12-17 19:45:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="coinContract-container">
    <el-row v-if="topBtn" class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="contractAccount-top"></div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <el-dialog title="销账" :visible.sync="dialogFormVisible">
      <el-form :model="dForm" ref="dForm" :rules="drules">
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinName">
          <el-select disabled v-model="dForm.coinName" placeholder="" width="20%">
            <el-option v-for="(item, idx) in coin_List" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前可用" prop="balance" :label-width="formLabelWidth">
          <el-input disabled type="number" v-model="dForm.balance" autocomplete="off" placeholder=""></el-input>
        </el-form-item>

        <el-form-item label="销账数量" prop="amount" :label-width="formLabelWidth">
          <el-input type="number" v-model="dForm.amount" autocomplete="off" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="dForm.remark"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { accountContractCol } from '@/config/column/contract';
import $api from '@/api/api';
import Precision from '@/utils/number-precision';
import activePage from '@/mixin/keepPage';
import BTwoRangeChoose from '@/components/b-two-range-choose';

export default {
  name: 'ContractAccount',
  components: {
    Btable,
    Bsearch,
    iconPage,
    BTwoRangeChoose,
  },
  data() {
    const numberReg = /^\d{1,11}$|^\d{1,11}[.]\d{1,8}$/;
    const checkNumberPwd = (rule, value, callback) => {
      if (!numberReg.test(value)) {
        return callback(new Error(rule.message));
      }
      callback();
    };
    return {
      topBtn: false,
      toDay: '',
      ago: '',
      modeOfCostOptions: [
        {
          value: '1',
          label: '正常开启',
        },
        {
          value: '0',
          label: '关闭',
        },
        {
          value: '2',
          label: '多空均收',
        },
      ],
      btnArr: [], // 权限按钮列表
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
      chainArr: [], // 链列表
      coin_List: [], // 交易对列表
      formLabelWidth: '150px',
      dialogFormVisible: false, // 编辑添加币种弹窗
      centerDialogVisible: false,
      dForm: {
        coinName: '',
        balance: '',
        amount: '',
        remark: '',
      },
      rowObj: {
        userId: '',
        coinName: '',
      },
      jform: {},
      formName: '新增币种',
      drules: {
        coinMarket: [{ required: true, message: '必填', trigger: 'blur' }],
        amount: [
          { required: true, message: '必填', trigger: 'blur' },
          {
            validator: checkNumberPwd,
            message: '请输入最多最多8位小数的数字',
            trigger: 'blur',
          },
        ],
        balance: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 5, max: 100, message: '长度在 5 到 100 个字符之间', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    estimate(val) {
      this.dialogFormVisible = true;
    },
    // 添加币种
    addGear() {
      this.formName = '添加档位';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['twoChoose'].resetValue();
        this.$refs['dForm'].resetFields();
        this.dForm = {
          id: '',
          coinMarket: '',
          basicInterestRate: '',
          premiumRateMin: '',
          premiumRateMax: '',
          capitalInterestRateMin: '',
          capitalInterestRateMax: '',
          modeOfCost: '',
        };
      });
    },
    async confirmOp() {
      this.$refs['dForm'].validate(async (valid) => {
        if (valid) {
          if (parseFloat(this.dForm.amount) > parseFloat(this.dForm.balance)) {
            return this.$message.error('销账数量不足');
          }
          let { amount, remark } = this.dForm;
          const query_data = {
            fromUserId: this.rowObj.userId,
            amount,
            remark,
          };
          let tmpName = '';
          tmpName = this.coin_List.filter((v) => v['label'] == this.rowObj.coinName)[0].value;
          query_data.coinId = tmpName;
          const res = await $api.apiDestroyBill(query_data);
          if (res) {
            this.$message.success('销账成功');
            this.getList();
          }
          this.dialogFormVisible = false;
        }
      });
    },

    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      if (val === 'minimumInitialMargin' || val === 'maintenanceMarginRatio') {
        this.dForm[val] = (this.dForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/, '$1$2.$3');
      }
      // 有第二个参数则是禁止小数位，必须整数
      if (nodot) {
        this.dForm[val] = this.dForm[val].replace(/[^\d]/g, '');
      }
      if (this.dForm[val] < 0) {
        this.dForm[val] = 0;
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
      this.searchCofig[5].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'destroy') {
        this.dialogFormVisible = true;
        let { coinName, balance, userId } = row;
        this.rowObj = {
          userId,
          coinName,
        };
        this.dForm = {
          coinName,
          balance,
        };
        return;
      }
      // 收益记录
      if (fn == 'earningsRecord') {
        this.$router.push({
          path: '/contract/accountManagement/earningsRecord',
        });
        return;
      }
      //销账记录
      if (fn == 'destroyBill') {
        this.$router.push({
          path: '/assetManage/writeoffRecord',
          query: {
            uid: row.uid,
            userId: row.userId,
            optType: 89,
          },
        });
        return;
      }

      //划转记录
      if (fn == 'transferRecord') {
        this.$router.push({
          path: '/assetManage/transferRecord',
          query: {
            topBtn: true,
            uid: row.uid,
          },
        });
        return;
      }

      //收益流水
      if (fn == 'earningsFlow') {
        this.$router.push({
          path: '/contract/accountManagement/earningsFlow',
          query: {
            topBtn: true,
            uid: row.uid,
            userId: row.userId,
          },
        });
        return;
      }
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = val.replace(/\%/, '');
      } else {
      }
      return Precision.divide(val, 100);
    },
    // 数字转为百分比
    numToPercent(val) {
      return Precision.times(val, 100);
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.coin_List.filter((v) => v['value'] == this.search_params_obj.coinMarket)[0].label;
          this.search_params_obj.coinMarket = tmpName;
        }
      }
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        userType: 106,
      };
      this.listLoading = true;
      const res = await $api.getAccountContractList(query_data);
      if (res) {
        this.list = res.data.data;
      }
      this.listLoading = false;
    },
  },
  created() {
    if (this.$route.query.topBtn) {
      this.topBtn = true;
    }
  },
  async mounted() {
    this.configs = accountContractCol;
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.$store.dispatch('common/getCoinList').then(() => {
      this.coin_List = this.$store.state.common.coinlist;
    });

    this.getList();
  },
};
</script>
<style lang="scss">
.coinContract-container {
  overflow: hidden;
  .contractAccount-top {
    height: 100px;
    background-color: #fff;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 1px 2px 6px #ccc;
  }
  padding: 4px 10px 10px 10px;
  .estimateDialog {
    .el-dialog__body {
      display: flex;
      .estimateForm {
        flex: 1;
      }
      .estimateBtn {
        margin-left: 14px;
        width: 80px;
        .el-button {
          padding: 44px 26px;
          &:nth-of-type(n + 1) {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  @media screen and(max-width: 750px) {
    .estimateDialog {
      .el-dialog__body {
        .estimateBtn {
          margin-top: 40px;
          .el-button {
            padding: 63px 26px;
            &:nth-of-type(n + 1) {
              margin-bottom: 62px;
            }
          }
        }
      }
    }
  }

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

  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
    }
  }

  .el-input-group__append {
    .el-upload-list {
      .el-upload-list__item {
        margin-top: 0;
        .el-upload-list__item-name {
          display: none;
        }
        .el-upload-list__item-status-label {
          display: none;
        }
      }
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
  .el-date-editor.el-input {
    max-width: 180px;
  }
  .el-dialog__body {
    max-height: 600px;
    overflow: auto;
  }
}
</style>
