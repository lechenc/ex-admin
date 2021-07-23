<!--
 * @Author: your name
 * @Date: 2020-04-07 14:25:59
 * @LastEditTime: 2020-09-04 14:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\pairs.vue
 -->
<template>
  <div class="pairs-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="small" @click="addSymbol">添加</el-button>
    </div>
    <div>
      <Btable :actionMoreShow="true" actionMoreText="更多" :moreArr="moreArr" :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
    <!-- 添加 编辑 -->
    <el-dialog :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="symbolForm" ref="symbolForm" :rules="rules">
        <el-form-item label="coinMarketId" :label-width="formLabelWidth" prop="coinMarketId" v-show="false">
          <el-input v-model="symbolForm.coinMarketId" autocomplete="off" @input="checkVal('coinMarketId')"></el-input>
        </el-form-item>
        <el-form-item label="交易币种" :label-width="formLabelWidth" prop="coinId">
          <el-select v-model="symbolForm.coinId" placeholder="" wdith="20%">
            <el-option v-for="(item, idx) in coin_list" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定价货币" :label-width="formLabelWidth" prop="marketId">
          <el-select v-model="symbolForm.marketId" placeholder="" wdith="20%">
            <el-option v-for="(item, idx) in coin_list" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="首发价" :label-width="formLabelWidth" prop="initPrice">
          <el-input v-model="symbolForm.initPrice" autocomplete="off" type="number" @input="checkVal('initPrice')"></el-input>
        </el-form-item>
        <el-form-item label="下单档位" :label-width="formLabelWidth" prop="gears">
          <el-input v-model="symbolForm.gears" autocomplete="off" type="number" @input="checkVal('gears')"></el-input>
        </el-form-item>
        <el-form-item label="最小下单量" :label-width="formLabelWidth" prop="minTradeLimit">
          <el-input v-model="symbolForm.minTradeLimit" autocomplete="off" type="number" @input="checkVal('minTradeLimit')"></el-input>
        </el-form-item>
        <el-form-item label="最大下单量" :label-width="formLabelWidth" prop="maxTradeLimit">
          <el-input v-model="symbolForm.maxTradeLimit" autocomplete="off" type="number" @input="checkVal('maxTradeLimit')"></el-input>
        </el-form-item>
        <el-form-item label="买入费率" :label-width="formLabelWidth" prop="exRateBuy">
          <el-input v-model="symbolForm.exRateBuy" autocomplete="off" type="number" @input="checkVal('exRateBuy')"></el-input>
        </el-form-item>
        <el-form-item label="卖出费率" :label-width="formLabelWidth" prop="exRateSell">
          <el-input v-model="symbolForm.exRateSell" autocomplete="off" type="number" @input="checkVal('exRateSell')"></el-input>
        </el-form-item>
        <el-form-item label="价格小数位" :label-width="formLabelWidth" prop="pricePrecision">
          <el-input v-model="symbolForm.pricePrecision" autocomplete="off" type="number" @input="checkVal('pricePrecision')"></el-input>
        </el-form-item>
        <el-form-item label="数量小数位" :label-width="formLabelWidth" prop="amountPrecision">
          <el-input v-model="symbolForm.amountPrecision" autocomplete="off" type="number" @input="checkVal('amountPrecision')"></el-input>
        </el-form-item>
        <el-form-item label="排序" :label-width="formLabelWidth" prop="sortNo">
          <el-input v-model="symbolForm.sortNo" autocomplete="off" type="number" @input="checkVal('sortNo')"></el-input>
        </el-form-item>

        <el-form-item label="分区排序" :label-width="formLabelWidth" prop="partitionSort">
          <el-input v-model="symbolForm.partitionSort" autocomplete="off" type="number" @input="checkVal('partitionSort')"></el-input>
        </el-form-item>

        <el-form-item label="撮合引擎类型" :label-width="formLabelWidth" prop="mainStream">
          <el-select :disabled="formName == '编辑币种'" v-model="symbolForm.mainStream" placeholder="" wdith="20%">
            <el-option v-for="(item, idx) in mainStream_list" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否上架" :label-width="formLabelWidth" prop="status">
          <el-switch v-model="symbolForm.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>
        <el-form-item label="开启下单" :label-width="formLabelWidth" prop="onDealing">
          <el-switch v-model="symbolForm.onDealing" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>
        <el-form-item label="推荐至首页" :label-width="formLabelWidth" prop="onTop">
          <el-switch v-model="symbolForm.onTop" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>

        <el-form-item label="是否NFT专区" :label-width="formLabelWidth" prop="onTop">
          <el-switch v-model="symbolForm.onTop" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>
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
import { symbolCol, symbolColNoBtn, symbolConfig } from '@/config/column/symbol';
import $api from '@/api/api';

