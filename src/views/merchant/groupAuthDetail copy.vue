<template>
  <div class="groundDetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-row class="sac-row">
      <el-form :model="form" ref="form" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="开启单独设置" prop="name">
              <el-input v-model="form.name" :disabled="!isCURDAuth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button size="small" type="primary" plain @click="changeAuth">修改</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-row>

    <el-card class="box-card">
      <div class="box-card-con">
        <H3>商户列表</H3>
        <div class="card-line">
          <div class="panel">
            <div class="btn-line">
              <el-button size="medium" type="primary" plain :disabled="!isCURDAuth || merchantList.length == 0" @click="delMerchant">一键删除</el-button>
              <el-button size="medium" type="primary" plain :disabled="!isCURDAuth" @click="addMerchant">添加商户</el-button>
            </div>
            <div>
              <Btable
                :selection="isCURDAuth"
                :listLoading="merchantLoading"
                :data="merchantList"
                :configs="merchantconfigs"
                @do-handle="doHandleMerchant"
                @select="selectMerchant"
              />
            </div>
            <el-pagination
              background
              @size-change="pageSizeMerchant"
              @current-change="goPageMerchant"
              layout="total,sizes, prev, pager, next, jumper"
              :current-page="merchant_current_page"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="merchantPageSize"
              :total="merchantTotal"
            >
            </el-pagination>
          </div>
          <div class="panel">
            <div class="btn-line">
              <el-button size="medium" type="primary" plain :disabled="!isCURDAuth || dealerList.length == 0" @click="delDealer">一键删除</el-button>
              <el-button size="medium" type="primary" plain :disabled="!isCURDAuth" @click="addDealer">添加商户</el-button>
            </div>
            <div>
              <Btable
                :selection="isCURDAuth"
                :listLoading="dealerLoading"
                :data="dealerList"
                :configs="dealerconfigs"
                @do-handle="doHandleDealer"
                @select="selectDealer"
              />
            </div>
            <el-pagination
              background
              @size-change="pageSizeDealer"
              @current-change="goPageDealer"
              layout="total,sizes, prev, pager, next, jumper"
              :current-page="dealer_current_page"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="dealerPageSize"
              :total="dealerTotal"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </el-card>
    <div>
      <div class="middle" v-if="!isCURDAuth">
        <el-button type="primary" plain size="small" @click="isCURDAuth = true">修改</el-button>
      </div>
      <div class="middle" v-if="isCURDAuth">
        <el-button type="primary" plain size="small" @click="isCURDAuth = false">取消</el-button>
        <el-button type="primary" plain size="small" @click="confirmSend">确定</el-button>
      </div>
    </div>
    <!-- 表格勾选弹窗 -->
    <TableCheck :title="title" :visible.sync="dialogVisible" :status="dialogStatus" @hanler="getCheckData" @close="closeDialog"></TableCheck>
  </div>
</template>

<script>
import $api from "@/api/api";
import BRangeChoose from "@/components/b-range-choose";
import { merchantconfigs, dealerconfigs } from "@/config/column/merchant";
import Btable from "@/components/table/b-table";
import TableCheck from "@/components/merchant/tableCheck";

