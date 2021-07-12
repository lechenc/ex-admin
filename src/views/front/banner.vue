<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
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
      <el-button type="primary" size="medium" @click="createBanner">创建Banner</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <!-- <div class="container-footer">
       <div class="foot-tip">
        <span>共{{ pages }}页/{{ total }}条数据</span>
      </div> 
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
    <BannerDialog :visible.sync="show_detail_modal" :row.sync="row" :type="show_modal_type" @freshData="getList" @close="closeDialog" />
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { bannerCol, bannerColNoBtn, bannerConfig } from '@/config/column/front';
import $api from '@/api/api';
import BannerDialog from './bannerDialog.vue';
import utils from '@/utils/util';

export default {
  name: 'Banner',
  components: {
    Btable,
    Bsearch,
    BannerDialog,
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
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      detail_list: [], // 详情数据列表
      show_detail_modal: false, // 详情显示
      show_modal_type: 0, // 弹出框的功能状态，0：创建，1修改，
      row: {}, // 选中列信息
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      
      if (fn === 'edit') {
        console.log('row',row)
        this.row = row;
        this.show_modal_type = 1;
        this.show_detail_modal = true;
      }
      if (fn === 'delete') {
        this.$confirm('是否删除此banner?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.deleteAppBannerInfo({
              bannerId: row.id,
            });
            if (res) {
              this.$message({ type: 'success', message: res.data.message });
              this.getList();
            }
          })
          .catch(() => {});
      }
      if (fn === 'switchCoin') {
        const res = await $api.editAppBannerInfo({ id: row.id, bannerStatus: row.bannerStatus ? 1 : 0 });
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
    },
    // 创建banner
    createBanner() {
      this.show_modal_type = 0;
      this.row = {};
      this.show_detail_modal = true;
    },
    // 分页
    // goPage(val) {
    //   this.current_page = val;
    //   this.getList();
    // },
    // getlist
    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;
      let vm = this;
      const params = {
        // page: this.current_page,
        // pageSize: this.pageSize,
      };
      Object.assign(params, this.search_params_obj);
      const res = await $api.getAppBannerList(params);
      if (res) {
        const { data } = res.data;
        data.forEach(v => {
          v['bannerStatus'] = v['bannerStatus'] === 1 ? true : false;
        });
        this.list = data;
        this.listLoading = false;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Banner', bannerCol, bannerColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchConfig = this.$util.clone(bannerConfig);
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
    margin: 30px auto 10px;
  }

  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
  }
  .el-switch.is-disabled .el-switch__core,
.el-switch.is-disabled .el-switch__label {
  cursor: pointer !important;
}
}
</style>
