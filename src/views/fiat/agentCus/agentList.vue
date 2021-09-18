<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-21 10:07:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="agentList-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" @do-parent="queryParent" :isParent="true" />
    </div>
    <div class="container-btn" v-if="btnArr.includes('set')">
      <el-button type="primary" size="medium" @click="setHandle">设置</el-button>
    </div>
    <div class="container-middle">
      <el-table
        :data="list"
        height="100%"
        style="width: 100%; height: 100%"
        row-key="inviteCode"
        border
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        size="mini"
      >
        <el-table-column prop="nickName" label="用户编号"></el-table-column>
        <!-- <el-table-column prop="" label="用户名称" align="center" width="140"></el-table-column>
        <el-table-column align="center" prop="account" label="账号" width="180"> </el-table-column> -->
        <el-table-column prop="aaa" label="银行卡购买收益" width="180"></el-table-column>
        <el-table-column prop="bbb" label="支付宝购买收益" width="180"></el-table-column>
        <el-table-column prop="ccc" label="微信购买收益" width="180"></el-table-column>
        <el-table-column prop="aaa" label="银行卡出售收益" width="180"></el-table-column>
        <el-table-column prop="bbb" label="支付宝出售收益" width="180"></el-table-column>
        <el-table-column prop="ccc" label="微信出售收益" width="180"></el-table-column>
        <el-table-column prop="ddd" label="持币量" width="180"></el-table-column>
        <el-table-column align="center" label="操作" width="80">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="editRow(scope.row)" v-if="btnArr.includes('edit')">修改收益</el-button>
            <el-button type="text" size="mini" @click="openDialogCheck(scope.row)" v-if="btnArr.includes('move')">迁移</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- <div class="container-footer">
      <div>
        <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
      </div>
      <el-pagination
        background
        @size-change="pageSizeChange"
        @current-change="goPage"
        layout="total,sizes, prev, pager, next, jumper"
        :current-page="current_page"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div> -->

    <!-- 表格勾选弹窗 -->
    <TableCheckBox :visible.sync="dialogCheckVisible" @handler="getCheckData" @close="closeCheckDialog" :curItem="currItem"></TableCheckBox>
    <!-- 修改弹窗 -->
    <el-dialog :visible.sync="dialogEditVisible" width="700px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="银行卡购买收益" prop="aaa">
          <el-input type="text" placeholder="请输入" v-model="form.aaa" @input="checkVal('aaa')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="银行卡出售收益" prop="bbb">
          <el-input type="text" placeholder="请输入" v-model="form.bbb" @input="checkVal('bbb')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="支付宝购买收益" prop="ccc">
          <el-input type="text" placeholder="请输入" v-model="form.ccc" @input="checkVal('ccc')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="支付宝出售收益" prop="ddd">
          <el-input type="text" placeholder="请输入" v-model="form.dddd" @input="checkVal('dddd')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="微信购买收益" prop="eee">
          <el-input type="text" placeholder="请输入" v-model="form.eee" @input="checkVal('eee')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="微信出售收益" prop="fff">
          <el-input type="text" placeholder="请输入" v-model="form.fff" @input="checkVal('fff')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" :loading="btnLoading" @click.stop="confirmEdit">确定</el-button>
      </div>
    </el-dialog>
    <!-- 父级关系弹窗 -->
    <el-dialog title="父级关系" :visible.sync="showDialogParent" width="650px" class="query-parent-dialog">
      <el-table
        size="mini"
        :data="queryParentList"
        row-key="userId"
        lazy
        :load="queryParentLoad"
        :tree-props="{ children: 'children', hasChildren: 'havaFather' }"
        height="500px"
      >
        <el-table-column prop="account" label="账号" align="left"></el-table-column>
        <el-table-column prop="nickName" label="昵称" align="left"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- 设置弹窗 -->
    <el-dialog :visible.sync="dialogSetVisible" width="500px" title="设置">
      <el-form :model="setForm" ref="setForm" :rules="setRules">
        <el-form-item label="商户可扣手续费TP最大负数值：" prop="aaa" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="setForm.aaa">
            <div slot="prepend">-</div>
            <div slot="append">TP</div>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogSetVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmSet" :loading="setBtnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { agentListConfig } from '@/config/column/customer';
