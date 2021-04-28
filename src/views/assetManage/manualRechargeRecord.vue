<template>
  <div class="manualRechargeRecord-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
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
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 调账详情，审核 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="500px">
      <el-form>
        <el-row>
          <el-col :span="18">
            <el-form-item label="UID" :label-width="formLabelWidth">{{ curRow.uid }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="订单号" :label-width="formLabelWidth">{{ curRow.relateRecdId }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="币种" :label-width="formLabelWidth">{{ curRow.coinName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="充值数量" :label-width="formLabelWidth">{{ curRow.amount }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="充值时间" :label-width="formLabelWidth">{{ curRow.createTime }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注" :label-width="formLabelWidth">{{ curRow.remark }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="middle">
        <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { manualRechargeCol, manualRechargeColNoBtn, manualRechargeConfig } from '@/config/column/assetManage';
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';
import utils from '@/utils/util';

export default {
  name: 'ManualRechargeRecord',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  mixins: [activePage],
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      calLoading: false,
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      formLabelWidth: '110px',
      curRow: {}, // 当前选定行数据
      dialogTitle: '',
      dialogVisible: false,
      form: {},
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'detail') {
        // 详情
        this.dialogTitle = '查看详情';
        this.dialogVisible = true;
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
      // 默认带上86的销账类型
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        optType: 86,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getRechargeIncomeRecord(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.dataList = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    initFunc() {
      this.configs = manualRechargeCol;

      this.searchCofig = this.$util.clone(manualRechargeConfig);
      this.$store.dispatch('common/getCoinList').then(() => {
        this.searchCofig[1]['list'] = this.$store.state.common.coinlist;
        this.coinList = this.$store.state.common.coinlist;
      });

      let tmpId = this.$route.query.coinId;
      if (tmpId) {
        this.$nextTick(() => {
          this.searchCofig[1].value = tmpId;
          this.search_params_obj = { coinId: tmpId };
          this.getList();
        });
      } else {
        this.getList();
      }
    },
  },
  // mounted() {
  //   this.initFunc();
  // },
  activated() {
    if (this.isInTags()) {
      return;
    }

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
.manualRechargeRecord-container {
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
  .middle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
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
