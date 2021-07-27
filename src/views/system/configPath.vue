<template>
  <div class="configPath-container">
      <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addForm">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 添加 编辑 -->
    <el-dialog :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="路径名称" :label-width="formLabelWidth" prop="name">
          <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="路径地址" :label-width="formLabelWidth" prop="requestUrl">
          <el-input type="text" v-model="form.requestUrl"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { configPathCol, configPathColNoBtn, configPathConfig } from '@/config/column/system';
import $api from '@/api/api';

export default {
  name: 'ConfigPath',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      dialogFormVisible: false,
      isAdd: false, // 是否是编辑false还是增加数据true
      getAmountSection: '', // 获取的数值范围
      form: {
        id: '',
        name: '',
        requestUrl: '',
      },
      rules: {
        name: [{ required: true, message: '必填', trigger: 'change' }],
        requestUrl: [{ required: true, message: '必填', trigger: 'change' }]
      },
      formName: '添加拦截路径',
      formLabelWidth: '120px',
    };
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data;
      // 删除
			if (fn === "del") {
				this.$confirm("确认删除吗?", "温馨提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				})
					.then(async () => {
						let params = {
              id: row.id
						};
						const res = await $api.deleteLogMenu(params);
						if (res) {
							this.$message({ type: "success", message: "删除成功" });
							this.getList();
						}
					})
					.catch(() => { });
			}
      // 编辑
      if (fn === 'edit') {
        this.isAdd = false;
        this.formName = '编辑拦截路径';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          const { id,name,requestUrl } = row;
          this.form = {
            id,
            name,
            requestUrl,
          };
        });
      }
    },
    // 添加交易对
    addForm() {
      this.isAdd = true;
      this.formName = '添加拦截路径';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.form = {
          id: '',
          name: '',
          requestUrl: ''
        }
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { id,name,requestUrl } = this.form;
          const params = {
            name,
            requestUrl
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.addLogMenu(params) : await $api.editLogMenu({ id, ...params });
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getLogMenuList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.listLoading = false;
      }
    }
  },
  async mounted() {
    // let authObj = this.$util.getAuthority('ConfigPath', configPathCol, configPathColNoBtn);
    this.configs = configPathCol;
    // this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(configPathConfig);
    this.getList();
  },
};
</script>
<style scoped lang="scss">
.configPath-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
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
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  // icon
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
}
/deep/ .el-dialog__body {
  max-height: 600px;
  overflow: auto;
}
</style>
