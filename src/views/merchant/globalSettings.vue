<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-06-20 14:16:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="globalSettings-container">
    <el-form :model="form" ref="form" :rules="rules" label-width="160px" size="medium">
      <div class="container-top">
        <span>当前参数</span>
        <div>
          <div class="coin">币种</div>
          <el-select v-model="coinName" clearable placeholder="请选择" size="medium" :disabled="!isModify">
            <el-option v-for="(item, i) in coinlist" :key="i" :label="item.label" :value="item.label"> </el-option>
          </el-select>
        </div>
      </div>

      <el-card class="box-card">
        <div class="box-card-row">
          <div>
            {{ coinName }}当前市价：<span>{{ form.toRMBPrice }}</span>
          </div>
          <div v-if="form.MERCHANT_RATE_TYPE == 1">
            {{ coinName }}当前兑入价格：<span>{{
              Math.floor((form.MERCHANT_IN_PRICE * 1 + form.MERCHANT_IN_PRICE_FLOAT * 1) * 1000000) / 1000000
            }}</span>
          </div>
          <div v-else>
            {{ coinName }}当前兑入价格：<span>{{ form.MERCHANT_IN_PRICE }}</span>
          </div>
          <div v-if="form.MERCHANT_RATE_TYPE == 1">
            {{ coinName }}当前兑出价格：<span>{{
              Math.floor((form.MERCHANT_OUT_PRICE * 1 + form.MERCHANT_OUT_PRICE_FLOAT * 1) * 1000000) / 1000000
            }}</span>
          </div>
          <div v-else>
            {{ coinName }}当前兑出价格：<span>{{ form.MERCHANT_OUT_PRICE }}</span>
          </div>
        </div>
      </el-card>
      <h4>商户设置</h4>
      <el-card class="box-card">
        <div class="box-card-con">
          <H5>兑入兑出价格设置</H5>
          <el-form-item label="类型" :label-width="labelWidth">
            <el-radio-group v-model="form.MERCHANT_RATE_TYPE">
              <el-radio label="1">系统</el-radio>
              <el-radio label="2">手动</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="货币" prop="MERCHANT_COIN_NAME" :label-width="labelWidth">
            <el-col :span="5"><el-input type="text" placeholder="请输入" v-model="form.MERCHANT_COIN_NAME" :disabled="!isModify"></el-input> </el-col>
          </el-form-item>

          <el-form-item label="兑入价格" :label-width="labelWidth" v-if="form.MERCHANT_RATE_TYPE == 1">
            <el-col :span="6">
              <el-input type="text" placeholder="请输入" v-model="form.MERCHANT_IN_PRICE" :disabled="true"></el-input>
            </el-col>
            <el-col :span="1">
              <div class="dot">+</div>
            </el-col>
            <el-col :span="5">
              <el-input type="text" placeholder="输入倍数（如0.9）" v-model="form.MERCHANT_IN_PRICE_FLOAT" :disabled="!isModify"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="兑入价格" :label-width="labelWidth" v-else>
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="form.MERCHANT_IN_PRICE" :disabled="!isModify"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="兑出价格" :label-width="labelWidth" v-if="form.MERCHANT_RATE_TYPE == 1">
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="form.MERCHANT_OUT_PRICE" :disabled="true"></el-input>
            </el-col>
            <el-col :span="1">
              <div class="dot">+</div>
            </el-col>
            <el-col :span="5">
              <el-input type="text" placeholder="输入倍数（如1.1）" v-model="form.MERCHANT_OUT_PRICE_FLOAT" :disabled="!isModify"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="兑出价格" :label-width="labelWidth" v-else>
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="form.MERCHANT_OUT_PRICE" :disabled="!isModify"></el-input>
            </el-col>
          </el-form-item>
          <p>提示：价格默认使用系统设置的价格; 如果开启手动设置的价格，那么自动关闭系统价格; 如果开启手动设置的的价格，则自动开启系统价格。</p>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="box-card-con">
          <H5>商户初始化设置</H5>
          <el-form-item label="支付方式">
            <el-select v-model="payType" placeholder="请选择" :disabled="!isModify">
              <el-option v-for="item in form.otcPayLists" :key="item.payType" :label="item.description" :value="item.payType"> </el-option>
            </el-select>
          </el-form-item>
          <el-row>
            <el-col :span="7">
              <el-form-item label="商户兑入手续费比例">
                <el-input
                  type="number"
                  v-model.trim="inFee"
                  @input="inFee = inFee.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')"
                  placeholder="未设置默认1.5%"
                  :disabled="!isModify"
                >
                  <div slot="append" class="gcode">%</div>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="商户兑出手续费比例">
                <el-input
                  type="number"
                  v-model.trim="outFee"
                  @input="outFee = outFee.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')"
                  placeholder="未设置默认0.3%"
                  :disabled="!isModify"
                >
                  <div slot="append" class="gcode">%</div>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item label="商户最小兑入额度" prop="MERCHANT_MIN_IN_AMOUNT">
                <el-input type="number" placeholder="请输入" v-model.trim="form.MERCHANT_MIN_IN_AMOUNT" :disabled="!isModify"> </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="商户最大兑入额度" prop="MERCHANT_MAX_IN_AMOUNT">
                <el-input type="number" placeholder="请输入" v-model.trim="form.MERCHANT_MAX_IN_AMOUNT" :disabled="!isModify"> </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item label="商户最小兑出额度" prop="MERCHANT_MIN_OUT_AMOUNT">
                <el-input type="number" placeholder="请输入" v-model.trim="form.MERCHANT_MIN_OUT_AMOUNT" :disabled="!isModify"> </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="商户最大兑出额度" prop="MERCHANT_MAX_OUT_AMOUNT">
                <el-input type="number" placeholder="请输入" v-model.trim="form.MERCHANT_MAX_OUT_AMOUNT" :disabled="!isModify"> </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <p>提示：商户默认该参数，可在商户查询模块单独配置该参数。初始化设置修改后只对新增商户生效。</p>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="box-card-con">
          <H5>全局设置</H5>
          <div v-if="coinName == 'USDT'">
            <el-form-item label="omni提币手续费" prop="MERCHANT_WITHDRAW_RATE_OMNI">
              <el-col :span="7">
                <el-input type="number" placeholder="请输入" v-model.trim="form.MERCHANT_WITHDRAW_RATE_OMNI" :disabled="!isModify"> </el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="Erc20提币手续费" prop="MERCHANT_WITHDRAW_RATE_ERC20">
              <el-col :span="7">
                <el-input type="number" placeholder="请输入" v-model.trim="form.MERCHANT_WITHDRAW_RATE_ERC20" :disabled="!isModify"> </el-input>
              </el-col>
            </el-form-item>
          </div>
          <div v-else>
            <el-form-item label="提币手续费" prop="MERCHANT_WITHDRAW_RATE">
              <el-col :span="7">
                <el-input type="number" placeholder="请输入" v-model.trim="form.MERCHANT_WITHDRAW_RATE" :disabled="!isModify"> </el-input>
              </el-col>
            </el-form-item>
          </div>

          <el-form-item label="转账手续费" prop="MERCHANT_TRADE_RATE">
            <el-col :span="7">
              <el-input type="number" placeholder="请输入" v-model.trim="form.MERCHANT_TRADE_RATE" :disabled="!isModify"> </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="商户兑入方式">
            <el-radio label="派单" @change="changeSwitch" :disabled="!isModify"></el-radio>
            <el-radio label="抢单" @change="changeSwitch" :disabled="!isModify"></el-radio>
          </el-form-item>
          <el-form-item label="抢单转派单时间" prop="rushWaitTime">
            <el-col :span="7">
              <el-input type="text" v-model="rushWaitTime" placeholder="请输入时间" @blur="changeSwitch" :disabled="!isModify">
                <div slot="append">S</div>
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商户批量兑出最大单数" prop="CASHOUT_NUM">
            <el-col :span="7">
              <el-input type="text" v-model="form.CASHOUT_NUM" :disabled="!isModify"> </el-input>
            </el-col>
          </el-form-item>
        </div>
      </el-card>
    </el-form>
    <div v-if="isCURDAuth">
      <div class="middle" v-if="!isModify">
        <el-button type="primary" size="medium" @click="isModify = true">修改</el-button>
      </div>
      <div class="middle" v-if="isModify">
        <el-button type="primary" plain size="medium" @click="isModify = false">取消</el-button>
        <el-button type="primary" size="medium" @click="openDialogCode">提交修改</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import $api from "@/api/api";
