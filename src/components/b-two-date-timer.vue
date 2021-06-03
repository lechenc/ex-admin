<template>
  <div class="datetimer-mobile-time">
    <el-form ref="formR" :rules="rulesR" :model="formR" class="time-panel">
      <div class="left-p" :style="{ width: labelWidth }"><span class="dot">*</span>&nbsp;{{ labelWords }}</div>
      <el-col :span="19">
        <el-col :span="11">
          <el-form-item label="" prop="target1" label-width="0">
            <el-date-picker
              type="datetime"
              :size="sizeDiy"
              v-model="target1"
              value-format="yyyy/MM/dd HH:mm:ss"
              placeholder="开始日期"
              :picker-options="pickerOptionsStart(target2)"
              class="box-date-picker"
              :disabled="isdisabled"
              @focus="forbid"
            >
            </el-date-picker> </el-form-item
        ></el-col>

        <el-col :span="1" style="text-align:center;font-size:17px;line-height:38px;">
          ~
        </el-col>
        <el-col :span="11">
          <el-form-item label="" prop="target2" label-width="0">
            <el-date-picker
              type="datetime"
              :size="sizeDiy"
              v-model="target2"
              value-format="yyyy/MM/dd HH:mm:ss"
              placeholder="结束日期"
              :picker-options="pickerOptionsEnd(target1)"
              class="box-date-picker"
              :disabled="isdisabled"
              @change="checkTimer"
              @focus="forbid"
            ></el-date-picker> </el-form-item
        ></el-col>
      </el-col>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BTwoDateTimer',
  data() {
    return {
      formR: {
        target1: '',
        target2: '',
      },
      rulesR: {
        target1: [{ required: true, message: '必填' }],
        target2: [{ required: true, message: '必填' }],
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
      default: '100px',
    },
    isdisabled: {
      type: Boolean,
      default: false,
    },
    date1: {
      type: String,
      default: '',
    },
    date2: {
      type: String,
      default: '',
    },
  },
  activated() {
    this.resetValue();
  },
  computed: {
    sizeDiy() {
      return this.$store.state.app.device === 'mobile' ? 'small' : 'medium';
    },
    target1: {
      get() {
        this.formR.target1 = this.date1;
        return this.date1;
      },
      set(val) {
        this.formR.target1 = val;
        this.$emit('update:date1', val);
        this.$refs.formR.validateField('target1');
        // this.valiteValue('target1');
      },
    },
    target2: {
      get() {
        this.formR.target2 = this.date2;
        return this.date2;
      },
      set(val) {
        this.formR.target2 = val;
        this.$emit('update:date2', val);
        this.$refs.formR.validateField('target2');
      },
    },
  },
  methods: {
    resetValue() {
      this.$nextTick(() => {
        this.$refs['formR'].resetFields();
      });
    },
    valiteValue(val) {
      this.$nextTick(() => {
        if (!val) {
          this.$refs['formR'].validateField(['target1', 'target2'], valid => {
            if (valid !== '') {
              // flag = false;
            }
          });
        } else {
          this.$refs.formR.validateField(val);
        }
      });
    },
    pickerOptionsStart(val) {
      let endDateVal = val;
      console.log('val',val)
      return {
        disabledDate(date) {
          let overT = new Date();
          overT.setHours(0);
          overT.setMinutes(0);
          overT.setSeconds(0);
          let getNow = +new Date(overT.getTime() - 24 * 60 * 60 * 1000);

          if (endDateVal) {
            let timeNow = new Date(endDateVal).getTime();
            return date.getTime() > timeNow || +date <= getNow;
          }
          return +date <= getNow;
        },
      };
    },
    pickerOptionsEnd(val) {
      let beginDateVal = val;
      return {
        disabledDate(date) {
          if (beginDateVal) {
            // let curDate = new Date();
            // 不设置日期为23：59：59那么默认的可能是其他时间，导致当天不能可选
            // let overT = new Date();
            // overT.setHours(23);
            // overT.setMinutes(59);
            // overT.setSeconds(59);
            let timeNow = new Date(beginDateVal);
            timeNow.setHours(0);
            timeNow.setMinutes(0);
            timeNow.setSeconds(0);
            timeNow = timeNow.getTime();
            // let getNow = +new Date(overT.getTime() - 24 * 60 * 60 * 1000);
            // return date.getTime() < timeNow || +date > +overT; // 不能选择未来时间
            return date.getTime() < timeNow; // 能选择未来时间
          }
          let overT = new Date();
          let getNow = +new Date(overT.getTime() - 24 * 60 * 60 * 1000);
          return +date <= getNow;
        },
      };
    },
    checkTimer(val) {
      if (val) {
        let s1 = new Date(this.target1);
        let s2 = new Date(val);
        if (+s1 > +s2) {
          this.target2 = '';
          this.$message({ message: '活动结束时间必须大于开始时间！', type: 'error' });
        }
      }
    },
    forbid() {
      if (this.$store.state.app.device !== 'mobile') {
        return;
      }
      this.$nextTick(() => {
        let inputTime = document.querySelectorAll('.el-date-editor .el-input__inner');
        inputTime.forEach(item => {
          item.addEventListener('focus', () => {
            document.activeElement.blur();
          });
        });
      });
    },
  },
};
</script>
<style lang="scss">
.datetimer-mobile-time {
  width: 100%;
  max-width: 880px;
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
      font-weight: 600;
      color: #606266;
      line-height: 40px;
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
