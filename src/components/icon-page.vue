<!--
 * @Author: your name
 * @Date: 2020-08-05 19:57:34
 * @LastEditTime: 2020-08-05 20:07:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\components\iconPage.vue
-->
<template>
  <div class="icon-page">
    <div class="icon-tip" v-if="isDevice">
      <el-tooltip class="item" effect="dark" :content="`共${pages}页${total}条数据`" placement="top-start">
        <i class="el-icon-s-order"></i>
      </el-tooltip>
    </div>
    <div v-else>
      <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {

  },
  computed: {
    isDevice() {
      return this.$store.state.app.device === 'mobile';
    },
  },
};
</script>
<style lang="scss">
.icon-page {
  .icon-tip {
    i {
      font-size: 24px;
    }
  }
  span {
    font-size: 13px;
    color: #606266;
    height: 28px;
    line-height: 28px;
  }
}
</style>
