(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3632cf20"],{"435b":function(t,e,a){"use strict";var i=a("ffe8"),s=a.n(i);s.a},b976:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"agentPlacesConfigs-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig,calLoading:t.calLoading},on:{"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{attrs:{title:"立即发放代理名额",width:"550px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"cForm",attrs:{model:t.cForm,rules:t.rules}},[a("el-form-item",{staticClass:"center-item",attrs:{label:"需要发放名额的代理或商务UID",prop:"uidList","label-width":t.labelWidth}},[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入UID,以逗号隔开"},on:{input:function(e){return t.checkVal2("uidList")}},model:{value:t.cForm.uidList,callback:function(e){t.$set(t.cForm,"uidList",e)},expression:"cForm.uidList"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"center-item",attrs:{label:"发放可创建高额返佣代理名额次数",prop:"quotaCount","label-width":t.labelWidth}},[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(e){return t.checkVal("quotaCount","noDot")}},model:{value:t.cForm.quotaCount,callback:function(e){t.$set(t.cForm,"quotaCount",e)},expression:"cForm.quotaCount"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmOp}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"详情",width:"600px",visible:t.dialogDetailVisible},on:{"update:visible":function(e){t.dialogDetailVisible=e}}},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:10}}),t._v(" "),a("el-col",{staticStyle:{"font-weight":"700"},attrs:{span:8}},[t._v(" 发放次数："+t._s(t.curRow.quotaCount))]),t._v(" "),a("el-col",{staticStyle:{"font-weight":"700"},attrs:{span:6}},[t._v(" 使用次数："+t._s(t.curRow.useCount))])],1),t._v(" "),a("Btable",{attrs:{maxHeight:"300px",listLoading:t.detaiLlistLoading,data:t.detailList,configs:t.detailConfigs}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogDetailVisible=!1}}},[t._v("我知道了")])],1)],1)],1)},s=[],r=(a("ac6a"),a("a481"),a("28a5"),a("96cf"),a("3b8d")),o=a("c249"),n=a("2fee"),c=a("f21b"),l=a("65fc"),u=a("4ec3"),h={name:"AgentPlacesConfigs",components:{Btable:n["a"],Bsearch:o["a"],iconPage:c["a"]},data:function(){return{labelWidth:"130px",listLoading:!1,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",curRow:{},symbollist:[],contractRateArr:{},btnArr:[],dialogFormVisible:!1,dialogDetailVisible:!1,btnLoading:!1,cForm:{},rules:{quotaCount:[{required:!0,message:"必填",trigger:"blur"}],uidList:[{required:!0,message:"必填",trigger:"blur"}]},detaiLlistLoading:!1,detailList:[],detailConfigs:[]}},methods:{doHandle:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,i,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.fn,i=e.row,"details"!==a){t.next=10;break}return this.detailList=[],this.dialogDetailVisible=!0,this.curRow=i,s={agentQuotaRecordId:i.id},t.next=8,u["a"].apiGetAgentPlacesConfigsDetalsById(s);case 8:r=t.sent,r&&(this.detailList=r.data.data);case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addVip:function(){var t=this;this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["cForm"].resetFields(),t.cForm={quotaCount:"",uidList:""}}))},confirmOp:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs["cForm"].validate(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var i,s,r,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=9;break}return i=e.cForm,s=i.quotaCount,r=i.uidList,i.googleCode,o={quotaCount:s,uidList:r.split(",")},e.btnLoading=!0,t.next=6,u["a"].apiAddAgentPlacesConfigsList(o);case 6:n=t.sent,n&&(e.$message({message:"操作成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkVal2:function(t){this.cForm[t]=(this.cForm[t]+"").replace(/[^\d,]/g,""),this.cForm[t]=(this.cForm[t]+"").replace(/,,/g,",")},checkVal:function(t,e){e&&(this.cForm[t]=(this.cForm[t]+"").replace(/[^\d]/g,"")),this.cForm[t]<0&&(this.cForm[t]=0)},doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(t){this.current_page=t,this.getList()},getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,r,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize,grantSource:1},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].apiGetAgentPlacesConfigsList(e);case 8:a=t.sent,a&&(i=a.data.data,s=i.records,r=i.total,o=i.current,n=i.pages,this.list=s,this.total=r,this.current_page=o,this.pages=n),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requiredParams:function(t){var e=this;if(this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var a="";a=this.symbollist.filter((function(t){return t["value"]==e.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=a}this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.today,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t}},mounted:function(){var t=this.$util.getAuthority("AgentsLists",l["j"],l["k"]);this.btnArr=t.btnArr||[]||[]||[],this.configs=l["g"],this.detailConfigs=l["i"],this.searchCofig=this.$util.clone(l["h"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}},d=h,g=(a("435b"),a("0c7c")),m=Object(g["a"])(d,i,s,!1,null,null,null);e["default"]=m.exports},ffe8:function(t,e,a){}}]);