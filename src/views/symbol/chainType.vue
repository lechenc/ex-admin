<template>
<div class="chainType-container">
  <div class="container-btn" v-if="isCURDAuth">
    <el-button type="primary" size="medium" @click="addChain">添加</el-button>
  </div>
  <div>
    <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
  </div>
  <div class="container-footer">
    <icon-page :total="total" :pages="pages"></icon-page>
    <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total">
    </el-pagination>
  </div>
  <!-- 添加 编辑 -->
  <el-dialog :title="formName" :visible.sync="dialogFormVisible">
    <el-form :model="chainForm" ref="chainForm" :rules="rules">
      <el-form-item label="类型名称" :label-width="formLabelWidth" prop="chainName">
        <el-input v-model="chainForm.chainName" autocomplete="off" type="text"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
    </div>
  </el-dialog>

  <!-- 调账详情，审核 -->
  <el-dialog title="链类型详情" :visible.sync="dialogDetailVisible" width="500px">
    <el-form>
      <el-row>
        <el-col :span="24">
          <el-form-item label="类型名称" :label-width="formLabelWidth">{{ curRow.chainName }}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="相关币种" :label-width="formLabelWidth">{{ curRow.coinName }}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="创建时间" :label-width="formLabelWidth">{{ curRow.createTime | typeTime }}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="更新时间" :label-width="formLabelWidth">{{ curRow.updateTime | typeTime }}</el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="middle">
      <el-button type="primary" @click="dialogDetailVisible = false" size="medium">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import {
  chainTypeCol,
  chainTypeColNoBtn
} from '@/config/column/symbol';
import {
  parseTime
} from '@/utils/index';
import $api from '@/api/api';

export default {
  name: 'ChainType',
  components: {
    Btable,
    Bsearch,
    iconPage,
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
      chainForm: {
        id: '',
        chainName: '',
      },
      rules: {
        chainName: [{
          required: true,
          message: '必填',
          trigger: 'blur'
        }],
      },
      formName: '',
      formLabelWidth: '125px',
      curRow: {},
      dialogDetailVisible: false,
    };
  },
  filters: {
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const {
        fn,
        row
      } = data;
      // 编辑币种
      if (fn === 'edit') {
        this.formName = '编辑链类型';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['chainForm'].resetFields();
          const {
            id,
            chainName
          } = row;
          this.chainForm = {
            id,
            chainName,
          };
        });
      }
      if (fn === 'detail') {
        this.curRow = row;
        this.dialogDetailVisible = true;
      }
      if (fn === 'del') {
        this.$confirm('确定删除？', '温馨提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          })
          .then(async () => {
            const params = {
              id: row.id,
            };
            const res = await $api.setDeleteChain(params);
            if (res) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getList();
            }
          })
          .catch(() => {
            // this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    // 添加链类型
    addChain() {
      this.formName = '添加链类型';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['chainForm'].resetFields();
        this.chainForm = {
          id: '',
          chainName: '',
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['chainForm'].validate(async valid => {
        if (valid) {
          const {
            id,
            chainName
          } = this.chainForm;
          const params = {
            chainName: chainName,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.setAddChain(params) : await $api.setUpdateChain({
            id,
            ...params
          });
          if (res) {
            let txt = id === '' ? '添加成功' : '编辑成功';
            this.$message({
              message: res.data.message,
              type: 'success'
            });
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
      const res = await $api.getChainPage(query_data);
      if (res) {
        const {
          records,
          total,
          current,
          pages
        } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.listLoading = false;
      }
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('ChainType', chainTypeCol, chainTypeColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.chainType-container {
  padding: 4px 20px 10px 20px;

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
