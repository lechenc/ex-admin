<template>
  <div class="fiatUserDetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <div class="header">
          <div class="main">基本信息</div>
          <div>
            <span class="coin">币种</span>
            <el-select v-model="coinName" @change="selectCoin" clearable placeholder="请选择" size="medium">
              <el-option v-for="(item, i) in coinList" :key="i" :label="item.label" :value="item.label"> </el-option>
            </el-select>
          </div>
        </div>

        <div class="card-info">
          <div><span>账号：</span> {{ curRow.account }}</div>
          <div><span>昵称：</span> {{ curRow.nickName }}</div>
          <div>
            <span>用户类型</span
            >{{
              curRow.userLevel == 0
                ? '普通用户'
                : curRow.userLevel == 1
                ? '普通广告商'
                : curRow.userLevel == 2
                ? '高级广告商'
                : curRow.userLevel == 3
                ? '企业广告商'
                : ''
            }}
          </div>
          <div><span>企业类型</span>{{ curRow.userEnterprise == 0 ? '非企业号' : curRow.userEnterprise == 1 ? '企业号' : '' }}</div>
          <div><span>购买交易额：</span>{{ curRow.buyAmount + coinName }}</div>
          <div><span>购买成交数：</span>{{ curRow.buyNum }}</div>
          <div><span>出售交易额：</span>{{ curRow.saleAmount + coinName }}</div>
          <div><span>出售成交数：</span>{{ curRow.saleNum }}</div>
          <template v-if="curRow.userLevel != 0">
            <div><span>申请商家时间：</span>{{ curRow.certificationTimeStamp | filtTime }}</div>
            <div><span>保证金：</span>{{ curRow.frozen + coinName }}</div>
            <div><span>放币时效：</span>{{ curRow.paymentAveTime + 's' }}</div>
            <div><span>成交率：</span>{{ Math.floor(curRow.succRate * 10000) / 100 + '%' }}</div>
            <div><span>确认时效：</span>{{ curRow.letgoAveTime + 's' }}</div>
            <!--   <div><span>状态</span>{{ curRow.sysStatus == 0 ? "失效" : "有效" }}</div> -->
          </template>
          <div>
            <span>禁止发布广告：</span
            ><el-switch v-model="isPublishAdv" disabled active-color="#13ce66" inactive-color="#ff4949" @click.native="handleAdUpdate()"></el-switch>
          </div>
        </div>
      </div>
    </el-card>
    <!--
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>抢派单参数设置</H3>
        <div class="card-list">
          <div>
            <span>派单兑入开关({{ coinName }})：</span>
            <el-switch
              v-model="sysMatchSwitch"
              disabled
              active-color="#13ce66"
              inactive-color="#ff4949"
              @click.native="handleUpdate('sysMatchSwitch')"
            ></el-switch>
          </div>
          <div>
            <span>派单兑出开关({{ coinName }})：</span>
            <el-switch
              v-model="sysCashoutSwitch"
              disabled
              active-color="#13ce66"
              inactive-color="#ff4949"
              @click.native="handleUpdate('sysCashoutSwitch')"
            ></el-switch>
          </div>
          <div>
            <span>抢单兑入开关({{ coinName }})：</span>
            <el-switch
              v-model="sysRushMatchSwitch"
              disabled
              active-color="#13ce66"
              inactive-color="#ff4949"
              @click.native="handleUpdate('sysRushMatchSwitch')"
            ></el-switch>
          </div>
          <div>
            <span>抢单兑出开关({{ coinName }})：</span>
            <el-switch
              v-model="sysRushCashoutSwitch"
              disabled
              active-color="#13ce66"
              inactive-color="#ff4949"
              @click.native="handleUpdate('sysRushCashoutSwitch')"
            ></el-switch>
          </div>
          <div>
            <span>派单兑入范围({{ coinName }})：</span>
            <div class="value">【{{ matchConfig.matchMin }}】 ~ 【{{ matchConfig.matchMax }}】</div>
          </div>
          <div>
            <span>派单兑出范围({{ coinName }})：</span>
            <div class="value">【{{ matchConfig.cashoutMin }}】 ~ 【{{ matchConfig.cashoutMax }}】</div>
          </div>
        </div>
      </div>
    </el-card>   
    -->

    <!--   <el-card class="box-card" >
      <div class="box-card-con">
        <H3>邀请关系</H3>
        <el-table 
          v-if="inviteList && inviteList.length > 0"
          v-loading="diaLoading"
          :data="inviteList"
          style="width: 100%;margin-bottom: 20px;"
          row-key="inviteeId"
          border
          default-expand-all
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column prop="inviteeName" label="账号"> </el-table-column>

          <el-table-column align="center" prop="reward" label="买入佣金费率">
            <div slot-scope="scope">
              <ul class="rate">
                <li>
                  <p>银行卡</p>
                  <p>{{ $fmtNumber("%2", scope.row.cardBuyRate) }}%</p>
                </li>
                <li>
                  <p>支付宝个码</p>
                  <p>{{ $fmtNumber("%2", scope.row.abuyRate) }}%</p>
                </li>
                <li>
                  <p>支付宝转账码</p>
                  <p>{{ Math.floor(scope.row.btBuyRate * 10000) / 100 }}%</p>
                </li>
                <li>
                  <p>微信</p>
                  <p>{{ $fmtNumber("%2", scope.row.wxBuyRate) }}%</p>
                </li>
                <li>
                  <p>宝转卡</p>
                  <p>{{ $fmtNumber("%2", scope.row.bbuyRate) }}%</p>
                </li>
              </ul>
            </div>
          </el-table-column>
          <el-table-column align="center" prop="reward" label="卖出佣金费率">
            <div slot-scope="scope">
              <ul class="rate">
                <li>
                  <p>银行卡</p>
                  <p>{{ Math.floor(scope.row.cardSaleRate * 10000) / 100 }}%</p>
                </li>
                <li>
                  <p>支付宝个码</p>
                  <p>{{ Math.floor(scope.row.asaleRate * 10000) / 100 }}%</p>
                </li>
                <li>
                  <p>支付宝转账码</p>
                  <p>{{ Math.floor(scope.row.btSaleRate * 10000) / 100 }}%</p>
                </li>
                <li>
                  <p>微信</p>
                  <p>{{ Math.floor(scope.row.wxSaleRate * 10000) / 100 }}%</p>
                </li>
                <li>
                  <p>宝转卡</p>
                  <p>{{ Math.floor(scope.row.bsaleRate * 10000) / 100 }}%</p>
                </li>
              </ul>
            </div>
          </el-table-column>
          <el-table-column label="操作" width="190">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="editRate(scope.row)">修改佣金</el-button>
              <el-button type="text" size="mini" @click="moveData(scope.row)">迁移</el-button>
              <el-button type="text" @click.native="editBalance(scope.row)" size="mini">修改余额</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card> -->

    <!-- 修改佣金弹窗 -->
    <el-dialog :visible.sync="dialogEditVisible" width="700px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="支付渠道" prop="payType">
          <el-select v-model="form.payType" placeholder="" wdith="20%">
            <el-option v-for="(item, idx) in payList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提现佣金费率" prop="rate">
          <el-input type="text" placeholder="请输入" v-model="form.rate">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="购买佣金费率" prop="buyRate">
          <el-input type="text" placeholder="请输入" v-model="form.buyRate">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmEdit">确定</el-button>
      </div>
    </el-dialog>
    <!-- 修改余额弹窗 -->
    <EditBalance :visible.sync="dialogBalanceVisible" :curId="balanceId" @close="closeBalanceDialog"></EditBalance>
    <!-- 表格勾选弹窗（迁移） -->
    <TableCheckBox :visible.sync="dialogCheckVisible" :curItem="moveItem" @handler="getCheckData" @close="closeCheckDialog"></TableCheckBox>
  </div>
