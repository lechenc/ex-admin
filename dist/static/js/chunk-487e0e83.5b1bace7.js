(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-487e0e83"],{"32a6":function(e,t,r){var i=r("241e"),a=r("c3a1");r("ce7e")("keys",(function(){return function(e){return a(i(e))}}))},"34da":function(e,t,r){"use strict";r("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,r=this.$store.state.app.tagsList;r.forEach((function(r,i){r.path==e&&(t=i)})),t>=0&&r.splice(t,1)}}}},4648:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"coinContract-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addGear}},[e._v("添加风险等级 ")])],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,width:"670px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"dForm",attrs:{model:e.dForm,rules:e.drules}},[r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"币对","label-width":e.formLabelWidth,prop:"coinMarket"}},[r("el-select",{attrs:{placeholder:"",width:"20%"},model:{value:e.dForm.coinMarket,callback:function(t){e.$set(e.dForm,"coinMarket",t)},expression:"dForm.coinMarket"}},e._l(e.coin_List,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"风险梯度等级","label-width":e.formLabelWidth,prop:"riskGradientLevel"}},[r("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:""},model:{value:e.dForm.riskGradientLevel,callback:function(t){e.$set(e.dForm,"riskGradientLevel",t)},expression:"dForm.riskGradientLevel"}})],1)],1),e._v(" "),r("b-two-range-choose",{ref:"twoChoose",attrs:{labelWidth:e.formLabelWidth,labelWords:"风险梯度区间",getVal1:e.dForm.gradientPriceStart,getVal2:e.dForm.gradientPriceEnd,isdisabled:!1},on:{"update:getVal1":function(t){return e.$set(e.dForm,"gradientPriceStart",t)},"update:get-val1":function(t){return e.$set(e.dForm,"gradientPriceStart",t)},"update:getVal2":function(t){return e.$set(e.dForm,"gradientPriceEnd",t)},"update:get-val2":function(t){return e.$set(e.dForm,"gradientPriceEnd",t)},handler:e.getRangeVal}}),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"平仓允许成交比例","label-width":e.formLabelWidth,prop:"closePositionAllowRatio"}},[r("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:""},model:{value:e.dForm.closePositionAllowRatio,callback:function(t){e.$set(e.dForm,"closePositionAllowRatio",t)},expression:"dForm.closePositionAllowRatio"}})],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"是否启用宕机机制","label-width":e.formLabelWidth,prop:"downSwitch"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.dForm.downSwitch,callback:function(t){e.$set(e.dForm,"downSwitch",t)},expression:"dForm.downSwitch"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},a=[],n=(r("8e6e"),r("456d"),r("ac6a"),r("a481"),r("c5f6"),r("bd86")),o=r("a8db"),s=(r("96cf"),r("3b8d")),c=r("c249"),l=r("2fee"),d=r("f21b"),u=r("e582"),g=r("4ec3"),f=r("ff53"),m=(r("34da"),r("ae7b"));function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={name:"ContractAccount",components:{Btable:l["a"],Bsearch:c["a"],iconPage:d["a"],BTwoRangeChoose:m["a"]},data:function(){var e=/^(0|0(\.\d{1,8})?)$/,t=function(t,r,i){e.test(r)?i():i(new Error(t.message))};return{modeOfCostOptions:[{value:"1",label:"正常开启"},{value:"0",label:"关闭"},{value:"2",label:"多空均收"}],btnArr:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,chainArr:[],coin_List:[],formLabelWidth:"150px",dialogFormVisible:!1,dForm:{id:"",coinMarket:"",riskGradientLevel:"",gradientPriceStart:"",gradientPriceEnd:"",closePositionAllowRatio:"",downSwitch:!1},formName:"新增币种",drules:{coinMarket:[{required:!0,message:"必填",trigger:"blur"}],riskGradientLevel:[{required:!0,message:"必填",trigger:"blur"}],gradientPriceStart:[{required:!0,message:"必填",trigger:"blur"}],gradientPriceEnd:[{required:!0,message:"必填",trigger:"blur"}],closePositionAllowRatio:[{required:!0,message:"必填",trigger:"blur"},{validator:t,message:"请输入0~1以下的数字,最多8位小数",trigger:"blur"}]}}},methods:{addGear:function(){var e=this;this.formName="添加风险等级",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["twoChoose"].resetValue(),e.$refs["dForm"].resetFields(),e.dForm={coinMarket:"",riskGradientLevel:"",gradientPriceStart:"",gradientPriceEnd:"",closePositionAllowRatio:"",downSwitch:!1}}))},confirmOp:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["dForm"].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var i,a,n,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=23;break}if(i=t.dForm,a=i.id,n=Object(o["a"])(i,["id"]),s=h({},n),!(Number(s.gradientPriceStart)>Number(s.gradientPriceEnd))){e.next=5;break}return e.abrupt("return",t.$message.error("最小值不得大于最大值"));case 5:if(s.coinId=t.coin_List.filter((function(e){return e["label"]==t.dForm.coinMarket}))[0].value,s.gradientPriceStart=Number(s.gradientPriceStart),s.gradientPriceEnd=Number(s.gradientPriceEnd),s.downSwitch=t.dForm.downSwitch?1:0,""===a||Object.assign(s,{id:a}),t.btnLoading=!0,""!=a&&void 0!=a){e.next=17;break}return e.next=14,g["a"].addRiskLevel(s);case 14:e.t0=e.sent,e.next=20;break;case 17:return e.next=19,g["a"].editRiskLevel(s);case 19:e.t0=e.sent;case 20:c=e.t0,c&&(t.$message({message:c.data.message,type:"success"}),t.dialogFormVisible=!1,t.getList()),t.btnLoading=!1;case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),doHandle:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,i,a,n,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,i=t.row,"edit"===r&&(this.formName="编辑风险等级",this.dialogFormVisible=!0,this.$nextTick((function(){o.$refs["dForm"].resetFields();var e=i.id,t=i.coinMarket,r=i.riskGradientLevel,a=i.gradientPriceStart,n=i.gradientPriceEnd,s=i.closePositionAllowRatio,c=i.downSwitch;o.dForm={id:e,coinMarket:t,riskGradientLevel:r,gradientPriceStart:a,gradientPriceEnd:n,closePositionAllowRatio:s,downSwitch:1==c}}))),"trstart"!==r){e.next=8;break}return a={id:i.id,coinMarket:i.coinMarket},e.next=6,g["a"].editContractPositionGear(a);case 6:n=e.sent,n?(this.$message({message:"切换成功",type:"success"}),this.getList()):this.getList();case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkVal:function(e,t){"minimumInitialMargin"!==e&&"maintenanceMarginRatio"!==e||(this.dForm[e]=(this.dForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/,"$1$2.$3")),t&&(this.dForm[e]=this.dForm[e].replace(/[^\d]/g,"")),this.dForm[e]<0&&(this.dForm[e]=0)},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},percentToNum:function(e){return-1!==(e+"").indexOf("%")&&(e=e.replace(/\%/,"")),f["a"].divide(e,100)},numToPercent:function(e){return f["a"].times(e,100)},getRangeVal:function(e){},requiredParams:function(e){var t=this;if(this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var r="";r=this.coin_List.filter((function(e){return e["value"]==t.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=r}},getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,i,a,n,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(this.search_params_obj),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,g["a"].getRiskLevelList(t);case 8:r=e.sent,r&&(i=r.data.data,a=i.records,n=i.total,o=i.current,s=i.pages,this.total=n,this.pages=s,this.current_page=o,this.list=a),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.configs=u["Z"],this.searchCofig=this.$util.clone(u["ab"]),this.$store.dispatch("common/getSymbolListContract").then((function(){t.searchCofig[0]["list"]=t.$store.state.common.symbollistContract,t.coin_List=t.$store.state.common.symbollistContract})),this.getList();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},v=b,w=(r("7c46"),r("0c7c")),k=Object(w["a"])(v,i,a,!1,null,null,null);t["default"]=k.exports},"7c46":function(e,t,r){"use strict";var i=r("c0be"),a=r.n(i);a.a},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var i=r("e265"),a=r.n(i),n=r("a4bb"),o=r.n(n);function s(e,t){if(null==e)return{};var r,i,a={},n=o()(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}function c(e,t){if(null==e)return{};var r,i,n=s(e,t);if(a.a){var o=a()(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return c}))},c0be:function(e,t,r){},ce7e:function(e,t,r){var i=r("63b6"),a=r("584a"),n=r("294c");e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],o={};o[e]=t(r),i(i.S+i.F*n((function(){r(1)})),"Object",o)}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols}}]);