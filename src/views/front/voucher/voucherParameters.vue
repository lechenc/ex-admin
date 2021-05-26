
<template>
  <div class="voucherParameters-container">
    <el-card class="box-card">
      <el-button type="primary" @click="addType"> 添加新类型 </el-button>

      <el-form :model="form1" ref="form" :rules="rules" size="medium">
        <div class="box-card-con">
          <H5>条件十二: 贵族会员福利</H5>
          <el-row :span="24">
            <el-col :span="8">
              <el-form-item label="需入金量达到USDT：" prop="incomeAmount" :label-width="labelWidth">
                <el-input @input="checkVal('incomeAmount', 'noDot')" type="text" placeholder="请输入" v-model="form1.incomeAmount" :disabled="!isModify1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="需开仓交易额USDT：" prop="openPositionAmount" :label-width="labelWidth">
                <el-input @input="checkVal('openPositionAmount', 'noDot')" type="text" placeholder="请输入" v-model="form1.openPositionAmount" :disabled="!isModify1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="可获得邀请名额" prop="inviteNumber" :label-width="labelWidth">
                <el-input @input="checkVal('inviteNumber', 'noDot')" type="text" placeholder="请输入" v-model="form1.inviteNumber" :disabled="!isModify1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div v-if="isCURDAuth">
          <div class="middle" v-if="!isModify1">
            <el-button type="primary" size="medium" @click="isModify1 = true">修改</el-button>
          </div>
          <div class="middle" v-if="isModify1">
            <el-button type="primary" plain size="medium" @click="cancelSend1">取消</el-button>
            <el-button type="primary" size="medium" :loading="confirmLoading" @click="confirmSend(form1)">提交修改</el-button>
          </div>
        </div>
      </el-form>

      <div class="con" v-for="(form, index) in formArr2" :key="form.myKey">
        <el-form :model="form" ref="form" :rules="netCashRules">
          <H5 v-text="(form.conditionName = '条件十三: 代理净入金' + (index + 1))"></H5>
          <el-row>
            <el-col :span="8">
              <el-form-item :required="true" label="关联代理UID" :label-width="labelWidth">
                <el-input :disabled="!isModify2" rows="3" @input="form.agentUid = form.agentUid.replace(/[^\d,]/g, '')" type="textarea" placeholder="请输入代理UID,以逗号隔开" v-model.trim="form.agentUid"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-row v-for="(fl, idx) in form.triggerVOS" :key="idx">
                <el-col :span="10">
                  <el-form-item :required="true" :label="idx + 1 + ' 累计净划入'" label-width="180px">
                    <el-select :disabled="!isModify2" v-model="coinName" placeholder="请选择">
                      <el-option v-for="item in symbollist" :label="item.label" :value="item.label" :key="item.value"> </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item :required="true" label="达到USDT" :label-width="labelWidth">
                    <el-input :disabled="!isModify2" @input="fl.netIncomeTargetAmount = fl.netIncomeTargetAmount.replace(/[^\d]/g, '')" type="text" placeholder="请输入" v-model.trim="fl.netIncomeTargetAmount"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="4">
                  <el-button :disabled="!isModify2" @click.stop="delTriggerIdList('formArr2', index, idx)" style="margin-left: 20px; margin-top: 5px" size="small" round plain type="danger">删除</el-button>
                </el-col>
              </el-row>
              <el-row class="type-middle">
                <el-button :disabled="!isModify2" type="primary" size="medium" @click="addNetCash('formArr2', index, 1)">+添加</el-button>
              </el-row>
            </el-col>
          </el-row>
          <div v-if="isCURDAuth">
            <div class="middle" v-if="!isModify2">
              <el-button type="primary" size="medium" @click="isModify2 = true">修改</el-button>
            </div>
            <div class="middle" v-if="isModify2">
              <el-button type="primary" plain size="medium" @click="cancelSend2">取消</el-button>
              <el-button type="primary" size="medium" :loading="confirmLoading" @click="confirmSend(form)">提交修改</el-button>
            </div>
          </div>
        </el-form>
      </div>

      <div class="con" v-for="(form, index) in formArr3" :key="form.myKey">
        <el-form :model="form" ref="form" :rules="netCashRules">
          <H5 v-text="(form.conditionName = '条件十四: 直推邀请' + (index + 1))"></H5>
          <el-row>
            <el-col :span="24">
              <el-row v-for="(fl, idx) in form.triggerVOS" :key="idx">
                <el-col :span="7">
                  <el-form-item :required="true" :label="idx + 1 + ' 邀请直推新用户数量'" label-width="200px">
                    <el-input :disabled="!isModify3" @input="fl.lowNumber = fl.lowNumber.replace(/[^\d]/g, '')" type="text" placeholder="请输入" v-model.trim="fl.lowNumber"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item :required="true" label="需完成开仓交易额USDT：" label-width="200px">
                    <el-input :disabled="!isModify3" @input="fl.tradeTargetAmount = fl.tradeTargetAmount.replace(/[^\d]/g, '')" type="text" placeholder="请输入" v-model.trim="fl.tradeTargetAmount"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-button :disabled="!isModify3" @click.stop="delTriggerIdList('formArr3', index, idx)" style="margin-left: 20px; margin-top: 5px" size="small" round plain type="danger">删除</el-button>
                </el-col>
              </el-row>
              <el-row class="type-middle">
                <el-button :disabled="!isModify3" type="primary" size="medium" @click="addNetCash('formArr3', index, 2)">+添加</el-button>
              </el-row>
            </el-col>
          </el-row>

          <div v-if="isCURDAuth">
            <div class="middle" v-if="!isModify3">
              <el-button type="primary" size="medium" @click="isModify3 = true">修改</el-button>
            </div>
            <div class="middle" v-if="isModify3">
              <el-button type="primary" plain size="medium" @click="cancelSend3">取消</el-button>
              <el-button type="primary" size="medium" :loading="confirmLoading" @click="confirmSend(form)">提交修改</el-button>
            </div>
          </div>
        </el-form>
      </div>

      <!-- 弹窗 -->
      <el-dialog :visible.sync="dialogVisible" width="500px" title="添加新类型">
        <el-form :model="addForm" :label-width="labelWidth" ref="addForm" :rules="addRules">
          <el-form-item label="类型" prop="type">
            <el-select v-model="addForm.type" placeholder="请选择">
              <el-option v-for="item in addTypeList" :label="item.label" :value="item.index" :key="item.index"> </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="inner-footer">
          <el-button @click.stop="dialogVisible = false" style="margin-right: 10px">取消</el-button>
          <el-button type="primary" @click.stop="confirmAdd">确定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>
