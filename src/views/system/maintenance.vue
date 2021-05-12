
<template>
  <div class="voucherParameters-container">
    <el-form :model="form" ref="form" label-width="150px" :rules="rules" size="medium">
      <el-card class="box-card">
        <div class="box-card-con">
          <el-form-item label="维护开关：" prop="imgUrlEn">
            <el-col :span="8">
              <el-switch :disabled="!isModify" v-model="form.bannerStatus" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-col>
          </el-form-item>

          <el-form-item label="Android维护专用图：" prop="imgUrl">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.imgUrl" placeholder="请选择上传">
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
                  :on-success="upload1"
                  :on-error="uploadCompressError"
                  :on-exceed="exceed"
                  ref="imgUrl"
                >
                  <el-button :disabled="!isModify" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="IOS维护专用图：" prop="proofImg">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.imgUrlEn" placeholder="请选择上传">
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
                  ref="uploads"
                >
                  <el-button :disabled="!isModify" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="PC维护专用图：" prop="proofImg">
            <el-col :span="8">
              <el-input :disabled="!isModify" size="small" v-model="form.imgUrlEn" placeholder="请选择上传">
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
                  ref="uploads"
                >
                  <el-button :disabled="!isModify" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="谷歌验证码：" prop="inviteNumber">
            <el-col :span="8"><el-input @input="checkVal('inviteNumber', 'noDot')" type="text" placeholder="请输入" v-model="form.inviteNumber" :disabled="!isModify"></el-input> </el-col>
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
      form: {
        imgUrl: '',
      },
      rules: {
        incomeAmount: [{ required: true, message: '必填', trigger: 'blur' }],
        inviteNumber: [{ required: true, message: '必填', trigger: 'blur' }],
        openPositionAmount: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  methods: {
    upload1(response, file, fileList) {
      //console.log('response', response);
      //console.log('response.data[0].url', response.data[0].url);
      this.form.imgUrl = response.data[0].url;
      // this.form.imgUrl = response.data[0].url;
      //console.log('form.imgUrl', this.form.imgUrl);
      this.$refs.imgUrl.handleRemove(file);
    },
    upload(response, file, fileList) {
      //console.log('response', response);
      this.form.imgUrl = response.data[0].url;
      //console.log('form.imgUrl', this.form.imgUrl);
      this.$refs.imgUrl.handleRemove(file);
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
      const res = await $api.getAllTriggerConditionNew(query_data);
      if (res) {
        const tmp = res.data.data[0];

        this.form = {
          id: tmp.id,
          incomeAmount: tmp.incomeAmount,
          inviteNumber: tmp.inviteNumber,
          openPositionAmount: tmp.openPositionAmount,
          imgUrl:''
        };
      }
      this.listLoading = false;
    },
    // 保存页面修改
    async confirmSend() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { openPositionAmount, incomeAmount, inviteNumber, id } = this.form;
          let params = {
            incomeAmount: parseFloat(incomeAmount),
            inviteNumber: parseFloat(inviteNumber),
            openPositionAmount: parseFloat(openPositionAmount),
          };
          if (!id) {
          } else {
            params.id = id;
          }

          this.confirmLoading = true;
          const res = !id ? await $api.addVoucherParameters(params) : await $api.editVoucherParameters(params);
          if (res) {
            let text = '';
            text = !id ? '添加成功！' : '修改成功！';
            this.$message({ message: text, type: 'success' });
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
