(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef97fc22"],{"15fd":function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}function o(e,t){if(null==e)return{};var r,o,i=a(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,"a",(function(){return o}))},"2ba3":function(e,t,r){"use strict";var a=r("59f3"),o=r.n(a);o.a},"59f3":function(e,t,r){},7514:function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(5),i="find",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),a(a.P+a.F*s,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"825c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lockManage-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig,excelLoading:e.excelLoading,exportExcel:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel}})],1),e._v(" "),e.isCURDAuth?r("div",{staticClass:"sprecon-button"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addOrder("")}}},[e._v("创建锁仓订单")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addOrder("group")}}},[e._v("批量创建锁仓订单")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.$router.push("/financial/lockConfig")}}},[e._v("锁仓配置")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.updateDialog,visible:e.addOrderDialog,width:"600px"},on:{"update:visible":function(t){e.addOrderDialog=t}}},[r("el-form",{ref:"orderForm",attrs:{model:e.orderForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"账户类型","label-width":e.formLabelWidth,prop:"accountType"}},[r("el-select",{attrs:{size:"small",disabled:!0},model:{value:e.orderForm.accountType,callback:function(t){e.$set(e.orderForm,"accountType",t)},expression:"orderForm.accountType"}},e._l(e.accountList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"锁仓类型","label-width":e.formLabelWidth,prop:"orderType"}},[r("el-select",{attrs:{size:"small",disabled:!!e.orderForm.id},model:{value:e.orderForm.orderType,callback:function(t){e.$set(e.orderForm,"orderType",t)},expression:"orderForm.orderType"}},e._l(e.lockList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{size:"small",disabled:!!e.orderForm.id},model:{value:e.orderForm.coinId,callback:function(t){e.$set(e.orderForm,"coinId",t)},expression:"orderForm.coinId"}},e._l(e.nowCoinArr,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),e.isBatchImport?r("el-form-item",{attrs:{label:"UID:",prop:"uid","label-width":"110px"}},[r("el-input",{attrs:{disabled:!!e.orderForm.id,type:"textarea",rows:"5",placeholder:"用英文逗号分隔",size:"small"},on:{input:e.changeGroup},model:{value:e.orderForm.uid,callback:function(t){e.$set(e.orderForm,"uid",t)},expression:"orderForm.uid"}})],1):r("el-form-item",{attrs:{label:"UID:",prop:"uid","label-width":e.formLabelWidth}},[r("el-input",{attrs:{clearable:"",disabled:!!e.orderForm.id},model:{value:e.orderForm.uid,callback:function(t){e.$set(e.orderForm,"uid",t)},expression:"orderForm.uid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"锁仓数量","label-width":e.formLabelWidth,prop:"lockAmount"}},[r("el-input",{attrs:{clearable:""},on:{input:function(t){return e.checkVal("lockAmount")}},model:{value:e.orderForm.lockAmount,callback:function(t){e.$set(e.orderForm,"lockAmount",t)},expression:"orderForm.lockAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"固定释放比例:",prop:"percent","label-width":e.formLabelWidth}},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-input",{attrs:{size:"small"},on:{input:function(t){return e.checkVal("percent")}},model:{value:e.orderForm.percent,callback:function(t){e.$set(e.orderForm,"percent",t)},expression:"orderForm.percent"}},[r("div",{attrs:{slot:"prepend"},slot:"prepend"},[r("el-select",{staticStyle:{width:"165px"},attrs:{placeholder:"请选择锁仓时间类型"},model:{value:e.orderForm.lockType,callback:function(t){e.$set(e.orderForm,"lockType",t)},expression:"orderForm.lockType"}},[r("el-option",{attrs:{label:"日锁仓",value:1}}),e._v(" "),r("el-option",{attrs:{label:"月锁仓",value:2}})],1)],1),e._v(" "),r("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"锁仓原因:","label-width":e.formLabelWidth,prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:e.orderForm.remark,callback:function(t){e.$set(e.orderForm,"remark",t)},expression:"orderForm.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.addOrderDialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.btnLoading},on:{click:e.confirmAddOrder}},[e._v("确定锁仓")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataFormRules}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"订单号","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.id))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"UID","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.uid))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"账户类型","label-width":e.formLabelWidth}},[e._v(e._s(e._f("aStatus")(e.curRow.accountType)))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"锁仓类型","label-width":e.formLabelWidth}},[e._v(e._s(e._f("oStatus")(e.curRow.orderType)))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.coinName))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"锁仓数量","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.lockAmount))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"锁仓时间类型","label-width":e.formLabelWidth}},[e._v(e._s(e._f("locktypeDiy")(e.curRow.lockType))+" ")])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"固定释放比例","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.percent)+" %")])],1)],1),e._v(" "),e.hasChecked?r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"锁仓时间","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.createTime))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"操作人","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.operatorUser))])],1)],1):e._e(),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"已解冻数量","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.releaseAmount))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"未解冻数量","label-width":e.formLabelWidth}},[e._v(e._s((e.curRow.lockAmount-e.curRow.releaseAmount+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3")))])],1)],1),e._v(" "),e.isCheckStatus?e._e():r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"冻结原因","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.remark))])],1)],1),e._v(" "),e.isCheckStatus?r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"解冻数量","label-width":e.formLabelWidth,prop:"amount"}},[r("el-input",{attrs:{clearable:""},model:{value:e.dataForm.amount,callback:function(t){e.$set(e.dataForm,"amount",t)},expression:"dataForm.amount"}})],1),e._v(" "),r("el-form-item",{staticStyle:{position:"relative"},attrs:{label:"解冻原因:","label-width":e.formLabelWidth,prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:e.dataForm.remark,callback:function(t){e.$set(e.dataForm,"remark",t)},expression:"dataForm.remark"}})],1)],1)],1):e._e()],1),e._v(" "),e.isCheckStatus?r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.conLoading},on:{click:function(t){return e.confirmReview(!0)}}},[e._v("确定解冻")])],1):r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)},o=[],i=(r("a481"),r("5530")),s=r("15fd"),n=(r("ac6a"),r("96cf"),r("1da1")),l=r("ade3"),c=r("c249"),d=r("2fee"),u=r("f21b"),m=r("f9e1"),p=r("4ec3"),h=r("ca00"),f=r("ed08"),b=r("ff53"),g=["id","accountType","orderType","coinId","lockType","percent","lockAmount"],v={name:"LockManage",components:{Btable:d["a"],Bsearch:c["a"],iconPage:u["a"]},data:function(){var e;return e={isCURDAuth:!0,groupLoading:!1,btnLoading:!1,conLoading:!1,listLoading:!1,excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",coinList:[],formLabelWidth:"150px",isBatchImport:!1,isCheckStatus:!1,dialogVisible:!1,groupOrderDialog:!1,curRow:{},dataForm:{},lockList:[{label:"星球算力冻结",value:1},{label:"原始合伙人冻结",value:2},{label:"私募冻结",value:3}],accountList:[{label:"币币账户",value:1}],nowCoinArr:[],addOrderDialog:!1,orderForm:{id:"",accountType:1,orderType:1,coinId:"",uid:"",lockAmount:"",lockType:"",percent:"",remark:""},rules:{accountType:[{required:!0,message:"必填",trigger:"blur"}],orderType:[{required:!0,message:"必填",trigger:"blur"}],coinId:[{required:!0,message:"必填",trigger:"blur"}],uid:[{required:!0,message:"必填",trigger:"blur"}],lockAmount:[{required:!0,message:"必填",trigger:"blur"}],percent:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"}]}},Object(l["a"])(e,"dataForm",{id:"",amount:"",remark:""}),Object(l["a"])(e,"dataFormRules",{amount:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"}]}),Object(l["a"])(e,"dialogTitle","查看详情"),Object(l["a"])(e,"updateDialog","创建锁仓订单"),e},computed:{hasChecked:function(){return!this.isCheckStatus&&0!=this.curRow.status}},filters:{aStatus:function(e){var t="";switch(e){case 1:t="币币账户";break}return t},oStatus:function(e){var t="";switch(e){case 1:t="星球算力冻结";break;case 2:t="原始合伙人冻结";break;case 3:t="私募冻结";break}return t},typeTime:function(e){return e?Object(f["a"])(e):""},locktypeDiy:function(e){var t="";switch(e){case 1:t="日锁仓";break;case 2:t="月锁仓"}return t}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,this.curRow=a,"edit"===r?(this.updateDialog="编辑锁仓订单",this.addOrderDialog=!0,this.$nextTick((function(){o.$refs["orderForm"].resetFields(),o.isBatchImport=!!~(o.curRowuid+"").indexOf(","),o.orderForm={id:o.curRow.id,accountType:1,orderType:1,coinId:o.nowCoinArr[0].value||-1,uid:o.curRow.uid,lockAmount:o.curRow.lockAmount,lockType:o.curRow.lockType,percent:o.curRow.percent,remark:o.curRow.remark}}))):"freeze"===r?(this.dialogTitle="解冻操作",this.isCheckStatus=!0,this.dialogVisible=!0,this.$nextTick((function(){o.$refs["dataForm"].resetFields(),o.dataForm={amount:"",remark:""}}))):"detail"===r&&(this.dialogTitle="查看详情",this.isCheckStatus=!1,this.dialogVisible=!0);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),confirmReview:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["dataForm"].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,o,i,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return a=r.dataForm,o=a.amount,i=a.remark,s={id:r.curRow.id,amount:parseFloat(o),remark:i},r.conLoading=!0,e.next=6,p["a"].unlockOrderByHand(s);case 6:n=e.sent,n&&(r.$message({type:"success",message:n.data.message}),r.getList(),r.dialogVisible=!1),r.conLoading=!1;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},exportExcel:function(e){this.search_params_obj=e.query;var t=e.num;h["a"].exportData.apply(this,[t])},addOrder:function(e){var t=this;this.updateDialog="创建锁仓订单",this.isBatchImport=!!e,this.addOrderDialog=!0,this.$nextTick((function(){t.orderForm={id:"",accountType:1,orderType:1,coinId:t.nowCoinArr[0].value||-1,uid:"",lockAmount:"",lockType:"",percent:"",remark:""},t.$refs["orderForm"].resetFields()}))},confirmAddOrder:function(){var e=this;this.orderForm.lockType?this.$refs["orderForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,l,c,d,u,m,h,f,v,_;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=18;break}if(a=e.orderForm,o=a.id,n=a.accountType,l=a.orderType,c=a.coinId,d=a.lockType,u=a.percent,m=a.lockAmount,h=Object(s["a"])(a,g),f=e,v=Object(i["a"])({accountType:+n,orderType:+l,lockAmount:+m,coinName:f.coinList.filter((function(e){return e.value==c}))[0].label||"",lockType:+d,percent:b["a"].divide(u,100)},h),e.btnLoading=!0,""===o?Object.assign(v):Object.assign(v,{id:o}),""!==o){t.next=12;break}return t.next=9,p["a"].addLockOrder(v);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,p["a"].editLockOrder(v);case 14:t.t0=t.sent;case 15:_=t.t0,_&&(e.$message({message:_.data.message,type:"success"}),e.addOrderDialog=!1,e.getList()),e.btnLoading=!1;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$message({type:"error",message:"锁仓时间类型必须勾选！"})},changeGroup:function(e){e=e&&e.replace(/[^\,a-zA-Z\d]/gi,""),this.orderForm.uid=e},checkVal:function(e){"percent"===e&&(this.orderForm[e]=this.orderForm[e]>100?100:this.orderForm[e],this.orderForm[e]=(this.orderForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")),"lockAmount"===e&&(this.orderForm[e]=(this.orderForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3")),this.orderForm[e]<0&&(this.orderForm[e]=0)},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,o,i,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,p["a"].getLockOrderList(t);case 8:r=e.sent,r&&(a=r.data.data,o=a.records,i=a.total,s=a.current,n=a.pages,this.total=i,this.pages=n,this.current_page=s,o.forEach((function(e){e.percent=e.percent&&(b["a"].times(e.percent,100)+"").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),e.amount=e.amount&&(e.amount+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3"),e.remainingAmount=e.remainingAmount&&(e.remainingAmount+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3"),e.releaseAmount=e.releaseAmount&&(e.releaseAmount+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3"),e.lockAmount=e.lockAmount&&(e.lockAmount+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3")})),this.list=o,this.dataList=o),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),queryData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=5,p["a"].getLockOrderList(t);case 5:return r=e.sent,this.excelLoading=!1,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),requiredParams:function(e){this.$util.isEmptyObject(this.search_params_obj)&&(e.endTime=parseInt(new Date(this.toDay).getTime()/1e3),e.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e}},mounted:function(){var e=this,t=this.$util.getAuthority("LockManage",m["u"],m["v"]);this.configs=t.val,this.isCURDAuth=t.isAdd,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(m["w"]),this.$store.dispatch("common/getCoinList").then((function(){e.searchCofig[3]["list"]=e.$store.state.common.coinlist,e.coinList=e.$store.state.common.coinlist;var t=[];t.push(e.coinList.filter((function(e){return"USDT"==e.label}))[0]),t.push(e.coinList.filter((function(e){return"ALPT"==e.label}))[0]),e.nowCoinArr=t})),this.getList()}},_=v,k=(r("2ba3"),r("2877")),w=Object(k["a"])(_,a,o,!1,null,null,null);t["default"]=w.exports},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})}}]);