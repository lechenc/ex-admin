<template>
  <div class="paymentMethod-container">
    <div class="container-top">
      <div class="line">OTC收款方式设置</div>
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
    <el-dialog :title="formName" :visible.sync="dialogFormVisible" width="550px">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="收款方式" :label-width="formLabelWidth" prop="payType">
          <el-select v-model="form.payType" placeholder="请选择" size="medium">
            <el-option v-for="(item, i) in payList" :key="i" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量" :label-width="formLabelWidth" prop="limitNum">
          <el-input type="text" v-model="form.limitNum" @input="checkVal('limitNum')"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth" prop="status">
          <el-switch v-model="form.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
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
import { paymentMethodCol, paymentMethodColNoBtn } from '@/config/column/fiat';
import $api from '@/api/api';

export default {
  name: 'PaymentMethod',
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
      payList: [{ label: '银行卡', value: 1 }, { label: '支付宝', value: 2 }, { label: '微信', value: 3 }], // 支付方式
      dialogFormVisible: false,
      isAdd: false, // 是否是编辑false还是增加数据true
      form: {
        id: '',
        payType: '',
        limitNum: '',
        status: false,
      },
      rules: {
        payType: [{ required: true, message: '必填', trigger: 'change' }],
        limitNum: [{ required: true, message: '必填', trigger: 'change' }],
      },
      formName: '',
      formLabelWidth: '120px',
    };
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data;
      // 删除
      // if (fn === 'del') {
      //   this.$confirm('确认删除吗?', '温馨提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning',
      //   })
      //     .then(async () => {
      //       let params = {
      //         id: row.id,
      //       };
      //       const res = await $api.setOtDeletePay(params);
      //       if (res) {
      //         this.$message({ type: 'success', message: '删除成功' });
      //         this.getList();
      //       }
      //     })
      //     .catch(() => {});
      // }
      // 编辑
      if (fn === 'edit') {
        this.isAdd = false;
        this.formName = 'OTC收款方式编辑';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          const { id, payType, limitNum } = row;
          this.form = {
            id,
            payType,
            limitNum,
            status: row.status,
          };
        });
      }
      // 更改状态
      if (fn === 'trputon') {
        const params = {
          id: row.id,
          status: row.status ? 1 : 0,
        };
        const res = await $api.setOtEditPay(params);
        if (res) {
          this.$message({ message: '状态更改成功', type: 'success' });
        }
        this.getList();
      }
    },
    // 添加交易对
    addForm() {
      this.isAdd = true;
      this.formName = '添加OTC收款方式';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.form = {
          id: '',
          payType: '',
          limitNum: '',
          status: false,
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { id, payType, status, limitNum } = this.form;
          const params = {
            limitNum: +limitNum,
            status: status ? 1 : 0,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.setUserOtcAddPay({ payType, ...params }) : await $api.setOtEditPay({ id, ...params });
          if (res) {
            let txt = id === '' ? '添加成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
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
    // async getPayList() {
    //   const res = await $api.getoOtcPayList({ pageNum: 1, pageSize: 1000 });
    //   if (res) {
    //     this.payList = res.data.data;
    //   }
    // },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getUsrCtcPayPage(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          v['status'] = v['status'] ? true : false;
        });
        this.list = records;
        this.listLoading = false;
      }
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('PaymentMethod', paymentMethodCol, paymentMethodColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    // this.getPayList(); // 目前不动态获取支付方式，而是写死
    this.getList();
  },
};
</script>
<style scoped lang="scss">
.paymentMethod-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
    .line {
      font-size: 18px;
      font-weight: 500;
      color: #333;
      span {
        font-size: 16px;
        color: #606266;
      }
    }
    .line::before {
      content: '';
      border-left: 5px solid #03a7f0;
      margin-right: 10px;
    }
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
