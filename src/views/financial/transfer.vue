<template>
  <div class="transfer-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="btnArr.includes('excel')"
        @do-exportExcel="exportExcel"
      />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @size-change="pageSizeChange"
        @current-change="goPage"
        layout="total,sizes, prev, pager, next, jumper"
        :current-page="current_page"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { transferCol, transferConfig } from '@/config/column/financial'
import $api from '@/api/api'
import utils from '@/utils/util'

export default {
  name: 'Transfer',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
      excelLoading: false, // 导出loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      btnArr: []

      // totalExFee: "", // 手续费总计
      // totalArrivalAccount: "", // 到账总计
    }
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
      this.searchCofig.forEach((v) => {
        v['value'] = ''
      })
      this.searchCofig[0].value = [
        this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
        this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
      ]
      this.getList()
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
      const res = await $api.accountTransfer(query_data)
      if (res) {
        const { records, total, current, pages } = res.data.data
        this.total = total
        this.pages = pages
        this.current_page = current
        // this.totalExFee = totalExFee;
        // this.totalArrivalAccount = totalArrivalAccount;
        this.list = records
        this.dataList = records
      }
      this.listLoading = false
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000)
    },
    async queryData(params) {
      this.excelLoading = true
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.accountTransfer(params)
      this.excelLoading = false
      return res
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000)
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000)
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [
          this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
          this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        ]
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
    },
    // 币种获取
    async getSymbolList() {
      this.$store.dispatch('common/getCoinList').then(() => {
        this.searchCofig[3]['list'] = this.$store.state.common.coinlist
      })
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority('Transfer', transferCol, [])
    this.btnArr = authObj.btnArr || []
    this.configs = transferCol
    this.searchCofig = this.$util.clone(transferConfig)

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getList()
    this, getSymbolList()
  }
}
</script>
<style scope lang="scss">
.transfer-container {
  padding: 4px 10px 10px 10px;
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
