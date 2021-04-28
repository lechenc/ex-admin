<template>
  <div class="statistics-container">
    <div class="container-top">
      <div class="line">数目统计</div>
    </div>
    <ul>
      <li>
        <div class="title">总积分</div>
        <div class="con">{{ curRow.totalPoint }}</div>
      </li>
      <li>
        <div class="title">总标仓数</div>
        <div class="con">{{ curRow.totalWarehouse }}</div>
      </li>
      <li>
        <div class="title">总持仓ALPT</div>
        <div class="con">{{ curRow.totalAlpt }}</div>
      </li>
      <li>
        <div class="title">总持仓ALPT（持仓大于100ALPT）</div>
        <div class="con">{{ curRow.totalAlptBiggerThanOneHundred }}</div>
      </li>
      <li>
        <div class="title">总用户数</div>
        <div class="con">{{ curRow.totalUser }}</div>
      </li>
      <li>
        <div class="title">总用户数（持仓大于100ALPT）</div>
        <div class="con">{{ curRow.totalUserBiggerThanOneHundred }}</div>
      </li>
      <li>
        <div class="title">当期待发放周奖励总数</div>
        <div class="con">{{ curRow.currentAmountWeek }}</div>
      </li>
      <li>
        <div class="title">当期待发放季度分红总数</div>
        <div class="con">{{ curRow.currentAmountQuarter }}</div>
      </li>
      <li>
        <div class="title">总发放周结算奖励总数</div>
        <div class="con">{{ curRow.totalAmountWeek }}</div>
      </li>
      <li>
        <div class="title">总发放季度分红奖励总数</div>
        <div class="con">{{ curRow.totalAmountQuarter }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import $api from '@/api/api';

export default {
  name: 'WarehouseStatistics',
  components: {},
  data() {
    return {
      listLoading: false, // 表格loading
      curRow: {}, // 结果成员
    };
  },
  methods: {
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;
      const res = await $api.warehouseStatistics({});
      if (res) {
        const records = res.data.data;
        if (records) {
          this.curRow = records;
        }
        this.listLoading = false;
      }
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
<style lang="scss">
.statistics-container {
  padding: 4px 10px 10px 10px;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    list-style-type: none;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 340px;
      height: 210px;
      margin: 0 50px 50px 0;
      background: #ffffff;
      border-radius: 5px;
      // box-shadow:1px 1px 2px 2px #ccc;rgba(0,0,0,.5)
      box-shadow: 1px 2px 6px #ccc;
      .title {
        font-size: 19px;
        font-weight: 600;
        color: #000;
        margin-bottom: 40px;
        text-align:center;
      }
      .con {
        font-size: 18px;
        font-weight: 600;
        color: #03a7f0;
      }
    }
  }

  .container-top {
    margin: 15px 0;
    .line {
      font-size: 18px;
      font-weight: 500;
      color: #333;
      span {
        font-size: 16px;
        color: #606266;
      }
    }
    .line::before {
      content: '';
      border-left: 5px solid #03a7f0;
      margin-right: 10px;
    }
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
@media screen and(max-width: 750px) {
  .statistics-container {
    ul {
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 94%;
        height: 210px;
        // margin: 0 0 20px 0;
      }
    }
  }
}
</style>
