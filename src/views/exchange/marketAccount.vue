<template>
  <div class="marketAccount-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :calLoading="calLoading" :calTotal="true" @do-calTotal="calTotal" calText="净入金统计" />
    </div>
    <div>
      <el-table :data="list" style="width: 100%;text-align:center;" border class="now-table">
        <el-table-column prop="phone" label="账号"  width="240px"/>
        <el-table-column prop="uid" label="UID"   width="240px"/>
        <el-table-column label="资产列表" prop="coinAccountList" >
          <template slot-scope="scope">
            <div class="colline">
              <div v-for="(item, idx) in scope.row['coinAccountList']" :key="idx" class="line-col">
                <span>币种：{{ item.coinName }}</span>
                <span class="txt-left">可用数量：{{ item.amount }}</span>
                <span class="txt-left">冻结数量：{{ item.frozenAmount }}</span>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
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
import { marketAccountCol, marketAccountNoBtn, marketAccountCofig } from '@/config/column/exchange';
import $api from '@/api/api';
export default {
  name: 'marketAccount',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      listLoading: false, // 表格loading
      calLoading:false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      coinList: [],
      toDay: '',
      ago: '',
    };
  },
  methods: {
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      if (!this.search_params_obj.coinName) {
        this.$message({ type: 'error', message: '币种必须选择!', duration: 2000 });
        return;
      }
      this.calLoading = true;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.orderMarketStatistics(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(
            `<p>币种：${this.search_params_obj.coinName}</p><p>入金数量：${getObj.enterAmount}</p><p>出金数量：${
              getObj.outAmount
            }</p><p>总净流入数量：${getObj.totalAmount}</p>`,
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
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.marketUserList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          if (v.coinAccountList.length) {
            v.coinAccountList.forEach(k => {
              k.amount = (k.amount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
              k.frozenAmount = (k.frozenAmount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
            });
          }
        });
        this.list = records;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
      //   params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
      //   // 组件时间初始必须format格式
      //   this.searchCofig[0].value = [
      //     this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
      //     this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss'),
      //   ];
      // }
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
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
  },
  created() {
    this.configs = marketAccountCol;
    this.searchCofig = this.$util.clone(marketAccountCofig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[2]['list'] = this.$store.state.common.coinlist;
      this.coinList = this.$store.state.common.coinlist;
    });
    this.getList();
  },
};
</script>

<style scope lang="scss">
.marketAccount-container {
  padding: 4px 10px 10px 10px;
  .el-table.now-table {
    border-radius: 8px;
    box-shadow: 1px 2px 6px #ccc;
    td{
      padding:0 !important;
    }
    .cell {
      padding:0 !important;
      text-align: center;
      display: flex;
      // flex-direction: column;
      justify-content: center;
      align-items: center;
      > span {
        margin-left: 6px !important;
      }
      .el-tag.el-tag--info {
        margin-right: 6px;
      }
    }
  }
  .colline {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .line-col {
      width: 100%;
      display: flex;
      height:40px;
      line-height:40px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ebeef5;
      span {
        width: 50%;
        &.txt-left {
          text-align: left;
        }
      }
    }
    .line-col:last-child {
      border: none;
    }
  }
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
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        margin-right: 40px;
        font-size: 18px;
        line-height: 40px;
      }
    }
  }
}
</style>
