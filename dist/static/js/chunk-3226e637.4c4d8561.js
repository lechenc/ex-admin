(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3226e637"],{"3b7c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"agentFinancialFlow-container"},[e("div",{staticClass:"container-top"},[e("Bsearch",{attrs:{configs:t.searchCofig},on:{"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),e("div",[e("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs}})],1),t._v(" "),e("div",{staticClass:"container-footer"},[e("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1)])},i=[],r=(e("a481"),e("96cf"),e("3b8d")),n=(e("ac6a"),e("c249")),o=e("2fee"),c=e("f21b"),h=e("65fc"),l=e("4ec3"),u={name:"AgentFinancialFlow",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){return{showType:1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",curRow:{}}},methods:{selectChange:function(t){1==t?(this.searchCofig[2].value="",this.searchCofig[2].list=[{label:"提币待审核",value:1},{label:"提币成功",value:2},{label:"提币失败",value:3},{label:"合约返佣结算",value:95},{label:"合约返佣",value:101}],this.showType=1):2==t&&(this.searchCofig[2].value="",this.searchCofig[2].list=[{label:"团队队长返佣",value:1}],this.showType=2)},doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(t){this.current_page=t,this.getList()},getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a,e,s,i,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return a={pageNum:this.current_page,pageSize:this.pageSize,balanceType:1},this.requiredParams(a),Object.assign(a,this.search_params_obj),this.listLoading=!0,t.next=8,l["a"].getBusinessAndAgentCoinChange(a);case 8:e=t.sent,e&&(s=e.data.data,i=s.records,r=s.total,n=s.current,o=s.pages,this.list=i,this.total=r,this.current_page=n,this.pages=o,this.listLoading=!1);case 10:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),requiredParams:function(t){if(this.$util.isEmptyObject(this.search_params_obj)){var a=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),e=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");t.endTime=e.replace(/\//gi,"-"),t.startTime=a.replace(/\//gi,"-"),this.searchCofig[0].value=[a,e]}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")}},mounted:function(){this.configs=h["a"],this.searchCofig=this.$util.clone(h["b"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}},g=u,p=(e("7529"),e("0c7c")),m=Object(p["a"])(g,s,i,!1,null,null,null);a["default"]=m.exports},7529:function(t,a,e){"use strict";var s=e("b3b9"),i=e.n(s);i.a},b3b9:function(t,a,e){}}]);