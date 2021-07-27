<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-12-01 17:42:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="otcOrderPay-container">
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
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { otcOrderCol, otcOrderColNoBtn, otcOrderConfig } from '@/config/column/coinPay';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'OtcOrderPay',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      calLoading: false, // 统计loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      coinList: [], // 币种列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.row = row;
      // 激活
      if (fn === 'activation') {
        this.$confirm('确定激活？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              tradeId: row.recordId,
            };
            const res = await $api.setOtcActivationNew(params);
            if (res) {
              this.$message({ message: '激活成功', type: 'success' });
              this.getList();
            }
          })
          .catch(() => {});
      }
      if (fn === 'dialog') {
        localStorage.setItem('dialogueRow',JSON.stringify(row))
        this.$router.push({ path: '/coinPay/dialogueRecordPay' });
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
    formatFloat(v) {
      return (v + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
    },
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      if (!this.search_params_obj.coinId) {
        this.$message({ type: 'error', message: '币种必须选择!', duration: 2000 });
        return;
      }
      this.calLoading = true;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getQueryAdvTradeListSum(params);
      if (res) {
        const getObj = res.data.result;
        if (getObj) {
          let coin = this.searchCofig[7]['list'].filter(v => v.value == this.search_params_obj.coinId)[0].label;
          this.$alert(
            `<p>币种：${coin}</p><p>总金额：${this.formatFloat(getObj.sumMoney)}</p><p>总数量：${this.formatFloat(
              getObj.sumAmount,
            )}</p><p>总手续费：${this.formatFloat(getObj.sumFee)}</p>`,
            '统计结果',
            {
              dangerouslyUseHTMLString: true,
            },
          ).catch(()=>{});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        tradeType:2,
        appId:3,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.queryAdvTradeListNew(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // 只有处于待审核状态的才能点击激活操作 4 7 8
        records.forEach(v => {
          v['isclick'] = parseInt(v['tradeStatus']) == 4 || parseInt(v['tradeStatus']) == 8 || parseInt(v['tradeStatus']) == 7? false : true;
        });
        this.total = +total;
        this.pages = +pages;
        this.current_page = +current;
        this.list = records;
        this.dataList = records;
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
      if (this.search_params_obj.coinName) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)) {
          let tmpName = '';
          tmpName = this.coinList.filter(v => v['value'] == this.search_params_obj.coinName)[0].label;
          this.search_params_obj.coinName = tmpName;
        }
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('OtcOrder', otcOrderCol, otcOrderColNoBtn);
    this.configs = authObj.val;
    // this.isCURDAuth = authObj.isAdd;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(otcOrderConfig);
    this.$store.dispatch('common/getFiatCoinList').then(() => {
      // this.coinList = this.$store.state.common.fiatcoinlist;
      // this.searchCofig[7]['list'] = this.$store.state.common.fiatcoinlist;
      let list = this.$store.state.common.coinlist;
      let getList = list.filter(f => f.label == 'USDT') || [];
      this.coinList = getList
      this.searchCofig[7]['list'] = getList
    });

    this.getList();
  },
};
</script>
<style scope lang="scss">
.otcOrderPay-container {
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
