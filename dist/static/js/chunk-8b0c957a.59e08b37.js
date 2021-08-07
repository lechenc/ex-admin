(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b0c957a"],{"34da":function(e,t,r){"use strict";r("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,r=this.$store.state.app.tagsList;r.forEach((function(r,a){r.path==e&&(t=a)})),t>=0&&r.splice(t,1)}}}},5601:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"coinContract-container"},[e.topBtn?r("el-row",{staticClass:"sac-row"},[r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1)],1):e._e(),e._v(" "),r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("el-dialog",{attrs:{title:"销账",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"dForm",attrs:{model:e.dForm,rules:e.drules}},[r("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinName"}},[r("el-select",{attrs:{disabled:"",placeholder:"",width:"20%"},model:{value:e.dForm.coinName,callback:function(t){e.$set(e.dForm,"coinName",t)},expression:"dForm.coinName"}},e._l(e.coin_List,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"当前可用",prop:"balance","label-width":e.formLabelWidth}},[r("el-input",{attrs:{disabled:"",type:"number",autocomplete:"off",placeholder:""},model:{value:e.dForm.balance,callback:function(t){e.$set(e.dForm,"balance",t)},expression:"dForm.balance"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"销账数量",prop:"amount","label-width":e.formLabelWidth}},[r("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:""},model:{value:e.dForm.amount,callback:function(t){e.$set(e.dForm,"amount",t)},expression:"dForm.amount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark","label-width":e.formLabelWidth}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.dForm.remark,callback:function(t){e.$set(e.dForm,"remark",t)},expression:"dForm.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmOp}},[e._v("确定")])],1)],1)],1)},i=[],n=(r("ac6a"),r("a481"),r("96cf"),r("3b8d")),s=r("c249"),o=r("2fee"),c=r("f21b"),u=r("e582"),l=r("4ec3"),m=r("ff53"),d=(r("34da"),r("ae7b")),h={name:"ContractAccount",components:{Btable:o["a"],Bsearch:s["a"],iconPage:c["a"],BTwoRangeChoose:d["a"]},data:function(){var e=/^\d{1,11}$|^\d{1,11}[.]\d{1,8}$/,t=function(t,r,a){if(!e.test(r))return a(new Error(t.message));a()};return{topBtn:!1,toDay:"",ago:"",modeOfCostOptions:[{value:"1",label:"正常开启"},{value:"0",label:"关闭"},{value:"2",label:"多空均收"}],btnArr:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,chainArr:[],coin_List:[],formLabelWidth:"150px",dialogFormVisible:!1,centerDialogVisible:!1,dForm:{coinName:"",balance:"",amount:"",remark:""},rowObj:{userId:"",coinName:""},jform:{},formName:"新增币种",drules:{coinMarket:[{required:!0,message:"必填",trigger:"blur"}],amount:[{required:!0,message:"必填",trigger:"blur"},{validator:t,message:"请输入最多最多8位小数的数字",trigger:"blur"}],balance:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"},{min:5,max:100,message:"长度在 5 到 100 个字符之间",trigger:"blur"}]}}},methods:{estimate:function(e){this.dialogFormVisible=!0},addGear:function(){var e=this;this.formName="添加档位",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["twoChoose"].resetValue(),e.$refs["dForm"].resetFields(),e.dForm={id:"",coinMarket:"",basicInterestRate:"",premiumRateMin:"",premiumRateMax:"",capitalInterestRateMin:"",capitalInterestRateMax:"",modeOfCost:""}}))},confirmOp:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["dForm"].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var a,i,n,s,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=13;break}if(!(parseFloat(t.dForm.amount)>parseFloat(t.dForm.balance))){e.next=3;break}return e.abrupt("return",t.$message.error("销账数量不足"));case 3:return a=t.dForm,i=a.amount,n=a.remark,s={fromUserId:t.rowObj.userId,amount:i,remark:n},o="",o=t.coin_List.filter((function(e){return e["label"]==t.rowObj.coinName}))[0].value,s.coinId=o,e.next=10,l["a"].apiDestroyBill(s);case 10:c=e.sent,c&&(t.$message.success("销账成功"),t.getList()),t.dialogFormVisible=!1;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkVal:function(e,t){"minimumInitialMargin"!==e&&"maintenanceMarginRatio"!==e||(this.dForm[e]=(this.dForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/,"$1$2.$3")),t&&(this.dForm[e]=this.dForm[e].replace(/[^\d]/g,"")),this.dForm[e]<0&&(this.dForm[e]=0)},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"destroy"!==r){e.next=7;break}return this.dialogFormVisible=!0,i=a.coinName,n=a.balance,s=a.userId,this.rowObj={userId:s,coinName:i},this.dForm={coinName:i,balance:n},e.abrupt("return");case 7:if("earningsRecord"!=r){e.next=10;break}return this.$router.push({path:"/contract/accountManagement/earningsRecord"}),e.abrupt("return");case 10:if("destroyBill"!=r){e.next=13;break}return this.$router.push({path:"/assetManage/writeoffRecord",query:{uid:a.uid,userId:a.userId,optType:89}}),e.abrupt("return");case 13:if("transferRecord"!=r){e.next=16;break}return this.$router.push({path:"/assetManage/transferRecord",query:{topBtn:!0,uid:a.uid}}),e.abrupt("return");case 16:if("earningsFlow"!=r){e.next=19;break}return this.$router.push({path:"/contract/accountManagement/earningsFlow",query:{topBtn:!0,uid:a.uid,userId:a.userId}}),e.abrupt("return");case 19:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),goPage:function(e){this.current_page=e,this.getList()},percentToNum:function(e){return-1!==(e+"").indexOf("%")&&(e=e.replace(/\%/,"")),m["a"].divide(e,100)},numToPercent:function(e){return m["a"].times(e,100)},formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e},requiredParams:function(e){var t=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(e.endTime=parseInt(new Date(this.toDay).getTime()/1e3),e.startTime=parseInt(new Date(this.ago).getTime()/1e3)),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var r="";r=this.coin_List.filter((function(e){return e["value"]==t.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=r}},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={userType:106},this.listLoading=!0,e.next=6,l["a"].getAccountContractList(t);case 6:r=e.sent,r&&(this.list=r.data.data),this.listLoading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.$route.query.topBtn&&(this.topBtn=!0)},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.configs=u["a"],this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.$store.dispatch("common/getCoinList").then((function(){t.coin_List=t.$store.state.common.coinlist})),this.getList();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},p=h,f=(r("f58e"),r("0c7c")),b=Object(f["a"])(p,a,i,!1,null,null,null);t["default"]=b.exports},"986b":function(e,t,r){},f58e:function(e,t,r){"use strict";var a=r("986b"),i=r.n(a);i.a}}]);