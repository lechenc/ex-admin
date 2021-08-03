<template>
  <div class="acceptanceList-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :excelLoading="excelLoading" :exportExcel="true" @do-exportExcel="exportExcel" />
    </div>
    <div>
      <div class="container-btn">
        <el-button v-if="btnArr.includes('add')" type="primary" size="medium" @click="createAdver"> 创建一级承兑商代理</el-button>
      </div>
      <div>
        <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
      </div>
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 编辑弹窗 -->
    <el-dialog :close-on-click-modal="false" :visible.sync="dialogVisible" width="900px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="代理商编号" :label-width="formLabelWidth" prop="merchantUid">
              <el-input v-model="form.merchantUid" autocomplete="off" placeholder="请输入" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
              <el-input v-model="form.phone" autocomplete="off" placeholder="" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱号" :label-width="formLabelWidth" prop="email">
              <el-input v-model="form.email" autocomplete="off" placeholder="" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-table class="agent-table" :data="assetsList" style="width: 100%; text-align: center; margin-bottom: 30px" border>
            <el-table-column prop="coinName" label="币种" />
            <el-table-column label="持币量">
              <template slot-scope="scope">
                {{ parseFloat(scope.row['payAmount']) + parseFloat(scope.row['pyaFrozenAmount']) + parseFloat(scope.row['otcAmount']) + parseFloat(scope.row['otcFrozenAmount']) || '0' }}
              </template>
            </el-table-column>
            <el-table-column prop="payAmount" label="币币可用资产">
              <template slot-scope="scope">
                {{ parseFloat(scope.row['payAmount']) || '0' }}
              </template>
            </el-table-column>
            <el-table-column prop="pyaFrozenAmount" label="币币冻结资产">
              <template slot-scope="scope">
                {{ parseFloat(scope.row['pyaFrozenAmount']) || '0' }}
              </template>
            </el-table-column>
            <!-- 6.1 -->
            <el-table-column prop="otcAmount" label="法币可用资产">
              <template slot-scope="scope">
                {{ parseFloat(scope.row['otcAmount']) || '0' }}
              </template>
            </el-table-column>
            <el-table-column prop="otcFrozenAmount" label="法币冻结资产">
              <template slot-scope="scope">
                {{ parseFloat(scope.row['otcFrozenAmount']) || '0' }}
              </template>
            </el-table-column>

            <el-table-column label="充币地址" width="470px" prop="coinAddressList">
              <template slot-scope="scope">
                <div class="qrimg-wraper">
                  <div v-if="scope.row['coinAddressList'].length">
                    <div class="colline">
                      <div v-for="(item, ixx) in scope.row['coinAddressList']" :key="ixx">
                        <span class="label">{{ item.chainName }}：&nbsp;</span>
                        <el-popover placement="top-start" width="200" trigger="hover">
                          <div style="width: 150px; height: 150px">
                            <vue-qr :text="item.address" :margin="0" colorDark="#000" colorLight="#fff" :size="150"></vue-qr>
                          </div>
                          <el-button size="small" slot="reference" style="margin-right: 8px">
                            <span>{{ item.address }}</span>
                          </el-button>
                        </el-popover>
                        <el-button plain size="small" v-clipboard:copy="item.address" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</el-button>
                      </div>
                    </div>
                  </div>
                  <div v-else>无</div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-row>

        <el-row :span="24">
          <!-- <el-col :span="12">
            <el-form-item label="是否允许登录" :label-width = "formLabelWidth" prop="userLoginStatus">
              <el-switch v-model="form.userLoginStatus" active-color="#13ce66" inactive-color="#ff4949" :disabled="isModify"> </el-switch>
            </el-form-item>
          </el-col> -->
          <el-col :span="12">
            <el-form-item label="出售返佣费率" :label-width="formLabelWidth" prop="rewardInRate">
              <el-input type="number" @input="checkVal('rewardInRate')" v-model="form.rewardInRate" autocomplete="off" placeholder="请输入" :disabled="isModify">
                <div slot="append">%</div>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24" v-if="!isModify">
          <el-col :span="12">
            <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
              <el-input @input="checkVal1('form','googleCode')" v-model="form.googleCode" autocomplete="off" placeholder="请输入" :disabled="isModify"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false" v-if="!isModify">取消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    <el-dialog :close-on-click-modal="false" title="创建代理商" :visible.sync="createVisible" width="550px">
      <div>
        <el-form :model="ruleForm" :rules="formRules" ref="ruleForm" label-width="140px">
          <el-row type="flex" :span="24">
            <el-col :span="2"></el-col>
            <el-col :span="9">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="手机注册" name="first"> </el-tab-pane>
                <el-tab-pane label="邮箱注册" name="second"> </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>

          <el-form-item v-if="activeName === 'first'" label="代理商账户" prop="phone">
            
            <el-input autocomplete="off" v-model="ruleForm.phone" @input="checkVal1('ruleForm','phone')" placeholder="请输入手机号">
              <template slot="prepend">+86</template>
            </el-input>
          </el-form-item>

          <el-form-item v-else-if="activeName === 'second'" label="代理商账户" prop="email">
            <el-input autocomplete="off" v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>

          <el-form-item label="获取验证码" prop="code">
            <el-input @input="checkVal1('ruleForm','code')" autocomplete="off" v-model="ruleForm.code" placeholder="请输入验证码">
              <span @click="codeclick" slot="suffix">
                <CountdownBtn @countdownBtn="countdownBtn" :disabled="disabled"></CountdownBtn>
              </span>
            </el-input>
          </el-form-item>

          <el-form-item class="myLine" label="登录密码" prop="loginPassword">
            <el-input show-password autocomplete="off" type="password" v-model="ruleForm.loginPassword" placeholder="请输入设置密码"></el-input>
          </el-form-item>

         

          <div>创建成功后承兑商代理可用此账号登录alpex交易所</div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createVisible = false">取 消</el-button>
        <el-button type="primary" @click="createAgent">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script >
