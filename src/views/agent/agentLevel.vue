<template>
  <div class="agentLevel-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <!-- <Btable :listLoading="listLoading" :data="list" :configs="configs" /> -->
      <el-table v-loading="listLoading" :data="list" style="width: 100%" row-key="uid" border lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" :header-cell-style="{ background: '#eef1f6', color: '#606266' }">
        <el-table-column width="130" prop="uid" label="代理UID"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
        <el-table-column prop="commissionPercent" label="手续费返佣比例"> </el-table-column>
        <el-table-column prop="packPercent" label="团队长返佣比例"> </el-table-column>
        <el-table-column prop="amount" label="可用"> </el-table-column>
        <el-table-column prop="waitAmount" label="待结算"> </el-table-column>
        <el-table-column prop="ensureAmount" label="保证金"> </el-table-column>
        <el-table-column label="操作" fixed="right" width="200" prop="action">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div> -->

    <!-- 编辑费率 -->
    <el-dialog title="编辑费率" width="500px" :visible.sync="dialogFormVisible">
      <el-form :model="editForm" ref="editForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="代理商UID" :label-width="formLabelWidth">
              <el-input type="text" v-model="editForm.uid" placeholder="请输入" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="手续费返佣比例" :label-width="formLabelWidth" prop="commissionPercent">
              <el-input type="text" v-model="editForm.commissionPercent" placeholder="请输入" @input="checkVal('commissionPercent', 1)">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="团队长返佣比例" :label-width="formLabelWidth" prop="packPercent">
              <el-input type="text" v-model="editForm.packPercent" placeholder="请输入" @input="checkVal('packPercent', 1)">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="管理员谷歌" :label-width="formLabelWidth">
              <el-input type="text" v-model="editForm.googleCode" placeholder="请输入"></el-input>
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
import { agentLevelConfig } from '@/config/column/contractAgent';
import $api from '@/api/api';

export default {
  name: 'AgentFinancialFlow',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },

  data() {
    return {
      showType: 1,
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
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
      curRow: {},
      dialogFormVisible: false,
      formLabelWidth: '120px',
      editForm: {
        uid: '',
        userId: '',
        commissionPercent: '',
        packPercent: '',
        googleCode: '',
      },
      rules: {
        commissionPercent: [{ required: true, message: '必填', trigger: 'blur' }],
        packPercent: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      this.editForm[val] = (this.editForm[val] + '').replace(/[^\d]/g, '');
      if (nodot === 1 && this.editForm[val] >= 100) {
        this.editForm[val] = 100;
      }
      if (this.editForm[val] < 0) {
        this.editForm[val] = 0;
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        type: 1,
      };
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      this.list = [];
      const res = await $api.getAgentRelation(params);
      if (res) {
        const { list } = res.data.data;
        list.forEach((v) => {
          v['hasChildren'] = true;
        });
        this.list = list;
        this.listLoading = false;
      } else {
        this.list = [];
        this.listLoading = false;
      }
    },
    async load(tree, treeNode, resolve) {
      const res = await $api.getAgentRelation({
        uid: tree.uid,
        type: 2,
      });
      if (res) {
        const { list } = res.data.data;
        list.forEach((v) => {
          v['hasChildren'] = true;
        });
        resolve(list);
      }
    },
    edit(row) {
      this.dialogFormVisible = true;
      const { uid, userId, commissionPercent, packPercent } = row;
      this.editForm = {
        uid,
        userId,
        commissionPercent: commissionPercent.split('%').join(''),
        packPercent: packPercent.split('%').join(''),
        googleCode: '',
      };
    },
    async confirmOp() {
      this.$refs['editForm'].validate(async (valid) => {
        if (valid) {
          const { userId, commissionPercent, packPercent, googleCode } = this.editForm;
          const params = {
            commissionPercent: commissionPercent + '%',
            packPercent: packPercent + '%',
            userId: userId,
            googleCode,
            needCheckGoogleCode: true,
          };

          this.btnLoading = true;
          const res = await $api.editRate(params);
          if (res) {
            this.$message({ message: '编辑成功', type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
  },
  mounted() {
    // this.configs = agentFinancialFlowCol;
    this.searchCofig = this.$util.clone(agentLevelConfig);
    // 初始化今天，和昨天的时间
    // this.toDay = this.$util.diyTime('toDay');
    // this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style lang="scss">
.agentLevel-container {
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
