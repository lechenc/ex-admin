<template>
  <div class="resetauth-container">
    <div class="wrap">
      <label for="goolepwd" class="label">新谷歌密钥：</label>
      <span class="prop">
        <el-input id="goolepwd" type="text" :disabled="true" size="small" placeholder="请填写原密码" v-model="goolepwd"></el-input>
        <el-button class="prop-btn" type="primary" @click="reloadQr">生成Google新密钥</el-button>
      </span>
    </div>
    <div class="pic">
      <div class="title">&nbsp;新二维码:</div>
      <div class="qrcode">
        <div class="qrcode_content" id="qrcode" v-if="isGetQr"></div>
        <span v-else>无</span>
      </div>
    </div>
    <div class="wrap">
      <label for="googlecode" class="label">原谷歌验证码：</label>
      <span class="prop">
        <el-input :disabled="!isCURDAuth" id="googlecode" size="medium" placeholder="" v-model="googlecode"></el-input>
      </span>
    </div>
    <div class="wrap button">
      <el-button :disabled="!isCURDAuth" size="medium" type="primary" @click="confirm" :loading="btnLoading">确定</el-button>
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'; // 引入qrcode
import $api from '@/api/api';
import Cookies from 'js-cookie';
import { gcodeCol, gcodeNoBtn } from '@/config/column/system';

export default {
  name: 'Resetauth',
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      goolepwd: '',
      googlecode: '',
      qrPic: '',
      isGetQr: false,
    };
  },
  mounted() {
    // this.getData();
    let authObj = this.$util.getAuthority('Restauth', [], []);
    this.isCURDAuth = authObj.isModify;
  },
  methods: {
    reloadQr() {
      this.getData();
    },
    async getData() {
      const params = {
        account: localStorage.getItem('user_name'),
      };
      this.isGetQr = true;
      const res = await $api.getGoogleCode(params);
      if (res) {
        this.goolepwd = res.data.data.secretKey;
        let qrcodetext = res.data.data.googleAuthQRCodeData;
        document.querySelector('#qrcode').innerHTML = '';
        let qrcode = new QRCode('qrcode', {
          width: 230,
          height: 230,
          text: qrcodetext, // 二维码地址
          colorDark: '#000',
          colorLight: '#fff',
        });
      }
    },
    async confirm() {
      if (!this.googlecode) {
        this.$message.error('Google验证码不能为空');
        return true;
      }
      const params = {
        newGoogleCode: this.goolepwd,
        authGoogle: this.googlecode,
      };
      this.btnLoading = true;
      const res = await $api.editGoogleCode(params);
      if (res) {
        this.$notify.success('密钥修改成功');
        this.getData();
      }
      this.btnLoading = false;
    },
  },
};
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
.resetauth-container {
  @include full();
  width: 600px;
  padding: 50px 0 0 100px;
  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 0;
    .label {
      width: 140px;
      font-size: 16px;
      font-weight: 500;
    }
    .prop {
      width: 85%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      input[disabled='disabled'] {
        color: #333;
      }
      .prop-btn {
        margin-left: 20px;
      }
    }
  }
  .pic {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    .title {
      width: 100px;
      margin-right: 20px;
    }
  }
  .wrap.button {
    display: flex;
    flex-direction: row;
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
}
@media screen and(max-width: 750px) {
  .resetauth-container {
    width: 100%;
    padding: 20px 0 30px 20px;
    box-sizing: border-box;
      .wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 30px 0;
    .prop {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top:5px;
      .el-input--small{
        margin:5px 0;
      }
      input[disabled='disabled'] {
        color: #333;
      }
      .prop-btn {
        margin-left: 0;
      }
    }
  }
    .pic {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .title {
      width: 100px;
      margin-bottom:5px;
      margin-right: 0;
    }
  }
  }
}
</style>
