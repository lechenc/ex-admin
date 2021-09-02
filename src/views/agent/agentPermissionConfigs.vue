<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-11-07 01:43:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="agentPermissionConfigs-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn">
      <el-button type="primary" size="medium" @click="addGear">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="670px" :visible.sync="dialogFormVisible">
      <el-form :model="dForm" ref="dForm" :rules="drules">
        <el-row :span="24">
          <el-col :span="13">
            <el-form-item label="请选择身份: " :label-width="formLabelWidth" prop="coinMarket">
              <el-select v-model="dForm.coinMarket" placeholder="" width="20%">
                <el-option v-for="(item, idx) in coin_List" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="13">
            <el-form-item label="请输入级别: " :label-width="formLabelWidth" prop="longPositionOpenPositionPoint">
              <el-input @input="checkVal('longPositionOpenPositionPoint', 'nodot')" type="text" v-model="dForm.longPositionOpenPositionPoint" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-form-item class="center-item" label="代理端可查看用户列表字段权限: " :label-width="formLabelWidth" prop="shortPositionOpenPositionPoint">
            <el-checkbox-group v-model="dForm.checkList">
              <el-checkbox label="手机"></el-checkbox>
              <el-checkbox label="邮箱"></el-checkbox>
              <el-checkbox label="姓名"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item class="center-item" label="可查看层级的权限: " :label-width="formLabelWidth" prop="shortPositionOpenPositionPoint">
            <el-row :span="24">
              <el-radio-group v-model="dForm.radio" @change="radioChange">
                <el-radio :label="1">直推用户</el-radio>
                <el-radio :label="2">间接推用户</el-radio>
                <el-radio :label="3">无限层级</el-radio>
                <el-radio :label="4">自定义层级</el-radio>
              </el-radio-group>
            </el-row>
            <el-row :span="24">
              <el-col :span="11">
                <el-input :disabled='!isDiy' type="text" v-model="dForm.shortPositionClosePositionPoint" autocomplete="off" placeholder="请输入"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-col :span="13">
            <el-form-item label="谷歌验证码: " :label-width="formLabelWidth" prop="shortPositionClosePositionPoint">
              <el-input  @input="checkVal('shortPositionClosePositionPoint', 'nodot')" type="text" v-model="dForm.shortPositionClosePositionPoint" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { agentPermissionConfigsCol, agentPermissionConfigsConfig } from '@/config/column/contract';
import $api from '@/api/api';
import Precision from '@/utils/number-precision';

export default {
  name: 'AgentPermissionConfigs',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      btnArr: [], // 权限按钮列表
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      chainArr: [], // 链列表
      coin_List: [
        {
          label: '商务',
          value: 1,
        },
        {
          label: '代理',
          value: 2,
        },
      ], // 身份类型
      formLabelWidth: '150px',
      dialogFormVisible: false, // 编辑添加币种弹窗
      dForm: {
        checkList: [],
      },
      formName: '',
      drules: {
        coinMarket: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      isDiy: false,
    };
  },
  methods: {
    radioChange(val) {
      if (val == 4) {
        this.isDiy = true;
      }else{
        this.isDiy = false;
      }
    },
    // 添加币种
    addGear() {
      this.formName = '添加代理端权限';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['dForm'].resetFields();
        this.dForm = {
          id: '',
          coinMarket: '',
          checkList: [],
        };
      });
    },

    async confirmOp() {
      this.$refs['dForm'].validate(async (valid) => {
        if (valid) {
          let { id, coinMarket } = this.dForm;
          let params = {
            coinMarket,
          };

          !id ? params : Object.assign(params, { id });
          this.btnLoading = true;
          const res = !id ? await $api.addContractTactics(params) : await $api.editContractTactics(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑档位
      if (fn === 'edit') {
        this.formName = '编辑代理端权限';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['dForm'].resetFields();
          let { id, coinMarket } = row;

          this.dForm = {
            id,
            coinMarket,
          };
        });
      }
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      // 有第二个参数则是禁止小数位，必须整数
      if (nodot) {
        this.dForm[val] = this.dForm[val].replace(/[^\d]/g, '');
      }
      if (this.dForm[val] < 0) {
        this.dForm[val] = 0;
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

    requiredParams(params) {
      return;
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        params.endTime = parseInt(new Date(this.toDay).getTime() / 1000);
        params.startTime = parseInt(new Date(this.ago).getTime() / 1000);
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.today, 'YYYY/MM/DD HH:mm:ss')];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(this.search_params_obj);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getContractTacticsList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
      }
      this.listLoading = false;
    },
  },
  async mounted() {
    this.configs = agentPermissionConfigsCol;
    this.searchCofig = this.$util.clone(agentPermissionConfigsConfig);

    this.getList();
  },
};
</script>
<style lang="scss">
.agentPermissionConfigs-container {
  padding: 4px 10px 10px 10px;

  .center-item {
    display: flex;
    align-items: center;
    .el-form-item__content {
      flex: 1;
      margin-left: 0 !important;
    }
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

  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
    }
  }

  .el-input-group__append {
    .el-upload-list {
      .el-upload-list__item {
        margin-top: 0;
        .el-upload-list__item-name {
          display: none;
        }
        .el-upload-list__item-status-label {
          display: none;
        }
      }
    }
  }

  // icon
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
  .el-date-editor.el-input {
    max-width: 180px;
  }
  .el-dialog__body {
    max-height: 600px;
    overflow: auto;
  }
}
</style>
