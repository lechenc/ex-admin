<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-12-17 19:45:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="coinContract-container">
    <el-row v-if="topBtn" class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>

    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <el-dialog title="销账" :visible.sync="dialogFormVisible">
      <el-form :model="dForm" ref="dForm" :rules="drules">
        <el-form-item label="当前可用" prop="balanceCur" :label-width="formLabelWidth">
          <el-input
            disabled
            type="text"
            v-model="dForm.balanceCur"
            autocomplete="off"
            placeholder=""
          ></el-input>
        </el-form-item>

        <el-form-item label="销账数量" prop="balance" :label-width="formLabelWidth">
          <el-input
            type="number"
            @input="checkVal('dForm', 'balance', 'not')"
            v-model="dForm.balance"
            autocomplete="off"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
          <el-input
            rows="3"
            maxlength="512"
            type="textarea"
            placeholder="请输入内容"
            v-model="dForm.remark"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button :loading="btnLoading" type="primary" @click="confirmOp">确定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加划转" width="600px" :visible.sync="transferFormVisible">
      <el-form :model="transferForm" label-width="120px" ref="transferForm" :rules="transferRules">
        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="币种" prop="coinId">
              <!-- <el-select
                @change="getTransferAccountUserAccount"
                v-model="transferForm.coinId"
                placeholder="请选择"
              > -->
              <el-select v-model="transferForm.coinId" placeholder="请选择">
                <el-option
                  v-for="item in coin_List"
                  :label="item.label"
                  :value="item.value"
                  :key="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="可用余额">
              <el-input
                disabled
                type="text"
                v-model="transferForm.transferBalance"
                placeholder=""
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="划出数量" prop="amount">
              <el-input
                type="number"
                v-model="transferForm.amount"
                @input="checkVal('transferForm', 'amount')"
                placeholder=""
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="接收账户" prop="toUserType">
              <el-select v-model="transferForm.toUserType" placeholder="请选择">
                <el-option
                  v-for="item in transferToList"
                  :label="item.label"
                  :value="item.userType"
                  :key="item.userType"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="备注" prop="remark">
              <el-input
                type="textarea"
                maxlength="100"
                v-model="transferForm.remark"
                rows="2"
                autocomplete="off"
                placeholder=""
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="transferFormVisible = false">取 消</el-button>
        <el-button :loading="transferBtnLoading" type="primary" @click="transferConfirmOp"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { accountContractCol } from '@/config/column/contract'
import $api from '@/api/api'
import Precision from '@/utils/number-precision'
import activePage from '@/mixin/keepPage'
import BTwoRangeChoose from '@/components/b-two-range-choose'

