(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65cc723d"],{"63a7":function(t,e,r){},a30d:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"refundRecord-container"},[r("div",{staticClass:"container-btn"},[r("el-radio-group",{staticStyle:{"margin-bottom":"30px"},on:{change:t.orderTypeChange},model:{value:t.orderType,callback:function(e){t.orderType=e},expression:"orderType"}},[r("el-radio-button",{attrs:{label:1}},[t._v("合约")]),t._v(" "),r("el-radio-button",{attrs:{label:3}},[t._v("币汇")])],1)],1),t._v(" "),r("div",{staticClass:"container-top"},[r("Bsearch",{ref:"Bsearch",attrs:{configs:t.searchCofig,calLoading:t.calLoading,calTotal:!0},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-calTotal":t.calTotal}})],1),t._v(" "),t.btnArr&&t.btnArr.length?r("div",{staticClass:"container-btn"},[t.btnArr.includes("config")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.editLine}},[t._v("返佣设置")]):t._e()],1):t._e(),t._v(" "),r("div",[r("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs}})],1),t._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1),t._v(" "),r("el-dialog",{attrs:{title:"返佣设置",width:"500px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("el-form",{ref:"cForm",attrs:{model:t.cForm,rules:t.rules}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"一级返佣比例","label-width":t.formLabelWidth,prop:"firstLevelRate"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入"},on:{input:function(e){return t.checkVal("firstLevelRate")}},model:{value:t.cForm.firstLevelRate,callback:function(e){t.$set(t.cForm,"firstLevelRate","string"===typeof e?e.trim():e)},expression:"cForm.firstLevelRate"}},[r("div",{attrs:{slot:"append"},slot:"append"},[t._v("%")])])],1)],1)],1),t._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"二级返佣比例","label-width":t.formLabelWidth,prop:"secondLevelRate"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入"},on:{input:function(e){return t.checkVal("secondLevelRate")}},model:{value:t.cForm.secondLevelRate,callback:function(e){t.$set(t.cForm,"secondLevelRate","string"===typeof e?e.trim():e)},expression:"cForm.secondLevelRate"}},[r("div",{attrs:{slot:"append"},slot:"append"},[t._v("%")])])],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmOp}},[t._v("确 定")])],1)],1)],1)},s=[],i=(r("ac6a"),r("a481"),r("96cf"),r("3b8d")),n=r("c249"),o=r("2fee"),c=r("f21b"),l=r("ff53"),h=r("65fc"),u=r("4ec3"),m={name:"RefundRecordNew",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){return{listLoading:!1,isCURDAuth:!0,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",curRow:{},symbollist:[],formLabelWidth:"120px",contractRateArr:{},btnArr:[],dialogFormVisible:!1,btnLoading:!1,cForm:{firstLevelRate:"",secondLevelRate:""},rules:{firstLevelRate:[{required:!0,message:"必填",trigger:"blur"}],secondLevelRate:[{required:!0,message:"必填",trigger:"blur"}]},orderType:1,symbollistCoinForex:[]}},methods:{getSymbolListContract:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("common/getSymbolListContract").then((function(){e.symbollist=e.$store.state.common.symbollistContract,e.searchCofig[4]["list"]=e.$store.state.common.symbollistContract}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSymbolListCoinForex:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("common/getCoinForexList").then((function(){e.symbollistCoinForex=e.$store.state.common.coinForexList}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),orderTypeChange:function(t){this.searchCofig[4]["value"]="",this.$refs.Bsearch.doSearch(),1==t?this.searchCofig[4]["list"]=this.symbollistContract:3==t&&(this.searchCofig[4]["list"]=this.symbollistCoinForex)},editLine:function(){var t=this;this.dialogFormVisible=!0;var e=this.contractRateArr,r=e.firstLevelRate,a=e.secondLevelRate;this.$nextTick((function(){t.$refs["cForm"].resetFields(),t.cForm={firstLevelRate:l["a"].times(r,100),secondLevelRate:l["a"].times(a,100)}}))},confirmOp:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs["cForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,s,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=13;break}if(!(l["a"].plus(e.cForm.firstLevelRate,e.cForm.secondLevelRate)>100)){t.next=4;break}return e.$message({message:"一级返佣比例和二级返佣比例之和不能大于100",type:"error"}),t.abrupt("return");case 4:return a=e.cForm,s=a.firstLevelRate,i=a.secondLevelRate,n={firstLevelRate:l["a"].divide(s,100),secondLevelRate:l["a"].divide(i,100)},e.btnLoading=!0,t.next=9,u["a"].updateContractRate(n);case 9:o=t.sent,o&&(e.$message({message:"操作成功",type:"success"}),e.dialogFormVisible=!1),e.btnLoading=!1,e.getcontractRateList();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkVal:function(t){this.cForm[t]=(this.cForm[t]+"").replace(/[^\d.]/g,""),this.cForm[t]>=100&&(this.cForm[t]=100),this.cForm[t]=(this.cForm[t]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3"),this.cForm[t]<0&&(this.cForm[t]=0)},doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.orderType=1,this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(t){this.current_page=t,this.getList()},calTotal:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.calLoading=!0,r={userType:0,orderType:this.orderType},this.requiredParams(r),Object.assign(r,this.search_params_obj),t.next=8,u["a"].nowQueryCommissionSum(r);case 8:a=t.sent,a&&(s=a.data.data,s?this.$alert("<p>手续费金额：".concat(s.originAmount,"</p>\n            <p>用户返佣金额：").concat(s.amount,"</p>"),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){})):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,a,s,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize,userType:0,orderType:this.orderType},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].getCommissionRecord(e);case 8:r=t.sent,r&&(a=r.data.data,s=a.records,i=a.total,n=a.current,o=a.pages,this.list=s,this.total=i,this.current_page=n,this.pages=o),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getcontractRateList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].getContractRate({});case 2:e=t.sent,e&&(this.contractRateArr=e.data.data||{});case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requiredParams:function(t){var e=this;if(this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var r="";r=this.symbollist.filter((function(t){return t["value"]==e.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=r}this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.today,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t}},mounted:function(){var t=this.$util.getAuthority("AgentRefundRecordNew",[],[]);this.btnArr=t.btnArr||[]||[]||[],this.configs=h["C"],this.searchCofig=this.$util.clone(h["D"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getcontractRateList(),this.getSymbolListContract(),this.getSymbolListCoinForex()}},p=m,d=(r("c69e"),r("0c7c")),g=Object(d["a"])(p,a,s,!1,null,null,null);e["default"]=g.exports},c69e:function(t,e,r){"use strict";var a=r("63a7"),s=r.n(a);s.a}}]);