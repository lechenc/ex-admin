<!--
 * @Author: your name
 * @Date: 2020-04-10 12:09:53
 * @LastEditTime: 2020-04-15 11:54:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \alphawallet-bg\src\components\editor\index.vue
 -->
<template>
	<div class="h-editor-wrap">
		<vue-ueditor-wrap
			v-model="content"
			v-bind="$attrs"
			v-on="$listeners"
			@ready="ready"
			:config="config"
			@beforeInit="addCustomButtom"
			:key="1"
		></vue-ueditor-wrap>
	</div>
</template>
<script>
import VueUeditorWrap from 'vue-ueditor-wrap';
import utils from '@/utils/util';

export default {
	name: 'Editor',
	components: { VueUeditorWrap },
	props: {
		value: {
			default: ''
		},
	},
	data () {
		return {
			config: {
				autoHeightEnabled: true,
				initialFrameHeight: '100%',
				initialFrameWidth: '100%',
				UEDITOR_HOME_URL: '/UEditor/',
				//'http://47.75.148.74:8093/UEditor/   http://47.75.148.74:8093/
				headers: {
					// token: utils.token(),
					// lang: utils.local().toUpperCase(),
				},
				// formData: {
				// 	remote: 100,
				// },
				// imageUrl: 'http://testapi.wallet.alpex.pro/wallet/util/open/uploadFile',
				// serverUrl: window.SERVER_PATH + 'UEditor/index.php?action=config&callback=bd__editor__cmc9en',
				// imageUrl: window.SERVER_PATH + 'CommonFun/uploadImage',
				// serverUrl: 'http://47.75.148.74:8092/jsp/controller.jsp',
				serverUrl: 'http://192.168.188.188:2002/server-ueditor/ueditor/exec',
				// serverUrl: window.SERVER_PATH + 'UEditor/index.php?action=config&callback=bd__editor__cmc9en',
			}
		}
	},
	computed: {
		content: {
			get () {
				return utils.htmlReplace(this.value);
			},
			set (val) {
				this.$emit('input', val);
			}
		}
	},
	methods: {
		ready () {

		},
		addCustomButtom () { }
	}

}
</script>
<style lang="scss">
#edui_fixedlayer {
	z-index: 99999 !important;
}
.h-editor-wrap {
	height: 100%;
	width: 100%;
	> div {
		height: 100%;
		> div {
			height: 100%;
			> div {
				height: 100%;
				display: flex;
				flex-direction: column;
			}
		}
	}
}
</style>