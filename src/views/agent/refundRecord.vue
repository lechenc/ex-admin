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
        :configs="searchCofig"
        :cal-loading="calLoading"
        :cal-total="true"
        @do-search="doSearch"
        @do-reset="doReset"
        @do-calTotal="calTotal"
        ref="Bsearch"
      />
    </div>
    <div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages" />
      <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
        @current-change="goPage"
      />
    </div>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { refundRecordCol, refundRecordConfig } from '@/config/column/contractAgent'
import $api from '@/api/api'

export default {
  name: 'RefundRecord',
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
      list: [], // 委托列表
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
      symbollistContract: [],
      formLabelWidth: '120px',
      orderType: 1,
      symbollistCoinForex: []
    }
  },
  mounted() {
    this.configs = refundRecordCol
    this.searchCofig = this.$util.clone(refundRecordConfig)

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getList()
    this.getSymbolListContract()
    this.getSymbolListCoinForex()
  },
  methods: {
    // 合约交易对获取
    async getSymbolListContract() {
      this.$store.dispatch('common/getSymbolListContract').then(() => {
        this.symbollistContract = this.$store.state.common.symbollistContract
        this.searchCofig[5]['list'] = this.$store.state.common.symbollistContract
      })
    },

    //币汇交易对获取
    async getSymbolListCoinForex() {
      this.$store.dispatch('common/getCoinForexList').then(() => {
        this.symbollistCoinForex = this.$store.state.common.coinForexList
      })
    },

    orderTypeChange(val) {
      this.searchCofig[5]['value'] = ''
      this.$refs.Bsearch.doSearch()
      if (val == 1) {
        this.searchCofig[5]['list'] = this.symbollistContract
      } else if (val == 3) {
        this.searchCofig[5]['list'] = this.symbollistCoinForex
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
        userType: 1,
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
            <p>代理商返佣金额：${getObj.amount}</p>`,
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
        userType: 1,
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
      // if (this.search_params_obj.coinMarket) {
      //   if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
      //     let tmp = '';
      //     tmp = this.symbollistContract.filter(v => v['value'] == this.search_params_obj.coinMarket)[0].label;
      //     this.search_params_obj.coinMarket = tmp;
      //   }
      // }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmp = ''
          tmp = this.symbollistContract.filter(
            (v) => v['value'] == this.search_params_obj.coinMarket
          )[0].label
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
