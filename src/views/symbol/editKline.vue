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
    <el-form :model="form" ref="form" :rules="rules" label-width="200px" size="medium">
      <el-card class="box-card">
        <div class="box-card-con">
          <H5>修改指定K线</H5>
          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="K线类型: " prop="radio">
                <el-radio-group :disabled="!isModify" @change="radioChange" v-model="form.radio">
                  <el-radio :label="1">币币交易对</el-radio>
                  <el-radio :label="2">合约交易对</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="交易对的品种: " prop="coinId">
                <el-select :disabled="!isModify" v-model="form.coinId" placeholder="请选择">
                  <el-option v-for="item in curList" :label="item.label" :value="item.value" :key="item.value"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="23">
              <el-form-item label="K线时间类型: " prop="radio1">
                <el-radio-group class="editKline-group" :disabled="!isModify" v-model="form.radio1">
                  <el-radio :label="1">币币交易对</el-radio>
                  <el-radio :label="2">合约交易对</el-radio>
                  <el-radio :label="3">合约交易对</el-radio>
                  <el-radio :label="4">合约交易对</el-radio>
                  <el-radio :label="5">合约交易对</el-radio>
                  <el-radio :label="6">合约交易对</el-radio>
                  <el-radio :label="7">合约交易对</el-radio>
                  <el-radio :label="8">合约交易对</el-radio>
                  <el-radio :label="0">合约交易对</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col >
              <b-two-date-timer ref="twoTimer" labelWidth="220px" labelWords="请选择时间:  " :date1.sync="form.startTime" :date2.sync="form.endTime" :isdisabled="!isModify"></b-two-date-timer>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="6">
              <el-form-item label-width="200px" label="目前的值： 高:  " prop="withdrawQuota2">
                <el-input type="text" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="开:  " prop="withdrawQuota2">
                <el-input type="text" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="低:  " prop="withdrawQuota2">
                <el-input type="text" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="收:  " prop="withdrawQuota2">
                <el-input type="text" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="6">
              <el-form-item label-width="200px" label="新的值： 高:  " prop="withdrawQuota2">
                <el-input type="text" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="开:  " prop="withdrawQuota2">
                <el-input type="text" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="低:  " prop="withdrawQuota2">
                <el-input type="text" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label-width="50px" label="收:  " prop="withdrawQuota2">
                <el-input type="text" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="备注:  " prop="withdrawQuota">
                <el-input maxlength="250" style="width: 95%" rows="3" type="textarea" placeholder="请输入" v-model="form.withdrawQuota" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="谷歌验证码:  " prop="withdrawQuota2">
                <el-input @input="checkVal('withdrawQuota2')" style="width: 95%" type="text" placeholder="请输入" v-model="form.withdrawQuota2" :disabled="!isModify"></el-input>
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
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      labelWidth: '140px',

      isRegisterSwitch: false, // 是否开启

      form: {
        withdrawQuota: '',
        firstVerifiedSwift: 0,
        withdrawSwift: false,
        coinId: '',
      },
      symbollist: [], // 币币交易对
      symbollistContract: [], // 合约交易对

      rules: {
        radio: [{ required: true, message: '必填', trigger: 'blur' }],
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        radio1: [{ required: true, message: '必填', trigger: 'blur' }],
        withdrawQuota: [{ required: true, message: '必填', trigger: 'blur' }],
        withdrawQuota2: [{ required: true, message: '必填', trigger: 'blur' }],
        firstVerifiedSwift: [{ required: true, message: '必选', trigger: 'blur' }],
      },
      curList: [],
    };
  },
  components: {
    BTwoDateTimer,
  },

  methods: {
    
    radioChange(val) {
      this.form.coinId = '';
      if (!val) {
        this.curList = this.symbollist;
      } else if (val == 1) {
        this.curList = this.symbollist;
      } else {
        this.curList = this.symbollistContract;
      }
    },
    cancelSend() {
      this.$refs['form'].resetFields();
      this.isModify = false;
      this.getList();
    },
    // getlist
    async getList() {
      try {
        if (this.listLoading) return;
        const query_data = {};
        this.listLoading = true;
        const res = await $api.apiGetRealNameFreeExtract(query_data);
        if (res) {
          let { withdrawQuota, firstVerifiedSwift, withdrawSwift } = res.data.data;
          this.form = {
            withdrawQuota,
            firstVerifiedSwift,
            withdrawSwift: withdrawSwift ? true : false,
            coinId: '',
          };
        }
        this.listLoading = false;
      } catch (error) {
        console.log('error');
      }
    },
    // 控制输入的范围
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { withdrawQuota, firstVerifiedSwift, withdrawSwift } = this.form;
          let params = {
            withdrawQuota,
            firstVerifiedSwift,
            withdrawSwift: withdrawSwift ? 1 : 0,
          };
          this.btnLoading = true;
          const res = await $api.apiEditRealNameFreeExtract(params);
          if (res) {
            this.$message({
              message: '修改成功！',
              type: 'success',
            });
            this.getList();
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
    this.btnArr = authObj.btnArr;

    this.getList();
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
