<template>
  <div class="rateManage-container">
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

    <!-- 编辑弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="货币" prop="type" :label-width="labelWidth">
          <el-select v-model="form.type" placeholder="请选择" style="width: 180px">
            <el-option label="无法获得周奖" value="2"></el-option>
            <el-option label="无法获得分红" value="3"></el-option>
            <el-option label="无法获得周奖和分红" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="购买汇率" prop="uid" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.uid1"> </el-input>
        </el-form-item>
        <el-form-item label="出售汇率" prop="uid" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.uid2"> </el-input>
        </el-form-item>
        <el-form-item label="转账手续费" prop="uid" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.uid3"> </el-input>
        </el-form-item>
        <el-form-item label="OMNI提币手续费" prop="uid" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.uid4"> </el-input>
        </el-form-item>
        <el-form-item label="ERC20提币手续费" prop="uid" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.uid5"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    <!-- 汇差弹窗 -->
    <el-dialog :visible.sync="dialogDelVisible" width="500px" title="delFormTitle">
      <el-form :model="delForm" ref="delForm" :rules="delRules">
         <el-form-item label="抓取原始购买汇率" prop="aaa1" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="delForm.aaa1"> </el-input>
        </el-form-item>
        <el-form-item label="修改购买汇率差值（可输入正负值）" prop="aaa2" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="delForm.aaa2"> </el-input>
        </el-form-item>
        <el-form-item label="平台当前购买汇率" prop="aaa3" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="delForm.aaa3"> </el-input>
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
import { rateManageCol, rateManageColNoBtn } from '@/config/column/customer';
import $api from '@/api/api';
import utils from '@/utils/util';
import { set } from 'js-cookie';

export default {
  name: 'RateManage',
  components: {
    Btable,
    Bsearch,
    iconPage,
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
      title: '',
      labelWidth: '100px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        uid: '',
        reason: '',
        type: '',
      },
      rules: {
        uid: [{ required: true, message: '必填' }],
        reason: [{ required: true, message: '必填' }],
        type: [{ required: true, message: '必填' }],
      },
      
      curRow: {}, // 当前选定行数据
      dialogDelVisible: false, // 是否移出
      delFormTitle: '修改购买汇差',
      delForm: {
        aaa1: 0,
        aaa2: '',
        aaa3: '',
      },
      delRules: {
        aaa1: [{ required: true, message: '必填' }],
        aaa2: [{ required: true, message: '必填' }],
        aaa3: [{ required: true, message: '必填' }],
      },
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'buy') {
        this.delFormTitle = '修改购买汇差';
        this.dialogDelVisible = true;
        this.$nextTick(() => {
          this.$refs['delForm'].resetFields();
          this.delForm = {
            id: '',
            type: '',
            googleCode: '',
          };
        });
      }
      if (fn === 'sell') {
        this.delFormTitle = '修改出售汇差';
        this.dialogDelVisible = true;
        this.$nextTick(() => {
          this.$refs['delForm'].resetFields();
          this.delForm = {
            id: '',
            type: '',
            googleCode: '',
          };
        });
      }
      if (fn === 'edit') {
        this.title = '编辑手续费';
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            uid: '',
            reason: '',
            type: '',
            googleCode: '',
          };
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
            this.$message({ message: '操作成功', type: 'success' });
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
    let authObj = this.$util.getAuthority('RateManage', rateManageCol, rateManageColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.getList();

    setTimeout(()=>{
      this.$router.push({name: 'MerchantExamine'})
    },2000)
  },
};
</script>
<style lang="scss">
.rateManage-container {
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
