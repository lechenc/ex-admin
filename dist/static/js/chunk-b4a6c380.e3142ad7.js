(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4a6c380"],{"26f6":function(e,t,a){"use strict";a("6347")},"2e08":function(e,t,a){var r=a("9def"),l=a("9744"),o=a("be13");e.exports=function(e,t,a,n){var i=String(o(e)),p=i.length,u=void 0===a?" ":String(a),s=r(t);if(s<=p||""==u)return i;var c=s-p,b=l.call(u,Math.ceil(c/u.length));return b.length>c&&(b=b.slice(0,c)),n?b+i:i+b}},6347:function(e,t,a){},7514:function(e,t,a){"use strict";var r=a("5ca1"),l=a("0a49")(5),o="find",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),r(r.P+r.F*n,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},"835b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"u",(function(){return n})),a.d(t,"v",(function(){return i})),a.d(t,"w",(function(){return p})),a.d(t,"g",(function(){return u})),a.d(t,"h",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return b})),a.d(t,"f",(function(){return d})),a.d(t,"i",(function(){return f})),a.d(t,"j",(function(){return h})),a.d(t,"q",(function(){return m})),a.d(t,"r",(function(){return g})),a.d(t,"s",(function(){return v})),a.d(t,"t",(function(){return y})),a.d(t,"o",(function(){return w})),a.d(t,"p",(function(){return E})),a.d(t,"x",(function(){return A})),a.d(t,"y",(function(){return I})),a.d(t,"m",(function(){return U})),a.d(t,"n",(function(){return T})),a.d(t,"k",(function(){return x})),a.d(t,"l",(function(){return N}));a("4360");var r=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",width:100,filters:[{text:"手续费账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"星球充值账号",val:105},{text:"合约账号",val:106},{text:"合约体验金账号",val:107}]},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:100,btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],l=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",width:100,filters:[{text:"手续费账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"星球充值账号",val:105},{text:"合约账号",val:106},{text:"合约体验金账号",val:107}]},{label:"更新时间",prop:"updateTime"}],o=[{type:"number",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"用户类型",prop:"userType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"星球充值账号",value:105},{label:"合约账号",value:106},{label:"合约体验金账号",value:107}]}],n=[{label:"订单号",prop:"id"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"划出账号",prop:"fromUid"},{label:"划出账号类型",prop:"fromUserTypeName"},{label:"接收账号",prop:"toUid"},{label:"接收账号类型",prop:"toUserTypeName"},{label:"操作人",prop:"operateUsername"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],i=[{label:"订单号",prop:"id"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"划出账号",prop:"fromUid"},{label:"划出账号类型",prop:"fromUserTypeName"},{label:"接收账号",prop:"toUid"},{label:"接收账号类型",prop:"toUserTypeName"},{label:"操作人",prop:"operateUsername"},{label:"时间",prop:"createTime"}],p=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"onlyNumber",label:"订单号",prop:"id",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"划出账号类型",prop:"fromUserType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"子支出账号",value:104}]},{type:"select",label:"接收账号类型",prop:"toUserType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"子支出账号",value:104}]}],u=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"累计收益",prop:"totalProfit"},{label:"总销账",prop:"totalWriteOff"},{label:"操作",prop:"action",type:"action",width:310,btnGroup:[{label:"收益记录",fn:"earnEdit",type:"primary",alias:"earnEdit"},{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"},{label:"销账记录",fn:"writeoffEdit",type:"primary",alias:"writeoffEdit"}]}],s=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"累计收益",prop:"totalProfit"},{label:"总销账",prop:"totalWriteOff"}],c=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总充币",prop:"totalRecharge"},{label:"总调出",prop:"totalSpecialExpend"},{label:"总调入",prop:"totalSpecialIncome"},{label:"充币地址",prop:"coinAddress"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"}]}],b=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总充币",prop:"totalRecharge"},{label:"总调出",prop:"totalSpecialExpend"},{label:"总调入",prop:"totalSpecialIncome"},{label:"充币地址",prop:"coinAddress"}],d=[],f=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"}]}],h=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"}],m=[{label:"账号名称",prop:"realName"},{label:"UID",prop:"uid"},{label:"操作",prop:"action",type:"action",width:190,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],g=[{label:"账号名称",prop:"realName"}],v=[{label:"账号名称",prop:"realName",value:"",placeholder:"请输入"}],y=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总使用",prop:"totalUse"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"使用流水",fn:"detail",type:"primary",alias:"detail"}]}],A=[{label:"UID",prop:"uid"},{label:"订单号",prop:"relateRecdId"},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],I=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}],w=[{label:"时间",prop:"createTime"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"订单号",prop:"relateRecdId"}],E=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"onlyNumber",label:"订单号",prop:"relateRecdId",value:"",placeholder:"请输入"}],U=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"累计自动充值",prop:"totalRecharge"},{label:"累计手动充值",prop:"totalRechargeIncome"},{label:"总转出",prop:"totalOut"},{label:"充币地址",prop:"coinAddress",type:"labelArr",typeDetail:"dotStrList",fn:"transferIn",width:"440px"},{label:"操作",prop:"action",type:"action",width:380,btnGroup:[{label:"手动充值记录",fn:"manualEdit",type:"primary",alias:"manualEdit"},{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"},{label:"自动充值记录",fn:"autoEdit",type:"primary",alias:"autoEdit"}]}],T=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"累计自动充值",prop:"totalRecharge"},{label:"累计手动充值",prop:"totalRechargeIncome"},{label:"总转出",prop:"totalOut"},{label:"充币地址",prop:"coinAddress"}],x=[{label:"订单号",prop:"relateRecdId"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],N=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}]},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,a){"use strict";var r=a("4588"),l=a("be13");e.exports=function(e){var t=String(l(this)),a="",o=r(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(a+=t);return a}},bf71:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"assetManageList-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addLine}},[e._v("添加账号")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"500px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"账号类型","label-width":e.formLabelWidth,prop:"userType"}},[a("el-select",{attrs:{size:"small",clearable:""},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}},e._l(e.roleList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1)],1)},l=[],o=(a("ac6a"),a("96cf"),a("1da1")),n=a("c249"),i=a("2fee"),p=a("f21b"),u=a("835b"),s=a("4ec3"),c={name:"AssetManageList",components:{Btable:i["a"],Bsearch:n["a"],iconPage:p["a"]},data:function(){return{isCURDAuth:!0,listLoading:!1,btnLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,roleList:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"星球充值账号",value:105},{label:"合约账号",value:106}],title:"添加账号",formLabelWidth:"110px",dialogVisible:!1,curRow:{},form:{userType:""},rules:{userType:[{required:!0,message:"必填"}]}}},methods:{doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,r=t.row,l=+r.userType,"detail"===a&&(101===l?this.$router.push({path:"/assetManage/earnAccount",query:{userId:r.userId}}):102===l?this.$router.push({path:"/assetManage/costAccount",query:{userId:r.userId}}):103===l?this.$router.push({path:"/assetManage/expenseAcountList",query:{userId:r.userId}}):105===l?this.$router.push({path:"/assetManage/revenueAccount",query:{userId:r.userId}}):106===l?this.$router.push({path:"/contract/accountManagement/accountContract",query:{topBtn:!0}}):107===l&&this.$router.push({path:"/voucher/voucherExperience",query:{userId:r.userId}}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},addLine:function(){var e=this;this.formName="添加账号",this.dialogVisible=!0,this.$nextTick((function(){e.form={userType:""},e.$refs["form"].resetFields()}))},confirmOp:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r,l,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=9;break}return r=e.form.userType,l={userType:r},e.btnLoading=!0,t.next=6,s["a"].addAssetUser(l);case 6:o=t.sent,o&&(e.$message({message:"成功添加账号",type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r,l,o,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,s["a"].assetUserList(t);case 8:a=e.sent,a.data&&a.data.data&&(r=a.data.data,l=r.records,o=r.total,n=r.current,i=r.pages,this.list=l,this.total=o,this.current_page=n,this.pages=i),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){}},mounted:function(){var e=this.$util.getAuthority("AssetManageList",u["a"],u["b"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchCofig=this.$util.clone(u["c"]),this.getList()}},b=c,d=(a("26f6"),a("2877")),f=Object(d["a"])(b,r,l,!1,null,null,null);t["default"]=f.exports},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("53ca");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,l=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var o={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=l.replace(/{([ymdhisa])+}/g,(function(e,t){var a=o[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},f576:function(e,t,a){"use strict";var r=a("5ca1"),l=a("2e08"),o=a("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*n,"String",{padStart:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,a){"use strict";var r=a("2909");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function o(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=o(e);return t>0?l(Number(e)*Math.pow(10,t)):Number(e)}function i(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),u=2;u<a;u++)l[u-2]=arguments[u];if(l.length>0)return p.apply(void 0,[p(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var s=n(e),c=n(t),b=o(e)+o(t),d=s*c;return i(d),d/Math.pow(10,b)}function u(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),n=2;n<a;n++)l[n-2]=arguments[n];if(l.length>0)return u.apply(void 0,[u(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var i=Math.pow(10,Math.max(o(e),o(t)));return(p(e,i)+p(t,i))/i}function s(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),n=2;n<a;n++)l[n-2]=arguments[n];if(l.length>0)return s.apply(void 0,[s(e,t),l[0]].concat(Object(r["a"])(l.slice(1))));var i=Math.pow(10,Math.max(o(e),o(t)));return(p(e,i)-p(t,i))/i}function c(e,t){for(var a=arguments.length,u=new Array(a>2?a-2:0),s=2;s<a;s++)u[s-2]=arguments[s];if(u.length>0)return c.apply(void 0,[c(e,t),u[0]].concat(Object(r["a"])(u.slice(1))));var b=n(e),d=n(t);return i(b),i(d),p(b/d,l(Math.pow(10,o(t)-o(e))))}function b(e,t){var a=Math.pow(10,t);return c(Math.round(p(e,a)),a)}var d=!0;function f(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:l,plus:u,minus:s,times:p,divide:c,round:b,digitLength:o,float2Fixed:n,enableBoundaryChecking:f}}}]);