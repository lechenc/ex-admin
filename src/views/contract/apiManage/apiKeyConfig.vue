<template>
  <div class="apiKeyConfig-container">
    <div class="container-btn" v-if="true">
      <el-button type="primary" size="medium" @click="addLine">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="600px" :title="title">
      <el-form :model="form" ref="form" :label-width="labelWidth" :rules="rules">
        <el-form-item label="UID" prop="uid">
          <el-input type="text" placeholder="请输入" v-model="form.uid"> </el-input>
        </el-form-item>

        <el-form-item label="备注" prop="destext">
          <el-input type="text" placeholder="请输入" v-model="form.destext"> </el-input>
        </el-form-item>

        <el-form-item label="API Key:" prop="appKey">
          <el-col :span="19">
            <el-input type="text" placeholder="请输入" v-model="form.appKey" :readonly="true"> </el-input>
          </el-col>

          <el-col :span="4">
            <el-button class="btn-right" type="primary" size="medium" @click.stop="editPwd('appKey')">获取Key</el-button>
          </el-col>
        </el-form-item>

        <el-form-item style="margin-bottom: 5px" label="Secret Key:" prop="appSecret">
          <el-row :span="24">
            <el-col :span="19">
              <el-input type="text" placeholder="请输入" v-model="form.appSecret" :readonly="true"> </el-input>
            </el-col>

            <el-col :span="4">
              <el-button class="btn-right" type="primary" size="medium" @click.stop="editPwd('appSecret')">获取Key</el-button>
            </el-col>
          </el-row>

          <el-row :span="24" style="color: #ccc"> *密钥仅显示1次，遗失后不可找回，请务必妥善保存 </el-row>
        </el-form-item>

        <el-form-item label="开关" prop="isShow">
          <el-switch v-model="form.isShow" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </el-form-item>

        <el-form-item label="谷歌验证" prop="googleCode">
          <el-input type="text" @input="checkVal('form', 'googleCode')" placeholder="请输入" v-model="form.googleCode"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    <!-- 添加弹窗 -->
    <el-dialog :visible.sync="googleDialogVisible" width="500px" title="谷歌验证">
      <el-form :model="googleForm" ref="googleForm" :label-width="labelWidth" :rules="googleRules">
        <el-form-item label="谷歌验证" prop="googleCode">
          <el-input type="text" @input="checkVal('googleForm', 'googleCode')" placeholder="请输入" v-model="googleForm.googleCode"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="googleCancel">取消</el-button>
        <el-button type="primary" @click.stop="googleConfirmOp" :loading="googleBtnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { apiKeyConfigCol, apiKeyConfigColNoBtn, apiKeyConfigConfig } from '@/config/column/contract';
import $api from '@/api/api';

