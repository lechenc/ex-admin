<!--
 * @Author: your name
 * @Date: 2020-05-14 18:48:00
 * @LastEditTime: 2020-12-21 15:47:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\layout\components\Sidebar\SidebarItem.vue
-->
<template>
  <div v-if="!item.hidden" class="main-side">
    <!-- route static -->
    <div v-if="isStaticOrDynamic === 'static'">
      <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
        <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
          <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
            <item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" :title="onlyOneChild.meta.title" />
          </el-menu-item>
        </app-link>
      </template>

      <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">
          <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </el-submenu>
    </div>

    <!-- <template
      v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow"
    >
      <app-link v-if="onlyOneChild" :to="resolvePath(onlyOneChild.menuUrl)">
        <el-menu-item :index="resolvePath(onlyOneChild.menuUrl)" :class="{ 'submenu-title-noDropdown': !isNest }">
          <item :icon="onlyOneChild.desctext || item.desctext" :title="onlyOneChild.name" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.menuUrl)" popper-append-to-body>
      <template slot="title">
        <item v-if="item" :icon="item.desctext" :title="item.name" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.menuUrl"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.menuUrl)"
        class="nest-menu"
      />
    </el-submenu> -->

    <!-- route dynamic -->
    <div v-else>
      <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
        <app-link v-if="onlyOneChild.config || onlyOneChild.name" :to="resolvePath(onlyOneChild.menuUrl)" >
          <el-menu-item :index="resolvePath(onlyOneChild.menuUrl)" :class="{ 'submenu-title-noDropdown': !isNest }" @click="updateTagsList(onlyOneChild.menuUrl)">
            <item
              :icon="(onlyOneChild.config && onlyOneChild.config.icon) || (item.config && item.config.icon)"
              :title="(onlyOneChild.config && onlyOneChild.config.title) || onlyOneChild.name"
            />
          </el-menu-item>
        </app-link>
      </template>

      <el-submenu v-else ref="subMenu" :index="resolvePath(item.menuUrl)" popper-append-to-body>
        <template slot="title">
          <item :icon="item.config && item.config.icon" :title="(item.config && item.config.title) || item.name"/>
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.menuUrl"
          :is-nest="true"
          :item="child"
          :isStaticOrDynamic="isStaticOrDynamic"
          :base-path="resolvePath(child.menuUrl)"
          class="nest-menu"
        />
      </el-submenu>
    </div>
  </div>
</template>

<script>
// v-if="item.config"
import path from 'path';
import { isExternal } from '@/utils/validate';
import Item from './Item';
import AppLink from './Link';
import FixiOSBug from './FixiOSBug';

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
    isStaticOrDynamic: {
      type: String,
      default: 'static',
    },
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    // 点击左侧nav那就更新“页面缓存列表”
    updateTagsList(val){
        let index = -1;
        let tagsList = this.$store.state.app.tagsList;
        tagsList.forEach((v,inx)=>{
          if(v.path == val){
            index = inx;
          }
        })
        // debugger
        // 在当前页则不改动
        if(this.$route.path == val){
          return;
        }
        // 非当前页则清除这个页面在“页面缓存列表”中的权限
        if(index >= 0){
          tagsList.splice(index, 1);
          // this.$store.commit("app/setTagsList", tagsList);
        }
    },
    hasOneShowingChild(children = [], parent) {
      // puxg
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>

<style lang="scss">
.main-side {
  .el-submenu {
    position: relative;
    box-sizing: border-box;
    z-index: 0;
  }
  .el-submenu.is-opened::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    transition: background 0.3s;
    background-color: #4390ff;
    z-index: 1;
    // border-left: 3px solid #4390ff;
  }
}
</style>
