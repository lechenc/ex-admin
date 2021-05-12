<template>
  <div class="voucherList-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addLine">创建体验金券</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加编辑弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="600px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="体验金券名称" prop="experienceName" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.experienceName" maxlength="20"> </el-input>
        </el-form-item>
        <el-form-item label="关联副标题" prop="experienceSubtitle" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.experienceSubtitle" maxlength="20"> </el-input>
        </el-form-item>

        <el-form-item label="资产类型" prop="assetsType" :label-width="labelWidth">
          <el-select v-model="form.assetsType" placeholder="请选择" style="width: 180px">
            <el-option v-for="(item, index) in assetsTypeList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="coinId" label="合约交易对" :label-width="labelWidth">
          <el-select v-model="form.coinId" placeholder="请选择" style="width: 180px">
            <el-option v-for="(item, index) in symbolList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="仓位类型" prop="positionType" :label-width="labelWidth">
          <el-select v-model="form.positionType" placeholder="请选择" style="width: 180px">
            <el-option v-for="(item, index) in positionTypeList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="委托类型" prop="entrustType" :label-width="labelWidth">
          <el-select v-model="form.entrustType" placeholder="请选择" style="width: 180px">
            <el-option v-for="(item, index) in entrustTypeList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="最高杠杆倍数" prop="leverage" :label-width="labelWidth">
          <el-select v-model="form.leverage" placeholder="请选择" style="width: 180px">
            <el-option v-for="(item, index) in leverageList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="面值" prop="faceValue" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入正整数" v-model="form.faceValue" @input="checkVal('form', 'faceValue')"> </el-input>
        </el-form-item>

        <el-form-item label="资产币种" prop="marketId" :label-width="labelWidth">
          <el-select v-model="form.marketId" placeholder="请选择" style="width: 180px">
            <el-option v-for="(item, index) in coinList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="有效期" prop="timeType" :label-width="labelWidth">
          <el-select v-model="form.timeType" placeholder="请选择" style="width: 180px">
            <el-option v-for="(item, index) in timeList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <!-- 手动模式：不用填写时间。自动模式：每隔多少小时，触发一次发券 -->
        <el-row>
          <b-two-date-timer v-if="form.timeType == 0 || !form.timeType" ref="twoTimer" :labelWidth="labelWidth" labelWords="日期" :date1.sync="form.effectiveStartTime" :date2.sync="form.effectiveEndTime"></b-two-date-timer>
          <el-form-item v-else-if="form.timeType == 1" label="天数" prop="effectiveDay" :label-width="labelWidth">
            <el-input type="text" placeholder="请输入正整数" v-model="form.effectiveDay" @input="checkVal('form', 'effectiveDay')"> </el-input>
          </el-form-item>
        </el-row>

        <el-form-item label="启用" prop="status" :label-width="labelWidth">
          <el-switch v-model="form.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    <!-- 批量发券 -->
    <el-dialog :visible.sync="batchGrantVisible" width="600px" title="批量发券">
      <el-form label-width="150px" :model="batchGrantForm" ref="batchGrantForm" :rules="batchGrantRules">
        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="每人发放券数量" prop="couponNumber">
              <el-input type="text" @input="checkVal('batchGrantForm', 'couponNumber')" placeholder="请输入" v-model.trim="batchGrantForm.couponNumber"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="UID" prop="uidList">
              <el-input rows="3" type="textarea" @input="checkVal2('batchGrantForm', 'uidList')" placeholder="请输入UID,以逗号隔开,最多一次性填写500个" v-model.trim="batchGrantForm.uidList"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="20">
            <el-form-item label="谷歌验证码" prop="googleCode">
              <el-input type="text" @input="checkVal('batchGrantForm', 'googleCode')" placeholder="请输入" v-model.trim="batchGrantForm.googleCode"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="batchGrantVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="batchGrantConfirmOp" :loading="batchGrantbtnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { voucherListCol, voucherListColNoBtn, voucherListConfig } from '@/config/column/voucher';
