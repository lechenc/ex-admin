(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-218f1c73"],{"19de":function(e,t){e.exports=function(e,t,a,r){var l="undefined"!==typeof r?[r,e]:[e],o=new Blob(l,{type:a||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var i=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),n=document.createElement("a");n.style.display="none",n.href=i,n.setAttribute("download",t),"undefined"===typeof n.download&&n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(i)}),200)}}},"2e08":function(e,t,a){var r=a("9def"),l=a("9744"),o=a("be13");e.exports=function(e,t,a,i){var n=String(o(e)),p=n.length,s=void 0===a?" ":String(a),c=r(t);if(c<=p||""==s)return n;var u=c-p,b=l.call(s,Math.ceil(u/s.length));return b.length>u&&(b=b.slice(0,u)),i?b+n:n+b}},6016:function(e,t,a){"use strict";a.d(t,"n",(function(){return S})),a.d(t,"o",(function(){return A})),a.d(t,"p",(function(){return _})),a.d(t,"g",(function(){return x})),a.d(t,"h",(function(){return w})),a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return y})),a.d(t,"k",(function(){return f})),a.d(t,"l",(function(){return g})),a.d(t,"m",(function(){return m})),a.d(t,"q",(function(){return b})),a.d(t,"r",(function(){return d})),a.d(t,"s",(function(){return h})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"i",(function(){return n})),a.d(t,"j",(function(){return p})),a.d(t,"v",(function(){return u})),a.d(t,"u",(function(){return c})),a.d(t,"t",(function(){return s}));var r=[{label:"订单号",prop:"orderNo"},{label:"仓位ID",prop:"positionsId"},{label:"交易产品",prop:"symbolKey"},{label:"买或卖",prop:"directionString"},{label:"交易量",prop:"numberString"},{label:"手续费",type:"fixedValue",val:"0"},{label:"过夜利息",prop:"interestString"},{label:"盈亏",prop:"profitLossString"},{label:"开仓时间",prop:"openTime"},{label:"开仓价格",prop:"openPriceString"},{label:"平仓时间",prop:"closeTime"},{label:"平仓类型",prop:"typeString"},{label:"平仓价格",prop:"closePriceString"}],l=[{type:"date_rank",label:"平仓时间",prop:"closeStartTime",prop2:"closeEndTime",value:""},{type:"onlyNumber",label:"交易账户",prop:"uid",value:""},{type:"text",label:"仓位ID",prop:"positionId",value:""},{type:"select_search",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"平仓类型",prop:"type",value:"",list:[{label:"正常平仓",value:0},{label:"爆仓",value:1}]}],o=[{label:"订单号",prop:"orderId"},{label:"仓位ID",prop:"positionsId"},{label:"交易产品",prop:"symbolKey"},{label:"委托类型",prop:"dealTypeString"},{label:"委托状态",prop:"statusString"},{label:"委托价格",prop:"priceString"},{label:"委托量",prop:"handNumString"},{label:"委托方向",prop:"dealDirectionString"},{label:"止盈价格",prop:"profitPriceString"},{label:"止损价格",prop:"lossPriceString"},{label:"委托时间",prop:"orderTime"},{label:"委托期限",prop:"termValidityTime"}],i=[{type:"date_rank",label:"委托时间",prop:"orderStartTime",prop2:"orderEndTime",value:""},{type:"text",label:"仓位ID",prop:"positionId",value:""},{type:"select_search",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"委托类型",prop:"dealType",value:"",list:[{label:"市价开仓",value:0},{label:"限价开仓",value:1}]},{type:"select",label:"委托状态",prop:"status",value:"",list:[{value:"0",label:"待成交"},{value:"1",label:"已成交"},{value:"2",label:"已删除"}]},{type:"select",label:"委托方向",prop:"dealDirection",value:"",list:[{label:"卖",value:0},{label:"买",value:1}]}],n=[{label:"订单号",prop:"orderNo"},{label:"仓位ID",prop:"id"},{label:"交易产品",prop:"symbolKey"},{label:"买或卖",prop:"directionString"},{label:"交易量",prop:"holdVolString"},{label:"开仓时间",prop:"openTime"},{label:"开仓价格",prop:"openPriceString"},{label:"手续费",type:"fixedValue",val:"0"},{label:"过夜利息",prop:"interestString"},{label:"盈亏",prop:"profitLossString"}],p=[{type:"date_rank",label:"开仓时间",prop:"openStartTime",prop2:"openEndTime",value:""},{type:"onlyNumber",label:"交易账户",prop:"uid",value:""},{type:"text",label:"仓位ID",prop:"positionId",value:""},{type:"select_search",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"买或卖",prop:"dealDirection",value:"",list:[{label:"卖",value:0},{label:"买",value:1}]}],s=[{label:"机器人ID",prop:"id"},{label:"交易产品",prop:"symbolKey"},{label:"下单最小值",prop:"minVol"},{label:"下单最大值",prop:"maxVol"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"},{label:"启动状态",prop:"enable",width:"120",type:"switch",fn:"trswitch",alias:"trswitch"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],c=[{label:"机器人ID",prop:"id"},{label:"交易产品",prop:"symbolKey"},{label:"下单最小值",prop:"minVol"},{label:"下单最大值",prop:"maxVol"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"}],u=[{type:"select_search",label:"交易产品",prop:"foreignId",value:"",list:[]}],b=[{label:"资产",prop:"name"},{label:"入金汇率",prop:"rateIn"},{label:"出金汇率",prop:"rateOut"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],d=[{label:"资产",prop:"name"},{label:"入金汇率",prop:"rateIn"},{label:"出金汇率",prop:"rateOut"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"}],h=[{type:"text",label:"资产",prop:"name",value:""}],f=[{label:"ID",prop:"id"},{label:"icon",prop:"iconUrl",type:"img"},{label:"交易品种",prop:"symbol"},{label:"中文名称",prop:"chineseName"},{label:"每手合约交易大小",prop:"minVol"},{label:"建议点差",prop:"priceDiff"},{label:"持仓手数数范围区间",arr:["minMove","maxMove"],type:"textArr",join:"-"},{label:"杠杆倍数",prop:"multiple"},{label:"挂单距离限制",prop:"dealDistance"},{label:"百分比强平率",prop:"closeRate",type:"afterJoin",join:"%",nothingValue:"0"},{label:"价格小数位",prop:"decimalVol"},{label:"排序",prop:"rank"},{label:"上架",prop:"headblock",width:"120",type:"switch",fn:"trHeadblockSwitch",alias:"trHeadblockSwitch"},{label:"交易",prop:"trade",width:"120",type:"switch",fn:"trTradeSwitch",alias:"trTradeSwitch"},{label:"操作",prop:"action",type:"action",width:"130",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],g=[{label:"ID",prop:"id"},{label:"icon",prop:"iconUrl",type:"img"},{label:"交易品种",prop:"symbol"},{label:"中文名称",prop:"chineseName"},{label:"每手合约交易大小",prop:"minVol"},{label:"建议点差",prop:"priceDiff"},{label:"持仓手数数范围区间",arr:["minMove","maxMove"],type:"textArr",join:"-"},{label:"杠杆倍数",prop:"multiple"},{label:"挂单距离限制",prop:"dealDistance"},{label:"百分比强平率",prop:"closeRate",type:"afterJoin",join:"%"},{label:"价格小数位",prop:"decimalVol"},{label:"排序",prop:"rank"}],m=[{type:"select_search",label:"交易产品",prop:"forexId",value:"",list:[]},{type:"select",label:"是否上架",prop:"headblock",value:"",list:[{label:"是",value:"y"},{label:"否",value:"n"}]},{type:"select",label:"是否开启交易",prop:"trade",value:"",list:[{label:"是",value:"y"},{label:"否",value:"n"}]}],v=[{label:"时间",prop:"created"},{label:"交易账户",prop:"uid"},{label:"交易产品",prop:"symbol"},{label:"类型",prop:"type",type:"filter",show_type:"text",width:100,filters:[{text:"平仓",val:1},{text:"爆仓",val:2},{text:"币汇划入",val:3},{text:"币汇转出",val:4},{text:"手续费",val:5},{text:"隔夜费用",val:6}]},{label:"变动前账户余额",prop:"beforePrice"},{label:"变动金额",prop:"changePrice"},{label:"变动后账户余额",prop:"afterPrice"},{label:"订单号",prop:"orderNo"}],y=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"交易账户",prop:"uid",value:""},{type:"select_search",label:"交易产品",prop:"forexId",value:"",list:[]},{type:"text",label:"订单号",prop:"orderNo",value:""},{type:"select",label:"类型",prop:"type",value:"",list:[{label:"平仓",value:1},{label:"爆仓",value:2},{label:"币汇划入",value:3},{label:"币汇转出",value:4},{label:"手续费",value:5},{label:"隔夜费用",value:6}]}],x=[{label:"交易账户",prop:"uid"},{label:"余额",prop:"usable"},{label:"净值",prop:"total"},{label:"保证金比列",prop:"rate"}],w=[{type:"onlyNumber",label:"交易账户",prop:"uid",value:""}],S=[{label:"id",prop:"id"},{label:"交易产品",prop:"symbol"},{label:"多头隔夜费率",prop:"doServiceCharge",type:"afterJoin",join:"%",nothingValue:"0"},{label:"空头隔夜费率",prop:"koServiceCharge",type:"afterJoin",join:"%",nothingValue:"0"},{label:"触发费率时间",prop:"beginTime"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"是否开启",prop:"costType",type:"filter",show_type:"text",width:140,filters:[{val:"0",text:"否"},{val:"1",text:"是"}]},{label:"操作",prop:"action",type:"action",width:"130",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],A=[{label:"id",prop:"id"},{label:"交易产品",prop:"symbol"},{label:"多头隔夜费率",prop:"doServiceCharge"},{label:"空头隔夜费率",prop:"koServiceCharge"},{label:"触发费率时间",prop:"beginTime"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"是否开启",prop:"costType",type:"filter",show_type:"text",width:140,filters:[{val:"0",text:"否"},{val:"1",text:"是"}]}],_=[{type:"select_search",label:"交易产品",prop:"forexId",value:"",list:[]},{type:"select",label:"是否开启",prop:"costType",value:"",list:[{label:"否",value:0},{label:"是",value:1}]}]},7514:function(e,t,a){"use strict";var r=a("5ca1"),l=a("0a49")(5),o="find",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,a){"use strict";var r=a("4588"),l=a("be13");e.exports=function(e){var t=String(l(this)),a="",o=r(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(a+=t);return a}},"9d09":function(e,t,a){"use strict";var r=a("fec6"),l=a.n(r);l.a},"9e15":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"coinForexDealList-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,calLoadingExcel:e.calLoadingExcel,calTextExcel:"快速导出excel",calTotalExcel:e.btnArr.includes("excel")},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-calTotal-excel":e.calTotalExcel}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1)])},l=[],o=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),i=a("c249"),n=a("2fee"),p=a("f21b"),s=a("6016"),c=a("4ec3"),u=(a("bc3a"),a("19de")),b=a.n(u),d={name:"CoinForexDealList",components:{Btable:n["a"],Bsearch:i["a"],iconPage:p["a"]},data:function(){return{searchCofig:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchConfig:[],search_params_obj:{},current_page:1,pages:0,pageSize:10,total:0,toDay:"",ago:"",calLoadingExcel:!1,btnArr:[],coinForexList:[]}},methods:{calTotalExcel:function(e){var t=this;this.search_params_obj=e;var a={};this.calLoadingExcel=!0,this.requiredParams(a),Object.assign(a,this.search_params_obj),c["a"].getCoinForexDealListExport(a).then((function(e){t.calLoadingExcel=!1,b()(e.data,"交易报表.xlsx")})).catch((function(){t.calLoadingExcel=!1}))},doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fn,t.row;case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.closeStartTime||this.search_params_obj.closeEndTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r,l,o,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return this.listLoading=!0,t={pageNum:this.current_page,pageSize:this.pageSize,orderString:"b.created desc"},this.requiredParams(this.search_params_obj),Object.assign(t,this.search_params_obj),e.next=8,c["a"].getCoinForexDealListList(t);case 8:a=e.sent,a&&(r=a.data.data,l=r.records,o=r.current,i=r.total,n=r.pages,this.total=i,this.pages=n,this.current_page=o,this.list=l,l.forEach((function(e){e["status"]=1===e["status"]})),this.list=l),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},requiredParams:function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[0].value=[t,a],e.closeEndTime=a.replace(/\//gi,"-"),e.closeStartTime=t.replace(/\//gi,"-")}this.search_params_obj.closeStartTime&&(this.search_params_obj.closeEndTime=this.formatTime(this.search_params_obj.closeEndTime),this.search_params_obj.closeStartTime=this.formatTime(this.search_params_obj.closeStartTime))},getCoinForexList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getCoinForexList").then((function(){t.coinForexList=t.$store.state.common.coinForexList,t.searchCofig[3]["list"]=t.coinForexList}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("CoinForexDealList",s["c"],[]);this.btnArr=e.btnArr||[]||[],this.configs=s["c"],this.searchCofig=s["d"],this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getCoinForexList(),this.getList()}},h=d,f=(a("9d09"),a("0c7c")),g=Object(f["a"])(h,r,l,!1,null,null,null);t["default"]=g.exports},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,l=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var o={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},i=l.replace(/{([ymdhisa])+}/g,(function(e,t){var a=o[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},f576:function(e,t,a){"use strict";var r=a("5ca1"),l=a("2e08"),o=a("a25f"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*i,"String",{padStart:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},fec6:function(e,t,a){},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function o(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=o(e);return t>0?l(Number(e)*Math.pow(10,t)):Number(e)}function n(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),s=2;s<a;s++)l[s-2]=arguments[s];if(l.length>0)return p.apply(void 0,[p(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var c=i(e),u=i(t),b=o(e)+o(t),d=c*u;return n(d),d/Math.pow(10,b)}function s(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),i=2;i<a;i++)l[i-2]=arguments[i];if(l.length>0)return s.apply(void 0,[s(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var n=Math.pow(10,Math.max(o(e),o(t)));return(p(e,n)+p(t,n))/n}function c(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),i=2;i<a;i++)l[i-2]=arguments[i];if(l.length>0)return c.apply(void 0,[c(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var n=Math.pow(10,Math.max(o(e),o(t)));return(p(e,n)-p(t,n))/n}function u(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var b=i(e),d=i(t);return n(b),n(d),p(b/d,l(Math.pow(10,o(t)-o(e))))}function b(e,t){var a=Math.pow(10,t);return u(Math.round(p(e,a)),a)}var d=!0;function h(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:l,plus:s,minus:c,times:p,divide:u,round:b,digitLength:o,float2Fixed:i,enableBoundaryChecking:h}}}]);