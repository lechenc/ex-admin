<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-11-06 11:51:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="setting-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="small" @click="addCoin">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="920px" :visible.sync="dialogFormVisible">
      <el-form :model="coinForm" ref="coinForm" :rules="rules">
        <el-row :span="24" v-show="false">
          <el-col :span="12">
            <el-form-item label="coin" :label-width="formLabelWidth" prop="coinId">
              <el-input v-model="coinForm.coinId" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="id" :label-width="formLabelWidth" prop="id">
              <el-input v-model="coinForm.id" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="币种简称" :label-width="formLabelWidth" prop="coinName">
              <el-input v-model="coinForm.coinName" autocomplete="off" placeholder="币种简称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="币种全称" :label-width="formLabelWidth" prop="englishDesc">
              <el-input v-model="coinForm.englishDesc" autocomplete="off" placeholder="币种全称"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="币种中文" :label-width="formLabelWidth" prop="chineseDesc">
              <el-input v-model="coinForm.chineseDesc" autocomplete="off" placeholder="币种中文"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="发行价" :label-width="formLabelWidth" prop="issuePrice">
              <el-input v-model="coinForm.issuePrice" type="number" autocomplete="off" placeholder="发行价" @input="checkVal('issuePrice')"> <div slot="append">$</div></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="币种总量" :label-width="formLabelWidth" prop="totalIssuance">
              <el-input v-model="coinForm.totalIssuance" type="number" autocomplete="off" placeholder="发行总量" @input="checkVal('totalIssuance')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="流通量" :label-width="formLabelWidth" prop="totalCirculation">
              <el-input v-model="coinForm.totalCirculation" type="number" autocomplete="off" placeholder="流通量" @input="checkVal('totalCirculation')"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="白皮书" :label-width="formLabelWidth" prop="whitePaper">
              <el-input v-model="coinForm.whitePaper" autocomplete="off" placeholder="白皮书"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="发行时间" :label-width="formLabelWidth" prop="publishTime">
              <el-date-picker v-model="coinForm.publishTime" type="datetime" placeholder="选择日期时间"> </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="币种介绍" :label-width="formLabelWidth" prop="coinIntroduction">
              <el-input v-model="coinForm.coinIntroduction" rows="5" autocomplete="off" placeholder="请输入中文币种介绍" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="币种英文介绍" :label-width="formLabelWidth" prop="coinIntroductionEnglish">
              <el-input v-model="coinForm.coinIntroductionEnglish" autocomplete="off" placeholder="请输入英文币种介绍" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="官网" :label-width="formLabelWidth" prop="officialWebsite">
              <el-input v-model="coinForm.officialWebsite" autocomplete="off" placeholder="官网"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="区块链浏览器" :label-width="formLabelWidth" prop="blockchainBrowser">
              <el-input v-model="coinForm.blockchainBrowser" autocomplete="off" placeholder="区块链浏览器"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="币种小数位" :label-width="formLabelWidth" prop="decimalPlaces">
              <el-input v-model="coinForm.decimalPlaces" autocomplete="off" type="number" @input="checkVal('decimalPlaces')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="转至币汇最小额" :label-width="formLabelWidth" prop="exchangeOutSingleMinAmount">
              <el-input v-model="coinForm.exchangeOutSingleMinAmount" autocomplete="off" type="number" @input="checkVal('exchangeOutSingleMinAmount')"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="单笔最小提币额" :label-width="formLabelWidth" prop="tranOutSingleMinAmount">
              <el-input v-model="coinForm.tranOutSingleMinAmount" type="number" autocomplete="off" placeholder="单笔最小提币额" @input="checkVal('tranOutSingleMinAmount')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单笔最大提币额" :label-width="formLabelWidth" prop="tranOutSingleMaxAmount">
              <el-input v-model="coinForm.tranOutSingleMaxAmount" type="number" autocomplete="off" placeholder="单笔最大提币额" @input="checkVal('tranOutSingleMaxAmount')"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="单日最大提币额" :label-width="formLabelWidth" prop="tranOutDayMaxAmount">
              <el-input v-model="coinForm.tranOutDayMaxAmount" autocomplete="off" type="number" @input="checkVal('tranOutDayMaxAmount')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属链" :label-width="formLabelWidth" prop="chainName">
              <el-select v-model="coinForm.chainName" placeholder="">
                <el-option v-for="(item, index) in chainArr" :key="index" :label="item.chainName" :value="item.chainName"></el-option>
                <!--  <el-option label="erc20" value="erc20"></el-option>
                <el-option label="xrp20" value="xrp20"></el-option> -->
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="转至差价合约手续费" :label-width="formLabelWidth" prop="exchangeFee">
              <div style="display: flex">
                <el-input v-model="coinForm.exchangeFee" type="number" autocomplete="off" wdith="80%" @input="checkVal('fee_type')"></el-input>
                <el-select v-model="coinForm.fee_type" placeholder="" wdith="20%">
                  <el-option label="百分比" value="1"></el-option>
                  <el-option label="固定值" value="2"></el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="提币手续费" :label-width="formLabelWidth" prop="tranOutFee">
              <div style="display: flex">
                <el-input v-model="coinForm.tranOutFee" type="number" autocomplete="off" wdith="80%" @input="checkVal('fee_ex_type')"></el-input>
                <el-select v-model="coinForm.fee_ex_type" placeholder="" wdith="20%">
                  <el-option label="百分比" value="1"></el-option>
                  <el-option label="固定值" value="2"></el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="币种icon" :label-width="formLabelWidth" prop="iconUrl">
              <el-input size="small" v-model="coinForm.iconUrl" placeholder="请选择上传">
                <el-upload :action="$img_api" multiple name="file" :data="{ type: 'exchange' }" :show-file-list="true" :on-success="upload" :on-error="uploadError" slot="append" :limit="1" :on-exceed="exceed" ref="coinel">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="内部提币免审额度" :label-width="formLabelWidth" prop="isOwnAmount">
              <el-input v-model="coinForm.isOwnAmount" autocomplete="off" placeholder="请输入" @input="checkVal('isOwnAmount')"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="排序" :label-width="formLabelWidth" prop="position">
              <el-input v-model="coinForm.position" autocomplete="off" type="text" @input="checkVal('position')"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="6">
            <el-form-item label="是否上架" :label-width="formLabelWidth" prop="isTrade">
              <el-switch v-model="coinForm.isTrade" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否提币" :label-width="formLabelWidth" prop="isWithdraw">
              <el-switch v-model="coinForm.isWithdraw" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否充币" :label-width="formLabelWidth" prop="isDeposit">
              <el-switch v-model="coinForm.isDeposit" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="划转法币" :label-width="formLabelWidth" prop="isTransferOtc">
              <el-switch v-model="coinForm.isTransferOtc" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否热门" :label-width="formLabelWidth" prop="hot">
              <el-switch v-model="coinForm.hot" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="广告商提币状态" :label-width="formLabelWidth" prop="otcWithdrawSwitch">
              <el-switch v-model="coinForm.otcWithdrawSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="广告商充币状态" :label-width="formLabelWidth" prop="otcDepositSwitch">
              <el-switch v-model="coinForm.otcDepositSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
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
import { coinCol, coinColNoBtn, coinConfig } from '@/config/column/symbol';
import $api from '@/api/api';
import axios from 'axios';
import activePage from '@/mixin/keepPage';

