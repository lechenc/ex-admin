<template>
  <div class="assetManageList-container">
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
        <!--<el-form-item label="名称" :label-width="formLabelWidth" prop="subUsername">
          <el-input type="text" v-model="form.subUsername" placeholder="请输入"></el-input>
        </el-form-item> -->
        <el-form-item label="账号类型" :label-width="formLabelWidth" prop="userType">
          <el-select v-model="form.userType" size="small" clearable>
            <el-option v-for="(item, idx) in roleList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
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
import { assetManageListCol, assetManageListColNoBtn, assetManageListConfig } from '@/config/column/assetManage';
import $api from '@/api/api';

export default {
  name: 'AssetManageList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      roleList: [
        { label: '手续费账号', value: 101 },
        { label: '成本账号', value: 102 },
        { label: '支出账号', value: 103 },
        { label: '星球充值账号', value: 105 },
        { label: '合约账号', value: 106 },
        // { label: '合约体验金账号', value: 107 },
      ],

      title: '添加账号',
      formLabelWidth: '110px',
      dialogVisible: false, // 是否弹出弹窗
      curRow: {}, // 当前被点击的数据条目
      form: {
        userType: '',
        // subUsername: '',
      },
      rules: {
        userType: [{ required: true, message: '必填' }],
        // subUsername: [{ required: true, message: '必填' }],
      },
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      const typeId = +row.userType;
      if (fn === 'detail') {
        if (typeId === 101) {
          // 手续费账号
          this.$router.push({ path: '/assetManage/earnAccount', query: { userId: row.userId } });
        } else if (typeId === 102) {
          //  成本账号
          this.$router.push({ path: '/assetManage/costAccount', query: { userId: row.userId } });
        } else if (typeId === 103) {
          //  支出账号
          this.$router.push({ path: '/assetManage/expenseAcountList', query: { userId: row.userId } });
        } else if (typeId === 105) {
          //  星球充值账号
          this.$router.push({ path: '/assetManage/revenueAccount', query: { userId: row.userId } });
        } else if (typeId === 106) {
          //  星球充值账号
          this.$router.push({ path: '/contract/accountManagement/accountContract', query: { topBtn: true } });
        }else if (typeId === 107) {
          //  体验金账号
          this.$router.push({ path: '/voucher/voucherExperience', query: { userId: row.userId } });
        }
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
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
      this.formName = '添加账号';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {
          userType: '',
          // subUsername: '',
        };
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { userType } = this.form;
          const params = {
            userType,
            // subUsername,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = await $api.addAssetUser(params);
          if (res) {
            this.$message({ message: '成功添加账号', type: 'success' });
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
      const res = await $api.assetUserList(params);
      if (res.data && res.data.data) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    requiredParams(params) {},
  },
  mounted() {
    let authObj = this.$util.getAuthority('AssetManageList', assetManageListCol, assetManageListColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(assetManageListConfig);

    this.getList();
  },
};
</script>
<style lang="scss">
.assetManageList-container {
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