</template>

<script>
import $api from '@/api/api';
import BRangeChoose from '@/components/b-range-choose';
import Btable from '@/components/table/b-table';
import TableCheckBox from '@/components/fiat/tableCheckBox';
import EditBalance from '@/components/fiat/editBalance';
import { inviteCol } from '@/config/column/fiat';
import { parseTime } from '@/utils/index';
import activePage from "@/mixin/keepPage"

export default {
  name: 'FiatUserDetail',
  components: { BRangeChoose, Btable, TableCheckBox, EditBalance },
  mixins:[activePage],
  data() {
    return {
      coinList: [],
      coinName: this.$variableCoin,
      diaLoading: false, // 表格loading
      inviteList: [], // 表格列表
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0,
      nowUserId: 0, // 数据id
      curRow: {}, // html里查看详情的条目
      currItem: {}, // 邀请关系列表里点击修改佣金的数据对象
      moveItem: {}, // 邀请关系列表里点击迁移的数据对象
      balanceId: {}, // 修改余额的数据成员id
      matchConfig: {}, // 订单详情

      isPublishAdv: false, // 是否禁止发布广告
      sysMatchSwitch: false, // if派单兑入
      sysCashoutSwitch: false, // if派单兑出
      sysRushMatchSwitch: false, // if抢单兑入
      sysRushCashoutSwitch: false, // if抢单兑出
      // 状态键值对象：
      operareObj: {
        isPublishAdv: 1,
        sysMatchSwitch: 2,
        sysCashoutSwitch: 3,
        sysRushMatchSwitch: 4,
        sysRushCashoutSwitch: 5,
      },
      // 修改佣金弹出框内的表单
      form: {
        payType: '',
        rate: '',
        buyRate: '',
      },
      rules: {
        payType: [{ required: true, message: '必填', trigger: 'blur' }],
        rate: [{ required: true, message: '必填', trigger: 'blur' }],
        buyRate: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      // 支付方式列表
      payList: [
        { label: '银行卡', value: '1' },
        { label: '支付宝个码', value: '2' },
        { label: '支付宝转账码', value: '5' },
        { label: '微信', value: '3' },
        { label: '宝转卡', value: '4' },
      ],
      title: '修改佣金',
      dialogEditVisible: false, // 是否编辑弹窗
      dialogCheckVisible: false, // 是否勾选迁移表格弹窗可见
      dialogBalanceVisible: false, // 是否显示修改金额弹窗
    };
  },
  filters: {
    userType(val) {},
    filtTime(val) {
      return parseTime(val);
    },
  },
  methods: {
    // 修改佣金
    editRate(data) {
      this.currItem = data;
      this.dialogEditVisible = true;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
      });
    },
    // 迁移
    moveData(data) {
      this.moveItem = data;
      this.dialogCheckVisible = true;
    },
    // 修改余额
    editBalance(row) {
      this.balanceId = row.inviteeId;
      this.dialogBalanceVisible = true;
    },
    // 关闭修改余额弹窗
    closeBalanceDialog() {
      this.dialogBalanceVisible = false;
      this.getInviteList();
    },
    // 关闭表格勾选弹出框
    closeCheckDialog(data) {
      this.dialogCheckVisible = false;
      this.getInviteList();
    },
    // 获取表格弹出框勾选的数据
    getCheckData(data) {
      this.dialogCheckVisible = false;
    },
    // switch-button划转后对应的统一修改
    handleUpdate(type) {
      this.$confirm(`确认更改状态?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消' })
        .then(async () => {
          let params = {
            coinName: this.coinName,
            userId: this.nowUserId,
          };
          params[type] = !!this[type];
          const res = await $api.updateSysSwitch(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.getSubDetail();
          } else {
            this.$message({ message: '更新失败', type: 'danger' });
          }
        })
        .catch(() => {
          console.log('cancel');
        });
    },
    // 是否发布广告
    handleAdUpdate() {
      this.$confirm(`确认更改状态?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消' })
        .then(async () => {
          let params = {
            isPublishAdv: this.isPublishAdv ? 0 : 1,
            userId: this.nowUserId,
          };
          // params[type] = !!this[type];
          const res = await $api.isPublishAdv(params);
          if (res) {
            this.$message({ message: '更改成功', type: 'success' });
            this.getDetail();
          } else {
            this.$message({ message: '更新失败', type: 'danger' });
          }
        })
        .catch(() => {
          console.log('cancel');
        });
    },
    // 提交修改佣金表单
    confirmEdit() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { payType, rate, buyRate } = this.form;
          let params = {
            buyRate: this.$util.fmtNumber('/4', buyRate),
            rate: this.$util.$fmtNumber('/4', rate),
            inviteeId: this.currItem.inviteeId,
            payType: payType,
          };
          const res = await $api.updateRewardRate(params);
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.dialogEditVisible = false;
            this.getInviteList();
          }
        }
      });
    },
    //切换币种
    selectCoin() {
      this.getDetail();
      this.getSubDetail();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getInviteList();
    },
    // 获取邀请明细数据,生成表格
    async getInviteList() {
      if (this.diaLoading) return;
      const params = {
        inviteeId: this.nowUserId,
      };
      this.diaLoading = true;
      const res = await $api.findInviteTree(params);
      if (res) {
        this.inviteList = [res.data.result];
      }
      this.diaLoading = false;
    },
    // 用户信息
    async getDetail() {
      const params = {
        coinName: this.coinName,
        userId: this.nowUserId,
      };
      const res = await $api.queryOtcUserDetail(params);
      if (res) {
        this.curRow = res.data.result;
        // 是否允许发布广告
        this.isPublishAdv = this.curRow && !!(this.curRow.isPublishAdv == 1);
      }
    },
    // 抢派单参数
    async getSubDetail() {
      const params = {
        coinName: this.coinName,
        userId: this.nowUserId,
      };
      const res = await $api.queryUserMatchConfig(params);
      if (res) {
        // 初始化switch-button 的状态（因为要求是boolean类型）
        this.matchConfig = res.data.result;
        this.sysMatchSwitch = !!this.matchConfig.sysMatchSwitch;
        this.sysCashoutSwitch = !!this.matchConfig.sysCashoutSwitch;
        this.sysRushMatchSwitch = !!this.matchConfig.sysRushMatchSwitch;
        this.sysRushCashoutSwitch = !!this.matchConfig.sysRushCashoutSwitch;
      }
    },
  },
  // mounted() {
  //   this.nowUserId = this.$route.query.id;
  //   this.$store.dispatch('common/getFiatCoinList').then(() => {
  //     this.coinList = this.$store.state.common.fiatcoinlist;
  //   });
  //   this.getDetail();
  //   this.getSubDetail();
  //   // this.getInviteList();
  // },
  activated(){
      if(this.isInTags()){
        return;
      }
      this.inviteList= []; // 表格列表
      this.current_page= 1; // 当前页码
      this.pageSize= 10; // 当前每页显示页码数
      this.total= 0;
      this.nowUserId= 0; // 数据id
      this.curRow= {}; // html里查看详情的条目
      this.currItem= {}; // 邀请关系列表里点击修改佣金的数据对象
      this.moveItem= {}; // 邀请关系列表里点击迁移的数据对象
      this.balanceId= {}; // 修改余额的数据成员id
      this.matchConfig= {}; // 订单详情

      this.isPublishAdv= false; // 是否禁止发布广告
      this.sysMatchSwitch= false; // if派单兑入
      this.sysCashoutSwitch= false; // if派单兑出
      this.sysRushMatchSwitch= false; // if抢单兑入
      this.sysRushCashoutSwitch= false; // if抢单兑出

    this.nowUserId = this.$route.query.id;
    this.$store.dispatch('common/getFiatCoinList').then(() => {
      this.coinList = this.$store.state.common.fiatcoinlist;
    });
    this.getDetail();
    this.getSubDetail();
  }
};
</script>

