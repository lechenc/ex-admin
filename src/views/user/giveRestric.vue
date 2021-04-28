
<template>
  <div class="giveRestric-container">
    <el-form :model="form" ref="form" :rules="rules" label-width="240px" size="medium">
      <el-card class="box-card">
        <div class="box-card-con">
          <H5>送币限制</H5>
          <el-form-item label="注册送币量" prop="registerGiveCount" :label-width="labelWidth">
            <el-col :span="12"><el-input type="text" placeholder="请输入" v-model="form.registerGiveCount" :disabled="!isModify"></el-input> </el-col>
          </el-form-item>
          <el-form-item label="注册送币是否需要实名" prop="registerGiveRealName" :label-width="labelWidth">
            <el-radio-group v-model="form.registerGiveRealName">
              <el-radio :disabled="!isModify" label="1">是</el-radio>
              <el-radio :disabled="!isModify" label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="送币时间" prop="registerGiveCoinOffsetTime" :label-width="labelWidth">
            <el-col :span="12"
              ><el-input type="number" placeholder="请输入" v-model="form.registerGiveCoinOffsetTime" :disabled="!isModify"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="送币开关" :label-width="labelWidth">
            <el-switch v-model="isRegisterSwitch" :disabled="!isModify" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
        </div>
        <div v-if="isCURDAuth">
          <div class="middle" v-if="!isModify">
            <el-button type="primary" size="medium" @click="isModify = true">修改</el-button>
          </div>
          <div class="middle" v-if="isModify">
            <el-button type="primary" plain size="medium" @click="cancelSend" >取消</el-button>
            <el-button type="primary" size="medium" :loading="confirmLoading" @click="confirmSend">提交修改</el-button>
          </div>
        </div>
      </el-card>
    </el-form>
  </div>
</template>
<script>
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      confirmLoading:false, // 提交loading
      list: [], //委托列表
      labelWidth: '100px',

      isRegisterSwitch: false,
      form: {
        registerGiveCount: '',
        registerGiveRealName: '',
        registerGiveCoinOffsetTime: '',
      },
      rules: {
        registerGiveCount: [{ required: true, message: '必填', trigger: 'blur' }],
        registerGiveRealName: [{ required: true, message: '必填', trigger: 'blur' }],
        registerGiveCoinOffsetTime: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = { };
      this.listLoading = true;
      const res = await $api.getGiveCoinConfig(query_data);
      if (res) {
        const tmp = res.data.data;
        this.form = {
          registerGiveCount: tmp.registerGiveCount,
          registerGiveRealName: tmp.registerGiveRealName,
          registerGiveCoinOffsetTime: tmp.registerGiveCoinOffsetTime
        };
        this.isRegisterSwitch = !!parseInt(tmp.registerGiveCoinSwitch);
      }
      this.listLoading = false;
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { registerGiveCoinOffsetTime, registerGiveCount, registerGiveRealName, ...repo } = this.form;
          let params = {
            registerGiveCount: parseFloat(registerGiveCount),
            registerGiveRealName: parseFloat(registerGiveRealName),
            registerGiveCoinOffsetTime: parseFloat(registerGiveCoinOffsetTime),
            registerGiveCoinSwitch: this.isRegisterSwitch ? 1 : 0
          };
          this.confirmLoading = true;
          const res = await $api.updateGiveCoinConfig(params);
          if (res) {
            this.$message({ message: '修改成功！', type: 'success' });
            this.getList();
            this.isModify = false;
          }
          this.confirmLoading = false;
        }
      });
    },
    cancelSend(){
      this.isModify = false;
      this.getList()
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('GiveRestric', [], []);
    this.isCURDAuth = authObj.isModify;

    this.getList();
  },
};
</script>
<style scope lang="scss">
.giveRestric-container {
  padding: 4px 10px 10px 10px;

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
  .middle {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .container-top {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 18px;
      height: 40px;
      line-height: 40px;
    }
    .coin {
      display: inline-block;
      font-size: 18px;
      margin-right: 10px;
    }
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }
}
</style>
