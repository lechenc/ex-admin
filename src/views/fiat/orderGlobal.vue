<template>
  <div class="orderGlobal-container">
    <div class="container-top">
      <span>法币设置</span>
      <div>
        <div class="coin">币种</div>
        <el-select
          v-model="filterForm.coinName"
          clearable
          placeholder="请选择"
          size="medium"
          @change="getOtcCoinConfigInfo"
          :disabled="!isCoinDealerModify"
        >
          <el-option v-for="(item, i) in coinlist" :key="i" :label="item.label" :value="item.label"> </el-option>
        </el-select>
      </div>
    </div>

    <el-card class="box-card">
      <div class="box-card-con">
        <H5>币商接单额度设置</H5>
        <el-form :model="coinDealForm" ref="coinDealForm" :rules="coinDealFormRules" label-width="160px" size="medium">
          <el-form-item label="全局买币范围" prop="sysMatchMin" :label-width="labelWidth">
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="coinDealForm.sysMatchMin" :disabled="!isCoinDealerModify">
                <div slot="append">{{ filterForm.coinName }}</div>
              </el-input>
            </el-col>
            <el-col :span="1">
              <div class="dot">+</div>
            </el-col>
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="coinDealForm.sysMatchMax" :disabled="!isCoinDealerModify"
                ><div slot="append">{{ filterForm.coinName }}</div></el-input
              >
            </el-col>
          </el-form-item>
          <el-form-item label="全局卖币范围" prop="sysCashoutMin" :label-width="labelWidth">
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="coinDealForm.sysCashoutMin" :disabled="!isCoinDealerModify"
                ><div slot="append">{{ filterForm.coinName }}</div></el-input
              >
            </el-col>
            <el-col :span="1">
              <div class="dot">+</div>
            </el-col>
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="coinDealForm.sysCashoutMax" :disabled="!isCoinDealerModify"
                ><div slot="append">{{ filterForm.coinName }}</div></el-input
              >
            </el-col>
          </el-form-item>
          <el-form-item label="全局资产证明额度" prop="assetCertification" :label-width="labelWidth">
            <el-col :span="6">
              <el-input type="text" placeholder="请输入" v-model="coinDealForm.assetCertification" :disabled="!isCoinDealerModify">
                <el-select
                  v-model="coinDealForm.payType"
                  class="selectPayType"
                  slot="prepend"
                  @change="assetCertificationChange"
                  placeholder="请选择"
                >
                  <el-option v-for="(item, index) in OtcPayList" :key="index" :label="item.description" :value="item.value"></el-option>
                </el-select>
                <div slot="append">{{ filterForm.coinName }}</div></el-input
              >
            </el-col>
          </el-form-item>
          <el-form-item label="宝转卡接入单限制:" prop="atobLimitNum" :label-width="labelWidth">
            每张卡24小时内允许接 &nbsp;
            <el-input style="width:200px;" placeholder="请输入" v-model="coinDealForm.atobLimitNum" :disabled="!isCoinDealerModify"></el-input>
            &nbsp;笔单
          </el-form-item>
          <el-form-item label="" :label-width="labelWidth">
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="coinDealForm.atobLimitMin" :disabled="!isCoinDealerModify"
                ><div slot="append">{{ filterForm.coinName }}</div></el-input
              >
            </el-col>
            <el-col :span="1">
              <div class="dot">+</div>
            </el-col>
            <el-col :span="5">
              <el-input type="text" placeholder="请输入" v-model="coinDealForm.atobLimitMax" :disabled="!isCoinDealerModify"
                ><div slot="append">{{ filterForm.coinName }}</div></el-input
              >
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <div v-if="isCURDAuth">
        <div class="middle" v-if="!isCoinDealerModify">
          <el-button type="primary" size="medium" @click="isCoinDealerModify = true">修改</el-button>
        </div>
        <div class="middle" v-if="isCoinDealerModify">
          <el-button type="primary" plain size="medium" @click="isCoinDealerModify = false">取消</el-button>
          <el-button type="primary" size="medium" @click="confirmCoinDealer">提交修改</el-button>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="box-card-con">
        <H5>返佣设置</H5>
        <el-form :model="rebateForm" ref="rebateForm" :rules="rebateFormRules" label-width="160px" size="medium">
          <el-row>
            <el-col :span="7">
              <el-form-item label="全局最大买币返佣比例" prop="totalBuyRate">
                <el-input type="text" placeholder="请输入" v-model="rebateForm.totalBuyRate" :disabled="!isRebateModify">
                  <div slot="append" class="gcode">%</div>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <div class="next-text">设置后三级返佣比例之和不可超过该值</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item label="全局最大卖币返佣比例" prop="totalSaleRate">
                <el-input type="text" placeholder="请输入" v-model="rebateForm.totalSaleRate" :disabled="!isRebateModify">
                  <div slot="append" class="gcode">%</div>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <div class="next-text">设置后三级返佣比例之和不可超过该值</div>
            </el-col>
          </el-row>
          <el-form-item label="支付通道">
            <el-select v-model="rebateForm.payType" clearable placeholder="请选择" size="small" :disabled="!isRebateModify">
              <el-option label="银行卡" :value="1"></el-option>
              <el-option label="支付宝" :value="2"></el-option>
              <el-option label="微信" :value="3"></el-option>
              <el-option label="宝转卡" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="返佣等级">
            <el-select v-model="rebateForm.rank" clearable placeholder="请选择" size="small" :disabled="!isRebateModify">
              <el-option label="一级反佣" :value="1"></el-option>
              <el-option label="二级反佣" :value="2"></el-option>
              <el-option label="三级反佣" :value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-row>
            <el-col :span="9">
              <el-form-item label="默认返佣卖币返佣比例" prop="saleRate">
                <el-input type="text" placeholder="请输入" v-model="rebateForm.saleRate" :disabled="!isRebateModify">
                  <div slot="append" class="gcode">%</div>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="9">
              <el-form-item label="默认返佣买币返佣比例" prop="buyRate">
                <el-input type="text" placeholder="请输入" v-model="rebateForm.buyRate" :disabled="!isRebateModify">
                  <div slot="append" class="gcode">%</div>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div v-if="isCURDAuth">
        <div class="middle" v-if="!isRebateModify">
          <el-button type="primary" size="medium" @click="isRebateModify = true">修改</el-button>
        </div>
        <div class="middle" v-if="isRebateModify">
          <el-button type="primary" plain size="medium" @click="isRebateModify = false">取消</el-button>
          <el-button type="primary" size="medium" @click="confirmRebate" :loading="btnLoading">提交修改</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loadding
      isRebateModify: false, // "返佣"是否可以修改
      isCoinDealerModify: false, // "币商"是否可以修改
      isCashAuth: false, // 兑入兑出审核权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      labelWidth: '150px',
      dataObj: {},
      coinlist: [], // 币种
      filterForm: {
        coinName: 'USDT',
      }, // 币种列表(默认usdt)

      OtcPayList: [],

      coinDealForm: {
        coinId: '',
        deposit: '',
        otcFee: '',
        sysMatchMin: '',
        sysMatchMax: '',
        sysCashoutMin: '',
        sysCashoutMax: '',
        payType: 1,
        assetCertification: 1,
        atobLimitNum: '',
        atobLimitMin: '',
        atobLimitMax: '',
      },
      coinDealFormRules: {
        // text: [{ required: true, message: "必填", trigger: "blur" }],
        // text: [{ required: true, message: "必填", trigger: "blur" }],
        // text: [{ required: true, message: "必填", trigger: "blur" }],
      },
      rebateForm: {
        buyRate: null,
        payType: 1,
        rank: 1,
        saleRate: null,
        totalBuyRate: 0.1,
        totalSaleRate: 0.1,
      },
      rebateFormRules: {
        // text: [{ required: true, message: "必填", trigger: "blur" }],
        // text: [{ required: true, message: "必填", trigger: "blur" }],
        // text: [{ required: true, message: "必填", trigger: "blur" }],
      },
    };
  },
  methods: {
    getCoinLabel(val) {},
    // 修改 接单额度全局设置
    async confirmCoinDealer() {
      this.$refs['coinDealForm'].validate(async valid => {
        if (valid) {
          const {
            atobLimitNum,
            atobLimitMin,
            atobLimitMax,
            payType,
            assetCertification,
            sysMatchMin,
            sysMatchMax,
            sysCashoutMin,
            sysCashoutMax,
            coinId,
            deposit,
            otcFee,
          } = this.coinDealForm;
          const params = {
            coinId: coinId,
            deposit: deposit,
            otcFee: otcFee,
            sysMatchMin: sysMatchMin,
            sysMatchMax: sysMatchMax,
            sysCashoutMin: sysCashoutMin,
            sysCashoutMax: sysCashoutMax,
            assetCertification: assetCertification,
            payType: payType,
            atobLimitNum: atobLimitNum,
            atobLimitMin: atobLimitMin,
            atobLimitMax: atobLimitMax,
          };
          const res = await $api.UpdateOtcCoinConfig(params);
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.getOtcCoinConfigInfo();
            this.isCoinDealerModify = false;
          }
        }
      });
    },
    // 修改返佣
    async confirmRebate() {
      this.$refs['rebateForm'].validate(async valid => {
        if (valid) {
          const { name } = this.rebateForm;
          const params = {
            buyRate: Math.floor(this.rebateForm.buyRate * 100) / 10000,
            saleRate: Math.floor(this.rebateForm.saleRate * 100) / 10000,
            totalBuyRate: Math.floor(this.rebateForm.totalBuyRate * 100) / 10000,
            totalSaleRate: Math.floor(this.rebateForm.totalSaleRate * 100) / 10000,
            payType: this.rebateForm.payType,
            rank: this.rebateForm.payType,
          };
          this.btnLoading = true;
          const res = await $api.updateDefaultRate(params);
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.getDefaultRateInfo();
            this.isRebateModify = false;
          }
          this.btnLoading = false;
        }
      });
    },
    // 获取返佣设置数据
    async getDefaultRateInfo() {
      const params = { payType: this.rebateForm.payType, rank: this.rebateForm.rank };
      const res = await $api.getDefaultRate(params);
      if (res) {
        this.rebateForm = {
          buyRate: Math.floor(res.data.result.buyRate * 10000) / 100,
          payType: res.data.result.payType,
          rank: res.data.result.rank,
          saleRate: Math.floor(res.data.result.saleRate * 10000) / 100,
          totalBuyRate: Math.floor(res.data.result.totalBuyRate * 10000) / 100,
          totalSaleRate: Math.floor(res.data.result.totalSaleRate * 10000) / 100,
        };
      }
    },
    // 获取接单额度全局设置
    async getOtcCoinConfigInfo() {
      const params = { coinName: this.filterForm.coinName };
      const res = await $api.queryOtcCoinConfig(params);
      if (res) {
        const { coinInfo, atobLimitNum, atobLimitMin, atobLimitMax } = res.data.result;
        const { sysMatchMin, sysMatchMax, sysCashoutMin, sysCashoutMax, coinId, deposit, otcFee } = coinInfo;
        if (res.data.result.OtcPayList && res.data.result.OtcPayList.length > 0) {
          res.data.result.OtcPayList.forEach((item, index) => {
            this.OtcPayList.push({ description: item.description, value: item.payType * 1, assetCertification: item.assetCertification });
          });
        }
        this.coinDealForm = {
          coinId: coinId,
          deposit: deposit,
          otcFee: otcFee,
          sysMatchMin: sysMatchMin,
          sysMatchMax: sysMatchMax,
          sysCashoutMin: sysCashoutMin,
          sysCashoutMax: sysCashoutMax,
          payType: this.OtcPayList[0].value,
          assetCertification: this.OtcPayList[0].assetCertification,
          atobLimitNum: atobLimitNum,
          atobLimitMin: atobLimitMin,
          atobLimitMax: atobLimitMax,
        };
      }
    },
    assetCertificationChange(i) {
      this.coinDealForm.assetCertification = this.OtcPayList[i - 1].assetCertification;
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("GlobalSettings");
    // if (authStatus === 2) {
    //   this.isCURDAuth = false;
    //   this.isCoinDealerModify = false;
    //     this.isRebateModify =false;
    // } else {
    //   this.isCURDAuth = true;
    //   this.isCoinDealerModify = false;
    //     this.isRebateModify =false;
    // }
    this.$store.dispatch('common/getFiatCoinList').then(() => {
      this.coinlist = this.$store.state.common.fiatcoinlist;
    });
    this.getOtcCoinConfigInfo();
    this.getDefaultRateInfo();
  },
};
</script>
<style scope lang="scss">
.orderGlobal-container {
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
        margin: 0;
        padding: 20px 0;
      }
      h5::before {
        content: '';
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
        font-size: 12px;
      }
      .next-text {
        margin-left: 15px;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
      }
    }
    .box-card-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
  .middle {
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 400px;
  }

  .container-top {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    .coin {
      display: inline-block;
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
