<!--
 * @Author: your name
 * @Date: 2020-05-14 18:48:00
 * @LastEditTime: 2020-10-23 18:05:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\layout\components\Sidebar\index.vue
-->
<template>
  <div :class="{ 'has-logo': showLogo }">
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <!-- <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" /> -->
        <sidebar-item :isStaticOrDynamic="isStaticOrDynamic" v-for="route in routes" :key="route.menuUrl" :item="route" :base-path="route.menuUrl" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from './Logo';
import SidebarItem from './SidebarItem';
import variables from '@/styles/variables.scss';

export default {
  data() {
    return {
      isStaticOrDynamic: window.isStaticOrDynamic,
    };
  },
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['sidebar']),
    // routes() {
    //   return this.$store.state.app.navlist;
    // },
    routes() {
      if (this.isStaticOrDynamic === 'static') {
        return this.$router.options.routes;
      } else {
        return this.$store.state.app.navlist;
      }
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  created(){

  }
};
</script>