import Precision from '@/utils/number-precision';
import CountdownBtn from '@/components/countdownBtn.vue';
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { acceptanceCol, acceptanceColNoBtn, acceptanceConfig } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';
import vueQr from 'vue-qr';
import mMd5 from '@/utils/module_md5';
export default {
  name: 'AcceptanceList',
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
      btnArr: [],
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
      formLabelWidth: '110px',
      assetsList: [],
      isModify: false,
      nowUserId: 0,
      title: '',
      ruleForm: {
        phone: '',
        email: '',
        code: '',
        loginPassword: '',
        invitationCode: '',
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
    createVisible(value) {
      if (value) {
        this.ruleForm = {};
      }
    },
  },
  methods: {
    handleClick(tab) {},

    onError() {
      this.$message.success('复制失败');
    },

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
            let params = { code, loginPassword: mMd5.hbmd5(loginPassword) };

            if (this.activeName == 'first') {
              params.phoneOrEmail = phone;
              params.registerType = 1;
            } else if (this.activeName == 'second') {
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
        if (this.activeName == 'first') {
          this.$refs['ruleForm'].validateField(['phone'], (errorMessage) => {
            if (errorMessage) {
              valid = false;
              return;
            }
          });
        } else if (this.activeName == 'second') {
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
        if (this.activeName == 'first') {
          params = {
            smsType: 0,
            phoneOrEmail: this.ruleForm.phone,
            type: 2,
            phoneAreaCode: '+86',
          };
        } else if (this.activeName == 'second') {
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

    async doHandle(data) {
      const { fn, row } = data;

      this.nowUserId = row.userId;

      if (fn === 'edit' || fn === 'detail') {
        if (fn === 'edit') {
          this.isModify = false;
          this.title = '代理商编辑';
        } else {
          this.title = '代理商信息详情';
          this.isModify = true;
        }
        this.getAssetsList();
        this.dialogVisible = true;
        const { uid, phone, email, rewardInRate, userLoginStatus } = row;
        this.form = {
          merchantUid: uid,
          userId: this.nowUserId,
          phone,
          email,
          rewardInRate: this.percentToNum(rewardInRate),
          userLoginStatus: userLoginStatus ? false : true,
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
      console.log('this.isModify',this.isModify)
      if (this.isModify) {
        this.dialogVisible = false;
        return;
      } // 详情页面直接返回
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { merchantUid, userId, googleCode, rewardInRate, userLoginStatus } = this.form;
          const params = {
            // ,
            uid: merchantUid,
            userId: userId,
            
            legalRewardInRate: rewardInRate ? this.numToPercent(rewardInRate) : '0%',
            googleCode,
            
            userLoginStatus: 0,
          };
          this.btnLoading = true;
          // 编辑
          const res = await $api.editAcceptanceupdate(params);
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },

    // 获取用户资产数据
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
              if (el.chainName !== 'omni') {
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

    async createAdver() {
      this.createVisible = true;
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
      const res = await $api.getAcceptanceTransRecord(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
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
      const res = await $api.getAcceptanceTransRecord(params);
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

    // 对输入值的范围进行限制
    checkVal(val) {
      this.form[val] = this.form[val] > 100 ? 100 : this.form[val];
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },

     // 对输入值的范围进行限制
    checkVal1(obj,key) {
      this[obj][key] = (this[obj][key] + '').replace(/[^\d]/g, '');
    },

    
  },
  mounted() {
    let authObj = this.$util.getAuthority('AcceptanceList', acceptanceCol, acceptanceColNoBtn);
    this.btnArr = authObj.btnArr || [];
    this.configs = authObj.val;
    this.searchCofig = this.$util.clone(acceptanceConfig);
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
      
  },
};
</script>
<style scope lang="scss">
.acceptanceList-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .derived-box {
    margin-bottom: 11px;
  }
  .container-btn {
    margin: 20px 0;
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
  .el-switch__core {
    margin-left: -160px;
  }
  .el-dialog__body {
    text-align: center;
  }
}
</style>
