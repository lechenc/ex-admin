<template>
  <div class="user-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <!-- <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addLine">手动添加新标仓</el-button>
    </div> -->
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
    <!-- 添加标仓弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="申请用户" prop="fromUID" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入UID" v-model="form.fromUID"> </el-input>
        </el-form-item>
        <el-form-item label="迁至该用户下级" prop="toUID" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入UID" v-model="form.toUID"> </el-input>
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
import { userCol, userColNoBtn, userConfig } from '@/config/column/warehouse';
import $api from '@/api/api';
export default {
  name: 'WarehouseUser',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: false, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      labelWidth: '130px',
      title: '添加新标仓用户',
      dialogVisible: false, // 是否显示弹窗
      form: {
        uid: '',
        inviterUid: '',
        googleCode: '',
      },
      rules: {
        uid: [{ required: true, message: '必填' }],
        inviterUid: [{ required: true, message: '必填' }],
        googleCode: [{ required: true, message: '必填' }],
      },
    };
  },
  filters: {
    userType(val) {},
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'detail') {
        this.$router.push({ path: '/warehouse/userListDetail', query: { id: row.uid } });
      }
      if (fn === 'switchCoin') {
        const params = {
          id: row.id,
          withoutLimit: row.withoutLimit ? 1 : 0,
        };
        const res = await $api.warehouseUpdateWarehouseUser(params);
        if (res) {
          this.$message({ message: res.data.message, type: 'success' });
        }
        this.getList();
      }
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
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 添加
    addLine() {
      this.formName = '添加新标仓用户';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {
          fromUID: '',
          toUID: '',
        };
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { ...prop } = this.form;
          const params = {
            ...prop,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = await $api.warehouseAddUser(params);
          if (res) {
            this.$message({ message: '成功添加新标仓用户', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          // //console.log('error submit!!');
          return false;
        }
      });
    },
    // 首屏表格
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.warehouseUserPage(params);
      if (res) {
        const { records, total, pages, current } = res.data.data;
        if (records.length > 0) {
          records.forEach(v => {
            v.emblem = v.emblem || v.emblem == 0 ? '加加林' + v.emblem : '--';
            v.withoutLimit = !!v.withoutLimit;
          });
        }
        this.list = records;
        this.total = +total;
        this.pages = pages;
        this.current_page = current;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [
          this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
          this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss'),
        ];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },

  mounted() {
    let authObj = this.$util.getAuthority('WarehouseUser', userCol, userColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(userConfig);
    this.getList();
  },
};
</script>

<style lang="scss" scope>
.user-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin-bottom: 20px;
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
