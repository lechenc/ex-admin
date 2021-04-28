<template>
  <div class="resetUserGoogleCode-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <h5>重置用户谷歌验证器</h5>
      <el-form :model="form" ref="form" :rules="rules" label-width="140px">
        <el-form-item label="用户谷歌验证码:" prop="newGoogleCode">
          <el-col :span="12"
            ><el-input type="text" placeholder="请输入" v-model="form.newGoogleCode" readonly :disabled="!isModify">
              <el-button :loading="btnResetLoading" :disabled="!isModify" slot="append" @click="reset" type="primary">重置谷歌秘钥</el-button>
            </el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="Google验证码:" prop="authGoogle">
          <el-col :span="12"><el-input :disabled="!isModify" type="text" @input="checkVal('form', 'authGoogle')" placeholder="请输入" v-model="form.authGoogle"></el-input> </el-col>
        </el-form-item>

        <div v-if="btnArr.includes('resetGoogleCode')">
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
      btnResetLoading: false,
      form: {
        newGoogleCode: '',
        authGoogle: '',
      },
      rules: {
        newGoogleCode: [{ required: true, message: '必填', trigger: 'blur' }],
        authGoogle: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      current_row: {},
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
          const { newGoogleCode, authGoogle } = this.form;
          let params = {
            newGoogleCode,
            authGoogle,
            userId: this.current_row.userId,
          };
          this.btnSendLoading = true;
          const res = await $api.apiEditGoogleCode(params);
          if (res) {
            this.$message({ message: '修改成功！', type: 'success' });
            this.isModify = false;
            this.form = {
              newGoogleCode: '',
              authGoogle: '',
            };
            this.getDetail(this.$route.query.id);
          }
          this.btnSendLoading = false;
        }
      });
    },
    cancelSend() {
      this.isModify = false;
      this.form = {
        newGoogleCode: '',
        authGoogle: '',
      };
      this.getDetail(this.$route.query.id);
    },
    async reset() {
      if (this.btnResetLoading) return;
      this.btnResetLoading = true;
      const params = {
        account: this.current_row.email,
      };
      const res = await $api.getGoogleCode(params);
      if (res) {
        this.form.newGoogleCode = res.data.data.secretKey;
      }
      this.btnResetLoading = false;
    },
    async getDetail(_id) {
      const params = {
        uid: _id,
        pageNum: 1,
        pageSize: 10,
      };
      const res = await $api.getUserList(params);
      if (res) {
        const { records } = res.data.data;
        if (records && records.length > 0) {
          this.current_row = records[0];
          this.form.newGoogleCode = this.current_row.googleVerify;
        }
      }
      this.listLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('UserList', [], []);
    this.btnArr = authObj.btnArr;
    this.getDetail(this.$route.query.id);
  },
};
</script>

<style lang="scss" scoped>
.resetUserGoogleCode-container {
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
