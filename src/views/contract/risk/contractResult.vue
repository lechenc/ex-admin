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
      <Btable :redIsshow="redIsshow" :listLoading="listLoading" :data="list" :configs="configs" />
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

    <el-dialog title="预估统计" :visible.sync="dialogFormVisible">
      <el-form ref="dForm" :model="dForm" :rules="drules">
        <el-form-item label="币对" :label-width="formLabelWidth" prop="coinId">
          <el-select disabled v-model="dForm.coinId" placeholder="" width="20%">
            <el-option v-for="(item, idx) in coin_List" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前价格" prop="markedPrice" :label-width="formLabelWidth">
          <el-input disabled type="number" v-model="dForm.markedPrice" autocomplete="off" placeholder=""></el-input>
        </el-form-item>

        <el-form-item label="预估价格" prop="price" :label-width="formLabelWidth">
          <el-input type="number" v-model="dForm.price" autocomplete="off" placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="getPrice">立即计算</el-button>
      </div>
    </el-dialog>

    <el-dialog title="计算结果" class="estimateDialog" :visible.sync="centerDialogVisible" width="40%">
      <el-form :model="jform" class="estimateForm">
        <el-form-item label="爆仓人数(人)" prop="numberStock" :label-width="formLabelWidth">
          <el-input disabled type="number" v-model="jform.numberStock" autocomplete="off" placeholder=""> </el-input>
        </el-form-item>
        <el-form-item label="爆仓资产(USDT)" prop="amountStock" :label-width="formLabelWidth">
          <el-input disabled type="number" v-model="jform.amountStock" autocomplete="off" placeholder=""> </el-input>
        </el-form-item>

        <el-form-item label="盈利人数(人)" prop="numberProfit" :label-width="formLabelWidth">
          <el-input disabled type="number" v-model="jform.numberProfit" autocomplete="off" placeholder=""> </el-input>
        </el-form-item>
        <el-form-item label="盈利资产(USDT)" prop="amountProfit" :label-width="formLabelWidth">
          <el-input disabled type="number" v-model="jform.amountProfit" autocomplete="off" placeholder=""> </el-input>
        </el-form-item>

        <el-form-item label="亏损人数(人)" prop="numberLoss" :label-width="formLabelWidth">
          <el-input disabled type="number" v-model="jform.numberLoss" autocomplete="off" placeholder=""> </el-input>
        </el-form-item>
        <el-form-item label="亏损资产(USDT)" prop="amountLoss" :label-width="formLabelWidth">
          <el-input disabled type="number" v-model="jform.amountLoss" autocomplete="off" placeholder=""> </el-input>
        </el-form-item>
      </el-form>
      <div class="estimateBtn">
        <div>
          <el-button @click="check1" type="primary">查看</el-button>
        </div>
        <div>
          <el-button @click="check2" type="primary">查看</el-button>
        </div>
        <div>
          <el-button @click="check3" type="primary">查看</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { contractResultCol, contractResultConfig } from '@/config/column/contract';
import $api from '@/api/api';
import Precision from '@/utils/number-precision';
import activePage from '@/mixin/keepPage';
import BTwoRangeChoose from '@/components/b-two-range-choose';

