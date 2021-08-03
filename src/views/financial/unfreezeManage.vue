<!--
 * @Author: your name
 * @Date: 2020-04-07 14:37:07
 * @LastEditTime: 2020-12-01 12:30:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\system\account.vue
 -->
<template>
  <div class="unfreezeManage-container">
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
    <!-- 调账详情，审核 -->
    <el-dialog title="冻结订单详情" :visible.sync="dialogVisible" width="650px">
      <el-form>
        <el-row>
          <el-col :span="12">
            <el-form-item label="订单号" :label-width="formLabelWidth">{{ curRow.orderId }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="子订单号" :label-width="formLabelWidth">{{ curRow.id }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="UID" :label-width="formLabelWidth">{{ curRow.uid }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="账户类型" :label-width="formLabelWidth">{{ curRow.accountType | aStatus }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="锁仓类型" :label-width="formLabelWidth">{{ curRow.orderType | oStatus }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="币种" :label-width="formLabelWidth">{{ curRow.coinName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="解冻数量" :label-width="formLabelWidth">{{ curRow.amount }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="剩余解冻数量" :label-width="formLabelWidth">{{ curRow.remainingAmount }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="解冻方式" :label-width="formLabelWidth">{{ curRow.detailsType | dStatus }}</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="解冻时间" :label-width="formLabelWidth">{{ curRow.createTime }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="解冻原因" :label-width="formLabelWidth">{{ curRow.remark }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { unfreezeManageCol, unfreezeManageColNoBtn, unfreezeManageConfig } from '@/config/column/financial';
import $api from '@/api/api';
import mMd5 from '@/utils/module_md5';
import utils from '@/utils/util';

export default {
  name: 'UnfreezeManage',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 是否有添加的权限
      btnLoading: false, // 提交loading
      delBtnLoading: false, // 删除loadinig
      listLoading: false, // 表格loading
      excelLoading: false, // 导出loadding
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      curRow: {}, // 当行数据
      dialogVisible: false,
      coinList: [], // 币种列表
      toDay: '',
      ago: '',
      isModify: false, // 是否是编辑状态
      formName: '添加账号',
      formLabelWidth: '140px',
      dataForm: [],
    };
  },
  filters: {
    dStatus(val) {
      let tmp = '';
      switch (val) {
        case 1:
          tmp = '自动释放';
          break;
        case 2:
          tmp = '手动释放';
          break;
      }
      return tmp;
    },
    aStatus(val) {
      let tmp = '';
      switch (val) {
        case 1:
          tmp = '币币账户';
          break;
      }
      return tmp;
    },
    oStatus(val) {
      let tmp = '';
      switch (val) {
        case 1:
          tmp = '星球算力冻结';
          break;
        case 2:
          tmp = '原始合伙人冻结';
          break;
        case 3:
          tmp = '私募冻结';
          break;
        case 2:
          tmp = '原始合伙人冻结';
          break;
        case 3:
          tmp = '私募冻结';
          break;
      }
      return tmp;
    },
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'detail') {
        this.dialogVisible = true;
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
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getOrderDetailList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        records.forEach(v => {
          v.amount = v.amount && (v.amount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
          v.remainingAmount = v.remainingAmount && (v.remainingAmount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
        });
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
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getOrderDetailList(params);
      this.excelLoading = false;
      return res;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('UnfreezeManage', unfreezeManageCol, unfreezeManageColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(unfreezeManageConfig);
    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[4]['list'] = this.$store.state.common.coinlist;
      this.coinList = this.$store.state.common.coinlist;
    });
    this.getList();
  },
};
</script>
<style lang="scss">
.unfreezeManage-container {
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
  .dialog-footer {
    display: flex;
    justify-content: center;
    padding: 20px 0;
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