import utils from "@/utils/util";

export default {
  data() {
    return {
      coinName: this.$variableCoin,
      isCURDAuth: true, // 是否有增删改查权限
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      list: [], //委托列表
      labelWidth: "90px",

      inFee: 0,
      outFee: 0,
      payType: "",
      rushWaitTime: "",
      inSwitch: "1",
      form: {
        otcPayLists: [],
      },     
      rules: {
      },
      coinlist: [], // 币种
    };
  },
  watch: {
    coinName() {
      this.getList();
    },
    payType(newVal, oldVal) {
      this.form.otcPayLists.forEach((val, idx) => {
        if (val.payType == this.payType) {
          this.inFee = Math.floor(val.inFee * 10000) / 100;
          this.outFee = Math.floor(val.outFee * 10000) / 100;
        }
      });
    },
  },
  methods: {
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        coinName: this.coinName,
      };
      this.listLoading = true;
      const res = await $api.getTradeConfig(query_data);
      if (res) {
        // const { records, total, current, pages } = res.data.result;
        this.form = res.data.result;
        this.form.BATCHOUT_RATIO_FEE = Math.floor(this.form.BATCHOUT_RATIO_FEE * 10000) / 100;
        if (this.form.otcPayLists.length > 0) {
          this.payType = this.form.otcPayLists[0].payType;
        }
      }
      this.listLoading = false;
    },
    async getInSwitch() {
      const res = await $api.getInSwitch({});
      if (res) {
        this.inSwitch = res.data.result.inSwitch + "";
        this.rushWaitTime = res.data.result.rushWaitTime;
      }
    },
    // 更改商户兑入方式（接单，抢单）
    async changeSwitch() {
      const params = {
        inSwitch: this.inSwitch,
        rushWaitTime: this.rushWaitTime,
      };
      const res = await $api.modifyInSwitch(params);
      if (res) {
        this.getInSwitch();
      }
    },
    // 保存前输入谷歌验证码
    openDialogCode() {
      this.$prompt("请输入谷歌验证码", "安全验证", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.confirmSend(value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改",
          });
        });
    },
    // 保存页面修改
    async confirmSend(ggCode) {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          const { BATCHOUT_RATIO_FEE, otcPayLists, ...repo } = this.form;
          let params = {
            secret: ggCode,
            inFee: (this.inFee / 100).toFixed(4),
            outFee: (this.outFee / 100).toFixed(4),
            payType: this.payType,
            BATCHOUT_RATIO_FEE: Math.floor(BATCHOUT_RATIO_FEE) / 100,
            otcPayLists: JSON.stringify(otcPayLists),
            ...repo,
          };
          const res = await $api.updateConfigMerchant(params);
          if (res) {
            this.$message({ message: "修改成功！", type: "success" });
            this.getList();
            this.isModify = false;
          }
        }
      });
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("GlobalSettings");
    // if (authStatus === 2) {
    //   this.isCURDAuth = false;
    //   this.isModify = false;
    // } else {
    //   this.isCURDAuth = true;
    //   this.isModify = false;
    // }
    this.$store.dispatch("common/getFiatCoinList").then(() => {
      this.coinlist = this.$store.state.common.fiatcoinlist;
    });
    this.getList();
    this.getInSwitch();
  },
};
</script>
<style scope lang="scss">
.globalSettings-container {
  padding: 4px 10px 10px 10px;

  h4 {
    margin: 10px 0;
    font-size: 18px;
  }

  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      h5 {
        font-size: 16px;
      }
      h5::before {
        content: "";
        border-left: 5px solid #03a7f0;
        margin-right: 10px;
      }
      .con-line {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .panel {
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }
      .middle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .dot {
        margin: 0 10px;
        text-align: center;
        color: #9fa19f;
      }
      p {
        color: #9fa19f;
        font-size: 15px;
      }
    }
    .box-card-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      span {
        color: #000;
        font-weight: 600;
      }
    }
  }
  .middle {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .container-top {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 18px;
      height: 40px;
      line-height: 40px;
    }
    .coin {
      display: inline-block;
      font-size: 18px;
      margin-right: 10px;
    }
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
