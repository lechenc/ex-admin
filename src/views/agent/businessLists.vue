<template>
  <div class="businessLists-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="btnArr.length">
      <el-button type="primary" size="medium" v-if="btnArr.includes('add')" @click="addLine">添加</el-button>
      <el-button type="primary" size="medium" v-if="btnArr.includes('config')" @click="$router.push('/agent/businessListsConfig')">商务等级配置</el-button>
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
            <el-form-item label="代理模式" :label-width="formLabelWidth" prop="agentMode">
              <el-select v-model.trim="cForm.agentMode" placeholder="" wdith="20%">
                <el-option v-for="(item, idx) in agentModelList" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="商务级别" :label-width="formLabelWidth" prop="level">
              <el-select v-model.trim="cForm.level" wdith="20%" :placeholder="inputLevelTxt" :disabled="!!!cForm.agentMode">
                <el-option v-for="(item, idx) in agentLevelList" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="账号名" :label-width="formLabelWidth" prop="username">
              <el-input type="text" v-model.trim="cForm.username" placeholder="请输入6-20位字符，不可输入特殊字符"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="登录密码" :label-width="formLabelWidth" prop="password">
              <el-input v-model.trim="cForm.password" type="password" autocomplete="off" placeholder="请输入6-20位字符，不可输入特殊字符">
                <!-- <span slot="append" class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span> -->
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="该账号谷歌密钥" :label-width="formLabelWidth" prop="googleStr">
              <el-input v-model.trim="cForm.googleStr" autocomplete="off" placeholder="" type="text" :disabled="true">
                <div slot="append">
                  <el-button slot="append" class="gcode" @click.stop="getGoogleCode">获取密钥</el-button>
                  <el-button slot="append" v-clipboard:copy="cForm.googleStr" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</el-button>
                </div>
              </el-input>
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
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="返佣开关" :label-width="formLabelWidth" prop="commissionSwitch">
              <el-switch v-model="cForm.commissionSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="限制登录开关" :label-width="formLabelWidth" prop="loginSwitch">
              <el-switch v-model="cForm.loginSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="低流量开关" :label-width="formLabelWidth" prop="lowSwitch">
              <el-switch v-model="cForm.lowSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="限制提币开关" :label-width="formLabelWidth" prop="withdrawSwitch">
              <el-switch v-model="cForm.withdrawSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="持仓列表开关" :label-width="formLabelWidth" prop="positionListSwitch">
              <el-switch v-model="cForm.positionListSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="平仓列表开关" :label-width="formLabelWidth" prop="closePositionListSwitch">
              <el-switch v-model="cForm.closePositionListSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="充币列表开关" :label-width="formLabelWidth" prop="depositListSwitch">
              <el-switch v-model="cForm.depositListSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="提币列表开关" :label-width="formLabelWidth" prop="withdrawListSwitch">
              <el-switch v-model="cForm.withdrawListSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="用户资产开关" :label-width="formLabelWidth" prop="userAssetsSwitch">
              <el-switch v-model="cForm.userAssetsSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="法币订单开关" :label-width="formLabelWidth" prop="otcSwitch">
              <el-switch v-model="cForm.otcSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { businessListsCol, businessListsColNoBtn, businessListsConfig } from '@/config/column/contractAgent';
import $api from '@/api/api';
import mMd5 from '@/utils/module_md5';