export default {
  name: 'ContractAccount',
  components: {
    Btable,
    Bsearch,
    iconPage,
    BTwoRangeChoose
  },
  data() {
    const validateTransferAmount = (rule, value, callback) => {
      const one = Number(value)
      const max = Number(this.transferForm.transferBalance)
      if (!max || one > max) {
        return callback(new Error('可划转数量不足'))
      }

      callback()
    }
    return {
      topBtn: false,
      toDay: '',
      ago: '',
      modeOfCostOptions: [
        {
          value: '1',
          label: '正常开启'
        },
        {
          value: '0',
          label: '关闭'
        },
        {
          value: '2',
          label: '多空均收'
        }
      ],
      btnArr: [], // 权限按钮列表
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      chainArr: [], // 链列表
      coin_List: [], // 交易对列表
      formLabelWidth: '150px',
      dialogFormVisible: false, // 编辑添加币种弹窗
      centerDialogVisible: false,
      dForm: {
        coinName: '',
        balance: '',
        amount: '',
        remark: ''
      },

      jform: {},
      formName: '新增币种',
      drules: {
        balance: [{ required: true, message: '必填', trigger: 'blur' }],
        balanceCur: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [
          { required: true, message: '必填', trigger: 'blur' }
          // { min: 5, max: 100, message: '长度在 5 到 100 个字符之间', trigger: 'blur' },
        ]
      },
      transferFormVisible: false,
      transferForm: {},
      transferRules: {
        
        coinId: [{ required: true, message: '必选', trigger: 'blur' }],
        amount: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validateTransferAmount, trigger: 'blur' }
        ],

        toUserType: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }]
      },
      transferToList: [],
      curTransferObj: {},
      transferBtnLoading: false
    }
  },
  methods: {
    async transferConfirmOp() {
      this.$refs['transferForm'].validate(async (valid) => {
        if (valid) {
          if (this.transferBtnLoading) return
          let { toUserType, ...par } = this.transferForm

          this.transferBtnLoading = true
          let toUserId = this.transferToList.filter((v) => v.userType == toUserType)[0].userId
          // 102指成本账户
          const parame = {
            toUserType,
            toUserId,
            fromUserType: 106,
            fromUserId: this.curTransferObj.userId,
            ...par
          }
          const res = await $api.apiAccountContractTransfer(parame)

          if (res) {
            this.$message.success('划转成功')
            this.getList()
            this.transferFormVisible = false
          }
          this.transferBtnLoading = false
        }
      })
    },
    // async getTransferAccountUserAccount(val) {
    //   let params = {
    //     accountType: 1,
    //     uid: this.curTransferObj.uid,
    //     coinId:val
    //   }
    //   const res = await $api.accountUseraccount(params)
    //   if (res) {
    //     this.transferBalance = res.data.data.amount || 0
    //   }
    // },

    async confirmOp() {
      this.$refs['dForm'].validate(async (valid) => {
        if (valid) {
          if (this.btnLoading) return
          let { uid, userId, remark, balance, balanceCur } = this.dForm
          if (parseFloat(balance) > parseFloat(balanceCur)) {
            return this.$message.error('销账数量不足')
          }
          this.btnLoading = true
          const query_data = {
            uid,
            userId,
            remark,
            balance
          }
          const res = await $api.apiDestroyBill(query_data)

          if (res) {
            this.$message.success('销账成功')
            this.getList()
            this.dialogFormVisible = false
          }
          this.btnLoading = false
        }
      })
    },

    // 对输入值的范围进行限制
    checkVal(obj, val, not) {
      if (not) {
        this[obj][val] = (this[obj][val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3') // 四个小数
      }

      if (this[obj][val] < 0) {
        console.log('123')
        this[obj][val] = 0
      }
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1
      }
      this.getList()
    },
    doReset() {
      this.search_params_obj = {}
      this.searchCofig.forEach((v) => {
        v['value'] = ''
      })

      this.getList()
    },
    async getAccountContractTransferToList() {
      const res = await $api.apiGetAccountContractTransferToList({})
      if (res) {
        this.transferToList = res.data.data
      }
    },

    async doHandle(data) {
      const { fn, row } = data
      if (fn == 'destroy') {
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dForm'].resetFields()
          const { uid, userId, balance } = row
          this.dForm = {
            uid,
            userId,
            balanceCur: balance,
            remark: ''
          }
        })
      }
      // 每日收益
      if (fn == 'earningsRecord') {
        this.$router.push({
          path: '/contract/accountManagement/earningsRecord'
        })
        return
      }
      //销账记录
      if (fn == 'destroyBill') {
        this.$router.push({
          path: '/contract/accountManagement/destroyBill',
          query: {
            uid: row.uid,
            userId: row.userId,
            optType: 89
          }
        })
        return
      }

      //划转
      if (fn == 'transfer') {
        this.transferFormVisible = true
        this.getAccountContractTransferToList()
        this.curTransferObj = row
        this.$nextTick(() => {
          this.$refs['transferForm'].resetFields()
          this.transferForm = {
            coinId: '',
            amount: '',
            toUserType: '',
            remark: '',
            transferBalance: row.balance
          }
        })
      }

      // //划转记录
      // if (fn == 'transferRecord') {
      //   this.$router.push({
      //     path: '/assetManage/transferRecord',
      //     query: {
      //       topBtn: true,
      //       uid: row.uid,
      //     },
      //   });
      //   return;
      // }

      // //收益流水
      // if (fn == 'earningsFlow') {
      //   this.$router.push({
      //     path: '/contract/accountManagement/earningsFlow',
      //     query: {
      //       topBtn: true,
      //       uid: row.uid,
      //       userId: row.userId,
      //     },
      //   });
      //   return;
      // }
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getList()
    },
    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = val.replace(/\%/, '')
      } else {
      }
      return Precision.divide(val, 100)
    },
    // 数字转为百分比
    numToPercent(val) {
      return Precision.times(val, 100)
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000)
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000)
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000)
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = ''
          tmpName = this.coin_List.filter((v) => v['value'] == this.search_params_obj.coinMarket)[0]
            .label
          this.search_params_obj.coinMarket = tmpName
        }
      }
    },
    // getlist
    async getList() {
      if (this.listLoading) return
      const query_data = {
        userType: 106
      }
      this.listLoading = true
      const res = await $api.getAccountContractList(query_data)
      if (res) {
        let list = res.data.data
        // 当前可用  =   【累计平台盈亏 + 累计平台手续费返佣 + 划入】 减去 【补发金额+团队长返佣金额+累计销账金额 + 划出】
        // abnormalReissueAmount  累计异常补发金额  固定 113791.6288
        // leaderCommissionAmount  团队长返佣金额  固定 23948.4439
        if (list.length) {
          list.forEach((v) => {
            v.abnormalReissueAmount = '113791.6288'
            v.leaderCommissionAmount = '23948.4439'
            v.balance = [v.sumProfitLoss, v.totalCommission].reduce((prev, cur) => {
              return Precision.plus(prev, cur)
            }, 0)
            v.balance = [v.abnormalReissueAmount, v.leaderCommissionAmount, v.destroyAmount].reduce(
              (prev, cur) => {
                return Precision.minus(prev, cur)
              },
              v.balance
            )
          })
        }
        this.list = list
      }
      this.listLoading = false
    }
  },
  created() {
    if (this.$route.query.topBtn) {
      this.topBtn = true
    }
  },
  async mounted() {
    let authObj = this.$util.getAuthority('AccountContract', accountContractCol, [])
    this.configs = authObj.val
    this.btnArr = authObj.btnArr || [] || []
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.$store.dispatch('common/getCoinList').then(() => {
      // 只要USDT
      let list = this.$store.state.common.coinlist
      this.coin_List = list.filter((v) => {
        return v.label == 'USDT'
      })
    })

    this.getList()
  }
}
</script>
<style lang="scss">
.coinContract-container {
  overflow: hidden;
  .contractAccount-top {
    height: 100px;
    background-color: #fff;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 1px 2px 6px #ccc;
  }
  padding: 4px 10px 10px 10px;
  .estimateDialog {
    .el-dialog__body {
      display: flex;
      .estimateForm {
        flex: 1;
      }
      .estimateBtn {
        margin-left: 14px;
        width: 80px;
        .el-button {
          padding: 44px 26px;
          &:nth-of-type(n + 1) {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  @media screen and(max-width: 750px) {
    .estimateDialog {
      .el-dialog__body {
        .estimateBtn {
          margin-top: 40px;
          .el-button {
            padding: 63px 26px;
            &:nth-of-type(n + 1) {
              margin-bottom: 62px;
            }
          }
        }
      }
    }
  }

  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
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

  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
    }
  }

  .el-input-group__append {
    .el-upload-list {
      .el-upload-list__item {
        margin-top: 0;
        .el-upload-list__item-name {
          display: none;
        }
        .el-upload-list__item-status-label {
          display: none;
        }
      }
    }
  }

  // icon
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
  .el-date-editor.el-input {
    max-width: 180px;
  }
  .el-dialog__body {
    max-height: 600px;
    overflow: auto;
  }
}
</style>
