<template>
  <div class="google-verify-main-wrap">
    <template v-if="!binded">
      <div class="qrcode">
        <div class="code google-bind-qrcode" v-loading="loadingGoogleQRCode">
           <el-tooltip class="item" effect="dark" content="双击刷新" placement="top">
            <img @dblclick.stop="setGoogleVerifyQRCode" :src="googleQRCodeSrc" width="100%" height="100%" alt />
          </el-tooltip>
        </div>
      </div>
      <div class="tip">(打开谷歌验证器，扫描上方二维码或手动输入上述密钥添加验证令牌)</div>
      <div class="form-item">
        <label for="key">密钥：</label>
        <el-input size="small" id="key" v-model="googleForm.secretCode" disabled>
          <a
            class="a-button google-verify-copy-btn"
            href="javascript:void(0)"
            slot="append"
            :data-clipboard-text="googleForm.secretCode"
          >复制密钥</a>
        </el-input>
      </div>
      <div class="space"></div>
      <div class="form-item required">
        <label for="googleVerify">Google验证码:</label>
        <el-input
          size="small"
          id="googleVerify"
          @input="googleForm.googleVerify=googleForm.googleVerify.toString().replace(/[^\d]/g, '')"
          v-model="googleForm.googleVerify"></el-input>
      </div>
      <div class="form-item required">
        <label for="verify">验证码：</label>
        <el-input
          @input="googleForm.verify=googleForm.verify.toString().replace(/[^\d]/g, '')"
          size="small"
          id="verify"
          v-model="googleForm.verify">
          <a
            class="a-button"
            href="javascript:void(0)"
            @click="sendEmail"
            v-loading="sendEmailLoading"
            slot="append"
          >邮箱接收</a>
        </el-input>
      </div>
      <div class="button">
        <el-button
          size="small"
          type="warning"
          v-loading="bindLoading"
          @click="bindHandle"
          :disabled="bindDisalbed"
        >绑定</el-button>
      </div>
    </template>
    <template v-else>
      <div class="unbind">
        <h3>Google 验证</h3>
        <el-button @click="unbindVisible=true" type="warning" size="small">解绑</el-button>
      </div>
      <div class="bind-success">绑定成功</div>
    </template>
    <div class="tip">谷歌验证器是一款动态口令工具，工作原理类似短信动态验证。绑定后每30S生成一个动态验证码，验证码可用于登录安全验证</div>
    <div class="qrcode download">
      <div class="code download" id="loginDownloadQrcode"></div>
      <div class="download-tip">下载Google验证APP</div>
    </div>
    <div class="tip" style="color: #333">IOS用户登录APP Store搜索"Authenticator"下载</div>
    <div class="tip" style="color: #333;">安卓用户登录应用商城或使用手机浏览器搜索"谷歌验证器"下载</div>
    <el-dialog
      :visible.sync="unbindVisible"
      title="解绑Google验证"
      width="300px "
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <div class="unbind-form-item">
        <label for="GoogleCode">验证码:</label>
        <el-input
          v-model="unbindForm.email"
          type="text"
          id="GoogleCode"
          @input="unbindForm.email=unbindForm.email.toString().replace(/[^\d]/g, '')"
          size="small"
          placeholder="邮箱收到的的验证码"
        >
          <a
            class="a-button"
            href="javascript:void(0)"
            @click="sendEmail"
            v-loading="sendEmailLoading"
            slot="append"
          >邮箱接收</a>
        </el-input>
      </div>
      <div class="unbind-form-item">
        <label for="emailCode">Google验证码:</label>
        <el-input
          type="text"
          v-model="unbindForm.code"
          @input="unbindForm.code=unbindForm.code.toString().replace(/[^\d]/g, '')"
          id="emailCode"
          size="small"
          placeholder="请输入Google验证码"
        ></el-input>
      </div>
      <div class="unbind-form-item">
        <el-button size="small" type="warning" @click="unbind">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ClipboardJS from 'clipboard';
/**
 * 绑定接口
 */
interface IGoogleForm {
  secretCode: string;
  googleVerify: string;
  verify: string;
}
/**
 * 解绑表单接口
 */
interface IUnbindForm {
  code: string;
  email: string;
}
@Component
export default class Context extends Vue {
  // 绑定表单数据
  public googleForm: IGoogleForm = {
    secretCode: "",
    googleVerify: "",
    verify: ""
  };
  // 解绑
  public unbindForm: IUnbindForm = {
    code: "",
    email: ""
  };
  // 是否正在加载google二维码标志
  public loadingGoogleQRCode: boolean = false;
  // google 二维码地址
  public googleQRCodeSrc: string = "";
  // 正在发送邮件标志
  public sendEmailLoading: boolean = false;
  // 正在绑定标志
  public bindLoading: boolean = false;
  // 正在解绑标志
  public unbindVisible: boolean = false;
  // 邮件地址
  @Prop({ required: true, default: "", type: String }) public email?: string;
  // 实例化出来得复制
  private clipboard:any = null;

