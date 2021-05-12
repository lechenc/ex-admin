<template>
  <div class="tableCheckBoxDel-page">
    <el-dialog :visible.sync="showDialog" width="700px" @open="dialogOpen">
      <div class="title">
        <span>黑名单：</span>
        <el-form :model="form" ref="form">
          <el-row>
            <el-col :span="10">
              <el-form-item label="IP地址" prop="id">
                <el-input type="text" placeholder="请输入" v-model="form.ip"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-button type="primary" size="small" @click="searchList">搜索</el-button>
              <el-button type="primary" size="small" @click="addLine()">添加</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <el-table :data="list" height="auto" border size="small" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="index" width="50" label="序号" align="center"> </el-table-column>

        <el-table-column prop="phone" label="IP地址" align="center"></el-table-column>
        <el-table-column prop="nickName" label="添加时间" align="center">
          <template slot-scope="scope">{{ scope.row.nickName || scope.row.name }}</template>
        </el-table-column>

        <el-table-column prop="date" label="操作" fixed="right" width="110" align="center">
          <template slot-scope="scope">
            <el-button size="small" type="text" @click="subMerchantToGroup(scope.row.userId)"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageData.pageNum"
        :page-size="pageData.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total * 1"
      >
      </el-pagination>
    </el-dialog>
  </div>
</template>
<script>
import $api from "@/api/api";
export default {
  props: {
    visible: {
      default: false,
      type: Boolean,
    },
    value: {
      default: '',
    },
  },
  data() {
    return {
      pageData: {
        id: "",
        search:'',
        pageNum: 1,
        pageSize: 20,
      },
      groupId:'',
      multipleSelection: [],
      total: 3,
      list: [],
    };
  },
    computed: {
    showDialog: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('close', val);
      },
    },
  },
  methods: {
    dialogOpen() {
      this.genList();
    },
    // 添加栏目
    addLine(){
        this.$prompt('请输入IP', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(async ({ value }) => {
          const params = {
            id:value
          }
          const res = await $api.subMerchantToGroup(params);
            if (res) {
              this.$message.success("信息添加成功");
              this.genList();
            }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
    },
    // 根据ip搜索
    searchList(val){
      this.pageData.search = val
      this.genList();
    },
    async genList() {
      const params = {}
      Object.assign(this.pageData, this.form);
      // debugger
      const res = await $api.checkMerchantGroupRecdInfo(params);
      if (res) {
        this.list = res.data.result.list;
        this.total = res.data.result.total;
      }
    },
    // checkedDelete() {
    //   let userIds = "";
    //   this.multipleSelection.forEach(e => {
    //     userIds += e.userId + ",";
    //   });
    //   this.subMerchantToGroup(userIds.substring(0, userIds.length - 1));
    // },
    subMerchantToGroup(userIds) {
      // if (this.groupId !== "") {
        this.$confirm("此操作将会将用户移出该分组，确定删除？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            const params = {
              groupId: this.groupId,
              userIds: userIds,
            };
            const res = await $api.subMerchantToGroup(params);
            if (res && res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.genList();
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(() => {});
      // }
      //  else {
      //   let arr = [];
      //   if ((userIds + "").indexOf(",") > -1) {
      //     arr = userIds.split(",");
      //   } else {
      //     arr = [userIds];
      //   }
      //   let newList = [];
      //   this.list.forEach((e, i) => {
      //     let isDelete = false;
      //     arr.forEach(item => {
      //       if (e.userId == item) {
      //         isDelete = true;
      //       }
      //     });
      //     if (!isDelete) {
      //       newList.push(e);
      //     }
      //   });
      //   this.list = newList;
      // }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      //console.log(this.multipleSelection);
    },
    handleCurrentChange(val) {
      this.pageData.pageNum = val;
      this.genList();
    },
    handleSizeChange(val) {
      this.pageData.pageNum = 1
      this.pageData.pageSize = val;
      this.genList();
    }
  }
};
</script>
<style lang="scss">
.tableCheckBoxDel-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }
}
</style>
