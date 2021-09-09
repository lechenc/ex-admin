<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="coinForexRobotList-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <div class="container-btn" v-if="btnArr.includes('add')">
      <el-button type="primary" size="medium" @click="addRobot">添加</el-button>
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加 编辑 -->
    <el-dialog width="600px" :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="robotForm" ref="robotForm" :rules="rules">
        <el-form-item label="交易产品" :label-width="formLabelWidth" prop="foreignId">
          <el-select v-model="robotForm.foreignId" placeholder="" wdith="20%" :disabled="!!robotForm.id">
            <el-option v-for="(item, idx) in coinForexList" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="下单最小范围值" :label-width="formLabelWidth" prop="minVol">
          <el-input v-model="robotForm.minVol" autocomplete="off" type="number"></el-input>
        </el-form-item>
        <el-form-item label="下单最大范围值" :label-width="formLabelWidth" prop="maxVol">
          <el-input v-model="robotForm.maxVol" autocomplete="off" type="number"></el-input>
        </el-form-item>

        <el-form-item label="启动开关" :label-width="formLabelWidth" prop="enable">
          <el-switch v-model="robotForm.enable" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>

        <!-- <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
          <el-input v-model="robotForm.googleCode" autocomplete="off" type="number"></el-input>
        </el-form-item> -->
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
import { coinForexRobotListCol, coinForexRobotListColNoBtn, coinForexRobotListConfig } from '@/config/column/coinForex';
import $api from '@/api/api';

export default {
  name: 'CoinForexRobotList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      searchCofig: [], // 搜索框配置
      btnLoading: false, // 提交
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchConfig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pages: 0, // 总页数
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      toDay: '',
      ago: '',

      btnArr: [],
      formName: '',
      robotForm: {},
      rules: {
        foreignId: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],

        minVol: [
          {
            required: true,
            message: '必填',
            trigger: 'change',
          },
        ],

        maxVol: [
          {
            required: true,
            message: '必填',
            trigger: 'change',
          },
        ],
      },
      formLabelWidth: '195px',
      userArr: [], // 主流币机器人列表
      coinForexList: [],
      dialogFormVisible: false,
    };
  },

  methods: {
    getRangeVal(val) {},
    // 添加交易对
    addRobot() {
      this.formName = '添加币汇机器人';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['robotForm'].resetFields();
        this.robotForm = {
          id: '',
          foreignId: '',
          minVol: '',
          maxVol: '',
          enable: false,
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['robotForm'].validate(async (valid) => {
        if (valid) {
          const { id, foreignId, enable, ...prop } = this.robotForm;
          let userId = '';
          if (id !== '') {
            userId = this.robotForm.userId;
          }
          const params = {
            foreignId,
            enable: enable ? 1 : 0,
            ...prop,
          };

          // 新增 编辑
          const res = !id
            ? await $api.apiSaveCoinForexRobotList(params)
            : await $api.apiSaveCoinForexRobotList({
                id,
                ...params,
              });
          if (res) {
            let txt = !id ? '添加成功' : '编辑成功';
            this.$message({
              message: res.data.message,
              type: 'success',
            });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'edit') {
        // this.getRobotUserArr();
        this.formName = '编辑币汇机器人';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['robotForm'].resetFields();
          const { id, foreignId, minVol, maxVol, enable } = row;
          this.robotForm = {
            id,
            foreignId,
            minVol,
            maxVol,
            enable: enable == 1 ? true : false,
          };
        });
      }

      if (fn === 'trswitch') {
        const { id, foreignId, minVol, maxVol, enable } = row;
        let params = {
          id,
          foreignId,
          minVol,
          maxVol,
          enable: enable ? 1 : 0,
        };
        this.listLoading = true;
        const res = await $api.apiSaveCoinForexRobotList(params);
        if (res) {
          this.$message({ message: '切换成功', type: 'success' });
          this.getList();
        } else {
          this.getList();
        }
        this.listLoading = false;
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },

    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },

    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;

      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(this.search_params_obj);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getCoinForexRobotListList(params);
      if (res) {
        const { records, current, total, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        records.forEach((v) => {
          v['enable'] = v['enable'] === 1 ? true : false;
        });
        this.list = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    // 时间格式 YYYY-MM-DD
    requiredParams(params) {
      return;
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

    // 币汇产品
    async getCoinForexList() {
      this.$store.dispatch('common/getCoinForexList').then(() => {
        this.coinForexList = this.$store.state.common.coinForexList;
        this.searchCofig[0]['list'] = this.coinForexList;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('CoinForexRobotList', coinForexRobotListCol, coinForexRobotListColNoBtn);
    
    this.btnArr = authObj.btnArr || [];
    this.configs = authObj.val;
    this.searchCofig = coinForexRobotListConfig;
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getCoinForexList();
    this.getList();
  },
};
</script>
<style lang="scss">
.coinForexRobotList-container {
  .el-form-item__content {
    margin-left: 0;
  }
  .container-btn {
    margin: 20px 0;
  }

  padding: 4px 10px 10px 10px;
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 30px auto 10px;
  }

  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
}
</style>
