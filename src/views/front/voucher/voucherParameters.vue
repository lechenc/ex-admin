
<template>
  <div class="voucherParameters-container">
    <el-card class="box-card">
      <el-button type="primary" @click="addType"> 添加新类型 </el-button>
      <el-form :model="form" ref="form" :rules="rules" size="medium">
        <div class="box-card-con">
          <H5>条件十二: 贵族会员福利</H5>
          <el-row :span="24">
            <el-col :span="8">
              <el-form-item label="需入金量达到USDT：" prop="incomeAmount" :label-width="labelWidth">
                <el-input @input="checkVal('incomeAmount', 'noDot')" type="text" placeholder="请输入" v-model="form.incomeAmount" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="需开仓交易额USDT：" prop="openPositionAmount" :label-width="labelWidth">
                <el-input @input="checkVal('openPositionAmount', 'noDot')" type="text" placeholder="请输入" v-model="form.openPositionAmount" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="可获得邀请名额" prop="inviteNumber" :label-width="labelWidth">
                <el-input @input="checkVal('inviteNumber', 'noDot')" type="text" placeholder="请输入" v-model="form.inviteNumber" :disabled="!isModify"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>

      <el-form :model="netCashForm" ref="netCashForm" :rules="netCashRules">
        <div class="con" v-for="(el, index) in netCashForm.netCashList" :key="index">
          <H5>条件十三: 代理净入金{{ index + 1 }}</H5>
          <el-row>
            <el-col :span="8">
              <el-form-item :required="true" label="关联代理UID" :label-width="labelWidth">
                <el-input rows="3" @input="el.triggerId = el.triggerId.replace(/[^\d,]/g, '')" type="textarea" placeholder="请输入代理UID,以逗号隔开" v-model.trim="el.triggerId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-row v-for="(fl, idx) in el.triggerIdList" :key="idx">
                <el-col :span="10">
                  <el-form-item :required="true" :label="idx + 1 + ' 累计净划入'" label-width="180px">
                    <el-select v-model="fl.experienceId" placeholder="请选择">
                      <el-option v-for="item in coinList" :label="item.label" :value="item.value" :key="item.value"> </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item :required="true" label="达到USDT" :label-width="labelWidth">
                    <el-input @input="fl.relationIds = fl.relationIds.replace(/[^\d]/g, '')" type="text" placeholder="请输入" v-model.trim="fl.relationIds"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="4">
                  <el-button @click.stop="delTriggerIdList(index, idx)" style="margin-left: 20px; margin-top: 5px" size="small" round plain type="danger">删除</el-button>
                </el-col>
              </el-row>
              <el-row class="type-middle">
                <el-button type="primary" size="medium" @click="addNetCash(index)">+添加</el-button>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-form>

      <el-form :model="form" ref="form" :rules="rules" size="medium">
        <div class="box-card-con">
          <H5>条件十四: 直推邀请</H5>
          <el-form-item label="需入金量达到" prop="incomeAmount" :label-width="labelWidth">
            <el-col :span="8"><el-input @input="checkVal('incomeAmount', 'noDot')" type="text" placeholder="请输入" v-model="form.incomeAmount" :disabled="!isModify"></el-input> </el-col>
          </el-form-item>
          <el-form-item label="需开仓交易额" prop="openPositionAmount" :label-width="labelWidth">
            <el-col :span="8"><el-input @input="checkVal('openPositionAmount', 'noDot')" type="text" placeholder="请输入" v-model="form.openPositionAmount" :disabled="!isModify"></el-input> </el-col>
          </el-form-item>
          <el-form-item label="可获得邀请名额" prop="inviteNumber" :label-width="labelWidth">
            <el-col :span="8"><el-input @input="checkVal('inviteNumber', 'noDot')" type="text" placeholder="请输入" v-model="form.inviteNumber" :disabled="!isModify"></el-input> </el-col>
          </el-form-item>
        </div>
      </el-form>

      <!-- 弹窗 -->
      <el-dialog :visible.sync="dialogVisible" width="500px" title="添加新类型">
        <el-form :model="addForm" :label-width="labelWidth" ref="addForm" :rules="addRules">
          <el-form-item label="类型" prop="type">
            <el-select v-model="addForm.type" placeholder="请选择">
              <el-option v-for="item in addTypeList" :label="item.label" :value="item.value" :key="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="inner-footer">
          <el-button @click.stop="dialogVisible = false" style="margin-right: 10px">取消</el-button>
          <el-button type="primary" @click.stop="confirmAdd">确定</el-button>
        </div>
      </el-dialog>

      <div v-if="isCURDAuth">
        <div class="middle" v-if="!isModify">
          <el-button type="primary" size="medium" @click="isModify = true">修改</el-button>
        </div>
        <div class="middle" v-if="isModify">
          <el-button type="primary" plain size="medium" @click="cancelSend">取消</el-button>
          <el-button type="primary" size="medium" :loading="confirmLoading" @click="confirmSend">提交修改</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  data() {
    return {
      dialogVisible: false,
      isCURDAuth: true, // 是否有增删改查权限
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      confirmLoading: false, // 提交loading
      list: [], //委托列表
      labelWidth: '140px',
      form: {
        id: '',
        incomeAmount: '',
        inviteNumber: '',
        openPositionAmount: '',
      },
      rules: {
        incomeAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        inviteNumber: [{ required: true, message: '必填', trigger: 'blur' }],
        openPositionAmount: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      netCashForm: {
        netCashList: [
          {
            triggerId: '',
            triggerIdList: [
              {
                experienceId: '',
                relationIds: '',
              },
            ],
          },
        ],
      },
      coinList: [],
      netCashRules: {},
      addForm: {},
      addRules: {
        type: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      addTypeList: [
        {
          label: '净入金金额开仓交易额',
          value: 1,
        },
        {
          label: '代理净入金',
          value: 2,
        },
        {
          label: '直推邀请',
          value: 3,
        },
      ],
    };
  },
  methods: {
    delTriggerIdList(index, idx) {
      if (this.netCashForm.netCashList[index].triggerIdList.length == 1) {
        this.netCashForm = {
          netCashList:[]
        };
      } else {
        this.netCashForm.netCashList[index].triggerIdList.splice(idx, 1);
      }
    },
    confirmAdd() {
      this.$refs['addForm'].validate(async (valid) => {
        if (valid) {
          const { type } = this.addForm;
          if (type == 2) {
            this.netCashForm.netCashList.push({
              triggerId: '',
              triggerIdList: [
                {
                  experienceId: '',
                  relationIds: '',
                },
              ],
            });
            this.dialogVisible = false;
          }
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
    addNetCash(index) {
      console.log('index', index);
      this.netCashForm.netCashList[index].triggerIdList.push({
        experienceId: '',
        relationIds: '',
      });
    },
    cancelSend() {
      this.isModify = false;
      this.getList();
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      // 有第二个参数则是禁止小数位，必须整数
      if (nodot) {
        this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      }
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {};
      this.listLoading = true;
      const res = await $api.getAllTriggerConditionNew(query_data);
      if (res) {
        const tmp = res.data.data[0];

        this.form = {
          id: tmp.id,
          incomeAmount: tmp.incomeAmount,
          inviteNumber: tmp.inviteNumber,
          openPositionAmount: tmp.openPositionAmount,
        };
      }
      this.listLoading = false;
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { openPositionAmount, incomeAmount, inviteNumber, id } = this.form;
          let params = {
            incomeAmount: parseFloat(incomeAmount),
            inviteNumber: parseFloat(inviteNumber),
            openPositionAmount: parseFloat(openPositionAmount),
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
            this.isModify = false;
          }
          this.confirmLoading = false;
        }
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('VoucherParameters', [], []);
    this.isCURDAuth = authObj.isModify;

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
