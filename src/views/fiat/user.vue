<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-08-05 20:32:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="recharge-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
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
    <el-dialog title="修改用户类型" :visible.sync="dialogVisible" width="500px">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="用户类型调整：" prop="userEnterprise" label-width="150px">
          <el-select v-model="form.userEnterprise" size="small">
            <el-option v-for="(item, idx) in labelList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="confirmOp" size="small" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { userCol, userColNoBtn, userConfig } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'FiatUser',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      btnLoading: false, // 提交
      list: [], //委托列表
      // dataList: [], // 用于导出的数据
      toDay: '',
      ago: '',
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      curRow: {}, // 当前点击操作的数据
      labelList: [{ label: '法币账户', value: '0' }, { label: '币币账户', value: '1' }],
      dialogVisible: false, // 是否显示弹出框
      form: {
        userLevel: '1',
        userEnterprise: '1',
      },
      rules: {
        // label: [{ required: true, message: "请选择" }],
      },
    };
  },
  methods: {
    // 表格里的操作
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'edit') {
        // 重置
        this.dialogVisible = true;
      }
      if (fn === 'detail') {
        this.$router.push({ path: '/fiat/userDetail', query: { id: row.userId } });
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
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
    // 提交修改
    confirmOp() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const parms = {
            userLevel: '1',
            userEnterprise: this.form.userEnterprise,
            userId: this.curRow.userId,
          };
          this.btnLoading = true;
          const res = await $api.updateOtcUserLevel(parms);
          if (res) {
            this.$message({ message: '修改类型成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          this.$message.error({ title: '提示', message: '请完成表单内容填写再重试' });
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
      const res = await $api.queryOtcUser(query_data);
      if (res) {
        const { list, total, pageNum, pages } = res.data.result;
        this.total = +total;
        this.pages = +pages;
        this.current_page = +pageNum;
        this.list = list;
        // this.dataList = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi,"-");
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endDate = nowV.replace(/\//gi,"-");
        params.startDate = befV.replace(/\//gi,"-");
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startDate) {
        this.search_params_obj.endDate = this.formatTime(this.search_params_obj.endDate);
        this.search_params_obj.startDate = this.formatTime(this.search_params_obj.startDate);
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('FiatUser', userCol, userColNoBtn);
    this.configs = authObj.val;

    // this.isCURDAuth = authObj.isAdd;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(userConfig);
    this.getList();
  },
};
</script>
<style scope lang="scss">
.recharge-container {
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
