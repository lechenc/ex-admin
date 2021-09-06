<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="ssoWhiteList-container">
    <!-- <div class="container-top">
      <Bsearch :configs="searchConfig" @do-search="doSearch" @do-reset="doReset" />
    </div> -->
    <div class="notice-button">
      <template v-if="isCURDAuth">
        <el-button type="primary" size="medium" @click="create">添加</el-button>
      </template>
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <el-Dialog :visible.sync="showDialog" :title="title" width="600px">
      <el-form :model="form" ref="form" label-width="120px" :rules="rules">
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="单点类型" prop="ssoType">
              <template>
                <el-select v-model="form.ssoType" placeholder="请选择">
                  <el-option v-for="item in ssoTypenArr" :label="item.label" :value="item.value" :key="item.value"> </el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="备注" prop="remark">
              <el-input type="text" maxlength="50" placeholder="请输入" v-model="form.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="UID" prop="uid">
              <el-input @input="checkVal('uid')" type="text" placeholder="请输入" v-model.trim="form.uid"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="谷歌验证码" prop="authGoogle">
              <el-input @input="checkVal('authGoogle')" type="text" placeholder="请输入" v-model.trim="form.authGoogle"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="default" @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="confirm" :loading="btnLoading">确定</el-button>
      </div>
    </el-Dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { ssoWhiteListCol, ssoWhiteListColNoBtn } from '@/config/column/front';
import $api from '@/api/api';
import utils from '@/utils/util';
export default {
  name: 'SsoWhiteList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      // 1.PC 2.IOS 3.Android
      ssoTypenArr: [
        {
          value: 1,
          label: 'IOS',
        },
        {
          value: 2,
          label: '安卓',
        },
        {
          value: 3,
          label: 'PC',
        },
      ],
      form: {},
      rules: {
        ssoType: [{ required: true, message: '请输入', trigger: 'blur' }],
        uid: [{ required: true, message: '请输入', trigger: 'blur' }],
        authGoogle: [{ required: true, message: '请输入', trigger: 'blur' }],
      },
      showDialog: false,
      title: '添加',
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

  methods: {
    async confirm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let { id, ...prop } = this.form;
          const parms = { ...prop };
          this.btnLoading = true;
          const res = id === '' ? await $api.addSsoWhiteList({ ...parms }) : await $api.editSsoWhiteList({ id, ...parms });
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
      if (fn === 'edit') {
        this.title = '编辑';
        this.showDialog = true;
        const { id, ssoType, remark, uid, authGoogle } = row;
        this.$nextTick(() => {
          this.$refs.form.resetFields();
          this.form = {
            id,
            ssoType,
            remark,
            uid,
            authGoogle,
          };
        });
      }
      if (fn === 'del') {
        this.$confirm('是否删除?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.deleteSsoWhiteList({
              id: row.id,
            });
            if (res) {
              this.$message({ type: 'success', message: res.data.message });
              this.getList();
            }
          })
          .catch(() => {});
      }
      if (fn === 'trputon') {
        const res = await $api.editSsoWhiteList({ id: row.id, status: row.status ? 1 : 0 });
        if (res) {
          this.$message({ type: 'success', message: res.data.message });
        }
        this.getList();
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
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
      this.title = '添加';
      this.$nextTick(() => {
        this.$refs.form.resetFields();
        this.form = {
          id: '',
          ssoType: '',
          remark: '',
          uid: '',
          authGoogle: '',
        };
      });
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },

    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;

      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(params, this.search_params_obj);
      const res = await $api.getSsoWhiteListList(params);
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

    // 对输入值的范围进行限制
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('SsoWhiteList', ssoWhiteListCol, ssoWhiteListColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchConfig = [];
    this.getList();
  },
};
</script>
<style lang="scss">
.ssoWhiteList-container {
  .el-form-item__content {
    margin-left: 0;
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
