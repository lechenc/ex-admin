<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-08-05 18:36:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="bannerDia-container">
    <BDialog width="600px" :title="title" :visible.sync="showDialog" @open="dialogOpen" :closeOnClickModal="false">
      <el-form :model="form" ref="form" :rules="rules" label-width="120px">
        <el-form-item label="id" prop="id" v-show="false">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>

        


        <el-form-item label="名称" prop="bannerName">
          <el-input size="small" placeholder="请输入Banner名称" id="bannerName" v-model.trim="form.bannerName"></el-input>
        </el-form-item>

        <el-form-item label="代理是否可见" prop="isProxyVisible">
          
          <el-radio-group v-model="form.isProxyVisible" >
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="中文图片" prop="imgUrl">
          <el-input size="small" v-model="form.imgUrl" placeholder="请选择上传">
            <el-upload :action="$img_api" multiple name="file" :data="{ type: 'exchange' }" :on-success="uploadZh" slot="append" :before-upload="onBeforeUpload" :on-error="uploadError" :limit="1" :on-exceed="exceed" ref="upzh">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-input>
        </el-form-item>
        <el-form-item label="英文图片" prop="imgUrlEn">
          <el-input size="small" v-model="form.imgUrlEn" placeholder="请选择上传">
            <el-upload :action="$img_api" multiple name="file" :data="{ type: 'exchange' }" :show-file-list="true" :on-success="uploadEn" slot="append" :before-upload="onBeforeUpload" :on-error="uploadError" :limit="1" :on-exceed="exceed" ref="enzh">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-input>
        </el-form-item>
        <div class="spance"></div>
        <el-form-item label="客户端" prop="deviceType">
          <el-select v-model="form.deviceType" placeholder="请选择">
            <el-option v-for="item in deviceList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="跳转链接" prop="jumpUrl">
          <el-input size="small" placeholder="请输入跳转链接" id="jumpUrl" v-model.trim="form.jumpUrl"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="weight">
          <el-input size="small" placeholder="请输入排序优先级" id="weight" type="number" v-model.trim="form.weight"></el-input>
        </el-form-item>
        <el-form-item label="生效时间" prop="effectTime">
          <el-date-picker v-model="form.effectTime" type="datetime" placeholder="选择日期时间"> </el-date-picker>
        </el-form-item>
        <el-form-item label="上架" prop="bannerStatus">
          <el-switch v-model="form.bannerStatus" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>
      </el-form>
      <div class="footer">
        <el-button size="small" type="primary" @click="confirm" :loading="btnLoading">确定</el-button>
        <el-button size="small" type="primary" @click="cancel">取消</el-button>
      </div>
    </BDialog>
  </div>
</template>
<script>
import $api from '@/api/api';
import BDialog from '@/components/b-dialog.vue';
import BSingleUpload from '@/components/b-single-upload.vue';
import { parseTime } from '@/utils/index';

