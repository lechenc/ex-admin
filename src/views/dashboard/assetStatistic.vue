<template>
  <div class="assetStatistic-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="实时总资产" name="now">
        <div class="search-head">
          <el-button type="primary" size="small" @click="getList">刷新</el-button>
        </div>
        <template>
          <Btable :list-loading="listLoading" :data="list" :configs="configs1" />
        </template>
      </el-tab-pane>
      <el-tab-pane label="历史资产统计" name="past">
        <div class="container-top">
          <Bsearch
            :configs="searchCofig"
            cal-text="资产统计"
            :cal-total="true"
            @do-search="doSearch"
            @do-reset="doReset"
            @do-calTotal="calTotal"
          />
        </div>
        <Btable :list-loading="listLoading" :data="listPast" :configs="configs2" />
        <div class="container-footer">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :current-page="current_page"
            :page-size="pageSize"
            :total="total"
            @current-change="goPage"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import { assetsCol1, assetsCol2, assetsConfig } from '@/config/column/dashboard'
import $api from '@/api/api'

export default {
  name: 'AssetStatistic',
  components: {
    Btable,
    Bsearch
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      delBtnLoading: false, // 移出提交loading
      listLoading: false, // 表格loading
      listPastLoading: false,
      activeName: 'now',
      list: [], // 列表
      listPast: [], // 列表
      configs1: [], // 列表列配置
      configs2: [], // 列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      coinList: []
    }
  },
  mounted() {
    this.configs1 = assetsCol1
    this.configs2 = assetsCol2
    this.searchCofig = this.$util.clone(assetsConfig)
    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[1]['list'] = this.$store.state.common.coinlist
      this.coinList = this.$store.state.common.coinlist
    })

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')

    this.getList()
    this.getPastList()
  },
  methods: {
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1
      }
      this.getPastList()
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
      this.getPastList()
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getPastList()
    },
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1
      }
      if (!this.search_params_obj.coinId) {
        this.$message({ type: 'error', message: '币种必须选择!', duration: 2000 })
        return
      }
      const params = {}
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.colletAccountDailyCoinSum(params)
      if (res) {
        const getObj = res.data.data
        const tmpName = this.coinList.filter(v => v['value'] == this.search_params_obj.coinId)[0]
          .label
        if (getObj) {
          this.$alert(`<p>币种：${tmpName}</p><p>变化数量：${getObj.amount}</p>`, '统计结果', {
            dangerouslyUseHTMLString: true
          }).catch(() => {})
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' })
        }
      }
    },
    // 实时总资产
    async getList() {
      if (this.listLoading) return
      const params = {}
      this.listLoading = true
      const res = await $api.dailyCoinSum(params)
      if (res) {
        const tmp = res.data.data
        tmp.forEach(v => {
          v.contractAmount = '待添加字段'
          v.allAmount = '待添加字段'
          v.comparison = '待添加字段'
          v.entrustGuarantee = '待添加字段'
          v.LongPositionsGuarantee = '待添加字段'
          v.emptyPositionsGuarantee = '待添加字段'
          v.sumAmount = this.formatFloat(v.sumAmount)
          v.amount = this.formatFloat(v.amount)
          v.frozenAmount = this.formatFloat(v.frozenAmount)
          v.otcSumAmount = this.formatFloat(v.otcSumAmount)
          v.otcAmount = this.formatFloat(v.otcAmount)
          v.otcFrozenAmount = this.formatFloat(v.otcFrozenAmount)
        })
        this.list = tmp
      }
      this.listLoading = false
    },
    // 历史资产列表
    async getPastList() {
      if (this.listPastLoading) return
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      this.listPastLoading = true
      const res = await $api.accountDailyCoinSum(params)
      if (res) {
        const { records, total, current, pages } = res.data.data
        records.forEach(v => {
          v.contractAmount = '待添加字段'
          v.allAmount = '待添加字段'
          v.comparison = '待添加字段'
          v.entrustGuarantee = '待添加字段'
          v.LongPositionsGuarantee = '待添加字段'
          v.emptyPositionsGuarantee = '待添加字段'
          v.beforeAmount = this.formatFloat(v.beforeAmount)
          v.amount = this.formatFloat(v.amount)
          v.afterAmount = this.formatFloat(v.afterAmount)
        })
        this.listPast = records
        this.total = total
        this.current_page = current
        this.pages = pages
      }
      this.listPastLoading = false
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
    formatFloat(val) {
      return val && (val + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3')
    }
  }
}
</script>
<style lang="scss">
.assetStatistic-container {
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

  .search-head {
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: flex-start;
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
