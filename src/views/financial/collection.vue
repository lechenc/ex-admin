<!--
 * @Author: your name
 * @Date: 2020-05-14 18:48:00
 * @LastEditTime: 2022-03-14 11:19:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\views\financial\collection.vue
-->

<template>
  <div class="collection-container">
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!-- <div class="container-footer">
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div> -->
       <el-dialog title="详情" custom-class="work-order-list-dialog" :visible.sync="dialogVisible" width="600px">
      <el-form :model="coinForm">
        <el-row>
          <el-col :span="24">
            <el-form-item label="币种" :label-width="formLabelWidth">{{ curRow.coinKey }}</el-form-item>
          </el-col>
        </el-row>
         <el-row>
          <el-col :span="24">
            <el-form-item label="币种协议" :label-width="formLabelWidth">{{ curRow.protocol }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="归集地址" :label-width="formLabelWidth">{{ curRow.defaultcollectionaddress }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="归集地址余额" :label-width="formLabelWidth">{{ curRow.balance }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="手续费地址" :label-width="formLabelWidth">{{ curRow.handlingfeeaddress }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="手续费地址余额" :label-width="formLabelWidth">{{ curRow.feeBalance }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Btable from '@/components/table/b-table';
import { collectionCol, collectionColNoBtn } from '@/config/column/financial';
import $api from '@/api/api';
export default {
  name: 'Collection',
  components: {
    Btable,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      list: [], //委托列表
      curRow: {}, // 点击的列表条目
      detailRow: {}, // 详情数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 100, // 当前每页显示页码数
      total: 0, // 总条数
      coinForm:{},
      dialogVisible:false,
      formLabelWidth:'110px',
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      // if (fn === 'edit') {
      //   this.$router.push({ path: '/financial/collectionDetail', query: { id: row.id, coinName: row.coinKey } });
      // }
      // if (fn === 'detail') {
      const res = await $api.getAddressListDetail({ id:row.id })
      if(res){
        this.curRow = res.data.data
      }
      this.dialogVisible = true;
      // }
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {};
      // Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getAddressList(query_data);
      if (res) {
        const { data } = res.data;
        // this.total = total;
        // this.current_page = current;
        this.list = data;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Collection', collectionCol, collectionColNoBtn);
    this.configs = authObj.val;

    this.getList();
  },
};
</script>

<style lang="scss">
.collection-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  // .container-footer {
  // 	display: flex;
  // 	justify-content: flex-end;
  // 	padding: 20px 0;
  // }
}
</style>
