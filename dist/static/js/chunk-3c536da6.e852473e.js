(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c536da6"],{"6b83":function(e,t,r){},7035:function(e,t,r){"use strict";var a=r("6b83"),i=r.n(a);i.a},7514:function(e,t,r){"use strict";var a=r("5ca1"),i=r("0a49")(5),o="find",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),a(a.P+a.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},f200:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sprecon-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig,excelLoading:e.excelLoading,exportExcel:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel}})],1),e._v(" "),r("div",{staticClass:"sprecon-button"},[~e.headBtnArr.indexOf("adjustAccountAdd")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addOrder("add")}}},[e._v("创建调账（增）")]):e._e(),e._v(" "),~e.headBtnArr.indexOf("adjustAccountReduce")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addOrder("")}}},[e._v("创建调账（减）")]):e._e(),e._v(" "),~e.headBtnArr.indexOf("adjustAccountBatch")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addGroupOrder}},[e._v("创建批量导入")]):e._e()],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.addOrderTitle,visible:e.addOrderDialog,width:"600px"},on:{"update:visible":function(t){e.addOrderDialog=t}}},[r("el-form",{ref:"orderForm",attrs:{model:e.orderForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"账户类型","label-width":e.formLabelWidth,prop:"accountType"}},[r("el-select",{attrs:{size:"small"},model:{value:e.orderForm.accountType,callback:function(t){e.$set(e.orderForm,"accountType",t)},expression:"orderForm.accountType"}},e._l(e.accountList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{size:"small"},model:{value:e.orderForm.coinId,callback:function(t){e.$set(e.orderForm,"coinId",t)},expression:"orderForm.coinId"}},e._l(e.coinList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"UID:",prop:"uid","label-width":e.formLabelWidth}},[r("el-input",{attrs:{clearable:""},model:{value:e.orderForm.uid,callback:function(t){e.$set(e.orderForm,"uid",t)},expression:"orderForm.uid"}},[r("div",{staticClass:"gcode",attrs:{slot:"append"},on:{click:function(t){return t.stopPropagation(),e.searchAssets(t)}},slot:"append"},[e._v("查询资产")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"可用数量","label-width":e.formLabelWidth}},[r("el-input",{attrs:{clearable:"",disabled:!0},model:{value:e.orderForm.amountAvail,callback:function(t){e.$set(e.orderForm,"amountAvail",t)},expression:"orderForm.amountAvail"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"调账数量:",prop:"amount","label-width":e.formLabelWidth}},[r("el-row",[r("el-col",{attrs:{span:10}},[r("el-input",{attrs:{size:"small"},model:{value:e.orderForm.amount,callback:function(t){e.$set(e.orderForm,"amount",t)},expression:"orderForm.amount"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"调账原因:","label-width":e.formLabelWidth,prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:e.orderForm.remark,callback:function(t){e.$set(e.orderForm,"remark",t)},expression:"orderForm.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.addOrderDialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.btnLoading},on:{click:e.confirmAddOrder}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"创建特殊调账",visible:e.groupOrderDialog,width:"850px"},on:{"update:visible":function(t){e.groupOrderDialog=t}}},[r("el-form",{ref:"groupOrderForm",attrs:{model:e.groupOrderForm,rules:e.groupRules}},[r("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{size:"small"},model:{value:e.groupOrderForm.coinId,callback:function(t){e.$set(e.groupOrderForm,"coinId",t)},expression:"groupOrderForm.coinId"}},e._l(e.coinList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"数量:",prop:"amount","label-width":e.formLabelWidth}},[r("el-input",{attrs:{clearable:""},model:{value:e.groupOrderForm.amount,callback:function(t){e.$set(e.groupOrderForm,"amount",t)},expression:"groupOrderForm.amount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"调账人员UID:",prop:"uidString","label-width":e.formLabelWidth}},[r("el-input",{attrs:{type:"textarea",rows:"5",placeholder:"用英文逗号分隔",size:"small"},on:{input:e.changeGroup},model:{value:e.groupOrderForm.uidString,callback:function(t){e.$set(e.groupOrderForm,"uidString",t)},expression:"groupOrderForm.uidString"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.groupOrderDialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.groupLoading},on:{click:e.confirmGroupOrder}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"查看调账详情",visible:e.dialogVisible,width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"订单号","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.orderNo))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"UID","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.uid))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"账户类型","label-width":e.formLabelWidth}},[e._v(e._s(e._f("fStatus")(e.curRow.accountType)))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.coinName))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"调账数量","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.amount))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"申请时间","label-width":e.formLabelWidth}},[e._v(e._s(e._f("typeTime")(e.curRow.createTime)))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"申请人","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.appliName))])],1)],1),e._v(" "),e.hasChecked?r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"审核时间","label-width":e.formLabelWidth}},[e._v(e._s(e._f("typeTime")(e.curRow.auditTime)))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"审核人","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.auditName))])],1)],1):e._e(),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"调账原因","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.remark))])],1)],1)],1),e._v(" "),e.isCheckStatus?r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.conLoading},on:{click:function(t){return e.confirmReview(!0)}}},[e._v("审核通过")])],1):r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)},i=[],o=(r("a481"),r("ac6a"),r("96cf"),r("3b8d")),n=r("c249"),s=r("2fee"),l=r("f21b"),c=r("f9e1"),u=r("4ec3"),d=r("ca00"),m=r("ed08"),p={name:"Sprecon",components:{Btable:s["a"],Bsearch:n["a"],iconPage:l["a"]},data:function(){return{isCURDAuth:!0,groupLoading:!1,btnLoading:!1,conLoading:!1,listLoading:!1,excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,headBtnArr:[],excelTitle:"特殊调账列表",coinList:[],formLabelWidth:"120px",isCheckStatus:!1,dialogVisible:!1,groupOrderDialog:!1,curRow:{},dataForm:{},accountList:[{label:"币币",value:1},{label:"法币",value:2},{label:"理财",value:3},{label:"币汇",value:4},{label:"合约",value:5}],addOrderTitle:"创建调账（增）",addOrderDialog:!1,orderForm:{accountType:"",coinId:"",coinName:"",uid:0,amountAvail:0,amountSymbol:"+",amount:0,remark:""},rules:{accountType:[{required:!0,message:"必填",trigger:"blur"}],coinId:[{required:!0,message:"必填",trigger:"blur"}],uid:[{required:!0,message:"必填",trigger:"blur"}],amount:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"}]},groupOrderForm:{coinId:"",amount:"",uidString:""},groupRules:{coinId:[{required:!0,message:"必填",trigger:"blur"}],amount:[{required:!0,message:"必填",trigger:"blur"}],uidString:[{required:!0,message:"必填",trigger:"blur"}]}}},computed:{hasChecked:function(){return!this.isCheckStatus&&0!=this.curRow.status}},filters:{fStatus:function(e){var t="";switch(e){case 1:t="币币";break;case 2:t="法币";break;case 3:t="理财";break;case 4:t="币汇";break;case 5:t="合约";break}return t},typeTime:function(e){return e?Object(m["a"])(e):""}},methods:{doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,this.curRow=a,"checkPass"===r?(this.isCheckStatus=!0,this.dialogVisible=!0):"checkOut"===r?this.$confirm("确定驳回?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.confirmReview(!1);case 2:case"end":return e.stop()}}),e)})))).catch((function(){})):"viewDetail"===r&&(this.isCheckStatus=!1,this.dialogVisible=!0);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),openAddDialog:function(){var e=this;this.addOrderDialog=!0,this.$nextTick((function(){e.$refs["orderForm"].resetFields(),e.orderForm={accountType:"",coinId:"",coinName:"",uid:0,amountAvail:0,amountSymbol:"+",amount:0,remark:""}}))},confirmReview:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={id:this.curRow.id,type:t?1:2},this.conLoading=!0,e.next=4,u["a"].auditReconciliation(r);case 4:a=e.sent,a&&(this.$message({type:"success",message:a.data.message}),this.getList(),this.dialogVisible=!1),this.conLoading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[2]["value"]=this.coinList[0].value,this.getList()},exportExcel:function(e){this.search_params_obj=e.query;var t=e.num;d["a"].exportData.apply(this,[t])},addOrder:function(e){var t=this,r="add"===e?"+":"-";this.addOrderTitle="add"===e?"创建调账（增）":"创建调账（减）",this.addOrderDialog=!0,this.$nextTick((function(){t.orderForm={accountType:"",coinId:"",coinName:"",uid:"",amountAvail:"",amountSymbol:r,amount:"",remark:""},t.$refs["orderForm"].resetFields()}))},addGroupOrder:function(){var e=this;this.groupOrderDialog=!0,this.$nextTick((function(){e.groupOrderForm={coinId:"",amount:"",uidString:""},e.$refs["groupOrderForm"].resetFields()}))},confirmAddOrder:function(){var e=this;this.$refs["orderForm"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,i,o,n,s,l,c,d,m,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=10;break}return a=e.orderForm,i=a.accountType,o=a.amountSymbol,n=a.amount,s=a.coinId,l=a.uid,c=a.remark,d=e,m={accountType:i,uid:+l,coinId:+s,coinName:d.coinList.filter((function(e){return e.value==s}))[0].label||"",amount:"+"==o?n+"":"-"==o?o+n+"":n+"",remark:c},e.btnLoading=!0,t.next=7,u["a"].addReconciliation(m);case 7:p=t.sent,p&&(e.$message({message:p.data.message,type:"success"}),e.addOrderDialog=!1,e.getList()),e.btnLoading=!1;case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},confirmGroupOrder:function(){var e=this;this.$refs["groupOrderForm"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,i,o,n,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=9;break}return a=e.groupOrderForm,i=a.amount,o=a.coinId,n=a.uidString,s={uidString:n,coinId:+o,amount:i+""},e.groupLoading=!0,t.next=6,u["a"].addReconciliationBatch(s);case 6:l=t.sent,l&&(e.$message({message:l.data.message,type:"success"}),e.groupOrderDialog=!1,e.getList()),e.groupLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},changeInput:function(e){this.groupOrderForm.amount=e},changeGroup:function(e){e=e&&e.replace(/[^\,a-zA-Z\d]/gi,""),this.groupOrderForm.uidString=e},searchAssets:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t="",this.orderForm.accountType||(t="请先选择资金账户类型"),this.orderForm.coinId||(t="请先选择币种"),!t){e.next=6;break}return this.$message({message:t,type:"danger"}),e.abrupt("return");case 6:return r={accountType:this.orderForm.accountType+"",coinId:this.orderForm.coinId,uid:+this.orderForm.uid},e.next=9,u["a"].accountUseraccount(r);case 9:a=e.sent,a&&(this.orderForm.amountAvail=a.data.data.amount,this.$forceUpdate());case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,a,i,o,n,s,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,u["a"].specialReconciliation(t);case 8:r=e.sent,r&&(a=r.data.data,i=a.records,o=a.total,n=a.current,s=a.pages,this.total=o,this.pages=s,this.current_page=n,i.forEach((function(e){e.coinName=l.coinList.filter((function(t){return t.value==e.coinId}))[0].label})),this.list=i,this.dataList=i),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),queryData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=5,u["a"].specialReconciliation(t);case 5:return r=e.sent,r.data.data&&r.data.data.records&&r.data.data.records.forEach((function(e){e.coinName=a.coinList.filter((function(t){return t.value==e.coinId}))[0].label})),this.excelLoading=!1,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),requiredParams:function(e){this.$util.isEmptyObject(this.search_params_obj)&&(this.searchCofig[2]["value"]=this.coinList[0].value,e.coinId=this.coinList[0].value)}},mounted:function(){var e=this,t=this.$util.getAuthority("Sprecon",c["u"],c["v"]);this.configs=t.val,this.isCURDAuth=t.isAdd,this.headBtnArr=t.btnArr||[],this.searchCofig=this.$util.clone(c["w"]),this.$store.dispatch("common/getCoinList").then((function(){e.searchCofig[2]["list"]=e.$store.state.common.coinlist,e.coinList=e.$store.state.common.coinlist,e.getList()}))}},h=p,g=(r("7035"),r("0c7c")),f=Object(g["a"])(h,a,i,!1,null,null,null);t["default"]=f.exports}}]);