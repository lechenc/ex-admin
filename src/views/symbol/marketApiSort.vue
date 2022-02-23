<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2022-02-22 12:31:32
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
              <el-form-item label="单位时间内（s）:  " prop="second">
                <el-input
                  style="width: 55%"
                  type="number"
                  placeholder="请输入"
                  v-model="form.second"
                  :disabled="!isModify"
                  @input="checkVal('form', 'second')"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="请求接口失败（次）:  " prop="count">
                <el-input
                  style="width: 55%"
                  type="number"
                  placeholder="请输入"
                  v-model="form.count"
                  :disabled="!isModify"
                  @input="checkVal('form', 'second')"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <h4>排序设置</h4>
          <div class="marketApiSort-table">
            <el-table class="table-container" :data="form.robotMarkets" border size="small">
              <el-table-column prop="name" label="接口名称" align="center"></el-table-column>
              <el-table-column prop="enable" label="是否正在启用" align="center">
                <template slot-scope="scope">
                  <el-switch
                    v-model="scope.row.enable"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    :disabled="!isModify"
                  >
                  </el-switch>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="操作" fixed="right" width="280" align="center">
                <template slot-scope="scope">
                  <el-button
                    :disabled="!isModify"
                    v-if="scope.$index"
                    size="small"
                    type="primary"
                    @click="moveUp(scope.row, scope.$index)"
                  >
                    上移
                  </el-button>

                  <el-button
                    :disabled="!isModify"
                    v-if="scope.$index + 1 != form.robotMarkets.length"
                    size="small"
                    type="primary"
                    @click="moveDown(scope.row, scope.$index)"
                  >
                    下移
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <el-row :span="24">
            <el-col :span="12">
              <el-form-item label="自动切换平台后，提醒手机号设置栏: " prop="phone">
                <el-input
                  v-model="form.phone"
                  type="textarea"
                  :disabled="!isModify"
                  @input="checkValPhone('form', 'phone')"
                  maxlength="1200"
                  rows="4
                "
                  placeholder="每个号码之间使用英文逗号进行隔开，最多可填100个手机号"
                ></el-input>
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
        phone: '',
        count: '',
        second: '',
        robotMarkets: [],
        createTime: '',
        id: '',
        updateTime: '',
        usingMarket: ''
      },
      symbollist: [{ label: 'BTC', value: 1 }],
      rules: {
        second: [{ required: true, message: '必填', trigger: 'blur' }],
        count: [{ required: true, message: '必填', trigger: 'blur' }],
        phone: [{ required: true, message: '必填', trigger: 'blur' }]
      }
      // list: []
    }
  },
  methods: {
    moveDown(row, index) {
      let newrow = row
      this.form.robotMarkets.splice(index, 1)
      this.form.robotMarkets.splice(index + 1, 0, newrow)
    },
    moveUp(row, index) {
      let newrow = row
      this.form.robotMarkets.splice(index, 1)
      this.form.robotMarkets.splice(index - 1, 0, newrow)
    },
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
          let { phone, count, second, robotMarkets, createTime, id, updateTime, usingMarket } =
            res.data.data
          robotMarkets.forEach((v) => {
            v.enable = v.enable == 1 ? true : false
          })
          this.form = {
            phone,
            count,
            second,
            robotMarkets,
            createTime,
            id,
            updateTime,
            usingMarket
          }
        }
        this.listLoading = false
      } catch (error) {
        console.log('error')
      }
    },
    // 控制输入的范围
    checkVal(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '')
      if (this[obj][val] < 0) {
        this[obj][val] = 0
      }
    },
    // 控制输入的范围 phone
    checkValPhone(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d,]/g, '')
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { phone, count, second, robotMarkets, createTime, id, updateTime, usingMarket } =
            this.form
          let switchOnList = robotMarkets.filter((v) => {
            return v.enable == 1
          })
          if (switchOnList.length > 1) {
            return this.$message.error('只能启用一个接口')
          }
          robotMarkets.forEach((v, idx) => {
            v.enable = v.enable ? 1 : 0
            v.sort = idx + 1
          })
          let params = {
            phone,
            count,
            second,
            robotMarkets,
            createTime,
            id,
            updateTime,
            usingMarket: switchOnList.length ? switchOnList[0].name : ''
          }
          this.btnLoading = true
          const res = await $api.apiEditMarketApiSortInfo(params)
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
    .table-container {
      width: 50%;
      min-height: 200px;
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
