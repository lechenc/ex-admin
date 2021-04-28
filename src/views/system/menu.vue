<template>
  <div class="menu-title">
    <el-row>
      <el-col :span="22" style="text-align:right; margin-top:100px;margin-bottom: 30px;">
        <el-button :disabled="!isCURDAuth" size="medium" type="primary" @click="addMenu">创建一级菜单</el-button>
      </el-col>
    </el-row>
    <el-tree draggable :allow-drop="collapse" @node-drop="sort" :data="treeData" node-key="id" :props="defaultProps" :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span class="sac-label">
          {{ node.label }} <i class="el-icon-info sac-icon" v-show="data.describe" @click="showDescription(data.describe)"></i
        ></span>
        <span class="sac-btn">
          <el-button :disabled="!isCURDAuth" type="text" size="mini" @click="() => append(node, data)">
            新增
          </el-button>
          <el-button :disabled="!isCURDAuth" type="text" size="mini" @click="() => modify(node, data)">
            修改
          </el-button>
          <el-button :disabled="!isCURDAuth" type="text" size="mini" @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
    </el-tree>
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="排序:">
          <el-input-number v-model="ruleForm.position" size="small" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="接口url:" prop="requestUrl">
          <el-input v-model="ruleForm.requestUrl" size="small"></el-input>
        </el-form-item>
        <el-form-item label="功能名称:" prop="name">
          <el-input v-model="ruleForm.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="页面路由:" prop="menuUrl">
          <el-input v-model="ruleForm.menuUrl" size="small"></el-input>
        </el-form-item>
        <el-form-item label="描述:" style=" position: relative;">
          <!-- <span class="tips_textarea">{{ ruleForm.desctext ? ruleForm.desctext.length : "0" }}/50</span> -->
          <el-input type="textarea" placeholder="请输入描述" v-model="ruleForm.desctext"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="determine" size="medium" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style></style>
