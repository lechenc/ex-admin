<template>
  <div id="header-search" :class="{ show: show }" class="header-search">
    <!-- <svg-icon class="search-icon" name="search" @click.stop="click" /> -->
    <svg-icon icon-class="search" @click.stop="click" class="search-icon"/>
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="请输入页面名称关键字"
      class="header-search-select"
      @change="change"
    >
      <el-option v-for="item in options" :key="item.path" :value="item" :label="item.meta.title.join(' > ')" />
    </el-select>
  </div>
</template>

<script>
import path from 'path';
import Fuse from 'fuse.js'; // A lightweight fuzzy-search module
// import { Component, Vue, Watch } from 'vue-property-decorator';
// import { RouteConfig } from 'vue-router';
// import { AppModule } from '@/store/modules/app'
// import { PermissionModule } from '@/store/modules/permission'
// import { AppModule } from '@/store/index';
// import { PermissionModule } from '@/store/index';
// import i18n from '@/lang'; // Internationalization

export default {
  name: 'HeaderSearch',
  data() {
    return {
      search: '',
      show: false,
      options: [],
      searchPool: [],
      fuse: null,
    };
  },
  computed: {
    routes() {
      return this.$store.state.app.hybridRouters;
    },
  },
  watch: {
    routes(newV, oldV) {
      this.searchPool = this.generateRoutes(this.routes);
    },
    searchPool(newV, oldV) {
      this.initFuse(newV);
    },
    show(newV, oldV) {
      if (newV) {
        document.body.addEventListener('click', this.close);
      } else {
        document.body.removeEventListener('click', this.close);
      }
    },
  },
  mounted() {
    this.searchPool = this.generateRoutes(this.routes);
  },
  methods: {
    click() {
      this.show = !this.show;
      if (this.show) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus();
      }
    },
    close() {
      this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur();
      this.options = [];
      this.show = false;
    },
    change(route) {
      this.$router.push(route.path);
      this.search = '';
      this.options = [];
      this.$nextTick(() => {
        this.show = false;
      });
    },
    // 初始化整理Fuse模糊搜索
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        includeScore: true,
        keys: ['meta.title', 'path'],
      });
    },
    // Filter out the routes that can be displayed in the sidebar
    // And generate the internationalized title
    generateRoutes(routes, basePath = '/', prefixTitle = []) {
      let res = [];

      for (const router of routes) {
        // skip hidden router
        if (router.meta && router.meta.hidden) {
          continue;
        }

        const data = {
          path: path.resolve(basePath, router.path),
          meta: {
            title: [...prefixTitle],
          },
        };

        if (router.meta && router.meta.title) {
          // generate internationalized title
          // const i18ntitle = i18n.t(`route.${router.meta.title}`).toString()
          const i18ntitle = `${router.meta.title}`.toString();
          data.meta.title = [...data.meta.title, i18ntitle];
          if (router.redirect !== 'noRedirect') {
            // only push the routes with title
            // special case: need to exclude parent router without redirect
            res.push(data);
          }
        }

        // recursive child routes
        if (router.children) {
          const tempRoutes = this.generateRoutes(router.children, data.path, data.meta.title);
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes];
          }
        }
      }
      return res;
    },
    querySearch(query) {
      if (query !== '') {
        if (this.fuse) {
          this.options = this.fuse.search(query).map(result => result.item);
        }
      } else {
        this.options = [];
      }
    }
  },
};
</script>

<style lang="scss">
.header-search {
  font-size: 0 !important;

  .search-icon {
    width:20px !important;
    height:20px !important;
    cursor: pointer;
    font-size: 60px !important;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    .el-input__inner {
      border-radius: 5px;
      // border: 0;
      // padding-left: 0;
      // padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
