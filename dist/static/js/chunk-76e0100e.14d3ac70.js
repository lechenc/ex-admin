(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76e0100e"],{"8fbc":function(t,e,i){},df59:function(t,e,i){"use strict";var r=i("8fbc"),a=i.n(r);a.a},e807:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-container"},[i("div",{staticClass:"container-top"},[i("Bsearch",{attrs:{configs:t.searchCofig},on:{"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),i("div",[i("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),i("div",{staticClass:"container-footer"},[i("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),i("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible,width:"500px",title:t.title},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{attrs:{label:"申请用户",prop:"fromUID","label-width":t.labelWidth}},[i("el-input",{attrs:{type:"text",placeholder:"请输入UID"},model:{value:t.form.fromUID,callback:function(e){t.$set(t.form,"fromUID",e)},expression:"form.fromUID"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"迁至该用户下级",prop:"toUID","label-width":t.labelWidth}},[i("el-input",{attrs:{type:"text",placeholder:"请输入UID"},model:{value:t.form.toUID,callback:function(e){t.$set(t.form,"toUID",e)},expression:"form.toUID"}})],1)],1),t._v(" "),i("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){e.stopPropagation(),t.dialogVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.confirmOp(e)}}},[t._v("确定")])],1)],1)],1)},a=[],s=(i("8e6e"),i("456d"),i("bd86")),o=(i("ac6a"),i("96cf"),i("3b8d")),n=i("c249"),c=i("2fee"),u=i("f21b"),l=i("64bf"),h=i("4ec3");function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={name:"WarehouseUser",components:{Btable:c["a"],Bsearch:n["a"],iconPage:u["a"]},data:function(){return{isCURDAuth:!1,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",labelWidth:"130px",title:"添加新标仓用户",dialogVisible:!1,form:{uid:"",inviterUid:"",googleCode:""},rules:{uid:[{required:!0,message:"必填"}],inviterUid:[{required:!0,message:"必填"}],googleCode:[{required:!0,message:"必填"}]}}},filters:{userType:function(t){}},methods:{doHandle:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var i,r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.fn,r=e.row,"detail"===i&&this.$router.push({path:"/warehouse/userListDetail",query:{id:r.uid}}),"switchCoin"!==i){t.next=9;break}return a={id:r.id,withoutLimit:r.withoutLimit?1:0},t.next=6,h["a"].warehouseUpdateWarehouseUser(a);case 6:s=t.sent,s&&this.$message({message:s.data.message,type:"success"}),this.getList();case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(t){this.current_page=t,this.getList()},addLine:function(){var t=this;this.formName="添加新标仓用户",this.dialogVisible=!0,this.$nextTick((function(){t.form={fromUID:"",toUID:""},t.$refs["form"].resetFields()}))},confirmOp:function(){var t=this;this.$refs["form"].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(i){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=11;break}return r=Object.assign({},t.form),a=f({},r),t.btnLoading=!0,e.next=6,h["a"].warehouseAddUser(a);case 6:s=e.sent,s&&(t.$message({message:"成功添加新标仓用户",type:"success"}),t.dialogVisible=!1,t.getList()),t.btnLoading=!1,e.next=12;break;case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,i,r,a,s,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,h["a"].warehouseUserPage(e);case 8:i=t.sent,i&&(r=i.data.data,a=r.records,s=r.total,o=r.pages,n=r.current,a.length>0&&a.forEach((function(t){t.emblem=t.emblem||0==t.emblem?"加加林"+t.emblem:"--",t.withoutLimit=!!t.withoutLimit})),this.list=a,this.total=+s,this.pages=o,this.current_page=n),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t},requiredParams:function(t){this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))}},mounted:function(){var t=this.$util.getAuthority("WarehouseUser",l["u"],l["v"]);this.configs=t.val,this.isCURDAuth=t.isAdd,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(l["w"]),this.getList()}},g=p,d=(i("df59"),i("0c7c")),b=Object(d["a"])(g,r,a,!1,null,null,null);e["default"]=b.exports}}]);