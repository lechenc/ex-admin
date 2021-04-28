<template>
  <div class="orderSwitch-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <div>
        <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
      </div>
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
    <!-- 移出弹窗 -->
    <el-dialog :visible.sync="dialogDelVisible" width="500px" title="移出黑名单">
      <el-form :model="delForm" ref="delForm" :rules="delRules">
        <el-form-item label="释放奖励类型" prop="type" label-width="120px">
          <el-select v-model="delForm.type" placeholder="请选择" style="width:180px;">
            <el-option label="不释放" value="1"></el-option>
            <el-option label="释放全部" value="2"></el-option>
            <el-option label="释放周薪" value="3"></el-option>
            <el-option label="释放分红" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="谷歌验证码" prop="googleCode" label-width="120px">
          <el-input type="text" placeholder="" v-model="delForm.googleCode"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogDelVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmDel">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { orderSwitchCol, orderSwitchColNoBtn, orderSwitchConfig } from '@/config/column/exchange';
import $api from '@/api/api';

export default {
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      symbollist: [],
      dialogDelVisible: false, // 是否移出
      delForm: {
        id: 0,
        type: '',
        googleCode: '',
      },
      delRules: {
        type: [{ required: true, message: '必填' }],
        googleCode: [{ required: true, message: '必填' }],
      },
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'checkOut') {
        this.$confirm('确定关闭（一旦关闭则不能操作币种）?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            // this.dialogDelVisible = true;
            // this.$nextTick(() => {
            //   this.delForm = {
            //     id: "",
            //     type: "",
            //     googleCode: "",
            //   };
            //   this.$refs["delForm"].resetFields();
            const params = {};
            const res = await $api.getBusinessRecordPage(params);
            if (res) {
              const tips = nowStatus == 0 ? '' : '';
              this.$message({ type: 'success', message: '' });
            }
          })
          .catch(() => {
            // this.$message({ type: "info", message: "已取消驳回" });
          });
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

    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      if (this.search_params_obj.coinMarket) {
        let tmpName = '';
        // this.symbollist.forEach(v => {
        //   if (v["value"] === this.search_params_obj.coinMarket) {
        //     tmpName = v["label"];
        //   }
        // });
        tmpName = this.symbollist.find(v => v['value'] == this.search_params_obj.coinMarket).label;
        this.search_params_obj.coinMarket = tmpName;
      }
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getBusinessRecordPage(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return !~(val + '').indexOf('-') ? val : parseInt(new Date(val).getTime() / 1000);
    },
    async getSymbolList() {
      // 交易对获取
      // this.$store.dispatch("common/getSymbolList").then(() => {
      //   this.symbollist = this.$store.state.common.symbollist;
      //   this.searchCofig[0]["list"] = this.symbollist;
      // });
      this.searchCofig[0]['list'] = [{ label: '待审核', value: 0 }, { label: '成功', value: 1 }, { label: '驳回', value: 2 }];
    },
  },
  mounted() {
    // let authObj = this.$util.getAuthority("Extract", orderSwitchCol, orderSwitchColNoBtn);
    // this.configs = authObj.val;
    // this.configs = orderSwitchCol;
    // this.searchCofig = orderSwitchConfig;
    // this.getList();
    // this.getSymbolList();
  },
};
</script>
<style scope lang="scss">
.orderSwitch-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    width:100%;
    overflow-x:scroll;
    overflow-y:hidden;
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
