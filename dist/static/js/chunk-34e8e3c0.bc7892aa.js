(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34e8e3c0"],{"2f21":function(e,t,o){"use strict";var i=o("79e5");e.exports=function(e,t){return!!e&&i((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"55dd":function(e,t,o){"use strict";var i=o("5ca1"),r=o("d8e8"),a=o("4bf8"),n=o("79e5"),s=[].sort,l=[1,2,3];i(i.P+i.F*(n((function(){l.sort(void 0)}))||!n((function(){l.sort(null)}))||!o("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(a(this)):s.call(a(this),r(e))}})},af2e:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"apiKeyConfig-container"},[o("div",{staticClass:"container-btn"},[o("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addLine}},[e._v("添加")])],1),e._v(" "),o("div",[o("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),o("div",{staticClass:"container-footer"},[o("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),o("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),o("el-dialog",{attrs:{visible:e.dialogVisible,width:"600px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":e.labelWidth,rules:e.rules}},[o("el-form-item",{attrs:{label:"UID",prop:"uid"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.form.uid,callback:function(t){e.$set(e.form,"uid",t)},expression:"form.uid"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"备注",prop:"destext"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.form.destext,callback:function(t){e.$set(e.form,"destext",t)},expression:"form.destext"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"API Key:",prop:"appKey"}},[o("el-col",{attrs:{span:19}},[o("el-input",{attrs:{type:"text",placeholder:"请输入",readonly:!0},model:{value:e.form.appKey,callback:function(t){e.$set(e.form,"appKey",t)},expression:"form.appKey"}})],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-button",{staticClass:"btn-right",attrs:{type:"primary",size:"medium"},on:{click:function(t){return t.stopPropagation(),e.editPwd("appKey")}}},[e._v("获取Key")])],1)],1),e._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"5px"},attrs:{label:"Secret Key:",prop:"appSecret"}},[o("el-row",{attrs:{span:24}},[o("el-col",{attrs:{span:19}},[o("el-input",{attrs:{type:"text",placeholder:"请输入",readonly:!0},model:{value:e.form.appSecret,callback:function(t){e.$set(e.form,"appSecret",t)},expression:"form.appSecret"}})],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-button",{staticClass:"btn-right",attrs:{type:"primary",size:"medium"},on:{click:function(t){return t.stopPropagation(),e.editPwd("appSecret")}}},[e._v("获取Key")])],1)],1),e._v(" "),o("el-row",{staticStyle:{color:"#ccc"},attrs:{span:24}},[e._v(" *密钥仅显示1次，遗失后不可找回，请务必妥善保存 ")])],1),e._v(" "),o("el-form-item",{attrs:{label:"开关",prop:"isShow"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.isShow,callback:function(t){e.$set(e.form,"isShow",t)},expression:"form.isShow"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"谷歌验证",prop:"googleCode"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("form","googleCode")}},model:{value:e.form.googleCode,callback:function(t){e.$set(e.form,"googleCode",t)},expression:"form.googleCode"}})],1)],1),e._v(" "),o("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1),e._v(" "),o("el-dialog",{attrs:{visible:e.googleDialogVisible,width:"500px",title:"谷歌验证"},on:{"update:visible":function(t){e.googleDialogVisible=t}}},[o("el-form",{ref:"googleForm",attrs:{model:e.googleForm,"label-width":e.labelWidth,rules:e.googleRules}},[o("el-form-item",{attrs:{label:"谷歌验证",prop:"googleCode"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("googleForm","googleCode")}},model:{value:e.googleForm.googleCode,callback:function(t){e.$set(e.googleForm,"googleCode",t)},expression:"googleForm.googleCode"}})],1)],1),e._v(" "),o("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){return t.stopPropagation(),e.googleCancel(t)}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary",loading:e.googleBtnLoading},on:{click:function(t){return t.stopPropagation(),e.googleConfirmOp(t)}}},[e._v("确定")])],1)],1)],1)},r=[],a=(o("8e6e"),o("456d"),o("a481"),o("bd86")),n=(o("ac6a"),o("55dd"),o("96cf"),o("3b8d")),s=o("c249"),l=o("2fee"),c=o("f21b"),g=o("e582"),u=o("4ec3");function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){Object(a["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var f={name:"ApiKeyConfig",components:{Btable:l["a"],Bsearch:s["a"],iconPage:c["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,title:"添加",labelWidth:"100px",dialogVisible:!1,form:{id:"",uid:"",isShow:!0,appKey:"",appSecret:"",destext:"",googleCode:""},rules:{appKey:[{required:!0,message:"必填"}],uid:[{required:!0,message:"必填"}],appSecret:[{required:!0,message:"必填"}],destext:[{required:!0,message:"必填"}],googleCode:[{required:!0,message:"必填"}]},curRow:{},googleForm:{googleCode:""},googleRules:{googleCode:[{required:!0,message:"必填"}]},googleBtnLoading:!1,googleDialogVisible:!1,isDel:!0}},methods:{editPwd:function(e){"appKey"==e?this.form.appKey=this.$util.randomRange(8):"appSecret"==e&&(this.form.appSecret=this.$util.randomRange(33))},googleCancel:function(){this.googleDialogVisible=!1,this.getList()},doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var o,i,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t.fn,i=t.row,this.curRow=i,"edit"===o&&(this.title="编辑",this.dialogVisible=!0,this.$nextTick((function(){a.$refs["form"].resetFields(),a.form={id:i.id,keyName:i.keyName,englishKeyName:i.englishKeyName,appKey:i.appKey,iconUrl:i.iconUrl,blackIconUrl:i.blackIconUrl,htmlUrl:i.htmlUrl,indexName:i.indexName,status:!!i.status,onlineStatus:!!i.onlineStatus,sort:i.sort}}))),"del"!==o){e.next=11;break}if(!i.isShow){e.next=6;break}return e.abrupt("return",this.$message.error("关闭状态下才能删除"));case 6:return this.isDel=!0,this.googleDialogVisible=!0,this.$nextTick((function(){a.googleForm={googleCode:""}})),e.abrupt("return");case 11:if("trswitch"!==o&&"trlogin"!==o){e.next=23;break}return this.isDel=!1,this.googleDialogVisible=!0,this.$nextTick((function(){a.googleForm={googleCode:""}})),e.abrupt("return");case 21:r=e.sent,r?(this.$message({message:"切换成功",type:"success"}),this.getList()):this.getList();case 23:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},addLine:function(){var e=this;this.title="添加",this.dialogVisible=!0,this.$nextTick((function(){e.form={id:"",uid:"",isShow:!0,appKey:"",appSecret:"",destext:"",googleCode:""},e.$refs["form"].resetFields()}))},confirmOp:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(o){var i,r,a,n,s,l,c,g,p,f,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=18;break}if(!e.btnLoading){t.next=3;break}return t.abrupt("return");case 3:if(i=e.form,r=i.id,a=i.uid,n=i.isShow,s=i.appKey,l=i.appSecret,c=i.destext,g=i.googleCode,p={appKey:s,uid:a,appSecret:l,destext:c,googleCode:g,isShow:n?1:0},e.btnLoading=!0,""!==r){t.next=12;break}return t.next=9,u["a"].addApiKeyConfig(p);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,u["a"].getEditKey(d({id:r},p));case 14:t.t0=t.sent;case 15:f=t.t0,f&&(h=""===r?"添加成功":"编辑成功",e.$message({message:h,type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},googleConfirmOp:function(){var e=this;this.$refs["googleForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(o){var i,r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=18;break}if(!e.googleBtnLoading){t.next=3;break}return t.abrupt("return");case 3:if(i=e.googleForm.googleCode,r=e.isDel?{id:e.curRow.id,googleCode:i}:{id:e.curRow.id,googleCode:i,isShow:e.curRow.isShow?1:0},e.googleBtnLoading=!0,!e.isDel){t.next=12;break}return t.next=9,u["a"].delApiKeyConfig(r);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,u["a"].updateApiKeyConfigSwitch(r);case 14:t.t0=t.sent;case 15:a=t.t0,a&&(n=e.isDel?"删除成功":"切换成功",e.$message({message:n,type:"success"}),e.googleDialogVisible=!1,e.getList()),e.googleBtnLoading=!1;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,o,i,r,a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,u["a"].getApiKeyConfigList(t);case 7:o=e.sent,o&&(i=o.data.data,r=i.records,a=i.total,n=i.current,s=i.pages,r.forEach((function(e){e["isShow"]=!!e["isShow"]})),this.list=r,this.total=a,this.current_page=n,this.pages=s),this.listLoading=!1;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkVal:function(e,t){this[e][t]=(this[e][t]+"").replace(/[^\d]/g,"")}},mounted:function(){var e=this.$util.getAuthority("ApiKeyConfig",g["d"],g["e"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchCofig=this.$util.clone(g["f"]),this.getList()}},h=f,m=(o("fb17"),o("0c7c")),b=Object(m["a"])(h,i,r,!1,null,null,null);t["default"]=b.exports},eae5:function(e,t,o){},fb17:function(e,t,o){"use strict";var i=o("eae5"),r=o.n(i);r.a}}]);