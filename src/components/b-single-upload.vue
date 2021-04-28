<!--
 * @Autor: Diskfan
 * @Date: 2019-08-08 15:54:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-14 19:07:20
 * @Description: 单图上传和预览, 父组件留下来的数据是url地址或者base64数据， emit input是base64数据
 -->

<template>
	<div class="c-upload">
		<div
			class="file-select"
			:class="{ uploaded: uploaded }"
			ref="fileSelecter"
			v-if="!base64"
			@click="fileSelect"
		>
			<i class="el-icon-upload"></i>
		</div>
		<div
			v-else
			title="双击大图预览"
			class="file-select preview"
			@click="clickHandle"
		>
			<div class="img-view" :style="{ background: `url(${base64})` }"></div>
			<i @click.stop="deleteFile" class="el-icon-delete-solid delete"></i>
			<transition name="slide-up">
				<i v-if="uploaded" class="el-icon-check checked"></i>
			</transition>
		</div>
		<div class="title" :class="{ required: required }">{{ title }}</div>
		<input
			type="file"
			ref="fileInput"
			@change="fileChange"
			accept="image/png, image/jpeg, image/jpg"
			class="c-file-input"
		/>
	</div>
</template>
<script>
import Axios from 'axios';
import utils from '@/utils/util';

export default {
	name: 'BSingleUpload',
	data () {
		return {
			disabled: false,
			file: null,
			width: '100%',
			height: '100%',
			mWidth: 120,
			mHeight: 120,
			uploaded: false,
			loading: null,
			timmer: null,
			start: 0,
			baseUrl: '',
		}
	},
	props: {
		auto: {
			type: Boolean, default: true
		},
		required: {
			type: Boolean, default: false
		},
		title: {
			type: String, default: '上传图片'
		},
		value: {
			type: String
		}
	},
	computed: {
		base64 () {
			// get () {
			return this.baseUrl || this.value;
			// },
		},
		picUrl: {
			get () {
				return this.baseUrl || this.value;
			},
			set (val) {
				this.$emit('input', val || '');
			}
		}
	},
	mounted () {
		// this.baseUrl = this.value;
	},
	methods: {
		clickHandle () {
			const curr = +new Date();
			if (curr - this.start > 300) {
				this.start = 0;
				clearTimeout(this.timmer);
			}
			if (!this.start) {
				this.start = +new Date();
				this.timmer = setTimeout(() => {
					this.fileSelect(window.event);
				}, 300);
			} else if (curr - this.start < 300) {
				clearTimeout(this.timmer);
				this.viewImg();
				this.start = 0;
			}
		},
		reset () {
			this.uploaded = false;
			this.file = null;
			this.base64 = '';
			this.baseUrl = '';
		},
		viewImg () {
			this.$store.dispatch("app/setViewerImages", [this.base64]);
			this.$store.dispatch("app/showSingleViewerImages", true);
			this.$store.dispatch("app/setSingleViewerTitle", this.title);
		},
		fileChange (e) {
			const file = e.target.files[0];
			this.$emit("input", file);
			this.file = file;
			let reader = new FileReader();
			this.uploaded = false;
			reader.onload = () => {
				let img = new Image();
				img.onload = () => {
					const { width, height } = img;
					const resize = utils.autoImgSize(width, height, this.mWidth, this.mHeight);
					this.width = resize.width;
					this.height = resize.height;
					this.base64 = reader.result;
					file.base64 = reader.result;
					this.baseUrl = reader.result;
					img = null;
					reader = null;
					if (this.auto) this.upload();
				};
				img.onerror = (e) => {
					this.$message.error("解析图片失败");
				};
				img.src = reader.result;
			};
			reader.onError = () => {
				this.$message.error("解析图片失败");
			};
			reader.readAsDataURL(file);
		},
		upload (tip) {
			return new Promise((resole, reject) => {
				if (utils.type(this.file) !== 'file') {
					resole({
						result: 200
					});
				} else {
					if (!this.file) {
						this.$Toast({
							title: '提示',
							message: '请先选择图片'
						})
						return;
					}
					this.loading = this.$loading({
						target: this.$el,
						text: '正在上传'
					});
					const win = window;
					const headers = {
						// 'wl_no': win.wl_no,
						// token: utils.token(),
						// lang: utils.local().toUpperCase(),
						'Content-Type': 'multipart/form-data'
					};
					// http://testapi.wallet.alpex.pro/wallet/util/open/uploadFile 
					const instance = Axios.create({
						baseURL: "http://testapi.wallet.alpex.pro/wallet/util",
						// baseURL: window.SERVER_PATH,
					});
					const formData = new FormData();
					formData.append('type', 'exchange');
					formData.append('files', this.file);
					// formData.append('files', this.base64);
					instance.post('/open/uploadFile', formData, { headers }).then(({ data }) => {
						if (data.result === 200) {
							if (tip) {
								this.$Toast({
									title: "提示",
									message: "上传成功"
								});
							}
							this.uploaded = true;
							this.picUrl = data.result.urls[0];
							resole(data);
						} else {
							if (tip) {
								this.$Toast({
									title: '提示',
									message: '上传失败'
								})
							}
							reject()
						}
					}).catch((e) => {
						reject()
						console.error(e)
					}).finally(() => {
						this.loading.close();
						this.loading = null;
					})
				}
			})
		},
		deleteFile () {
			this.file = null;
			this.reset();
			this.uploaded = false;
		},
		fileSelect (e) {
			const dom = this.$refs.fileInput;
			dom.value = "";
			dom.click();
		},
		async changeToBase64 () {
			if (this.file || this.loading) return;
			this.loading = true
			const vm = this
			if (utils.isBase64(this.value)) {
				let img = new Image();
				img.onload = () => {
					const { width, height } = utils.autoImgSize(img.width, img.height, this.mWidth, this.mHeight);
					this.width = width;
					this.height = height;
					this.file = {
						base64: this.value
					}
					this.base64 = this.value;
					img = null;
					this.loading = null;
				}
				img.src = this.value;
			} else {
				const res = await utils.img2base64(this.value);
				if (res.result === 200) {
					const { width, height } = utils.autoImgSize(res.width, res.height, this.mWidth, this.mHeight);
					this.file = {
						base64: res.base64
					};
					this.width = width;
					this.height = height;
					this.base64 = res.base64;
					this.loading = null;
				}
			}
		}
	}
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@include slide-up();
.c-upload {
	width: 130px;
	height: 100%;
	.c-file-input {
		position: absolute;
		visibility: hidden;
	}
	.title {
		@include flex();
	}
	.required:before {
		content: "*";
		color: #f56c6c;
		margin-right: 4px;
	}
	.file-select {
		width: 120px;
		height: 120px;
		border: 1px dashed #e3e3e3;
		background: #f9f9f9;
		cursor: pointer;
		@include transition();
		@include flex();
		border-radius: 6px;
		.delete {
			font-size: 20px;
			position: absolute;
			color: rgb(4, 165, 26);
			margin-left: 43px;
			margin-top: -45px;
			@include transition();
			&:hover {
				color: rgb(245, 69, 69);
				cursor: pointer;
			}
		}
		.checked {
			position: absolute;
			color: rgb(140, 248, 149);
			font-size: 60px;
			margin-top: 45px;
		}
		.el-icon-upload {
			font-size: 40px;
			color: rgb(216, 214, 214);
			@include transition();
		}
		&:hover {
			border-color: #000b25;
			background: #f4f4f4;
			.el-icon-upload {
				color: rgb(85, 85, 85);
			}
		}
	}
	.preview {
		cursor: zoom-in;
		background: #fff;
		&:hover {
			background: #fff;
		}
	}
	.img-view {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat !important;
		background-size: contain !important;
		background-position: center !important;
	}
	.disabled {
		background: #f9f9f9;
		&:hover {
			border-color: #e3e3e3;
			.el-icon-upload {
				color: rgb(216, 214, 214);
			}
		}
	}
}
</style>