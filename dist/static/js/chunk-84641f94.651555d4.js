(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84641f94"],{"34da":function(t,e,i){"use strict";i("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,i=this.$store.state.app.tagsList;i.forEach((function(i,a){i.path==t&&(e=a)})),e>=0&&i.splice(e,1)}}}},"4f50":function(t,e,i){"use strict";i("bad4")},bad4:function(t,e,i){},f78c:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lotteryListDetail-container"},[i("el-row",{staticClass:"sac-row"},[i("el-col",{attrs:{span:4}},[i("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"160px",size:"medium"}},[i("el-card",{staticClass:"box-card"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"box-card-con"},[i("el-form-item",{attrs:{label:"活动名称",prop:"activityName","label-width":t.labelWidth}},[i("el-col",{attrs:{span:7}},[i("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!t.isChangeInfo},model:{value:t.form.activityName,callback:function(e){t.$set(t.form,"activityName",e)},expression:"form.activityName"}})],1)],1),t._v(" "),i("b-two-date-timer",{ref:"twoTimer",attrs:{labelWidth:t.labelWidth,labelWords:"活动任务有效时间",date1:t.form.startTime,date2:t.form.endTime,isdisabled:!t.isChangeInfo},on:{"update:date1":function(e){return t.$set(t.form,"startTime",e)},"update:date2":function(e){return t.$set(t.form,"endTime",e)}}}),t._v(" "),i("el-form-item",{attrs:{label:"参加活动用户范围",prop:"userType","label-width":t.labelWidth}},[i("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择",disabled:!t.isChangeInfo},model:{value:t.form.userType,callback:function(e){t.$set(t.form,"userType",e)},expression:"form.userType"}},t._l(t.userTypeListFormal,(function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"所有抽奖机会总数",prop:"totalRaffle","label-width":t.labelWidth}},[i("el-col",{attrs:{span:7}},[i("el-input",{attrs:{type:"number",placeholder:"请输入",disabled:!t.isChangeInfo},on:{input:function(e){return t.checkVal("totalRaffle")}},model:{value:t.form.totalRaffle,callback:function(e){t.$set(t.form,"totalRaffle",e)},expression:"form.totalRaffle"}})],1)],1),t._v(" "),i("el-form-item",{staticStyle:{margin:"0 0 95px 0"},attrs:{label:"活动规则",prop:"rule","label-width":t.labelWidth}},[i("QuillEditor",{ref:"quilleditor",staticClass:"editor-top",attrs:{disabled:!t.isChangeInfo},model:{value:t.form.rule,callback:function(e){t.$set(t.form,"rule",e)},expression:"form.rule"}})],1),t._v(" "),t._l(t.activityList,(function(e,a){return i("el-row",{key:a},[i("el-form-item",{attrs:{label:"活动任务1 开仓交易量每达到",required:!0,"label-width":"220px"}},[i("el-col",{attrs:{span:15}},[i("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择币种",disabled:!t.isChangeInfo},model:{value:e.coinId,callback:function(i){t.$set(e,"coinId",i)},expression:"item.coinId"}},t._l(t.coinList,(function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),i("el-input",{staticStyle:{"margin-left":"20px",width:"180px"},attrs:{type:"number",placeholder:"请输入数量",disabled:!t.isChangeInfo},on:{input:function(e){return t.checkValActiviryList(a,"amount")}},model:{value:e.amount,callback:function(i){t.$set(e,"amount",i)},expression:"item.amount"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"完成一次可得奖券数量",required:!0,"label-width":t.labelWidth}},[i("el-col",{attrs:{span:7}},[i("el-input",{attrs:{type:"number",placeholder:"请输入",disabled:!t.isChangeInfo},on:{input:function(e){return t.checkValActiviryList(a,"singleRaffle")}},model:{value:e.singleRaffle,callback:function(i){t.$set(e,"singleRaffle",i)},expression:"item.singleRaffle"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"单人可得抽奖券奖励上限",required:!0,"label-width":t.labelWidth}},[i("el-col",{attrs:{span:7}},[i("el-input",{attrs:{type:"number",placeholder:"请输入数量",disabled:!t.isChangeInfo},on:{input:function(e){return t.checkValActiviryList(a,"singleRaffleLimit")}},model:{value:e.singleRaffleLimit,callback:function(i){t.$set(e,"singleRaffleLimit",i)},expression:"item.singleRaffleLimit"}})],1)],1)],1)})),t._v(" "),i("el-form-item",{attrs:{label:"抽奖池奖品及中奖人设置","label-width":t.labelWidth}},[i("ul",t._l(t.prizeList,(function(e,a){return i("li",{key:a,staticClass:"con"},[i("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择奖励名称",disabled:!t.isChangeInfo},model:{value:e.prizeId,callback:function(i){t.$set(e,"prizeId",i)},expression:"el.prizeId"}},t._l(t.prizeListFormal,(function(t,e){return i("el-option",{key:e,attrs:{label:t.prizeName,value:t.id}})})),1),t._v(" "),i("el-input",{attrs:{type:"number",placeholder:"请输入累计亏损值",disabled:!t.isChangeInfo},on:{input:function(e){return t.checkValPrize(a,"totalLossAmount")}},model:{value:e.totalLossAmount,callback:function(i){t.$set(e,"totalLossAmount",i)},expression:"el.totalLossAmount"}}),t._v(" "),i("el-input",{attrs:{type:"number",placeholder:"请输入名额数量",disabled:!t.isChangeInfo},on:{input:function(e){return t.checkValPrize(a,"num")}},model:{value:e.num,callback:function(i){t.$set(e,"num",i)},expression:"el.num"}}),t._v(" "),i("div",{staticClass:"del-btn"},[i("el-button",{attrs:{round:"",plain:"",type:"danger",size:"small",disabled:!t.isChangeInfo},on:{click:function(e){return e.stopPropagation(),t.delPrizeList(a)}}},[t._v("删除")])],1)],1)})),0)]),t._v(" "),"detail"!=t.queryStr?i("div",[i("div",{staticClass:"middle"},[i("el-button",{attrs:{disabled:!t.isChangeInfo,type:"primary",size:"medium"},on:{click:t.addPrizeList}},[t._v("+添加奖励")])],1)]):t._e(),t._v(" "),i("el-form-item",{staticClass:"radio-item",attrs:{label:"抽奖机会发放时间","label-width":t.labelWidth,required:!0}},[i("el-radio-group",{attrs:{value:1,disabled:!0}},[i("el-radio",{attrs:{label:1}},[t._v("是")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"抽奖机会截止时间","label-width":t.labelWidth,prop:"luckDrawEndTime"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",disabled:!t.isModify},on:{change:function(e){return t.checkTimer("luckDrawEndTime")}},model:{value:t.form.luckDrawEndTime,callback:function(e){t.$set(t.form,"luckDrawEndTime",e)},expression:"form.luckDrawEndTime"}})],1),t._v(" "),i("el-form-item",{staticClass:"radio-item",attrs:{label:"奖励发放时间","label-width":t.labelWidth,required:!0}},[i("el-radio-group",{attrs:{value:1,disabled:!0}},[i("el-radio",{attrs:{label:1}},[t._v("是")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"活动上架开关",prop:"activityStatus"}},[i("el-switch",{attrs:{disabled:!t.isModify,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form.activityStatus,callback:function(e){t.$set(t.form,"activityStatus",e)},expression:"form.activityStatus"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"抽奖启动开关",prop:"playStatus"}},[i("el-switch",{attrs:{disabled:!t.isModify,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form.playStatus,callback:function(e){t.$set(t.form,"playStatus",e)},expression:"form.playStatus"}})],1)],2)]),t._v(" "),"edit"==t.queryStr?i("div",[t.isUpdate?t._e():i("div",{staticClass:"middle"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.isUpdate=!0,t.isModify=!0}}},[t._v("编辑")])],1),t._v(" "),t.isUpdate?i("div",{staticClass:"middle"},[i("el-button",{attrs:{type:"primary",plain:"",size:"medium"},on:{click:t.confirmBack}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"medium",loading:t.btnLoading},on:{click:function(e){return t.confirmSend()}}},[t._v("提交修改")])],1):t._e()]):t._e(),t._v(" "),"add"==t.queryStr?i("div",[i("div",{staticClass:"middle"},[i("el-button",{attrs:{type:"primary",size:"medium",loading:t.btnLoading},on:{click:function(e){return t.confirmSend()}}},[t._v("提交")])],1)]):t._e()],1)],1)],1)},r=[],s=i("5530"),n=i("15fd"),l=(i("456d"),i("ac6a"),i("a481"),i("96cf"),i("1da1")),o=i("4ec3"),c=i("57d7"),u=i("34da"),d=i("bdcf"),m=["id","startTime","endTime","totalRaffle","activityStatus","playStatus","luckDrawEndTime"],f={name:"LotteryListDetail",components:{BTwoDateTimer:c["a"],QuillEditor:d["a"]},mixins:[u["a"]],data:function(){return{isCURDAuth:!0,btnLoading:!1,personLoading:!1,isUpdate:!1,isModify:!1,isBeforeModify:!0,listLoading:!1,list:[],activityList:[],taskList:[],prizeList:[],queryId:"",queryStr:"",labelWidth:"180px",coinList:[],form:{id:"",activityName:"",startTime:"",endTime:"",userType:"",totalRaffle:"",rule:"",luckDrawEndTime:"",activityStatus:!1,playStatus:!1},rules:{activityName:[{required:!0,message:"必填"}],userType:[{required:!0,message:"必填"}],totalRaffle:[{required:!0,message:"必填"}],rule:[{required:!0,message:"必填"}],luckDrawEndTime:[{required:!0,message:"必填"}]},taskListFormal:[],prizeListFormal:[],userTypeListFormal:[{label:"所有用户",value:1},{label:"已实名用户",value:2}]}},computed:{isChangeInfo:function(){return"edit"===this.queryStr&&this.isBeforeModify&&this.isUpdate||"add"===this.queryStr}},methods:{delPrizeList:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var i,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=this.prizeList[e],i.id){t.next=5;break}this.prizeList.splice(e,1),t.next=10;break;case 5:return a={id:this.queryId,prizeId:i.prizeId},t.next=8,o["a"].setDeleteActivity(a);case 8:r=t.sent,r&&(this.$message({message:"删除奖品信息成功！",type:"error"}),this.prizeList.splice(e,1));case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addPrizeList:function(){this.prizeList.push({prizeId:"",num:"",totalLossAmount:"",winningUid:""})},getList:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,i,a,r,s,n,l,c,u,d,m,f,p,h,y;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={id:this.queryId},this.listLoading=!0,t.next=6,o["a"].getAccountActivityGetActivity(e);case 6:i=t.sent,i&&i.data.data&&(a=i.data.data,r=a.activityStatus,s=a.playStatus,a.taskId,n=a.activityPrizeRulesBo,l=a.activityTaskBo,c=a.activityName,u=a.startTime,d=a.endTime,m=a.userType,f=a.totalRaffle,p=a.rule,h=a.luckDrawEndTime,y=a.id,this.form={id:y,activityName:c,startTime:(u+"").replace(/\-/g,"/"),endTime:(d+"").replace(/\-/g,"/"),userType:m,totalRaffle:f,rule:p,luckDrawEndTime:(h+"").replace(/\-/g,"/"),activityStatus:!!r,playStatus:!!s},this.activityList=JSON.parse(JSON.stringify(l)),this.activityList.length||this.activityList.push({id:"",amount:"",singleRaffle:"",coinId:"",singleRaffleLimit:0}),this.prizeList=JSON.parse(JSON.stringify(n)),"edit"===this.queryStr&&(this.isBeforeModify=!!(new Date<new Date(u)))),this.listLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkVal:function(t){this.form[t]=(this.form[t]+"").replace(/[^\d]/g,""),this.form[t]<0&&(this.form[t]=0)},checkValActiviryList:function(t,e){this.activityList[t][e]=(this.activityList[t][e]+"").replace(/[^\d]/g,""),this.activityList[t][e]<0&&(this.activityList[t][e]=0)},checkValPrize:function(t,e){this.prizeList[t][e]=(this.prizeList[t][e]+"").replace(/[^\d]/g,""),this.prizeList[t][e]<0&&(this.prizeList[t][e]=0)},changeGroup:function(t,e){var i=this.prizeList[t][e];this.prizeList[t][e]=i&&i.replace(/[^\,\d]/gi,"")},confirmBack:function(){this.isUpdate=!1,this.isModify=!1,this.getList()},checkArrValueNull:function(t,e){if(t.length){var i=!0;return t.forEach((function(t){var e=Object.keys(t);e.map((function(t){""==e[t]&&(i=!1)}))})),i}return this.$message({message:e,type:"error"}),!1},confirmSend:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.form.startTime&&this.form.endTime){t.next=3;break}return this.$refs["twoTimer"].valiteValue(),t.abrupt("return");case 3:if(this.checkArrValueNull(this.prizeList,"抽奖奖品及中奖人设置行 信息必须填写完整")){t.next=5;break}return t.abrupt("return");case 5:if(this.checkArrValueNull(this.activityList,"活动任务行 信息必须填写完整")){t.next=7;break}return t.abrupt("return");case 7:this.$refs["form"].validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(i){var a,r,l,c,u,d,f,p,h,y,v,b,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=29;break}if(8==e.prizeList.length){t.next=4;break}return e.$message({message:"抽奖池奖品及中奖人设置条目必须为8个",type:"error",duration:2e3}),t.abrupt("return");case 4:if(a=e.form,r=a.id,l=a.startTime,c=a.endTime,u=a.totalRaffle,d=a.activityStatus,f=a.playStatus,p=a.luckDrawEndTime,h=Object(n["a"])(a,m),"add"!=e.queryStr){t.next=12;break}if(!e.taskListFormal.length){t.next=10;break}e.activityList[0].id=e.taskListFormal[0].id,t.next=12;break;case 10:return e.$message({message:"后台没配置活动任务，请检查",type:"error"}),t.abrupt("return");case 12:if(y=e.activityList.map((function(t){return t.id})),p=~(p+"").indexOf("/")?(p+"").replace(/\//g,"-"):e.$util.dateFormat(p,"YYYY/MM/DD HH:mm:ss").replace(/\//g,"-"),v=Object(s["a"])({activityStatus:d?1:0,playStatus:f?1:0,activityTaskBo:e.activityList,activityPrizeRulesBo:e.prizeList,totalRaffle:u,remainingRaffle:u,taskId:y.join(","),startTime:(l+"").replace(/\//g,"-"),endTime:(c+"").replace(/\//g,"-"),luckDrawEndTime:p},h),e.btnLoading=!0,"add"==e.queryStr?Object.assign(v):Object.assign(v,{id:r}),"add"!=e.queryStr){t.next=23;break}return t.next=20,o["a"].getAccountActivityAdd(v);case 20:t.t0=t.sent,t.next=26;break;case 23:return t.next=25,o["a"].getAccountActivityUpdate(v);case 25:t.t0=t.sent;case 26:b=t.t0,b&&(g="add"==e.queryStr?"添加成功":"编辑成功",e.$message({message:g,type:"success"}),"add"==e.queryStr?(e.reloadTagsPage("/front/lottery/lotteryListDetail"),e.reloadTagsPage("/front/lottery/lotteryList"),e.$router.push({path:"/front/lottery/lotteryList"})):(e.isUpdate=!1,e.isModify=!1,e.reloadTagsPage("/front/lottery/lotteryList"),e.getList())),e.btnLoading=!1;case 29:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getTaskList:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].getAlltask({});case 2:e=t.sent,e&&(this.taskListFormal=e.data.data);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPrizeList:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].getAccountActivityPrizeList({});case 2:e=t.sent,e&&(this.prizeListFormal=e.data.data);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkTimer:function(t){"luckDrawEndTime"===t&&(this.form[t]?new Date(this.form[t])<=new Date(this.form["endTime"])&&(this.$message({message:"抽奖机会截止时间必须大于或等于抽奖券发放结束时间",type:"error"}),this.form["luckDrawEndTime"]=""):this.$message({message:"抽奖机会截止时间必填",type:"error"}))},initFunc:function(){var t=this;this.$store.dispatch("common/getSymbolListContract").then((function(){var e=t.$store.state.common.symbollistContract;if(e.length){var i={label:e[0].marketCoinName,value:e[0].marketId};t.coinList=[i]}})),this.queryId=this.$route.query.id||"",this.queryStr=this.$route.query.status,"add"==this.queryStr?(this.isModify=!0,this.$nextTick((function(){t.$refs["form"].resetFields(),t.prizeList.push({prizeId:"",num:"",totalLossAmount:"",winningUid:""}),t.activityList.push({id:"",amount:"",singleRaffle:"",coinId:"",singleRaffleLimit:0})}))):"edit"==this.queryStr?(this.isUpdate=!1,this.getList()):"detail"==this.queryStr&&(this.isModify=!1,this.getList()),this.getTaskList(),this.getPrizeList()}},mounted:function(){this.taskList=[],this.activityList=[],this.prizeList=[],this.getId="",this.form={activityName:"",startTime:"",endTime:"",userType:"",totalRaffle:"",rule:"",luckDrawEndTime:"",activityStatus:!1,playStatus:!1},this.$refs["form"].resetFields(),this.current_page=1,this.pageSize=10,this.total=0,this.pages=0,this.isUpdate=!1,this.isModify=!1,this.initFunc()}},p=f,h=(i("4f50"),i("2877")),y=Object(h["a"])(p,a,r,!1,null,null,null);e["default"]=y.exports}}]);