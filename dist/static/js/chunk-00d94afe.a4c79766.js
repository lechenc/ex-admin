(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00d94afe"],{1761:function(e,t,a){},"176d":function(e,t,a){"use strict";a.d(t,"g",(function(){return l})),a.d(t,"h",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return u}));var l=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"币币入金",prop:"coinIn"},{label:"法币入金",prop:"otcIn"},{label:"合约入金",prop:"contractIn"},{label:"币币出金",prop:"coinOut"},{label:"法币出金",prop:"otcOut"},{label:"合约出金",prop:"contractOut"},{label:"合计",prop:"totalInOut"}],r=[{type:"onlyNumber",label:"用户UID查询",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}],i=[{label:"时间",prop:"createTime",type:"time"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"出入金类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"币币入金",val:"1"},{text:"币币出金",val:"2"}]},{label:"类型",prop:"optType",type:"filter",show_type:"text",filters:[{text:"充币",val:"0"},{text:"法币划转至币币",val:"11"},{text:"锁仓自动释放",val:"19"},{text:"锁仓手动释放可用金额",val:"20"},{text:"返佣",val:"40"},{text:"普通用户手续费返佣",val:"101"},{text:"代理商手续费返佣",val:"102"},{text:"代理商团队长模式的返佣",val:"103"},{text:"特殊调账+",val:"60"},{text:"特殊调账-",val:"61"},{text:"标仓周奖励",val:"15"},{text:"标仓季度奖励",val:"16"},{text:"合约划转至币币",val:"51"},{text:"领取红包",val:"107"},{text:"过期红包退还金额",val:"108"},{text:"提币成功",val:"2"},{text:"币币交易手续费",val:"81"},{text:"币币划转至OTC",val:"10"},{text:"币币划转至合约",val:"50"},{text:"发送红包",val:"106"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"操作资金类型",prop:"amountType",type:"filter",show_type:"text",filters:[{text:"可用余额",val:1},{text:"冻结金额",val:2}]}],n=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"出入金类型",prop:"type",value:"",list:[{label:"币币入金",value:"1"},{label:"币币出金",value:"2"}]},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"类型",prop:"optType",value:"",list:[{label:"充币",value:"0"},{label:"法币划转至币币",value:"11"},{label:"锁仓自动释放",value:"19"},{label:"锁仓手动释放可用金额",value:"20"},{label:"返佣",value:"40"},{label:"普通用户手续费返佣",value:"101"},{label:"代理商手续费返佣",value:"102"},{label:"代理商团队长模式的返佣",value:"103"},{label:"特殊调账+",value:"60"},{label:"特殊调账-",value:"61"},{label:"标仓周奖励",value:"15"},{label:"标仓季度奖励",value:"16"},{label:"合约划转至币币",value:"51"},{label:"领取红包",value:"107"},{label:"过期红包退还金额",value:"108"},{label:"提币成功",value:"2"},{label:"币币交易手续费",value:"81"},{label:"币币划转至OTC",value:"10"},{label:"币币划转至合约",value:"50"},{label:"发送红包",value:"106"}]}],o=[{label:"时间",prop:"createTime",type:"time"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"出入金类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"法币入金",val:"1"},{text:"法币出金",val:"2"}]},{label:"类型",prop:"optType",type:"filter",show_type:"text",filters:[{text:"法币买入",val:"36"},{text:"申诉买家赢，法币买入",val:"37"},{text:"法币卖出",val:"32"},{text:"法币交易手续费",val:"82"},{text:"划出至币币",val:"11"},{text:"划出至合约",val:"52"},{text:"币币划入",val:"10"},{text:"合约划入",val:"53"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"操作资金类型",prop:"amountType",type:"filter",show_type:"text",filters:[{text:"可用余额",val:1},{text:"冻结金额",val:2}]}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select_labelBold",label:"出入金类型",prop:"type",value:"",list:[{label:"法币入金",value:"1"},{label:"法币出金",value:"2"}]},{type:"select_labelBold",label:"类型",prop:"optType",value:"",list:[{label:"法币买入",value:"36"},{label:"申诉买家赢，法币买入",value:"37"},{label:"法币卖出",value:"32"},{label:"法币交易手续费",value:"82"},{label:"划出至币币",value:"11"},{label:"划出至合约",value:"52"},{label:"币币划入",value:"10"},{label:"合约划入",value:"53"}]},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}],p=[{label:"时间",prop:"createTime",type:"time"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"出入金类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"合约出金",val:"2"},{text:"合约入金",val:"1"}]},{label:"类型",prop:"optType",type:"filter",show_type:"text",filters:[{text:"币币划入合约",val:"7"},{text:"法币划入合约",val:"12"},{text:"开仓手续费",val:"10"},{text:"平仓手续费 ",val:"11"},{text:"合约交易资金费率",val:"9"},{text:"划出至币币",val:"8"},{text:"划出至法币",val:"13"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"操作资金类型",prop:"amountType",type:"filter",show_type:"text",filters:[{text:"可用余额",val:1},{text:"冻结金额",val:2}]}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"出入金类型",prop:"type",value:"",list:[{label:"合约入金",value:"1"},{label:"合约出金",value:"2"}]},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"类型",prop:"optType",value:"",list:[{label:"币币划入合约",value:"7"},{label:"法币划入合约",value:"12"},{label:"开仓手续费",value:"10"},{label:"平仓手续费 ",value:"11"},{label:"合约交易资金费率",value:"9"},{label:"划出至币币",value:"8"},{label:"划出至法币",value:"13"}]}]},"2e08":function(e,t,a){var l=a("9def"),r=a("9744"),i=a("be13");e.exports=function(e,t,a,n){var o=String(i(e)),s=o.length,p=void 0===a?" ":String(a),u=l(t);if(u<=s||""==p)return o;var c=u-s,h=r.call(p,Math.ceil(c/p.length));return h.length>c&&(h=h.slice(0,c)),n?h+o:o+h}},5017:function(e,t,a){"use strict";a("1761")},7514:function(e,t,a){"use strict";var l=a("5ca1"),r=a("0a49")(5),i="find",n=!0;i in[]&&Array(1)[i]((function(){n=!1})),l(l.P+l.F*n,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"87f3":function(e,t,a){var l=a("5ca1");l(l.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var l=a("5ca1");l(l.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,a){"use strict";var l=a("4588"),r=a("be13");e.exports=function(e){var t=String(r(this)),a="",i=l(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(a+=t);return a}},c1d1:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"coinInOutGold-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,calLoading:e.calLoading,calTotal:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-calTotal":e.calTotal}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1)])},r=[],i=(a("96cf"),a("1da1")),n=(a("ac6a"),a("c249")),o=a("2fee"),s=a("f21b"),p=a("176d"),u=a("4ec3"),c={name:"CoinInOutGold",components:{Btable:o["a"],Bsearch:n["a"],iconPage:s["a"]},data:function(){return{listLoading:!1,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,symbollist:[],toDay:"",ago:"",typeObj:{1:"币币入金",2:"币币出金"}}},methods:{doSearch:function(e){console.log("data",e),this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},calTotal:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,l,r,i,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.calLoading=!0,a={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(a),Object.assign(a,this.search_params_obj),l="",l=this.search_params_obj.coinId?this.symbollist.filter((function(e){return e["value"]==n.search_params_obj.coinId}))[0].label:"全部",e.next=10,u["a"].getCoinInOutGoldTotal(a);case 10:r=e.sent,r&&(i=r.data.data,i?this.$alert("<p>出入金类型：  ".concat(this.typeObj[a.type]||"全部","</p>  <p>币种：").concat(l,"</p> <p>数量：").concat(i.amount,"</p>  "),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){})):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,l,r,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,u["a"].getCoinInOutGoldList(t);case 8:a=e.sent,a&&(l=a.data.data,r=l.records,i=l.total,n=l.current,o=l.pages,this.total=i,this.pages=o,this.current_page=n,this.list=r),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){var t=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(e.endTime=parseInt(new Date(this.toDay).getTime()/1e3),e.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.today,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var a="";a=this.symbollist.filter((function(e){return e["value"]==t.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=a}},formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e},getSymbolList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getCoinList").then((function(){t.symbollist=t.$store.state.common.coinlist,t.searchCofig[3]["list"]=t.symbollist}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.configs=p["a"],this.searchCofig=this.$util.clone(p["b"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getSymbolList()}},h=c,b=(a("5017"),a("2877")),v=Object(b["a"])(h,l,r,!1,null,null,null);t["default"]=v.exports},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("28a5"),a("f576"),a("a481"),a("6b54");var l=a("53ca");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,r=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(l["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=r.replace(/{([ymdhisa])+}/g,(function(e,t){var a=i[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},f576:function(e,t,a){"use strict";var l=a("5ca1"),r=a("2e08"),i=a("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);l(l.P+l.F*n,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,a){"use strict";var l=a("2909");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?r(Number(e)*Math.pow(10,t)):Number(e)}function o(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),p=2;p<a;p++)r[p-2]=arguments[p];if(r.length>0)return s.apply(void 0,[s(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var u=n(e),c=n(t),h=i(e)+i(t),b=u*c;return o(b),b/Math.pow(10,h)}function p(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];if(r.length>0)return p.apply(void 0,[p(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var o=Math.pow(10,Math.max(i(e),i(t)));return(s(e,o)+s(t,o))/o}function u(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];if(r.length>0)return u.apply(void 0,[u(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var o=Math.pow(10,Math.max(i(e),i(t)));return(s(e,o)-s(t,o))/o}function c(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),u=2;u<a;u++)p[u-2]=arguments[u];if(p.length>0)return c.apply(void 0,[c(e,t),p[0]].concat(Object(l["a"])(p.slice(1))));var h=n(e),b=n(t);return o(h),o(b),s(h/b,r(Math.pow(10,i(t)-i(e))))}function h(e,t){var a=Math.pow(10,t);return c(Math.round(s(e,a)),a)}var b=!0;function v(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:r,plus:p,minus:u,times:s,divide:c,round:h,digitLength:i,float2Fixed:n,enableBoundaryChecking:v}}}]);