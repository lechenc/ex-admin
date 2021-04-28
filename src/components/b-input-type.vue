<template>
	<div class="input-type">
		<el-select
			:placeholder="
				item.placeholder ||
					(type === 'search' ? `按${item.label}搜索` : `请选择${item.label}`)
			"
			v-on="item.on || {}"
			v-if="item.type === 'select'"
			size="mini"
			:disabled="item.disabled"
			:id="item.prop"
			clearable
			v-model="target"
		>
			<el-option
				v-if="item.all !== false"
				:value="typeof item.allValue === void 0 ? '' : item.allValue"
				clearable
				label="全部"
			></el-option>
			<el-option
				v-for="(oitem, okey) in item.options"
				:key="okey"
				:value="oitem.value"
				:label="oitem.label"
			></el-option>
		</el-select>
		<el-date-picker
			v-else-if="item.type === 'date' || item.type === 'daterange'"
			:type="item.type"
			v-on="item.on || {}"
			align="right"
			clearable
			unlink-panels
			:disabled="item.disabled"
			size="mini"
			:id="item.prop"
			:placeholder="
				item.placeholder ||
					(type === 'search'
						? `按${item.label}搜索`
						: `请选择${item.label}时间`)
			"
			range-separator="至"
			start-placeholder="开始日期"
			end-placeholder="结束日期"
			:picker-options="datePickerOptions(item)"
			v-model="target"
		></el-date-picker>
		<el-input
			v-else
			clearable
			:type="type || item.type || 'text'"
			v-on="item.on || {}"
			:disabled="item.disabled"
			:id="item.prop"
			@change="inputChange(item.prop)"
			:placeholder="
				item.placeholder ||
					(type === 'search' ? `按${item.label}搜索` : `请输入${item.label}`)
			"
			v-model="target"
			size="mini"
		></el-input>
	</div>
</template>
<script>
export default {
	name: "BInputType",
	props: {
		type: {
			type: String,
			required: false,
			default: 'search',
		},
		item: {
			default: () => {
				return {};
			},
			type: Object,
			required: true
		},
		value: {

		},
	},
	computed: {
		target: {
			get () {
				return this.value;
			},
			set (val) {
				this.$emit("input", val);
			}
		}
	},
	methods: {
		inputChange (prop) {
			// let item: any = {};
			// const vm = this as any;
			// for (let i in vm.formLabels) {
			//   const v = vm.formLabels[i];
			//   if (v.prop === prop) {
			//     item = v;
			//     if (!v.reg) return;
			//     break;
			//   }
			// }
			const item = this.item;
			const vm = this;
			if (item.reg && !item.reg.test(vm.form[prop])) {
				vm.$message.error(`请输入正确的${item.label}`);
			}
		},
		datePickerOptions (item) {
			return this.$util.datePickerOptions(item.pickerOption);
		}
	},

}
</script>
<style lang="scss">
.input-type {
	width: 100%;
	.el-date-editor.el-input,
	.el-date-editor.el-input__inner {
		width: auto;
	}
	> div {
		width: 100%;
	}
}
</style>