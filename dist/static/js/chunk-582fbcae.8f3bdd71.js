(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-582fbcae"],{3617:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"extract-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{"cal-text":"活动奖金统计",configs:t.searchCofig,"excel-loading":t.excelLoading,"export-excel":t.btnArr.includes("excel"),"cal-loading":t.calLoading,"cal-total":!0},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-exportExcel":t.exportExcel,"do-calTotal":t.calTotal}})],1),t._v(" "),a("div",[a("Btable",{attrs:{"list-loading":t.listLoading,data:t.list,configs:t.configs}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1)])},r=[],s=(a("a481"),a("96cf"),a("3b8d")),n=(a("ac6a"),a("c249")),c=a("2fee"),o=a("2ab6"),u=a("4ec3"),h=a("ca00"),g=a("f21b"),p={name:"Activity",components:{Btable:c["a"],Bsearch:n["a"],iconPage:g["a"]},data:function(){return{listLoading:!1,btnLoading:!1,excelLoading:!1,calLoading:!1,list:[],dataList:[],toDay:"",ago:"",configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,formLabelWidth:"120px",qrcodeShow:!1,btnArr:[]}},mounted:function(){var t=this.$util.getAuthority("Activity",o["a"],o["b"]);this.configs=t.val,this.btnArr=t.btnArr||[],this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(o["c"]),this.getList()},methods:{doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},queryData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.excelLoading=!0,e.isOwn=0,e.appId=0,this.requiredParams(e),Object.assign(e,this.search_params_obj),t.next=7,u["a"].getActivityLists(e);case 7:return a=t.sent,this.excelLoading=!1,t.abrupt("return",a);case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),exportExcel:function(t){this.search_params_obj=t.query;var e=t.num;h["a"].exportData.apply(this,[e])},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},calTotal:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.search_params_obj=e,this.requiredParams(this.search_params_obj),this.calLoading=!0,a={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(a,this.search_params_obj),t.next=7,u["a"].getActivitySum(a);case 7:i=t.sent,i&&(r=i.data.data,r?this.$alert("<p>奖池剩余总额：".concat(r.totalLast,"</p>\n              <p>奖池拨出总额：").concat(r.totalOut,"</p>\n              <p>累计首日充值金额（USDT）：").concat(r.netAmountSum,"</p>\n              <p>累计开仓交易总额USDT：").concat(r.cumulativeTradeAmountSum,"</p>\n              <p>累计奖励到账总额USDT：").concat(r.rewardToAccountSum,"</p>"),"活动奖金统计",{dangerouslyUseHTMLString:!0}).catch((function(){})):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,r,s,n,c,o,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].getActivityLists(e);case 8:a=t.sent,a&&(i=a.data.data,r=i.records,s=i.total,n=i.current,c=i.pages,r.length&&(o={id:"",uid:"小计",userId:"",username:"",firstRechargeTime:"",netAmount:0,reward:0,cumulativeTradeAmount:0,rewardToAccount:0},h=r.reduce((function(t,e){return t.netAmount=t.netAmount+e.netAmount,t.reward=t.reward+e.reward,t.cumulativeTradeAmount=t.cumulativeTradeAmount+e.cumulativeTradeAmount,t.rewardToAccount=t.rewardToAccount+e.rewardToAccount,t}),o),r.push(h)),this.total=s,this.pages=c,this.current_page=n,this.list=r,this.dataList=r),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")},requiredParams:function(t){if(this.$util.isEmptyObject(this.search_params_obj)){var e=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");t.endTime=a.replace(/\//gi,"-"),t.startTime=e.replace(/\//gi,"-"),this.searchCofig[0].value=[e,a]}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))}}},l=p,m=(a("9e08"),a("0c7c")),d=Object(m["a"])(l,i,r,!1,null,null,null);e["default"]=d.exports},"9e08":function(t,e,a){"use strict";var i=a("c993"),r=a.n(i);r.a},c993:function(t,e,a){}}]);