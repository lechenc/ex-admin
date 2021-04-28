<template>
  <div class="dashboard-container">
    <div class="container-top">
      <div class="line" @click="$router.push({name:'WelcomeMain'})">数据统计</div>
    </div>
    <h3>待处理事件</h3>
    <ul class="inner-top">
      <li>
        <div class="subTitle">{{ curRow.real_name }}</div>
        <div class="title"><img src="/img/h0.png" alt="" /> 实名待处理</div>
      </li>
      <li>
        <div class="subTitle">{{ curRow.propose }}</div>
        <div class="title"><img src="/img/h1.png" alt="" />提币待处理</div>
      </li>
      <li>
        <div class="subTitle">{{ curRow.representation }}</div>
        <div class="title"><img src="/img/h2.png" alt="" />申诉待处理</div>
      </li>
      <li>
        <div class="subTitle">{{ curRow.advertiser }}</div>
        <div class="title"><img src="/img/h3.png" alt="" />广告商待审核</div>
      </li>
      <li>
        <div class="subTitle">{{ curRow.workOrder }}</div>
        <div class="title"><img src="/img/h4.png" alt="" />工单待处理</div>
      </li>
    </ul>

    <div class="inner-con">
      <div class="panel">
        <h4>注册统计</h4>
        <el-tabs v-model="activeRegist">
          <el-tab-pane label="历史注册统计" name="first">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>注册总人数</div>
                  <div>{{ curRow.registerTotal }}</div>
                </div>
                <div class="con">
                  <div>未实名人数</div>
                  <div>{{ curRow.noRealNameTotal }}</div>
                </div>
                <div class="con">
                  <div>初级实名人数</div>
                  <div>{{ curRow.realNameTotal }}</div>
                </div>
                <div class="con">
                  <div>高级实名人数</div>
                  <div>{{ curRow.advanceRealNameTotal }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="新增注册统计" name="second">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>今日新增</div>
                  <div>{{ curRow.dayAdd }}</div>
                </div>
                <div class="con">
                  <div>本周新增</div>
                  <div>{{ curRow.weekAdd }}</div>
                </div>
                <div class="con">
                  <div>本月新增</div>
                  <div>{{ curRow.monthAdd }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="活跃用户" name="third">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>今日登陆用户</div>
                  <div>{{ curRow.daySignIn }}</div>
                </div>
                <div class="con">
                  <div>币币今日交易人数</div>
                  <div>{{ curRow.dayCurrencyTransactionTotal }}</div>
                </div>
                <div class="con">
                  <div>法币今日交易人数</div>
                  <div>{{ curRow.dayLegalCurrencyTransactionTotal }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="panel">
        <h4>币币数据统计</h4>
        <el-tabs v-model="activeBB">
          <el-tab-pane label="交易额统计" name="first">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>成交总额(USDT)</div>
                  <div>{{ curRow.totalTurnoverUsdt }}</div>
                </div>
                <div class="con">
                  <div>成交总额(BTC)</div>
                  <div>{{ curRow.totalTurnoverBtc }}</div>
                </div>
                <div class="con">
                  <div>成交总额(ETH)</div>
                  <div>{{ curRow.totalTurnoverEth }}</div>
                </div>
                <div class="con">
                  <div>成交总额(ALPT)</div>
                  <div>{{ curRow.totalTurnoverAlpt }}</div>
                </div>
                <div class="con">
                  <div>成交总额(CNHT)</div>
                  <div>{{ curRow.totalTurnoverCnht }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史订单统计" name="second">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>订单总数</div>
                  <div>{{ curRow.orderTotal }}</div>
                </div>
                <div class="con">
                  <div>买入订单数</div>
                  <div>{{ curRow.buyOrderTotal }}</div>
                </div>
                <div class="con">
                  <div>卖出订单数</div>
                  <div>{{ curRow.sellOrderTotal }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手续费" name="third">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>USDT手续费</div>
                  <div>{{ curRow.poundageTotalUsdt }}</div>
                </div>
                <div class="con">
                  <div>BTC手续费</div>
                  <div>{{ curRow.poundageTotalBtc }}</div>
                </div>
                <div class="con">
                  <div>ETH手续费</div>
                  <div>{{ curRow.poundageTotalEth }}</div>
                </div>
                <div class="con">
                  <div>ALPT手续费</div>
                  <div>{{ curRow.poundageTotalAlpt }}</div>
                </div>
                <div class="con">
                  <div>CNHT手续费</div>
                  <div>{{ curRow.poundageTotalCnht }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="panel">
        <h4>法币统计数据</h4>
        <el-tabs v-model="activeFabi">
          <el-tab-pane label="交易额统计" name="first">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>成交总额(USDT)</div>
                  <div>{{ curRow.currencyTotalTurnover }}</div>
                </div>
                <div class="con">
                  <div>买入交易额(USDT)</div>
                  <div>{{ curRow.currencyBuyTotal }}</div>
                </div>
                <div class="con">
                  <div>卖出交易额(USDT)</div>
                  <div>{{ curRow.currencySellTotal }}</div>
                </div>
                <div class="con">
                  <div>成交总额(CNHT)</div>
                  <div>{{ curRow.currencyTotalTurnoverCnht }}</div>
                </div>
                <div class="con">
                  <div>买入交易额(CNHT)</div>
                  <div>{{ curRow.currencyBuyTotalCnht }}</div>
                </div>
                <div class="con">
                  <div>卖出交易额(CNHT)</div>
                  <div>{{ curRow.currencySellTotalCnht }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手续费统计" name="second">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>总手续费(USDT)</div>
                  <div>{{ curRow.currencyPoundageTotal }}</div>
                </div>
                <div class="con">
                  <div>总手续费(CNHT)</div>
                  <div>{{ curRow.currencyPoundageTotalCnht }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史订单统计" name="third">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>订单总数</div>
                  <div>{{ curRow.currencyOrderTotal }}</div>
                </div>
                <div class="con">
                  <div>买入订单数</div>
                  <div>{{ curRow.currencyBuyOrderTotal }}</div>
                </div>
                <div class="con">
                  <div>卖出订单数</div>
                  <div>{{ curRow.currencySellOrderTotal }}</div>
                </div>
              </div>
            </div></el-tab-pane
          >
        </el-tabs>
      </div>

      <div class="panel">
        <h4>充值提现统计数据</h4>
        <el-tabs v-model="activeRecharge">
          <el-tab-pane label="充值统计" name="first">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>BTC</div>
                  <div>{{ curRow.rechargeBtc }}</div>
                </div>
                <div class="con">
                  <div>USDT</div>
                  <div>{{ curRow.rechargeUsdt }}</div>
                </div>
                <div class="con">
                  <div>ETH</div>
                  <div>{{ curRow.rechargeEth }}</div>
                </div>
                <div class="con">
                  <div>ALPT</div>
                  <div>{{ curRow.rechargeAlpt }}</div>
                </div>
                <div class="con">
                  <div>CNHT</div>
                  <div>{{ curRow.rechargeCnht }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="提现统计" name="second">
            <div class="list-panel">
              <div class="over-con">
                <div class="con">
                  <div>BTC</div>
                  <div>{{ curRow.withdrawalBtc }}</div>
                </div>
                <div class="con">
                  <div>BTC手续费</div>
                  <div>{{ curRow.withdrawaPoundageBtc }}</div>
                </div>
                <div class="con">
                  <div>USDT</div>
                  <div>{{ curRow.withdrawalUsdt }}</div>
                </div>
                <div class="con">
                  <div>USDT手续费</div>
                  <div>{{ curRow.withdrawaPoundageUsdt }}</div>
                </div>
                <div class="con">
                  <div>ETH</div>
                  <div>{{ curRow.withdrawalEth }}</div>
                </div>
                <div class="con">
                  <div>ETH手续费</div>
                  <div>{{ curRow.withdrawaPoundageEth }}</div>
                </div>
                <div class="con">
                  <div>ALPT</div>
                  <div>{{ curRow.withdrawalAlpt }}</div>
                </div>
                <div class="con">
                  <div>ALPT手续费</div>
                  <div>{{ curRow.withdrawaPoundageAlpt }}</div>
                </div>
                <div class="con">
                  <div>CNHT</div>
                  <div>{{ curRow.withdrawalCnht }}</div>
                </div>
                <div class="con">
                  <div>CNHT手续费</div>
                  <div>{{ curRow.withdrawaPoundageCnht }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import $api from "@/api/api";
export default {
  name: "HomePage",
  data() {
    return {
      curRow: {}, // 基础数据成员
      radioStatus: "three", // 分类
      selectStatus: 1, // 分类
      myChart: null, // 折线图对象
      activeRegist: "first",
      activeBB: "first",
      activeRecharge: "first",
      activeFabi: "first",
    };
  },
  computed:{
    device() {
      return this.$store.state.app.device;
    }
  },
  methods: {
    // 基本信息
    async listDetail() {
      const res = await $api.overviewStatistics({});
      if (res) {
        const records = res.data.data;
        if (records) {
          let tmp = records;
          for(var i in tmp){
              if(tmp.hasOwnProperty(i)) {
                  tmp[i] = tmp[i] && (tmp[i] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3') || 0;
              }
          }
          this.curRow = tmp
        }
      }
    }
  },
  mounted() {
    //  @click="$router.push({path:'/check/examine',query:{ id:0 }})"
    this.listDetail();
  },
};
</script>

<style lang="scss">
.dashboard-container {
  padding: 4px 10px 10px 10px;
  h3 {
    font-size: 18px;
    padding: 0;
    margin: 0 0 20px 0;
  }
  h3::before {
    content: "";
    border-left: 5px solid #03a7f0;
    margin-right: 10px;
  }

  h4 {
    font-size: 18px;
    padding: 0;
    margin: 0 0 20px 20px;
  }
  h4::before {
    content: "";
    border-left: 5px solid #03a7f0;
    margin-right: 10px;
  }

  .inner-con {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    .panel {
      width: 49%;
      min-width: 400px;
      min-height: 200px;
      padding: 20px 0;
      margin-right: 1%;
      margin-bottom: 10px;
      background-color: #ffffff;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 1px 2px 6px #ccc;
      .list-panel {
        height: 200px;
        .over-con {
          height: 200px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: nowrap;
          overflow: scroll;
          padding: 0 7px;
          box-sizing: border-box;
          .con {
            min-width: 148px;
            display: flex;
            float: left;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            // user-select: none;
            div:first-child {
              text-align: center;
              margin: 30px 0 30px 0;
            }
            div:last-child{
              font-weight:600;
              color:#4390ff;
            }
            &::after {
              content: "";
              clear: both;
            }
          }
        }
      }
    }
  }

  ul.inner-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    list-style-type: none;
    margin-bottom: 5px;
    padding: 0;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 19%;
      min-width: 140px;
      height: 180px;
      overflow: hidden;
      margin: 0 5px 10px 0;
      background: #ffffff;
      border-radius: 5px;
      // box-shadow:1px 1px 2px 2px #ccc;rgba(0,0,0,.5)
      box-shadow: 1px 2px 6px #ccc;
      .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        font-weight: 500;
        color: #333333;
        img {
          width: 21px;
          height: 21px;
          margin-right: 6px;
        }
      }
      .subTitle {
        font-size: 18px;
        font-weight: 600;
        color: #4390ff;
        margin-bottom: 40px;
      }
      .list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0 20px;
        > .con {
          width: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span:first-child {
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  .container-top {
    margin: 25px 0;
    .line {
      font-size: 21px;
      font-weight: 700;
      color: #333;
      span {
        font-size: 21px;
        color: #606266;
      }
    }
    // .line::before {
    //   content: "";
    //   border-left: 5px solid #03a7f0;
    //   margin-right: 10px;
    // }
  }
  .container-btn {
    margin: 20px 0;
  }

  .el-tabs__nav {
    margin-left: 20px;
    .el-tabs__item {
      font-size: 15px;
      font-weight: 500;
      color: #aba8ac;
      &.is-active {
        font-size: 16px;
        font-weight: 600;
        color: #474448;
      }
    }
  }
}
@import "@/styles/media/dashboard.scss";
</style>
