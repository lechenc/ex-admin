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
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn">
      <el-button type="primary" size="small" @click="addGear">添加风险等级 </el-button>
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
    <el-dialog :title="formName" width="670px" :visible.sync="dialogFormVisible">
      <el-form :model="dForm" ref="dForm" :rules="drules">
        <el-row :span="24">
          <el-form-item label="币对" :label-width="formLabelWidth" prop="coinMarket">
            <el-select v-model="dForm.coinMarket" placeholder="" width="20%">
              <el-option v-for="(item, idx) in coin_List" :key="idx" :label="item.label" :value="item.label"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-form-item label="风险梯度等级" :label-width="formLabelWidth" prop="riskGradientLevel">
            <el-input type="text" v-model="dForm.riskGradientLevel" autocomplete="off" placeholder=""></el-input>
          </el-form-item>
        </el-row>

        <b-two-range-choose
          v-if="true"
          ref="twoChoose"
          :labelWidth="formLabelWidth"
          labelWords="风险梯度区间"
          :getVal1.sync="dForm.gradientPriceStart"
          :getVal2.sync="dForm.gradientPriceEnd"
          :isdisabled="false"
          @handler="getRangeVal"
        ></b-two-range-choose>

        <el-row :span="24">
          <el-form-item label="平仓允许成交比例" :label-width="formLabelWidth" prop="closePositionAllowRatio">
            <el-input
              type="number"
              v-model="dForm.closePositionAllowRatio"
              autocomplete="off"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="是否启用宕机机制" :label-width="formLabelWidth" prop="downSwitch">
            <el-switch v-model="dForm.downSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { riskLevelCol, riskLevelConfig } from '@/config/column/contract';
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
    const numberReg = /^(0|0(\.\d{1,8})?)$/;
    const validateNumber = (rule, value, callback) => {
      if (!numberReg.test(value)) {
        callback(new Error(rule.message));
      } else {
        callback();
      }
    };
    return {
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
      dForm: {
        id: '',
        coinMarket: '',
        riskGradientLevel: '',
        gradientPriceStart: '',
        gradientPriceEnd: '',
        closePositionAllowRatio: '',
        downSwitch: false,
      },
      formName: '新增币种',
      drules: {
        coinMarket: [{ required: true, message: '必填', trigger: 'blur' }],
        riskGradientLevel: [{ required: true, message: '必填', trigger: 'blur' }],
        gradientPriceStart: [{ required: true, message: '必填', trigger: 'blur' }],
        gradientPriceEnd: [{ required: true, message: '必填', trigger: 'blur' }],
        closePositionAllowRatio: [
          { required: true, message: '必填', trigger: 'blur' },
          {
            validator: validateNumber,
            message: '请输入0~1以下的数字,最多8位小数',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    addGear() {
      this.formName = '添加风险等级';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['twoChoose'].resetValue();
        this.$refs['dForm'].resetFields();
        this.dForm = {
          coinMarket: '',
          riskGradientLevel: '',
          gradientPriceStart: '',
          gradientPriceEnd: '',
          closePositionAllowRatio: '',
          downSwitch: false,
        };
      });
    },

    async confirmOp() {
      this.$refs['dForm'].validate(async (valid) => {
        if (valid) {
          let { id, ...repo } = this.dForm;
          let params = {
            ...repo,
          };
          if (Number(params.gradientPriceStart) > Number(params.gradientPriceEnd)) {
            return this.$message.error('最小值不得大于最大值');
          }
          params.coinId = this.coin_List.filter((v) => v['label'] == this.dForm.coinMarket)[0].value;
          params.gradientPriceStart = Number(params.gradientPriceStart);
          params.gradientPriceEnd = Number(params.gradientPriceEnd);
          params.downSwitch = this.dForm.downSwitch ? 1 : 0;
          id === '' ? params : Object.assign(params, { id });
          this.btnLoading = true;
          const res = id == '' || id == undefined ? await $api.addRiskLevel(params) : await $api.editRiskLevel(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑档位
      if (fn === 'edit') {
        this.formName = '编辑风险等级';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['dForm'].resetFields();
          let { id, coinMarket, riskGradientLevel, gradientPriceStart, gradientPriceEnd, closePositionAllowRatio, downSwitch } = row;
          this.dForm = {
            id,
            coinMarket,
            riskGradientLevel,
            gradientPriceStart,
            gradientPriceEnd,
            closePositionAllowRatio,
            downSwitch: downSwitch == 1 ? true : false,
          };
        });
      }
      if (fn === 'trstart') {
        let params = {
          id: row.id,
          coinMarket: row.coinMarket,
        };
        const res = await $api.editContractPositionGear(params);
        if (res) {
          this.$message({ message: '切换成功', type: 'success' });
          this.getList();
        } else {
          this.getList();
        }
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
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
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
      console.log('asd');
    },
    requiredParams(params) {
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
      this.requiredParams(this.search_params_obj);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getRiskLevelList(query_data);
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
    this.configs = riskLevelCol;
    this.searchCofig = this.$util.clone(riskLevelConfig);

    this.$store.dispatch('common/getSymbolListContract').then(() => {
      this.searchCofig[0]['list'] = this.$store.state.common.symbollistContract;
      this.coin_List = this.$store.state.common.symbollistContract;
    });

    this.getList();
  },
};
</script>
<style lang="scss">
.coinContract-container {
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
