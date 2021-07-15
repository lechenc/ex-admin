<template>
  <div class="user-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn">
      <el-button type="primary" size="medium" @click="addAnalyst(0)">添加分析师</el-button>
      <el-button type="primary" size="medium" @click="addAnalyst(1)">批量添加分析师</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"></el-pagination>
    </div>

    <el-Dialog :visible.sync="showDialog" :title="title" width="700px" class="notice-dialog">
      <el-form :model="form" ref="form" label-width="160px" :rules="rules" style="width: 90%; padding-left: 15px">
        <el-row>
          <el-form-item label="关联的实盘用户UID" prop="relevanceUid">
            <el-input size="small" placeholder="请输入关联的实盘用户UID" v-model="form.relevanceUid"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="法币开关" label-width="80px">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="form.userOtcStatus"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="划转开关" label-width="80px">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="form.userTransferStatus"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="币币交易开关" label-width="100px">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="form.userTradeStatus"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="提币开关" label-width="80px">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="form.userWithdrawStatus"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-form-item label="登录手机号" prop="phone">
            <el-col :span="6">
              <el-select placeholder="请选择" v-model="form.phoneAreaCode" width="20%">
                <el-option v-for="(item, idx) in phoneAreaCodeList" :key="idx" :label="item.phoneAreaCode" :value="item.phoneAreaCode"></el-option>
              </el-select>
            </el-col>

            <el-col :span="18">
              <el-input v-model.trim="form.phone" placeholder="请输入"></el-input>
            </el-col>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item class="my-form-item" label="登录邮箱" prop="email">
            <el-input size="small" placeholder="请输入" v-model.trim="form.email"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item class="my-form-item" label="登录密码" prop="loginPassword">
            <el-input size="small" type="password" placeholder="请输入" v-model="form.loginPassword"> </el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="登录开关" prop="loginSwitch">
            <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="form.loginSwitch"></el-switch>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-form-item label="谷歌验证码" prop="googleCode">
            <el-input size="small" placeholder="请输入" type="Number" v-model.trim="form.googleCode"></el-input>
          </el-form-item>
        </el-row>
      </el-form>

      <div class="comfirn-btn footer">
        <el-button type="primary" size="small" @click="confirm" :loading="btnLoading">确定</el-button>
        <el-button type="default" size="small" @click="showDialog = false">取消</el-button>
      </div>
    </el-Dialog>
    
    <!-- 批量添加分析师 -->
     <el-Dialog :visible.sync="dialogFlag" :title="title" width="700px" class="notice-dialog">
      <el-form :model="batchForm" ref="batchForm" label-width="160px" :rules="rules" style="width: 90%; padding-left: 15px">
        <el-row>
          <el-form-item label="关联的实盘用户UID" prop="relevanceUid">
            <el-input size="small" placeholder="请输入关联的实盘用户UID" v-model="batchForm.relevanceUid"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="法币开关" label-width="80px">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="batchForm.userOtcStatus"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="划转开关" label-width="80px">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="batchForm.userTransferStatus"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="币币交易开关" label-width="100px">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="batchForm.userTradeStatus"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="提币开关" label-width="80px">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="batchForm.userWithdrawStatus"/>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- <el-row :span="24">
          <el-form-item label="登录手机号" prop="phone">
            <el-col :span="6">
              <el-select placeholder="请选择" v-model="batchForm.phoneAreaCode" width="20%">
                <el-option v-for="(item, idx) in phoneAreaCodeList" :key="idx" :label="item.phoneAreaCode" :value="item.phoneAreaCode"></el-option>
              </el-select>
            </el-col>

            <el-col :span="18">
              <el-input v-model.trim="batchForm.phone" placeholder="请输入"></el-input>
            </el-col>
          </el-form-item>
        </el-row> -->

        <el-row :span="24">
          <el-form-item class="my-form-item" label="邮箱区间" prop="emailRange">
            <el-col :span="2">{{ batchForm.mailPrefix }}</el-col>
            <el-col :span="6">
              <el-input size="small" placeholder="请输入" v-model="batchForm.mailMidStartNum"/>
            </el-col>
            <el-col :span="1" style="text-align: center;">-</el-col>
            <el-col :span="6">
              <el-input size="small" placeholder="请输入" v-model="batchForm.mailMidEndNum"/>
            </el-col>
            <el-col :span="5"> {{ batchForm.mailPostfix }}</el-col>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item class="my-form-item" label="登录密码" prop="loginPassword">
            <el-input size="small" type="password" placeholder="请输入" v-model="batchForm.loginPassword"> </el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="登录开关" prop="loginSwitch">
            <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="batchForm.loginSwitch"></el-switch>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-form-item label="谷歌验证码" prop="googleCode">
            <el-input size="small" placeholder="请输入" type="Number" v-model.trim="batchForm.googleCode"></el-input>
          </el-form-item>
        </el-row>
      </el-form>

      <div class="comfirn-btn footer">
        <el-button type="primary" size="small" @click="createBatch" :loading="btnLoading">确定</el-button>
        <el-button type="default" size="small" @click="dialogFlag = false">取消</el-button>
      </div>
    </el-Dialog>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { analystMimicListCol,analystMimicListColNoBtn, analystMimicListConfig } from '@/config/column/contractMimic';
