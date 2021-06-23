<!--
 * @Author: your name
 * @Date: 2020-04-07 14:36:14
 * @LastEditTime: 2020-12-17 14:32:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\system\peopleManagement.vue
 -->
<template>
  <div class="peopleManagement-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-center">
      <div class="center-sidebar">
        <div class="center-sidebar-title">人员结构</div>
        <div class="center-sidebar-tree">
          <el-tree ref="sidebarTree" @node-click="sidebarTreeClick" :filter-node-method="filterNode" :default-expanded-keys="[1]" :draggable="false" :allow-drop="collapse" @node-drop="sort" :data="treeData" node-key="roleId" :props="defaultProps" :expand-on-click-node="false">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span class="sac-label"> {{ node.label }} <i class="el-icon-info sac-icon" v-show="data.describe" @click="showDescription(data.describe)"></i></span>
              <span v-if="isOwer" class="sac-btn">
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link"> <i class="el-icon-arrow-down el-icon-more"></i> </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="{ type: 'add', node, data }">添加子部门</el-dropdown-item>
                    <el-dropdown-item :command="{ type: 'edit', node, data }">编辑部门</el-dropdown-item>
                    <el-dropdown-item :command="{ type: 'del', node, data }">删除部门</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </span>
          </el-tree>
        </div>
      </div>
      <div v-if="contentIsShow" class="center-content">
        <div class="container-btn" v-if="isCURDAuth">
          <span class="btn-text"> {{ currentData.name }} ({{ total }}人) </span>
          <el-button v-if="isOwer" type="primary" size="medium" @click="addpeopleManagement">添加成员</el-button>
        </div>
        <div>
          <Btable :actionShow='isOwer' :filter_type_value="filter_type_value" :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
        </div>
        <div class="container-footer">
          <icon-page :total="total" :pages="pages"></icon-page>
          <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
        </div>
      </div>
    </div>

    <!-- 添加部门 -->
    <el-dialog width="600px" :title="sidebarDialogTitle" :visible.sync="sidebarDialogVisible">
      <el-form :model="sidebarForm" ref="sidebarForm" :rules="sidebarRules">
        <el-form-item label="子部门名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="sidebarForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="menuId" :label-width="formLabelWidth" class="tree-line">
          <el-tree :data="curChildrenMenu" show-checkbox node-key="id" ref="tree" :props="tree_props"> </el-tree>
        </el-form-item>

        <el-form-item label="是否可用" :label-width="formLabelWidth" prop="status">
          <el-switch v-model="sidebarForm.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>

        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
          <el-input @input="checkVal('sidebarForm', 'googleCode')" v-model.trim="sidebarForm.googleCode" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="sidebarDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sidebarConfirmOp" :loading="sidebarBtnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加人员 -->
    <el-dialog width="600px" :title="userDialogTitle" :visible.sync="userDialogVisible">
      <el-form :model="userForm" ref="userForm" :rules="userRules">
        <el-form-item label="账号名" :label-width="formLabelWidth" prop="account">
          <el-input type="text" v-model="userForm.account" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="所属部门" :label-width="formLabelWidth" prop="roleName">
          <el-input type="text" disabled v-model="userForm.roleName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="职务" :label-width="formLabelWidth" prop="jobName">
          <el-input type="text" v-model="userForm.jobName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="备注" :label-width="formLabelWidth" prop="name">
          <el-input type="text" v-model="userForm.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="级别" :label-width="formLabelWidth" prop="isOwer">
          <el-radio v-model="userForm.isOwer" :label="0" border>普通成员</el-radio>
          <el-radio v-model="userForm.isOwer" :label="1" border>部门负责人</el-radio>
        </el-form-item>

        <el-form-item label="权限" prop="menuId" :label-width="formLabelWidth" class="tree-line">
          <el-tree :data="currentData.childrenMenu" show-checkbox node-key="id" ref="userTree" :props="tree_props"> </el-tree>
        </el-form-item>

        <el-form-item :label="userForm.id === '' ? '新用户谷歌密钥' : '谷歌密钥'" :label-width="formLabelWidth" prop="googleCode">
          <el-input v-model="userForm.googleCode" autocomplete="off">
            <div slot="append" class="gcode" @click.stop="getGoogleCode">获取密钥</div>
          </el-input>
        </el-form-item>

        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="adminGoogleCode">
          <el-input @input="checkVal('userForm', 'adminGoogleCode')" v-model.trim="userForm.adminGoogleCode" placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="是否可用" :label-width="formLabelWidth" prop="status">
          <el-switch v-model="userForm.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="userConfirmOp" :loading="userBtnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 删除 -->
    <el-dialog width="500px" title="确认删除?" :visible.sync="delDialogVisible">
      <el-form :model="delForm" ref="delForm" :rules="delRules">
        <el-form-item :label="delLabel" :label-width="formLabelWidth" prop="account">
          <el-input disabled type="text" v-model="delForm.account" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="adminGoogleCode">
          <el-input @input="checkVal('delForm', 'adminGoogleCode')" v-model.trim="delForm.adminGoogleCode" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="delDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delConfirmOp" :loading="delBtnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { peopleManagementCol, peopleManagementConfig } from '@/config/column/system';
