(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-738b408b"],{"34da":function(t,e,a){"use strict";a("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,i){a.path==t&&(e=i)})),e>=0&&a.splice(e,1)}}}},"66eb":function(t,e,a){},a744:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"coinContract-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{statistics:!0,configs:t.searchCofig},on:{"do-estimate":t.estimate,"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{attrs:{title:"统计结果",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("div",{staticClass:"earningsRecordDialog"},[a("span",[t._v("时间段: "+t._s(this.myObj.startTime)+"-"+t._s(this.myObj.endTime)+" ")]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("币对: "+t._s(this.myObj.coinMarket)+" ")]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("开仓手续费:  "+t._s(this.dialogObj.openFee))]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("平仓手续费:  "+t._s(this.dialogObj.closeFee))]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("爆仓平多:  "+t._s(this.dialogObj.explosiveWarehousesLong))]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("爆仓平空:  "+t._s(this.dialogObj.explosiveWarehousesShort))]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("资金费用:  "+t._s(this.dialogObj.assetFee))]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("平空:  "+t._s(this.dialogObj.closeShort))]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("平多:  "+t._s(this.dialogObj.closeLong))]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("返佣 : "+t._s(this.dialogObj.commission))])],1)])],1)},s=[],r=(a("ac6a"),a("a481"),a("96cf"),a("3b8d")),n=a("c249"),o=a("2fee"),c=a("f21b"),m=a("e582"),h=a("4ec3"),u=a("ff53"),l=(a("34da"),a("ae7b")),d={name:"EarningsRecord",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"],BTwoRangeChoose:l["a"]},data:function(){return{dialogObj:{},myObj:{coinMarket:"",startTime:"",endTime:""},toDay:"",ago:"",modeOfCostOptions:[{value:"1",label:"正常开启"},{value:"0",label:"关闭"},{value:"2",label:"多空均收"}],btnArr:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,chainArr:[],coin_List:[],formLabelWidth:"150px",dialogFormVisible:!1,centerDialogVisible:!1,dForm:{id:"",gear:"",coinMarket:"",maximumLeverage:"",minPositionAmount:"",maxPositionAmount:"",minimumInitialMargin:"",maintenanceMarginRatio:""},jform:{},formName:"新增币种",drules:{coinMarket:[{required:!0,message:"必填",trigger:"blur"}],basicInterestRate:[{required:!0,message:"必填",trigger:"blur"}],premiumRateMin:[{required:!0,message:"必填",trigger:"blur"}],premiumRateMax:[{required:!0,message:"必填",trigger:"blur"}],capitalInterestRateMin:[{required:!0,message:"必填",trigger:"blur"}],capitalInterestRateMax:[{required:!0,message:"必填",trigger:"blur"}],modeOfCost:[{required:!0,message:"必填",trigger:"blur"}]}}},methods:{estimate:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,i,s,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.coinMarket){t.next=2;break}return t.abrupt("return",this.$message.error("币对必须选择"));case 2:return a="",a=this.coin_List.filter((function(t){return t["value"]==e.coinMarket}))[0].label,i=this.search_params_obj,s=i.startTime,r=i.endTime,this.myObj={coinMarket:a,startTime:s,endTime:r},n={coinMarket:a},Object.assign(n,this.search_params_obj),t.next=10,h["a"].getEarningsRecordTotal(n);case 10:o=t.sent,o&&(this.dialogObj=o.data.data,this.dialogFormVisible=!0);case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addGear:function(){var t=this;this.formName="添加档位",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["twoChoose"].resetValue(),t.$refs["dForm"].resetFields(),t.dForm={id:"",coinMarket:"",basicInterestRate:"",premiumRateMin:"",premiumRateMax:"",capitalInterestRateMin:"",capitalInterestRateMax:"",modeOfCost:""}}))},checkVal:function(t,e){"minimumInitialMargin"!==t&&"maintenanceMarginRatio"!==t||(this.dForm[t]=(this.dForm[t]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/,"$1$2.$3")),e&&(this.dForm[t]=this.dForm[t].replace(/[^\d]/g,"")),this.dForm[t]<0&&(this.dForm[t]=0)},doHandle:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fn,e.row;case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[1].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(t){this.current_page=t,this.getList()},percentToNum:function(t){return-1!==(t+"").indexOf("%")&&(t=t.replace(/\%/,"")),u["a"].divide(t,100)},numToPercent:function(t){return u["a"].times(t,100)},formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")},requiredParams:function(t){var e=this;if(this.$util.isEmptyObject(this.search_params_obj)){var a=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),i=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[1].value=[a,i],t.endTime=i.replace(/\//gi,"-"),t.startTime=a.replace(/\//gi,"-")}if(this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var s="";s=this.coin_List.filter((function(t){return t["value"]==e.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=s}},getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(this.search_params_obj),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,h["a"].getEarningsRecordList(e);case 8:a=t.sent,a&&(i=a.data.data,s=i.records,r=i.total,n=i.current,o=i.pages,this.total=r,this.pages=o,this.current_page=n,this.list=s),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.configs=m["N"],this.searchCofig=this.$util.clone(m["O"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.$store.dispatch("common/getSymbolListContract").then((function(){e.searchCofig[0]["list"]=e.$store.state.common.symbollistContract,e.coin_List=e.$store.state.common.symbollistContract})),this.getList();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},g=d,p=(a("d350"),a("0c7c")),_=Object(p["a"])(g,i,s,!1,null,null,null);e["default"]=_.exports},d350:function(t,e,a){"use strict";var i=a("66eb"),s=a.n(i);s.a}}]);