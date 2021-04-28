<!--
 * @Author: your name
 * @Date: 2020-04-29 11:50:05
 * @LastEditTime: 2020-08-19 16:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\app\manage.vue
 -->
<template>
  <div class="version-container">
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addVersion">添加新版本</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!-- <div class="container-footer">
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div> -->
    <!-- 添加 -->
    <el-dialog :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="formValue" ref="formValue" :rules="rules">
        <el-form-item label="id" :label-width="formLabelWidth" prop="id" v-show="false">
          <el-input v-model="formValue.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="版本号" :label-width="formLabelWidth" prop="version">
          <el-input v-model="formValue.version" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户端" :label-width="formLabelWidth" prop="deviceType">
          <el-select v-model="formValue.deviceType" placeholder="" :disabled="formValue.id !== ''">
            <el-option label="安卓" :value="2"></el-option>
            <el-option label="IOS" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="下载链接" :label-width="formLabelWidth" prop="downloadUrl">
          <el-input v-model="formValue.downloadUrl" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文更新内容" :label-width="formLabelWidth" prop="detailZh">
          <el-input type="textarea" v-model="formValue.detailZh"></el-input>
        </el-form-item>
        <el-form-item label="英文更新内容" :label-width="formLabelWidth" prop="detailEn">
          <el-input type="textarea" v-model="formValue.detailEn"></el-input>
        </el-form-item>
        <el-form-item label="是否强制更新" :label-width="formLabelWidth" prop="forceUpdate">
          <el-switch v-model="formValue.forceUpdate" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Btable from '@/components/table/b-table';
import { versionCol, versionColNoBtn } from '@/config/column/app';
import $api from '@/api/api';
export default {
  name: 'Version',
  components: {
    Btable,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      // current_page: 1, // 当前页码
      // pageSize: 10, // 当前每页显示页码数
      // total: 0, // 总条数
      dialogFormVisible: false,
      formName: '',
      formLabelWidth: '120px',
      formValue: {
        id: '',
        version: '',
        deviceType: '',
        downloadUrl: '',
        detailZh: '',
        detailEn: '',
        forceUpdate: false,
      },
      rules: {
        version: [{ required: true, message: '必填', trigger: 'blur' }],
        deviceType: [{ required: true, message: '必填', trigger: 'change' }],
        downloadUrl: [{ required: true, message: '必填', trigger: 'blur' }],
        detailZh: [{ required: true, message: '必填', trigger: 'blur' }],
        detailEn: [{ required: true, message: '必填', trigger: 'blur' }],
        forceUpdate: [{ required: true, message: '必填', trigger: 'change' }],
      },
    };
  },
  methods: {
    addVersion() {
      this.formName = '添加新版本';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['formValue'].resetFields();
      });
    },
    confirmOp() {
      this.$refs['formValue'].validate(async valid => {
        if (valid) {
          const { id, forceUpdate, ...prop } = this.formValue;
          const params = {
            forceUpdate: forceUpdate ? 1 : 0,
            ...prop,
          };
          this.btnLoading = true;
          const res = id === '' ? await $api.addVersion(params) : await $api.editVersion({ id, ...params });
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogFormVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    async doHandle(data) {
      const { fn, row } = data;

      // 编辑
      if (fn === 'edit') {
        this.formName = '编辑';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['formValue'].resetFields();
          const { id, version, deviceType, downloadUrl, detailZh, detailEn, forceUpdate } = row;
          this.formValue = { id, version, deviceType, downloadUrl, detailZh, detailEn, forceUpdate: forceUpdate ? true : false };
        });
      }
      // // 删除
      // if (fn === 'delete') {
      //   const { id } = row;
      //   this.$confirm("是否删除此版本?", "温馨提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning",
      //   }).then(async () => {
      //     const res = await $api.deleteAppBannerInfo({
      //       bannerId: this.row.bannerId,
      //     });
      //     if (res) {
      //       this.$message({ type: "success", message: "删除成功!",});
      //       this.getList();
      //     }
      //   }).catch(() => {});
      // }
      // 设置上架开关
      // if (fn === "switchCoin") {
      // let params = {
      //   symbolId: row.symbolId,
      // };
      // params.status = row.status ? 1 : 0;
      // const res = await $api.updateSymbol(params);
      // if (res) {
      //   this.$message({
      //     message: "设置成功",
      //     type: "success",
      //   });
      // } else {
      //   this.getList();
      // }
      // }
    },
    // 分页
    // goPage(val) {
    //   this.current_page = val;
    //   this.getList();
    // },
    // getlist
    async getList() {
      if (this.listLoading) return;
      // const query_data = {
      //   page: this.current_page,
      //   pageSize: this.pageSize,
      // };
      this.listLoading = true;
      const res = await $api.getVersionList({});
      if (res) {
        // const { list, total, current } = res.data.result;
        // this.total = total;
        // this.current_page = current;
        const { data } = res.data;
        this.list = data;
      }
      this.listLoading = false;
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Version', versionCol, versionColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.getList();
  },
};
</script>

<style lang="scss">
.version-container {
 padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .container-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
  }
  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          margin-right: 40px;
          font-size: 18px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
