(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1610ebbc"],{"2e08":function(t,a,e){var r=e("9def"),i=e("9744"),s=e("be13");t.exports=function(t,a,e,n){var o=String(s(t)),c=o.length,h=void 0===e?" ":String(e),u=r(a);if(u<=c||""==h)return o;var p=u-c,g=i.call(h,Math.ceil(p/h.length));return g.length>p&&(g=g.slice(0,p)),n?g+o:o+g}},3465:function(t,a,e){},"34da":function(t,a,e){"use strict";e("ac6a");a["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var a=-1,e=this.$store.state.app.tagsList;e.forEach((function(e,r){e.path==t&&(a=r)})),a>=0&&e.splice(a,1)}}}},9744:function(t,a,e){"use strict";var r=e("4588"),i=e("be13");t.exports=function(t){var a=String(i(this)),e="",s=r(t);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(a+=a))1&s&&(e+=a);return e}},a744:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"coinContract-container"},[e("el-row",{staticClass:"sac-row"},[e("el-col",{attrs:{span:4}},[e("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(a){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),e("div",{staticClass:"container-top"},[e("Bsearch",{attrs:{calLoading:t.calLoading,calTotal:!0,calText:"合计统计",configs:t.searchCofig},on:{"do-calTotal":t.calTotal,"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),e("div",[e("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs}})],1),t._v(" "),e("div",{staticClass:"container-footer"},[e("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1)],1)},i=[],s=(e("a481"),e("ac6a"),e("96cf"),e("1da1")),n=e("c249"),o=e("2fee"),c=e("f21b"),h=e("e582"),u=e("4ec3"),p=e("ff53"),g=(e("34da"),e("ae7b")),l=e("ca00"),f={name:"EarningsRecord",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"],BTwoRangeChoose:g["a"]},data:function(){return{toDay:"",ago:"",btnArr:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,coin_List:[],calLoading:!1}},methods:{calTotal:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var e,r,i,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.search_params_obj=a,this.calLoading=!0,e={},this.requiredParams(e),Object.assign(e,this.search_params_obj),t.next=7,u["a"].apiGetearningsRecordTotal(e);case 7:r=t.sent,r&&(i=r.data.data,i?(s=i.profitLossTotal,n=i.commissionTotal,this.$alert("<p>时间段：".concat(this.search_params_obj.startTime," - ").concat(this.search_params_obj.endTime,"</p>\n            <p>平仓合约平仓盈亏：").concat(s,"</p>\n            <p>平台手续费返佣：").concat(n,"</p>\n            <p>变动资产金额：").concat(p["a"].plus(s,n),"</p>\n\n            "),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){}))):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 10:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),doHandle:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.fn,a.row;case 1:case"end":return t.stop()}}),t)})));function a(a){return t.apply(this,arguments)}return a}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.toDay,this.ago],this.getList()},goPage:function(t){this.current_page=t,this.getList()},percentToNum:function(t){return-1!==(t+"").indexOf("%")&&(t=t.replace(/\%/,"")),p["a"].divide(t,100)},numToPercent:function(t){return p["a"].times(t,100)},formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")},requiredParams:function(t){var a=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(this.searchCofig[0].value=[this.toDay,this.ago],t.endTime=this.ago.replace(/\//gi,"-"),t.startTime=this.toDay.replace(/\//gi,"-")),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var e="";e=this.coin_List.filter((function(t){return t["value"]==a.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=e}},getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a,e,r,i,s,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return a={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(this.search_params_obj),Object.assign(a,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].getEarningsRecordList(a);case 8:e=t.sent,e&&(r=e.data.data,i=r.records,s=r.total,n=r.current,o=r.pages,this.total=s,this.pages=o,this.current_page=n,this.list=i),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.configs=h["N"],this.searchCofig=this.$util.clone(h["O"]),this.toDay=(new Date).getTime(),this.ago=(new Date).getTime(),this.toDay=this.toDay-6048e5,this.toDay=l["a"].GMTToStrZero(this.toDay),this.ago=l["a"].GMTToStr(this.ago),this.getList();case 8:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()},m=f,d=(e("d350"),e("2877")),_=Object(d["a"])(m,r,i,!1,null,null,null);a["default"]=_.exports},d350:function(t,a,e){"use strict";e("3465")},f576:function(t,a,e){"use strict";var r=e("5ca1"),i=e("2e08"),s=e("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);r(r.P+r.F*n,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})}}]);