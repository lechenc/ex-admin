<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2022-02-11 17:54:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="marketApiSort-container">
    <el-form :model="form" ref="form" :rules="rules" label-width="200px" size="medium">
      <el-card class="box-card">
        <div class="box-card-con">
          <h2>行情接口排序设置</h2>
          <h4>基础设置</h4>
          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="单位时间内（s）:  " prop="withdrawQuota">
                <el-input
                  style="width: 55%"
                  type="number"
                  placeholder="请输入"
                  v-model="form.withdrawQuota"
                  :disabled="!isModify"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="单位时间内（s）:  " prop="withdrawQuota">
                <el-input
                  style="width: 55%"
                  type="number"
                  placeholder="请输入"
                  v-model="form.withdrawQuota"
                  :disabled="!isModify"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <h4>排序设置</h4>
          <div class="marketApiSort-table">
            <el-table class="table-container" :data="list" height="auto" border size="small">
              <el-table-column prop="phone" label="接口名称" align="center"></el-table-column>
              <el-table-column prop="nickName" label="是否正在启用" align="center">
                <template slot-scope="scope">{{ scope.row.nickName || scope.row.name }}</template>
              </el-table-column>
              <el-table-column prop="date" label="操作" fixed="right" width="280" align="center">
                <template slot-scope="scope">
                  <el-button size="small" type="text" @click="subMerchantToGroup(scope.row.userId)">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="是否需要验证初级实名: " prop="firstVerifiedSwift">
                <el-radio-group :disabled="!isModify" v-model="form.firstVerifiedSwift">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="无需实名即可提币总开关: " prop="withdrawSwift">
                <el-switch
                  :disabled="!isModify"
                  v-model="form.withdrawSwift"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </el-form-item>
            </el-col>
          </el-row>

          <div v-if="btnArr.includes('edit')">
            <div class="middle" v-if="!isModify">
              <el-button type="primary" size="medium" @click="isModify = true">编辑</el-button>
            </div>
            <div class="middle" v-if="isModify">
              <el-button type="primary" plain size="medium" @click="cancelSend">取消</el-button>
              <el-button type="primary" size="medium" @click="confirmSend" :loading="btnLoading"
                >提交修改</el-button
              >
            </div>
          </div>
        </div>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import $api from '@/api/api'
export default {
  name: 'MarketApiSort',
  data() {
    return {
      btnArr: [],
      btnLoading: false, // 提交
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      labelWidth: '140px',

      isRegisterSwitch: false, // 是否开启
      coinId: 1,
      form: {
        withdrawQuota: '',
        firstVerifiedSwift: 0,
        withdrawSwift: false
      },
      symbollist: [{ label: 'BTC', value: 1 }],
      rules: {
        withdrawQuota: [{ required: true, message: '必填', trigger: 'blur' }],
        firstVerifiedSwift: [{ required: true, message: '必选', trigger: 'blur' }]
      },
      list: []
    }
  },
  methods: {
    cancelSend() {
      this.isModify = false
      this.getList()
    },
    // getlist
    async getList() {
      try {
        if (this.listLoading) return
        const query_data = {}
        this.listLoading = true
        const res = await $api.apiGetMarketApiSortInfo(query_data)
        if (res) {
          let { withdrawQuota, firstVerifiedSwift, withdrawSwift } = res.data.data
          this.form = {
            withdrawQuota,
            firstVerifiedSwift,
            withdrawSwift: withdrawSwift ? true : false
          }
        }
        this.listLoading = false
      } catch (error) {
        console.log('error')
      }
    },
    // 控制输入的范围
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '')
      if (this.form[val] < 0) {
        this.form[val] = 0
      }
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { withdrawQuota, firstVerifiedSwift, withdrawSwift } = this.form
          let params = {
            withdrawQuota,
            firstVerifiedSwift,
            withdrawSwift: withdrawSwift ? 1 : 0
          }
          this.btnLoading = true
          const res = await $api.apiEditRealNameFreeExtract(params)
          if (res) {
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.getList()
            this.isModify = false
          }
          this.btnLoading = false
        }
      })
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority('MarketApiSort', [], [])
    this.btnArr = authObj.btnArr || []

    this.getList()
  }
}
</script>

<style lang="scss">
.marketApiSort-container {
  padding: 4px 10px 10px 10px;
  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
    }
  }
  h4 {
    text-indent: 30px;
    font-size: 15px;
  }
  .marketApiSort-table {
    margin: 10px 30px;
    .table-container{
      width: 50%;
    }
  }

  .box-card {
    margin-bottom: 20px;

    .box-card-con {
      h2 {
        font-size: 16px;
      }

      h2::before {
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
