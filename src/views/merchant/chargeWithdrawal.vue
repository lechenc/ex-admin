<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-07-29 14:52:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="recharge-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addCharge">手动录单</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
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
    <el-dialog :visible.sync="dialogVisible" width="700px" title="手动录单">
      <el-form :model="chargeForm" ref="chargeForm" :rules="rules">
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinId">
          <el-select v-model="chargeForm.coinId" placeholder="" wdith="20%">
            <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="TXID" prop="text">
          <el-input type="text" placeholder="请输入" v-model="chargeForm.text"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="from地址" prop="text">
          <el-input type="text" placeholder="请输入" v-model="chargeForm.text"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="to地址" prop="text">
          <el-input type="text" placeholder="请输入" v-model="chargeForm.text"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="数量" prop="text">
          <el-input type="text" placeholder="请输入" v-model="chargeForm.text">
            <div slot="append" class="gcode">{{$variableCoin}}}</div>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false" style="margin-right:50px;">取消</el-button>
        <el-button type="primary" @click.stop="confirmDialog">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from "@/components/search/b-search";
import Btable from "@/components/table/b-table";
import { chargeWithdrawalCol, chargeWithdrawalColNoBtn, chargeWithdrawalConfig } from "@/config/column/merchant";
import $api from "@/api/api";
import utils from "@/utils/util";

export default {
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
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
      coinList: [],
      formLabelWidth: "110px",
      dialogVisible: false, // 是否显示弹窗
      chargeForm: {},
      rules:[],
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
        v["value"] = "";
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
    // 显示录单弹窗
    addCharge() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["chargeForm"].resetFields();
      });
    },
    // 提交录单
    confirmDialog(){
      this.$refs["chargeForm"].validate(async valid => {
        if (valid) {
          const {  } = this.chargeForm;
          let params = {
            isWithdraw: isWithdraw ? 1 : 0,
            isOtc: isOtc ? 1 : 0,
            isTrade: isTrade ? 1 : 0,
            isTransferOtc: isTransferOtc ? 1 : 0,
            ...repo,
          };
          const res = await $api.geManual(params);
          if (res) {
            this.$message({ message: res.data.message, type: "success" });
            this.dialogVisible = false;
            this.getList();
          }
        }
      });
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      if (this.search_params_obj.startDate) {
        this.search_params_obj.endDate = this.formatTime(this.search_params_obj.endDate);
        this.search_params_obj.startDate = this.formatTime(this.search_params_obj.startDate);
      }
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.queryRechargeWithdrawPage(params);
      if (res) {
        const { list, total, pageNum, pages } = res.data.result.pageInfo;
        this.total = +total;
        this.pages = +pages;
        this.current_page = pageNum;
        this.list = list;
        this.dataList = list;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return ~(val+"").indexOf("-") ? val : this.$util.dateFormat(val, "YYYY-MM-DD hh:mm:ss");
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("ChargeWithdrawal");
    // if (authStatus === 2) {
    //   this.configs = chargeWithdrawalColNoBtn;
    //   this.isCURDAuth = false;
    // } else {
    //   this.configs = chargeWithdrawalCol;
    // }
    this.configs = chargeWithdrawalCol;
    this.searchCofig = chargeWithdrawalConfig;
    this.$store.dispatch("common/getFiatCoinList").then(() => {
      this.searchCofig[4]["list"] = this.$store.state.common.fiatcoinlist;
      this.coinList = this.$store.state.common.fiatcoinlist;
    });
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
}
</style>
