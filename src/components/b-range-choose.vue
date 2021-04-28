<template>
  <el-form ref="form" :model="form" :rules="rules">
    <el-row>
      <el-col :span="6">
        <div class="left-p"><span class="dot">*</span>&nbsp;{{ label }}</div>
      </el-col>
      <el-col :span="18">
        <el-row>
          <el-col :span="12">
            <el-form-item prop="min">
              <el-input v-model="form.min" @change="handleMinChange" />
            </el-form-item>
          </el-col>
          <el-col :span="1">
            <div class="wavy">~</div>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="max">
              <el-input v-model="form.max" @change="handleMaxChange" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name: "BRangeChoose",
  props: {
    label: {
      type: String,
      default: "",
    },
		value:{
			type:String,
			default:"0-0"
		}
  },
	watch:{
		value: {
    　　handler(newVal, oldVal) {
					if(newVal){
							let temp = newVal.split("-");
							this.form.min = temp[0];
					　　this.form.max = temp[1];	
					}else{
						// 值为空则默认0-0
						this.form.min = "";
					　this.form.max = "";	
					}
    　　},
    　　immediate: true
		}
	},
  data() {
    return {
      form: {
        min: 0,
        max: 1,
      },
      rules: {
        min: [
          { required: true, message: "必填项", trigger: "blur" },
          { validator: this.validateCom, trigger: "blur" },
          { validator: this.validateMin, trigger: "blur" },
        ],
        max: [
          { required: true, message: "必填项", trigger: "blur" },
          { validator: this.validateCom, trigger: "blur" },
          { validator: this.validateMax, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    validateCom(rule, value, callback) {
      const one = Number(value);
      // if (Number.isInteger(one)) {
        if (one < -1000000) {
          return callback(new Error(`输入值必须大于${-1000000}`));
        } else if (one > 1000000000000000000) {
          return callback(new Error(`输入值必须小于${1000000000000000000}`));
        }
        return callback();
      // }
      // return callback(new Error("输入值必须为正整数"));
    },
    validateMin(rule, value, callback) {
      const one = Number(value);
      const max = Number(this.form.max);
      if (!max || one < max) {
        return callback();
      }
      return callback(new Error("输入值不得大于最大阈值"));
    },
    validateMax(rule, value, callback) {
      const one = Number(value);
      const min = Number(this.form.min);
      if (!min || one > min) {
        return callback();
      }
      return callback(new Error("输入值不得小于最小阈值"));
    },
    handleMinChange() {
      this.$refs.form.validateField("max");
      this.getFormData();
    },
    handleMaxChange() {
      this.$refs.form.validateField("min");
      this.getFormData();
    },
    // 并对外暴露操作方法
		// 返回数值
    getFormData() {
      const ret = {};
      this.$refs.form.validate(valid => {
        ret.valid = valid;
        ret.form = this.form;
      });
      this.$emit("handler", ret);
    },
		// 清空填入项目
    resetForm() {
      this.$refs.form.resetFields();
    },
    // 校验，弹出红字提示
    validate(){
      this.$refs.form.validate(valid=>{
        if(valid){
          return true;
        }else{
          return false;
        }
      });
    }
  },
};
</script>
<style lang="scss">
.left-p {
  // text-align: right;
  vertical-align: middle;
  float: right;
  font-size: 14px;
  font-weight: 700px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.wavy {
  line-height: 40px;
  text-align: center;
}
.dot {
  color: #ff0000;
}
</style>