<style lang="scss">
.fiatUserDetail-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 20px 0;
  }
  .container-footer {
    display: flex;
    justify-content: flex-end;
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
  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      h3 {
        padding: 0;
        margin: 0 0 20px 0;
      }
      h3::before {
        content: '';
        border-left: 5px solid #03a7f0;
        margin-right: 10px;
      }
      .header {
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .main {
          margin-bottom:10px;
          font-size: 19px;
          font-weight: 700;
        }
        .main::before {
          content: '';
          border-left: 5px solid #03a7f0;
          margin-right: 10px;
        }
        .coin {
          margin-right: 15px;
        }
      }
      .card-info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 300px;
          margin-right: 40px;
          font-size: 16px;
          line-height: 40px;
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }
      .card-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 45%;
          margin-bottom: 10px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          font-size: 16px;
          > span {
            display: inline-block;
            width: 20%;
            min-width: 190px;
            font-size: 16px;
            text-align: right;
            line-height: 40px;
          }
          .value {
            // width: 50%;
            margin-left: 15px;
            margin-right: 20px;
            display: inline-block;
            font-size: 18px;
          }
          button {
            display: inline-block;
          }
        }
      }
      .card-line {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        .line {
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
    }
  }
}

.el-switch.is-disabled {
  opacity: 1;
}
.el-switch.is-disabled .el-switch__core,
.el-switch.is-disabled .el-switch__label {
  cursor: pointer !important;
}
</style>
