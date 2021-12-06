<template>
  <div class="ipAddress-container">
    <div class="search-head">
      <el-button type="primary" size="small" @click="refreshBtn">刷新</el-button>
    </div>
    <div class="container-btn" v-if="btnArr.length">
      <div class="btn-left">
        <!-- <el-switch
          v-if="~btnArr.indexOf('whiteList')"
          v-model="boolen"
          active-color="#13ce66"
          inactive-color="#ff4949"
          inactive-text="白名单过滤"
          style="margin-right: 20px"
        >
        </el-switch>
        <el-switch
          v-if="~btnArr.indexOf('blacklist')"
          v-model="boolen"
          active-color="#13ce66"
          inactive-color="#ff4949"
          inactive-text="黑名单过滤"
        >
        </el-switch> -->

        <template v-for="(item, index) in listBtnArr">
          <el-switch
            @change="listBtnChange(item.id, listBtnObj[item.feature]['type'], item.enable)"
            :key="index"
            v-if="~btnArr.indexOf(listBtnObj[item.feature]['btnName'])"
            v-model="item.enable"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :inactive-text="listBtnObj[item.feature]['label']"
          >
          </el-switch>
        </template>
      </div>
      <div class="btn-right">
        <el-button v-if="~btnArr.indexOf('add')" type="primary" size="medium" @click="addFn"
          >添加</el-button
        >
      </div>
    </div>
    <div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="700px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules" :label-width="formLabelWidth">
        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="IP地址：" prop="ip">
              <el-input type="text" v-model.trim="cForm.ip" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="名单类型：" prop="type">
              <template>
                <el-select v-model="cForm.type" placeholder="请选择">
                  <el-option
                    v-for="(value, key) in listTypeObj"
                    :key="key"
                    :label="value"
                    :value="value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="状态：" prop="enable">
              <el-switch v-model="cForm.enable" active-color="#13ce66" inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="IP类型：" prop="property">
              <template>
                <el-select v-model="cForm.property" placeholder="请选择">
                  <el-option
                    v-for="item in ipTypeArr"
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="备注：" prop="remark">
              <el-input
                type="textarea"
                rows="3"
                v-model.trim="cForm.remark"
                placeholder="请输入"
              ></el-input>
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
import { ipAddressCol, ipAddressColNoBtn } from '@/config/column/system'
import $api from '@/api/api'
import utils from '@/utils/util'
import iconPage from '@/components/icon-page'
import { Fetch } from '@/api/fetch.js'
export default {
  name: 'IpAddress',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
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
      boolen: false,
      cForm: {},
      dialogFormVisible: false,
      formName: '',
      rules: {
        ip: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        type: [
          {
            required: true,
            message: '必选',
            trigger: 'blur'
          }
        ],

        property: [
          {
            required: true,
            message: '必选',
            trigger: 'blur'
          }
        ],

        // remark: [
        //   {
        //     required: true,
        //     message: '必填',
        //     trigger: 'blur'
        //   }
        // ]
      },
      listTypeObj: {
        1: '白名单',
        2: '黑名单'
      },
      ipTypeArr: [
        { label: '外部', value: 2 },
        { label: '内部', value: 1 }
      ],
      listBtnArr: [], // 上方名单按钮列表
      listBtnObj: {
        FILTER_WHITE_IP: {
          label: '白名单过滤',
          btnName: 'whiteList',
          type: '白名单'
        },
        FILTER_BLACK_IP: {
          label: '黑名单过滤',
          btnName: 'blacklist',
          type: '黑名单'
        }
      } // 上方名单按钮文案
    }
  },
  mounted() {
    const authObj = this.$util.getAuthority('IpAddress', ipAddressCol, ipAddressColNoBtn)
    this.configs = authObj.val
    this.btnArr = authObj.btnArr || []
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    // this.searchCofig = this.$util.clone(activityConfig)
    this.getList()
    this.getListBtn()
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data
      // 编辑
      if (fn === 'edit') {
        this.formName = '编辑IP地址'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['cForm'].resetFields()
          const { id, enable, ip, type, property, remark } = row
          this.cForm = {
            id,
            enable,
            ip,
            type,
            property,
            remark
          }
        })
      }

      if (fn === 'trable') {
        const { id, enable, ip, type, property, remark } = row
        this.$confirm(
          `确定${enable ? '开启' : '关闭'}此${this.listTypeObj[type]}权限吗？`,
          '温馨提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        )
          .then(async () => {
            const query_data = {
              id,
              enable: enable ? 1 : 0,
              ip,
              type,
              property,
              remark
            }
            const res = await $api.apiEditIpAddressListLists(query_data)
            if (res) {
              this.$message.success('切换成功')
            } else {
              this.$message.error('切换失败')
            }
            this.getList()
          })
          .catch(() => {
            this.getList()
          })
      }

      // 编辑
      if (fn === 'delete') {
        const { id, type } = row
        this.$confirm(`确定删除此${this.listTypeObj[type]}权限吗？`, '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async () => {
            const query_data = {
              id
            }
            Fetch.post('/user/filter/ip/delete' + '/' + id, query_data).then(() => {
              this.$message.success('删除成功')
              this.getList()
            })
          })
          .catch(() => {
            this.getList()
          })
      }
    },
    listBtnChange(id, type, val) {
      this.$confirm(`确定${val ? '开启' : '关闭'}${type}权限吗？`, '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          const query_data = {
            id: id
          }
          Fetch.post('/user/feature/status' + '/' + id, query_data).then(() => {
            this.$message.success('切换成功')
            this.getListBtn()
          })
        })
        .catch(() => {
          this.getListBtn()
        })
    },
    async refreshBtn() {
      this.getList()
      this.getListBtn()
    },
    addFn() {
      this.formName = '添加IP地址'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields()
        this.cForm = {
          id: '',
          enable: false,
          ip: '',
          type: '',
          property: '',
          remark: ''
        }
      })
    },
    confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          const { id, enable, ...param } = this.cForm
          const params = {
            enable: enable ? 1 : 0,
            ...param
          }

          this.btnLoading = true
          // 新增 编辑
          const res = !id
            ? await $api.apiAddIpAddressListLists(params)
            : await $api.apiEditIpAddressListLists({
                id,
                ...params
              })
          if (res) {
            let txt = !id ? '添加成功' : '编辑成功'
            this.$message({
              message: txt,
              type: 'success'
            })
            this.dialogFormVisible = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
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
      this.searchCofig.forEach((v) => {
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

    // getlist
    async getList() {
      if (this.listLoading) return
      const query_data = {}
      this.listLoading = true
      const res = await $api.apiGetIpAddressLists(query_data)
      if (res) {
        let list = res.data.data
        list.forEach((v) => {
          v.enable = v.enable == 1 ? true : false
        })
        this.list = list
      }
      this.listLoading = false
    },

    async getListBtn() {
      const query_data = {}
      const res = await $api.apiGetIpAddressListBtn(query_data)
      if (res) {
        let list = res.data.data
        list.forEach((v) => {
          v.enable = v.enable == 1 ? true : false
        })
        this.listBtnArr = list
      }
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
.ipAddress-container {
  padding: 4px 10px 10px 10px;
  .is-risk-control {
    color: red;
  }

  .search-head {
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: flex-start;
  }

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

  .container-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-button,
    .el-switch {
      display: inline-block;
      margin: 20px 5px;
    }
  }
}
</style>
