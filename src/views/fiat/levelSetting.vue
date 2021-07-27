<template>
  <div class="levelSetting-container">
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addRobot">添加</el-button>
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
    <!-- 添加 编辑 -->
    <el-dialog :title="formName" :visible.sync="dialogFormVisible" width="650px">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinName" v-if="form.id">
          <el-input v-model="form.coinName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinName" v-else>
          <el-select v-model="form.coinName" placeholder="" wdith="20%">
            <el-option v-for="(item, idx) in coin_list" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="等级名称" :label-width="formLabelWidth" prop="levelName">
          <el-input v-model="form.levelName" autocomplete="off"></el-input>
        </el-form-item>
        <b-two-range-choose
          v-if="dialogFormVisible"
          ref="twoChoose"
          :labelWidth="formLabelWidth"
          labelWords="额度要求"
          :getVal1.sync="form.minCreditLimit"
          :getVal2.sync="form.maxCreditLimit"
          :isdisabled="false"
          @handler="getRangeVal"
        ></b-two-range-choose>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import iconPage from '@/components/icon-page';
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import BTwoRangeChoose from '@/components/b-two-range-choose';
import { levelSettingCol, levelSettingColNoBtn } from '@/config/column/fiat';
import $api from '@/api/api';

export default {
  name: 'LevelSetting',
  components: {
    Btable,
    Bsearch,
    BTwoRangeChoose,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
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
      dialogFormVisible: false,
      getAmountSection: '', // 获取的数值范围
      labelWidth: '120px',
      form: {
        id: '',
        coinId: '',
        coinName: '',
        levelName: '',
        minCreditLimit: '',
        maxCreditLimit: '',
      },
      rules: {
        levelName: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      formName: '',
      formLabelWidth: '150px',
      coin_list: [], // 交易对下拉列表
    };
  },
  methods: {
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑
      if (fn === 'edit') {
        this.formName = '等级设置';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['twoChoose'].resetValue();
          this.$refs['form'].resetFields();
          const { id, coinId, coinName, levelName, minCreditLimit, maxCreditLimit } = row;
          this.form = {
            id,
            coinId,
            coinName,
            levelName,
            minCreditLimit,
            maxCreditLimit,
          };
        });
      }
      // 删除
      if (fn === 'del') {
        this.$confirm('此操作将删除该条目, 是否继续?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: row.id,
            };
            const res = await $api.deleteUserGradePage(params);
            if (res) {
              this.$message({ type: 'success', message: '删除成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消删除' });
          });
      }
    },
    // 范围组件更新范围数值
    rangeValue(ret) {
      if (ret.valid) {
        this.getAmountSection = ret.form.min + '-' + ret.form.max;
      } else {
        //console.log('rangeValue error');
      }
    },
    // 添加交易对
    addRobot() {
      this.formName = '新增等级';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.$refs['twoChoose'].resetValue();
        this.form = {
          id: '',
          coinId: '',
          coinName: '',
          levelName: '',
          minCreditLimit: '',
          maxCreditLimit: '',
        };
      });
    },
    // 提交
    confirmOp() {
      if(!this.$refs['twoChoose'].validateValue()){
        return;
      }
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { id, coinId, coinName, levelName, minCreditLimit, maxCreditLimit } = this.form;
          const params = {
            coinName,
            levelName,
            minCreditLimit,
            maxCreditLimit,
          };
          if (id === '') {
            params.coinId = this.coin_list.filter(v => v.label == coinName)[0].value + '';
          } else {
            params.coinId = coinId + '';
          }
          this.btnLoading = true;

          // 新增 编辑
          const res = id === '' ? await $api.addUserGradePage(params) : await $api.updateUserGradePage({ id, ...params });
          if (res) {
            let txt = id === '' ? '新增等级成功' : '编辑等级成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          //console.log('error submit!!');
          return false;
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
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.getList();
    },
    formatTime(val) {
      return typeof val === 'string' ? val : parseInt(new Date(val).getTime() / 1000);
    },
    getRangeVal(val) {
      // val.valid
      // val.form
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
      };
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getUserGradePage(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.listLoading = false;
      }
    },
    async getCoinList() {
      // 币种获取（交易对由币种组合而成嘛）
      this.$store.dispatch('common/getFiatCoinList').then(() => {
        let list = this.$store.state.common.fiatcoinlist;
        // 强制默认只有USDT币种
        this.coin_list = list.filter(f => f.label == 'USDT');
      });
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('LevelSetting', levelSettingCol, levelSettingColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.getCoinList();
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.levelSetting-container {
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
