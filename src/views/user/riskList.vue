<template>
  <div class="riskList-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addRiskConfig">风控参数配置</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 编辑/ 详情 -->
    <el-dialog :title="checkTitle" :visible.sync="dialogFormVisible" width="700px">
      <el-form v-loading="dialogLoading" :model="currentForm" label-width="120px" ref="currentForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="异常设备号: "> <el-input :disabled="true" v-model="currentForm.abnormalDevNo" ></el-input></el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="异常注册IP: "> <el-input :disabled="true" v-model="currentForm.abnormalRegisterIp" ></el-input> </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="异常登录IP: "> <el-input :disabled="true" v-model="currentForm.abnormalLoginIp" ></el-input> </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="异常注册IP关联UID: "> <el-input :disabled="true" rows="5" type="textarea" v-model="currentForm.abnormalRegisterIpUids" ></el-input> </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="异常登录IP关联UID: "> <el-input :disabled="true" rows="5" type="textarea" v-model="currentForm.abnormalLoginIpUids" ></el-input> </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="异常设备号关联UID: "> <el-input :disabled="true" rows="5" type="textarea" v-model="currentForm.abnormalDevNoUids" ></el-input> </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="创建时间: "> {{ currentForm.createTime }}</el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="处理状态: " prop="disposeStatus">
              <template>
                <el-select :disabled="isDetail" v-model="currentForm.disposeStatus" placeholder="请选择">
                  <el-option v-for="item in typeArr" :label="item.label" :value="item.value" :key="item.value"> </el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="处理时间: "> {{ currentForm.disposeTime }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div v-if="isDetail && !dialogLoading" slot="footer" class="dialog-footer dialog-footer-check">
        <el-button @click="dialogFormVisible = false">知 道 了</el-button>
      </div>

      <div v-if="!isDetail && !dialogLoading" slot="footer" class="dialog-footer dialog-footer-check">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading"> 确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { riskListCol, riskListColNoBtn, riskListConfig } from '@/config/column/user';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'riskList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      dialogLoading: false,
      isDetail: false,
      typeArr: [
        { value: 0, label: '待处理' },
        { value: 1, label: '异常处理' },
        { value: 2, label: '正常处理' },
      ],
      currentForm: {},
      btnLoading: false,
      recheckType: '',
      checkTitle: '',
      rules: {
        disposeStatus: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      dialogFormVisible: false,
      isCURDAuth: false, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      curId: '',
    };
  },
  methods: {
    async confirmOp() {
      this.$refs['currentForm'].validate(async (valid) => {
        if (valid) {
          const res = await $api.apiEditriskList({
            id: this.curId,
            status: this.currentForm.disposeStatus,
          });
          if (res) {
            this.$message.success('处理成功');
            this.dialogFormVisible = false;
            this.getList();
          }
        }
      });
    },
    // 创建迁移
    addRiskConfig() {
      this.$router.push('/user/riskConfig');
    },
    // 表格里的操作
    async doHandle(data) {
      let { fn, row } = data;
      this.row = row;

      if (fn === 'detail') {
        this.dialogLoading = true;
        this.dialogFormVisible = true;
        this.checkTitle = '详情';
        this.isDetail = true;
        const res = await $api.apiGetriskListInfo({
          id: row.id,
        });
        if (res) {
          this.dialogLoading = false;
          let data = res.data.data;
          data.abnormalRegisterIpUids = data.abnormalRegisterIpUids.split(',');
          data.abnormalLoginIpUids = data.abnormalLoginIpUids.split(',');
          data.abnormalDevNoUids = data.abnormalDevNoUids.split(',');
          this.currentForm = data;
        }
      }

      if (fn === 'edit') {
        this.dialogLoading = true;
        this.isDetail = false;
        this.checkTitle = '编辑';
        this.dialogFormVisible = true;
        const res = await $api.apiGetriskListInfo({
          id: row.id,
        });
        if (res) {
          this.dialogLoading = false;
          this.curId = row.id;
          let data = res.data.data;
          data.abnormalRegisterIpUids =  JSON.parse(data.abnormalRegisterIpUids).join();
          data.abnormalLoginIpUids =  JSON.parse(data.abnormalLoginIpUids).join();
          data.abnormalDevNoUids = JSON.parse(data.abnormalDevNoUids).join();
          this.currentForm = data;
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    exportExcel() {
      utils.exportData.apply(this, [0]);
    },
    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1;
      this.pageSize = val;
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageIndex: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.apiGetriskListList(query_data);
      if (res) {
        let { records, total, current, pages } = res.data.data;
        this.total = +total;
        this.pages = +pages;
        this.current_page = +current;
        this.list = records;
        this.dataList = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },

    // 时间格式 YYYY-MM-DD
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        return;
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        this.searchCofig[0].value = [befV, nowV];
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('riskList', riskListCol, riskListColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.searchCofig = this.$util.clone(riskListConfig);
    this.getList();
  },
};
</script>
<style scope lang="scss">
.riskList-container {
  padding: 4px 10px 10px 10px;
  .dialog-footer-check {
    display: flex;
    justify-content: center;
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
}
</style>
