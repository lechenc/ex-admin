<template>
  <div class="extract-container">
    <div class="container-top">
      <Bsearch
        cal-text="活动奖金统计"
        :configs="searchCofig"
        :excel-loading="excelLoading"
        :export-excel="btnArr.includes('excel')"
        :cal-loading="calLoading"
        :cal-total="true"
        @do-search="doSearch"
        @do-reset="doReset"
        @do-exportExcel="exportExcel"
        @do-calTotal="calTotal"
      />
    </div>
    <div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" />
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
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import { activityCol, activityColNoBtn, activityConfig } from '@/config/column/front'
import $api from '@/api/api'
import utils from '@/utils/util'
import iconPage from '@/components/icon-page'

export default {
  name: 'Activity',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      excelLoading: false, // 下载excelloading
      calLoading: false, // 统计loading
      list: [], // 委托列表
      dataList: [], // 用于导出的数据
      toDay: '',
      ago: '',
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      formLabelWidth: '120px',
      qrcodeShow: false, // 是否显示验证码
      btnArr: []
    }
  },
  mounted() {
    const authObj = this.$util.getAuthority('Activity', activityCol, activityColNoBtn)
    this.configs = authObj.val
    this.btnArr = authObj.btnArr || []
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.searchCofig = this.$util.clone(activityConfig)
    this.getList()
  },
  methods: {
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
      this.searchCofig.forEach(v => {
        v['value'] = ''
      })
      this.searchCofig[0].value = [
        this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
        this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
      ]
      this.getList()
    },
    async queryData(params) {
      this.excelLoading = true
      params.isOwn = 0
      params.appId = 0
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.getActivityLists(params)
      this.excelLoading = false
      return res
    },
    exportExcel(val) {
      this.search_params_obj = val.query
      const num = val.num
      utils.exportData.apply(this, [num])
    },
    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1
      this.pageSize = val
      this.getList()
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getList()
    },
    // 活动奖金统计
    async calTotal(data) {
      this.search_params_obj = data
      this.requiredParams(this.search_params_obj)
      this.calLoading = true
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      Object.assign(query_data, this.search_params_obj)
      const res = await $api.getActivitySum(query_data)
      if (res) {
        const getObj = res.data.data
        if (getObj) {
          this.$alert(
            `<p>奖池剩余总额：${getObj.totalLast}</p>
              <p>奖池拨出总额：${getObj.totalOut}</p>
              <p>累计首日充值金额（USDT）：${getObj.netAmountSum}</p>
              <p>累计开仓交易总额USDT：${getObj.cumulativeTradeAmountSum}</p>
              <p>累计奖励到账总额USDT：${getObj.rewardToAccountSum}</p>`,
            '活动奖金统计',
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
    // getlist
    async getList() {
      if (this.listLoading) return
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      this.requiredParams(query_data)
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.getActivityLists(query_data)
      if (res) {
        const { records, total, current, pages } = res.data.data
        if (records.length) {
          const obj = {
            id: '',
            uid: '小计',
            userId: '',
            username: '',
            firstRechargeTime: '',
            netAmount: 0,
            reward: 0,
            cumulativeTradeAmount: 0,
            rewardToAccount: 0
          }
          // 拼接小计数据
          var sum = records.reduce((prev, cur) => {
            prev.netAmount = prev.netAmount + cur.netAmount
            prev.reward = prev.reward + cur.reward
            prev.cumulativeTradeAmount = prev.cumulativeTradeAmount + cur.cumulativeTradeAmount
            prev.rewardToAccount = prev.rewardToAccount + cur.rewardToAccount
            return prev
          }, obj)
          records.push(sum)
        }
        this.total = total
        this.pages = pages
        this.current_page = current
        this.list = records
        this.dataList = records
      }
      this.listLoading = false
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        const befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
        const nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        params.endTime = nowV.replace(/\//gi, '-')
        params.startTime = befV.replace(/\//gi, '-')
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV]
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
    }
  }
}
</script>
<style scope lang="scss">
.extract-container {
  padding: 4px 10px 10px 10px;
  .is-risk-control {
    color: red;
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
  .inner-footer {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  .wind-control-dialog {
    .el-form-item__label {
      text-align: left;
    }
    .text {
      margin-left: 20px;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .wind-control-btn {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
