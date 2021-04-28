<template>
  <div class="sonAcountList-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addLine">添加账号</el-button>
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
    <!-- 添加弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="账号名称" prop="subUsername" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.subUsername"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { sonAcountCol, sonAcountColNoBtn, sonAcountConfig } from '@/config/column/assetManage';
import $api from '@/api/api';

export default {
  name: 'SonAcountList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      btnLoading: false, // 提交
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      title: '添加账号',
      labelWidth: '110px',
      userType: 104, // 子账号类型值
      dialogVisible: false, // 是否显示弹窗
      form: {
        id: '',
        subUsername: '',
      },
      rules: {
        subUsername: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
      accountList: [], //  接收账号
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      // 编辑币种
      if (fn === 'edit') {
        this.title = '编辑账号';
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            userId: row.userId,
            subUsername: row.realName,
          };
        });
      }
      if (fn === 'detail') {
        //  查看详情
        this.$router.push({ path: '/assetManage/sonAcountDetail', query: { userId: row.userId,realName: row.realName } });
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
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
    addLine() {
      this.title = '添加账号';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.form = {
          userId: '',
          subUsername: '',
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { userId, subUsername } = this.form;
          const params = {};
          this.btnLoading = true;
          !userId
            ? Object.assign(params, { userType: parseInt(this.userType), subUsername: subUsername })
            : Object.assign(params, { realName: subUsername, userId });
          // 新增
          const res = !userId ? await $api.addAssetUser(params) : await $api.getEditExpendUser(params);
          if (res) {
            let txt = !userId ? '添加成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getSubExpendUserList(params);
      if (res.data && res.data.data) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = +total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    requiredParams(params) {},
  },
  mounted() {
    let authObj = this.$util.getAuthority('SonAcountList', sonAcountCol, sonAcountColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(sonAcountConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.sonAcountList-container {
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

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
</style>
