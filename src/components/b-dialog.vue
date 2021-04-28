<!--
 * @Author: your name
 * @Date: 2020-05-14 18:48:00
 * @LastEditTime: 2020-05-26 15:11:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\components\b-dialog.vue
--> 

<template>
	<el-dialog v-bind="$attrs" v-on="$listeners" custom-class="b-dialog" :close-on-click-modal="closeOnClickModal">
		<slot name="title" slot="title"></slot>
		<slot></slot>
		<slot name="footer" slot="footer"></slot>
	</el-dialog>
</template>
<script>
export default {
	name: "BDialog",
	props: {
		closeOnClickModal: {
			type: Boolean,
			default: false
		}
	}
};
</script>
<style lang="scss">
.b-dialog {
	.el-dialog__header {
		padding: 10px 10px 5px 10px;
		display: flex;
		// background: #304156;
		// box-shadow: 0px 1px 9px rgb(107, 107, 107);
		.el-dialog__title {
			color: #fff;
		}
		.el-dialog__headerbtn {
			top: 15px;
			i {
				color: #000;
			}
		}
	}
	.el-dialog__body {
		padding: 20px 15px 10px 15px;
		height: calc(100% - 130px);
	}
	.el-dialog__footer {
		padding: 10px 15px;
	}
}
</style>
