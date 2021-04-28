<template>
  <BDialog
    custom-class="notice-dialog"
    :visible.sync="showDialog"
    :title="title"
    @open="dialogOpen"
    width="700px"
    v-loading="loading"
    class="notice-dialog mynotice-dialog"
  >
    <!-- <template v-if="active===0"> -->
    <el-form :model="form" ref="form" label-width="80px" inline :rules="rules" style="width: 90%; padding-left: 15px">
      <el-row :span="24">
        <el-col :span="24">
          <el-form-item label="中文标题" prop="title">
            <el-input size="small" placeholder="请输入标题" v-model.trim="form.title"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- <el-row :span="24">
        <el-col :span="24">
          <el-tabs v-model="form.language" @tab-click="changeLang">
            <el-tab-pane label="中文" name="1"></el-tab-pane>
            <el-tab-pane label="英语" name="2"></el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row> -->
      <!-- <div class="edit-wrap"> -->
      <!-- <CEditor v-model="form.content" /> -->
      <!-- <QuillEditor v-model="form.content" ref="quilleditor" /> -->
      <!-- </div> -->

      <el-row :span="24">
        <el-form-item label="英文标题" prop="englishTitle">
          <el-input size="small" placeholder="请输入标题" v-model="form.englishTitle"></el-input>
        </el-form-item>
      </el-row>

      <el-row :span="24" class="myrow">
        <el-form-item label="中文内容" prop="title">
          <QuillEditor v-model="form.content" ref="quilleditor" />
        </el-form-item>
      </el-row>

      <el-row :span="24" class="myrow">
        <el-form-item label="英文内容" prop="title">
          <QuillEditor v-model="form.englishContent" ref="quilleditor" />
        </el-form-item>
      </el-row>

      <el-row :span="24">
        <el-form-item label="链接" prop="url">
          <el-input size="small" placeholder="请输入链接" v-model.trim="form.url"></el-input>
        </el-form-item>
      </el-row>
      <el-row :span="24">
        <el-form-item label="排序" prop="weight">
          <el-input size="small" placeholder="请输入排序" type="Number" v-model.trim="form.weight"></el-input>
        </el-form-item>
      </el-row>
      <el-row :span="24">
        <el-form-item label="上架">
          <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="form.status"></el-switch>
        </el-form-item>
      </el-row>
    </el-form>

    <div class="comfirn-btn">
      <el-button type="primary" size="small" @click="confirm" :loading="btnLoading">确定</el-button>
      <el-button type="default" size="small" @click="cancel">取消</el-button>
    </div>
  </BDialog>
</template>
<script>
import BDialog from '@/components/b-dialog.vue';
// import CEditor from '@/components/editor/index.vue';
import QuillEditor from '@/components/quill/quill-editor.vue';
import utils from '@/utils/util';
import $api from '@/api/api';

export default {
  components: {
    BDialog,
    QuillEditor,
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
  data() {
    return {
      title: '创建首页公告',
      btnLoading: false, // 提交
      rules: {
        title: [{ required: true, message: '请输入标题' }],
        englishTitle: [{ required: true, message: '请输入标题' }],
        weight: [{ required: true, message: '请输入排序' }],
      },
      loading: false,
      //form> newsLang 中英文：0中文，1英文
      //form> state是否弹窗，0否，1是
      form: {
        id: '',
        title: '',
        content: '',
        url: '',
        weight: '',
        status: false,
        type: 0,
        englishContent: '',
        englishTitle: '',
      },
      // activeLang: "zh_cn", // 语言类型选择
      // isDisabled: false,	// 是否允许勾选时间（只有勾选了在首页弹窗，才能允许选择时间）
    };
  },
  computed: {
    isDisabled() {
      return !!!this.form.state;
    },
    showDialog: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('close', val);
      },
    },
  },
  methods: {
    changeLang(obj, ev) {
      this.form.language = obj.name;
    },
    datePickerOptions() {
      return utils.datePickerOptions({ disabledDate: 'pre' });
    },
    async confirm() {
      if (!this.form.content || !this.form.englishContent) {
        return this.$message.error('请先输入文本内容');
      }
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let { id, status, content, englishContent, weight, ...prop } = this.form;
          const parms = { status: status ? 1 : 0, weight: +weight, ...prop };
          content = content.replace('<p>', '').replace('</p>', '');
          englishContent = englishContent.replace('<p>', '').replace('</p>', '');
          const type = 0;
          this.btnLoading = true;
          const res =
            id === ''
              ? await $api.addNotice({ type, content, englishContent, ...parms })
              : await $api.editNotice({ id, content, englishContent,type, ...parms });
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.$emit('close');
            this.$emit('freshData');
          }
          this.btnLoading = false;
        } else {
          this.$message.error({ title: '提示', message: '请完成表单内容填写再重试' });
        }
      });
    },
    cancel() {
      this.$emit('close');
    },
    dialogOpen() {
      try {
        this.$refs.form.resetFields();
      } catch (e) {}
      if (this.type === 0) {
        this.title = '创建首页公告';
        this.form = {
          id: '',
          title: '',
          content: '',
          url: '',
          weight: '',
          status: false,
          type: 0,
          englishContent: '',
          englishTitle: '',
        };
      }
      if (this.type === 1) {
        // 编辑（多加一个id）
        this.title = '编辑首页公告';
        const { id, title, englishTitle, content,type, englishContent, url, weight, status } = this.row;
        this.form = { id, title, englishTitle, content, englishContent,type, url, weight, status };
      }
    },
  },
};
</script>

<style lang="scss">
.mynotice-dialog {
  .avatar-uploader {
    height: 0;
  }
  .myrow {
    margin-bottom: 100px;
    .el-form-item__error {
      // padding-top: 95px;
    }
  }
}
.notice-dialog {
  .el-form-item {
    width: 100% !important;
    display: flex;
    .el-form-item__content {
      flex: 1;
    }
  }
  *:not(input) {
    user-select: none;
  }
  .line.el-row {
    padding: 100px 0 0;
  }
  .edit-wrap {
    width: 100%;
    // height: calc(100% - 320px);
  }
  .el-tabs__item {
    font-size: 15px;
    font-weight: 600;
  }
  .el-tabs__active-bar {
    height: 3px;
  }
  .comfirn-btn {
    width: calc(100% - 50px);
    height: 40px;
    display: flex;
    justify-content: center;
    padding: 10px 25px 0 25px;
    background: #fff;
    button {
      padding: 10px 30px;
      height: 36px;
    }
    button:last-child {
      margin-left: 40px;
    }
  }
  .el-dialog__title {
    color: #000 !important;
  }
  .loading-btn {
    .el-loading-mask {
      svg {
        height: 22px !important;
        margin-top: 11px;
      }
    }
  }
}
</style>
