<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-11-07 01:43:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="destroyBill-container">
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
    <!-- 添加 编辑 -->
    <el-dialog title="销账详情" width="600px" :visible.sync="dialogFormVisible">
      <el-form :model="dForm" ref="dForm">
        <!-- coinName,
            orderNo,
            amount,
            createTime, -->
        <el-row :span="24">
          <el-col :span="18">
            <el-form-item label="订单号" :label-width="formLabelWidth" prop="orderNo">
              <el-input disabled type="text" v-model="dForm.orderNo" autocomplete="off" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="18">
            <el-form-item label="币种" :label-width="formLabelWidth" prop="coinName">
              <el-input disabled type="text" v-model="dForm.coinName" autocomplete="off" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="18">
            <el-form-item label="销账数量" :label-width="formLabelWidth" prop="amount">
              <el-input disabled type="text" v-model="dForm.amount" autocomplete="off" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="18">
            <el-form-item label="销账时间" :label-width="formLabelWidth" prop="createTime">
              <el-input disabled type="text" v-model="dForm.createTime" autocomplete="off" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="18">
            <el-form-item label="备注" :label-width="formLabelWidth" prop="remark">
              <el-input rows="3"  disabled type="textarea" v-model="dForm.remark" autocomplete="off" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer centerDialog">
        <el-button type="primary" @click="dialogFormVisible = false">知道了</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { destroyBillCol, destroyBillConfig } from '@/config/column/contract';
import $api from '@/api/api';
import Precision from '@/utils/number-precision';


export default {
  name: 'ContractAccount',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      btnArr: [], // 权限按钮列表
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      chainArr: [], // 链列表
      coin_List: [], // 交易对列表
      formLabelWidth: '140px',
      dialogFormVisible: false, // 编辑添加币种弹窗
      dForm: {
        coinMarket: '',
        estimatedCapitalRate: '',
      },
      toDay: '',
      ago: '',
      formName: '编辑费率',
     
    };
  },
  
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑档位
      if (fn === 'details') {
        this.formName = '销账详情';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['dForm'].resetFields();
          let { orderNo, coinName, amount ,createTime ,remark} = row;
          
          this.dForm = {
            coinName,
            orderNo,
            amount,
            createTime,
            remark
          };
        });
        
      }
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      if (val === 'minimumInitialMargin' || val === 'maintenanceMarginRatio') {
        this.dForm[val] = (this.dForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/, '$1$2.$3');
      }
      // 有第二个参数则是禁止小数位，必须整数
      if (nodot) {
        this.dForm[val] = this.dForm[val].replace(/[^\d]/g, '');
      }
      if (this.dForm[val] < 0) {
        this.dForm[val] = 0;
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
    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = val.replace(/\%/, '');
      } else {
      }
      return Precision.divide(val, 100);
    },
    // 数字转为百分比
    numToPercent(val) {
      return Precision.times(val, 100);
    },
    getRangeVal(val) {
      // val.valid
      // val.form
    },
    formatTime(val) {
      return ~(val + "").indexOf("-") ? val : val.replace(/\//gi, "-");
    },
    // 时间格式 YYYY-MM-DD
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, "YYYY/MM/DD HH:mm:ss");
        let nowV = this.$util.dateFormat(this.toDay, "YYYY/MM/DD HH:mm:ss");
        this.searchCofig[0].value = [befV, nowV];
        params.endTime = nowV.replace(/\//gi, "-");
        params.startTime = befV.replace(/\//gi, "-");
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(
          this.search_params_obj.endTime
        );
        this.search_params_obj.startTime = this.formatTime(
          this.search_params_obj.startTime
        );
      }
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      if (this.$route.query.uid) {
        query_data.uid = this.$route.query.uid;
      }
      this.requiredParams(this.search_params_obj);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.specialReconciliation(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
      }
      this.listLoading = false;
    },
  },
  async mounted() {
    this.configs = destroyBillCol;
    this.searchCofig = this.$util.clone(destroyBillConfig);
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.$store.dispatch('common/getCoinList').then(() => {
      this.coin_List = this.$store.state.common.coinlist;
      this.searchCofig[1]['list'] = this.$store.state.common.coinlist;
    });
    this.getList();
  },
};
</script>
<style lang="scss">
.destroyBill-container {
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

  

  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
    }
  }

  .el-input-group__append {
    .el-upload-list {
      .el-upload-list__item {
        margin-top: 0;
        .el-upload-list__item-name {
          display: none;
        }
        .el-upload-list__item-status-label {
          display: none;
        }
      }
    }
  }

  // icon
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
  .el-date-editor.el-input {
    max-width: 180px;
  }
  .el-dialog__body {
    max-height: 600px;
    overflow: auto;
  }
}
</style>