export default {
  name: 'ContractResult',
  components: {
    Btable,
    Bsearch,
    iconPage,
    BTwoRangeChoose,
  },
  watch: {
    dialogFormVisible(newVal) {
      if (newVal) {
        this.dForm = {
          coinId: '',
          markedPrice: '',
        };
      }
    },
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
      search_params_obj: {
        coinId: this.$route.query.coinId,
      }, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      chainArr: [], // 链列表
      coin_List: [], // 交易对列表
      formLabelWidth: '150px',
      dialogFormVisible: false, // 编辑添加币种弹窗
      centerDialogVisible: false,
      userId: [],
      dataObj: {},
      price: '',
      dForm: {
        coinId: '',
        markedPrice: '',
      },
      redIsshow: false,
      jform: {},
      formName: '新增币种',
      drules: {
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        markedPrice: [{ required: true, message: '必填', trigger: 'blur' }],
        premiumRateMin: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },

  methods: {
    getPrice() {
      this.$refs['dForm'].validate(async (valid) => {
        if (valid) {
          let tmpName = '';
          tmpName = this.coin_List.filter((v) => v['value'] == this.dForm.coinId)[0].label;
          let { price } = this.dForm;
          this.price = price;
          const query_data = {
            coinMarket: tmpName,
            price,
          };
          const res = await $api.getContractEstimateQuery(query_data);
          if (res) {
            this.centerDialogVisible = true;
            let { numberStock, numberProfit, numberLoss, amountStock, amountProfit, amountLoss } = res.data.data;
            this.dataObj = res.data.data;
            this.jform = {
              numberStock,
              numberProfit,
              numberLoss,
              amountStock,
              amountProfit,
              amountLoss,
            };
          }
        }
      });
    },
    check1() {
      this.userId = this.dataObj.numberStockUserId || [];
      this.dialogFormVisible = false;
      this.centerDialogVisible = false;
      this.redIsshow = true;
      this.getList();
    },
    check2() {
      this.userId = this.dataObj.numberProfitUserId || [];
      this.dialogFormVisible = false;
      this.centerDialogVisible = false;
      this.redIsshow = true;
      this.getList();
    },
    check3() {
      this.userId = this.dataObj.numberLossUserId || [];
      this.dialogFormVisible = false;
      this.centerDialogVisible = false;
      this.redIsshow = true;
      this.getList();
    },
    async estimate(val) {
      if (!val.coinId) {
        return this.$message.error('币对必须选择');
      }

      this.dialogFormVisible = true;
      this.dForm.coinId = val.coinId;

      const query_data = {
        coinId: val.coinId,
      };
      const res = await $api.getContractEstimatePrice(query_data);
      if (res) {
        let { coinId, markedPrice } = res.data.data;
        this.dForm = {
          coinId,
          markedPrice,
        };
      }
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
      if (data.coinId != this.$route.query.coinId) {
        this.searchCofig[2].value = this.$route.query.coinId;
        return this.$message.error('搜索币种不可改');
      }
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      if (parseFloat(data.minPositionAveragePrice) > parseFloat(data.maxPositionAveragePrice)) {
        return this.$message.error('最小值不得大于最大值');
      }
      if (parseFloat(data.minRateReturn) > parseFloat(data.maxRateReturn)) {
        return this.$message.error('最小值不得大于最大值');
      }
      this.getList();
    },
    doReset() {
      this.search_params_obj = {
        coinId: this.$route.query.coinId,
      };
      this.searchCofig.forEach((v) => {
        v['value'] = '';
        if (v.type == 'text_rank') {
          v['value'] = [];
        }
      });
      //   this.searchCofig[5].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[5].value = [
          this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
          this.$util.dateFormat(this.today, 'YYYY/MM/DD HH:mm:ss'),
        ];
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
      if (this.$route.query.userId == undefined || this.$route.query.price == undefined) {
        return this.$message.error('使用合约预估模拟器的预估统计计算才可以搜索');
      }
      this.requiredParams(this.search_params_obj);
      let msgobj;
      if (this.$route.query.userId) {
        let coinId = this.$route.query.coinId;
        let price = this.$route.query.price;
        let userId = this.$route.query.userId;
        this.searchCofig[2].value = this.$route.query.coinId;
        msgobj = { coinId, price, userId: JSON.parse(userId) };
        Object.assign(msgobj, this.search_params_obj);
        this.search_params_obj = msgobj;
      }

      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getContractEstimateList(query_data);
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
    this.configs = contractResultCol;
    this.searchCofig = this.$util.clone(contractResultConfig);
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.$store.dispatch('common/getSymbolListContract').then(() => {
      this.searchCofig[2]['list'] = this.$store.state.common.symbollistContract;
      this.coin_List = this.$store.state.common.symbollistContract;
    });

    if (this.$route.query.topBtn) {
      this.topBtn = true;
    }

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
