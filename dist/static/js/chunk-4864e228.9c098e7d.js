(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4864e228"],{"2e08":function(t,e,a){var r=a("9def"),s=a("9744"),i=a("be13");t.exports=function(t,e,a,n){var o=String(i(t)),c=o.length,h=void 0===a?" ":String(a),u=r(e);if(u<=c||""==h)return o;var p=u-c,g=s.call(h,Math.ceil(p/h.length));return g.length>p&&(g=g.slice(0,p)),n?g+o:o+g}},"5aeb":function(t,e,a){"use strict";a("9323")},7514:function(t,e,a){"use strict";var r=a("5ca1"),s=a("0a49")(5),i="find",n=!0;i in[]&&Array(1)[i]((function(){n=!1})),r(r.P+r.F*n,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"87f3":function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9323:function(t,e,a){},9744:function(t,e,a){"use strict";var r=a("4588"),s=a("be13");t.exports=function(t){var e=String(s(this)),a="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(a+=e);return a}},ccc4:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"otcOrder-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{calTotal:!0,configs:t.searchCofig,excelLoading:t.excelLoading,exportExcel:t.btnArr.includes("excel")},on:{"do-calTotal":t.calTotal,"do-search":t.doSearch,"do-reset":t.doReset,"do-exportExcel":t.exportExcel}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1)])},s=[],i=(a("a481"),a("ac6a"),a("96cf"),a("1da1")),n=a("c249"),o=a("2fee"),c=a("f21b"),h=a("f556"),u=a("4ec3"),p=a("ca00"),g={name:"OtcOrder",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){return{isCURDAuth:!0,listLoading:!1,calLoading:!1,list:[],dataList:[],coinList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",excelLoading:!1,btnArr:[]}},methods:{exportExcel:function(t){this.search_params_obj=t.query;var e=t.num;p["a"].exportData.apply(this,[e])},queryData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.excelLoading=!0,this.requiredParams(e),Object.assign(e,this.search_params_obj),a={tradeType:0,appId:0},Object.assign(e,a),t.next=7,u["a"].queryAdvTradeListNew(e);case 7:return r=t.sent,this.excelLoading=!1,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doHandle:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.fn,r=e.row,this.row=r,"activation"===a&&this.$confirm("确定激活？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={tradeId:r.recordId},t.next=3,u["a"].setOtcActivationNew(e);case 3:a=t.sent,a&&(s.$message({message:"激活成功",type:"success"}),s.getList());case 5:case"end":return t.stop()}}),t)})))).catch((function(){})),"dialog"===a&&(localStorage.setItem("dialogueRow",JSON.stringify(r)),this.$router.push({path:"/fiat/dialogueRecord"}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},formatFloat:function(t){return(t+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3")},calTotal:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,s,i,n,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.calLoading){t.next=2;break}return t.abrupt("return");case 2:if(this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.search_params_obj.coinName){t.next=7;break}return this.$message({type:"error",message:"币种必须选择!",duration:2e3}),t.abrupt("return");case 7:if(this.search_params_obj.advertType){t.next=10;break}return this.$message({type:"error",message:"广告类型必须选择!",duration:2e3}),t.abrupt("return");case 10:return this.calLoading=!0,a={tradeType:0},this.requiredParams(a),Object.assign(a,this.search_params_obj),t.next=16,u["a"].getQueryAdvTradeListSum(a);case 16:r=t.sent,r?(s=r.data.data,s&&(i="<p>币种：".concat(this.search_params_obj.coinName,"</p>"),(this.search_params_obj.advertType||0==this.search_params_obj.advertType)&&(n=this.searchCofig[6]["list"].filter((function(t){return t.value==o.search_params_obj.advertType}))[0].label,i+="<p>广告类型：".concat(n,"</p>")),i+="<p>总数量：".concat(s.sumAmount,"</p><p>总金额：").concat(s.sumMoney,"</p>"),this.$alert(i,"统计数据",{dangerouslyUseHTMLString:!0}).catch((function(){})))):this.$message({type:"error",message:"数据列表为空!"}),this.calLoading=!1;case 19:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,r,s,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize,tradeType:0,appId:0},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].queryAdvTradeListNew(e);case 8:a=t.sent,a&&(r=a.data.data,s=r.records,i=r.total,n=r.current,o=r.pages,s.forEach((function(t){t["isclick"]=4!=parseInt(t["tradeStatus"])&&7!=parseInt(t["tradeStatus"])&&8!=parseInt(t["tradeStatus"])})),this.total=+i,this.pages=+o,this.current_page=+n,this.list=s,this.dataList=s),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t},requiredParams:function(t){var e=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinName&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)){var a="";a=this.coinList.filter((function(t){return t["value"]==e.search_params_obj.coinName}))[0].label,this.search_params_obj.coinName=a}}},mounted:function(){var t=this,e=this.$util.getAuthority("OtcOrder",h["L"],h["M"]);this.btnArr=e.btnArr||[],this.configs=e.val,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(h["N"]),this.$store.dispatch("common/getFiatCoinList").then((function(){t.coinList=t.$store.state.common.fiatcoinlist,t.searchCofig[7]["list"]=t.$store.state.common.fiatcoinlist})),this.getList()}},m=g,d=(a("5aeb"),a("2877")),l=Object(d["a"])(m,r,s,!1,null,null,null);e["default"]=l.exports},f576:function(t,e,a){"use strict";var r=a("5ca1"),s=a("2e08"),i=a("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*n,"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})}}]);