export default {
  components: {
    BDialog,
    BSingleUpload,
  },
  props: {
    visible: {
      default: false,
      type: Boolean,
    },
    row: {
      default: () => {},
      type: Object,
    },
    type: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    showDialog: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('close', val);
      },
    },
  },
  data() {
    return {
      title: '添加banner',
      btnLoading: false, // 提交loading
      rules: {
        
        bannerName: [{ required: true, message: '请输入bannner名称', trigger: 'blur' }],
        imgUrl: [{ required: true, message: '请选择中文图片', trigger: 'blur' }],
        imgUrlEn: [{ required: true, message: '请选择英文图片', trigger: 'blur' }],
        weight: [{ required: true, message: '请选择排序权重', trigger: 'blur' }],
        deviceType: [{ required: true, message: '请选择客户端', trigger: 'change' }],
        effectTime: [{ required: true, message: '请选择生效时间', trigger: 'blur' }],
      },
      loading: false,
      form: {
        id: '',
        
        bannerName: '',
        imgUrl: '',
        imgUrlEn: '',
        jumpUrl: '',
        weight: '',
        bannerStatus: false,
        deviceType: 1,
        effectTime: '',
      },
      // sup0: {
      //   img_url: "",
      // },
      // sup1: {
      //   img_url: "",
      // },
      
      deviceList: [
        { label: 'ios', value: 1 },
        { label: '安卓', value: 2 },
        { label: 'pc,h5', value: 3 },
      ],
    };
  },
  methods: {
    onBeforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 8;
      if (!isLt2M) {
        this.$message.error('上传文件大小不能超过 8 MB！');
      }
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    uploadZh(response, file, fileList) {
      this.form.imgUrl = response.data[0].url;
      this.$refs.upzh.handleRemove(file);
    },
    uploadEn(response, file, fileList) {
      this.form.imgUrlEn = response.data[0].url;
      this.$refs.enzh.handleRemove(file);
      // this.form.bannerUrlEn = response.result.urls[0];
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    async confirm() {
      const vm = this;
      // const sup0 = await vm.$refs.sup0.upload();
      // if (sup0.result !== 200) {
      // 	return;
      // }
      // const sup1 = await vm.$refs.sup1.upload();
      // if (sup1.result !== 200) {
      // 	return;
      // }
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // const form = Object.assign({}, this.form);
          // form.bannerStatus = this.form.bannerStatus ? 1 : 0;
          // form.bannerUrl = sup0.img_url || this.row.bannerUrl;
          // form.bannerUrlEn = sup1.img_url || this.row.bannerUrlEn;
          // let res;
          // if (this.type === 0) {
          //   delete form.id;
          //   res = await $api.addAppBannerInfo(form);
          // } else if (this.type === 1) {
          //   res = await $api.editAppBannerInfo(form);
          // }
          // if (res) {
          //   if (this.type === 0) {
          //     this.$message({ message: "恭喜你，新增成功", type: "success"});
          //   } else {
          //     this.$message({ message: "恭喜你，修改成功", type: "success"});
          //   }
          //   this.$nextTick(() => {
          //     this.$emit("close");
          //     this.$emit("freshData");
          //   }, 1000);
          // }

          const { id, bannerStatus, effectTime, ...prop } = this.form;
          const params = { bannerStatus: bannerStatus ? 1 : 0, effectTime: parseTime(effectTime), ...prop };
          this.btnLoading = true;
          const res = id === '' ? await $api.addAppBannerInfo(params) : await $api.editAppBannerInfo({ id, ...params });
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.$emit('close');
            this.$emit('freshData');
          }
          this.btnLoading = false;
        } else {
          this.$message.error({
            title: '提示',
            message: '请完成表单内容填写再重试',
          });
        }
      });
    },
    cancel() {
      this.$emit('close');
    },
    dialogOpen() {
      this.$nextTick(() => {
        this.$refs.form.resetFields();
        if (this.type === 1) {
          const { id, bannerName, imgUrl, imgUrlEn, jumpUrl, weight, bannerStatus, deviceType, effectTime } = this.row;
          // const { createTime, ...prop } = this.row;
          this.form = { id, bannerName, imgUrl, imgUrlEn, jumpUrl, weight, bannerStatus, deviceType, effectTime };
          this.title = '编辑banner';
        }
        if (this.type === 0) {
          this.title = '添加banner';
          this.form = {
            id: '',
            
            bannerName: '',
            imgUrl: '',
            imgUrlEn: '',
            jumpUrl: '',
            weight: '',
            bannerStatus: false,
            deviceType: 1,
            effectTime: '',
          };
        }
      });
      // try {
      //   // this.$refs.sup0.reset();
      //   // this.$refs.sup1.reset();
      //   this.$refs.form.resetFields();
      // } catch (e) {}
      // this.form = {
      //   bannerName: "",
      //   bannerUrl: null,
      //   bannerUrlEn: null,
      //   jumpUrl: "",
      //   weight: "",
      //   sysStatus: 0,
      //   id: "",
      // };
      // if (this.type === 1) {
      //   // 编辑
      //   const current = this.row;
      //   const form = {
      //     bannerName: current.bannerName || "",
      //     bannerUrl: current.bannerUrl || null,
      //     bannerUrlEn: current.bannerUrlEn || null,
      //     jumpUrl: current.jumpUrl || "",
      //     weight: current.weight || 0,
      //     sysStatus: !!current.sysStatus,
      //     id: current.id || 0,
      //   };
      //   this.form = form;
      // }
    },
  },
};
</script>
<style lang="scss">
.bannerDia-container {
  padding: 4px 10px 10px 10px;
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 15px auto 10px;
  }

  .container-top {
    margin: 20px 0;
  }
  .el-dialog__title{
    color: #000 !important;
    font-size: 18px !important;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
  .upload-wrap {
    width: 400px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    .space {
      width: 50px;
      height: 1px;
      display: inline-block;
    }
  }
  .el-input-group__append {
    .el-upload-list {
      .el-upload-list__item {
        margin-top: 0;
        .el-upload-list__item-name {
          display: none;
        }
        .el-upload-list__item-status-label {
          display: none;
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    button {
      padding: 10px 20px;
    }
    button:last-child {
      margin-left: 90px;
    }
  }
}
</style>
