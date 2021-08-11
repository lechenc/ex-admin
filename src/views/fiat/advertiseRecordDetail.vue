<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-28 17:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="advertiseRecordDetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>广告基本信息</H3>
        <div>
          <Btable :listLoading="infoLoading" :data="infoList" :configs="infoConfigs" @do-handle="doInfoHandle" />
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="box-card-con">
        <H3>广告成交信息</H3>
        <div>
          <Btable :listLoading="dealLoading" :data="dealList" :configs="dealConfigs" />
        </div>
        <div>
          <div class="container-footer">
            <el-pagination
              background
              @current-change="goPageDeal"
              layout="total, prev, pager, next, jumper"
              :current-page="current_page"
              :page-size="pageSize"
              :total="total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import Btable from '@/components/table/b-table';
import { infoCol, dealCol } from '@/config/column/fiat';
import $api from '@/api/api';
// import activePage from "@/mixin/keepPage"

export default {
  name: 'AdvertiseRecordDetail',
  components: {
    Btable,
  },
  // mixins:[activePage],
  data() {
    return {
      advId: 0, // 列表页传入的id
      infoLoading: false, // 基本信息表格loadding
      dealLoading: false, // 成交表格loading
      infoList: [], //基本列表
      dealList: [], // 成交列表

      infoConfigs: [], // 基本列表列配置
      dealConfigs: [], // 成交列表配置

      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
    };
  },
  methods: {
    async doInfoHandle(data) {
      const { fn, row } = data;
      this.row = row;
      // 设置上架
      if (fn === 'switchAd') {
       let params = {
          isOnshelf: row.isOnshelf ? 1 : 0,
          id: row.id,
        };
        const res = await $api.changeOnshelfAdsNew(params);
        if (res) {
          this.$message({ message: '操作成功', type: 'success' });
        } else {
          const rowData = this.$route.query.row;
          // 不拷贝则直接改变了原数据
          const tmp = JSON.parse(JSON.stringify(rowData));
          this.infoList = [];
          if (tmp) {
            this.infoList.push(tmp);
            this.infoLoading = false;
          }
        }
      }
    },
    // 成交分页
    goPageDeal(val) {
      this.current_page = val;
      this.getDealDetail();
    },
    // 成交详情
    async getDealDetail() {
      if (this.dealLoading) return;
      const query_data = {
        id:this.advId,
        pageNum: this.current_page,
        pageSize: this.pageSize,
        // advId: this.advId,
      };
      this.dealLoading = true;
      const res = await $api.queryAdvTradeListDetail(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = +total;
        this.pages = +pages;
        this.current_page = current;
        this.dealList = records;
        this.dealLoading = false;
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD hh:mm:ss');
    },
  },
  
  mounted(){
      
      this.infoList = []; //基本列表
      this.dealList= []; // 成交列表

      this.infoConfigs= []; // 基本列表列配置
      this.dealConfigs= []; // 成交列表配置

      this.current_page= 1; // 当前页码
      this.pageSize= 10; // 当前每页显示页码数
      this.total= 0; // 总条数
      this.pages= 0; // 总页数

    this.infoConfigs = infoCol;
    this.dealConfigs = dealCol;
    const rowData = JSON.parse(localStorage.getItem('advertiseRecord'));
    const tmp = JSON.parse(JSON.stringify(rowData));
    if (tmp) {
      this.infoList.push(tmp);
      this.infoLoading = false;
    }
    this.advId = this.$route.query.id;
    this.getDealDetail();
  },
};
</script>
<style lang="scss">
.advertiseRecordDetail-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }

  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }

  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      h3::before {
        content: '';
        border-left: 5px solid #03a7f0;
        margin-right: 10px;
      }
    }
  }
}
</style>
