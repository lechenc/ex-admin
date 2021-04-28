<template>
  <div class="treatyAssetsContract-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <el-dialog title="领取详情" width="1000px" :visible.sync="dialogTableVisible">
      <Btable :listLoading="listLoading_table" :data="list_table" :configs="configs_table" />
      <div class="container-footer">
        <icon-page :total="total_table" :pages="pages_table"></icon-page>
        <el-pagination background @size-change="pageSizeChangeTable" @current-change="goPageTable" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page_table" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize_table" :total="total_table"> </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { redPacketListCol, redPacketListTableCol,redPacketListNoBtn, redPacketListConfig } from '@/config/column/redPacket';
import $api from '@/api/api';

export default {
  name: 'RedPacketList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      dialogTableVisible: false,
      listLoading: false, // 表格loading
      calLoading: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      symbollist: [],
      toDay: '',
      ago: '',
      current_page_table: 1,
      pageSize_table: 10,
      list_table: [],
      configs_table: [],
      listLoading_table: false,
      total_table: 0, // 总条数
      pages_table: 0, // 总页数
      rowObj: {},
      coin_List:[]
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑档位
      if (fn === 'info') {
        this.rowObj = row;
        this.getInfoList();
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
    pageSizeChangeTable(val) {
      this.current_page_table = 1;
      this.pageSize_table = val;
      this.getInfoList();
    },
    goPageTable(val) {
      this.current_page_table = val;
      this.getInfoList();
    },

    async getInfoList() {
      this.dialogTableVisible = true;
      if (this.listLoading_table) return;
      let params = {
        id: this.rowObj.id,
        pageNum: this.current_page_table,
        pageSize: this.pageSize_table,
      };
      const res = await $api.getRedPacketInfoList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total_table = total;
        this.pages_table = pages;
        this.current_page_table = current;
        this.list_table = records;
      }
      this.listLoading_table = false;
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
      const res = await $api.getRedPacketList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
      }
      this.listLoading = false;
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
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.symbollist.filter((v) => v['id'] == this.search_params_obj.coinId)[0].value;
          this.search_params_obj.coinMarket = tmpName;
        }
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    async getSymbolList() {
      this.$store.dispatch('common/getCoinList').then(() => {
        this.coin_List = this.$store.state.common.coinlist;
        this.searchCofig[2]['list'] = this.$store.state.common.coinlist;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('RedPacketList', redPacketListCol, redPacketListNoBtn);
    this.configs = authObj.val;
    this.configs_table = redPacketListTableCol;
    this.searchCofig = this.$util.clone(redPacketListConfig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style scope lang="scss">
.treatyAssetsContract-container {
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
