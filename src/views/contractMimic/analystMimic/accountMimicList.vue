<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="notice-container">
    <div class="container-top">
      <Bsearch :configs="searchConfig" @do-search="doSearch" @do-reset="doReset" calText="合约统计" :excelLoading="excelLoading" :exportExcel="true" @do-exportExcel="exportExcel" :calTotal="true" @do-calTotal="calTotal" />
    </div>
    <div class="notice-button">
      <el-button type="primary" size="medium" @click="create(false)">创建</el-button>
      <el-button type="primary" size="medium" @click="create(true)">批量创建</el-button>
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <el-Dialog :visible.sync="createDialog" title="创建特殊调整" width="700px">
      <el-form :model="form" ref="form" label-width="160px" :rules="rules" style="width: 90%; padding-left: 15px">
        <el-form-item label="账户类型" prop="accountType">
          <el-select placeholder="请选择" v-model="form.accountType" width="20%">
            <el-option v-for="(item, idx) in accountTypeObj" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="币对" prop="coinName">
          <el-select placeholder="请选择" v-model="form.coinName" width="20%">
            <el-option v-for="(item, idx) in symbollist" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>

        <el-row :span="24" v-if="!batchCreate">
          <el-form-item label="UID" prop="uid">
            <el-input size="small" placeholder="请输入" type="number" v-model="form.uid"></el-input>
          </el-form-item>
        </el-row>

        <el-row v-else>
          <el-form-item label="UID" prop="uidRange">
            <el-col :span="11">
              <el-input size="small" placeholder="请输入UID" type="number" v-model="form.startUid"></el-input>
            </el-col>
            <el-col :span="2" style="text-align: center;">-</el-col>
            <el-col :span="11">
              <el-input size="small" placeholder="请输入UID" type="number" v-model="form.endUid"></el-input>
            </el-col>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="调账数量" prop="amount">
            <el-col :span="5">
              <el-select size="small" placeholder="请选择" v-model="form.plus" width="20%">
                <el-option v-for="(item, idx) in plusObj" :key="idx" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-col>

            <el-col :span="19">
              <el-input size="small" type="text" placeholder="请输入" v-model="form.amount"> </el-input>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-form-item label="调账原因">
            <el-input placeholder="请输入" type="textarea" v-model="form.reason"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24" v-if="batchCreate">
          <el-form-item label="审核状态" prop="tradeStatus">
            <el-select size="small" placeholder="请选择" v-model="form.tradeStatus" width="20%" disabled>
              <el-option label="成功" value="1"></el-option>
              <!-- <el-option label="失败" value="2"></el-option> -->
            </el-select>
          </el-form-item>
        </el-row>
      </el-form>

      <div class="comfirn-btn footer">
        <el-button type="primary" size="small" @click="createConfirm" :loading="btnLoading">确定</el-button>
        <el-button type="default" size="small" @click="createDialog = false">取消</el-button>
      </div>
    </el-Dialog>

    <el-Dialog class="totalDialog" :visible.sync="totalDialog" title="统计结果" width="400px">
      <el-row class="myrow" :span="24">
        <el-col :span="6"> UID: </el-col>
        <el-col :span="15">{{ totalObj.uid || '无' }} </el-col>
      </el-row>
      <el-row class="myrow" :span="24">
        <el-col :span="6"> 币对: </el-col>
        <el-col :span="15"> {{ myCoinName || '无' }} </el-col>
      </el-row>
      <el-row class="myrow" :span="24">
        <el-col :span="6"> 状态: </el-col>
        <el-col :span="15">{{ tradeStatusObj[totalObj.tradeStatus] || '无' }} </el-col>
      </el-row>
      <el-row class="myrow" :span="24">
        <el-col :span="6"> 数量: </el-col>
        <el-col :span="15">{{ totalObj.amount || 0 }} </el-col>
      </el-row>
      <div slot="footer">
        <el-button type="primary" size="small" @click="totalDialog = false">确定</el-button>
      </div>
    </el-Dialog>

    <el-Dialog class="totalDialog msgDialog" :visible.sync="msgDialog" :title="title" width="700px">
      <el-row class="myrow" :span="24">
        <el-col :span="4"> 订单号: </el-col>
        <el-col :span="8">{{ infoObj.orderNo || '无' }} </el-col>
        <el-col :span="4"> UID: </el-col>
        <el-col :span="8">{{ infoObj.uid || '无' }} </el-col>
      </el-row>
      <el-row class="myrow" :span="24">
        <el-col :span="4"> 账户类型: </el-col>
        <el-col :span="15">{{ tradeStatusObj[infoObj.tradeStatus] || '无' }} </el-col>
      </el-row>
      <el-row class="myrow" :span="24">
        <el-col :span="4"> 币种: </el-col>
        <el-col :span="15"> {{ infoObj.coinName || '无' }} </el-col>
      </el-row>

      <el-row class="myrow" :span="24">
        <el-col :span="4"> 调账数量: </el-col>
        <el-col :span="15">{{ infoObj.amount || 0 }} </el-col>
      </el-row>
      <el-row class="myrow" :span="24">
        <el-col :span="4"> 申请时间: </el-col>
        <el-col :span="8">{{ infoObj.applyTime || '无' }} </el-col>
        <!-- <el-col :span="4"> 申请人: </el-col>
        <el-col :span="8">{{ totalObj.uid || '无' }} </el-col> -->
      </el-row>
      <el-row class="myrow" :span="24">
        <el-col :span="4"> 审核时间: </el-col>
        <el-col :span="8">{{ infoObj.auditTime || '无' }} </el-col>
        <el-col :span="4"> 审核人: </el-col>
        <el-col :span="8">{{ infoObj.auditUserName || '无' }} </el-col>
      </el-row>
      <el-row class="myrow" :span="24">
        <el-col :span="4"> 调账原因: </el-col>
        <el-col :span="15">{{ infoObj.reason || '无' }} </el-col>
      </el-row>
      <div class="msgDialog-footer" slot="footer">
        <el-button v-if="sureType == 1" type="primary" @click="msgDialog = false"> 确定 </el-button>
        <el-button v-else-if="sureType == 2" @click="msgDialog = false"> 取消 </el-button>
        <el-button v-if="confirmType == 1" type="primary" @click="passCancelConfirm(1)"> 审核通过 </el-button>
        <el-button v-else-if="confirmType == 2" type="danger" @click="passCancelConfirm(2)"> 审核驳回 </el-button>
      </div>
    </el-Dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { accountMimicListCol, accountMimicListConfig } from '@/config/column/contractMimic';
