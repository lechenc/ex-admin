<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="coinForexNotCloseList-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :calLoadingFastExcel="calLoadingFastExcel"
        calTextFastExcel="快速导出excel"
        :calIsShowFastExcel="btnArr.includes('excel')"
        @do-calFast-excel="calFastExcel"
      />
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { coinForexNotCloseListCol, coinForexNotCloseListConfig } from '@/config/column/coinForex'
import $api from '@/api/api'

import fileDownload from 'js-file-download'
export default {
  name: 'coinForexNotCloseList',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      searchCofig: [], // 搜索框配置
      btnLoading: false, // 提交
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchConfig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pages: 0, // 总页数
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      toDay: '',
      ago: '',
      calLoadingFastExcel: false,
      btnArr: [],
      coinForexList: []
    }
  },

  methods: {
    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1;
      this.pageSize = val;
      this.getList();
    },

    // 导出excel
    calFastExcel(data) {
      if (this.calLoadingFastExcel) return
      this.calLoadingFastExcel = true
      this.requiredParams(data)
      $api
        .getCoinForexNotCloseListExport(data)
        .then((res) => {
          this.calLoadingFastExcel = false
          fileDownload(res.data, '未平仓报表.xlsx')
        })
        .catch(() => {
          this.calLoadingFastExcel = false
        })
    },
    async doHandle(data) {
      const { fn, row } = data
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      if (!this.search_params_obj.openStartTime && !this.search_params_obj.openEndTime) {
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

    async getList() {
      if (this.listLoading) return
      this.listLoading = true

      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        orderString: 'created desc'
      }
      this.requiredParams(this.search_params_obj)
      Object.assign(params, this.search_params_obj)
      const res = await $api.getCoinForexNotCloseListList(params)
      if (res) {
        const { records, current, total, pages } = res.data.data
        this.total = total
        this.pages = pages
        this.current_page = current
        this.list = records
        records.forEach(v => {
          v['status'] = v['status'] === 1 ? true : false
        })
        this.list = records
      }
      this.listLoading = false
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    },
    

    // 时间格式 YYYY-MM-DD
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        this.searchCofig[0].value = [befV, nowV]
        params.openEndTime = nowV.replace(/\//gi, '-')
        params.openStartTime = befV.replace(/\//gi, '-')
      }
      if (params.openStartTime) {
        params.openEndTime = this.formatTime(params.openEndTime)
        params.openStartTime = this.formatTime(params.openStartTime)
      }
    },

    // 币汇产品
    async getCoinForexList() {
      this.$store.dispatch('common/getCoinForexList').then(() => {
        this.coinForexList = this.$store.state.common.coinForexList
        this.searchCofig[4]['list'] = this.coinForexList
      })
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority('coinForexNotCloseList', coinForexNotCloseListCol, [])
    this.btnArr = authObj.btnArr || [] || []
    this.configs = coinForexNotCloseListCol
    this.searchCofig = coinForexNotCloseListConfig
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getCoinForexList()
    this.getList()
  }
}
</script>
<style lang="scss">
.coinForexNotCloseList-container {
  .el-form-item__content {
    margin-left: 0;
  }

  padding: 4px 10px 10px 10px;
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 30px auto 10px;
  }

  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
}
</style>
