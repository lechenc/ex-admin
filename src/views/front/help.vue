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
    <div class="container-top">
      <Bsearch :configs="searchConfig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="notice-button">
      <template v-if="isCURDAuth">
        <el-button type="primary" size="medium" @click="create">创建标题</el-button>
      </template>
      <el-button type="primary" size="medium" @click="goColumn">栏目配置</el-button>
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
          <el-col :span="12">
            <el-form-item label="栏目名称" prop="subjectId">
              <template>
                <el-select v-model="form.subjectId" placeholder="请选择">
                  <el-option v-for="item in columnArr" :label="item.chineseSubjectName" :value="item.id" :key="item.id"> </el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-form-item label="中文标题" prop="chineseTitle">
            <el-input size="small" placeholder="请输入标题" v-model.trim="form.chineseTitle"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="英文标题" prop="englishTitle">
            <el-input size="small" placeholder="请输入标题" v-model="form.englishTitle"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="中文链接" prop="url">
            <el-input size="small" placeholder="请输入链接" v-model.trim="form.url"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="英文链接" prop="englishLink">
            <el-input size="small" placeholder="请输入链接" v-model.trim="form.englishLink"></el-input>
          </el-form-item>
        </el-row>


        <el-row :span="24">
          <el-form-item label="排序" prop="sort">
            <el-input size="small" placeholder="请输入排序" type="Number" v-model.trim="form.sort"></el-input>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-form-item label="上架">
            <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="form.status"></el-switch>
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
import { helpCol, helpColNoBtn, helpConfig } from '@/config/column/front';
import $api from '@/api/api';
import utils from '@/utils/util';
export default {
  name: 'Help',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      columnArr: [],
      form: {
        id: '',
        subjectId: '',
        chineseTitle: '',
        englishTitle: '',
        url: '',
        englishLink:'',
        sort: '',
        status: false,
      },
      rules: {
        subjectId: [{ required: true, message: '请输入' }],
        chineseTitle: [
          { required: true, message: '请输入' },
          { min: 1, max: 50, message: '长度在50字符以内', trigger: 'blur' },
        ],
        englishTitle: [
          { required: true, message: '请输入' },
          { min: 1, max: 150, message: '长度在150字符以内', trigger: 'blur' },
        ],
        url: [{ required: true, message: '请输入' }],
        englishLink: [{ required: true, message: '请输入' }],
        sort: [{ required: true, message: '请输入' }],
      },
      showDialog: false,
      title: '创建公告',
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
    };
  },
  watch: {
    showDialog(newVal) {
      if (!newVal) {
        this.form = {
          id: '',
          subjectId: '',
          chineseTitle: '',
          englishTitle: '',
          url: '',
          englishLink:'',
          sort: '',
          status: false,
        };
      }
    },
  },
  methods: {
    goColumn() {
      this.$router.push('/front/column');
    },
    async confirm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let { id, status, ...prop } = this.form;
          const parms = { status: status ? 1 : 0, ...prop };
          this.btnLoading = true;
          const res = id === '' ? await $api.addHelp({ ...parms }) : await $api.editHelp({ id, ...parms });
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
        const { id, subjectId, chineseTitle, englishTitle, url,englishLink, sort, status } = row;
        this.form = {
          id,
          subjectId,
          chineseTitle,
          englishTitle,
          url,
          englishLink,
          sort,
          status,
        };
        this.showDialog = true;
        this.title = '编辑公告';
      }
      if (fn === 'delRow') {
        this.$confirm('是否删除此help?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.deleteHelp({
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
        // console.log('row',row)
        const res = await $api.editHelp({ id: row.id, status: row.status ? 1 : 0 });
        if (res) {
          this.$message({ type: 'success', message: res.data.message });
        }
        this.getList();
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
      this.getHelpListColumn();
      this.showDialog = true;
      this.title = '创建公告';
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    async getHelpListColumn() {
      const res = await $api.getHelpListWithColumn({});
      console.log('res', res);
      if (res) {
        this.columnArr = res.data.data;
      }
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
      const res = await $api.getHelpList(params);
      if (res) {
        const { records, current, total, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        records.forEach((v) => {
          v['status'] = v['status'] === 1 ? true : false;
        });
        this.list = records;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Help', helpCol, helpColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchConfig = this.$util.clone(helpConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.notice-container {
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
