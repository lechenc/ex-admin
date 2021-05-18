<template>
  <div class="dashboard-container">
    <div class="container-top">
      <div class="line">数据统计</div>
    </div>
    <h3>风险提示</h3>
    <ul class="inner-top">
      <li v-for="(item, index) in riskRow" :key="index">
        <div class="subTitle">{{ item.level }}警报</div>
        <div class="title">{{ item.coinName || '' }}</div>
        <div class="title">{{ item.amount || 0 }}USDT</div>
      </li>
    </ul>

    <h3>盈亏统计</h3>
    <div class="inner-con">
      <div class="panel all">
        <div class="line-header">盈亏统计</div>
        <div class="list-panel">
          <div class="over-con">
            <div class="con">
              <div>历史盈亏</div>
              <div>{{ curRow.profitAndLossHistory || 0 }}</div>
            </div>
            <div class="con">
              <div>昨日盈亏</div>
              <div>{{ curRow.yesterdayProfitAndLoss || 0 }}</div>
            </div>
            <div class="con">
              <div>上周盈亏</div>
              <div>{{ curRow.lastWeekProfitAndLoss || 0 }}</div>
            </div>
            <div class="con">
              <div>上月盈亏</div>
              <div>{{ curRow.lastMonthProfitAndLoss || 0 }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="line-header">
          当前持仓实时盈亏
          <div class="chart-subHeader">
            <el-select v-model="selectProfit" placeholder="请选择币对" style="width: 140px" @change="changeProfitSelect">
              <el-option v-for="(item, index) in symbollist" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div label="交易额统计">
          <div class="list-panel">
            <div class="over-con">
              <div class="con">
                <div>总盈亏</div>
                <div>{{ profitRow.profitAndLossSum || 0 }}</div>
              </div>
              <div class="con">
                <div>多仓盈亏</div>
                <div>{{ profitRow.mulitProfitAndLoss || 0 }}</div>
              </div>
              <div class="con">
                <div>空仓盈亏</div>
                <div>{{ profitRow.emptyProfitAndLoss || 0 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="line-header">
          当日已实现实时盈亏
          <div class="chart-subHeader">
            <el-select v-model="selectDayProfit" placeholder="请选择币对" style="width: 140px" @change="changeDayProfitSelect">
              <el-option v-for="(item, index) in symbollist" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div label="交易额统计">
          <div class="list-panel">
            <div class="over-con">
              <div class="con">
                <div>总盈亏</div>
                <div>{{ dayProfitRow.profitAndLossSum || 0 }}</div>
              </div>
              <div class="con">
                <div>多仓已实现盈亏</div>
                <div>{{ dayProfitRow.mulitProfitAndLoss || 0 }}</div>
              </div>
              <div class="con">
                <div>空仓已实现盈亏</div>
                <div>{{ dayProfitRow.emptyProfitAndLoss || 0 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="inner-con">
      <div class="panel all">
        <ChartTable></ChartTable>
      </div>
      <div class="panel all">
        <div id="echarPie"></div>
      </div>
    </div>

    <h3>人数统计</h3>
    <div class="inner-con">
      <div class="panel">
        <div class="line-header">合约统计</div>
        <div class="list-panel">
          <div class="over-con">
            <div class="con">
              <div>开通合约人数</div>
              <div>{{ personRow.openContractNumber || 0 }}</div>
            </div>
            <div class="con">
              <div>历史交易人数</div>
              <div>{{ personRow.tradeNumber || 0 }}</div>
            </div>
            <div class="con">
              <div>初级实名认证人数</div>
              <div>{{ personRow.authenticationNameNumber || 0 }}</div>
            </div>
            <div class="con">
              <div>高级实名认证人数</div>
              <div>{{ personRow.advanceRealNameNumber || 0 }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="line-header">
          当前实际活跃
          <div class="chart-subHeader">
            <el-select v-model="selectActivePerson" placeholder="请选择币对" style="width: 140px" @change="changeActivePersonSelect">
              <el-option v-for="(item, index) in symbollist" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div label="交易额统计">
          <div class="list-panel">
            <div class="over-con">
              <div class="con">
                <div>持仓人数</div>
                <div>{{ activePersonRow.positionNumber || 0 }}</div>
              </div>
              <div class="con">
                <div>持多仓张数</div>
                <div>{{ activePersonRow.mulitPositionNumber || 0 }}</div>
              </div>
              <div class="con">
                <div>持空仓张数</div>
                <div>{{ activePersonRow.emptyPositionNumber || 0 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3>数据统计</h3>
    <div class="inner-con">
      <div class="panel all">
        <div class="line-header">
          交易额统计
          <div class="chart-subHeader">
            <el-date-picker
              size="small"
              v-model="tradeTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy/MM/dd HH:mm:ss"
              :picker-options="$util.datePickerOptions({ disabledDate: 'aft' })"
              :default-time="['00:00:00', '23:59:59']"
              @change="listTradeAll"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="list-panel">
          <div class="over-con">
            <div class="con">
              <div>交易额总量</div>
              <div>{{ tradeRow.tradeAmounSum || 0 }}</div>
            </div>
            <div class="con">
              <div>爆仓总额</div>
              <div>{{ tradeRow.burstAmountSum || 0 }}</div>
            </div>
            <div class="con">
              <div>资金费用总额</div>
              <div>{{ tradeRow.costAmountSum || 0 }}</div>
            </div>

            <div class="con">
              <div>手续费总额</div>
              <div>{{ tradeRow.feeAmountSum || 0 }}</div>
            </div>
            <div class="con">
              <div>实际到账手续费总额</div>
              <div>{{ tradeRow.realFeeAmountSum || 0 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import $api from '@/api/api';
import echarts from 'echarts';
import ChartTable from '@/components/chart/chartTable';
export default {
  name: 'DataStatistics',
  components: {
    ChartTable,
  },
  data() {
    return {
      curRow: {}, // 基础数据成员
      radioStatus: 'three', // 分类
      selectStatus: 1, // 分类
      symbollist: [], // 合约币对
      selectProfit: '', // 实时盈亏选择的币对
      selectDayProfit: '', // 当日已实现盈亏币对
      selectActivePerson: '', // 人数统计-当前实时活跃
      tradeTime: '', // 交易额统计的时间筛选
      profitRow: {}, // 实时盈亏的对象
      dayProfitRow: {}, // 当日已实现盈亏对象

      personRow: {}, // 人数统计-实时统计对象
      activePersonRow: {}, // 实时活跃人数对象
      riskRow: {}, // 风险对象
      tradeRow:{}, // 交易额统计对象
      timer: null,

      myPieChart: null, // 饼图对象
      option: {
        title: {
          text: '盈亏统计饼形图',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: [],
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [

            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    };
  },
  computed: {
    device() {
      return this.$store.state.app.device;
    },
  },
  methods: {
    changeProfitSelect(val) {
      this.selectProfit = val;
      this.listCurrentProfit();
    },
    changeDayProfitSelect(val) {
      this.selectDayProfit = val;
      this.listDayProfit();
    },
    changeActivePersonSelect(val) {
      this.selectActivePerson = val;
      this.listActivePerson();
    },
    // 基本信息
    async listDetail() {
      const res = await $api.overviewStatistics({});
      if (res) {
        const records = res.data.data;
        if (records) {
          let tmp = records;
          for (var i in tmp) {
            if (tmp.hasOwnProperty(i)) {
              tmp[i] = (tmp[i] && (tmp[i] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3')) || 0;
            }
          }
          this.curRow = tmp;
        }
      }
    },
    async listProfit() {
      const res = await $api.getProfitAndLoss({});
      if (res) {
        const records = res.data.data;
        if (records) {
          this.curRow = records;
        }
      }
    },
    async listCurrentProfit() {
      const params = {
        type: 1,
      };
      if (this.selectProfit) {
        params.coinId = this.selectProfit;
      }
      const res = await $api.getCurrentProfitAndLoss(params);
      if (res) {
        const records = res.data.data;
        if (records) {
          this.profitRow = records;
        }
      }
    },
    async listDayProfit() {
      const params = {
        type: 2,
      };
      if (this.selectDayProfit) {
        params.coinId = this.selectDayProfit;
      }
      const res = await $api.getCurrentProfitAndLoss(params);
      if (res) {
        const records = res.data.data;
        if (records) {
          this.dayProfitRow = records;
        }
      }
    },
    async listPerson() {
      const res = await $api.getContractStatistics({});
      if (res) {
        const records = res.data.data;
        if (records) {
          this.personRow = records;
        }
      }
    },
    async listActivePerson() {
      const params = {};
      if (this.selectActivePerson) {
        params.coinId = this.selectActivePerson;
      }
      const res = await $api.getCurrentActive(params);
      if (res) {
        const records = res.data.data;
        if (records) {
          this.activePersonRow = records;
        }
      }
    },
    // 风险统计
    async listRisk() {
      const res = await $api.getRiskStatement({});
      if (res) {
        const records = res.data.data;
        if (records.length) {
          this.riskRow = records;
        }
      }
    },
    // 交易额统计
    async listTradeAll() {
      let params = {}
      if (this.tradeTime) {
        // pc和移动端的时间区间双框
        params['startTime'] = this.tradeTime[0];
        params['endTime'] = this.tradeTime[1];
        params['startTime'] = this.formatTime(params['startTime']);
        params['endTime'] = this.formatTime(params['endTime']);
      }
      const res = await $api.getTradeStatistics(params);
      if (res) {
        const records = res.data.data;
        if (records) {
          this.tradeRow = records;
        }
      }
    },
    async getPieData() {
      const res = await $api.getProfitAndLossGraphicals({});
      if (res) {
        //console.log('res', res);
        const tmp = res.data.data && res.data.data.coinRateVOList;
        let seriesData = [];
        let legendData = [];
        let getKey = 1;
        tmp.forEach(v => {
          getKey++;
          seriesData.push({ name: v.coinName || getKey + 'mock', value: this.percentToNum(v.profitLossAmount) });
          legendData.push(v.coinName || getKey + 'mock');
        });
        this.option.legend.data = legendData;
        this.option.series[0].data = seriesData;

        this.graphical();
      }
    },
    // 绘图饼形图echarts
    graphical() {
      if (!this.myPieChart) {
        this.myPieChart = echarts.init(document.getElementById('echarPie'));
      }
      // 这里重启echarts数据，不用appendData，是因为例如币币的可能某个时间段只有两个币种但某时段突增了4个币种
      this.myPieChart.setOption(this.option);
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = val.replace(/\%/, '');
      } else {
      }
      // return Number(val)
      return Math.abs(Number(val));
    },
    getAllData() {
      this.timer = setInterval(() => {
        this.listRisk();
        this.listProfit();
        this.listCurrentProfit();
        this.listDayProfit();

        this.listPerson();
        this.listActivePerson();
        this.listTradeAll()
      }, 6000);
    },
  },
  activated() {
    // 交易对获取
    this.$store.dispatch('common/getSymbolListContract').then(() => {
      let temp = this.$store.state.common.symbollistContract;
      temp.unshift({ label: '全部', value: '' });
      this.symbollist = temp;
      this.getAllData();

      this.listRisk();
      this.listProfit();
      this.listCurrentProfit();
      this.listDayProfit();
      this.listPerson();
      this.listActivePerson();
      this.listTradeAll()
      this.getPieData();
    });
  },
  mounted() {
    // 交易对获取
    this.$store.dispatch('common/getSymbolListContract').then(() => {
      let temp = this.$store.state.common.symbollistContract;
      temp.unshift({ label: '全部', value: '' });
      this.symbollist = temp;
      this.getAllData();

      this.listRisk();
      this.listProfit();
      this.listCurrentProfit();
      this.listDayProfit();
      this.listPerson();
      this.listActivePerson();
      this.listTradeAll()
      this.getPieData();
    });
    //  this.tradeTime = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  deactivated() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
};
</script>

<style lang="scss">
.dashboard-container {
  padding: 4px 10px 10px 10px;
  #echarPie {
    width: 100%;
    height: 200px;
  }
  h3 {
    font-size: 18px;
    padding: 0;
    margin: 10px 0 20px 0;
  }
  h3::before {
    content: '';
    border-left: 5px solid #03a7f0;
    margin-right: 10px;
  }

  h4 {
    font-size: 18px;
    padding: 0;
    margin: 0 0 20px 20px;
  }
  h4::before {
    content: '';
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
      min-height: 240px;
      padding: 20px 0;
      margin-right: 1%;
      margin-bottom: 10px;
      background-color: #ffffff;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 1px 2px 6px #ccc;
      &.all {
        width: 99%;
        .list-panel {
          .over-con {
            .con {
              width: 25%;
            }
          }
        }
      }
      .line-header {
        position: relative;
        width: 100%;
        text-align: center;
        margin: 10px auto;
        .chart-subHeader {
          position: absolute;
          top: -10px;
          right: 5px;
          // display: flex;
          // flex-direction: row;
          // justify-content: flex-end;
          padding-right: 10px;
        }
      }

      .list-panel {
        height: 150px;
        .over-con {
          height: 170px;
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
            div:last-child {
              font-weight: 600;
              color: #4390ff;
            }
            &::after {
              content: '';
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
    justify-content: flex-start;
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
        margin-bottom: 10px;
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
        margin-bottom: 20px;
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
@import '@/styles/media/dashboard.scss';
</style>
