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
              <el-input :disabled='isDetail' v-model="chainForm.name" autocomplete="off" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="板块描述" prop="desc">
              <el-input :disabled='isDetail'  rows="3" v-model="chainForm.desc" autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="英文描述" prop="descEn">
              <el-input :disabled='isDetail' rows="3" v-model="chainForm.descEn" autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <template v-for="(symbolGroup, index) in chainForm.pairList">
          <el-form
            :key="index"
            :label-width="formLabelWidth"
            :model="symbolGroup"
            :rules="{
              tbCoinMarketId: [
                {
                  required: true,
                  message: '必填',
                  trigger: 'blur',
                },
              ],
              img: [
                {
                  required: true,
                  message: '必填',
                  trigger: 'blur',
                },
              ],
              sort: [
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
                <el-form-item label="交易对" prop="tbCoinMarketId">
                  <el-select :disabled='isDetail' v-model="symbolGroup.tbCoinMarketId" placeholder="请选择">
                    <el-option v-for="item in symbollist" :label="item.label" :value="item.tbCoinMarketId" :key="item.tbCoinMarketId"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label-width="100px" label="是否合约">
                  <el-switch   :disabled="getSupportContract(symbolGroup.tbCoinMarketId) || isDetail" v-model="symbolGroup.supportContract" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row class="my-row" :span="24">
              <el-col :span="12">
                <el-form-item label="排序" prop="sort">
                  <el-input :disabled='isDetail' v-model.trim="symbolGroup.sort" @input="symbolGroup.sort = symbolGroup.sort.replace(/[^\d]/g, '')" autocomplete="off" type="text"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :class="{ 'my-border': index + 1 != chainForm.pairList.length }" class="my-row" :gutter="10" :span="24">
              <el-col :span="21">
                <el-form-item label="icon" prop="img">
                  <el-input size="small" placeholder="请输入链接" v-model="symbolGroup.img">
                    <el-upload :disabled='isDetail' accept=".png,.img" :action="$img_api" multiple name="file" :data="{ type: 'exchange' }" :show-file-list="false" :before-upload="beforeUpload" :on-success="uploadIcon" :on-error="uploadError" slot="append" :limit="1" :on-exceed="exceed" ref="iconDot">
                      <el-button size="small" @click="getUploadIconIndex(index)" type="primary">点击上传</el-button>
                    </el-upload>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <el-button :disabled='isDetail' type="danger" @click="delSymbolGroups(index)" size="small" round>删除</el-button>
              </el-col>
            </el-row>
          </el-form>
        </template>

        <el-row v-if="disabled" class="my-add" type="flex" :span="24" justify="center">
          <el-button :disabled='isDetail' @click="addSymbolGroups" size="small" type="primary"> +添加交易对 </el-button>
        </el-row>

        <el-row v-if="disabled" :span="24">
          <el-col :span="23">
            <el-form-item label="谷歌验证码" prop="googleCode">
              <el-input v-model.trim="chainForm.googleCode" @input="checkVal('chainForm', 'googleCode')" autocomplete="off" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div v-if="disabled" slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 删除 谷歌验证 -->
    <el-dialog :visible.sync="dialogVisible" width="500px" title="谷歌验证码">
      <el-form :model="delForm" label-width="100px" ref="delForm" :rules="delRules">
        <el-row :span="24">
          <el-col :span="23">
            <el-form-item label="谷歌验证码" prop="googleCode">
              <el-input v-model.trim="delForm.googleCode" @input="checkVal('delForm', 'googleCode')" autocomplete="off" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false" style="margin-right: 10px">取消</el-button>
        <el-button type="primary" :loading="delBtnLoading" @click.stop="confirmDel">确定</el-button>
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
      isDetail: false,
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
        name: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        desc: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        descEn: [
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
      formLabelWidth: '100px',
      symbollist: [],
      cowIndex: '',
      dialogVisible: false,
      delForm: {},
      delRules: {
        googleCode: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
      },
      delBtnLoading: false,
    };
  },
  filters: {
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
  },
  computed: {
    getSupportContract() {
      return function (tbCoinMarketId) {
        if (tbCoinMarketId) {
          let res = this.symbollist.filter((v) => {
            return v.tbCoinMarketId == tbCoinMarketId;
          })[0].supportContract;
          return res ? false : true;
        } else {
          return true;
        }
      };
    },
  },
  methods: {
    // 删除谷歌验证
    confirmDel() {
      this.$refs['delForm'].validate(async (valid) => {
        if (valid) {
          const { id, googleCode } = this.delForm;
          if (this.delBtnLoading) return;
          this.delBtnLoading = true;
          let params = {
            id,
            googleCode,
          };
          const res = await $api.delPlateAreaList(params);
          if (res) {
            this.$message({ message: '删除成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.delBtnLoading = false;
        }
      });
    },
    checkVal(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '');
    },
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
      this.chainForm.pairList[this.cowIndex].img = response.data[0].url;
    },
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data;
      // 编辑币种
      if (fn === 'edit') {
        this.isDetail = false;
        this.formName = '编辑板块专区管理';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['chainForm'].resetFields();
          const { id, name, desc, descEn } = row;
          const pairList = JSON.parse(JSON.stringify(row.pairList));
          if (pairList.length) {
            pairList.forEach((v) => {
              v.supportContract = v.supportContract == 1 ? true : false;
            });
          }
          this.chainForm = {
            id,
            name,
            desc,
            descEn,
            pairList,
            googleCode: '',
          };
        });
      }
      if (fn === 'detail') {
        this.isDetail = true;
        this.formName = '板块专区管理详情';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['chainForm'].resetFields();
          const { id, name, desc, descEn } = row;
          const pairList = JSON.parse(JSON.stringify(row.pairList));
          if (pairList.length) {
            pairList.forEach((v) => {
              v.supportContract = v.supportContract == 1 ? true : false;
            });
          }
          this.chainForm = {
            id,
            name,
            desc,
            descEn,
            pairList,
            googleCode: '',
          };
        });
      }
      if (fn === 'del') {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['delForm'].resetFields();
          const { id } = row;
          this.delForm = {
            id,
            googleCode: '',
          };
        });
      }
    },
    addSymbolGroups() {
      this.chainForm.pairList.push({
        tbCoinMarketId: '',
        supportContract: false,
        img: '',
        sort: '',
      });
    },
    delSymbolGroups(index) {
      this.chainForm.pairList.splice(index, 1);
    },
    // 添加
    addChain() {
      this.formName = '添加板块专区管理';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.chainForm = {
          id: '',
          name: '',
          desc: '',
          descEn: '',
          pairList: [],
          googleCode: '',
        };
        this.addSymbolGroups();
      });
    },

    // 提交
    confirmOp() {
      this.$refs['chainForm'].validate(async (valid) => {
        if (valid) {
          var ret = this.chainForm.pairList.some((v) => {
            if (!v.tbCoinMarketId || !v.img || !v.sort) {
              return true;
            }
          });
          if (ret) return this.$message.error('请补充表格');

          const { id, name, desc, descEn, googleCode } = this.chainForm;
          const pairList = JSON.parse(JSON.stringify(this.chainForm.pairList));
          if (pairList.length) {
            pairList.forEach((v) => {
              v.supportContract = v.supportContract ? 1 : 0;
            });
          }
          let params = {
            name,
            desc,
            descEn,
            pairList,
            googleCode,
          };
          if (this.btnLoading) return;
          if (id) {
            params.id = id;
          }
          this.btnLoading = true;
          const res = !id ? await $api.addPlateArea(params) : await $api.updatePlateArea(params);
          if (res) {
            let text = '';
            text = !id ? '添加成功！' : '修改成功！';
            this.$message({ message: text, type: 'success' });
            this.getList();
            this.dialogFormVisible = false;
          }
          this.btnLoading = false;
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
      const res = await $api.getPlateAreaList(query_data);
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
      this.$store.dispatch('common/getSymbolListSupportContract').then(() => {
        this.symbollist = this.$store.state.common.symbolListSupportContract;
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
    // align-items: center;
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
