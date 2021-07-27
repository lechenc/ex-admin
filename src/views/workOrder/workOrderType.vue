<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-08-05 20:38:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="turnover-container">
    <div class="container-top" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addLabel">添加工单类型</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs"  @do-handle="doHandle"/>
    </div>
    <div class="container-footer">
       <icon-page :total="total" :pages="pages"></icon-page>
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
    </div>
    <!-- 添加,编辑的弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="dialogTitle">
      <el-form :model="form" ref="form" :rules="formRules">
        <el-form-item label="名称" prop="name"> <el-input type="text" placeholder="请输入" v-model="form.name"></el-input> </el-form-item
      ></el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="btnLoading" @click.stop="confirmOp()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { workOrderTypeCol, workOrderTypeColNoBtn, workOrderTypeConfig } from '@/config/column/workOrder';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  name: 'WorkOrderType',
  data() {
    return {
      isCURDAuth: true, // 按钮栏目权限：是否能增删改查
      excelLoading: false, // 导出loading
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      dialogTitle: '', // 弹窗提示
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      curRow: {}, // 当前操作的数据
      dialogVisible: false, // 是否显示驳回弹出框
      form: {
        id:"",
        name: '',
      },
      formRules: {
        name: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'edit') {
      this.dialogVisible = true;
      this.dialogTitle = '修改工单类型';
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            id: this.curRow.id,
            name: this.curRow.name,
          };
        });
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
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.getList();
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
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
    addLabel() {
      this.dialogVisible = true;
      this.dialogTitle = '添加工单类型';
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.form = {
          id: '',
          name: '',
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { id, name } = this.form;
          const params = {
            name
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.addWorkType(params) : await $api.editWorkType({ id, ...params });
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogVisible = false;
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
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getUserWorkType(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
        this.listLoading = false;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('WorkOrderList', workOrderTypeCol, workOrderTypeColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.getList();
  },
};
</script>
<style scope lang="scss">
.turnover-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
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
