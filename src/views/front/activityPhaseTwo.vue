<template>
  <div class="activityPhaseTwo-container">
    <div class="container-top">
      <Bsearch
        cal-text="活动数据统计"
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

    <div class="sprecon-button">
      <el-button
        v-if="~btnArr.indexOf('importExcel')"
        type="primary"
        size="medium"
        @click="importExcelFn"
        >导入Excel</el-button
      >
    </div>
    <div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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

    <!-- 创建批量导入  -->
    <el-dialog title="创建导入Excel" :visible.sync="importExcelDialog" width="850px">
      <el-form label-width="150px" :model="importExcelForm" ref="importExcelForm">
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="获取表格：">
              <el-button type="text" @click="downLoadDefaultExcel"> 下载初始表格</el-button>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="上传表格：">
              <el-upload
                :action="$activityPhaseTwo_file_api"
                :headers="importHeaders"
                multiple
                name="file"
                :data="{}"
                :show-file-list="true"
                accept=".xlsx,.xls,.csv"
                :before-upload="importBeforeUpload"
                :on-success="importUpload"
                :on-error="uploadCompressError"
                :limit="1"
                :on-exceed="exceed"
                ref="importUploads"
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import { activityPhaseTwoCol, activityPhaseTwoConfig } from '@/config/column/front'
import $api from '@/api/api'
import utils from '@/utils/util'
import iconPage from '@/components/icon-page'
import fileDownload from 'js-file-download'
export default {
  name: 'ActivityPhaseTwo',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      importHeaders: { token: window.localStorage.getItem('admin_token') },
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
      btnArr: [],
      importExcelDialog: false,
      importExcelForm: {}
    }
  },
  mounted() {
    const authObj = this.$util.getAuthority('ActivityPhaseTwo', activityPhaseTwoCol, [])
    
    if (!authObj.btnArr || !authObj.btnArr.length || !authObj.btnArr.includes('trsignBtn')) {
      activityPhaseTwoCol[8] = {
        label: '用户违规标记',
        prop: 'isViolation',
        type: 'filter',
        show_type: 'text',
        filters: [
          { text: '是', val: true },
          { text: '否', val: false }
        ]
      }
    }
    this.configs = activityPhaseTwoCol
    this.btnArr = authObj.btnArr || []
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.searchCofig = this.$util.clone(activityPhaseTwoConfig)
    this.getList()
  },
  methods: {
    exceed(file, fileList) {
      this.$message.error('单次只能选择一个文件进行上传！')
    },
    uploadCompressError() {
      this.$message.error('文件上传失败')
    },
    importUpload(response, file, fileList) {
      if (response.code == 1) {
        this.importExcelDialog = false
        this.$message.success(response.message)
        this.getList()
      } else {
        this.$message.error(response.message)
      }
      this.$refs.importUploads.clearFiles()
    },
    // 文件限制
    importBeforeUpload(file) {
      const testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      const extension = testmsg === 'xlsx' || testmsg === 'xls' || testmsg === 'csv'
      const isLt2M = true
      // const isLt2M = file.size / 1024 / 1024 < 8;
      if (!extension) {
        this.$message({
          message: '上传文件只能是 xlsx、xls、csv格式!',
          type: 'error'
        })
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 8MB!',
          type: 'error'
        })
      }
      return extension && isLt2M
    },
    // 下载初始表格
    downLoadDefaultExcel() {
      $api
        .apiActivityPhaseTwoDownLoadDefaultExcel({})
        .then((res) => {
          fileDownload(res.data, '运营活动二期模板.xlsx')
        })
        .catch(() => {})
    },
    // 创建批量导入
    importExcelFn() {
      this.importExcelDialog = true
    },
    async doHandle(data) {
      const { fn, row } = data
      // 用户违规标记
      if (fn === 'trsignBtn') {
        const params = {
          isViolation: row.isViolation,
          id: row.id
        }
        const res = $api.apiUpdateActivityPhaseTwoViolation(params)
        if (res) {
          this.$message.success('状态切换成功')
        }
        this.getList()
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
      // this.searchCofig[0].value = [
      //   this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
      //   this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
      // ]
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
    // 活动数据统计
    async calTotal(data) {
      this.search_params_obj = data
      // this.requiredParams(this.search_params_obj)
      if (this.calLoading) return
      this.calLoading = true
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      Object.assign(query_data, this.search_params_obj)
      const res = await $api.apiGetActivityPhaseTwoSum(query_data)
      if (res) {
        const getObj = res.data.data
        if (getObj) {
          this.$alert(
            `<p>累计充值金额（USDT）：${getObj.inAmountSum || 0}</p>
              <p>累计提币交易总额（USDT）：${getObj.outAmountSum || 0}</p>
              <p>累计净入金金额（USDT）：${getObj.netAmountSum || 0}</p>
              <p>累计开仓交易额（USDT）：${getObj.cumulativeTradeAmountSum || 0}</p>
              <p>应得奖励数量（USDT）：${getObj.rewardSum || 0}</p>
              <p>实际奖励数量（USDT）：${getObj.rewardToAccountSum || 0}</p>
              <p>前端虚拟总奖池余额数量（USDT）：${getObj.totalLast || 0}</p>
              <p>前端虚拟总奖池已发数量（USDT）：${getObj.totalOut || 0}</p>
              `,
            '活动数据统计',
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
      // this.requiredParams(query_data)
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.apiGetActivityPhaseTwoLists(query_data)
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
.activityPhaseTwo-container {
  padding: 4px 10px 10px 10px;
  .is-risk-control {
    color: red;
  }
  .container-top {
    margin: 10px 0;
  }
  .sprecon-button {
    margin: 20px auto 15px;
    > button {
      margin: 5px 0 5px 5px;
    }
    > button:last-child {
      margin: 5px 0 5px 5px;
    }
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
