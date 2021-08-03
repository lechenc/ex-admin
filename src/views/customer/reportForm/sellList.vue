<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-10-17 19:02:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="sellList-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="true"
        @do-exportExcel="exportExcel"
      />
    </div>
    <div class="container-btn">
      <!-- <el-button v-if="btnArr.includes('sellSet')" type="primary" size="medium" @click="sellSetFunc">出售设置</el-button> -->
      <el-button v-if="btnArr.includes('allJudgement')" type="primary" size="medium" @click="dialogCheckVisible = true">批量审核</el-button>
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
    <!-- 设置 -->
    <!-- <el-dialog :visible.sync="dialogVisible" width="500px" title="出售模式设置">
      <el-form :model="form" ref="form" :rules="delRules">
         <el-form-item label="出售抢单模式开关" prop="aaa1" :label-width="labelWidth">
          <el-switch v-model="form.aaa1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
           <b-two-date-timer
            ref="twoTimer"
              :labelWidth="labelWidth"
              labelWords="抢单时间"
              :date1.sync="form.startTime"
              :date2.sync="form.endTime"
              :isdisabled="!isChangeInfo"
            ></b-two-date-timer>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog> -->
    <!-- 表格勾选弹窗 -->
    <TableCheckBoxAll :visible.sync="dialogCheckVisible" @handler="getCheckData" @close="closeCheckDialog" :curItem="currItem"></TableCheckBoxAll>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { sellListCol,sellListColNoBtn, sellListConfig } from '@/config/column/customer';
import BTwoDateTimer from '@/components/b-two-date-timer';
import TableCheckBoxAll from '@/components/customer/tableCheckBoxAll';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'SellList',
  components: {
    Btable,
    Bsearch,
    iconPage,
    BTwoDateTimer,
    TableCheckBoxAll
  },
  data() {
    return {
      listLoading: false, // 表格loading
      calLoading: false,
      excelLoading: false, // 导出loadiing
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
      
      btnArr: [], // 配置的按钮数组
      dialogCheckVisible: false, // 是否显示迁移勾选表格
      currItem: {},
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      // 审核
      if (fn === 'judgement') {
        this.$confirm("确认审核吗?", "温馨提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            const res = await $api.delSubGroup({
              groupId: row.recdId,
            });
            if (res) {
              this.$message({ type: "success", message: "删除成功" });
              this.getList();
            }
          })
          .catch(() => {});
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
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
    // 提交
    confirmOp() {
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
            this.$message({ message: '审核成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
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
      const res = await $api.getDepositList(query_data);
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
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getDepositList(params);
      this.excelLoading = false;
      if (res) {
        return res;
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('SellList', sellListCol, sellListColNoBtn);
    this.configs = authObj.val;
    this.btnArr = authObj.btnArr || [] || [];
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(sellListConfig);

    this.getList();
  },
};
</script>
<style scope lang="scss">
.sellList-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin-bottom: 10px;
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
