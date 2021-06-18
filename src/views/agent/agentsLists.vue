<template>
  <div class="agentsLists-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="btnArr.length">
      <el-button type="primary" size="medium" v-if="btnArr.includes('add')" @click="addLine">添加一级代理商</el-button>
      <el-button type="primary" size="medium" v-if="btnArr.includes('params')" @click="editParams">商务返佣参数设置</el-button>
      <!-- <el-button type="primary" size="medium" v-if="btnArr.includes('config')" @click="$router.push('/contract/agent/agentsListsConfig')">代理商等级配置</el-button> -->
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="700px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="代理商UID" :label-width="formLabelWidth" prop="uid">
              <el-input type="text" v-model.trim="cForm.uid" placeholder="请输入" :disabled="!!userId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="登录名" :label-width="formLabelWidth" prop="username">
              <el-input type="text" v-model.trim="cForm.username" placeholder="请输入6-20位字符，不可输入特殊字符"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="登录密码" :label-width="formLabelWidth" prop="password">
              <el-input v-model.trim="cForm.password" type="password" autocomplete="off" placeholder="请输入包含字母和数字的6-16位密码">
                <!-- <span slot="append" class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span> -->
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="备注" :label-width="formLabelWidth" prop="remark">
              <el-input maxlength="50" type="text" v-model.trim="cForm.remark" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="手续费返佣比例" :label-width="formLabelWidth" prop="commissionPercent">
              <el-input type="text" v-model.trim="cForm.commissionPercent" placeholder="请输入" @input="checkVal('commissionPercent', 1)">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="!isBusiness" :span="24">
          <el-col :span="20">
            <el-form-item label="团队长返佣比例" :label-width="formLabelWidth" prop="packPercent">
              <el-input type="text" v-model.trim="cForm.packPercent" placeholder="请输入" @input="checkVal('packPercent', 1)">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="每次结算盈利情况下加入保证金比例" :label-width="formLabelWidth" prop="bondPercent">
              <el-input type="text" v-model.trim="cForm.bondPercent" placeholder="请输入" @input="checkVal('bondPercent', 2)">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item :label-width="formLabelWidth" label="是否本人手续费返佣" prop="selfCommission">
              <el-row :span="24">
                <el-col :span="8">
                  <el-select v-model="cForm.selfCommission" placeholder="请选择">
                    <el-option :value="0" label="否"></el-option>
                    <el-option :value="1" label="是"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="手续费返佣结算时间" :label-width="formLabelWidth" prop="feeDelayDay">
              <el-row :span="24">
                <el-col :span="8">
                  <el-select @change="delayUnitChange(cForm.feeDelayUnit, 'feeDelayDay')" v-model="cForm.feeDelayUnit" placeholder="请选择">
                    <el-option v-for="item in delayUnitList" :label="item.label" :value="item.value" :key="item.value"> </el-option>
                  </el-select>
                </el-col>
                <el-col :span="16">
                  <el-input :disabled="cForm.feeDelayUnit == 3" type="text" v-model="cForm.feeDelayDay" placeholder="请输入" @input="checkVal('feeDelayDay')"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="!isBusiness" :span="24">
          <el-col :span="20">
            <el-form-item label="团队长返佣结算时间" :label-width="formLabelWidth" prop="delayDay">
              <el-row :span="24">
                <el-col :span="8">
                  <el-select @change="delayUnitChange(cForm.delayUnit, 'delayDay')" v-model="cForm.delayUnit" placeholder="请选择">
                    <el-option v-for="item in delayUnitList" :label="item.label" :value="item.value" :key="item.value"> </el-option>
                  </el-select>
                </el-col>
                <el-col :span="16">
                  <el-input :disabled="cForm.delayUnit == 3" type="text" v-model="cForm.delayDay" placeholder="请输入" @input="checkVal('delayDay')"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="保证金额度" :label-width="formLabelWidth" prop="bondLimit">
              <el-input type="number" v-model="cForm.bondLimit" placeholder="请输入" @input="checkVal('bondLimit')"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="twoLevelModel && !isBusiness" :span="24">
          <el-col :span="20">
            <el-form-item label="设置代理总盈利阀值" :label-width="formLabelWidth" prop="profitMargin">
              <el-input class="my-mumber-input" @input="checkVal('profitMargin')" type="text" v-model.trim="cForm.profitMargin" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="twoLevelModel && !isBusiness" :span="24">
          <el-col :span="20">
            <el-form-item label="设置用户盈利阀值" :label-width="formLabelWidth" prop="userProfitMargin">
              <el-input class="my-mumber-input" @input="checkVal('userProfitMargin')" type="text" v-model.trim="cForm.userProfitMargin" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="twoLevelModel && !isBusiness" :span="24">
          <el-col :span="20">
            <el-form-item label="监控手机/邮箱" :label-width="formLabelWidth" prop="phoneEmailFirst">
              <el-input class="my-mumber-input" type="text" v-model.trim="cForm.phoneEmailFirst" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="twoLevelModel && !isBusiness" :span="24">
          <el-col :span="20">
            <el-form-item label="监控手机/邮箱" :label-width="formLabelWidth" prop="phoneEmailSecond">
              <el-input class="my-mumber-input" type="text" v-model.trim="cForm.phoneEmailSecond" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="twoLevelModel && !isBusiness" :span="24">
          <el-col :span="20">
            <el-form-item label="监控手机/邮箱" :label-width="formLabelWidth" prop="phoneEmailThird">
              <el-input class="my-mumber-input" type="text" v-model.trim="cForm.phoneEmailThird" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="返佣开关" :label-width="formLabelWidth" prop="commissionSwitch">
              <el-switch v-model="cForm.commissionSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登录开关" :label-width="formLabelWidth" prop="loginSwitch">
              <el-switch v-model="cForm.loginSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="管理员谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
              <el-input v-model.trim="cForm.googleCode" autocomplete="off" placeholder="请输入谷歌验证码" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 释放保证金 -->
    <el-dialog title="代理商释放保证金" width="600px" :visible.sync="releaseMoneyVisible">
      <el-form :model="releaseMoneyForm" ref="releaseMoneyForm" :rules="releaseMoneyRules">
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="代理商UID" :label-width="formLabelWidth" prop="agentUID">
              <el-input disabled type="text" v-model.trim="releaseMoneyForm.agentUID" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="账户类型" :label-width="formLabelWidth" prop="userType">
              <el-select v-model="releaseMoneyForm.userType" placeholder="请选择">
                <el-option v-for="item in userTypeList" :label="item.label" :value="item.value" :key="item.value"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="币种" :label-width="formLabelWidth" prop="coinId">
              <el-select @change="changeDecimal" v-model="releaseMoneyForm.coinId" placeholder="请选择">
                <el-option v-for="item in coin_List" :label="item.label" :value="item.label" :key="item.value"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="可释放数量" :label-width="formLabelWidth" prop="bondAmount">
              <el-input disabled type="text" v-model.trim="releaseMoneyForm.bondAmount" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="释放数量" :label-width="formLabelWidth" prop="amount">
              <el-input type="text" @input="releaseMoneyCheckVal('amount')" v-model.trim="releaseMoneyForm.amount" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="管理员谷歌" :label-width="formLabelWidth" prop="googleCode">
              <el-input type="text" @input="releaseMoneyCheckVal('googleCode', 'nodot')" v-model.trim="releaseMoneyForm.googleCode" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="releaseMoneyVisible = false">取 消</el-button>
        <el-button type="primary" @click="releaseMoneyconfirmOp" :loading="releaseMoneybtnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 参数配置 -->
    <el-dialog title="商务返佣参数设置 " width="600px" :visible.sync="paramsVisible">
      <el-form :model="paramsForm" :label-width="formLabelWidth" ref="paramsForm" :rules="paramsRules">
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="允许一级商务可设置范围" prop="agentUID">
              <el-input @input="paramsCheckVal('agentUID')" type="number" v-model.trim="paramsForm.agentUID" placeholder="请输入">
                <div slot="append">%</div>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="管理员谷歌" prop="googleCode">
              <el-input type="text" @input="paramsForm.googleCode = paramsForm.googleCode.replace(/[^\d]/g, '')" v-model.trim="paramsForm.googleCode" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="paramsVisible = false">取 消</el-button>
        <el-button type="primary" @click="paramsConfirmOp" :loading="paramsBtnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { agentsListsCol, agentsListsColNoBtn, agentsListsConfig } from '@/config/column/contractAgent';
