(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74def125"],{1299:function(e,t,a){},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),l="find",p=!0;l in[]&&Array(1)[l]((function(){p=!1})),r(r.P+r.F*p,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(l)},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8a15":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"voucherVipUserDetails-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1)],1),e._v(" "),a("div",[a("H5",[e._v("尊贵邀请会员 "),a("span",[e._v("("+e._s(e.total)+"/"+e._s(e.current_total)+")")])]),e._v(" "),a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1)],1)},i=[],l=(a("96cf"),a("3b8d")),p=(a("ac6a"),a("c249")),n=a("2fee"),o=a("f21b"),s=a("e410"),c=a("4ec3"),u={name:"VoucherVipUserDetails",components:{Btable:n["a"],Bsearch:p["a"],iconPage:o["a"]},data:function(){return{listLoading:!1,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",coin_List:[],current_total:""}},methods:{doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i,l,p,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize,superUid:this.$route.query.superUid},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,c["a"].getVoucherVipUserDetails(t);case 8:a=e.sent,a&&(r=a.data.data,i=r.records,l=r.total,p=r.current,n=r.pages,this.total=l,this.pages=n,this.current_page=p,this.list=i,i.length>0?this.current_total=i[0].inviteSum||0:this.current_total=0),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){},formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e},getSymbolList:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getSymbolMimicListAnalystAll").then((function(){t.coin_List=t.$store.state.common.symbolMimicListAnalystAll,t.searchCofig[4]["list"]=t.coin_List}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.configs=s["j"],this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}},b=u,f=(a("ec7f"),a("0c7c")),d=Object(f["a"])(b,r,i,!1,null,null,null);t["default"]=d.exports},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},e410:function(e,t,a){"use strict";a.d(t,"j",(function(){return h})),a.d(t,"g",(function(){return r})),a.d(t,"h",(function(){return i})),a.d(t,"i",(function(){return l})),a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"k",(function(){return b})),a.d(t,"l",(function(){return f})),a.d(t,"m",(function(){return d}));var r=[{label:"体验金券ID",prop:"id"},{label:"体验金券名称",prop:"experienceName"},{label:"关联副标题",prop:"experienceSubtitle"},{label:"资产类型",prop:"assetsType",width:100,type:"filter",show_type:"text",filters:[{text:"USDT永续合约",val:1}]},{label:"合约交易对",prop:"coinMarket"},{label:"仓位类型",prop:"positionType",width:100,type:"filter",show_type:"text",filters:[{text:"全仓",val:0},{text:"逐仓",val:1}]},{label:"委托类型",prop:"entrustType",width:100,type:"filter",show_type:"text",filters:[{text:"市价",val:0}]},{label:"最高杠杆倍数",prop:"leverage"},{label:"面值",prop:"faceValue"},{label:"资产币种",prop:"marketIdmy"},{label:"有效期",prop:"effectiveStartTime",prop1:"effectiveEndTime",prop2:"effectiveDay",type:"mytextPairTimeRange",width:310},{label:"创建时间",prop:"createTime",width:180},{label:"启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"操作",prop:"action",type:"action",width:240,btnGroup:[{label:"批量发券",fn:"batchGrant",type:"primary",alias:"batchGrant"},{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],i=[{label:"体验金券ID",prop:"id"},{label:"体验金券名称",prop:"experienceName"},{label:"关联副标题",prop:"experienceSubtitle"},{label:"资产类型",prop:"assetsType",width:100,type:"filter",show_type:"text",filters:[{text:"USDT永续合约",val:1}]},{label:"合约交易对",prop:"coinMarket"},{label:"仓位类型",prop:"positionType",width:100,type:"filter",show_type:"text",filters:[{text:"全仓",val:0},{text:"逐仓",val:1}]},{label:"委托类型",prop:"entrustType",width:100,type:"filter",show_type:"text",filters:[{text:"市价",val:0}]},{label:"最高杠杆倍数",prop:"leverage"},{label:"面值",prop:"faceValue"},{label:"资产币种",prop:"marketIdmy"},{label:"有效期",prop:"effectiveStartTime",prop1:"effectiveEndTime",prop2:"effectiveDay",type:"mytextPairTimeRange",width:310},{label:"创建时间",prop:"createTime",width:180}],l=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"体验金券名称",prop:"experienceName",value:""}],p=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动类型",prop:"activityType",width:100,type:"filter",show_type:"text",filters:[{text:"注册",val:0},{text:"净入金",val:1},{text:"邀请",val:2},{text:"抽奖",val:3},{text:"实名认证",val:4},{text:"净入金和开仓交易额",val:5},{text:"新手操作指引",val:6}]},{label:"触发条件 - 关联送券副标题 - 送券数量",type:"labelArr",typeDetail:"stringlistMore",prop:"activityVOList",arrValue:["触发条件","关联送券副标题","送券数量"],arrProp:["triggerCondition","experienceSubtitle","couponNumber"],width:620},{label:"发放模式",prop:"grantMode",width:100,type:"filter",show_type:"text",filters:[{text:"手动模式",val:0},{text:"自动模式",val:1}]},{label:"发券频率(h)",prop:"grantDay"},{label:"总成本限制(USDT)",prop:"amountLimit"},{label:"活动有效时间",prop:"effectiveStartTime",prop1:"effectiveEndTime",type:"textPairTimeRange",width:310},{label:"创建时间",prop:"createTime",width:180},{label:"启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"发奖",fn:"preReview",isPop:!1,filter_key:"activityType",filter_status:0,type:"success",alias:"preReview"},{label:"编辑",fn:"edit",type:"primary",alias:"edit",noIsClick:!0},{label:"删除",fn:"del",type:"primary",alias:"del",noIsClick:!0}]}],n=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动类型",prop:"activityType",width:100,type:"filter",show_type:"text",filters:[{text:"注册",val:0},{text:"净入金",val:1},{text:"邀请",val:2},{text:"抽奖",val:3},{text:"实名认证",val:4},{text:"净入金和开仓交易额",val:5},{text:"新手操作指引",val:6}]},{label:"触发条件 - 关联送券副标题 - 送券数量",type:"labelArr",typeDetail:"stringlistMore",prop:"activityVOList",arrValue:["触发条件","关联送券副标题","送券数量"],arrProp:["triggerCondition","experienceName","couponNumber"],width:620},{label:"发放模式",prop:"grantMode",width:100,type:"filter",show_type:"text",filters:[{text:"手动模式",val:0},{text:"自动模式",val:1}]},{label:"发券频率（h）",prop:"grantDay"},{label:"总成本限制(USDT)",prop:"amountLimit"},{label:"活动有效时间",prop:"effectiveStartTime",prop1:"effectiveEndTime",type:"textPairTimeRange",width:310},{label:"创建时间",prop:"createTime",width:180}],o=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"活动名称",prop:"activityName",value:""}],s=[{label:"账户",prop:"uid"},{label:"币种",prop:"coinName"},{label:"累计发放（张）",prop:"giveCouponTotal"},{label:"累计发放（USDT）",prop:"giveUsdtTotal"},{label:"累计回收（张）",prop:"recoveryCouponTotal"},{label:"累计回收（USDT）",prop:"recoveryUsdtTotal"},{label:"当前持仓金额",prop:"currentWarehouseAmount"},{label:"操作",prop:"action",type:"action",width:410,btnGroup:[{label:"发放记录",fn:"grant",type:"primary",alias:"grant"},{label:"成交记录",fn:"deal",type:"primary",alias:"deal"},{label:"持仓记录",fn:"position",type:"primary",alias:"position"}]}],c=[{label:"UID",prop:"uid"},{label:"体验金券ID",prop:"experienceId"},{label:"体验金券面值",prop:"faceValue"},{label:"数量",prop:"couponNumber"},{label:"体验金币种",prop:"coinMarket"},{label:"券状态",prop:"status",width:100,type:"filter",show_type:"text",filters:[{text:"未使用",val:0},{text:"已使用",val:1},{text:"已失效",val:2}]},{label:"发放时间",prop:"createTime"},{label:"使用时间",prop:"useTime"},{label:"失效时间",prop:"effectiveEndTime"}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"text",label:"UID",prop:"uid",value:""},{type:"text",label:"体验金券ID",prop:"experienceId",value:""},{type:"select",label:"券状态",prop:"status",value:"",list:[{label:"未使用",value:0},{label:"已使用",value:1},{label:"已失效",value:2}]}],b=[{label:"UID",prop:"uid"},{label:"领取类型",prop:"receiveType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:0},{text:"自动发放",val:1}]},{label:"发放名额数量",prop:"count"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"详情",fn:"details",type:"primary",alias:"details"}]}],f=[{label:"UID",prop:"uid"},{label:"领取类型",prop:"receiveType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:0},{text:"自动发放",val:1}]},{label:"发放名额数量",prop:"count"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"}],d=[{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"领取类型",prop:"receiveType",value:"",list:[{label:"自动发放",value:1},{label:"手动发放",value:0}]}],h=[{label:"序号",type:"index",width:80},{label:"UID",prop:"uid"},{label:"手机号",prop:"phone"},{label:"邮箱",prop:"eamil"},{label:"实名状态",prop:"verifiedStatus",width:100,type:"filter",show_type:"text",filters:[{text:"未认证",val:0},{text:"已认证",val:1}]},{label:"入金状态",prop:"inGoldCountStatus",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"登录IP",prop:"loginIp"},{label:"注册IP",prop:"registeredIp"},{label:"注册时间",prop:"registeredTime"}]},ec7f:function(e,t,a){"use strict";var r=a("1299"),i=a.n(r);i.a},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var l={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},p=i.replace(/{([ymdhisa])+}/g,(function(e,t){var a=l[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return p=p.replace(/\//gi,"-"),p}},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function l(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function p(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=l(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function n(e){f&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function o(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),s=2;s<a;s++)i[s-2]=arguments[s];if(i.length>0)return o.apply(void 0,[o(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var c=p(e),u=p(t),b=l(e)+l(t),f=c*u;return n(f),f/Math.pow(10,b)}function s(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),p=2;p<a;p++)i[p-2]=arguments[p];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var n=Math.pow(10,Math.max(l(e),l(t)));return(o(e,n)+o(t,n))/n}function c(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),p=2;p<a;p++)i[p-2]=arguments[p];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var n=Math.pow(10,Math.max(l(e),l(t)));return(o(e,n)-o(t,n))/n}function u(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var b=p(e),f=p(t);return n(b),n(f),o(b/f,i(Math.pow(10,l(t)-l(e))))}function b(e,t){var a=Math.pow(10,t);return u(Math.round(o(e,a)),a)}var f=!0;function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f=e}t["a"]={strip:i,plus:s,minus:c,times:o,divide:u,round:b,digitLength:l,float2Fixed:p,enableBoundaryChecking:d}}}]);