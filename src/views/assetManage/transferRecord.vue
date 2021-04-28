<template>
  <div class="transferRecord-container">
    <el-row v-if="topBtn" class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="true"
        @do-exportExcel="exportExcel"
      />
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

    <!-- 详情-->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="500px">
      <el-form>
        <el-row>
          <el-col :span="24">
            <el-form-item label="订单号" :label-width="formLabelWidth">{{ curRow.id }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="币种" :label-width="formLabelWidth">{{ curRow.coinName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="数量" :label-width="formLabelWidth">{{ curRow.amount }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="转出账户uid" :label-width="formLabelWidth">{{ curRow.fromUid }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="转出账户" :label-width="formLabelWidth">{{ curRow.fromUserTypeName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="接收账户uid" :label-width="formLabelWidth">{{ curRow.toUid }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="接收账户" :label-width="formLabelWidth">{{ curRow.toUserTypeName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="操作人" :label-width="formLabelWidth">{{ curRow.operateUsername }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="时间" :label-width="formLabelWidth">{{ curRow.createTime }}</el-form-item>
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
import { transferRecordCol, transferRecordColNoBtn, transferRecordConfig } from '@/config/column/assetManage';
import $api from '@/api/api';
import utils from '@/utils/util';
import activePage from '@/mixin/keepPage';

export default {
  name: 'TransferRecord',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  mixins: [activePage],
  data() {
    return {
      topBtn: false,
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      excelLoading: false, // 导出loadding
      excelTitle: '划转记录列表',
      coinList: [],
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
      formLabelWidth: '100px',
      curRow: {}, // 当前选定行数据
      dialogTitle: '',
      dialogVisible: false,
    };
  },
  methods: {
    async doHandle(data) {
      console.log(data);
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
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getAssetUserTransferPage(params);
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
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        this.searchCofig[0].value = [befV, nowV];
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    initFunc() {
      let authObj = this.$util.getAuthority('TransferRecord', transferRecordCol, transferRecordColNoBtn);
      this.configs = authObj.val;
      //( 此页面getList有关于configs 的额外逻辑 //  recordStatus为0代表有未完成的，则要显示操作列，否则不显示)

      // 初始化今天，之前的时间
      this.toDay = this.$util.diyTime('toDay');
      this.ago = this.$util.diyTime('ago');

      this.searchCofig = this.$util.clone(transferRecordConfig);

      this.$store.dispatch('common/getCoinList').then(() => {
        this.coinList = this.$store.state.common.coinlist;
        this.searchCofig[3].list = this.$store.state.common.coinlist;
      });

      let tmpId = this.$route.query.uid;
      if (tmpId) {
        this.searchCofig[1].value = tmpId;
        this.search_params_obj = { uid: tmpId };
        this.getList();
      } else {
        this.getList();
      }
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getAssetUserTransferPage(params);
      this.excelLoading = false;
      return res;
      //     const aLink = document.createElement("a");
      //     let blob = new Blob([res.data], {type: "application/vnd.ms-excel"})
      //     aLink.href = URL.createObjectURL(blob)
      //     aLink.setAttribute('download', '哈哈哈哈' + '.xlsx') // 设置下载文件名称
      //     aLink.click()
    },
  },
  activated() {
    if (this.$route.query.topBtn) {
      this.topBtn = true;
    }
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
  created() {
    if (this.$route.query.topBtn) {
      this.topBtn = true;
    }
  },
};
</script>
<style lang="scss">
.transferRecord-container {
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
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
