<template>
  <div class="chartStatistic-container">
    <div class="inner-bottom">
      <h3>图表统计</h3>
      <div class="chart-con">
        <div class="chart-header">
          <el-tabs v-model="radioStatus" @tab-click="handleClick">
            <el-tab-pane label="币币交易额" name="one"></el-tab-pane>
            <el-tab-pane label="法币交易额" name="two"></el-tab-pane>
            <el-tab-pane label="平台币币订单量" name="three"></el-tab-pane>
            <el-tab-pane label="平台法币订单量" name="four"></el-tab-pane>
            <el-tab-pane label="平台注册量" name="five"></el-tab-pane>
            <el-tab-pane label="平台实名量" name="six"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="chart-subHeader">
          <el-select v-model="selectStatus" placeholder="请选择" style="width:140px;" @change="changeSelect">
            <el-option label="月线图" :value="1"></el-option>
            <el-option label="季度图" :value="2"></el-option>
            <el-option label="周线图" :value="3"></el-option>
            <el-option label="日线图" :value="4"></el-option>
          </el-select>
        </div>

        <div id="echarNow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $api from '@/api/api';
import echarts from 'echarts';
import { parseTime } from '@/utils/index';
export default {
  name: 'ChartStatistic',
  data() {
    return {
      timer: -1,
      curRow: {}, // 基础数据成员
      radioStatus: 'one', // 分类
      selectStatus: 1, // 分类
      isMove: false, // 是否可加载
      myChart: null, // 折线图对象
      startPlace: null,
      endPlace: null,
      startTime: '', //更新后开始时间
      endTime: '', // 更新后开始时间
      startTimeBefore: '', // 初始开始时间
      endTimeBefore: '', // 初始结束时间
      xDay: [], // 单根折线数据
      yDay: [],
      bbxDay: [], // 多根折线现
      bbyDay: [],
      todayTime: 0,
      interval: 5, // 查询间隔天数
      moveAddNum: 1, // 之后时间间隔倍数
      moveDelNum: 1, //  之前时间间隔倍数
      isAddDate: true, // 是否加一天还是减，针对日
      getCoinName: [], // 获取的币种数组（币币的可能多根线，多个数组）
      // getCoinArr: [], // 获取的币种数组（币币的可能多根线，多个数组）
      // 如果折线不止一条，必须动态加入折线配置
      colorArr: ['#369AEC', '#1B9C09', '#FB6D03', '#000', '#ffff00', '#FFCD43', '#9B3B66', '#728331', '#1E38A1'],
      // 对于数据项的配置
      linePart: {
        name: '',
        data: [],
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            color: '#275F82', //改变折线点的颜色
            lineStyle: {
              color: '#369AEC', //改变折线颜色
            },
          },
        },
        areaStyle: {
          normal: {
            color: {
              type: 'linear', //设置线性渐变
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#3BB2F0', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'white', // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          },
        },
      },
      //  配置公用部分，防止每次赋值相互影响
      commonOption: {
        legend: {
          data: [],
        },
        xAxis: {
          type: 'category', // 还有其他的type，可以去官网喵两眼哦
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // x轴数据
          splitLine: { show: false },
          name: '时间', // x轴名称

          // type: 'slider',
          // realtime: true, //拖动滚动条时是否动态的更新图表数据
          // x轴名称样式
          // nameTextStyle: {
          //   fontWeight: 600,
          //   fontSize: 18,
          // },
        },
        grid: {
          top: 80,
          bottom: 100,
        },
        yAxis: {
          type: 'value',
          name: '统计量', // y轴名称
          // y轴名称样式
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 18,
          },
        },
        tooltip: {
          trigger: 'axis', // axis   item   none三个值
        },
        dataZoom: [
          {
            // type: 'inside',
            realtime: true,
            // startValue: 0,
            // endValue: 10, // 初始显示index0-30的数据,可根据你的数据量设置
            // filterMode: 'none',
            type: 'slider',
            // show: true,
            start: 5,
            end: 95,
            xAxisIndex: 0,
            filterMode: 'empty',
            dataZoomIndex: 1,
          },
        ],
        series: [
          {
            name: '',
            data: [],
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                color: '#275F82', //改变折线点的颜色
                lineStyle: {
                  color: '#369AEC', //改变折线颜色
                },
              },
            },
            areaStyle: {
              normal: {
                color: {
                  type: 'linear', //设置线性渐变
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#3BB2F0', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'white', // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
          },
        ],
      },
      // option将要设置以下字段感觉就足够使用了
      option: {},
    };
  },
  computed: {
    device() {
      return this.$store.state.app.device;
    },
  },
  methods: {
    handleClick(tab, event) {
      this.resetData();
      this.chartLabel();
    },
    changeSelect(val) {
      this.resetData();
      this.selectStatus = parseInt(val);
      this.chartLabel();
    },
    // 重置图表数据
    resetData() {
      this.option = JSON.parse(JSON.stringify(this.commonOption));
      this.xDay = [];
      this.yDay = [];
      this.moveAddNum = 1;
      this.moveDelNum = 1;
      this.startTime = this.startTimeBefore;
      this.endTime = this.endTimeBefore;
      this.option.xAxis.data = [];
      // 放置多条线未取消
      this.option.series = [];
      this.option.series[0] = this.linePart;
      this.bbxDay = []; // 多条折线
      this.bbyDay = [];
      this.getCoinName = []; // 获取的币种数组（币币的可能多根线，多个数组）
      if (this.myChart) {
        this.myChart.clear(); // 否则会导致多个options重叠
      }
    },
    // 折线图-类型
    async chartLabel() {
      let tmpNum = 2;
      switch (this.radioStatus) {
        case 'one':
          tmpNum = 1;
          break;
        case 'two':
          tmpNum = 2;
          break;
        case 'three':
          tmpNum = 3;
          break;
        case 'four':
          tmpNum = 4;
          break;
        case 'five':
          tmpNum = 5;
          break;
        case 'six':
          tmpNum = 6;
          break;
      }
      this.chartData(tmpNum);
    },
    // 获取数据
    async chartData(tmpNum) {
      let res;
      // 法币
      if (tmpNum == 2 || tmpNum == 4) {
        let params = {
          chart: this.selectStatus,
        };
        if (this.selectStatus == 4) {
          params.startTime = parseTime(this.startTime, '{y}-{m}-{d}');
          params.endTime = parseTime(this.endTime, '{y}-{m}-{d}');
        }

        res = await $api.otcChartNew(params);
      } else if (tmpNum == 1 || tmpNum == 3) {
        // 币币
        let params = {
          chart: this.selectStatus,
        };
        if (this.selectStatus == 4) {
          params.startTime = parseTime(this.startTime, '{y}-{m}-{d}');
          params.endTime = parseTime(this.endTime, '{y}-{m}-{d}');
        }
        res = await $api.ordeDailySnapshot(params);
      } else {
        // 唐杰普通接口(按钮5，6)
        let params = {
          chart: this.selectStatus,
          type: tmpNum,
        };
        if (this.selectStatus == 4) {
          params.startTime = parseTime(this.startTime, '{y}-{m}-{d}');
          params.endTime = parseTime(this.endTime, '{y}-{m}-{d}');
        }
        res = await $api.statisticsChart(params);
      }
      this.dealData(res, tmpNum);
    },
    // 处理获得的数据
    dealData(res, tmpNum) {
      if (res) {
        const records = res.data.data;
        if (records && records.length > 0) {
          const xArr = [];
          const yArr = [];
          let tmpName = '';
          let tmpValue = '';
          // 法币，林威的数据要自己处理时间（2，4，1，3）
          if (tmpNum == 2 || tmpNum == 4) {
            if (this.selectStatus != 4) {
              records.forEach(v => {
                if (this.selectStatus == 1) {
                  xArr.push(`${v.chartYear}年${v.chartMonth}月`);
                } else if (this.selectStatus == 2) {
                  xArr.push(`${v.chartYear}年第${v.chartQuarter}季度`);
                } else if (this.selectStatus == 3) {
                  xArr.push(`${v.chartYear}年第${parseInt(v.chartWeek) + 1}周`);
                }
                if (tmpNum == 2) {
                  yArr.push(v.money);
                } else {
                  yArr.push(v.count);
                }
              });
            }
            if (this.selectStatus == 4) {
              // 每天都要加，所以增加个变量
              let dayyData = '';
              for (let k = 0; k < this.interval; k++) {
                let timeTmp = new Date(new Date(this.startTime).getTime() + 24 * 60 * 60 * 1000 * k);
                if (timeTmp >= this.todayTime) {
                  continue;
                }
                let timeDate = parseTime(timeTmp, '{y}-{m}-{d}') + '';
                dayyData = '';
                records.forEach(v => {
                  // 每一天都要判断
                  if (v.createDate == timeDate) {
                    if (tmpNum == 2) {
                      dayyData = v.money;
                    } else {
                      dayyData = v.count;
                    }
                  }
                });
                xArr.push(timeDate);
                if (dayyData) {
                  yArr.push(dayyData);
                } else {
                  yArr.push(0);
                }
              }
            }
          } else if (tmpNum == 1 || tmpNum == 3) {
            const coinLabel = [];
            let timeLabel = [];
            // 币币，可能有
            let txt = '';
            records.forEach(v => {
              // 不同的时间段类型
              if (this.selectStatus == 1) {
                txt = `${v.chartYear}年${v.chartMonth}月`;
              } else if (this.selectStatus == 2) {
                txt = `${v.chartYear}年第${v.chartQuarter}季度`;
              } else if (this.selectStatus == 3) {
                txt = `${v.chartYear}年第${parseInt(v.chartWeek) + 1}周`;
              } else if (this.selectStatus == 4) {
                txt = `${v.createDate}`;
              }
              // xArr.push(v.createDate);
              if (tmpNum == 1) {
                yArr.push(v.money);
              } else {
                yArr.push(v.count);
              }
              coinLabel.push(v.coinName);
              timeLabel.push(txt);
            });
            // 币种可能原来是【usdt,cnht】,xia一次返回可能就是【alpt,cnht】了所以要检测币种数组，新的增加入币种数组，
            // 并且要保证this.getCoinName的币种顺序不变
            let tmp = Array.from(new Set(coinLabel));
            // 这个时间段过滤针对this.selectStatus为1，2，3的类型
            timeLabel = Array.from(new Set(timeLabel));
            if (this.getCoinName.length > 1) {
              // 币种数组不为空则只添加不含有的币种进去
              tmp.forEach(v => {
                if (!this.getCoinName.includes(v)) {
                  this.getCoinName.push(v);
                }
              });
            } else {
              // 币种数组为空则赋值
              this.getCoinName = tmp;
            }
            if (this.getCoinName.length > 1) {
              this.dealDataMoreLine(records, tmpNum, timeLabel);
              // 多条的逻辑单独处理
              return;
            } else {
              // this.bbxDay[i]
            }
          } else if (tmpNum == 5 || tmpNum == 6) {
            if (this.selectStatus != 4) {
              records.forEach(v => {
                xArr.push(v.chart_date);
                yArr.push(v.chart_number);
              });
            }
            if (this.selectStatus == 4) {
              // 每天都要加，所以增加个变量
              let dayyData = '';
              for (let k = 0; k < this.interval; k++) {
                let timeTmp = new Date(new Date(this.startTime).getTime() + 24 * 60 * 60 * 1000 * k);
                if (timeTmp >= this.todayTime) {
                  continue;
                }
                let timeDate = parseTime(timeTmp, '{y}-{m}-{d}') + '';
                dayyData = '';
                records.forEach(v => {
                  // 每一天都要判断
                  if (v.chart_date == timeDate) {
                    dayyData = v.chart_number;
                  }
                });
                xArr.push(timeDate);
                if (dayyData) {
                  yArr.push(dayyData);
                } else {
                  yArr.push(0);
                }
              }
            }
          }
          // 对过滤的数据进行过滤，日线特殊处理（币币tmpNum==1||3的在上面的moreLineChart中单独处理）
          if (this.selectStatus == 4) {
            this.getDayData(xArr, yArr);
          } else {
            this.option.legend.data = [];
            this.option.xAxis.data = xArr;
            this.option.series[0].data = yArr;
          }
          // 渲染echarts
          this.$nextTick(() => {
            this.graphical();
          });
        } else {
          // 无数据，那么也要在X轴增时间段
          let stime = parseTime(this.startTime, '{y}-{m}-{d}');
          let etime = parseTime(this.endTime, '{y}-{m}-{d}');
          if (this.selectStatus == 4) {
            // 日线无数据要单独处理（递增时间段）
            this.$message({ type: 'error', message: stime + ' 至 ' + etime + ' 时间段无数据!', duration: 2000 });
            if (tmpNum == 1 || tmpNum == 3) {
              let xData = [];
              let yData = [];
              let xDayPart = [];
              let yDayPart = [];
              for (let i = 0; i < this.getCoinName.length; i++) {
                xDayPart = [];
                yDayPart = [];
                for (let k = 0; k < this.interval; k++) {
                  let timeTmp = new Date(new Date(this.startTime).getTime() + 24 * 60 * 60 * 1000 * k);
                  if (timeTmp >= this.todayTime) {
                    continue;
                  }
                  let timeDate = parseTime(timeTmp, '{y}-{m}-{d}') + '';
                  xDayPart.push(timeDate);
                  yDayPart.push(0);
                }
                xData.push(xDayPart);
                yData.push(yDayPart);
              }
              this.moreLineChart(xData, yData);
            } else if (tmpNum == 2 || tmpNum == 4 || tmpNum == 5 || tmpNum == 6) {
              let xDayPart = [];
              let yDayPart = [];
              for (let k = 0; k < this.interval; k++) {
                let timeTmp = new Date(new Date(this.startTime).getTime() + 24 * 60 * 60 * 1000 * k);
                if (timeTmp >= this.todayTime) {
                  continue;
                }
                let timeDate = parseTime(timeTmp, '{y}-{m}-{d}') + '';
                xDayPart.push(timeDate);
                yDayPart.push(0);
              }
              this.getDayData(xDayPart, yDayPart);
            }
          } else {
            // 周，月，季度直接赋值时间段
            this.$message({ type: 'error', message: '没有更多数据!', duration: 2000 });
            this.option.xAxis.data = [stime, etime];
            this.option.series[0].data = [];
          }
          this.$nextTick(() => {
            this.graphical();
          });
        }
      }
    },
    dealDataMoreLine(records, tmpNum, timeLabel) {
      // 币种不止一种就单独处理，否则类似其他的单根线处理
      let xPart = [];
      let yPart = [];
      let nameArr = [];
      let getDataArr = [];
      let getCoinLabelArr = [];
      // 遍历每种币种的特征，进行二级筛选
      for (let i = 0; i < this.getCoinName.length; i++) {
        xPart = [];
        yPart = [];
        if (this.selectStatus != 4) {
          let dayyData = '';
          for (let m = 0; m < timeLabel.length; m++) {
            let timeDate = timeLabel[m];
            dayyData = '';
            records.forEach(v => {
              let txt = '';
              if (this.selectStatus == 1) {
                txt = `${v.chartYear}年${v.chartMonth}月`;
              } else if (this.selectStatus == 2) {
                txt = `${v.chartYear}年第${v.chartQuarter}季度`;
              } else if (this.selectStatus == 3) {
                txt = `${v.chartYear}年第${parseInt(v.chartWeek) + 1}周`;
              }
              if (txt == timeDate && v.coinName == this.getCoinName[i]) {
                if (tmpNum == 1) {
                  dayyData = v.money;
                } else {
                  dayyData = v.count;
                }
              }
            });
            if (dayyData) {
              yPart.push(dayyData);
            } else {
              yPart.push(0);
            }
          }
          xPart = timeLabel;
        } else if (this.selectStatus == 4) {
          // 每天都要加，所以增加个变量
          let dayyData = '';
          for (let k = 0; k < this.interval; k++) {
            let timeTmp = new Date(new Date(this.startTime).getTime() + 24 * 60 * 60 * 1000 * k);
            if (timeTmp >= this.todayTime) {
              continue;
            }
            let timeDate = parseTime(timeTmp, '{y}-{m}-{d}') + '';
            dayyData = '';
            records.forEach(v => {
              // 每一天都要判断
              if (v.createDate == timeDate && v.coinName == this.getCoinName[i]) {
                if (tmpNum == 1) {
                  dayyData = v.money;
                } else {
                  dayyData = v.count;
                }
              }
            });
            xPart.push(timeDate);
            if (dayyData) {
              yPart.push(dayyData);
            } else {
              yPart.push(0);
            }
          }
        }
        getDataArr.push(xPart);
        getCoinLabelArr.push(yPart);
      }
      this.moreLineChart(getDataArr, getCoinLabelArr);
    },
    // 多根-线（不只是日线，主要是币币可能有多根线）的数据处理
    moreLineChart(getDataArr, getCoinLabelArr) {
      for (let i = 0; i < getCoinLabelArr.length; i++) {
        if (!this.bbxDay[i]) {
          this.bbxDay[i] = [];
        }
        if (!this.bbyDay[i]) {
          this.bbyDay[i] = [];
        }
        if (this.isAddDate) {
          // 下一天
          this.bbxDay[i].push(...getDataArr[i]);
          this.bbyDay[i].push(...getCoinLabelArr[i]);
        } else {
          // 上一天
          this.bbxDay[i].unshift(...getDataArr[i]);
          this.bbyDay[i].unshift(...getCoinLabelArr[i]);
        }
   
        this.bbxDay[i] = Array.from(new Set(this.bbxDay[i]));

        // series数组成员就是每一根线
        this.option.series[i] = JSON.parse(JSON.stringify(this.linePart));
        this.option.series[i].data = this.bbyDay[i];
        // 每根线的名字
        this.option.series[i].name = this.getCoinName[i];
        // 每根线的颜色
        this.option.series[i].itemStyle.normal.lineStyle.color = this.colorArr[i];
        this.option.series[i].itemStyle.normal.color = this.colorArr[i];
        this.option.series[i].areaStyle.normal.color.colorStops[0].color = this.colorArr[i];
      }

      this.option.legend.data = this.getCoinName;
      // 找出多根线中数据最多的一项，取它的横坐标数组，(对于非日线的这个处理可以带来兼容日期最多的一个的好处，但
      // 是对于非日线的this.selectStatus == 4，我们就能对比里面长度小的，要把x时间同步，y数据长度同步《长度不足补上0》)

      let longestArr = this.bbxDay[0] || [];
      let numShortArr = -1;
      let numLongArr = -1;
      for (let j = 0; j < this.bbxDay.length; j++) {
        if (this.bbxDay[j].length < longestArr.length) {
          numShortArr = j;
        } else {
          longestArr = this.bbxDay[j];
          numLongArr = j;
        }
      }

      if (numShortArr > -1) {
        for (let j = 0; j < this.bbxDay.length; j++) {
          if (this.bbxDay[j].length < longestArr.length) {
            this.bbxDay[j] = longestArr; // x同步
            let calcVal = this.option.series[numLongArr].data.length - this.option.series[j].data.length;
            if (this.isAddDate) {
              // 下一天
              let calcAdd = new Array(calcVal).fill(0);
              this.option.series[j].data.unshift(...calcAdd);
            } else {
              // 上一天
              // let calcAdd = new Array(calcVal).fill(0);
              // this.option.series[j].data.push(...calcAdd);
              this.option.series[j].data = this.option.series[j].data.concat(new Array(calcVal).fill(0));
            }
            this.bbyDay[j] = this.option.series[j].data;
          }
        }
      }

      this.option.xAxis.data = longestArr;
      this.$nextTick(() => {
        this.graphical();
      });
    },
    // 单根-日线-特殊-栈处理
    getDayData(xArr, yArr) {
      if (this.isAddDate) {
        // 下一天
        this.xDay.push(...xArr);
        this.yDay.push(...yArr);
      } else {
        // 上一天
        this.xDay.unshift(...xArr);
        this.yDay.unshift(...yArr);
      }
      this.option.legend.data = [];
      this.option.series[0] = JSON.parse(JSON.stringify(this.linePart));
      this.option.xAxis.data = this.xDay;
      this.option.series[0].data = this.yDay;
    },
    // 绘图echarts
    graphical() {
      if (!this.myChart) {
        this.myChart = echarts.init(document.getElementById('echarNow'));
        //在init方法中加入下面这行代码
        window.addEventListener('resize', this.myChart.resize);
        this.myChart.on('dataZoom', params => {
          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
          }
          this.timer = setTimeout(() => {
            if (this.selectStatus != 4) return;
            if (params.batch) {
              this.startPlace = params.batch[0].start;
              this.endPlace = params.batch[0].end;
            } else {
              this.startPlace = params.start;
              this.endPlace = params.end;
            }
            // 右边界
            if (this.endPlace >= 99) {
              this.isAddDate = true;
              this.startTime = new Date(new Date(this.startTimeBefore).getTime() + 24 * 60 * 60 * 1000 * this.interval * this.moveAddNum);
              this.endTime = new Date(new Date(this.endTimeBefore).getTime() + 24 * 60 * 60 * 1000 * this.interval * this.moveAddNum);
              if (this.startTime.getTime() > this.todayTime) {
                this.$message({ type: 'error', message: '未来的数据不可查看!', duration: 2000 });
                return;
              } else {
                this.moveAddNum++;
                this.chartLabel();
              }
            }
            // 左边界
            if (this.startPlace <= 1) {
              this.isAddDate = false;
              this.startTime = new Date(new Date(this.startTimeBefore).getTime() - 24 * 60 * 60 * 1000 * this.interval * this.moveDelNum);
              this.endTime = new Date(new Date(this.endTimeBefore).getTime() - 24 * 60 * 60 * 1000 * this.interval * this.moveDelNum);
              this.moveDelNum++;
              this.chartLabel();
            }
          }, 500);
        });
      }
      // 这里重启echarts数据，不用appendData，是因为例如币币的可能某个时间段只有两个币种但某时段突增了4个币种
      this.myChart.setOption(this.option);
    },
  },
  mounted() {
    // 初始设置间隔5天,从上一个月的数据开始
    const nowTime = new Date();
    let year = nowTime.getFullYear();
    let month = parseInt(nowTime.getMonth());
    let day = (new Date(new Date(nowTime).getTime() - 24 * 60 * 60 * 1000 * (this.interval + 1))).getDate();

    this.startTime = new Date(year, month, day);
    this.endTime = new Date(new Date(this.startTime).getTime() + 24 * 60 * 60 * 1000 * (this.interval - 1));

    this.startTimeBefore = this.startTime;
    this.endTimeBefore = this.endTime;

    // 只能显示到昨天
    this.todayTime = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    // this.todayTime = new Date().getTime();

    this.option = JSON.parse(JSON.stringify(this.commonOption));
    this.chartLabel();
  },
};
</script>

<style lang="scss">
.chartStatistic-container {
  padding: 4px 10px 10px 10px;
  h3 {
    font-size: 18px;
    padding: 0;
    margin: 0 0 20px 0;
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

  .inner-bottom {
    width: 100%;
    padding: 20px 10px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 1px 2px 6px #ccc;
    .chart-con {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // width: 1000px;
      // margin-left: 40px;
      .chart-header {
        width: 100%;
        margin-bottom: 20px;
      }
      .chart-subHeader {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 50px;
      }
      #echarNow {
        width: 100%;
        height: 600px;
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
