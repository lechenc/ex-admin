

<template>
  <div class="agentPlacesConfigs-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :calLoading="calLoading" />
    </div>
    <!-- <div class="container-btn" v-if="btnArr.includes('agentPlacesConfigs')">
      <el-button type="primary" size="medium" @click="addVip">立即发放代理名额</el-button>
    </div> -->
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加  -->
    <el-dialog title="立即发放代理名额" width="550px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-form-item class="center-item" label="需要发放名额的代理或商务UID" prop="uidList" :label-width="labelWidth">
          <el-col :span="24"><el-input @input="checkVal2('uidList')" type="textarea" placeholder="请输入UID,以逗号隔开" v-model="cForm.uidList"></el-input> </el-col>
        </el-form-item>

        <el-form-item class="center-item" label="发放可创建高额返佣代理名额次数" prop="quotaCount" :label-width="labelWidth">
          <el-col :span="24"><el-input @input="checkVal('quotaCount', 'noDot')" type="text" placeholder="请输入" v-model="cForm.quotaCount"></el-input> </el-col>
        </el-form-item>

        <!-- <el-form-item label="谷歌验证码" prop="googleCode" :label-width="labelWidth">
          <el-col :span="24"><el-input @input="checkVal('googleCode', 'noDot')" type="text" placeholder="请输入" v-model="cForm.googleCode"></el-input> </el-col>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 详情 -->
    <el-dialog title="详情" width="600px" :visible.sync="dialogDetailVisible">
      <el-row class="sac-row" >
        <el-col :span="10"> </el-col>
        <el-col :span="8" style="font-weight: 700"> 发放次数：{{curRow.quotaCount}}</el-col>
        <el-col :span="6" style="font-weight: 700"> 使用次数：{{curRow.useCount}}</el-col>
      </el-row>
      <Btable maxHeight='300px' :listLoading="detaiLlistLoading" :data="detailList" :configs="detailConfigs" />
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDetailVisible = false" type="primary">我知道了</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';

import { agentPlacesConfigsCol, agentPlacesConfigsConfig, agentPlacesConfigsDetailCol, agentsListsCol, agentsListsColNoBtn } from '@/config/column/contractAgent';

import $api from '@/api/api';

export default {
  name: 'AgentPlacesConfigs',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      labelWidth: '130px',
      listLoading: false, // 表格loading
      calLoading: false,
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
      symbollist: [],
      contractRateArr: {},
      btnArr: [],
      dialogFormVisible: false, // 弹窗
      dialogDetailVisible: false,
      btnLoading: false, // 提交loadding
      cForm: {},
      rules: {
        quotaCount: [{ required: true, message: '必填', trigger: 'blur' }],
        uidList: [{ required: true, message: '必填', trigger: 'blur' }],
        // googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      detaiLlistLoading: false,
      detailList: [],
      detailConfigs:[]
    };
  },

  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'details') {
        this.detailList = [];
        this.dialogDetailVisible = true;
        this.curRow = row
        const params = {
          agentQuotaRecordId: row.id,
        };
        const res = await $api.apiGetAgentPlacesConfigsDetalsById(params);
        if (res) {
          this.detailList = res.data.data;
        }
      }
    },
    addVip() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields();
        this.cForm = {
          quotaCount: '',
          uidList: '',
          // googleCode: '',
        };
      });
    },
    async confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          const { quotaCount, uidList, googleCode } = this.cForm;
          let params = {
            quotaCount,
            uidList: uidList.split(','),
            // googleCode,
          };
          this.btnLoading = true;
          const res = await $api.apiAddAgentPlacesConfigsList(params);
          if (res) {
            this.$message({ message: '操作成功', type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    checkVal2(val) {
      this.cForm[val] = (this.cForm[val] + '').replace(/[^\d,]/g, '');
      this.cForm[val] = (this.cForm[val] + '').replace(/,,/g, ',');
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      // 有第二个参数则是禁止小数位，必须整数
      if (nodot) {
        this.cForm[val] = (this.cForm[val] + '').replace(/[^\d]/g, '');
      }
      if (this.cForm[val] < 0) {
        this.cForm[val] = 0;
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
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
        pageNum: this.current_page,
        pageSize: this.pageSize,
        grantSource:1,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.apiGetAgentPlacesConfigsList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmp = '';
          tmp = this.symbollist.filter((v) => v['value'] == this.search_params_obj.coinMarket)[0].label;
          this.search_params_obj.coinMarket = tmp;
        }
      }

      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.today, 'YYYY/MM/DD HH:mm:ss')];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      // return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
      return !~(val + '').indexOf('/') ? val : parseInt(new Date(val).getTime() / 1000);
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('AgentsLists', agentsListsCol, agentsListsColNoBtn);
    this.btnArr = authObj.btnArr || [] || [];
    this.configs = agentPlacesConfigsCol;
    this.detailConfigs = agentPlacesConfigsDetailCol;
    this.searchCofig = this.$util.clone(agentPlacesConfigsConfig);
    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style lang="scss">
.agentPlacesConfigs-container {
  padding: 4px 10px 10px 10px;
  .el-dialog__body {
    padding: 30px 50px;
  }
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  .center-item {
    display: flex;
    align-items: center;
    .el-form-item__content {
      flex: 1;
      margin-left: 0 !important;
    }
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
