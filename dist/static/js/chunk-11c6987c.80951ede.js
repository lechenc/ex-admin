(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11c6987c"],{"2e08":function(t,e,a){var i=a("9def"),r=a("9744"),n=a("be13");t.exports=function(t,e,a,s){var o=String(n(t)),l=o.length,c=void 0===a?" ":String(a),u=i(e);if(u<=l||""==c)return o;var p=u-l,d=r.call(c,Math.ceil(p/c.length));return d.length>p&&(d=d.slice(0,p)),s?d+o:o+d}},"3ec2":function(t,e,a){},"53e9":function(t,e,a){"use strict";a("3ec2")},7514:function(t,e,a){"use strict";var i=a("5ca1"),r=a("0a49")(5),n="find",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},"87f3":function(t,e,a){var i=a("5ca1");i(i.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var i=a("5ca1");i(i.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(t,e,a){"use strict";var i=a("4588"),r=a("be13");t.exports=function(t){var e=String(r(this)),a="",n=i(t);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},c270:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("28a5"),a("f576"),a("a481"),a("6b54");var i=a("53ca");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,r=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(i["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var n={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},s=r.replace(/{([ymdhisa])+}/g,(function(t,e){var a=n[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return s=s.replace(/\//gi,"-"),s}},efb9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"riskList-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig},on:{"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),t.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.addRiskConfig}},[t._v("风控参数配置")])],1):t._e(),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.checkTitle,visible:t.dialogFormVisible,width:"700px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}],ref:"currentForm",attrs:{model:t.currentForm,"label-width":"120px",rules:t.rules}},[a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"异常类型: "}},[[a("el-select",{attrs:{disabled:"",placeholder:""},model:{value:t.limitType,callback:function(e){t.limitType=e},expression:"limitType"}},t._l(t.limitTypeArr,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]],2)],1)],1),t._v(" "),0==t.limitType?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"异常设备号: "}},[a("el-input",{attrs:{disabled:!0},model:{value:t.limitIp,callback:function(e){t.limitIp=e},expression:"limitIp"}})],1)],1)],1):t._e(),t._v(" "),1==t.limitType?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"异常注册IP: "}},[a("el-input",{attrs:{disabled:!0},model:{value:t.limitIp,callback:function(e){t.limitIp=e},expression:"limitIp"}})],1)],1)],1):t._e(),t._v(" "),2==t.limitType?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"异常登录IP: "}},[a("el-input",{attrs:{disabled:!0},model:{value:t.limitIp,callback:function(e){t.limitIp=e},expression:"limitIp"}})],1)],1)],1):t._e(),t._v(" "),1==t.limitType?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"异常注册IP关联UID: "}},[a("el-input",{attrs:{disabled:!0,rows:"5",type:"textarea"},model:{value:t.currentForm.abnormalRegisterIpUids,callback:function(e){t.$set(t.currentForm,"abnormalRegisterIpUids",e)},expression:"currentForm.abnormalRegisterIpUids"}})],1)],1)],1):t._e(),t._v(" "),2==t.limitType?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"异常登录IP关联UID: "}},[a("el-input",{attrs:{disabled:!0,rows:"5",type:"textarea"},model:{value:t.currentForm.abnormalLoginIpUids,callback:function(e){t.$set(t.currentForm,"abnormalLoginIpUids",e)},expression:"currentForm.abnormalLoginIpUids"}})],1)],1)],1):t._e(),t._v(" "),0==t.limitType?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"异常设备号关联UID: "}},[a("el-input",{attrs:{disabled:!0,rows:"5",type:"textarea"},model:{value:t.currentForm.abnormalDevNoUids,callback:function(e){t.$set(t.currentForm,"abnormalDevNoUids",e)},expression:"currentForm.abnormalDevNoUids"}})],1)],1)],1):t._e(),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"创建时间: "}},[t._v(" "+t._s(t.currentForm.createTime))])],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"处理状态: ",prop:"disposeStatus"}},[[a("el-select",{attrs:{disabled:t.isDetail,placeholder:"请选择"},model:{value:t.currentForm.disposeStatus,callback:function(e){t.$set(t.currentForm,"disposeStatus",e)},expression:"currentForm.disposeStatus"}},t._l(t.typeArr,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]],2)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"处理时间: "}},[t._v(" "+t._s(t.currentForm.disposeTime))])],1)],1)],1),t._v(" "),t.isDetail&&!t.dialogLoading?a("div",{staticClass:"dialog-footer dialog-footer-check",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("知 道 了")])],1):t._e(),t._v(" "),t.isDetail||t.dialogLoading?t._e():a("div",{staticClass:"dialog-footer dialog-footer-check",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmOp}},[t._v(" 确 定")])],1)],1)],1)},r=[],n=(a("a481"),a("ac6a"),a("96cf"),a("1da1")),s=a("c249"),o=a("2fee"),l=a("f21b"),c=a("0203"),u=a("4ec3"),p=a("ca00"),d={name:"riskList",components:{Btable:o["a"],Bsearch:s["a"],iconPage:l["a"]},data:function(){return{limitType:"",dialogLoading:!1,isDetail:!1,typeArr:[{value:0,label:"待处理"},{value:1,label:"异常处理"},{value:2,label:"正常处理"}],limitTypeArr:[{value:0,label:"异常设备"},{value:1,label:"异常注册IP"},{value:2,label:"异常登录"}],currentForm:{},btnLoading:!1,recheckType:"",checkTitle:"",rules:{disposeStatus:[{required:!0,message:"必填",trigger:"blur"}]},dialogFormVisible:!1,isCURDAuth:!1,listLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,curId:"",limitIp:!1}},methods:{confirmOp:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs["currentForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,u["a"].apiEditriskList({id:e.curId,status:e.currentForm.disposeStatus});case 3:i=t.sent,i&&(e.$message.success("处理成功"),e.dialogFormVisible=!1,e.getList());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addRiskConfig:function(){this.$router.push("/user/riskConfig")},doHandle:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,i,r,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.fn,i=e.row,this.row=i,this.limitType=i.limitType,this.limitIp=i.serialNumber,"detail"!==a){t.next=13;break}return this.dialogLoading=!0,this.dialogFormVisible=!0,this.checkTitle="详情",this.isDetail=!0,t.next=11,u["a"].apiGetriskListInfo({id:i.id});case 11:r=t.sent,r&&(this.dialogLoading=!1,n=r.data.data,this.currentForm=n);case 13:if("edit"!==a){t.next=22;break}return this.dialogLoading=!0,this.isDetail=!1,this.checkTitle="编辑",this.dialogFormVisible=!0,t.next=20,u["a"].apiGetriskListInfo({id:i.id});case 20:s=t.sent,s&&(this.dialogLoading=!1,this.curId=i.id,o=s.data.data,this.currentForm=o);case 22:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.getList()},exportExcel:function(){p["a"].exportData.apply(this,[0])},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,r,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageIndex:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].apiGetriskListList(e);case 8:a=t.sent,a&&(i=a.data.data,r=i.records,n=i.total,s=i.current,o=i.pages,this.total=+n,this.pages=+o,this.current_page=+s,this.list=r,this.dataList=r),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")},requiredParams:function(t){this.$util.isEmptyObject(this.search_params_obj)||this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))}},mounted:function(){var t=this.$util.getAuthority("riskList",c["d"],c["e"]);this.configs=t.val,this.isCURDAuth=t.isAdd,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(c["f"]),this.getList()}},m=d,g=(a("53e9"),a("2877")),h=Object(g["a"])(m,i,r,!1,null,null,null);e["default"]=h.exports},f576:function(t,e,a){"use strict";var i=a("5ca1"),r=a("2e08"),n=a("a25f"),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);i(i.P+i.F*s,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(t,e,a){"use strict";var i=a("2909");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(t).toPrecision(e))}function n(t){var e=t.toString().split(/[eE]/),a=(e[0].split(".")[1]||"").length-+(e[1]||0);return a>0?a:0}function s(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));var e=n(t);return e>0?r(Number(t)*Math.pow(10,e)):Number(t)}function o(t){m&&(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(t," is beyond boundary when transfer to integer, the results may not be accurate"))}function l(t,e){for(var a=arguments.length,r=new Array(a>2?a-2:0),c=2;c<a;c++)r[c-2]=arguments[c];if(r.length>0)return l.apply(void 0,[l(t,e),r[0]].concat(Object(i["a"])(r.slice(1))));var u=s(t),p=s(e),d=n(t)+n(e),m=u*p;return o(m),m/Math.pow(10,d)}function c(t,e){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];if(r.length>0)return c.apply(void 0,[c(t,e),r[0]].concat(Object(i["a"])(r.slice(1))));var o=Math.pow(10,Math.max(n(t),n(e)));return(l(t,o)+l(e,o))/o}function u(t,e){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];if(r.length>0)return u.apply(void 0,[u(t,e),r[0]].concat(Object(i["a"])(r.slice(1))));var o=Math.pow(10,Math.max(n(t),n(e)));return(l(t,o)-l(e,o))/o}function p(t,e){for(var a=arguments.length,c=new Array(a>2?a-2:0),u=2;u<a;u++)c[u-2]=arguments[u];if(c.length>0)return p.apply(void 0,[p(t,e),c[0]].concat(Object(i["a"])(c.slice(1))));var d=s(t),m=s(e);return o(d),o(m),l(d/m,r(Math.pow(10,n(e)-n(t))))}function d(t,e){var a=Math.pow(10,e);return p(Math.round(l(t,a)),a)}var m=!0;function g(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m=t}e["a"]={strip:r,plus:c,minus:u,times:l,divide:p,round:d,digitLength:n,float2Fixed:s,enableBoundaryChecking:g}}}]);