(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16db8395"],{"19de":function(t,e){t.exports=function(t,e,a,i){var s="undefined"!==typeof i?[i,t]:[t],r=new Blob(s,{type:a||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(r,e);else{var n=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(r):window.webkitURL.createObjectURL(r),o=document.createElement("a");o.style.display="none",o.href=n,o.setAttribute("download",e),"undefined"===typeof o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),setTimeout((function(){document.body.removeChild(o),window.URL.revokeObjectURL(n)}),200)}}},"34da":function(t,e,a){"use strict";a("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,i){a.path==t&&(e=i)})),e>=0&&a.splice(e,1)}}}},"5c5c":function(t,e,a){},7854:function(t,e,a){"use strict";var i=a("5c5c"),s=a.n(i);s.a},cf71:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"closeContract-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{calTotal:!0,configs:t.searchCofig,calLoading:t.calLoading,calTextExcel:"快速导出excel",calTotalExcel:t.btnArr.includes("excel"),calLoadingExcel:t.calLoadingExcel,excelLoading:t.excelLoading,exportExcel:t.btnArr.includes("excel")},on:{"do-calTotal":t.calTotal,"do-search":t.doSearch,"do-reset":t.doReset,"do-calTotal-excel":t.calTotalExcel,"do-exportExcel":t.exportExcel}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{staticClass:"agentRebate-dialog",attrs:{title:"统计结果",visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:6}},[t._v("时间:")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v("\n        "+t._s(t.startTime||"无")+"\n      ")]),t._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[t._v(" - ")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v("\n        "+t._s(t.endTime||"无")+"\n      ")])],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:6}},[t._v("用户UID:")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v("\n        "+t._s(t.uid||"无")+"\n      ")])],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:6}},[t._v("币对:")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v("\n        "+t._s(t.coinMarket||"无")+"\n      ")])],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:6}},[t._v("已实现盈利:")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v("\n        "+t._s(t.amountObj.amount||"无")+"\n      ")])],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("知道了")])],1)],1)],1)},s=[],r=(a("ac6a"),a("96cf"),a("3b8d")),n=a("c249"),o=a("2fee"),c=a("f21b"),l=a("e582"),u=a("4ec3"),h=a("34da"),p=a("ff53"),g=a("ca00"),m=a("19de"),d=a.n(m),f={name:"CloseContract",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},mixins:[h["a"]],data:function(){return{dialogVisible:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,symbollist:[],toDay:"",ago:"",getId:0,coinMarket:"",uid:"",startTime:"",endTime:"",amountObj:{},excelLoading:!1,dataList:[],btnArr:[],calLoadingExcel:!1,listLoading:!1,calLoading:!1}},computed:{judgeAmount:function(){return function(t){return t<=-2e5?p["a"].plus(t,14e4):t<=-15e4&&t>-2e5?p["a"].plus(t,1e5):t<=-1e5&&t>-15e4?p["a"].plus(t,7e4):t<=-3e4&&t>-1e5?p["a"].plus(t,3e4):t}}},methods:{calTotalExcel:function(t){var e=this;this.search_params_obj=t;var a={};this.calLoadingExcel=!0,this.requiredParams(a),Object.assign(a,this.search_params_obj),u["a"].apiCloseContractListExport(a).then((function(t){e.calLoadingExcel=!1,d()(t.data,"平仓记录.xlsx")})).catch((function(){e.calLoadingExcel=!1}))},exportExcel:function(t){this.search_params_obj=t.query;var e=t.num;g["a"].exportData.apply(this,[e])},queryData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.excelLoading=!0,this.requiredParams(e),Object.assign(e,this.search_params_obj),t.next=5,u["a"].getClosePositionEntrustPagination(e);case 5:if(a=t.sent,this.excelLoading=!1,!a){t.next=9;break}return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),calTotal:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.uid=e.uid,this.startTime=e.startTime,this.endTime=e.endTime,e.coinMarket&&(a="",a=this.symbollist.filter((function(t){return t["value"]==e.coinMarket}))[0].label,this.coinMarket=a,e.coinMarket=a),i={pageNum:this.current_page,pageSize:this.pageSize},!(parseFloat(e.maxPositionAveragePrice)<parseFloat(e.minPositionAveragePrice))){t.next=7;break}return t.abrupt("return",this.$message.error("区间最小值不得大于最大值"));case 7:if(!(parseFloat(e.maxRateReturn)<parseFloat(e.minRateReturn))){t.next=9;break}return t.abrupt("return",this.$message.error("区间最小值不得大于最大值"));case 9:return this.dialogVisible=!0,e.startTime&&(e.endTime=this.formatTime(e.endTime),e.startTime=this.formatTime(e.startTime)),Object.assign(i,e),t.next=14,u["a"].closeContractTotal(i);case 14:s=t.sent,this.amountObj=s.data.data;case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]="","text_rank"==t.type&&(t["value"]=[])})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].getClosePositionEntrustPagination(e);case 8:a=t.sent,a&&(i=a.data.data,s=i.records,r=i.total,n=i.current,o=i.pages,this.total=r,this.pages=o,this.current_page=n,this.list=s,this.dataList=s),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requiredParams:function(t){var e=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.today,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var a="";a=this.symbollist.filter((function(t){return t["value"]==e.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=a}},formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t},getSymbolList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("common/getSymbolListContract").then((function(){e.symbollist=e.$store.state.common.symbollistContract,e.searchCofig[4]["list"]=e.symbollist}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this.$util.getAuthority("CloseContract",l["n"],[]);this.btnArr=t.btnArr||[]||[],this.configs=l["n"],this.searchCofig=this.$util.clone(l["o"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getId=this.$route.query.uid,this.getId?(this.searchCofig[1].value=this.getId,this.search_params_obj={uid:this.getId},this.getList(),this.getSymbolList()):(this.getList(),this.getSymbolList())}},b=f,_=(a("7854"),a("0c7c")),v=Object(_["a"])(b,i,s,!1,null,null,null);e["default"]=v.exports}}]);