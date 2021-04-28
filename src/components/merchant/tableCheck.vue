<template>
  <div class="tableCheck-container">
    <!-- 弹窗 -->
    <el-dialog :visible.sync="showDialog" width="700px" :title="title" @open="dialogOpen">
      <el-form :model="searchForm" ref="searchForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="账户/用户编号" prop="id">
              <el-input type="text" placeholder="请输入" v-model="searchForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="small" @click="searchDiaLogList">搜索</el-button>
          </el-col>
        </el-row>
      </el-form>
      <div class="container-btn">
        <el-button type="primary" size="small" @click="confirmAdd">确定增加</el-button>
      </div>
      <div>
        <Btable :selection="true" :listLoading="allListLoading" :data="dialogList" :configs="allconfigs" @select="selectAll" />
      </div>
      <el-pagination
        background
        @size-change="pageSizeAll"
        @current-change="goPageAll"
        layout="total,sizes, prev, pager, next, jumper"
        :current-page="all_current_page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="allPageSize"
        :total="allTotal"
      >
      </el-pagination>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmDialog">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import utils from "@/utils/util";
import Btable from "@/components/table/b-table";

export default {
  name: "TableCheck",
  components: { Btable },
  props: {
    visible: {
      default: false,
      type: Boolean,
    },
    value: {
      default: "",
    },
    // 弹出框状态
    dialogStatus: {
      default: "",
    },
  },
  computed: {
    showDialog: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("close", val);
      },
    },
  },
  data() {
    return {
      all_current_page: 1,
      allListLoading: false, // all表格loading
      allPageSize: 10,
      allTotal: 0,
      dialogList: [], // 弹窗的表格的数据列表
      allconfigs: [
        {
          label: "账号",
          prop: "time",
        },
        {
          label: "UID",
          prop: "uid",
        },
      ],
      selectedList: [], // 勾选后的数据列表
      // 弹窗筛选表单
      searchForm: {
        id: "",
      },
    };
  },
  methods: {
    selectAll(val) {
      this.selectedList = val;
    },
    pageSizeAll(val) {
      this.allPageSize = val;
      this.getListAll();
    },
    goPageAll(val) {
      this.all_cur_page = val;
      this.getListAll();
    },
    dialogOpen() {
      this.getListAll();
      // this.$nextTick(() => {
      //   this.$refs.form.resetFields();
      //   if (this.type === 1) {
      //     const { id, bannerName, imgUrl, imgUrlEn, jumpUrl, weight, bannerStatus, deviceType, effectTime } = this.row;
      //     // const { createTime, ...prop } = this.row;
      //     this.form = { id, bannerName, imgUrl, imgUrlEn, jumpUrl, weight, bannerStatus, deviceType, effectTime };
      //   }
      // });
    },
    async getListAll(val) {
      let params = {};
      let res = null;
      // 当有筛选值的情况
      if (val) {
        params.val = val;
      }
      if (this.dialogStatus === "merchantAllList") {
        res = await $api.aaa(params);
      } else {
        res = await $api.bbb(params);
      }
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.allTotal = total;
        this.all_cur_page = current;
        this.dialogList = records;
        this.allListLoading = false;
      }
    },
    // 弹出框里列表筛选条件
    searchDiaLogList() {
      if (searchForm.id) {
        this.getListAll(searchForm.id);
      }
    },
    // 最终确定增加的数据,返回给列表
    confirmAdd() {
      let tmp = this.selectedList;
      if(tmp){
          this.$emit("handler", tmp);
      }else{
        this.$message({ message: "尚未勾选任何项目!", type: "warning" });
      }
    },
  },
};
</script>
<style lang="scss">
.tableCheck-container {
  padding: 4px 10px 10px 10px;

  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .inner-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    // .foot-tip {
    //   font-size: 14px;
    //   color: #9a9a9a;
    // }
  }
}
</style>
