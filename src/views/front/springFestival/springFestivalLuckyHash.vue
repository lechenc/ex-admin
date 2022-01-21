<template>
  <div class="springFestivalLuckyHash-container">
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
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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
import { springFestivalLuckyHashCol, springFestivalLuckyHashConfig } from '@/config/column/front'
import $api from '@/api/api'
import utils from '@/utils/util'
export default {
  name: 'SpringFestivalLuckyHash',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      dialogTableVisible: false,
      listLoading: false, // 表格loading
      calLoading: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      symbollist: [],
      toDay: '',
      ago: '',
      excelLoading: false, // 导出loading
      btnArr: [],
      dataList: []
    }
  },
  methods: {
    addFn() {},
    exportExcel(val) {
      this.search_params_obj = val.query
      const num = val.num
      utils.exportData.apply(this, [num])
    },
    async queryData(params) {
      this.excelLoading = true
      this.requiredParams(params)
      params.appId = 0
      Object.assign(params, this.search_params_obj)
      const res = await $api.apiGetSpringFestivalLuckyHashList(params)
      this.excelLoading = false
      return res
    },
    async doHandle(data) {
      const { fn, row } = data
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data

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
      const res = await $api.apiGetSpringFestivalLuckyHashList(query_data)
      if (res) {
        const { records, total, current, pages } = res.data.data
        this.total = total
        this.pages = pages
        this.current_page = current
        this.list = records
        this.dataList = records
      }
      this.listLoading = false
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.arrivalEndTime = nowV.replace(/\//gi, '-');
        params.arrivalStartTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.arrivalStartTime) {
        this.search_params_obj.arrivalEndTime = this.formatTime(this.search_params_obj.arrivalEndTime)
        this.search_params_obj.arrivalStartTime = this.formatTime(this.search_params_obj.arrivalStartTime)
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = ''
          tmpName = this.symbollist.filter((v) => v['id'] == this.search_params_obj.coinId)[0].value
          this.search_params_obj.coinMarket = tmpName
        }
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority(
      'SpringFestivalLuckyHash',
      springFestivalLuckyHashCol,
      []
    )
    this.btnArr = authObj.btnArr || []

    this.configs = springFestivalLuckyHashCol
    this.searchCofig = this.$util.clone(springFestivalLuckyHashConfig)
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getList()
  }
}
</script>
<style scope lang="scss">
.springFestivalLuckyHash-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 5px;
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
