<template>
  <div class="springFestivalMysteryBox-container">
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

    <div class="container-btn" v-if="btnArr.length">
      <el-button v-if="~btnArr.indexOf('add')" type="primary" size="medium" @click="addFn"
        >手动发放盲盒</el-button
      >
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
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
    </div>

    <!-- 添加 编辑 -->

    <el-dialog title="手动发盲盒" width="650px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row  :span="24">
          <el-col  :span="16">
            <el-form-item  label="盲盒种类" :label-width="formLabelWidth" prop="boxId">
              <el-select  v-model="cForm.boxId" placeholder="请选择">
                <el-option
                  v-for="(item, idx) in boxTypeList"
                  :key="idx"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="发放数量" :label-width="formLabelWidth" prop="num">
              <el-input
                @input="checkVal('num')"
                type="number"
                v-model.trim="cForm.num"
                placeholder="请输入数量,1-100"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="发放UID" :label-width="formLabelWidth" prop="uidList">
              <el-input
                @input="checkVal('uidList')"
                type="textarea"
                rows="3"
                v-model="cForm.uidList"
                placeholder="请输入UID,使用英文逗号隔开"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="发放备注" :label-width="formLabelWidth" prop="remark">
              <el-input
                @input="checkVal('remark')"
                v-model="cForm.remark"
                type="textarea"
                rows="3"
                autocomplete="off"
                placeholder="请输入备注,最多可输入100个字符"
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
import { springFestivalMysteryBoxCol, springFestivalMysteryBoxConfig } from '@/config/column/front'
import $api from '@/api/api'
import utils from '@/utils/util'
export default {
  name: 'SpringFestivalMysteryBox',
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
        remark: ''
      },
      rules: {
        uidList: [{ required: true, message: '必填', trigger: 'blur' }],
        boxId: [{ required: true, message: '必填', trigger: 'blur' }],
        num: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      formLabelWidth: '130px',
      boxTypeList: [
        {
          label: '邀请充值盲盒',
          value: 1
        },
        {
          label: '邀请交易盲盒',
          value: 2
        },
        {
          label: '充值盲盒',
          value: 3
        },
        {
          label: '幸运盲盒',
          value: 5
        },
        {
          label: '交易盲盒',
          value: 4
        },
        {
          label: '惊喜盲盒',
          value: 6
        }
      ],
      btnLoading: false,
      dataList: []
    }
  },
  methods: {
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
          const res = await $api.apiCreateSpringFestivalMysteryBox(params)

          if (res) {
            this.$message({ message: res.data.message, type: 'success' })
            this.dialogFormVisible = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
    },
    addFn() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields()

        this.cForm = {
          uidList: '',
          boxId: '',
          num: '',
          remark: ''
        }
      })
    },
    exportExcel(val) {
      this.search_params_obj = val.query
      const num = val.num
      utils.exportData.apply(this, [num])
    },
    async queryData(params) {
      this.excelLoading = true
      this.requiredParams(params)
      params.appId = 0
      Object.assign(params, this.search_params_obj)
      const res = await $api.apiGetSpringFestivalMysteryBoxList(params)
      this.excelLoading = false
      return res
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
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      this.requiredParams(query_data)
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.apiGetSpringFestivalMysteryBoxList(query_data)
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
    requiredParams(params) {
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
      //   let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
      //   params.arrivalEndTime = nowV.replace(/\//gi, '-');
      //   params.arrivalStartTime = befV.replace(/\//gi, '-');
      //   // 组件时间初始必须format格式
      //   this.searchCofig[0].value = [befV, nowV];
      // }
      if (this.search_params_obj.createTimeS) {
        this.search_params_obj.createTimeE = this.formatTime(this.search_params_obj.createTimeE)
        this.search_params_obj.createTimeS = this.formatTime(this.search_params_obj.createTimeS)
      }

      if (this.search_params_obj.enableTimeS) {
        this.search_params_obj.enableTimeE = this.formatTime(this.search_params_obj.enableTimeE)
        this.search_params_obj.enableTimeS = this.formatTime(this.search_params_obj.enableTimeS)
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
    },
    // 获取等U价值列表
    async getEquivalentUsdts() {
      const res = await $api.apiGetSpringFestivalMysteryBoxEquivalentUsdts({})
      if (res) {
        let list = res.data.data.map((v) => {
          return {
            label: v + 'U',
            value: v
          }
        })
        this.searchCofig[3]['list'] = list
      }
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority(
      'SpringFestivalMysteryBox',
      springFestivalMysteryBoxCol,
      []
    )
    this.btnArr = authObj.btnArr || []

    this.configs = springFestivalMysteryBoxCol
    this.searchCofig = this.$util.clone(springFestivalMysteryBoxConfig)
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getList()
    this.getEquivalentUsdts()
  }
}
</script>
<style scope lang="scss">
.springFestivalMysteryBox-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 5px;
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
