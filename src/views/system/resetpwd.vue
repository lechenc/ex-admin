<!--
 * @Autor: Diskfan
 * @Date: 2019-08-13 14:52:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-02 11:15:14
 * @Description: 修改密码
 -->
<template>
  <div class="modify-container">
    <div class="wrap">
      <label for="name" class="label">用户名：</label>
      <span class="prop">
        <el-input id="name" type="text" size="small" :value="userName" :disabled="true">{{ userName }}</el-input>
      </span>
    </div>
    <div class="wrap">
      <label for="opwd" class="label">原密码：</label>
      <span class="prop">
        <el-input :disabled="!isCURDAuth" id="opwd" type="password" auto-complete="new-password" size="small" placeholder="请填写原密码" v-model="opwd"></el-input>
      </span>
    </div>
    <div class="wrap">
      <label for="pwd" class="label">新密码：</label>
      <span class="prop">
        <el-input :disabled="!isCURDAuth" id="pwd" :type="passwordType0" auto-complete="new-password" size="small" placeholder="只允许数组和英文字母，最少8位" v-model="pwd"></el-input>
      </span>
      <span class="show-pwd" @click="showPwd0">
        <svg-icon :icon-class="passwordType0 === 'password' ? 'eye' : 'eye-open'" />
      </span>
    </div>
    <div class="wrap">
      <label for="rpwd" class="label">确认密码：</label>
      <span class="prop">
        <el-input :disabled="!isCURDAuth" id="rpwd" :type="passwordType1" size="small" placeholder="请再次输入新密码" v-model="rpwd"></el-input>
      </span>
      <span class="show-pwd" @click="showPwd1">
        <svg-icon :icon-class="passwordType1 === 'password' ? 'eye' : 'eye-open'" />
      </span>
    </div>
    <div class="wrap">
      <label for="email" class="label">谷歌验证码：</label>
      <span class="prop">
        <el-input :disabled="!isCURDAuth" id="email" size="small" placeholder="" v-model="googlecode"></el-input>
      </span>
    </div>
    <div class="wrap button">
      <el-button :disabled="!isCURDAuth" size="small" type="primary" @click="confirm" :loading="btnLoading">确认修改</el-button>
    </div>
  </div>
</template>
<script>
import utils from '@/utils/util';
import $api from '@/api/api';
import mMd5 from '@/utils/module_md5';
import { removeToken } from '@/utils/auth';
import Cookies from 'js-cookie';
import { pwdCol, pwdNoBtn } from '@/config/column/system';

export default {
  name: 'Resetpwd',
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      passwordType0: 'password',
      passwordType1: 'password',
      opwd: '',
      pwd: '',
      rpwd: '',
      googlecode: '',
    };
  },
  computed: {
    userName() {
      return localStorage.getItem('user_name');
    },
  },
  methods: {
    showPwd0() {
      if (this.passwordType0 === 'password') {
        this.passwordType0 = '';
      } else {
        this.passwordType0 = 'password';
      }
    },
    showPwd1() {
      if (this.passwordType1 === 'password') {
        this.passwordType1 = '';
      } else {
        this.passwordType1 = 'password';
      }
    },
    check() {
      const vm = this;
      const { opwd, pwd, rpwd, googlecode } = vm;
      if (!opwd || !pwd || !rpwd || !googlecode) {
        vm.$message.error('请检查输入内容');
        return true;
      }
      if (pwd !== rpwd) {
        vm.$message.error('两次输入的新密码不一致');
        return true;
      }
      return false;
    },
    async confirm() {
      const check = this.check();
      if (check) return;
      const params = {
        oldPassword: mMd5.hbmd5(this.opwd),
        newPassword: mMd5.hbmd5(this.pwd),
        newPasswordAgain: mMd5.hbmd5(this.rpwd),
        authGoogle: this.googlecode,
      };
      this.btnLoading = true;
      const res = await $api.editPassword(params);
      if (res) {
        this.$notify.success('密码修改成功，即将跳转重新登录');
        setTimeout(() => {
          removeToken();
          localStorage.removeItem('vuex');
          localStorage.clear();
          Cookies.remove('user_name');
          localStorage.removeItem('user_name');
          window.location.reload();
          // sessionStorage.clear();
          this.$router.push('/login');
        }, 1500);
      }
      this.btnLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Resetpwd', [], []);
    this.isCURDAuth = authObj.isModify;
  },
};
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
.modify-container {
  @include full();
  width: 600px;
  padding: 50px 0 0 100px;
  .wrap {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    .label {
      width: 120px;
      font-size: 16px;
      font-weight: 500;
    }
    .prop {
      width: 85%;
      input[disabled='disabled'] {
        color: #333;
      }
    }
  }
  .wrap.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    button {
      align-self: center;
      padding: 10px 40px;
    }
  }
  .wrap:nth-child(n + 1) .label {
    &:before {
      content: '*';
      color: #f56c6c;
      margin-right: 4px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
@media screen and(max-width: 750px) {
  .modify-container {
    width: 100%;
    padding: 20px 0 0 20px;
    box-sizing: border-box;
    .wrap {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 10px 0;
      .label {
        width: 120px;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
      }
      .prop {
        width: 85%;
        input[disabled='disabled'] {
          color: #333;
        }
      }
    }
    .show-pwd {
      right: 55px;
      top: -34px;
    }
  }
}
</style>
