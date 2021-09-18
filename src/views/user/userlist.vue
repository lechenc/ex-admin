<template>
  <div class="user-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        :excel-loading="excelLoading"
        :export-excel="btnArr.includes('excel')"
        @do-search="doSearch"
        @do-reset="doReset"
        @do-exportExcel="exportExcel"
      />
    </div>
    <div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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
import { userCol, userColNoBtn, userConfig } from '@/config/column/user'
import $api from '@/api/api'
import utils from '@/utils/util'
export default {
  name: 'UserList',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  filters: {
    userType(val) {}
  },
  data() {
    return {
      listLoading: false, // 表格loading
      excelLoading: false, // 导出loading
      list: [], // 委托列表
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
    }
  },
  mounted() {
    const authObj = this.$util.getAuthority('UserList', userCol, userColNoBtn)
    this.configs = authObj.val
    this.btnArr = authObj.btnArr || []

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')

    this.searchCofig = this.$util.clone(userConfig)
    this.getList()
    this.getLanguageList()
  },
  methods: {
    doHandle(data) {
      const { fn, row } = data
      if (fn === 'viewDetail') {
        this.$router.push({
          path: '/user/userlistDetail',
          query: {
            id: row.uid
          }
        })
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
      this.searchCofig.forEach(v => {
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
    exportExcel(val) {
      this.search_params_obj = val.query
      const num = val.num
      utils.exportData.apply(this, [num])
    },
    // 首屏表格
    async getList() {
      if (this.listLoading) return
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        appId: 0
      }
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      this.listLoading = true
      const res = await $api.getUserList(params)
      if (res) {
        const { records, total, pages, current } = res.data.data
        this.total = +total
        this.pages = +pages
        this.current_page = current
        this.list = records
        this.dataList = records
      }
      this.listLoading = false
    },
    async queryData(params) {
      this.excelLoading = true
      this.requiredParams(params)
      params.appId = 0
      Object.assign(params, this.search_params_obj)
      const res = await $api.getUserList(params)
      this.excelLoading = false
      return res
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        const befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
        const nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        this.searchCofig[0].value = [befV, nowV]
        params.endTime = nowV.replace(/\//gi, '-')
        params.startTime = befV.replace(/\//gi, '-')
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    },
    async getLanguageList() {
      const res = await $api.apiGetLanguageList({})
      if (res) {
        const list = res.data.data
        this.searchCofig[3]['list'] = list.map(v => {
          return {
            value: v.code,
            label: v.label
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.user-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }

  .container-footer {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
}
</style>
