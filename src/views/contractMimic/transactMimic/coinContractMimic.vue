<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-12-05 16:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="coinContract-container">
    <div class="container-btn"  >
      <el-button type="primary" v-if=" btnArr.includes('add')" size="small" @click="addCoin">添加</el-button>
      <el-button type="primary" v-if=" btnArr.includes('gearSetting')" size="small" @click="$router.push('/contractMimic/transactMimic/gearSettingMimic')"
        >档位设置</el-button
      >
      <el-button type="primary"   v-if="btnArr.includes('contractAccount')" size="small" @click="$router.push('/contractMimic/transactMimic/contractMimicAccount')"
        >资金费率设置</el-button
      >
    </div>
    <div>
      <Btable :maxHeight="'800px'" :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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
    <el-dialog :title="formName" width="900px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-form-item label="初始价" :label-width="formLabelWidth" prop="initPrice">
            <el-input type="text" v-model="cForm.initPrice" placeholder=""></el-input>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="基础币" :label-width="formLabelWidth" prop="coinId">
              <el-select v-model="cForm.coinId" placeholder="" wdith="20%">
                <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计价币" :label-width="formLabelWidth" prop="marketId">
              <el-select v-model="cForm.marketId" placeholder="" wdith="20%" >
                <el-option v-for="(item, idx) in defaultCoin" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-form-item label="面值" :label-width="formLabelWidth" prop="faceValue">
            <el-input type="number" v-model="cForm.faceValue" placeholder=""></el-input>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <!-- <el-col :span="12">
            <el-form-item label="Maker费率" :label-width="formLabelWidth" prop="makerFee">
              <el-input type="number" v-model="cForm.makerFee" autocomplete="off" placeholder="" @input="checkVal('makerFee')"></el-input>
            </el-form-item>
          </el-col> -->
          <el-col :span="12">
            <el-form-item label="手续费率" :label-width="formLabelWidth" prop="takerFee">
              <el-input v-model="cForm.takerFee" type="number" autocomplete="off" placeholder="" @input="checkVal('takerFee')"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="委托价格浮动限制" :label-width="formLabelWidth" prop="priceFloatingLimit">
              <el-input
                v-model="cForm.priceFloatingLimit"
                @input="checkVal('priceFloatingLimit')"
                autocomplete="off"
                placeholder=""
                type="number"
              >
                <div slot="append">%</div>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="价格小数位" :label-width="formLabelWidth" prop="pricePrecision">
              <el-input
                v-model="cForm.pricePrecision"
                @input="checkVal('pricePrecision', 'noDot')"
                rows="5"
                autocomplete="off"
                placeholder=""
                type="number"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="市价委托对应档位" :label-width="formLabelWidth" prop="gears">
              <el-input type="number" @input="checkVal('gears', 'noDot')" v-model="cForm.gears" autocomplete="off" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="排序" :label-width="formLabelWidth" prop="sortNo">
              <el-input type="number" @input="checkVal('sortNo', 'noDot')" v-model="cForm.sortNo" autocomplete="off" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row :span="24" v-if="cForm.id !== ''">
          <el-col :span="24">
            <el-form-item label="杠杆倍数" :label-width="formLabelWidth" prop="lever">
              <el-checkbox-group v-model="cForm.lever">
                <el-checkbox v-for="item in leverList" :label="item.value" :key="item.value">{{ item.label }}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row> -->
        <el-row :span="24" v-if="cForm.id !== ''">
          <el-col :span="6">
            <el-form-item label="是否上架" :label-width="formLabelWidth" prop="status">
              <el-switch v-model="cForm.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否交易" :label-width="formLabelWidth" prop="onDealing">
              <el-switch v-model="cForm.onDealing" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
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
import { coinContractMimicCol, coinContractMimicColNoBtn } from '@/config/column/contractMimic';
import $api from '@/api/api';
import axios from 'axios';
import activePage from '@/mixin/keepPage';
import Precision from '@/utils/number-precision';

