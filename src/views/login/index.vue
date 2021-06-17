<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <el-page-header @back="goBack"> </el-page-header>
      <div class="title-container">
        <h3 class="title">管理后台</h3>
      </div>

      <el-form-item prop="account" autocomplete="off">
        <span class="svg-container">
          <svg-icon icon-class="loginname" />
        </span>
        <el-input ref="account" v-model="loginForm.account" placeholder="用户名" name="account" type="text" tabindex="1" autocomplete="off" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="pwd" />
        </span>
        <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="密码" name="password" tabindex="2" autocomplete="new-password" @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-form-item prop="googleCode">
        <span class="svg-container">
          <svg-icon icon-class="pwd" />
        </span>
        <el-input ref="googleCode" v-model="loginForm.googleCode" placeholder="谷歌验证码" name="googleCode" type="text" tabindex="3" autocomplete="off" />
      </el-form-item>

      <el-button :loading="loginLoding" type="primary" style="width: 100%; margin-bottom: 30px" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate';
import $api from '@/api/api';
import { setToken } from '@/utils/auth';
import { setCookies } from '@/utils/cookies';
import mMd5 from '@/utils/module_md5';
import Cookies from 'js-cookie';

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入用户名'));
        callback();
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    const validateGoogleCode = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入验证码'));
      } else {
        callback();
      }
    };
    return {
      loginLoding: false,
      isNew: false,
      loginForm: {
        account: '',
        password: '',
        googleCode: '',
      },
      loginRules: {
        account: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        googleCode: [{ required: true, trigger: 'blur', validator: validateGoogleCode }],
      },
      passwordType: 'password',
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  beforeCreate() {
    // localStorage.clear();
    // session.clear();
    // //console.log(123)
  },
  methods: {
    goBack() {
      if (!this.isNew) {
        this.isNew = true;
        this.$nextTick(() => {
          this.loginForm = {
            account: '',
            password: '',
            googleCode: '',
          };
          document.getElementsByClassName('el-page-header__title')[0].childNodes[0].nodeValue = '旧版登录';
        });
      } else {
        this.isNew = false;
        this.$nextTick(() => {
          this.loginForm = {
            account: '',
            password: '',
            googleCode: '',
          };
          document.getElementsByClassName('el-page-header__title')[0].childNodes[0].nodeValue = '新版登录';
        });
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      localStorage.clear();
      // this.$router.push({ path: '/' })
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          const params = {
            account: this.loginForm.account,
            password: mMd5.hbmd5(this.loginForm.password),
            googleCode: this.loginForm.googleCode,
          };
          // const token = '111111111';
          // setToken(token);
          // setCookies("user_name", this.loginForm.account);
          // this.$router.push({ path: "/" });
          this.loginLoding = true;
          const res = !this.isNew ? await $api.login(params) : await $api.newLogin(params);
          if (res) {
            const { list, token } = res.data.data;
            setToken(token);
            localStorage.setItem('user_name', this.loginForm.account);
            this.$store.dispatch('app/setNavList', list);
            this.$router.push({ path: '/' });
          }
          this.loginLoding = false;
        } else {
          // //console.log('error submit!!');
          return false;
        }
      });
    },
  },
  mounted() {
    document.getElementsByClassName('el-page-header__title')[0].childNodes[0].nodeValue = '新版登录';
    this.isNew = false;
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #5584ff;
$cursor: #5584ff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #e5e5e5 inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  .el-form-item__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
    background-image: none !important;
    color: transparent !important;
  }
  .el-button {
    font-size: 18px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #5584ff;
$dark_gray: #5584ff;
$light_gray: #5584ff;

.login-container {
  width: 100%;
  min-height: 100%;
  background-color: $bg;
  overflow: hidden;
  background: url('/img/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    position: relative;
    width: 520px;
    height: 410px;
    padding: 10px 35px 0;
    // margin: 0 auto;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
  }

  .tips {
    position: fixed;
    top: 0;
    left: 0;
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 34px;
    display: inline-block;
    font-size: 20px;
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
    background-image: none !important;
    color: transparent !important;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: #333333;
      margin: 20px auto 20px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}

@media screen and(max-width: 750px) {
  .login-container {
    .login-form {
      position: relative;
      width: 300px;
      height: 410px;
      padding: 10px 15px 0;
    }
  }
}
/*横屏 css*/
@media screen and (orientation: landscape) {
  .login-form {
    position: relative;
    width: 410px;
    height: auto;
    padding: 5px 15px 5px;
    // margin: 0 auto;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
  }
  .title-container {
    .title {
      font-size: 24px;
      margin: 5px auto 5px auto;
    }
  }
}
</style>
