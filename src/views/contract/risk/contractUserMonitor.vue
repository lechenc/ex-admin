<template>
  <div class="contractUserMonitor-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="btnArr.includes('excel')"
        :exportExcelCurrentPageIsShow="false"
        @do-exportExcel="exportExcel"
      />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!-- <div class="container-footer">
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
    </div> -->
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { contractUserMonitorCol, contractUserMonitorConfig } from '@/config/column/contractAgent'
import $api from '@/api/api'
import utils from '@/utils/util'
export default {
  name: 'ContractUserMonitor',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      btnArr: [],
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 20, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      excelLoading: false // 导出loadiing
    }
  },

  methods: {
    async queryData(params) {
      this.excelLoading = true
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.getContractUserMonitorList(params)
      this.excelLoading = false
      if (res) {
        console.log('res', res)
        return res
      }
    },
    exportExcel(val) {
      this.search_params_obj = val.query
      const num = val.num
      utils.exportData.apply(this, [num])
    },
    async doHandle(data) {
      const { fn, row } = data
      if (fn == 'toCloseContract') {
        this.$router.push({
          query: {
            uid: row.uid
          },
          path: '/contract/store/closeContract'
        })
      }

      if (fn == 'toUserlistDetail') {
        this.$router.push({
          query: {
            id: row.uid
          },
          path: '/user/userlistDetail'
        })
      }
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      if (
        !this.search_params_obj.singleOrderGt &&
        !this.search_params_obj.totalOrderGt &&
        !this.search_params_obj.interval
      ) {
        return this.$message.error('请输入风控查询条件')
      }
      if (!this.search_params_obj.timeRangeStart && !this.search_params_obj.timeRangeEnd) {
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
      // this.getList()
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getList()
    },

    // 数据列表
    async getList() {
      if (this.listLoading) return
      const params = {
        // pageNum: this.current_page,
        // pageSize: this.pageSize
      }
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      this.listLoading = true
      const res = await $api.getContractUserMonitorList(params)
      if (res) {
        // const { records, total, current, pages } = res.data.data
        this.list = res.data.data
        // this.list = records
        // this.total = total
        // this.current_page = current
        // this.pages = pages
      }
      this.listLoading = false
    },
    // 时间格式 YYYY-MM-DD
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        this.searchCofig[0].value = [befV, nowV]
        params.timeRangeEnd = nowV.replace(/\//gi, '-')
        params.timeRangeStart = befV.replace(/\//gi, '-')
      }
      if (this.search_params_obj.timeRangeStart) {
        this.search_params_obj.timeRangeEnd = this.formatTime(this.search_params_obj.timeRangeEnd)
        this.search_params_obj.timeRangeStart = this.formatTime(
          this.search_params_obj.timeRangeStart
        )
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority('ContractUserMonitor', contractUserMonitorCol, [])
    this.btnArr = authObj.btnArr || []
    this.configs = contractUserMonitorCol
    this.searchCofig = this.$util.clone(contractUserMonitorConfig)

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.searchCofig[0].value = [
      this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
      this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
    ]
    // this.getList()
  }
}
</script>
<style lang="scss">
.contractUserMonitor-container {
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
