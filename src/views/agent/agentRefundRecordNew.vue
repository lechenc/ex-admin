<template>
  <div class="refundRecord-container">
    <div class="container-btn">
      <el-radio-group @change="orderTypeChange" v-model="orderType" style="margin-bottom: 30px">
        <el-radio-button :label="1">合约</el-radio-button>
        <el-radio-button :label="3">币汇</el-radio-button>
      </el-radio-group>
    </div>
    <div class="container-top">
      <Bsearch
        ref="Bsearch"
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :calLoading="calLoading"
        :calTotal="true"
        @do-calTotal="calTotal"
      />
    </div>
    <div class="container-btn" v-if="btnArr && btnArr.length">
      <el-button type="primary" size="medium" v-if="btnArr.includes('config')" @click="editLine"
        >返佣设置</el-button
      >
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- 添加 编辑 -->
    <el-dialog title="返佣设置" width="500px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="一级返佣比例" :label-width="formLabelWidth" prop="firstLevelRate">
              <el-input
                type="number"
                v-model.trim="cForm.firstLevelRate"
                placeholder="请输入"
                @input="checkVal('firstLevelRate')"
              >
                <div slot="append">%</div>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="二级返佣比例" :label-width="formLabelWidth" prop="secondLevelRate">
              <el-input
                type="number"
                v-model.trim="cForm.secondLevelRate"
                placeholder="请输入"
                @input="checkVal('secondLevelRate')"
              >
                <div slot="append">%</div>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import Precision from '@/utils/number-precision'
import { refundRecordNewCol, refundRecordNewConfig } from '@/config/column/contractAgent'
import $api from '@/api/api'

export default {
  name: 'RefundRecordNew',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
      isCURDAuth: true, // 是否可修改路径配置
      calLoading: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      curRow: {},
      symbollist: [],
      formLabelWidth: '120px',
      contractRateArr: {},
      btnArr: [],
      dialogFormVisible: false, // 编辑汇率弹窗
      btnLoading: false, // 提交loadding
      cForm: {
        firstLevelRate: '',
        secondLevelRate: ''
      },
      rules: {
        firstLevelRate: [{ required: true, message: '必填', trigger: 'blur' }],
        secondLevelRate: [{ required: true, message: '必填', trigger: 'blur' }]
      },
      orderType: 1,
      symbollistCoinForex:[]
    }
  },
  methods: {
    // 合约交易对获取
    async getSymbolListContract() {
      this.$store.dispatch('common/getSymbolListContract').then(() => {
        this.symbollist = this.$store.state.common.symbollistContract
        this.searchCofig[4]['list'] = this.$store.state.common.symbollistContract
      })
    },

    //币汇交易对获取
    async getSymbolListCoinForex() {
      this.$store.dispatch('common/getCoinForexList').then(() => {
        this.symbollistCoinForex = this.$store.state.common.coinForexList
      })
    },
    orderTypeChange(val) {
      this.searchCofig[4]['value'] = ''
      this.$refs.Bsearch.doSearch()
      if (val == 1) {
        this.searchCofig[4]['list'] = this.symbollistContract
      } else if (val == 3) {
        this.searchCofig[4]['list'] = this.symbollistCoinForex
      }
    },
    editLine() {
      this.dialogFormVisible = true
      const { firstLevelRate, secondLevelRate } = this.contractRateArr
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields()
        this.cForm = {
          firstLevelRate: Precision.times(firstLevelRate, 100),
          secondLevelRate: Precision.times(secondLevelRate, 100)
        }
      })
    },
    async confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          if (Precision.plus(this.cForm.firstLevelRate, this.cForm.secondLevelRate) > 100) {
            this.$message({ message: '一级返佣比例和二级返佣比例之和不能大于100', type: 'error' })
            return
          }
          let { firstLevelRate, secondLevelRate } = this.cForm
          let params = {
            firstLevelRate: Precision.divide(firstLevelRate, 100),
            secondLevelRate: Precision.divide(secondLevelRate, 100)
          }
          this.btnLoading = true
          const res = await $api.updateContractRate(params)
          if (res) {
            this.$message({ message: '操作成功', type: 'success' })
            this.dialogFormVisible = false
          }
          this.btnLoading = false
          this.getcontractRateList()
        }
      })
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      this.cForm[val] = (this.cForm[val] + '').replace(/[^\d.]/g, '')
      if (this.cForm[val] >= 100) {
        this.cForm[val] = 100
      }
      this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3') // 2小数
      if (this.cForm[val] < 0) {
        this.cForm[val] = 0
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
      this.orderType =  1
      this.search_params_obj = {}
      this.searchCofig.forEach((v) => {
        v['value'] = ''
      })
      this.searchCofig[0].value = [
        this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
        this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
      ]
      this.getList()
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getList()
    },
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1
      }
      this.calLoading = true
      const params = {
        userType: 0,
        orderType: this.orderType
      }
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.nowQueryCommissionSum(params)
      if (res) {
        const getObj = res.data.data
        if (getObj) {
          this.$alert(
            `<p>手续费金额：${getObj.originAmount}</p>
            <p>用户返佣金额：${getObj.amount}</p>`,
            '统计结果',
            {
              dangerouslyUseHTMLString: true
            }
          ).catch(() => {})
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' })
        }
      }
      this.calLoading = false
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        userType: 0,
        orderType: this.orderType
      }
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      this.listLoading = true
      const res = await $api.getCommissionRecord(params)
      if (res) {
        const { records, total, current, pages } = res.data.data
        this.list = records
        this.total = total
        this.current_page = current
        this.pages = pages
      }
      this.listLoading = false
    },
    async getcontractRateList() {
      const res = await $api.getContractRate({})
      if (res) {
        this.contractRateArr = res.data.data || {}
      }
    },
    requiredParams(params) {
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
      //   let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
      //   params.endTime = nowV.replace(/\//gi, '-');
      //   params.startTime = befV.replace(/\//gi, '-');
      //   // 组件时间初始必须format格式
      //   this.searchCofig[0].value = [befV, nowV];
      // }
      // if (this.search_params_obj.startTime) {
      //   this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
      //   this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      // }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmp = ''
          tmp = this.symbollist.filter((v) => v['value'] == this.search_params_obj.coinMarket)[0]
            .label
          this.search_params_obj.coinMarket = tmp
        }
      }

      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000)
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000)
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [
          this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
          this.$util.dateFormat(this.today, 'YYYY/MM/DD HH:mm:ss')
        ]
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
    },
    formatTime(val) {
      // return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000)
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority('AgentRefundRecordNew', [], [])
    this.btnArr = authObj.btnArr || [] || [] || []
    this.configs = refundRecordNewCol
    this.searchCofig = this.$util.clone(refundRecordNewConfig)

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getList()
    this.getcontractRateList()
    this.getSymbolListContract()
    this.getSymbolListCoinForex()
  }
}
</script>
<style lang="scss">
.refundRecord-container {
  padding: 4px 10px 10px 10px;
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

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
</style>
