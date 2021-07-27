<template>
  <div class="account-container">
    <div class="container-btn" v-if="true">
      <el-button type="primary" size="medium" @click="addLine">添加黑名单</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- 添加弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="用户ID" prop="uid" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.uid"> </el-input>
        </el-form-item>
        <el-form-item label="原因" prop="reason" :label-width="labelWidth">
          <el-input type="textarea" rows="4" placeholder="请输入" v-model="form.reason"> </el-input>
        </el-form-item>
        <el-form-item label="限制类型" prop="type" :label-width="labelWidth">
          <el-select v-model="form.type" placeholder="请选择" style="width:180px;">
            <el-option label="无法获得周奖" value="2"></el-option>
            <el-option label="无法获得分红" value="3"></el-option>
            <el-option label="无法获得周奖和分红" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="谷歌验证码" prop="googleCode" :label-width="labelWidth">
          <el-input type="text" placeholder="" v-model="form.googleCode"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    <!-- 移出弹窗 -->
    <el-dialog :visible.sync="dialogDelVisible" width="500px" title="移出黑名单">
      <el-form :model="delForm" ref="delForm" :rules="delRules">
        <el-form-item label="释放奖励类型" prop="type" label-width="120px">
          <el-select v-model="delForm.type" placeholder="请选择" style="width:180px;">
            <el-option label="不释放" value="1"></el-option>
            <el-option label="释放全部" value="2"></el-option>
            <el-option label="释放周薪" value="3"></el-option>
            <el-option label="释放分红" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="谷歌验证码" prop="googleCode" label-width="120px">
          <el-input type="text" placeholder="" v-model="delForm.googleCode"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogDelVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmDel" :loading="delBtnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { blackCol, blackColNoBtn, blackConfig } from '@/config/column/warehouse';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'WarehouseBlackList',
  components: {
    Btable,
    Bsearch,
    iconPage
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      delBtnLoading: false, // 移出提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      title: '添加黑名单',
      labelWidth: '100px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        uid: '',
        reason: '',
        type: '',
        googleCode: '',
      },
      rules: {
        uid: [{ required: true, message: '必填' }],
        reason: [{ required: true, message: '必填' }],
        type: [{ required: true, message: '必填' }],
        googleCode: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
      dialogDelVisible: false, // 是否移出
      delForm: {
        id: 0,
        type: '',
        googleCode: '',
      },
      delRules: {
        type: [{ required: true, message: '必填' }],
        googleCode: [{ required: true, message: '必填' }],
      },
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'move') {
        this.dialogDelVisible = true;
        this.$nextTick(() => {
          this.delForm = {
            id: '',
            type: '',
            googleCode: '',
          };
          this.$refs['delForm'].resetFields();
        });
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
      this.searchCofig.forEach(v => {
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
      this.formName = '添加黑名单';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {
          uid: '',
          reason: '',
          type: '',
          googleCode: '',
        };
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { uid, type, ...prop } = this.form;
          const params = {
            uid: parseInt(uid),
            type: parseInt(type),
            ...prop,
          };
          this.btnLoading = true;
          // 新增 编辑
          const res = await $api.warehouseAddBlack(params);
          if (res) {
            this.$message({ message: '成功添加黑名单', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // 确定删除
    async confirmDel() {
      this.$refs['delForm'].validate(async valid => {
        if (valid) {
          const { googleCode, type } = this.delForm;
          let params = {
            id: parseInt(this.curRow.id),
            type: parseInt(type),
            googleCode: googleCode,
          };
          this.delBtnLoading = true;
          const res = await $api.warehouseRemoveBlack(params);
          if (res) {
            this.$message({ message: '成功移出', type: 'success' });
            this.getList();
            this.dialogDelVisible = false;
          }
          this.delBtnLoading = false;
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
      const res = await $api.warehouseBlackUser(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('WarehouseBlackList', blackCol, blackColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(blackConfig);
    this.getList();
  },
};
</script>
<style lang="scss">
.account-container {
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
