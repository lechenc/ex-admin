<template>
  <div class="certificationConfig-container">
    <el-card class="box-card">
      <h5>实名认证配置设置</h5>
      <el-form :model="form" ref="form" :rules="rules" label-width="270px">
        <el-form-item label="阿里云实人认证单个用户每日限制次数:" prop="verifiedDayCount">
          <el-col :span="8">
            <el-input :disabled="!isModify" type="text" @input="checkVal('form', 'verifiedDayCount')" placeholder="请输入" v-model="form.verifiedDayCount"></el-input>
          </el-col>
          <el-col :span="1"> &nbsp;次</el-col>
        </el-form-item>

        <el-form-item label="阿里云实人认证单个用户总限制次数:" prop="verifiedSumCount">
          <el-col :span="8"><el-input :disabled="!isModify" type="text" @input="checkVal('form', 'verifiedSumCount')" placeholder="请输入" v-model="form.verifiedSumCount"></el-input> </el-col>
          <el-col :span="1"> &nbsp;次</el-col>
        </el-form-item>

        <el-form-item label="阿里云实人认证开关:" prop="verifiedSwift">
          <el-col :span="8"> <el-switch :disabled="!isModify" v-model="form.verifiedSwift" active-color="#13ce66" inactive-color="#ff4949"> </el-switch> </el-col>
        </el-form-item>

        <div v-if="btnArr.includes('edit')">
          <div class="middle" v-if="!isModify">
            <el-button type="primary" size="medium" @click="isModify = true">修改</el-button>
          </div>
          <div class="middle" v-if="isModify">
            <el-button type="primary" plain size="medium" @click="cancelSend">取消</el-button>
            <el-button type="primary" size="medium" :loading="btnSendLoading" @click="confirmSend">提交修改</el-button>
          </div>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import $api from '@/api/api';
export default {
  data() {
    return {
      btnArr: [], // 权限
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      btnSendLoading: false,
      form: {
        verifiedDayCount: '',
        verifiedSumCount: '',
        verifiedSwift: false,
      },
      rules: {
        verifiedDayCount: [{ required: true, message: '必填', trigger: 'blur' }],
        verifiedSumCount: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    // 对输入值的范围进行限制
    checkVal(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '');
    },
    // 保存页面修改
    confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          if (this.btnSendLoading) return;
          //console.log('this.form.verifiedDayCount', this.form.verifiedDayCount);
          //console.log('this.form.verifiedSumCount', this.form.verifiedSumCount);
          if (parseFloat(this.form.verifiedSumCount) < parseFloat(this.form.verifiedDayCount)) {
            return this.$message.error('每日限制次数不得大于总限制次数');
          }
          const { verifiedDayCount, verifiedSumCount, verifiedSwift } = this.form;
          let params = { verifiedDayCount, verifiedSumCount, verifiedSwift: verifiedSwift ? 1 : 0 };
          this.btnSendLoading = true;
          const res = await $api.apiUpdateCertificationConfig(params);
          if (res) {
            this.$message({ message: '修改成功！', type: 'success' });
            this.isModify = false;
            this.getDetail();
          }
          this.btnSendLoading = false;
        }
      });
    },
    cancelSend() {
      this.isModify = false;
      this.form = {
        verifiedSwift: '',
        verifiedSumCount: '',
      };
      this.getDetail();
    },
    async getDetail() {
      const res = await $api.apiGetCertificationConfig({});
      if (res) {
        //console.log('res', res);
        let obj = res.data.data;
        this.form.verifiedSwift = obj.verifiedSwift ? true : false;
        this.form.verifiedDayCount = obj.verifiedDayCount;
        this.form.verifiedSumCount = obj.verifiedSumCount;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('CertificationConfig', [], []);
    this.btnArr = authObj.btnArr;
    this.getDetail();
  },
};
</script>

<style lang="scss" scoped>
.certificationConfig-container {
  padding: 4px 10px 10px 10px;
  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
    }
  }
  .box-card {
    margin: 20px 0;
    h5 {
      font-size: 16px;
    }
    h5::before {
      content: '';
      border-left: 5px solid #03a7f0;
      margin-right: 10px;
    }
  }
  .middle {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
