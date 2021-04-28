<template>
  <div class="tags">
    <ul>
      <li class="tags-li" v-for="(item, index) in tagsList" :class="{ active: isActive(item.routePath) }" :key="index">
        <!-- <router-link :to="item.path" class="tags-li-title">
                    {{item.path}}
                </router-link> -->
        <span @click="goPage(item)">{{ item.title }}</span>
        <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary"> 标签选项<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagsList: [],
    };
  },
  methods: {
    isActive(path) {
      return path === this.$route.path;
    },
    goPage(item) {
      // 保证点击tagslist列表切换的页面的数据不变（原理：把页面里的actived钩子return）
      this.$store.commit('app/setTagsActivePath', item.routePath);
      // 存储路由
      this.$router.push(item.path);
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];

      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push('/');
      }
    },
    // 关闭全部标签
    closeAll() {
      this.tagsList = [];
      this.$router.push('/');
    },
    // 关闭其他标签
    closeOther() {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        this.tagsList.forEach((val, idx) => {
          if (val.routePath == route.path) {
            this.closeTags(idx);
          }
        });
        if (this.tagsList.length >= 10) {
          this.tagsList.shift();
        }
        if (route.meta.noTab) {
          return;
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          routePath: route.path,
          name: route.matched[route.matched.length -1].components.default && route.matched[route.matched.length -1].components.default.name || route.matched[route.matched.length -1].name,
          routeName: route.name,
        });
        // debugger
        this.$store.commit('app/setTagsList', this.tagsList);
      }
    },
    handleTags(command) {
      command === 'other' ? this.closeOther() : this.closeAll();
    },
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    },
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    },
    // tagsList(newVal, oldVal) {
    //   this.$store.commit("app/setTagsList", newVal);
    // },
  },
  created() {
    this.setTags(this.$route);
  },
};
</script>
<style lang="scss">
.tags {
  position: relative;
  height: 35px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
  flex: none;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  height: 42px;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.tags-li {
  float: left;
  min-width: 90px;
  margin: 3px 10px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 10px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
  background: #409eff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
  text-decoration: none;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

@media screen and(max-width: 750px) {
  .tags {
    .tags-li {
      min-width: 115px;
    }
  }
}
</style>
