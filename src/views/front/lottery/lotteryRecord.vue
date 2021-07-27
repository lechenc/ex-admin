<template>
  <div class="lotteryRecord-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
    <!-- 添加弹窗 -->
    <el-dialog :visible.sync="dialogFormVisible" width="600px" :title="formName">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="活动UID" :label-width="labelWidth">
          <span>{{ curRow.id }}</span>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="labelWidth">
          <span>{{ curRow.activityName }}</span>
        </el-form-item>
        <el-form-item label="获奖人UID" :label-width="labelWidth">
          <span>{{ curRow.uid }}</span>
        </el-form-item>
        <el-form-item label="获奖人类型" :label-width="labelWidth">
          <span>{{ curRow.userType | uTypeft }}</span>
        </el-form-item>
        <el-form-item label="当前剩余机会数" :label-width="labelWidth">
          <span>{{ curRow.retainChance }}</span>
        </el-form-item>
        <!-- <el-form-item label="累计使用机会数":label-width="labelWidth">
           <span>{{ curRow.retainChance }}</span>
        </el-form-item> -->

        <el-form-item label="奖励名称" :label-width="labelWidth">
          <span>{{ curRow.prizeName }}</span>
        </el-form-item>
        <!-- <el-form-item label="奖励币种" :label-width="labelWidth">
          <span>{{ curRow.prizeName }}</span>
        </el-form-item> -->
        <!-- <el-form-item label="奖励数量" :label-width="labelWidth">
          1
        </el-form-item> -->
        <el-form-item label="奖励内容描述" :label-width="labelWidth">
          <span>{{ curRow.prizeDescribe }}</span>
        </el-form-item>

        <!-- <el-form-item label="发奖状态" prop="ccc" :label-width="labelWidth">
          <el-select v-model="form.ccc" placeholder="请选择" style="width:180px;">
            <el-option v-for="(item, index) in labelArr" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item> -->

        <el-form-item label="获奖时间" :label-width="labelWidth">
          <span>{{ curRow.lotteryTime |typeTime}}</span>
        </el-form-item>
        <el-form-item label="使用状态" prop="useStatus" :label-width="labelWidth" v-if="showType == 'edit'">
          <el-select v-model="form.useStatus" placeholder="请选择" style="width:180px;">
            <el-option v-for="(item, index) in useStatusList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="使用状态" :label-width="labelWidth" v-if="showType == 'detail'">
          <span>{{ curRow.useStatus | utype }}</span>
        </el-form-item>
        <el-form-item label="使用时间" :label-width="labelWidth">
          <span>{{ curRow.useTime  |typeTime}}</span>
        </el-form-item>
        <el-form-item label="失效时间" :label-width="labelWidth">
          <span>{{ curRow.invalidTime |typeTime }}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmSend" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { lotteryRecordCol, lotteryRecordColNoBtn, lotteryRecordConfig } from '@/config/column/lottery';
import $api from '@/api/api';
import { parseTime } from '@/utils/index';

export default {
  name: 'LotteryRecord',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      calLoading: false,
      listLoading: false, // 表格loading
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
      labelWidth:'120px',
      showType: 'edit',
      dialogFormVisible: false,
      formName: '奖励详情',
      formLabelWidth: '180px',
      useStatusList: [{ label: '未使用', value: 0 }, { label: '已使用', value: 1 }, { label: '已过期', value: 2 }, { label: '使用中', value: 3 }],
      form: {
        id: '',
        useStatus: '',
      },
      rules: {
        useStatus: [{ required: true, message: '必填' }],
      },
    };
  },
  filters: {
        typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
    uTypeft(val) {
      switch (val) {
        case 1:
          return '标记用户';
          break;
        case 2:
          return '普通用户';
          break;
      }
    },
    utype(val) {
      switch (val) {
        case 0:
          return '未使用';
          break;
        case 1:
          return '已使用';
          break;
        case 2:
          return '已过期';
          break;
        case 3:
          return '使用中';
          break;
      }
    },
  },
  methods: {
    timeDiy(val) {
      if (!val) return '';
      return parseTime(val);
    },
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      // 是否取消用户奖励switch开关
      if (fn === 'edit') {
        this.showType = 'edit';
        this.formName = '抽奖记录编辑';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            id: row.id,
            useStatus: row.useStatus,
          };
        });
      }
      if (fn === 'detail') {
        this.showType = 'detail';
        this.formName = '抽奖记录详情';
        this.dialogFormVisible = true;
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
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    async confirmSend() {
      if (this.showType == 'edit') {
      } else {
        this.dialogFormVisible = false;
        return;
      }
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { id, useStatus } = this.form;
          const params = {
            id,
            useStatus,
          };
          this.btnLoading = true;
          const res = await $api.getPrizeUserRecord(params);
          if (res) {
            this.$message({ message: '操作成功！', type: 'success' });
            this.getList();
            this.dialogFormVisible = false;
          }
          this.btnLoading = false;
        }
      });
    },
    // // 根据查询条件进行合计弹窗展示
    // async calTotal(data) {
    //   this.search_params_obj = data;
      // if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
      //   this.search_params_obj.flag = 1;
      // }
    //   if (!this.search_params_obj.prizeName || !this.search_params_obj.coinId) {
    //     this.$message({ type: 'error', message: '奖励名称 和 币种 必填!', duration: 2000 });
    //     return;
    //   }
    //   this.calLoading = true;
    //   const params = {
    //     prizeName: this.search_params_obj.prizeName,
    //     coinId: this.search_params_obj.coinId,
    //     activityId: this.search_params_obj.activityId,
    //   };
    //   const res = await $api.getLotteryStatistics(params);
    //   if (res) {
    //     const getObj = res.data.data;
    //     if (getObj) {
    //       this.$alert(`<p>数量：${getObj.amount}</p><p>获奖人数：${getObj.peopleCount}</p>`, '统计结果', {
    //         dangerouslyUseHTMLString: true,
    //       }).catch(() => {});
    //     } else {
    //       this.$message({ type: 'error', message: '数据列表为空!' });
    //     }
    //   }
    //   this.calLoading = false;
    // },
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
      const res = await $api.getuserRecordList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.listLoading = false;
      }
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        this.searchCofig[0].value = [befV, nowV];
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('LotteryRecord', lotteryRecordCol, lotteryRecordColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    // this.$store.dispatch('common/getCoinList').then(() => {
    //   this.searchCofig[6]['list'] = this.$store.state.common.coinlist;
    // });

    this.searchCofig = this.$util.clone(lotteryRecordConfig);
    this.getList();
  },
};
</script>
<style scoped lang="scss">
.lotteryRecord-container {
  padding: 4px 20px 10px 20px;
  .middle {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
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

  // icon
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
}
/deep/ .el-dialog__body {
  max-height: 600px;
  overflow: auto;
}
</style>