export default {
  name: 'Pairs',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      moreArr: [],
      isCURDAuth: true, // 是否有增删改查权限
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
      dialogFormVisible: false,
      symbolForm: {
        coinMarketId: '', // 交易对id
        coinId: '', // 基础币
        marketId: '', // 计价币
        initPrice: '', // 首发价
        gears: '', // 下单档位
        minTradeLimit: '', // 最小下单金额
        maxTradeLimit: '', // 最大下单金额
        exRateBuy: '', // 买入费率
        exRateSell: '', // 卖出费率
        pricePrecision: '', // 价格精度
        amountPrecision: '', // 数量精度
        sortNo: '', // 排序
        partitionSort: '', // 分区排序
        mainStream: '',
        status: false, // 上架状态
        onTop: false, // 是否置顶
        onDealing: false, // 是否下单
      },
      rules: {
        coinId: [
          {
            required: true,
            message: '必填',
            trigger: 'change',
          },
        ],
        marketId: [
          {
            required: true,
            message: '必填',
            trigger: 'change',
          },
        ],
        initPrice: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        gears: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        minTradeLimit: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        maxTradeLimit: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        exRateBuy: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        exRateSell: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        sortNo: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        pricePrecision: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        amountPrecision: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        mainStream: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
      },
      mainStream_list: [
        { label: '平台币', value: 0 },
        { label: '主流币1', value: 1 },
        { label: '主流币2', value: 2 },
      ],
      formName: '新增交易对',
      formLabelWidth: '120px',
      pairList: [], // 交易对
      coin_list: [], // 交易对下拉列表
    };
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data;
      // 设置上架开关
      if (fn === 'switchCoin') {
        let params = {
          coinMarketId: row.coinMarketId,
        };
        params.status = row.status ? 1 : 0;
        const res = await $api.editSymbol(params);
        if (res) {
          this.$message({
            message: res.data.message,
            type: 'success',
          });
        } else {
          // //console.log("editSymbol error");
          this.getList();
        }
      }
      // 下单
      if (fn === 'switchCoinOrder') {
        let params = {
          coinMarketId: row.coinMarketId,
        };
        params.onDealing = row.onDealing ? 1 : 0;
        const res = await $api.editSymbol(params);
        if (res) {
          this.$message({
            message: res.data.message,
            type: 'success',
          });
        } else {
          // //console.log("editSymbol error");
          this.getList();
        }
      }
      // 编辑币种
      if (fn === 'edit') {
        this.formName = '编辑币种';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['symbolForm'].resetFields();
          const { coinMarketId, coinId, marketId, minTradeLimit, maxTradeLimit, exRateBuy, exRateSell, sortNo, partitionSort, pricePrecision, amountPrecision, mainStream, status, onTop, onDealing, initPrice, gears } = row;
          this.symbolForm = {
            coinMarketId,
            coinId,
            marketId,
            minTradeLimit,
            maxTradeLimit,
            exRateBuy,
            exRateSell,
            sortNo,
            partitionSort,
            pricePrecision,
            amountPrecision,
            mainStream,
            status,
            onTop,
            onDealing,
            initPrice,
            gears,
          };
        });
      }
      //  一键删除K线
      if (fn === 'onekeyDelete') {
        if (!row.status || !row.onDealing) return this.$message.error('请打开上架和下单开关后再操作');
        this.$confirm(row.coinMarket + '是否一键删除K线?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.pairsOnekeyDelete({
              coinMarket: row.coinMarket,
              signInterface: 'pp.wa1992.3$5@!!__',
            });
            if (res) {
              this.$message({ type: 'success', message: '一键删除成功' });
              this.getList();
            }
          })
          .catch(() => {});
      }
      // 一键拉取K线
      if (fn === 'onekeyPull') {
        if (!row.status || !row.onDealing) return this.$message.error('请打开上架和下单开关后再操作');
        this.$confirm(row.coinMarket + '是否一键拉取K线?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.pairsOnekeyPull({
              symbol: row.coinMarket.split('/').join('').toLocaleLowerCase(),
              coinMarke: row.coinMarket,
            });
            if (res) {
              this.$message({ type: 'success', message: '一键拉取成功' });
              this.getList();
            }
          })
          .catch(() => {});
      }
      // 一键更新K线
      if (fn === 'onekeyUpdate') {
        if (!row.status || !row.onDealing) return this.$message.error('请打开上架和下单开关后再操作');
        this.$confirm(row.coinMarket + '是否一键更新K线?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.pairsOnekeyUpdate({
              coinMarket: row.coinMarket,
            });
            if (res) {
              this.$message({ type: 'success', message: '一键更新成功' });
              this.getList();
            }
          })
          .catch(() => {});
      }
    },
    // 添加交易对
    addSymbol() {
      this.formName = '新增交易对';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['symbolForm'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['symbolForm'].validate(async (valid) => {
        if (valid) {
          const { coinMarketId, status, onDealing, onTop, initPrice, ...prop } = this.symbolForm;
          const params = {
            status: status ? 1 : 0,
            onTop: onTop ? 1 : 0,
            onDealing: onDealing ? 1 : 0,
            initPrice: initPrice || 1,
            ...prop,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res =
            coinMarketId === ''
              ? await $api.addSymbol(params)
              : await $api.editSymbol({
                  coinMarketId,
                  ...params,
                });
          if (res) {
            this.$message({
              message: res.data.message,
              type: 'success',
            });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          //console.log('error submit!!');
          return false;
        }
      });
    },
    checkVal(val) {
      if (this.symbolForm[val] < 0) {
        this.symbolForm[val] = 0;
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
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getSymbolList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        const s_list = [];
        records.forEach((v) => {
          // s_list.push({label: v["coinMarket"], value: v["coinMarketId"]})
          // 状态0冻结 1正常
          v['status'] = v['status'] ? true : false;
          v['onTop'] = v['onTop'] ? true : false;
          v['onDealing'] = v['onDealing'] ? true : false;
        });
        this.list = records;
        this.listLoading = false;
      }
    },
    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getSymbolList').then(() => {
        this.searchCofig[0]['list'] = this.$store.state.common.symbollist;
      });
      // 币种获取（交易对由币种组合而成嘛）
      this.$store.dispatch('common/getCoinList').then(() => {
        this.coin_list = this.$store.state.common.coinlist;
      });
    },
  },
  async mounted() {
    
    let authObj = this.$util.getAuthority('Pairs', symbolCol, symbolColNoBtn);

    // 把actionarr 的按钮数组放到dropdown里面
    
    let idx = authObj.val.findIndex((v) => {
      return v.type == 'action';
    });
    let arr = authObj.val[idx].btnGroup;
    // 第一项是编辑,编辑不要放进去
    this.moreArr = arr.filter((v, idx) => {
      return idx != 0;
    });
    // 把除了第一项删掉
    authObj.val[idx]['btnGroup'].splice(1);
    console.log('authObj',authObj)

    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(symbolConfig);
    this.getList();
    this.getSymbolList();
  },
};
</script>

<style lang="scss" scoped>
.pairs-container {
  padding: 4px 10px 10px 10px;

  .container-top {
    margin: 10px 0;
  }

  .container-btn {
    margin: 20px 0;
  }

  .container-footer {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
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
}

/deep/ .el-dialog__body {
  max-height: 600px;
  overflow: auto;
}
</style>
