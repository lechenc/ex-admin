(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17729a5e"],{1637:function(t,e,a){},f2fe:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notice-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchConfig,calText:"合约统计",excelLoading:t.excelLoading,exportExcel:!0,calTotal:!0},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-exportExcel":t.exportExcel,"do-calTotal":t.calTotal}})],1),t._v(" "),a("div",{staticClass:"notice-button"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.create(!1)}}},[t._v("创建")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.create(!0)}}},[t._v("批量创建")])],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1),t._v(" "),a("el-Dialog",{attrs:{visible:t.createDialog,title:"创建特殊调整",width:"700px"},on:{"update:visible":function(e){t.createDialog=e}}},[a("el-form",{ref:"form",staticStyle:{width:"90%","padding-left":"15px"},attrs:{model:t.form,"label-width":"160px",rules:t.rules}},[a("el-form-item",{attrs:{label:"账户类型",prop:"accountType"}},[a("el-select",{attrs:{placeholder:"请选择",width:"20%"},model:{value:t.form.accountType,callback:function(e){t.$set(t.form,"accountType",e)},expression:"form.accountType"}},t._l(t.accountTypeObj,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"币对",prop:"coinName"}},[a("el-select",{attrs:{placeholder:"请选择",width:"20%"},model:{value:t.form.coinName,callback:function(e){t.$set(t.form,"coinName",e)},expression:"form.coinName"}},t._l(t.symbollist,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.label}})})),1)],1),t._v(" "),t.batchCreate?a("el-row",[a("el-form-item",{attrs:{label:"UID",prop:"uidRange"}},[a("el-col",{attrs:{span:11}},[a("el-input",{attrs:{size:"small",placeholder:"请输入UID",type:"number"},model:{value:t.form.startUid,callback:function(e){t.$set(t.form,"startUid",e)},expression:"form.startUid"}})],1),t._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[t._v("-")]),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-input",{attrs:{size:"small",placeholder:"请输入UID",type:"number"},model:{value:t.form.endUid,callback:function(e){t.$set(t.form,"endUid",e)},expression:"form.endUid"}})],1)],1)],1):a("el-row",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"UID",prop:"uid"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入",type:"number"},model:{value:t.form.uid,callback:function(e){t.$set(t.form,"uid",e)},expression:"form.uid"}})],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"调账数量",prop:"amount"}},[a("el-col",{attrs:{span:5}},[a("el-select",{attrs:{size:"small",placeholder:"请选择",width:"20%"},model:{value:t.form.plus,callback:function(e){t.$set(t.form,"plus",e)},expression:"form.plus"}},t._l(t.plusObj,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.label}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:19}},[a("el-input",{attrs:{size:"small",type:"text",placeholder:"请输入"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"调账原因"}},[a("el-input",{attrs:{placeholder:"请输入",type:"textarea"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1)],1),t._v(" "),t.batchCreate?a("el-row",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"审核状态",prop:"tradeStatus"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择",width:"20%",disabled:""},model:{value:t.form.tradeStatus,callback:function(e){t.$set(t.form,"tradeStatus",e)},expression:"form.tradeStatus"}},[a("el-option",{attrs:{label:"成功",value:"1"}})],1)],1)],1):t._e()],1),t._v(" "),a("div",{staticClass:"comfirn-btn footer"},[a("el-button",{attrs:{type:"primary",size:"small",loading:t.btnLoading},on:{click:t.createConfirm}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{type:"default",size:"small"},on:{click:function(e){t.createDialog=!1}}},[t._v("取消")])],1)],1),t._v(" "),a("el-Dialog",{staticClass:"totalDialog",attrs:{visible:t.totalDialog,title:"统计结果",width:"400px"},on:{"update:visible":function(e){t.totalDialog=e}}},[a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:6}},[t._v(" UID: ")]),t._v(" "),a("el-col",{attrs:{span:15}},[t._v(t._s(t.totalObj.uid||"无")+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:6}},[t._v(" 币对: ")]),t._v(" "),a("el-col",{attrs:{span:15}},[t._v(" "+t._s(t.myCoinName||"无")+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:6}},[t._v(" 状态: ")]),t._v(" "),a("el-col",{attrs:{span:15}},[t._v(t._s(t.tradeStatusObj[t.totalObj.tradeStatus]||"无")+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:6}},[t._v(" 数量: ")]),t._v(" "),a("el-col",{attrs:{span:15}},[t._v(t._s(t.totalObj.amount||0)+" ")])],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.totalDialog=!1}}},[t._v("确定")])],1)],1),t._v(" "),a("el-Dialog",{staticClass:"totalDialog msgDialog",attrs:{visible:t.msgDialog,title:t.title,width:"700px"},on:{"update:visible":function(e){t.msgDialog=e}}},[a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:4}},[t._v(" 订单号: ")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.infoObj.orderNo||"无")+" ")]),t._v(" "),a("el-col",{attrs:{span:4}},[t._v(" UID: ")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.infoObj.uid||"无")+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:4}},[t._v(" 账户类型: ")]),t._v(" "),a("el-col",{attrs:{span:15}},[t._v(t._s(t.tradeStatusObj[t.infoObj.tradeStatus]||"无")+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:4}},[t._v(" 币种: ")]),t._v(" "),a("el-col",{attrs:{span:15}},[t._v(" "+t._s(t.infoObj.coinName||"无")+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:4}},[t._v(" 调账数量: ")]),t._v(" "),a("el-col",{attrs:{span:15}},[t._v(t._s(t.infoObj.amount||0)+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:4}},[t._v(" 申请时间: ")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.infoObj.applyTime||"无")+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:4}},[t._v(" 审核时间: ")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.infoObj.auditTime||"无")+" ")]),t._v(" "),a("el-col",{attrs:{span:4}},[t._v(" 审核人: ")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.infoObj.auditUserName||"无")+" ")])],1),t._v(" "),a("el-row",{staticClass:"myrow",attrs:{span:24}},[a("el-col",{attrs:{span:4}},[t._v(" 调账原因: ")]),t._v(" "),a("el-col",{attrs:{span:15}},[t._v(t._s(t.infoObj.reason||"无")+" ")])],1),t._v(" "),a("div",{staticClass:"msgDialog-footer",attrs:{slot:"footer"},slot:"footer"},[1==t.sureType?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.msgDialog=!1}}},[t._v(" 确定 ")]):2==t.sureType?a("el-button",{on:{click:function(e){t.msgDialog=!1}}},[t._v(" 取消 ")]):t._e(),t._v(" "),1==t.confirmType?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.passCancelConfirm(1)}}},[t._v(" 审核通过 ")]):2==t.confirmType?a("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.passCancelConfirm(2)}}},[t._v(" 审核驳回 ")]):t._e()],1)],1)],1)},s=[],i=(a("8e6e"),a("456d"),a("a481"),a("ac6a"),a("bd86")),o=(a("96cf"),a("3b8d")),n=a("c249"),l=a("2fee"),c=a("f21b"),u=a("e8f8"),p=a("4ec3"),m=a("ca00");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"columnMimic",components:{Btable:l["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){var t=this,e=function(e,a,r){var s=+t.form.startUid,i=+t.form.endUid;s&&i?s>i?r(new Error("最大值超过最小值,请重新填写")):s===i?r(new Error("最小值必须小于最大值, 请重新填写")):r():r(new Error("请输入uid"))};return{confirmType:"",sureType:"",msgDialog:!1,title:"订单详情",myCoinName:"",tradeStatusObj:{0:"待审核",1:"成功",2:"失败"},totalObj:{},symbollist:[],accountTypeObj:[{label:"分析师实盘合约账户",value:7}],plusObj:[{label:"+",value:"+"}],form:{accountType:"",coinName:"",uid:"",amount:"",reason:"",plus:"+",startUid:"",endUid:"",tradeStatus:"1"},toDay:"",ago:"",infoObj:{},rules:{accountType:[{required:!0,message:"请输入",trigger:"blur"}],coinName:[{required:!0,message:"请输入",trigger:"blur"}],uid:[{required:!0,message:"请输入",trigger:"blur"}],amount:[{required:!0,message:"请输入",trigger:"blur"}],uidRange:[{validator:e,trigger:"blur"}],tradeStatus:[{required:!0,message:"请输入",trigger:"blur"}]},createDialog:!1,btnLoading:!1,listLoading:!1,list:[],configs:[],searchConfig:[],search_params_obj:{},current_page:1,pages:0,pageSize:10,total:0,detail_list:[],row:{},excelLoading:!1,delBtnLoading:!1,dataList:[],totalDialog:!1,passCancelId:"",batchCreate:!1}},watch:{createDialog:function(t){t||(this.form={accountType:"",coinName:"",uid:"",amount:"",reason:"",plus:"+",startUid:"",endUid:"",tradeStatus:"1"})}},methods:{passCancelConfirm:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={orderNo:this.passCancelId,tradeStatus:e},t.next=3,p["a"].passCancelAccountMimic(a);case 3:r=t.sent,r&&(this.$message.success("操作成功"),this.msgDialog=!1,this.getList());case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doHandle:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.fn,r=e.row,this.passCancelId=r.orderNo,"detail"==a&&(this.title="订单详情",this.sureType=1,this.msgDialog=!0,this.infoObj=r),"pass"==a&&(this.title="审核通过",this.sureType=2,this.confirmType=1,this.msgDialog=!0,this.infoObj=r),"cancel"==a&&(this.title="审核驳回",this.sureType=2,this.confirmType=2,this.msgDialog=!0,this.infoObj=r);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),exportExcel:function(t){this.search_params_obj=t.query;var e=t.num;m["a"].exportData.apply(this,[e])},calTotal:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.totalDialog=!0,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),t.next=5,p["a"].getAccountMimicTotal(this.search_params_obj);case 5:a=t.sent,this.totalObj=a.data.data,r="",r=this.symbollist.filter((function(t){return t["value"]==s.totalObj.coinId}))[0].label,this.myCoinName=r;case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),queryData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.excelLoading=!0,Object.assign(e,this.search_params_obj),t.next=4,p["a"].getAccountMimicList(e);case 4:return a=t.sent,this.excelLoading=!1,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),uploadError:function(){this.$message.error("图片上传失败")},exceed:function(t,e){this.$message.error("单次只能选择一张图片进行上传！")},uploadIcon:function(t,e,a){if(!t.data)return this.$message.error("图片上传失败"),void this.$refs.iconDot.clearFiles();this.form.iconUrl=t.data[0].url,this.$refs.iconDot.handleRemove(e),this.$refs.iconDot.clearFiles()},createConfirm:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs.form.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r,s,i,o,n,l,c,u,m,f,h,g,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=25;break}if(r=e.form,s=r.accountType,i=r.coinName,o=r.uid,n=r.amount,l=r.reason,c=r.startUid,u=r.endUid,m=r.tradeStatus,f="",f=e.symbollist.filter((function(t){return t["label"]==i}))[0].value,e.search_params_obj.coinMarket=f,h=e.batchCreate?{startUid:c,endUid:u,tradeStatus:m}:{uid:o},g=d({accountType:s,coinId:f,coinName:i,amount:n},h),console.log("reason: ",l),l&&(g.reason=l),console.log("parms: ",g),e.btnLoading=!0,e.batchCreate){t.next=17;break}return t.next=14,p["a"].addAccountMimic(g);case 14:t.t0=t.sent,t.next=20;break;case 17:return t.next=19,p["a"].batchCreateAnalystOrder(g);case 19:t.t0=t.sent;case 20:b=t.t0,b&&(e.$message({message:"新增成功",type:"success"}),e.createDialog=!1,e.getList()),e.btnLoading=!1,t.next=26;break;case 25:e.$message.error({title:"提示",message:"请完成表单内容填写再重试"});case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchConfig.forEach((function(t){t["value"]=""})),this.getList()},create:function(t){this.batchCreate=t,this.createDialog=!0},goPage:function(t){this.current_page=t,this.getList()},requiredParams:function(t){if(this.$util.isEmptyObject(this.search_params_obj)){var e=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");t.endTime=a.replace(/\//gi,"-"),t.startTime=e.replace(/\//gi,"-"),this.searchConfig[0].value=[e,a]}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},getSymbolList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("common/getSymbolMimicListAnalyst").then((function(){e.symbollist=e.$store.state.common.symbolMimicListAnalyst,e.searchConfig[2]["list"]=e.symbollist}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")},getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,r,s,i,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return this.listLoading=!0,this,e={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(e,this.search_params_obj),t.next=8,p["a"].getAccountMimicList(e);case 8:a=t.sent,a&&(r=a.data.data,s=r.records,i=r.current,o=r.total,n=r.pages,this.total=o,this.pages=n,s.forEach((function(t){t["isclick"]=0!==parseInt(t["tradeStatus"])})),this.current_page=i,this.list=s),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.configs=u["a"],this.searchConfig=this.$util.clone(u["b"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getSymbolList()}},g=h,b=(a("fcc3"),a("0c7c")),v=Object(b["a"])(g,r,s,!1,null,null,null);e["default"]=v.exports},fcc3:function(t,e,a){"use strict";var r=a("1637"),s=a.n(r);s.a}}]);