<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-08-05 20:32:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="recharge-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :exportExcel="btnArr.includes('excel')"  @do-exportExcel="exportExcel" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
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
    <!-- 修改弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="700px" :title="title">
      <el-card class="box-card">
        <div class="box-card-con">
          <H3>卖方申诉信息</H3>
          <div>
            <Btable :data="sellList" :configs="sellConfigs" />
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="box-card-con">
          <H3>买方申诉信息</H3>
          <div>
            <Btable :data="buyList" :configs="buyConfigs" />
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="box-card-con">
          <el-form :model="form" ref="form" :rules="rules">
            <el-row>
              <el-col :span="8">
                <el-form-item label="裁决结果" prop="aaa">
                  <el-select v-model="form.aaa" placeholder="" wdith="20%" :disabled="!isModify">
                    <el-option v-for="(item, idx) in judgmentList" :key="idx" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处罚买方" prop="aaa">
                  <el-select v-model="form.aaa" placeholder="" wdith="20%" :disabled="!isModify">
                    <el-option v-for="(item, idx) in punishBuyList" :key="idx" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处罚卖方" prop="aaa">
                  <el-select v-model="form.aaa" placeholder="" wdith="20%" :disabled="!isModify">
                    <el-option v-for="(item, idx) in punishSellList" :key="idx" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-form-item label="备注" prop="bbb">
                <el-input type="textarea" placeholder="请输入" v-model="form.bbb" :disabled="!isModify"> </el-input>
              </el-form-item>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="修改金额" prop="bbb">
                  <el-input type="text" placeholder="请输入" v-model="form.bbb" :disabled="!isModify"> </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>

      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmDialog" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { cashOutCol, cashOutColNoBtn, cashOutConfig } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isModify: false, // 是否可修改
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数

      dialogVisible: false, // 是否显示弹出框
      curObj: null, // 当前展示的数据对象
      form: {},
      rules: {
        rate: [{ required: true, message: '必填', trigger: 'blur' }],
        cash: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      // 裁决结果列表
      judgmentList: [{ label: 'a', value: '1' }, { label: 'a', value: '1' }],
      // 处罚买方列表
      punishBuyList: [{ label: 'a', value: '1' }, { label: 'a', value: '1' }],
      // 处罚卖方列表
      punishSellList: [{ label: 'a', value: '1' }, { label: 'a', value: '1' }],
      // 卖方买方表格配置
      sellConfigs: [],
      buyConfigs: [],
      // 买卖方表格数据
      sellList: [],
      buyList: [],
      btnArr:[]
    };
  },
  methods: {
    // 表格里的操作
    async doHandle(data) {
      const { fn, row } = data;
      this.row = row;
      if (fn === 'activation') {
        const { a, b, c } = this.form;
        let params = {
          aaa: false,
          bbb: 1,
          ccc: 1,
        };
        const res = await $api.aaaaaaaddddddddbbbb(params);
        if (res) {
          this.$message({ message: res.data.message, type: 'success' });
          this.isModify = false;
        }
      }
      if (fn === 'judgment') {
      }
      if (fn === 'edit') {
      }
      if (fn === 'rebate') {
        this.$confirm(`确认扣除币商的返佣?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消' })
          .then(async () => {
            let params = {
              // userId: this.current_row.userId,
            };
            const res = await $api.ddddddddddd(params);
            if (res) {
              this.$message({ message: res.data.message, type: 'success' });
              this.getList();
            } else {
              this.$message({ message: '更新失败', type: 'danger' });
            }
          })
          .catch(() => {
            //console.log('cancel');
          });
      }
    },
    // 提交修改表单
    confirmDialog() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { a, b, c } = this.form;
          let params = {
            aaa: false,
            bbb: 1,
            ccc: 1,
          };
          this.btnLoading = true;
          const res = await $api.aaaaaaaddddddddbbbb(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogVisible = false;
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
    exportExcel() {
      utils.exportData.apply(this, [0]);
    },
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
    // getlist
    async getList() {
      if (this.listLoading) return;
      // const end = +new Date();
      // let start = +new Date();
      // start = start - 3600 * 1000 * 24 * 2;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        trans: 0, // 卖出
      };
      if (this.search_params_obj.startDate) {
        this.search_params_obj.endDate = this.formatTime(this.search_params_obj.endDate);
        this.search_params_obj.startDate = this.formatTime(this.search_params_obj.startDate);
      }
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getTradeMainList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD hh:mm:ss');
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("FiatCashOut");
    // if (authStatus === 2) {
    //   this.configs = cashOutColNoBtn;
    //   this.isCURDAuth = false;
    // } else {
    //   this.configs = cashOutCol;
    // }
    let authObj = this.$util.getAuthority('CashOut', cashOutCol, []);
    this.btnArr = authObj.btnArr || [] || [];
    this.configs = cashOutCol;
    this.searchCofig = this.$util.clone(cashOutConfig);
    // this.getList();
  },
};
</script>
<style scope lang="scss">
.recharge-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
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

  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