export default {
  name: 'CoinContractMimic',
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
      coinList: [], // 币种列表
      defaultCoin: [
        {
          label: 'USDA',
          value: 18,
        },
        {
          label: 'USDT',
          value: 4,
        },
      ], // 计价币默认USDT
      formLabelWidth: '230px',
      dialogFormVisible: false, // 编辑添加币种弹窗
      leverList: [
        { label: '1X', value: '1' },
        { label: '2X', value: '2' },
        { label: '3X', value: '3' },
        { label: '5X', value: '5' },
        { label: '10X', value: '10' },
        { label: '20X', value: '20' },
        { label: '30X', value: '30' },
        { label: '50X', value: '50' },
        { label: '75X', value: '75' },
        { label: '100X', value: '100' },
      ],
      cForm: {
        id: '',
        initPrice: '',
        coinId: '',
        marketId: '',
        faceValue: '',
        // makerFee: '',
        takerFee: '',
        pricePrecision: '',
        sortNo: '',
        priceFloatingLimit: '',
        // maxLongPosition: '',
        // maxShortPosition: '',
        // quantityLimitOpenPosition: '',
        // quantityLimitClosePosition: '',
        // lever: [],
        status: '',
        onDealing: '',
        gears:""
      },
      formName: '新增币种',
      rules: {
        initPrice: [{ required: true, message: '必填', trigger: 'blur' }],
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        marketId: [{ required: true, message: '必填', trigger: 'blur' }],
        faceValue: [{ required: true, message: '必填', trigger: 'blur' }],
        // makerFee: [{ required: true, message: '必填', trigger: 'blur' }],
        takerFee: [{ required: true, message: '必填', trigger: 'blur' }],
        priceFloatingLimit: [{ required: true, message: '必填', trigger: 'blur' }],
        // maxLongPosition: [{ required: true, message: '必填', trigger: 'blur' }],
        // maxShortPosition: [{ required: true, message: '必填', trigger: 'blur' }],
        // quantityLimitOpenPosition: [{ required: true, message: '必填', trigger: 'blur' }],
        // quantityLimitClosePosition: [{ required: true, message: '必填', trigger: 'blur' }],
        pricePrecision: [{ required: true, message: '必填', trigger: 'blur' }],
        sortNo: [{ required: true, message: '必填', trigger: 'blur' }],
        gears: [{ required: true, message: '必填', trigger: 'blur' }],
        // lever: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    // 添加币种
    addCoin() {
      this.formName = '添加币种';
      this.dialogFormVisible = true;
      this.leverList = []; // 杠杆倍数置空
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields();
        this.cForm = {
          id: '',
          initPrice: '',
          coinId: '',
          marketId: '',
          faceValue: '',
          // makerFee: '',
          takerFee: '',
          pricePrecision: '',
          sortNo: '',
          priceFloatingLimit: '',
          // maxLongPosition: '',
          // maxShortPosition: '',
          // quantityLimitOpenPosition: '',
          // quantityLimitClosePosition: '',
          // lever: [],
          status: '',
          onDealing: '',
          gears:""
        };
      });
    },

    async confirmOp() {
      this.$refs['cForm'].validate(async valid => {
        if (valid) {
          let {
            id,
            // id: '',
            initPrice,
            // coinId: '',
            // marketId: '',
            faceValue,
            // makerFee,
            takerFee,
            pricePrecision,
            sortNo,
            // maxLongPosition,
            // maxShortPosition,
            // quantityLimitOpenPosition,
            // quantityLimitClosePosition,
            priceFloatingLimit,
            // lever,
            status,
            onDealing,
            // gears,
            ...repo
          } = this.cForm;
          let params = {
            initPrice: +initPrice,
            faceValue: +faceValue,
            // makerFee: +makerFee,
            takerFee: +takerFee,
            sortNo: +sortNo,
            pricePrecision: +pricePrecision,
            priceFloatingLimit: this.percentToNum(priceFloatingLimit) + '',
            // maxLongPosition: +maxLongPosition,
            // maxShortPosition: +maxShortPosition,
            // quantityLimitOpenPosition: +quantityLimitOpenPosition,
            // quantityLimitClosePosition: +quantityLimitClosePosition,
            ...repo,
          };
          id === ''
            ? params
            : Object.assign(params, {
                // lever: this.dealCheckBox(lever),
                id,
                status: status ? 1 : 0,
                onDealing: onDealing ? 1 : 0,
              });
          this.btnLoading = true;
          const res = id === '' ? await $api.getAddMarketContractcoinMarketsMock(params) : await $api.getUpdateMarketContractcoinMarketsMock(params);
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
      // 上架，交易
      if (fn === 'trputon' || fn === 'trtrade') {
        const map = {
          trputon: () => {
            return { status: row.status ? 1 : 0 };
          },
          trtrade: () => {
            return { onDealing: row.onDealing ? 1 : 0 };
          },
        };
        let params = {
          id: row.id,
        };
        Object.assign(params, map[fn]());
        const res = await $api.getUpdateMarketContractcoinMarketsMock(params);
        if (res) {
          this.$message({ message: res.data.message, type: 'success' });
        } else {
          this.getList();
        }
      }
      // 编辑币种
      if (fn === 'edit') {
        this.formName = '编辑币种';
        this.dialogFormVisible = true;

        // const leverRes = await $api.getContractPositionGearList({ coinMarket: row.coinMarket });
        // const list = leverRes.data.data.map(v => {
        //   return { label: v['maximumLeverage'] + 'X', value: v['maximumLeverage'] + '' };
        // }); // 根据币对动态对杠杆倍数列表获取
        // this.leverList = list;

        this.$nextTick(() => {
          this.$refs['cForm'].resetFields();
          let {
            id,
            initPrice,
            coinId,
            marketId,
            faceValue,
            // makerFee,
            takerFee,
            priceFloatingLimit,
            // maxLongPosition,
            // maxShortPosition,
            // quantityLimitOpenPosition,
            // quantityLimitClosePosition,
            pricePrecision,
            sortNo,
            // lever,
            status,
            onDealing,
            gears
          } = row;

          this.cForm = {
            id,
            initPrice,
            coinId,
            marketId,
            faceValue,
            // makerFee,
            takerFee,
            // maxLongPosition,
            // maxShortPosition,
            // quantityLimitOpenPosition,
            // quantityLimitClosePosition,
            pricePrecision,
            sortNo,
            // lever: lever ? (lever + '').split(',') : [],
            priceFloatingLimit: this.numToPercent(priceFloatingLimit),
            status,
            onDealing,
            gears
          };
        });
      }
    },
    // 处理多选框的数据,勾选的数据，必须用给定的倍数数组leverList去筛选一遍成员是否存在，防止存在脏数据
    dealCheckBox(val) {
      // let tmpArr = val ? (val + '').split(',') : [];
      let putArr = [];
      val.forEach(el => {
        this.leverList.forEach(v=>{
          if(Number(el) == Number(v.value)){
            putArr.push(Number(el));
          }
        })
      });
      putArr.sort((a,b)=>{
        return a - b;
      })
      return putArr.join(',');
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      if (val === 'makerFee' || val === 'takerFee') {
        this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/, '$1$2.$3'); //只能输入6个小数
      }
      if (val === 'maxLongPosition' || val === 'maxShortPosition' || val === 'quantityLimitOpenPosition' || val === 'quantityLimitClosePosition') {
        this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      }
      // 有第二个参数则是禁止小数位，必须整数
      if (nodot) {
        this.cForm[val] = this.cForm[val].replace(/[^\d]/g, '');
      }
      if (this.cForm[val] < 0) {
        this.cForm[val] = 0;
      }
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
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getListMarketContractcoinMarketsMock(query_data);
      if (res) {
        // const list = res.data.data;
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          v['status'] = v['status'] ? true : false;
          v['onDealing'] = v['onDealing'] ? true : false;
        });
        this.list = records;
        this.listLoading = false;
      }
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('CoinContractMimic', coinContractMimicCol, coinContractMimicColNoBtn);
    
    this.configs = authObj.val;
    this.btnArr = authObj.btnArr || [] || [] || [];

    this.$store.dispatch('common/getCoinList').then(() => {
      this.coinList = this.$store.state.common.coinlist;
      // 基础币固定为USDT
      // this.coinList.forEach(v => {
      //   if (v.label === 'USDT') {
      //     this.defaultCoin[0] = v;
      //   }
      // });
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
