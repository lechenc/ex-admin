<template>
  <div class="springFestivalOverview-container">
    <div class="container-btn">
      <div class="btn-left">
        <el-button v-if="~btnArr.indexOf('edit')" type="primary" size="medium" @click="editFn"
          >修改前端202200数据</el-button
        >
        <el-button type="primary" size="medium" @click="totalFn">合计统计</el-button>
      </div>
      <div class="btn-right">
        <el-button type="primary" @click="getList">刷新</el-button>
      </div>
    </div>
    <!-- <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div> -->
    <el-card>
      <el-row class="box-card-row" :span="24">
        <el-col :span="3">盲盒价值/盲盒名称</el-col>
        <el-col :span="4" v-for="(item, index) in boxTypeList" :key="index">
          <span>库存量/已发量/已开量</span>
          <br />
          <span>{{ item.label }}</span>
        </el-col>
      </el-row>

      <el-row class="box-card-row" v-for="(value, key) in list" :key="key" :span="24">
        <el-col v-if="!value.length" :span="3"> 0 </el-col>
        <el-col v-else :span="3">
          <!-- {{ value[0]['usdtnum'] + value[0]['symbol'] }} -->
          {{ value[0]['usdtnum'] + 'U' }}
        </el-col>

        <el-col v-for="(item, index) in boxTypeList" :key="index" :span="4">
          <span v-for="(valueitem, valueindex) in value" :key="valueindex">
            <template v-if="valueitem.boxType == item.value">
              <div>
                <span>{{ valueitem.inventory + ' ~' }}</span>
                <span>{{ valueitem.issueNum + ' ~' }}</span>
                <span>{{ valueitem.openNum }}</span>
              </div>
              <div>
                <span>{{ valueitem.inventorySymbolNum + ' ~' }}</span>
                <span>{{ valueitem.issueSymbolNum + ' ~' }}</span>
                <span>{{ valueitem.openSymbolNum }}</span>
              </div>
            </template>
          </span>
        </el-col>
      </el-row>
    </el-card>

    <!-- <div class="container-footer">
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
    </div> -->

    <!-- 修改前端202200数据 -->

    <el-dialog title="修改前端202200数据" width="650px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="11">
            <el-form-item label="总量：" :label-width="formLabelWidth">
              {{ totalNum }}
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="自动已发：" :label-width="formLabelWidth">
              {{ getBoxNumObj.price }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="11">
            <el-form-item label="剩余：" :label-width="formLabelWidth">
              {{ getBoxNumObj.balance }}
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="手动累计增加数量：" label-width="140px">
              {{ getBoxNumObj.handPrice }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="手动增加数量：" :label-width="formLabelWidth" prop="totalNum">
              <el-input
                @input="checkVal('totalNum')"
                v-model="cForm.totalNum"
                type="number"
                autocomplete="off"
                placeholder="请输入数量"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog
      style="springFestivalOverview-dialog"
      title="合计统计"
      width="800px"
      :visible.sync="totalDialogFormVisible"
    >
      <div v-for="(value, key) in totalObj" :key="key" style="margin-bottom: 20px">
        <el-row style="font-weight: 700" :span="24">
          {{ totalUserTypeObj[value.type] + ':' }} {{ value.total }}
          {{ totalUserTypeObj[value.type].indexOf('数量') > -1 ? '个' : 'U' }}
        </el-row>
        <el-row
          v-if="totalUserTypeObj[value.type].indexOf('数量') > -1"
          style="color: green; font-weight: 700"
          :span="24"
        >
          <el-col v-for="(item, index) in value.statistic" :key="index" :span="8">
            <span v-if="item.type!=5">
              {{ totalBoxTypeObj[item.type] + ' :' + item.num }}
              {{ totalUserTypeObj[value.type].indexOf('数量') > -1 ? '个' : '枚' }}
            </span>
          </el-col>
        </el-row>

        <el-row v-else style="color: green; font-weight: 700" :span="24">
          <el-col v-for="(item, index) in value.statistic" :key="index" :span="8">
            <span v-if="item.type!=5">
              {{ totalCoinTypeObj[item.type] + ' :' + item.num }}
              {{ totalUserTypeObj[value.type].indexOf('数量') > -1 ? '个' : '枚' }}
            </span>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { springFestivalOverviewCol } from '@/config/column/front'
import $api from '@/api/api'
import Precision from '@/utils/number-precision'
export default {
  name: 'springFestivalOverview',
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
      dialogFormVisible: false,
      cForm: {},
      rules: {
        totalNum: [{ required: true, message: '必填', trigger: 'blur' }]
      },
      formLabelWidth: '130px',

      btnLoading: false,
      dataList: [],
      totalNum: 202200, // 总量,写死202200
      getBoxNumObj: {},
      totalObj: {},
      // 1 用户总计获得盲盒数量  2 用户总计获得盲盒价值 3 用户总计开启盲盒数量 4 用户总计开启盲盒价值 5 库存总计盲盒数量 6 库存总计盲盒价值
      totalUserTypeObj: {
        1: '用户总计获得盲盒数量',
        2: '用户总计获得盲盒价值',
        3: '用户总计开启盲盒数量',
        4: '用户总计开启盲盒价值',
        5: '库存总计盲盒数量',
        6: '库存总计盲盒价值'
      },
      // 0:邀请新充值盲盒(AXS)1：邀请交易盲盒(MANA)2：充值盲盒( USDT)，3：幸运盲盒( EPIK)4：交易盲盒(SAND)
      totalBoxTypeObj: {
        0: '邀请新充值盲盒',
        1: '邀请交易盲盒',
        2: '充值盲盒',
        3: '幸运盲盒',
        4: '交易盲盒',
        5: '惊喜盲盒'
      },
      totalCoinTypeObj: {
        0: 'AXS',
        1: 'MANA',
        2: 'USDT',
        3: 'SAND',
        4: 'EPIK',
        5: '爆仓保护符'
      },
      totalDialogFormVisible: false,
      boxTypeList: [
        {
          label: '邀新充值盲盒数量个（AXS枚）',
          value: 0,
          index: 0
        },
        {
          label: '邀新交易盲盒（MANA枚）',
          value: 1,
          index: 1
        },
        {
          label: '充值盲盒（USDT枚）',
          value: 2,
          index: 2
        },
        {
          label: '交易盲盒（EPIK枚）',
          value: 4,
          index: 3
        },
        {
          label: '幸运盲盒(SAND枚)',
          value: 3,
          index: 4
        }
      ]
    }
  },
  methods: {
    async getSpringFestivalOverviewTotal() {
      const res = await $api.apiGetSpringFestivalOverviewTotal({})
      if (res) {
        this.totalObj = res.data.data
      }
    },
    totalFn() {
      this.totalDialogFormVisible = true
      this.getSpringFestivalOverviewTotal()
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (this.cForm[val] < 0) {
        this.cForm[val] = 0
      }
    },
    confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          let { totalNum } = this.cForm
          if (parseFloat(totalNum) > parseFloat(this.getBoxNumObj.balance)) {
            return this.$message.error('剩余数量不足')
          }
          if (this.btnLoading) return
          this.btnLoading = true

          let params = {
            totalNum
          }
          const res = await $api.apieditSpringFestivalOverview(params)

          if (res) {
            this.$message({ message: res.data.message, type: 'success' })
            this.dialogFormVisible = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
    },

    async getSpringFestivalGetBoxNum() {
      const res = await $api.apiGetSpringFestivalGetBoxNum({})
      if (res) {
        const { handPrice, price } = res.data.data
        this.getBoxNumObj = {
          handPrice,
          price,
          balance: Precision.minus(this.totalNum, Precision.plus(handPrice, price))
        }
      }
    },
    editFn() {
      this.dialogFormVisible = true
      this.getSpringFestivalGetBoxNum()
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields()

        this.cForm = {
          totalNum: ''
        }
      })
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
        // pageSize: this.pageSize
      }
      // this.requiredParams(query_data)
      // Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.apiGetSpringFestivalOverviewList(query_data)
      if (res) {
        let list = res.data.data
        // let list = []
        // for (const key in obj) {
        //   for (let index = 0; index < obj[key].length; index++) {
        //     list.push(obj[key][index])
        //   }
        // }
        console.log('list', list)
        this.list = list
      }
      this.listLoading = false
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        params.arrivalEndTime = nowV.replace(/\//gi, '-')
        params.arrivalStartTime = befV.replace(/\//gi, '-')
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV]
      }
      if (this.search_params_obj.createTimeS) {
        this.search_params_obj.createTimeE = this.formatTime(this.search_params_obj.createTimeE)
        this.search_params_obj.createTimeS = this.formatTime(this.search_params_obj.createTimeS)
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
    let authObj = this.$util.getAuthority('SpringFestivalOverview', springFestivalOverviewCol, [])
    this.btnArr = authObj.btnArr || []

    this.configs = springFestivalOverviewCol
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getList()
  }
}
</script>
<style scope lang="scss">
.springFestivalOverview-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .box-card-row {
    min-height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px black solid;
    margin-bottom: 10px;
  }
  .el-dialog {
    color: rgb(202, 249, 99);
  }
  .container-btn {
    margin: 20px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn-right {
      margin-right: 10px;
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
