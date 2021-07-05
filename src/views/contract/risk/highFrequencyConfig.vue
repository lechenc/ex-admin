<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-01 15:17:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="highFrequencyConfig-container">
    <el-form :model="form" ref="form" :rules="rules" label-width="180px" size="medium">
      <el-card class="box-card">
        <div class="box-card-con">
          <H5>高频参数管理</H5>
          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="监控范围: " prop="monitorRange">
                <el-checkbox-group :disabled="!isModify" v-model="form.monitorRange">
                  <el-checkbox v-for="item in monitorRangeArr" :label="item.value" :key="item.value">{{ item.label }}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="阶段时间内(min):  " prop="phaseTime">
                <el-input style="width: 55%" type="text" placeholder="请输入" v-model="form.phaseTime" @input="checkVal('phaseTime')" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="①高频交易开仓次数: " prop="highFrequencyOpenTimes">
                <el-input style="width: 55%" type="text" placeholder="请输入" v-model="form.highFrequencyOpenTimes" @input="checkVal('highFrequencyOpenTimes')" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="②高频交易平仓次数: " prop="highFrequencyCloseTimes">
                <el-input style="width: 55%" type="text" placeholder="请输入" v-model="form.highFrequencyCloseTimes" @input="checkVal('highFrequencyCloseTimes')" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="③盈利达到（USDT）: " prop="profitLimit">
                <el-input style="width: 55%" type="text" placeholder="请输入" v-model="form.profitLimit" @input="checkVal('profitLimit')" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="限制选项: " prop="limitOptions">
                <el-checkbox-group :disabled="!isModify" v-model="form.limitOptions">
                  <el-checkbox v-for="item in limitOptionsArr" :label="item.value" :key="item.value">{{ item.label }}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="生效方式: " prop="effectiveWay">
                <el-select :disabled="!isModify" v-model="form.effectiveWay" placeholder="请选择">
                  <el-option v-for="item in effectiveWayArr" :label="item.label" :value="item.value" :key="item.value"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="总开关: " prop="masterSwitch">
                <el-switch :disabled="!isModify" v-model="form.masterSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
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
import $api from '@/api/api';
export default {
  name: 'HighFrequencyConfig',
  data() {
    return {
      //  1、普通用户；2、代理下方用户； 3、代理商； 4、APIkey用户
      monitorRangeArr: [
        {
          label: '普通用户',
          value: 1,
        },
        {
          label: '代理下方用户',
          value: 2,
        },
        {
          label: '代理商',
          value: 3,
        },
        {
          label: 'APIkey用户',
          value: 4,
        },
        {
          label: '商务端',
          value: 5,
        },
      ],
      limitOptionsArr: [
        {
          label: '划转',
          value: 1,
        },
        {
          label: '提币',
          value: 2,
        },
        {
          label: '法币',
          value: 3,
        },
      ],
      effectiveWayArr: [
        {
          label: '满足①②③任何一个既生效',
          value: 1,
        },
        {
          label: '同时满足既生效',
          value: 2,
        },
      ],
      btnArr: [],
      btnLoading: false, // 提交
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      labelWidth: '140px',

      isRegisterSwitch: false, // 是否开启

      form: {
        monitorRange: [],
        phaseTime: '',
        highFrequencyOpenTimes: '',
        highFrequencyCloseTimes: '',
        profitLimit: '',
        limitOptions: [],
        effectiveWay: '',
        masterSwitch: false,
      },
      rules: {
        
        monitorRange: [{ required: true, message: '必选', trigger: 'blur' }],
        phaseTime: [{ required: true, message: '必填', trigger: 'blur' }],
        highFrequencyOpenTimes: [{ required: true, message: '必填', trigger: 'blur' }],
        highFrequencyCloseTimes: [{ required: true, message: '必填', trigger: 'blur' }],
        profitLimit: [{ required: true, message: '必填', trigger: 'blur' }],
        effectiveWay: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    cancelSend() {
      this.isModify = false;
      this.getList();
    },
    // getlist
    async getList() {
      try {
        if (this.listLoading) return;
        const query_data = {};
        this.listLoading = true;
        const res = await $api.apiGetHighFrequencyConfig(query_data);
        if (res) {
          let { monitorRange, phaseTime, highFrequencyOpenTimes, highFrequencyCloseTimes, profitLimit, limitOptions, effectiveWay, masterSwitch } = res.data.data;
          this.form = {
            monitorRange,
            phaseTime,
            highFrequencyOpenTimes,
            highFrequencyCloseTimes,
            profitLimit,
            limitOptions,
            effectiveWay,
            masterSwitch: masterSwitch == 1 ? true : false,
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
          const { monitorRange, phaseTime, highFrequencyOpenTimes, highFrequencyCloseTimes, profitLimit, limitOptions, effectiveWay, masterSwitch } = this.form;
          let params = {
            monitorRange,
            phaseTime,
            highFrequencyOpenTimes,
            highFrequencyCloseTimes,
            profitLimit,
            limitOptions,
            effectiveWay,
            masterSwitch: masterSwitch ? 1 : 2,
          };
          this.btnLoading = true;
          const res = await $api.apiEditHighFrequencyConfig(params);
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
  },
  mounted() {
    let authObj = this.$util.getAuthority('HighFrequencyConfig', [], []);
    this.btnArr = authObj.btnArr;

    this.getList();
  },
};
</script>

<style lang="scss">
.highFrequencyConfig-container {
  padding: 4px 10px 10px 10px;
  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
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
