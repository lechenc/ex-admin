<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-27 16:01:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="warehouseset-container">
    <el-card class="box-card">
      <div class="box-card-con">
        <H5>会员级别区间判断和奖金设置</H5>
        <LevelSet :modify="isCURDAuth"></LevelSet>
      </div>
    </el-card>

    <el-form :model="form" ref="form" :rules="rules" label-width="160px" size="medium">
      <el-card class="box-card">
        <el-card class="box-card">
          <div class="box-card-con">
            <H5>分红池设置</H5>
            <el-form-item label="分红池初始金额" prop="MERCHANT_COIN_NAME" :label-width="labelWidth">
              <el-col :span="7">
                <el-input type="text" placeholder="请输入" v-model="form.bonus" @input="checkVal('bonus')" :disabled="!isModify"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="分红池目前金额" prop="MERCHANT_COIN_NAME" :label-width="labelWidth">
              <el-col :span="7">
                <el-input
                  type="text"
                  placeholder="请输入"
                  v-model="form.realityBonus"
                  @input="checkVal('realityBonus')"
                  :disabled="!isModify"
                ></el-input>
              </el-col>
            </el-form-item>
            <H5>分红增长设置</H5>
            <el-form-item label="日增随机区间" :label-width="labelWidth">
              <el-col :span="7">
                <el-input
                  type="text"
                  placeholder="请输入"
                  v-model="form.quarterMinPercent"
                  @input="checkVal('quarterMinPercent')"
                  :disabled="!isModify"
                >
                  <div slot="append">%</div>
                </el-input>
              </el-col>
              <el-col :span="1" style="text-align:center;font-size:17px;">
                ~
              </el-col>
              <el-col :span="7">
                <el-input
                  type="text"
                  placeholder="请输入"
                  v-model="form.quarterMaxPercent"
                  @input="checkVal('quarterMaxPercent')"
                  :disabled="!isModify"
                >
                  <div slot="append">%</div>
                </el-input>
              </el-col>
            </el-form-item>
            <H5>季度分红设置</H5>
            <el-form-item label="六星分红占比" prop="MERCHANT_COIN_NAME" :label-width="labelWidth">
              <el-col :span="7">
                <el-input
                  type="text"
                  placeholder="请输入"
                  v-model="form.sixLevelProportion"
                  @input="checkVal('sixLevelProportion')"
                  :disabled="!isModify"
                >
                  <div slot="append">%</div>
                </el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="七星分红占比" prop="MERCHANT_COIN_NAME" :label-width="labelWidth">
              <el-col :span="7">
                <el-input
                  type="text"
                  placeholder="请输入"
                  v-model="form.sevenLevelProportion"
                  @input="checkVal('sevenLevelProportion')"
                  :disabled="!isModify"
                >
                  <div slot="append">%</div>
                </el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="八星分红占比" prop="MERCHANT_COIN_NAME" :label-width="labelWidth">
              <el-col :span="7">
                <el-input
                  type="text"
                  placeholder="请输入"
                  v-model="form.eightLevelProportion"
                  @input="checkVal('eightLevelProportion')"
                  :disabled="!isModify"
                >
                  <div slot="append">%</div>
                </el-input>
              </el-col>
            </el-form-item>
          </div>
        </el-card>

        <el-card class="box-card">
          <div class="box-card-con">
            <H5>开关设置</H5>
            <el-form-item label="周奖发放自动开关">
              <el-switch
                v-model="isWeekSwitch"
                :disabled="!isModify"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @click.native="handleAdUpdate('isWeekSwitch')"
              ></el-switch>
            </el-form-item>
            <!-- <el-form-item label="周奖发放时间" :label-width="labelWidth">
              <el-date-picker v-model="form.weekGrantTime" type="datetime" placeholder="选择日期时间" :disabled="!isModify"> </el-date-picker>
              <div >{{form.weekGrantTime}}</div>
            </el-form-item>-->
            <el-form-item label="分红发放自动开关">
              <el-switch
                v-model="isQuarterSwitch"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @click.native="handleAdUpdate('isQuarterSwitch')"
                :disabled="!isModify"
              ></el-switch>
            </el-form-item>
            <!-- <el-form-item label="分红发放时间" :label-width="labelWidth">
             <el-date-picker v-model="form.quarterGrantTime" type="datetime" :disabled="!isModify" placeholder="选择日期时间"> </el-date-picker>
               <div >{{form.quarterGrantTime}}</div>
            </el-form-item>-->
          </div>
        </el-card>

        <el-card class="box-card">
          <div class="box-card-con">
            <H5>支出账号设置</H5>
            <el-form-item label="支出账号" :label-width="labelWidth" prop="weekGrantUid">
              <el-select v-model="form.weekGrantUid" placeholder="请选择" style="width:180px;" :disabled="!isModify">
                <el-option v-for="(item, index) in prizeUidArr" :key="index" :label="item.realName" :value="item.uid"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-card>

        <!--  <el-card class="box-card">
          <div class="box-card-con">
            <H5>积分查询更新频率设置</H5>
          <el-form-item label="更新时间" :label-width="labelWidth">
              <el-date-picker v-model="form.pointUpdateTime" type="datetime" placeholder="选择日期时间" :disabled="!isModify"> </el-date-picker>
               <div >{{form.pointUpdateTime}}</div>
            </el-form-item>
            <H5>周薪考核时间统计节点设置</H5>
             <el-form-item label="时间" :label-width="labelWidth">
              <el-date-picker v-model="form.weekSettlementTime" type="datetime" placeholder="选择日期时间" :disabled="!isModify"> </el-date-picker>
              <div >{{form.weekSettlementTime}}</div>
            </el-form-item>
          </div>
        </el-card>-->

        <!--  <el-card class="box-card">
          <div class="box-card-con">
            <H5>黑名单处罚范围</H5>
            <el-form-item label="限制范围" :label-width="labelWidth">
               <el-checkbox-group v-model="form.blackRange" :min="1" @change="changeCheckBox" >
               <el-checkbox label="无法获得周奖" key="1">无法获得周奖</el-checkbox>
                <el-checkbox label="无法获得季度分红" key="2">无法获得季度分红</el-checkbox>
                <el-checkbox label="无法或者周奖和分红" key="3">无法或者周奖和分红</el-checkbox>
                <el-checkbox v-for="item in blackList" :label="item" :key="item.value">{{item.label}}</el-checkbox>
              </el-checkbox-group>
              <el-select v-model="form.blackRange" placeholder="请选择" style="width:180px;" :disabled="!isModify">
                <el-option label="无法获得周奖" :value="1"></el-option>
                <el-option label="无法获得季度分红" :value="2"></el-option>
                <el-option label="无法获得周奖和分红" :value="3"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-card> -->

        <div v-if="isCURDAuth">
          <div class="middle" v-if="!isModify">
            <el-button type="primary" size="medium" @click="isModify = true">编辑</el-button>
          </div>
          <div class="middle" v-if="isModify">
            <el-button type="primary" plain size="medium" @click="isModify = false">取消</el-button>
            <el-button type="primary" size="medium" @click="confirmSend('black')" :loading="btnLoading">提交修改</el-button>
          </div>
        </div>
      </el-card>
    </el-form>

    <!--
    <el-form :model="formR" ref="formR" label-width="160px" size="medium">
      <el-card>
        <el-card class="box-card">
          <div class="box-card-con">
            <H5>日加入星球活动限额</H5>
            <el-form-item label="限制人数" :label-width="labelWidth">
              <el-input type="text" placeholder="请输入" v-model="formR.num" @input="checkValR('num')" :disabled="!isModifyRegister"> </el-input>
            </el-form-item>
          </div>
        </el-card>

        <div v-if="isCURDAuth">
          <div class="middle" v-if="!isModifyRegister">
            <el-button type="primary" size="medium" @click="isModifyRegister = true">编辑</el-button>
          </div>
          <div class="middle" v-if="isModifyRegister">
            <el-button type="primary" plain size="medium" @click="isModifyRegister = false">取消</el-button>
            <el-button type="primary" size="medium" @click="confirmRegister()" :loading="personLoading">提交修改</el-button>
          </div>
        </div>
      </el-card>
    </el-form>
    -->
  </div>
