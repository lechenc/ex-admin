(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1518d51b"],{"0d13":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lockManage-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?r("div",{staticClass:"sprecon-button"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addOrder("")}}},[e._v("创建工单")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.orderTitle,visible:e.addOrderDialog,width:"600px"},on:{"update:visible":function(t){e.addOrderDialog=t}}},[r("el-form",{ref:"orderForm",attrs:{model:e.orderForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"标题","label-width":e.formLabelWidth,prop:"title"}},[r("el-input",{attrs:{disabled:e.isDisabled,clearable:""},model:{value:e.orderForm.title,callback:function(t){e.$set(e.orderForm,"title",t)},expression:"orderForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工单类型","label-width":e.formLabelWidth,prop:"workType"}},[r("el-select",{attrs:{disabled:e.isDisabled,size:"small",clearable:""},model:{value:e.orderForm.workType,callback:function(t){e.$set(e.orderForm,"workType",t)},expression:"orderForm.workType"}},e._l(e.workOrderList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"紧急程度","label-width":e.formLabelWidth,prop:"degreeUrgency"}},[r("el-select",{attrs:{disabled:e.isDisabled,size:"small",clearable:""},model:{value:e.orderForm.degreeUrgency,callback:function(t){e.$set(e.orderForm,"degreeUrgency",t)},expression:"orderForm.degreeUrgency"}},e._l(e.urgencyList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"接收人角色","label-width":e.formLabelWidth,prop:"roleId"}},[r("el-select",{attrs:{disabled:e.isDisabled,size:"small",clearable:""},on:{change:function(t){return e.checkItem("toAccount")}},model:{value:e.orderForm.roleId,callback:function(t){e.$set(e.orderForm,"roleId",t)},expression:"orderForm.roleId"}},e._l(e.roleList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"接收人","label-width":e.formLabelWidth,prop:"toAccount"}},[r("el-select",{attrs:{disabled:e.isDisabled,size:"small",clearable:""},on:{focus:function(t){return e.checkRole("roleId")}},model:{value:e.orderForm.toAccount,callback:function(t){e.$set(e.orderForm,"toAccount",t)},expression:"orderForm.toAccount"}},e._l(e.toAccountList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"content","label-width":e.formLabelWidth}},[r("el-input",{attrs:{disabled:e.isDisabled,type:"textarea",rows:"5",size:"small"},model:{value:e.orderForm.content,callback:function(t){e.$set(e.orderForm,"content",t)},expression:"orderForm.content"}})],1),e._v(" "),e.orderForm.id?r("div",[r("h5"),e._v(" "),r("el-form-item",{attrs:{label:"转移人角色","label-width":e.formLabelWidth,prop:"transferRole"}},[r("el-select",{attrs:{size:"small",clearable:"",disabled:e.isModify},on:{change:function(t){return e.checkItem("transfer")}},model:{value:e.orderForm.transferRole,callback:function(t){e.$set(e.orderForm,"transferRole",t)},expression:"orderForm.transferRole"}},e._l(e.roleList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"转移工单","label-width":e.formLabelWidth,prop:"transfer"}},[r("el-select",{attrs:{size:"small",clearable:"",disabled:e.isModify},on:{focus:function(t){return e.checkRole("transferRole")}},model:{value:e.orderForm.transfer,callback:function(t){e.$set(e.orderForm,"transfer",t)},expression:"orderForm.transfer"}},e._l(e.transferList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"标记工单状态","label-width":e.formLabelWidth,prop:"status"}},[r("el-select",{attrs:{size:"small",clearable:"",disabled:e.isModify},model:{value:e.orderForm.status,callback:function(t){e.$set(e.orderForm,"status",t)},expression:"orderForm.status"}},e._l(e.statusList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark","label-width":e.formLabelWidth}},[r("el-input",{attrs:{type:"textarea",rows:"5",size:"small",disabled:e.isModify},model:{value:e.orderForm.remark,callback:function(t){e.$set(e.orderForm,"remark",t)},expression:"orderForm.remark"}})],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"工单接收人","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.receiver))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("span",{staticStyle:{color:"#D14B48"}},[e._v("注：请勿随意更改工单状态，请在确认完成工单事项后，进行工状态的修改")])])],1)],1):r("div",[r("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"authGoogle"}},[r("el-input",{attrs:{clearable:""},model:{value:e.orderForm.authGoogle,callback:function(t){e.$set(e.orderForm,"authGoogle",t)},expression:"orderForm.authGoogle"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.addOrderDialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.btnLoading},on:{click:e.confirmOrder}},[e._v("确定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.dialogTitle,"custom-class":"work-order-list-dialog",visible:e.dialogVisible,width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"标题","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.title))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"工单类型","label-width":e.formLabelWidth}},[e._v(e._s(e.workTypeDiy(e.curRow.workType)))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"紧急程度","label-width":e.formLabelWidth}},[e._v(e._s(e.degreeUrgencyDiy(e.curRow.degreeUrgency)))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"接收人角色","label-width":e.formLabelWidth}},[e._v(e._s(e.roleIdDiy(e.curRow.roleId)))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"内容","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.content))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"标记工单状态","label-width":e.formLabelWidth}},[e._v(e._s(e.statusDiy(e.curRow.status)))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"工单接收人","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.receiver))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.remark))])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("span",{staticClass:"redText"},[e._v("注：请勿随意更改工单状态，请在确认完成工单事项后，进行工状态的修改")])])],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)},l=[],o=(r("8e6e"),r("456d"),r("7f7f"),r("a481"),r("bd86")),i=r("a8db"),s=(r("ac6a"),r("96cf"),r("3b8d")),n=r("c249"),c=r("2fee"),u=r("f21b"),d=r("4dbc"),p=r("4ec3"),b=(r("ca00"),r("ed08"));r("a78e");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={name:"WorkOrderList",components:{Btable:c["a"],Bsearch:n["a"],iconPage:u["a"]},data:function(){return{isCURDAuth:!0,groupLoading:!1,btnLoading:!1,conLoading:!1,listLoading:!1,excelLoading:!1,roleList:[],list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,isDisabled:!1,isModify:!1,workOrderList:[],formLabelWidth:"110px",user_name:"",orderTitle:"",hasChecked:!1,isCheckStatus:!1,dialogVisible:!1,curRow:{},urgencyList:[{label:"非常紧急",value:1},{label:"很紧急",value:2},{label:"一般紧急",value:3},{label:"不紧急",value:4}],statusList:[{label:"待处理",value:1},{label:"处理中",value:2},{label:"处理完成",value:3},{label:"已驳回",value:4}],toAccountList:[],transferList:[],addOrderDialog:!1,orderForm:{id:"",title:"",workType:"",degreeUrgency:"",roleId:"",toAccount:"",content:"",authGoogle:"",transferRole:"",transfer:"",status:"",remark:""},rules:{},rulesAll:{title:[{required:!0,message:"必填",trigger:"blur"}],workType:[{required:!0,message:"必填",trigger:"blur"}],degreeUrgency:[{required:!0,message:"必填",trigger:"blur"}],roleId:[{required:!0,message:"必填",trigger:"blur"}],toAccount:[{required:!0,message:"必填",trigger:"blur"}],content:[{required:!0,message:"必填",trigger:"blur"}],authGoogle:[{required:!0,message:"必填",trigger:"blur"}]},rulesFrom:{title:[{required:!0,message:"必填",trigger:"blur"}],workType:[{required:!0,message:"必填",trigger:"blur"}],degreeUrgency:[{required:!0,message:"必填",trigger:"blur"}],roleId:[{required:!0,message:"必填",trigger:"blur"}],toAccount:[{required:!0,message:"必填",trigger:"blur"}],content:[{required:!0,message:"必填",trigger:"blur"}]},rulesTo:{status:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"}]},rulesEdit:{title:[{required:!0,message:"必填",trigger:"blur"}],workType:[{required:!0,message:"必填",trigger:"blur"}],degreeUrgency:[{required:!0,message:"必填",trigger:"blur"}],roleId:[{required:!0,message:"必填",trigger:"blur"}],toAccount:[{required:!0,message:"必填",trigger:"blur"}],content:[{required:!0,message:"必填",trigger:"blur"}],status:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"}]},dataForm:{},dialogTitle:"查看详情"}},watch:{"orderForm.roleId":{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,r){var a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,p["a"].systemUserList({id:parseInt(this.orderForm.roleId)});case 3:a=e.sent,a&&(l=a.data.data.map((function(e){return{label:e["account"],value:e["account"]}})),this.toAccountList=l);case 5:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},"orderForm.transferRole":{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,r){var a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,p["a"].systemUserList({id:parseInt(this.orderForm.transferRole)});case 3:a=e.sent,a&&(l=a.data.data.map((function(e){return{label:e["account"],value:e["account"]}})),this.transferList=l);case 5:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}},filters:{typeTime:function(e){return e?Object(b["a"])(e):""}},methods:{workTypeDiy:function(e){return e&&this.workOrderList.length&&this.workOrderList.filter((function(t){return t.label==e}))[0].label||""},degreeUrgencyDiy:function(e){return e&&this.urgencyList.filter((function(t){return t.value==e}))[0].label||""},roleIdDiy:function(e){return e&&this.roleList.length&&this.roleList.filter((function(t){return t.value==e}))[0].label||""},statusDiy:function(e){return e&&this.statusList.filter((function(t){return t.value==e}))[0].label||""},checkItem:function(e){this.orderForm[e]=""},doHandle:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,this.curRow=a,"edit"===r?(this.addOrderDialog=!0,this.orderTitle="编辑工单",this.isDisabled=this.curRow.fromAccount!=this.user_name,this.isModify=this.curRow.toAccount!=this.user_name,this.rules=this.isModify?this.rulesFrom:this.isDisabled?this.rulesTo:this.rulesEdit,this.$nextTick((function(){l.$refs["orderForm"].resetFields(),l.orderForm={id:l.curRow.id,title:l.curRow.title,workType:l.workOrderList.length&&l.workOrderList.filter((function(e){return e.label==l.curRow.workType}))[0].value||-1,degreeUrgency:l.curRow.degreeUrgency,roleId:l.curRow.roleId,toAccount:l.curRow.toAccount,content:l.curRow.content,authGoogle:"",transferRole:"",transfer:"",status:l.curRow.status,remark:l.curRow.remark}}))):"detail"===r&&(this.dialogTitle="查看详情",this.dialogVisible=!0);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},addOrder:function(e){var t=this;this.isDisabled=!1,this.isModify=!1,this.rules=this.rulesAll,this.addOrderDialog=!0,this.orderTitle="创建工单",this.$nextTick((function(){t.$refs["orderForm"].resetFields(),t.orderForm={id:"",title:"",workType:"",degreeUrgency:"",roleId:"",toAccount:"",content:"",authGoogle:""}}))},confirmOrder:function(){var e=this;this.$refs["orderForm"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,l,o,s,n,c,u,d,b,m,h,g,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=18;break}if(a=e.orderForm,l=a.id,o=a.workType,s=a.degreeUrgency,n=a.roleId,c=a.toAccount,a.transferRole,u=a.transfer,d=a.status,b=a.remark,m=a.authGoogle,h=Object(i["a"])(a,["id","workType","degreeUrgency","roleId","toAccount","transferRole","transfer","status","remark","authGoogle"]),e,g=f({workType:o,degreeUrgency:s,toAccount:c},h),e.btnLoading=!0,""===l?Object.assign(g,{authGoogle:m,roleId:n}):Object.assign(g,{id:l,transfer:u,status:d,remark:b}),""!==l){t.next=12;break}return t.next=9,p["a"].addWorkOrder(g);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,p["a"].editWorkOrder(g);case 14:t.t0=t.sent;case 15:v=t.t0,v&&(e.$message({message:v.data.message,type:"success"}),e.addOrderDialog=!1,e.getList()),e.btnLoading=!1;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},changeGroup:function(e){e=e&&e.replace(/[^\,a-zA-Z\d]/gi,""),this.orderForm.uid=e},checkVal:function(e){"percent"===e&&(this.orderForm[e]=this.orderForm[e]>100?100:this.orderForm[e],this.orderForm[e]=(this.orderForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")),this.orderForm[e]<0&&(this.orderForm[e]=0)},checkRole:function(e){this.orderForm[e]||this.$message({message:"必须先选择角色!",type:"error"})},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a,l,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,p["a"].userWorkOrder(t);case 8:r=e.sent,r&&(a=r.data.data,l=a.records,o=a.total,i=a.current,s=a.pages,this.total=o,this.pages=s,this.current_page=i,this.list=l,this.dataList=l,this.listLoading=!1);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){this.$util.isEmptyObject(this.search_params_obj),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e},getRoleList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"].addRoleList({});case 2:t=e.sent,t&&(r=t.data.data&&t.data.data.map((function(e){return{label:e["name"],value:e["id"]}})),this.roleList=r);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this,t=this.$util.getAuthority("WorkOrderList",d["d"],d["e"]);this.isCURDAuth=t.isAdd;var r=t.val;this.user_name=localStorage.getItem("user_name"),"edit"===r[r.length-1].btnGroup[0].alias&&(r[r.length-1].btnGroup[0].filter_status[1]=this.user_name,r[r.length-1].btnGroup[0].filter_status[2]=this.user_name,r[r.length-1].btnGroup[1].filter_status[1]=this.user_name),this.configs=r,this.searchCofig=this.$util.clone(d["f"]),this.$store.dispatch("common/getWorkOrderList").then((function(){e.searchCofig[5]["list"]=e.$store.state.common.workorderlist,e.workOrderList=e.$store.state.common.workorderlist})),this.getList(),this.getRoleList()}},g=h,v=(r("cf5c"),r("0c7c")),y=Object(v["a"])(g,a,l,!1,null,null,null);t["default"]=y.exports},"32a6":function(e,t,r){var a=r("241e"),l=r("c3a1");r("ce7e")("keys",(function(){return function(e){return l(a(e))}}))},"4dbc":function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"h",(function(){return s})),r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return u}));r("4360");var a=[{label:"工单号",prop:"id"},{label:"工单类型",prop:"workType"},{label:"工单标题",prop:"title"},{label:"创建时间",prop:"createTime",type:"time"},{label:"紧急程度",prop:"degreeUrgency",type:"filter",show_type:"textColorLine",other:"status",width:100,filters:[{text:"非常紧急",val:1},{text:"很紧急",val:2},{text:"一般紧急",val:3},{text:"不紧急",val:4}]},{label:"发起人账号",prop:"fromAccount"},{label:"接收人账号",prop:"toAccount"},{label:"处理人账号",prop:"handleAccount"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"工单状态",prop:"status",width:100,type:"filter",show_type:"text",filters:[{text:"待处理",val:1},{text:"处理中",val:2},{text:"处理完成",val:3},{text:"已驳回",val:4}]},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"编辑",fn:"edit",isPop:!1,filter_key:!1,filter_status:[1,"",""],other_filter:["status","fromAccount","toAccount"],type:"primary",alias:"edit"},{label:"编辑",fn:"edit",isPop:!1,filter_key:!1,filter_status:[2,""],other_filter:["status","toAccount"],type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],l=[{label:"工单号",prop:"id"},{label:"工单类型",prop:"workType"},{label:"工单标题",prop:"title"},{label:"创建时间",prop:"createTime",type:"time"},{label:"紧急程度",prop:"degreeUrgency",type:"filter",show_type:"textColorLine",other:"status",width:100,filters:[{text:"非常紧急",val:1},{text:"很紧急",val:2},{text:"一般紧急",val:3},{text:"不紧急",val:4}]},{label:"发起人账号",prop:"fromAccount"},{label:"接收人账号",prop:"toAccount"},{label:"处理人账号",prop:"handleAccount"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"工单状态",prop:"status",width:100,type:"filter",show_type:"text",filters:[{text:"待处理",val:1},{text:"处理中",val:2},{text:"处理完成",val:3},{text:"已驳回",val:4}]}],o=[{type:"date_rank",label:"创建日期",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"工单号",prop:"id",value:"",placeholder:"请输入"},{type:"text",label:"发起人账号",prop:"fromAccount",value:"",placeholder:"请输入"},{type:"text",label:"接收人账号",prop:"toAccount",value:"",placeholder:"请输入"},{type:"text",label:"处理人账号",prop:"handleAccount",value:"",placeholder:"请输入"},{type:"select",label:"工单类型",prop:"workType",value:"",list:[]},{type:"select",label:"紧急程度",prop:"degreeUrgency",value:"",list:[{label:"非常紧急",value:1},{label:"很紧急",value:2},{label:"一般紧急",value:3},{label:"不紧急",value:4}]},{type:"select",label:"状态",prop:"status",value:"",list:[{label:"待处理",value:1},{label:"处理中",value:2},{label:"处理完成",value:3},{label:"已驳回",value:4}]}],i=[{label:"工单类型",prop:"name"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],s=[{label:"工单类型",prop:"name"},{label:"创建时间",prop:"createTime",type:"time"}],n=[{label:"币种名称",prop:"chineseDesc"},{label:"英文简称",prop:"coinName"},{label:"发行价格",prop:"issuePrice"},{label:"当前价格",prop:"currentPrice"},{label:"是否首次发币",prop:"isFirstIssue",show_type:"text",type:"filter",width:100,filters:[{text:"不是",val:0},{text:"是",val:1}]},{label:"是否ERC20",prop:"isErc20",type:"filter",show_type:"text",width:100,filters:[{text:"不是",val:0},{text:"是",val:1}]},{label:"期望开通交易对",prop:"coinMarket"},{label:"对接人手机号",prop:"phone"},{label:"邮箱",prop:"email"},{label:"跟进状态",prop:"status",type:"filter",show_type:"text",other:"status",width:100,filters:[{text:"待处理",val:0},{text:"处理中",val:1},{text:"处理完成",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:"160px",btnGroup:[{label:"编辑",fn:"edit",isPop:!1,filter_key:"status",out:!0,filter_status:2,type:"success",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],c=[{label:"币种名称",prop:"chineseDesc"},{label:"英文简称",prop:"coinName"},{label:"发行价格",prop:"issuePrice"},{label:"当前价格",prop:"currentPrice"},{label:"是否首次发币",prop:"isFirstIssue",show_type:"text",type:"filter",width:100,filters:[{text:"不是",val:0},{text:"是",val:1}]},{label:"是否ERC20",prop:"isErc20",type:"filter",show_type:"text",width:100,filters:[{text:"不是",val:0},{text:"是",val:1}]},{label:"期望开通交易对",prop:"coinMarket"},{label:"对接人手机号",prop:"phone"},{label:"邮箱",prop:"email"},{label:"跟进状态",prop:"status",type:"filter",show_type:"text",other:"status",width:100,filters:[{text:"待处理",val:0},{text:"处理中",val:1},{text:"处理完成",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],u=[{type:"date_rank",label:"创建时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"英文简称",prop:"coinName",value:"",placeholder:"请输入"},{type:"select",label:"是否首次法币",prop:"isFirstIssue",value:"",list:[{label:"不是",value:0},{label:"是",value:1}]},{type:"select",label:"是否ERC20",prop:"isErc20",value:"",list:[{label:"不是",value:0},{label:"是",value:1}]}]},"4ec4":function(e,t,r){},7514:function(e,t,r){"use strict";var a=r("5ca1"),l=r("0a49")(5),o="find",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var a=r("e265"),l=r.n(a),o=r("a4bb"),i=r.n(o);function s(e,t){if(null==e)return{};var r,a,l={},o=i()(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}function n(e,t){if(null==e)return{};var r,a,o=s(e,t);if(l.a){var i=l()(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ce7e:function(e,t,r){var a=r("63b6"),l=r("584a"),o=r("294c");e.exports=function(e,t){var r=(l.Object||{})[e]||Object[e],i={};i[e]=t(r),a(a.S+a.F*o((function(){r(1)})),"Object",i)}},cf5c:function(e,t,r){"use strict";var a=r("4ec4"),l=r.n(a);l.a},e265:function(e,t,r){e.exports=r("ed33")},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("7618");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,l=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var o={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},i=l.replace(/{([ymdhisa])+}/g,(function(e,t){var r=o[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},ff53:function(e,t,r){"use strict";var a=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function o(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=o(e);return t>0?l(Number(e)*Math.pow(10,t)):Number(e)}function s(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function n(e,t){for(var r=arguments.length,l=new Array(r>2?r-2:0),c=2;c<r;c++)l[c-2]=arguments[c];if(l.length>0)return n.apply(void 0,[n(e,t),l[0]].concat(Object(a["a"])(l.slice(1))));var u=i(e),d=i(t),p=o(e)+o(t),b=u*d;return s(b),b/Math.pow(10,p)}function c(e,t){for(var r=arguments.length,l=new Array(r>2?r-2:0),i=2;i<r;i++)l[i-2]=arguments[i];if(l.length>0)return c.apply(void 0,[c(e,t),l[0]].concat(Object(a["a"])(l.slice(1))));var s=Math.pow(10,Math.max(o(e),o(t)));return(n(e,s)+n(t,s))/s}function u(e,t){for(var r=arguments.length,l=new Array(r>2?r-2:0),i=2;i<r;i++)l[i-2]=arguments[i];if(l.length>0)return u.apply(void 0,[u(e,t),l[0]].concat(Object(a["a"])(l.slice(1))));var s=Math.pow(10,Math.max(o(e),o(t)));return(n(e,s)-n(t,s))/s}function d(e,t){for(var r=arguments.length,c=new Array(r>2?r-2:0),u=2;u<r;u++)c[u-2]=arguments[u];if(c.length>0)return d.apply(void 0,[d(e,t),c[0]].concat(Object(a["a"])(c.slice(1))));var p=i(e),b=i(t);return s(p),s(b),n(p/b,l(Math.pow(10,o(t)-o(e))))}function p(e,t){var r=Math.pow(10,t);return d(Math.round(n(e,r)),r)}var b=!0;function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:l,plus:c,minus:u,times:n,divide:d,round:p,digitLength:o,float2Fixed:i,enableBoundaryChecking:m}}}]);