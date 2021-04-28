<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-10-19 18:25:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="agentCusList-container">
    <div class="container-top">
      <Bsearch
        :configs="searchCofig"
        @do-search="doSearch"
        @do-reset="doReset"
        :excelLoading="excelLoading"
        :exportExcel="true"
        @do-exportExcel="exportExcel"
      />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @size-change="pageSizeChange"
        @current-change="goPage"
        layout="total,sizes, prev, pager, next, jumper"
        :current-page="current_page"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- 编辑弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="850px" title="商户信息编辑">
      <el-form :model="form" ref="form" :rules="rules">
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="商户名称" :label-width="formLabelWidth" prop="aaa">
              <el-input v-model="form.aaa" autocomplete="off" placeholder="请输入" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="公司地址" :label-width="formLabelWidth" prop="bbb">
              <el-input v-model="form.bbb" autocomplete="off" placeholder="请输入" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="商户编号" :label-width="formLabelWidth" prop="ccc">
              <el-input v-model="form.ccc" autocomplete="off" placeholder="请输入" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" :label-width="formLabelWidth" prop="ddd">
              <el-input v-model="form.ddd" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="邮箱" :label-width="formLabelWidth" prop="eee">
              <el-input v-model="form.eee" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="银行卡购买手续费" :label-width="formLabelWidth" prop="ggg">
              <el-input v-model="form.ggg" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="银行卡出售手续费" :label-width="formLabelWidth" prop="qqq">
              <el-input v-model="form.qqq" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="支付宝购买手续费" :label-width="formLabelWidth" prop="www">
              <el-input v-model="form.www" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="支付宝出售手续费" :label-width="formLabelWidth" prop="rrr">
              <el-input v-model="form.rrr" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="微信购买手续费" :label-width="formLabelWidth" prop="yyy">
              <el-input v-model="form.yyy" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="微信出售手续费" :label-width="formLabelWidth" prop="uuu">
              <el-input v-model="form.uuu" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="用户充值手续费" :label-width="formLabelWidth" prop="iii">
              <el-input v-model="form.iii" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="币付通道设置" :label-width="formLabelWidth" prop="isTrade">
              <el-switch v-model="form.isTrade" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="收银台支付方式" :label-width="formLabelWidth" prop="ooo">
              <el-checkbox-group v-model="form.ooo" :min="1">
                <el-checkbox v-for="item in payList" :label="item.payType" :key="item.payType">{{ item.description }}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="最小购买金额" :label-width="formLabelWidth" prop="a1">
              <el-input v-model="form.a1" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="最大购买金额" :label-width="formLabelWidth" prop="a2">
              <el-input v-model="form.a2" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="通过收银台域名购买" :label-width="formLabelWidth" prop="a3">
              <el-select v-model="coinForm.a3" placeholder="">
                <el-option v-for="(item, index) in domainArr" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="删除谷歌密钥" :label-width="formLabelWidth" prop="a4">
              <el-button type="primary" @click="delCode">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="是否允许登录" :label-width="formLabelWidth" prop="a6">
              <el-select v-model="coinForm.a6" placeholder="">
                <el-option v-for="(item, index) in loginArr" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="下单白名单" :label-width="formLabelWidth" prop="a7">
              <el-input v-model="form.a7" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="a8">
              <el-input v-model="form.a8" autocomplete="off" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
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
import { agentCusListCol, gentCusListColNoBtn, agentCusListConfig } from '@/config/column/customer';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'AgentCusList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false,
      calLoading: false,
      excelLoading: false, // 导出loadiing
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',

      domainArr: [{ label: '是', value: 1 }, { label: '否', value: 0 }],
      loginArr: [{ label: '是', value: 1 }, { label: '否', value: 0 }],
      labelWidth: '100px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        a: '',
        b: '',
        c: '',
      },
      rules: {
        a: [{ required: true, message: '必填' }],
        b: [{ required: true, message: '必填' }],
        c: [{ required: true, message: '必填' }],
      },
    };
  },
  methods: {
    doHandle(data) {
      const { fn, row } = data;
      if (fn === 'lock' || fn === 'unlock') {
        const tip = fn === 'lock' ? '确认锁定该商户' : '确认激活该商户';
        this.$confirm(tip, '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.delSubGroup({
              groupId: row.recdId,
              status: fn === 'lock' ? 1 : 0,
            });
            if (res) {
              const txt = fn === 'lock' ? '成功锁定该商户' : '成功激活该商户';
              this.$message({ type: 'success', message: txt });
              this.getList();
            }
          })
          .catch(() => {});
      }
      if (fn === 'edit') {
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
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
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
    // 删除谷歌密钥
    delCode() {},
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
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getDepositList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.dataList = records;
        this.listLoading = false;
      }
    },
    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getDepositList(params);
      this.excelLoading = false;
      if (res) {
        return res;
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('AgentCusList', agentCusListCol, agentCusListColNoBtn);
    this.configs = authObj.val;

    this.configs = this.$util.clone(agentCusListConfig);
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    // let tmpId = this.$route.query.uid;
    // if (tmpId) {
    //   this.searchCofig[2].value = tmpId;
    //   this.search_params_obj = { uid: tmpId };
    //   this.getList();
    // } else {
    //   this.getList();
    // }
  },
};
</script>
<style scope lang="scss">
.agentCusList-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
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
