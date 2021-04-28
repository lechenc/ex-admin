<template>
  <div class="regionalRestrict-container">
    <h4>地区访问设置</h4>
    <el-card class="box-card">
      <div class="box-card-con">
       <p>{{destxt}}</p>
        <el-form :model="form" ref="form" size="medium">
          <el-input style="font-size:14px;" type="textarea" :rows="10" placeholder="请输入您允许访问收银台的地区，用“,”号分隔" v-model="form.areas" :disabled="!isModify">
          </el-input>
        </el-form>
        <p class="tips">输入您允许访问收银台的地区,多个地区之间用 “,” 号分隔</p>
        <div v-if="isCURDAuth">
          <div class="middle" v-if="!isModify">
            <el-button type="primary" size="medium" @click="isModify = true">修改</el-button>
          </div>
          <div class="middle" v-if="isModify">
            <el-button type="primary" plain size="medium" @click="isModify = false">取消</el-button>
            <el-button type="primary" size="medium" @click="confirmSend">提交修改</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import $api from "@/api/api";
import utils from "@/utils/util";

export default {
  components: {},
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      isModify: false, // 是否可以修改
      listLoading: false, // 表格loading
      destxt:"",
      form: {
        areas: "",
      },
    };
  },
  methods: {
    // 提交录单
    confirmSend() {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          let params = {
            areas: this.form.areas,
          };
          const res = await $api.updateEnableAreas(params);
          if (res) {
            this.$message({ message: "修改提交成功", type: "success" });
            this.isModify = false;
            this.getList();
          }
        }
      });
    },
    // 获取收银台允许访问地址
    async getList() {
      if (this.listLoading) return;
      const query_data = {};
      this.listLoading = true;
      const res = await $api.getEnableAreas(query_data);
      if (res) {
        const { destxt, paramValue } = res.data.result;
        this.destxt = destxt;
        this.form.areas = paramValue;
        this.listLoading = false;
      }
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("RegionalRestrict");
    // if (authStatus === 2) {
    //   this.isCURDAuth = false;
    //      this.isModify = false;
    // } else {
    //   this.isCURDAuth = true;
    //    this.isModify = false;
    // }
    this.getList();
  },
};
</script>
<style scope lang="scss">
.regionalRestrict-container {
  padding: 4px 10px 10px 10px;
  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      h5 {
        font-size: 16px;
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
      }
      p {
        color: #9fa19f;
        font-size: 14px;
      }
      .tips{
        color:#c33;
      }
    }
    .box-card-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
  .middle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .container-top {
    margin: 10px 0;
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
