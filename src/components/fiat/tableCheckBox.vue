<template>
	<div class="tableCheck-container">
		<!-- 弹窗 -->
		<el-dialog :visible.sync="showDialog" width="700px" :title="title" @open="dialogOpen">
			<el-form :model="searchForm" ref="searchForm">
				<el-row>
					<el-col :span="12">
						<el-form-item label="账户/用户编号" prop="account" label-width="150px">
							<el-input type="text" placeholder="请输入" v-model="searchForm.account"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-button style="margin-left:20px;margin-top:3px;" type="primary" size="medium" @click="searchDiaLogList">搜索</el-button>
					</el-col>
				</el-row>
			</el-form>
		<!--	<div class="container-btn">
				<el-button type="primary" size="small" @click="confirmAdd">确定增加</el-button>
			</div>   -->
			<div>
				<Btable :listLoading="allListLoading" :data="dialogList" :configs="allconfigs" @do-handle="doHandle" />
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
		</el-dialog>
	</div>
</template>
<script>
import Btable from "@/components/table/b-table";
import $api from "@/api/api";
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
		curItem: {
			default: ()=>{},
		},
		// 弹出框状态
		dialogStatus: {
			default: "",
		},
	},
	computed: {
		showDialog: {
			get () {
				return this.visible;
			},
			set (val) {
				this.$emit("close", val);
			},
		},
	},
	data () {
		return {
			all_current_page: 1,
			allListLoading: false, // all表格loading
			allPageSize: 10,
			allTotal: 0,
			dialogList: [], // 弹窗的表格的数据列表
      title:"迁移",
			allconfigs: [
				{
					label: "账号",
					prop: "account",
				},
				{
					label: "昵称",
					prop: "nickName",
				},
				{
					label: "操作",
					prop: "action",
					type: "action",
					width: "180",
					btnGroup: [
						{
							label: "迁移至该账号下",
							fn: "move",
							type: "primary",
						},
					],
				},
			],
			selectedList: [], // 勾选后的数据列表
			// 弹窗筛选表单
			searchForm: {
				account: "",
			},
		};
	},
	methods: {
		async doHandle (data) {
			let { fn, row } = data;
			if (fn === "move") {
				this.$confirm('确定要执行迁移操作吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async () => {
					let params = {
						inviterId: row.userId,
						inviteeId: this.curItem.inviteeId || this.curItem.userId,
					};
					const res = await $api.updateInviteShip(params);
					if (res) {
						this.$message.success('迁移成功')
						this.$emit("close")
					}
				}).catch(() => { })
			}
		},
		selectAll (val) {
			this.selectedList = val;
		},
		pageSizeAll (val) {
			this.allPageSize = val;
			this.getListAll();
		},
		goPageAll (val) {
			this.all_cur_page = val;
			this.getListAll();
		},
		async dialogOpen () {
			this.getListAll();
		},
		async getListAll (val) {
			let params = {};
			let res = null;
			// 当有筛选值的情况
			params = {
				inviteeId: this.curItem.inviteeId || this.curItem.userId,
				pageNum: this.all_current_page,
				pageSize: this.allPageSize,
			};
			if (val) {
				params.account = this.searchForm.account;
			}
			res = await $api.queryInviteShip(params);
			if (res) {
				const { list, total, pageNum, pages } = res.data.result;
				if (list.length < 1) {
					this.$message.error("不允许迁移至自己的下级或该账号不存在");
				}else{
          this.allTotal = +total;
          this.all_cur_page = +pageNum;
          this.dialogList = list;          
        }
				this.allListLoading = false;
			}
		},
		// 弹出框里列表筛选条件
		searchDiaLogList () {
				this.getListAll(this.searchForm.account);
		},
		// 最终确定增加的数据,返回给列表
		confirmAdd () {
			let tmp = this.selectedList;
			if (tmp) {
				this.$emit("handler", tmp);
			} else {
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
