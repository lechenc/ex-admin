(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec5c7bd8"],{"178b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"writeoffRecord-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1)],1),e._v(" "),a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",[a("el-row",[a("el-col",{attrs:{span:18}},[a("el-form-item",{attrs:{label:"UID","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.uid))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"订单号","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.relateRecdId))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.coinName))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"销账数量","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.amount))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"销账时间","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.createTime))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.remark))])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)},l=[],i=(a("a481"),a("ac6a"),a("96cf"),a("1da1")),o=a("c249"),n=a("2fee"),p=a("f21b"),s=a("835b"),c=a("4ec3"),u=a("34da"),d=(a("ca00"),{name:"WriteoffRecord",components:{Btable:n["a"],Bsearch:o["a"],iconPage:p["a"]},mixins:[u["a"]],data:function(){return{isCURDAuth:!0,listLoading:!1,calLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,formLabelWidth:"110px",curRow:{},dialogTitle:"",dialogVisible:!1,form:{},toDay:"",ago:""}},methods:{doHandle:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,r=t.row,this.curRow=r,"detail"===a&&(this.dialogTitle="查看详情",this.dialogVisible=!0);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY-MM-DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY-MM-DD HH:mm:ss")],this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,r,l,i,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize,optType:85},this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.search_params_obj.endTime.replace(/\//gi,"-"),this.search_params_obj.startTime=this.search_params_obj.startTime.replace(/\//gi,"-")),Object.assign(t,this.$route.query),this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=10,c["a"].getAccountWriteOffRecord(t);case 10:a=e.sent,a&&(r=a.data.data,l=r.records,i=r.total,o=r.current,n=r.pages,this.list=l,this.dataList=l,this.total=i,this.current_page=o,this.pages=n),this.listLoading=!1;case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");e.endTime=a.replace(/\//gi,"-"),e.startTime=t.replace(/\//gi,"-"),this.searchCofig[0].value=[t,a]}},initFunc:function(){var e=this;this.configs=s["x"],this.searchCofig=this.$util.clone(s["y"]),this.$store.dispatch("common/getCoinList").then((function(){e.searchCofig[2]["list"]=e.$store.state.common.coinlist,e.coinList=e.$store.state.common.coinlist})),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago");var t=this.$route.query.uid;t?this.$nextTick((function(){e.searchCofig[1].value=t,e.search_params_obj={uid:t},e.getList()})):this.getList()}},activated:function(){this.isInTags()||(this.list=[],this.configs=[],this.searchCofig=[],this.search_params_obj={},this.current_page=1,this.pageSize=10,this.total=0,this.pages=0,this.initFunc())}}),b=d,h=(a("5ada"),a("2877")),f=Object(h["a"])(b,r,l,!1,null,null,null);t["default"]=f.exports},"2e08":function(e,t,a){var r=a("9def"),l=a("9744"),i=a("be13");e.exports=function(e,t,a,o){var n=String(i(e)),p=n.length,s=void 0===a?" ":String(a),c=r(t);if(c<=p||""==s)return n;var u=c-p,d=l.call(s,Math.ceil(u/s.length));return d.length>u&&(d=d.slice(0,u)),o?d+n:n+d}},"34da":function(e,t,a){"use strict";a("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,r){a.path==e&&(t=r)})),t>=0&&a.splice(t,1)}}}},"5ada":function(e,t,a){"use strict";a("dd66")},7514:function(e,t,a){"use strict";var r=a("5ca1"),l=a("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"835b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"u",(function(){return o})),a.d(t,"v",(function(){return n})),a.d(t,"w",(function(){return p})),a.d(t,"g",(function(){return s})),a.d(t,"h",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return b})),a.d(t,"i",(function(){return h})),a.d(t,"j",(function(){return f})),a.d(t,"q",(function(){return m})),a.d(t,"r",(function(){return g})),a.d(t,"s",(function(){return v})),a.d(t,"t",(function(){return y})),a.d(t,"o",(function(){return A})),a.d(t,"p",(function(){return T})),a.d(t,"x",(function(){return _})),a.d(t,"y",(function(){return w})),a.d(t,"m",(function(){return E})),a.d(t,"n",(function(){return I})),a.d(t,"k",(function(){return R})),a.d(t,"l",(function(){return N}));a("4360");var r=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",width:100,filters:[{text:"手续费账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"星球充值账号",val:105},{text:"合约账号",val:106},{text:"合约体验金账号",val:107}]},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:100,btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],l=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",width:100,filters:[{text:"手续费账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"星球充值账号",val:105},{text:"合约账号",val:106},{text:"合约体验金账号",val:107}]},{label:"更新时间",prop:"updateTime"}],i=[{type:"number",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"用户类型",prop:"userType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"星球充值账号",value:105},{label:"合约账号",value:106},{label:"合约体验金账号",value:107}]}],o=[{label:"订单号",prop:"id"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"划出账号",prop:"fromUid"},{label:"划出账号类型",prop:"fromUserTypeName"},{label:"接收账号",prop:"toUid"},{label:"接收账号类型",prop:"toUserTypeName"},{label:"操作人",prop:"operateUsername"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],n=[{label:"订单号",prop:"id"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"划出账号",prop:"fromUid"},{label:"划出账号类型",prop:"fromUserTypeName"},{label:"接收账号",prop:"toUid"},{label:"接收账号类型",prop:"toUserTypeName"},{label:"操作人",prop:"operateUsername"},{label:"时间",prop:"createTime"}],p=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"onlyNumber",label:"订单号",prop:"id",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"划出账号类型",prop:"fromUserType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"子支出账号",value:104}]},{type:"select",label:"接收账号类型",prop:"toUserType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"子支出账号",value:104}]}],s=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"累计收益",prop:"totalProfit"},{label:"总销账",prop:"totalWriteOff"},{label:"操作",prop:"action",type:"action",width:310,btnGroup:[{label:"收益记录",fn:"earnEdit",type:"primary",alias:"earnEdit"},{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"},{label:"销账记录",fn:"writeoffEdit",type:"primary",alias:"writeoffEdit"}]}],c=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"累计收益",prop:"totalProfit"},{label:"总销账",prop:"totalWriteOff"}],u=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总充币",prop:"totalRecharge"},{label:"总调出",prop:"totalSpecialExpend"},{label:"总调入",prop:"totalSpecialIncome"},{label:"充币地址",prop:"coinAddress"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"}]}],d=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总充币",prop:"totalRecharge"},{label:"总调出",prop:"totalSpecialExpend"},{label:"总调入",prop:"totalSpecialIncome"},{label:"充币地址",prop:"coinAddress"}],b=[],h=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"}]}],f=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"}],m=[{label:"账号名称",prop:"realName"},{label:"UID",prop:"uid"},{label:"操作",prop:"action",type:"action",width:190,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],g=[{label:"账号名称",prop:"realName"}],v=[{label:"账号名称",prop:"realName",value:"",placeholder:"请输入"}],y=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总使用",prop:"totalUse"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"使用流水",fn:"detail",type:"primary",alias:"detail"}]}],_=[{label:"UID",prop:"uid"},{label:"订单号",prop:"relateRecdId"},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],w=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}],A=[{label:"时间",prop:"createTime"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"订单号",prop:"relateRecdId"}],T=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"onlyNumber",label:"订单号",prop:"relateRecdId",value:"",placeholder:"请输入"}],E=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"累计自动充值",prop:"totalRecharge"},{label:"累计手动充值",prop:"totalRechargeIncome"},{label:"总转出",prop:"totalOut"},{label:"充币地址",prop:"coinAddress",type:"labelArr",typeDetail:"dotStrList",fn:"transferIn",width:"440px"},{label:"操作",prop:"action",type:"action",width:380,btnGroup:[{label:"手动充值记录",fn:"manualEdit",type:"primary",alias:"manualEdit"},{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"},{label:"自动充值记录",fn:"autoEdit",type:"primary",alias:"autoEdit"}]}],I=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"累计自动充值",prop:"totalRecharge"},{label:"累计手动充值",prop:"totalRechargeIncome"},{label:"总转出",prop:"totalOut"},{label:"充币地址",prop:"coinAddress"}],R=[{label:"订单号",prop:"relateRecdId"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],N=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}]},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,a){"use strict";var r=a("4588"),l=a("be13");e.exports=function(e){var t=String(l(this)),a="",i=r(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(a+=t);return a}},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},dd66:function(e,t,a){},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("53ca");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,l=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},o=l.replace(/{([ymdhisa])+}/g,(function(e,t){var a=i[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},f576:function(e,t,a){"use strict";var r=a("5ca1"),l=a("2e08"),i=a("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padStart:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,a){"use strict";var r=a("2909");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?l(Number(e)*Math.pow(10,t)):Number(e)}function n(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),s=2;s<a;s++)l[s-2]=arguments[s];if(l.length>0)return p.apply(void 0,[p(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var c=o(e),u=o(t),d=i(e)+i(t),b=c*u;return n(b),b/Math.pow(10,d)}function s(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),o=2;o<a;o++)l[o-2]=arguments[o];if(l.length>0)return s.apply(void 0,[s(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(p(e,n)+p(t,n))/n}function c(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),o=2;o<a;o++)l[o-2]=arguments[o];if(l.length>0)return c.apply(void 0,[c(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(p(e,n)-p(t,n))/n}function u(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var d=o(e),b=o(t);return n(d),n(b),p(d/b,l(Math.pow(10,i(t)-i(e))))}function d(e,t){var a=Math.pow(10,t);return u(Math.round(p(e,a)),a)}var b=!0;function h(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:l,plus:s,minus:c,times:p,divide:u,round:d,digitLength:i,float2Fixed:o,enableBoundaryChecking:h}}}]);