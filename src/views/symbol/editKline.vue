<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-01 15:17:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="editKline-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-form :model="form" ref="form" :rules="rules" label-width="200px" size="medium">
      <el-card class="box-card">
        <div class="box-card-con">
          <H5>修改指定K线</H5>
          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="K线类型: " prop="type">
                <el-radio-group :disabled="!isModify" v-model="form.type">
                  <el-radio :label="0">币币交易对</el-radio>
                  <el-radio :label="1">合约交易对</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="交易对的品种: " prop="coinMarket">
                <el-select :disabled="!isModify" v-model="form.coinMarket" placeholder="请选择">
                  <el-option v-for="item in curList" :label="item.label" :value="item.label" :key="item.value"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="23">
              <el-form-item label="K线时间类型: " prop="timeType">
                <el-radio-group class="editKline-group" :disabled="!isModify" v-model="form.timeType">
                  <!-- { text: '1min', val: 0 }, { text: '5min', val: 1 }, { text: '15min', val: 2 }, { text: '30min', val: 3 }, { text: '1h', val: 4 }, { text: '4h', val: 5 }, { text: '1d', val: 6 }, { text: '1w', val: 7 }, { text: '1m', val: 8 } -->
                  <el-radio :label="0">1min</el-radio>
                  <el-radio :label="1">5min</el-radio>
                  <el-radio :label="2">15min</el-radio>
                  <el-radio :label="3">30min</el-radio>
                  <el-radio :label="4">1h</el-radio>
                  <el-radio :label="5">4h</el-radio>
                  <el-radio :label="6">1d</el-radio>
                  <el-radio :label="7">1w</el-radio>
                  <el-radio :label="8">1m</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="请选择时间: " prop="timePoint">
                <el-date-picker type="datetime" :size="sizeDiy" v-model="form.timePoint" value-format="yyyy-MM-dd HH:mm:ss" placeholder="请选择时间" class="box-date-picker" :disabled="!isModify" @focus="forbid"> </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-button size="medium" :loading="infoBtnLoading" @click="getKlineInfo" type="primary"> 查询该条K线 </el-button>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="7">
              <el-form-item label-width="200px" label="目前的值： 高:  " prop="oldHigh">
                <el-input type="number" placeholder="请输入" v-model="form.oldHigh" :disabled="true"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="开:  " prop="oldOpen">
                <el-input type="number" placeholder="请输入" v-model="form.oldOpen" :disabled="true"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="低:  " prop="oldLow">
                <el-input type="number" placeholder="请输入" v-model="form.oldLow" :disabled="true"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="收:  " prop="oldClose">
                <el-input type="number" placeholder="请输入" v-model="form.oldClose" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="7">
              <el-form-item label-width="200px" label="新的值： 高:  " prop="newHigh">
                <el-input  type="number" @input="checkVal1('newHigh')"  placeholder="请输入" v-model="form.newHigh" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="开:  " prop="newOpen">
                <el-input type="number" @input="checkVal1('newOpen')"  placeholder="请输入" v-model="form.newOpen" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="低:  " prop="newLow">
                <el-input type="number" @input="checkVal1('newLow')"  placeholder="请输入" v-model="form.newLow" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="收:  " prop="newClose">
                <el-input type="number" @input="checkVal1('newClose')"  placeholder="请输入" v-model="form.newClose" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="备注:  " prop="remark">
                <el-input maxlength="250" style="width: 95%" rows="3" type="textarea" placeholder="请输入" v-model="form.remark" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="谷歌验证码:  " prop="googleCode">
                <el-input @input="checkVal('googleCode')" style="width: 95%" type="text" placeholder="请输入" v-model="form.googleCode" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <div v-if="btnArr.includes('edit')">
            <div class="middle" v-if="!isModify">
              <el-button type="primary" size="medium" @click="isModify = true">编辑</el-button>
            </div>
            <div class="middle" v-if="isModify">
              <el-button type="primary" plain size="medium" @click="cancelSend">取消</el-button>
              <el-button type="primary" size="medium" @click="confirmSend" :loading="btnLoading">提交修改</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import BTwoDateTimer from '@/components/b-two-date-timer';