export default {
  components: { BRangeChoose, Btable, TableCheck },
  data() {
    return {
      groupName: "",
      groupId: "",
      createTime: "",

      isCURDAuth: true, // 是否有增删改查权限
      merchantconfigs: [],
      dealerconfigs: [],
      merchantListLoading: false, // merchant表格loading
      dealerListLoading: false, // dealer表格loading
      merchant_cur_page: 1, // 当前页码
      dealer_cur_page: 1, // 当前页码
      merchantPageSize: 10,
      dealerPageSize: 10,
      merchantTotal: 0,
      dealerTotal: 0,
      dealerList: [], // 币商列表
      merchantList: [], // 商户列表

      dialogStatus: "", // 弹出框状态
      curRow: {}, // 查看详情的条目
      form: {
        name: "",
      },
      rules: { name: [{ required: true, message: "必填", trigger: "blur" }] },

      dialogVisible: false, // 是否弹窗可见
      title: "", //  弹出框标题
    };
  },
  filters: {
    userType(val) {},
  },
  methods: {
    changeAuth() {
      this.isCURDAuth = !this.isCURDAuth;
    },
    // 表格操作按钮
    doHandleMerchant() {
      const { fn, row } = data;
      if (fn === "del") {
      }
    },
    doHandleDealer() {
      const { fn, row } = data;
      if (fn === "del") {
      }
    },
    // 表格勾选项
    selectMerchant(val) {},
    selectMerchant(val) {},

    // 顶部操作按钮
    delMerchant() {},
    addMerchant() {
      this.title = "添加商户";
      this.dialogStatus = "merchantAllList";
      this.dialogVisible = true;
    },
    delDealer() {},
    addDealer() {
      this.title = "添加币商";
      this.dialogStatus = "dealerAllList";
      this.dialogVisible = true;
    },
    checkedDelete(){
			let userIds=""
			this.multipleSelection.forEach(e => {
				userIds+= e.userId + ','
			})
			this.subMerchantToGroup(userIds.substring(0,userIds.length-1))
		},
		subMerchantToGroup(userIds){
			if(this.groupId!==''){
				this.$confirm('此操作将会将用户移出该分组，确定删除？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$http.post('/wallet/app/otc/backmgr/subMerchantToGroup', {
						groupId:this.groupId,
						userIds:userIds
					}).then(res => {
						if(res.code==200){
							this.$message.success(res.msg)
							this.getData()
						}else{
							this.$message.error(res.msg)
						}
					})
				}).catch(() => {})
			}else{
				let arr = []
				if((userIds+'').indexOf(',')>-1){
					arr = userIds.split(',')
				}else{
					arr = [userIds]
				}
				let newList = []
				this.list.forEach((e,i)=>{
					let isDelete = false
					arr.forEach((item)=>{
						if(e.userId==item){
							isDelete = true
						}
					})
					if(!isDelete){
						newList.push(e)
					}
				})
				this.list = newList
			}
		},
    // 关闭弹出框
    closeDialog(data) {
      this.dialogVisible = false;
    },
    // 获取弹出框勾选的数据
    getCheckData(data) {
      this.dialogVisible = false;
    },
    // 页容变化
    pageSizeMerchant(val) {
      this.merchantPageSize = val;
      this.getListMerchant();
    },
    pageSizeDealer(val) {
      this.dealerPageSize = val;
      this.getListDealer();
    },
    // 分页
    goPageMerchant(val) {
      this.merchant_cur_page = val;
      this.getListMerchant();
    },
    goPageDealer(val) {
      this.dealer_cur_page = val;
      this.getListDealer();
    },
    // 确定修改结果
    confirmDialog() {
      let params = {};
      let res = null;
    },
    // 收银台设置修改后统一保存
    confirmSend() {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          const { name } = this.form;
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
    // 获取商户列表
    async getListMerchant() {
      if (this.merchantListLoading) return;
      const params = {
        // pageNum: this.merchant_cur_page,
        // pageSize: this.merchantPageSize,
        groupId: this.groupId
      };
      this.merchantListLoading = true;
      const res = await $api.checkMerchantGroupRecdInfo(params);
      if (res) {
        const { list, total, pageNum, pages } = res.data.result;
        this.merchantTotal = +total;
        // this.pages = pages;
        this.merchant_cur_page = +pageNum;
        this.merchantList = records;
        this.merchantListLoading = false;
      }
    },
    // 获取码商列表
    async getListDealer() {
      if (this.dealerListLoading) return;
      const params = {
            groupId: this.groupId
      };
      this.dealerListLoading = true;
      const res = await $api.checkUserGroupRecdInfo(params);
      if (res) {
        const { list, total, pageNum, pages } = res.data.result;
        this.dealerTotal = +total;
        // this.pages = pages;
        this.dealer_cur_page = +pageNum;
        this.dealerList = list;
        this.dealerListLoading = false;
      }
    },
  },
  mounted() {
    this.merchantconfigs = merchantconfigs;
    this.dealerconfigs = dealerconfigs;

    if (this.$route.query.id) {
      this.isCURDAuth = false;

      this.groupId = this.$route.query.id + "";
      this.createTime = this.$route.query.createTime;
      this.groupName = this.$route.query.groupName;
    } else {
      this.form = {
        name: "",
      };
      this.isCURDAuth = true;
      this.dealerList = []; // 币商列表
      this.merchantList = []; // 商户列表
    }
    // this.getDetail(this.$route.query.id);
  },
};
</script>

<style lang="scss" scope>
.groundDetail-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 20px 0;
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

  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  .box-card {
    margin-bottom: 20px;
    .box-card-con {
      .card-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .panel {
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }
      .middle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

.el-switch.is-disabled {
  opacity: 1;
}
.el-switch.is-disabled .el-switch__core,
.el-switch.is-disabled .el-switch__label {
  cursor: pointer !important;
}
</style>