<script>
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  data() {
    return {
      form1: {
        id: '',
        openPositionAmount: '',
        incomeAmount: '',
        inviteNumber: '',
        content: '',
        agentUid: '',
        conditionName: '',
        activityType: 5,
      },
      coinName: 'BTCUSDT',
      dialogVisible: false,
      isCURDAuth: true, // 是否有增删改查权限
      isModify1: false, // 是否可以修改(控制页面内是否修改操作)
      isModify2: false,
      isModify3: false,
      listLoading: false, // 表格loading
      confirmLoading: false, // 提交loading
      list: [], //委托列表
      labelWidth: '140px',
      formArr1: [],
      formArr2: [],
      formArr3: [],
      rules: {
        incomeAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        inviteNumber: [{ required: true, message: '必填', trigger: 'blur' }],
        openPositionAmount: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      symbollist: [],
      netCashRules: {},
      addForm: {},
      addRules: {
        type: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      addTypeList: [
        {
          label: '代理净入金',
          value: 1,
          index: 0,
          arr: 'formArr2',
          isModify: 'isModify2',
        },
        {
          label: '直推邀请',
          value: 2,
          index: 1,
          arr: 'formArr3',
          isModify: 'isModify3',
        },
      ],
    };
  },
  methods: {
    delTriggerIdList(arr, index, idx) {
      this[arr][index].triggerVOS.splice(idx, 1);
    },
    confirmAdd() {
      this.$refs['addForm'].validate(async (valid) => {
        if (valid) {
          const { type } = this.addForm;
          this[this.addTypeList[type].arr].push({
            id: '',
            myKey: new Date().getTime(),
            openPositionAmount: '',
            conditionName: '',
            incomeAmount: '',
            inviteNumber: '',
            content: '',
            agentUid: '',
            activityType: this.addTypeList[type].value,
            triggerVOS: [
              {
                netIncomeTargetAmount: '',
                lowNumber: '',
                triggerCondition: '',
                tradeTargetAmount: '',
                activityType: this.addTypeList[type].value,
                triggerType: this.addTypeList[type].value,
              },
            ],
          });
          this.dialogVisible = false;
          this[this.addTypeList[type].isModify] = true;
        }
      });
    },
    addType() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.addForm = {
          type: '',
        };
      });
    },
    addNetCash(arr, index, value) {
      console.log('index', index);
      this[arr][index].triggerVOS.push({
        netIncomeTargetAmount: '',
        lowNumber: '',
        triggerCondition: '',
        tradeTargetAmount: '',
        activityType: value,
        triggerType: value,
      });
    },
    cancelSend1() {
      this.isModify1 = false;
      this.getList();
    },
    cancelSend2() {
      this.isModify2 = false;
      this.getList();
    },
    cancelSend3() {
      this.isModify3 = false;
      this.getList();
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      // 有第二个参数则是禁止小数位，必须整数
      // if (nodot) {
      //   this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      // }
      // if (this.form[val] < 0) {
      //   this.form[val] = 0;
      // }
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {};
      this.listLoading = true;
      const res = await $api.getAllTriggerConditionNew(query_data);
      if (res) {
        const tmp = res.data.data;
        this.form1 =
          tmp.filter((v) => {
            return v.activityType == 5;
          })[0] || {};
        this.formArr2 =
          tmp.filter((v) => {
            return v.activityType == 1;
          }) || {};
        this.formArr3 =
          tmp.filter((v) => {
            return v.activityType == 2;
          }) || {};
      }
      this.listLoading = false;
    },
    // 保存页面修改
    async confirmSend(form) {
      const { agentUid, activityType, triggerVOS, id, openPositionAmount, conditionName, incomeAmount, inviteNumber } = form;
      if (triggerVOS && triggerVOS.length) {
        triggerVOS.forEach((v) => {
          if (activityType == 1) {
            v.triggerCondition = `累计净划入BTCUSDT合约账户达到${v.netIncomeTargetAmount}USDT`;
          } else if (activityType == 2) {
            v.triggerCondition = `邀请${v.lowNumber}个直推新注册用户，完成一笔≥${v.tradeTargetAmount}USDT 的合约实盘交易`;
          }
        });
      }
      if (activityType == 1) {
        let flag = false;
        triggerVOS.some((v) => {
          if (!v.netIncomeTargetAmount) {
            flag = true;
          }
        });
        if (flag) return this.$message.error('请完成表格');
      }
      if (activityType == 2) {
        let flag = false;
        triggerVOS.some((v) => {
          if (!v.lowNumber || !v.tradeTargetAmount) {
            flag = true;
          }
        });
        if (flag) return this.$message.error('请完成表格');
      }

      let params = {
        agentUid,
        activityType,
        triggerVOS,
        openPositionAmount,
        conditionName,
        incomeAmount,
        inviteNumber,
      };
      if (!id) {
      } else {
        params.id = id;
      }

      this.confirmLoading = true;
      const res = !id ? await $api.addVoucherParameters(params) : await $api.editVoucherParameters(params);
      if (res) {
        let text = '';
        text = !id ? '添加成功！' : '修改成功！';
        this.$message({ message: text, type: 'success' });
        this.getList();
        if (activityType == 1) {
          this.isModify2 = false;
        } else if (activityType == 2) {
          this.isModify3 = false;
        } else if (activityType == 5) {
          this.isModify1 = false;
        }
      }
      this.confirmLoading = false;
    },
    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getSymbolList').then(() => {
        let list = [];
        let symbollist = this.$store.state.common.symbollist;
        //暂时只要BTCUSDT
        symbollist.forEach((v) => {
          if (v.label == 'BTCUSDT') {
            list.push(v);
          }
        });
        this.symbollist = list;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('VoucherParameters', [], []);
    this.isCURDAuth = authObj.isModify;
    // this.getSymbolList();
    this.getList();
  },
};
</script>
<style scope lang="scss">
.voucherParameters-container {
  padding: 4px 10px 10px 10px;

  h4 {
    margin: 10px 0;
    font-size: 18px;
  }
  h5 {
    font-size: 16px;
  }
  h5::before {
    content: '';
    border-left: 5px solid #03a7f0;
    margin-right: 10px;
  }
  .type-middle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      .con-line {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .panel {
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }
      .dot {
        margin: 0 10px;
        text-align: center;
        color: #9fa19f;
      }
      p {
        color: #9fa19f;
        font-size: 15px;
      }
    }
    .box-card-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      span {
        color: #000;
        font-weight: 600;
      }
    }
  }
  .middle {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .container-top {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 18px;
      height: 40px;
      line-height: 40px;
    }
    .coin {
      display: inline-block;
      font-size: 18px;
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
}
</style>
