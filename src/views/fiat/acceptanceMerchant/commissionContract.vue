<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-10-17 17:14:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="commissionContract-container">
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
  </div>
</template>
<script>
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { commissionContractCol, commissionContractColNoBtn } from '@/config/column/fiat';
import $api from '@/api/api';

export default {
  name: 'CommissionContract',
  components: {
    Btable,
    iconPage,
  },
  data() {
    return {
      btnArr: [],
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
    };
  },
  methods: {
    async doHandle(data) {
      let { fn, row } = data;
      this.row = row;
      if (fn === 'lock') {
        this.changeStatus(row.uid, 'lock');
      }
      if (fn === 'activation') {
        this.changeStatus(row.uid, 'activation');
      }
      if (fn === 'detail') {
        this.$router.push({path:'/fiat/customerFlow',query:{uid: row.uid}});
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
    async changeStatus(uid, status) {
      let tip = status == 'lock' ? '锁定' : '激活';
      this.$confirm(`确定${tip}?`, '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const params = {
            uid: uid,
            type: status == 'lock' ? 0 : 1,
          };
          const res = await $api.setLockOrActivationStatus(params);
          if (res) {
            let txt = status == 'lock' ? '锁定操作成功！' : '激活操作成功！';
            this.$message({ type: 'success', message: txt });
            this.getList();
          }
        })
        .catch(() => {
          this.$message({ type: 'info', message: '已取消删除' });
        });
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getAccountManageQuery(query_data);
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
  },
  mounted() {
    let authObj = this.$util.getAuthority('CommissionContract', commissionContractCol, commissionContractColNoBtn);
    this.configs = authObj.val;
    this.btnArr = authObj.btnArr || [];
    this.getList();
  },
};
</script>
<style scope lang="scss">
.commissionContract-container {
  padding: 4px 10px 10px 10px;
  .container-btn {
    margin: 20px;
  }
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
