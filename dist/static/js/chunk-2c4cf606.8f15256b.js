(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c4cf606"],{"05d5":function(e,t,i){"use strict";var a=i("fe21"),r=i.n(a);r.a},"1c19":function(e,t,i){"use strict";var a=i("b339"),r=i.n(a);r.a},"32a6":function(e,t,i){var a=i("241e"),r=i("c3a1");i("ce7e")("keys",(function(){return function(e){return r(a(e))}}))},"5d48":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"c-upload"},[e.base64?i("div",{staticClass:"file-select preview",attrs:{title:"双击大图预览"},on:{click:e.clickHandle}},[i("div",{staticClass:"img-view",style:{background:"url("+e.base64+")"}}),e._v(" "),i("i",{staticClass:"el-icon-delete-solid delete",on:{click:function(t){return t.stopPropagation(),e.deleteFile(t)}}}),e._v(" "),i("transition",{attrs:{name:"slide-up"}},[e.uploaded?i("i",{staticClass:"el-icon-check checked"}):e._e()])],1):i("div",{ref:"fileSelecter",staticClass:"file-select",class:{uploaded:e.uploaded},on:{click:e.fileSelect}},[i("i",{staticClass:"el-icon-upload"})]),e._v(" "),i("div",{staticClass:"title",class:{required:e.required}},[e._v(e._s(e.title))]),e._v(" "),i("input",{ref:"fileInput",staticClass:"c-file-input",attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg"},on:{change:e.fileChange}})])},r=[],n=(i("96cf"),i("3b8d")),s=i("bc3a"),o=i.n(s),l=i("ca00"),c={name:"BSingleUpload",data:function(){return{disabled:!1,file:null,width:"100%",height:"100%",mWidth:120,mHeight:120,uploaded:!1,loading:null,timmer:null,start:0,baseUrl:""}},props:{auto:{type:Boolean,default:!0},required:{type:Boolean,default:!1},title:{type:String,default:"上传图片"},value:{type:String}},computed:{base64:function(){return this.baseUrl||this.value},picUrl:{get:function(){return this.baseUrl||this.value},set:function(e){this.$emit("input",e||"")}}},mounted:function(){},methods:{clickHandle:function(){var e=this,t=+new Date;t-this.start>300&&(this.start=0,clearTimeout(this.timmer)),this.start?t-this.start<300&&(clearTimeout(this.timmer),this.viewImg(),this.start=0):(this.start=+new Date,this.timmer=setTimeout((function(){e.fileSelect(window.event)}),300))},reset:function(){this.uploaded=!1,this.file=null,this.base64="",this.baseUrl=""},viewImg:function(){this.$store.dispatch("app/setViewerImages",[this.base64]),this.$store.dispatch("app/showSingleViewerImages",!0),this.$store.dispatch("app/setSingleViewerTitle",this.title)},fileChange:function(e){var t=this,i=e.target.files[0];this.$emit("input",i),this.file=i;var a=new FileReader;this.uploaded=!1,a.onload=function(){var e=new Image;e.onload=function(){var r=e,n=r.width,s=r.height,o=l["a"].autoImgSize(n,s,t.mWidth,t.mHeight);t.width=o.width,t.height=o.height,t.base64=a.result,i.base64=a.result,t.baseUrl=a.result,e=null,a=null,t.auto&&t.upload()},e.onerror=function(e){t.$message.error("解析图片失败")},e.src=a.result},a.onError=function(){t.$message.error("解析图片失败")},a.readAsDataURL(i)},upload:function(e){var t=this;return new Promise((function(i,a){if("file"!==l["a"].type(t.file))i({result:200});else{if(!t.file)return void t.$Toast({title:"提示",message:"请先选择图片"});t.loading=t.$loading({target:t.$el,text:"正在上传"});window;var r={"Content-Type":"multipart/form-data"},n=o.a.create({baseURL:"http://testapi.wallet.alpex.pro/wallet/util"}),s=new FormData;s.append("type","exchange"),s.append("files",t.file),n.post("/open/uploadFile",s,{headers:r}).then((function(r){var n=r.data;200===n.result?(e&&t.$Toast({title:"提示",message:"上传成功"}),t.uploaded=!0,t.picUrl=n.result.urls[0],i(n)):(e&&t.$Toast({title:"提示",message:"上传失败"}),a())})).catch((function(e){a(),console.error(e)})).finally((function(){t.loading.close(),t.loading=null}))}}))},deleteFile:function(){this.file=null,this.reset(),this.uploaded=!1},fileSelect:function(e){var t=this.$refs.fileInput;t.value="",t.click()},changeToBase64:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,i,a,r,n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.file&&!this.loading){e.next=2;break}return e.abrupt("return");case 2:if(this.loading=!0,this,!l["a"].isBase64(this.value)){e.next=10;break}t=new Image,t.onload=function(){var e=l["a"].autoImgSize(t.width,t.height,s.mWidth,s.mHeight),i=e.width,a=e.height;s.width=i,s.height=a,s.file={base64:s.value},s.base64=s.value,t=null,s.loading=null},t.src=this.value,e.next=14;break;case 10:return e.next=12,l["a"].img2base64(this.value);case 12:i=e.sent,200===i.result&&(a=l["a"].autoImgSize(i.width,i.height,this.mWidth,this.mHeight),r=a.width,n=a.height,this.file={base64:i.base64},this.width=r,this.height=n,this.base64=i.base64,this.loading=null);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},u=c,f=(i("6245"),i("0c7c")),d=Object(f["a"])(u,a,r,!1,null,null,null);t["a"]=d.exports},6245:function(e,t,i){"use strict";var a=i("9c9a"),r=i.n(a);r.a},"697a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"notice-container"},[i("div",{staticClass:"container-top"},[i("Bsearch",{attrs:{configs:e.searchConfig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?i("div",{staticClass:"notice-button"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.createBanner}},[e._v("创建Banner")])],1):e._e(),e._v(" "),i("div",[i("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),i("BannerDialog",{attrs:{visible:e.show_detail_modal,row:e.row,type:e.show_modal_type},on:{"update:visible":function(t){e.show_detail_modal=t},"update:row":function(t){e.row=t},freshData:e.getList,close:e.closeDialog}})],1)},r=[],n=(i("ac6a"),i("96cf"),i("3b8d")),s=i("c249"),o=i("2fee"),l=i("2ab6"),c=i("4ec3"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bannerDia-container"},[i("BDialog",{attrs:{width:"600px",title:e.title,visible:e.showDialog,closeOnClickModal:!1},on:{"update:visible":function(t){e.showDialog=t},open:e.dialogOpen}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id",prop:"id"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"名称",prop:"bannerName"}},[i("el-input",{attrs:{size:"small",placeholder:"请输入Banner名称",id:"bannerName"},model:{value:e.form.bannerName,callback:function(t){e.$set(e.form,"bannerName","string"===typeof t?t.trim():t)},expression:"form.bannerName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"代理是否可见",prop:"isProxyVisible"}},[i("el-radio-group",{model:{value:e.form.isProxyVisible,callback:function(t){e.$set(e.form,"isProxyVisible",t)},expression:"form.isProxyVisible"}},[i("el-radio",{attrs:{label:!0}},[e._v("是")]),e._v(" "),i("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"中文图片",prop:"imgUrl"}},[i("el-input",{attrs:{size:"small",placeholder:"请选择上传"},model:{value:e.form.imgUrl,callback:function(t){e.$set(e.form,"imgUrl",t)},expression:"form.imgUrl"}},[i("el-upload",{ref:"upzh",attrs:{slot:"append",action:e.$img_api,multiple:"",name:"file",data:{type:"exchange"},"on-success":e.uploadZh,"before-upload":e.onBeforeUpload,"on-error":e.uploadError,limit:1,"on-exceed":e.exceed},slot:"append"},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"英文图片",prop:"imgUrlEn"}},[i("el-input",{attrs:{size:"small",placeholder:"请选择上传"},model:{value:e.form.imgUrlEn,callback:function(t){e.$set(e.form,"imgUrlEn",t)},expression:"form.imgUrlEn"}},[i("el-upload",{ref:"enzh",attrs:{slot:"append",action:e.$img_api,multiple:"",name:"file",data:{type:"exchange"},"show-file-list":!0,"on-success":e.uploadEn,"before-upload":e.onBeforeUpload,"on-error":e.uploadError,limit:1,"on-exceed":e.exceed},slot:"append"},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),i("div",{staticClass:"spance"}),e._v(" "),i("el-form-item",{attrs:{label:"客户端",prop:"deviceType"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.deviceType,callback:function(t){e.$set(e.form,"deviceType",t)},expression:"form.deviceType"}},e._l(e.deviceList,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"跳转链接",prop:"jumpUrl"}},[i("el-input",{attrs:{size:"small",placeholder:"请输入跳转链接",id:"jumpUrl"},model:{value:e.form.jumpUrl,callback:function(t){e.$set(e.form,"jumpUrl","string"===typeof t?t.trim():t)},expression:"form.jumpUrl"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"排序",prop:"weight"}},[i("el-input",{attrs:{size:"small",placeholder:"请输入排序优先级",id:"weight",type:"number"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight","string"===typeof t?t.trim():t)},expression:"form.weight"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"生效时间",prop:"effectTime"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.form.effectTime,callback:function(t){e.$set(e.form,"effectTime",t)},expression:"form.effectTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"上架",prop:"bannerStatus"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.bannerStatus,callback:function(t){e.$set(e.form,"bannerStatus",t)},expression:"form.bannerStatus"}})],1)],1),e._v(" "),i("div",{staticClass:"footer"},[i("el-button",{attrs:{size:"small",type:"primary",loading:e.btnLoading},on:{click:e.confirm}},[e._v("确定")]),e._v(" "),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},f=[],d=(i("8e6e"),i("456d"),i("bd86")),p=i("a8db"),m=(i("c5f6"),i("0bbc")),h=i("5d48"),g=i("ed08");function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){Object(d["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var w={components:{BDialog:m["a"],BSingleUpload:h["a"]},props:{visible:{default:!1,type:Boolean},row:{default:function(){},type:Object},type:{type:Number,default:0}},computed:{showDialog:{get:function(){return this.visible},set:function(e){this.$emit("close",e)}}},data:function(){return{title:"添加banner",btnLoading:!1,rules:{bannerName:[{required:!0,message:"请输入bannner名称",trigger:"blur"}],imgUrl:[{required:!0,message:"请选择中文图片",trigger:"blur"}],imgUrlEn:[{required:!0,message:"请选择英文图片",trigger:"blur"}],weight:[{required:!0,message:"请选择排序权重",trigger:"blur"}],deviceType:[{required:!0,message:"请选择客户端",trigger:"change"}],effectTime:[{required:!0,message:"请选择生效时间",trigger:"blur"}]},loading:!1,form:{id:"",bannerName:"",imgUrl:"",imgUrlEn:"",jumpUrl:"",weight:"",bannerStatus:!1,deviceType:1,effectTime:""},deviceList:[{label:"ios",value:1},{label:"安卓",value:2},{label:"pc,h5",value:3}]}},methods:{onBeforeUpload:function(e){var t=e.size/1024/1024<8;t||this.$message.error("上传文件大小不能超过 8 MB！")},exceed:function(e,t){this.$message.error("单次只能选择一张图片进行上传！")},uploadZh:function(e,t,i){this.form.imgUrl=e.data[0].url,this.$refs.upzh.handleRemove(t)},uploadEn:function(e,t,i){this.form.imgUrlEn=e.data[0].url,this.$refs.enzh.handleRemove(t)},uploadError:function(){this.$message.error("图片上传失败")},confirm:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this,this.$refs.form.validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(i){var a,r,n,s,o,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=18;break}if(a=t.form,r=a.id,n=a.bannerStatus,s=a.effectTime,o=Object(p["a"])(a,["id","bannerStatus","effectTime"]),l=v({bannerStatus:n?1:0,effectTime:Object(g["a"])(s)},o),t.btnLoading=!0,""!==r){e.next=10;break}return e.next=7,c["a"].addAppBannerInfo(l);case 7:e.t0=e.sent,e.next=13;break;case 10:return e.next=12,c["a"].editAppBannerInfo(v({id:r},l));case 12:e.t0=e.sent;case 13:u=e.t0,u&&(t.$message({message:u.data.message,type:"success"}),t.$emit("close"),t.$emit("freshData")),t.btnLoading=!1,e.next=19;break;case 18:t.$message.error({title:"提示",message:"请完成表单内容填写再重试"});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.$emit("close")},dialogOpen:function(){var e=this;this.$nextTick((function(){if(e.$refs.form.resetFields(),1===e.type){var t=e.row,i=t.id,a=t.bannerName,r=t.imgUrl,n=t.imgUrlEn,s=t.isProxyVisible,o=t.jumpUrl,l=t.weight,c=t.bannerStatus,u=t.deviceType,f=t.effectTime;e.form={id:i,bannerName:a,imgUrl:r,imgUrlEn:n,isProxyVisible:s,jumpUrl:o,weight:l,bannerStatus:c,deviceType:u,effectTime:f},e.title="编辑banner"}0===e.type&&(e.title="添加banner",e.form={id:"",isProxyVisible:"",bannerName:"",imgUrl:"",imgUrlEn:"",jumpUrl:"",weight:"",bannerStatus:!1,deviceType:1,effectTime:""})}))}}},y=w,_=(i("1c19"),i("0c7c")),x=Object(_["a"])(y,u,f,!1,null,null,null),j=x.exports,k=(i("ca00"),{name:"Banner",components:{Btable:o["a"],Bsearch:s["a"],BannerDialog:j},data:function(){return{isCURDAuth:!0,listLoading:!1,list:[],configs:[],searchConfig:[],search_params_obj:{},current_page:1,pages:0,pageSize:10,total:0,detail_list:[],show_detail_modal:!1,show_modal_type:0,row:{}}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var i,a,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.fn,a=t.row,"edit"===i&&(console.log("row",a),this.row=a,this.show_modal_type=1,this.show_detail_modal=!0),"delete"===i&&this.$confirm("是否删除此banner?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].deleteAppBannerInfo({bannerId:a.id});case 2:t=e.sent,t&&(s.$message({type:"success",message:t.data.message}),s.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),"switchCoin"!==i){e.next=8;break}return e.next=6,c["a"].editAppBannerInfo({id:a.id,bannerStatus:a.bannerStatus?1:0});case 6:r=e.sent,r?(this.$message({type:"success",message:r.data.message}),this.getList()):this.getList();case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchConfig.forEach((function(e){e["value"]=""})),this.getList()},closeDialog:function(){this.show_detail_modal=!1},createBanner:function(){this.show_modal_type=0,this.row={},this.show_detail_modal=!0},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return this.listLoading=!0,this,t={},Object.assign(t,this.search_params_obj),e.next=8,c["a"].getAppBannerList(t);case 8:i=e.sent,i&&(a=i.data.data,a.forEach((function(e){e["bannerStatus"]=1===e["bannerStatus"]})),this.list=a,this.listLoading=!1);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("Banner",l["f"],l["g"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchConfig=this.$util.clone(l["h"]),this.getList()}}),$=k,U=(i("05d5"),Object(_["a"])($,a,r,!1,null,null,null));t["default"]=U.exports},"8aae":function(e,t,i){i("32a6"),e.exports=i("584a").Object.keys},"9c9a":function(e,t,i){},a4bb:function(e,t,i){e.exports=i("8aae")},a8db:function(e,t,i){"use strict";var a=i("e265"),r=i.n(a),n=i("a4bb"),s=i.n(n);function o(e,t){if(null==e)return{};var i,a,r={},n=s()(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}function l(e,t){if(null==e)return{};var i,a,n=o(e,t);if(r.a){var s=r()(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}i.d(t,"a",(function(){return l}))},b339:function(e,t,i){},ce7e:function(e,t,i){var a=i("63b6"),r=i("584a"),n=i("294c");e.exports=function(e,t){var i=(r.Object||{})[e]||Object[e],s={};s[e]=t(i),a(a.S+a.F*n((function(){i(1)})),"Object",s)}},e265:function(e,t,i){e.exports=i("ed33")},ed33:function(e,t,i){i("014b"),e.exports=i("584a").Object.getOwnPropertySymbols},fe21:function(e,t,i){}}]);