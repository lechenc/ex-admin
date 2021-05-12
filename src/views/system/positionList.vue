<!--
 * @Author: your name
 * @Date: 2020-04-07 14:36:14
 * @LastEditTime: 2020-12-17 14:32:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\system\positionList.vue
 -->
<template>
  <div class="positionList-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addpositionList">添加角色</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
    <!-- 添加 -->
    <el-dialog :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="positionListForm" ref="positionListForm" :rules="rules">
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="positionListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" :label-width="formLabelWidth" class="tree-line">
          <el-tree :accordion="true" :check-strictly="true" :data="treeData" show-checkbox node-key="id" ref="tree" :props="tree_props"> </el-tree>
        </el-form-item>
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
import { positionListCol, positionListColNoBtn, positionListConfig } from '@/config/column/system';
import $api from '@/api/api';

export default {
  name: 'positionList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      searchCofig: [], // 搜索框配置
      configs: [], // 委托列表列配置
      // search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      treeData: [], //菜单
      dialogFormVisible: false,
      formName: '添加角色',
      formLabelWidth: '120px',
      rules: {
        name: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      positionListForm: {
        id: '',
        name: '',
        menuId: '',
      },
      tree_props: {
        label: 'name',
        children: 'children',
      },
    };
  },
  methods: {
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
    addpositionList() {
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
        this.positionListForm.id = row.id;
        this.positionListForm.name = row.name;
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
            const res = await $api.deletepositionList({ id: row.id });
            if (res) {
              this.$message({
                message: '删除角色成功',
                type: 'success',
              });
              this.getList();
            }
          })
          .catch(() => {
            // //console.log('deletepositionList error');
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
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      // Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getRoleList(params);
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
    async getMenuInfo() {
      const res = await $api.getMenuList({
        pageNum: 1,
        pageSize: 100,
        userType: 0,
      });
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
    let authObj = this.$util.getAuthority('PositionList', positionListCol, positionListColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(positionListConfig);
    this.getList();
    this.getMenuInfo();
  },
};
</script>
<style lang="scss">
.positionList-container {
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
