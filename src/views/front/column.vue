<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="notice-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch :configs="searchConfig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="notice-button">
      <el-button type="primary" size="medium" @click="create">创建栏目</el-button>
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <el-Dialog :visible.sync="showDialog" :title="title" width="700px" class="notice-dialog">
      <!-- <template v-if="active===0"> -->
      <el-form :model="form" ref="form" label-width="80px" :rules="rules" style="width: 90%; padding-left: 15px">
        <el-row :span="24">
          <el-form-item label="中文标题" prop="chineseSubjectName">
            <el-input size="small" placeholder="请输入标题" v-model.trim="form.chineseSubjectName"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="英文标题" prop="englishSubjectName">
            <el-input size="small" placeholder="请输入标题" v-model="form.englishSubjectName"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="icon" prop="iconUrl">
            <el-input  size="small" placeholder="请输入链接" v-model="form.iconUrl">
              <el-upload :action="$img_api" multiple name="file" :data="{ type: 'exchange' }" :show-file-list="true" :on-success="uploadIcon" :on-error="uploadError" slot="append" :limit="1" :on-exceed="exceed" ref="iconDot">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-form-item label="排序" prop="sort">
            <el-input size="small" placeholder="请输入排序" type="Number" v-model.trim="form.sort"></el-input>
          </el-form-item>
        </el-row>
      </el-form>

      <div class="comfirn-btn footer">
        <el-button type="primary" size="small" @click="confirm" :loading="btnLoading">确定</el-button>
        <el-button type="default" size="small" @click="showDialog = false">取消</el-button>
      </div>
    </el-Dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { columnCol, columnColNoBtn, columnConfig } from '@/config/column/front';
import $api from '@/api/api';
import utils from '@/utils/util';
export default {
  name: 'Column',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      form: {
        chineseSubjectName: '',
        englishSubjectName: '',
        iconUrl: '',
        sort: '',
        id: '',
      },
      rules: {
        chineseSubjectName: [
          { required: true, message: '请输入', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在20字符以内', trigger: 'blur' },
        ],
        englishSubjectName: [
          { required: true, message: '请输入', trigger: 'blur' },
          { min: 1, max: 100, message: '长度在100字符以内', trigger: 'blur' },
        ],
        iconUrl: [{ required: true, message: '请输入', trigger: 'blur' }],
        sort: [{ required: true, message: '请输入', trigger: 'blur' }],
      },
      showDialog: false,
      title: '创建栏目',
      btnLoading: false, // 提交
      isCURDAuth: true, // 是否有添加的权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchConfig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pages: 0, // 总页数
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      detail_list: [], // 详情数据列表，
      row: {}, // 选中列信息
    };
  },
  watch: {
    showDialog(newVal) {
      if (!newVal) {
        this.form = {
          chineseSubjectName: '',
          englishSubjectName: '',
          iconUrl: '',
          sort: '',
          id: '',
        };
      }
    },
  },
  methods: {
    uploadError() {
      this.$message.error('图片上传失败');
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    uploadIcon(response, file, fileList) {
      if (!response.data) {
        this.$message.error('图片上传失败');
        this.$refs.iconDot.clearFiles();
        return;
      }
      this.form.iconUrl = response.data[0].url;
      this.$refs.iconDot.handleRemove(file);
      this.$refs.iconDot.clearFiles();
    },
    async confirm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let { id, ...prop } = this.form;
          const parms = { ...prop };
          const type = 0;
          this.btnLoading = true;
          const res = !id ? await $api.addColumn({ ...parms }) : await $api.editColumn({ id, ...parms });
          if (res) {
            let txt = !id ? '新增成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.showDialog = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          this.$message.error({ title: '提示', message: '请完成表单内容填写再重试' });
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'editRow') {
        this.showDialog = true;
        const { id, sort, chineseSubjectName, englishSubjectName, iconUrl } = row;
        this.form = {
          id,
          sort,
          chineseSubjectName,
          englishSubjectName,
          iconUrl,
        };
        this.title = '编辑栏目';
      }
      if (fn === 'delRow') {
        this.$confirm('是否删除此column?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.deleteColumn({
              id: row.id,
            });
            if (res) {
              this.$message({ type: 'success', message: res.data.message });
              this.getList();
            }
          })
          .catch(() => {});
      }
      if (fn === 'switchCoin') {
        const res = await $api.editColumn({ id: row.id, columnStatus: row.columnStatus ? 1 : 0 });
        if (res) {
          this.$message({ type: 'success', message: res.data.message });
          this.getList();
        } else {
          this.getList();
        }
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchConfig.forEach((v) => {
        v['value'] = '';
      });
      this.getList();
    },
    create() {
      this.showDialog = true;
      this.title = '创建栏目';
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },

    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;
      let vm = this;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(params, this.search_params_obj);
      const res = await $api.getColumnList(params);
      if (res) {
        console.log('res', res);
        const { records, current, total, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Column', columnCol, columnColNoBtn);
    // this.configs = authObj.val;
    this.configs = columnCol;
    this.isCURDAuth = authObj.isAdd;
    this.searchConfig = this.$util.clone(columnConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.notice-container {
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  .el-form-item__content {
    margin-left: 0;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 10px 20px;
    }
    button:last-child {
      margin-left: 90px;
    }
  }
  padding: 4px 10px 10px 10px;
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
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 30px auto 10px;
  }

  .container-top {
    margin: 10px 0;
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
}
</style>
