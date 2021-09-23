<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="coinForexEntrustList-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :calLoadingExcel="calLoadingExcel"
        calTextExcel="快速导出excel"
        :calTotalExcel="btnArr.includes('excel')"
        @do-calTotal-excel="calTotalExcel"
      />
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { coinForexEntrustListCol, coinForexEntrustListConfig } from '@/config/column/coinForex'
import $api from '@/api/api'

import fileDownload from 'js-file-download'
export default {
  name: 'coinForexEntrustList',
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
      calLoadingExcel: false,
      btnArr: [],
      coinForexList: []
    }
  },

  methods: {
    // 导出excel
    calTotalExcel(data) {
      this.search_params_obj = data
      const params = {}

      this.calLoadingExcel = true
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      $api
        .getCoinForexEntrustListExport(params)
        .then(res => {
          this.calLoadingExcel = false
          fileDownload(res.data, '委托报表.xlsx')
        })
        .catch(() => {
          this.calLoadingExcel = false
        })
    },
    async doHandle(data) {
      const { fn, row } = data
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      if (!this.search_params_obj.orderStartTime && !this.search_params_obj.orderEndTime) {
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
        orderString: 'order_time desc'
      }
      this.requiredParams(this.search_params_obj)
      Object.assign(params, this.search_params_obj)
      const res = await $api.getCoinForexEntrustListList(params)
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
        params.orderEndTime = nowV.replace(/\//gi, '-')
        params.orderStartTime = befV.replace(/\//gi, '-')
      }
      if (this.search_params_obj.orderStartTime) {
        this.search_params_obj.orderEndTime = this.formatTime(this.search_params_obj.orderEndTime)
        this.search_params_obj.orderStartTime = this.formatTime(
          this.search_params_obj.orderStartTime
        )
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
    let authObj = this.$util.getAuthority('coinForexEntrustList', coinForexEntrustListCol, [])
    this.btnArr = authObj.btnArr || [] || []
    this.configs = coinForexEntrustListCol
    this.searchCofig = coinForexEntrustListConfig
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getCoinForexList()
    this.getList()
  }
}
</script>
<style lang="scss">
.coinForexEntrustList-container {
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
