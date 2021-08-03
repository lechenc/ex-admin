<template>
  <div class="acceptanceSetting-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :excelLoading="excelLoading" :exportExcel="true" @do-exportExcel="exportExcel" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 编辑弹窗 -->
    <el-dialog :close-on-click-modal="false" :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-row :span="36">
          <el-col :span="36">
            <el-form-item label="权重值" :label-width="formLabelWidth" prop="weight">
              <el-input v-model="form.weight" type="number" autocomplete="off" placeholder="请输入" :disabled="isModify"></el-input>
            </el-form-item>
            <el-form-item label="授信额度" :label-width="formLabelWidth" prop="authorizationLimit">
              <el-input  type="number" v-model="form.authorizationLimit" autocomplete="off" placeholder="" :disabled="isModify"></el-input>
            </el-form-item>
            <el-form-item label="收款方式限制次数" :label-width="formLabelWidth" prop="payCount">
              <el-input  type="number" v-model="form.payCount" autocomplete="off" placeholder="" :disabled="isModify"></el-input>
            </el-form-item>
          </el-col>
          
        </el-row>

        
      </el-form>

      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false" v-if="!isModify">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    

          
  </div>
</template>
<script >
import Precision from '@/utils/number-precision';
import CountdownBtn from '@/components/countdownBtn.vue';
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { acceptanceSettingCol, acceptanceSettingConfig, acceptanceSettingColNoBtn } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';
import vueQr from 'vue-qr';
import mMd5 from '@/utils/module_md5';

