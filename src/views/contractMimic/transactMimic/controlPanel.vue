<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-10-31 15:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="contractRobot-container">
        <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="btnArr.includes('add')">
      <el-button type="primary" size="small" @click="addCoin">添加控盘器</el-button>
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
    <el-dialog :title="formName" width="520px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
            <el-form-item label="币对" :label-width="formLabelWidth" prop="marketId">
              <el-select v-model="cForm.marketId" placeholder="" wdith="20%">
                <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-form-item label="控盘时间" :label-width="formLabelWidth" prop="faceValue">
            <el-input type="number" v-model="cForm.faceValue" placeholder="">
              <div slot="append">s</div>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row :span="24">
            <el-form-item label="预期价格" :label-width="formLabelWidth" prop="makerFee">
              <el-input type="number" v-model="cForm.makerFee" autocomplete="off" placeholder="" @input="checkVal('makerFee')" ></el-input>
            </el-form-item>
        </el-row>
     
        <el-row :span="24">
            <!-- 输入框 区间 -->
            <div v-for="(item, index) in cForm.arr" :key="index">
              <el-input
                class="text-input"
                v-model="config.value[0]"
                :placeholder="config.placeholder || '请输入最小值'"
                :size="sizeDiy"
                @change="handleMinChange(item[0], item[1])"
              ></el-input>
              <span style="line-height: 30px">&nbsp;~&nbsp;</span>
              <el-input
                class="text-input"
                v-model="config.value[1]"
                :placeholder="config.placeholder || '请输入最大值'"
                :size="sizeDiy"
                @change="handleMaxChange(item[0], item[1])"
              ></el-input>
            </div>
            <div>
               <el-button type="primary" size="medium" @click="addPriceList">+添加价格阶段</el-button>
            </div>
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
import { controlPanelCol, controlPanelColNoBtn, controlPanelConfig } from '@/config/column/contract';
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';

