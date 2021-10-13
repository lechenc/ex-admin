<template>
  <div class="agentsListsDetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>基本信息</H3>
        <div>
          <div>代理商UID：{{ current_row.uid }}</div>
          <div>上级代理商：{{ current_row.upperUid === 0 ? '--' : current_row.upperUid }}</div>
          <div>备注：{{ current_row.remark || '无' }}</div>
          <div>登录名：{{ current_row.username }}</div>
          <div>手机：{{ current_row.phone || '无' }}</div>
          <div>邮箱：{{ current_row.email || '无' }}</div>
          <div>手续费返佣比例：{{ current_row.commissionPercent }}</div>
          <div>团队长返佣比例：{{ current_row.packPercent }}</div>
          <div>加入保证金比例：{{ current_row.bondPercent }}</div>
          <div>设置保证金额度：{{ current_row.bondLimit }}</div>
          <div>
            手续费返佣结算时间：{{ delayUnitobj[current_row.feeDelayUnit] }} +
            {{ current_row.feeDelayDay }}
          </div>
          <div>
            团队长返佣结算时间：{{ delayUnitobj[current_row.delayUnit] }} +
            {{ current_row.delayDay }}
          </div>
          <div>创建高返佣机会总次数：{{ current_row.quotaCount }}</div>
          <div>创建高返佣机会剩余次数：{{ current_row.remainingQuotaCount }}</div>
          <div v-if="modeIsShow">代理总盈亏阀值：{{ current_row.profitMargin || '无' }}</div>
          <div v-if="modeIsShow">用户盈亏阀值：{{ current_row.userProfitMargin || '无' }}</div>
          <div v-if="modeIsShow">监控手机/邮箱：{{ current_row.phoneEmailFirst || '无' }}</div>
          <div v-if="modeIsShow">监控手机/邮箱：{{ current_row.phoneEmailSecond || '无' }}</div>
          <div v-if="modeIsShow">监控手机/邮箱：{{ current_row.phoneEmailThird || '无' }}</div>
        </div>
      </div>
    </el-card>
    <el-card>
      <H3>资产信息</H3>
      <Btable
        :listLoading="assetsListLoading"
        :data="list"
        :configs="listConfigs"
        @headerBtnFn="headerBtnFn"
        @do-handle="doHandle"
      />
    </el-card>
    <el-card>
      <H3
        >团队信息<span class="team-number-txt">团队总人数：{{ total }}</span></H3
      >
      <Btable :listLoading="teamLoading" :data="teamList" :configs="otcConfigs" />
      <div class="container-footer">
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
    </el-card>

    <!-- 查看明细 -->
    <el-dialog title="查看明细" width="650px" :visible.sync="headerBtnFnDialogVisible">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
      <el-form v-loading="headerBtnListLoading" style="margin-top: 25px" :model="headerBtnFnform">
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item
              class="center-item"
              label-width="300px"
              label="下面整条链贡献给平台的手续费合计："
            >
              {{ headerBtnFnform.platformCommission }}
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search'
import $api from '@/api/api'
import Btable from '@/components/table/b-table'
import { teamAssetsCol, teamInfoCol, agentsListsDetailConfig } from '@/config/column/contractAgent'