  // get email():string|null {
  //   return (this as any).$util.email();
  // }
  // 是否已经绑定
  get binded(): boolean {
    return this.$store.state.binded;
  }
  get bindDisalbed(): boolean {
    return false;
  }
  // 初始化，生成下载google验证器二维码，通过邮箱地址获取google二维码
  public init(flag?: boolean) {
    const vm = this as any;
    this.clipboard = new ClipboardJS(".google-verify-copy-btn");
    this.clipboard.on("success", (e: Event) => {
      this.$message.success("复制成功");
    });
    this.googleQRCodeSrc = '';
//  this.setGoogleVerifyQRCode();
    (this as any).$el.scrollTop = 0;
    // 清除，防止生成多个图
    (document as any).querySelector("#loginDownloadQrcode").innerHTML = "";
    let qrcode = new vm.$util.QRCode("loginDownloadQrcode", {
      width: 120, //图像宽度
      height: 120, //图像高度
      colorDark: "#000000", //前景色
      colorLight: "#ffffff", //背景色
      typeNumber: 4,
      correctLevel: vm.$util.QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
    });
    qrcode.clear(); //清除二维码
    qrcode.makeCode((window as any).downloadGoogleAuthUrl); //生成另一个新的二维码
  }
  // 设置google绑定二维码
  public setGoogleVerifyQRCode(): void {
    const vm = this as any;
    this.loadingGoogleQRCode = true;
    // 没有邮件地址得情况下，无法请求接口二维码，强制跳转登录
    if (!this.email) {
      this.$notify.error({
        title: '提示',
        message: '用户基本信息缺失，请重新登录'
      });
//    setTimeout(() => {
//      this.$router.push('/login');
//    }, 2000)
      return;
    }
    // 获取接口google绑定二维码和密钥
    vm.$http
      .post("/home/getGoogleSecret", {
        user_email: this.email
      })
      .then((res: any) => {
        const { data } = res;
        const url = data.google_qrcode_url;
        const secret = data.google_secret;
        // 预加载，防止图片异常
        let img = new Image();
        img.src = url;
        img.onload = () => {
          this.googleQRCodeSrc = img.src;
          this.loadingGoogleQRCode = false;
          this.googleForm.secretCode = secret;
        };
        img.onerror = () => {
          this.$notify.error({
            title: "提示",
            message: "加载Google密钥二维码失败"
          });
          this.loadingGoogleQRCode = false;
        };
      })
      .finally(() => {});
  }
  // 发送邮件到邮箱地址
  public sendEmail(): void {
    if (this.sendEmailLoading) {
      this.$message.warning("邮件正在发送");
      return;
    }
    const vm = this as any;
    this.sendEmailLoading = true;
    vm.$http
      .post("home/sendEmailCheckCode", {
        user_email: this.email
      })
      .then((res: any) => {
        this.$notify.success({
          title: "提示",
          message: res.msg
        });
      })
      .finally(() => {
        this.sendEmailLoading = false;
      });
  }
  // 绑定
  public bindHandle(): void {
    const vm = this as any;
    if (this.bindLoading) {
      this.$message.warning("正在绑定，请稍候");
      return;
    }
    vm.$http
      .post("home/bindGoogleSecret", {
        user_email: this.email,
        email_code: this.googleForm.verify,
        google_code: this.googleForm.googleVerify + ""
      })
      .then((res: any) => {
        this.$notify.success({
          title: "提示",
          message: res.msg
        });
        this.$emit("bindSuccess", res);
      })
      .finally(() => {
        this.bindLoading = false;
      });
  }
  // 解绑
  public unbind(): void {
    const vm = this as any;
    // this.$confirm('确定解绑Google验证么？解绑后重新绑定才能继续操作.', '信息确认', {
    //   confirmButtonText: '解绑',
    //   cancelButtonText: '取消',
    //   type: 'warning'
    // }).then(() => {
    vm.$http
      .post("CommonFun/untiedGoogleSecret", {
        email_code: this.unbindForm.email,
        google_code: this.unbindForm.code
      })
      .then((res: any) => {
        this.$notify.success({
          title: "提示",
          message: "解绑成功"
        });
        this.$store.commit("setBinded", false);
        this.unbindVisible = false;
        this.$emit('unbindSuccess', res)
      });
    // })
    // .catch(() => {
    //   this.$message.info('操作已取消');
    // })
  }
  // 销毁实例之前，销毁复制事件，防止下次进来出现多次触发复制成功得
  public destroyed() {
    this.clipboard.destroy();
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.google-verify-main-wrap {
  // height: calc(80vh - 200px);
  // max-height: 700px;
  overflow: auto;
  min-width: 480px;
  a {
    text-decoration: none;
    user-select: none;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    background: transparent;
  }
  .el-input.is-disabled .el-input__inner {
    color: #333;
  }
  .unbind {
    padding: 0 30px;
    max-width: 900px;
    @include flex();
    h3 {
      width: 100%;
    }
  }
  .bind-success {
    @include flex();
    font-size: 20 px;
    padding: 20px 0;
  }
  .unbind-form-item {
    label {
      @include before();
      margin-bottom: 20px;
    }
    > div {
      padding: 10px 0;
    }
    button {
      width: 100%;
    }
  }
  .form-item {
    @include wh(80%, 40px);
    margin: 5px auto;
    @include flex();
    label {
      width: 30%;
      min-width: 120px;
      text-align: right;
      padding-right: 10px;
      user-select: none;
    }
  }
  .button {
    @include wh(100%, 70px);
    @include flex();
    border-bottom: 1px solid #e3e3e3;
    margin: 0px 0 10px 0;
    button {
      width: 60%;
    }
  }
  .required label {
    @include before();
  }
  .space {
    @include wh(100%, 30px);
  }
  .tip {
    width: 100%;
    height: 20px;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
  .qrcode {
    height: 150px;
    width: 100%;
    @include flex(center, flex-start);
    flex-direction: column;
    .code {
      width: 120px;
      height: 120px;
      background: #e3e3e3;
    }
    .google-bind-qrcode {
      cursor: pointer;
    }
    > div {
      margin: 0 auto;
    }
  }
  .download {
    margin-top: 30px;
    margin-bottom: 20px;
    > div {
      margin-bottom: 10px;
    }
  }
}
</style>