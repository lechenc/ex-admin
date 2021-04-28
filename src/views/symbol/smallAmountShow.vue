<template>
  <div class="smallAmountShow-container">
    <el-card class="box-card">
      <h5>小额资产展示管理设置</h5>
      <el-form :model="form" ref="form" :rules="rules" label-width="160px">
        <el-form-item label="小额面值币种:" prop="newGoogleCode">
          <el-col :span="12">
            <el-select :disabled="!isModify" v-model="form.coinName" placeholder="请选择">
              <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.label"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="低于该数值即为小数:" prop="authGoogle">
          <el-col :span="12"><el-input :disabled="!isModify" type="text" @input="checkVal('form', 'authGoogle')" placeholder="请输入" v-model="form.authGoogle"></el-input> </el-col>
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
        newGoogleCode: '',
        authGoogle: '',
      },
      coinList: [],
      rules: {
        newGoogleCode: [{ required: true, message: '必填', trigger: 'blur' }],
        authGoogle: [{ required: true, message: '必填', trigger: 'blur' }],
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
          const {} = this.form;
          let params = {};
          this.btnSendLoading = true;
          const res = await $api.apiEditGoogleCode(params);
          if (res) {
            this.$message({ message: '修改成功！', type: 'success' });
            this.isModify = false;
            this.form = {
              newGoogleCode: '',
              authGoogle: '',
            };
            this.getDetail();
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
      this.getDetail();
    },
    async getDetail() {},
  },
  mounted() {
    let authObj = this.$util.getAuthority('SmallAmountShow', [], []);
    this.btnArr = authObj.btnArr;
    this.$store.dispatch('common/getCoinList').then(() => {
      this.coinList = this.$store.state.common.coinlist;
    });
    this.getDetail();
  },
};
</script>

<style lang="scss" scoped>
.smallAmountShow-container {
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
