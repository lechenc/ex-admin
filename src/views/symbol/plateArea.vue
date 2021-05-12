<template>
  <div class="plateArea-container">
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addChain">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>
    <!-- 添加 编辑 -->
    <el-dialog width="600px" :title="formName" :visible.sync="dialogFormVisible">
      <el-form :label-width="formLabelWidth" :model="chainForm" ref="chainForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="板块名称" prop="name">
              <el-input v-model="chainForm.name" autocomplete="off" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="板块描述" prop="desc">
              <el-input rows="3" v-model="chainForm.desc" autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="英文描述" prop="descEn">
              <el-input rows="3" v-model="chainForm.descEn" autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <template v-for="(symbolGroup, index) in chainForm.list">
          <el-form
            :key="index"
            :label-width="formLabelWidth"
            :model="symbolGroup"
            :rules="{
              symbol1: [
                {
                  required: true,
                  message: '必填',
                  trigger: 'blur',
                },
              ],
              iconUrl: [
                {
                  required: true,
                  message: '必填',
                  trigger: 'blur',
                },
              ],
            }"
          >
            <el-row class="my-row" :span="24">
              <el-col :span="12">
                <el-form-item label="交易对" prop="symbol1">
                  <el-select v-model="symbolGroup.symbol1" placeholder="请选择">
                    <el-option v-for="item in symbollist" :label="item.label" :value="item.value" :key="item.value"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label-width="100px" label="是否合约">
                  <el-switch v-model="symbolGroup.sort" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :class="{ 'my-border': index + 1 != chainForm.list.length }" class="my-row" :gutter="10" :span="24">
              <el-col :span="21">
                <el-form-item label="icon" prop="img">
                  <el-input size="small" placeholder="请输入链接" v-model="symbolGroup.img">
                    <el-upload accept=".png,.img" :action="$img_api" multiple name="file" :data="{ type: 'exchange' }" :show-file-list="false" :before-upload="beforeUpload" :on-success="uploadIcon" :on-error="uploadError" slot="append" :limit="1" :on-exceed="exceed" ref="iconDot">
                      <el-button size="small" @click="getUploadIconIndex(index)" type="primary">点击上传</el-button>
                    </el-upload>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <el-button type="danger" @click="delSymbolGroups(index)" size="small" round>删除</el-button>
              </el-col>
            </el-row>
          </el-form>
        </template>

        <el-row class="my-add" type="flex" :span="24" justify="center">
          <el-button @click="addSymbolGroups" size="small" type="primary"> +添加交易对 </el-button>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="谷歌验证码" prop="chainName">
              <el-input v-model="chainForm.chainName" autocomplete="off" type="text"></el-input>
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
import { plateAreaCol, plateAreaColNoBtn } from '@/config/column/symbol';
import { parseTime } from '@/utils/index';
import $api from '@/api/api';

export default {
  name: 'PlateArea',
  components: {
    Btable,
    Bsearch,
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
      chainForm: {},
      rules: {
        chainName: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        chainName1: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
      },
      formName: '',
      formLabelWidth: '100px',
      symbollist: [],
      cowIndex: '',
    };
  },
  filters: {
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
  },
  methods: {
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    beforeUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1);
      const extension = testmsg === 'jpg' || testmsg === 'png';
      const isLt2M = file.size / 1024 / 1024 < 4;
      if (!extension) {
        this.$message({
          message: '上传文件只能是 jpg、png格式!',
          type: 'error',
        });
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 4MB!',
          type: 'error',
        });
      }
      return extension && isLt2M;
    },
    getUploadIconIndex(index) {
      //console.log('index', index);
      this.cowIndex = index;
    },
    uploadIcon(response, file, fileList) {
      //console.log('response', response);
      //console.log('file', file);

      this.chainForm.list[this.cowIndex].iconUrl = response.data[0].url;
    },
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑币种
      if (fn === 'edit') {
        this.formName = '编辑链类型';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['chainForm'].resetFields();
          const { id, chainName } = row;
          this.chainForm = {
            id,
            chainName,
          };
        });
      }
      if (fn === 'detail') {
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
            const res = await $api.setDeleteChain(params);
            if (res) {
              this.$message({
                type: 'success',
                message: '删除成功!',
              });
              this.getList();
            }
          })
          .catch(() => {
            // this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    addSymbolGroups() {
      //console.log('chainForm.list', this.chainForm.list);
      this.chainForm.list.push({
        symbol1: '',
        sort: false,
        img: '',
      });
    },
    delSymbolGroups(index) {
      this.chainForm.list.splice(index, 1);
      //console.log('this.chainForm.list', this.chainForm.list);
    },
    // 添加链类型
    addChain() {
      this.formName = '添加';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.chainForm = {
          name: '',
          desc: '',
          descEn: '',
          list: [],
        };
        this.addSymbolGroups();
      });
    },
    // asdasd(){
    //       const { id, chainName } = this.chainForm;
    //       const params = {
    //         chainName: chainName,
    //       };
    //       this.btnLoading = true;
    //       // 新增 编辑
    //       const res =
    //         id === ''
    //           ? await $api.setAddChain(params)
    //           : await $api.setUpdateChain({
    //               id,
    //               ...params,
    //             });
    //       if (res) {
    //         let txt = id === '' ? '添加成功' : '编辑成功';
    //         this.$message({
    //           message: res.data.message,
    //           type: 'success',
    //         });
    //         this.dialogFormVisible = false;
    //         this.getList();
    //       }
    //       this.btnLoading = false;
    // },

    // 提交
    confirmOp() {
      this.$refs['chainForm'].validate((valid) => {
        if (valid) {
          var ret = this.chainForm.list.some((v) => {
            if (!v.symbol1 || !v.img) {
              return true;
            }
          });
          if (ret) return this.$message.error('请补充表格');
        }
      });
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
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getApiKeyConfigList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
        this.listLoading = false;
      }
    },
    async getSymbolList() {
      // 交易对获取
      this.$store.dispatch('common/getSymbolListContract').then(() => {
        this.symbollist = this.$store.state.common.symbollistContract;
      });
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('PlateArea', plateAreaCol, plateAreaColNoBtn);
    //console.log('authObj', authObj);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.getList();
    this.getSymbolList();
  },
};
</script>

<style lang="scss" scoped>
.plateArea-container {
  padding: 4px 20px 10px 20px;

  .container-top {
    margin: 10px 0;
  }
  .my-row {
    display: flex;
    align-items: center;
    padding: 13px 0;

    .el-form-item {
      margin-bottom: 5px;
    }
    /deep/.el-form-item__error {
      padding-top: 0 !important;
    }
  }
  .my-border {
    border-bottom: 1px dashed #000;
  }

  .my-add {
    margin-bottom: 11px;
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
