<template>
  <div class="lotteryListDetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-form :model="form" ref="form" :rules="rules" label-width="160px" size="medium">
      <el-card class="box-card">
        <el-card class="box-card">
          <div class="box-card-con">
            <el-form-item label="活动名称" prop="activityName" :label-width="labelWidth">
              <el-col :span="7">
                <el-input type="text" placeholder="请输入" v-model="form.activityName" :disabled="!isChangeInfo"></el-input>
              </el-col>
            </el-form-item>
            <!--<el-form-item label="活动时间" :label-width="labelWidth" :required="true"> -->
            <b-two-date-timer ref="twoTimer" :labelWidth="labelWidth" labelWords="活动任务有效时间" :date1.sync="form.startTime" :date2.sync="form.endTime" :isdisabled="!isChangeInfo"></b-two-date-timer>
            <!-- </el-form-item> -->
            <el-form-item label="参加活动用户范围" prop="userType" :label-width="labelWidth">
              <el-select v-model="form.userType" placeholder="请选择" style="width: 180px" :disabled="!isChangeInfo">
                <el-option v-for="(dot, idx) in userTypeListFormal" :key="idx" :label="dot.label" :value="dot.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所有抽奖机会总数" prop="totalRaffle" :label-width="labelWidth">
              <el-col :span="7">
                <el-input type="number" placeholder="请输入" v-model="form.totalRaffle" :disabled="!isChangeInfo" @input="checkVal('totalRaffle')"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item style="margin: 0 0 95px 0" label="活动规则" prop="rule" :label-width="labelWidth">
              <QuillEditor class="editor-top" v-model="form.rule" ref="quilleditor" :disabled="!isChangeInfo" />
            </el-form-item>

            <el-row v-for="(item, idx) in activityList" :key="idx">
              <el-form-item label="活动任务1 开仓交易量每达到" :required="true" label-width="220px">
                <el-col :span="15">
                  <el-select v-model="item.coinId" placeholder="请选择币种" style="width: 180px" :disabled="!isChangeInfo">
                    <el-option v-for="(dot, idx) in coinList" :key="idx" :label="dot.label" :value="dot.value"></el-option>
                  </el-select>
                  <el-input type="number" placeholder="请输入数量" v-model="item.amount" :disabled="!isChangeInfo" @input="checkValActiviryList(idx, 'amount')" style="margin-left: 20px; width: 180px"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="完成一次可得奖券数量" :required="true" :label-width="labelWidth">
                <el-col :span="7">
                  <el-input type="number" placeholder="请输入" v-model="item.singleRaffle" :disabled="!isChangeInfo" @input="checkValActiviryList(idx, 'singleRaffle')"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="单人可得抽奖券奖励上限" :required="true" :label-width="labelWidth">
                <el-col :span="7">
                  <el-input type="number" placeholder="请输入数量" v-model="item.singleRaffleLimit" :disabled="!isChangeInfo" @input="checkValActiviryList(idx, 'singleRaffleLimit')"></el-input>
                </el-col>
              </el-form-item>
            </el-row>

            <el-form-item label="抽奖池奖品及中奖人设置" :label-width="labelWidth">
              <ul>
                <li class="con" v-for="(el, index) in prizeList" :key="index">
                  <el-select v-model="el.prizeId" placeholder="请选择奖励名称" style="width: 180px" :disabled="!isChangeInfo">
                    <el-option v-for="(item, index) in prizeListFormal" :key="index" :label="item.prizeName" :value="item.id"></el-option>
                  </el-select>
                  <el-input type="number" placeholder="请输入累计亏损值" v-model="el.totalLossAmount" :disabled="!isChangeInfo" @input="checkValPrize(index, 'totalLossAmount')"></el-input>
                  <el-input type="number" placeholder="请输入名额数量" v-model="el.num" :disabled="!isChangeInfo" @input="checkValPrize(index, 'num')"></el-input>

                  <!-- <el-input type="text" placeholder="请输入必中id（英文逗号分隔）" v-model="el.winningUid" :disabled="!isChangeInfo" @input="changeGroup(index, 'winningUid')"></el-input> -->
                  <!-- <el-form-item class="radio-item" label="单个用户是否可多次获得" :label-width="labelWidth">
                    <el-radio-group v-model="el.gainMore" :disabled="!isChangeInfo">
                      <el-radio :label="1">是</el-radio>
                      <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                  </el-form-item> -->
                  <div class="del-btn">
                    <el-button round plain type="danger" size="small" :disabled="!isChangeInfo" @click.stop="delPrizeList(index)">删除</el-button>
                  </div>
                </li>
              </ul>
            </el-form-item>
            <div v-if="queryStr != 'detail'">
              <div class="middle">
                <el-button :disabled="!isChangeInfo" type="primary" size="medium" @click="addPrizeList">+添加奖励</el-button>
              </div>
            </div>

            <el-form-item class="radio-item" label="抽奖机会发放时间" :label-width="labelWidth" :required="true">
              <el-radio-group :value="1" :disabled="true">
                <el-radio :label="1">是</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="抽奖机会截止时间" :label-width="labelWidth" prop="luckDrawEndTime">
              <el-date-picker v-model="form.luckDrawEndTime" type="datetime" placeholder="选择日期时间" @change="checkTimer('luckDrawEndTime')" :disabled="!isModify"> </el-date-picker>
            </el-form-item>
            <el-form-item class="radio-item" label="奖励发放时间" :label-width="labelWidth" :required="true">
              <el-radio-group :value="1" :disabled="true">
                <el-radio :label="1">是</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="活动上架开关" prop="activityStatus">
              <el-switch v-model="form.activityStatus" :disabled="!isModify" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-form-item>
            <el-form-item label="抽奖启动开关" prop="playStatus">
              <el-switch v-model="form.playStatus" :disabled="!isModify" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-form-item>
          </div>
        </el-card>

        <div v-if="queryStr == 'edit'">
          <div class="middle" v-if="!isUpdate">
            <el-button
              type="primary"
              size="medium"
              @click="
                isUpdate = true;
                isModify = true;
              "
              >编辑</el-button
            >
          </div>
          <div class="middle" v-if="isUpdate">
            <el-button type="primary" plain size="medium" @click="confirmBack">取消</el-button>
            <el-button type="primary" size="medium" @click="confirmSend()" :loading="btnLoading">提交修改</el-button>
          </div>
        </div>
        <div v-if="queryStr == 'add'">
          <div class="middle">
            <el-button type="primary" size="medium" :loading="btnLoading" @click="confirmSend()">提交</el-button>
          </div>
        </div>
      </el-card>
    </el-form>
  </div>
