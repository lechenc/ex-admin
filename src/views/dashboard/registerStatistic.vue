<template>
  <div class="registerStatistic-container">
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
    </div>
  </div>
</template>
<script>
import $api from '@/api/api';

export default {
  name: 'RegisterStatistic',
  data() {
    return {
      curRow: {}, // 基础数据成员
      activeRegist: "first",
    };
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
    this.listDetail();
  },
};
</script>
<style lang="scss">
.registerStatistic-container {
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
      // width: 49%;
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

}
</style>
