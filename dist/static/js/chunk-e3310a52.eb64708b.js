(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3310a52"],{"521d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"generalEntrustContract-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig,calLoading:t.calLoading,calTotal:!0,excelLoading:t.excelLoading,exportExcel:t.btnArr.includes("excel")},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-calTotal":t.calTotal,"do-exportExcel":t.exportExcel}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1)])},s=[],i=(a("ac6a"),a("96cf"),a("3b8d")),n=a("c249"),o=a("2fee"),c=a("f21b"),h=a("e582"),u=a("4ec3"),p=a("ca00"),l={name:"GeneralEntrustContract",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){return{listLoading:!1,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,symbollist:[],toDay:"",ago:"",excelLoading:!1,dataList:[],btnArr:[]}},methods:{exportExcel:function(t){this.search_params_obj=t.query;var e=t.num;p["a"].exportData.apply(this,[e])},queryData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.excelLoading=!0,this.requiredParams(e),Object.assign(e,this.search_params_obj),t.next=5,u["a"].getContractEntrustPagination(e);case 5:if(a=t.sent,this.excelLoading=!1,!a){t.next=9;break}return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doHandle:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.fn,r=e.row,"onekeyRepeal"===a&&this.$confirm("确定一键撤销吗？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={uid:r.uid,coinMarket:r.coinMarket},t.next=3,u["a"].apiGeneralEntrustContractOneKeyRepeal(e);case 3:a=t.sent,a&&(s.$message({type:"success",message:"一键撤销成功!"}),s.getList());case 5:case"end":return t.stop()}}),t)})))).catch((function(){}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},calTotal:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,s,i,n,o,c,h=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.search_params_obj.startTime){t.next=5;break}return this.$message({type:"error",message:"时间必须选择!",duration:2e3}),t.abrupt("return");case 5:return this.calLoading=!0,a={},this.requiredParams(a),Object.assign(a,this.search_params_obj),t.next=11,u["a"].getContractEntrustTotal(a);case 11:r=t.sent,r&&(s=r.data.data,s?(i="",this.search_params_obj.type&&(n=this.searchCofig[5]["list"].filter((function(t){return t.value==h.search_params_obj.type}))[0].label,i+="<p>委托方向：".concat(n,"</p>")),this.search_params_obj.priceType&&(o=this.searchCofig[9]["list"].filter((function(t){return t.value==h.search_params_obj.priceType}))[0].label,i+="<p>委托价类型：".concat(o,"</p>")),this.search_params_obj.coinMarket&&(c=this.search_params_obj.coinMarket,i+="<p>币对：".concat(c,"</p>")),i+="<p>委托量：".concat(s.entrustAmount,"</p><p>保证金：").concat(s.entrustDeposit||0,"</p>"),this.$alert(i,"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){}))):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,r,s,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].getContractEntrustPagination(e);case 8:a=t.sent,a&&(r=a.data.data,s=r.records,i=r.total,n=r.current,o=r.pages,this.total=i,this.pages=o,this.current_page=n,this.list=s,this.dataList=s),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requiredParams:function(t){var e=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.today,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var a="";a=this.symbollist.filter((function(t){return t["value"]==e.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=a}},formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t},getSymbolList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("common/getSymbolListContract").then((function(){e.symbollist=e.$store.state.common.symbollistContract,e.searchCofig[3]["list"]=e.symbollist}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this.$util.getAuthority("GeneralEntrustContract",h["T"],h["U"]);this.configs=t.val,this.btnArr=t.btnArr||[]||[],this.searchCofig=this.$util.clone(h["V"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getSymbolList()}},g=l,m=(a("5303"),a("0c7c")),d=Object(m["a"])(g,r,s,!1,null,null,null);e["default"]=d.exports},5303:function(t,e,a){"use strict";var r=a("5457"),s=a.n(r);s.a},5457:function(t,e,a){}}]);