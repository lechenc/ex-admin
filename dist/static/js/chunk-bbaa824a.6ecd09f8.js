(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbaa824a"],{"05d5":function(e,t,a){"use strict";var r=a("537b"),i=a.n(r);i.a},"1c19":function(e,t,a){"use strict";var r=a("f3b2"),i=a.n(r);i.a},"537b":function(e,t,a){},"697a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notice-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchConfig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?a("div",{staticClass:"notice-button"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.createBanner}},[e._v("创建Banner")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("BannerDialog",{attrs:{visible:e.show_detail_modal,row:e.row,type:e.show_modal_type},on:{"update:visible":function(t){e.show_detail_modal=t},"update:row":function(t){e.row=t},freshData:e.getList,close:e.closeDialog}})],1)},i=[],n=(a("ac6a"),a("96cf"),a("1da1")),s=a("c249"),o=a("2fee"),l=a("2ab6"),c=a("4ec3"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bannerDia-container"},[a("BDialog",{attrs:{width:"600px",title:e.title,visible:e.showDialog,closeOnClickModal:!1},on:{"update:visible":function(t){e.showDialog=t},open:e.dialogOpen}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id",prop:"id"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"bannerName"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入Banner名称",id:"bannerName"},model:{value:e.form.bannerName,callback:function(t){e.$set(e.form,"bannerName","string"===typeof t?t.trim():t)},expression:"form.bannerName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理是否可见",prop:"isProxyVisible"}},[a("el-radio-group",{model:{value:e.form.isProxyVisible,callback:function(t){e.$set(e.form,"isProxyVisible",t)},expression:"form.isProxyVisible"}},[a("el-radio",{attrs:{label:!0}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"中文图片",prop:"imgUrl"}},[a("el-input",{attrs:{size:"small",placeholder:"请选择上传"},model:{value:e.form.imgUrl,callback:function(t){e.$set(e.form,"imgUrl",t)},expression:"form.imgUrl"}},[a("el-upload",{ref:"upzh",attrs:{slot:"append",action:e.$img_api,multiple:"",name:"file",data:{type:"exchange"},"on-success":e.uploadZh,"before-upload":e.onBeforeUpload,"on-error":e.uploadError,limit:1,"on-exceed":e.exceed},slot:"append"},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"英文图片",prop:"imgUrlEn"}},[a("el-input",{attrs:{size:"small",placeholder:"请选择上传"},model:{value:e.form.imgUrlEn,callback:function(t){e.$set(e.form,"imgUrlEn",t)},expression:"form.imgUrlEn"}},[a("el-upload",{ref:"enzh",attrs:{slot:"append",action:e.$img_api,multiple:"",name:"file",data:{type:"exchange"},"show-file-list":!0,"on-success":e.uploadEn,"before-upload":e.onBeforeUpload,"on-error":e.uploadError,limit:1,"on-exceed":e.exceed},slot:"append"},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),a("div",{staticClass:"spance"}),e._v(" "),a("el-form-item",{attrs:{label:"客户端",prop:"deviceType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.deviceType,callback:function(t){e.$set(e.form,"deviceType",t)},expression:"form.deviceType"}},e._l(e.deviceList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"跳转链接",prop:"jumpUrl"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入跳转链接",id:"jumpUrl"},model:{value:e.form.jumpUrl,callback:function(t){e.$set(e.form,"jumpUrl","string"===typeof t?t.trim():t)},expression:"form.jumpUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"weight"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入排序优先级",id:"weight",type:"number"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight","string"===typeof t?t.trim():t)},expression:"form.weight"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生效时间",prop:"effectTime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.form.effectTime,callback:function(t){e.$set(e.form,"effectTime",t)},expression:"form.effectTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上架",prop:"bannerStatus"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.bannerStatus,callback:function(t){e.$set(e.form,"bannerStatus",t)},expression:"form.bannerStatus"}})],1)],1),e._v(" "),a("div",{staticClass:"footer"},[a("el-button",{attrs:{size:"small",type:"primary",loading:e.btnLoading},on:{click:e.confirm}},[e._v("确定")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},u=[],f=a("5530"),p=a("15fd"),d=(a("c5f6"),a("0bbc")),h=a("5d48"),b=a("ed08"),g=["id","bannerStatus","effectTime"],v={components:{BDialog:d["a"],BSingleUpload:h["a"]},props:{visible:{default:!1,type:Boolean},row:{default:function(){},type:Object},type:{type:Number,default:0}},computed:{showDialog:{get:function(){return this.visible},set:function(e){this.$emit("close",e)}}},data:function(){return{title:"添加banner",btnLoading:!1,rules:{bannerName:[{required:!0,message:"请输入bannner名称",trigger:"blur"}],imgUrl:[{required:!0,message:"请选择中文图片",trigger:"blur"}],imgUrlEn:[{required:!0,message:"请选择英文图片",trigger:"blur"}],weight:[{required:!0,message:"请选择排序权重",trigger:"blur"}],deviceType:[{required:!0,message:"请选择客户端",trigger:"change"}],effectTime:[{required:!0,message:"请选择生效时间",trigger:"blur"}]},loading:!1,form:{id:"",bannerName:"",imgUrl:"",imgUrlEn:"",jumpUrl:"",weight:"",bannerStatus:!1,deviceType:1,effectTime:""},deviceList:[{label:"ios",value:1},{label:"安卓",value:2},{label:"pc,h5",value:3}]}},methods:{onBeforeUpload:function(e){var t=e.size/1024/1024<8;t||this.$message.error("上传文件大小不能超过 8 MB！")},exceed:function(e,t){this.$message.error("单次只能选择一张图片进行上传！")},uploadZh:function(e,t,a){this.form.imgUrl=e.data[0].url,this.$refs.upzh.handleRemove(t)},uploadEn:function(e,t,a){this.form.imgUrlEn=e.data[0].url,this.$refs.enzh.handleRemove(t)},uploadError:function(){this.$message.error("图片上传失败")},confirm:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this,this.$refs.form.validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var r,i,n,s,o,l,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=18;break}if(r=t.form,i=r.id,n=r.bannerStatus,s=r.effectTime,o=Object(p["a"])(r,g),l=Object(f["a"])({bannerStatus:n?1:0,effectTime:Object(b["a"])(s)},o),t.btnLoading=!0,""!==i){e.next=10;break}return e.next=7,c["a"].addAppBannerInfo(l);case 7:e.t0=e.sent,e.next=13;break;case 10:return e.next=12,c["a"].editAppBannerInfo(Object(f["a"])({id:i},l));case 12:e.t0=e.sent;case 13:m=e.t0,m&&(t.$message({message:m.data.message,type:"success"}),t.$emit("close"),t.$emit("freshData")),t.btnLoading=!1,e.next=19;break;case 18:t.$message.error({title:"提示",message:"请完成表单内容填写再重试"});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.$emit("close")},dialogOpen:function(){var e=this;this.$nextTick((function(){if(e.$refs.form.resetFields(),1===e.type){var t=e.row,a=t.id,r=t.bannerName,i=t.imgUrl,n=t.imgUrlEn,s=t.isProxyVisible,o=t.jumpUrl,l=t.weight,c=t.bannerStatus,m=t.deviceType,u=t.effectTime;e.form={id:a,bannerName:r,imgUrl:i,imgUrlEn:n,isProxyVisible:s,jumpUrl:o,weight:l,bannerStatus:c,deviceType:m,effectTime:u},e.title="编辑banner"}0===e.type&&(e.title="添加banner",e.form={id:"",isProxyVisible:"",bannerName:"",imgUrl:"",imgUrlEn:"",jumpUrl:"",weight:"",bannerStatus:!1,deviceType:1,effectTime:""})}))}}},_=v,w=(a("1c19"),a("2877")),y=Object(w["a"])(_,m,u,!1,null,null,null),x=y.exports,U=(a("ca00"),{name:"Banner",components:{Btable:o["a"],Bsearch:s["a"],BannerDialog:x},data:function(){return{isCURDAuth:!0,listLoading:!1,list:[],configs:[],searchConfig:[],search_params_obj:{},current_page:1,pages:0,pageSize:10,total:0,detail_list:[],show_detail_modal:!1,show_modal_type:0,row:{}}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,i,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.fn,r=t.row,"edit"===a&&(console.log("row",r),this.row=r,this.show_modal_type=1,this.show_detail_modal=!0),"delete"===a&&this.$confirm("是否删除此banner?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].deleteAppBannerInfo({bannerId:r.id});case 2:t=e.sent,t&&(s.$message({type:"success",message:t.data.message}),s.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),"switchCoin"!==a){e.next=8;break}return e.next=6,c["a"].editAppBannerInfo({id:r.id,bannerStatus:r.bannerStatus?1:0});case 6:i=e.sent,i?(this.$message({type:"success",message:i.data.message}),this.getList()):this.getList();case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchConfig.forEach((function(e){e["value"]=""})),this.getList()},closeDialog:function(){this.show_detail_modal=!1},createBanner:function(){this.show_modal_type=0,this.row={},this.show_detail_modal=!0},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return this.listLoading=!0,this,t={},Object.assign(t,this.search_params_obj),e.next=8,c["a"].getAppBannerList(t);case 8:a=e.sent,a&&(r=a.data.data,r.forEach((function(e){e["bannerStatus"]=1===e["bannerStatus"]})),this.list=r,this.listLoading=!1);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("Banner",l["a"],l["b"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchConfig=this.$util.clone(l["c"]),this.getList()}}),$=U,k=(a("05d5"),Object(w["a"])($,r,i,!1,null,null,null));t["default"]=k.exports},f3b2:function(e,t,a){}}]);