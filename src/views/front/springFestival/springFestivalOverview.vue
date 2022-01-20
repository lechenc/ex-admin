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
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
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
          <el-col :span="22">
            <el-form-item label="手动增加数量：" :label-width="formLabelWidth" prop="uidList1">
              <el-input
                @input="checkVal('uidList1')"
                v-model="cForm.uidList1"
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
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { springFestivalOverviewCol } from '@/config/column/front'
import $api from '@/api/api'

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
      cForm: {
        uidList: '',
        boxId: '',
        num: '',
        boxId1: ''
      },
      rules: {
        uidList: [{ required: true, message: '必填', trigger: 'blur' }],
        boxId: [{ required: true, message: '必填', trigger: 'blur' }],
        num: [{ required: true, message: '必填', trigger: 'blur' }]
      },
      formLabelWidth: '130px',

      btnLoading: false,
      dataList: []
    }
  },
  methods: {
    totalFn() {},
    // 对输入值的范围进行限制
    checkVal(val) {
      if (val === 'num') {
        if (this.cForm[val] < 1) {
          this.cForm[val] = 1
        }
        if (this.cForm[val] > 100) {
          this.cForm[val] = 100
        }
      }

      if (val === 'uidList') {
        this.cForm[val] = (this.cForm[val] + '').replace(/[^\d,]/g, '')
      }
    },
    confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          if (this.btnLoading) return
          this.btnLoading = true
          let { uidList, ...repo } = this.cForm
          let params = {
            uidList: uidList.split(','),
            ...repo
          }
          const res = await $api.apiCreatespringFestivalOverview(params)

          if (res) {
            this.$message({ message: res.data.message, type: 'success' })
            this.dialogFormVisible = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
    },
    editFn() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields()

        this.cForm = {
          uidList: '',
          boxId: '',
          num: '',
          boxId1: ''
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
        let obj = res.data.data
        let list = []
        for (const key in obj) {
          for (let index = 0; index < obj[key].length; index++) {
            list.push(obj[key][index])
          }
        }
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
