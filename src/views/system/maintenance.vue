
<template>
  <div class="voucherParameters-container">
    <el-form :model="form" ref="form" label-width="190px" :rules="rules" size="medium">
      <el-card class="box-card">
        <div class="box-card-con">
          <el-form-item label="全局维护开关：" prop="globalSwitch">
            <el-col :span="8">
              <el-switch :disabled="!isModify" v-model="form.globalSwitch" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-col>
          </el-form-item>

          <el-form-item label="中文Android维护专用图：" prop="androidPicCn">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.androidPicCn" placeholder="请选择上传">
                <el-upload
                  :disabled="!isModify"
                  slot="append"
                  :action="$img_api"
                  multiple
                  :data="{ type: 'exchange' }"
                  name="file"
                  accept=".jpg,.png"
                  :limit="1"
                  :before-upload="beforeUpload"
                  :show-file-list="false"
                  :on-success="upload"
                  :on-error="uploadCompressError"
                  :on-exceed="exceed"
                  ref="androidPicCn"
                >
                  <el-button :disabled="!isModify" @click="uploadBtn('androidPicCn')" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="英文Android维护专用图：" prop="androidPicEn">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.androidPicEn" placeholder="请选择上传">
                <el-upload
                  :disabled="!isModify"
                  slot="append"
                  :action="$img_api"
                  multiple
                  :data="{ type: 'exchange' }"
                  name="file"
                  accept=".jpg,.png"
                  :limit="1"
                  :before-upload="beforeUpload"
                  :show-file-list="false"
                  :on-success="upload"
                  :on-error="uploadCompressError"
                  :on-exceed="exceed"
                  ref="androidPicEn"
                >
                  <el-button @click="uploadBtn('androidPicEn')" :disabled="!isModify" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="中文IOS维护专用图：" prop="iosPicCn">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.iosPicCn" placeholder="请选择上传">
                <el-upload
                  :disabled="!isModify"
                  slot="append"
                  :action="$img_api"
                  multiple
                  :data="{ type: 'exchange' }"
                  name="file"
                  accept=".jpg,.png"
                  :limit="1"
                  :before-upload="beforeUpload"
                  :show-file-list="false"
                  :on-success="upload"
                  :on-error="uploadCompressError"
                  :on-exceed="exceed"
                  ref="iosPicCn"
                >
                  <el-button @click="uploadBtn('iosPicCn')" :disabled="!isModify" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="英文IOS维护专用图：" prop="iosPicEn">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.iosPicEn" placeholder="请选择上传">
                <el-upload
                  :disabled="!isModify"
                  slot="append"
                  :action="$img_api"
                  multiple
                  :data="{ type: 'exchange' }"
                  name="file"
                  accept=".jpg,.png"
                  :limit="1"
                  :before-upload="beforeUpload"
                  :show-file-list="false"
                  :on-success="upload"
                  :on-error="uploadCompressError"
                  :on-exceed="exceed"
                  ref="iosPicEn"
                >
                  <el-button @click="uploadBtn('iosPicEn')" :disabled="!isModify" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="中文PC维护专用图：" prop="pcPicCn">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.pcPicCn" placeholder="请选择上传">
                <el-upload
                  :disabled="!isModify"
                  slot="append"
                  :action="$img_api"
                  multiple
                  :data="{ type: 'exchange' }"
                  name="file"
                  accept=".jpg,.png"
                  :limit="1"
                  :before-upload="beforeUpload"
                  :show-file-list="false"
                  :on-success="upload"
                  :on-error="uploadCompressError"
                  :on-exceed="exceed"
                  ref="pcPicCn"
                >
                  <el-button @click="uploadBtn('pcPicCn')" :disabled="!isModify" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="英文PC维护专用图：" prop="pcPicEn">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.pcPicEn" placeholder="请选择上传">
                <el-upload
                  :disabled="!isModify"
                  slot="append"
                  :action="$img_api"
                  multiple
                  :data="{ type: 'exchange' }"
                  name="file"
                  accept=".jpg,.png"
                  :limit="1"
                  :before-upload="beforeUpload"
                  :show-file-list="false"
                  :on-success="upload"
                  :on-error="uploadCompressError"
                  :on-exceed="exceed"
                  ref="pcPicEn"
                >
                  <el-button @click="uploadBtn('pcPicEn')" :disabled="!isModify" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="中文标题：" prop="googleCode">
            <el-col :span="8"><el-input  type="text" placeholder="请输入" v-model.trim="form.googleCode" :disabled="!isModify"></el-input> </el-col>
          </el-form-item>

          <el-form-item label="英文标题：" prop="googleCode">
            <el-col :span="8"><el-input  type="text" placeholder="请输入" v-model.trim="form.googleCode" :disabled="!isModify"></el-input> </el-col>
          </el-form-item>

          <el-form-item label="谷歌验证码：" prop="googleCode">
            <el-col :span="8"><el-input @input="checkVal('googleCode', 'noDot')" type="text" placeholder="请输入" v-model="form.googleCode" :disabled="!isModify"></el-input> </el-col>
          </el-form-item>
        </div>
        <div v-if="isCURDAuth">
          <div class="middle" v-if="!isModify">
            <el-button type="primary" size="medium" @click="isModify = true">修改</el-button>
          </div>
          <div class="middle" v-if="isModify">
            <el-button type="primary" plain size="medium" @click="cancelSend">取消</el-button>
            <el-button type="primary" size="medium" :loading="confirmLoading" @click="confirmSend">提交修改</el-button>
          </div>
        </div>
      </el-card>
    </el-form>
  </div>
