<template>
  <div class="user-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn">
      <el-button type="primary" size="medium" @click="addAnalyst">添加分析师</el-button>
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
    return {
      btnLoading: false,
      showDialog: false,
      title: '添加分析师',
      rules: {
        loginPassword: [{ required: true, message: '请输入', trigger: 'blur' }],
        googleCode: [{ required: true, message: '请输入', trigger: 'blur' }],
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
      },
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
        };
      } else {
        this.getCode();
      }
    },
  },
  methods: {
    confirm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          if (!this.form.phone && !this.form.email) {
            return this.$message.error({ title: '提示', message: '请至少填写手机号和邮箱的一种' });
          }
          let { phone, phoneAreaCode, email, loginPassword, googleCode, loginSwitch, uid } = this.form;
          let params = { googleCode, loginSwitch: loginSwitch ? 0 : 1 };
          if (phone) {
            const phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
            const msg = phoneReg.test(phone);
            if (!msg) {
              return this.$message.error('请输入正确手机号');
            }
            params.phone = phone;
            params.phoneAreaCode = phoneAreaCode;
          }
          if (email) {
            const loginEmailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
            const msg = loginEmailReg.test(email);
            if (!msg) {
              return this.$message.error('请输入正确邮箱');
            }
            params.email = email;
          }
          if (uid && loginPassword === '********') {
          } else {
            params.loginPassword = mMd5.md5(loginPassword);
          }

          const res = uid ? await $api.editAnalystMimicList({ ...params, uid }) : await $api.addAnalystMimicList({ ...params });
          if (res) {
            uid ? this.$message.success({ title: '提示', message: '编辑成功' }) : this.$message.success({ title: '提示', message: '添加成功' });
            this.showDialog = false;
            this.getList();
          }
        } else {
          this.$message.error({ title: '提示', message: '请完成表单内容填写再重试' });
        }
      });
    },
    async getCode() {
      const res = await $api.getCountryCode({});
      this.phoneAreaCodeList = res.data.data
    },
    addAnalyst() {
      this.showDialog = true;
      this.title = '添加分析师';
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
        let { loginSwitch, uid, phone, email, loginPassword, googleCode } = row;
        this.form = {
          loginSwitch: loginSwitch ? false : true,
          uid,
          phone,
          phoneAreaCode: 86,
          email,
          loginPassword: '********',
          googleCode,
        };
        this.showDialog = true;
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
