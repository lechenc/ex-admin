<template>
  <div class="otcBail-container">
    <div class="container-top">
      <div class="line">OTC保证金参数设置</div>
    </div>
    <!-- <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="small" @click="addLine">添加保证金</el-button>
    </div> -->
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!--
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
    -->
    <!-- 修改弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">

        <el-form-item label="数量" prop="deposit" label-width="80px">
          <el-input type="text" placeholder="请输入" v-model="form.deposit" @input="checkValR('deposit')"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="confirmLoading" @click.stop="confirmOp">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { otcBailCol, otcBailColNoBtn } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'FiatOtcBail',
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
      isCURDAuth: false, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      confirmLoading:false, 
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      coinList: [], //币种列表
      title: '',
      curRow: {}, // 当前操作的数据
      dialogVisible: false, // 是否显示驳回弹出框
      form: {
        deposit: ''
      },
      rules: {
        deposit: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      // 状态列表
      statusList: [],
    };
  },
  methods: {
    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1;
      this.pageSize = val;
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      // 审核状态 1是成功，2是失败
      if (fn === 'edit') {
        // 修改
        this.title = '编辑保证金';
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.form = {
            deposit: this.curRow.deposit
          };
          this.$refs['form'].resetFields();
        });
      } else {
        // 删除
        this.$confirm('删除后不可恢复,请谨慎操作？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              // id: row.id,
              // auditStatus: 1,
            };
            const res = await $api.dddddd(params);
            if (res) {
              this.$message({ type: 'success', message: '通过操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消删除' });
          });
      }
    },
    // 添加
    addLine() {
      this.formName = '添加保证金';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {};
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { deposit } = this.form;
          const params = {
            coinId: this.curRow.coinId,
            amount: deposit
          };
          // 新增 编辑
          this.confirmLoading = true;
          const res = await $api.updateOtcDepositCoin(params);
          if (res) {
            this.$message({ message: "保证金修改成功", type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.confirmLoading = false;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        // pageNum: this.current_page,
        // pageSize: this.pageSize,
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.queryOtcDepositCoin(query_data);
      if (res) {
         this.list =  res.data.result;
        // const { records, total, current, pages } = res.data.data;
        // this.total = total;
        // this.pages = pages;
        // this.current_page = current;
        // this.list = records;
        // this.dataList = records;
        this.listLoading = false;
      }
    },
    checkValR(val) {
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority('FiatOtcBail', otcBailCol, otcBailColNoBtn);
    this.configs = authObj.val;

    this.$store.dispatch('common/getFiatCoinList').then(() => {
      this.coinList = this.$store.state.common.fiatcoinlist;
    });
    this.getList();
  },
};
</script>
<style scope lang="scss">
.otcBail-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 15px 0;
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