export default {
  name: 'BusinessLists',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入密码'));
      } else if (!/^[0-9A-Za-z]{6,20}$/g.test(value) && '******' !== value) {
        callback(new Error('密码格式不正确，请重新输入(6-20位字符，不含特殊字符)'));
      } else {
        callback();
      }
    };
    const validateAccount = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入账号'));
      } else if (!/^[0-9A-Za-z]{6,20}$/g.test(value)) {
        callback(new Error('账号格式不正确，请重新输入(6-20位字符，不含特殊字符)'));
      } else {
        callback();
      }
    };
    return {
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
      btnArr: [], // 按钮权限数组
      agentModelList: [{ label: '手续费模式', value: 1 }], // 代理模式列表 这个版本写死,以后可能会用接口动态获取
      agentLevelList: [], // 代理级别列表,动态获取
      formLabelWidth: '140px',
      cForm: {
        userId: '',
        agentMode: '',
        level: '',
        username: '',
        password: '',
        googleStr: '',
        googleCode: '',
        commissionSwitch: false,
        loginSwitch: false,
        lowSwitch: false,
        withdrawSwitch: false,
        positionListSwitch: false,
        closePositionListSwitch: false,
        depositListSwitch: false,
        withdrawListSwitch: false,
        userAssetsSwitch: false,
        otcSwitch: false,
      },
      rules: {
        agentMode: [{ required: true, message: '必填', trigger: 'blur' }],
        level: [{ required: true, message: '必填', trigger: 'blur' }],
        username: [
          { required: true, message: '必填', trigger: 'blur' },
          { required: true, validator: validateAccount, trigger: 'blur' },
        ],
        password: [
          { required: true, message: '必填', trigger: 'blur' },
          { required: true, validator: validatePassword, trigger: 'blur' },
        ],
        googleStr: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      formName: '',
      dialogFormVisible: false,
      oldPwd: '', // 旧密码
      passwordType: 'password', // 密码框类型
      inputLevelTxt: '请先选择代理模式',
    };
  },
  watch: {
    //代理级别列表动态获取
    'cForm.agentMode': {
      async handler(newVal, oldVal) {
        if (newVal) {
          const res = await $api.getLevelAgentMode({ agentMode: 1, businessType: 1 });
          if (res) {
            const list = res.data.data.map((v) => {
              return { label: v['level'], value: v['level'] };
            });
            this.agentLevelList = list;
            this.inputLevelTxt = this.agentLevelList.length ? '请选择' : '请先选择代理模式';
          }
        }
      },
      // immediate: true,
    },
  },
  methods: {
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
      if (fn === 'detail') {
        this.$router.push({
          path: '/agent/businessListsDetail',
          query: {
            userId: row.userId,
          },
        });
        return;
      }
      // 限制登录 停拥 低流量开关
      if (fn === 'trlogin' || fn === 'trclose' || fn === 'trlow') {
        const map = {
          trclose: () => {
            return { commissionSwitch: row.commissionSwitch ? 1 : 0 };
          },
          trlogin: () => {
            return { loginSwitch: row.loginSwitch ? 1 : 0 };
          },
          trlow: () => {
            return { lowSwitch: row.lowSwitch ? 1 : 0 };
          },
        };
        let params = {
          userId: row.userId,
          businessType: 1,
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
        this.formName = '编辑商务';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['cForm'].resetFields();
          let { userId, agentMode, level, username, password, googleStr, googleCode, commissionSwitch, loginSwitch, lowSwitch, withdrawSwitch, positionListSwitch, closePositionListSwitch, depositListSwitch, withdrawListSwitch, userAssetsSwitch, otcSwitch } = row;
          this.cForm = {
            userId,
            agentMode,
            level,
            username,
            password,
            googleStr,
            googleCode,
            commissionSwitch,
            loginSwitch,
            lowSwitch,
            withdrawSwitch,
            positionListSwitch,
            closePositionListSwitch,
            depositListSwitch,
            withdrawListSwitch,
            userAssetsSwitch,
            otcSwitch,
          };
          this.oldPwd = password;
          this.rules.agentMode[0].required = false;
          this.rules.level[0].required = false;
          this.rules.username[0].required = false;
          this.rules.password[0].required = false;
        });
      }
    },
    // 获取一个谷歌密钥
    async getGoogleCode() {
      const params = {
        account: localStorage.getItem('user_name'),
      };
      const res = await $api.getGoogleCode(params);
      if (res) {
        this.cForm.googleStr = res.data.data.secretKey;
        // 防止默认校验提示空，就主动校验
        this.$nextTick(() => {
          this.$refs.cForm.validateField('googleStr');
        });
      }
    },
    addLine() {
      this.formName = '添加商务';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields();
        this.cForm = {
          userId: '',
          agentMode: '',
          level: '',
          username: '',
          password: '',
          googleStr: '',
          googleCode: '',
          commissionSwitch: false,
          loginSwitch: false,
          lowSwitch: false,
          withdrawSwitch: false,
          positionListSwitch: false,
          closePositionListSwitch: false,
          depositListSwitch: false,
          withdrawListSwitch: false,
          userAssetsSwitch: false,
          otcSwitch: false,
        };
        this.rules.agentMode[0].required = true;
        this.rules.level[0].required = true;
        this.rules.username[0].required = true;
        this.rules.password[0].required = true;
      });
    },
    async confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          let {
            userId,
            // agentMode,
            // level,
            // username,
            password,
            // googleStr,
            // googleCode,
            commissionSwitch,
            loginSwitch,
            lowSwitch,
            withdrawSwitch,
            positionListSwitch,
            closePositionListSwitch,
            depositListSwitch,
            withdrawListSwitch,
            userAssetsSwitch,
            otcSwitch,
            ...repo
          } = this.cForm;
          let params = {
            loginSwitch: loginSwitch ? 1 : 0,
            commissionSwitch: commissionSwitch ? 1 : 0,
            lowSwitch: lowSwitch ? 1 : 0,
            withdrawSwitch: withdrawSwitch ? 1 : 0,
            positionListSwitch: positionListSwitch ? 1 : 0,
            closePositionListSwitch: closePositionListSwitch ? 1 : 0,
            depositListSwitch: depositListSwitch ? 1 : 0,
            withdrawListSwitch: withdrawListSwitch ? 1 : 0,
            userAssetsSwitch: userAssetsSwitch ? 1 : 0,
            otcSwitch: otcSwitch ? 1 : 0,
            ...repo,
          };
          if (this.oldPwd !== password || userId === '') {
            params.password = mMd5.md5(password);
          }
          userId === ''
            ? params
            : Object.assign(params, {
                userId,
                businessType: 1,
              });
          this.btnLoading = true;
          const res = userId === '' ? await $api.addBusinessUserInsert(params) : await $api.updateBusinessAgent(params);
          if (res) {
            let txt = userId === '' ? '新增成功' : '编辑成功';
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
      const res = await $api.getBusinessList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach((v) => {
          v['commissionSwitch'] = v['commissionSwitch'] ? true : false;
          v['loginSwitch'] = v['loginSwitch'] ? true : false;
          v['lowSwitch'] = v['lowSwitch'] ? true : false;
          v['withdrawSwitch'] = v['withdrawSwitch'] ? true : false;
          v['positionListSwitch'] = v['positionListSwitch'] ? true : false;
          v['closePositionListSwitch'] = v['closePositionListSwitch'] ? true : false;
          v['depositListSwitch'] = v['depositListSwitch'] ? true : false;
          v['withdrawListSwitch'] = v['withdrawListSwitch'] ? true : false;
          v['userAssetsSwitch'] = v['userAssetsSwitch'] ? true : false;
          v['otcSwitch'] = v['otcSwitch'] ? true : false;
        });
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
  mounted() {
    let authObj = this.$util.getAuthority('BusinessLists', businessListsCol, businessListsColNoBtn);
    this.configs = authObj.val;
    this.btnArr = authObj.btnArr || [];
    this.searchCofig = this.$util.clone(businessListsConfig);

    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style scope lang="scss">
.businessLists-container {
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
