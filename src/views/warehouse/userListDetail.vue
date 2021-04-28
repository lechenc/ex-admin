<template>
  <div class="wuserDetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>

    <el-card class="box-card">
      <div class="box-card-con">
        <div class="header">
          <div class="main">基本信息</div>
        </div>
        <div class="card-info">
          <div><span>UID：</span>{{ curRow.uid }}</div>
          <div><span>徽章标记：</span>{{ (curRow.emblem &lt; 0) ? "--" : "加加林" + curRow.emblem }}</div>
          <div><span>邀请人UID：</span>{{ curRow.inviterUid }}</div>
        <!-- <div><span>团队总积分：</span>{{ curRow.teamPoint }}</div> -->
          <div><span>应用积分：</span>{{ curRow.applicationPoint }}</div>
          <div><span>累计分红：</span>{{ curRow.accumulatedDividends }}</div>
          <div><span>姓名：</span>{{ curRow.realName }}</div>
          <div><span>邮箱：</span>{{ curRow.email }}</div>
          <div><span>团队总人数：</span>{{ curRow.totalTeamSize }}</div>
          <div><span>个人总积分：</span>{{ curRow.totalOneselfScore }}</div>
          <div><span>永久积分：</span>{{ curRow.permanentPoint }}</div>
          <div><span>累计周薪：</span>{{ curRow.accumulatedWeeklySalary }}</div>
          <div><span>手机：</span>{{ curRow.phone }}</div>
          <div><span>昵称：</span>{{ curRow.nickName }}</div>
          <div><span>直推人数：</span>{{ curRow.numberOfDirectPromotion }}</div>
          <div><span>循环积分：</span>{{ curRow.cyclePoint }}</div>
          <div><span>当前星级：</span>第{{ curRow.starLevel }}级</div>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="box-card-con">
        <H3>奖励信息</H3>
        <div>
          <Btable :listLoading="infoLoading" :data="infoList" :configs="infoConfigs" @do-handle="doInfoHandle" />
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="box-card-con">
        <H3>团队信息</H3>

        <el-tabs v-model="teamActive" @tab-click="teamHandleClick">
          <el-tab-pane label="A" name="A"></el-tab-pane>
          <el-tab-pane label="B" name="B"></el-tab-pane>
          <el-tab-pane label="C" name="C"></el-tab-pane>
        </el-tabs>

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
import { userDetail1Col, userDetail2Col } from '@/config/column/warehouse';
import $api from '@/api/api';
import activePage from "@/mixin/keepPage"

export default {
  name: 'WarehouseUserListDetail',
  components: {
    Btable,
  },
  mixins:[activePage],
  data() {
    return {
      teamActive: 'A', // 团队信息请求的状态分栏
      getId: 0, // 列表页传入的id
      infoLoading: false, // 基本信息表格loadding
      dealLoading: false, // 成交表格loading
      infoList: [], //基本列表
      dealList: [], // 成交列表

      infoConfigs: [], // 基本列表列配置
      dealConfigs: [], // 成交列表配置
      curRow: {}, // 当前基础数据

      current_page: 1, // 当前页码
      pageSize: 30, // 当前每页显示页码数
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
          recdId: row.recdId,
        };
        const res = await $api.changeOnshelfAds(params);
        if (res) {
          this.$message({ message: '操作成功', type: 'success' });
        } else {
          this.getList();
        }
      }
    },
    // 成交分页
    goPageDeal(val) {
      this.current_page = val;
      this.teamDetail();
    },
    // 团队信息状态信息切换
    teamHandleClick() {
      this.teamDetail();
    },
    // 团队信息
    async teamDetail() {
      if (this.dealLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        uid: this.getId,
        letter: this.teamActive,
      };
      this.dealLoading = true;
      const res = await $api.warehouseUserDetailTeam(query_data);
      if (res) {
        if (res.data && res.data.data && res.data.data.data) {
          if (res.data.data.data.list) {
            this.dealList = res.data.data.data.list;
          } else {
            this.dealList = [];
          }
          this.total = res.data.data.data.size;
        } else {
          this.dealList = [];
          this.total = 0;
        }
      }
      this.dealLoading = false;
    },
    // 奖励信息
    async rewardDetail() {
      if (this.infoLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        uid: this.getId,
      };
      this.infoLoading = true;
      const res = await $api.warehouseUserDetailReward(query_data);
      if (res) {
        const { records } = res.data.data;
        this.infoList = records;
      }
      this.infoLoading = false;
    },
    // 基本信息
    async listDetail() {
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        uid: this.getId,
      };
      const res = await $api.warehouseUserDetailBasic(query_data);
      if (res) {
        const records = res.data.data;
        if (records) {
          this.curRow = records;
        }
      }
    },
  },
  // mounted() {
  //   this.infoConfigs = userDetail1Col;
  //   this.dealConfigs = userDetail2Col;
  //   this.getId = this.$route.query.id;
  //   this.listDetail();
  //   this.rewardDetail();
  //   this.teamDetail();
  // },
  activated(){
      if(this.isInTags()){
        return;
      }
      this.infoList= []; //基本列表
      this.dealList= []; // 成交列表
      this.infoConfigs= []; // 基本列表列配置
      this.dealConfigs= []; // 成交列表配置
      this.curRow= {}; // 当前基础数据
      this.current_page= 1; // 当前页码
      this.pageSize= 30; // 当前每页显示页码数
      this.total= 0; // 总条数
      this.pages= 0; // 总页数

    this.infoConfigs = userDetail1Col;
    this.dealConfigs = userDetail2Col;
    this.getId = this.$route.query.id;
    this.listDetail();
    this.rewardDetail();
    this.teamDetail();
  }
};
</script>
<style lang="scss">
.wuserDetail-container {
  padding: 4px 10px 10px 10px;
  .el-tabs__nav {
    margin-left: 20px;
    .el-tabs__item {
      font-size: 15px;
      font-weight: 500;
      color: #aba8ac;
      &.is-active {
        font-size: 16px;
        font-weight: 600;
        color: #474448;
      }
    }
  }
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
      h3 {
        padding: 0;
        margin: 0 0 20px 0;
      }
      h3::before {
        content: '';
        border-left: 5px solid #03a7f0;
        margin-right: 10px;
      }
      .header {
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .main {
          font-size: 19px;
          font-weight: 700;
        }
        .main::before {
          content: '';
          border-left: 5px solid #03a7f0;
          margin-right: 10px;
        }
        .coin {
          margin-right: 15px;
        }
      }
      .card-info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 300px;
          margin-right: 40px;
          font-size: 16px;
          line-height: 40px;
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
