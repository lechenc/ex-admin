<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-12-01 15:11:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="debtStatistics-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" ref="Bsearch" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <!-- 统计 -->

    <div class="container-total">
      <el-row :span="24" :gutter="10">
        <el-col :span="6" v-for="(item, idx) in innerTopArr" :key="idx" class="inner-top-item">
          <el-card shadow="always">
            <div slot="header" class="item-title">
              <span>{{ item.title }}</span>
            </div>

            <div class="item-content">
              <p class="item-number">
                {{ curRow[item.prop] || '103246.112411' }}
              </p>
              <p class="item-beginning" v-show="curRow[item.beginningProp]">
                {{ item.beginningTitle }} {{ curRow[item.beginningProp] || 0 }}
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="container-detail">
      <el-radio-group style="margin-bottom: 17px" @change="tabPositionChange" v-model="tabPosition">
        <el-radio-button :label="-1">账户</el-radio-button>
        <el-radio-button :label="0">币币</el-radio-button>
        <el-radio-button :label="1">法币</el-radio-button>
        <el-radio-button :label="2">合约</el-radio-button>
      </el-radio-group>

      <el-row :span="24" :gutter="10">
        <el-col v-show="tabPosition == 'top'" class="detail-item" :span="8">
          <el-card shadow="always">
            <div slot="header" class="item-title">
              <span>收益 (收益账户)</span>
              <span>期初金额</span>
              <span>期末金额</span>
            </div>

            <div class="item-content">
              <p v-for="(item, idx) in 6" :key="idx" class="content-item">
                <span>收益账户</span>
                <span>103246.1534</span>
                <span>103246.1534</span>
              </p>
            </div>
          </el-card>
        </el-col>

        <el-col class="detail-item" :span="8">
          <el-card shadow="always">
            <div slot="header" class="item-title">
              <span>负债 (收益账户)</span>
              <span>期初金额</span>
              <span>期末金额</span>
            </div>

            <div class="item-content">
              <p v-for="(item, idx) in 6" :key="idx" class="content-item">
                <span>收益账户</span>
                <span>103246.1534</span>
                <span>103246.1534</span>
              </p>
            </div>
          </el-card>
        </el-col>

        <el-col class="detail-item" :span="8">
          <el-card shadow="always">
            <div slot="header" class="item-title">
              <span>异常数据 (收益账户)</span>
              <span>期初金额</span>
              <span>期末金额</span>
            </div>

            <div class="item-content">
              <p v-for="(item, idx) in 6" :key="idx" class="content-item">
                <span>收益账户</span>
                <span>103246.1534</span>
                <span>103246.1534</span>
              </p>
            </div>
          </el-card>
        </el-col>

        <el-col v-show="tabPosition == 'top'" class="detail-item" :span="8">
          <el-card shadow="always">
            <div slot="header" class="item-title">
              <span>资产 (收益账户)</span>
              <span>期初金额</span>
              <span>期末金额</span>
            </div>

            <div class="item-content">
              <p v-for="(item, idx) in 6" :key="idx" class="content-item">
                <span>收益账户</span>
                <span>103246.1534</span>
                <span>103246.1534</span>
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- <div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div> -->
    <!-- <div class="container-footer">
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
    </div> -->
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import {
  debtStatisticsCol,
  debtStatisticsColNoBtn,
  debtStatisticsConfig
} from '@/config/column/financial'
import $api from '@/api/api'

export default {
  name: 'DebtStatistics',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
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
      btnArr: [],
      curRow: {},
      innerTopArr: [
        // 统计数组
        {
          title: '交易所资产 (钱包)',
          prop: 'keys',
          beginningTitle: '期初资产：',
          beginningProp: 'keys2'
        },
        {
          title: '收益 (收益账号)',
          prop: 'keys',
          beginningTitle: '期初资产：',
          beginningProp: 'keys2'
        },
        {
          title: '负债 (用户资产)',
          prop: 'keys',
          beginningTitle: '期初资产：',
          beginningProp: 'keys2'
        },
        {
          title: '差额 ',
          prop: 'keys',
          beginningTitle: '期初资产：',
          beginningProp: 'keys2'
        },
        {
          title: '钱包入金',
          prop: 'keys'
        },
        {
          title: '钱包出金',
          prop: 'keys'
        },
        {
          title: '净入金',
          prop: 'keys'
        }
      ],
      curRow: {}, // 基础数据成员
      tabPosition: -1,
      infoLoading: false
    }
  },

  methods: {
    async tabPositionChange(val) {
      this.$refs.Bsearch.doSearch()
    },
    async doHandle(data) {
      const { fn, row } = data
      // 设置上架开关
      if (fn === 'message') {
        this.$confirm('是否通知钱包重新归集?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async () => {
            const res = await $api.apiRechargeMessage({
              txid: row.txId
            })
            if (res) {
              this.$message({
                type: 'success',
                message: '通知成功，请等待5-10分钟 归集程序执行，不要连续点击'
              })
              this.getList()
            }
          })
          .catch(() => {})
      }
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      // this.getList()
      this.getInfo()
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
        // pageNum: this.current_page,
        // pageSize: this.pageSize,
        type: this.tabPosition
      }
      this.requiredParams(query_data)
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.apiGetDebtStatisticsInfo(query_data)
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

    // getlist
    async getInfo() {
      if (this.infoLoading) return
      const query_data = {
        type: this.tabPosition
      }
      this.requiredParams(query_data)
      Object.assign(query_data, this.search_params_obj)
      this.infoLoading = true
      const res = await $api.apiGetDebtStatisticsInfo(query_data)
      if (res) {
        const { records, total, current, pages } = res.data.data
        this.total = total
        this.pages = pages
        this.current_page = current
        this.list = records
        this.dataList = records
      }
      this.infoLoading = false
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
  },
  mounted() {
    const authObj = this.$util.getAuthority(
      'DebtStatistics',
      debtStatisticsCol,
      debtStatisticsColNoBtn
    )
    this.configs = authObj.val
    this.btnArr = authObj.btnArr
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')

    this.searchCofig = this.$util.clone(debtStatisticsConfig)
    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[1]['list'] = this.$store.state.common.coinlist
    })

    // this.getList()
    this.getInfo()
  }
}
</script>
<style scope lang="scss">
.debtStatistics-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-total {
    .inner-top-item {
      min-width: 250px;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-card {
        .el-card__header {
          padding-top: 14px;
          padding-bottom: 14px;
        }
        .item-title {
          font-size: 18px;
        }
        .item-content {
          text-align: center;
          .item-number {
            margin-top: 15px;
            margin-bottom: 15px;
            color: #409eff;
            font-size: 30px;
          }
          .item-beginning {
            font-size: 16px;
          }
        }
      }
    }
  }

  .container-detail {
    .el-radio-button__inner {
      padding: 16px 80px;
    }
    .detail-item {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      .item-title {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
      }
      .item-content {
        .content-item {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          margin-bottom: 30px;
        }
      }
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
}
</style>
