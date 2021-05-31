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
          <el-tree ref="sidebarTree" :filter-node-method="filterNode" :default-expanded-keys="[1]" :draggable="false" @node-click="handleNodeClick" :allow-drop="collapse" @node-drop="sort" :data="treeData" node-key="roleId" :props="defaultProps" :expand-on-click-node="false">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span class="sac-label"> {{ node.label }} <i class="el-icon-info sac-icon" v-show="data.describe" @click="showDescription(data.describe)"></i></span>
              <span class="sac-btn">
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
      <div class="center-content">
        <div class="container-btn" v-if="isCURDAuth">
          <span class="btn-text"> 运营部 (2人) </span>
          <el-button type="primary" size="medium" @click="addpeopleManagement">添加角色</el-button>
        </div>
        <div>
          <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
        </div>
        <div class="container-footer">
          <icon-page :total="total" :pages="pages"></icon-page>
          <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
        </div>
      </div>
    </div>

    <!-- 添加 -->
    <el-dialog :title="sidebarDialogTitle" :visible.sync="sidebarDialogVisible">
      <el-form :model="sidebarForm" ref="sidebarForm" :rules="sidebarRules">
        <el-form-item label="子部门名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="sidebarForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="menuId" :label-width="formLabelWidth" class="tree-line">
          <el-tree :accordion="true" :check-strictly="true" :data="currentData.childrenMenu" show-checkbox node-key="id" ref="tree" :props="tree_props"> </el-tree>
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
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { peopleManagementCol, peopleManagementColNoBtn, peopleManagementConfig } from '@/config/column/system';
import $api from '@/api/api';

export default {
  name: 'PeopleManagement',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      sidebarForm: {
        id: '',
        name: '',
        menuId: [],
        status: false,
        googleCode: '',
      },
      sidebarDialogTitle: '',
      sidebarDialogVisible: false,
      sidebarBtnLoading: false,
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
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
      dialogFormVisible: false,
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
    };
  },
  methods: {
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
          const { id, name, menuId, status, googleCode } = this.sidebarForm;
          if (this.sidebarBtnLoading) return;

          const params = {
            name,
            menuId,
            googleCode,
            status: status ? 1 : 0,
          };
          this.sidebarBtnLoading = true;
          // 新增 编辑
          const res =
            id === ''
              ? await $api.apiAddPeopleManagementList(params)
              : await $api.apiEditPeopleManagementList({
                  id,
                  ...params,
                });
          if (res) {
            let txt = id === '' ? '添加成功' : '编辑成功';
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
    handleNodeClick(data) {
      console.log('data', data);
      // sidebarForm.menuId
    },

    resetFields() {
      this.$nextTick(() => {
        this.sidebarForm = {
          id: '',
          name: '',
          menuId: '',
          status: false,
          googleCode: '',
        };
        this.$refs.sidebarForm.resetFields();
        setTimeout(() => {
          this.$refs.tree.setCheckedKeys([]);
        }, 0);
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
      if (type == 'add') {
        this.sidebarDialogTitle = `创建 ${data.name} 的子菜单`;
        this.sidebarDialogVisible = true;
        this.currentNode = node;
        this.currentData = data;
        console.log('data1', data);
        this.resetFields();
      } else if (type == 'edit') {
        this.sidebarDialogTitle = `修改 ${data.name} 菜单`;
        this.sidebarDialogVisible = true;
        this.sidebarForm = JSON.parse(JSON.stringify(data));
        this.sidebarForm.desctext = this.sidebarForm.desctext;
        this.currentForm = JSON.parse(JSON.stringify(data));
        this.currentForm.desctext = this.currentForm.desctext;
      } else if (type == 'del') {
        if (!!data.children && data.children.length > 0) {
          this.$message.error({
            title: '错误',
            message: '请先删除子菜单！',
          });
          return;
        }
        this.$confirm('此操作将永久删除该菜单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.deleteMenu({
              id: data.id,
            });
            if (res) {
              this.$message({
                title: '成功',
                message: `删除${data.name}菜单成功`,
                type: 'success',
              });
              this.getAllSysUrl();
            }
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除',
            });
          });
      }
    },
    collapse(moveNode, inNode, type) {},
    sort(draggingNode, dropNode, type, event) {
      /* //console.log('排序')
      //console.log(dropNode)   //dropNode.parent.childNodes =[] 拖拽之后的重新组合的数组 */
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
      // this.getList();
    },
    addpeopleManagement() {
      this.formName = '添加角色';
      this.dialogFormVisible = true;
      this.Form.id = '';
      this.Form.name = '';
      this.Form.menuId = '';
      setTimeout(() => {
        this.$refs.tree.setCheckedKeys([]);
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
            this.btnLoading = true;
            const res = await $api.add({
              name: name,
              menuId: menuId,
            });
            if (res) {
              this.$message({
                message: '新增角色成功',
                type: 'success',
              });
              this.dialogFormVisible = false;
              this.getList();
            }
            this.btnLoading = false;
          } else {
            // 修改
            this.btnLoading = true;
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
              this.dialogFormVisible = false;
              this.getList();
            }
            this.btnLoading = false;
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
      if (fn === 'switchCoin') {
        // 角色状态，0有效，1失效
        let params = {
          id: row.id,
          status: row.status ? 0 : 1,
        };
        const res = await $api.edit(params);
        if (res) {
          this.$message({ message: res.data.message, type: 'success' });
          this.getList();
        }
      }
      // 编辑
      if (fn === 'edit') {
        this.formName = '编辑';
        this.peopleManagementForm.id = row.id;
        this.peopleManagementForm.name = row.name;
        const id_list = row.menuId.indexOf(',') > -1 ? row.menuId.split(',') : [row.menuId];
        // let getArr = this.delSameItem(id_list, row.halfArr)
        // debugger
        this.dialogFormVisible = true;
        setTimeout(() => {
          this.$refs['tree'].setCheckedKeys(id_list);
        }, 0);
      }
      // 删除
      if (fn === 'delete') {
        this.$confirm('确定删除？', '提示', { confirmButtonText: '确定', cancelButtonText: '取消' })
          .then(async () => {
            const res = await $api.deletepeopleManagement({ id: row.id });
            if (res) {
              this.$message({
                message: '删除角色成功',
                type: 'success',
              });
              this.getList();
            }
          })
          .catch(() => {
            // //console.log('deletepeopleManagement error');
          });
      }
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // getlist
    async getList() {
      return;
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      // Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getPeopleManagementList(params);
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
      this.listLoading = false;
    },
    // 权限菜单
    async getMenuList() {
      const res = await $api.apiGetPeopleManagementList({});
      if (res) {
        this.treeData.push(res.data.data[0]);
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
    let authObj = this.$util.getAuthority('peopleManagement', peopleManagementCol, peopleManagementColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(peopleManagementConfig);
    this.getList();
    this.getMenuList();

    this.$watch(
      function () {
        return this.searchCofig[0].value;
      },
      function (newVal, oldValue) {
        if (newVal) {
          this.$refs.sidebarTree.filter(newVal);
        }
      },
    );
  },
};
</script>
<style lang="scss">
.peopleManagement-container {
  padding: 4px 10px 10px 10px;
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
