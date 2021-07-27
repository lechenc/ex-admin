<template>
  <div class="localPackage-container">
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addCoin">添加</el-button>
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
    <el-dialog :title="formName" width="600px" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form" :rules="rules">
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="版本号" :label-width="formLabelWidth" prop="versionNumber">
              <el-input v-model="form.versionNumber" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="Key" :label-width="labelWidth" :required="true">
              <ul class="key-ul">
                <li class="con" v-for="(el, index) in selectList" :key="index">
                  <el-select v-model="el.value" placeholder="请选择" style="width:180px;">
                    <el-option v-for="(item, index) in showKeyIdList(el.value)" :key="index" :label="item.keyName" :value="item.id"></el-option>
                  </el-select>
                  <el-button style="margin-left:20px;" round plain type="danger" size="small" @click.stop="delKeyIdList(index)">删除</el-button>
                </li>
              </ul>
              <div>
                <div class="middle">
                  <el-button type="primary" size="medium" @click="addKeyIdList">+添加</el-button>
                </div>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <!--   <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="压缩包类型" :label-width="formLabelWidth" prop="type">
              <el-select v-model="form.type" placeholder="请选择" style="width:180px;">
                <el-option label="苹果" :value="0"></el-option>
                <el-option label="安卓" :value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row> -->

        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="压缩包上传" :label-width="formLabelWidth" prop="compressedPackageUrl">
              <el-input size="small" v-model="form.compressedPackageUrl" placeholder="请选择上传">
                <el-upload
                  :action="$img_api"
                  multiple
                  accept=".zip,.rar"
                  name="file"
                  :data="{ type: 'exchange' }"
                  :show-file-list="true"
                  :on-success="upload"
                  :on-error="uploadCompressError"
                  slot="append"
                  :limit="1"
                  :on-exceed="exceed"
                  ref="compressedPackage"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="是否登录展示" :label-width="formLabelWidth" prop="onlineStatus">
              <el-switch v-model="form.onlineStatus" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="是否灰度" :label-width="formLabelWidth" prop="scaleStatus">
              <el-switch v-model="form.scaleStatus" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="是否启用" :label-width="formLabelWidth" prop="status">
              <el-switch v-model="form.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
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
import { localPackageCol, localPackageColNoBtn, localPackageConfig } from '@/config/column/app';
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';

