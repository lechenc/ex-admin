(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c23c837e"],{"5fc8":function(t,e,a){"use strict";var r=a("bc0d"),i=a.n(r);i.a},bc0d:function(t,e,a){},e6ac:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"refundRecord-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig,calLoading:t.calLoading,calText:"一键移出",calTotal:t.btnArr.includes("removeAll")},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-calTotal":t.calTotal}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{attrs:{title:"代理商补充保证金",width:"600px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"cForm",attrs:{model:t.cForm,rules:t.rules}},[a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"代理商UID","label-width":t.formLabelWidth,prop:"agentUID"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:""},model:{value:t.cForm.agentUID,callback:function(e){t.$set(t.cForm,"agentUID","string"===typeof e?e.trim():e)},expression:"cForm.agentUID"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"账户类型","label-width":t.formLabelWidth,prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.cForm.type,callback:function(e){t.$set(t.cForm,"type",e)},expression:"cForm.type"}},t._l(t.type_List,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth,prop:"coinId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.cForm.coinId,callback:function(e){t.$set(t.cForm,"coinId",e)},expression:"cForm.coinId"}},t._l(t.coin_List,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"可用数量","label-width":t.formLabelWidth,prop:"amountAll"}},[a("el-input",{attrs:{type:"text",disabled:"",placeholder:"请输入"},model:{value:t.cForm.amountAll,callback:function(e){t.$set(t.cForm,"amountAll","string"===typeof e?e.trim():e)},expression:"cForm.amountAll"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"扣除数量","label-width":t.formLabelWidth,prop:"amount"}},[a("el-input",{staticClass:"my-mumber-input",attrs:{type:"number",placeholder:"请输入"},on:{input:function(e){return t.checkVal("amount")}},model:{value:t.cForm.amount,callback:function(e){t.$set(t.cForm,"amount","string"===typeof e?e.trim():e)},expression:"cForm.amount"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmOp}},[t._v("确 定")])],1)],1)],1)},i=[],s=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),n=a("c249"),o=a("2fee"),c=a("f21b"),l=a("65fc"),u=a("4ec3"),m={name:"UserMonitor",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){return{rules:{amount:[{required:!0,message:"必填",trigger:"blur"}],agentUID:[{required:!0,message:"必填",trigger:"blur"}],coinId:[{required:!0,message:"必填",trigger:"blur"}],amountAll:[{required:!0,message:"必填",trigger:"blur"}],type:[{required:!0,message:"必填",trigger:"blur"}]},coin_List:[{label:"USDT",value:4}],type_List:[{label:"币币账户",value:1}],cForm:{amount:"",agentUID:"",coinId:4,type:1,amountAll:""},btnLoading:!1,dialogFormVisible:!1,btnArr:[],listLoading:!1,isCURDAuth:!0,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:20,total:0,pages:0,toDay:"",ago:"",curRow:{},symbollist:[],formLabelWidth:"120px"}},watch:{dialogFormVisible:function(t){t||(this.cForm={amount:"",agentUID:"",coinId:4,type:1,amountAll:""})}},methods:{checkVal:function(t){this.cForm[t]<0&&(this.cForm[t]=0)},confirmOp:function(){var t=this;this.$refs["cForm"].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}if(!(t.cForm.amount>t.cForm.amountAll||0==t.cForm.amountAll)){e.next=3;break}return e.abrupt("return",t.$message.error("可用数量不足"));case 3:return e.next=5,u["a"].userMonitorAdd({amount:t.cForm.amount,agentUID:t.cForm.agentUID,type:1});case 5:r=e.sent,r&&(t.$message({message:r.data.message,type:"success"}),t.dialogFormVisible=!1,t.getList()),t.btnLoading=!1;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},doHandle:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r,i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.fn,r=e.row,"remove"==a&&this.$confirm("是否将该用户移出监控?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].userMonitorRemove({id:r.id});case 2:e=t.sent,e&&(n.$message({type:"success",message:e.data.message}),n.getList());case 4:case"end":return t.stop()}}),t)})))).catch((function(){})),"supple"!=a){t.next=9;break}return this.dialogFormVisible=!0,this.cForm.agentUID=r.agentUid,t.next=7,u["a"].getMonitorAgentAmount({agentUserId:r.agentUserId});case 7:i=t.sent,i&&(this.cForm.amountAll=i.data.data);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(t){this.current_page=t,this.getList()},calTotal:function(t){var e=this;this.$confirm("是否将全部用户移出监控?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].userMonitorRemoveAll({});case 2:a=t.sent,a&&(e.$message({type:"success",message:a.data.message}),e.getList());case 4:case"end":return t.stop()}}),t)})))).catch((function(){}))},getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,s,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].getUserMonitorList(e);case 8:a=t.sent,a&&(r=a.data.data,i=r.records,s=r.total,n=r.current,o=r.pages,this.list=i,this.total=s,this.current_page=n,this.pages=o),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),requiredParams:function(t){if(this.$util.isEmptyObject(this.search_params_obj)){var e=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[0].value=[e,a],t.endTime=a.replace(/\//gi,"-"),t.startTime=e.replace(/\//gi,"-")}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")}},mounted:function(){var t=this,e=this.$util.getAuthority("UserMonitor",l["y"],l["z"]);this.btnArr=e.btnArr||[],this.configs=e.val,this.searchCofig=this.$util.clone(l["A"]),this.$store.dispatch("common/getSymbolListContract").then((function(){t.symbollist=t.$store.state.common.symbollistContract})),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}},g=m,p=(a("5fc8"),a("0c7c")),h=Object(p["a"])(g,r,i,!1,null,null,null);e["default"]=h.exports}}]);