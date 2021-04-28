<template>
  <div class="voucherExperience-container">
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { voucherExperienceCol } from '@/config/column/voucher';
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';
import utils from '@/utils/util';

export default {
  name: 'VoucherExperience',
  components: {
    Btable,
    Bsearch,
  },
  mixins: [activePage],
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
      dialogVisible: false, // 是否显示弹窗
      curRow: {}, // 当前选定行数据
      coinList: [],
      getId:'',
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      // 发放记录 grant
      // 成交记录 deal
      // 持仓记录 position
      // 平仓记录 closePosition
      if (fn === 'grant') {
        this.$router.push({ path: '/front/voucher/voucherGrant' });
      } else if (fn === 'deal') {
        this.$router.push({ path: '/contract/order/dealContract' });
      } else if (fn === 'position') {
        this.$router.push({ path: '/contract/store/positionContract' });
      } else if (fn === 'closePosition') {
        this.$router.push({ path: '/contract/store/closeContract'});
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },

    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        userType:107
      };
      if(this.getId){
        params.userId = this.getId
      }
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getExperienceDetail(params);
      if (res && res.data && res.data.data) {
        res.data.data[0].uid = '体验金'
        this.list = res.data.data;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      // if (!params.userType) {
      //   params.userType = this.earnUserType;
      // }
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   params.userType = this.earnUserType;
      // }
    },
    initFunc() {
      let authObj = this.$util.getAuthority('VoucherExperience', voucherExperienceCol, []);
      this.configs = authObj.val;

      this.$store.dispatch('common/getCoinList').then(() => {
        this.coinList = this.$store.state.common.coinlist;
      });

      let tmpId = this.$route.query.userId;
      if (tmpId) {
        this.getId = tmpId
        this.getList();
      } else {
        this.getList();
      }
    },
  },
  // mounted() {
  //   this.initFunc();
  // },
   mounted() {

    this.list = []; //委托列表
    this.configs = []; // 委托列表列配置
    this.searchCofig = []; // 搜索框配置
    this.search_params_obj = {}; // 搜索框对象
    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.total = 0; // 总条数
    this.pages = 0; // 总页数

    this.initFunc();
  },
};
</script>
<style lang="scss">
.voucherExperience-container {
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

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
</style>
