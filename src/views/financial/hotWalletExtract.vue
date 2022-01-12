<template>
  <div class="hotWalletExtract-container">
    <div class="container-top">
      <!-- <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" /> -->
    </div>

    <el-card v-if="warnList.length" class="container-warn">
      <p v-for="(item, index) in warnList" :key="index">
        {{ `${item.chain}-${item.coin}热钱包地址余额不足，请尽快补充` }}
      </p>
    </el-card>

    <div class="container-btn">
      <el-button v-if="isCURDAuth" type="primary" size="medium" @click="addChain">添加</el-button>
      <el-button style="margin-right: 20px" type="primary" size="medium" @click="getList"
        >刷新</el-button
      >
    </div>
    <div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages" />
      <el-pagination
        background
        layout="total,sizes, prev, pager, next, jumper"
        :current-page="current_page"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageSize"
        :total="total"
        @size-change="pageSizeChange"
        @current-change="goPage"
      />
    </div>

    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="500px" :visible.sync="dialogFormVisible">
      <!-- :rules="chainForm.status ? rules : rules1" -->
      <el-form ref="chainForm" :model="chainForm" :rules="rules" :validate-on-rule-change="false">
        <el-form-item label="链名称" :label-width="formLabelWidth" prop="chain">
          <el-select
            v-model="chainForm.chain"
            :disabled="isEdit"
            placeholder="请选择"
            @change="chainChange"
          >
            <el-option
              v-for="(item, idx) in chainList"
              :key="idx"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coin">
          <el-select v-model="chainForm.coin" :disabled="isEdit" placeholder="请选择">
            <el-option
              v-for="(item, idx) in coinList"
              :key="idx"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="单笔限额" :label-width="formLabelWidth" prop="maxAutoWithdraw">
          <el-input
            v-model="chainForm.maxAutoWithdraw"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('maxAutoWithdraw')"
          />
        </el-form-item>
        <el-form-item label="单日限额" :label-width="formLabelWidth" prop="maxDailyAutoWithdraw">
          <el-input
            v-model="chainForm.maxDailyAutoWithdraw"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('maxDailyAutoWithdraw')"
          />
        </el-form-item>
        <el-form-item label="热钱包启用开关" :label-width="formLabelWidth">
          <el-switch
            v-model="chainForm.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeStauus"
          />
        </el-form-item>
        <el-form-item label="白天热钱包启用时间" :label-width="formLabelWidth" prop="dayTime">
          <el-time-picker
            v-model="chainForm.dayTime"
            is-range
            value-format="HH:mm:ss"
            format="HH:mm:ss"
            :disabled="!chainForm.status"
            range-separator="至"
            start-placeholder="选择开始时间"
            end-placeholder="选择结束时间"
            placeholder="选择时间范围"
          />
        </el-form-item>
        <el-form-item label="夜间热钱包启用时间" :label-width="formLabelWidth" prop="nightTime">
          <el-time-picker
            v-model="chainForm.nightTime"
            is-range
            value-format="HH:mm:ss"
            format="HH:mm:ss"
            :disabled="!chainForm.status"
            range-separator="至"
            start-placeholder="选择开始时间"
            end-placeholder="选择结束时间"
            placeholder="选择时间范围"
          />
        </el-form-item>
        <el-form-item
          label="每个用户夜间可使用提币次数"
          :label-width="formLabelWidth"
          prop="userNightWithdrawTimes"
        >
          <el-input
            v-model="chainForm.userNightWithdrawTimes"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('userNightWithdrawTimes')"
          />
        </el-form-item>
        <el-form-item
          label="每个用户夜间单次可提币限额"
          :label-width="formLabelWidth"
          prop="userNightWithdrawAmount"
        >
          <el-input
            v-model="chainForm.userNightWithdrawAmount"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('userNightWithdrawAmount')"
          />
        </el-form-item>
        <el-form-item
          label="每个用户夜间可使用提币总额"
          :label-width="formLabelWidth"
          prop="userNightWithdrawAmountTotal"
        >
          <el-input
            v-model="chainForm.userNightWithdrawAmountTotal"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('userNightWithdrawAmountTotal')"
          />
        </el-form-item>

        <!-- <el-form-item label="余额不足提醒手机号" :label-width="formLabelWidth" prop="alarmPhone">
          <el-input
            v-model="chainForm.alarmPhone"
            placeholder="请输入"
            autocomplete="off"
            type="text"
          />
        </el-form-item>
        <el-form-item label="余额不足提醒邮箱" :label-width="formLabelWidth" prop="alarmEmail">
          <el-input
            v-model="chainForm.alarmEmail"
            placeholder="请输入"
            autocomplete="off"
            type="email"
          />
        </el-form-item>
          -->
        <el-form-item
          label="钱包余额低于该参数值提醒值"
          :label-width="formLabelWidth"
          prop="alarmBalance"
        >
          <el-input
            v-model="chainForm.alarmBalance"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('alarmBalance')"
          />
        </el-form-item>

        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
          <el-input
            v-model="chainForm.googleCode"
            placeholder="请输入"
            class="my-mumber-input"
            autocomplete="off"
            type="text"
            @input="checkVal3('chainForm', 'googleCode')"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="btnLoading" @click="confirmOp">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 查看余额 弹窗 -->
    <el-dialog :visible.sync="dialogSetVisible" width="700px" title="查看余额">
      <el-row style="margin-bottom: 22px">
        <el-col :span="6">
          链类型名称: <span style="color: #4390ff">{{ protocol }}</span>
        </el-col>
        <el-col :span="6">
          币种名称: <span style="color: #4390ff">{{ coinKey }}</span>
        </el-col>
      </el-row>
      <Btable :list-loading="setListLoading" :data="setlist" :configs="setConfigs" />
    </el-dialog>

    <!-- 添加 编辑 -->
    <el-dialog title="删除确认" width="500px" :visible.sync="deleteDialogFormVisible">
      <el-form ref="deleteForm" :model="deleteForm" :rules="deletRules">
        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
          <el-input
            v-model="deleteForm.googleCode"
            placeholder="请输入"
            class="my-mumber-input"
            autocomplete="off"
            type="text"
            @input="checkVal3('deleteForm', 'googleCode')"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="deleteBtnLoading" @click="deleteConfirmOp"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import {
  hotWalletExtractCol,
  hotWalletExtractColNoBtn,
  hotWalletExtractSetCol
} from '@/config/column/financial'
import { parseTime } from '@/utils/index'
import $api from '@/api/api'
import { number } from 'echarts/lib/export'

