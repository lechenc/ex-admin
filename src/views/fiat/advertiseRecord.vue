<template>
  <div class="advertiseRecord-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :calLoading="calLoading" :calTotal="true" @do-calTotal="calTotal" />
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
import { advertiseRecordCol, advertiseRecordColNoBtn, advertiseRecordConfig } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';
export default {
  name: 'FiatAdvertiseRecord',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      calLoading: false, // 合计loadding
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
      coinList: [],
    };
  },
  methods: {
    // 表格里的操作
    async doHandle(data) {
      const { fn, row } = data;
      this.row = row;
      if (fn === 'detail') {
        localStorage.setItem('advertiseRecord', JSON.stringify(row));
        this.$router.push({ path: '/fiat/advertiseRecordDetail', query: { id: row.id } });
      }
      // 设置上架
      if (fn === 'switchAd') {
        let params = {
          isOnshelf: row.isOnshelf ? 1 : 0,
          id: row.id,
        };
        const res = await $api.changeOnshelfAdsNew(params);
        if (res) {
          this.$message({ message: '操作成功', type: 'success' });
        } else {
          this.getList();
        }
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
    // exportExcel() {
    //   utils.exportData.apply(this, [0]);
    // },
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
      if (!this.search_params_obj.isOnshelf && this.search_params_obj.isOnshelf != 0) {
        this.$message({ type: 'error', message: '是否上架必须选择!', duration: 2000 });
        return;
      }
      this.calLoading = true;
      const params = {};
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
     
      const res = await $api.getOtcAdvertTotal(params);

      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          let temp = `<p>币种：${this.search_params_obj.coinName}</p>`;
          if (this.search_params_obj.startTime) {
            temp +=
              `<p>时间：${this.$util.dateFormat(this.search_params_obj.startTime * 1000, 'YYYY/MM/DD').replace(/\//g, '-')}` +
              `     ` +
              `${this.$util.dateFormat(this.search_params_obj.endTime * 1000, 'YYYY/MM/DD').replace(/\//g, '-')}</p>`;
          }
          if (this.search_params_obj.advertType || this.search_params_obj.advertType == 0) {
            const tm1 = this.searchCofig[2]['list'].filter(v => v.value == this.search_params_obj.advertType)[0].label;
            temp += `<p>广告类型：${tm1}</p>`;
          }
          if (this.search_params_obj.isOnshelf || this.search_params_obj.isOnshelf == 0) {
            const tm2 = this.searchCofig[4]['list'].filter(v => v.value == this.search_params_obj.isOnshelf)[0].label;
            temp += `<p>是否上架：${tm2}</p>`;
          }
          if (this.search_params_obj.pricingMethod || this.search_params_obj.pricingMethod == 0) {
            const tm3 = this.searchCofig[5]['list'].filter(v => v.value == this.search_params_obj.pricingMethod)[0].label;
            temp += `<p>价格类型：${tm3}</p>`;
          }
          temp += `<p>广告数量：${getObj.amount}</p><p>广告剩余数量：${getObj.remainAmount}</p>`;
          this.$alert(temp, '统计结果', {
            dangerouslyUseHTMLString: true,
          }).catch(()=>{});
        }
      } else {
        this.$message({ type: 'error', message: '数据列表为空!' });
      }
      this.calLoading = false;
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        // userType: 1,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.queryAdvListNew(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = +total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          v['payList'] = this.filterPay(v['payList']);
          v['isOnshelf'] = v['isOnshelf'] ? true : false;
          v['disabled'] = v['sysStatus'] ? false : true; // 根据sysStatus1-正常,0-删除
        });
        this.list = records;
        this.listLoading = false;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    filterPay(val) {
      let resultTmp = [];
      if (!val) {
        return [];
      } else {
        if (~val.indexOf(',')) {
          val.split(',').forEach(v => {
            resultTmp.push(this.payMatch(v));
          });
        } else {
          resultTmp.push(this.payMatch(val));
        }
      }
      return resultTmp;
    },
    payMatch(key) {
      switch (key) {
        case '1':
          return '银行卡';
        case '2':
          return '支付宝';
        case '3':
          return '微信';
      }
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
    let authObj = this.$util.getAuthority('FiatAdvertiseRecord', advertiseRecordCol, advertiseRecordColNoBtn);
    this.configs = authObj.val;
    // this.isCURDAuth = authObj.isAdd;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(advertiseRecordConfig);
    this.$store.dispatch('common/getFiatCoinList').then(() => {
      this.coinList = this.$store.state.common.fiatcoinlist;
      this.searchCofig[3]['list'] = this.$store.state.common.fiatcoinlist;
    });

    this.getList();
  },
};
</script>
<style scope lang="scss">
.advertiseRecord-container {
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
