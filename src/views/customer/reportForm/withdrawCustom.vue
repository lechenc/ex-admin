<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-10-17 18:34:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="withdrawCustom-container">
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
    <div class="container-btn" v-if="btnArr.includes('coldPurse')">
      <el-button type="primary" size="medium" @click="coldPurseVisible = true">冷钱包</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs"  @do-handle="doHandle" />
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

    <!-- 提币审核 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" title="提币审核">
      <el-form :model="form" ref="form" :rules="delRules">
         <el-form-item label="TXID" prop="aaa1" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.aaa1"> </el-input>
        </el-form-item>
        <el-form-item label="谷歌验证码" prop="aaa2" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.aaa2"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
    
    <!-- 冷钱包弹窗 -->
    <el-dialog :visible.sync="coldPurseVisible" width="500px" title="冷钱包">
      <el-table :data="coldPurse" style="width: 100%" border>
        <el-table-column prop="uid" label="币种" />
        <el-table-column prop="phone" label="地址" />
        <el-table-column prop="phone" label="余额">
          <template slot-scope="scope">
            <span @click="goNewPage(scope.row['coinAddressList'])">{{ scope.row['coinAddressList'] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { withdrawCustomCol, withdrawCustomColNoBtn, withdrawCustomConfig } from '@/config/column/customer';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'WithdrawCustom',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false,
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

      curRow: {}, // 当前选定行数据
      dialogVisible: false, // 是否移出
      form: {
        aaa1: 0,
        aaa2: '',
        aaa3: '',
      },
      rules: {
        aaa1: [{ required: true, message: '必填' }],
        aaa2: [{ required: true, message: '必填' }],
        aaa3: [{ required: true, message: '必填' }],
      },
      coldPurseVisible:false, // 是否冷钱包
      btnArr:[],// 配置的按钮数组
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      // 审核
      if (fn === 'judgment') {

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
    // 余额跳转
    goNewPage(data){

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
    let authObj = this.$util.getAuthority('WithdrawCustom', withdrawCustomCol, withdrawCustomColNoBtn);
    this.configs = authObj.val;
    this.btnArr = authObj.btnArr || [] || [];
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(withdrawCustomConfig);
    this.getList();
  },
};
</script>
<style scope lang="scss">
.withdrawCustom-container {
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
}
</style>
