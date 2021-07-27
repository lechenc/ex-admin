<template>
  <div class="treatyAssetsContract-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div v-if="isCURDAuth" class="container-btn">
      <el-button type="primary" size="medium" @click="addCoin">添加主题</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加 编辑 -->

    <el-dialog :title="formName" width="500px" :visible.sync="dialogFormVisible">
      <el-form :model="cForm" ref="cForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="主题名称" :label-width="formLabelWidth" prop="themeName">
              <el-input type="text" v-model="cForm.themeName" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="主题文案" :label-width="formLabelWidth" prop="themeContent">
              <el-input type="textarea" v-model="cForm.themeContent" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="上传主题图片" :label-width="formLabelWidth" prop="themeImgUrl">
              <el-input  size="small" v-model="cForm.themeImgUrl" placeholder="请选择上传">
                <el-upload accept=".png,.img" :action="$img_api" multiple name="file" :data="{ type: 'exchange' }" :show-file-list="false" :on-success="uploadIcon" :on-error="uploadError" slot="append" :limit="1" :on-exceed="exceed" ref="iconDot">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="是否启用" :label-width="formLabelWidth" prop="themeStatus">
              <el-switch v-model="cForm.themeStatus" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
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
import { redPacketSubjectCol, redPacketSubjectNoBtn, redPacketSubjectConfig } from '@/config/column/redPacket';
import $api from '@/api/api';

export default {
  name: 'RedPacketSubject',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    const noEmpty = (rule, value, callback) => {
      if (value.trim() === '') {
        return callback(new Error(rule.message));
      }
      callback();
    };
    return {
      isCURDAuth:false,
      rules: {
        themeName: [
          { required: true, message: '必填', trigger: 'blur' },
          {
            validator: noEmpty,
            message: '必填',
            trigger: 'blur',
          },
        ],
        themeContent: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 1, max: 4, message: '长度在 1 到 4 个字符', trigger: 'blur' },
          {
            validator: noEmpty,
            message: '必填',
            trigger: 'blur',
          },
        ],
        themeImgUrl: [
          { required: true, message: '必填', trigger: 'blur' },
          {
            validator: noEmpty,
            message: '必填',
            trigger: 'blur',
          },
        ],
      },
      formLabelWidth: '120px',
      cForm: {
        id: '',
        themeName: '',
        themeContent: '',
        themeImgUrl: '',
        themeStatus: false,
      },
      btnLoading: false,
      formName: '添加主题',
      dialogFormVisible: false,
      listLoading: false, // 表格loading
      calLoading: false,
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      symbollist: [],
      toDay: '',
      ago: '',
      rowObj: {},
      coin_List: [],
    };
  },
  watch: {
    dialogFormVisible(newVal) {
      if (!newVal) {
        this.cForm = {
          id: '',
          themeName: '',
          themeContent: '',
          themeImgUrl: '',
          themeStatus: false,
        };
      }
    },
  },
  methods: {
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    uploadIcon(response, file, fileList) {
      if (!response.data) {
        this.$message.error('图片上传失败');
        this.$refs.iconDot.clearFiles();
        return;
      }
      this.cForm.themeImgUrl = response.data[0].url;
      this.$refs.iconDot.handleRemove(file);
      this.$refs.iconDot.clearFiles();
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (val === 'minAmount' || val === 'maxAmount') {
        this.cForm[val] = (this.cForm[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/, '$1$2.$3');
      }

      if (this.cForm[val] < 0) {
        this.cForm[val] = 0;
      }
    },
    async confirmOp() {
      this.$refs['cForm'].validate(async (valid) => {
        if (valid) {
          let { id, ...repo } = this.cForm;
          let params = {
            ...repo,
          };
          if (Number(params.minAmount) > Number(params.maxAmount)) {
            return this.$message.error('红包最小额不得大于红包最大额');
          }
          params.themeStatus = this.cForm.themeStatus ? 1 : 0;
          id === '' ? params : Object.assign(params, { id });
          this.btnLoading = true;
          const res = !id ? await $api.addRedPacketSubject(params) : await $api.editRedPacketSubject(params);
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    addCoin() {
      this.formName = '添加主题';
      this.dialogFormVisible = true;
    },
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑档位
      if (fn == 'edit') {
        this.formName = '编辑主题';
        this.dialogFormVisible = true;
        const { themeName, themeContent, themeImgUrl, themeStatus, id } = row;
        this.cForm = {
          themeName,
          themeContent,
          themeImgUrl,
          themeStatus: themeStatus ? true : false,
          id,
        };
      }
      if (fn === 'status') {
        let params = {
          id: row.id,
          themeStatus: row.themeStatus ? 1 : 0,
        };
        const res = await $api.editRedPacketSubject(params);
        if (res) {
          this.$message({ message: '切换成功', type: 'success' });
          this.getList();
        } else {
          this.getList();
        }
      }
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

    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      // this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getredPacketSubjectList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach((v) => {
          v.themeStatus = v.themeStatus ? true : false;
        });
        this.list = records;
      }
      this.listLoading = false;
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
      if (this.search_params_obj.coinMarket) {
        if (/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)) {
          let tmpName = '';
          tmpName = this.symbollist.filter((v) => v['id'] == this.search_params_obj.coinId)[0].value;
          this.search_params_obj.coinMarket = tmpName;
        }
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    async getSymbolList() {
      this.$store.dispatch('common/getCoinList').then(() => {
        this.coin_List = this.$store.state.common.coinlist;
        this.searchCofig[0]['list'] = this.$store.state.common.coinlist;
      });
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('RedPacketSubject', redPacketSubjectCol, redPacketSubjectNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(redPacketSubjectConfig);
    // 初始化今天，和前天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
    this.getSymbolList();
  },
};
</script>
<style scope lang="scss">
.treatyAssetsContract-container {
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
}
</style>
