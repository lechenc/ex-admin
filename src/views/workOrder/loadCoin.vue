<!--
 * @Author: your name
 * @Date: 2020-04-27 14:59:36
 * @LastEditTime: 2020-12-28 11:01:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\extract.vue
 -->

<template>
  <div class="loadCoin-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 审核通过弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="760px" :title="reviewTitle">
      <el-form :model="reviewForm" ref="reviewForm" :rules="rules">
        <el-row>
          <el-col :span="12"
            ><el-form-item label="币种名称" :label-width="formLabelWidth">{{ handleData.chineseDesc }}</el-form-item></el-col
          >
          <el-col :span="12"
            ><el-form-item label="英文简称" :label-width="formLabelWidth">{{ handleData.coinName }}</el-form-item></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="24"
            ><el-form-item label="发行时间" :label-width="formLabelWidth">{{ handleData.createTime }}</el-form-item></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="当前价格" :label-width="formLabelWidth">{{ handleData.currentPrice }}</el-form-item></el-col
          >
          <el-col :span="12">
            <el-form-item label="发行价格" :label-width="formLabelWidth">{{ handleData.issuePrice }}</el-form-item></el-col
          >
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="官网地址" :label-width="formLabelWidth">{{ handleData.officialWebsite }}</el-form-item></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="代币总量" :label-width="formLabelWidth">{{ handleData.totalIssuance }}</el-form-item></el-col
          >
          <el-col :span="12">
            <el-form-item label="代币流通量" :label-width="formLabelWidth">{{ handleData.totalCirculation }}</el-form-item></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="区块浏览器" :label-width="formLabelWidth">{{ handleData.blockchainBrower }}</el-form-item></el-col
          >
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="是否首次发币" :label-width="formLabelWidth">{{ handleData.isFirstIssue | isTrueStatus }}</el-form-item></el-col
          >
          <el-col :span="12">
            <el-form-item label="是否ERC20代币" :label-width="formLabelWidth">{{ handleData.isErc20 | isTrueStatus }}</el-form-item></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="合约地址" :label-width="formLabelWidth">{{ handleData.contractAddress }}</el-form-item></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="白皮书查看地址" :label-width="formLabelWidth">{{ handleData.whitePaper }}</el-form-item></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="期望开通交易对" :label-width="formLabelWidth">{{ handleData.coinMarket }}</el-form-item></el-col
          >
          <el-col :span="12">
            <el-form-item label="上币对接人手机号码" :label-width="formLabelWidth">{{ handleData.phone }}</el-form-item></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="对接人邮箱" :label-width="formLabelWidth">{{ handleData.email }}</el-form-item></el-col
          >
          <el-col :span="12">
            <el-form-item label="对接人微信" :label-width="formLabelWidth">{{ handleData.wechat }}</el-form-item></el-col
          >
        </el-row>
        <!-- <el-row>
          <el-col :span="12">
            <el-form-item label="对接人Telegram" :label-width="formLabelWidth">{{ handleData.fee }}</el-form-item></el-col
          >
        </el-row> -->

        <el-form-item label="备注内容" :label-width="formLabelWidth" v-if="handleStatus === 'detail'">{{ handleData.remark }}</el-form-item>
        <el-form-item label="跟进状态" :label-width="formLabelWidth" v-if="handleStatus === 'detail'">{{ handleData.status | fStatus }}</el-form-item>

        <template v-if="handleStatus === 'edit'">
          <el-form-item label="备注内容" prop="remark" :label-width="formLabelWidth">
            <el-input type="textarea" :rows="3" v-model="reviewForm.remark" size="medium"></el-input>
          </el-form-item>
        </template>
        <template v-if="handleStatus === 'edit'">
          <el-form-item label="跟进状态" :label-width="formLabelWidth" prop="status">
            <el-select v-model="reviewForm.status" placeholder="请选择奖励名称" style="width: 180px">
              <el-option v-for="(item, index) in statusList" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmReview" :loading="btnLoading">{{ confirmText }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import vueQr from 'vue-qr';
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { loadCoinCol, loadCoinColNoBtn, loadCoinConfig } from '@/config/column/workOrder';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'LoadCoin',
  components: {
    Btable,
    Bsearch,
    vueQr,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      isModify: false,
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      toDay: '',
      ago: '',
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      formLabelWidth: '140px',
      handleStatus: '', // 当前执行的审核或驳回状态
      handleData: {}, // 当前执行操作的数据
      dialogVisible: false, // 是否显示审核弹出框
      confirmText: '',
      statusList: [{ label: '待处理', value: 0 }, { label: '处理中 ', value: 1 }, { label: '处理完成', value: 2 }],
      reviewTitle: '',
      reviewForm: {
        id: '',
        remark: '',
        status: '',
      },
      rules: {
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
        status: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  filters: {
    isTrueStatus(val) {
      let tmp = '';
      switch (val) {
        case 0:
          tmp = '不是';
          break;
        case 1:
          tmp = '是';
          break;
      }
      return tmp;
    },
    fStatus(val) {
      let tmp = '';
      switch (val) {
        case 0:
          tmp = '待处理';
          break;
        case 1:
          tmp = '处理中';
          break;
        case 2:
          tmp = '处理完成';
          break;
      }
      return tmp;
    },
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.handleStatus = fn;
      this.handleData = row;
      if (fn === 'edit') {
        this.reviewTitle = '上币申请编辑';
        this.confirmText = '确定';
        this.openReviewDialog();
      } else if (fn === 'detail') {
        this.reviewTitle = '上币申请详情';
        this.confirmText = '知道了';
        this.openReviewDialog();
      }
    },
    // 打开详情弹窗(弹框里面部分内容显示还是隐藏由html部分v-if控制)
    openReviewDialog() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs['reviewForm'].resetFields();
        if (this.handleStatus == 'detail') {
          this.reviewForm = {
            id: '',
            remark: '',
            status: '',
          };
        } else {
          this.reviewForm = {
            id: this.handleData.id,
            remark: this.handleData.remark,
            status: this.handleData.status,
          };
        }
      });
    },
    // 详情弹出框 点击  确定
    async confirmReview() {
      // 详情
      if (this.handleStatus === 'detail') {
        this.dialogVisible = false;
        return;
      }
      // 当时当处于 审核状态
      this.$refs['reviewForm'].validate(async valid => {
        if (valid) {
          let params = {
            status: +this.reviewForm.status,
            remark: this.reviewForm.remark,
            id: this.handleData.id,
          };
          this.btnLoading = true;
          const res = await $api.getCurrencyOnlineStatus(params);
          if (res) {
            this.$message({
              message: '操作成功',
              type: 'success',
            });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
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
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getCurrencyOnline(query_data);
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
  },
  mounted() {
    let authObj = this.$util.getAuthority('LoadCoin', loadCoinCol, loadCoinColNoBtn);
    this.configs = authObj.val;

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(loadCoinConfig);
    // this.$store.dispatch('common/getCoinList').then(() => {
    //   this.searchCofig[2]['list'] = this.$store.state.common.coinlist;
    // });
    this.getList();
  },
};
</script>
<style scope lang="scss">
.loadCoin-container {
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
  .inner-footer {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
}
</style>
