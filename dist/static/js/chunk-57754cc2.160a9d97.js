(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57754cc2"],{"29b2":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"levelSetting-container"},[e.isCURDAuth?i("div",{staticClass:"container-btn"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addRobot}},[e._v("添加")])],1):e._e(),e._v(" "),i("div",[i("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),i("div",{staticClass:"container-footer"},[i("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),i("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),i("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible,width:"650px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[e.form.id?i("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinName"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.form.coinName,callback:function(t){e.$set(e.form,"coinName",t)},expression:"form.coinName"}})],1):i("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinName"}},[i("el-select",{attrs:{placeholder:"",wdith:"20%"},model:{value:e.form.coinName,callback:function(t){e.$set(e.form,"coinName",t)},expression:"form.coinName"}},e._l(e.coin_list,(function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"等级名称","label-width":e.formLabelWidth,prop:"levelName"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.levelName,callback:function(t){e.$set(e.form,"levelName",t)},expression:"form.levelName"}})],1),e._v(" "),e.dialogFormVisible?i("b-two-range-choose",{ref:"twoChoose",attrs:{labelWidth:e.formLabelWidth,labelWords:"额度要求",getVal1:e.form.minCreditLimit,getVal2:e.form.maxCreditLimit,isdisabled:!1},on:{"update:getVal1":function(t){return e.$set(e.form,"minCreditLimit",t)},"update:get-val1":function(t){return e.$set(e.form,"minCreditLimit",t)},"update:getVal2":function(t){return e.$set(e.form,"maxCreditLimit",t)},"update:get-val2":function(t){return e.$set(e.form,"maxCreditLimit",t)},handler:e.getRangeVal}}):e._e()],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确定")])],1)],1)],1)},a=[],n=(i("8e6e"),i("456d"),i("ac6a"),i("bd86")),o=(i("96cf"),i("3b8d")),s=i("f21b"),c=i("c249"),l=i("2fee"),m=i("ae7b"),u=i("f556"),f=i("4ec3");function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){Object(n["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var p={name:"LevelSetting",components:{Btable:l["a"],Bsearch:c["a"],BTwoRangeChoose:m["a"],iconPage:s["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,dialogFormVisible:!1,getAmountSection:"",labelWidth:"120px",form:{id:"",coinId:"",coinName:"",levelName:"",minCreditLimit:"",maxCreditLimit:""},rules:{levelName:[{required:!0,message:"必填",trigger:"blur"}]},formName:"",formLabelWidth:"150px",coin_list:[]}},methods:{doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var i,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=t.fn,r=t.row,"edit"===i&&(this.formName="等级设置",this.dialogFormVisible=!0,this.$nextTick((function(){a.$refs["twoChoose"].resetValue(),a.$refs["form"].resetFields();var e=r.id,t=r.coinId,i=r.coinName,n=r.levelName,o=r.minCreditLimit,s=r.maxCreditLimit;a.form={id:e,coinId:t,coinName:i,levelName:n,minCreditLimit:o,maxCreditLimit:s}}))),"del"===i&&this.$confirm("此操作将删除该条目, 是否继续?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:r.id},e.next=3,f["a"].deleteUserGradePage(t);case 3:i=e.sent,i&&(a.$message({type:"success",message:"删除成功!"}),a.getList());case 5:case"end":return e.stop()}}),e)})))).catch((function(){a.$message({type:"info",message:"已取消删除"})}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),rangeValue:function(e){e.valid&&(this.getAmountSection=e.form.min+"-"+e.form.max)},addRobot:function(){var e=this;this.formName="新增等级",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["form"].resetFields(),e.$refs["twoChoose"].resetValue(),e.form={id:"",coinId:"",coinName:"",levelName:"",minCreditLimit:"",maxCreditLimit:""}}))},confirmOp:function(){var e=this;this.$refs["twoChoose"].validateValue()&&this.$refs["form"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(i){var r,a,n,o,s,c,l,m,u,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=19;break}if(r=e.form,a=r.id,n=r.coinId,o=r.coinName,s=r.levelName,c=r.minCreditLimit,l=r.maxCreditLimit,m={coinName:o,levelName:s,minCreditLimit:c,maxCreditLimit:l},m.coinId=""===a?e.coin_list.filter((function(e){return e.label==o}))[0].value+"":n+"",e.btnLoading=!0,""!==a){t.next=11;break}return t.next=8,f["a"].addUserGradePage(m);case 8:t.t0=t.sent,t.next=14;break;case 11:return t.next=13,f["a"].updateUserGradePage(g({id:a},m));case 13:t.t0=t.sent;case 14:u=t.t0,u&&(d=""===a?"新增等级成功":"编辑等级成功",e.$message({message:d,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1,t.next=20;break;case 19:return t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},formatTime:function(e){return"string"===typeof e?e:parseInt(new Date(e).getTime()/1e3)},getRangeVal:function(e){},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,i,r,a,n,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,f["a"].getUserGradePage(t);case 7:i=e.sent,i&&(r=i.data.data,a=r.records,n=r.total,o=r.current,s=r.pages,this.total=n,this.pages=s,this.current_page=o,this.list=a,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getCoinList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getFiatCoinList").then((function(){var e=t.$store.state.common.fiatcoinlist;t.coin_list=e.filter((function(e){return"USDT"==e.label}))}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("LevelSetting",u["q"],u["r"]),this.configs=t.val,this.isCURDAuth=t.isAdd,this.getCoinList(),this.getList();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},h=p,b=(i("5c09"),i("0c7c")),v=Object(b["a"])(h,r,a,!1,null,"68a01900",null);t["default"]=v.exports},"3bfa":function(e,t,i){},"5c09":function(e,t,i){"use strict";var r=i("3bfa"),a=i.n(r);a.a}}]);