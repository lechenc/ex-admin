<template>
  <div class="account-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="true"
        @do-exportExcel="exportExcel"
        :calLoading="calLoading"
        :calTotal="true"
        @do-calTotal="calTotal"
      />
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
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { weeklyCol, weeklyColNoBtn, weeklyConfig } from '@/config/column/warehouse';
import $api from '@/api/api';
import utils from '@/utils/util';
import activePage from '@/mixin/keepPage';

export default {
  name: 'WarehouseWeeklyPayList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  mixins: [activePage],
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      calLoading: false, // 合计
      excelLoading: false, // 导出loadding
      
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
      title: '编辑奖励',
      labelWidth: '120px',
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
      starArr: [
        { label: '一星级', value: 1 },
        { label: '二星级', value: 2 },
        { label: '三星级', value: 3 },
        { label: '四星级', value: 4 },
        { label: '五星级', value: 5 },
        { label: '六星级', value: 6 },
        { label: '七星级', value: 7 },
        { label: '八星级', value: 8 },
        { label: '零星级', value: 0 },
      ],
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'edit') {
        // 编辑
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            id: this.curRow.settlementId,
            bonus: this.curRow.bonus,
            realityBonus: this.curRow.realityBonus,
            googleCode: '',
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    exportExcel(val) {
      // //console.log('val',val);
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
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
    async calTotal(data) {
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      // 输入次数和星级必填
      if (!this.search_params_obj.count || !this.search_params_obj.starLevel) {
        this.$message({ type: 'error', message: '奖励次数 和 星级查询 为必填项' });
        return;
      }
      this.calLoading = true;
      const params = { starLevel: +this.search_params_obj.starLevel, count: +this.search_params_obj.count };
      const res = await $api.getUserStayCount(params);
      const starText = this.starArr.filter(v => v.value == +this.search_params_obj.starLevel)[0].label || '';
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(
            `<p">星级：${starText}</p><p">次数：${+this.search_params_obj
              .count}</p><p style="word-wrap: break-word;word-break: break-all;">UID：${getObj.join(',')}</p>`,
            '统计结果',
            {
              dangerouslyUseHTMLString: true,
            },
          ).catch(()=>{});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
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
      const res = await $api.warehouseWeekDetail(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        //  recordStatus为0代表有未完成的，则要显示操作列，否则不显示
        let isOver = false;
        if (records.length > 0) {
          records.forEach(v => {
            if (v.recordStatus == 0) {
              isOver = true;
            }
          });
        }
        if (!isOver) {
          this.configs = weeklyColNoBtn;
        }

        this.list = records;
        this.dataList = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    requiredParams(params) {
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
      //   params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
      //   // 组件时间初始必须format格式
      //   this.searchCofig[0].value = [
      //     this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'),
      //     this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss'),
      //   ];
      // }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      // if(!this.searchCofig[0].value){
      //   let nowV = this.search_params_obj.endTime* 1000 || this.toDay;
      //   let befV = this.search_params_obj.startTime* 1000 || this.ago;
      //   // 组件时间初始必须format格式
      //   this.searchCofig[0].value = [
      //     this.$util.dateFormat(befV, 'YYYY/MM/DD HH:mm:ss'),
      //     this.$util.dateFormat(nowV, 'YYYY/MM/DD HH:mm:ss'),
      //   ];
      // }
    },
    initFunc() {
      let authObj = this.$util.getAuthority('WarehouseWeeklyPayList', weeklyCol, weeklyColNoBtn);
      this.configs = authObj.val;
      //( 此页面getList有关于configs 的额外逻辑 //  recordStatus为0代表有未完成的，则要显示操作列，否则不显示)

      // 初始化今天，之前的时间
      this.toDay = this.$util.diyTime('toDay');
      this.ago = this.$util.diyTime('ago');

      this.searchCofig = this.$util.clone(weeklyConfig);

      let tmpId = this.$route.query.id;
      if (tmpId) {
        this.searchCofig[1].value = tmpId;
        this.search_params_obj = { queryCriteria: tmpId };
        this.getList();
      } else {
        this.getList();
      }
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.warehouseWeekDetail(params);
      this.excelLoading = false;
      return res;
      // const aLink = document.createElement('a');
      // let blob = new Blob([res.data], { type: 'application/vnd.ms-excel' });
      // aLink.href = URL.createObjectURL(blob);
      // aLink.setAttribute('download', '哈哈哈哈' + '.xlsx'); // 设置下载文件名称
      // aLink.click();
      // this.excelLoading = false;
    },
  },
  // mounted() {
  //   this.initFunc();
  // },
  activated() {
    if (this.isInTags()) {
      return;
    }

    this.list = []; //委托列表
    this.configs = []; // 委托列表列配置
    this.searchCofig = []; // 搜索框配置
    this.search_params_obj = {}; // 搜索框对象
    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.total = 0; // 总条数
    this.pages = 0; // 总页数
    this.initFunc();
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