</template>
<script>
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      confirmLoading: false, // 提交loading
      list: [], //委托列表
      labelWidth: '140px',
      key: '',
      form: {
        androidPicCn: '',
        androidPicEn: '',
        iosPicCn: '',
        iosPicEn: '',
        pcPicCn: '',
        pcPicEn: '',
        globalSwitch: false,
        googleCode: '',
        id:'',
      },
      rules: {
        androidPicCn: [{ required: true, message: '必填', trigger: 'blur' }],
        androidPicEn: [{ required: true, message: '必填', trigger: 'blur' }],
        iosPicCn: [{ required: true, message: '必填', trigger: 'blur' }],
        iosPicEn: [{ required: true, message: '必填', trigger: 'blur' }],
        pcPicCn: [{ required: true, message: '必填', trigger: 'blur' }],
        pcPicEn: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    upload(response, file, fileList) {
      this.$refs[this.key].handleRemove(file);
      this.form[this.key] = response.data[0].url;
    },
    uploadBtn(key) {
      this.key = key;
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择1个文件进行上传！');
    },
    uploadCompressError() {
      this.$message.error('文件上传失败');
    },
    beforeUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1);
      const extension = testmsg === 'png';
      const extension2 = testmsg === 'jpg';
      const isLt2M = file.size / 1024 / 1024 < 4;
      if (!extension && !extension2) {
        this.$message({
          message: '上传文件只能是 png、jpg格式!',
          type: 'error',
        });
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 4MB!',
          type: 'error',
        });
      }
      return (extension && isLt2M) || (extension2 && isLt2M);
    },
    cancelSend() {
      this.isModify = false;
      this.getList();
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      // 有第二个参数则是禁止小数位，必须整数
      if (nodot) {
        this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      }
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {};
      this.listLoading = true;
      const res = await $api.getMaintenanceList(query_data);
      if (res) {
        const tmp = res.data.data;
        tmp.globalSwitch ? true : false;
        this.form = tmp;
      }
      this.listLoading = false;
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { androidPicCn, androidPicEn, iosPicCn, iosPicEn, pcPicCn, pcPicEn, globalSwitch, googleCode,id } = this.form;
          let params = {
            androidPicCn,
            androidPicEn,
            iosPicCn,
            iosPicEn,
            pcPicCn,
            pcPicEn,
            globalSwitch,
            googleCode,
            id
          };

          // this.confirmLoading = true;
          const res = await $api.editMaintenance(params) 
          if (res) {
            this.$message({ message: '修改成功！', type: 'success' });
            this.getList();
            this.isModify = false;
          }
          this.confirmLoading = false;
        }
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Maintenance', [], []);
    console.log('authObj',authObj)
    this.isCURDAuth = authObj.isModify;

    this.getList();
  },
};
</script>
<style scope lang="scss">
.voucherParameters-container {
  padding: 4px 10px 10px 10px;

  h4 {
    margin: 10px 0;
    font-size: 18px;
  }

  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      // h5 {
      //   font-size: 16px;
      // }
      // h5::before {
      //   content: '';
      //   border-left: 5px solid #03a7f0;
      //   margin-right: 10px;
      // }
      .con-line {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .panel {
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }
      .middle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .dot {
        margin: 0 10px;
        text-align: center;
        color: #9fa19f;
      }
      p {
        color: #9fa19f;
        font-size: 15px;
      }
    }
    .box-card-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      span {
        color: #000;
        font-weight: 600;
      }
    }
  }
  .middle {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .container-top {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 18px;
      height: 40px;
      line-height: 40px;
    }
    .coin {
      display: inline-block;
      font-size: 18px;
      margin-right: 10px;
    }
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }
}
</style>
