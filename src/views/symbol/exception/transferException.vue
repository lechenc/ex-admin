<!--
 * @Author: your name
 * @Date: 2022-03-10 13:03:38
 * @LastEditTime: 2022-03-10 14:32:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \exchange-admin\src\views\symbol\exception\transferException.vue
-->
<template>
  <div class="transferException-container">
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
import { transferExceptionCol, transferExceptionConfig } from '@/config/column/symbol'
import $api from '@/api/api'
import utils from '@/utils/util'
export default {
  name: 'TransferException',
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
      list: [], //委托列表
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
      symbollist: [],
      formLabelWidth: '120px',
      excelLoading: false,
      btnArr: [],
      dataList: []
    }
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data
      // 编辑币种
      if (fn === 'repair') {
        this.$confirm('确认一键修复吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        })
          .then( async() => {
            const { id, requestParameters } = row
            const params = {
              id,
              requestParameters
            }
            const res = await $api.apiTriggerTransferException(params)
            if (res) {
              this.$message.success('修复成功')
            }
            this.getList()
          })
          .catch(() => {})
      }
    },
    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1
      this.pageSize = val
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
      const res = await $api.apiGetTransferExceptionList(params)

      this.excelLoading = false
      if (res) {
        return res
      }
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
      // this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      this.listLoading = true
      const res = await $api.apiGetTransferExceptionList(params)
      if (res) {
        // const { records, total, current, pages } = res.data.data
        // this.list = records
        // this.total = total
        // this.current_page = current
        // this.pages = pages
        // this.dataList = records
        this.list = res.data.data
      }
      this.listLoading = false
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        this.searchCofig[0].value = [befV, nowV]
        params.endTime = nowV.replace(/\//gi, '-')
        params.startTime = befV.replace(/\//gi, '-')
        // 组件时间初始必须format格式
        //默认选择USDT 值为4
        this.searchCofig[2].value = 4
        this.search_params_obj.coinName = 'USDT'
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }

      if (this.search_params_obj.coinName) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)) {
          let tmp = ''
          tmp = this.symbollist.filter((v) => v['value'] == this.search_params_obj.coinName)[0]
            .label
          this.search_params_obj.coinName = tmp
        }
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority('TransferException', transferExceptionCol, [])
    this.btnArr = authObj.btnArr || []
    this.configs = transferExceptionCol
    this.searchCofig = this.$util.clone(transferExceptionConfig)
    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    // this.requiredParams({})
    this.getList()
  }
}
</script>
<style lang="scss">
.transferException-container {
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
