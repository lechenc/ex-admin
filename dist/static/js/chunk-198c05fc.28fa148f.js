(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-198c05fc"],{"176d":function(e,t,a){"use strict";a.d(t,"g",(function(){return l})),a.d(t,"h",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return s})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return u}));var l=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"币币入金",prop:"coinIn"},{label:"法币入金",prop:"otcIn"},{label:"合约入金",prop:"contractIn"},{label:"币币出金",prop:"coinOut"},{label:"法币出金",prop:"otcOut"},{label:"合约出金",prop:"contractOut"},{label:"合计",prop:"totalInOut"}],r=[{type:"onlyNumber",label:"用户UID查询",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}],i=[{label:"时间",prop:"createTime",type:"time"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"出入金类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"币币入金",val:"1"},{text:"币币出金",val:"2"}]},{label:"类型",prop:"optType",type:"filter",show_type:"text",filters:[{text:"充币",val:"0"},{text:"法币划转至币币",val:"11"},{text:"锁仓自动释放",val:"19"},{text:"锁仓手动释放可用金额",val:"20"},{text:"返佣",val:"40"},{text:"普通用户手续费返佣",val:"101"},{text:"代理商手续费返佣",val:"102"},{text:"代理商团队长模式的返佣",val:"103"},{text:"特殊调账+",val:"60"},{text:"特殊调账-",val:"61"},{text:"标仓周奖励",val:"15"},{text:"标仓季度奖励",val:"16"},{text:"TC划转至币币",val:"11O"},{text:"合约划转至币币",val:"51"},{text:"领取红包",val:"107"},{text:"过期红包退还金额",val:"108"},{text:"提币成功",val:"2"},{text:"币币交易手续费",val:"81"},{text:"币币划转至OTC",val:"10"},{text:"币币划转至合约",val:"50"},{text:"发送红包",val:"106"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"操作资金类型",prop:"amountType",type:"filter",show_type:"text",filters:[{text:"可用余额",val:1},{text:"冻结金额",val:2}]}],o=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"出入金类型",prop:"type",value:"",list:[{label:"币币入金",value:"1"},{label:"币币出金",value:"2"}]},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"onlyNumber",label:"订单号",prop:"relateRecdId",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"optType",value:"",list:[{label:"充币",value:"0"},{label:"法币划转至币币",value:"11"},{label:"锁仓自动释放",value:"19"},{label:"锁仓手动释放可用金额",value:"20"},{label:"返佣",value:"40"},{label:"普通用户手续费返佣",value:"101"},{label:"代理商手续费返佣",value:"102"},{label:"代理商团队长模式的返佣",value:"103"},{label:"特殊调账+",value:"60"},{label:"特殊调账-",value:"61"},{label:"标仓周奖励",value:"15"},{label:"标仓季度奖励",value:"16"},{label:"TC划转至币币",value:"11O"},{label:"合约划转至币币",value:"51"},{label:"领取红包",value:"107"},{label:"过期红包退还金额",value:"108"},{label:"提币成功",value:"2"},{label:"币币交易手续费",value:"81"},{label:"币币划转至OTC",value:"10"},{label:"币币划转至合约",value:"50"},{label:"发送红包",value:"106"}]}],n=[{label:"时间",prop:"createTime",type:"time"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"出入金类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"法币入金",val:"1"},{text:"法币出金",val:"2"}]},{label:"类型",prop:"optType",type:"filter",show_type:"text",filters:[{text:"法币买入",val:"36"},{text:"申诉买家赢，法币买入",val:"37"},{text:"法币交易返佣",val:"40"},{text:"法币卖出",val:"32"},{text:"法币交易手续费",val:"82"},{text:"划出至币币",val:"11"},{text:"划出至合约",val:"52"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"操作资金类型",prop:"amountType",type:"filter",show_type:"text",filters:[{text:"可用余额",val:1},{text:"冻结金额",val:2}]}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select_labelBold",label:"出入金类型",prop:"type",value:"",list:[{label:"法币入金",value:"1"},{label:"法币出金",value:"2"}]},{type:"select_labelBold",label:"类型",prop:"optType",value:"",list:[{label:"法币买入",value:"36"},{label:"申诉买家赢，法币买入",value:"37"},{label:"法币交易返佣",value:"40"},{label:"法币卖出",value:"32"},{label:"法币交易手续费",value:"82"},{label:"划出至币币",value:"11"},{label:"划出至合约",value:"52"}]},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"onlyNumber",label:"订单号",prop:"relateRecdId",value:"",placeHolder:"请输入"}],p=[{label:"时间",prop:"createTime",type:"time"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"出入金类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"合约入金",val:"1"},{text:"合约出金",val:"2"}]},{label:"类型",prop:"optType",type:"filter",show_type:"text",filters:[{text:"币币划入合约",val:"50"},{text:"法币划入合约",val:"52"},{text:"合约交易手续费",val:"96"},{text:"合约交易资金费率",val:"94"},{text:"划出至币币",val:"51"},{text:"划出至法币",val:"53"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"操作资金类型",prop:"amountType",type:"filter",show_type:"text",filters:[{text:"可用余额",val:1},{text:"冻结金额",val:2}]}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"出入金类型",prop:"type",value:"",list:[{label:"合约入金",value:"1"},{label:"合约出金",value:"2"}]},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"onlyNumber",label:"订单号",prop:"relateRecdId",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"optType",value:"",list:[{label:"币币划入合约",value:"50"},{label:"法币划入合约",value:"52"},{label:"合约交易手续费",value:"96"},{label:"合约交易资金费率",value:"94"},{label:"划出至币币",value:"51"},{label:"划出至法币",value:"53"}]}]},2764:function(e,t,a){},"2cc8":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fiatCoinInOutGold-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,calLoading:e.calLoading,calTotal:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-calTotal":e.calTotal}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1)])},r=[],i=(a("96cf"),a("3b8d")),o=(a("ac6a"),a("c249")),n=a("2fee"),s=a("f21b"),p=a("176d"),u=a("4ec3"),c={name:"FiatCoinInOutGold",components:{Btable:n["a"],Bsearch:o["a"],iconPage:s["a"]},data:function(){return{listLoading:!1,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,symbollist:[],toDay:"",ago:""}},watch:{"search_params_obj.type":function(e,t){//console.log("newVal",e),1==e?(this.searchCofig[3]["value"]="",this.searchCofig[3]["list"]=[{label:"法币买入",value:"36"},{label:"申诉买家赢，法币买入",value:"37"},{label:"法币交易返佣",value:"40"}]):2==e?(this.searchCofig[3]["value"]="",this.searchCofig[3]["list"]=[{label:"法币卖出",value:"32"},{label:"法币交易手续费",value:"82"},{label:"划出至币币",value:"11"},{label:"划出至合约",value:"52"}]):(this.searchCofig[3]["value"]="",this.searchCofig[3]["list"]=[{label:"法币买入",value:"36"},{label:"申诉买家赢，法币买入",value:"37"},{label:"法币交易返佣",value:"40"},{label:"法币卖出",value:"32"},{label:"法币交易手续费",value:"82"},{label:"划出至币币",value:"11"},{label:"划出至合约",value:"52"}])}},methods:{doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},calTotal:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,l,r,i,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.search_params_obj=t,this.calLoading=!0,a={},this.requiredParams(a),Object.assign(a,this.search_params_obj),l="",l=this.search_params_obj.coinId?this.symbollist.filter((function(e){return e["value"]==o.search_params_obj.coinId}))[0].label:"全部",e.next=9,u["a"].getFiatCoinInOutGoldTotal(a);case 9:r=e.sent,r&&(i=r.data.data,i?this.$alert("<p>币种：".concat(l,"</p> <p>数量：").concat(i.amount,"</p>  "),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){})):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,l,r,i,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,u["a"].getFiatCoinInOutGoldList(t);case 8:a=e.sent,a&&(l=a.data.data,r=l.records,i=l.total,o=l.current,n=l.pages,this.total=i,this.pages=n,this.current_page=o,this.list=r),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){var t=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(e.endTime=parseInt(new Date(this.toDay).getTime()/1e3),e.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.today,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var a="";a=this.symbollist.filter((function(e){return e["value"]==t.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=a}},formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e},getSymbolList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getCoinList").then((function(){t.symbollist=t.$store.state.common.coinlist,t.searchCofig[4]["list"]=t.symbollist}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.configs=p["e"],this.searchCofig=this.$util.clone(p["f"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getSymbolList()}},b=c,h=(a("c2d0"),a("0c7c")),v=Object(h["a"])(b,l,r,!1,null,null,null);t["default"]=v.exports},7514:function(e,t,a){"use strict";var l=a("5ca1"),r=a("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),l(l.P+l.F*o,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"87f3":function(e,t,a){var l=a("5ca1");l(l.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var l=a("5ca1");l(l.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},c2d0:function(e,t,a){"use strict";var l=a("2764"),r=a.n(l);r.a},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("28a5"),a("f576"),a("a481"),a("6b54");var l=a("7618");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,r=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(l["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},o=r.replace(/{([ymdhisa])+}/g,(function(e,t){var a=i[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},ff53:function(e,t,a){"use strict";var l=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?r(Number(e)*Math.pow(10,t)):Number(e)}function n(e){h&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),p=2;p<a;p++)r[p-2]=arguments[p];if(r.length>0)return s.apply(void 0,[s(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var u=o(e),c=o(t),b=i(e)+i(t),h=u*c;return n(h),h/Math.pow(10,b)}function p(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];if(r.length>0)return p.apply(void 0,[p(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(s(e,n)+s(t,n))/n}function u(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];if(r.length>0)return u.apply(void 0,[u(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(s(e,n)-s(t,n))/n}function c(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),u=2;u<a;u++)p[u-2]=arguments[u];if(p.length>0)return c.apply(void 0,[c(e,t),p[0]].concat(Object(l["a"])(p.slice(1))));var b=o(e),h=o(t);return n(b),n(h),s(b/h,r(Math.pow(10,i(t)-i(e))))}function b(e,t){var a=Math.pow(10,t);return c(Math.round(s(e,a)),a)}var h=!0;function v(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];h=e}t["a"]={strip:r,plus:p,minus:u,times:s,divide:c,round:b,digitLength:i,float2Fixed:o,enableBoundaryChecking:v}}}]);