import TableCheckBox from '@/components/fiat/tableCheckBox';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'AgentList',
  components: {
    Btable,
    Bsearch,
    TableCheckBox,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 修改收益提交loading
      setBtnLoading: false, // 设置提交loading
      btnArr: [], // 配置的按钮
      listLoading: false, // 表格loading
      list: [], // 列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      dialogCheckVisible: false, // 是否显示迁移勾选表格
      dialogEditVisible: false, // 是否显示修改弹出框
      title: '修改收益',
      currItem: {},
      showDialogParent: false, // 弹出定位（查父级）弹出框
      queryParentList: [], // 弹出定位（查父级）弹出框内的数据列表

      form: {
        aaa: '',
        bbb: '',
        ccc: '',
        ddd: '',
        eee: '',
        fff: '',
      },
      rules: {
        // rate: [{ required: true, message: '必填', trigger: 'blur' }],
        // cash: [{ required: true, message: '必填', trigger: 'blur' }],
      },

      // 费率列表
      cashList: [{ label: 'a', value: '1' }, { label: 'a', value: '1' }],
      dialogSetVisible: false, // 显示设置弹框
      setForm: {
        aaa: '',
      },
      setRules: {
        aaa: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    // 修改收益
    editRow(data) {
      this.dialogEditVisible = false;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.form = {
          aaa: '',
          bbb: '',
          ccc: '',
          ddd: '',
          eee: '',
          fff: '',
        };
      });
    },
    // 设置
    setHandle() {
      this.dialogSetVisible = false;
      this.$nextTick(() => {
        this.$refs['setForm'].resetFields();
        this.setForm = {
          aaa: '',
        };
      });
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      this.getList('search');
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
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
    // 关闭表格勾选弹出框
    closeCheckDialog() {
      this.dialogCheckVisible = false;
    },
    // 迁移弹出框勾选后隐藏
    getCheckData(data) {
      this.getList();
      this.dialogCheckVisible = false;
    },
    // 打开迁移弹出框
    openDialogCheck(data) {
      this.currItem = data;
      this.dialogCheckVisible = true;
    },
    // 主菜单加载子级数据
    async load(tree, treeNode, resolve) {
      let inviteCode = tree.inviteCode || tree.userId;
      const res = await $api.findInviteChild({ inviteCode: inviteCode });
      if (res) {
        let { list } = res.data.result;
        if (list && list.length > 0) {
          list.forEach(element => {
            if (element.childNum > 0) {
              element.hasChildren = true;
            } else {
              element.hasChildren = false;
            }
          });
          resolve(list);
        } else {
          resolve([]);
        }
      }
    },
    // 点击定位（查父级）
    async queryParent(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      if (!this.search_params_obj.nickName) {
        this.$message({ message: '必须输入用户编号才能定位', type: 'danger' });
        return;
      }
      const query_data = {};
      Object.assign(query_data, this.search_params_obj);
      const res = await $api.getFaInviteRecd(query_data);
      if (res) {
        this.queryParentList = res.data.result;
        this.showDialogParent = true;
      }
    },
    // 定位(查父级)弹出框---加载子级请求数据
    async queryParentLoad(tree, treeNode, resolve) {
      const res = await $api.getFaInviteRecd({ account: tree.account });
      if (res) {
        resolve(res.data.result);
      }
    },
    // 修改收益提交
    confirmEdit() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { uid, type, ...prop } = this.form;
          const params = {
            uid: parseInt(uid),
            type: parseInt(type),
            ...prop,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = await $api.warehouseAddBlack(params);
          if (res) {
            this.$message({ message: '修改收益成功', type: 'success' });
            this.dialogEditVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // 修改设置提交
    confirmSet() {
      this.$refs['setForm'].validate(async valid => {
        if (valid) {
          const { aaa } = this.setForm;
          const params = {
            aaa,
          };
          this.setBtnLoading = true;
          // 新增 编辑
          const res = await $api.warehouseAddBlack(params);
          if (res) {
            this.$message({ message: '设置TP成功', type: 'success' });
            this.dialogSetVisible = false;
          }
          this.setBtnLoading = false;
        }
      });
    },
    // getlist 获取首页表格数据
    async getList(str) {
      if (this.listLoading) return;
      const query_data = {
        // pageNum: this.current_page,
        // pageSize: this.pageSize,
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      let res = await $api.findInviteChild(query_data);
      if (res) {
        let list = [];
        res = res.data;
        if (str && str === 'search' && res.result.userId) {
          list = [res.result];
          if (res.result.list && res.result.list.length > 0) {
            list[0].hasChildren = true;
          }
        } else {
          list = res.result.list;
          if (list && list.length > 0) {
            list.forEach(v => {
              if (v.childNum > 0) {
                v.hasChildren = true;
              } else {
                v.hasChildren = false;
              }
            });
          } else {
            list = [];
          }
        }
        this.list = [];
        setTimeout(() => {
          this.list = list;
        }, 100);
      }
      this.listLoading = false;
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      // this.form[val] = this.form[val] > 100 ? 100 : this.form[val];
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('AgentList', [], []);
    this.btnArr = authObj.btnArr || [] || [] || [];
    // // 这个页面没用table组件，而是写死在页面，那就特殊处理，看返回的里面有没有action的对象，没有就不能操作按钮
    // if (this.configs && this.configs.length > 0 && this.configs[this.configs.length - 1].type == 'action') {
    //   this.isCURDAuth = true;
    // } else {
    //   this.isCURDAuth = false;
    // }
    this.searchCofig = this.$util.clone(agentListConfig);
    this.getList();
  },
};
</script>
<style scope lang="scss">
.agentList-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .container-middle {
    width: 100%;
    height: 650px;
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