import BTwoDateTimer from '@/components/b-two-date-timer';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'VoucherList',
  components: {
    Btable,
    Bsearch,
    iconPage,
    BTwoDateTimer,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      listLoading: false, // 表格loading
      batchGrantbtnLoading: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',

      getCoinList: [],
      symbolList: [],
      coinList: [], // 币种列表写死一个usdt 目前强制逻辑{ label: 'USDT', value: 4 }
      title: '',
      labelWidth: '110px',
      formLabelWidth: '130px',
      dialogVisible: false, // 是否显示弹窗
      batchGrantVisible: false, // 是否显示弹窗
      form: {
        id: '',
        experienceName: '',
        experienceSubtitle: '',
        assetsType: '',
        coinId: '',
        positionType: '',
        entrustType: '',
        leverage: '',
        faceValue: '',
        marketId: '',
        effectiveStartTime: '',
        effectiveEndTime: '',
        status: false,
        timeType: '',
        effectiveDay: '',
      },
      rules: {
        experienceName: [{ required: true, message: '必填' }],
        experienceSubtitle: [{ required: true, message: '必填' }],
        assetsType: [{ required: true, message: '必填' }],
        coinId: [{ required: true, message: '必填' }],
        positionType: [{ required: true, message: '必填' }],
        entrustType: [{ required: true, message: '必填' }],
        leverage: [{ required: true, message: '必填' }],
        faceValue: [{ required: true, message: '必填' }],
        marketId: [{ required: true, message: '必填' }],
        timeType: [{ required: true, message: '必填' }],
        effectiveDay: [{ required: false, message: '必填' }],
      },
      batchGrantForm: {
        experienceId: '',
        couponNumber: '',
        uidList: '',
        googleCode: '',
      },
      batchGrantRules: {
        experienceId: [{ required: true, message: '必填' }],
        couponNumber: [{ required: true, message: '必填' }],
        uidList: [
          { required: true, message: '必填' },
          { min: 1, max: 4000, message: '最多一次性填写500个', trigger: 'blur' },
        ],
        googleCode: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
      assetsTypeList: [{ label: 'USDT永续合约', value: 1 }],
      positionTypeList: [{ label: '全仓', value: 0 }], //, { label: '逐仓', value: 1 }
      entrustTypeList: [{ label: '市价', value: 0 }],
      timeList: [
        { label: '固定日期', value: 0 },
        { label: '固定天数', value: 1 },
      ], // 有效期类型
      leverageList: [
        { label: '1X', value: 1 },
        { label: '2X', value: 2 },
        { label: '3X', value: 3 },
        { label: '5X', value: 5 },
        { label: '10X', value: 10 },
        { label: '20X', value: 20 },
        { label: '30X', value: 30 },
        { label: '50X', value: 50 },
        { label: '75X', value: 75 },
      ],
    };
  },
  watch: {
    'form.timeType': {
      async handler(newVal, oldVal) {
        if (newVal || newVal == 0) {
          this.rules.effectiveDay[0].required = newVal == 0 || !newVal ? false : true;
        }
      },
      // immediate: true,
    },
    'form.timeType'(newVal) {
      if (newVal == 0) {
        delete this.form.effectiveDay;
      } else if (newVal == 1) {
        delete this.form.effectiveStartTime;
        delete this.form.effectiveEndTime;
      }
    },
    batchGrantVisible(newVal) {
      if (!newVal) {
        this.batchGrantForm = {
          experienceId: '',
          couponNumber: '',
          uidList: '',
          googleCode: '',
        };
      }
    },
  },
  methods: {
    batchGrantConfirmOp() {
      this.$refs['batchGrantForm'].validate(async (valid) => {
        if (valid) {
          const { experienceId, couponNumber, uidList, googleCode } = this.batchGrantForm;
          const params = {
            experienceId,
            couponNumber,
            uidList,
            googleCode,
          };
          const res = await $api.batchGrantExperience(params);
          if (res) {
            this.$message({ message: '发券成功', type: 'success' });
            this.batchGrantVisible = false;
            this.getList();
          }
          this.batchGrantbtnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'edit') {
        this.title = '编辑体验金券';
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            id: row.id,
            experienceName: row.experienceName,
            experienceSubtitle: row.experienceSubtitle,
            assetsType: row.assetsType,
            coinId: row.coinId,
            positionType: row.positionType,
            entrustType: row.entrustType,
            leverage: row.leverage,
            faceValue: row.faceValue,
            marketId: row.marketId,
            effectiveStartTime: (row.effectiveStartTime + '').replace(/\-/g, '/'),
            effectiveEndTime: (row.effectiveEndTime + '').replace(/\-/g, '/'),
            status: row.status,
            timeType: row.timeType,
            effectiveDay: row.effectiveDay,
          };
        });
      }
      if (fn === 'del') {
        this.$confirm('确定删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: row.id,
            };
            const res = await $api.deleteExperience(params);
            if (res) {
              this.$message({ type: 'success', message: '删除操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消删除' });
          });
      }
      if (fn === 'trstart') {
        let params = {
          id: row.id,
          status: row.status ? 1 : 0,
        };
        const res = await $api.editExperienceStatus(params);
        if (res) {
          this.$message({ type: 'success', message: '操作成功!' });
          this.getList();
        } else {
          this.getList();
        }
      }
      if (fn === 'batchGrant') {
        this.batchGrantVisible = true;
        this.batchGrantForm.experienceId = row.id;
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
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    addLine() {
      this.title = '添加体验金券';
      this.isCoinLabel = true;
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        // this.$refs['twoTimer'].resetValue();
        this.form = {
          id: '',
          experienceName: '',
          experienceSubtitle: '',
          assetsType: '',
          coinId: '',
          positionType: '',
          entrustType: '',
          leverage: '',
          faceValue: '',
          marketId: '',
          effectiveStartTime: '',
          effectiveEndTime: '',
          status: false,
          timeType: '',
          effectiveDay: '',
        };
      });
    },
    // 提交
    confirmOp() {
      if ((this.form.timeType == 0 && !this.form.effectiveStartTime) || (this.form.timeType == 0 && !this.form.effectiveEndTime)) {
        this.$refs['twoTimer'].valiteValue();
        return;
      }
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const {
            id,
            // experienceName,
            // experienceSubtitle,
            // assetsType,
            coinId,
            // positionType,
            // entrustType,
            // leverage,
            faceValue,
            marketId,
            effectiveStartTime,
            effectiveEndTime,
            status,
            timeType,
            effectiveDay,
            ...repo
          } = this.form;
          const params = {
            // 这里补充一个coinMarket(币对的name)
            coinMarket: this.symbolList.filter((v) => v['value'] == coinId)[0].label || '',
            coinId,
            status: status ? 1 : 0,
            faceValue: +faceValue,
            timeType: +timeType,
            marketId: marketId, // 目前约定写死了USDT
            ...repo,
          };
          // 判断传得是日期还是天数？
          if (timeType == 0) {
            params.effectiveStartTime = this.formatTime(effectiveStartTime);
            params.effectiveEndTime = this.formatTime(effectiveEndTime);
          } else if (timeType == 1) {
            params.effectiveDay = +effectiveDay;
          }
          
          !id ? Object.assign(params) : Object.assign(params, { id });
          this.btnLoading = true;
          // 新增 编辑
          //console.log('id',id)
          const res = !id ? await $api.createExperience(params) : await $api.editExperience(params);
          if (res) {
            let txt = !id ? '添加成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
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
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getQueryExperienceList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        records.forEach((v) => {
          v['status'] = v['status'] ? true : false;
          // 直接写死资产币种
          v['marketIdmy'] = 'USDT';
        });
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
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
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    // 对输入值的范围进行限制
    checkVal(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '');
      if (this[obj][val] < 0) {
        this[obj][val] = 0;
      }
    },
    // 对输入值的范围进行限制2
    checkVal2(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d,]/g, '');
      this[obj][val] = (this[obj][val] + '').replace(/,,/g, ',');
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('VoucherList', voucherListCol, voucherListColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(voucherListConfig);

    this.$store.dispatch('common/getSymbolListContract').then(() => {
      this.symbolList = this.$store.state.common.symbollistContract;
      if (this.symbolList.length) {
        let tmp = {
          label: this.symbolList[0].marketCoinName,
          value: this.symbolList[0].marketId,
        };
        this.coinList.push(tmp);
      }
    });

    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    // this.$store.dispatch('common/getCoinList').then(() => {
    //   this.coinList = this.$store.state.common.coinlist;
    // });

    this.getList();
  },
};
</script>
<style lang="scss">
.voucherList-container {
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

  .next-line {
    margin-top: 25px;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      list-style-type: none;
      margin-bottom: 5px;
      padding: 0;
      li {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        // border-radius: 5px;
        // box-shadow:1px 1px 2px 2px #ccc;rgba(0,0,0,.5)
        // box-shadow: 1px 2px 6px #ccc;
        > div {
          margin: 0 10px 10px 0;
          width: 14%;
          min-width: 100px;
          &:first-child {
            width: auto;
          }
          &.del-btn {
            width: 80px;
            margin-left: 10px;
          }
          &.radio-item {
            min-width: 285px;
            width: 25%;
          }
        }
      }
    }
  }

  .middle {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
