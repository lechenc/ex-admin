<!--
 * @Author: your name
 * @Date: 2020-04-27 14:59:36
 * @LastEditTime: 2020-12-01 15:11:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\extract.vue
 -->

<template>
  <div class="extract-container">
    <div class="container-top">
      <Bsearch
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

    <!-- 审核通过弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="760px" :title="reviewTitle">
      <el-form ref="reviewForm" :model="reviewForm" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="订单号" :label-width="formLabelWidth">
              {{ handleData.id }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="UID" :label-width="formLabelWidth">
              {{ handleData.uid }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="币种" :label-width="formLabelWidth">
              {{ handleData.coinName }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="提币数量" :label-width="formLabelWidth">
              {{ handleData.amount }}
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="手续费" :label-width="formLabelWidth">
              {{ handleData.fee }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="到账数量" :label-width="formLabelWidth">
              {{ handleData.realAmount }}
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="提币地址" :label-width="formLabelWidth">
              {{ handleData.toAddress }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="提币二维码" :label-width="formLabelWidth">
              <div style="width: 150px; height: 150px">
                <vue-qr
                  :text="handleData.toAddress"
                  :margin="0"
                  color-dark="#000"
                  color-light="#fff"
                  :size="150"
                />
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="地址类型" :label-width="formLabelWidth">
              {{ handleData.isOwn == 1 ? '内部交易' : handleData.isOwn == 0 ? '涉外交易' : '' }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="提币时间" :label-width="formLabelWidth">
              {{ handleData.createTime }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row />
        <el-form-item label="订单状态" :label-width="formLabelWidth">
          {{ statusText[handleData.tradeStatus] }}
        </el-form-item>
        <el-row />

        <el-row
          v-if="parseInt(handleData.tradeStatus) === 3 || parseInt(handleData.tradeStatus) === 4"
        >
          <el-col :span="12">
            <el-form-item label="初审时间" :label-width="formLabelWidth">
              {{ handleData.firstAuditTime }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="初审人" :label-width="formLabelWidth">
              {{ handleData.firstAuditUserName }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row
          v-if="parseInt(handleData.tradeStatus) === 13 || parseInt(handleData.tradeStatus) === 14"
        >
          <el-col :span="12">
            <el-form-item label="复审时间" :label-width="formLabelWidth">
              {{ handleData.reviewAuditTime }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="复审人" :label-width="formLabelWidth">
              {{ handleData.reviewAuditUserName }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row
          v-if="parseInt(handleData.tradeStatus) === 1 || parseInt(handleData.tradeStatus) === 2"
        >
          <el-col :span="12">
            <el-form-item label="终审时间" :label-width="formLabelWidth">
              {{ handleData.lastAuditTime }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="终审人" :label-width="formLabelWidth">
              {{ handleData.lastAuditUserName }}
            </el-form-item>
          </el-col>
        </el-row>

        <el-row />
        <!--	<el-form-item v-if="handleStatus === 'preReview'" label="备注" prop="mark" :label-width="formLabelWidth">
					<el-input v-model="reviewForm.mark"></el-input>
				</el-form-item> -->
        <!--   <template v-if="handleStatus === 'nextReview'">
          <el-form-item label="备注" prop="txId" :label-width="formLabelWidth">
            <el-input v-model="reviewForm.txId" size="medium" maxlength="100"></el-input>
          </el-form-item>
        </template>  这里复审的备注文字去掉了    -->
        <!-- <el-form-item label="备注" prop="mark" :label-width="formLabelWidth">
						<el-input v-model="reviewForm.mark"></el-input>
					</el-form-item> -->
        <!--   <template>
          <el-form-item label="备注" :label-width="formLabelWidth" v-if="parseInt(handleData.tradeStatus) == 1">
            <span>{{ handleData.txId }} </span>
            <el-input v-if="isModify" v-model="handleData.txId" :disabled="true"></el-input>
          </el-form-item>
        </template>
        -->
        <el-form-item
          v-if="handleData.tradeStatus === 4"
          label="初审备注"
          :label-width="formLabelWidth"
        >
          {{ handleData.firstRemark }}
        </el-form-item>
        <el-form-item
          v-if="handleData.tradeStatus === 14"
          label="复审备注"
          :label-width="formLabelWidth"
        >
          {{ handleData.reviewRemark }}
        </el-form-item>
        <el-form-item
          v-if="handleData.tradeStatus === 2"
          label="终审备注"
          :label-width="formLabelWidth"
        >
          {{ handleData.lastRemark }}
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="btnLoading" @click.stop="confirmReview">{{
          confirmText
        }}</el-button>
      </div>
    </el-dialog>

    <!-- 驳回通过弹窗 -->
    <el-dialog :visible.sync="rejectVisible" width="500px" title="驳回">
      <el-form ref="rejectForm" :model="rejectForm" :rules="rejectRules">
        <el-form-item label="驳回理由" prop="mark">
          <el-input v-model="rejectForm.mark" type="textarea" placeholder="请输入拒绝理由" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="rejectVisible = false">取消</el-button>
        <el-button type="primary" :loading="rejLoading" @click.stop="confirmReject">驳回</el-button>
      </div>
    </el-dialog>
    <!-- 验证码弹窗 -->
    <el-dialog title="验证收款码" :visible.sync="qrcodeShow" width="500px">
      <div style="padding-left: 20px; width: 100%">
        <vue-qr
          :text="analysisQrCode"
          :margin="0"
          color-dark="#000"
          color-light="#fff"
          :size="420"
        />
      </div>
    </el-dialog>

    <el-dialog width="1000px" :visible.sync="dialogTableVisible" title="用户出入金统计">
      <Btable
        :head-color="true"
        :list-loading="inOutGoldListLoading"
        :data="inOutGoldList"
        :configs="inOutGoldConfigs"
      />
    </el-dialog>
  </div>
</template>
<script>
import vueQr from 'vue-qr'
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { extractCol, extractColNoBtn, extractConfig } from '@/config/column/financial'
import { userColInOutGoldList } from '@/config/column/user'
import $api from '@/api/api'
import utils from '@/utils/util'
import activePage from '@/mixin/keepPage'

export default {
  name: 'Extract',
  components: {
    Btable,
    Bsearch,
    vueQr,
    iconPage
  },
  mixins: [activePage],
  data() {
    return {
      dialogTableVisible: false,
      inOutGoldConfigs: [], // 出入金配置
      inOutGoldListLoading: false,
      inOutGoldList: [],
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      rejLoading: false, // 驳回loading
      excelLoading: false, // 下载excelloading
      calLoading: false, // 合计loading
      isModify: false,
      list: [], // 委托列表
      coinList: [], // 币种列表
      toDay: '',
      ago: '',
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数

      formLabelWidth: '120px',
      handleStatus: '', // 当前执行的审核或驳回状态{preReview 初审 preReject初审驳回 nextReview复审 nextReject复审驳回 finalReview 终审 finalReject 终审驳回 viewDetail详情}
      handleData: {}, // 当前执行操作的数据
      dialogVisible: false, // 是否显示审核弹出框
      confirmText: '',
      reviewTitle: '',
      reviewForm: {
        txId: '',
        mark: ''
      },
      rules: {
        // txId: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      rejectVisible: false, // 是否显示驳回弹出框
      rejectForm: {
        mark: ''
      },
      rejectRules: {
        mark: [{ required: true, message: '必填', trigger: 'blur' }]
      },
      analysisQrCode: '', // 验证码信息
      qrcodeShow: false, // 是否显示验证码
      btnArr: [],
      statusText: {
        0: '待审核',
        1: '成功',
        2: '失败',
        3: '初步审核成功',
        4: '初步审核失败',
        5: '划转待确认',
        6: '充币确认中',
        13: '复审审核成功',
        14: '复审审核失败'
      }
    }
  },
  // mounted() {
  activated() {
    if (this.isInTags()) {
      return
    }

    this.list = [] // 委托列表
    this.coinList = [] // 币种列表
    this.toDay = ''
    this.ago = ''
    this.dataList = [] // 用于导出的数据
    this.configs = [] // 委托列表列配置
    this.searchCofig = [] // 搜索框配置
    this.search_params_obj = {} // 搜索框对象
    this.current_page = 1 // 当前页码
    this.pageSize = this.$pageSize // 当前每页显示页码数
    this.total = 0 // 总条数
    this.pages = 0 // 总页数

    const authObj = this.$util.getAuthority('Extract', extractCol, extractColNoBtn)
    this.configs = authObj.val
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.inOutGoldConfigs = userColInOutGoldList
    this.searchCofig = this.$util.clone(extractConfig)
    this.$store.dispatch('common/getCoinList').then(() => {
      this.coinList = this.$store.state.common.coinlist
      this.searchCofig[2]['list'] = this.$store.state.common.coinlist
      this.coinList = this.$store.state.common.coinlist
    })
    // 可能从资产管理》收入账号页面跳入传参
    const toAddress = this.$route.query.toAddress
    const coinName = this.$route.query.coinName
    const coinId = this.$route.query.coinId
    if (toAddress) {
      // 从列表页传参
      this.searchCofig[5].value = toAddress
      this.searchCofig[2].value = coinId
      this.search_params_obj = { toAddress: toAddress, coinName: coinName }
      this.getList()
    } else {
      this.getList()
    }
    this.getRechargeChainName()
  },
  methods: {
    // 获取 出入金数据表格
    async getInOutGoldListFunc(userId, _uid) {
      if (this.inOutGoldListLoading) return
      const params = userId ? { userId: userId } : { uid: _uid }
      this.inOutGoldListLoading = true
      const res = await $api.apiGetInOutGoldList(params)
      if (res) {
        const records = res.data.data
        if (records && records.length > 0) {
          this.inOutGoldList = records
        }
      } else {
        this.inOutGoldList = []
      }
      this.inOutGoldListLoading = false
    },
    async doHandle(data) {
      const { fn, row } = data
      this.handleStatus = fn
      this.handleData = row
      const reviews = ['preReview', 'nextReview', 'finalReview']
      const rejects = ['preReject', 'nextReject', 'finalReject']
      if (reviews.includes(fn)) {
        const reviewObj = {
          preReview: '提币初审',
          nextReview: '提币复审',
          finalReview: '提币终审'
        }
        const confirmObj = {
          preReview: '初审通过',
          nextReview: '复审通过',
          finalReview: '终审通过'
        }
        this.reviewTitle = reviewObj[fn]
        this.confirmText = confirmObj[fn]
        this.openReviewDialog()
      } else if (rejects.includes(fn)) {
        this.openRejectDialog()
      } else if (fn === 'detail') {
        this.reviewTitle = '提币详情'
        this.confirmText = '确定'
        this.openReviewDialog()
      } else if (fn === 'showqr') {
        // 查看二维码
        this.verify(row)
      } else if (fn === 'inOutGoldList') {
        this.dialogTableVisible = true
        const { userId, uid } = row
        this.getInOutGoldListFunc(userId, uid)
      }
    },
    // 打开详情弹窗(弹框里面部分内容显示还是隐藏由html部分v-if控制)
    openReviewDialog() {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.reviewForm = {
          txId: '',
          mark: ''
        }
        this.$refs['reviewForm'].resetFields()
      })
    },
    // 打开驳回弹窗
    openRejectDialog() {
      this.rejectVisible = true
      this.$nextTick(() => {
        this.rejectForm = {
          mark: ''
        }
        this.$refs['rejectForm'].resetFields()
      })
    },
    // 驳回弹窗 点击  驳回
    async confirmReject() {
      this.$refs['rejectForm'].validate(async valid => {
        if (valid) {
          const firstOrReviewObj = {
            preReject: 1,
            nextReject: 2,
            finalReject: 3
          }
          const params = {
            firstOrReview: firstOrReviewObj[this.handleStatus],
            auditStatus: 2,
            auditOpinion: this.rejectForm.mark,
            id: this.handleData.id,
            txid: this.handleData.txId
          }
          this.rejLoading = true
          const res = await $api.auditWithdraw(params)
          if (res) {
            const message = {
              preReject: '初审驳回成功',
              nextReject: '复审驳回成功',
              finalReject: '终审驳回成功'
            }
            this.$message({
              message: message[this.handleStatus],
              type: 'success'
            })
            this.rejectVisible = false
            this.getList()
          }
          this.rejLoading = false
        }
      })
    },
    // 详情弹出框 点击  确定
    async confirmReview() {
      // 详情
      if (this.handleStatus === 'detail') {
        this.dialogVisible = false
        return
      }
      // 当时当处于 审核状态
      this.$refs['reviewForm'].validate(async valid => {
        if (valid) {
          const firstOrReviewObj = {
            preReview: 1,
            nextReview: 2,
            finalReview: 3
          }
          const params = {
            firstOrReview: firstOrReviewObj[this.handleStatus],
            auditStatus: 1,
            auditOpinion: '审核通过',
            id: this.handleData.id
          }
          // if (this.handleStatus === 'nextReview') {
          //   params.txId = this.reviewForm.txId;
          // }
          this.btnLoading = true
          const res = await $api.auditWithdraw(params)
          if (res) {
            const confirmObj = {
              preReview: '初审成功',
              nextReview: '复审成功',
              finalReview: '终审成功'
            }
            this.$message({
              message: confirmObj[this.handleStatus],
              type: 'success'
            })
            this.dialogVisible = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
    },
    // 列表中弹窗生成二维码
    verify(data) {
      // if (data.payType == 2) {
      //   this.analysisQrCode = "http://devadmin.hongmo.io/test.html?analysisQrCode=" + data.toAddress;
      // } else {
      this.analysisQrCode = data.toAddress
      // }
      this.qrcodeShow = true
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
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1
      }
      this.requiredParams()
      // if (!this.search_params_obj.coinName) {
      //   this.$message({ type: 'error', message: '币种必须选择!', duration: 2000 });
      //   return;
      // }
      if (!this.search_params_obj.coinId) {
        this.$message({ type: 'error', message: '币种必须选择!', duration: 2000 })
        return
      }
      this.calLoading = true
      const params = { isOwn: 1 }
      this.requiredParams(params)
      params.appId = 0
      Object.assign(params, this.search_params_obj)
      const res = await $api.getWithdrawSum(params)
      if (res) {
        const getObj = res.data.data
        if (getObj) {
          const coin = this.searchCofig[2]['list'].filter(
            v => v.value == this.search_params_obj.coinId
          )[0].label
          this.$alert(
            `<p>币种：${coin}</p><p>提币数量总计：${getObj.amountSum}</p><p>手续费总计：${
              getObj.feeSum
            }</p><p>到账数量总计：${getObj.realAmountSum}</p>`,
            '统计结果',
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
        pageSize: this.pageSize,
        isOwn: 1,
        appId: 0
      }
      this.requiredParams(query_data)
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.getWithdrawList(query_data)
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
    async queryData(params) {
      this.excelLoading = true
      params.isOwn = 1
      params.appId = 0
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.getWithdrawList(params)
      this.excelLoading = false
      return res
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
      if (this.search_params_obj.coinName) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)) {
          let tmpName = ''
          tmpName = this.coinList.filter(v => v['value'] === this.search_params_obj.coinName)[0]
            .label
          this.search_params_obj.coinName = tmpName
        }
      }
    },
    async getRechargeChainName() {
      const res = await $api.apiGetRechargeChainName({})
      if (res) {
        const arr = res.data.data
        this.searchCofig[7]['list'] = arr.map(v => {
          return {
            label: v.chainName,
            value: v.chainName
          }
        })
      }
    }
  }
}
</script>
<style scope lang="scss">
.extract-container {
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
  .inner-footer {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
}
</style>
