(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f27b6c"],{"180e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"transferPay-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig},on:{"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"订单号","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.orderNo))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"转入UID","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.uid))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"转出UID","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.toUid))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.coinName))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币数量","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.amount))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手续费","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.fee))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"到账数量","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.dealAmount))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"转出地址","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.fromAddress))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"转入地址","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.toAddress))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"创建时间","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.createTime))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"初审时间","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.firstAuditTime))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"审核人","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.firstAuditUserName))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"状态","label-width":t.formLabelWidth}},[t._v(t._s(t.tradeStatusObj[t.curRow.tradeStatus]))])],1)],1)],1),t._v(" "),a("div",{staticClass:"middle",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},r=[],s=(a("ac6a"),a("96cf"),a("3b8d")),o=a("c249"),n=a("2fee"),l=a("f21b"),c=a("434a"),h=a("4ec3"),u=a("ca00"),m={name:"TransferPay",components:{Btable:n["a"],Bsearch:o["a"],iconPage:l["a"]},data:function(){return{tradeStatusObj:{0:"转账中",1:"成功"},curRow:{},formLabelWidth:"100px",dialogTitle:"",listLoading:!1,excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",excelTitle:"划转记录列表",coinList:[],dialogVisible:!1}},methods:{doHandle:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0://console.log(e),a=e.fn,i=e.row,this.curRow=i,"detail"===a&&(this.dialogTitle="查看详情",this.dialogVisible=!0);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.getList(),//console.log(this.searchCofig)},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],//console.log(this.searchCofig[0].value),this.getList()},exportExcel:function(t){this.search_params_obj=t.query;var e=t.num;u["a"].exportData.apply(this,[e])},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,r,s,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,h["a"].getCPTransferPage(e);case 8:a=t.sent,a&&(i=a.data.data,r=i.records,s=i.total,o=i.current,n=i.pages,this.total=s,this.pages=n,this.current_page=o,this.list=r,this.dataList=r,this.listLoading=!1);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t},queryData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.excelLoading=!0,this.requiredParams(e),Object.assign(e,this.search_params_obj),t.next=5,h["a"].getCPTransferPage(e);case 5:return a=t.sent,this.excelLoading=!1,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),requiredParams:function(t){this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))}},mounted:function(){var t=this;this.configs=c["o"],this.searchCofig=this.$util.clone(c["p"]),this.$store.dispatch("common/getCoinList").then((function(){var e=t.$store.state.common.coinlist,a=e.filter((function(t){return"USDT"==t.label}))||[];t.searchCofig[3]["list"]=a,t.coinList=a})),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}},d=m,f=(a("74a4"),a("0c7c")),g=Object(f["a"])(d,i,r,!1,null,null,null);e["default"]=g.exports},"74a4":function(t,e,a){"use strict";var i=a("754e"),r=a.n(i);r.a},7514:function(t,e,a){"use strict";var i=a("5ca1"),r=a("0a49")(5),s="find",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(s)},"754e":function(t,e,a){},"87f3":function(t,e,a){var i=a("5ca1");i(i.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var i=a("5ca1");i(i.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})}}]);