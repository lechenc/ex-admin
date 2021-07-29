<template>
  <div class="contractTransfer-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn">
      <el-button type="primary" size="medium" @click="edit" v-if="btnArr.includes('edit')">修改指定K线</el-button>
    </div>
    <div>
      <Btable @do-handle="doHandle" :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 审核提示-->
    <el-dialog center :visible.sync="dialogVisible" width="500px" title="审核提示">
      <div slot="footer" class="inner-footer">
        <el-button type="danger" size="medium" @click.stop="confirmOp(0)" :loading="btnLoading">审核驳回</el-button>
        <el-button type="success" size="medium" @click.stop="confirmOp(1)" :loading="btnLoading">审核通过</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { klineListCol, klineListColNoBtn, klineListConfig } from '@/config/column/symbol';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'ContractTransfer',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      dialogVisible: false,
      btnLoading: false,
      listLoading: false, // 表格loading

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
      // totalExFee: "", // 手续费总计
      // totalArrivalAccount: "", // 到账总计
      curUid: '',
      btnArr: [],
    };
  },
  methods: {
    // 修改指定K线
    edit() {
      this.$router.push('/symbol/editKline');
    },
    async confirmOp(status) {
      const params = {
        uid: this.curUid,
        status,
      };
      const res = await $api.apiCheckKlineList(params);
      if (this.btnLoading) return;
      this.btnLoading = true;
      if (res) {
        this.dialogVisible = false;
        this.$message.success('审核成功');
      }
      this.btnLoading = false;
    },
    // 表格操作
    doHandle(data) {
      const { fn, row } = data;
      if (fn === 'check') {
        this.dialogVisible = true;
        this.curUid = row.uid;
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
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
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
      const res = await $api.getContractTransferPage(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        // this.totalExFee = totalExFee;
        // this.totalArrivalAccount = totalArrivalAccount;
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },

    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('KlineList', klineListCol, klineListColNoBtn);
    this.configs = authObj.val;
    this.searchCofig = this.$util.clone(klineListConfig);

    this.btnArr = authObj.btnArr;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.getList();
  },
};
</script>
<style scope lang="scss">
.contractTransfer-container {
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
}
</style>
