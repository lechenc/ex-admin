(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-526f369c"],{"34da":function(e,t,a){"use strict";a("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,r){a.path==e&&(t=r)})),t>=0&&a.splice(t,1)}}}},"3e87":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"revenueAccount-container"},[a("div",{staticClass:"container-btn"},[e.btnHeaderArr.includes("manual")?a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addLine("")}}},[e._v("手动充值")]):e._e(),e._v(" "),e.btnHeaderArr.includes("add")?a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addLine("transfer")}}},[e._v("划转")]):e._e()],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"500px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinId"}},[a("el-select",{attrs:{size:"small"},on:{change:e.getCoinNum},model:{value:e.form.coinId,callback:function(t){e.$set(e.form,"coinId",t)},expression:"form.coinId"}},e._l(e.coinList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.curCoinName+"可用余额","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!0},model:{value:e.form.coinNum,callback:function(t){e.$set(e.form,"coinNum",t)},expression:"form.coinNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.isTransfer?"转出数量":"充值数量",prop:"amount","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"number",placeholder:"请输入"},on:{input:function(t){return e.checkVal("amount")}},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),e._v(" "),e.isTransfer?a("el-form-item",{attrs:{label:"接收账户","label-width":e.formLabelWidth,prop:"toUserId"}},[a("el-select",{attrs:{size:"small"},model:{value:e.form.toUserId,callback:function(t){e.$set(e.form,"toUserId",t)},expression:"form.toUserId"}},e._l(e.accountList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",row:5,placeholder:"请输入"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1)],1)},n=[],l=(a("ac6a"),a("96cf"),a("3b8d")),i=a("c249"),o=a("2fee"),p=a("835b"),s=a("4ec3"),u=a("34da"),c=(a("ca00"),{name:"RevenueAccount",components:{Btable:o["a"],Bsearch:i["a"]},mixins:[u["a"]],data:function(){return{btnHeaderArr:[],isCURDAuth:!0,listLoading:!1,btnLoading:!1,excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,title:"添加黑名单",formLabelWidth:"130px",dialogVisible:!1,earnUserType:105,form:{coinNum:"",coinId:"",amount:"",toUserId:"",remark:""},isTransfer:!0,rules:{coinId:[{required:!0,message:"必填"}],amount:[{required:!0,message:"必填"}],toUserId:[{required:!0,message:"必填"}],remark:[{required:!0,message:"必填"}]},curRow:{},coinList:[],curCoinName:"",accountList:[]}},methods:{doHandle:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,r=t.row,"manualEdit"===a?this.$router.push({path:"/assetManage/manualRechargeRecord",query:{coinId:r.coinId,coinName:r.coinName}}):"transferEdit"===a?this.$router.push({path:"/assetManage/transferRecord",query:{uid:r.uid}}):"autoEdit"===a?this.$router.push({path:"/financial/recharge",query:{uid:r.uid}}):"transferIn"===a&&(n=t.curData,this.$router.push({path:"/financial/extract",query:{toAddress:n,coinId:r.coinId,coinName:r.coinName}}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getTransferUserList:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={userType:this.earnUserType},e.next=3,s["a"].getUserTransferUserList(a);case 3:r=e.sent,r.data&&r.data.data&&(n=r.data.data,this.accountList=n.map((function(e){return{label:e.realName,value:e.userId,typeId:e.userType}})));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getCoinNum:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var a,r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.curCoinName=this.coinList.filter((function(e){return e.value==n.form.coinId}))[0].label,a={userId:this.list[0].userId,coinId:this.form.coinId},e.next=4,s["a"].getAccountGetBalance(a);case 4:r=e.sent,r&&(this.form.coinNum=r.data.data.amount);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addLine:function(e){var t=this;0!=this.list.length?("transfer"==e?(this.isTransfer=!0,this.title="添加划转"):(this.isTransfer=!1,this.title="添加手动充值"),this.dialogVisible=!0,this.$nextTick((function(){t.form={coinNum:"",coinId:"",amount:"",toUserId:"",remark:""},t.$refs["form"].resetFields()}))):this.$message({message:"没有账户禁止操作",type:"error"})},confirmOp:_.debounce((function(){var e=this;this.btnLoading||this.$refs["form"].validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(a){var r,n,l,i,o,p,u,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=17;break}if(e.btnLoading=!0,r=e.form,n=r.coinId,l=r.amount,i=r.toUserId,o=r.remark,p={coinId:n,amount:l,remark:o,fromUserId:e.list[0].userId,fromUserType:e.earnUserType},e.isTransfer&&Object.assign(p,{toUserId:i,toUserType:e.accountList.filter((function(e){return e.value==i}))[0].typeId}),!e.isTransfer){t.next=11;break}return t.next=8,s["a"].setIncomeUserTransfer(p);case 8:t.t0=t.sent,t.next=14;break;case 11:return t.next=13,s["a"].getRechargeIncomeIn(p);case 13:t.t0=t.sent;case 14:u=t.t0,u&&(e.dialogVisible=!1,c=e.isTransfer?"划转成功":"手动充值成功",e.$message({message:c,type:"success"}),e.getList()),e.btnLoading=!1;case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),500),checkVal:function(e){this.form[e]<0&&(this.form[e]=0)},getList:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,s["a"].getAccountIncomeDetail(t);case 8:a=e.sent,a.data&&a.data.data&&(this.list=a.data.data),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){e.userType||(e.userType=this.earnUserType)},initFunc:function(){var e=this,t=this.$util.getAuthority("RevenueAccount",p["m"],p["n"]);this.configs=t.val,this.btnHeaderArr=t.btnArr||[],this.$store.dispatch("common/getCoinList").then((function(){e.coinList=e.$store.state.common.coinlist})),this.getTransferUserList();var a=this.$route.query.userId;a?(this.search_params_obj={userId:a},this.getList()):this.getList()}},activated:function(){this.isInTags()||(this.list=[],this.configs=[],this.searchCofig=[],this.search_params_obj={},this.current_page=1,this.pageSize=10,this.total=0,this.pages=0,this.initFunc())}}),d=c,b=(a("59aa"),a("0c7c")),m=Object(b["a"])(d,r,n,!1,null,null,null);t["default"]=m.exports},"59aa":function(e,t,a){"use strict";var r=a("d532"),n=a.n(r);n.a},7514:function(e,t,a){"use strict";var r=a("5ca1"),n=a("0a49")(5),l="find",i=!0;l in[]&&Array(1)[l]((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(l)},"835b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"u",(function(){return i})),a.d(t,"v",(function(){return o})),a.d(t,"w",(function(){return p})),a.d(t,"g",(function(){return s})),a.d(t,"h",(function(){return u})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return b})),a.d(t,"i",(function(){return m})),a.d(t,"j",(function(){return f})),a.d(t,"q",(function(){return h})),a.d(t,"r",(function(){return g})),a.d(t,"s",(function(){return v})),a.d(t,"t",(function(){return y})),a.d(t,"o",(function(){return U})),a.d(t,"p",(function(){return T})),a.d(t,"x",(function(){return I})),a.d(t,"y",(function(){return A})),a.d(t,"m",(function(){return w})),a.d(t,"n",(function(){return N})),a.d(t,"k",(function(){return x})),a.d(t,"l",(function(){return E}));a("4360");var r=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",width:100,filters:[{text:"手续费账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"星球充值账号",val:105},{text:"合约账号",val:106},{text:"合约体验金账号",val:107}]},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:100,btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],n=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",width:100,filters:[{text:"手续费账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"星球充值账号",val:105},{text:"合约账号",val:106},{text:"合约体验金账号",val:107}]},{label:"更新时间",prop:"updateTime"}],l=[{type:"number",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"用户类型",prop:"userType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"星球充值账号",value:105},{label:"合约账号",value:106},{label:"合约体验金账号",value:107}]}],i=[{label:"订单号",prop:"id"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"划出账号",prop:"fromUid"},{label:"划出账号类型",prop:"fromUserTypeName"},{label:"接收账号",prop:"toUid"},{label:"接收账号类型",prop:"toUserTypeName"},{label:"操作人",prop:"operateUsername"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],o=[{label:"订单号",prop:"id"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"划出账号",prop:"fromUid"},{label:"划出账号类型",prop:"fromUserTypeName"},{label:"接收账号",prop:"toUid"},{label:"接收账号类型",prop:"toUserTypeName"},{label:"操作人",prop:"operateUsername"},{label:"时间",prop:"createTime"}],p=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"onlyNumber",label:"订单号",prop:"id",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"划出账号类型",prop:"fromUserType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"子支出账号",value:104}]},{type:"select",label:"接收账号类型",prop:"toUserType",value:"",list:[{label:"手续费账号",value:101},{label:"成本账号",value:102},{label:"支出账号",value:103},{label:"子支出账号",value:104}]}],s=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"累计收益",prop:"totalProfit"},{label:"总销账",prop:"totalWriteOff"},{label:"操作",prop:"action",type:"action",width:310,btnGroup:[{label:"收益记录",fn:"earnEdit",type:"primary",alias:"earnEdit"},{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"},{label:"销账记录",fn:"writeoffEdit",type:"primary",alias:"writeoffEdit"}]}],u=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"累计收益",prop:"totalProfit"},{label:"总销账",prop:"totalWriteOff"}],c=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总充币",prop:"totalRecharge"},{label:"总调出",prop:"totalSpecialExpend"},{label:"总调入",prop:"totalSpecialIncome"},{label:"充币地址",prop:"coinAddress"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"}]}],d=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总充币",prop:"totalRecharge"},{label:"总调出",prop:"totalSpecialExpend"},{label:"总调入",prop:"totalSpecialIncome"},{label:"充币地址",prop:"coinAddress"}],b=[],m=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"}]}],f=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"}],h=[{label:"账号名称",prop:"realName"},{label:"UID",prop:"uid"},{label:"操作",prop:"action",type:"action",width:190,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],g=[{label:"账号名称",prop:"realName"}],v=[{label:"账号名称",prop:"realName",value:"",placeholder:"请输入"}],y=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"总转出",prop:"totalOut"},{label:"总划入",prop:"totalIn"},{label:"总使用",prop:"totalUse"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"使用流水",fn:"detail",type:"primary",alias:"detail"}]}],I=[{label:"UID",prop:"uid"},{label:"订单号",prop:"relateRecdId"},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],A=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}],U=[{label:"时间",prop:"createTime"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"订单号",prop:"relateRecdId"}],T=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeholder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"onlyNumber",label:"订单号",prop:"relateRecdId",value:"",placeholder:"请输入"}],w=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"累计自动充值",prop:"totalRecharge"},{label:"累计手动充值",prop:"totalRechargeIncome"},{label:"总转出",prop:"totalOut"},{label:"充币地址",prop:"coinAddress",type:"labelArr",typeDetail:"dotStrList",fn:"transferIn",width:"440px"},{label:"操作",prop:"action",type:"action",width:380,btnGroup:[{label:"手动充值记录",fn:"manualEdit",type:"primary",alias:"manualEdit"},{label:"划转记录",fn:"transferEdit",type:"primary",alias:"transferEdit"},{label:"自动充值记录",fn:"autoEdit",type:"primary",alias:"autoEdit"}]}],N=[{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"当前可用",prop:"amount"},{label:"累计自动充值",prop:"totalRecharge"},{label:"累计手动充值",prop:"totalRechargeIncome"},{label:"总转出",prop:"totalOut"},{label:"充币地址",prop:"coinAddress"}],x=[{label:"订单号",prop:"relateRecdId"},{label:"币种",prop:"coinName"},{label:"数量（金额）",prop:"amount"},{label:"时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],E=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinId",value:"",list:[]}]},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},d532:function(e,t,a){},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,n=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var l={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},i=n.replace(/{([ymdhisa])+}/g,(function(e,t){var a=l[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function l(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=l(e);return t>0?n(Number(e)*Math.pow(10,t)):Number(e)}function o(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),s=2;s<a;s++)n[s-2]=arguments[s];if(n.length>0)return p.apply(void 0,[p(e,t),n[0]].concat(Object(r["a"])(n.slice(1))));var u=i(e),c=i(t),d=l(e)+l(t),b=u*c;return o(b),b/Math.pow(10,d)}function s(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];if(n.length>0)return s.apply(void 0,[s(e,t),n[0]].concat(Object(r["a"])(n.slice(1))));var o=Math.pow(10,Math.max(l(e),l(t)));return(p(e,o)+p(t,o))/o}function u(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];if(n.length>0)return u.apply(void 0,[u(e,t),n[0]].concat(Object(r["a"])(n.slice(1))));var o=Math.pow(10,Math.max(l(e),l(t)));return(p(e,o)-p(t,o))/o}function c(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];if(s.length>0)return c.apply(void 0,[c(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var d=i(e),b=i(t);return o(d),o(b),p(d/b,n(Math.pow(10,l(t)-l(e))))}function d(e,t){var a=Math.pow(10,t);return c(Math.round(p(e,a)),a)}var b=!0;function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:n,plus:s,minus:u,times:p,divide:c,round:d,digitLength:l,float2Fixed:i,enableBoundaryChecking:m}}}]);