(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d276385"],{"34da":function(e,t,a){"use strict";a("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,r){a.path==e&&(t=r)})),t>=0&&a.splice(t,1)}}}},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),l="find",p=!0;l in[]&&Array(1)[l]((function(){p=!1})),r(r.P+r.F*p,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(l)},"798c":function(e,t,a){"use strict";var r=a("7b50"),i=a.n(r);i.a},"7b50":function(e,t,a){},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},e410:function(e,t,a){"use strict";a.d(t,"j",(function(){return b})),a.d(t,"g",(function(){return r})),a.d(t,"h",(function(){return i})),a.d(t,"i",(function(){return l})),a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"k",(function(){return h})),a.d(t,"l",(function(){return d})),a.d(t,"m",(function(){return f}));var r=[{label:"体验金券ID",prop:"id"},{label:"体验金券名称",prop:"experienceName"},{label:"关联副标题",prop:"experienceSubtitle"},{label:"资产类型",prop:"assetsType",width:100,type:"filter",show_type:"text",filters:[{text:"USDT永续合约",val:1}]},{label:"合约交易对",prop:"coinMarket"},{label:"仓位类型",prop:"positionType",width:100,type:"filter",show_type:"text",filters:[{text:"全仓",val:0},{text:"逐仓",val:1}]},{label:"委托类型",prop:"entrustType",width:100,type:"filter",show_type:"text",filters:[{text:"市价",val:0}]},{label:"最高杠杆倍数",prop:"leverage"},{label:"面值",prop:"faceValue"},{label:"资产币种",prop:"marketIdmy"},{label:"有效期",prop:"effectiveStartTime",prop1:"effectiveEndTime",prop2:"effectiveDay",type:"mytextPairTimeRange",width:310},{label:"创建时间",prop:"createTime",width:180},{label:"启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"操作",prop:"action",type:"action",width:240,btnGroup:[{label:"批量发券",fn:"batchGrant",type:"primary",alias:"batchGrant"},{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],i=[{label:"体验金券ID",prop:"id"},{label:"体验金券名称",prop:"experienceName"},{label:"关联副标题",prop:"experienceSubtitle"},{label:"资产类型",prop:"assetsType",width:100,type:"filter",show_type:"text",filters:[{text:"USDT永续合约",val:1}]},{label:"合约交易对",prop:"coinMarket"},{label:"仓位类型",prop:"positionType",width:100,type:"filter",show_type:"text",filters:[{text:"全仓",val:0},{text:"逐仓",val:1}]},{label:"委托类型",prop:"entrustType",width:100,type:"filter",show_type:"text",filters:[{text:"市价",val:0}]},{label:"最高杠杆倍数",prop:"leverage"},{label:"面值",prop:"faceValue"},{label:"资产币种",prop:"marketIdmy"},{label:"有效期",prop:"effectiveStartTime",prop1:"effectiveEndTime",prop2:"effectiveDay",type:"mytextPairTimeRange",width:310},{label:"创建时间",prop:"createTime",width:180}],l=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"体验金券名称",prop:"experienceName",value:""}],p=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动类型",prop:"activityType",width:100,type:"filter",show_type:"text",filters:[{text:"注册",val:0},{text:"净入金",val:1},{text:"邀请",val:2},{text:"抽奖",val:3},{text:"实名认证",val:4},{text:"净入金和开仓交易额",val:5},{text:"新手操作指引",val:6}]},{label:"触发条件 - 关联送券副标题 - 送券数量",type:"labelArr",typeDetail:"stringlistMore",prop:"activityVOList",arrValue:["触发条件","关联送券副标题","送券数量"],arrProp:["triggerCondition","experienceSubtitle","couponNumber"],width:620},{label:"发放模式",prop:"grantMode",width:100,type:"filter",show_type:"text",filters:[{text:"手动模式",val:0},{text:"自动模式",val:1}]},{label:"发券频率(h)",prop:"grantDay"},{label:"总成本限制(USDT)",prop:"amountLimit"},{label:"活动有效时间",prop:"effectiveStartTime",prop1:"effectiveEndTime",type:"textPairTimeRange",width:310},{label:"创建时间",prop:"createTime",width:180},{label:"启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"发奖",fn:"preReview",isPop:!1,filter_key:"activityType",filter_status:0,type:"success",alias:"preReview"},{label:"编辑",fn:"edit",type:"primary",alias:"edit",noIsClick:!0},{label:"删除",fn:"del",type:"primary",alias:"del",noIsClick:!0}]}],n=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动类型",prop:"activityType",width:100,type:"filter",show_type:"text",filters:[{text:"注册",val:0},{text:"净入金",val:1},{text:"邀请",val:2},{text:"抽奖",val:3},{text:"实名认证",val:4},{text:"净入金和开仓交易额",val:5},{text:"新手操作指引",val:6}]},{label:"触发条件 - 关联送券副标题 - 送券数量",type:"labelArr",typeDetail:"stringlistMore",prop:"activityVOList",arrValue:["触发条件","关联送券副标题","送券数量"],arrProp:["triggerCondition","experienceName","couponNumber"],width:620},{label:"发放模式",prop:"grantMode",width:100,type:"filter",show_type:"text",filters:[{text:"手动模式",val:0},{text:"自动模式",val:1}]},{label:"发券频率（h）",prop:"grantDay"},{label:"总成本限制(USDT)",prop:"amountLimit"},{label:"活动有效时间",prop:"effectiveStartTime",prop1:"effectiveEndTime",type:"textPairTimeRange",width:310},{label:"创建时间",prop:"createTime",width:180}],o=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"活动名称",prop:"activityName",value:""}],s=[{label:"账户",prop:"uid"},{label:"币种",prop:"coinName"},{label:"累计发放（张）",prop:"giveCouponTotal"},{label:"累计发放（USDT）",prop:"giveUsdtTotal"},{label:"累计回收（张）",prop:"recoveryCouponTotal"},{label:"累计回收（USDT）",prop:"recoveryUsdtTotal"},{label:"当前持仓金额",prop:"currentWarehouseAmount"},{label:"操作",prop:"action",type:"action",width:410,btnGroup:[{label:"发放记录",fn:"grant",type:"primary",alias:"grant"},{label:"成交记录",fn:"deal",type:"primary",alias:"deal"},{label:"持仓记录",fn:"position",type:"primary",alias:"position"}]}],c=[{label:"UID",prop:"uid"},{label:"体验金券ID",prop:"experienceId"},{label:"体验金券面值",prop:"faceValue"},{label:"数量",prop:"couponNumber"},{label:"体验金币种",prop:"coinMarket"},{label:"券状态",prop:"status",width:100,type:"filter",show_type:"text",filters:[{text:"未使用",val:0},{text:"已使用",val:1},{text:"已失效",val:2}]},{label:"发放时间",prop:"createTime"},{label:"使用时间",prop:"useTime"},{label:"失效时间",prop:"effectiveEndTime"}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"text",label:"UID",prop:"uid",value:""},{type:"text",label:"体验金券ID",prop:"experienceId",value:""},{type:"select",label:"券状态",prop:"status",value:"",list:[{label:"未使用",value:0},{label:"已使用",value:1},{label:"已失效",value:2}]}],h=[{label:"UID",prop:"uid"},{label:"领取类型",prop:"receiveType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:0},{text:"自动发放",val:1}]},{label:"发放名额数量",prop:"count"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"详情",fn:"details",type:"primary",alias:"details"}]}],d=[{label:"UID",prop:"uid"},{label:"领取类型",prop:"receiveType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:0},{text:"自动发放",val:1}]},{label:"发放名额数量",prop:"count"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"}],f=[{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"领取类型",prop:"receiveType",value:"",list:[{label:"自动发放",value:1},{label:"手动发放",value:0}]}],b=[{label:"序号",type:"index",width:80},{label:"UID",prop:"uid"},{label:"手机号",prop:"phone"},{label:"邮箱",prop:"eamil"},{label:"实名状态",prop:"verifiedStatus",width:100,type:"filter",show_type:"text",filters:[{text:"未认证",val:0},{text:"已认证",val:1}]},{label:"入金状态",prop:"inGoldCountStatus",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"登录IP",prop:"loginIp"},{label:"注册IP",prop:"registeredIp"},{label:"注册时间",prop:"registeredTime"}]},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var l={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},p=i.replace(/{([ymdhisa])+}/g,(function(e,t){var a=l[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return p=p.replace(/\//gi,"-"),p}},fea5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"voucherExperience-container"},[a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1)])},i=[],l=(a("ac6a"),a("96cf"),a("3b8d")),p=a("c249"),n=a("2fee"),o=a("e410"),s=a("4ec3"),c=a("34da"),u=(a("ca00"),{name:"VoucherExperience",components:{Btable:n["a"],Bsearch:p["a"]},mixins:[c["a"]],data:function(){return{listLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,dialogVisible:!1,curRow:{},coinList:[],getId:""}},methods:{doHandle:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,t.row,"grant"===a?this.$router.push({path:"/front/voucher/voucherGrant"}):"deal"===a?this.$router.push({path:"/contract/order/dealContract"}):"position"===a?this.$router.push({path:"/contract/store/positionContract"}):"closePosition"===a&&this.$router.push({path:"/contract/store/closeContract"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={userType:107},this.getId&&(t.userId=this.getId),this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=9,s["a"].getExperienceDetail(t);case 9:a=e.sent,a&&a.data&&a.data.data&&(a.data.data[0].uid="体验金",this.list=a.data.data),this.listLoading=!1;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){},initFunc:function(){var e=this,t=this.$util.getAuthority("VoucherExperience",o["d"],[]);this.configs=t.val,this.$store.dispatch("common/getCoinList").then((function(){e.coinList=e.$store.state.common.coinlist}));var a=this.$route.query.userId;a?(this.getId=a,this.getList()):this.getList()}},mounted:function(){this.list=[],this.configs=[],this.searchCofig=[],this.search_params_obj={},this.current_page=1,this.pageSize=10,this.total=0,this.pages=0,this.initFunc()}}),h=u,d=(a("798c"),a("0c7c")),f=Object(d["a"])(h,r,i,!1,null,null,null);t["default"]=f.exports},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function l(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function p(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=l(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function n(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function o(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),s=2;s<a;s++)i[s-2]=arguments[s];if(i.length>0)return o.apply(void 0,[o(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var c=p(e),u=p(t),h=l(e)+l(t),d=c*u;return n(d),d/Math.pow(10,h)}function s(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),p=2;p<a;p++)i[p-2]=arguments[p];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var n=Math.pow(10,Math.max(l(e),l(t)));return(o(e,n)+o(t,n))/n}function c(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),p=2;p<a;p++)i[p-2]=arguments[p];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var n=Math.pow(10,Math.max(l(e),l(t)));return(o(e,n)-o(t,n))/n}function u(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var h=p(e),d=p(t);return n(h),n(d),o(h/d,i(Math.pow(10,l(t)-l(e))))}function h(e,t){var a=Math.pow(10,t);return u(Math.round(o(e,a)),a)}var d=!0;function f(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:i,plus:s,minus:c,times:o,divide:u,round:h,digitLength:l,float2Fixed:p,enableBoundaryChecking:f}}}]);