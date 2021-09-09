<template>
  <div class="datetimer-mobile-time">
    <el-form ref="formR" :rules="rulesR" :model="formR" class="time-panel">
      <div class="left-p" :style="{ width: labelWidth }"><span class="dot">*</span>&nbsp;{{ labelWords }}</div>
      <el-col :span="13">
        <el-col :span="11">
          <el-form-item label="" prop="target1" label-width="0">
            <el-input
              type="number"
              :size="sizeDiy"
              @input="checkVal1('target1')"
              v-model="formR.target1"
              class="box-date-picker"
              :disabled="isdisabled"
              placeholder="最小值"
              @change="handleMinChange"
            >
            </el-input> </el-form-item
        ></el-col>

        <el-col :span="1" style="text-align: center; font-size: 17px; line-height: 38px"> ~ </el-col>
        <el-col :span="11">
          <el-form-item label="" prop="target2" label-width="0">
            <el-input
              type="number"
              :size="sizeDiy"
              @input="checkVal1('target2')"
              v-model="formR.target2"
              :disabled="isdisabled"
              placeholder="最大值"
              @change="handleMaxChange"
            ></el-input> </el-form-item
        ></el-col>
      </el-col>
    </el-form>
  </div>
</template>

<script>
// import { number } from 'echarts/lib/export';
export default {
  name: 'BTwoRangeChoose',
  data() {
    return {
      formR: {
        target1: '',
        target2: '',
      },
      rulesR: {
        target1: [
          { required: true, message: '必填项', trigger: 'blur' },
          // { validator: this.validateCom, trigger: 'blur' },
          { validator: this.validateMin, trigger: 'change' },
          { validator: this.validateMin, trigger: 'blur' },
        ],
        target2: [
          { required: true, message: '必填项', trigger: 'blur' },
          // { validator: this.validateCom, trigger: 'blur' },
          { validator: this.validateMax, trigger: 'change' },
          { validator: this.validateMax, trigger: 'blur' },
        ],
      },
    };
  },
  props: {
    labelWords: {
      type: String,
      default: '',
    },
    labelWidth: {
      type: String,
      default: '120px',
    },
    isdisabled: {
      type: Boolean,
      default: false,
    },
    getVal1: {
      type: [String, Number],
      default: '',
    },
    getVal2: {
      type: [String, Number],
      default: '',
    },
    negative: {
      type: Boolean,
      default: false,
    },
    noMinus: {
      type: Boolean,
      default: false,
    },
    
  },
  watch: {
    
    getVal1: {
      handler(newVal, oldVal) {
        if (newVal || newVal === '' || newVal === 0) {
          this.formR.target1 = newVal;
        } else {
          this.formR.target1 = oldVal;
        }
      },
      immediate: true,
    },
    getVal2: {
      handler(newVal, oldVal) {
        if (newVal || newVal === '' || newVal === 0) {
          this.formR.target2 = newVal;
        } else {
          this.formR.target2 = oldVal;
        }
      },
      immediate: true,
    },
  },
  computed: {
    sizeDiy() {
      return this.$store.state.app.device === 'mobile' ? 'small' : 'medium';
    },
    // target1: {
    //   get() {
    //     this.formR.target1 = this.getVal1;
    //     return this.getVal1;
    //   },
    //   set(val) {
    //     this.formR.target1 = val;
    //     this.$emit('update:getVal1', val);
    //     this.$refs.formR.validateField('target1');
    //     // this.valiteValue('target1');
    //   },
    // },
    // target2: {
    //   get() {
    //     this.formR.target2 = this.getVal2;
    //     return this.getVal2;
    //   },
    //   set(val) {
    //     this.formR.target2 = val;
    //     this.$emit('update:getVal2', val);
    //     this.$refs.formR.validateField('target2');
    //   },
    // },
  },
  methods: {
    resetValue() {
      this.formR = {
        target1: '',
        target2: '',
      };
      this.$refs['formR'].resetFields();
    },
    validateValue() {
      const ret = {};
      this.$refs['formR'].validate((valid) => {
        ret.valid = valid;
        ret.form = this.form;
      });
      return ret.valid;
      // this.$refs['formR'].validateField(['target1', 'target2'], valid => {
      //   ret.valid = valid;
      //   ret.form = this.form;
      // });
      // this.$emit("handler", ret);
    },
    
    // 不能小数
    checkVal1(val) {
      if (!this.noMinus) {
        this.formR[val] = this.formR[val] + '';
      }else{
        if (this.formR[val] < 0) {
          this.formR[val] = 0;
        }
      }
    },

    checkVal(val) {
      if (this.negative) {
        this.formR[val] = this.formR[val] + '';
      } else {
        this.formR[val] = this.formR[val] + '';
      }
      this.formR[val] = (this.formR[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
      if (!this.negative) {
        // if (this.formR[val] < 0) {
        //   this.formR[val] = 0;
        // }
      }
    },

    validateCom(rule, value, callback) {
      const one = Number(value);
      // if (Number.isInteger(one)) {-1000000
      // if (one < 0) {
      //   return callback(new Error(`输入值必须大于${0}`));
      // } else
      if (one > 1000000000000000000) {
        return callback(new Error(`输入值必须小于${1000000000000000000}`));
      }
      return callback();
      // }
      // return callback(new Error("输入值必须为正整数"));
    },
    validateMin(rule, value, callback) {
      const one = Number(value);
      const max = Number(this.formR.target2);
      if (!max || one <= max) {
        return callback();
      }
      return callback(new Error('输入值不得大于最大阈值'));
    },
    validateMax(rule, value, callback) {
      const one = Number(value);
      const min = Number(this.formR.target1);
      if (!min || one >= min) {
        return callback();
      }
      return callback(new Error('输入值不得小于最小阈值'));
    },
    handleMinChange() {
      this.$refs.formR.validateField('target1');
      this.$emit('update:getVal1', this.formR.target1);
      // this.getFormData();
    },
    handleMaxChange() {
      this.$refs.formR.validateField('target2');
      this.$emit('update:getVal2', this.formR.target2);
      // this.getFormData();
    },
    // 并对外暴露操作方法
    // 返回数值
    getFormData() {
      const ret = {};
      this.$refs.formR.validate((valid) => {
        ret.valid = valid;
        ret.form = this.form;
      });
      this.$emit('handler', ret);
    },
  },
};
</script>
<style lang="scss">
.datetimer-mobile-time {
  width: 100%;
  max-width: 840px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  .time-panel {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    .left-p {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      font-weight: 700px;
      color: #606266;
      line-height: 40px;
      font-weight: 700;
      padding: 0 12px 0 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      .wavy {
        line-height: 40px;
        text-align: center;
      }
      .dot {
        color: #ff0000 !important;
      }
    }

    .el-form-item__content {
      margin: 0 !important;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      .el-date-editor {
        width: 100%;
      }
    }
  }
}
@media screen and(max-width: 750px) {
  .datetimer-mobile-time {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    .time-panel {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      .left-p {
        text-align: left;
      }
      .el-form-item__content {
        margin: 0 !important;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
      }
    }
  }
}
</style>