import $api from '@/api/api';
import utils from '@/utils/util';
import mMd5 from '@/utils/module_md5';
export default {
  name: 'AnalystMimicList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    const emailRange = (rule, value, callback) => {
      const min = +this.batchForm.mailMidStartNum
      const max = +this.batchForm.mailMidEndNum
      if (min && max) {
        if (min > max) {
          callback(new Error('最大值超过最小值区间,请重新填写'))
        }  else if (min === max) {
          callback(new Error('最小值必须小于最大值, 请重新填写'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请输入数字区间'))
      }
    }

    return {
      btnLoading: false,
      showDialog: false,
      title: '添加分析师',
      rules: {
        loginPassword: [{ required: true, message: '请输入', trigger: 'blur' }],
        googleCode: [{ required: true, message: '请输入', trigger: 'blur' }],
        emailRange: [{ validator: emailRange, trigger: 'blur'}]
      },
      phoneAreaCodeList: [{ label: 86 }],
      listLoading: false, // 表格loading
      excelLoading: false, // 导出loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      excelTitle: '用户列表',
      form: {
        loginSwitch: false,
        uid: '',
        phone: '',
        phoneAreaCode: '',
        email: '',
        loginPassword: '',
        googleCode: '',
        userOtcStatus: false, // 法币开关
        userTransferStatus: false, // 划转开关
        userTradeStatus: false, // 币币交易开关
        userWithdrawStatus: false, // 提币开关
        relevanceUid: ''
      },
      batchForm: {
        loginSwitch: false,
        phone: '',
        phoneAreaCode: '',
        loginPassword: '',
        googleCode: '',
        relevanceUid: '',
        mailMidStartNum: '',
        mailMidEndNum: '',
        userOtcStatus: false, // 法币开关
        userTransferStatus: false, // 划转开关
        userTradeStatus: false, // 币币交易开关
        userWithdrawStatus: false, // 提币开关
        mailPrefix: 'alpex',
        mailPostfix: '@gmail.com'
      },
      // 根据状态不同加载dialog内登录邮箱的表单的不同
      dialogFlag: false
    };
  },
  filters: {
    userType(val) {},
  },
  watch: {
    showDialog(val) {
      if (!val) {
        this.form = {
          loginSwitch: false,
          uid: '',
          phone: '',
          phoneAreaCode: '',
          email: '',
          loginPassword: '',
          googleCode: '',
          userOtcStatus: false, // 法币开关
          userTransferStatus: false, // 划转开关
          userTradeStatus: false, // 币币交易开关
          userWithdrawStatus: false, // 提币开关
        };
      } else {
        this.getCode();
      }
    },
    dialogFlag(val) {
      if (val) {
        this.getCode()
      } else {
        this.batchForm = {
        loginSwitch: false,
        phone: '',
        phoneAreaCode: '',
        loginPassword: '',
        googleCode: '',
        relevanceUid: '',
        mailMidStartNum: '',
        mailMidEndNum: '',
        userOtcStatus: false, // 法币开关
        userTransferStatus: false, // 划转开关
        userTradeStatus: false, // 币币交易开关
        userWithdrawStatus: false, // 提币开关
        mailPrefix: 'alpex',
        mailPostfix: '@gmail.com'
      }
      }
    } 
  },
  methods: {
    confirm() {
      this.$refs.form.validate(async (valid) => {
        console.log('valid: ', valid);
        if (valid) {
          // console.log(this.form)
          
          // if (!this.form.phone && !this.form.email) {
          //   return this.$message.error({ title: '提示', message: '请至少填写手机号和邮箱的一种' });
          // }
          let { phone, phoneAreaCode, email, loginPassword, googleCode, loginSwitch, uid,
            userOtcStatus,
            userTransferStatus,
            userTradeStatus,
            userWithdrawStatus,
            relevanceUid
          } = this.form;
          let params = {
            googleCode,
            loginSwitch: loginSwitch ? 0 : 1,
            userOtcStatus: +userOtcStatus,
            userTransferStatus: +userTransferStatus,
            userTradeStatus: +userTradeStatus,
            userWithdrawStatus: +userWithdrawStatus,
            relevanceUid
          };
          // if (phone) {
          //   const phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
          //   const msg = phoneReg.test(phone);
          //   if (!msg) {
          //     return this.$message.error('请输入正确手机号');
          //   }
          //   params.phone = phone;
          //   params.phoneAreaCode = phoneAreaCode;
          // }
          // if (email) {
          //   const loginEmailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
          //   const msg = loginEmailReg.test(email);
          //   if (!msg) {
          //     return this.$message.error('请输入正确邮箱');
          //   }
          //   params.email = email;
          // }
          // if (uid && loginPassword === '********') {
          // } else {
          //   params.loginPassword = mMd5.md5(loginPassword);
          // }
          const sendObj = this.configValidate(this.form, params, true)
          console.log(sendObj)
          console.log(params)

          if (sendObj) {
            const res = uid ? await $api.editAnalystMimicList({ ...sendObj, uid }) : await $api.addAnalystMimicList({ ...sendObj });
            if (res) {
              uid ? this.$message.success({ title: '提示', message: '编辑成功' }) : this.$message.success({ title: '提示', message: '添加成功' });
              this.showDialog = false;
              this.getList();
            }
          }
        } else {
          this.$message.error({ title: '提示', message: '请完成表单内容填写再重试' });
        }
      });
    },
    configValidate(parms, sendObj = {}, flag = false) {
      if (!parms.phone && !parms.email && flag) {
        this.$message.error({ title: '提示', message: '请至少填写手机号和邮箱的一种' })
        return false
      }
      if (parms.phone) {
        const phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
        const msg = phoneReg.test(parms.phone)
        if (!msg) {
          this.$message.error('请输入正确手机号')
          return false
        }
        sendObj.phone = parms.phone
        sendObj.phoneAreaCode = parms.phoneAreaCode
      }
      if (parms.email) {
        const loginEmailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        // const msg = loginEmailReg.test(parms.email)
        if (!loginEmailReg.test(parms.email)) {
          this.$message.error('请输入正确邮箱')
          return fakse
        }
        sendObj.email = parms.email
      }

      if (parms.uid && parms.loginPasword === '********') {
      } else {
        sendObj.loginPassword = mMd5.md5(parms.loginPassword)
      }
      // console.log(sendObj)
      console.log('sendObj: ', sendObj);
      return sendObj
    },
    // 批量创建分析师点击确定的时候
    createBatch() {
      this.$refs.batchForm.validate(async (valid) => {
        console.log(valid)
        if (valid) {
          const { 
            userOtcStatus,
            userTransferStatus,
            userTradeStatus,
            userWithdrawStatus,
            loginSwitch
          } = this.batchForm
          const param = this.configValidate(this.batchForm)
          const params = {
            ...this.batchForm,
            ...param,
            userOtcStatus: +userOtcStatus,
            userTransferStatus: +userTransferStatus,
            userTradeStatus: +userTradeStatus,
            userWithdrawStatus: +userWithdrawStatus,
            loginSwitch: +loginSwitch
          }

          if (param) {
            const batchAddAnalyst = await $api.batchAddAnalyst(params)
            console.log('batchAddAnalyst: ', batchAddAnalyst);
            if (batchAddAnalyst) {
              this.$message.success({ title: '提示', message: '添加成功' })
              this.dialogFlag = false
              this.getList()
            }
          }
        }
      })
    },
    async getCode() {
      const res = await $api.getCountryCode({});
      this.phoneAreaCodeList = res.data.data
      console.log(this.phoneAreaCode)
    },
    // 根据eq不同加载不同状态
    addAnalyst(eq) {
      // this.showDialog = true;
      this.title = (eq === 0 ? '' : '批量') + '添加分析师';
      // this.dialogFlag = eq === 1
      if (eq) {
        this.dialogFlag = true
      } else {
        this.showDialog = true
      }
    },
    doHandle(data) {
      const { fn, row } = data;
      //console.log('row', row);
      if (fn === 'detail') {
        this.$router.push({
          path: '/contractMimic/analystMimic/analystMimicDetail',
          query: {
            uid: row.uid,
          },
        });
      }
      if (fn === 'edit') {
        this.title = '编辑分析师';
        let { loginSwitch, uid, phone, email, loginPassword, googleCode, relevanceUid, userOtcStatus,userTransferStatus,userTradeStatus,userWithdrawStatus } = row;
        this.form = {
          loginSwitch: loginSwitch ? false : true,
          uid,
          phone,
          phoneAreaCode: 86,
          email,
          loginPassword: '********',
          googleCode,
          relevanceUid,
          userOtcStatus: Boolean(userOtcStatus),
          userTransferStatus: Boolean(userTransferStatus),
          userTradeStatus: Boolean(userTradeStatus),
          userWithdrawStatus: Boolean(userWithdrawStatus)
        };
        this.showDialog = true;
        this.dialogFlag = false
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },
    // 首屏表格
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      // this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getAnalystMimicList(params);
      if (res) {
        const { records, total, pages, current } = res.data.data;
        this.total = +total;
        this.pages = +pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getUserList(params);
      this.excelLoading = false;
      return res;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        this.searchCofig[0].value = [befV, nowV];
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('AnalystMimicList', analystMimicListCol, analystMimicListColNoBtn);
    console.log('analystMimicListColNoBtn: ', analystMimicListColNoBtn);
    console.log('analystMimicListCol: ', analystMimicListCol);
    this.configs = authObj.val;

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(analystMimicListConfig);
    this.getList();
  },
};
</script>

<style lang="scss">
.user-container {
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
  .container-btn {
    margin: 20px 0;
  }
  padding: 4px 10px 10px 10px;

  .container-top {
    margin: 10px 0;
  }

  .container-footer {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
}
</style>
