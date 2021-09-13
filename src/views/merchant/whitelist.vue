<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-08-05 18:34:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="recharge-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :exportExcel="btnArr.includes('excel')" @do-exportExcel="exportExcel" />
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="small" @click="addForm">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <div>
        <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
      </div>
      <el-pagination
        background
        @size-change="pageSizeChange"
        @current-change="goPage"
        layout="total,sizes, prev, pager, next, jumper"
        :current-page="current_page"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="550px" title="增加商户白名单">
      <el-form :model="formValue" ref="formValue" :rules="rules" label-width="90px">
        <el-form-item :label-width="formLabelWidth" label="商户UID" prop="uid">
          <el-input type="text" placeholder="请输入" v-model="formValue.uid"> </el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="商户IP" prop="ip">
          <el-col :span="12" style="margin-right:20px;">
            <el-input type="text" placeholder="请输入" v-model="formValue.ip"> </el-input>
          </el-col>
          <el-col :span="2"><el-button type="primary" @click="addLine(formValue.ip)">添加</el-button></el-col>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth" v-for="(el, index) in formValue.list" :key="index">
          <el-col :span="12" style="margin-right:20px;"> <el-input type="text" placeholder="请输入" :value="el"></el-input></el-col>
          <el-col :span="2"><el-button type="danger" @click.stop="delLine(index)">删除</el-button></el-col>
        </el-form-item>
      </el-form>

      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false" style="margin-right:50px;">取消</el-button>
        <el-button type="primary" @click.stop="confirmDialog">确定增加</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from "@/components/search/b-search";
import Btable from "@/components/table/b-table";
import { whiteCol, whiteColNoBtn, whiteConfig } from "@/config/column/merchant";
import $api from "@/api/api";
import utils from "@/utils/util";

export default {
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      listLoading: false, // 表格loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      formLabelWidth: "100px",
      dialogVisible: false, // 是否显示弹窗
      formValue: {
        uid: "",
        ip: "",
        list: ["1", "2"],
      },
      rules: {
        // text: [{ required: true, message: "必填", trigger: "blur" }],
        // text: [{ required: true, message: "必填", trigger: "blur" }],
      },
      btnArr:[]
    };
  },
  methods: {
    doHandle(data) {
      const { fn, row } = data;
      if (fn === "viewDetail") {
        this.$confirm("确认删除吗?", "温馨提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            const res = await $api.ddddd({
              id: row.id,
            });
            if (res) {
              this.$message({ type: "success", message: res.data.message });
              this.getList();
            }
          })
          .catch(() => {});
      }
      // 编辑币种
      if (fn === "edit") {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs["formValue"].resetFields();
          const { id, coinId, coinName } = row;
          this.formValue = {
            id,
            coinId,
            coinName,
          };
        });
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
        v["value"] = "";
      });
      this.getList();
    },
    exportExcel() {
      utils.exportData.apply(this, [0]);
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
    addForm() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.formValue = {
          uid: "",
          ip: "",
          list: ["1", "2"],
        };
        this.$refs["formValue"].resetFields();
      });
    },
    // 增加用户ip
    addLine(val) {
      this.formValue.list.push(val);
    },
    // 删除用户ip
    delLine(index) {
      this.formValue.list.splice(index, 1);
    },
    confirmDialog() {
      this.$refs["formValue"].validate(async valid => {
        if (valid) {
          const { uid, list } = this.formValue;
          let params = {
            name,
            // ...repo,
          };
          Object.assign(params, { id, coinId });

          const res = await $api.bbbbbbbbbb(params);
          if (res) {
            this.$message({ message: res.data.message, type: "success" });
            this.isCURDAuth = false;
          }
        }
      });
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
      const res = await $api.getDepositList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // this.total = total;
        // this.pages = pages;
        // this.current_page = current;
        // this.list = records;
        // this.dataList = records;
        // this.listLoading = false;
      }
    },
  },
  mounted() {
    // let authStatus = this.$util.getAuthority("Whitelist");
    // if (authStatus === 2) {
    //   this.configs = whiteColNoBtn;
    //   this.isCURDAuth = false;
    // } else {
    //   this.configs = whiteCol;
    // }
    let authObj = this.$util.getAuthority('Whitelist', whiteCol, [])
    this.btnArr = authObj.btnArr || []
    this.configs = whiteCol;
    this.searchCofig = whiteConfig;
    // this.getList();
  },
};
</script>
<style scope lang="scss">
.recharge-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .inner-footer {
    display: flex;
    justify-content: center;
    align-items: center;
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
