(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ff87810"],{"19de":function(e,t){e.exports=function(e,t,r,a){var i="undefined"!==typeof a?[a,e]:[e],o=new Blob(i,{type:r||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var n=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),s=document.createElement("a");s.style.display="none",s.href=n,s.setAttribute("download",t),"undefined"===typeof s.download&&s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),setTimeout((function(){document.body.removeChild(s),window.URL.revokeObjectURL(n)}),200)}}},"2e08":function(e,t,r){var a=r("9def"),i=r("9744"),o=r("be13");e.exports=function(e,t,r,n){var s=String(o(e)),c=s.length,l=void 0===r?" ":String(r),u=a(t);if(u<=c||""==l)return s;var d=u-c,m=i.call(l,Math.ceil(d/l.length));return m.length>d&&(m=m.slice(0,d)),n?m+s:s+m}},"32a6":function(e,t,r){var a=r("241e"),i=r("c3a1");r("ce7e")("keys",(function(){return function(e){return i(a(e))}}))},"6b83":function(e,t,r){},7035:function(e,t,r){"use strict";var a=r("6b83"),i=r.n(a);i.a},7514:function(e,t,r){"use strict";var a=r("5ca1"),i=r("0a49")(5),o="find",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),a(a.P+a.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,r){"use strict";var a=r("4588"),i=r("be13");e.exports=function(e){var t=String(i(this)),r="",o=a(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var a=r("e265"),i=r.n(a),o=r("a4bb"),n=r.n(o);function s(e,t){if(null==e)return{};var r,a,i={},o=n()(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}function c(e,t){if(null==e)return{};var r,a,o=s(e,t);if(i.a){var n=i()(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return c}))},ce7e:function(e,t,r){var a=r("63b6"),i=r("584a"),o=r("294c");e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],n={};n[e]=t(r),a(a.S+a.F*o((function(){r(1)})),"Object",n)}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},f200:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sprecon-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig,excelLoading:e.excelLoading,exportExcel:e.headBtnArr.includes("excel")},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel}})],1),e._v(" "),r("div",{staticClass:"sprecon-button"},[~e.headBtnArr.indexOf("passBatch")&&e.checkBtnIsShow?r("el-button",{attrs:{disabled:!e.isTableSelect,type:"primary",size:"medium"},on:{click:e.passBatch}},[e._v("批量审核")]):e._e(),e._v(" "),~e.headBtnArr.indexOf("adjustAccountAdd")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addOrder("add")}}},[e._v("创建调账（增）")]):e._e(),e._v(" "),~e.headBtnArr.indexOf("adjustAccountReduce")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addOrder("")}}},[e._v("创建调账（减）")]):e._e(),e._v(" "),~e.headBtnArr.indexOf("adjustAccountBatch")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addGroupOrder}},[e._v("批量创建")]):e._e()],1),e._v(" "),r("div",[r("Btable",{attrs:{spreconCheckBtnIsShow:e.checkBtnIsShow,selection:e.isTableSelect,listLoading:e.listLoading,data:e.list,configs:e.configs},on:{select:e.getSelectRow,"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.addOrderTitle,visible:e.addOrderDialog,width:"600px"},on:{"update:visible":function(t){e.addOrderDialog=t}}},[r("el-form",{ref:"orderForm",attrs:{model:e.orderForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"账户类型：","label-width":e.formLabelWidth,prop:"accountType"}},[r("el-select",{attrs:{size:"small"},on:{change:e.accountTypeChange},model:{value:e.orderForm.accountType,callback:function(t){e.$set(e.orderForm,"accountType",t)},expression:"orderForm.accountType"}},e._l(e.accountList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),5==e.orderForm.accountType?r("el-form-item",{attrs:{label:"合约账户：","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{size:"small"},model:{value:e.orderForm.coinId,callback:function(t){e.$set(e.orderForm,"coinId",t)},expression:"orderForm.coinId"}},e._l(e.contractCoinList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1):r("el-form-item",{attrs:{label:"币种：","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{size:"small"},model:{value:e.orderForm.coinId,callback:function(t){e.$set(e.orderForm,"coinId",t)},expression:"orderForm.coinId"}},e._l(e.coinList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"UID：",prop:"uid","label-width":e.formLabelWidth}},[r("el-input",{attrs:{maxlength:"20",clearable:""},on:{input:function(t){return e.checkVal("orderForm","uid","not")}},model:{value:e.orderForm.uid,callback:function(t){e.$set(e.orderForm,"uid",t)},expression:"orderForm.uid"}},[r("div",{staticClass:"gcode",attrs:{slot:"append"},on:{click:function(t){return t.stopPropagation(),e.searchAssets(t)}},slot:"append"},[e._v("查询资产")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"可用数量：","label-width":e.formLabelWidth}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:19}},[r("el-input",{attrs:{clearable:"",disabled:!0},model:{value:e.orderForm.amountAvail,callback:function(t){e.$set(e.orderForm,"amountAvail",t)},expression:"orderForm.amountAvail"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"调账数量：",prop:"amount","label-width":e.formLabelWidth}},[r("el-row",[r("el-col",{attrs:{span:19}},[r("el-input",{attrs:{type:"number",size:"small"},on:{input:function(t){e.orderForm.amount=e.orderForm.amount.slice(0,20)}},model:{value:e.orderForm.amount,callback:function(t){e.$set(e.orderForm,"amount",t)},expression:"orderForm.amount"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"调账原因：","label-width":e.formLabelWidth,prop:"remark"}},[r("el-input",{attrs:{maxlength:"100",type:"textarea",placeholder:"请输入描述"},model:{value:e.orderForm.remark,callback:function(t){e.$set(e.orderForm,"remark",t)},expression:"orderForm.remark"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"transferUserId",label:"资金出入账户：","label-width":e.formLabelWidth}},[r("el-select",{attrs:{size:"small"},on:{change:function(t){return e.spreconGetAccount(e.orderForm.transferUserId)}},model:{value:e.orderForm.transferUserId,callback:function(t){e.$set(e.orderForm,"transferUserId",t)},expression:"orderForm.transferUserId"}},e._l(e.outputAccountList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.realName,value:e.userId}})})),1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",[r("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"调账类型：",prop:"reconciliationType"}},[r("el-radio-group",{model:{value:e.orderForm.reconciliationType,callback:function(t){e.$set(e.orderForm,"reconciliationType",t)},expression:"orderForm.reconciliationType"}},[r("el-radio",{attrs:{label:1}},[e._v("异常补发")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("财务工资")]),e._v(" "),r("el-radio",{attrs:{label:3}},[e._v("运营活动奖励")]),e._v(" "),r("el-radio",{attrs:{label:4}},[e._v("违规扣除")])],1)],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"账户余额：","label-width":e.formLabelWidth}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:19}},[r("el-input",{attrs:{disabled:""},model:{value:e.curTotalAmount,callback:function(t){e.curTotalAmount=t},expression:"curTotalAmount"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.addOrderDialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.btnLoading},on:{click:e.confirmAddOrder}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"创建特殊调账",visible:e.groupOrderDialog,width:"850px"},on:{"update:visible":function(t){e.groupOrderDialog=t}}},[r("el-form",{ref:"batchOrderForm",attrs:{"label-width":"150px",model:e.batchOrderForm,rules:e.batchRules}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"资金出入账户：",prop:"transferUserId"}},[r("el-select",{attrs:{size:"small"},on:{change:function(t){return e.spreconGetAccount(e.batchOrderForm.transferUserId)}},model:{value:e.batchOrderForm.transferUserId,callback:function(t){e.$set(e.batchOrderForm,"transferUserId",t)},expression:"batchOrderForm.transferUserId"}},e._l(e.outputAccountList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.realName,value:e.userId}})})),1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:19}},[r("el-form-item",{attrs:{label:"账户余额："}},[e._v("\n            "+e._s(e.curTotalAmount)+"\n          ")])],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"获取表格："}},[r("el-button",{attrs:{type:"text"},on:{click:e.downLoadDefaultExcel}},[e._v(" 下载初始表格")])],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"格式列说明："}},[e._v("\n            [(账户类型) 1 = 币币， 5 = 合约]     [(调账类型) 1 = 异常补发，2 =\n            财务工资，3 = 运营活动奖励，4 = 违规扣除]\n          ")])],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"上传表格："}},[r("el-upload",{ref:"batchUploads",attrs:{action:e.$special_file_api,headers:e.importHeaders,multiple:"",name:"file",disabled:!e.batchOrderForm.transferUserId,data:{userId:e.batchOrderForm.transferUserId},"show-file-list":!0,accept:".xlsx,.xls","before-upload":e.batchBeforeUpload,"on-success":e.batchUpload,"on-error":e.uploadCompressError,limit:1,"on-exceed":e.exceed,"before-remove":e.batchRemove}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.batchUploadsClick}},[e._v("点击上传")])],1)],1)],1)],1)],1),e._v(" "),r("h3",[e._v("错误列表")]),e._v(" "),r("Btable",{attrs:{listLoading:e.errorListLoading,data:e.errorList,configs:e.errorConfigs}})],1),e._v(" "),r("el-dialog",{attrs:{title:"查看调账详情：",visible:e.dialogVisible,width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"订单号：","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.orderNo))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"UID：","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.uid))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"账户类型：","label-width":e.formLabelWidth}},[e._v(e._s(e._f("fStatus")(e.curRow.accountType)))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"币种/合约账户：","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.coinName))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"调账数量：","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.amount))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"申请时间：","label-width":e.formLabelWidth}},[e._v(e._s(e._f("typeTime")(e.curRow.createTime)))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"申请人：","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.appliName))])],1)],1),e._v(" "),e.hasChecked?r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"审核时间：","label-width":e.formLabelWidth}},[e._v(e._s(e._f("typeTime")(e.curRow.auditTime)))])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"审核人：","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.auditName))])],1)],1):e._e(),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"调账原因：","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.remark))])],1)],1)],1),e._v(" "),e.isCheckStatus?r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.conLoading},on:{click:function(t){return e.confirmReview(!0)}}},[e._v("审核通过")])],1):r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{visible:e.rejectVisible,width:"500px",title:"驳回"},on:{"update:visible":function(t){e.rejectVisible=t}}},[r("el-form",{ref:"rejectForm",attrs:{model:e.rejectForm,rules:e.rejectRules}},[r("el-form-item",{attrs:{label:"驳回理由: ",prop:"mark"}},[r("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"请输入驳回理由"},model:{value:e.rejectForm.mark,callback:function(t){e.$set(e.rejectForm,"mark",t)},expression:"rejectForm.mark"}})],1)],1),e._v(" "),r("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){t.stopPropagation(),e.rejectVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),e.confirmReject(t)}}},[e._v("驳回")])],1)],1)],1)},i=[],o=(r("8e6e"),r("456d"),r("bd86")),n=r("a8db"),s=(r("7f7f"),r("ac6a"),r("96cf"),r("3b8d")),c=(r("a481"),r("c249")),l=r("2fee"),u=r("f21b"),d=r("f9e1"),m=r("4ec3"),h=r("ca00"),p=r("ed08"),f=r("19de"),g=r.n(f);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={name:"Sprecon",components:{Btable:l["a"],Bsearch:c["a"],iconPage:u["a"]},data:function(){return{isCURDAuth:!0,groupLoading:!1,btnLoading:!1,conLoading:!1,listLoading:!1,excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,headBtnArr:[],coinList:[],formLabelWidth:"120px",isCheckStatus:!1,dialogVisible:!1,groupOrderDialog:!1,curRow:{},dataForm:{},accountList:[{label:"币币",value:1},{label:"合约",value:5}],addOrderTitle:"创建调账（增）",addOrderDialog:!1,orderForm:{},rules:{accountType:[{required:!0,message:"必填",trigger:"change"}],coinId:[{required:!0,message:"必填",trigger:"change"}],uid:[{required:!0,message:"必填",trigger:"blur"}],amount:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"}],reconciliationType:[{required:!0,message:"必填",trigger:"change"}],transferUserId:[{required:!0,message:"必填",trigger:"change"}]},groupOrderForm:{coinId:"",amount:"",uidString:""},groupRules:{coinId:[{required:!0,message:"必填",trigger:"blur"}],amount:[{required:!0,message:"必填",trigger:"blur"}],uidString:[{required:!0,message:"必填",trigger:"blur"}]},isTableSelect:!1,allAuditArr:[],rejectVisible:!1,rejectForm:{},rejectRules:{mark:[{required:!0,message:"必填",trigger:"blur"},{min:1,max:20,message:"不能超过20字符",trigger:"blur"}]},importHeaders:{token:window.localStorage.getItem("admin_token")},errorListLoading:!1,errorList:[],errorConfigs:[],curTotalAmount:"",isBranchPass:!1,checkBtnIsShow:!1,outputAccountList:[],contractCoinList:[],toDay:"",ago:"",sumList:{},batchOrderForm:{},batchRules:{transferUserId:[{required:!0,message:"必选",trigger:"blur"}]}}},watch:{"search_params_obj.status":function(e){this.isTableSelect=0===e}},computed:{hasChecked:function(){return!this.isCheckStatus&&0!=this.curRow.status}},filters:{fStatus:function(e){var t="";switch(e){case 1:t="币币";break;case 2:t="法币";break;case 3:t="理财";break;case 4:t="币汇";break;case 5:t="合约";break}return t},typeTime:function(e){return e?Object(p["a"])(e):""}},methods:{batchUploadsClick:function(){this.$refs["batchOrderForm"].validateField(["transferUserId"],(function(e){e&&!1}))},checkVal:function(e,t,r){r&&(this[e][t]=this[e][t].replace(/[^\d]/g,""))},accountTypeChange:function(e){this.orderForm.coinId=""},spreconCheckBtnIsShow:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].apiSpreconCheckBtnIsShow({});case 2:t=e.sent,t&&(this.checkBtnIsShow=t.data.data.reconciliationSwitch);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),passBatch:function(){var e=this;this.allAuditArr.length?this.$confirm("涉及资产谨慎操作",{confirmButtonText:"通过",cancelButtonText:"驳回",distinguishCancelAndClose:!0,center:!0}).then((function(){e.$confirm("请确认是否通过?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){e.isBranchPass=!0,e.confirmPassBatch(1)})).catch((function(){}))})).catch((function(t){"cancel"==t&&(e.rejectVisible=!0,e.$nextTick((function(){e.rejectForm={mark:""},e.isBranchPass=!0,e.$refs["rejectForm"].resetFields()})))})):this.$message({type:"error",message:"尚未勾选条目!"})},confirmPassBatch:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isBranchPass?r=1==t?{idSet:this.allAuditArr,type:t}:{idSet:this.allAuditArr,type:t,rejectionReason:this.rejectForm.mark}:(a=this.rejectForm.mark,r={idSet:[this.curRow.id],rejectionReason:a,type:t}),e.next=3,m["a"].apiSpreconBatchCheck(r);case 3:i=e.sent,i&&(this.$message({message:i.data.message,type:"success"}),this.getList(),2==t&&(this.rejectVisible=!1));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),confirmReject:function(){var e=this;this.$refs["rejectForm"].validate((function(t){t&&e.confirmPassBatch(2)}))},batchRemove:function(){this.errorList=[]},getSelectRow:function(e){var t=[];e.forEach((function(e){t.push(e.id)})),this.allAuditArr=t},spreconGetAccount:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={userId:t},e.next=3,m["a"].apiSpreconGetAccount(r);case 3:a=e.sent,a&&(i=a.data.data||{},this.curTotalAmount=i.totalAmount||0);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addGroupOrder:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.groupOrderDialog=!0,this.getSpreconOutputAccountList(),this.$nextTick((function(){t.errorList=[],t.$refs.batchUploads.clearFiles(),t.curTotalAmount="",t.$refs["batchOrderForm"].resetFields(),t.batchOrderForm={userId:""}}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),downLoadDefaultExcel:function(){m["a"].apiSpreconDownLoadDefaultExcel({}).then((function(e){console.log("res",e),g()(e.data,"特殊调账模板.xlsx")})).catch((function(){}))},exceed:function(e,t){this.$message.error("单次只能选择一个文件进行上传！")},uploadCompressError:function(){this.$message.error("文件上传失败")},batchUpload:function(e,t,r){1==e.code?(this.groupOrderDialog=!1,this.$message.success(e.message),this.getList()):-2==e.code?(this.errorList=e.data,this.$message.error(e.message)):this.$message.error(e.message)},batchBeforeUpload:function(e){var t=e.name.substring(e.name.lastIndexOf(".")+1),r="xls"===t,a="xlsx"===t,i=!0;return r||a||this.$message({message:"上传文件只能是 xls、xlsx格式!",type:"error"}),i||this.$message({message:"上传文件大小不能超过 8MB!",type:"error"}),r&&i||a&&i},doHandle:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,this.curRow=a,"checkPass"===r?(this.isCheckStatus=!0,this.dialogVisible=!0):"checkOut"===r?(this.rejectVisible=!0,this.$nextTick((function(){i.rejectForm={mark:""},i.isBranchPass=!1,i.$refs["rejectForm"].resetFields()}))):"viewDetail"===r&&(this.isCheckStatus=!1,this.dialogVisible=!0);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),openAddDialog:function(){var e=this;this.addOrderDialog=!0,this.$nextTick((function(){e.$refs["orderForm"].resetFields(),e.orderForm={accountType:"",coinId:"",uid:0,amountAvail:0,amountSymbol:"+",amount:0,remark:"",reconciliationType:"",transferUserId:""}}))},confirmReview:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={id:this.curRow.id,type:t?1:2},this.conLoading=!0,e.next=4,m["a"].auditReconciliation(r);case 4:a=e.sent,a&&(this.$message({type:"success",message:a.data.message}),this.getList(),this.dialogVisible=!1),this.conLoading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},exportExcel:function(e){this.search_params_obj=e.query;var t=e.num;h["a"].exportData.apply(this,[t])},addOrder:function(e){var t=this,r="add"===e?"+":"-";this.addOrderTitle="add"===e?"创建调账（增）":"创建调账（减）",this.addOrderDialog=!0,this.$nextTick((function(){t.orderForm={accountType:1,coinId:"",uid:"",amountAvail:"",amountSymbol:r,amount:"",remark:"",reconciliationType:"",transferUserId:""},t.$refs["orderForm"].resetFields(),t.curTotalAmount=""})),this.getSpreconOutputAccountList()},getSpreconOutputAccountList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].apiGetSpreconOutputAccountList({});case 2:t=e.sent,t&&(this.outputAccountList=t.data.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirmAddOrder:function(){var e=this;this.$refs["orderForm"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,i,o,s,c,l,u,d,h,p,f,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=10;break}return a=e.orderForm,i=a.accountType,o=a.amountSymbol,s=a.amount,c=a.coinId,l=a.uid,u=a.remark,d=a.reconciliationType,h=Object(n["a"])(a,["accountType","amountSymbol","amount","coinId","uid","remark","reconciliationType"]),1==i?p=e.coinList.filter((function(e){return e.value==c}))[0].label:5==i&&(p=e.contractCoinList.filter((function(e){return e.value==c}))[0].label),f=v({},h,{accountType:i,uid:+l,coinId:+c,coinName:p,reconciliationType:d,amount:"+"==o?s+"":"-"==o?o+s+"":s+"",remark:u}),e.btnLoading=!0,t.next=7,m["a"].addReconciliation(f);case 7:g=t.sent,g&&(e.$message({message:g.data.message,type:"success"}),e.addOrderDialog=!1,e.getList()),e.btnLoading=!1;case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},confirmGroupOrder:function(){var e=this;this.$refs["groupOrderForm"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,i,o,n,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=9;break}return a=e.groupOrderForm,i=a.amount,o=a.coinId,n=a.uidString,s={uidString:n,coinId:+o,amount:i+""},e.groupLoading=!0,t.next=6,m["a"].addReconciliationBatch(s);case 6:c=t.sent,c&&(e.$message({message:c.data.message,type:"success"}),e.groupOrderDialog=!1,e.getList()),e.groupLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},changeInput:function(e){this.groupOrderForm.amount=e},changeGroup:function(e){e=e&&e.replace(/[^\,a-zA-Z\d]/gi,""),this.groupOrderForm.uidString=e},searchAssets:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t="",this.orderForm.accountType||(t="请先选择资金账户类型"),this.orderForm.coinId||(t="请先选择币种或合约账户"),!t){e.next=6;break}return this.$message({message:t,type:"error"}),e.abrupt("return");case 6:return r={accountType:this.orderForm.accountType+"",coinId:this.orderForm.coinId,uid:+this.orderForm.uid},e.next=9,m["a"].accountUseraccount(r);case 9:a=e.sent,a&&(this.orderForm.amountAvail=a.data.data.amount,this.$forceUpdate());case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},getSpecialReconciliationSum:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].apiGetSpecialReconciliationSum(t);case 2:r=e.sent,r&&(this.sumList=r.data.data||{});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a,i,o,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,this.getSpecialReconciliationSum(t),e.next=9,m["a"].specialReconciliation(t);case 9:r=e.sent,r&&(a=r.data.data,i=a.records,o=a.total,n=a.current,s=a.pages,this.total=o,this.pages=s,this.current_page=n,this.list=i,this.dataList=i),this.listLoading=!1;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),queryData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=5,m["a"].specialReconciliation(t);case 5:return r=e.sent,r.data.data&&r.data.data.records&&r.data.data.records.forEach((function(e){e.coinName=a.coinList.filter((function(t){return t.value==e.coinId}))[0].label})),this.excelLoading=!1,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},requiredParams:function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),r=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[0].value=[t,r],e.endTime=r.replace(/\//gi,"-"),e.startTime=t.replace(/\//gi,"-")}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))}},mounted:function(){var e=this,t=this.$util.getAuthority("Sprecon",d["A"],d["B"]);this.configs=t.val,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.errorConfigs=d["D"],this.isCURDAuth=t.isAdd,this.headBtnArr=t.btnArr||[],this.searchCofig=this.$util.clone(d["C"]),this.$store.dispatch("common/getCoinList").then((function(){e.searchCofig[3]["list"]=e.$store.state.common.coinlist,e.coinList=e.$store.state.common.coinlist})),this.$store.dispatch("common/getContractCoinmarket").then((function(){e.contractCoinList=e.$store.state.common.contractCoinmarket})),this.spreconCheckBtnIsShow(),this.getList(),this.$watch((function(){return this.searchCofig[5].value}),(function(e,t){1==e&&(this.searchCofig[3]["value"]="",this.searchCofig[3].list=this.coinList),5==e&&(this.searchCofig[3]["value"]="",this.searchCofig[3].list=this.contractCoinList)}))}},_=w,y=(r("7035"),r("0c7c")),k=Object(y["a"])(_,a,i,!1,null,null,null);t["default"]=k.exports},f576:function(e,t,r){"use strict";var a=r("5ca1"),i=r("2e08"),o=r("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);a(a.P+a.F*n,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})}}]);