<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-08-05 20:30:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="notice-container">
    <div class="container-top">
      <Bsearch :configs="searchConfig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="notice-button" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="createNotice">创建公告</el-button>
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

    <!-- <el-dialog :visible.sync="show_detail_modal" :fullscreen="true">
			<el-card class="box-card">
				<div class="box-card-con">
					<div>账号：{{ account }}</div>
					<div>账号类型：{{ userType }}</div>
					<div>最后登录时间：{{ lastLoginTime }}</div>
					<div>注册时间：{{ registerTime }}</div>
				</div>
			</el-card>
			<h3>持币信息:</h3>
			<Btable :data="detail_list" :configs="rowCol" />
		</el-dialog> -->

    <NoticeDialog :visible.sync="show_detail_modal" :row.sync="row" :type="show_modal_type" @freshData="getList" @close="closeDialog" />
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { noticeCol, noticeColNoBtn, noticeConfig, noticeDetailCol } from '@/config/column/front';
import $api from '@/api/api';
import NoticeDialog from './noticeDialog.vue';

export default {
	name: 'Notice',
  components: {
    Btable,
    Bsearch,
    NoticeDialog,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 是否有添加的权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchConfig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pages: 0, // 总页数
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      lastLoginTime: '',
      registerTime: '',
      userType: '',
      account: '',
      rowCol: [], // 详情数据列配置
      detail_list: [], // 详情数据列表
      show_detail_modal: false, // 详情显示
      show_modal_type: 0, // 弹出框的功能状态，0：创建，1修改，
      row: {}, // 选中列信息
    };
  },
  methods: {
    // 表格里的操作
    async doHandle(data) {
      const { fn, row } = data;
      this.row = row;

      if (fn === 'editRow') {
        // this.editRow();
        this.show_modal_type = 1;
        this.show_detail_modal = true;
      }

      if (fn === 'delRow') {
        this.$confirm('此操作将删除该条目, 是否继续?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: this.row.id,
            };
            const res = await $api.deleteNoticeList(params);
            if (res) {
              this.$message({ type: 'success', message: '删除成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消删除' });
          });
      }

      if (fn === 'switchCoin') {
        const res = await $api.editNotice({ id: row.id, status: row.status ? 1 : 0 });
        if (res) {
          this.$message({ type: 'success', message: res.data.message });
          this.getList();
        } else {
          this.getList();
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
      this.searchConfig.forEach(v => {
        v['value'] = '';
      });
      this.getList();
    },
    closeDialog() {
      this.show_detail_modal = false;
      // this.getList();
    },
    // 弹出 公告分屏
    createNotice() {
      this.show_modal_type = 0;
      this.show_detail_modal = true;
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        type: 0,
      };
      Object.assign(params, this.search_params_obj);
      const res = await $api.getNoticeList(params);
      if (res) {
        const { records, current, total, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          v['status'] = v['status'] === 1 ? true : false;
        });
        this.list = records;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Notice', noticeCol, noticeColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchConfig = this.$util.clone(noticeConfig);
    this.rowCol = noticeDetailCol;
    this.getList();
  },
};
</script>
<style lang="scss">
.notice-container {
  padding: 4px 10px 10px 10px;
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 15px auto 10px;
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
  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        margin-right: 40px;
        font-size: 18px;
        line-height: 40px;
      }
    }
  }
}
</style>
