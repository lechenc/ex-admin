<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="notice-container">
    <div class="container-top">
      <Bsearch :configs="searchConfig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="notice-button">
      <el-button type="primary" size="medium" @click="create">添加设置</el-button>
    </div>

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <el-Dialog :visible.sync="showDialog" :title="title" width="700px" class="notice-dialog">
      <el-form :model="form" ref="form" label-width="160px" :rules="rules" style="width: 90%; padding-left: 15px">
        <el-form-item label="选择模拟币种" prop="coinMarket">
          <el-select placeholder="请选择" v-model="form.coinMarket" width="20%">
            <el-option v-for="(item, idx) in symbollist" :key="idx" :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>

        <el-row :span="24">
          <el-form-item class="my-form-item" label="开通模拟账户自动赠送金额" prop="openAutoAmount">
            <el-input size="small" placeholder="请输入" type="number" v-model="form.openAutoAmount"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item class="my-form-item" label="账号总价值低于多少金额可领取模拟金" prop="lowAmount">
            <el-input size="small" type="number" placeholder="请输入" v-model="form.lowAmount"> </el-input>
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-form-item label="每日每次可以领取金额" prop="todayReceiveAmount">
            <el-input size="small" placeholder="请输入" type="Number" v-model.trim="form.todayReceiveAmount"></el-input>
          </el-form-item>
        </el-row>

        <el-row :span="24">
          <el-form-item label="模拟金领取开关" prop="receiveSwitch">
            <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model.trim="form.receiveSwitch"></el-switch>
          </el-form-item>
        </el-row>
      </el-form>

      <div class="comfirn-btn footer">
        <el-button type="primary" size="small" @click="confirm" :loading="btnLoading">确定</el-button>
        <el-button type="default" size="small" @click="showDialog = false">取消</el-button>
      </div>
    </el-Dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { columnMimicCol, columnMimicConfig } from '@/config/column/contractMimic';
import $api from '@/api/api';
import utils from '@/utils/util';
export default {
  name: 'columnMimic',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      symbollist: [],
      form: {
        id: '',
        coinMarket: '',
        openAutoAmount: '',
        lowAmount: '',
        todayReceiveAmount: '',
        receiveSwitch: false,
      },
      toDay: '',
      ago: '',
      rules: {
        coinMarket: [{ required: true, message: '请输入', trigger: 'blur' }],
        openAutoAmount: [{ required: true, message: '请输入', trigger: 'blur' }],
        lowAmount: [{ required: true, message: '请输入', trigger: 'blur' }],
        todayReceiveAmount: [{ required: true, message: '请输入', trigger: 'blur' }],
      },
      showDialog: false,
      title: '添加设置',
      btnLoading: false, // 提交
      // isCURDAuth: true, // 是否有添加的权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchConfig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pages: 0, // 总页数
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      detail_list: [], // 详情数据列表，
      row: {}, // 选中列信息
    };
  },
  watch: {
    showDialog(newVal) {
      if (!newVal) {
        this.form = {
          id: '',
          coinMarket: '',
          openAutoAmount: '',
          lowAmount: '',
          todayReceiveAmount: '',
          receiveSwitch: false,
        };
      }
    },
  },
  methods: {
    uploadError() {
      this.$message.error('图片上传失败');
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
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
    async confirm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let { id, receiveSwitch, coinMarket, ...prop } = this.form;
          let temId = '';
          temId = this.symbollist.filter((v) => v['label'] == coinMarket)[0].value;
          const parms = { receiveSwitch: receiveSwitch ? 1 : 0, coinMarket, coinId: temId, ...prop };
          this.btnLoading = true;
          const res = !id ? await $api.addColumnMimic({ ...parms }) : await $api.editColumnMimic({ id, ...parms });
          if (res) {
            let txt = !id ? '新增成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.showDialog = false;
            this.getList();
          }
          this.btnLoading = false;
        } else {
          this.$message.error({ title: '提示', message: '请完成表单内容填写再重试' });
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'edit') {
        this.showDialog = true;
        const { id, coinMarket, openAutoAmount, lowAmount, todayReceiveAmount, receiveSwitch } = row;
        this.form = {
          id,
          coinMarket,
          openAutoAmount,
          lowAmount,
          todayReceiveAmount,
          receiveSwitch: receiveSwitch == 1 ? true : false,
        };
        this.title = '编辑设置';
      }
      if (fn === 'empty') {
        this.$confirm(row.coinMarket + '是否一键清空?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.emptyColumnMimic({
              coinName: row.coinMarket,
            });
            if (res) {
              this.$message({ type: 'success', message: res.data.message });
              this.getList();
            }
          })
          .catch(() => {});
      }
      if (fn === 'cancel') {
        this.$confirm(row.coinMarket + '是否一键撤单?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.cancelColumnMimic({
              coinMarket: row.coinMarket,
            });
            if (res) {
              this.$message({ type: 'success', message: res.data.message });
              this.getList();
            }
          })
          .catch(() => {});
      }
      if (fn === 'close') {
        this.$confirm(row.coinMarket + '是否一键平仓?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await $api.closeColumnMimic({
              coinMarket: row.coinMarket,
            });
            if (res) {
              this.$message({ type: 'success', message: res.data.message });
              this.getList();
            }
          })
          .catch(() => {});
      }
      if (fn === 'switchCoin') {
        const res = await $api.editColumn({ id: row.id, columnStatus: row.columnStatus ? 1 : 0 });
        if (res) {
          this.$message({ type: 'success', message: res.data.message });
          this.getList();
        } else {
          this.getList();
        }
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      //console.log('this.search_params_obj', this.symbollist);
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};

      this.searchConfig.forEach((v) => {
        v['value'] = '';
      });
     // this.searchConfig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    create() {
      this.showDialog = true;
      this.title = '添加设置';
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },

    requiredParams(params) {
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
      //   let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
      //   params.endTime = nowV.replace(/\//gi, '-');
      //   params.startTime = befV.replace(/\//gi, '-');
      //   // 组件时间初始必须format格式
      //   this.searchConfig[0].value = [befV, nowV];
      // }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }

      if (this.search_params_obj.coinId) {
        let tmpName = '';
        tmpName = this.symbollist.filter((v) => v['value'] == this.search_params_obj.coinId)[0].value;
        //console.log('this.symbollist', tmpName);
        this.search_params_obj.coinId = tmpName;
      }
    },

    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getsymbolMimiclistContract').then(() => {
        this.symbollist = this.$store.state.common.symbolMimiclistContract;

        this.searchConfig[2]['list'] = this.symbollist;
      });
    },

    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },

    async getList() {
      if (this.listLoading) return;
      this.listLoading = true;
      let vm = this;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getColumnMimicList(params);
      if (res) {
        const { records, current, total, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        let list = [];
        records.forEach((v) => {
          if (v.coinMarket != 'BTCUSDT') {
            list.push(v);
          }
        });
        //console.log('list', list);
        this.list = list;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    this.configs = columnMimicCol;
    this.searchConfig = this.$util.clone(columnMimicConfig);
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style lang="scss">
.notice-container {
  .my-form-item {
    .el-form-item__content {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  .el-form-item__content {
    margin-left: 0;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 10px 20px;
    }
    button:last-child {
      margin-left: 90px;
    }
  }
  padding: 4px 10px 10px 10px;
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 30px auto 10px;
  }

  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
}
</style>
