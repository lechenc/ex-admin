<template>
  <div class="lotteryList-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addLine">添加活动</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
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
import { lotteryListCol, lotteryListColNoBtn, lotteryListConfig } from '@/config/column/lottery';
import $api from '@/api/api';
export default {
  name: 'LotteryList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: false, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      labelWidth: '130px',
    };
  },
  filters: {
    userType(val) {},
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      if(fn === 'edit'){
         if(row.status != 1){
          this.$message({ message: '活动开始后不可再编辑', type: 'error' });
          return;
        }
        if(!row.activityStatus){
          this.$router.push({ path: '/front/lottery/lotteryListDetail', query: { status: fn, id: row.id } });
        }else {
          this.$message({ message: '活动必须下架之后才可编辑', type: 'error' });
        }
      }
      if (fn === 'detail') {
        this.$router.push({ path: '/front/lottery/LotteryListDetail', query: { status: fn, id: row.id } });
      }
      if (fn === 'trputon' || fn === 'trdraw') {
        const params = { id: row.id };
        // switch (fn) {
        //   case 'trputon':
        //     params.activityStatus = row.activityStatus ? 1 : 0;
        //   case 'trdraw':
        //     params.playStatus = row.playStatus ? 1 : 0;
        //   // case 'trstart':
        //   //   params.awardSwitch = row.awardSwitch ? 1 : 0;
        // }
        if(fn === 'trputon'){
          params.activityStatus = row.activityStatus ? 1 : 0;
        }else if(fn === 'trdraw'){
          params.playStatus = row.playStatus ? 1 : 0;
        }
        const res = await $api.getAccountActivityUpdate(params);
        if (res) {
          this.$message({ message: '状态更新成功', type: 'success' });
        }
        this.getList();
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 添加
    addLine() {
      this.$router.push({ path: '/front/lottery/lotteryListDetail', query: { status: 'add' } });
    },
    // 首屏表格
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getAccountActivityList(params);
      if (res) {
        const { records, total, pages, current } = res.data.data;
        const now = new Date();
        if (records.length > 0) {
          records.forEach(v => {
            v.activityStatus = !!v.activityStatus;
            v.playStatus = !!v.playStatus;
            const startTime = new Date(v.startTime);
            const endTime = new Date(v.endTime);
            const luckDrawEndTime = new Date(v.luckDrawEndTime);
            // const grantRaffleTime = new Date(v.grantRaffleTime);
            // const grantPrizeTime = new Date(v.grantPrizeTime);
            if (now < startTime) {
              v.status = 1;
            } else if (startTime < now && now < luckDrawEndTime) {
              v.status = 2;
            } else if (luckDrawEndTime < now) {
              v.status = 5;
            }
            // else if (endTime < now && now < grantRaffleTime) {
            //   v.status = 3;
            // } else if (grantRaffleTime < now && now < grantPrizeTime) {
            //   v.status = 4;
            // }
          });
        }
        this.list = records;
        this.total = +total;
        this.pages = pages;
        this.current_page = current;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        // let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        // let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        // this.searchCofig[0].value = [befV, nowV];
        // params.endTime = nowV.replace(/\//gi, '-');
        // params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('LotteryList', lotteryListCol, lotteryListColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;      

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(lotteryListConfig);
    this.getList();
  },
};
</script>

<style lang="scss" scope>
.lotteryList-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin-bottom: 20px;
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