import $api from '@/api/api';
import mMd5 from '@/utils/module_md5';

export default {
  name: 'AgentsLists',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入密码'));
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g.test(value) && '********' !== value) {
        callback(new Error('请输入包含字母和数字的6-16位密码'));
      } else {
        callback();
      }
    };
    return {
      paramsRules: {
        agentUID: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      isBusiness: false,
      paramsForm: {},
      paramsVisible: false, // 参数配置
      paramsBtnLoading: false,
      emailReg: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
      phoneReg: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      calLoading: false,

      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      userTypeList: [{ label: '币币账户', value: 1 }],
      delayUnitList: [
        { label: '按周', value: 1 },
        { label: '按月', value: 2 },
        { label: '按日', value: 3 },
      ],
      btnArr: [], // 按钮权限数组
      agentModelList: [
        { label: '手续费模式', value: 1 },
        { label: '团队长模式', value: 2 },
      ], // 代理模式列表 这个版本写死,以后可能会用接口动态获取
      agentLevelList: [], // 代理级别列表,动态获取
      formLabelWidth: '170px',
      editBeforeLevelMode: 0, // 原先的模式的状态
      userId: '',
      cForm: {
        uid: '',
        username: '',
        remark: '',
        password: '',
        commissionPercent: '',
        packPercent: '',
        bondPercent: '',
        delayDay: '',
        feeDelayDay: '',
        delayUnit: 1,
        feeDelayUnit: 1,
        commissionSwitch: true,
        loginSwitch: true,
        bondLimit: '',
        googleCode: '',
        profitMargin: '',
        userProfitMargin: '',
        phoneEmailFirst: '',
        phoneEmailSecond: '',
        phoneEmailThird: '',
        selfCommission: 0,
      },
      rules: {
        uid: [{ required: true, message: '必填', trigger: 'blur' }],
        username: [{ required: true, message: '必填', trigger: 'blur' }],
        remark: [{ required: true, message: '必填', trigger: 'blur' }],
        password: [{ required: true, validator: validatePassword, trigger: 'blur' }],
        commissionPercent: [{ required: true, message: '必填', trigger: 'blur' }],
        packPercent: [{ required: true, message: '必填', trigger: 'blur' }],
        bondPercent: [{ required: true, message: '必填', trigger: 'blur' }],
        bondLimit: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
        delayDay: [{ required: true, message: '必填', trigger: 'blur' }],
        feeDelayDay: [{ required: true, message: '必填', trigger: 'blur' }],
        selfCommission: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      formName: '',
      dialogFormVisible: false,
      releaseMoneyVisible: false,
      oldPwd: '', // 旧密码
      passwordType: 'password', // 密码框类型
      inputLevelTxt: '请先选择代理模式',
      levelModeList: [
        { label: '固定模式', value: 1 },
        { label: '升级模式', value: 2 },
      ],
      twoLevelModel: false,
      releaseMoneyForm: {
        agentUID: '',
        userType: 1,
        coinId: 'USDT',
        bondAmount: '',
        amount: '',
        googleCode: '',
      },
      releaseMoneyRules: {
        agentUID: [{ required: true, message: '必填', trigger: 'blur' }],
        userType: [{ required: true, message: '必填', trigger: 'blur' }],
        coinId: [{ required: true, message: '必填', trigger: 'blur' }],
        bondAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        amount: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      releaseMoneybtnLoading: false,
      coin_List: [],
      decimalReg: /^(\-)*(\d+)\.(\d\d\d\d).*$/,
    };
  },
  watch: {
    'cForm.agentMode': {
      async handler(newVal, oldVal) {
        if (newVal) {
          // 两个都存在才能选择
          if (!this.cForm.agentMode || !this.cForm.levelMode) {
            return;
          }
          const res = await $api.getLevelAgentMode({ agentMode: this.cForm.agentMode, businessType: 2, levelMode: this.cForm.levelMode });
          if (res) {
            const list = res.data.data.map((v) => {
              return { label: v['level'], value: v['level'] };
            });
            this.agentLevelList = list;
            this.inputLevelTxt = this.agentLevelList.length ? '请选择' : '请先选择代理模式';
            // 添加编辑状态： 选择升级模式，则默认一级，不能切换选择其他级别了
            // && !!!this.cForm.userId
            if (this.cForm.levelMode == 2) {
              this.cForm.level = (list && list[0].value) || '';
            }
          }
        }
      },
      // immediate: true,
    },
    //代理级别列表动态获取
    'cForm.levelMode': {
      async handler(newVal, oldVal) {
        if (newVal) {
          // 两个都存在才能选择
          if (!this.cForm.agentMode || !this.cForm.levelMode) {
            return;
          }
          // 编辑状态：升级切换为固定，需要重新选择等级 {label:'固定模式',value:1}, {label:'升级模式',value:2}
          if (this.cForm.levelMode == 1 && this.editBeforeLevelMode == 2 && !!this.cForm.userId) {
            this.cForm.level = '';
          }
          const res = await $api.getLevelAgentMode({ agentMode: this.cForm.agentMode, businessType: 2, levelMode: this.cForm.levelMode });
          if (res) {
            const list = res.data.data.map((v) => {
              return { label: v['level'], value: v['level'] };
            });
            this.agentLevelList = list;
            this.inputLevelTxt = this.agentLevelList.length ? '请选择' : '请先选择等级模式';
            // 添加编辑状态： 选择升级模式，则默认一级，不能切换选择其他级别了
            if (this.cForm.levelMode == 2) {
              this.cForm.level = (list && list[0].value) || '';
            }
          }
        }
      },
      // immediate: true,
    },
    dialogFormVisible(newVal) {
      if (!newVal) {
        this.twoLevelModel = false;
        this.cForm = {
          uid: '',
          username: '',
          remark: '',
          password: '',
          commissionPercent: '',
          packPercent: '',
          bondPercent: '',
          delayDay: '',
          feeDelayDay: '',
          delayUnit: 1,
          feeDelayUnit: 1,
          commissionSwitch: true,
          loginSwitch: true,
          bondLimit: '',
          googleCode: '',
          profitMargin: '',
          userProfitMargin: '',
          phoneEmailFirst: '',
          phoneEmailSecond: '',
          phoneEmailThird: '',
          selfCommission: 0,
        };
      }
    },
    // 'cForm.delayUnit': {
    //   handler(newVal, oldVal) {
    //     if (newVal) {
    //       this.cForm.delayDay = 1;
    //     }
    //   },
    // },
    releaseMoneyVisible(newVal) {
      if (!newVal) {
        this.releaseMoneyForm = {
          agentUID: '',
          userType: 1,
          coinId: 'USDT',
          bondAmount: '',
          amount: '',
          googleCode: '',
        };
        this.decimalReg = /^(\-)*(\d+)\.(\d\d\d\d).*$/;
      }
    },
  },
  methods: {
    // 参数配置确定
    paramsConfirmOp() {
      this.$refs['paramsForm'].validate(async (valid) => {
        if (valid) {
          const { agentUID, googleCode } = this.paramsForm;
          if (this.paramsBtnLoading) return;
          const params = {
            agentUID,
            googleCode,
          };

          this.paramsBtnLoading = true;
          const res = await $api.apiParamsConfirmOp(params);
          if (res) {
            this.$message({ message: '设置成功', type: 'success' });
            this.paramsVisible = false;
            this.getList();
          }
          this.paramsBtnLoading = false;
        }
      });
    },
    editParams() {
      this.paramsVisible = true;
      this.$nextTick(() => {
        this.$refs['paramsForm'].resetFields();
        this.paramsForm = {
          agentUID: '',
          googleCode: '',
        };
      });
    },
    changeDecimal(val) {
      this.releaseMoneyForm.amount = '';
      let decimal = this.coin_List.filter((v) => v['label'] == val)[0].decimalPlaces;

      let arr = [];
      for (let i = 0; i < decimal; i++) {
        arr.push('\\d');
      }
      let s1 = '/^(\\-)*(\\d+)\\.(';
      let s2 = arr.join('');
      let s3 = ').*$/';

      let reg = s1.concat(s2, s3);
      this.decimalReg = eval(reg);
    },
    async getSymbolList() {
      this.$store.dispatch('common/getCoinList').then(() => {
        let coin_List = this.$store.state.common.coinlist;
        //console.log('coin_List', coin_List);
        this.coin_List = coin_List.filter((v) => {
          return v.label == 'USDT';
        });
      });
    },
    async releaseMoneyconfirmOp() {
      this.$refs['releaseMoneyForm'].validate(async (valid) => {
        if (valid) {
          const { bondAmount, amount, googleCode, agentUID } = this.releaseMoneyForm;
          if (!bondAmount || amount > bondAmount) {
            return this.$message.error('代理的可释放余额不足');
          }
          if (this.releaseMoneybtnLoading) return;
          this.releaseMoneybtnLoading = true;
          const params = {
            amount,
            googleCode,
            agentUID,
          };
          const res = await $api.apiReleaseAgentMargin(params);
          if (res) {
            this.$message.success('操作成功');
            this.releaseMoneyVisible = false;
            this.getList();
          }
          this.releaseMoneybtnLoading = false;
        }
      });
    },
    delayUnitChange(val, key) {
      if (val == 3) {
        this.cForm[key] = 16;
        this.$refs['cForm'].validateField(key);
      } else {
        this.cForm[key] = '';
      }
    },
    // 对输入值的范围进行限制
    releaseMoneyCheckVal(val, nodot) {
      if (val === 'amount') {
        this.releaseMoneyForm[val] = (this.releaseMoneyForm[val] + '').replace(this.decimalReg, '$1$2.$3');
      }

      if (nodot) {
        this.releaseMoneyForm[val] = (this.releaseMoneyForm[val] + '').replace(/[^\d]/g, '');
      }
      if (this.releaseMoneyForm[val] < 0) {
        this.releaseMoneyForm[val] = 0;
      }
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      this.cForm[val] = (this.cForm[val] + '').replace(/[^\d]/g, '');
      if (nodot === 1 && this.cForm[val] >= 100) {
        this.cForm[val] = 100;
      }
      if (nodot === 2 && this.cForm[val] >= 100) {
        this.cForm[val] = 100;
      }
      // this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); // 2小数

      if (val == 'delayDay') {
        this.cForm[val] = (this.cForm[val] + '').replace(/\./g, '');
        if (this.cForm['delayUnit'] === 1 && this.cForm[val] > 7) {
          this.cForm[val] = 7;
        }
        if (this.cForm['delayUnit'] === 2 && this.cForm[val] > 28) {
          this.cForm[val] = 28;
        }
        if (this.cForm[val] == '0') {
          this.cForm[val] = 1;
        }
      } else if (val == 'feeDelayDay') {
        this.cForm[val] = (this.cForm[val] + '').replace(/\./g, '');
        if (this.cForm['feeDelayUnit'] === 1 && this.cForm[val] > 7) {
          this.cForm[val] = 7;
        }
        if (this.cForm['feeDelayUnit'] === 2 && this.cForm[val] > 28) {
          this.cForm[val] = 28;
        }
        if (this.cForm[val] == '0') {
          this.cForm[val] = 1;
        }
      }
      if (this.cForm[val] < 0) {
        this.cForm[val] = 0;
      }
    },
    paramsCheckVal(val, nodot) {
      if (this.paramsForm[val] >= 100) {
        this.paramsForm[val] = 100;
      }
      if (this.paramsForm[val] < 0) {
        this.paramsForm[val] = 0;
      }
      if (nodot) {
        this.paramsForm[val] = (this.paramsForm[val] + '').replace(/[^\d]/g, '');
      }
    },
    uploadIcon(response, file, fileList) {
      if (!response.data) {
        this.$message.error('图片上传失败');
        this.$refs.iconDot.clearFiles();
        return;
      }
      this.cForm.communityPhoto = response.data[0].url;
      this.$refs.iconDot.handleRemove(file);
      this.$refs.iconDot.clearFiles();
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    onCopy() {
      this.$message.success('复制成功');
    },
    onError() {
      this.$message.success('复制失败');
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
    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1;
      this.pageSize = val;
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 切换密码框状态
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    async doHandle(data) {
      const { fn, row } = data;
      this.userId = row.userId;
      if (fn === 'detail') {
        this.$router.push({
          path: '/agent/agentsListsDetail',
          query: {
            userId: row.userId,
          },
        });
        return;
      }
      // 限制登录 停拥
      if (fn === 'trlogin' || fn === 'trclose') {
        const map = {
          trclose: () => {
            return { commissionSwitch: row.commissionSwitch ? 1 : 0 };
          },
          trlogin: () => {
            return { loginSwitch: row.loginSwitch ? 1 : 0 };
          },
        };
        let params = {
          userId: row.userId,
          businessType: 2,
        };
        Object.assign(params, map[fn]());
        const res = await $api.updateBusinessAgent(params);
        if (res) {
          this.$message({ message: '操作成功', type: 'success' });
          this.getList();
        } else {
          this.getList();
        }
        return;
      }
      // 编辑代理商
      if (fn === 'edit') {
        this.formName = '编辑代理商';
        this.dialogFormVisible = true;

        this.$nextTick(() => {
          this.$refs['cForm'].resetFields();
          const {
            uid,
            username,
            // password,
            remark,
            userGrade,
            commissionPercent,
            packPercent,
            bondPercent,
            delayDay,
            delayUnit,
            feeDelayDay,
            feeDelayUnit,
            commissionSwitch,
            loginSwitch,
            bondLimit,
            googleCode,
            profitMargin,
            userProfitMargin,
            phoneEmailFirst,
            phoneEmailSecond,
            phoneEmailThird,
            selfCommission,
          } = row;
          
          if (userGrade == 2) {
            this.twoLevelModel = true;
          }else{
            this.twoLevelModel = false;
          }
          console.log('userGrade',userGrade)
          console.log('row.userType',row.userType)
          if (row.userType == 31) {
            this.isBusiness = true;
          } else {
            this.isBusiness = false;
          }
          this.cForm = {
            uid,
            username,
            remark,
            password: '********',
            commissionPercent: commissionPercent.split('%').join(''),
            packPercent: packPercent.split('%').join(''),
            bondPercent: bondPercent.split('%').join(''),
            delayDay,
            delayUnit,
            feeDelayDay,
            feeDelayUnit,
            commissionSwitch: commissionSwitch === 1 ? true : false,
            loginSwitch: loginSwitch === 1 ? true : false,
            bondLimit,
            googleCode,
            profitMargin,
            userProfitMargin,
            phoneEmailFirst,
            phoneEmailSecond,
            phoneEmailThird,
            selfCommission,
          };
          // //console.log('this.cForm', this.cForm);
          // this.editBeforeLevelMode = levelMode;

          // this.oldPwd = password;
          // this.rules.businessUid[0].required = false;
          // this.rules.agentMode[0].required = false;
          // this.rules.level[0].required = false;
          // this.rules.username[0].required = false;
          // this.rules.password[0].required = false;
        });
      }
      //释放保证金
      if (fn == 'releaseMoney') {
        this.releaseMoneyVisible = true;
        this.releaseMoneyForm.agentUID = row.uid;
        const params = {
          agentUserId: row.userId,
        };
        const res = await $api.apiGetAgentBondAmount(params);
        if (res) {
          this.releaseMoneyForm.bondAmount = res.data.data;
        }
      }
    },
    // 获取一个谷歌密钥
    // async getGoogleCode() {
    //   const params = {
    //     account: localStorage.getItem('user_name'),
    //   }
    //   const res = await $api.getGoogleCode(params);
    //   if (res) {
    //     this.cForm.googleStr = res.data.data.secretKey;
    //     // 防止默认校验提示空，就主动校验
    //     this.$nextTick(() => {
    //       this.$refs.cForm.validateField('googleStr');
    //     });
    //   }
    // },
    addLine() {
      this.formName = '添加代理商';
      this.userId = '';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields();
        // this.cForm = {
        //   userId: '',
        //   businessUid: '',
        //   agentMode: '',
        //   levelMode: '',
        //   level: '',
        //   username: '',
        //   password: '',
        //   googleStr: '',
        //   googleCode: '',
        //   communityPhoto: '',
        //   communityName: '',
        //   commissionSwitch: false,
        //   loginSwitch: false,
        //   withdrawSwitch: false,

        //   positionListSwitch: false,
        //   closePositionListSwitch: false,
        //   depositListSwitch: false,
        //   withdrawListSwitch: false,
        //   contractAssetsSwitch: false,
        //   userAssetsSwitch: false,
        //   otcSwitch: false,
        // };
        // this.rules.businessUid[0].required = true;
        // this.rules.agentMode[0].required = true;
        // this.rules.level[0].required = true;
        // this.rules.username[0].required = true;
        // this.rules.password[0].required = true;
      });
    },
    async confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          const userId = this.userId;
          const { password, commissionSwitch, loginSwitch, commissionPercent, packPercent, bondPercent, ...repo } = this.cForm;
          const params = {
            loginSwitch: loginSwitch ? 1 : 0,
            commissionSwitch: commissionSwitch ? 1 : 0,
            commissionPercent: commissionPercent + '%',
            packPercent: packPercent + '%',
            bondPercent: bondPercent + '%',
            ...repo,
          };
          if ((userId && password !== '********') || !userId) {
            params.password = mMd5.md5(password);
          }
          if (params.phoneEmailFirst) {
            if (!this.emailReg.test(params.phoneEmailFirst) && !this.phoneReg.test(params.phoneEmailFirst)) {
              return this.$message.error('手机号或者邮箱格式错误');
            }
          }

          if (params.phoneEmailSecond) {
            if (!this.emailReg.test(params.phoneEmailSecond) && !this.phoneReg.test(params.phoneEmailSecond)) {
              return this.$message.error('手机号或者邮箱格式错误');
            }
          }

          if (params.phoneEmailThird) {
            if (!this.emailReg.test(params.phoneEmailThird) && !this.phoneReg.test(params.phoneEmailThird)) {
              return this.$message.error('手机号或者邮箱格式错误');
            }
          }

          this.btnLoading = true;
          const res = userId === '' ? await $api.addAgent(params) : await $api.updateAgent(Object.assign(params, { userId }));
          if (res) {
            const txt = userId === '' ? '新增成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getAgentList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        // records.forEach((v) => {
        //   v['commissionSwitch'] = v['commissionSwitch'] ? true : false;
        //   v['loginSwitch'] = v['loginSwitch'] ? true : false;
        //   v['withdrawSwitch'] = v['withdrawSwitch'] ? true : false;

        //   v['positionListSwitch'] = v['positionListSwitch'] ? true : false;
        //   v['closePositionListSwitch'] = v['closePositionListSwitch'] ? true : false;
        //   v['depositListSwitch'] = v['depositListSwitch'] ? true : false;
        //   v['withdrawListSwitch'] = v['withdrawListSwitch'] ? true : false;
        //   v['contractAssetsSwitch'] = v['contractAssetsSwitch'] ? true : false;
        //   v['userAssetsSwitch'] = v['userAssetsSwitch'] ? true : false;
        //   v['otcSwitch'] = v['otcSwitch'] ? true : false;
        // });
        this.list = records;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      // if (this.search_params_obj.startTime) {
      //   this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
      //   this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      // }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
  },
  activated() {
    // debugger
  },
  mounted() {
    // debugger
    let authObj = this.$util.getAuthority('AgentsLists', agentsListsCol, agentsListsColNoBtn);

    this.configs = authObj.val;
    this.btnArr = authObj.btnArr || [];
    this.searchCofig = this.$util.clone(agentsListsConfig);

    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    // 编辑：  固定模式-等级模式不能改
    //         升级模式--代理级别不能选
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style scope lang="scss">
.agentsLists-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .gcode {
    border-right: 1px solid #ccc !important;
    border-top-right-radius: none !important;
    border-bottom-right-radius: none !important;
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
