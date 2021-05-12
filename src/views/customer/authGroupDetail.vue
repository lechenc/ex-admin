<template>
  <div class="authGroupDetail-page">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-form ref="form" :model="formData" label-width="85px" size="mini" inline>
      <el-form-item label="分组名称:">
        <el-input disabled :value="groupName"></el-input>
      </el-form-item>
      <el-form-item label="创建时间:">
        <el-input disabled :value="createTime"></el-input>
      </el-form-item>
    </el-form>
    <div class="main">
      <MerchantList :groupId="groupId"></MerchantList>
      <UserList :groupId="groupId"></UserList>
    </div>
    <addUser :show="addUserShow" @change="addUserShow = false"></addUser>
  </div>
</template>
<script>
import addUser from "@/components/merchant/addUser.vue";
import MerchantList from "@/components/merchant/merchantList";
import UserList from "@/components/merchant/userList";
export default {
  name: 'AuthGroupDetail',
  components: {
    addUser,
    MerchantList,
    UserList,
  },
  data() {
    return {
      addUserShow: false,
      formData: {
        create_time: "",
        groupName: "",
        name: "",
      },
      pageData: {
        pageNum: 1,
        pageSzie: 20,
        total: 3,
      },
      multipleSelection: [],
      total: 3,
      list: [
        { groupName: "默认", phone: "15179818328" },
        { groupName: "allbet", phone: "177939729" },
        { groupName: "ksx", phone: "15792797" },
        { groupName: "默认ksx", phone: "188397900" },
      ],
      groupId: "",
      createTime: "",
      groupName: "",
    };
  },
  mounted() {
    this.groupId = this.$route.query.id + "";
    this.createTime = this.$route.query.createTime;
    this.groupName = this.$route.query.groupName;
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      //console.log(this.multipleSelection);
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      // this.getData()
    },
    handleSizeChange(val) {
      this.pageSize = val;
      // this.getData()
    },
  },
};
</script>
<style lang="scss">
.authGroupDetail-page {
  padding: 4px 20px 10px 20px;
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
    // flex-wrap:wrap;
    box-sizing: border-box;
    & > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      &:last-of-type {
        margin: 0;
      }
      & > .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 40px;
      }
    }
  }
  // /deep/.time .el-form-item__content{
  // 	width: auto
  // }
  // /deep/.el-input.is-disabled .el-input__inner{
  // 	color: #666
  // }
  // /deep/.el-dialog{
  // 	width: 700px;
  // }
}
</style>
