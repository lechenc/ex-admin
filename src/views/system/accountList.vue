<!--
 * @Author: your name
 * @Date: 2020-04-07 14:37:07
 * @LastEditTime: 2020-08-05 20:27:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\system\account.vue
 -->
<template>
  <div class="account-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addAccount">添加账号</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
     <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 添加 编辑 -->
    <el-dialog :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="userForm" ref="userForm" :rules="rules">
        <el-form-item label="账号名称" :label-width="formLabelWidth" prop="account">
          <el-input v-model="userForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="userForm.password" autocomplete="off" :type="passwordType" ref="password" @focus.prevent.once="clearPwd"></el-input>
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
        <el-form-item label="所属角色" :label-width="formLabelWidth" prop="roleId">
          <el-select v-model="userForm.roleId" placeholder="选择所属角色" wdith="20%">
            <el-option v-for="item in role_list" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="userForm.id === '' ? '新用户谷歌密钥' : '谷歌密钥'" :label-width="formLabelWidth" prop="googleCode">
          <el-input v-model="userForm.googleCode" autocomplete="off">
            <div slot="append" class="gcode" @click.stop="getGoogleCode">获取密钥</div>
          </el-input>
        </el-form-item>
        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="authGoogle">
          <el-input v-model="userForm.authGoogle" placeholder="请输入管理员谷歌验证码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" prop="status" label="账号状态(是否生效)">
          <el-switch v-model="userForm.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog width="500px" title="删除该账号" :visible.sync="delFormVisible">
      <el-form ref="delForm" :rules="delFormRules" :model="delForm">
        <el-form-item :label-width="delFormLabelWidth" label="账户名称">
          <el-input v-model="delForm.account" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item :label-width="delFormLabelWidth" label="谷歌验证码" prop="authGoogle">
          <el-input v-model="delForm.authGoogle" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="delFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDel" :loading="delBtnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { accountCol, accountColNoBtn, accountConfig } from '@/config/column/system';
import $api from '@/api/api';
import mMd5 from '@/utils/module_md5';