export default {
  components: {
    Btable,
    Bsearch
  },
  name: 'AgentsListsDetail',
  data() {
    return {
      delayUnitobj: {
        1: '周',
        2: '月',
        3: '日'
      },
      modeIsShow: false,
      listLoading: false, // 表格loading
      teamLoading: false, // 代理团队loading
      assetsListLoading: false, // 资产loading
      listConfigs: [], // 资产信息列表
      otcConfigs: [], // 代理团队信息配置
      isModify: false, // 是否可以修改
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0,
      pages: 0,
      current_row: {}, // 查看详情的条目
      list: [], // 资产信息列表
      teamList: [], // 代理团队信息列表

      nowUserId: 0, // 详情页面的用户id
      assetsList: [], // 用户资产数组
      assets_curr_page: 0, //  用户资产页码
      assets_total: 0, //用户资产总数
      inviteList: [], // 邀请明细数组
      invite_curr_page: 0, //  邀请明细页码
      invite_total: 0, //邀请明细总数

      userId: '',
      headerBtnFnDialogVisible: false,
      searchCofig: [],
      headerBtnFnform: {},
      toDay: '',
      ago: '',
      search_params_obj: {},
      headerBtnListLoading: false
    }
  },
  filters: {
    agentMode(val) {
      if (val == 1) {
        return '手续费模式'
      } else {
        return ''
      }
    }
  },
  activated() {
    this.search_params_obj = {}
    this.searchCofig = this.$util.clone(agentsListsDetailConfig)
    this.listConfigs = teamAssetsCol
    this.otcConfigs = teamInfoCol
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    
    this.userId = this.$route.query.userId
    this.requiredParams({})
    this.getDetail()
    this.getAssetsListFunc()
    this.getTeamListFunc()
  },
  methods: {
    doSearch(data) {
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        return this.$message.error('请选择时间')
      }
      this.headerBtnFnSearch()
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
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    },
    //
    async headerBtnFnSearch() {
      if (this.headerBtnListLoading) return
      this.headerBtnListLoading = true
      const query_data = {
        userId: this.userId,
        uid: this.current_row.uid
      }
      this.requiredParams(this.search_params_obj)
      Object.assign(query_data, this.search_params_obj)

      const res = await $api.apiGetPlatformProfitLossInfo(query_data)
      if (res) {
        this.headerBtnFnform = res.data.data
      }
      this.headerBtnListLoading = false
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
      this.headerBtnFnSearch()
    },
    async headerBtnFn(data) {
      const { fn } = data
      if (fn == 'platformCommissionInfo') {
        this.$nextTick(() => {
          this.headerBtnFnform = {}
          this.headerBtnFnDialogVisible = true
        })
      }
    },
    reloadPage(val) {
      this[val] = false
      this.getAssetsListFunc()
    },
    // 资产信息操作按钮
    async doHandle(data) {
      const { fn, row } = data
      if (fn == 'edit') {
        this.isWithdrawDialog = true
      }
    },

    goInvitePage(val) {
      this.invite_curr_page = val
      this.getInviteList()
    },
    goAssetsPage(val) {
      this.assets_curr_page = val
      this.getAssetsList()
    },

    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1
      this.pageSize = val
      this.getTeamListFunc()
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getTeamListFunc()
    },
    async getDetail() {
      if (this.listLoading) return
      this.listLoading = true
      const res = await $api.getAgentInfo({ userId: this.userId })
      if (res) {
        this.current_row = res.data.data
        if (res.data.data.userGrade == 2) {
          this.modeIsShow = true
        } else {
          this.modeIsShow = false
        }
      }
      this.listLoading = false
    },
    // 获取 资产信息表格
    async getAssetsListFunc() {
      if (this.assetsListLoading) return
      this.assetsListLoading = true
      const res = await $api.getAgentAssetsInfo({ userId: this.userId })
      if (res) {
        const records = res.data.data && res.data.data.coinAccountList
        if (records && records.length > 0) {
          this.list = records
        }
      }
      this.assetsListLoading = false
    },
    // 获取 团队信息表格
    async getTeamListFunc() {
      if (this.teamLoading) return
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        userId: this.userId
      }
      this.teamLoading = true
      const res = await $api.getAgentTeamInfo(params)
      if (res) {
        const { records, pages, current, total } = res.data.data
        this.total = total
        this.pages = pages
        this.current_page = current
        if (records && records.length > 0) {
          this.teamList = records
        } else {
          this.teamList = []
        }
      }
      this.teamLoading = false
    }
  },
  mounted() {
    this.search_params_obj = {}
    this.searchCofig = this.$util.clone(agentsListsDetailConfig)
    this.listConfigs = teamAssetsCol
    this.otcConfigs = teamInfoCol
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.userId = this.$route.query.userId
    this.requiredParams({})
    this.getDetail()
    this.getAssetsListFunc()
    this.getTeamListFunc()
  }
}
</script>

<style lang="scss">
.agentsListsDetail-container {
  padding: 4px 10px 10px 10px;

  .container-top {
    margin: 10px 0;
  }

  .container-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;

    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }

  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }

  .colline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 8px;

      .label {
        width: 60px;
      }
    }
  }

  .box-card {
    margin-bottom: 20px;

    .box-card-con {
      > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        > div {
          min-width: 300px;
          margin-right: 40px;
          font-size: 18px;
          line-height: 40px;
        }
      }
    }
  }
}

.el-table td,
.el-table th {
  text-align: center;
}

.el-switch.is-disabled {
  opacity: 1;
}

.el-switch.is-disabled .el-switch__core,
.el-switch.is-disabled .el-switch__label {
  cursor: pointer !important;
}

.team-number-txt {
  margin-left: 20px;
  font-size: 14px;
  color: #333333;
}
</style>
