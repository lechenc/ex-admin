(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-950abb92"],{"2b89":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"f",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return p}));var r=[{label:"币种",prop:"coinName"},{label:"法币返佣手续费",prop:"platformEarnings"},{label:"法币手续费",prop:"otcFee"},{label:"币币交易手续费",prop:"tradFee"},{label:"提币手续费",prop:"withdrawFee"},{label:"划转手续费",prop:"transferFee"},{label:"手续费总计",prop:"totalFee"},{label:"所属时间（天）",prop:"statisticalTime",type:"time",tag:"noHour"}],n=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinName",value:"",list:[]}],i=[{label:"交易对",prop:"coinMarket"},{label:"交易额",prop:"turnover"},{label:"均价",prop:"averagePrice"},{label:"时间",prop:"statisticalTime",type:"time",tag:"noHour"}],o=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],s=[{label:"币种",prop:"coinName"},{label:"币币总资产",prop:"sumAmount"},{label:"币币可用资产",prop:"amount"},{label:"币币冻结资产",prop:"frozenAmount"},{label:"法币总资产",prop:"otcSumAmount"},{label:"法币可用资产",prop:"otcAmount"},{label:"法币冻结资产",prop:"otcFrozenAmount"}],c=[{label:"币种",prop:"coinName"},{label:"统计前金额",prop:"beforeAmount"},{label:"金额",prop:"amount"},{label:"统计后金额",prop:"afterAmount"},{label:"创建日期",prop:"createTime"}],p=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}]},7514:function(t,e,a){"use strict";var r=a("5ca1"),n=a("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"7c0a":function(t,e,a){"use strict";var r=a("83786"),n=a.n(r);n.a},83786:function(t,e,a){},"87f3":function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c270:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},c389:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig,calText:"交易统计",calTotal:!0},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-calTotal":t.calTotal}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("div",[a("span",[t._v("共"+t._s(t.pages)+"页")]),t._v("/"),a("span",[t._v(t._s(t.total)+"条数据")])]),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1)])},n=[],i=(a("96cf"),a("3b8d")),o=(a("ac6a"),a("c249")),s=a("2fee"),c=a("2b89"),p=a("4ec3"),u={name:"ExchangeStatistic",components:{Btable:s["a"],Bsearch:o["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,delBtnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,pairList:[]}},methods:{doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.getList()},goPage:function(t){this.current_page=t,this.getList()},calTotal:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.search_params_obj.coinMarket){t.next=5;break}return this.$message({type:"error",message:"交易对必须选择!",duration:2e3}),t.abrupt("return");case 5:return a={},this.requiredParams(a),Object.assign(a,this.search_params_obj),t.next=10,p["a"].orderEntrustAmountTotal(a);case 10:r=t.sent,r&&(n=r.data.data,n?this.$alert("<p>交易对：".concat(this.search_params_obj.coinMarket,"</p><p>成交额：").concat(n.turnover,"</p><p>均价：").concat(n.averagePrice,"</p>"),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){})):this.$message({type:"error",message:"数据列表为空!"}));case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,p["a"].orderEntrustAmount(e);case 8:a=t.sent,a&&(r=a.data.data,n=r.records,i=r.total,o=r.current,s=r.pages,this.list=n,this.total=i,this.current_page=o,this.pages=s),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t},requiredParams:function(t){var e=this;if(this.$util.isEmptyObject(this.search_params_obj),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var a="";a=this.pairList.filter((function(t){return t["value"]==e.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=a}}},mounted:function(){var t=this;this.configs=c["f"],this.searchCofig=this.$util.clone(c["g"]),this.$store.dispatch("common/getSymbolList").then((function(){t.searchCofig[1]["list"]=t.$store.state.common.symbollist,t.pairList=t.$store.state.common.symbollist})),this.getList()}},l=u,h=(a("7c0a"),a("0c7c")),m=Object(h["a"])(l,r,n,!1,null,null,null);e["default"]=m.exports},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,n=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},o=n.replace(/{([ymdhisa])+}/g,(function(t,e){var a=i[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},ff53:function(t,e,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(t).toPrecision(e))}function i(t){var e=t.toString().split(/[eE]/),a=(e[0].split(".")[1]||"").length-+(e[1]||0);return a>0?a:0}function o(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));var e=i(t);return e>0?n(Number(t)*Math.pow(10,e)):Number(t)}function s(t){m&&(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(t," is beyond boundary when transfer to integer, the results may not be accurate"))}function c(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),p=2;p<a;p++)n[p-2]=arguments[p];if(n.length>0)return c.apply(void 0,[c(t,e),n[0]].concat(Object(r["a"])(n.slice(1))));var u=o(t),l=o(e),h=i(t)+i(e),m=u*l;return s(m),m/Math.pow(10,h)}function p(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),o=2;o<a;o++)n[o-2]=arguments[o];if(n.length>0)return p.apply(void 0,[p(t,e),n[0]].concat(Object(r["a"])(n.slice(1))));var s=Math.pow(10,Math.max(i(t),i(e)));return(c(t,s)+c(e,s))/s}function u(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),o=2;o<a;o++)n[o-2]=arguments[o];if(n.length>0)return u.apply(void 0,[u(t,e),n[0]].concat(Object(r["a"])(n.slice(1))));var s=Math.pow(10,Math.max(i(t),i(e)));return(c(t,s)-c(e,s))/s}function l(t,e){for(var a=arguments.length,p=new Array(a>2?a-2:0),u=2;u<a;u++)p[u-2]=arguments[u];if(p.length>0)return l.apply(void 0,[l(t,e),p[0]].concat(Object(r["a"])(p.slice(1))));var h=o(t),m=o(e);return s(h),s(m),c(h/m,n(Math.pow(10,i(e)-i(t))))}function h(t,e){var a=Math.pow(10,e);return l(Math.round(c(t,a)),a)}var m=!0;function g(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m=t}e["a"]={strip:n,plus:p,minus:u,times:c,divide:l,round:h,digitLength:i,float2Fixed:o,enableBoundaryChecking:g}}}]);