import $api from '@/api/api';
import utils from '@/utils/util';
export default {
  name: 'columnMimic',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    const validateUid = (rule, value, callback) => {
      const min = +this.form.startUid
      const max = +this.form.endUid
      if (min && max) {
        if (min > max) {
          callback(new Error('最大值超过最小值,请重新填写'))
        } else if (min === max) {
          callback(new Error('最小值必须小于最大值, 请重新填写'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请输入uid'))
      }
    }

    return {
      confirmType: '',
      sureType: '',
      msgDialog: false,
      title: '订单详情',
      myCoinName: '',
      tradeStatusObj: {
        0: '待审核',
        1: '成功',
        2: '失败',
      },
      totalObj: {},
      symbollist: [],
      accountTypeObj: [{ label: '分析师实盘合约账户', value: 7 }],
      plusObj: [{ label: '+', value: '+' }],
      form: {
        accountType: '',
        coinName: '',
        uid: '',
        amount: '',
        reason: '',
        plus: '+',
        startUid: '',
        endUid: '',
        tradeStatus: '1'
      },
      toDay: '',
      ago: '',
      infoObj: {},
      rules: {
        accountType: [{ required: true, message: '请输入', trigger: 'blur' }],
        coinName: [{ required: true, message: '请输入', trigger: 'blur' }],
        uid: [{ required: true, message: '请输入', trigger: 'blur' }],
        amount: [{ required: true, message: '请输入', trigger: 'blur' }],
        uidRange: [{ validator: validateUid, trigger: 'blur' }],
        tradeStatus: [{ required: true, message: '请输入', trigger: 'blur' }]
      },
      createDialog: false,
      btnLoading: false, // 提交
      // isCURDAuth: true, // 是否有添加的权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchConfig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pages: 0, // 总页数
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      detail_list: [], // 详情数据列表，
      row: {}, // 选中列信息
      excelLoading: false,
      delBtnLoading: false,
      dataList: [],
      totalDialog: false,
      passCancelId: '',
      batchCreate: false // 是否批量创建订单
    };
  },
  watch: {
    createDialog(newVal) {
      if (!newVal) {
        this.form = {
          accountType: '',
          coinName: '',
          uid: '',
          amount: '',
          reason: '',
          plus: '+',
          startUid: '',
          endUid: '',
          tradeStatus: '1'
        };
      }
    },
  },
  methods: {
    async passCancelConfirm(val) {
      let params = {
        orderNo: this.passCancelId,
        tradeStatus: val,
      };
      const res = await $api.passCancelAccountMimic(params);
      if (res) {
        this.$message.success('操作成功');
        this.msgDialog = false;
        this.getList();
      }
    },
    async doHandle(data) {
      const { fn, row } = data;
      this.passCancelId = row.orderNo;
      if (fn == 'detail') {
        this.title = '订单详情';
        this.sureType = 1;
        this.msgDialog = true;
        this.infoObj = row;
      }
      if (fn == 'pass') {
        this.title = '审核通过';
        this.sureType = 2;
        (this.confirmType = 1), (this.msgDialog = true);
        this.infoObj = row;
      }
      if (fn == 'cancel') {
        this.title = '审核驳回';
        this.sureType = 2;
        (this.confirmType = 2), (this.msgDialog = true);
        this.infoObj = row;
      }
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    async calTotal(data) {
      this.totalDialog = true;
      this.search_params_obj = data;
      const res = await $api.getAccountMimicTotal(this.search_params_obj);
      this.totalObj = res.data.data;
      let temId = '';
      temId = this.symbollist.filter((v) => v['value'] == this.totalObj.coinId)[0].label;
      this.myCoinName = temId;
    },
    async queryData(params) {
      this.excelLoading = true;
      Object.assign(params, this.search_params_obj);
      const res = await $api.getAccountMimicList(params) 
      this.excelLoading = false;
      return res;
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    uploadIcon(response, file, fileList) {
      if (!response.data) {
        this.$message.error('图片上传失败');
        this.$refs.iconDot.clearFiles();
        return;
      }
      this.form.iconUrl = response.data[0].url;
      this.$refs.iconDot.handleRemove(file);
      this.$refs.iconDot.clearFiles();
    },
    async createConfirm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let { accountType, coinName, uid, amount, reason, startUid, endUid, tradeStatus } = this.form;
          let temId = '';
          temId = this.symbollist.filter((v) => v['label'] == coinName)[0].value;
          this.search_params_obj.coinMarket = temId;
          const sendObj = this.batchCreate ? { startUid, endUid, tradeStatus } : { uid }
          const parms = { accountType, coinId: temId, coinName, amount, ...sendObj };

          console.log('reason: ', reason);
          if (reason) {
            parms.reason = reason;
          }
          console.log('parms: ', parms);
          this.btnLoading = true;
          const res = !this.batchCreate ? await $api.addAccountMimic(parms) : await $api.batchCreateAnalystOrder(parms);
          if (res) {
            this.$message({ message: '新增成功', type: 'success' });
            this.createDialog = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          this.$message.error({ title: '提示', message: '请完成表单内容填写再重试' });
        }
      });
    },

    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};

      this.searchConfig.forEach((v) => {
        v['value'] = '';
      });

      this.getList();
    },
    create(flag) {
      this.batchCreate = flag
      this.createDialog = true;
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },

    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        this.searchConfig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },

    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getSymbolMimicListAnalyst').then(() => {
        this.symbollist = this.$store.state.common.symbolMimicListAnalyst;
        this.searchConfig[2]['list'] = this.symbollist;
      });
    },

    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },

    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;
      let vm = this;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      // this.requiredParams(params)
      Object.assign(params, this.search_params_obj);
      const res = await $api.getAccountMimicList(params);
      if (res) {
        const { records, current, total, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        records.forEach((v) => {
          v['isclick'] = parseInt(v['tradeStatus']) === 0 ? false : true;
        });
        this.current_page = current;
        this.list = records;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    this.configs = accountMimicListCol;
    this.searchConfig = this.$util.clone(accountMimicListConfig);
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style lang="scss">
.notice-container {
  .totalDialog {
    .myrow {
      margin-left: 50px;
      margin-bottom: 50px;
      &:last-child {
        margin-bottom: 20px;
      }
    }
  }
  .totalDialog {
    .myrow {
      margin-bottom: 20px;
    }
    .el-dialog__footer {
      display: flex;
      justify-content: center;
    }
  }
  .my-form-item {
    .el-form-item__content {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  .el-form-item__content {
    margin-left: 0;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 10px 20px;
    }
    button:last-child {
      margin-left: 90px;
    }
  }
  padding: 4px 10px 10px 10px;
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 30px auto 10px;
  }

  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
}
</style>
