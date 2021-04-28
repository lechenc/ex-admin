<!--
 * @Author: your name
 * @Date: 2020-04-26 17:00:43
 * @LastEditTime: 2020-10-31 10:46:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\aIphaex-bg\src\layout\components\Navbar.vue
 -->
<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu" v-if="isDeskTop">
     <header-search class="right-menu-item" />
       <!-- <screenfull class="right-menu-item hover-effect" /> -->
      <div class="avatar-wrapper">
        <img src="/img/user.png" class="user-avatar" />
      </div>
      <div class="user-name">{{ username }}</div>
      <div class="user-logout" @click="logout">退出</div>
    </div>

    <el-dropdown v-else class="right-menu">
      <div class="avatar-wrapper">
        <img src="/img/user.png" class="user-avatar" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          ><div class="user-name">{{ username }}</div></el-dropdown-item
        >
        <el-dropdown-item @click.native.stop="logout"><div class="user-logout">退出</div></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb';
import Hamburger from '@/components/Hamburger';
import HeaderSearch from '@/components/HeaderSearch/index.vue'
import { removeToken } from '@/utils/auth';
import Cookies from 'js-cookie';


export default {
  data() {
    return {
      username: '',
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
    HeaderSearch
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar']),
    isDeskTop() {
      return this.$store.state.app.device !== 'mobile';
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    },
    async logout() {
      removeToken();
      localStorage.removeItem("vuex");
      localStorage.clear();
      Cookies.remove("user_name");
      localStorage.removeItem("user_name");
      window.location.reload();
      // sessionStorage.clear();
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  },
  created() {
    // this.username = Cookies.get('user_name');
    this.username = localStorage.getItem('user_name');
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  // background: #2b2f3a;
  background: #4390ff; // bpx
  box-shadow: 0 2px 5px rgba(0, 21, 41, 0.08);
  // border-left: 1px solid #304156;
  color: #fff;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    display: flex;
    height: 100%;
    line-height: 50px;
    margin-right: 45px;
    .avatar-wrapper {
      margin-top: 8px;
      position: relative;
    }
    .user-name {
      margin: 0 10px;
    }
    .user-logout {
      color: #fff;
      // font-weight:600;
      // color: #7f94ba; // bpxg
      cursor: pointer;
    }



    .right-menu-item {
      display: inline-block;
      padding: 2px 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      margin-right:8px;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

  }
}

@media screen and(max-width: 750px) {
  .navbar {
    .right-menu {
      margin-right: 10px;
      .avatar-wrapper {
      }
      .user-name {
        font-size: 16px;
        margin: 0 1px;
      }
      .user-logout {
        color: #fff;
        // font-weight:600;
        // color: #7f94ba; // bpxg
        cursor: pointer;
      }



    }
  }
}
</style>
