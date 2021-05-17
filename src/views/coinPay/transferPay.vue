<template>
  <div class="transferPay-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
      />
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
   
    <!-- 详情 -->
     <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="500px">
      <el-form>
        <el-row>
          <el-col :span="24">
            <el-form-item label="订单号" :label-width="formLabelWidth">{{ curRow.orderNo }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="转入UID" :label-width="formLabelWidth">{{ curRow.uid }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="转出UID" :label-width="formLabelWidth">{{ curRow.toUid }}</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="币种" :label-width="formLabelWidth">{{ curRow.coinName }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="提币数量" :label-width="formLabelWidth">{{ curRow.amount }}</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="手续费" :label-width="formLabelWidth">{{ curRow.fee }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="到账数量" :label-width="formLabelWidth">{{ curRow.dealAmount }}</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="转出地址" :label-width="formLabelWidth">{{ curRow.fromAddress }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="转入地址" :label-width="formLabelWidth">{{ curRow.toAddress }}</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="创建时间" :label-width="formLabelWidth">{{ curRow.createTime }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="初审时间" :label-width="formLabelWidth">{{ curRow.firstAuditTime }}</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="审核人" :label-width="formLabelWidth">{{ curRow.firstAuditUserName }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态" :label-width="formLabelWidth">{{ tradeStatusObj[curRow.tradeStatus] }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="middle">
        <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { transferCol, transferConfig } from '@/config/column/coinPay';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'TransferPay',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      tradeStatusObj:{
        0:'转账中',
        1:'成功'
      },
      curRow: {}, // 当前选定行数据
      formLabelWidth:"100px",
      dialogTitle: '',
      listLoading: false, // 表格loading
      excelLoading: false, // 导出loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      excelTitle: '划转记录列表',
      coinList: [], 
      dialogVisible: false,
      // totalExFee: "", // 手续费总计
      // totalArrivalAccount: "", // 到账总计
    };
  },
  methods: {
    async doHandle(data) {
      //console.log(data);
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'detail') {
        // 详情
        this.dialogTitle = '查看详情';
        this.dialogVisible = true;
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
      //console.log(this.searchCofig);
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      //console.log(this.searchCofig[0].value);
      this.getList();
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
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
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getCPTransferPage(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        // this.totalExFee = totalExFee;
        // this.totalArrivalAccount = totalArrivalAccount;
        this.list = records;
        this.dataList = records;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getCPTransferPage(params);
      this.excelLoading = false;
      return res;
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
    this.configs = transferCol;
    this.searchCofig = this.$util.clone(transferConfig);
    this.$store.dispatch('common/getCoinList').then(() => {
      // 强制默认只有USDT币种
      let list = this.$store.state.common.coinlist;
      let getList = list.filter(f => f.label == 'USDT') || [];
            this.searchCofig[3]['list'] = getList;
      this.coinList = getList;
      
      // this.searchCofig[3]['list'] = list;
    });
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.getList();
  },
};
</script>
<style scope lang="scss">
.transferPay-container {
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
}
</style>
