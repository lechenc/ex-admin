<template>
  <div class="userdetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>基本信息</H3>
        <div class="card-info">
          <div><span>用户名：</span> {{ curRow.name }}</div>
          <!--		<div>用户类型：{{ curRow.uid | userType }}</div> **** -->
          <div><span>邮箱：</span>{{ curRow.email }}</div>
          <div><span>手机号码：</span>{{ curRow.phone }}</div>
          <!--   <div><span>商户名称:</span>{{ curRow.verifiedAudit }}</div>
          <div><span>商户UID:</span>{{ curRow.realName }}</div>   -->
          <div><span>上次登录IP：</span>{{ curRow.lastLoginIp }}</div>
          <div><span>上次登录时间：</span>{{ curRow.lastLoginDate }}</div>
          <div><span>申请时间：</span>{{ curRow.applyDate }}</div>
          <div>
            <span>谷歌密钥：</span>{{ curRow.googleVerify }}
            <el-button type="primary" plain size="small" @click="popups('chrome')">删除</el-button>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>参数设置</H3>
        <div class="card-list">
          <div>
            <span>商户兑入手续费：</span>
            <el-select v-model="payType" placeholder="请选择" size="mini" style="width:90px">
              <el-option v-for="item in payList" :key="item.payType" :label="item.description" :value="item.payType"> </el-option>
            </el-select>
            <div class="value">{{ inFee }}</div>
            <el-button type="primary" plain size="small" @click="popups('cashIn')">修改</el-button>
          </div>
          <div>
            <span>商户兑出手续费：</span>
            <el-select v-model="payType" placeholder="请选择" size="mini" style="width:90px">
              <el-option v-for="item in payList" :key="item.payType" :label="item.description" :value="item.payType"> </el-option>
            </el-select>
            <div class="value">{{ outFee }}</div>
            <el-button type="primary" plain size="small" @click="popups('cashOut')">修改</el-button>
          </div>
          <div>
            <span>商户兑出方式：</span>
            <span>
              <el-radio v-model="curRow.outType" :label="1" @change="outTypeChange">派单</el-radio>
              <el-radio v-model="curRow.outType" :label="2" @change="outTypeChange">抢单</el-radio>
            </span>
          </div>
          <div>
            <span>兑入额度范围(USDT)：</span>
            <div class="range">
              <span>【{{ coinInfo.minIn }}】 ~ 【{{ coinInfo.maxIn }}】</span>
            </div>
            <el-button type="primary" plain size="small" @click="popups('quotaIn')">修改</el-button>
          </div>
          <div>
            <span>兑出额度范围(USDT)：</span>
            <div class="range">
              <span>【{{ coinInfo.minOut }}】 ~ 【{{ coinInfo.maxOut }}】</span>
            </div>
            <el-button type="primary" plain size="small" @click="popups('quotaOut')">修改</el-button>
          </div>

          <div class="line">
            <label>代付兑出手续费比例 :</label>
            <span> 每单代付数量的</span>&nbsp;
            <el-input class="inputHasText" disabled placeholder="未设置默认1" :value="Math.floor(curRow.batchOutRatioFee * 10000) / 100"
              ><template slot="append"
                >%</template
              >
            </el-input>
            + 每单固定 &nbsp;<el-input class="inputHasText" disabled placeholder="未设置默认1" v-model="curRow.batchOutFixedFee"
              ><template slot="append">{{ coinName }}</template></el-input
            >
            <el-button type="primary" plain size="small" @click="popups('subPay')">修改</el-button>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 收银台组件 -->
    <CheckStand :data="pageData"></CheckStand>
    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="700px" :title="title">
      <el-form :model="rejectForm" ref="rejectForm" :rules="rejectRules" v-if="dialogStatus === 'chrome'">
        <el-row>
          <div class="vefify-code">
            删除后，用户需重置谷歌验证
          </div>
        </el-row>
        <el-form-item label="新谷歌密钥" prop="num" :label-width="labelwidth">
          <el-input type="text" placeholder="请输入" v-model="rejectForm.num"></el-input> </el-form-item
      ></el-form>

      <el-form :model="cashForm" ref="cashForm" :rules="cashRules" v-if="dialogStatus === 'cashIn' || dialogStatus === 'cashOut'">
        <el-form-item :label="formLabel" prop="text" :label-width="labelwidth">
          <el-input type="text" placeholder="请输入" v-model="cashForm.value1">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
      </el-form>

      <el-form :model="quotaForm" ref="quotaForm" :rules="quotaRules" v-if="dialogStatus === 'quotaIn' || dialogStatus === 'quotaOut'">
        <el-form-item :label="formLabel1" prop="value1" :label-width="labelwidth">
          <el-input type="text" placeholder="请输入" v-model="quotaForm.value1"> </el-input>
        </el-form-item>
        <el-form-item :label="formLabel2" prop="value2" :label-width="labelwidth">
          <el-input type="text" placeholder="请输入" v-model="quotaForm.value2"> </el-input>
        </el-form-item>
      </el-form>

      <el-form :model="subPayForm" ref="subPayForm" :rules="subPayRules" v-if="dialogStatus === 'subPay'">
        <el-form-item label="每单代付费率" prop="value1" :label-width="labelwidth">
          <el-input type="text" placeholder="请输入" v-model="subPayForm.value1">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="每单固定金额" prop="value2" :label-width="labelwidth">
          <el-input type="text" placeholder="请输入" v-model="subPayForm.value2">
            <div slot="append" class="gcode">{{ coinName }}</div>
          </el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false" style="margin-right:20px;">取消</el-button>
        <el-button type="primary" @click.stop="confirmDialog">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import $api from "@/api/api";
