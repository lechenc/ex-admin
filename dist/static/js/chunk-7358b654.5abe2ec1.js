(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7358b654"],{7514:function(e,t,r){"use strict";var a=r("5ca1"),i=r("0a49")(5),s="find",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(s)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"900c":function(e,t,r){},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c081:function(e,t,r){"use strict";var a=r("900c"),i=r.n(a);i.a},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},c370:function(e,t,r){"use strict";r.r(t);var a,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"moveRelationship-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{excelLoading:e.excelLoading,exportExcel:e.btnArr.includes("excel"),configs:e.searchCofig},on:{"do-exportExcel":e.exportExcel,"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addMoveRelationship}},[e._v("创建迁移")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:"迁移邀请关系",labelw:"",visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"roleForm",attrs:{model:e.roleForm,"label-width":"120px",rules:e.rules}},[r("el-form-item",{attrs:{label:"需迁移的UID",prop:"changeUid"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.roleForm.changeUid,callback:function(t){e.$set(e.roleForm,"changeUid","string"===typeof t?t.trim():t)},expression:"roleForm.changeUid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"迁移至的UID",prop:"laterParentUid"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.roleForm.laterParentUid,callback:function(t){e.$set(e.roleForm,"laterParentUid","string"===typeof t?t.trim():t)},expression:"roleForm.laterParentUid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"谷歌验证码",prop:"googleCode"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.roleForm.googleCode,callback:function(t){e.$set(e.roleForm,"googleCode","string"===typeof t?t.trim():t)},expression:"roleForm.googleCode"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.checkTitle,visible:e.checkDialogFormVisible,width:"700px"},on:{"update:visible":function(t){e.checkDialogFormVisible=t}}},[r("el-form",{ref:"checkForm",attrs:{model:e.checkForm,"label-width":"120px",rules:e.checkRules}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"当前状态: "}},[e._v(" "+e._s(e.typeObj[e.currentForm.auditStatus]))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"迁移至的UID: "}},[e._v(" "+e._s(e.currentForm.laterParentUid))])],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"需要迁移的UID: "}},[e._v(" "+e._s(e.currentForm.changeUid))])],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"原上级的UID: "}},[e._v(" "+e._s(e.currentForm.formerParentUid))])],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"提交时间: "}},[e._v(" "+e._s(e.currentForm.createTime))])],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"提交人: "}},[e._v(" "+e._s(e.currentForm.creatorUserName))])],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"订单号: "}},[e._v(" "+e._s(e.currentForm.orderId))])],1)],1),e._v(" "),0!=e.recheckType?r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"初审时间: "}},[e._v(" "+e._s(e.currentForm.firstAuditTime))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"初审人: "}},[e._v(" "+e._s(e.currentForm.firstAuditUserName))])],1)],1):e._e(),e._v(" "),0==e.recheckType&&e.isDetail?e._e():r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"初审备注: ",prop:"firstAuditRemark"}},[r("el-input",{attrs:{rows:"2",disabled:e.isDetail||1==e.recheckType,placeholder:"请输入内容",type:"textarea"},model:{value:e.checkForm.firstAuditRemark,callback:function(t){e.$set(e.checkForm,"firstAuditRemark","string"===typeof t?t.trim():t)},expression:"checkForm.firstAuditRemark"}})],1)],1)],1),e._v(" "),3==e.recheckType||4==e.recheckType?r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"复审时间: "}},[e._v(" "+e._s(e.currentForm.reviewAuditTime))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"复审人: "}},[e._v(" "+e._s(e.currentForm.reviewAuditUserName))])],1)],1):e._e(),e._v(" "),0==e.recheckType||2==e.recheckType||1==e.recheckType&&e.isDetail?e._e():r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"复审备注: ",prop:"reviewAuditRemark"}},[r("el-input",{attrs:{rows:"2",disabled:e.isDetail,placeholder:"请输入内容",type:"textarea"},model:{value:e.checkForm.reviewAuditRemark,callback:function(t){e.$set(e.checkForm,"reviewAuditRemark","string"===typeof t?t.trim():t)},expression:"checkForm.reviewAuditRemark"}})],1)],1)],1)],1),e._v(" "),e.isDetail?r("div",{staticClass:"dialog-footer dialog-footer-check",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.checkDialogFormVisible=!1}}},[e._v("确 定")])],1):r("div",{staticClass:"dialog-footer dialog-footer-check",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.checkConfirmOp(1)}}},[e._v("审核通过")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.checkConfirmOp(0)}}},[e._v("审核驳回")])],1)],1)],1)},s=[],o=(r("8e6e"),r("456d"),r("a481"),r("ac6a"),r("bd86")),n=(r("96cf"),r("3b8d")),c=r("c249"),l=r("2fee"),u=r("f21b"),h=r("0203"),p=r("4ec3"),m=r("ca00");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"MoveRelationship",components:{Btable:l["a"],Bsearch:c["a"],iconPage:u["a"]},data:function(){return{typeObj:{0:"待初审",1:"待复审",2:"初审驳回",3:"复审通过",4:"复审驳回"},isDetail:!1,excelLoading:!1,checkForm:{},currentForm:{},btnLoading:!1,recheckType:"",checkTitle:"",checkRules:{firstAuditRemark:[{required:!0,message:"必填",trigger:"blur"}],reviewAuditRemark:[{required:!0,message:"必填",trigger:"blur"}]},roleForm:{changeUid:"",laterParentUid:"",googleCode:""},rules:{changeUid:[{required:!0,message:"必填",trigger:"blur"}],laterParentUid:[{required:!0,message:"必填",trigger:"blur"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}]},dialogFormVisible:!1,checkDialogFormVisible:!1,isCURDAuth:!1,listLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,btnArr:[]}},methods:(a={exportExcel:function(e){this.search_params_obj=e.query;var t=e.num;m["a"].exportData.apply(this,[t])},queryData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=5,p["a"].apiGetMoveRelationshipList(t);case 5:return r=e.sent,this.excelLoading=!1,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkConfirmOp:function(e){var t=this;this.$refs["checkForm"].validate(function(){var r=Object(n["a"])(regeneratorRuntime.mark((function r(a){var i,s,o,n,c,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=14;break}if(i=t.checkForm,s=i.id,o=i.firstAuditRemark,n=i.reviewAuditRemark,c={id:s},0!==t.recheckType){r.next=9;break}return r.next=6,p["a"].apiUpdateFirstAuditStatus(g({},c,{firstAuditRemark:o,changeState:e?1:2}));case 6:r.t0=r.sent,r.next=12;break;case 9:return r.next=11,p["a"].apiUpdateReviewAuditStatus(g({},c,{reviewAuditRemark:n,changeState:e?3:4}));case 11:r.t0=r.sent;case 12:l=r.t0,l&&(t.$message({message:"成功",type:"success"}),t.checkDialogFormVisible=!1,t.getList());case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},confirmOp:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["roleForm"].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var a,i,s,o,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return a=t.roleForm,i=a.changeUid,s=a.laterParentUid,o=a.googleCode,n={changeUid:i,laterParentUid:s,googleCode:o},e.next=5,p["a"].apiAddMoveRelationshipList(n);case 5:c=e.sent,c&&(t.$message({message:"迁移成功",type:"success"}),t.dialogFormVisible=!1,t.getList());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),addMoveRelationship:function(){var e=this;this.dialogFormVisible=!0,this.$nextTick((function(){e.roleForm={changeUid:"",laterParentUid:"",googleCode:""}}))},doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,this.row=a,this.recheckType=a.auditStatus,this.$nextTick((function(){i.checkForm={id:a.id,firstAuditRemark:a.firstAuditRemark,reviewAuditRemark:a.reviewAuditRemark},i.$refs["checkForm"].resetFields()})),"firstTrial"===r&&(this.checkDialogFormVisible=!0,this.checkTitle="初审",this.currentForm=a,this.isDetail=!1),"recheck"===r&&(this.checkDialogFormVisible=!0,this.checkTitle="复审",this.currentForm=a,this.isDetail=!1),"detail"===r&&(this.checkDialogFormVisible=!0,this.checkTitle="详情",this.currentForm=a,this.isDetail=!0);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()}},Object(o["a"])(a,"exportExcel",(function(){m["a"].exportData.apply(this,[0])})),Object(o["a"])(a,"pageSizeChange",(function(e){this.current_page=1,this.pageSize=e,this.getList()})),Object(o["a"])(a,"goPage",(function(e){this.current_page=e,this.getList()})),Object(o["a"])(a,"getList",function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,i,s,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,p["a"].apiGetMoveRelationshipList(t);case 8:r=e.sent,r&&(a=r.data.data,i=a.records,s=a.total,o=a.current,n=a.pages,this.total=+s,this.pages=+n,this.current_page=+o,this.list=i,this.dataList=i),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()),Object(o["a"])(a,"formatTime",(function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")})),Object(o["a"])(a,"requiredParams",(function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),r=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[0].value=[t,r],e.endCreateTime=r.replace(/\//gi,"-"),e.startCreateTime=t.replace(/\//gi,"-")}this.search_params_obj.startCreateTime&&(this.search_params_obj.endCreateTime=this.formatTime(this.search_params_obj.endCreateTime),this.search_params_obj.startCreateTime=this.formatTime(this.search_params_obj.startCreateTime))})),a),mounted:function(){var e=this.$util.getAuthority("MoveRelationship",h["a"],h["b"]);this.btnArr=e.btnArr||[],this.configs=e.val,this.isCURDAuth=e.isAdd,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(h["c"]),this.getList()}},b=f,v=(r("c081"),r("0c7c")),k=Object(v["a"])(b,i,s,!1,null,null,null);t["default"]=k.exports},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var s={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},o=i.replace(/{([ymdhisa])+}/g,(function(e,t){var r=s[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},ff53:function(e,t,r){"use strict";var a=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function s(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=s(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function n(e){m&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function c(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),l=2;l<r;l++)i[l-2]=arguments[l];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var u=o(e),h=o(t),p=s(e)+s(t),m=u*h;return n(m),m/Math.pow(10,p)}function l(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(i.length>0)return l.apply(void 0,[l(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var n=Math.pow(10,Math.max(s(e),s(t)));return(c(e,n)+c(t,n))/n}function u(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(i.length>0)return u.apply(void 0,[u(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var n=Math.pow(10,Math.max(s(e),s(t)));return(c(e,n)-c(t,n))/n}function h(e,t){for(var r=arguments.length,l=new Array(r>2?r-2:0),u=2;u<r;u++)l[u-2]=arguments[u];if(l.length>0)return h.apply(void 0,[h(e,t),l[0]].concat(Object(a["a"])(l.slice(1))));var p=o(e),m=o(t);return n(p),n(m),c(p/m,i(Math.pow(10,s(t)-s(e))))}function p(e,t){var r=Math.pow(10,t);return h(Math.round(c(e,r)),r)}var m=!0;function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m=e}t["a"]={strip:i,plus:l,minus:u,times:c,divide:h,round:p,digitLength:s,float2Fixed:o,enableBoundaryChecking:d}}}]);