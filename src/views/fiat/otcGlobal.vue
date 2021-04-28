<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-29 00:13:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="otcGlobal-container">
    <div class="container-top">
      <div class="line">OTC币种参数设置 <span>在币种设置界面开启可法币交易，即可在此页面显示对应币种</span></div>
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addOtc">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!--
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
    -->

    <!-- 修改弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="800px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <!-- <el-card class="box-card"> -->
        <div class="box-card-con">
          <el-form-item label="币种" :label-width="labelWidth" prop="coinId">
            <el-select v-model="form.coinId" clearable placeholder="请选择" size="medium" :disabled="!isAddStatus">
              <el-option v-for="(item, i) in coinList" :key="i" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="币种排序" :label-width="labelWidth" prop="position">
            <el-input type="number" placeholder="请输入" v-model="form.position" style="width: 340px;" @input="checkValInteger('position')">
            </el-input>
          </el-form-item>
          <el-form-item label="小数位" :label-width="labelWidth" prop="decimalPlaces">
            <el-col :span="12">
              <el-input type="number" size="medium" placeholder="请输入" v-model="form.decimalPlaces" @input="checkValInteger('decimalPlaces')">
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="放行时间（分钟）" :label-width="labelWidth" prop="releaseTime">
            <el-col :span="12">
              <el-input type="number" size="medium" placeholder="请输入" v-model="form.releaseTime" @input="checkValInteger('releaseTime')">
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="订单日取消数量上限" :label-width="labelWidth" prop="dailyCancellationQuantity">
            <el-col :span="12">
              <el-input
                type="number"
                size="medium"
                placeholder="请输入"
                v-model="form.dailyCancellationQuantity"
                @input="checkValInteger('dailyCancellationQuantity')"
              >
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="广告费率" :label-width="labelWidth" prop="fee">
            <el-col :span="12">
              <el-input disabled type="text" size="medium" placeholder="请输入" v-model="form.fee" @input="checkValPercent('fee')">
                <div slot="append">%</div>
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="单笔交易限额" :label-width="labelWidth" :required="true">
            <el-col :span="10">
              <el-input type="text" size="medium" placeholder="请输入" v-model="form.singleMinAmount" @input="checkVal('singleMinAmount')">
                <div slot="append">CNY</div>
              </el-input>
            </el-col>
            <el-col :span="1" style="text-align: center;">
              ~
            </el-col>
            <el-col :span="10">
              <el-input type="text" size="medium" placeholder="请输入" v-model="form.singleMaxAmount" @input="checkVal('singleMaxAmount')">
                <div slot="append">CNY</div>
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="订单付款时间" :label-width="labelWidth" prop="payTimeout">
            <el-input type="number" placeholder="请输入分钟数" v-model="form.payTimeout" @input="checkVal('payTimeout')" style="width: 340px;">
            </el-input>
          </el-form-item>
          <el-form-item label="保证金数量" :label-width="labelWidth" prop="depositAmount">
            <el-input type="number" placeholder="请输入" v-model="form.depositAmount" @input="checkVal('depositAmount')" style="width: 340px;">
            </el-input>
          </el-form-item>
          <el-form-item label="保证金退还天数" :label-width="labelWidth" prop="depositDay">
            <el-input type="number" placeholder="请输入" v-model="form.depositDay" @input="checkValInteger('depositDay')" style="width: 340px;">
            </el-input>
          </el-form-item>
          <el-form-item label="是否启用保证金" :label-width="labelWidth" prop="isOtcDeposit">
            <el-switch v-model="form.isOtcDeposit" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </el-form-item>
          <el-form-item label="是否启用法币交易" :label-width="labelWidth" prop="isOtc">
            <el-switch v-model="form.isOtc" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </el-form-item>
        </div>
        <!-- </el-card> -->
      </el-form>

      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmDialog">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { otcGlobalCol, otcGlobalColNoBtn } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'FiatOtcGlobal',
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      coinList: [],
      dialogVisible: false, // 是否显示弹出框
      labelWidth: '150px',
      isAddStatus: false, // 是否处于添加状态还是编辑状态
      title: 'OTC币种参数设置',
      // 修改弹出框内的表单
      form: {
        coinId: '',
        position: '',
        fee: 0,
        singleMinAmount: '',
        singleMaxAmount: '',
        payTimeout: '',
        depositAmount: '',
        depositDay: '',
        isOtc: '',
        isOtcDeposit: '',
        decimalPlaces: '',
        releaseTime: '',
        dailyCancellationQuantity: '',
      },
      rules: {
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        position: [{ required: true, message: '必填', trigger: 'blur' }],
        decimalPlaces: [{ required: true, message: '必填', trigger: 'blur' }],
        fee: [{ required: true, message: '必填', trigger: 'blur' }],
        singleMinAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        singleMaxAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        payTimeout: [{ required: true, message: '必填', trigger: 'blur' }],
        depositAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        depositDay: [{ required: true, message: '必填', trigger: 'blur' }],
        releaseTime: [{ required: true, message: '必填', trigger: 'blur' }],
        dailyCancellationQuantity: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  // 目前写死为CNY，不用动态计算币种
  // computed: {
  //   // 当前币种名称
  //   coinNameCur() {
  //     if (!this.coinList.length || !this.form.coinId) return '';
  //     const tmp = this.coinList.filter(v => v.value === this.form.coinId);
  //     if (tmp.length) {
  //       return tmp[0].label;
  //     }
  //     return '';
  //   },
  // },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.row = row;
      if (fn === 'edit') {
        this.isAddStatus = false;
        this.title = 'OTC币种参数编辑';
        this.dialogVisible = true;
        this.$nextTick(() => {
          const {
            releaseTime,
            dailyCancellationQuantity,
            coinId,
            position,
            fee,
            decimalPlaces,
            singleMinAmount,
            singleMaxAmount,
            payTimeout,
            depositAmount,
            depositDay,
            isOtc,
            isOtcDeposit,
          } = row;
          this.form = {
            coinId: coinId,
            position: position,
            decimalPlaces: decimalPlaces,
            fee: (fee + '').replace(/\%/, ''),
            singleMinAmount: singleMinAmount,
            singleMaxAmount: singleMaxAmount,
            payTimeout: payTimeout,
            depositAmount: depositAmount,
            depositDay: depositDay,
            isOtc: isOtc,
            isOtcDeposit: isOtcDeposit,
            releaseTime: releaseTime,
            dailyCancellationQuantity: dailyCancellationQuantity,
          };
          this.$refs['form'].resetFields();
        });
      }
      if (fn === 'trstart' || fn === 'trputon' || fn === 'trdraw') {
        let params = {
          coinId: this.row.coinId,
        };
        // 法币
        if (fn === 'trstart') {
          params.isOtc = this.row.isOtc ? 1 : 0;
        }
        // 是否启用保证金
        if (fn === 'trputon') {
          params.isOtcDeposit = this.row.isOtcDeposit ? 1 : 0;
        }
        //是否开启TP交易
        if (fn === 'trdraw') {
          params.isTp = this.row.isTp ? 1 : 0;
        }
        const res = await $api.otcCoinGlobalSetNew(params);
        if (res) {
          this.$message({ message: '切换成功', type: 'success' });
          this.getList();
        }
      }
    },
    // 提交修改表单
    confirmDialog() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const {
            coinId,
            isOtc,
            isOtcDeposit,
            singleMinAmount,
            singleMaxAmount,
            payTimeout,
            depositAmount,
            depositDay,
            position,
            decimalPlaces,
            fee,
            releaseTime,
            dailyCancellationQuantity,
            ...repo
          } = this.form;
          let params = {
            coinId,
            isOtc: isOtc ? 1 : 0,
            isOtcDeposit: isOtcDeposit ? 1 : 0,
            position: +position,
            decimalPlaces: +decimalPlaces,
            singleMinAmount: +singleMinAmount,
            singleMaxAmount: +singleMaxAmount,
            payTimeout: +payTimeout,
            depositAmount: +depositAmount,
            depositDay: +depositDay,
            fee: (fee + '').replace(/\%/, ''),
            releaseTime: releaseTime,
            dailyCancellationQuantity: dailyCancellationQuantity,
            ...repo,
          };
          if (this.isAddStatus) {
            const tmpName = this.coinList.filter(v => v.value === coinId);
            if (tmpName.length) {
              params.coinName = tmpName[0].label;
            } else {
              this.$message({ message: '币种查找失败', type: 'error' });
              return;
            }
          }
          const res = this.isAddStatus ? await $api.setoOtcAddPay(params) : await $api.otcCoinGlobalSetNew(params);
          if (res) {
            let txt = this.isAddStatus ? '新增成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
        }
      });
    },
    addOtc() {
      this.isAddStatus = true;
      this.dialogVisible = true;
      this.title = 'OTC币种参数添加';
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.form = {
          coinId: '',
          position: '',
          decimalPlaces: '',
          fee: 0,
          singleMinAmount: '',
          singleMaxAmount: '',
          payTimeout: '',
          depositAmount: '',
          depositDay: '',
          isOtc: false,
          isOtcDeposit: false,
          releaseTime: '',
          dailyCancellationQuantity: '',
        };
      });
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
    checkValInteger(val) {
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
      // if(this.form[val] && ~this.form[val].indexOf('.')){
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
    },
    checkValPercent(val) {
      if (this.form[val] && ~this.form[val].indexOf('%')) {
        this.form[val] = (this.form[val] + '').replace(/\%/, '');
      }
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // 控制输入的范围
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.otcCoinGlobalSetListNew(query_data);
      if (res) {
        let tmp = (res.data.data && res.data.data.records) || [];
        if (tmp && tmp.length > 0) {
          tmp.forEach(v => {
            v['isOtc'] = v['isOtc'] == 0 ? false : true;
            v['isOtcDeposit'] = v['isOtcDeposit'] == 0 ? false : true;
            v['isTp'] = v['isTp'] == 0 ? false : true;
          });
        }
        this.list = tmp;
        this.listLoading = false;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('FiatOtcGlobal', otcGlobalCol, otcGlobalColNoBtn);
    this.configs = authObj.val;

    this.$store.dispatch('common/getCoinList').then(() => {
      this.coinList = this.$store.state.common.coinlist;
    });

    this.getList();
  },
};
</script>
<style scope lang="scss">
.otcGlobal-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 15px 0;
    .line {
      font-size: 18px;
      font-weight: 500;
      color: #333;
      span {
        font-size: 16px;
        color: #606266;
      }
    }
    .line::before {
      content: '';
      border-left: 5px solid #03a7f0;
      margin-right: 10px;
    }
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
  .container-btn {
    margin: 20px 0;
  }
}
</style>
