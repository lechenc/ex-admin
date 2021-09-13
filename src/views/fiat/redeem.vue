<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-08-05 18:37:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="recharge-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :exportExcel="btnArr.includes('excel')" @do-exportExcel="exportExcel" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <div>
        <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
      </div>
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
import { redeemCol, redeemColNoBtn, redeemConfig } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
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
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        trans: 1, //买
      };
      if (this.search_params_obj.startDate) {
        this.search_params_obj.endDate = this.formatTime(this.search_params_obj.endDate);
        this.search_params_obj.startDate = this.formatTime(this.search_params_obj.startDate);
      }
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getTradeMainList(query_data);
      if (res) {
        const { list, total, pageNum, pages } = res.data.result.pageInfo;
        this.total = +total;
        this.pages = +pages;
        this.current_page = +pageNum;
        // 只有处于待审核状态的才能点击审核操作
        list.forEach(v => {
          v['isclick'] = parseInt(v['auditStatus']) !== 4 && parseInt(v['auditStatus']) !== 7 && parseInt(v['auditStatus']) !== 8 ? false : true;
        });

        this.list = list;
        this.dataList = list;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD hh:mm:ss');
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("FiatRedeem");
    // if (authStatus === 2) {
    //   this.configs = redeemColNoBtn;
    //   this.isCURDAuth = false;
    // } else {
    //   this.configs = redeemCol;
    // }
    let authObj = this.$util.getAuthority('Redeem', redeemCol, []);
    this.btnArr = authObj.btnArr || [] || []
    this.configs = redeemCol;
    this.searchCofig = this.$util.clone(redeemConfig);
    this.getList();
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
}
</style>
