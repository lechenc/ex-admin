(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4f75116"],{"15fd":function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}function s(e,t){if(null==e)return{};var a,s,i=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}a.d(t,"a",(function(){return s}))},"22ae":function(e,t,a){"use strict";var r=a("55ae"),s=a.n(r);s.a},"34da":function(e,t,a){"use strict";a("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,r){a.path==e&&(t=r)})),t>=0&&a.splice(t,1)}}}},"4e61":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"account-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,excelLoading:e.excelLoading,exportExcel:!0,calLoading:e.calLoading,calTotal:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel,"do-calTotal":e.calTotal}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"500px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"当前统计总值",prop:"bonus","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!0},model:{value:e.form.bonus,callback:function(t){e.$set(e.form,"bonus",t)},expression:"form.bonus"}},[a("div",{attrs:{slot:"append"},slot:"append"},[e._v("ALPT")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"输入实发奖励",prop:"realityBonus","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.form.realityBonus,callback:function(t){e.$set(e.form,"realityBonus",t)},expression:"form.realityBonus"}},[a("div",{attrs:{slot:"append"},slot:"append"},[e._v("ALPT")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"谷歌验证码",prop:"googleCode","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.form.googleCode,callback:function(t){e.$set(e.form,"googleCode",t)},expression:"form.googleCode"}})],1)],1),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1)],1)},s=[],i=a("5530"),o=a("15fd"),n=(a("ac6a"),a("96cf"),a("1da1")),c=a("c249"),l=a("2fee"),u=a("f21b"),h=a("64bf"),p=a("4ec3"),g=a("ca00"),d=a("34da"),f=["bonus"],m={name:"WarehouseWeeklyPayList",components:{Btable:l["a"],Bsearch:c["a"],iconPage:u["a"]},mixins:[d["a"]],data:function(){return{listLoading:!1,btnLoading:!1,calLoading:!1,excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",title:"编辑奖励",labelWidth:"120px",dialogVisible:!1,curRow:{},form:{id:0,bonus:"",realityBonus:0,googleCode:""},rules:{realityBonus:[{required:!0,message:"请输入"}],googleCode:[{required:!0,message:"请填写验证码"}]},starArr:[{label:"一星级",value:1},{label:"二星级",value:2},{label:"三星级",value:3},{label:"四星级",value:4},{label:"五星级",value:5},{label:"六星级",value:6},{label:"七星级",value:7},{label:"八星级",value:8},{label:"零星级",value:0}]}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,r=t.row,this.curRow=r,"edit"===a&&(this.dialogVisible=!0,this.$nextTick((function(){s.$refs["form"].resetFields(),s.form={id:s.curRow.settlementId,bonus:s.curRow.bonus,realityBonus:s.curRow.realityBonus,googleCode:""}})));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},exportExcel:function(e){this.search_params_obj=e.query;var t=e.num;g["a"].exportData.apply(this,[t])},confirmOp:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,s,n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=9;break}return r=e.form,r.bonus,s=Object(o["a"])(r,f),n=Object(i["a"])({},s),e.btnLoading=!0,t.next=6,p["a"].warehouseEditReward(n);case 6:c=t.sent,c&&(e.$message({message:"修改成功",type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},calTotal:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,s,i,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.search_params_obj.count&&this.search_params_obj.starLevel){e.next=5;break}return this.$message({type:"error",message:"奖励次数 和 星级查询 为必填项"}),e.abrupt("return");case 5:return this.calLoading=!0,a={starLevel:+this.search_params_obj.starLevel,count:+this.search_params_obj.count},e.next=9,p["a"].getUserStayCount(a);case 9:r=e.sent,s=this.starArr.filter((function(e){return e.value==+o.search_params_obj.starLevel}))[0].label||"",r&&(i=r.data.data,i?this.$alert('<p">星级：'.concat(s,'</p><p">次数：').concat(+this.search_params_obj.count,'</p><p style="word-wrap: break-word;word-break: break-all;">UID：').concat(i.join(","),"</p>"),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){})):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,s,i,o,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,p["a"].warehouseWeekDetail(t);case 8:a=e.sent,a&&(r=a.data.data,s=r.records,i=r.total,o=r.current,n=r.pages,c=!1,s.length>0&&s.forEach((function(e){0==e.recordStatus&&(c=!0)})),c||(this.configs=h["A"]),this.list=s,this.dataList=s,this.total=i,this.current_page=o,this.pages=n),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e},requiredParams:function(e){this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},initFunc:function(){var e=this.$util.getAuthority("WarehouseWeeklyPayList",h["z"],h["A"]);this.configs=e.val,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(h["B"]);var t=this.$route.query.id;t?(this.searchCofig[1].value=t,this.search_params_obj={queryCriteria:t},this.getList()):this.getList()},queryData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=5,p["a"].warehouseWeekDetail(t);case 5:return a=e.sent,this.excelLoading=!1,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},activated:function(){this.isInTags()||(this.list=[],this.configs=[],this.searchCofig=[],this.search_params_obj={},this.current_page=1,this.pageSize=10,this.total=0,this.pages=0,this.initFunc())}},b=m,_=(a("22ae"),a("2877")),v=Object(_["a"])(b,r,s,!1,null,null,null);t["default"]=v.exports},"55ae":function(e,t,a){}}]);