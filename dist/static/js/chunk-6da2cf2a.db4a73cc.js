(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6da2cf2a"],{"2e08":function(t,e,i){var a=i("9def"),r=i("9744"),n=i("be13");t.exports=function(t,e,i,o){var s=String(n(t)),c=s.length,l=void 0===i?" ":String(i),h=a(e);if(h<=c||""==l)return s;var u=h-c,m=r.call(l,Math.ceil(u/l.length));return m.length>u&&(m=m.slice(0,u)),o?m+s:s+m}},"65ba":function(t,e,i){},7514:function(t,e,i){"use strict";var a=i("5ca1"),r=i("0a49")(5),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(n)},"87f3":function(t,e,i){var a=i("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,i){var a=i("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(t,e,i){"use strict";var a=i("4588"),r=i("be13");t.exports=function(t){var e=String(r(this)),i="",n=a(t);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(i+=e);return i}},d9bd:function(t,e,i){"use strict";var a=i("65ba"),r=i.n(a);r.a},e8ab:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hotWalletExtract-container"},[i("div",{staticClass:"container-top"},[i("Bsearch",{attrs:{configs:t.searchCofig},on:{"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),t.isCURDAuth?i("div",{staticClass:"container-btn"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.addChain}},[t._v("添加")])],1):t._e(),t._v(" "),i("div",[i("Btable",{attrs:{"list-loading":t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),i("el-dialog",{attrs:{title:t.formName,width:"500px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"chainForm",attrs:{model:t.chainForm,rules:t.rules,"validate-on-rule-change":!1}},[i("el-form-item",{attrs:{label:"链名称","label-width":t.formLabelWidth,prop:"chain"}},[i("el-select",{attrs:{disabled:t.isEdit,placeholder:"请选择"},on:{change:t.chainChange},model:{value:t.chainForm.chain,callback:function(e){t.$set(t.chainForm,"chain",e)},expression:"chainForm.chain"}},t._l(t.chainList,(function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.label}})})),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth,prop:"coin"}},[i("el-select",{attrs:{disabled:t.isEdit,placeholder:"请选择"},model:{value:t.chainForm.coin,callback:function(e){t.$set(t.chainForm,"coin",e)},expression:"chainForm.coin"}},t._l(t.coinList,(function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.label}})})),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"单笔限额","label-width":t.formLabelWidth,prop:"maxAutoWithdraw"}},[i("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",type:"number"},on:{input:function(e){return t.checkVal("maxAutoWithdraw")}},model:{value:t.chainForm.maxAutoWithdraw,callback:function(e){t.$set(t.chainForm,"maxAutoWithdraw",e)},expression:"chainForm.maxAutoWithdraw"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"单日限额","label-width":t.formLabelWidth,prop:"maxDailyAutoWithdraw"}},[i("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",type:"number"},on:{input:function(e){return t.checkVal("maxDailyAutoWithdraw")}},model:{value:t.chainForm.maxDailyAutoWithdraw,callback:function(e){t.$set(t.chainForm,"maxDailyAutoWithdraw",e)},expression:"chainForm.maxDailyAutoWithdraw"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"热钱包启用开关","label-width":t.formLabelWidth}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:t.changeStauus},model:{value:t.chainForm.status,callback:function(e){t.$set(t.chainForm,"status",e)},expression:"chainForm.status"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"白天热钱包启用时间","label-width":t.formLabelWidth,prop:"dayTime"}},[i("el-time-picker",{attrs:{"is-range":"","value-format":"HH:mm",format:"HH:mm",disabled:!t.chainForm.status,"range-separator":"至","start-placeholder":"选择开始时间","end-placeholder":"选择结束时间",placeholder:"选择时间范围"},model:{value:t.chainForm.dayTime,callback:function(e){t.$set(t.chainForm,"dayTime",e)},expression:"chainForm.dayTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"夜间热钱包启用时间","label-width":t.formLabelWidth,prop:"nightTime"}},[i("el-time-picker",{attrs:{"is-range":"","value-format":"HH:mm",format:"HH:mm",disabled:!t.chainForm.status,"range-separator":"至","start-placeholder":"选择开始时间","end-placeholder":"选择结束时间",placeholder:"选择时间范围"},model:{value:t.chainForm.nightTime,callback:function(e){t.$set(t.chainForm,"nightTime",e)},expression:"chainForm.nightTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"每个用户夜间可使用提币次数","label-width":t.formLabelWidth,prop:"userNightWithdrawTimes"}},[i("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",type:"number"},on:{input:function(e){return t.checkVal("userNightWithdrawTimes")}},model:{value:t.chainForm.userNightWithdrawTimes,callback:function(e){t.$set(t.chainForm,"userNightWithdrawTimes",e)},expression:"chainForm.userNightWithdrawTimes"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"每个用户夜间单次可提币限额","label-width":t.formLabelWidth,prop:"userNightWithdrawAmount"}},[i("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",type:"number"},on:{input:function(e){return t.checkVal("userNightWithdrawAmount")}},model:{value:t.chainForm.userNightWithdrawAmount,callback:function(e){t.$set(t.chainForm,"userNightWithdrawAmount",e)},expression:"chainForm.userNightWithdrawAmount"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"每个用户夜间可使用提币总额","label-width":t.formLabelWidth,prop:"userNightWithdrawAmountTotal"}},[i("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",type:"number"},on:{input:function(e){return t.checkVal("userNightWithdrawAmountTotal")}},model:{value:t.chainForm.userNightWithdrawAmountTotal,callback:function(e){t.$set(t.chainForm,"userNightWithdrawAmountTotal",e)},expression:"chainForm.userNightWithdrawAmountTotal"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"谷歌验证码","label-width":t.formLabelWidth,prop:"googleCode"}},[i("el-input",{staticClass:"my-mumber-input",attrs:{placeholder:"请输入",autocomplete:"off",type:"text"},on:{input:function(e){return t.checkVal3("chainForm","googleCode")}},model:{value:t.chainForm.googleCode,callback:function(e){t.$set(t.chainForm,"googleCode",e)},expression:"chainForm.googleCode"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmOp}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogSetVisible,width:"650px",title:"查看余额"},on:{"update:visible":function(e){t.dialogSetVisible=e}}},[i("el-row",{staticStyle:{"margin-bottom":"22px"}},[i("el-col",{attrs:{span:6}},[t._v("\n        链类型名称: "),i("span",{staticStyle:{color:"#4390ff"}},[t._v(t._s(t.protocol))])]),t._v(" "),i("el-col",{attrs:{span:6}},[t._v("\n        币种名称: "),i("span",{staticStyle:{color:"#4390ff"}},[t._v(t._s(t.coinKey))])])],1),t._v(" "),i("Btable",{attrs:{"list-loading":t.setListLoading,data:t.setlist,configs:t.setConfigs}})],1)],1)},r=[],n=(i("8e6e"),i("28a5"),i("bd86")),o=(i("a481"),i("96cf"),i("3b8d")),s=(i("6762"),i("ac6a"),i("456d"),i("c249")),c=i("2fee"),l=i("f9e1"),h=i("ed08"),u=i("4ec3");function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"CoinWhiteList",components:{Btable:c["a"],Bsearch:s["a"]},filters:{typeTime:function(t){return t?Object(h["a"])(t):""}},data:function(){return{isCURDAuth:!0,btnLoading:!1,btnLoading2:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,dialogFormVisible:!1,chainForm:{id:"",coin:"",chain:"",maxAutoWithdraw:"",maxDailyAutoWithdraw:"",status:!1,googleCode:"",dayTime:"",nightTime:"",userNightWithdrawTimes:"",userNightWithdrawAmount:"",userNightWithdrawAmountTotal:""},formName:"",formLabelWidth:"125px",labelWidth:"125px",dialogSetVisible:!1,setListLoading:!1,setConfigs:[],setlist:[],coinKey:"",protocol:"",chainList:[],chainCoinObj:{},isEdit:!1}},computed:{coinList:function(){if(this.chainForm.chain&&this.chainCoinObj[this.chainForm.chain]){var t=this.chainCoinObj[this.chainForm.chain].map((function(t){return{label:t.coinName,value:t.coinId}}));return t}return[]},rules:function(){var t=["dayTime","nightTime","userNightWithdrawTimes","userNightWithdrawAmount","userNightWithdrawAmountTotal"],e=this.chainForm.status,i=Object.keys(this.chainForm),a={};return i.forEach((function(i){a[i]=[{required:!t.includes(i)||e,message:"必填",trigger:"blur"}]})),a}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.$util.getAuthority("HotWalletExtract",l["r"],l["s"]),this.configs=e.val,this.isCURDAuth=e.isAdd,this.setConfigs=l["t"],this.getList();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{changeStauus:function(){this.$refs.chainForm.clearValidate()},chainChange:function(t){this.chainForm.coin=""},checkVal3:function(t,e){this[t][e]=(this[t][e]+"").replace(/[^\d]/g,"")},checkVal:function(t){var e=["maxAutoWithdraw","userNightWithdrawAmount","userNightWithdrawAmountTotal","maxDailyAutoWithdraw"];e.includes(t)?this.chainForm[t]=(this.chainForm[t]+"").replace(/^(\-)*(\d+)\.(\d{0,8}).*$/,"$2.$3"):"userNightWithdrawTimes"===t&&(this.chainForm[t]=(parseInt(this.chainForm[t])+"").replace(/^(\-)*(\d{0,4}).*$/,"$2")),this.chainForm[t]<0&&(this.chainForm[t]=0)},doHandle:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var i,a,r,n,o,s,c=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e.fn,a=e.row,"edit"===i&&(this.isEdit=!0,this.formName="编辑",this.dialogFormVisible=!0,this.getChainCoin(),this.$nextTick((function(){c.$refs["chainForm"].resetFields();var t=Object.keys(c.chainForm);t.forEach((function(t){c.chainForm[t]=a[t]})),c.chainForm.status=!!a["status"],c.chainForm.googleCode="",c.chainForm.dayTime=a["dayEnableTimeStart"]?[a["dayEnableTimeStart"],a["dayEnableTimeEnd"]]:"",c.chainForm.nightTime=a["nightEnableTimeStart"]?[a["nightEnableTimeStart"],a["nightEnableTimeEnd"]]:""}))),"checkBalance"===i&&(r=a.chain,n=a.coin,this.dialogSetVisible=!0,o=u["a"].apiHotWalletExtractCheckChain({protocol:a.chain}),this.setlist=[],this.protocol=r,this.coinKey=n,s=u["a"].apiHotWalletExtractCheckDetail,o.then((function(t){var e=t.data.data;e instanceof Array&&e.forEach((function(t,e){c.setlist.push({address:t}),s({protocol:r,coinKey:n,address:t}).then((function(t){var i=t.data.data;c.$set(c.setlist,e,d({},c.setlist[e],{},i))}))}))})));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addChain:function(){var t=this;this.isEdit=!1,this.formName="添加",this.dialogFormVisible=!0,this.getChainCoin(),this.$nextTick((function(){t.$refs["chainForm"].resetFields();var e=Object.keys(t.chainForm);e.forEach((function(e){t.chainForm[e]=""})),t.chainForm["status"]=!1}))},confirmOp:function(){var t=this;this.$refs["chainForm"].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(i){var a,r,n,o,s,c,l,h,m,f,p,b,g,v,w,F;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=30;break}if(a=t.chainForm,r=a.id,n=a.status,o=a.dayTime,s=a.nightTime,!n){e.next=10;break}if(c=o[1].split(":")[0],l=o[1].split(":")[1],h=s[0].split(":")[0],m=s[0].split(":")[1],!(c>h||c===h&&l>m)){e.next=10;break}return t.$message.error("白天热钱包启用时间和夜间启用时间不得重复交叉"),e.abrupt("return");case 10:if(f=o?o[0]:"",p=o?o[1]:"",b=s?s[0]:"",g=s?s[1]:"",v=d({},t.chainForm,{status:n?1:0,dayEnableTimeStart:f,dayEnableTimeEnd:p,nightEnableTimeStart:b,nightEnableTimeEnd:g}),delete v["dayTime"],delete v["nightTime"],t.btnLoading=!0,r){e.next=24;break}return e.next=21,u["a"].apiAddHotWalletExtract(d({},v));case 21:e.t0=e.sent,e.next=27;break;case 24:return e.next=26,u["a"].apiEditHotWalletExtract(d({},v,{id:r}));case 26:e.t0=e.sent;case 27:w=e.t0,w&&(F=r?"编辑成功":"新增成功",t.$message({message:F,type:"success"}),t.dialogFormVisible=!1,t.getList()),t.btnLoading=!1;case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.getList()},goPage:function(t){this.current_page=t,this.getList()},getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={},Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=7,u["a"].apiGetHotWalletExtractList(e);case 7:i=t.sent,i?(this.list=i.data.data.map((function(t){return d({},t,{isStatus:Boolean(t.status)})})),this.listLoading=!1):this.listLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getChainCoin:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].apiGetChainCoinList({});case 2:if(e=t.sent,e)for(i in this.chainCoinObj=e.data.data,this.chainCoinObj)this.chainList.push({label:i,value:i});case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},p=f,b=(i("d9bd"),i("0c7c")),g=Object(b["a"])(p,a,r,!1,null,"22cc0b97",null);e["default"]=g.exports},f576:function(t,e,i){"use strict";var a=i("5ca1"),r=i("2e08"),n=i("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);a(a.P+a.F*o,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})}}]);