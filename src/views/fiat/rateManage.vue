<template>
  <div class="rateManage-container">
    <div class="container-top">
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

    <!-- 出售汇差弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="600px" title="修改出售汇差">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="抓取原始出售汇率" prop="sellFee" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.sellFee" :disabled="true"> </el-input>
        </el-form-item>
        <el-form-item label="修改出售汇率差值" prop="sellFeeDifference" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.sellFeeDifference" @input="checkVal('sellFeeDifference')">
            <el-select v-model="form.dot" placeholder="" style="width:65px;" slot="prepend">
              <el-option label="+" :value="1"></el-option>
              <el-option label="-" :value="2"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="平台当前出售汇率" prop="currentSellFee" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.currentSellFee" :disabled="true"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
    <!-- 购买汇差弹窗 -->
    <el-dialog :visible.sync="dialogDelVisible" width="600px" title="修改购买汇差">
      <el-form :model="delForm" ref="delForm" :rules="delRules">
        <el-form-item label="抓取原始购买汇率" prop="buyFee" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="delForm.buyFee" :disabled="true"> </el-input>
        </el-form-item>
        <el-form-item label="修改购买汇率差值" prop="buyFeeDifference" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="delForm.buyFeeDifference" @input="checkVal('buyFeeDifference')">
            <el-select v-model="delForm.dot" placeholder="" style="width:65px;" slot="prepend">
              <el-option label=" + " :value="1"></el-option>
              <el-option label=" - " :value="2"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="平台当前购买汇率" prop="currentBuyFee" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="delForm.currentBuyFee" :disabled="true"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogDelVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmDel" :loading="delBtnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { rateManageCol, rateManageColNoBtn } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';
import { set } from 'js-cookie';

export default {
  name: 'RateManage',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      // isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      delBtnLoading: false, // 移出提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      title: '',
      labelWidth: '260px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        coinId: '',
        sellFee: '',
        currentSellFee: '',
        sellFeeDifference: '',
        dot: 1,
      },
      rules: {
        sellFee: [{ required: true, message: '必填' }],
        currentSellFee: [{ required: true, message: '必填' }],
        sellFeeDifference: [{ required: true, message: '必填' }],
      },

      curRow: {}, // 当前选定行数据
      dialogDelVisible: false, // 是否移出
      delForm: {
        coinId: '',
        buyFee: 0,
        currentBuyFee: '',
        buyFeeDifference: '',
        dot: 1
      },
      delRules: {
        buyFee: [{ required: true, message: '必填' }],
        currentBuyFee: [{ required: true, message: '必填' }],
        buyFeeDifference: [{ required: true, message: '必填' }],
      },
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'sell') {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            coinId: row.coinId,
            dot: ~(row.sellFeeDifference + '').indexOf('-') ? 2 : 1,
            sellFeeDifference: (row.sellFeeDifference + '').replace(/\-/g, ''),
            currentSellFee: row.currentSellFee,
            sellFee: row.sellFee,
          };
        });
      }
      if (fn === 'buy') {
        this.dialogDelVisible = true;
        this.$nextTick(() => {
          this.$refs['delForm'].resetFields();
          this.delForm = {
            coinId: row.coinId,
            dot: ~(row.buyFeeDifference + '').indexOf('-') ? 2 : 1,
            buyFeeDifference: (row.buyFeeDifference + '').replace(/\-/g, ''),
            currentBuyFee: row.currentBuyFee,
            buyFee: row.buyFee,
          };
        });
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
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    checkVal(val) {
      if (val == 'sellFeeDifference') {
        // this.form.sellFeeDifference = (this.form.sellFeeDifference + '').replace(/\%/gi,'')
        this.form.sellFeeDifference = (this.form.sellFeeDifference + '').replace(/[^\d\.]/gi, '');
      } else {
        this.delForm.buyFeeDifference = (this.delForm.buyFeeDifference + '').replace(/[^\d\.]/gi, '');
      }
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { coinId, sellFeeDifference, dot } = this.form;
          const params = {
            coinId: coinId,
            sellFeeDifference: dot == 1 ? sellFeeDifference : '-' + sellFeeDifference,
          };
          this.btnLoading = true;
          const res = await $api.setTpEditCoinSet(params);
          if (res) {
            this.$message({ message: '操作成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // 确定删除
    async confirmDel() {
      this.$refs['delForm'].validate(async valid => {
        if (valid) {
          const { coinId, buyFeeDifference, dot } = this.delForm;
          let params = {
            coinId: coinId,
            buyFeeDifference: dot == 1 ? buyFeeDifference : '-' + buyFeeDifference,
          };
          this.delBtnLoading = true;
          const res = await $api.setTpEditCoinSet(params);
          if (res) {
            this.$message({ message: '操作成功', type: 'success' });
            this.getList();
            this.dialogDelVisible = false;
          }
          this.delBtnLoading = false;
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
      this.listLoading = true;
      const res = await $api.getTpCoinSetPage(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('RateManage', rateManageCol, rateManageColNoBtn);
    this.configs = authObj.val;
    // this.isCURDAuth = authObj.isAdd;
    this.getList();

    // setTimeout(()=>{
    //   this.$router.push({name: 'MerchantExamine'})
    // },2000)
  },
};
</script>
<style lang="scss">
.rateManage-container {
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