import $api from '@/api/api';
export default {
  name: 'HighFrequencyConfig',
  data() {
    return {
      btnArr: [],
      btnLoading: false, // 提交
      infoBtnLoading: false,
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      labelWidth: '140px',
      form: {
        coinMarket: '',
        timePoint: '',
        googleCode: '',
        newClose: '',
        newHigh: '',
        newLow: '',
        newOpen: '',
        oldClose: '',
        oldHigh: '',
        oldLow: '',
        oldOpen: '',
        remark: '',
        timeType: '',
        type: '',
      },
      symbollist: [], // 币币交易对
      symbollistContract: [], // 合约交易对

      rules: {
        coinMarket: [{ required: true, message: '必填', trigger: 'blur' }],
        timePoint: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
        newClose: [{ required: true, message: '必填', trigger: 'blur' }],
        newHigh: [{ required: true, message: '必填', trigger: 'blur' }],
        newLow: [{ required: true, message: '必选', trigger: 'blur' }],
        newOpen: [{ required: true, message: '必选', trigger: 'blur' }],
        oldClose: [{ required: true, message: '必选', trigger: 'blur' }],
        oldHigh: [{ required: true, message: '必选', trigger: 'blur' }],
        oldLow: [{ required: true, message: '必选', trigger: 'blur' }],
        oldOpen: [{ required: true, message: '必选', trigger: 'blur' }],
        remark: [{ required: true, message: '必选', trigger: 'blur' }],
        timeType: [{ required: true, message: '必选', trigger: 'blur' }],
        type: [{ required: true, message: '必选', trigger: 'blur' }],
      },
      curList: [],
    };
  },
  components: {
    BTwoDateTimer,
  },
  watch: {
    'form.type'(newVal) {
      this.form.coinMarket = '';
      if (!newVal) {
        this.curList = this.symbollist;
      } else if (newVal == 1) {
        this.curList = this.symbollistContract;
      } else {
        this.curList = this.symbollist;
      }
    },
  },
  computed: {
    sizeDiy() {
      return this.$store.state.app.device === 'mobile' ? 'small' : 'medium';
    },
  },

  methods: {
    // 查询K线信息
    async getKlineInfo() {
      let valid = true;
      this.$refs['form'].validateField(['type', 'coinMarket', 'timeType', 'timePoint'], (errorMessage) => {
        if (errorMessage) {
          valid = false;
          return;
        }
      });
      if (!valid) return;

      const { type, coinMarket, timeType, timePoint } = this.form;
      if (this.infoBtnLoading) return;
      this.infoBtnLoading = true;
      let params = {
        type,
        coinMarket,
        timeType,
        timePoint,
      };
      const res = await $api.apiGetKlineInfo(params);

      if (res) {
        this.$message.success('查询成功')
        const { close, high, low, open } = res.data.data;
        this.form.oldClose = close;
        this.form.oldHigh = high;
        this.form.oldLow = low;
        this.form.oldOpen = open;
      }else{
        this.form.oldClose = '';
        this.form.oldHigh = '';
        this.form.oldLow = '';
        this.form.oldOpen = '';
      }
      this.infoBtnLoading = false;
    },
    forbid() {
      if (this.$store.state.app.device !== 'mobile') {
        return;
      }
      this.$nextTick(() => {
        let inputTime = document.querySelectorAll('.el-date-editor .el-input__inner');
        inputTime.forEach((item) => {
          item.addEventListener('focus', () => {
            document.activeElement.blur();
          });
        });
      });
    },
    cancelSend() {
      this.$refs['form'].resetFields();
      this.isModify = false;
    },

    // 控制输入的范围
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },

    // 控制输入的范围 限制16长度
    checkVal1(val) {
      if (this.form[val].length>16) {
        this.form[val] = (this.form[val] + '').slice(0,16);
      }
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { coinMarket, timePoint, googleCode, ...repo } = this.form;
          let params = {
            coinMarket,
            timePoint,
            googleCode,
            ...repo,
          };
          this.btnLoading = true;
          const res = await $api.apiSaveEditKline(params);
          if (res) {
            this.$message({
              message: '修改成功！',
              type: 'success',
            });
            this.form = {
              coinMarket: '',
              timePoint: '',
              googleCode: '',
              newClose: '',
              newHigh: '',
              newLow: '',
              newOpen: '',
              oldClose: '',
              oldHigh: '',
              oldLow: '',
              oldOpen: '',
              remark: '',
              timeType: '',
              type: '',
            };
            this.isModify = false;
          }
          this.btnLoading = false;
        }
      });
    },
    async getSymbolList() {
      // 币币交易对获取
      this.$store.dispatch('common/getSymbolList').then(() => {
        this.symbollist = this.$store.state.common.symbollist;
        this.curList = this.symbollist;
      });
    },
    async getSymbolListContract() {
      // 合约交易对获取
      this.$store.dispatch('common/getSymbolListContract').then(() => {
        this.symbollistContract = this.$store.state.common.symbollistContract;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('KlineList', [], []);
    this.btnArr = authObj.btnArr || [];
    this.getSymbolList();
    this.getSymbolListContract();
  },
};
</script>

<style lang="scss">
.editKline-container {
  padding: 4px 10px 10px 10px;
  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
    }
  }
  .editKline-group {
    .el-radio {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
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
}
</style>
