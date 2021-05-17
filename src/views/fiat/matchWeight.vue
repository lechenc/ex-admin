<template>
  <div class="matchWeight-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
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

    <!-- 匹配权重值设置弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="权重值" :label-width="labelWidth" prop="weight">
          <el-input type="number" placeholder="请输入" v-model="form.weight" @input="checkVal('weight')"> </el-input>
        </el-form-item>
        <el-form-item label="授信额度" :label-width="labelWidth" prop="authorizationLimit">
          <el-input type="number" placeholder="请输入" v-model="form.authorizationLimit" @input="checkVal('authorizationLimit')"> </el-input>
        </el-form-item>
        <el-form-item label="收款方式限制次数" :label-width="labelWidth" prop="payCount">
          <el-input type="number" placeholder="请输入" v-model="form.payCount" @input="checkVal('payCount')"> </el-input>
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
import { matchWeightCol, matchWeightColNoBtn, matchWeightConfig } from '@/config/column/fiat';
import $api from '@/api/api';

export default {
  name: 'MatchWeight',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
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
      title: '会员设置',
      labelWidth: '140px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        userId: '',
        weight: '',
        authorizationLimit: '',
        payCount: '',
      },
      rules: {
        weight: [{ required: true, message: '必填', trigger: 'blur' }],
        authorizationLimit: [{ required: true, message: '必填', trigger: 'blur' }],
        payCount: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      balance: 0, // 积分余额
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      if (fn == 'edit') {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.form = {
            userId: row.userId,
            weight: row.weight,
            authorizationLimit: row.authorizationLimit,
            payCount: row.payCount,
          };
          this.$refs['form'].resetFields();
        });
      }
      if (fn == 'freeze') {
        this.$confirm('确定解冻全部信用额度?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              userId: row.userId,
            };
            const res = await $api.setUnfreezeMember(params);
            if (res) {
              this.$message({ type: 'success', message: '解冻成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消' });
          });
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
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { userId, weight, authorizationLimit, payCount } = this.form;
          const params = {
            userId:+userId,
            weight:+weight,
            authorizationLimit:+authorizationLimit,
            payCount:+payCount,
          };
          this.btnLoading = true;
          // 编辑
          const res = await $api.getUserUpdateMerchantInfo(params);
          if (res) {
            this.$message({ message: '添加成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          //console.log('error submit!!');
          return false;
        }
      });
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        appId:0
      };
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getUserGetMerchantInfo(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // 是否可解冻前端处理（信用额度大于0）
        records.forEach(v => {
          v.isCanFreeze = v.creditLimit && v.creditLimit > 0 ? 1 : 0;
        });
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if(val === 'payCount'){
        this.form[val] = (this.form[val] + '').replace(/[^\d]/gi, '');
      }
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('MatchWeight', matchWeightCol, matchWeightColNoBtn);
    this.configs = authObj.val;
    // this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(matchWeightConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.matchWeight-container {
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