export default {
  name: 'ApiKeyConfig',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      title: '添加',
      labelWidth: '100px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        id: '',
        uid: '',
        isShow: true,
        appKey: '',
        appSecret: '',
        destext: '',
        googleCode: '',
      },
      rules: {
        appKey: [{ required: true, message: '必填' }],
        uid: [{ required: true, message: '必填' }],
        appSecret: [{ required: true, message: '必填' }],
        destext: [{ required: true, message: '必填' }],
        googleCode: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
      googleForm: {
        googleCode: '',
      },
      googleRules: {
        googleCode: [{ required: true, message: '必填' }],
      },
      googleBtnLoading: false,
      googleDialogVisible: false,
      isDel: true,
    };
  },
  methods: {
    // 生成32位密钥
    editPwd(key) {
      // appKey  是8位  appSecret  是33位
      if (key == 'appKey') {
        this.form.appKey = this.$util.randomRange(8);
      } else if (key == 'appSecret') {
        this.form.appSecret = this.$util.randomRange(33);
      }
    },
    googleCancel() {
      this.googleDialogVisible = false;
      this.getList();
    },
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'edit') {
        this.title = '编辑';
        this.dialogVisible = true;
        
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            id: row.id,
            keyName: row.keyName,
            englishKeyName: row.englishKeyName,
            appKey: row.appKey,
            iconUrl: row.iconUrl,
            blackIconUrl: row.blackIconUrl,
            htmlUrl: row.htmlUrl,
            indexName: row.indexName,
            status: row.status ? true : false,
            onlineStatus: row.onlineStatus ? true : false,
            sort: row.sort,
          };
        });
      }
      if (fn === 'del') {
        if (row.isShow) return this.$message.error('关闭状态下才能删除');
        this.isDel = true;
        this.googleDialogVisible = true;
        this.$nextTick(() => {
          this.googleForm = {
            googleCode: '',
          };
        });
        return;
        this.$confirm('确定删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: row.id,
            };
            const res = await $api.delApiKeyConfig(params);
            if (res) {
              this.$message({ type: 'success', message: '通过操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            // this.$message({ type: "info", message: "已取消删除" });
          });
      }
      if (fn === 'trswitch' || fn === 'trlogin') {
          this.isDel = false;
        this.googleDialogVisible = true;
        this.$nextTick(() => {
          this.googleForm = {
            googleCode: '',
          };
        });
        return;
        const map = {
          trswitch: () => {
            return { status: row.status ? 1 : 0 };
          },
          trlogin: () => {
            return { onlineStatus: row.onlineStatus ? 1 : 0 };
          },
        };
        let params = {
          id: row.id,
        };
        Object.assign(params, map[fn]());
        const res = await $api.updateApiKeyConfigSwitch(params);
        if (res) {
          this.$message({ message: '切换成功', type: 'success' });
          // 保证切换后表格更新，按钮可点击或屏蔽
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
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    addLine() {
      this.title = '添加';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {
          id: '',
          uid: '',
          isShow: true,
          appKey: '',
          appSecret: '',
          destext: '',
          googleCode: '',
        };
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          if (this.btnLoading) return;
          const { id, uid, isShow, appKey, appSecret, destext, googleCode } = this.form;
          const params = {
            appKey,
            uid,
            appSecret,
            destext,
            googleCode,
            isShow: isShow ? 1 : 0,
          };

          this.btnLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.addApiKeyConfig(params) : await $api.getEditKey({ id, ...params });
          if (res) {
            let txt = id === '' ? '添加成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // 提交 开关
    googleConfirmOp() {
      this.$refs['googleForm'].validate(async (valid) => {
        if (valid) {
          if (this.googleBtnLoading) return;
          const { googleCode } = this.googleForm;
          let params;
          if (this.isDel) {
            params = {
              id: this.curRow.id,
              googleCode,
            };
          } else {
            params = {
              id: this.curRow.id,
              googleCode,
              isShow: this.curRow.isShow ? 1 : 0,
            };
          }

          this.googleBtnLoading = true;
          const res = this.isDel ? await $api.delApiKeyConfig(params) : await $api.updateApiKeyConfigSwitch(params);
          if (res) {
            let txt = this.isDel ? '删除成功' : '切换成功';
            this.$message({ message: txt, type: 'success' });
            // 保证切换后表格更新，按钮可点击或屏蔽
            this.googleDialogVisible = false;
            this.getList();
          }
          this.googleBtnLoading = false;
        }
      });
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getApiKeyConfigList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        records.forEach((v) => {
          v['isShow'] = v['isShow'] ? true : false;
        });
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    // 对输入值的范围进行限制
    checkVal(obj, key) {
      this[obj][key] = (this[obj][key] + '').replace(/[^\d]/g, '');
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('ApiKeyConfig', apiKeyConfigCol, apiKeyConfigColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(apiKeyConfigConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.apiKeyConfig-container {
  padding: 4px 10px 10px 10px;
  .btn-right {
    margin-left: 10px;
  }
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
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

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
</style>