<script>
import $api from '@/api/api';
export default {
  name: 'Menu',
  data() {
    return {
      isAdd: true, // 是否可以创建一级菜单
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      treeData: [],
      dialogFormVisible: false,
      ruleForm: {
        position: 0,
        requestUrl: '',
        name: '',
        menuUrl: '',
        parentId: '',
        desctext: '',
        userType:0,
      },
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      rules: {
        requestUrl: [{ required: true, message: '请输入请求url', trigger: 'blur' }],
        name: [{ required: true, message: '请输入功能名称', trigger: 'blur' }],
        menuUrl: [{ required: false, message: '请输入页面路由', trigger: 'blur' }],
      },
      currentNode: '',
      currentData: '',
      dialogTitle: '创建一级菜单',
      currentForm: {},
    };
  },
  methods: {
    resetFields() {
      this.$nextTick(() => {
        this.ruleForm = {
          position: 0, //排序,数字大的排前面还是数字小的排前面
          requestUrl: '', // 接口url
          name: '', // 名称
          menuUrl: '', // 菜单url
          parentId: '', // 父节点
          desctext: '', //描述
        };
        this.$refs.ruleForm.resetFields();
      });
    },
    addMenu() {
      this.dialogTitle = '创建一级菜单';
      this.dialogFormVisible = true;
      this.currentNode = '';
      this.resetFields();
    },
    append(node, data) {
      this.dialogTitle = `创建 ${data.name} 的子菜单`;
      this.dialogFormVisible = true;
      this.currentNode = node;
      this.currentData = data;
      this.resetFields();
    },
    modify(node, data) {
      this.dialogTitle = `修改 ${data.name} 菜单`;
      this.dialogFormVisible = true;
      this.ruleForm = JSON.parse(JSON.stringify(data));
      this.ruleForm.desctext = this.ruleForm.desctext;
      this.currentForm = JSON.parse(JSON.stringify(data));
      this.currentForm.desctext = this.currentForm.desctext;
    },
    collapse(moveNode, inNode, type) {
      if (moveNode.level == 1 && inNode.level == 1) {
        // 四种情况
        if (moveNode.nextSibling == undefined) {
          return type == 'prev';
        } else if (inNode.nextSibling == undefined) {
          return type == 'next';
        } else if (moveNode.nextSibling.id !== inNode.id) {
          return type == 'prev';
        } else {
          return type == 'next';
        }
      }
      //是否为同级下的子节点
      if (moveNode.level == 2 && inNode.level == 2 && moveNode.parent.id == inNode.parent.id) {
        // 四种情况
        if (moveNode.nextSibling == undefined) {
          return type == 'prev';
        } else if (inNode.nextSibling == undefined) {
          return type == 'next';
        } else if (moveNode.nextSibling.id !== inNode.id) {
          return type == 'prev';
        } else {
          return type == 'next';
        }
      }
    },
    sort(draggingNode, dropNode, type, event) {
      /* console.log('排序')
      console.log(dropNode)   //dropNode.parent.childNodes =[] 拖拽之后的重新组合的数组 */
      let obj = {
        aboveId: '',
        arr: [],
      };
      obj.aboveId = dropNode.data.id;
      for (let item of dropNode.parent.childNodes) {
        obj.arr.push(item.data.id);
      }
      this.updateOrderMe(obj);
    },
    updateOrderMe(obj) {
      // this.$http.post('url', {aboveId:obj.aboveId,ids: obj.arr}).then(res =>{
      //     if (!res.data.success) {
      //       this.$message.warning(res.data.msg)
      //     }
      //   })
    },

    async determine() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          // 修改
          if (this.ruleForm.id) {
            const obj = {};
            Object.entries(this.ruleForm).forEach(([key, value]) => {
              if (value != this.currentForm[key] && key != 'children') {
                obj[key] = value || 'empty';
              }
            });
            if (Object.entries(obj).length > 0) {
              obj.id = this.ruleForm.id;
              this.btnLoading = true;
              const res = await $api.editMenu(obj);
              if (res) {
                this.$message({
                  title: '成功',
                  message: `修改 ${this.ruleForm.name} 菜单成功`,
                  type: 'success',
                });
                this.resetFields();
                this.getAllSysUrl();
                this.dialogFormVisible = false;
              }
              this.btnLoading = false;
            } else {
              this.$message({
                title: '提示',
                message: `未修改任何项`,
                type: 'success',
              });
            }
          } else {
            //新增
            // 新增二级
            if (this.currentNode) {
              const parent = this.currentNode.parent;
              const children = parent.data.children || parent.data;
              const index = children.findIndex(d => d.id === this.currentData.id);
              const currentChildren = children[index];
              this.ruleForm.parentId = currentChildren.id;
            } else {
              // 新增一级
              this.ruleForm.parentId = 0;
            }
            let params = Object.assign({ userType:0 } ,this.ruleForm)
            const res = await $api.addMenu(params);
            if (res) {
              this.$message({
                title: '成功',
                message: `创建${this.ruleForm.name}菜单成功`,
                type: 'success',
              });
              this.getAllSysUrl();
              this.resetFields();
              this.dialogFormVisible = false;
            }
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    remove(node, data) {
      if (data.children.length > 0) {
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
    },
    // 获取路径树
    async getAllSysUrl() {
      const res = await $api.getMenuList({ userType:0});
      if (res) {
        this.treeData = res.data.data;
      }
    },
    // 点击弹出描述
    showDescription(describe) {
      this.$alert(describe, '描述', {
        showClose: false,
        closeOnClickModal: false,
      }).catch(() => {});
    },
  },
  created() {
    this.getAllSysUrl();
  },
  mounted() {
    let authObj = this.$util.getAuthority('Menu', [], []);

    // console.log(...authObj.btnArr);
    this.isAdd = authObj.isAdd;
    this.isCURDAuth = authObj.isModify;
  },
};
</script>
<style lang="scss">
.menu-title {
  width: 99%;
  .sac-label {
    display: inline-block;
    width: 180px;
  }
  .sac-btn {
    margin-left: 50px;
  }
  .el-tree {
    width: 600px;
    margin: 0 auto;
    background-color: #f8f8fa;
    .el-tree-node__content {
      height: 30px;
    }
  }
  .tips_textarea {
    position: absolute;
    color: #b8b8b8;
    bottom: -10px;
    right: 10px;
  }
  .sac-icon {
    margin-left: 20px;
    color: #afaeae;
  }
}
@media screen and(max-width: 750px) {
  .menu-title {
    .sac-label {
      display: inline-block;
      width: 100px;
    }
    .sac-btn {
      margin-left: 20px;
    }
    .el-tree {
      width: 90%;
    }
  }
  .sac-icon {
    margin-left: 10px;
  }
}
</style>
