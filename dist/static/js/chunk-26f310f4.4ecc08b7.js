(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26f310f4"],{"2e08":function(e,t,a){var r=a("9def"),l=a("9744"),n=a("be13");e.exports=function(e,t,a,o){var i=String(n(e)),p=i.length,s=void 0===a?" ":String(a),u=r(t);if(u<=p||""==s)return i;var c=u-p,b=l.call(s,Math.ceil(c/s.length));return b.length>c&&(b=b.slice(0,c)),o?b+i:i+b}},7514:function(e,t,a){"use strict";var r=a("5ca1"),l=a("0a49")(5),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},"835b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return n})),a.d(t,"u",(function(){return o})),a.d(t,"v",(function(){return i})),a.d(t,"w",(function(){return p})),a.d(t,"g",(function(){return s})),a.d(t,"h",(function(){return u})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return b})),a.d(t,"f",(function(){return d})),a.d(t,"i",(function(){return f})),a.d(t,"j",(function(){return m})),a.d(t,"q",(function(){return h})),a.d(t,"r",(function(){return g})),a.d(t,"s",(function(){return v})),a.d(t,"t",(function(){return y})),a.d(t,"o",(function(){return I})),a.d(t,"p",(function(){return w})),a.d(t,"x",(function(){return A})),a.d(t,"y",(function(){return U})),a.d(t,"m",(function(){return E})),a.d(t,"n",(function(){return x})),a.d(t,"k",(function(){return N})),a.d(t,"l",(function(){return _}));a("4360");var r=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",width:100,filters:[{text:"手续费账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"星球充值账号",val:105},{text:"合约账号",val:106},{text:"合约体验金账号",val:107}]},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:100,btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],l=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",width:100,filters:[{text:"手续费账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"星球充值账号",val:105},{text:"合约账号",val:106},{text:"合约体验金账号",val:107}]},{label:"更新时间",prop:"updateTime"}],n=[{type:"number",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"用户类型",prop:"userType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"星球充值账号",value:105},{label:"合约账号",value:106},{label:"合约体验金账号",value:107}]}],o=[{label:"订单号",prop:"id"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"划出账号",prop:"fromUid"},{label:"划出账号类型",prop:"fromUserTypeName"},{label:"接收账号",prop:"toUid"},{label:"接收账号类型",prop:"toUserTypeName"},{label:"操作人",prop:"operateUsername"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],i=[{label:"订单号",prop:"id"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"划出账号",prop:"fromUid"},{label:"划出账号类型",prop:"fromUserTypeName"},{label:"接收账号",prop:"toUid"},{label:"接收账号类型",prop:"toUserTypeName"},{label:"操作人",prop:"operateUsername"},{label:"时间",prop:"createTime"}],p=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"onlyNumber",label:"订单号",prop:"id",value:"",placeholder:"请输入"},{type:"select_search",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"划出账号类型",prop:"fromUserType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"子支出账号",value:104}]},{type:"select",label:"接收账号类型",prop:"toUserType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"子支出账号",value:104}]}],s=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"累计收益",prop:"totalProfit"},{label:"总销账",prop:"totalWriteOff"},{label:"操作",prop:"action",type:"action",width:310,btnGroup:[{label:"收益记录",fn:"earnEdit",type:"primary",alias:"earnEdit"},{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"},{label:"销账记录",fn:"writeoffEdit",type:"primary",alias:"writeoffEdit"}]}],u=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"累计收益",prop:"totalProfit"},{label:"总销账",prop:"totalWriteOff"}],c=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总充币",prop:"totalRecharge"},{label:"总调出",prop:"totalSpecialExpend"},{label:"总调入",prop:"totalSpecialIncome"},{label:"充币地址",prop:"coinAddress"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"}]}],b=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总充币",prop:"totalRecharge"},{label:"总调出",prop:"totalSpecialExpend"},{label:"总调入",prop:"totalSpecialIncome"},{label:"充币地址",prop:"coinAddress"}],d=[],f=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"}]}],m=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"}],h=[{label:"账号名称",prop:"realName"},{label:"UID",prop:"uid"},{label:"操作",prop:"action",type:"action",width:190,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],g=[{label:"账号名称",prop:"realName"}],v=[{label:"账号名称",prop:"realName",value:"",placeholder:"请输入"}],y=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总使用",prop:"totalUse"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"使用流水",fn:"detail",type:"primary",alias:"detail"}]}],A=[{label:"UID",prop:"uid"},{label:"订单号",prop:"relateRecdId"},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],U=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select_search",label:"币种",prop:"coinId",value:"",list:[]}],I=[{label:"时间",prop:"createTime"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"订单号",prop:"relateRecdId"}],w=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select_search",label:"币种",prop:"coinId",value:"",list:[]},{type:"onlyNumber",label:"订单号",prop:"relateRecdId",value:"",placeholder:"请输入"}],E=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"累计自动充值",prop:"totalRecharge"},{label:"累计手动充值",prop:"totalRechargeIncome"},{label:"总转出",prop:"totalOut"},{label:"充币地址",prop:"coinAddress",type:"labelArr",typeDetail:"dotStrList",fn:"transferIn",width:"440px"},{label:"操作",prop:"action",type:"action",width:380,btnGroup:[{label:"手动充值记录",fn:"manualEdit",type:"primary",alias:"manualEdit"},{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"},{label:"自动充值记录",fn:"autoEdit",type:"primary",alias:"autoEdit"}]}],x=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"累计自动充值",prop:"totalRecharge"},{label:"累计手动充值",prop:"totalRechargeIncome"},{label:"总转出",prop:"totalOut"},{label:"充币地址",prop:"coinAddress"}],N=[{label:"订单号",prop:"relateRecdId"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],_=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"select_search",label:"币种",prop:"coinId",value:"",list:[]}]},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,a){"use strict";var r=a("4588"),l=a("be13");e.exports=function(e){var t=String(l(this)),a="",n=r(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(a+=t);return a}},"9c3c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sonAcountList-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addLine}},[e._v("添加账号")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"500px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"账号名称",prop:"subUsername","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.form.subUsername,callback:function(t){e.$set(e.form,"subUsername",t)},expression:"form.subUsername"}})],1)],1),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1)],1)},l=[],n=(a("ac6a"),a("96cf"),a("3b8d")),o=a("c249"),i=a("2fee"),p=a("f21b"),s=a("835b"),u=a("4ec3"),c={name:"SonAcountList",components:{Btable:i["a"],Bsearch:o["a"],iconPage:p["a"]},data:function(){return{isCURDAuth:!0,listLoading:!1,btnLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,title:"添加账号",labelWidth:"110px",userType:104,dialogVisible:!1,form:{id:"",subUsername:""},rules:{subUsername:[{required:!0,message:"必填"}]},curRow:{},accountList:[]}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,r=t.row,this.curRow=r,"edit"===a&&(this.title="编辑账号",this.dialogVisible=!0,this.$nextTick((function(){l.$refs["form"].resetFields(),l.form={userId:r.userId,subUsername:r.realName}}))),"detail"===a&&this.$router.push({path:"/assetManage/sonAcountDetail",query:{userId:r.userId,realName:r.realName}});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},addLine:function(){var e=this;this.title="添加账号",this.dialogVisible=!0,this.$nextTick((function(){e.$refs["form"].resetFields(),e.form={userId:"",subUsername:""}}))},confirmOp:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,l,n,o,i,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=17;break}if(r=e.form,l=r.userId,n=r.subUsername,o={},e.btnLoading=!0,l?Object.assign(o,{realName:n,userId:l}):Object.assign(o,{userType:parseInt(e.userType),subUsername:n}),l){t.next=11;break}return t.next=8,u["a"].addAssetUser(o);case 8:t.t0=t.sent,t.next=14;break;case 11:return t.next=13,u["a"].getEditExpendUser(o);case 13:t.t0=t.sent;case 14:i=t.t0,i&&(p=l?"编辑成功":"添加成功",e.$message({message:p,type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,l,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,u["a"].getSubExpendUserList(t);case 8:a=e.sent,a.data&&a.data.data&&(r=a.data.data,l=r.records,n=r.total,o=r.current,i=r.pages,this.list=l,this.total=+n,this.current_page=o,this.pages=i),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){}},mounted:function(){var e=this.$util.getAuthority("SonAcountList",s["q"],s["r"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchCofig=this.$util.clone(s["s"]),this.getList()}},b=c,d=(a("b273"),a("0c7c")),f=Object(d["a"])(b,r,l,!1,null,null,null);t["default"]=f.exports},b273:function(e,t,a){"use strict";var r=a("f260"),l=a.n(r);l.a},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,l=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var n={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},o=l.replace(/{([ymdhisa])+}/g,(function(e,t){var a=n[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},f260:function(e,t,a){},f576:function(e,t,a){"use strict";var r=a("5ca1"),l=a("2e08"),n=a("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*o,"String",{padStart:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function n(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=n(e);return t>0?l(Number(e)*Math.pow(10,t)):Number(e)}function i(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),s=2;s<a;s++)l[s-2]=arguments[s];if(l.length>0)return p.apply(void 0,[p(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var u=o(e),c=o(t),b=n(e)+n(t),d=u*c;return i(d),d/Math.pow(10,b)}function s(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),o=2;o<a;o++)l[o-2]=arguments[o];if(l.length>0)return s.apply(void 0,[s(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var i=Math.pow(10,Math.max(n(e),n(t)));return(p(e,i)+p(t,i))/i}function u(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),o=2;o<a;o++)l[o-2]=arguments[o];if(l.length>0)return u.apply(void 0,[u(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var i=Math.pow(10,Math.max(n(e),n(t)));return(p(e,i)-p(t,i))/i}function c(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];if(s.length>0)return c.apply(void 0,[c(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var b=o(e),d=o(t);return i(b),i(d),p(b/d,l(Math.pow(10,n(t)-n(e))))}function b(e,t){var a=Math.pow(10,t);return c(Math.round(p(e,a)),a)}var d=!0;function f(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:l,plus:s,minus:u,times:p,divide:c,round:b,digitLength:n,float2Fixed:o,enableBoundaryChecking:f}}}]);