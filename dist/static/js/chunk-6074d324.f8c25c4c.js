(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6074d324"],{"0a91":function(t,e,a){},"25f0":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"f",(function(){return n})),a.d(e,"e",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return s})),a.d(e,"g",(function(){return p})),a.d(e,"i",(function(){return c})),a.d(e,"h",(function(){return u}));var r=[{label:"用户UID",prop:"uid"},{label:"点卡币种",prop:"coinName"},{label:"点卡数量",prop:"totalAmount"},{label:"可用数量",prop:"count"},{label:"冻结数量",prop:"usedAmount"},{label:"已用数量",prop:"returnAmount"},{label:"回收数量",prop:"returnAmount1"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"点卡回收",fn:"recycle",type:"text",alias:"recycle"}]}],n=[{label:"用户UID",prop:"uid"},{label:"点卡币种",prop:"coinName"},{label:"点卡数量",prop:"totalAmount"},{label:"可用数量",prop:"count"},{label:"冻结数量",prop:"usedAmount"},{label:"已用数量",prop:"returnAmount"},{label:"回收数量",prop:"returnAmount"}],i=[{type:"onlyNumber",label:"用户UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}],o=[{label:"序号ID",prop:"uid"},{label:"UID",prop:"coinName"},{label:"点卡名称",prop:"totalAmount"},{label:"点卡币种",prop:"count"},{label:"点卡数量",prop:"usedAmount"},{label:"赠送时间",prop:"returnAmount"},{label:"订单号",prop:"returnAmount1"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"查看详情",fn:"info",type:"text",alias:"info"},{label:"使用记录",fn:"use",type:"text",alias:"use"}]}],l=[{label:"序号ID",prop:"uid"},{label:"UID",prop:"coinName"},{label:"点卡名称",prop:"totalAmount"},{label:"点卡币种",prop:"count"},{label:"点卡数量",prop:"usedAmount"},{label:"赠送时间",prop:"returnAmount"},{label:"订单号",prop:"returnAmount1"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"查看详情",fn:"info",type:"text",alias:"info"},{label:"使用记录",fn:"use",type:"text",alias:"use"}]}],s=[{type:"date_rank",label:"创建时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"序号ID",prop:"id",value:"",placeHolder:"请输入"},{type:"text",label:"点卡名称",prop:"id1",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"订单号",prop:"uid1",value:"",placeHolder:"请输入"},{type:"select",label:"点卡币种",prop:"coinId",value:"",list:[]}],p=[{label:"商品序号ID",prop:"uid"},{label:"UID",prop:"coinName"},{label:"点卡名称",prop:"totalAmount"},{label:"数量",prop:"usedAmount"},{label:"类型",prop:"receiveStatus",type:"filter",show_type:"text",filters:[{text:"赠送点卡",val:0},{text:"抵扣币币交易手续费",val:1},{text:"抵扣合约交易手续费",val:2}]},{label:"时间",prop:"returnAmount"},{label:"交易订单号",prop:"returnAmount1"},{label:"操作",prop:"action",type:"action",width:100,btnGroup:[{label:"查看",fn:"info",type:"text",alias:"info"}]}],c=[{label:"商品序号ID",prop:"uid"},{label:"UID",prop:"coinName"},{label:"点卡名称",prop:"totalAmount"},{label:"数量",prop:"usedAmount"},{label:"类型",prop:"receiveStatus",type:"filter",show_type:"text",filters:[{text:"赠送点卡",val:0},{text:"抵扣币币交易手续费",val:1},{text:"抵扣合约交易手续费",val:2}]},{label:"时间",prop:"returnAmount"},{label:"交易订单号",prop:"returnAmount1"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"查看详情",fn:"info",type:"text",alias:"info"}]}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"活动ID",prop:"id",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"text",label:"点卡名称",prop:"id1",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"receiveStatus1",value:"",list:[{label:"赠送点卡",value:0},{label:"抵扣币币交易手续费",value:1},{label:"抵扣合约交易手续费",value:2}]},{type:"select",label:"状态",prop:"receiveStatus",value:"",list:[{label:"已完成",value:0}]},{type:"onlyNumber",label:"交易订单号",prop:"uid1",value:"",placeHolder:"请输入"}]},"425d":function(t,e,a){"use strict";var r=a("0a91"),n=a.n(r);n.a},"48a2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"treatyAssetsContract-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig,calTotal:!0},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-calTotal":t.calTotal}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{attrs:{title:"点卡回收",width:"500px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"cForm",attrs:{model:t.cForm,rules:t.rules}},[a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"可用数量","label-width":t.formLabelWidth,prop:"agentUID"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:""},model:{value:t.cForm.agentUID,callback:function(e){t.$set(t.cForm,"agentUID","string"===typeof e?e.trim():e)},expression:"cForm.agentUID"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"回收数量","label-width":t.formLabelWidth,prop:"agentUID"}},[a("el-input",{staticClass:"my-mumber-input",attrs:{type:"number",placeholder:"请输入"},model:{value:t.cForm.agentUID,callback:function(e){t.$set(t.cForm,"agentUID","string"===typeof e?e.trim():e)},expression:"cForm.agentUID"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"谷歌验证码","label-width":t.formLabelWidth,prop:"agentUID"}},[a("el-input",{staticClass:"my-mumber-input",attrs:{type:"number",placeholder:"请输入"},model:{value:t.cForm.agentUID,callback:function(e){t.$set(t.cForm,"agentUID","string"===typeof e?e.trim():e)},expression:"cForm.agentUID"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmOp}},[t._v("确 定")])],1)],1)],1)},n=[],i=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),o=a("c249"),l=a("2fee"),s=a("f21b"),p=a("25f0"),c=a("4ec3"),u={name:"TicketCardList",components:{Btable:l["a"],Bsearch:o["a"],iconPage:s["a"]},data:function(){return{cForm:{},rules:{},formLabelWidth:"120px",dialogFormVisible:!0,listLoading:!1,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,symbollist:[],toDay:"",ago:"",coin_List:[],btnLoading:!1}},methods:{confirmOp:function(){},calTotal:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.search_params_obj=e,this.calLoading=!0,a={},this.requiredParams(a),Object.assign(a,this.search_params_obj),t.next=7,c["a"].getTicketCardListTotal(a);case 7:r=t.sent,r&&(n=r.data.data,n?this.$alert("<p>点卡币种：".concat(n.originAmount,"</p>\n            <p>点卡数量：").concat(n.amount,"</p>\n            <p>可用数量：").concat(n.amount,"</p>\n            <p>冻结数量：").concat(n.amount,"</p>\n            <p>已用数量：").concat(n.amount,"</p>\n            <p>回收数量：").concat(n.amount,"</p>\n            "),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){})):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doHandle:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.fn,e.row,"recycle"===a&&(this.dialogFormVisible=!0);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.getList()},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},pageSizeChangeTable:function(t){this.current_page_table=1,this.pageSize_table=t,this.getInfoList()},goPageTable:function(t){this.current_page_table=t,this.getInfoList()},getInfoList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,i,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.dialogTableVisible=!0,!this.listLoading_table){t.next=3;break}return t.abrupt("return");case 3:return e={id:this.rowObj.id,pageNum:this.current_page_table,pageSize:this.pageSize_table},t.next=6,c["a"].getRedPacketInfoList(e);case 6:a=t.sent,a&&(r=a.data.data,n=r.records,i=r.total,o=r.current,l=r.pages,this.total_table=i,this.pages_table=l,this.current_page_table=o,this.list_table=n),this.listLoading_table=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,i,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,c["a"].getRedPacketList(e);case 8:a=t.sent,a&&(r=a.data.data,n=r.records,i=r.total,o=r.current,l=r.pages,this.total=i,this.pages=l,this.current_page=o,this.list=n),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requiredParams:function(t){var e=this;if(this.$util.isEmptyObject(this.search_params_obj)){var a=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),r=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");t.endTime=r.replace(/\//gi,"-"),t.startTime=a.replace(/\//gi,"-")}if(this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var n="";n=this.symbollist.filter((function(t){return t["id"]==e.search_params_obj.coinId}))[0].value,this.search_params_obj.coinMarket=n}},formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")},getSymbolList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("common/getCoinList").then((function(){e.coin_List=e.$store.state.common.coinlist,e.searchCofig[1]["list"]=e.$store.state.common.coinlist}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this.$util.getAuthority("TicketCardList",p["d"],p["f"]);this.configs=t.val,//console.log("ticketCardListConfig",p["e"]),this.searchCofig=this.$util.clone(p["e"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getSymbolList()}},b=u,h=(a("425d"),a("0c7c")),m=Object(h["a"])(b,r,n,!1,null,null,null);e["default"]=m.exports},7514:function(t,e,a){"use strict";var r=a("5ca1"),n=a("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"87f3":function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c270:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,n=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},o=n.replace(/{([ymdhisa])+}/g,(function(t,e){var a=i[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},ff53:function(t,e,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(t).toPrecision(e))}function i(t){var e=t.toString().split(/[eE]/),a=(e[0].split(".")[1]||"").length-+(e[1]||0);return a>0?a:0}function o(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));var e=i(t);return e>0?n(Number(t)*Math.pow(10,e)):Number(t)}function l(t){h&&(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(t," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),p=2;p<a;p++)n[p-2]=arguments[p];if(n.length>0)return s.apply(void 0,[s(t,e),n[0]].concat(Object(r["a"])(n.slice(1))));var c=o(t),u=o(e),b=i(t)+i(e),h=c*u;return l(h),h/Math.pow(10,b)}function p(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),o=2;o<a;o++)n[o-2]=arguments[o];if(n.length>0)return p.apply(void 0,[p(t,e),n[0]].concat(Object(r["a"])(n.slice(1))));var l=Math.pow(10,Math.max(i(t),i(e)));return(s(t,l)+s(e,l))/l}function c(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),o=2;o<a;o++)n[o-2]=arguments[o];if(n.length>0)return c.apply(void 0,[c(t,e),n[0]].concat(Object(r["a"])(n.slice(1))));var l=Math.pow(10,Math.max(i(t),i(e)));return(s(t,l)-s(e,l))/l}function u(t,e){for(var a=arguments.length,p=new Array(a>2?a-2:0),c=2;c<a;c++)p[c-2]=arguments[c];if(p.length>0)return u.apply(void 0,[u(t,e),p[0]].concat(Object(r["a"])(p.slice(1))));var b=o(t),h=o(e);return l(b),l(h),s(b/h,n(Math.pow(10,i(e)-i(t))))}function b(t,e){var a=Math.pow(10,e);return u(Math.round(s(t,a)),a)}var h=!0;function m(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];h=t}e["a"]={strip:n,plus:p,minus:c,times:s,divide:u,round:b,digitLength:i,float2Fixed:o,enableBoundaryChecking:m}}}]);