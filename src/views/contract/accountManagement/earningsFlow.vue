<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-11-07 01:43:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="coinContract-container">
    <el-row v-if="topBtn" class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" />
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
import { earningsFlowCol, earningsFlowConfig } from '@/config/column/contract';
import $api from '@/api/api';
import Precision from '@/utils/number-precision';
import activePage from '@/mixin/keepPage';
import BTwoRangeChoose from '@/components/b-two-range-choose';

export default {
  name: 'ContractAccount',
  components: {
    Btable,
    Bsearch,
    iconPage,
    BTwoRangeChoose,
  },
  data() {
    return {
      topBtn: false,
      toDay: '',
      ago: '',
      modeOfCostOptions: [
        {
          value: '1',
          label: '正常开启',
        },
        {
          value: '0',
          label: '关闭',
        },
        {
          value: '2',
          label: '多空均收',
        },
      ],
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
      formLabelWidth: '150px',
      dialogFormVisible: false, // 编辑添加币种弹窗
      centerDialogVisible: false,
      dForm: {
        id: '',
        gear: '',
        coinMarket: '',
        maximumLeverage: '',
        minPositionAmount: '',
        maxPositionAmount: '',
        minimumInitialMargin: '',
        maintenanceMarginRatio: '',
      },
      jform: {},
      formName: '新增币种',
      drules: {
        coinMarket: [{ required: true, message: '必填', trigger: 'blur' }],
        basicInterestRate: [{ required: true, message: '必填', trigger: 'blur' }],
        premiumRateMin: [{ required: true, message: '必填', trigger: 'blur' }],
        premiumRateMax: [{ required: true, message: '必填', trigger: 'blur' }],
        capitalInterestRateMin: [{ required: true, message: '必填', trigger: 'blur' }],
        capitalInterestRateMax: [{ required: true, message: '必填', trigger: 'blur' }],
        modeOfCost: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    estimate(val) {
      this.dialogFormVisible = true;
    },
    // 添加币种
    addGear() {
      this.formName = '添加档位';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['twoChoose'].resetValue();
        this.$refs['dForm'].resetFields();
        this.dForm = {
          id: '',
          coinMarket: '',
          basicInterestRate: '',
          premiumRateMin: '',
          premiumRateMax: '',
          capitalInterestRateMin: '',
          capitalInterestRateMax: '',
          modeOfCost: '',
        };
      });
    },

    // 对输入值的范围进行限制

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
      this.searchCofig[3].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        this.searchCofig[3].value = [befV, nowV];
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.coin_List.filter((v) => v['value'] == this.search_params_obj.coinMarket)[0].label;
          this.search_params_obj.coinMarket = tmpName;
        }
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
      if (this.$route.query.userId) {
        query_data.userId = this.$route.query.userId;
      } else {
        query_data.userType = 106;
      }
      this.requiredParams(this.search_params_obj);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getEarningsFlowList(query_data);
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
  created() {
    if (this.$route.query.topBtn) {
      this.topBtn = true;
    }
    if (this.$route.query.uid) {
      this.$nextTick(() => {
        this.searchCofig[0].value = this.$route.query.uid;
      });
    }
  },
  async mounted() {
    this.configs = earningsFlowCol;
    this.searchCofig = this.$util.clone(earningsFlowConfig);
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
.coinContract-container {
  padding: 4px 10px 10px 10px;
  .estimateDialog {
    .el-dialog__body {
      display: flex;
      .estimateForm {
        flex: 1;
      }
      .estimateBtn {
        margin-left: 14px;
        width: 80px;
        .el-button {
          padding: 44px 26px;
          &:nth-of-type(n + 1) {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  @media screen and(max-width: 750px) {
    .estimateDialog {
      .el-dialog__body {
        .estimateBtn {
          margin-top: 40px;
          .el-button {
            padding: 63px 26px;
            &:nth-of-type(n + 1) {
              margin-bottom: 62px;
            }
          }
        }
      }
    }
  }

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
