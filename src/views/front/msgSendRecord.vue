<template>
  <div class="msgSendRecord-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :excelLoading="excelLoading" :exportExcel="true" @do-exportExcel="exportExcel" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { msgSendRecordCol, msgSendRecordConfig } from '@/config/column/front';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'MsgSendRecord',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
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

      coinList: [], //币种列表
    };
  },
  methods: {
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.apiGetMsgSendRecordList(params);
      this.excelLoading = false;
      if (res) {
        return res;
      }
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      if (!this.search_params_obj.messageType) {
        return this.$message.error('请选择发送类型');
      }
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.searchCofig[2].value = 1;
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
        messageType: this.searchCofig[2]['value'],
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.apiGetMsgSendRecordList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : val.replace(/\//gi, '-');
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
      if (this.search_params_obj.coinName) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)) {
          let tmpName = '';
          tmpName = this.coinList.filter((v) => v['value'] == this.search_params_obj.coinName)[0].label;
          this.search_params_obj.coinName = tmpName;
        }
      }
    },
  },

  mounted() {
    this.configs = msgSendRecordCol;
    this.searchCofig = this.$util.clone(msgSendRecordConfig);

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();

    this.$watch(
      function () {
        return this.searchCofig[2].value;
      },
      // 合约出入金,type=1为合约出金,type=2为合约入金
      function (newVal, oldValue) {
        if (newVal == 1) {
          this.searchCofig[5]['value'] = '';
          this.searchCofig[5]['list'] = [
            { label: '摩杜云', value: '1' },
            { label: '美联软通', value: '2' },
            { label: '网易网盾', value: '3' },
          ];
        } else if (newVal == 2) {
          this.searchCofig[5]['value'] = '';
          this.searchCofig[5]['list'] = [
            { label: '摩杜云', value: '1' },
            { label: 'Umail ', value: '2' },
            { label: 'Spread', value: '3' },
            { label: '阿里云', value: '4' },
          ];
        } else {
          this.searchCofig[5]['value'] = '';
          this.searchCofig[5]['list'] = [
            { label: '摩杜云', value: '1' },
            { label: '美联软通', value: '2' },
            { label: '网易网盾', value: '3' },
          ];
        }
      },
    );
  },
};
</script>
<style scope lang="scss">
.msgSendRecord-container {
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
