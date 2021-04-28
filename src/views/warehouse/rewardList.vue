<template>
  <div class="account-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addTotal" v-loading.fullscreen.lock="totalLoading">一键统计</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- 编辑弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="当前统计总值" prop="bonus" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.bonus" :disabled="true">
            <div slot="append">ALPT</div>
          </el-input>
        </el-form-item>
        <el-form-item label="输入实发奖励" prop="realityBonus" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.realityBonus">
            <div slot="append">ALPT</div>
          </el-input>
        </el-form-item>
        <el-form-item label="谷歌验证码" prop="googleCode" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.googleCode"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
    <!-- 一键统计 -->
    <el-dialog :visible.sync="dialogTotalVisible" width="500px" title="一键统计">
      <el-form>
        <el-form-item label="应发RMB总数" :label-width="labelWidth">
          {{ totalData.totalRMB }}
        </el-form-item>
        <el-form-item label="获奖人数" :label-width="labelWidth">
          {{ totalData.userNum }}
        </el-form-item>
        <el-form-item label="ALPT市价" :label-width="labelWidth">
          <el-input type="number" v-model="totalData.rate" placeholder="请输入" @input="checkVal('rate')">
            <div slot="append">RMB</div>
          </el-input>
        </el-form-item>
        <el-form-item label="应发ALPT总数" :label-width="labelWidth">
          {{ totalData.totalBonus }}
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button type="primary" @click.stop="getResult">立即计算</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { rewardCol, rewardColNoBtn, rewardConfig } from '@/config/column/warehouse';
import Precision from '@/utils/number-precision';
import $api from '@/api/api';

export default {
  name: 'WarehouseRewardList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth:false,// 是否可修改
      listLoading: false, // 表格loading
      btnLoading: false, // 提交
      totalLoading: false, // 统计loading
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
      title: '编辑奖励',
      labelWidth: '140px',
      dialogVisible: false, // 是否弹出弹窗
      curRow: {}, // 当前被点击的数据条目
      form: {
        id: 0,
        bonus: '',
        realityBonus: 0,
        googleCode: '',
      },
      rules: {
        realityBonus: [{ required: true, message: '请输入' }],
        googleCode: [{ required: true, message: '请填写验证码' }],
      },
      dialogTotalVisible: false, // 一键统计
      totalData: {}, // 一键统计的数据
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      // 周薪奖励才能编辑，分红奖励不可编辑
      if (fn === 'edit') {
        // 编辑
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            id: this.curRow.id,
            bonus: this.curRow.bonus,
            realityBonus: this.curRow.realityBonus,
            googleCode: '',
          };
        });
      }
      if (fn === 'detail') {
        if (row.rewardsType == 1) {
          // 周薪奖励
          this.$router.push({ path: '/warehouse/weeklyPayList', query: { id: row.id } });
        } else {
          // 分红奖励
          this.$router.push({ path: '/warehouse/distributionList', query: { id: row.id } });
        }
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
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    addTotal() {
      this.getBonus();
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { bonus, ...repo } = this.form;
          const params = {
            ...repo,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = await $api.warehouseEditReward(params);
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    getResult() {
      if (!this.totalData.rate) {
        this.$message({ message: '汇率不合法，请检查输入', type: 'success' });
      } else {
        let tmp = Precision.divide(this.totalData.totalRMB, this.totalData.rate);
        this.totalData.totalBonus = (tmp + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3");
      }
    },
    // 汇率不能为负数
    checkVal(val) {
      if (this.totalData[val] < 0) {
        this.totalData[val] = 0;
      }
    },
    // 获取统计数据
    async getBonus() {
      this.totalLoading = true;
      // 新增 编辑
      const res = await $api.getCurrentWeekBonus({});
      if (res) {
        this.dialogTotalVisible = true;
        this.totalData = res.data.data;
        this.totalData.totalRMB = (this.totalData.totalRMB + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3");
        this.totalData.totalBonus = (this.totalData.totalBonus + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3");
      }
      this.totalLoading = false;
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.warehouseRewardList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = +total;
        this.current_page = current;
        this.pages = pages;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [
          this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
          this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss'),
        ];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('WarehouseRewardList', rewardCol, rewardColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(rewardConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.account-container {
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
