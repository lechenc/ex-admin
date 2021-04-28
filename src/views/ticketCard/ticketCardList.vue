<template>
  <div class="treatyAssetsContract-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :calTotal="true" @do-calTotal="calTotal" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <el-dialog title="点卡回收" width="500px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="可用数量" :label-width="formLabelWidth" prop="agentUID">
              <el-input type="text" v-model.trim="cForm.agentUID" placeholder="请输入" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="回收数量" :label-width="formLabelWidth" prop="agentUID">
              <el-input class="my-mumber-input" type="number" v-model.trim="cForm.agentUID" placeholder="请输入" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="agentUID">
              <el-input class="my-mumber-input" type="number" v-model.trim="cForm.agentUID" placeholder="请输入" ></el-input>
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
import { ticketCardListCol,ticketCardListNoBtn, ticketCardListConfig } from '@/config/column/ticketCard';
import $api from '@/api/api';

export default {
  name: 'TicketCardList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      cForm:{

      },
      rules:{},
      formLabelWidth:'120px',
      dialogFormVisible: true,
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
      symbollist: [],
      toDay: '',
      ago: '',
      coin_List:[],
      btnLoading:false
    };
  },
  methods: {
    confirmOp(){},
    // 根据查询条件进行合计弹窗展示
    async calTotal(data) {
      this.search_params_obj = data;
      this.calLoading = true;
      const params = {
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getTicketCardListTotal(params);
      if (res) {
        const getObj = res.data.data;
        if (getObj) {
          this.$alert(
            `<p>点卡币种：${getObj.originAmount}</p>
            <p>点卡数量：${getObj.amount}</p>
            <p>可用数量：${getObj.amount}</p>
            <p>冻结数量：${getObj.amount}</p>
            <p>已用数量：${getObj.amount}</p>
            <p>回收数量：${getObj.amount}</p>
            `,
            '统计结果',
            {
              dangerouslyUseHTMLString: true,
            },
          ).catch(() => {});
        } else {
          this.$message({ type: 'error', message: '数据列表为空!' });
        }
      }
      this.calLoading = false;
    },
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑档位
      if (fn === 'recycle') {
        this.dialogFormVisible = true
        
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
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
    pageSizeChangeTable(val) {
      this.current_page_table = 1;
      this.pageSize_table = val;
      this.getInfoList();
    },
    goPageTable(val) {
      this.current_page_table = val;
      this.getInfoList();
    },

    async getInfoList() {
      this.dialogTableVisible = true;
      if (this.listLoading_table) return;
      let params = {
        id: this.rowObj.id,
        pageNum: this.current_page_table,
        pageSize: this.pageSize_table,
      };
      const res = await $api.getRedPacketInfoList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total_table = total;
        this.pages_table = pages;
        this.current_page_table = current;
        this.list_table = records;
      }
      this.listLoading_table = false;
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
      // const res = await $api.getTicketCardList(query_data);
      const res = await $api.getRedPacketList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        // this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.symbollist.filter((v) => v['id'] == this.search_params_obj.coinId)[0].value;
          this.search_params_obj.coinMarket = tmpName;
        }
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    async getSymbolList() {
      this.$store.dispatch('common/getCoinList').then(() => {
        this.coin_List = this.$store.state.common.coinlist;
        this.searchCofig[1]['list'] = this.$store.state.common.coinlist;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('TicketCardList', ticketCardListCol, ticketCardListNoBtn);
    this.configs = authObj.val;
    console.log('ticketCardListConfig',ticketCardListConfig)
    this.searchCofig = this.$util.clone(ticketCardListConfig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style scope lang="scss">
.treatyAssetsContract-container {
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