export default {
  name: 'CoinWhiteList',
  components: {
    Btable,
    Bsearch,
    iconPage
  },

  filters: {
    typeTime(v) {
      if (!v) return ''
      return parseTime(v)
    }
  },
  data() {
    return {
      isCURDAuth: false, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      btnLoading2: false,
      listLoading: false, // 表格loading
      list: [], // 委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      dialogFormVisible: false,
      chainForm: {
        id: '',
        coin: '',
        chain: '',
        maxAutoWithdraw: '',
        maxDailyAutoWithdraw: '',
        status: false,
        googleCode: '',
        dayTime: '', // 白天热钱包启用时间
        nightTime: '', // 夜间热钱包启用时间
        userNightWithdrawTimes: '', // 每个用户夜间可使用提币次数
        userNightWithdrawAmount: '', // 每个用户夜间单次可提币限额
        userNightWithdrawAmountTotal: '', // 每个用户夜间可使用提币总额
        alarmBalance: '' // 钱包余额低于该参数值提醒值
        // alarmPhone: '', // 余额不足提醒手机
        // alarmEmail: '' // 余额不足提醒邮箱
      },

      formName: '',
      formLabelWidth: '125px',
      labelWidth: '125px',
      dialogSetVisible: false,
      setListLoading: false,
      setConfigs: [],
      setlist: [],
      coinKey: '',
      protocol: '',
      chainList: [],
      chainCoinObj: {},
      isEdit: false,
      // 删除
      deleteDialogFormVisible: false,
      deleteForm: {},
      deleteBtnLoading: false,
      deletRules: {
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }]
      },
      warnList: [],
      coin_List: [] // 币种列表
    }
  },
  computed: {
    coinList() {
      if (!this.chainForm.chain || !this.chainCoinObj[this.chainForm.chain]) {
        return []
      } else {
        const arr = this.chainCoinObj[this.chainForm.chain].map((v) => {
          return {
            label: v.coinName,
            value: v.coinId
          }
        })
        return arr
      }
    },
    rules() {
      const changeKeys = [
        'dayTime',
        'nightTime',
        'userNightWithdrawTimes',
        'userNightWithdrawAmount',
        'userNightWithdrawAmountTotal',
        'alarmBalance'
        // 'alarmPhone',
        // 'alarmEmail'
      ]
      const status = this.chainForm.status
      const keys = Object.keys(this.chainForm)
      const rules = {}
      keys.forEach((key) => {
        rules[key] = [
          {
            // required: changeKeys.includes(key) ? status : true,
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ]
      })
      return rules
    }
  },
  async mounted() {
    const authObj = this.$util.getAuthority(
      'HotWalletExtract',
      hotWalletExtractCol,
      hotWalletExtractColNoBtn
    )
    this.configs = authObj.val
    this.isCURDAuth = authObj.isAdd
    this.setConfigs = hotWalletExtractSetCol
    this.getList()
    this.getSymbolList()
  },
  methods: {
    // 得到币种列表
    async getSymbolList() {
      this.$store.dispatch('common/getCoinList').then(() => {
        this.coin_List = this.$store.state.common.coinlist
      })
    },
    async deleteConfirmOp() {
      const { googleCode, id } = this.deleteForm
      const params = {
        id,
        googleCode
      }
      const res = await $api.apiDelHotWalletExtract(params)
      if (res) {
        this.$message({ type: 'success', message: '删除成功!' })
        this.deleteDialogFormVisible = false
        this.getList()
      }
    },
    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1
      this.pageSize = val
      this.getList()
    },
    changeStauus() {
      this.$refs.chainForm.clearValidate()
    },
    chainChange(val) {
      this.chainForm.coin = ''
    },

    checkVal3(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '')
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      const arr = [
        'maxAutoWithdraw',
        'userNightWithdrawAmount',
        'userNightWithdrawAmountTotal',
        'maxDailyAutoWithdraw',
        'alarmBalance'
      ]
      if (arr.includes(val)) {
        this.chainForm[val] = (this.chainForm[val] + '').replace(
          /^(\-)*(\d+)\.(\d{0,8}).*$/,
          '$2.$3'
        )
      } else if (val === 'userNightWithdrawTimes') {
        this.chainForm[val] = (parseInt(this.chainForm[val]) + '').replace(
          /^(\-)*(\d{0,4}).*$/,
          '$2'
        )
        // this.chainForm[val] = (this.chainForm[val] + '').replace(/^(\d4).*$/, '$1')
      }
      if (this.chainForm[val] < 0) {
        this.chainForm[val] = 0
      }
    },

    // 表格操作
    async doHandle(data) {
      const { fn, row } = data
      // 编辑币种
      if (fn === 'edit') {
        this.isEdit = true
        this.formName = '编辑'
        this.dialogFormVisible = true
        this.getChainCoin()
        this.$nextTick(() => {
          this.$refs['chainForm'].resetFields()
          const Keys = Object.keys(this.chainForm)
          Keys.forEach((key) => {
            this.chainForm[key] = row[key]
          })
          this.chainForm.status = !!row['status']
          this.chainForm.googleCode = ''
          // 拼接时间组件所需数据
          this.chainForm.dayTime = row['dayEnableTimeStart']
            ? [row['dayEnableTimeStart'], row['dayEnableTimeEnd']]
            : ''
          this.chainForm.nightTime = row['nightEnableTimeStart']
            ? [row['nightEnableTimeStart'], row['nightEnableTimeEnd']]
            : ''
        })
      }
      if (fn === 'checkBalance') {
        const { chain: protocol, coin: coinKey } = row
        this.dialogSetVisible = true
        const firstRequest = $api.apiHotWalletExtractCheckChain({
          protocol: row.chain
        })
        this.setlist = []
        this.protocol = protocol
        this.coinKey = coinKey
        const request = $api.apiHotWalletExtractCheckDetail
        firstRequest.then((res) => {
          const { data } = res.data
          if (data instanceof Array) {
            data.forEach((address, idx) => {
              this.setlist.push({ address })
              request({ protocol, coinKey, address }).then((responent) => {
                const item = responent.data.data
                this.$set(this.setlist, idx, {
                  ...this.setlist[idx],
                  ...item
                })
              })
            })
          }
        })
      }
      if (fn === 'delete') {
        this.$confirm('确定删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async () => {
            this.deleteDialogFormVisible = true
            this.$nextTick(() => {
              this.deleteForm = {
                id: row.id,
                googleCode: ''
              }
            })
          })
          .catch(() => {})
      }
    },


    async getWarnList(chain,coin) {
      this.warnList = []
      const firstRequest = $api.apiHotWalletExtractCheckChain({
        protocol: chain
      })
      // this.setlist = []
      // this.protocol = protocol
      // this.coinKey = coin
      const request = $api.apiHotWalletExtractCheckDetail
      firstRequest.then((res) => {
        const { data } = res.data
        if (data instanceof Array) {
          data.forEach((address, idx) => {
            // this.setlist.push({ address })
            request({ protocol:chain, coinKey:coin, address }).then((responent) => {
              // const item = responent.data.data
              // this.$set(this.setlist, idx, {
              //   ...this.setlist[idx],
              //   ...item
              // })
              const item = responent.data.data
              if (parseFloat(item.amount)<parseFloat(item.alarmBalance)) {
                this.warnList.push({chain,coin})
              }
            })
          })
        }
      })
    },
    // 添加链类型
    addChain() {
      this.isEdit = false
      this.formName = '添加'
      this.dialogFormVisible = true
      this.chainList = []
      this.getChainCoin()
      this.$nextTick(() => {
        this.$refs['chainForm'].resetFields()
        const chainKeys = Object.keys(this.chainForm)
        chainKeys.forEach((key) => {
          this.chainForm[key] = ''
        })
        this.chainForm['status'] = false
      })
    },
    // 提交
    confirmOp() {
      this.$refs['chainForm'].validate(async (valid) => {
        if (valid) {
          const { id, status, dayTime, nightTime, coin } = this.chainForm
          if (status) {
            const dayStr = dayTime[0].split(':').join('')
            const dayEnd = dayTime[1].split(':').join('')
            const nightStr = nightTime[0].split(':').join('')
            const nightEnd = nightTime[1].split(':').join('')

            if (Number(nightEnd) > Number(dayEnd) && Number(dayEnd) > Number(nightStr)) {
              this.$message.error('白天热钱包启用时间和夜间启用时间不得重复交叉')
              return
            }

            if (Number(dayEnd) > Number(nightEnd) && Number(nightEnd) > Number(dayStr)) {
              this.$message.error('白天热钱包启用时间和夜间启用时间不得重复交叉')
              return
            }
          }
          const dayEnableTimeStart = dayTime ? dayTime[0] : ''
          const dayEnableTimeEnd = dayTime ? dayTime[1] : ''
          const nightEnableTimeStart = nightTime ? nightTime[0] : ''
          const nightEnableTimeEnd = nightTime ? nightTime[1] : ''

          const coinId = this.coin_List.filter((v) => v.label == coin)[0].value
          const params = {
            ...this.chainForm,
            status: status ? 1 : 0,
            dayEnableTimeStart,
            dayEnableTimeEnd,
            nightEnableTimeStart,
            nightEnableTimeEnd,
            coin,
            coinId
          }
          delete params['dayTime']
          delete params['nightTime']

          this.btnLoading = true
          // 新增 编辑
          // console.log('id', id);
          const res = !id
            ? await $api.apiAddHotWalletExtract({ ...params })
            : await $api.apiEditHotWalletExtract({ ...params, id })
          if (res) {
            const txt = !id ? '新增成功' : '编辑成功'
            this.$message({ message: txt, type: 'success' })
            this.dialogFormVisible = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      // if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
      //   this.search_params_obj.flag = 1;
      // }
      this.getList()
    },
    doReset() {
      this.search_params_obj = {}
      this.searchCofig.forEach((v) => {
        v['value'] = ''
      })
      this.getList()
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getList()
    },
    // getlist
    async getList() {
      if (this.listLoading) return
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.apiGetHotWalletExtractList(query_data)
      // console.log('res', res);
      if (res) {
        const { records, total, current, pages } = res.data.data
        this.list = records.map((item) => {
          return { ...item, isStatus: Boolean(item.status) }
        })

        // this.warnList = this.list.filter((item) => {
        //   return item.alarmBalance <= 0 && item.isStatus
        // })
        this.list.forEach((v) => {
          this.getWarnList(v.chain,v.coin)
        })

        this.total = total
        this.pages = pages
        this.current_page = current
        this.listLoading = false
      } else {
        this.listLoading = false
      }
    },

    

    async getChainCoin() {
      const res = await $api.apiGetChainCoinList({})
      if (res) {
        this.chainCoinObj = res.data.data
        for (const key in this.chainCoinObj) {
          this.chainList.push({
            label: key,
            value: key
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hotWalletExtract-container {
  padding: 4px 20px 10px 20px;

  .container-top {
    margin: 10px 0;
  }

  .container-warn {
    p {
      text-align: center;
      color: red;
      font-weight: 700;
      font-size: 20px;
    }
  }

  .container-btn {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
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
}

/deep/ .el-dialog__body {
  max-height: 600px;
  overflow: auto;
  .el-date-editor {
    width: 100%;
  }
  .el-form-item {
    display: flex;
    align-items: center;
    .el-form-item__label {
      flex-shrink: 0;
    }
    .el-form-item__content {
      width: 100%;
      margin-left: 0 !important;
    }
  }
}
</style>
