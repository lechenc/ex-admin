<template>
  <div class="apiKey-container">
    <div class="container-btn" v-if="isCURDAuth">
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
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="备注" prop="keyName" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.keyName"> </el-input>
        </el-form-item>

        <el-form-item label="API Key:" prop="backSecret" :label-width="labelWidth">
          <el-col :span="19">
            <el-input type="text" placeholder="请输入" v-model="form.backSecret" @input="checkVal('backSecret')" :disabled="true"> </el-input>
          </el-col>

          <el-col :span="4">
            <el-button class="btn-right" type="primary" size="medium" @click.stop="editPwd('backSecret')">获取Key</el-button>
          </el-col>
        </el-form-item>

        <el-form-item style="margin: 5px 0px;" label="Secret Key:" prop="cashAccesskey" :label-width="labelWidth">
          <el-col :span="19">
            <el-input type="text" placeholder="请输入" v-model="form.cashAccesskey" @input="checkVal('cashAccesskey')" :disabled="true"> </el-input>
          </el-col>

          <el-col :span="4">
            <el-button class="btn-right" type="primary" size="medium" @click.stop="editPwd('cashAccesskey')">获取Key</el-button>
          </el-col>
        </el-form-item>
        <el-form-item style="margin: 5px 0px;" :label-width="labelWidth"> 密钥仅显示1次,遗失后不可找回,请务必妥善保存 </el-form-item>

        <el-form-item label="谷歌验证" prop="keyName" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model.trim="form.keyName"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { apiKeyCol, apiKeyColNoBtn, apiKeyConfig } from '@/config/column/contract';
import $api from '@/api/api';

export default {
  name: 'ApiKey',
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
      form: {},
      rules: {
        keyName: [{ required: true, message: '必填' }],
        englishKeyName: [{ required: true, message: '必填' }],
        appKey: [{ required: true, message: '必填' }],
        iconUrl: [{ required: true, message: '必填' }],
        blackIconUrl: [{ required: true, message: '必填' }],
        htmlUrl: [{ required: true, message: '必填' }],
        indexName: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
    };
  },
  methods: {
    // 生成32位密钥
    editPwd(key) {
      this.form[key] = this.$util.randomRange(32);
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
    uploadIcon2(response, file, fileList) {
      if (!response.data) {
        this.$message.error('图片上传失败');
        this.$refs.iconDot2.clearFiles();
        return;
      }
      console.log('response', response);
      this.form.blackIconUrl = response.data[0].url;
      this.$refs.iconDot2.handleRemove(file);
      this.$refs.iconDot2.clearFiles();
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    uploadError2() {
      this.$message.error('图片上传失败');
    },
    uploadCompressError() {
      this.$message.error('文件上传失败');
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    exceed2(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
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
        this.$confirm('确定删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: row.id,
            };
            const res = await $api.getDeleteKey(params);
            if (res) {
              this.$message({ type: 'success', message: '通过操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            // this.$message({ type: "info", message: "已取消删除" });
          });
      }
      if (fn === 'trstart' || fn === 'trlogin') {
        const map = {
          trstart: () => {
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
        const res = await $api.getEditKey(params);
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
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
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
          keyName: '',
          englishKeyName: '',
          appKey: '',
          iconUrl: '',
          blackIconUrl: '',
          htmlUrl: '',
          indexName: '',
          status: false,
          onlineStatus: false,
          sort: '',
          backSecret: '',
          cashAccesskey: '',
        };
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { id, appKey, status, onlineStatus, ...prop } = this.form;
          const params = {
            status: status ? 1 : 0,
            onlineStatus: onlineStatus ? 1 : 0,
            appKey: appKey,
            ...prop,
          };

          this.btnLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.getAddKey(params) : await $api.getEditKey({ id, ...params });
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
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getUserKeyPage(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        records.forEach((v) => {
          v['status'] = v['status'] ? true : false;
          v['onlineStatus'] = v['onlineStatus'] ? true : false;
        });
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      if (this.form[val] > 100) {
        this.form[val] = 100;
      }
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('ApiKey', apiKeyCol, apiKeyColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(apiKeyConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.apiKey-container {
  padding: 4px 10px 10px 10px;
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
