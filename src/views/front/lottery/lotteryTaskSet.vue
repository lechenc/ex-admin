<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-27 16:00:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="lotteryTaskSet-container">
    <el-form :model="form" ref="form" size="medium">
      <el-card class="box-card">
        <H5>活动任务设置</H5>
        <div class="box-card-con" v-for="(el, index) in list" :key="index">
          <el-card>
            <el-form-item :label="`活动名：${el.taskName}`" :label-width="labelWidth">
              <el-col :span="4">
                <el-select v-model="el.coinId" placeholder="请选择" :disabled="!chooseArr[index]">
                  <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.value"></el-option>
                </el-select> </el-col
              >&nbsp;
              <el-col :span="4">
                <el-input type="text" placeholder="请输入" v-model="el.amount" :disabled="!chooseArr[index]"> </el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="完成可得奖券数量" prop="singleRaffle" :label-width="labelWidth">
              <el-col :span="7">
                <el-input type="text" placeholder="请输入" v-model="el.singleRaffle" :disabled="!chooseArr[index]"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="单人可得抽奖券奖励上限" prop="singleRaffleLimit" :label-width="labelWidth">
              <el-col :span="7">
                <el-input type="text" placeholder="请输入" v-model="el.singleRaffleLimit" :disabled="!chooseArr[index]"></el-input>
              </el-col>
            </el-form-item>

            <div v-if="isCURDAuth">
              <div class="middle" v-if="!chooseArr[index]">
                <el-button type="primary" size="medium" @click="changeCheckBox(index)">编辑</el-button>
              </div>
              <div class="middle" v-else>
                <el-button type="primary" plain size="medium" @click="confirmBack(index)">取消</el-button>
                <el-button type="primary" size="medium" @click="confirmSend(el, index)" :loading="el.btnLoading">提交修改</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-card>
    </el-form>
  </div>
</template>
<script>
import $api from '@/api/api';
import LevelSet from '@/components/warehouse/levelSet';
import Precision from '@/utils/number-precision';
import _ from 'lodash';
export default {
  name: 'LotteryTaskSet',
  components: {
    LevelSet,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交
      personLoading: false, // 加入提交
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      isModifyRegister: false, // 是否可以修改注册人数栏目
      listLoading: false, // 表格loading
      list: [], //委托列表
      labelWidth: '170px',
      configs: [],
      coinList: [],
      chooseArr: [], // 控制修改状态
      form: {},
      rules: {},
      blackList: [{ label: '无法获得周奖', value: 1 }, { label: '无法获得季度分红', value: 2 }, { label: '无法或者周奖和分红', value: 3 }],
      formR: {
        num: 0,
      },
    };
  },
  methods: {
    // getlist
    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;
      const res = await $api.getAccountActivityTaskList({});
      if (res) {
        let tmp = res.data.data;
        tmp.forEach((v, idx) => {
          v.btnLoading = false;
          this.chooseArr[idx] = false;
        });
        this.list = tmp;
      }
      this.listLoading = false;
    },
    // 控制输入的范围
    checkVal(val) {
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    changeCheckBox(index) {
      this.$set(this.chooseArr, index, true);
    },
    confirmBack(index) {
      // this.chooseArr[index] = false;
      this.$set(this.chooseArr, index, false);
      // this.isModify = false;
      this.getList();
    },
    // 保存页面修改
    async confirmSend(item, index) {
      const { id, coinId, amount, singleRaffle, singleRaffleLimit } = item;
      const params = {
        id,
        coinId,
        amount,
        singleRaffle,
        singleRaffleLimit,
      };
      // el.btnLoading
      item.btnLoading = true;
      const res = await $api.setActivityTaskUpdate(params);
      if (res) {
        this.$message({ message: '修改成功！', type: 'success' });
        this.getList();
        this.chooseArr[index] = false;
        // this.isModify = false;
      }
      item.btnLoading = false;
    },
    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = val.replace(/\%/, '');
      } else {
      }
      // return parseFloat(val) / 100;
      return Precision.divide(val, 100);
    },
    // 数字转为百分比
    numToPercent(val) {
      // return parseFloat(val) * 100;
      return Precision.times(val, 100);
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('LotteryTaskSet', [], []);
    this.isCURDAuth = authObj.isModify;

    this.$store.dispatch('common/getCoinList').then(() => {
      this.coinList = this.$store.state.common.coinlist;
    });

    this.getList();
  },
};
</script>
<style scope lang="scss">
.lotteryTaskSet-container {
  padding: 4px 10px 10px 10px;

  h4 {
    margin: 10px 0;
    font-size: 18px;
  }

  .box-card {
    margin-bottom: 20px;
    h5 {
      font-size: 16px;
    }
    h5::before {
      content: '';
      border-left: 5px solid #03a7f0;
      margin-right: 10px;
    }
    .box-card-con {
      .el-card {
        margin-bottom: 5px;
      }
      h5 {
        font-size: 16px;
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
        font-size: 15px;
      }

      .header {
        width: 100%;
        color: #333;
        > div {
          display: inline-block;
          text-align: center;
        }
        .one {
          width: 100px;
        }
        .two {
          width: 100px;
          text-align: center;
        }
        .three {
          width: 300px;
        }
        .four {
          width: 120px;
        }
      }
      .con {
        color: #333;
        width: 100%;
        > div {
          display: inline-block;
          text-align: center;
        }
        .one {
          width: 100px;
        }
        .two {
          width: 100px;
        }
        .three {
          width: 300px;
        }
        .four {
          width: 120px;
        }
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