import $api from '@/api/api';
import mMd5 from '@/utils/module_md5';
import { mapState } from 'vuex';
export default {
  name: 'PeopleManagement',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  computed: {
    ...mapState({
      // 是否为管理员
      isOwer: (state) => state.app.isOwer,
    }),
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入密码'));
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/g.test(value) && '******' !== value) {
        callback(new Error('请输入包含字母和数字的8-16位密码'));
      } else {
        callback();
      }
    };
    return {
      delLabel: '',
      delDialogVisible: false,
      delBtnLoading: false,
      delForm: {},
      delRules: {
        adminGoogleCode: [{ required: true, message: '必填', trigger: 'blur' }],
        account: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      filter_type_value: '',
      contentIsShow: false,
      userRules: {
        name: [{ required: true, message: '必填', trigger: 'blur' }],
        account: [{ required: true, message: '必填', trigger: 'blur' }],

        password: [{ required: true, validator: validatePassword, trigger: 'blur' }],
        roleName: [{ required: true, message: '必填', trigger: 'blur' }],
        jobName: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
        adminGoogleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      userDialogTitle: '',
      userDialogVisible: false,
      userForm: {},
      sidebarForm: {
        id: '',
        name: '',
        menuId: [],
        status: false,
        googleCode: '',
      },
      userBtnLoading: false,
      sidebarDialogTitle: '',
      sidebarDialogVisible: false,

      sidebarBtnLoading: false,
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      isCURDAuth: true, // 是否有增删改查权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      searchCofig: [], // 搜索框配置
      configs: [], // 委托列表列配置
      // search_params_obj: {}, // 搜索框对象q
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      treeData: [], //菜单
      formName: '添加角色',
      formLabelWidth: '120px',
      currentNode: '',
      currentData: {},
      dialogTitle: '',
      rules: {
        name: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      sidebarRules: {
        name: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      sidebarTreeData: [
        {
          name: '董事会',
          children: [
            {
              name: '深圳集团',
            },
          ],
        },
      ], //侧边栏菜单
      peopleManagementForm: {
        id: '',
        name: '',
        menuId: '',
      },
      tree_props: {
        label: 'name',
        children: 'children',
      },
      ruleForm: {},
      currentForm: {},
      curChildrenMenu: [],
    };
  },
  methods: {
    delConfirmOp() {
      this.$refs['delForm'].validate(async (valid) => {
        if (valid) {
          let { type } = this.delForm;
          if (this.delBtnLoading) return;
          let params;
          if (type == 1) {
            let { userId, adminGoogleCode } = this.delForm;
            params = { userId, adminGoogleCode };
          } else {
            let { parentRoleIdPath, adminGoogleCode } = this.delForm;
            params = { parentRoleIdPath, adminGoogleCode };
          }

          this.delBtnLoading = true;

          const res = type == 1 ? await $api.apiDeleteUserPeopleManagement(params) : await $api.apiDeletePeopleManagement(params);
          if (res) {
            this.$message({
              message: '删除成功',
              type: 'success',
            });
            this.delDialogVisible = false;
            if (type == 1) {
              this.getList(this.currentData);
            } else {
              this.getMenuList();
            }
          }

          this.delBtnLoading = false;
        }
      });
    },
    // 获取一个谷歌密钥
    async getGoogleCode() {
      if (!this.userForm.name) {
        this.$message({
          message: '请先填写账号名',
          type: 'error',
        });
        return;
      }
      const res = await $api.getGoogleCode({
        account: this.userForm.name,
      });
      if (res) {
        console.log('res', res);
        this.userForm.googleCode = res.data.data.secretKey;
        console.log('googleCode', this.userForm.googleCode);
        // 防止默认校验提示空，就主动校验
        this.$nextTick(() => {
          this.$refs.userForm.validateField('googleCode');
        });
      }
    },
    async sidebarTreeClick(data) {
      this.currentData = JSON.parse(JSON.stringify(data));
      this.filter_type_value = this.currentData.name;
      this.getList(this.currentData);
    },
    checkVal(obj, key) {
      this[obj][key] = (this[obj][key] + '').replace(/[^\d]/g, '');
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    sidebarConfirmOp() {
      this.$refs['sidebarForm'].validate(async (valid) => {
        if (valid) {
          let tmpCheck = this.$refs['tree'].getCheckedKeys();
          this.sidebarForm.menuId = tmpCheck.join(',');
          const { roleId, name, menuId, status, googleCode } = this.sidebarForm;
          if (this.sidebarBtnLoading) return;

          const params = {
            name,
            menuId,
            googleCode,
            status: status ? 0 : 1,
            parentRoleId: this.currentData.roleId,
          };
          this.sidebarBtnLoading = true;
          // 新增 编辑
          console.log('params', params);
          console.log('roleId', roleId);
          const res = !roleId
            ? await $api.apiAddPeopleManagementList(params)
            : await $api.apiEditPeopleManagementList({
                roleId,
                ...params,
              });
          if (res) {
            let txt = !roleId ? '添加成功' : '编辑成功';
            this.$message({
              message: txt,
              type: 'success',
            });
            this.sidebarDialogVisible = false;
            this.getMenuList();
          }
          this.sidebarBtnLoading = false;
        }
      });
    },
    userConfirmOp() {
      this.$refs['userForm'].validate(async (valid) => {
        if (valid) {
          let tmpCheck = this.$refs['userTree'].getCheckedKeys();
          this.userForm.menuId = tmpCheck.join(',');
          const { userId, menuId, name, roleId, password, account, roleName, jobName, isOwer, googleCode, adminGoogleCode, status } = this.userForm;
          if (this.userBtnLoading) return;

          const params = {
            account,
            menuId,
            name,
            roleName,
            jobName,
            isOwer,
            googleCode,
            adminGoogleCode,
            status: status ? 0 : 1,
            roleId,
          };
          if ((userId && password !== '******') || !userId) {
            params.password = mMd5.hbmd5(password);
          }
          this.userBtnLoading = true;
          // 新增 编辑
          const res =
            userId === ''
              ? await $api.apiAddUserPeopleManagementList(params)
              : await $api.apiEditUserPeopleManagementList({
                  userId,
                  ...params,
                });
          if (res) {
            let txt = userId === '' ? '添加成功' : '编辑成功';
            this.$message({
              message: txt,
              type: 'success',
            });
            this.userDialogVisible = false;
            this.getList(this.currentData);
          }
          this.userBtnLoading = false;
        }
      });
    },

    // 点击弹出描述
    showDescription(describe) {
      this.$alert(describe, '描述', {
        showClose: false,
        closeOnClickModal: false,
      }).catch(() => {});
    },
    handleCommand(command) {
      let { type, node, data } = command;
      console.log('node', node);
      console.log('data', data);
      if (type == 'add') {
        this.sidebarDialogTitle = `创建 ${data.name} 的子菜单`;
        this.sidebarDialogVisible = true;
        this.currentNode = node;
        let newData = JSON.parse(JSON.stringify(data));
        this.$nextTick(() => {
          this.sidebarForm = {
            id: '',
            name: '',
            menuId: '',
            status: false,
            googleCode: '',
          };
          this.$refs.sidebarForm.resetFields();
        });

        if (node.level == 1) {
          this.$nextTick(() => {
            this.curChildrenMenu = newData.childrenMenu;
            this.$refs.tree.setCheckedKeys([]);
          });
        } else {
          this.$nextTick(() => {
            this.curChildrenMenu = node.parent.data.childrenMenu;
            this.$refs.tree.setCheckedKeys([]);
          });
        }
      } else if (type == 'edit') {
        this.sidebarDialogTitle = `修改 ${data.name} 菜单`;
        this.sidebarDialogVisible = true;
        let newData = JSON.parse(JSON.stringify(data));
        newData.status = newData.status ? true : false;

        if (node.level == 1) {
          this.curChildrenMenu = newData.childrenMenu;
          this.$nextTick(() => {
            
            this.$refs.tree.setCheckedNodes(this.currentData.childrenMenu);
          });
        } else {
          this.curChildrenMenu = node.parent.data.childrenMenu;
          this.$nextTick(() => {
            
            
            console.log('newData.childrenMenu',newData.childrenMenu)
            console.log('this.currentData.childrenMenu',this.currentData.childrenMenu)
            this.$refs.tree.setCheckedNodes(this.currentData.childrenMenu);
          });
        }
        this.sidebarForm = newData;
      } else if (type == 'del') {
        if (!!data.children && data.children.length > 0) {
          this.$message.error({
            title: '错误',
            message: '请先删除子菜单！',
          });
          return;
        }
        this.delDialogVisible = true;

        this.$nextTick(() => {
          this.delForm = {
            type: 2,
            parentRoleIdPath: data.parentRoleIdPath,
            account: data.name,
            adminGoogleCode: '',
          };
          this.delLabel = '部门名称';
          this.$refs['delForm'].resetFields();
        }, 0);
      }
    },
    collapse(moveNode, inNode, type) {},
    sort(draggingNode, dropNode, type, event) {
      /* //console.log('排序')
      //console.log(dropNode)   //dropNode.parent.childNodes =[] 拖拽之后的重新组合的数组 */
    },
    doSearch(data) {
      this.current_page = 1;
      // this.search_params_obj = data;
      this.getList(this.currentData);
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.getList(this.currentData);
      // this.getList();
    },
    addpeopleManagement() {
      this.userDialogTitle = `添加成员`;
      this.userDialogVisible = true;
      this.$nextTick(() => {
        this.$refs['userForm'].resetFields();
        this.userForm = {
          userId: '',
          name: '',
          password: '',
          account: '',
          roleName: this.currentData.name,
          jobName: '',
          menuId: '',
          isOwer: 0,
          roleId: this.currentData.roleId,
          googleCode: '',
          adminGoogleCode: '',
          status: false,
        };
      });
      setTimeout(() => {
        this.$refs.userTree.setCheckedKeys([]);
      }, 0);
    },
    confirmOp() {
      this.$refs['Form'].validate(async (valid) => {
        if (valid) {
          let tmpCheck = this.$refs['tree'].getCheckedKeys();
          // let tmpHalfCheck = this.$refs['tree'].getHalfCheckedKeys();
          //  this.Form.menuId = tmpCheck.concat(tmpHalfCheck).join(',');
          //  debugger
          this.Form.menuId = tmpCheck.join(',');
          const { id, name, menuId } = this.Form;
          if (id === '') {
            // 新增
            this.userBtnLoading = true;
            const res = await $api.add({
              name: name,
              menuId: menuId,
            });
            if (res) {
              this.$message({
                message: '新增角色成功',
                type: 'success',
              });
              this.userDialogVisible = false;
              this.getMenuList();
            }
            this.userBtnLoading = false;
          } else {
            // 修改
            this.userBtnLoading = true;
            const res = await $api.edit({
              id: id,
              name: name,
              menuId: menuId,
            });
            if (res) {
              this.$message({
                message: '编辑角色成功',
                type: 'success',
              });
              this.userDialogVisible = false;
              this.getMenuList();
            }
            this.userBtnLoading = false;
          }
        } else {
          // //console.log('Form submit error');
          return false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      // 角色权限开关
      if (fn === 'switch') {
        // 角色状态，0有效，1失效
        let params = {
          userId: row.userId,
          status: row.status ? 0 : 1,
        };
        const res = await $api.apiSwitchUserPeopleManagementList(params);
        if (res) {
          this.$message({ message: res.data.message, type: 'success' });
          this.getList(this.currentData);
        } else {
          this.getList(this.currentData);
        }
      }
      // 编辑
      if (fn === 'edit') {
        this.userDialogTitle = `编辑成员`;
        this.userDialogVisible = true;
        console.log('row', row);
        const { userId, name, password, account, deptName, jobName, menuId, isOwer, roleId, googleCode, status } = row;
        this.userForm = {
          userId,
          name,
          password,
          account,
          roleName: deptName,
          jobName,
          menuId,
          isOwer,
          roleId,
          googleCode,
          status,
          adminGoogleCode: '',
        };
        setTimeout(() => {
          this.$refs.userTree.setCheckedNodes(this.currentData.childrenMenu);
        }, 0);
        this.$nextTick(() => {
          this.$refs['userForm'].resetFields();
        }, 0);
      }
      // 删除
      if (fn === 'del') {
        this.delDialogVisible = true;

        this.$nextTick(() => {
          this.delForm = {
            type: 1,
            adminGoogleCode: '',
            account: row.account,
            userId: row.userId,
          };
          this.delLabel = '账号名称';
          this.$refs['delForm'].resetFields();
        }, 0);
      }
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // getlist
    async getList(obj) {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        id: obj.roleId,
        level: obj.level,
        parentRoleIdPath: obj.parentRoleIdPath,
      };
      // Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.apiGetPeopleManagementListById(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // 角色状态，0有效，1失效
        records.forEach((v) => {
          v['status'] = v['status'] ? false : true;
        });
        this.list = records;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
      }
      this.contentIsShow = true;
      this.listLoading = false;
    },
    // 权限菜单
    async getMenuList() {
      const res = await $api.apiGetPeopleManagementList({});
      if (res) {
        this.treeData = res.data.data;
      }
    },
    //删除雷同项
    delSameItem(aArr, bArr) {
      let tmpArr = [];
      aArr.forEach((v) => {
        if (!bArr.includes(v)) {
          tmpArr.push(v);
        }
      });
      return tmpArr;
    },
  },
  mounted() {
    this.configs = peopleManagementCol;

    this.searchCofig = this.$util.clone(peopleManagementConfig);
    this.getMenuList();

    this.$watch(
      function () {
        return this.searchCofig[0].value;
      },
      function (newVal, oldValue) {
        this.$refs.sidebarTree.filter(newVal);
      },
    );
  },
};
</script>
<style lang="scss">
.peopleManagement-container {
  padding: 4px 10px 10px 10px;
  .gcode {
    font-size: 12px;
    color: #304156;
    cursor: pointer;
  }
  .container-center {
    display: flex;
    height: 100%;
    .center-sidebar {
      width: 250px;
      min-width: 250px;
      margin-right: 10px;
      background-color: #fff;
      overflow: hidden;
      border-radius: 8px;
      .center-sidebar-title {
        font-size: 25px;
        font-weight: 600;
        background-color: #409eff;
        color: #fff;
        padding: 10px 0;
        margin-bottom: 10px;
        text-align: center;
      }

      .center-sidebar-tree {
        min-height: 635px;
      }
      .el-tree-node__content {
        height: 35px;

        .el-tree-node__label {
          font-size: 15px;
        }
        &:hover {
          background-color: #ecf5ff;
          color: #66b1ff;
        }
      }

      .custom-tree-node {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sac-btn {
          margin-right: 10px;
        }
        .el-dropdown-link {
          padding: 10px 15px;
          padding-right: 5px;
        }
      }
    }
    .center-content {
      padding: 5px;
      border-radius: 8px;
      overflow: hidden;
      background-color: #fff;
      width: calc(100% - 250px);
    }
  }
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    width: 100% !important;
    margin: 20px 0;
    display: flex;
    align-items: center;
    .btn-text {
      font-size: 25px;
      font-weight: 600;
      margin-right: 30px;
      margin-left: 5px;
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
  .tree-line {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .el-tree__empty-text {
    width: 150px;
  }
}
</style>