</template>
<script>
import $api from '@/api/api';
import LevelSet from '@/components/warehouse/levelSet';
import Precision from '@/utils/number-precision';
export default {
  name: 'WarehouseSetting',
  components: {
    LevelSet,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交
      personLoading: false, // 加入提交
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      isModifyRegister: false, // 是否可以修改注册人数栏目
      listLoading: false, // 表格loading
      list: [], //委托列表
      labelWidth: '140px',
      configs: [],
      prizeUidArr:[],// 子账号UID列表

      isWeekSwitch: false, // 周奖发放自动开关
      isQuarterSwitch: false, // 分红发放自动开关
      form: {
        bonus: 0, // 分红池初始金额
        realityBonus: 0, //分红池目前金额
        quarterMinPercent: 0, // 日增随机区间小
        quarterMaxPercent: 0, // 日增随机区间大
        // weekGrantTime: 0, // 周奖发放时间
        // quarterGrantTime: 0, // 分红发放时间
        // pointUpdateTime: 0, // 积分更新时间
        // weekSettlementTime: 0, // 周薪更新时间
        // blackRange: 0, // 处罚范围
        sixLevelProportion: 0,
        sevenLevelProportion: 0,
        eightLevelProportion: 0,
        weekGrantUid:"",
      },
      rules: {},
      blackList: [{ label: '无法获得周奖', value: 1 }, { label: '无法获得季度分红', value: 2 }, { label: '无法或者周奖和分红', value: 3 }],
      settlementList: [], // 结算规则列表
      editForm: {},
      editFormRules: {},
      formR: {
        num: 0,
      },
    };
  },
  methods: {
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        coinName: this.coinName,
      };
      this.listLoading = true;
      const res = await $api.warehouseGetConfig(query_data);
      if (res) {
        let {
          bonus,
          realityBonus,
          quarterMinPercent,
          quarterMaxPercent,
          // weekGrantTime,
          // quarterGrantTime,
          // pointUpdateTime,
          // weekSettlementTime,
          // blackRange,
          sixLevelProportion,
          sevenLevelProportion,
          eightLevelProportion,
          weekSwitch,
          quarterSwitch,
          weekGrantUid,
        } = res.data.data;
        this.form = {
          weekGrantUid,
          bonus: bonus, // 分红池初始金额
          realityBonus: realityBonus, //分红池目前金额
          // weekGrantTime: weekGrantTime, // 周奖发放时间
          // quarterGrantTime: quarterGrantTime, // 分红发放时间
          // pointUpdateTime: pointUpdateTime, // 积分更新时间
          // weekSettlementTime: weekSettlementTime, // 周薪更新时间
          // blackRange: blackRange, // 处罚范围
          quarterMinPercent: this.numToPercent(quarterMinPercent), // 日增随机区间小
          quarterMaxPercent: this.numToPercent(quarterMaxPercent), // 日增随机区间大
          sixLevelProportion: this.numToPercent(sixLevelProportion),
          sevenLevelProportion: this.numToPercent(sevenLevelProportion),
          eightLevelProportion: this.numToPercent(eightLevelProportion),
        };
        this.isWeekSwitch = !!weekSwitch;
        this.isQuarterSwitch = !!quarterSwitch;
      }
      this.listLoading = false;
    },
    async getRegister() {
      const res = await $api.warehouseMaxRegister({});
      if (res) {
        this.formR.num = res.data.data;
      }
    },
    // 控制输入的范围
    checkVal(val) {
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    checkValR(val) {
      if (this.formR[val] < 0) {
        this.formR[val] = 0;
      }
    },
    changeCheckBox(val) {},
    async changeSetting() {},
    // 保存前输入谷歌验证码
    openDialogCode() {
      this.$prompt('请输入谷歌验证码', '安全验证', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(({ value }) => {
          this.confirmSend(value);
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改',
          });
        });
    },
    // 修改状态值
    handleAdUpdate(val) {},
    // 保存页面修改
    async confirmSend(ggCode) {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const {
            // bonus,
            // realityBonus,
            quarterMinPercent,
            quarterMaxPercent,
            // weekGrantTime,
            // quarterGrantTime,
            // pointUpdateTime,
            // weekSettlementTime,
            // blackRange,
            sixLevelProportion,
            sevenLevelProportion,
            eightLevelProportion,
            weekSwitch,
            quarterSwitch,
            ...repo
          } = this.form;
          let params = {
            weekSwitch: this.isWeekSwitch ? 1 : 0,
            // weekGrantTime: weekGrantTime,
            quarterSwitch: this.isQuarterSwitch ? 1 : 0,
            // quarterGrantTime: quarterGrantTime,
            quarterMinPercent: this.percentToNum(quarterMinPercent),
            quarterMaxPercent: this.percentToNum(quarterMaxPercent),
            sixLevelProportion: this.percentToNum(sixLevelProportion),
            sevenLevelProportion: this.percentToNum(sevenLevelProportion),
            eightLevelProportion: this.percentToNum(eightLevelProportion),
            // pointUpdateTime: pointUpdateTime,
            // weekSettlementTime: weekSettlementTime,
            ...repo,
          };
          this.btnLoading = true;
          const res = await $api.warehouseUpdateConfig(params);
          if (res) {
            this.$message({ message: '修改成功！', type: 'success' });
            this.getList();
            this.isModify = false;
          }
          this.btnLoading = false;
        }
      });
    },
    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = val.replace(/\%/, '');
      } else {
      }
      // return parseFloat(val) / 100;
      return Precision.divide(val, 100);
    },
    // 数字转为百分比
    numToPercent(val) {
      // return parseFloat(val) * 100;
      return Precision.times(val, 100);
    },
    confirmRegister() {
      this.$refs['formR'].validate(async valid => {
        if (valid) {
          this.personLoading = true;
          const res = await $api.warehouseSetMaxRegister({ num: this.formR.num });
          if (res) {
            this.$message({ message: '修改注册人数成功！', type: 'success' });
            this.getRegister();
            this.isModifyRegister = false;
          }
          this.personLoading = false;
        }
      });
    },
    // 获取奖励支出UID
    async getSubExpendUserList() {
      const res = await $api.getSubExpendUserList({ pageNum: 1, pageSize: 1000 });
      if (res.data) {
        this.prizeUidArr = res.data.data.records;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('WarehouseSetting', [], []);
    this.isCURDAuth = authObj.isModify;

    this.getList();
    this.getRegister();
    this.getSubExpendUserList();
  },
};
</script>
<style scope lang="scss">
.warehouseset-container {
  padding: 4px 10px 10px 10px;

  h4 {
    margin: 10px 0;
    font-size: 18px;
  }

  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      h5 {
        font-size: 16px;
      }
      h5::before {
        content: '';
        border-left: 5px solid #03a7f0;
        margin-right: 10px;
      }
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
      .middle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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

      .header {
        width: 100%;
        color: #333;
        > div {
          display: inline-block;
          text-align: center;
        }
        .one {
          width: 100px;
        }
        .two {
          width: 100px;
          text-align: center;
        }
        .three {
          width: 300px;
        }
        .four {
          width: 120px;
        }
      }
      .con {
        color: #333;
        width: 100%;
        > div {
          display: inline-block;
          text-align: center;
        }
        .one {
          width: 100px;
        }
        .two {
          width: 100px;
        }
        .three {
          width: 300px;
        }
        .four {
          width: 120px;
        }
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