import CheckStand from "@/components/merchant/checkStand";
export default {
  components: { CheckStand },
  data() {
    return {
      coinName: this.$variableCoin,
      mainId: 0, // 首页传过来的id
      payType: 1, // 支付类型
      payList: [], // 接口获取的支付方式列表
      feeList: [], // 接口获取的
      coinInfo: {}, // 接口获取的
      pageData: {},
      labelwidth: "120px",
      listLoading: false, // 表格loading
      activeName: "assets",
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      curRow: {}, // 查看详情的条目
      counterForm: {}, // 收银台表单
      isCounterUpdate: false, // 收银台是否处于修改状态
      form: {
        status: false,
        type: 1,
        resource: 1,
        resource1: 1,
      },
      dialogVisible: false, // 是否弹窗可见
      dialogStatus: "", // 功能弹窗状态
      title: "", //  弹出框标题
      formLabel: "", // 表单特殊label
      formLabel1: "",
      formLabel2: "",
      // 驳回弹窗
      rejectForm: {
        num: "",
      },
      rejectRules: { num: [{ required: true, message: "必填", trigger: "blur" }] },
      // 兑入兑出弹窗
      cashForm: {
        value1: "",
      },
      cashRules: { value1: [{ required: true, message: "必填", trigger: "blur" }] },
      // 兑入兑出额度弹窗
      quotaForm: {
        value1: "",
        value2: "",
      },
      quotaRules: { value1: [{ required: true, message: "必填", trigger: "blur" }], value2: [{ required: true, message: "必填", trigger: "blur" }] },
      // 代付兑出弹窗
      subPayForm: {
        value1: "",
        value2: "",
      },
      subPayRules: { value1: [{ required: true, message: "必填", trigger: "blur" }], value2: [{ required: true, message: "必填", trigger: "blur" }] },
    };
  },
  computed: {
    inFee() {
      let inFee = 0;
      this.feeList.forEach((val, idx) => {
        if (val.payType == this.payType) {
          inFee = val.inFee;
          return;
        }
      });
      return Math.floor(inFee * 10000) / 100;
    },
    outFee() {
      let outFee = 0;
      this.feeList.forEach((val, idx) => {
        if (val.payType == this.payType) {
          outFee = val.outFee;
          return;
        }
      });
      return Math.floor(outFee * 10000) / 100;
    },
    payTypeName() {
      let payTypeName = "";
      this.payList.forEach((val, idx) => {
        if (val.payType == this.payType) {
          payTypeName = val.description;
          return;
        }
      });
      return payTypeName;
    },
  },
  filters: {
    userType(val) {},
  },
  methods: {
    popups(_str) {
      this.dialogStatus = _str;
      this.dialogVisible = true;
      switch (_str) {
        case "chrome":
          this.title = "提示";
          this.$nextTick(() => {
            this.$refs["rejectForm"].resetFields();
          });
          break;
        case "cashIn":
          this.title = "修改商户手续费【" + this.payTypeName + "】";
          this.formLabel = "商户兑入手续费";
          this.$nextTick(() => {
            this.$refs["cashForm"].resetFields();
            this.cashForm.value1 = this.inFee;
          });
          break;
        case "cashOut":
          this.title = "修改商户手续费【" + this.payTypeName + "】";
          this.formLabel = "商户兑出手续费";
          this.$nextTick(() => {
            this.$refs["cashForm"].resetFields();
            this.cashForm.value1 = this.outFee;
          });
          break;
        case "quotaIn":
          this.title = "修改兑入费率";
          this.formLabel1 = "最小兑入额度";
          this.formLabel2 = "最大兑入额度";
          this.$nextTick(() => {
            this.$refs["quotaForm"].resetFields();
            this.quotaForm.value1 = this.coinInfo.minIn;
            this.quotaForm.value2 = this.coinInfo.maxIn;
          });
          break;
        case "quotaOut":
          this.title = "修改兑出费率";
          this.formLabel1 = "最小兑入额度";
          this.formLabel2 = "最大兑入额度";
          this.$nextTick(() => {
            this.$refs["quotaForm"].resetFields();
            this.quotaForm.value1 = this.coinInfo.minOut;
            this.quotaForm.value2 = this.coinInfo.maxOut;
          });
          break;
        case "subPay":
          this.title = "修改代付兑出手续费比例";
          this.$nextTick(() => {
            this.$refs["subPayForm"].resetFields();
            this.subPayForm.value1 = Math.floor(this.curRow.batchOutRatioFee * 10000) / 100;
            this.subPayForm.value2 = this.curRow.batchOutFixedFee;
          });
          break;
        default:
          this.title = "";
          break;
      }
      // if (this.title) {
      //   this.dialogVisible = true;
      // }
    },
    async confirmDialog() {
      let params = {};
      let res = null;
      switch (this.dialogStatus) {
        case "chrome":
          this.$refs["rejectForm"].validate(async valid => {
            if (valid) {
              params = {
                userId: this.$route.query.id,
                secret: this.rejectForm.num,
              };
              res = await $api.deleteGoogleVerify(params);
              if (res) {
                this.$notify.success({
                  title: "提示",
                  message: res.msg,
                });
                this.dialogVisible = false;
              }
            }
          });
          break;
        case "cashIn":
          this.cashFunc("cashIn");
          break;
        case "cashOut":
          this.cashFunc("cashOut");
        case "quotaIn":
          this.quotaFunc("quotaIn");
          break;
        case "quotaOut":
          this.quotaFunc("quotaOut");
          break;
        case "subPay":
          this.$refs["subPayForm"].validate(async valid => {
            if (valid) {
              params = {
                batchOutRatioFee: Math.floor(this.subPayForm.value1) / 100,
                userId: this.mainId,
                batchOutFixedFee: this.subPayForm.value2,
              };
              res = await $api.updateBatchOutFee(params);
              if (res) {
                this.subPayForm.value1 = "";
                this.subPayForm.value2 = "";
                this.$notify.success({
                  title: "提示",
                  message: "修改代付手续费比例成功",
                });
                this.getDetail();
                this.dialogVisible = false;
              }
            }
          });
          break;
      }
    },
    // 修改兑入兑出手续费
    cashFunc(_str) {
      this.$refs["cashForm"].validate(async valid => {
        if (valid) {
          let params = {
            coinName: this.coinName,
            payType: this.payType,
            userId: this.mainId,
          };
          if (_str === "cashIn") {
            params.type = 1;
            params.value1 = (this.cashForm.value1 / 100).toFixed(4); //最小兑入手续费
          } else {
            params.type = 2;
            params.value2 = (this.cashForm.value1 / 100).toFixed(4); //最小兑入手续费
          }
          const res = await $api.updateMerchantFee(params);
          if (res) {
            this.cashForm.value1 = "";
            this.$notify.success({
              title: "提示",
              message: "修改手续费成功",
            });
            this.getDetail();
            this.dialogVisible = false;
          }
        }
      });
    },
    //修改兑入兑出额度
    async quotaFunc(type) {
      this.$refs["quotaForm"].validate(async valid => {
        if (valid) {
          let params = {
            coinName: this.coinName,
            payType: this.payType,
            userId: this.mainId,
            type: type === "quotaIn" ? 1 : 2, //1、兑入；2、兑出；
            value1: this.quotaForm.value1, //最小兑入额
            value2: this.quotaForm.value2, //最大兑入额
          };
          const res = await $api.updateMerchantCoinConfig(params);
          if (res) {
            this.quotaForm.value1 = "";
            this.quotaForm.value2 = "";
            this.$notify.success({
              title: "提示",
              message: "修改额度成功",
            });
            this.getDetail();
            this.dialogVisible = false;
          }
        }
      });
    },
    // 收银台设置修改后统一保存
    confirmSend() {
      this.$refs["counterForm"].validate(async valid => {
        if (valid) {
          const {} = this.counterForm;
          params = {};
          // res = await $api.addRobot(params);
        }
      });
    },
    // 商户兑出方式radio切换
    async outTypeChange(val) {
      const params = {
        exchangeType: val,
        type: 2,
        userId: this.mainId,
      };
      const res = await $api.updateMerchantExchangeType(params);
      if (res) {
        this.$notify.success({
          title: "提示",
          message: "兑出方式切换成功",
        });
      }
    },
    async getDetail() {
      if (this.listLoading) return;
      const params = {
        userId: this.mainId,
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.listLoading = true;
      const res = await $api.geMmerchantDetail(params);
      if (res) {
        const { info, payList, feeList, coinInfo } = res.data.result;
        this.curRow = info;
        this.payList = payList;
        this.feeList = feeList;
        this.coinInfo = coinInfo;
        this.pageData = res.data.result;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    this.mainId = this.$route.params.id;
    this.getDetail();
  },
};
</script>

<style lang="scss" scope>
.userdetail-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
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
  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      h3::before {
        content: "";
        border-left: 5px solid #03a7f0;
        margin-right: 10px;
      }
      .card-info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 300px;
          margin-right: 40px;
          font-size: 16px;
          line-height: 40px;
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }
      .card-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 45%;
          margin-bottom: 10px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          > span {
            display: inline-block;
            width: 20%;
            min-width: 190px;
            font-size: 16px;
            text-align: right;
          }
          .value {
            margin-left: 15px;
            margin-right: 20px;
            display: inline-block;
            font-size: 18px;
          }
          .range {
            min-width: 200px;
            margin-left: 15px;
            margin-right: 20px;
            display: inline-block;
            font-size: 18px;
          }
          button {
            display: inline-block;
          }
        }
        div.line {
          width: 100%;
          label {
            width: 19%;
            min-width: 170px;
            font-size: 16px;
            font-weight: 500;
            text-align: right;
          }
          span {
            width: 14%;
            min-width: 125px;
          }
        }
      }
      .card-line {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        .line {
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
        h5 {
          font-size: 16px;
          font-weight: 500;
        }
        .radio-line {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          .img-radio {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-right: 25px;
            img {
              width: 90px;
              height: 90px;
              margin-bottom: 10px;
            }
          }
        }
      }
      .middle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .vefify-code {
    margin-left: 40px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
  }

  .inputHasText {
    width: 140px;
    height: 32px;
    margin-right: 10px;
    .el-input__inner {
      height: 32px;
      padding: 0 5px;
      text-align: center;
    }
    .el-input-group__append {
      padding: 0 5px;
    }
  }
}

.el-switch.is-disabled {
  opacity: 1;
}
.el-switch.is-disabled .el-switch__core,
.el-switch.is-disabled .el-switch__label {
  cursor: pointer !important;
}
</style>
