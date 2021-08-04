<template>
  <div class="hotWalletExtract-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addChain">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="500px" :visible.sync="dialogFormVisible">
      <el-form :model="chainForm" ref="chainForm" :rules="rules">
        <el-form-item label="链名称" :label-width="formLabelWidth" prop="chain">
          <el-select v-model="chainForm.chain" placeholder="请选择">
            <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coin">
          <el-select v-model="chainForm.coin" placeholder="请选择">
            <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单笔限额" :label-width="formLabelWidth" prop="maxAutoWithdraw">
          <el-input placeholder="请输入" @input="checkVal('maxAutoWithdraw')" v-model="chainForm.maxAutoWithdraw" autocomplete="off" type="number"></el-input>
        </el-form-item>
        <el-form-item label="单日限额" :label-width="formLabelWidth" prop="maxDailyAutoWithdraw">
          <el-input placeholder="请输入" @input="checkVal('maxDailyAutoWithdraw')" v-model="chainForm.maxDailyAutoWithdraw" autocomplete="off" type="number"></el-input>
        </el-form-item>
        <el-form-item label="热钱包启用开关" :label-width="formLabelWidth" prop="status">
          <el-switch v-model="chainForm.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
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

    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogSetVisible" width="650px" title="查看余额">
      <el-row style="margin-bottom: 22px;">
        <el-col :span="6">
          链类型名称: <span style="color: #4390ff;">{{protocol}}</span>
        </el-col>
        <el-col :span="6">
          币种名称: <span style="color: #4390ff;">{{coinKey}}</span>
        </el-col>
      </el-row>
      <Btable :listLoading="setListLoading" :data="setlist" :configs="setConfigs" />
    </el-dialog>


  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { hotWalletExtractCol, hotWalletExtractColNoBtn,hotWalletExtractSetCol } from '@/config/column/financial';
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

      chainForm: {
        id: '',
        coin: '',
        chain: '',
        maxAutoWithdraw: '',
        maxDailyAutoWithdraw: '',
        status: false,
        googleCode: '',
      },

      rules: {
        coin: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        chain: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        maxAutoWithdraw: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        maxDailyAutoWithdraw: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
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
      labelWidth: '125px',
      
      coinList: [],
      decimalReg: /^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/,
      dialogSetVisible:false,
      setListLoading:false,
      setConfigs:[],
      setlist:[],
      coinKey: '',
      protocol: ''
    };
  },

  filters: {
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
  },
  methods: {
    confirmSet(){

    },
    checkVal3(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '');
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      // if (val === 'singleMaxAmount' || val === 'dayMaxAmount') {
      //   this.chainForm[val] = (this.chainForm[val] + '').replace(this.decimalReg, '$1$2.$3');
      // }
      if (this.chainForm[val] < 0) {
        this.chainForm[val] = 0;
      }
    },

    // 根据币种限制小数位
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
          const { id, coin, chain, maxAutoWithdraw, maxDailyAutoWithdraw, status } = row;
          this.chainForm = {
            id,
            coin,
            chain,
            maxAutoWithdraw,
            maxDailyAutoWithdraw,
            status:status?true:false,
            googleCode: '',
          };
        });
      }
      if (fn == 'checkBalance') {
        const { chain: protocol, coin: coinKey } = row
        this.dialogSetVisible = true
        const firstRequest = $api.apiHotWalletExtractCheckChain({
          protocol: row.chain,
        });
        this.setlist = []
        this.protocol = protocol
        this.coinKey = coinKey
        const request = $api.apiHotWalletExtractCheckDetail
        firstRequest.then(res => {
          const { data } = res.data
          if (data instanceof Array) {
            data.forEach((address, idx) => {
              this.setlist.push({address})
              request({protocol,coinKey, address}).then(responent => {
                const item = responent.data.data
                this.$set(this.setlist, idx, {...this.setlist[idx], ...item} )
              })
            })
          }
        })
      }
      // if (fn === 'delete') {
      //   this.$confirm('确定删除？', '温馨提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning',
      //   })
      //     .then(async () => {
      //       const params = {
      //         id: row.id,
      //       };
      //       const res = await $api.apiDelHotWalletExtract(params);
      //       if (res) {
      //         this.$message({ type: 'success', message: '通过操作成功!' });
      //         this.getList();
      //       }
      //     })
      //     .catch(() => {});
      // }
    },
    // 添加链类型
    addChain() {
      this.formName = '添加';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['chainForm'].resetFields();
        this.chainForm = {
          id: '',
          coin: '',
          chain: '',
          maxAutoWithdraw: '',
          maxDailyAutoWithdraw: '',
          status: false,
          googleCode: '',
        };
      });
    },
    // 提交
    confirmOp() {
      this.$refs['chainForm'].validate(async (valid) => {
        if (valid) {
          const { id, coin, chain, maxAutoWithdraw, maxDailyAutoWithdraw, status, googleCode } = this.chainForm;
          const params = {
            coin,
            chain,
            maxAutoWithdraw,
            maxDailyAutoWithdraw,
            status: status ? 1 : 0,
            googleCode,
          };

          this.btnLoading = true;
          // 新增 编辑
          //console.log('id', id);
          const res = !id ? await $api.apiAddHotWalletExtract({ ...params }) : await $api.apiEditHotWalletExtract({ ...params, id });
          if (res) {
            let txt = !id ? '新增成功' : '编辑成功';
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
      // if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
      //   this.search_params_obj.flag = 1;
      // }
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
      const res = await $api.apiGetHotWalletExtractList(query_data);
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
    let authObj = this.$util.getAuthority('HotWalletExtract', hotWalletExtractCol, hotWalletExtractColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.setConfigs = hotWalletExtractSetCol
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.hotWalletExtract-container {
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
