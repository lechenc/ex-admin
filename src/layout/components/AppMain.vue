<!--
 * @Author: your name
 * @Date: 2020-05-14 18:48:00
 * @LastEditTime: 2020-12-21 15:19:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\layout\components\AppMain.vue
-->
<template>
  <section class="app-main">
  
 <!--  <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition> -->

    <transition name="fade-transform" mode="out-in">
      <!-- 增加keep-alive缓存机制 -->
      <keep-alive :include="nowTagsList" max="8">
        <router-view></router-view>
      </keep-alive>
    </transition>

  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path;
    },
    nowTagsList() {
      let arr = [];
      // debugger
      for (let i = 0, len = this.$store.state.app.tagsList.length; i < len; i++) {
        this.$store.state.app.tagsList[i].routeName && arr.push(this.$store.state.app.tagsList[i].routeName);
      }
      // debugger
      return arr;
    }
  },
  methods:{

  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 92px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #F4F6FA;
  /* background-color: #f8f8fa; */
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