export default {
  name: 'LocalPackage',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      isCURDAuth: true, // 按钮栏目权限：是否能增删改查
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
      keyIdList: [], // 使用中key数组（从keyIdAllList或者keyIdNowList取值）
      keyIdAllList: [], //  全部key列表数组
      keyIdNowList: [], // 可使用的key数组
      selectList: [{ value: '' }],

      // keyIdListFormal: [], //   请求得到的key列表
      labelWidth: '130px',
      formLabelWidth: '130px',
      dialogFormVisible: false,
      // dialogType: 0, // 弹出框类型，0新增1编辑
      form: {
        id: '',
        versionNumber: '',
        // type: 0,
        keyId: '',
        compressedPackageUrl: '',
        scaleStatus: false,
        status: false,
        onlineStatus: false,
      },
      formName: '',
      imageUrl: '',
      rules: {
        // type: [{ required: true, message: '必填', trigger: 'blur' }],
        versionNumber: [{ required: true, message: '必填', trigger: 'blur' }],
        // compressedPackageUrl: [{ required: true, message: '必填', trigger: 'blur' }],
      },
    };
  },
  computed: {
    showKeyIdList() {
      return val => {
        //讲option的显示数据进行深拷贝
        if (!this.keyIdList || this.keyIdList.length <= 0) return;
        let newList = JSON.parse(JSON.stringify(this.keyIdList));
        //处理selectList数据，返回一个新数组arr
        //arr数组就相当于所有Select选中的数据集合（没有选中的为''，不影响判断），只要在这个集合里面，其他的下拉框就不应该有这个选项
        const arr = this.selectList.map(item => {
          //将其格式{value：'NewYork'}变成['NewYork'],方便使用indexOf进行判断
          return (item = item.value);
        });
        //过滤出newList里面需要显示的数据
        newList = newList.filter(item => {
          //当前下拉框的选中的数据需要显示
          //val就是当前下拉框选中的值
          if (val == item.id) {
            return item;
          } else {
            //再判断在arr这个数组中是不是有这个数据，如果不在，说明是需要显示的
            if (arr.indexOf(item.id) == -1) {
              return item;
            }
          }
        });
        //返回Options显示数据
        return newList;
      };
    },
  },
  methods: {
    delKeyIdList(index) {
      this.selectList.splice(index, 1);
      // this.keyIdList.splice(index, 1);
    },
    addKeyIdList() {
      if (this.selectList.length < this.keyIdList.length) {
        this.selectList.push({ value: '' });
      } else {
        // //console.log('不能再加啦');
        this.$message.error('已无更多可选项，不能再添加了');
      }
      // this.keyIdList.push({ value: '' });
    },
    upload(response, file, fileList) {
      if (!response.data) {
        this.$message.error('上传失败');
        this.$refs.compressedPackage.clearFiles();
        return;
      }
      this.form.compressedPackageUrl = response.data[0].url;
      this.$refs.compressedPackage.handleRemove(file);
      this.$refs.compressedPackage.clearFiles();
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    uploadCompressError() {
      this.$message.error('文件上传失败');
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    // 添加
    async addCoin() {
      this.formName = '添加';
      this.dialogFormVisible = true;
      // 添加时key数组用剩余可用key数组
      await this.getNowKeyList();
      this.keyIdList = this.keyIdNowList;
      // key已选的重置
      this.selectList = [];
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.form = {
          id: '',
          versionNumber: '',
          compressedPackageUrl: '',
          keyId: '',
          scaleStatus: false,
          status: false,
          onlineStatus: false,
        };
      });
    },
    async confirmOp() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          let {
            id,
            // versionNumber,
            // keyId,
            // compressedPackageUrl,
            // type,
            scaleStatus,
            status,
            onlineStatus,
            ...repo
          } = this.form;
          let params = {
            status: status ? 1 : 0,
            scaleStatus: scaleStatus ? 1 : 0,
            onlineStatus: onlineStatus ? 1 : 0,
            ...repo,
          };
          // 获取key列表
          let idArr = this.selectList.map(item => {
            return (item = item.value);
          });
          let idArrStr = idArr.join(',') || '';
          params.keyId = idArrStr;

          id === '' ? Object.assign(params) : Object.assign(params, { id });
          this.btnLoading = true;
          const res = id === '' ? await $api.getUserAddPackage(params) : await $api.getUserEditPackage(params);
          if (res) {
            let txt = id === '' ? '添加成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;
      // 设置灰度，启用
      if (fn === 'trputon' || fn === 'trstart' || fn === 'trlogin') {
        const map = {
          trputon: () => {
            return { scaleStatus: row.scaleStatus ? 1 : 0 };
          },
          trstart: () => {
            return { status: row.status ? 1 : 0 };
          },
          trlogin: () => {
            return { onlineStatus: row.onlineStatus ? 1 : 0 };
          },
        };
        let params = {
          id: row.id,
        };
        Object.assign(params, map[fn]());
        const res = await $api.getUserEditPackage(params);
        if (res) {
          this.$message({ message: '切换成功', type: 'success' });
          // 保证切换后表格更新，按钮可点击或屏蔽
          this.getList();
        } else {
          this.getList();
        }
      }
      // 编辑
      if (fn === 'edit') {
        this.formName = '编辑';
        this.dialogFormVisible = true;
        // 编辑时key数组用全部key数组
        await this.getAllKeyList();
        this.keyIdList = this.keyIdAllList;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          let { id, versionNumber, keyId, compressedPackageUrl, scaleStatus, status, onlineStatus } = row;
          this.form = {
            id,
            versionNumber,
            compressedPackageUrl,
            scaleStatus: scaleStatus ? true : false,
            status: status ? true : false,
            onlineStatus: onlineStatus ? true : false,
          };
          // key已选的重置
          this.selectList = [];
          if (keyId) {
            let tmpArr = keyId.split(',');
            tmpArr.forEach(v => {
              this.selectList.push({
                value: parseInt(v),
              });
            });
          }
        });
      }
      // 删除
      if (fn === 'del') {
        this.$confirm('确定删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
          .then(async () => {
            let params = {
              id: row.id,
            };
            const res = await $api.getUserDeletePackage(params);
            if (res) {
              this.$message({ message: '成功删除', type: 'success' });
              this.getList();
            }
          })
          .catch(() => {});
      }
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      //  = ( + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      if (this.form[val] < 0) {
        this.form[val] = 0;
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
    // 获取key列表(全部)
    async getAllKeyList() {
      const res = await $api.getAllKeyList({});
      if (res.data) {
        this.keyIdAllList = res.data.data || [];
      }
    },
    // 获取key列表（可用）
    async getNowKeyList() {
      const res = await $api.getNowKeyList({});
      if (res.data) {
        this.keyIdNowList = res.data.data || [];
      }
    },
    keyMap(val) {
      if (val) {
        let tmpArr = val.split(',');
        let tmpPut = [];
        tmpArr.forEach(v => {
          this.keyIdAllList.forEach(w => {
            if (w.id == v) {
              tmpPut.push(w.keyName);
            }
          });
        });
        return tmpPut;
      } else {
        return [];
      }
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
      const res = await $api.getUserPackagePage(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach(v => {
          v['scaleStatus'] = v['scaleStatus'] ? true : false;
          v['status'] = v['status'] ? true : false;
          v['onlineStatus'] = v['onlineStatus'] ? true : false;
          // 添加新增属性，放置自己遍历生成的新数组（键匹配的值）
          v['keyIdArr'] = this.keyMap(v['keyId']);
          // 只有处于关闭状态的才能编辑或删除操作
          v['isclick'] = v['status'] ? true : false;
        });
        this.list = records;
        this.listLoading = false;
      }
    },
  },
  async mounted() {
    let authObj = this.$util.getAuthority('LocalPackage', localPackageCol, localPackageColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;
    this.searchCofig = this.$util.clone(localPackageConfig);
    // 因为要对数据后期id转为name所以先要获取keyIdAllList
    const res = await $api.getAllKeyList({});
    if (res.data) {
      this.keyIdAllList = res.data.data || [];
      this.getList();
    } else {
      this.keyIdAllList = [];
      this.getList();
    }
    // this.getAllKeyList();
    // this.getNowKeyList();
  },
};
</script>
<style lang="scss">
.localPackage-container {
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
  // width:90%;
  ul.key-ul {
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
      margin-bottom: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      width: 100%;
    }
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
