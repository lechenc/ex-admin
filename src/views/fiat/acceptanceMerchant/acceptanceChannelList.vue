<template>
  <div class="acceptanceChannelList-container">
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
      <div class="container-btn">
        <el-button
          v-if="btnArr.includes('add')"
          type="primary"
          size="medium"
          @click="createVisible = true"
          >创建渠道</el-button
        >
      </div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" />
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

    <!-- 创建渠道 -->
    <el-dialog
      :close-on-click-modal="false"
      title="创建渠道"
      :visible.sync="createVisible"
      width="550px"
    >
      <div>
        <el-form ref="ruleForm" :model="ruleForm" :rules="formRules" label-width="140px">
          <el-form-item label="渠道名称" prop="channelName">
            <el-input
              v-model="ruleForm.channelName"
              autocomplete="off"
              placeholder="请输入渠道名称"
            />
          </el-form-item>

          <el-form-item label="承兑商UID" prop="advertiserUid">
            <el-input
              v-model="ruleForm.advertiserUid"
              autocomplete="off"
              placeholder="请输入一级承兑商UID"
              @input="checkVal('advertiserUid')"
            />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createVisible = false">取 消</el-button>
        <el-button type="primary" @click="createAgent">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import CountdownBtn from '@/components/countdownBtn.vue'
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import { acceptanceChannelListCol, acceptanceChannelListConfig } from '@/config/column/fiat'
import $api from '@/api/api'
import utils from '@/utils/util'

export default {
  name: 'AcceptanceChannelList',
  components: {
    Btable,
    Bsearch,
    iconPage,
    CountdownBtn
  },
  data() {
    // 渠道名称正则验证
    const channelNameReg = /^[a-zA-Z0-9\u4e00-\u9fa5]{3,12}$/
    const validateChannel = (rule, value, callback) => {
      if (!channelNameReg.test(value)) {
        return callback(new Error(rule.message))
      }
      callback()
    }

    const noEmpty = (rule, value, callback) => {
      if (value.trim() === '') {
        return callback(new Error(rule.message))
      }
      callback()
    }
    return {
      listLoading: false,
      btnLoading: false,
      calLoading: false,
      disabled: false,
      createVisible: false,

      activeName: 'first',
      excelLoading: false,
      list: [],
      dataList: [],
      configs: [],
      searchCofig: [],
      search_params_obj: {},
      current_page: 1,
      pageSize: 10,
      total: 0,
      pages: 0,
      toDay: '',
      ago: '',
      formLabelWidth: '110px',
      assetsList: [],
      isModify: false,
      nowUserId: 0,
      title: '',
      labelWidth: '100px',
      dialogVisible: false,
      ruleForm: {},
      formRules: {
        channelName: [
          {
            required: true,
            message: '请输入渠道名称',
            trigger: 'blur'
          },
          {
            required: true,
            validator: noEmpty,
            message: '请输入',
            trigger: 'blur'
          },
          {
            validator: validateChannel,
            message: '请输入字母,数字和汉字组合共3-12位',
            trigger: 'blur'
          }
        ],
        advertiserUid: [
          {
            required: true,
            message: '请输入承兑商UID',
            trigger: 'blur'
          }
        ]
      },
      form: {
        channelName: '',
        advertiserUid: ''
      },
      rules: {
        channelName: [{ required: true, message: '必填' }],
        advertiserUid: [{ required: true, message: '必填' }]
      },
      btnArr: []
    }
  },
  watch: {
    createVisible: function(newVal, oldVal) {
      if (newVal) {
        this.ruleForm = {}
      }
    }
  },

  mounted() {
    const authObj = this.$util.getAuthority('AcceptanceChannelList', acceptanceChannelListCol, [])
    this.btnArr = authObj.btnArr
    this.configs = authObj.val
    this.searchCofig = this.$util.clone(acceptanceChannelListConfig)
    this.getList()
  },
  methods: {
    // 控制输入的范围
    checkVal(val) {
      this.ruleForm[val] = (this.ruleForm[val] + '').replace(/[^\d]/g, '')
    },
    onCopy() {
      this.$message.success('复制成功')
    },

    countdownBtn(value) {
      this.disabled = value
    },

    // 创建渠道确认
    createAgent() {
      this.$refs['ruleForm'].validate(async valid => {
        if (valid) {
          try {
            let { channelName, advertiserUid } = this.ruleForm
            let params = { channelName, advertiserUid }
            const res = await $api.createAcceptanceChannel(params)

            if (res) {
              this.$message.success('创建成功')
              this.createVisible = false
              this.getList()
            } else {
              this.$message.error(res.data.message)
            }
          } catch (error) {
            console.log(error)
          }
        }
      })
    },

    onError() {
      this.$message.success('复制失败')
    },

    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      this.getList()
    },

    doReset() {
      this.search_params_obj = {}
      this.searchCofig.forEach(v => {
        v['value'] = ''
      })
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

    // getlist渠道列表查询
    async getList() {
      if (this.listLoading) return
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      this.requiredParams(query_data)
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.getAcceptanceChannelList(query_data)

      if (res) {
        const { records, total, current, pages } = res.data.data
        this.total = total
        this.pages = pages
        this.current_page = current
        records.forEach(v => {
          v['isCreateAgent'] = v['isCreateAgent'] ? 1 : 0
        })
        this.list = records
        this.dataList = records
      }
      this.listLoading = false
    },

    async queryData(params) {
      this.excelLoading = true
      this.requiredParams(params)
      Object.assign(params, this.search_params_obj)
      const res = await $api.getAcceptanceChannelList(params)
      this.excelLoading = false
      if (res) {
        return res
      }
    },

    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : (val + '').replace(/\//gi, '-')
    },

    requiredParams(params) {
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
    }
  },

  mounted() {
    let authObj = this.$util.getAuthority('AcceptanceChannelList', acceptanceChannelListCol, [])
    this.btnArr = authObj.btnArr || []
    this.configs = authObj.val
    this.searchCofig = this.$util.clone(acceptanceChannelListConfig)
    this.getList()
  }
}
</script>
<style scope lang="scss">
.acceptanceChannelList-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .derived-box {
    margin-bottom: 11px;
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
  .agent-table {
    .cell {
      text-align: center;
    }
  }
  .el-dialog__body {
    text-align: center;
  }
}
</style>