export default {
  name: 'AcceptanceSetting',
  components: {
    Btable,
    Bsearch,
    iconPage,
    vueQr,
    CountdownBtn,
  },
  data() {
    const loginPwdReg = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/;
    const checkLoginPwd = (rule, value, callback) => {
      if (!loginPwdReg.test(value)) {
        return callback(new Error(rule.message));
      }
      callback();
    };

    const noEmpty = (rule, value, callback) => {
      if (value.trim() == '') {
        return callback(new Error(rule.message));
      }
      callback();
    };

    const loginEmailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    const validateEmail = (rule, value, callback) => {
      if (!loginEmailReg.test(value)) {
        callback(new Error(rule.message));
      } else {
        callback();
      }
    };

    const loginPhoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    const validatePhone = (rule, value, callback) => {
      if (!loginPhoneReg.test(value)) {
        callback(new Error(rule.message));
      } else {
        callback();
      }
    };
    return {
      weight: '',
      authorizationLimit: '',
      payCount: '',
      listLoading: false,
      btnLoading: false,
      calLoading: false,
      disabled: false,
      createVisible: false,
      
      activeName: 'first',
      excelLoading: false,
      list: [],
      dataList: [],
      configs: [],
      searchCofig: [],
      search_params_obj: {},
      current_page: 1,
      pageSize: 10,
      total: 0,
      pages: 0,
      toDay: '',
      ago: '',
      formLabelWidth: '140px',
      assetsList: [],
      isModify: false,
      nowUserId: 0,
      title: '',
      ruleForm: {
        phone: '',
        email: '',
        code: '',
        loginPassword: '',
      },
      labelWidth: '100px',
      dialogVisible: false,
      form: {
        merchantUid: '',
        phone: '',
        email: '',
        rewardInRate: '',
        userLoginStatus: false,
        googleCode: '',
        userId: '',
      },
      rules: {
        rewardInRate: [{ required: true, message: '必填' }],
        googleCode: [{ required: true, message: '必填' }],
      },
      formRules: {
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur',
          },
          {
            required: true,
            message: '请输入验证码',
            validator: noEmpty,
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
          {
            required: true,
            validator: noEmpty,
            message: '请输入',
            trigger: 'blur',
          },
          {
            validator: validateEmail,
            message: '请输入正确邮箱',
            trigger: 'blur',
          },
        ],
        phone: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur',
          },
          {
            required: true,
            validator: noEmpty,
            message: '请输入',
            trigger: 'blur',
          },
          {
            validator: validatePhone,
            message: '请输入正确手机号',
            trigger: 'blur',
          },
        ],
        loginPassword: [
          {
            required: true,
            message: '请输入登录密码',
            trigger: 'blur',
          },
          {
            required: true,
            validator: noEmpty,
            message: '请输入登录密码',
            trigger: 'blur',
          },
          {
            required: true,
            validator: checkLoginPwd,
            message: '支持8-16位字符，包含字母、数字和符号其中两种，区分大小写',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  watch: {
    createVisible: function (newVal, oldVal) {
      if (newVal) {
        this.ruleForm = {};
      }
    },
  },
  methods: {
    handleClick(tab) {},

    onCopy() {
      this.$message.success('复制成功');
    },

    countdownBtn(value) {
      this.disabled = value;
    },

    createAgent() {
      this.$refs['ruleForm'].validate(async (valid) => {
        if (valid) {
          try {
            let { email, phone, code, loginPassword } = this.ruleForm;
            let params = { code, loginPassword: this.$md5(loginPassword) };

            if (this.activeName === 'first') {
              params.phoneOrEmail = phone;
              params.registerType = 1;
            } else if (this.activeName === 'second') {
              params.phoneOrEmail = email;
              params.registerType = 2;
            }

            const res = await $api.acceptanceCreateAgent(params);
            if (res) {
              this.$message.success('创建成功');
              this.createVisible = false;
              this.getList();
            } else {
              this.$message.error(res.data.message);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    },

    async codeclick() {
      try {
        let valid = true;
        if (this.activeName === 'first') {
          this.$refs['ruleForm'].validateField(['phone'], (errorMessage) => {
            if (errorMessage) {
              valid = false;
              return;
            }
          });
        } else if (this.activeName === 'second') {
          this.$refs['ruleForm'].validateField(['email'], (errorMessage) => {
            if (errorMessage) {
              valid = false;
              return;
            }
          });
        }

        if (!valid) return;
        if (this.disabled) {
          return;
        }
        this.disabled = true;
        let params = {};
        if (this.activeName === 'first') {
          params = {
            smsType: 0,
            phoneOrEmail: this.ruleForm.phone,
            type: 2,
            phoneAreaCode: '+86',
          };
        } else if (this.activeName === 'second') {
          params = {
            smsType: 0,
            phoneOrEmail: this.ruleForm.email,
            type: 1,
          };
        }

        const res = await $api.apiSendEmail(params);
        if (res) {
          this.$message.success('发送成功');
        }
      } catch (error) {
        console.log(error);
      }
    },

    onError() {
      this.$message.success('复制失败');
    },

    async doHandle(data) {
      const { fn, row } = data;
      this.nowUserId = row.userId;

      if (fn === 'edit') {
        this.isModify = false;
        this.title = '会员设置';
        // this.getAssetsList();
        this.dialogVisible = true;
        const { uid, phone, email, rewardInRate, userLoginStatus, authorizationLimit, payCount, weight } = row;
        this.form = {
          merchantUid: uid,
          userId: this.nowUserId,
          phone,
          email,

          userLoginStatus: userLoginStatus ? true : false,
          authorizationLimit: authorizationLimit,
          weight: weight,
          payCount: payCount,
          googleCode: '',
        };
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

    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
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

    // 提交
    confirmOp() {
      if (this.isModify) {
        this.dialogVisible = false;
        return;
      } // 详情页面直接返回
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { merchantUid, userId, googleCode, rewardInRate, userLoginStatus, authorizationLimit, weight, payCount } = this.form;
          const params = {
            userId: userId,

            authorizationLimit: authorizationLimit + '',
            weight: weight + '',
            payCount: payCount + '',
          };
          this.btnLoading = true;
          // 编辑
          const res = await $api.getUserUpdateMerchantInfo(params);
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },

    async getAssetsList() {
      const params = {
        userId: this.nowUserId,
      };
      const res = await $api.getPayQueryInfo(params);
      if (res) {
        // 暂时去除omni与trc20
        let tmp = res.data.data;
        let tmpArr = [];
        if (tmp && tmp.length) {
          tmp.forEach((v) => {
            let chainlist = [];
            v.coinAddressList.forEach((el) => {
              if (el.chainName != 'omni' && el.chainName != 'trc20') {
                chainlist.push(el);
              }
            });
            v.coinAddressList = chainlist;
            tmpArr.push(v);
          });
        }
        this.assetsList = tmpArr;
      }
    },

    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        appId: 3,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getUserGetMerchantInfo(query_data);
      if (res) {
        console.log(res);
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        // this.authorizationLimit = authorizationLimit
        // this.payCount = payCount
        // this.weight = weight
        records.forEach((v) => {
          v['isCreateAgent'] = v['isCreateAgent'] ? true : false;
        });
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },

    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getUserGetMerchantInfo(params);
      this.excelLoading = false;
      if (res) {
        return res;
      }
    },

    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : (val + '').replace(/\//gi, '-');
    },

    requiredParams(params) {
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },

    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = (val + '').replace(/\%/, '');
        return val;
      } else {
        return Precision.divide(val, 100);
      }
    },

    // 数字转为百分比
    numToPercent(val) {
      return val + '%';
    },

    
  },
  mounted() {
    let authObj = this.$util.getAuthority('AcceptanceSetting', acceptanceSettingCol, acceptanceSettingColNoBtn);
    this.configs = authObj.val;
    this.searchCofig = this.$util.clone(acceptanceSettingConfig);
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
      
  },
};
</script>
<style scope lang="scss">
.acceptanceSetting-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .derived-box {
    margin-bottom: 11px;
  }
  .colline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 8px;

      .label {
        width: 60px;
      }
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
  .agent-table {
    .cell {
      text-align: center;
    }
  }
  .el-dialog__footer {
    margin-right: 0;
  }
}
</style>
