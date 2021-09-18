<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-07-29 14:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="recharge-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :exportExcel="btnArr.includes('excel')"
        @do-exportExcel="exportExcel"
      />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="small" @click="addBlack">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <div>
        <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
      </div>
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
    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="600px" title="增加用户黑名单">
      <el-form :model="form" ref="form" :rules="rules" label-width="90px">
        <el-form-item label="appId" prop="appId">
          <el-input type="text" placeholder="请输入" v-model="form.appId"> </el-input>
        </el-form-item>
        <el-form-item label="用户编码userid" prop="appUserId">
          <el-input type="text" placeholder="请输入" v-model="form.appUserId"> </el-input>
        </el-form-item>
        <el-form-item label="状态" prop="foreverOrLimited">
          <el-select
            v-model="form.foreverOrLimited"
            clearable
            placeholder="请选择"
            size="small"
            :disabled="!isCURDAuth"
          >
            <el-option
              v-for="(item, i) in statusList"
              :key="i"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="ip" prop="ip">
          <el-input type="text" placeholder="请输入" v-model="form.ip"> </el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false" style="margin-right: 50px">取消</el-button>
        <el-button type="primary" @click.stop="confirmDialog">确定增加</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
// import { blacklistCol, blacklistColNoBtn, blacklistConfig } from "@/config/column/black";
import $api from '@/api/api'
import utils from '@/utils/util'

export default {
  components: {
    Btable,
    Bsearch
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      dialogVisible: false, // 是否显示弹窗
      form: {
        appId: '',
        appUserId: '',
        foreverOrLimited: '2',
        ip: ''
      },
      rules: {
        appId: [{ required: true, message: '必填', trigger: 'blur' }],
        appUserId: [{ required: true, message: '必填', trigger: 'blur' }],
        foreverOrLimited: [{ required: true, message: '必填', trigger: 'blur' }],
        ip: [{ required: true, message: '必填', trigger: 'blur' }]
      },
      statusList: [
        { label: '24小时', value: 1 },
        { label: '永久', value: 2 }
      ]
    }
  },
  methods: {
    doHandle(data) {
      const { fn, row } = data
      if (fn === 'unblock') {
        this.$confirm('确认解封么?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async () => {
            let params = {
              appId: row.appId,
              appUserId: row.appUserId != '--' ? row.appUserId : '',
              ip: row.ip != '--' ? row.ip : ''
            }
            const res = await $api.subCheckoutBlacklist(params)
            if (res) {
              this.$message({ type: 'success', message: '解封成功' })
              this.getList()
            }
          })
          .catch(() => {})
      }
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
      this.getList()
    },
    exportExcel() {
      utils.exportData.apply(this, [0])
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
    addBlack() {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs['form'].resetFields()
      })
    },
    // 提交拉黑的用户
    confirmDialog() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          this.$confirm(`增加后，满足该条件的用户将不可以发单，确定增加？`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(async () => {
            const { ...repo } = this.form
            let params = {
              ...repo
            }
            const res = await $api.addCheckoutBlacklist(params)
            if (res) {
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.getList()
              this.dialogVisible = false
            }
          })
        }
      })
    },
    // getlist
    async getList() {
      if (this.listLoading) return
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.getCheckoutBlacklist(query_data)
      if (res) {
        const { list, total, pageNum, pages } = res.data.result
        this.total = +total
        this.pages = +pages
        this.current_page = +pageNum
        this.list = list
        this.dataList = list
        this.listLoading = false
      }
    }
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("Blacklist");
    // if (authStatus === 2) {
    //   this.configs = blacklistColNoBtn;
    //   this.isCURDAuth = false;
    // } else {
    //   this.configs = blacklistCol;
    // }
    // this.configs = blacklistCol;
    // this.searchCofig = blacklistConfig;
    // this.getList();
  }
}
</script>
<style scope lang="scss">
.recharge-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .inner-footer {
    display: flex;
    justify-content: center;
    align-items: center;
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
