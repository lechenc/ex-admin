<template>
  <div class="coinWhiteList-container">
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addChain">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="500px" :visible.sync="dialogFormVisible">
      <el-form :model="chainForm" ref="chainForm" :rules="rules">
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinName">
          <el-select @change="changeDecimal" v-model="chainForm.coinName" placeholder="请选择">
            <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单笔限额" :label-width="formLabelWidth" prop="singleMaxAmount">
          <el-input placeholder="请输入" @input="checkVal('singleMaxAmount')" v-model="chainForm.singleMaxAmount" autocomplete="off" type="number"></el-input>
        </el-form-item>
        <el-form-item label="单日限额" :label-width="formLabelWidth" prop="dayMaxAmount">
          <el-input placeholder="请输入" @input="checkVal('dayMaxAmount')" v-model="chainForm.dayMaxAmount" autocomplete="off" type="number"></el-input>
        </el-form-item>
        <el-form-item label="UID" :label-width="formLabelWidth" prop="uidList">
          <el-input placeholder="请输入UID,以逗号隔开" @input="checkVal2('uidList')" v-model="chainForm.uidList" autocomplete="off" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
          <el-input @input="checkVal3('chainForm', 'googleCode')" placeholder="请输入" class="my-mumber-input" v-model="chainForm.googleCode" autocomplete="off" type="text"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加 编辑 -->
    <el-dialog title="删除" width="500px" :visible.sync="dialogFormVisible2">
      <el-form :model="chainForm2" ref="chainForm2" :rules="rules2">
        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
          <el-input @input="checkVal3('chainForm2', 'googleCode')" placeholder="请输入" class="my-mumber-input" v-model="chainForm2.googleCode" autocomplete="off" type="text"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp2" :loading="btnLoading2">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { coinWhiteListCol, coinWhiteListColNoBtn } from '@/config/column/symbol';
import { parseTime } from '@/utils/index';
import $api from '@/api/api';

export default {
  name: 'coinWhiteList',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      btnLoading2: false,
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      dialogFormVisible: false,
      dialogFormVisible2: false,
      chainForm: {
        id: '',
        googleCode: '',
        coinName: '',
        singleMaxAmount: '',
        dayMaxAmount: '',
        uidList: '',
      },
      chainForm2: {
        id: '',
        googleCode: '',
      },
      rules: {
        googleCode: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        coinName: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        singleMaxAmount: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        dayMaxAmount: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        uidList: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
      },
      rules2: {
        googleCode: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
      },
      formName: '',
      formLabelWidth: '125px',
      coinList: [],
      decimalReg: /^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/,
    };
  },
  watch: {
    dialogFormVisible(newVal) {
      if (!newVal) {
        this.decimalReg = /^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/;
      }
    },
  },
  filters: {
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
  },
  methods: {
    checkVal3(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '');
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (val === 'singleMaxAmount' || val === 'dayMaxAmount') {
        this.chainForm[val] = (this.chainForm[val] + '').replace(this.decimalReg, '$1$2.$3');
      }
      if (this.chainForm[val] < 0) {
        this.chainForm[val] = 0;
      }
    },
    confirmOp2() {
      this.$refs['chainForm2'].validate(async (valid) => {
        if (valid) {
          const { id, googleCode } = this.chainForm2;
          const params = {
            id,
            googleCode,
          };
          this.btnLoading2 = true;
          const res = await $api.deleteCoinWhiteList(params);
          if (res) {
            this.$message({ message: '删除成功', type: 'success' });
            this.dialogFormVisible2 = false;
            this.getList();
          }
          this.btnLoading2 = false;
        }
      });
    },

    // 对输入值的范围进行限制2
    checkVal2(val) {
      this.chainForm[val] = (this.chainForm[val] + '').replace(/[^\d,]/g, '');
      this.chainForm[val] = (this.chainForm[val] + '').replace(/,,/g, ',');
    },

    changeDecimal(val) {
      this.chainForm.singleMaxAmount = '';
      this.chainForm.dayMaxAmount = '';
      let decimal = this.coinList.filter((v) => v['label'] == val)[0].decimalPlaces;

      let arr = [];
      for (let i = 0; i < decimal; i++) {
        arr.push('\\d');
      }
      let s1 = '/^(\\-)*(\\d+)\\.(';
      let s2 = arr.join('');
      let s3 = ').*$/';

      let reg = s1.concat(s2, s3);
      this.decimalReg = eval(reg);
    },
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑币种
      if (fn === 'edit') {
        this.formName = '编辑';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['chainForm'].resetFields();
          const { id, googleCode, coinName, singleMaxAmount, dayMaxAmount, uidList } = row;
          this.chainForm = {
            id,
            googleCode,
            coinName,
            singleMaxAmount,
            dayMaxAmount,
            uidList,
          };
        });
      }
      if (fn === 'del') {
        this.dialogFormVisible2 = true;
        this.chainForm2 = {
          id: row.id,
          googleCode: '',
        };
      }
    },
    // 添加链类型
    addChain() {
      this.formName = '添加';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['chainForm'].resetFields();
        this.chainForm = {
          id: '',
          type: 1,
          googleCode: '',
          coinName: '',
          singleMaxAmount: '',
          dayMaxAmount: '',
          uidList: '',
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['chainForm'].validate(async (valid) => {
        if (valid) {
          const { id, googleCode, coinName, singleMaxAmount, dayMaxAmount, uidList } = this.chainForm;
          const params = {
            googleCode,
            coinName,
            singleMaxAmount,
            dayMaxAmount,
            uidList,
          };
          params.coinId = this.coinList.filter((v) => v.label == coinName)[0].value;
          this.btnLoading = true;
          // 新增 编辑
          //console.log('id', id);
          const res = id == '' ? await $api.addEditCoinWhiteList({ ...params, type: 1 }) : await $api.addEditCoinWhiteList({ ...params, id, type: 2 });
          if (res) {
            let txt = id === '' ? '新增成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
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
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {};
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getCoinWhiteList(query_data);
      //console.log('res', res);
      if (res) {
        this.list = res.data.data;
        this.listLoading = false;
      } else {
        this.listLoading = false;
      }
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('coinWhiteList', coinWhiteListCol, coinWhiteListColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.getList();
    this.$store.dispatch('common/getCoinList').then(() => {
      this.coinList = this.$store.state.common.coinlist;
    });
  },
};
</script>

<style lang="scss" scoped>
.coinWhiteList-container {
  padding: 4px 20px 10px 20px;

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
}

/deep/ .el-dialog__body {
  max-height: 600px;
  overflow: auto;
}
</style>
