<template>
  <div class="coinForexPairsWhiteList-container">
    <el-card class="box-card">
      <h5>白名单用户管理</h5>
      <el-form :model="form" ref="form" :rules="rules" label-width="240px">
        <el-row :span="24">
          <el-col :span="9">
            <el-row :span="24">
              <el-col :span="24">
                <el-form-item label="币汇开仓、挂单开关：" prop="status">
                  <el-switch
                    :disabled="!isModify"
                    v-model="form.status"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                  >
                  </el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :span="24">
              <p class="coinForexPairsWhiteList-tip">
                * 开启开关时，输入框内的白名单用户UID，可进行开仓、挂单操作；
              </p>
              <p class="coinForexPairsWhiteList-tip">
                * 关闭开关时，所有用户含白名单内的用户均可进行开仓、挂单操作；
              </p>
              <p class="coinForexPairsWhiteList-tip">
                * 开启开关时，输入框内的UID全部清空后，则所有人均不可进行开仓、挂单操作。
              </p>
            </el-row>
          </el-col>

          <el-col :span="15">
            <el-row :span="24">
              <el-col :span="22">
                <el-form-item label="白名单用户UID：" prop="userList">
                  <el-input
                    rows="3"
                    @input="checkVal('userList')"
                    :disabled="!isModify"
                    v-model="form.userList"
                    :autosize="{ minRows: 3 }"
                    type="textarea"
                    placeholder="请输入UID , 以逗号隔开"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <div v-if="btnArr.includes('edit')">
          <div class="middle" v-if="!isModify">
            <el-button type="primary" size="medium" @click="isModify = true">修改</el-button>
          </div>
          <div class="middle" v-if="isModify">
            <el-button type="primary" plain size="medium" @click="cancelSend">取消</el-button>
            <el-button type="primary" size="medium" :loading="btnSendLoading" @click="confirmSend"
              >提交修改</el-button
            >
          </div>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import $api from '@/api/api'
export default {
  name: 'CoinForexPairsWhiteList',
  data() {
    return {
      btnArr: [], // 权限
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      btnSendLoading: false,
      form: {
        status: false,
        userList: ''
      },
      rules: {
        userList: [{ required: true, message: '必填', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 对输入值的范围进行限制
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d,]/g, '')
      this.form[val] = (this.form[val] + '').replace(/,,/g, ',')
    },
    // // 对输入值的范围进行限制
    // checkVal(obj, val) {
    //   this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '')
    // },
    // 保存页面修改
    confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          if (this.btnSendLoading) return
          let { status, userList } = this.form
          let params = { userList }
          if (!status) {
            params.userList = params.userList + 'close'
          }
          this.btnSendLoading = true
          const res = await $api.apiEditCoinForexPairsWhiteListConfig(params)
          if (res) {
            this.$message({ message: '修改成功！', type: 'success' })
            this.isModify = false
            this.getDetail()
          }
          this.btnSendLoading = false
        }
      })
    },
    cancelSend() {
      this.isModify = false
      this.form = {
        status: false,
        userList: ''
      }
      this.getDetail()
    },
    async getDetail() {
      const res = await $api.apiGetCoinForexPairsWhiteListConfig({})
      if (res) {
        this.form = res.data.data
      }
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority('CoinForexPairsWhiteList', [], [])
    this.btnArr = authObj.btnArr || []
    this.getDetail()
  }
}
</script>

<style lang="scss" scoped>
.coinForexPairsWhiteList-container {
  padding: 4px 10px 10px 10px;
  .coinForexPairsWhiteList-tip {
    margin-left: 80px;
    margin-bottom: 20px;
    font-size: 14px;
  }
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
