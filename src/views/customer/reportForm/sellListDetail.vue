<template>
  <div class="appealJudge-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>订单信息</H3>
        <div>
          <Btable :listLoading="infoLoading" :data="list" :configs="configs" />
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="box-card-con">
        <div class="card-info">
          <div class="card-info-panel" v-if="isBuyProEmpty">
            <H3>买方申诉信息</H3>
            <div class="line header">
              <span>姓名: {{ buyProofInfo.realName }}</span>
              <span>账号:{{ buyProofInfo.phone }}</span>
            </div>
            <div class="line">
              <div class="title">申诉原因</div>
              <div class="content">{{ buyProofInfo.appealReason }}</div>
            </div>
            <div class="line">
              <div class="title">申诉凭证</div>
              <div class="img-list">
                <viewer :options="options">
                  <img :src="buyProofInfo.proofImg" alt="" />
                </viewer>
              </div>
            </div>
            <div class="line">
              <span>申诉凭证描述: {{ buyProofInfo.proofTxt }}</span>
            </div>
            <div class="line">
              <span>申诉时间: {{ buyProofInfo.createTime | typeTime }}</span>
            </div>
          </div>
          <div class="card-info-panel" v-if="isSaleProEmpty">
            <H3>卖方申诉信息</H3>
            <div class="line header">
              <span>姓名: {{ saleProofInfo.realName }}</span>
              <span>账号:{{ saleProofInfo.phone }}</span>
            </div>
            <div class="line">
              <div class="title">申诉原因</div>
              <div class="content">{{ saleProofInfo.appealReason }}</div>
            </div>
            <div class="line">
              <div class="title">申诉凭证</div>
              <div class="img-list">
                <viewer :options="options">
                  <img :src="saleProofInfo.proofImg" alt="" />
                </viewer>
              </div>
            </div>
            <div class="line">
              <span>申诉凭证描述: {{ saleProofInfo.proofTxt }}</span>
            </div>
            <div class="line">
              <span>申诉时间: {{ saleProofInfo.createTime | typeTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="box-card" v-if="isJudgeEnd">
      <div class="box-card-con">
        <H3>判决结果</H3>
        <el-form>
          <el-form-item label="裁决结果">
            <div>{{ curRow.type | winFilter }}</div>
          </el-form-item>
          <el-form-item label="客服处理买家结果">
            <div>{{ curRow.buyerResult | buyerFilter }}</div>
          </el-form-item>
          <el-form-item label="裁决结果">
            <div>{{ curRow.sellerResult | sellerFilter }}</div>
          </el-form-item>
          <el-form-item label="备注">
            <div>{{ curRow.auditComment }}</div>
          </el-form-item>
          <el-form-item label="处理时间">
            <div>{{ curRow.auditTime | typeTime }}</div>
          </el-form-item>
          <el-form-item label="处理人">
            <div>{{ curRow.auditUserName }}</div>
          </el-form-item>
          <el-form-item label="处理人IP">
            <div>{{ curRow.auditIp }}</div>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card class="box-card" v-if="pageStatus === 'judgment'">
      <div class="box-card-con">
        <H3>判决</H3>
        <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
          <el-row>
            <el-col :span="8">
              <el-form-item label="裁决结果" prop="appealResult">
                <el-select v-model="ruleForm.appealResult" placeholder="请选择" style="width:320px;" :disabled="!isModify">
                  <el-option v-for="(item, idx) in judgmentList" :key="idx" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="处罚买方" prop="buyerResult">
                <el-select v-model="ruleForm.buyerResult" placeholder="请选择" :disabled="!isModify">
                  <el-option v-for="(item, idx) in punishBuyList" :key="idx" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="处罚卖方" prop="salerResult">
                <el-select v-model="ruleForm.salerResult" placeholder="请选择" :disabled="!isModify">
                  <el-option v-for="(item, idx) in punishSellList" :key="idx" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="备注" prop="appealRemark">
              <el-input type="textarea" rows="4" placeholder="请输入" v-model="ruleForm.appealRemark" :disabled="!isModify"> </el-input>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </el-card>

    <el-card class="box-card" v-else-if="pageStatus === 'edit'">
      <div class="box-card-con">
        <H3>修改金额</H3>
        <el-form :model="editForm" ref="editForm" :rules="eRules">
          <el-row>
            <el-col :span="8">
              <el-form-item label="修改金额" prop="money">
                <el-input type="text" placeholder="请输入" v-model.trim="editForm.money" :disabled="!isModify"> </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>

    <div class="container-footer" v-if="pageStatus !== 'detail' && !hasEmit">
      <div v-if="!isModify">
        <el-button type="primary" @click.stop="confirmOp" v-if="pageStatus === 'judgment'">我要处理申诉</el-button>
        <el-button type="primary" @click.stop="confirmOp" v-if="pageStatus === 'edit'">修改金额</el-button>
      </div>
      <div v-else>
        <el-button type="primary" @click.stop="isModify = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmSend" :loading="btnLoading">最终判决</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Btable from '@/components/table/b-table';
import { appealDetailCol } from '@/config/column/customer';
import $api from '@/api/api';
import { parseTime } from '@/utils/index';
import activePage from '@/mixin/keepPage';

export default {
  name: 'SellListDetail',
  components: {
    Btable,
  },
  mixins: [activePage],
  data() {
    return {
      pageStatus: '', // 页面状态
      btnLoading: false, // 提交
      isModify: false, // 是否可修改
      isJudgeEnd: false, // 是否判断结束，结束就要展示结果
      infoLoading: false, // 基本信息表格loading
      hasEmit: false, // 是否修改提交了（提交了就不展示填写得下半部分页面了）
      list: [], //基本列表
      curRow: {}, // 传入得到的该条数据

      configs: [], // 基本列表列配置

      rowId: '',
      tradeId: '',
      appealId: '',

      buyProofInfo: {}, // 买方申诉信息
      saleProofInfo: {}, // 买方申诉信息
      isBuyProEmpty: false, // 买方申诉信息是否存在
      isSaleProEmpty: false, // 买方申诉信息是否存在

      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数

      curObj: null, // 当前展示的数据对象
      ruleForm: {
        appealId: '',
        appealResult: 1, //判断输赢
        buyerResult: 0, //处理买方
        salerResult: 0, //处理卖方
        appealRemark: '', //备注
        secret: '', //谷歌验证码
      },
      rules: {
        appealRemark: [{ required: true, message: '备注不能为空', trigger: 'blur' }],
      },

      editForm: {
        money: '',
      },
      eRules: {
        money: [{ required: true, message: '备注不能为空', trigger: 'blur' }],
      },
      // 裁决结果列表
      judgmentList: [{ label: '买方胜诉（卖家的币放行，直接打给买方）', value: 2 }, { label: '卖方胜诉（卖家的币取消锁定）', value: 1 }],
      // 处罚买方列表
      punishBuyList: [{ label: '不惩罚', value: 0 }, { label: '24小时之内不能交易', value: 1 }, { label: '永远不能交易', value: 2 }],
      // 处罚卖方列表
      punishSellList: [{ label: '不惩罚', value: 0 }, { label: '24小时之内不能交易', value: 1 }, { label: '永远不能交易', value: 2 }],
      options: {
        inline: false,
        button: false,
        navbar: false,
        title: false,
        toolbar: false,
        tooltip: false,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: false,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: 'data-source',
      },
    };
  },
  filters: {
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
    winFilter(v) {
      if (v == 2) {
        return '买方胜诉（卖家的币放行，直接打给买方）';
      } else if (v == 1) {
        return '卖方胜诉（卖家的币取消锁定）';
      } else {
        return '';
      }
    },
    buyerFilter(v) {
      if (v == 0) {
        return '默认不惩罚';
      } else if (v == 1) {
        return '24小时不能交易';
      } else if (v == 2) {
        return '永远不能交易';
      } else {
        return '无';
      }
    },
    sellerFilter(v) {
      if (v == 0) {
        return '默认不惩罚';
      } else if (v == 1) {
        return '24小时不能交易';
      } else if (v == 2) {
        return '永远不能交易';
      } else {
        return '无';
      }
    },
  },
  methods: {
    // 修改前要提示
    confirmOp() {
      this.isModify = true;
      this.$refs['ruleForm'].resetFields();
    },
    // 提交修改结果
    confirmSend() {
      if (this.pageStatus === 'judgment') {
        this.appealJudgment();
      } else {
        this.appealChangeMoney();
      }
      // let title = '';
      // let desc = '';
      // if (this.pageStatus === 'judgment') {
      //   title = '最终判决';
      //   desc = '判决后该申诉订单结束,不可再作修改,请谨慎操作';
      // } else {
      //   title = '最终判决';
      //   desc = '修改金额后,订单金额会发生变化,不影响最终申诉结果';
      // }
      // this.$confirm(desc, title, { confirmButtonText: '确定', cancelButtonText: '取消', center: true })
      //   .then(async () => {
      //   })
      //   .catch(() => {
      //     //console.log('cancel');
      //   });
    },
    // 修改金额上报
    async appealChangeMoney() {
      if (!(this.editForm.money > 0)) {
        this.$notify({
          title: '提示',
          message: `请输入金额`,
          type: 'error',
        });
        return;
      }
      let params = {
        appealId: this.appealId,
        money: Number(this.editForm.money),
      };
      this.btnLoading = true;
      const res = await $api.getAppealChangeMoney(params);
      if (res) {
        this.$message({ message: '修改金额成功', type: 'success' });
        this.isModify = false;
        this.hasEmit = true;
        //  this.getBuyList();
      }
      this.btnLoading = false;
    },
    // 判决 上报
    async appealJudgment() {
      this.$refs['ruleForm'].validate(async valid => {
        if (valid) {
          let title = '最终判决';
          let desc = '判决后该申诉订单结束,不可再作修改,请谨慎操作';
          this.$confirm(desc, title, { confirmButtonText: '确定', cancelButtonText: '取消', center: true })
            .then(async () => {
              const { appealId, secret, ...repo } = this.ruleForm;
              let params = {
                appealId: this.appealId,
                ...repo,
              };
              this.btnLoading = true;
              const res = await $api.putaAdjustAppeal(params);
              if (res) {
                this.$message({ message: '裁决成功', type: 'success' });
                this.isModify = false;
                // 把详情页和列表页从keep-alive中缓存,保证返回后列表页数据状态是最新的
                this.reloadTagsPage('/fiat/appealJudge');
                this.reloadTagsPage('/fiat/appeal');
                // this.getBuyList()
              }
              this.btnLoading = false;
              this.$router.go(-1);
            })
            .catch(() => {
              //console.log('cancel');
            });
        }
      });
    },
    // 申诉信息
    async getDetail(_id) {
      if (this.dealLoading) return;
      const query_data = {
        // appealId: this.appealId,
        id: this.rowId,
      };
      this.dealLoading = true;
      const res = await $api.getProofInfoNew(query_data);
      if (res) {
        this.buyProofInfo = res.data.data.buyAppeal;
        this.isBuyProEmpty = !this.$util.isEmptyObject(this.buyProofInfo) ? true : false;
        this.saleProofInfo = res.data.data.sellAppeal;
        this.isSaleProEmpty = !this.$util.isEmptyObject(this.saleProofInfo) ? true : false;
        // res.data.result.forEach((val, idx) => {
        //   if (val.isBuyer == 1) {
        //     this.buyProofInfo = val;
        //     this.isBuyProEmpty = !this.$util.isEmptyObject(this.buyProofInfo) ? true : false;
        //   } else {
        //     this.saleProofInfo = val;
        //     this.isSaleProEmpty = !this.$util.isEmptyObject(this.saleProofInfo) ? true : false;
        //   }
        // });
      }
      this.dealLoading = false;
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD hh:mm:ss');
    },
    initFunc() {
      // let tmpId = this.$route.params.id;
      this.rowId = this.$route.query.id;
      // this.tradeId = this.$route.query.tradeId;
      // this.appealId = this.$route.query.appealId;
      this.curRow = this.$route.query.row;
      this.list.push(this.curRow);

      let tmpLabel = this.$route.query.label;
      // 详情状态不可编辑
      if (tmpLabel === 'judgment') {
        this.isModify = false;
      } else if (tmpLabel === 'edit') {
        this.isModify = false;
      } else if (tmpLabel === 'detail') {
        this.isModify = false;
        // 只有处于1胜诉2败诉，才在详请状态展示出来申诉判决结果
        if (this.curRow.appealStatus == 1 || this.curRow.appealStatus == 2) {
          this.isJudgeEnd = true;
        }
      }
      this.configs = appealDetailCol;
      this.pageStatus = tmpLabel;
      this.getDetail();
    },
  },
  // mounted() {
  //   this.initFunc();
  // },
  activated() {
    if (this.isInTags()) {
      return;
    }
    this.isModify = false; // 是否可修改
    this.isJudgeEnd = false; // 是否判断结束，结束就要展示结果
    this.infoLoading = false; // 基本信息表格loading
    this.hasEmit = false; // 是否修改提交了（提交了就不展示填写得下半部分页面了）
    this.list = []; //基本列表
    this.curRow = {}; // 传入得到的该条数据
    this.ruleForm = {
      appealId: '',
      appealResult: 1, //判断输赢
      buyerResult: 0, //处理买方
      salerResult: 0, //处理卖方
      appealRemark: '', //备注
      secret: '', //谷歌验证码
    };

    this.configs = []; // 基本列表列配置

    this.tradeId = '';
    this.appealId = '';

    this.buyProofInfo = {}; // 买方申诉信息
    this.saleProofInfo = {}; // 买方申诉信息
    this.isBuyProEmpty = false; // 买方申诉信息是否存在
    this.isSaleProEmpty = false; // 买方申诉信息是否存在

    this.current_page = 1; // 当前页码
    this.pageSize = 10; // 当前每页显示页码数
    this.total = 0; // 总条数
    this.pages = 0; // 总页数
    this.initFunc();
  },
};
</script>
<style lang="scss">
.appealJudge-container {
  padding: 4px 10px 10px 10px;

  .container-top {
    margin: 10px 0;
  }

  .container-footer {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    // span {
    //   font-size: 14px;
    //   // color: #606266;
    //   height: 28px;
    //   line-height: 28px;
    // }
  }

  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }

  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      h3::before {
        content: '';
        border-left: 5px solid #03a7f0;
        margin-right: 10px;
      }
      .card-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        h3::before {
          content: '';
          border-left: 5px solid #03a7f0;
          margin-right: 10px;
        }
        .card-info-panel {
          width: 47%;
          margin-right: 3%;
          padding: 20px;
          font-size: 18px;
          line-height: 40px;
          border: 1px solid #d7d7d7;
          h3 {
            font-size: 18px;
            color: #000;
            font-weight: 700;
          }
          h3::before {
            content: '';
            border-left: 5px solid #03a7f0;
            margin-right: 10px;
          }
          .line {
            margin-bottom: 15px;
            .title {
              font-size: 16px;
              color: #000;
            }
            .content {
              padding: 10px;
              font-size: 16px;
              color: #000;
              border: 1px solid #eee;
              border-radius: 5px;
            }
            .img-list {
              width: 100%;
              height: 240px;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: auto;
                max-height: 220px;
              }
            }
            span {
              font-size: 16px;
            }
          }
          .line.header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }
    }
  }
}
@media screen and(max-width: 750px) {
  .appealJudge-container {
    .box-card {
      margin-bottom: 20px;
      .box-card-con {
        .card-info {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          .card-info-panel {
            width: 100%;
            .line .img-list {
              width: 100%;
              height: 160px;
              img {
                width: auto;
                max-height: 160px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
