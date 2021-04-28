<template>
  <div class="lockConfig-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回 </el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <H5>锁仓配置</H5>
        <div class="con-line">
          <el-form :model="form" ref="form" :rules="rules" label-width="240px" size="medium">
            <el-form-item label="每日固定释放比例" prop="percent" :label-width="labelWidth">
              <el-col :span="19"
                ><el-input type="text" placeholder="请输入" @input="checkVal('percent')" v-model="form.percent" :disabled="!isModify">
                  <div slot="append">%</div></el-input
                >
              </el-col>
            </el-form-item>
          </el-form>
          <div v-if="isCURDAuth">
            <div class="middle" v-if="!isModify">
              <el-button type="primary" size="medium" @click="isModify = true">修改</el-button>
            </div>
            <div class="middle" v-if="isModify">
              <el-button type="primary" plain size="medium" @click="callFalse">取消</el-button>
              <el-button type="primary" size="medium" :loading="confirmLoading" @click="confirmSend">提交修改</el-button>
            </div>
          </div>
        </div>

        <div class="con-line">
          <el-form :model="formUser" ref="formUser" :rules="rulesUser" label-width="240px" size="medium">
            <el-form-item label="锁仓资金输出账户" prop="uid" :label-width="labelWidth">
              <el-col :span="19">
                <el-select v-model="formUser.uid" placeholder="请选择" style="width:180px;margin-right:60px;" :disabled="!isModifyUser">
                  <el-option v-for="(item, index) in prizeUidArr" :key="index" :label="item.realName" :value="item.uid"></el-option> </el-select
              ></el-col>
            </el-form-item>
          </el-form>
          <div v-if="isCURDAuthUser">
            <div class="middle" v-if="!isModifyUser">
              <el-button type="primary" size="medium" @click="isModifyUser = true">修改</el-button>
            </div>
            <div class="middle" v-if="isModifyUser">
              <el-button type="primary" plain size="medium" @click="callFalseUser">取消</el-button>
              <el-button type="primary" size="medium" :loading="confirmUserLoading" @click="confirmSendUser">提交修改</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import $api from '@/api/api';
import utils from '@/utils/util';
import Precision from '@/utils/number-precision';

export default {
  name: 'LockConfig',
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      isCURDAuthUser: true,
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      isModifyUser: false,
      listLoading: false, // 表格loading
      userLoading: false, // 用户loading
      confirmLoading: false, // 提交loading
      confirmUserLoading: false,
      list: [], //委托列表
      labelWidth: '170px',
      prizeUidArr: [], // 用户奖励列表

      isRegisterSwitch: false,
      form: {
        percent: '',
      },
      formUser: {
        uid: '',
      },
      rules: {
        percent: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      rulesUser: {
        uid: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    callFalse() {
      this.isModify = false;
      this.getList();
    },
    callFalseUser() {
      this.isModifyUser = false;
      this.getLockUser();
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {};
      this.listLoading = true;
      const res = await $api.getLockPercent(query_data);
      if (res) {
        const tmp = res.data.data;
        if (tmp) {
          this.form = {
            percent: (Precision.times(tmp, 100) + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'),
          };
        } else {
          this.form = {
            percent: 0,
          };
        }
      }
      this.listLoading = false;
    },
    async getLockUser() {
      if (this.userLoading) return;
      const query_data = {};
      this.userLoading = true;
      const res = await $api.getLockOutUser(query_data);
      const tmp = res.data.data;
      if (tmp) {
        this.formUser = {
          uid: +res.data.data,
        };
      }
      this.userLoading = false;
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          if (this.confirmLoading) return;
          const { percent } = this.form;
          let params = {
            percent: Precision.divide(percent, 100),
          };
          this.confirmLoading = true;
          const res = await $api.setLockPercent(params);
          if (res) {
            this.$message({ message: '固定释放比例修改成功！', type: 'success' });
            this.getList();
            this.isModify = false;
          }
          this.confirmLoading = false;
        }
      });
    },
    async confirmSendUser() {
      this.$refs['formUser'].validate(async valid => {
        if (valid) {
          if (this.confirmUserLoading) return;
          const { uid } = this.formUser;
          let query_now = {
            uid: uid,
          };
          this.confirmUserLoading = true;
          const resUser = await $api.setLockOutUser(query_now);
          if (resUser) {
            this.$message({ message: '资金输出账户修改成功！', type: 'success' });
            this.getLockUser();
            this.isModifyUser = false;
          }
          this.confirmUserLoading = false;
        }
      });
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (val === 'percent') {
        this.form[val] = this.form[val] > 100 ? 100 : this.form[val];
        this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //两个小数
      }
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // 获取奖励支出UID
    async getSubExpendUserList() {
      const res = await $api.getSubExpendUserList({ pageNum: 1, pageSize: 1000 });
      if (res.data) {
        this.prizeUidArr = res.data.data.records;
      }
    },
  },
  activated() {
    let authObj = this.$util.getAuthority('GiveRestric', [], []);
    this.isCURDAuth = authObj.isModify;
    this.isCURDAuthUser = authObj.isModify;

    this.form = {
      percent: '',
    };
    this.formUser = {
      uid: '',
    };
    this.isModify = false;
    this.isModifyUser = false;
    this.getList();
    this.getSubExpendUserList();
    this.getLockUser();
  },
};
</script>
<style scope lang="scss">
.lockConfig-container {
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
        // height:60px;
        line-height: 60px;
        .el-form-item {
          margin: 0;
        }
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
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
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
@media screen and(max-width: 750px) {
  .lockConfig-container {
    .box-card {
      .box-card-con {
        .con-line {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