export default {
  name: 'Setting',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 按钮栏目权限：是否能增删改查
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
      formLabelWidth: '150px',
      dialogFormVisible: false,
      // dialogType: 0, // 弹出框类型，0新增1编辑
      coinForm: {
        id: '',
        coinId: '', // (添加币种时没有id)
        coinName: '', // 币种简称
        englishDesc: '', // 币种全称(英文)
        chineseDesc: '', // 币种中文
        issuePrice: '', // 发行价
        totalIssuance: '', // 币种总量
        totalCirculation: '', // 流通量
        whitePaper: '', // 白皮书
        coinIntroduction: '', //币种介绍
        coinIntroductionEnglish: '', //币种介绍（英文）
        officialWebsite: '', // 官网
        position:'',// 排序
        blockchainBrowser: '', // 区块链浏览器
        decimalPlaces: '', //小数位
        tranOutSingleMinAmount: '', // 单笔最小提币数量
        tranOutSingleMaxAmount: '', // 单笔最大提币数量
        tranOutDayMaxAmount: '', // 单日最大提币数量
        chainName: 'erc20', // 所属链
        tranOutFee: '', // 转出手续费（提币手续费）
        exchangeFee: '', // 转至币汇手续费
        exchangeOutSingleMinAmount: '', // 转至币汇最小额
        fee_type: '1', //tranOutFee属性的类型， 1百分比  2固定值
        fee_ex_type: '1', //tranOutFee属性的类型， 1百分比  2固定值
        iconUrl: '', // 币种icon
        isDeposit: false, // 充币
        isWithdraw: false, // 提币
        isTrade: false, // 上架币币
        // isOtc: false, // 上架otc
        isTransferOtc: false, // 是否划转法币
        hot: false, // 是否热门
        otcWithdrawSwitch: false,
        otcDepositSwitch: false,
        publishTime: '', // 发行时间
        isOwnAmount: '', // 内部提币免审额度
      },
      formName: '新增币种',
      imageUrl: '',
      rules: {
        exchangeFee: [{ required: true, message: '必填', trigger: 'blur' }],
        coinName: [{ required: true, message: '必填', trigger: 'blur' }],
        englishDesc: [{ required: true, message: '必填', trigger: 'blur' }],
        chineseDesc: [{ required: true, message: '必填', trigger: 'blur' }],
        decimalPlaces: [{ required: true, message: '必填', trigger: 'blur' }],
        tranOutSingleMinAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        tranOutSingleMaxAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        tranOutDayMaxAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        tranOutFee: [{ required: true, message: '必填', trigger: 'blur' }],
        iconUrl: [{ required: true, message: '必填', trigger: 'blur' }],
        isOwnAmount: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    upload(response, file, fileList) {
      if (!response.data) {
        this.$message.error('图片上传失败');
        this.$refs.coinel.clearFiles();
        return;
      }
      this.coinForm.iconUrl = response.data[0].url;
      this.$refs.coinel.handleRemove(file);
      this.$refs.coinel.clearFiles();
      // this.coinForm.iconUrl = response.result.urls[0];
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    // 添加币种
    addCoin() {
      this.formName = '添加币种';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['coinForm'].resetFields();
        this.coinForm = {
          id: '',
          coinId: '', // (添加币种时没有id)
          coinName: '', // 币种简称
          englishDesc: '', // 币种全称(英文)
          chineseDesc: '', // 币种中文
          issuePrice: '', // 发行价
          totalIssuance: '', // 币种总量
          totalCirculation: '', // 流通量
          whitePaper: '', // 白皮书
          coinIntroduction: '', //币种介绍
          coinIntroductionEnglish: '', //币种介绍（英文）
          officialWebsite: '', // 官网
          position:'',
          blockchainBrowser: '', // 区块链浏览器
          decimalPlaces: '', //小数位
          tranOutSingleMinAmount: '', // 单笔最小提币数量
          tranOutSingleMaxAmount: '', // 单笔最大提币数量
          tranOutDayMaxAmount: '', // 单日最大提币数量
          chainName: 'erc20', // 所属链
          tranOutFee: '', // 转出手续费（提币手续费）
          exchangeFee: '', // 转至币汇手续费
          exchangeOutSingleMinAmount: '', // 转至币汇最小额
          fee_type: '1', //tranOutFee属性的类型， 1百分比  2固定值
          fee_ex_type: '1', //tranOutFee属性的类型， 1百分比  2固定值
          iconUrl: '', // 币种icon
          isDeposit: false, // 充币
          isWithdraw: false, // 提币
          isTrade: false, // 上架币币
          // isOtc: false, // 上架otc
          isTransferOtc: false, // 是否划转法币
          hot: false, // 是否热门
          otcWithdrawSwitch: false,
          otcDepositSwitch: false,
          publishTime: '', // 发行时间
          isOwnAmount: '', // 内部提币免审额度
        };
      });
    },

    async confirmOp() {
      this.$refs['coinForm'].validate(async (valid) => {
        if (valid) {
          let { id, coinId, tranOutFee, exchangeFee, fee_type, fee_ex_type, isDeposit, isWithdraw, isTrade, isTransferOtc, hot, otcWithdrawSwitch, otcDepositSwitch, publishTime, isOwnAmount, ...repo } = this.coinForm;

          let params = {
            tranOutFee: fee_ex_type === '1' ? tranOutFee + '%' : tranOutFee,
            exchangeFee: fee_type === '1' ? exchangeFee + '%' : exchangeFee,
            isDeposit: isDeposit ? 1 : 0,
            isWithdraw: isWithdraw ? 1 : 0,
            isTrade: isTrade ? 1 : 0,
            isTransferOtc: isTransferOtc ? 1 : 0,
            hot: hot ? 1 : 0,
            otcWithdrawSwitch: otcWithdrawSwitch ? 1 : 0,
            otcDepositSwitch: otcDepositSwitch ? 1 : 0,

            isOtc: 0, // 固定写
            publishTime: this.formatTime(publishTime),
            isOwnAmount: +isOwnAmount,
            ...repo,
          };

          id === '' ? Object.assign(params, { updateOrAdd: 1 }) : Object.assign(params, { id, coinId, updateOrAdd: 2 });
          this.btnLoading = true;
          const res = await $api.addUpdateCoin(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD HH:mm:ss');
    },

    async doHandle(data) {
      const { fn, row } = data;
      // 设置上架币币, 充币, 提币
      if (fn === 'switchTrade' || fn === 'switchDeposit' || fn === 'switchWithdraw' || fn === 'trhot') {
        const map = {
          switchTrade: () => {
            return { isTrade: row.isTrade ? 1 : 0 };
          },
          switchDeposit: () => {
            return { isDeposit: row.isDeposit ? 1 : 0 };
          },
          switchWithdraw: () => {
            return { isWithdraw: row.isWithdraw ? 1 : 0 };
          },
          trhot: () => {
            return { hot: row.hot ? 1 : 0 };
          },
        };
        let params = {
          id: row.id,
          updateOrAdd: 2,
        };
        Object.assign(params, map[fn]());
        const res = await $api.addUpdateCoin(params);
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
        this.$nextTick(() => {
          this.$refs['coinForm'].resetFields();
          let {
            id,
            coinId,
            coinName,
            englishDesc,
            chineseDesc,
            issuePrice,
            totalIssuance,
            totalCirculation,
            whitePaper,
            coinIntroduction,
            coinIntroductionEnglish,
            officialWebsite,
            position,
            blockchainBrowser,
            decimalPlaces,
            tranOutSingleMinAmount,
            tranOutSingleMaxAmount,
            tranOutDayMaxAmount,
            chainName,
            tranOutFee,
            exchangeFee,
            iconUrl,
            isDeposit,
            isWithdraw,
            isTrade,
            isTransferOtc,
            hot,
            otcWithdrawSwitch,
            otcDepositSwitch,
            exchangeOutSingleMinAmount,
            publishTime,
            isOwnAmount,
          } = row;

          this.coinForm = {
            id,
            coinId,
            coinName,
            englishDesc,
            chineseDesc,
            issuePrice,
            totalIssuance,
            totalCirculation,
            whitePaper,
            coinIntroduction,
            coinIntroductionEnglish,
            officialWebsite,
            position,
            blockchainBrowser,
            decimalPlaces,
            tranOutSingleMinAmount,
            tranOutSingleMaxAmount,
            tranOutDayMaxAmount,
            chainName,
            iconUrl,
            isDeposit,
            isWithdraw,
            isTrade,
            publishTime,
            isTransferOtc,
            hot,
            otcWithdrawSwitch,
            otcDepositSwitch,
            exchangeOutSingleMinAmount,
            isOwnAmount,
            fee_type: exchangeFee && (exchangeFee + '').indexOf('%') === -1 ? '2' : '1',
            fee_ex_type: tranOutFee && (tranOutFee + '').indexOf('%') === -1 ? '2' : '1',
            exchangeFee: (exchangeFee + '').indexOf('%') !== -1 ? exchangeFee.replace(/\%/, '') : exchangeFee,
            tranOutFee: (tranOutFee + '').indexOf('%') !== -1 ? tranOutFee.replace(/\%/, '') : tranOutFee,
          };
        });
      }
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (val === 'fee_ex_type') {
        if (this.coinForm.fee_ex_type == '1') {
          // 百分比
          this.coinForm.tranOutFee = this.coinForm.tranOutFee > 100 ? 100 : this.coinForm.tranOutFee;
        } else {
          // 固定值
          this.coinForm.tranOutFee = this.coinForm.tranOutFee > 10000 ? 10000 : this.coinForm.tranOutFee;
        }
        this.coinForm.tranOutFee = (this.coinForm.tranOutFee + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      } else if (val === 'fee_type') {
        if (this.coinForm.fee_type == '1') {
          // 百分比
          this.coinForm.exchangeFee = this.coinForm.exchangeFee > 100 ? 100 : this.coinForm.exchangeFee;
        } else {
          this.coinForm.exchangeFee = this.coinForm.exchangeFee > 10000 ? 10000 : this.coinForm.exchangeFee;
        }
        this.coinForm.exchangeFee = (this.coinForm.exchangeFee + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      } else if (val === 'position') {
        this.coinForm[val] = (this.coinForm[val] + '').replace(/[^\d]/g, '');
      } else {
        this.coinForm.exchangeOutSingleMinAmount = this.coinForm.exchangeOutSingleMinAmount;
        this.coinForm.exchangeOutSingleMinAmount = (this.coinForm.exchangeOutSingleMinAmount + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      }
      if (this.coinForm[val] < 0) {
        this.coinForm[val] = 0;
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
    // 链列表获取
    async getChainList() {
      const res = await $api.getChainList({});
      if (res) {
        this.chainArr = res.data.data;
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
      const res = await $api.getCoinListFormal(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach((v) => {
          v['isTrade'] = v['isTrade'] ? true : false;
          v['isDeposit'] = v['isDeposit'] ? true : false;
          v['isWithdraw'] = v['isWithdraw'] ? true : false;
          v['isTransferOtc'] = v['isTransferOtc'] ? true : false;
          v['hot'] = v['hot'] ? true : false;
          v['otcWithdrawSwitch'] = v['otcWithdrawSwitch'] ? true : false;
          v['otcDepositSwitch'] = v['otcDepositSwitch'] ? true : false;
        });
        this.list = records;

        this.listLoading = false;
      }
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('Setting', coinCol, coinColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(coinConfig);
    this.$store.dispatch('common/getCoinList').then(() => {
      this.searchCofig[0]['list'] = this.$store.state.common.coinlist;
    });
    this.getChainList();
    this.getList();
  },
  created() {},
};
</script>
<style lang="scss">
.setting-container {
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
