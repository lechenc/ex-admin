(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de334"],{8545:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"tradeMarket"}},[r("Search",{attrs:{configs:e.formConfig,calTotal:!0},on:{"do-search":e.handlerSeach,"do-calTotal":e.doCalTotal,"do-reset":e.reset}}),e._v(" "),r("el-row",{staticStyle:{margin:"20px"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("添加交易对")])],1),e._v(" "),r("b-table",{attrs:{configs:e.tableConfig,data:e.tableData,listLoading:e.loading},on:{"do-handle":e.doHandle}}),e._v(" "),r("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"right"},attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.pageSize.currentPage,"page-sizes":[10,50,100,200],"page-size":e.pageSize.pageSize,total:e.totals},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}}),e._v(" "),r("el-dialog",{attrs:{visible:e.flag,title:"添加交易对"},on:{"update:visible":function(t){e.flag=t}}},[r("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"120px",rules:e.rules}},[r("el-form-item",{attrs:{label:"交易对类型",prop:"coinType"}},[r("el-select",{on:{change:e.handlerChange},model:{value:e.addForm.coinType,callback:function(t){e.$set(e.addForm,"coinType",t)},expression:"addForm.coinType"}},e._l(e.coinTypeArr,(function(e,t){return r("el-option",{attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"交易对",prop:"coinMarket"}},[r("el-select",{model:{value:e.addForm.coinMarket,callback:function(t){e.$set(e.addForm,"coinMarket",t)},expression:"addForm.coinMarket"}},e._l(e.coinMarket,(function(e,t){return r("el-option",{key:t+"-el-option",attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"24h成交额上限",prop:"turnoverUpper"}},[r("el-input",{model:{value:e.addForm.turnoverUpper,callback:function(t){e.$set(e.addForm,"turnoverUpper",t)},expression:"addForm.turnoverUpper"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"24h成交额下限",prop:"turnoverLower"}},[r("el-input",{model:{value:e.addForm.turnoverLower,callback:function(t){e.$set(e.addForm,"turnoverLower",t)},expression:"addForm.turnoverLower"}})],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.flag=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.enterAdd}},[e._v("确定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{visible:e.total.flag,title:"统计数据"},on:{"update:visible":function(t){return e.$set(e.total,"flag",t)}}},[r("div",{staticStyle:{"font-size":"22px","margin-bottom":"22px"}},[e._v("24h成交额下限($): "+e._s(e.total.turnoverUpper))]),e._v(" "),r("div",{staticStyle:{"font-size":"22px","margin-bottom":"22px"}},[e._v("24h成交额上限($): "+e._s(e.total.turnoverLower))])]),e._v(" "),r("el-dialog",{attrs:{visible:e.edit,title:"编辑交易对类型"},on:{"update:visible":function(t){e.edit=t}}},[r("el-form",{ref:"edit",attrs:{model:e.editForm,"label-width":"120px",rules:e.editRules}},[r("el-form-item",{attrs:{label:"交易对",prop:"coinMarket"}},[r("el-select",{attrs:{disabled:""},model:{value:e.editForm.coinMarket,callback:function(t){e.$set(e.editForm,"coinMarket",t)},expression:"editForm.coinMarket"}},e._l(e.coinMarket,(function(e,t){return r("el-option",{key:t+"-el-option-edit",attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"24h成交额上限",prop:"turnoverUpper"}},[r("el-input",{model:{value:e.editForm.turnoverUpper,callback:function(t){e.$set(e.editForm,"turnoverUpper",t)},expression:"editForm.turnoverUpper"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"24h成交额下限",prop:"turnoverLower"}},[r("el-input",{model:{value:e.editForm.turnoverLower,callback:function(t){e.$set(e.editForm,"turnoverLower",t)},expression:"editForm.turnoverLower"}})],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.edit=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.enterEdit}},[e._v("确定")])],1)],1)],1)},n=[],a=(r("8e6e"),r("456d"),r("ac6a"),r("a481"),r("bd86")),i=(r("96cf"),r("3b8d")),s=r("c249"),l=r("2fee"),u=r("6f79"),c=r("4ec3");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"TradeMarket",components:{Search:s["a"],bTable:l["a"]},data:function(){var e=this,t=function(e,t){return[{required:!0,message:"请"+(t||"输入")+e,trigger:"blur"}]},r=function(t,r,o){var n=t.field;"turnoverUpper"===n&&e.addForm["turnoverLower"]?isNaN(+e.addForm["turnoverUpper"])?o(new Error("请输入数字")):+e.addForm["turnoverUpper"]<+e.addForm["turnoverLower"]?o(new Error("下限值不能超过上限值")):o():"turnoverLower"===n&&(isNaN(+e.addForm["turnoverLower"])?o(new Error("请输入数字")):+e.addForm["turnoverUpper"]<+e.addForm["turnoverLower"]?o(new Error("下限值不能超过上限值")):o())},o=function(t,r,o){var n=t.field;"turnoverUpper"===n&&e.editForm["turnoverLower"]?isNaN(+e.editForm["turnoverUpper"])?o(new Error("请输入数字")):+e.editForm["turnoverUpper"]<+e.editForm["turnoverLower"]?o(new Error("下限值不能超过上限值")):o():"turnoverLower"===n&&(isNaN(+e.editForm["turnoverLower"])?o(new Error("请输入数字")):+e.editForm["turnoverUpper"]<+e.editForm["turnoverLower"]?o(new Error("下限值不能超过上限值")):o())};return{model:{},formConfig:[],tableConfig:u["A"],tableData:[],loading:!1,coinMarket:[],flag:!1,addForm:{coinType:"",coinMarket:"",turnoverUpper:"",turnoverLower:""},coinTypeArr:[{label:"合约",value:0},{label:"币币",value:1}],total:{flag:!1,turnoverUpper:"",turnoverLower:""},rules:{coinType:t("交易类型","选择"),coinMarket:t("交易对","选择"),turnoverUpper:[{required:!0,message:"请输入上限值",trigger:"blur"},{validator:r,trigger:"blur"}],turnoverLower:[{required:!0,message:"请输入下限值",trigger:"blur"},{validator:r,trigger:"blur"}]},editRules:{coinMarket:t("交易对","选择"),turnoverUpper:[{required:!0,message:"请输入上限值",trigger:"blur"},{validator:o,trigger:"blur"}],turnoverLower:[{required:!0,message:"请输入下限值",trigger:"blur"},{validator:o,trigger:"blur"}]},edit:!1,editForm:{coinType:"",turnoverUpper:"",turnoverLower:""},totals:1,pageSize:{currentPage:1,pageSize:10},params:{},coin:[]}},watch:{flag:function(e){if(!e)for(var t in this.addForm)this.addForm[t]=""}},methods:{handlerSeach:function(e){this.params=e,this.currentPage=1,this.getQueryList()},doCalTotal:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,o,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].getTotalStatistics(this.requiredParams(t));case 2:r=e.sent,o=r.data.data,n=o.turnoverLower,a=o.turnoverUpper,i=!0,this.total={turnoverLower:n,turnoverUpper:a,flag:i};case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),add:function(){this.flag=!0},getQueryList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,o,n,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=p({},this.params,{},this.pageSize),e.next=3,c["a"].getQueryList(this.requiredParams(t));case 3:r=e.sent,r&&(o=r.data.data,n=o.records,a=o.total,i=o.currentPage,s=o.size,this.pageSize={currentPage:i,pageSize:s},this.total=a,this.tableData=n);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){return e.updateTimeStart&&(e.updateTimeEnd=this.formatTime(e.updateTimeEnd),e.updateTimeStart=this.formatTime(e.updateTimeStart)),e},formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},enterEdit:function(){var e=this;this.$refs.edit.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,c["a"].setTurnoverUpdate(p({},e.editForm));case 3:o=t.sent,1===o.data.code&&(e.$message.success("修改成功"),e.edit=!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},enterAdd:function(){var e=this;this.$refs.addForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,c["a"].setTurnoverAdd(e.addForm);case 3:o=t.sent,1===o.data.code&&(e.$message.success("添加成功"),e.flag=!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(e){var t=e.fn,r=e.row;"edit"===t&&(this.edit=!0,this.editForm=p({},this.editForm,{},r))},handlerChange:function(e){this.coinMarket=this.coin[e],this.addForm.coinMarket=""},pageSizeChange:function(e){this.pageSize.pageSize=e,this.getQueryList()},goPage:function(e){this.pageSize.currentPage=e,this.getQueryList()},reset:function(){this.param={},this.formConfig.forEach((function(e){e.value="","交易对"===e.label&&(e.list=[])})),this.pageSize.currentPage=1,this.pageSize.pageSize=10}},mounted:function(){var e=this,t=this.$util.getAuthority("TradeMarket",u["y"],u["z"]);this.formConfig=t.val,this.$store.dispatch("common/getSymbolList").then((function(){var t=e.$store.state.common.symbollist.map((function(e){if(e.status)return p({},e,{value:e.label})})).filter((function(e){return e}));console.log(t,"coin1"),e.coin[1]=t})),this.$store.dispatch("common/getSymbolListContract").then((function(){var t=e.$store.state.common.symbollistContract.map((function(e){if(e.status)return p({},e,{value:e.label})})).filter((function(e){return e}));console.log("coin2: ",t),e.coin[0]=t})),this.formConfig[1]["list"]=this.coinTypeArr,this.getQueryList(),this.$watch((function(){return this.formConfig[1].value}),(function(e,t){this.formConfig[2].list=e||0===e?1===e?this.coin[0]:this.coin[1]:[]}))}},v=m,f=r("0c7c"),g=Object(f["a"])(v,o,n,!1,null,null,null);t["default"]=g.exports}}]);