export default {
  name: 'ControlPanel',
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
      priceList:[['','']], // 价格阶段数组
      formLabelWidth: '150px',
      dialogFormVisible: false, // 编辑添加币种弹窗

      cForm: {
        id: '',
        initPrice: '',
        coinId: '',
        marketId: '',
        faceValue: '',
        makerFee: '',
        takerFee: '',
        maxEntrustAmount: '',
        minEntrustAmount: '',
        maxEntrustPrice: '',
        minEntrustPrice: '',
        gears: '',
        pricePrecision: '',
        sortNo: '',
        lever: '',
      },
      formName: '',
      rules: {
        initPrice: [{ required: true, message: '必填', trigger: 'blur' }],
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        marketId: [{ required: true, message: '必填', trigger: 'blur' }],
        faceValue: [{ required: true, message: '必填', trigger: 'blur' }],
        makerFee: [{ required: true, message: '必填', trigger: 'blur' }],
        takerFee: [{ required: true, message: '必填', trigger: 'blur' }],
        maxEntrustAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        minEntrustAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        maxEntrustPrice: [{ required: true, message: '必填', trigger: 'blur' }],
        minEntrustPrice: [{ required: true, message: '必填', trigger: 'blur' }],
        gears: [{ required: true, message: '必填', trigger: 'blur' }],
        pricePrecision: [{ required: true, message: '必填', trigger: 'blur' }],
        sortNo: [{ required: true, message: '必填', trigger: 'blur' }],
        lever: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    // 添加币种
    addCoin() {
      this.formName = '添加机器人';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields();
        this.cForm = {
          id: '',
          initPrice: '',
          coinId: '',
          marketId: '',
          faceValue: '',
          makerFee: '',
          takerFee: '',
          maxEntrustAmount: '',
          minEntrustAmount: '',
          maxEntrustPrice: '',
          minEntrustPrice: '',
          gears: '',
          pricePrecision: '',
          sortNo: '',
          lever: '',
        };
      });
    },

    async confirmOp() {
      this.$refs['cForm'].validate(async valid => {
        if (valid) {
          let {
            id,
            // initPrice,
            // coinId,
            // marketId,
            // faceValue,
            // makerFee,
            // takerFee,
            // maxEntrustAmount,
            // minEntrustAmount,
            // maxEntrustPrice,
            // minEntrustPrice,
            // gears,
            // pricePrecision,
            // sortNo,
            // lever,
            status,
            onDealing,
            ...repo
          } = this.cForm;

          let params = {
            // tranOutFee: fee_ex_type === '1' ? tranOutFee + '%' : tranOutFee,
            // exchangeFee: fee_type === '1' ? exchangeFee + '%' : exchangeFee,
            status: status ? 1 : 0,
            onDealing: onDealing ? 1 : 0,
            // isOwnAmount: +isOwnAmount,
            // priceList:this.priceList.join(',')
            ...repo,
          };

          // let tmp = this.priceList.filter(v=>!(!v[0] && !v[1])).join(',')
          


          id === '' ? params : Object.assign(params, { id });
          this.btnLoading = true;
          const res = id === '' ? await $api.getAddMarketContractcoinMarkets(params) : await $api.getUpdateMarketContractcoinMarkets(params);
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
      if (fn === 'trstart') {
       this.$confirm('确定强制停止？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: row.id,
              auditStatus: 1,
            };
            const res = await $api.updateAuditVerified(params);
            if (res) {
              this.$message({ type: 'success', message: '通过操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消删除' });
          });
      }
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      if (val === 'makerFee' || val === 'takerFee') {
        this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/, '$1$2.$3'); //只能输入6个小数
      } 
      if (val === 'maxEntrustAmount' || val === 'minEntrustAmount' || val === 'maxEntrustPrice' || val==='minEntrustPrice') {
        this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      } 
      // 有第二个参数则是禁止小数位，必须整数
      if(noDot){
        this.cForm[val] = this.cForm[val].replace(/[^\d]/g,'')
      }
      if (this.cForm[val] < 0) {
        this.cForm[val] = 0;
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
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
    // 删除奖品条目
    async delPriceList(index) {
      let tmp = this.priceList[index];
      // if (!tmp.id) {
        // 如果是新增的未保存的条目
        this.priceList.splice(index, 1);
      // } 
      // else {
      //   // 如果是后台返回的条目
      //   const params = {
      //     id: this.queryId,
      //     prizeId: tmp.prizeId,
      //   };
      //   // 删除奖品池奖品条目
      //   const res = await $api.setDeleteActivity(params);
      //   if (res) {
      //     this.$message({ message: '删除价格阶段成功！', type: 'error' });
      //     this.priceList.splice(index, 1);
      //   }
      // }
    },
    // 增加奖品条目
    addPriceList() {
      this.priceList.push(['','']);
    },

    validateMin(val1, val2) { 
      if(!val1 || !val2)return;
      const one = Number(val1);
      const max = Number(val2);
      if (one <= max) {
      } else {
        this.$message.error('输入值不得大于最大值');
      }
    },
    validateMax(val1, val2) {
      if(!val1 || !val2)return;
      const one = Number(val2);
      const min = Number(val1);
      if (one >= min) {
      } else {
        this.$message.error('输入值不得小于最小值');
      }
    },
    handleMinChange(val1, val2) {
      this.validateCom(val1);
      this.validateMax(val1, val2);
    },
    handleMaxChange(val1, val2) {
      this.validateCom(val2);
      this.validateMax(val1, val2);
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
      const res = await $api.getListMarketContractcoinMarkets(query_data);
      if (res) {
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
    let authObj = this.$util.getAuthority('ControlPanel', controlPanelCol, controlPanelColNoBtn);
    this.configs = authObj.val;
    this.btnArr = authObj.btnArr || [];

    this.searchCofig = this.$util.clone(controlPanelConfig);
    

    this.$store.dispatch('common/getSymbolListContract').then(() => {
      this.searchCofig[0]['list'] = this.$store.state.common.symbollistContract;
      this.coinList = this.$store.state.common.coinlist;
    });

    this.getList();
  }
}
</script>
<style lang="scss">
.contractRobot-container {
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
