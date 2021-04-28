<template>
  <div class="searchUserAddress-container">
    <el-form :model="form" ref="form" :rules="rules" label-width="160px" size="medium">
      <el-card class="box-card">
        <div class="box-card-con">
          <H5>用户地址查询</H5>
          <el-form-item label="请输入地址" prop="address" :label-width="labelWidth">
            <el-row>
              <el-col :span="7">
                <el-input type="text" style="margin-bottom:10px;" placeholder="请输入" v-model="form.address" @input="checkVal('address')">
                </el-input
              ></el-col>
              <el-button style="margin-left:10px;" :loading="calLoading" v-if="isCURDAuth" type="primary" size="medium" @click="confirmSend">查询</el-button>
            </el-row>
          </el-form-item>
        </div>
      </el-card>
    </el-form>
  </div>
</template>
<script>
import $api from '@/api/api';
export default {
  name: 'SearchUserAddress',
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交
      calLoading:false, // 搜索
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      labelWidth: '140px',
      form: {
        address: '',
      },
      rules: {},
    };
  },
  methods: {
    // 控制输入的范围
    checkVal(val) {
      if (this.form[val]) {
        this.form[val] = (this.form[val] + '').replace(/\s*$/g,'');
      }
    },
    // 保存页面修改
    async confirmSend() {
      if (!this.form.address) {
        this.$message({ type: 'error', message: 'uid必须填写!', duration: 2000 });
        return;
      }
      this.calLoading = true;
      const params = { 
        coinAddress: this.form.address
       }
      const res = await $api.queryUidByAddress(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(`<p>用户UID：${getObj.uid}</p><p>链名称：${getObj.chainName}</p>`, '查询结果', {
            dangerouslyUseHTMLString: true,
          }).catch(()=>{});
        } else {
          this.$message({ type: 'error', message: '数据查询失败，请核对地址!' });
        }
      }
      this.calLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('SearchUserAddress', [], []);
    this.isCURDAuth = authObj.isModify;
  },
};
</script>
<style scope lang="scss">
.searchUserAddress-container {
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
}
</style>
