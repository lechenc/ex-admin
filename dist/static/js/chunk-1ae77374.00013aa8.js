(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ae77374"],{a30d:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"refundRecord-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig,calLoading:t.calLoading,calTotal:!0},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-calTotal":t.calTotal}})],1),t._v(" "),t.btnArr&&t.btnArr.length?a("div",{staticClass:"container-btn"},[t.btnArr.includes("config")?a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.editLine}},[t._v("返佣设置")]):t._e()],1):t._e(),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{attrs:{title:"返佣设置",width:"500px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"cForm",attrs:{model:t.cForm,rules:t.rules}},[a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"一级返佣比例","label-width":t.formLabelWidth,prop:"firstLevelRate"}},[a("el-input",{attrs:{type:"number",placeholder:"请输入"},on:{input:function(e){return t.checkVal("firstLevelRate")}},model:{value:t.cForm.firstLevelRate,callback:function(e){t.$set(t.cForm,"firstLevelRate","string"===typeof e?e.trim():e)},expression:"cForm.firstLevelRate"}},[a("div",{attrs:{slot:"append"},slot:"append"},[t._v("%")])])],1)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"二级返佣比例","label-width":t.formLabelWidth,prop:"secondLevelRate"}},[a("el-input",{attrs:{type:"number",placeholder:"请输入"},on:{input:function(e){return t.checkVal("secondLevelRate")}},model:{value:t.cForm.secondLevelRate,callback:function(e){t.$set(t.cForm,"secondLevelRate","string"===typeof e?e.trim():e)},expression:"cForm.secondLevelRate"}},[a("div",{attrs:{slot:"append"},slot:"append"},[t._v("%")])])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmOp}},[t._v("确 定")])],1)],1)],1)},s=[],i=(a("ac6a"),a("a481"),a("96cf"),a("1da1")),n=a("c249"),o=a("2fee"),c=a("f21b"),l=a("ff53"),u=a("65fc"),h=a("4ec3"),m={name:"RefundRecordNew",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){return{listLoading:!1,isCURDAuth:!0,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",curRow:{},symbollist:[],formLabelWidth:"120px",contractRateArr:{},btnArr:[],dialogFormVisible:!1,btnLoading:!1,cForm:{firstLevelRate:"",secondLevelRate:""},rules:{firstLevelRate:[{required:!0,message:"必填",trigger:"blur"}],secondLevelRate:[{required:!0,message:"必填",trigger:"blur"}]}}},methods:{editLine:function(){var t=this;this.dialogFormVisible=!0;var e=this.contractRateArr,a=e.firstLevelRate,r=e.secondLevelRate;this.$nextTick((function(){t.$refs["cForm"].resetFields(),t.cForm={firstLevelRate:l["a"].times(a,100),secondLevelRate:l["a"].times(r,100)}}))},confirmOp:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs["cForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r,s,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=13;break}if(!(l["a"].plus(e.cForm.firstLevelRate,e.cForm.secondLevelRate)>100)){t.next=4;break}return e.$message({message:"一级返佣比例和二级返佣比例之和不能大于100",type:"error"}),t.abrupt("return");case 4:return r=e.cForm,s=r.firstLevelRate,i=r.secondLevelRate,n={firstLevelRate:l["a"].divide(s,100),secondLevelRate:l["a"].divide(i,100)},e.btnLoading=!0,t.next=9,h["a"].updateContractRate(n);case 9:o=t.sent,o&&(e.$message({message:"操作成功",type:"success"}),e.dialogFormVisible=!1),e.btnLoading=!1,e.getcontractRateList();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkVal:function(t){this.cForm[t]=(this.cForm[t]+"").replace(/[^\d.]/g,""),this.cForm[t]>=100&&(this.cForm[t]=100),this.cForm[t]=(this.cForm[t]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3"),this.cForm[t]<0&&(this.cForm[t]=0)},doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(t){this.current_page=t,this.getList()},calTotal:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.calLoading=!0,a={userType:0},this.requiredParams(a),Object.assign(a,this.search_params_obj),t.next=8,h["a"].nowQueryCommissionSum(a);case 8:r=t.sent,r&&(s=r.data.data,s?this.$alert("<p>手续费金额：".concat(s.originAmount,"</p>\n            <p>用户返佣金额：").concat(s.amount,"</p>"),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){})):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,r,s,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize,userType:0},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,h["a"].getCommissionRecord(e);case 8:a=t.sent,a&&(r=a.data.data,s=r.records,i=r.total,n=r.current,o=r.pages,this.list=s,this.total=i,this.current_page=n,this.pages=o),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getcontractRateList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].getContractRate({});case 2:e=t.sent,e&&(this.contractRateArr=e.data.data||{});case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requiredParams:function(t){var e=this;if(this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var a="";a=this.symbollist.filter((function(t){return t["value"]==e.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=a}this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.today,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t}},mounted:function(){var t=this,e=this.$util.getAuthority("AgentRefundRecordNew",[],[]);this.btnArr=e.btnArr||[]||[],this.configs=u["u"],this.searchCofig=this.$util.clone(u["v"]),this.$store.dispatch("common/getSymbolListContract").then((function(){t.symbollist=t.$store.state.common.symbollistContract,t.searchCofig[4]["list"]=t.$store.state.common.symbollistContract})),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getcontractRateList()}},p=m,d=(a("c69e"),a("2877")),g=Object(d["a"])(p,r,s,!1,null,null,null);e["default"]=g.exports},b52a:function(t,e,a){},c69e:function(t,e,a){"use strict";var r=a("b52a"),s=a.n(r);s.a}}]);