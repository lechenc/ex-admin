(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399901bf"],{"19de":function(e,t){e.exports=function(e,t,a,r){var i="undefined"!==typeof r?[r,e]:[e],o=new Blob(i,{type:a||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var l=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),n=document.createElement("a");n.style.display="none",n.href=l,n.setAttribute("download",t),"undefined"===typeof n.download&&n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(l)}),200)}}},6016:function(e,t,a){"use strict";a.d(t,"g",(function(){return f})),a.d(t,"h",(function(){return g})),a.d(t,"i",(function(){return m})),a.d(t,"j",(function(){return d})),a.d(t,"k",(function(){return b})),a.d(t,"l",(function(){return h})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return p})),a.d(t,"o",(function(){return u})),a.d(t,"n",(function(){return c})),a.d(t,"m",(function(){return s}));var r=[{label:"订单号",prop:"orderNo"},{label:"交易账户",prop:"uid"},{label:"产品",prop:"symbolKey"},{label:"买或卖",prop:"directionString"},{label:"盈亏",prop:"profitLossString"},{label:"开仓时间",prop:"openTime"},{label:"开仓价格",prop:"openPriceString"},{label:"平仓价格",prop:"closePriceString"},{label:"平仓类型",prop:"typeString"},{label:"平仓时间",prop:"closeTime"}],i=[{type:"date_rank",label:"平仓时间",prop:"closeStartTime",prop2:"closeEndTime",value:""},{type:"onlyNumber",label:"交易账户",prop:"uid",value:""},{type:"text",label:"订单号",prop:"orderId",value:""},{type:"select",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"平仓类型",prop:"type",value:"",list:[{label:"正常平仓",value:0},{label:"爆仓",value:1}]}],o=[{label:"订单号",prop:"orderId"},{label:"交易账户",prop:"uid"},{label:"交易产品",prop:"symbolKey"},{label:"交易量",prop:"handNum"},{label:"委托类型",prop:"dealTypeString"},{label:"委托价格",prop:"priceString"},{label:"委托时间",prop:"orderTime"},{label:"委托期限",prop:"termValidityTime"}],l=[{type:"date_rank",label:"委托时间",prop:"orderStartTime",prop2:"orderEndTime",value:""},{type:"text",label:"订单号",prop:"orderId",value:""},{type:"select",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"委托类型",prop:"dealType",value:"",list:[{label:"市价开仓",value:0},{label:"限价开仓",value:1}]}],n=[{label:"订单号",prop:"orderNo"},{label:"交易账户",prop:"uid"},{label:"交易产品",prop:"symbolKey"},{label:"买或卖",prop:"directionString"},{label:"交易量",prop:"holdVolString"},{label:"开仓时间",prop:"openTime"},{label:"开仓价格",prop:"openPriceString"}],p=[{type:"date_rank",label:"开仓时间",prop:"openStartTime",prop2:"openEndTime",value:""},{type:"onlyNumber",label:"交易账户",prop:"uid",value:""},{type:"text",label:"订单号",prop:"orderId",value:""},{type:"select",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"买或卖",prop:"dealDirection",value:"",list:[{label:"卖",value:0},{label:"买",value:1}]}],s=[{label:"机器人ID",prop:"id"},{label:"交易产品",prop:"symbolKey"},{label:"最新成交最小张数",prop:"minVol"},{label:"最新成交最大张数",prop:"maxVol"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"},{label:"启动状态",prop:"enable",width:"120",type:"switch",fn:"trswitch",alias:"trswitch"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],c=[{label:"机器人ID",prop:"id"},{label:"交易产品",prop:"symbolKey"},{label:"成交价浮动率",prop:"currentFloatRate"},{label:"最新成交最小张数",prop:"minVol"},{label:"最新成交最大张数",prop:"maxVol"},{label:"下单委托深度取值比例",prop:"openTime"},{label:"深度参数",prop:"depthVol"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"}],u=[{type:"select",label:"交易产品",prop:"foreignId",value:"",list:[]}],d=[{label:"资产",prop:"name"},{label:"入金汇率",prop:"rateIn"},{label:"出金汇率",prop:"rateOut"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"},{label:"手动配置开关",prop:"enable",width:"120",type:"switch",fn:"trswitch",alias:"trswitch"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],b=[{label:"资产",prop:"name"},{label:"入金汇率",prop:"rateIn"},{label:"出金汇率",prop:"rateOut"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"}],h=[{type:"text",label:"资产",prop:"name",value:""}],f=[{label:"ID",prop:"id"},{label:"icon",prop:"iconUrl",type:"img"},{label:"交易品种",prop:"symbol"},{label:"每手合约交易大小",prop:"minVol"},{label:"建议点差",prop:"priceDiff"},{label:"持仓手数数范围区间",prop:"priceDiff1"},{label:"杠杆倍数",prop:"multiple"},{label:"挂单距离限制",prop:"orderQtyStep"},{label:"百分比强平率",prop:"orderQtyStep1"},{label:"价格小数位",prop:"decimalVol"},{label:"排序",prop:"rank"},{label:"上架",prop:"headblock",width:"120",type:"switch",fn:"trHeadblockSwitch",alias:"trHeadblockSwitch"},{label:"交易",prop:"trade",width:"120",type:"switch",fn:"trTradeSwitch",alias:"trTradeSwitch"},{label:"操作",prop:"action",type:"action",width:"130",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],g=[{label:"资产",prop:"name"},{label:"入金汇率",prop:"rateIn"},{label:"出金汇率",prop:"rateOut"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"}],m=[{type:"select",label:"是否上架",prop:"headblock",value:"",list:[{label:"是",value:"y"},{label:"否",value:"n"}]},{type:"select",label:"是否开启交易",prop:"trade",value:"",list:[{label:"是",value:"y"},{label:"否",value:"n"}]}]},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),o="find",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},"9d09":function(e,t,a){"use strict";var r=a("fec6"),i=a.n(r);i.a},"9e15":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"coinForexDealList-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,calLoadingExcel:e.calLoadingExcel,calTextExcel:"快速导出excel",calTotalExcel:e.btnArr.includes("excel")},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-calTotal-excel":e.calTotalExcel}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1)])},i=[],o=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),l=a("c249"),n=a("2fee"),p=a("f21b"),s=a("6016"),c=a("4ec3"),u=(a("bc3a"),a("19de")),d=a.n(u),b={name:"CoinForexDealList",components:{Btable:n["a"],Bsearch:l["a"],iconPage:p["a"]},data:function(){return{searchCofig:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchConfig:[],search_params_obj:{},current_page:1,pages:0,pageSize:10,total:0,toDay:"",ago:"",calLoadingExcel:!1,btnArr:[],coinForexList:[]}},methods:{calTotalExcel:function(e){var t=this;this.search_params_obj=e;var a={};this.calLoadingExcel=!0,this.requiredParams(a),Object.assign(a,this.search_params_obj),c["a"].getCoinForexDealListExport(a).then((function(e){t.calLoadingExcel=!1,d()(e.data,"交易报表.xlsx")})).catch((function(){t.calLoadingExcel=!1}))},doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fn,t.row;case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.closeStartTime||this.search_params_obj.closeEndTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i,o,l,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return this.listLoading=!0,t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(this.search_params_obj),Object.assign(t,this.search_params_obj),e.next=8,c["a"].getCoinForexDealListList(t);case 8:a=e.sent,a&&(r=a.data.data,i=r.records,o=r.current,l=r.total,n=r.pages,this.total=l,this.pages=n,this.current_page=o,this.list=i,i.forEach((function(e){e["status"]=1===e["status"]})),this.list=i),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},requiredParams:function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[0].value=[t,a],e.closeEndTime=a.replace(/\//gi,"-"),e.closeStartTime=t.replace(/\//gi,"-")}this.search_params_obj.closeStartTime&&(this.search_params_obj.closeEndTime=this.formatTime(this.search_params_obj.closeEndTime),this.search_params_obj.closeStartTime=this.formatTime(this.search_params_obj.closeStartTime))},getCoinForexList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getCoinForexList").then((function(){t.coinForexList=t.$store.state.common.coinForexList,t.searchCofig[3]["list"]=t.coinForexList}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("CoinForexDealList",s["a"],[]);this.btnArr=e.btnArr||[],this.configs=s["a"],this.searchCofig=s["b"],this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getCoinForexList(),this.getList()}},h=b,f=(a("9d09"),a("0c7c")),g=Object(f["a"])(h,r,i,!1,null,null,null);t["default"]=g.exports},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var o={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},l=i.replace(/{([ymdhisa])+}/g,(function(e,t){var a=o[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return l=l.replace(/\//gi,"-"),l}},fec6:function(e,t,a){},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function o(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function l(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=o(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function n(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),s=2;s<a;s++)i[s-2]=arguments[s];if(i.length>0)return p.apply(void 0,[p(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var c=l(e),u=l(t),d=o(e)+o(t),b=c*u;return n(b),b/Math.pow(10,d)}function s(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),l=2;l<a;l++)i[l-2]=arguments[l];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var n=Math.pow(10,Math.max(o(e),o(t)));return(p(e,n)+p(t,n))/n}function c(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),l=2;l<a;l++)i[l-2]=arguments[l];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var n=Math.pow(10,Math.max(o(e),o(t)));return(p(e,n)-p(t,n))/n}function u(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var d=l(e),b=l(t);return n(d),n(b),p(d/b,i(Math.pow(10,o(t)-o(e))))}function d(e,t){var a=Math.pow(10,t);return u(Math.round(p(e,a)),a)}var b=!0;function h(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:i,plus:s,minus:c,times:p,divide:u,round:d,digitLength:o,float2Fixed:l,enableBoundaryChecking:h}}}]);