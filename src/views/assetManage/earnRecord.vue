<template>
  <div class="earnRecord-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        calText="手续费统计"
        :excelLoading="excelLoading"
        @do-exportExcel="exportExcel"
        :calTotal="true"
        @do-calTotal="calTotal"
        :exportExcel="btnArr.includes('excel')"
      />
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
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import activePage from '@/mixin/keepPage'
import {
  chargeStatisticCol,
  chargeStatisticNoBtn,
  chargeStatisticConfig
} from '@/config/column/dashboard'
import $api from '@/api/api'
import utils from '@/utils/util'

export default {
  name: 'EarnRecord',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  mixins: [activePage],
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      excelLoading: false, // 导出loading
      btnLoading: false, // 提交loading
      delBtnLoading: false, // 移出提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      dataList: [],
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      coinList: [],
      btnArr: []
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
    async queryData(params) {
      this.excelLoading = true
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.orderEntrustFee(params)
      this.excelLoading = false
      return res
    },
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1
      }
      if (!this.search_params_obj.coinName) {
        this.$message({ type: 'error', message: '币种必须选择!', duration: 2000 })
        return
      }
      const params = {}
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.orderEntrustFeeTotal(params)
      if (res) {
        const getObj = res.data.data
        if (getObj) {
          let txt = `<p>合计统计：</p>`
          if (this.search_params_obj.startTime) {
            txt += `时间：${this.$util.dateFormat(
              this.search_params_obj.startTime * 1000,
              'YYYY/MM/DD'
            )} - ${this.$util.dateFormat(this.search_params_obj.endTime * 1000, 'YYYY/MM/DD')}`
          }
          txt += `<p>币种：${this.search_params_obj.coinName}</p><p>总手续费: ${getObj.totalFee}</p>
          <p>法币总手续费: ${getObj.otcTotalFee}</p><p>币币总手续费: ${getObj.tradeTotalFee}</p>
          <p>提币总手续费: ${getObj.withdrawTotalFee}</p><p>划转总手续费: ${getObj.transferTotalFee}</p>
          <p>法币返佣收益统计: ${getObj.platformTotalEarning}</p>`
          this.$alert(txt, '统计结果', {
            dangerouslyUseHTMLString: true
          }).catch(() => {})
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' })
        }
      }
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      this.listLoading = true
      const res = await $api.orderEntrustFee(params)
      if (res.data && res.data.data) {
        const { records, total, current, pages } = res.data.data
        this.list = records
        this.dataList = records
        this.total = total
        this.current_page = current
        this.pages = pages
      }
      this.listLoading = false
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000)
    },
    requiredParams(params) {
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      // this.searchCofig[1].value = 1;
      // let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
      // let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
      // params.endTime = nowV.replace(/\//gi,"-");
      // params.startTime = befV.replace(/\//gi,"-");
      // // 组件时间初始必须format格式
      // this.searchCofig[0].value = [befV, nowV];
      // }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
      if (this.search_params_obj.coinName) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)) {
          let tmpName = ''
          tmpName = this.coinList.filter((v) => v['value'] == this.search_params_obj.coinName)[0]
            .label
          this.search_params_obj.coinName = tmpName
        }
      }
    },
    initFunc() {
      let authObj = this.$util.getAuthority('EarnAccount', chargeStatisticCol, [])
      this.btnArr = authObj.btnArr || [] || []
      this.configs = chargeStatisticCol
      this.searchCofig = this.$util.clone(chargeStatisticConfig)

      this.$store.dispatch('common/getCoinList').then(() => {
        this.searchCofig[1]['list'] = this.$store.state.common.coinlist
        this.coinList = this.$store.state.common.coinlist
      })

      let tmpId = this.$route.query.coinId
      let tmpName = this.$route.query.coinName
      if (tmpId) {
        this.$nextTick(() => {
          this.searchCofig[1].value = tmpId
          this.search_params_obj = { coinName: tmpName }
          this.getList()
        })
      } else {
        this.getList()
      }
    }
  },
  activated() {
    if (this.isInTags()) {
      return
    }

    this.list = [] //委托列表
    this.configs = [] // 委托列表列配置
    this.searchCofig = [] // 搜索框配置
    this.search_params_obj = {} // 搜索框对象
    this.current_page = 1 // 当前页码
    this.pageSize = 10 // 当前每页显示页码数
    this.total = 0 // 总条数
    this.pages = 0 // 总页数
    this.coinList = []

    this.initFunc()
  }
}
</script>
<style lang="scss">
.earnRecord-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  .container-footer {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
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
