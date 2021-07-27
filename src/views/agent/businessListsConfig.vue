<!--
 * @Author: your name
 * @Date: 2020-04-07 14:21:36
 * @LastEditTime: 2020-12-14 20:51:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\symbol\setting.vue
 -->
<template>
  <div class="businessListsConfig-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn">
      <el-button type="primary" size="small" @click="addCoin">添加级别</el-button>
    </div>
    <div>
      <Btable :maxHeight="'800px'" :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="600px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="商务级别" :label-width="formLabelWidth" prop="level">
              <el-input type="text" v-model.trim="cForm.level" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="代理模式" :label-width="formLabelWidth" prop="agentMode">
              <el-select v-model.trim="cForm.agentMode" placeholder="" wdith="20%" :disabled="!!cForm.id">
                <el-option v-for="(item, idx) in modeList" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="手续费返佣比例" :label-width="formLabelWidth" prop="feeCommission">
              <el-input type="text" v-model.trim="cForm.feeCommission" placeholder="请输入" @input="checkVal('feeCommission', 1)">
                <div slot="append">%</div>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="低流量返佣比例" :label-width="formLabelWidth" prop="feeCommissionLow">
              <el-input type="text" v-model.trim="cForm.feeCommissionLow" placeholder="请输入" @input="checkVal('feeCommissionLow', 1)">
                <div slot="append">%</div>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-form-item label="返佣结算时间" :label-width="formLabelWidth" prop="delayDay">
            <el-col :span="5">
              <el-select v-model.trim="cForm.delayUnit" placeholder="">
                <el-option v-for="(item, idx) in delayUnitList" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-col>

            <el-col :span="15">
              <el-input type="text" v-model.trim="cForm.delayDay" placeholder="请输入时间(必须为正整数)" @input="checkVal('delayDay')"> </el-input>
            </el-col>
          </el-form-item>
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
import { businessListsConfigCol, businessListsConfigConfig } from '@/config/column/contractAgent';
import $api from '@/api/api';
import axios from 'axios';
import activePage from '@/mixin/keepPage';
import Precision from '@/utils/number-precision';

export default {
  name: 'BusinessListsConfig',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  watch: {
    'cForm.delayUnit'(newval) {
      if (newval == 1) {
        this.sevenreg = /^[1-7]$/;
        this.sevenregmsg = '请输1-7的正整数';
      } else if (newval == 2) {
        this.sevenreg = /^([1-9]|1[0-9]|20|21|22|23|24|25|26|27|28)$/;
        this.sevenregmsg = '请输1-28的正整数';
      }
    },
  },
  data() {
    let validateEmail = (rule, value, callback) => {
      if (!this.sevenreg.test(value)) {
        callback(new Error(this.sevenregmsg));
      } else {
        callback();
      }
    };
    return {
      sevenreg:/^[1-7]$/,
      sevenregmsg: '请输1-7的正整数',
      btnArr: [], // 权限按钮列表
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
      formLabelWidth: '130px',
      dialogFormVisible: false, // 编辑添加币种弹窗
      modeList: [{ label: '手续费模式', value: 1 }],
      delayUnitList: [
        { label: '按周', value: 1 },
        { label: '按月', value: 2 },
      ],
      cForm: {
        id: '',
        level: '',
        agentMode: '',
        feeCommission: '',
        feeCommissionLow: '',
        delayUnit: 1,
        delayDay: '',
      },
      formName: '添加级别',
      rules: {
        level: [{ required: true, message: '必填', trigger: 'blur' }],
        agentMode: [{ required: true, message: '必填', trigger: 'blur' }],
        feeCommission: [{ required: true, message: '必填', trigger: 'blur' }],
        feeCommissionLow: [{ required: true, message: '必填', trigger: 'blur' }],
        delayDay: [
          { required: true, message: '必填', trigger: 'blur' },
          {
            validator: validateEmail,
            required: true,
            trigger: 'change',
          },
        ],
      },
    };
  },
  methods: {
    // 添加级别
    addCoin() {
      this.formName = '添加级别';
      this.dialogFormVisible = true;
      this.leverList = []; // 杠杆倍数置空
      this.$nextTick(() => {
        this.$refs['cForm'].resetFields();
        this.cForm = {
          id: '',
          level: '',
          delayUnit: 1,
          agentMode: '',
          feeCommission: '',
          feeCommissionLow: '',
          delayDay: '',
        };
      });
    },

    async confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          let { id, level, agentMode, feeCommission, delayDay, feeCommissionLow, delayUnit } = this.cForm;
          let params = {
            level,
            agentMode,
            delayUnit,
            delayDay: delayDay,
            feeCommission: feeCommission + '%',
            feeCommissionLow: feeCommissionLow + '%',
            businessType: 1,
          };
          id === ''
            ? params
            : Object.assign(params, {
                id,
              });
          this.btnLoading = true;
          const res = id === '' ? await $api.addBusinessLevelSelect(params) : await $api.updateBusinessLevel(params);
          if (res) {
            let tmp = id === '' ? '添加成功' : '修改成功';
            this.$message({ message: tmp, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'del') {
        this.$confirm('确认删除吗?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.deleteBusinessLevel({
              id: row.id,
            });
            if (res) {
              this.$message({ type: 'success', message: '删除成功' });
              this.getList();
            }
          })
          .catch(() => {});
        return;
      }
      // 编辑币种
      if (fn === 'edit') {
        this.formName = '编辑级别';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['cForm'].resetFields();
          let { id, level, agentMode, feeCommission, delayDay, feeCommissionLow, delayUnit } = row;
          this.cForm = {
            id,
            level,
            delayUnit,
            agentMode,
            delayDay,
            feeCommission: this.percentToNum(feeCommission),
            feeCommissionLow: this.percentToNum(feeCommissionLow),
          };
        });
      }
    },
    // 对输入值的范围进行限制
    checkVal(val, nodot) {
      this.cForm[val] = (this.cForm[val] + '').replace(/[^\d.]/g, '');
      if (nodot && this.cForm[val] >= 100) {
        this.cForm[val] = 99.99;
      }
      this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); // 2小数
      if (val == 'delayDay') {
        this.cForm[val] = (this.cForm[val] + '').replace(/\./g, '');
      }
      if (this.cForm[val] < 0) {
        this.cForm[val] = 0;
      }
    },
    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = val.replace(/\%/, '');
        return val;
        // return Precision.divide(val, 100);
      } else {
        return val;
      }
    },
    // 数字转为百分比
    numToPercent(val) {
      // if ((val + '').indexOf('%') !== -1) {
      //   val = val.replace(/\%/, '');
      // }
      return Precision.times(val, 100);
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
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
        pageNum: this.current_page,
        pageSize: this.pageSize,
        businessType: 1,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.businessLevelList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.listLoading = false;
      }
    },
    requiredParams(params) {
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
      //   let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
      //   params.endTime = nowV.replace(/\//gi, '-');
      //   params.startTime = befV.replace(/\//gi, '-');
      //   // 组件时间初始必须format格式
      //   this.searchCofig[0].value = [befV, nowV];
      // }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
  },
  async mounted() {
    this.configs = businessListsConfigCol;
    this.searchCofig = this.$util.clone(businessListsConfigConfig);

    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style lang="scss">
.businessListsConfig-container {
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
