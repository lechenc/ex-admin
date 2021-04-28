<template>
  <div class="lotteryParams-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="true">
      <el-button type="primary" size="medium" @click="addLine">添加奖励</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="600px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="奖励类型" prop="prizeType" :label-width="labelWidth">
          <el-select v-model="form.prizeType" placeholder="请选择" style="width: 180px" @change="checkFormItem">
            <el-option v-for="(item, index) in labelArr" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="体验金券编号" prop="relationExperienceId" :label-width="labelWidth" v-if="isExperienceLabel">
          <el-input type="text" placeholder="请输入" v-model="form.relationExperienceId"> </el-input>
        </el-form-item>
        <el-form-item label="奖励名称" prop="prizeName" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.prizeName" maxlength="30"> </el-input>
        </el-form-item>

        <el-form-item label="名称副标题" prop="prizeSubtitle" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="form.prizeSubtitle" maxlength="30"> </el-input>
        </el-form-item>

        <el-form-item label="奖励logo" prop="prizeLogo" :label-width="labelWidth">
          <el-input size="small" v-model="form.prizeLogo" placeholder="请选择上传">
            <el-upload :action="$img_api" multiple name="file" :data="{ type: 'exchange' }" :on-success="uploadZh" slot="append" :before-upload="onBeforeUpload" :on-error="uploadError" :limit="1" :on-exceed="exceed" ref="upzh">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-input>
        </el-form-item>
        <el-form-item label="奖品中后有效期" prop="effectiveDay" :label-width="labelWidth">
          <el-input type="number" placeholder="请输入" v-model="form.effectiveDay" @input="checkVal('effectiveDay')"> </el-input>
        </el-form-item>

        <!-- <el-form-item label="奖品币种" prop="coinId" :label-width="labelWidth" >
          <el-select v-model="form.coinId" placeholder="请选择" style="width:180px;">
            <el-option v-for="(item, index) in coinList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item> -->
        <!-- <el-form-item label="奖励数量" prop="amount" :label-width="labelWidth" >
          <el-input type="label" placeholder="请输入" v-model="form.amount"> </el-input>
        </el-form-item> -->
        <el-form-item label="奖励内容描述" prop="prizeDescribe" :label-width="labelWidth">
          <el-input type="textarea" rows="5" placeholder="请输入" v-model="form.prizeDescribe"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    <!-- 调账详情，审核 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogDetailVisible" width="600px">
      <el-form>
        <el-row>
          <el-col :span="12">
            <el-form-item label="奖励类型" :label-width="formLabelWidth">{{ typeDiy(curRow.prizeType) }}</el-form-item>
          </el-col>
        </el-row>
        <el-row  v-if="curRow.prizeType == 2">
          <el-col :span="12">
            <el-form-item label="体验金券编号" :label-width="formLabelWidth">{{ curRow.relationExperienceId }}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="奖励名称" :label-width="formLabelWidth">{{ curRow.prizeName }}</el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="curRow.prizeLogo">
          <el-col :span="12" >
            <el-form-item label="奖励logo" :label-width="formLabelWidth">
              <img class="img-detail" :src="curRow.prizeLogo" alt="" />
            </el-form-item>
          </el-col>
        </el-row>
                <el-row>
          <el-col :span="12">
            <el-form-item label="奖品中后有效期" :label-width="formLabelWidth">{{ curRow.effectiveDay }} 天</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="奖励内容描述" :label-width="formLabelWidth">{{ curRow.prizeDescribe }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="middle">
        <el-button type="primary" @click="dialogDetailVisible = false" size="medium">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { lotteryParamsCol, lotteryParamsColNoBtn, lotteryParamsConfig } from '@/config/column/lottery';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'LotteryParams',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      delBtnLoading: false, // 移出提交loading
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数

      title: '',
      labelWidth: '120px',
      formLabelWidth: '140px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        id: '',
        prizeType: '',
        relationExperienceId: '',
        prizeName: '',
        prizeLogo: '',
        prizeDescribe: '',
        effectiveDay:''
      },
      rules: {
        prizeSubtitle: [{ required: true, message: '必填' }],
        relationExperienceId: [{ required: true, message: '必填' }],
        prizeType: [{ required: true, message: '必填' }],
        prizeName: [{ required: true, message: '必填' }],
        prizeLogo: [{ required: true, message: '必填' }],
        prizeDescribe: [{ required: true, message: '必填' }],
        effectiveDay: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
      isExperienceLabel: true, //  
      labelArr: [{ label: '体验金券奖品', value: 2 }, { label: '其他奖品', value: 3 }], // 奖品类型 { label: '币种奖品', value: 1 }, 
      prizeUidArr: [], // 奖励支出UID列表
      coinList: [], // 币种列表

      dialogDetailVisible: false, // 是否移出
      dialogTitle: '',
    };
  },
  methods: {
        onBeforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 8;
      if (!isLt2M) {
        this.$message.error('上传文件大小不能超过 8 MB！');
      }
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    uploadZh(response, file, fileList) {
      this.form.prizeLogo = response.data[0].url;
      this.$refs.upzh.handleRemove(file);
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    // 获取奖励支出UID
    async getSubExpendUserList() {
      const res = await $api.getSubExpendUserList({ pageNum: 1, pageSize: 1000 });
      if (res.data) {
        this.prizeUidArr = res.data.data.records;
      }
    },
    typeDiy(val) {
      if (!val && val != 0) return '';
      return (this.labelArr.length && this.labelArr.filter(f => f.value == val)[0] && this.labelArr.filter(f => f.value == val)[0].label) || '';
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'edit') {
        this.title = '编辑奖励参数';
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.checkFormItem(row.prizeType);
          this.$refs['form'].resetFields();
          this.form = {
            id: row.id,
            prizeSubtitle: row.prizeSubtitle,
            prizeType: row.prizeType,
            relationExperienceId: row.relationExperienceId,
            prizeName: row.prizeName,
            prizeLogo: row.prizeLogo,
            prizeDescribe: row.prizeDescribe,
            effectiveDay: row.effectiveDay
          };
        });
      }
      if (fn === 'del') {
        this.$confirm('删除后不可恢复,请谨慎操作？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: row.id,
            };
            const res = await $api.getActivityPrizeDelete(params);
            if (res) {
              this.$message({ type: 'success', message: '删除操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消删除' });
          });
      }
      if (fn === 'detail') {
        this.curRow = row;
        this.dialogDetailVisible = true; // 是否移出
        this.dialogTitle = '奖励参数详情';
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
      this.getList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    addLine() {
      this.title = '添加奖励参数';
      this.isExperienceLabel = true;
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.form = {
          id: '',
          prizeSubtitle:'',
          prizeType: '',
          relationExperienceId: '',
          prizeName: '',
          prizeLogo: '',
          prizeDescribe: '',
          effectiveDay:''
        };
        this.$refs['form'].resetFields();
      });
    },
    // 提交
    confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { id, prizeType, prizeDescribe, prizeName, relationExperienceId, prizeLogo,prizeSubtitle,effectiveDay } = this.form;
          let params = {};
          if (this.isExperienceLabel) {
            params = {
              prizeType,
              relationExperienceId,
              prizeName,
              prizeLogo,
              prizeDescribe,
              prizeSubtitle,
              effectiveDay
            };
          } else {
            params = {
              prizeType,
              prizeName,
              prizeLogo,
              prizeDescribe,
              prizeSubtitle,
              effectiveDay
            };
          }
          !id ? Object.assign(params) : Object.assign(params, { id });
          this.btnLoading = true;
          // 新增 编辑
          const res = !id ? await $api.getActivityPrizeAdd(params) : await $api.getActivityPrizeUpdate(params);
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
    // 更改币种类型则联动，部分字段显隐
    checkFormItem(val) {
      this.isExperienceLabel = parseInt(val) == 2 ? true : false;
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
      const res = await $api.getActivityPrizeList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // records.forEach(v => {
        //   v['amount'] = v['prizeType'] == 2 ? '--' : v['amount'];
        //   v['prizeTypeName'] = v['prizeType'] == 2 ? '非币种奖品' : v['prizeType'] == 1 ? '币种奖品' : '谢谢参与';
        // });
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        // let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        // let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        // this.searchCofig[0].value = [befV, nowV];
        // params.endTime = nowV.replace(/\//gi, '-');
        // params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    // 控制输入的范围
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('LotteryParams', lotteryParamsCol, lotteryParamsColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(lotteryParamsConfig);
    this.$store.dispatch('common/getCoinList').then(() => {
      this.coinList = this.$store.state.common.coinlist;
    });

    this.getList();
    this.getSubExpendUserList();
  },
};
</script>
<style lang="scss">
.lotteryParams-container {
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
  .img-detail {
    width: 150px;
    height: 150px;
    display: inline-block;
  }

  .upload-wrap {
    width: 400px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    .space {
      width: 50px;
      height: 1px;
      display: inline-block;
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
}
</style>
