<template>
  <div class="smallAmountShow-container">
    <el-card class="box-card">
      <h5>小额资产展示管理设置</h5>
      <el-form :model="form" ref="form" :rules="rules" label-width="160px">
        <el-form-item label="小额面值币种:" prop="coinName">
          <el-col :span="12">
            <el-select :disabled="!isModify" v-model="form.coinName" placeholder="请选择">
              <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.label"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="低于该数值即为小数:" prop="amount">
          <el-col :span="12"><el-input :disabled="!isModify" type="text" @input="checkVal('form', 'amount')" placeholder="请输入" v-model="form.amount"></el-input> </el-col>
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
        coinName: '',
        amount: '',
        id: '',
      },
      coinList: [],
      rules: {
        coinName: [{ required: true, message: '必填', trigger: 'blur' }],
        amount: [{ required: true, message: '必填', trigger: 'blur' }],
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
          const { id, coinName, amount } = this.form;
          let params = { coinName, amount, type: 1 };
          if (id) {
            params.id = id;
          }
          this.btnSendLoading = true;
          const res = await $api.updateSmallAmountShow(params);
          if (res) {
            this.$message({ message: '修改成功！', type: 'success' });
            this.isModify = false;
            this.form = {
              newGoogleCode: '',
              authGoogle: '',
              id: '',
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
        id: '',
      };
      this.getDetail();
    },
    async getDetail() {
      let params = { type: 1 };
      const res = await $api.getSmallAmountShow(params);
      if (res) {
        const { id, coinStandard, amount } = res.data.data;
        this.form = {
          coinName: coinStandard,
          amount,
          id,
        };
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('SmallAmountShow', [], []);
    this.btnArr = authObj.btnArr;
    this.$store.dispatch('common/getCoinList').then(() => {
      let coinList = this.$store.state.common.coinlist;
      let list = [];
      coinList.forEach((v) => {
        if (v.coinName == 'coinName' || (v.coinName == 'coinName') == 'CNY') {
          list.push(v);
        }
      });
      this.coinList = list;
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