</template>
<script>
import $api from '@/api/api';
import BTwoDateTimer from '@/components/b-two-date-timer';
import activePage from '@/mixin/keepPage';
import QuillEditor from '@/components/quill/quill-editor.vue';
export default {
  name: 'LotteryListDetail',
  components: {
    BTwoDateTimer,
    QuillEditor,
  },
  mixins: [activePage],
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交
      personLoading: false, // 加入提交
      isUpdate: false, // 是否编辑修改状态
      isModify: false, // 是否可以修改(控制页面下半部分内是否修改操作)
      isBeforeModify: true, // 是否可修改上版部分的初始状态（当前时候未到开始时间则可以编辑，）
      listLoading: false, // 表格loading
      list: [], //委托列表
      activityList: [], // 活动列表
      taskList: [], //  任务列表
      prizeList: [], // 抽奖池设置列表
      queryId: '', // 列表页传入的条目id
      queryStr: '', // 获取的状态值
      labelWidth: '180px',
      coinList: [], // 合约币种

      form: {
        id: '',
        activityName: '',
        startTime: '',
        endTime: '',
        userType: '',
        totalRaffle: '',
        rule: '',
        luckDrawEndTime: '',
        activityStatus: false,
        playStatus: false,
      },
      rules: {
        activityName: [{ required: true, message: '必填' }],
        userType: [{ required: true, message: '必填' }],
        totalRaffle: [{ required: true, message: '必填' }],
        rule: [{ required: true, message: '必填' }],
        luckDrawEndTime: [{ required: true, message: '必填' }],
      },
      taskListFormal: [], // 任务类型数组
      prizeListFormal: [], // 奖品类型数组
      userTypeListFormal: [
        { label: '所有用户', value: 1 },
        { label: '已实名用户', value: 2 },
      ], // 参与活动的用户类型
    };
  },
  computed: {
    // 上半部分修改权限判断
    // 1.编辑状态 && 时间在开始时间之前（开始时候根据请求得到而不是即时输入而得） && 处于编辑状态;  2. 或者处于添加状态则直接可编辑
    isChangeInfo() {
      return (this.queryStr === 'edit' && this.isBeforeModify && this.isUpdate) || this.queryStr === 'add';
    },
  },

  methods: {
    // 删除奖品条目
    async delPrizeList(index) {
      let tmp = this.prizeList[index];
      if (!tmp.id) {
        // 如果是新增的未保存的条目
        this.prizeList.splice(index, 1);
      } else {
        // 如果是后台返回的条目
        const params = {
          id: this.queryId,
          prizeId: tmp.prizeId,
        };
        // 删除奖品池奖品条目
        const res = await $api.setDeleteActivity(params);
        if (res) {
          this.$message({ message: '删除奖品信息成功！', type: 'error' });
          this.prizeList.splice(index, 1);
        }
      }
    },
    // 增加奖品条目
    addPrizeList() {
      this.prizeList.push({
        prizeId: '',
        num: '',
        totalLossAmount: '',
        winningUid: '',
        // gainMore: 0,
      });
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        id: this.queryId,
      };
      this.listLoading = true;
      const res = await $api.getAccountActivityGetActivity(query_data);
      if (res && res.data.data) {
        let { activityStatus, playStatus, taskId, activityPrizeRulesBo, activityTaskBo, activityName, startTime, endTime, userType, totalRaffle, rule, luckDrawEndTime, id } = res.data.data;
        this.form = {
          id,
          activityName,
          startTime: (startTime + '').replace(/\-/g, '/'),
          endTime: (endTime + '').replace(/\-/g, '/'),
          userType,
          totalRaffle,
          rule,
          luckDrawEndTime: (luckDrawEndTime + '').replace(/\-/g, '/'),
          activityStatus: !!activityStatus,
          playStatus: !!playStatus,
        };
        // // 任务字符串转数组
        // let tmpTask = (taskId && taskId.split(',')) || [];
        // this.taskList = tmpTask.map(v => {
        //   return { value: +v };
        // });
        // 活动任务列表拷贝
        this.activityList = JSON.parse(JSON.stringify(activityTaskBo));
        // 暂时特殊处理，毕竟不能动态增加
        if (!this.activityList.length) {
          this.activityList.push({
            id: '',
            amount: '',
            singleRaffle: '',
            coinId: '',
            singleRaffleLimit: 0,
          });
        }
        // 奖品列表拷贝
        this.prizeList = JSON.parse(JSON.stringify(activityPrizeRulesBo));
        // 处于编辑模式,开始时间小于当前时间才能编辑
        if (this.queryStr === 'edit') {
          this.isBeforeModify = !!(new Date() < new Date(startTime));
        }
      }
      this.listLoading = false;
    },
    // 控制输入的范围
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    checkValActiviryList(index, val) {
      this.activityList[index][val] = (this.activityList[index][val] + '').replace(/[^\d]/g, '');
      if (this.activityList[index][val] < 0) {
        this.activityList[index][val] = 0;
      }
    },
    // 控制输入的范围
    checkValPrize(index, val) {
      this.prizeList[index][val] = (this.prizeList[index][val] + '').replace(/[^\d]/g, '');
      if (this.prizeList[index][val] < 0) {
        this.prizeList[index][val] = 0;
      }
    },
    // 非英文逗号和数字字母,全屏蔽
    changeGroup(index, val) {
      let tmp = this.prizeList[index][val];
      this.prizeList[index][val] = tmp && tmp.replace(/[^\,\d]/gi, '');
    },
    confirmBack() {
      this.isUpdate = false;
      this.isModify = false;
      this.getList();
    },
    // 判断数组成员的属性是否有空的
    checkArrValueNull(arr, txt) {
      if (!arr.length) {
        this.$message({ message: txt, type: 'error' });
        return false;
      } else {
        let isError = true;
        arr.forEach((v) => {
          let keys = Object.keys(v);
          keys.map((v) => {
            if (keys[v] == '') {
              isError = false;
            }
          });
        });
        return isError;
      }
    },
    // 保存页面修改
    async confirmSend() {
      if (!this.form.startTime || !this.form.endTime) {
        this.$refs['twoTimer'].valiteValue();
        return;
      }
      if (!this.checkArrValueNull(this.prizeList, '抽奖奖品及中奖人设置行 信息必须填写完整')) {
        return;
      }
      if (!this.checkArrValueNull(this.activityList, '活动任务行 信息必须填写完整')) {
        return;
      }
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          if (this.prizeList.length != 8) {
            this.$message({ message: '抽奖池奖品及中奖人设置条目必须为8个', type: 'error', duration: 2000 });
            return;
          }
          let {
            id,
            // activityName,
            startTime,
            endTime,
            // userType,
            // rule,
            totalRaffle,
            activityStatus,
            playStatus,
            luckDrawEndTime,
            ...repo
          } = this.form;
          // 添加时候，这里只有一个数组成员，暂时特殊处理下
          if (this.queryStr == 'add') {
            if (this.taskListFormal.length) {
              this.activityList[0].id = this.taskListFormal[0].id;
            } else {
              this.$message({ message: '后台没配置活动任务，请检查', type: 'error' });
              return;
            }
          }
          // 额外传回taskId
          let tmpTaskArr = this.activityList.map((v) => {
            return (v = v.id);
          });
          // 时间处理
          luckDrawEndTime = !~(luckDrawEndTime + '').indexOf('/') ? this.$util.dateFormat(luckDrawEndTime, 'YYYY/MM/DD HH:mm:ss').replace(/\//g, '-') : (luckDrawEndTime + '').replace(/\//g, '-');
          let params = {
            activityStatus: activityStatus ? 1 : 0,
            playStatus: playStatus ? 1 : 0,
            activityTaskBo: this.activityList,
            activityPrizeRulesBo: this.prizeList,
            totalRaffle: totalRaffle,
            remainingRaffle: totalRaffle,
            taskId: tmpTaskArr.join(','),
            startTime: (startTime + '').replace(/\//g, '-'),
            endTime: (endTime + '').replace(/\//g, '-'),
            luckDrawEndTime: luckDrawEndTime,
            ...repo,
          };

          this.btnLoading = true;
          this.queryStr == 'add' ? Object.assign(params) : Object.assign(params, { id });
          const res = this.queryStr == 'add' ? await $api.getAccountActivityAdd(params) : await $api.getAccountActivityUpdate(params);
          if (res) {
            let txt = this.queryStr == 'add' ? '添加成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            if (this.queryStr == 'add') {
              // 把详情页和列表页从keep-alive中缓存,保证返回后列表页数据状态是最新的
              this.reloadTagsPage('/front/lottery/lotteryListDetail');
              this.reloadTagsPage('/front/lottery/lotteryList');
              this.$router.push({ path: '/front/lottery/lotteryList' });
            } else {
              this.isUpdate = false;
              this.isModify = false;
              this.reloadTagsPage('/front/lottery/lotteryList');
              this.getList();
            }
          }
          this.btnLoading = false;
        }
      });
    },
    // 获取任务类型列表
    async getTaskList() {
      const res = await $api.getAlltask({});
      console.log('res',res)
      if (res) {
        this.taskListFormal = res.data.data;
      }
    },
    // 获取奖品详情列表
    async getPrizeList() {
      const res = await $api.getAccountActivityPrizeList({});
      if (res) {
        this.prizeListFormal = res.data.data;
      }
    },
    // 页面时间选择限制（活动事件除外，在组件自己控制）
    checkTimer(val) {
      // if (val === 'endTime') {
      //   if (!this.form[val]) {
      //     this.$message({ message: '活动结束时间必填', type: 'error' });
      //   } else {
      //     if (new Date(this.form[val]) > new Date(this.form['grantRaffleTime'])) {
      //       this.$message({ message: '抽奖券发放时间必须大于或等于活动结束时间', type: 'error' });
      //       this.form['grantRaffleTime'] = '';
      //     }
      //   }
      // } else
      if (val === 'luckDrawEndTime') {
        if (!this.form[val]) {
          this.$message({ message: '抽奖机会截止时间必填', type: 'error' });
        } else {
          if (new Date(this.form[val]) <= new Date(this.form['endTime'])) {
            this.$message({ message: '抽奖机会截止时间必须大于或等于抽奖券发放结束时间', type: 'error' });
            this.form['luckDrawEndTime'] = '';
          }
        }
      }
    },
    initFunc() {
      this.$store.dispatch('common/getSymbolListContract').then(() => {
        let tmp = this.$store.state.common.symbollistContract;
        if (tmp.length) {
          let objT = {
            label: tmp[0].marketCoinName,
            value: tmp[0].marketId,
          };
          this.coinList = [objT];
        }
      });

      this.queryId = this.$route.query.id || ''; // 添加的状态不带id
      this.queryStr = this.$route.query.status;

      if (this.queryStr == 'add') {
        this.isModify = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.prizeList.push({
            prizeId: '',
            num: '',
            totalLossAmount: '',
            winningUid: '',
            // gainMore: 0,
          });
          this.activityList.push({
            id: '',
            amount: '',
            singleRaffle: '',
            coinId: '',
            singleRaffleLimit: 0,
          });
        });
      } else if (this.queryStr == 'edit') {
        // 活动开始后仅上下架开关和抽奖开关和抽奖券发放时间和奖励自动发放时间和抽奖池奖品及中奖人设置可编辑，活动结束后，所有的字段均不可编辑
        this.isUpdate = false;
        this.getList();
      } else if (this.queryStr == 'detail') {
        this.isModify = false;
        this.getList();
      }
      this.getTaskList();
      this.getPrizeList();
    },
  },
  mounted() {
    this.taskList = []; //  任务列表
    this.activityList = []; // 活动任务列表
    this.prizeList = []; // 抽奖池设置列表
    this.getId = ''; // 列表页传入的条目id
    this.form = {
      activityName: '',
      startTime: '',
      endTime: '',
      userType: '',
      totalRaffle: '',
      rule: '',
      luckDrawEndTime: '',
      activityStatus: false,
      playStatus: false,
    };
    this.$refs['form'].resetFields();
    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.total = 0; // 总条数
    this.pages = 0; // 总页数
    this.isUpdate = false;
    this.isModify = false;
    this.initFunc();
  },
};
</script>
<style scope lang="scss">
.lotteryListDetail-container {
  padding: 4px 10px 10px 10px;

  h4 {
    margin: 10px 0;
    font-size: 18px;
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
      h5 {
        font-size: 16px;
      }
      h5::before {
        content: '';
        border-left: 5px solid #03a7f0;
        margin-right: 10px;
      }
      .next-line {
        margin-top: 75px;
      }
      .con-line {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        // .panel {
        //   > span {
        //     display: inline-block;
        //     min-width: 120px;
        //     margin-right: 10px;
        //     text-align: right;
        //   }
        // }
      }
      .editor-top {
        margin-top: -30px;
      }
      .line-left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
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
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        list-style-type: none;
        margin-bottom: 5px;
        padding: 0;
        li {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          // border-radius: 5px;
          // box-shadow:1px 1px 2px 2px #ccc;rgba(0,0,0,.5)
          // box-shadow: 1px 2px 6px #ccc;
          > div {
            margin: 0 10px 10px 0;
            width: 14%;
            min-width: 100px;
            &:first-child {
              width: auto;
            }
            &.del-btn {
              width: 80px;
              margin-left: 10px;
            }
            &.radio-item {
              min-width: 285px;
              width: 25%;
            }
          }
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
    padding: 0 0 20px 0;
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
@media screen and(max-width: 750px) {
  .lotteryListDetail-container {
    .box-card {
      .box-card-con {
        .next-line {
          margin-top: 175px;
        }
      }
    }
  }
}
</style>