export default {
	name: 'Account',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 是否有添加的权限
      btnLoading: false, // 提交loading
      delBtnLoading: false, // 删除loadinig
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      dialogFormVisible: false,
      passwordType: 'password',
      oldPwd: '', // 修改密码时候记录原密码，修改过就传密码，否则就不传这个字段（跟后台约定的）
      userForm: {
        authGoogle: '',
        googleCode: '',
        account: '',
        password: '',
        roleId: '',
        status: false,
        id: '',
      },
      role_list: [], // 角色列表
      rules: {
        account: [{ required: true, message: '必填', trigger: 'blur' }],
        password: [{ required: true, message: '必填', trigger: 'blur' }],
        roleId: [{ required: true, message: '必填', trigger: 'change' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
        authGoogle: [{ required: true, message: '谷歌验证码必填', trigger: 'blur' }],
      },
      isModify: false, // 是否是编辑状态
      formName: '添加账号',
      formLabelWidth: '140px',
      delFormLabelWidth: '110px',
      delFormVisible: false, // 是否显示删除账户弹出框
      delForm: {
        account: '',
        id: '',
        authGoogle: '',
      },
      delFormRules: {
        authGoogle: [{ required: true, message: '谷歌验证码必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    // 添加账号
    async addAccount() {
      this.formName = '添加账号';
      this.dialogFormVisible = true;
      this.userForm.authGoogle = '';
      this.userForm.googleCode = '';
      this.userForm.account = '';
      this.userForm.password = '';
      this.userForm.roleId = '';
      this.userForm.status = false;
      // this.userForm.id = "";
      this.$nextTick(() => {
        this.$refs['userForm'].resetFields();
      });
    },
    // 删除账号
    confirmDel() {
      this.$refs['delForm'].validate(async valid => {
        if (valid) {
          this.delBtnLoading = true;
          const res = await $api.deleteAccount({
            id: this.delForm.id,
            authGoogle: this.delForm.authGoogle,
          });
          if (res) {
            this.$message({
              message: '账号角色删除成功',
              type: 'success',
            });
            this.delFormVisible = false;
            this.getList();
          }
          this.delBtnLoading = false;
        } else {
          // console.log('delForm valid error');
        }
      });
    },
    // 新增/编辑账号
    confirmOp() {
      this.$refs['userForm'].validate(async valid => {
        if (valid) {
          const { authGoogle, googleCode, password, roleId, id, account, status } = this.userForm;
          if (id === '') {
            // 新增
            const params = {
              authGoogle,
              googleCode,
              account,
              password: mMd5.hbmd5(password),
              roleId,
              status: status ? 0 : 1,
            };
            const res = await $api.addAccount(params);
            if (res) {
              this.$message({
                message: '账号添加成功',
                type: 'success',
              });
              this.dialogFormVisible = false;
              this.getList();
            }
          } else {
            // 编辑
            const params = {
              authGoogle,
              googleCode,
              account,
              roleId,
              status: status ? 0 : 1,
              id,
            };
            if (this.oldPwd !== password) {
              params.password = mMd5.hbmd5(password);
            }
            this.btnLoading = true;
            const res = await $api.editAccount(params);
            if (res) {
              this.$message({
                message: '账号编辑成功',
                type: 'success',
              });
              this.dialogFormVisible = false;
              this.getList();
            }
            this.btnLoading = false;
          }
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'edit') {
        this.dialogFormVisible = true;
        this.formName = '编辑账号';
        this.$nextTick(() => {
          this.$refs['userForm'].resetFields();
          // this.userForm.authGoogle = row.authGoogle;// 谷歌验证码动态生成
          this.userForm.googleCode = row.googleCode;
          this.userForm.account = row.account;
          this.userForm.password = row.password;
          this.userForm.roleId = row.roleId;
          this.userForm.status = row.status;
          this.userForm.id = row.id;
          this.oldPwd = row.password;
        });
        return;
      }
      if (fn === 'delete') {
        this.delForm.id = row.id;
        this.delForm.account = row.account;
        this.delForm.authGoogle = '';
        this.delFormVisible = true;
      }
      // if (fn === "switchCoin") {
      // 	console.log(row);
      // 	// 用户状态,0-有效,1-失效
      // 	const params = {
      // 		id: row.id,
      // 		sysStatus: row.status ? 0 : 1,
      // 	};
      // 	const res = await $api.sysUpdateStatus(params);
      // 	if (res) {
      // 		this.$message({
      // 			message: "修改账户状态成功",
      // 			type: "success",
      // 		});
      // 	} else {
      // 		this.getList();
      // 	}
      // }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    clearPwd() {
      // 如果是编辑状态并且是第一次点击则清除密码让用户输入密码
      if (this.userForm.id) {
        this.userForm.password = '';
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.getList();
      // this.getRoleList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getAccountList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // 用户状态,0-有效,1-失效
        records.forEach(v => {
          v['status'] = v['status'] ? false : true;
        });
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
        this.listLoading = false;
      }
    },
    // 获取系统角色列表
    async getRoleList() {
      const res = await $api.addRoleList({});
      if (res) {
        this.role_list = res.data.data;
        // this.role_list = records.map(v => {
        // 	return { roleId: v["id"], name: v["name"] };
        // });
      }
    },

    // 获取一个谷歌密钥
    async getGoogleCode() {
      if (!this.userForm.account) {
        this.$message({
          message: '请先填写账户名称',
          type: 'error',
        });
        return;
      }
      const res = await $api.getGoogleCode({
        account: this.userForm.account,
      });
      if (res) {
        this.userForm.googleCode = res.data.data.secretKey;
        // 防止默认校验提示空，就主动校验
        this.$nextTick(() => {
          this.$refs.userForm.validateField('googleCode');
        });
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Account', accountCol, accountColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(accountConfig);
    this.getList();
    this.getRoleList();
  },
};
</script>
<style lang="scss">
.account-container {
    padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
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
  .gcode {
    font-size: 12px;
    color: #304156;
    cursor: pointer;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
</style>
