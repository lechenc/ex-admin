(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e745598"],{5072:function(e,t,a){},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),n="find",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},"7aef":function(e,t,a){"use strict";var r=a("5072"),i=a.n(r);i.a},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},bdbf:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"acceptanceChannelList-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,excelLoading:e.excelLoading,exportExcel:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel}})],1),e._v(" "),a("div",[a("div",{staticClass:"container-btn"},[e.btnArr.includes("add")?a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.createVisible=!0}}},[e._v("创建渠道")]):e._e()],1),e._v(" "),a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"创建渠道",visible:e.createVisible,width:"550px"},on:{"update:visible":function(t){e.createVisible=t}}},[a("div",[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.formRules,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"渠道名称",prop:"channelName"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入渠道名称"},model:{value:e.ruleForm.channelName,callback:function(t){e.$set(e.ruleForm,"channelName",t)},expression:"ruleForm.channelName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"承兑商UID",prop:"advertiserUid"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入一级承兑商UID"},on:{input:function(t){return e.checkVal("advertiserUid")}},model:{value:e.ruleForm.advertiserUid,callback:function(t){e.$set(e.ruleForm,"advertiserUid",t)},expression:"ruleForm.advertiserUid"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.createVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createAgent}},[e._v("确 定")])],1)])],1)},i=[],n=(a("ac6a"),a("96cf"),a("3b8d")),s=(a("a481"),a("01fb")),c=a("c249"),o=a("2fee"),l=a("f21b"),u=a("f556"),h=a("4ec3"),g=a("ca00"),d={name:"AcceptanceChannelList",components:{Btable:o["a"],Bsearch:c["a"],iconPage:l["a"],CountdownBtn:s["a"]},data:function(){var e=/^[a-zA-Z0-9\u4e00-\u9fa5]{3,12}$/,t=function(t,a,r){if(!e.test(a))return r(new Error(t.message));r()},a=function(e,t,a){if(""===t.trim())return a(new Error(e.message));a()};return{listLoading:!1,btnLoading:!1,calLoading:!1,disabled:!1,createVisible:!1,activeName:"first",excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",formLabelWidth:"110px",assetsList:[],isModify:!1,nowUserId:0,title:"",labelWidth:"100px",dialogVisible:!1,ruleForm:{},formRules:{channelName:[{required:!0,message:"请输入渠道名称",trigger:"blur"},{required:!0,validator:a,message:"请输入",trigger:"blur"},{validator:t,message:"请输入字母,数字和汉字组合共3-12位",trigger:"blur"}],advertiserUid:[{required:!0,message:"请输入承兑商UID",trigger:"blur"}]},form:{channelName:"",advertiserUid:""},rules:{channelName:[{required:!0,message:"必填"}],advertiserUid:[{required:!0,message:"必填"}]},btnArr:[]}},watch:{createVisible:function(e,t){e&&(this.ruleForm={})}},methods:{checkVal:function(e){this.ruleForm[e]=(this.ruleForm[e]+"").replace(/[^\d]/g,"")},onCopy:function(){this.$message.success("复制成功")},countdownBtn:function(e){this.disabled=e},createAgent:function(){var e=this;this.$refs["ruleForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,i,n,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=14;break}return t.prev=1,r=e.ruleForm,i=r.channelName,n=r.advertiserUid,s={channelName:i,advertiserUid:n},t.next=6,h["a"].createAcceptanceChannel(s);case 6:c=t.sent,console.log(c),c?(e.$message.success("创建成功"),e.createVisible=!1,e.getList()):e.$message.error(c.data.message),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}())},onError:function(){this.$message.success("复制失败")},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},exportExcel:function(e){console.log("val",e),this.search_params_obj=e.query;var t=e.num;g["a"].exportData.apply(this,[t])},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i,n,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,h["a"].getAcceptanceChannelList(t);case 8:a=e.sent,console.log(a.data.data),a&&(r=a.data.data,i=r.records,n=r.total,s=r.current,c=r.pages,this.total=n,this.pages=c,this.current_page=s,i.forEach((function(e){e["isCreateAgent"]=e["isCreateAgent"]?1:0})),this.list=i,this.dataList=i),this.listLoading=!1;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),queryData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=5,h["a"].getAcceptanceChannelList(t);case 5:if(a=e.sent,this.excelLoading=!1,!a){e.next=9;break}return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:(e+"").replace(/\//gi,"-")},requiredParams:function(e){this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))}},mounted:function(){var e=this.$util.getAuthority("AcceptanceChannelList",u["a"],[]);this.btnArr=e.btnArr,this.configs=e.val,this.searchCofig=this.$util.clone(u["b"]),this.getList()}},p=d,m=(a("7aef"),a("0c7c")),f=Object(m["a"])(p,r,i,!1,null,null,null);t["default"]=f.exports}}]);