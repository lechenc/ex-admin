<template>
  <div class="sonAcountDetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="container-btn">
      <el-button type="primary" size="medium" @click="addLine('transfer')">划转</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!--<div class="container-footer">
      <div>
        <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
      </div>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>-->
    <!-- 划账 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coinId">
          <el-select v-model="form.coinId" size="small" @change="getCoinNum">
            <el-option v-for="(item, idx) in coinList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="`${curCoinName}可用余额`" :label-width="formLabelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.coinNum" :disabled="true"> </el-input>
        </el-form-item>
        <el-form-item label="转出数量" prop="amount" :label-width="formLabelWidth">
          <el-input type="number" placeholder="请输入" v-model="form.amount" @input="checkVal('amount')"> </el-input>
        </el-form-item>
        <el-form-item label="接收账户" :label-width="formLabelWidth" prop="toUserId">
          <el-select v-model="form.toUserId" size="small">
            <el-option v-for="(item, idx) in accountList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
          <el-input type="textarea" :row="5" placeholder="请输入" v-model="form.remark"> </el-input>
        </el-form-item>
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
import { sonAcountDetailCol, sonAcountDetailColNoBtn, sonAcountDetailConfig } from '@/config/column/assetManage';
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';

export default {
  name: 'SonAcountDetail',
  components: {
    Btable,
    Bsearch,
  },
  mixins: [activePage],
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      getId: 0, // 从列表页得到的数值

      title: '添加黑名单',
      formLabelWidth: '120px',
      dialogVisible: false, // 是否显示弹窗
      earnUserType: 104, // 活动账号类型值
      form: {
        coinNum: '',
        coinId: '',
        amount: '',
        toUserId: '',
        remark: '',
      },
      rules: {
        coinId: [{ required: true, message: '必填' }],
        amount: [{ required: true, message: '必填' }],
        toUserId: [{ required: true, message: '必填' }],
        remark: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
      coinList: [],
      curCoinName: '', // 当前选择的币种
      accountList: [], //  接收账号
      realName: '', // 从上一级页面得到的realName
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'detail') {
        //  查看详情
        // this.$router.push({ path: '/assetManage/runRecord', query: { uid: row.uid, optType: 18 } });
        // 改为直接跳转币币资金流水页面
        this.$router.push({ path: '/financial/coinFunds', query: { uid: row.uid, coinId: row.coinId } });
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
      this.getDetail();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.getDetail();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getDetail();
    },
    // 控制输入的范围
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // 获取接收用户列表
    async getTransferUserList(val) {
      const params = {
        userType: this.earnUserType,
      };
      const res = await $api.getUserTransferUserList(params);
      if (res) {
        let tmp = res.data.data;
        this.accountList = tmp.map(v => {
          return { label: v.realName, value: v.userId, typeId: v.userType, realName: v.realName };
        });
      }
    },
    // 获取该币种的余额
    async getCoinNum(val) {
      this.curCoinName = this.coinList.filter(v => v.value == this.form.coinId)[0].label;
      const params = {
        userId: this.list[0].userId,
        coinId: this.form.coinId,
      };
      const res = await $api.getAccountGetBalance(params);
      if (res) {
        this.form.coinNum = res.data.data.amount;
      }
    },
    addLine(val) {
      if (this.list.length == 0) {
        this.$message({ message: '没有账户禁止操作', type: 'error' });
        return;
      }
      this.title = '添加划转';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {
          coinNum: '',
          coinId: '',
          amount: '',
          toUserId: '',
          remark: '',
        };
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          if (this.btnLoading) return;
          const { coinId, amount, toUserId, remark } = this.form;
          const params = {
            coinId,
            amount,
            remark,
            fromUserId: this.list[0].userId,
            fromUserType: this.earnUserType,
            toUserId,
            toUserType: this.accountList.filter(v => v.value == toUserId)[0].typeId,
            realName: this.realName,
          };
          this.btnLoading = true;
          const res = await $api.getSubExpendUserTransfer(params);
          if (res) {
            this.$message({ message: '划转成功!', type: 'success' });
            this.dialogVisible = false;
            this.getDetail();
          }
          this.btnLoading = false;
        }
      });
    },
    // 数据列表
    async getDetail() {
      if (this.listLoading) return;
      const params = {
        // pageNum: this.current_page,
        // pageSize: this.pageSize,
      };
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getAccountSubExpendDetail(params);
      if (res) {
        this.list = res.data.data;
        // const { records, total, current, pages } = res.data.data;
        // this.list = records;
        // this.total = total;
        // this.current_page = current;
        // this.pages = pages;
      }
      this.listLoading = false;
    },
  },
  // mounted() {
  // },
  activated() {
    if (this.isInTags()) {
      return;
    }

    this.list = []; //委托列表
    this.configs = []; // 委托列表列配置
    this.searchCofig = []; // 搜索框配置
    this.search_params_obj = {}; // 搜索框对象
    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.total = 0; // 总条数
    this.pages = 0; // 总页数
    this.getId = 0; // 从列表页得到的数值

    this.getId = this.$route.query.userId;
    this.realName = this.$route.query.realName;
    this.configs = sonAcountDetailCol;

    this.$store.dispatch('common/getCoinList').then(() => {
      this.coinList = this.$store.state.common.coinlist;
    });
    this.getTransferUserList();

    if (this.getId) {
      this.search_params_obj = { userId: this.getId, optType: 100 };
      this.getDetail();
    } else {
      this.getDetail();
    }
  },
};
</script>
<style lang="scss">
.sonAcountDetail-container {
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
