(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63aaeedc"],{"2e08":function(e,t,a){var l=a("9def"),r=a("9744"),p=a("be13");e.exports=function(e,t,a,i){var n=String(p(e)),o=n.length,s=void 0===a?" ":String(a),u=l(t);if(u<=o||""==s)return n;var c=u-o,d=r.call(s,Math.ceil(c/s.length));return d.length>c&&(d=d.slice(0,c)),i?d+n:n+d}},"2ea2":function(e,t,a){"use strict";a.d(t,"i",(function(){return r})),a.d(t,"j",(function(){return p})),a.d(t,"k",(function(){return i})),a.d(t,"l",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return b})),a.d(t,"g",(function(){return f})),a.d(t,"h",(function(){return h})),a.d(t,"m",(function(){return v})),a.d(t,"n",(function(){return m}));var l=a("c9d9"),r=[{label:"appId",prop:"appId"},{label:"账号",prop:"phone",width:"150"},{label:"商户名称",prop:"name"},{label:"兑入手续费",prop:"feeRate"},{label:"商户余额",prop:"balance"},{label:"累计兑入(USDT)",prop:"inBalance"},{label:"累计兑出(USDT)",prop:"outBalance"},{label:"注册时间",prop:"createDate",type:"time"},{label:"操作",prop:"action",type:"action",width:"120",btnGroup:[{label:"查看/编辑",fn:"detail",type:"primary",alias:"detail"}]}],p=[{type:"date_rank",label:"时间",prop:"startDate",prop2:"endDate",value:""},{type:"text",label:"appId",prop:"appId",value:"",placeHolder:"请输入"},{type:"text",label:"账号/用户编号",prop:"name",value:"",placeHolder:"请输入"}],i=[{label:"时间",prop:"createTime",type:"time"},{label:"交易类型",prop:"advType",type:"filter",show_type:"text",filters:[{val:"1",text:"在线出售"},{val:"2",text:"在线求购"},{val:"3",text:"抢单兑出"},{val:"4",text:"抢单兑入"},{val:"6",text:"派单兑出"},{val:"5",text:"派单兑入"}]},{label:"appId",prop:"appId",width:"150"},{label:"商户名称",prop:"name",width:"200"},{label:"用户编码",prop:"userId"},{label:"币种",prop:"coinName"},{label:"价格",prop:"apiPrice"},{label:"数量",prop:"apiStock"},{label:"金额",prop:"apiAmount"},{label:"手续费",prop:"fee"},{label:"状态",prop:"matchResult",type:"filter",show_type:"filters",filters:"matchResultMap"},{label:"收银台IP",prop:"apiIp"},{label:"商户订单号",prop:"apiOrderId"}],n=[{type:"date_rank",label:"时间",prop:"startDate",prop2:"endDate",value:""},{type:"text",label:"appId",prop:"appId",value:"",placeHolder:"请输入"},{type:"text",label:"商户名称",prop:"name",value:"",placeHolder:"请输入"},{type:"text",label:"账号",prop:"phoneOrEmail",value:"",placeHolder:"请输入"},{type:"text",label:"订单号",prop:"apiOrderId",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"advType",value:"",list:[{value:"1",label:"在线出售"},{value:"2",label:"在线求购"},{vvalueal:"3",label:"抢单兑出"},{value:"4",label:"抢单兑入"},{value:"6",label:"派单兑出"},{value:"5",label:"派单兑入"}]},{type:"select",label:"状态",prop:"matchResult",value:"",list:[{label:"待审核",value:1},{label:"匹配中",value:1},{label:"匹配成功",value:2},{label:"匹配失败",value:3},{label:"匹配中断",value:4},{label:"IP不匹配",value:5},{label:"审核失败",value:6},{label:"发起中",value:9},{label:"发起中断",value:10},{label:"封锁冻结",value:11}]}],o=[{label:"商户UID",prop:"phone"},{label:"商户名称",prop:"nickName"},{label:"币种",prop:"coin_name"},{label:"数量",prop:"amount"},{label:"手续费",prop:"fee"},{label:"到账数量",prop:"sys_remark"},{label:"状态",prop:"status",type:"filter",show_type:"text",filters:l["c"]},{label:"类型",prop:"type",type:"filter",show_type:"text",filters:l["a"]},{label:"FORM",prop:"from_addr",width:"150"},{label:"TO",prop:"to_addr",width:"200"},{label:"订单号",prop:"id"},{label:"TXID",prop:"tx_id"},{label:"时间",prop:"create_time",type:"time"}],s=[{type:"date_rank",label:"时间",prop:"startDate",prop2:"endDate",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"text",label:"商户名称",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"TXID",prop:"txId",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"userType",value:"",list:[]},{type:"text",label:"地址",prop:"addr",value:"",placeHolder:"请输入"},{type:"text",label:"单号",prop:"orderId",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"type",value:"",list:l["b"]},{type:"select",label:"状态",prop:"status",value:"",list:l["d"]}],u=[{label:"时间",prop:"time",type:"time"},{label:"交易类型",prop:"userType",type:"filter",show_type:"text",filters:[]},{label:"商户UID",prop:"uid"},{label:"商户名称",prop:"uid"},{label:"用户编码",prop:"uid"},{label:"币商UID",prop:"uid"},{label:"币种",prop:"uid"},{label:"价格",prop:"uid"},{label:"数量",prop:"uid"},{label:"金额",prop:"uid"},{label:"手续费",prop:"uid"},{label:"状态",prop:"userType",type:"filter",show_type:"text",filters:[]},{label:"商户单号",prop:"uid",width:"150"},{label:"平台单号",prop:"email",width:"200"}],c=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"text",label:"商户名称",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"用户编码",prop:"email",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"userType",value:"",list:[]},{type:"text",label:"订单号",prop:"phone",value:"",placeHolder:"请输入"},{type:"select",label:"交易类型",prop:"userType",value:"",list:[{label:"普通用户",value:1},{label:"系统用户",value:100},{label:"机器人",value:3}]},{type:"select",label:"状态",prop:"userType",value:"",list:[{label:"普通用户",value:1},{label:"系统用户",value:100},{label:"机器人",value:3}]}],d=[{label:"时间",prop:"createTime",type:"time"},{label:"appId",prop:"appId"},{label:"商户名称",prop:"name"},{label:"用户编码",prop:"uid"},{label:"币种",prop:"coin_name"},{label:"类型",prop:"type_name"},{label:"可用资产变化",prop:"balanceChangeAmount"},{label:"可用资产余额",prop:"balance"},{label:"冻结资产变化",prop:"frozenAmountChange"},{label:"冻结资产余额",prop:"frozenAmount"},{label:"订单号",prop:"relateRecdId"}],b=[{type:"date_rank",label:"时间",prop:"startDate",prop2:"endDate",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"text",label:"商户名称",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"用户编码",prop:"nickName",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"coinName",value:"",list:[]},{type:"text",label:"订单号",prop:"phone",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"userType",value:"",list:[{label:"普通用户",value:1},{label:"系统用户",value:100},{label:"机器人",value:3}]}],f=[{label:"分组名",prop:"groupName"},{label:"商户列表",prop:"merchentNameList",width:300},{label:"币商列表",prop:"userNameList",width:300},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"查看/编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],h=[{type:"date_rank",label:"时间",prop:"startDate",prop2:"endDate",value:""},{type:"text",label:"分组名称",prop:"groupName",value:"",placeHolder:"请输入"},{type:"text",label:"账户",prop:"phone",value:"",placeHolder:"请输入"}],v=[{label:"商户UID",prop:"uid"},{label:"商户名称",prop:"uid"},{label:"ip",prop:"uid"},{label:"添加时间",prop:"uid",type:"time"},{label:"操作",prop:"action",type:"action",width:"140",btnGroup:[{label:"编辑",fn:"edit",type:"primary"},{label:"删除",fn:"del",type:"danger"}]}],m=[{type:"text",label:"商户UID",prop:"startTime",value:""}]},"30bb":function(e,t,a){"use strict";a("5fe3")},"5fe3":function(e,t,a){},7514:function(e,t,a){"use strict";var l=a("5ca1"),r=a("0a49")(5),p="find",i=!0;p in[]&&Array(1)[p]((function(){i=!1})),l(l.P+l.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(p)},"87f3":function(e,t,a){var l=a("5ca1");l(l.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var l=a("5ca1");l(l.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,a){"use strict";var l=a("4588"),r=a("be13");e.exports=function(e){var t=String(r(this)),a="",p=l(e);if(p<0||p==1/0)throw RangeError("Count can't be negative");for(;p>0;(p>>>=1)&&(t+=t))1&p&&(a+=t);return a}},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},cd65:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recharge-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,exportExcel:e.btnArr.includes("excel")},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel}})],1),e._v(" "),e.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addForm}},[e._v("添加")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("div",[a("span",[e._v("共"+e._s(e.pages)+"页")]),e._v("/"),a("span",[e._v(e._s(e.total)+"条数据")])]),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"550px",title:"增加商户白名单"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"formValue",attrs:{model:e.formValue,rules:e.rules,"label-width":"90px"}},[a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"商户UID",prop:"uid"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.formValue.uid,callback:function(t){e.$set(e.formValue,"uid",t)},expression:"formValue.uid"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"商户IP",prop:"ip"}},[a("el-col",{staticStyle:{"margin-right":"20px"},attrs:{span:12}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.formValue.ip,callback:function(t){e.$set(e.formValue,"ip",t)},expression:"formValue.ip"}})],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addLine(e.formValue.ip)}}},[e._v("添加")])],1)],1),e._v(" "),e._l(e.formValue.list,(function(t,l){return a("el-form-item",{key:l,attrs:{label:"","label-width":e.formLabelWidth}},[a("el-col",{staticStyle:{"margin-right":"20px"},attrs:{span:12}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",value:t}})],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){return t.stopPropagation(),e.delLine(l)}}},[e._v("删除")])],1)],1)}))],2),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{"margin-right":"50px"},on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),e.confirmDialog(t)}}},[e._v("确定增加")])],1)],1)],1)},r=[],p=(a("ac6a"),a("96cf"),a("1da1")),i=a("c249"),n=a("2fee"),o=a("2ea2"),s=a("4ec3"),u=a("ca00"),c={components:{Btable:n["a"],Bsearch:i["a"]},data:function(){return{isCURDAuth:!0,listLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,formLabelWidth:"100px",dialogVisible:!1,formValue:{uid:"",ip:"",list:["1","2"]},rules:{},btnArr:[]}},methods:{doHandle:function(e){var t=this,a=e.fn,l=e.row;"viewDetail"===a&&this.$confirm("确认删除吗?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(p["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].ddddd({id:l.id});case 2:a=e.sent,a&&(t.$message({type:"success",message:a.data.message}),t.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),"edit"===a&&(this.dialogVisible=!0,this.$nextTick((function(){t.$refs["formValue"].resetFields();var e=l.id,a=l.coinId,r=l.coinName;t.formValue={id:e,coinId:a,coinName:r}})))},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},exportExcel:function(){u["a"].exportData.apply(this,[0])},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},addForm:function(){var e=this;this.dialogVisible=!0,this.$nextTick((function(){e.formValue={uid:"",ip:"",list:["1","2"]},e.$refs["formValue"].resetFields()}))},addLine:function(e){this.formValue.list.push(e)},delLine:function(e){this.formValue.list.splice(e,1)},confirmDialog:function(){var e=this;this.$refs["formValue"].validate(function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(a){var l,r,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=8;break}return l=e.formValue,l.uid,l.list,r={name:name},Object.assign(r,{id:id,coinId:coinId}),t.next=6,s["a"].bbbbbbbbbb(r);case 6:p=t.sent,p&&(e.$message({message:p.data.message,type:"success"}),e.isCURDAuth=!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getList:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,s["a"].getDepositList(t);case 7:a=e.sent,a&&(l=a.data.data,l.records,l.total,l.current,l.pages);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("Whitelist",o["m"],[]);this.btnArr=e.btnArr||[],this.configs=o["m"],this.searchCofig=o["n"]}},d=c,b=(a("30bb"),a("2877")),f=Object(b["a"])(d,l,r,!1,null,null,null);t["default"]=f.exports},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("28a5"),a("f576"),a("a481"),a("6b54");var l=a("53ca");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,r=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(l["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var p={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},i=r.replace(/{([ymdhisa])+}/g,(function(e,t){var a=p[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},f576:function(e,t,a){"use strict";var l=a("5ca1"),r=a("2e08"),p=a("a25f"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(p);l(l.P+l.F*i,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,a){"use strict";var l=a("2909");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function p(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=p(e);return t>0?r(Number(e)*Math.pow(10,t)):Number(e)}function n(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function o(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];if(r.length>0)return o.apply(void 0,[o(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var u=i(e),c=i(t),d=p(e)+p(t),b=u*c;return n(b),b/Math.pow(10,d)}function s(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];if(r.length>0)return s.apply(void 0,[s(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var n=Math.pow(10,Math.max(p(e),p(t)));return(o(e,n)+o(t,n))/n}function u(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];if(r.length>0)return u.apply(void 0,[u(e,t),r[0]].concat(Object(l["a"])(r.slice(1))));var n=Math.pow(10,Math.max(p(e),p(t)));return(o(e,n)-o(t,n))/n}function c(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];if(s.length>0)return c.apply(void 0,[c(e,t),s[0]].concat(Object(l["a"])(s.slice(1))));var d=i(e),b=i(t);return n(d),n(b),o(d/b,r(Math.pow(10,p(t)-p(e))))}function d(e,t){var a=Math.pow(10,t);return c(Math.round(o(e,a)),a)}var b=!0;function f(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:r,plus:s,minus:u,times:o,divide:c,round:d,digitLength:p,float2Fixed:i,enableBoundaryChecking:f}}}]);