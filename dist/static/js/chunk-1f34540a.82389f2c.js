(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f34540a"],{4334:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"otcOrderPay-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig},on:{"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1)])},s=[],r=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),n=a("c249"),o=a("2fee"),c=a("f21b"),h=a("434a"),u=a("4ec3"),p=a("ca00"),g={name:"OtcOrderPay",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){return{isCURDAuth:!0,listLoading:!1,calLoading:!1,list:[],dataList:[],coinList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:""}},methods:{doHandle:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,i,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.fn,i=e.row,this.row=i,"activation"===a&&this.$confirm("确定激活？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={tradeId:i.recordId},t.next=3,u["a"].setOtcActivationNew(e);case 3:a=t.sent,a&&(s.$message({message:"激活成功",type:"success"}),s.getList());case 5:case"end":return t.stop()}}),t)})))).catch((function(){})),"dialog"===a&&(localStorage.setItem("dialogueRow",JSON.stringify(i)),this.$router.push({path:"/coinPay/dialogueRecordPay"}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},exportExcel:function(){p["a"].exportData.apply(this,[0])},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},formatFloat:function(t){return(t+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3")},calTotal:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,i,s,r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.search_params_obj=e,this.search_params_obj.coinId){t.next=4;break}return this.$message({type:"error",message:"币种必须选择!",duration:2e3}),t.abrupt("return");case 4:return this.calLoading=!0,a={},this.requiredParams(a),Object.assign(a,this.search_params_obj),t.next=10,u["a"].getQueryAdvTradeListSum(a);case 10:i=t.sent,i&&(s=i.data.result,s?(r=this.searchCofig[7]["list"].filter((function(t){return t.value==n.search_params_obj.coinId}))[0].label,this.$alert("<p>币种：".concat(r,"</p><p>总金额：").concat(this.formatFloat(s.sumMoney),"</p><p>总数量：").concat(this.formatFloat(s.sumAmount),"</p><p>总手续费：").concat(this.formatFloat(s.sumFee),"</p>"),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){}))):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize,tradeType:2,appId:3},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].queryAdvTradeListNew(e);case 8:a=t.sent,a&&(i=a.data.data,s=i.records,r=i.total,n=i.current,o=i.pages,s.forEach((function(t){t["isclick"]=4!=parseInt(t["tradeStatus"])&&8!=parseInt(t["tradeStatus"])&&7!=parseInt(t["tradeStatus"])})),this.total=+r,this.pages=+o,this.current_page=+n,this.list=s,this.dataList=s),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t},requiredParams:function(t){var e=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinName&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)){var a="";a=this.coinList.filter((function(t){return t["value"]==e.search_params_obj.coinName}))[0].label,this.search_params_obj.coinName=a}}},mounted:function(){var t=this,e=this.$util.getAuthority("OtcOrder",h["j"],h["k"]);this.configs=e.val,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(h["l"]),this.$store.dispatch("common/getFiatCoinList").then((function(){var e=t.$store.state.common.coinlist,a=e.filter((function(t){return"USDT"==t.label}))||[];t.coinList=a,t.searchCofig[7]["list"]=a})),this.getList()}},m=g,l=(a("500e"),a("0c7c")),d=Object(l["a"])(m,i,s,!1,null,null,null);e["default"]=d.exports},"500e":function(t,e,a){"use strict";var i=a("6363"),s=a.n(i);s.a},6363:function(t,e,a){},7514:function(t,e,a){"use strict";var i=a("5ca1"),s=a("0a49")(5),r="find",n=!0;r in[]&&Array(1)[r]((function(){n=!1})),i(i.P+i.F*n,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(r)},"87f3":function(t,e,a){var i=a("5ca1");i(i.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var i=a("5ca1");i(i.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})}}]);