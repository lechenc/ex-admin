<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-12-01 15:11:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="financialStatistics-container">
    <div class="container-top">
      <Bsearch
        :dateRankDisabled="dateRankDisabled"
        :dateMonthDisabled="dateMonthDisabled"
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="true"
        @do-exportExcel="exportExcel"
        :calLoading="calLoading"
        :calTotal="true"
        @do-calTotal="calTotal"
      />
    </div>
    <div>
      <Btable @do-handle="doHandle" :listLoading="listLoading" :data="list" :configs="configs" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 详情 -->
    <el-dialog class="agentRebate-dialog" title="详情" width="600px" :visible.sync="dialogDetailVisible">
      <el-row :span="24">
        <el-col :span="6">时间:</el-col>
        <el-col :span="8">
          {{ curRow.startTime || '无' }}
        </el-col>

        <el-col style="text-align: center" :span="2"> - </el-col>

        <el-col :span="8">
          {{ curRow.endTime || '无' }}
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="6">链类型:</el-col>
        <el-col :span="8">
          {{ curRow.chainName || '无' }}
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="6">币种:</el-col>
        <el-col :span="8">
          {{ curRow.coinName || '无' }}
        </el-col>
      </el-row>

      <el-row :span="24">
        <el-col :span="6">充币数量:</el-col>
        <el-col :span="8">
          {{ curRow.depositAmount || '0' }}
        </el-col>
      </el-row>

      <el-row :span="24">
        <el-col :span="6">冷钱包提币数量:</el-col>
        <el-col :span="8">
          {{ curRow.coldWithdrawAmount || '0' }}
        </el-col>
      </el-row>

      <el-row :span="24">
        <el-col :span="6">热钱包提币数量:</el-col>
        <el-col :span="8">
          {{ curRow.hotWithdrawAmount || '0' }}
        </el-col>
      </el-row>

      <el-row :span="24">
        <el-col :span="6">总提币数量:</el-col>
        <el-col :span="8">
          {{ curRow.totalWithdrawAmount || '0' }}
        </el-col>
      </el-row>

      <el-row :span="24">
        <el-col :span="6">净充币数量:</el-col>
        <el-col :span="8">
          {{ curRow.pureDepositAmount || '0' }}
        </el-col>
      </el-row>

      <el-row :span="24">
        <el-col :span="6">归集消耗手续费:</el-col>
        <el-col :span="8">
          {{ curRow.collectCostFeeAmount || '0' }}
        </el-col>
      </el-row>

      <el-row :span="24">
        <el-col :span="6">归集冷钱包数量:</el-col>
        <el-col :span="8">
          {{ curRow.coldCollectAmount || '0' }}
        </el-col>
      </el-row>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDetailVisible = false" type="primary">我知道了</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { financialStatisticsCol, financialStatisticsConfig } from '@/config/column/financial';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'FinancialStatistics',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      calLoading: false,
      excelLoading: false, // 导出loadiing
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
      dateMonthDisabled: false,
      dateRankDisabled: false,
      dialogDetailVisible: false,
      curRow: {},
    };
  },
  methods: {
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.coinName) {
        this.$message({ type: 'error', message: '币种必须选择!', duration: 2000 });
        return;
      }
      if (!this.search_params_obj.chainName) {
        this.$message({ type: 'error', message: '链名称必须选择!', duration: 2000 });
        return;
      }
      if (this.search_params_obj.searchMonth) {
        this.search_params_obj.searchMonth = this.search_params_obj.searchMonth + '-01 00:00:00';
      }
      this.curRow = {}
      this.calLoading = true;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.dialogDetailVisible = true;
      const res = await $api.apiGetFinancialStatisticsSum(params);
      if (res) {
        this.curRow = res.data.data
      }
      this.calLoading = false;
    },
    async doHandle(data) {
      const { fn, row } = data;
      // 设置上架开关
      if (fn === 'message') {
        this.$confirm('是否通知钱包重新归集?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.apiRechargeMessage({
              txid: row.txId,
            });
            if (res) {
              this.$message({ type: 'success', message: '通知成功，请等待5-10分钟 归集程序执行，不要连续点击' });
              this.getList();
            }
          })
          .catch(() => {});
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      // if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
      //   this.search_params_obj.flag = 1;
      // }
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.searchCofig[1].value = 1;
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];

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
      console.log('this.search_params_obj',this.search_params_obj)
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        searchType:this.searchCofig[1]['value']
      };
      this.requiredParams(query_data);
      if (this.search_params_obj.searchMonth) {
        this.search_params_obj.searchMonth = this.search_params_obj.searchMonth + '-01 00:00:00';
      }
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getFinancialStatisticsList(query_data);
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
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getFinancialStatisticsList(params);
      this.excelLoading = false;
      if (res) {
        return res;
      }
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
    async getRechargeChainName() {
      const res = await $api.apiGetRechargeChainName({});
      if (res) {
        let arr = res.data.data;
        this.searchCofig[3]['list'] = arr.map((v) => {
          return {
            label: v.chainName,
            value: v.chainName,
          };
        });
      }
    },
  },
  mounted() {
    this.configs = financialStatisticsCol;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(financialStatisticsConfig);
    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[4]['list'] = this.$store.state.common.coinlist.map((v)=>{
        return {
          label:v.label,
          value:v.label,
        }
      });
    });
    this.dateMonthDisabled = true;
    this.getList();
    this.getRechargeChainName();

    this.$watch(
      function () {
        return this.searchCofig[1].value;
      },
      // 合约出入金,type=1为合约出金,type=2为合约入金
      function (newVal, oldValue) {
        if (newVal == 1) {
          this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
          this.searchCofig[2].value = '';
          this.dateMonthDisabled = true;
          this.dateRankDisabled = false;
        } else if (newVal == 2) {
          this.searchCofig[0].value = '';
          this.searchCofig[2].value = '';
          this.dateRankDisabled = true;
          this.dateMonthDisabled = false;
        }
      },
    );
  },
};
</script>
<style scope lang="scss">
.financialStatistics-container {
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
