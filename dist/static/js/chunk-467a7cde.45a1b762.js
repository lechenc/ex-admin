(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-467a7cde"],{"32a6":function(e,t,r){var i=r("241e"),a=r("c3a1");r("ce7e")("keys",(function(){return function(e){return a(i(e))}}))},"50dd":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"voucherActivity-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addLine}},[e._v("创建活动")])],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,width:"1010px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"活动名称",prop:"activityName","label-width":e.labelWidth}},[r("el-input",{staticStyle:{width:"250px"},attrs:{type:"text",placeholder:"请输入",maxlength:"20"},model:{value:e.form.activityName,callback:function(t){e.$set(e.form,"activityName",t)},expression:"form.activityName"}})],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"活动类型",prop:"activityType","label-width":e.labelWidth}},[r("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择"},on:{change:e.typeChange},model:{value:e.form.activityType,callback:function(t){e.$set(e.form,"activityType",t)},expression:"form.activityType"}},e._l(e.activityTypeList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),e.voucherParametersShow?r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"条件类型",prop:"activityType","label-width":e.labelWidth}},[r("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择"},on:{change:e.relationConditionIdChange},model:{value:e.form.relationConditionId,callback:function(t){e.$set(e.form,"relationConditionId",t)},expression:"form.relationConditionId"}},e._l(e.voucherParametersList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.conditionName,value:e.id}})})),1)],1)],1):e._e()],1),e._v(" "),r("div",[r("el-row",e._l(e.selectList,(function(t,i){return r("div",{key:i,staticClass:"con"},[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"触发条件一",required:!0,"label-width":e.labelWidth}},[r("el-select",{staticStyle:{width:"290px"},attrs:{placeholder:"请选择",disabled:!(""!==e.form.activityType)},model:{value:t.triggerId,callback:function(r){e.$set(t,"triggerId",r)},expression:"el.triggerId"}},e._l(e.showTriggerArrList(t.triggerId),(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),e.showCheckbox?r("el-col",[r("el-form-item",{attrs:{label:"关联送券副标题",required:!0,"label-width":e.labelWidth}},[r("el-checkbox-group",{model:{value:t.relationIds,callback:function(r){e.$set(t,"relationIds",r)},expression:"el.relationIds"}},e._l(e.experienceArr,(function(t,i){return r("el-checkbox",{key:i,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1):r("el-col",{attrs:{span:7}},[r("el-form-item",{attrs:{label:"关联送券副标题",required:!0,"label-width":e.labelWidth}},[r("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:t.experienceId,callback:function(r){e.$set(t,"experienceId",r)},expression:"el.experienceId"}},e._l(e.experienceArr,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:5}},[r("el-form-item",{attrs:{required:6!=e.form.activityType,label:"送券数量","label-width":e.labelWidth}},[r("el-input",{attrs:{disabled:6==e.form.activityType,type:"number",placeholder:"正整数",value:t.couponNumber},on:{input:function(r){return t.couponNumber=e.isNumber(r)}}})],1)],1),e._v(" "),r("el-col",{attrs:{span:1}},[r("el-button",{staticStyle:{"margin-left":"20px","margin-top":"5px"},attrs:{round:"",plain:"",type:"danger",size:"small",disabled:!(""!==e.form.activityType)},on:{click:function(t){return t.stopPropagation(),e.delKeyIdList(i)}}},[e._v("删除")])],1)],1)})),0),e._v(" "),r("el-row",[r("div",[r("div",{staticClass:"middle"},[r("el-button",{attrs:{id:"addKeyIdBtn",type:"primary",size:"medium",disabled:!(""!==e.form.activityType)},on:{click:e.addKeyIdList}},[e._v("+添加")])],1)])])],1),e._v(" "),r("el-form-item",{attrs:{label:"发放模式",prop:"grantMode","label-width":e.labelWidth}},[r("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择",disabled:!0},model:{value:e.form.grantMode,callback:function(t){e.$set(e.form,"grantMode",t)},expression:"form.grantMode"}},e._l(e.grantModeArr,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),e.grantDayShow?r("el-form-item",{attrs:{label:"发券频率",prop:"grantDay","label-width":e.labelWidth}},[r("el-input",{staticStyle:{width:"250px"},attrs:{disabled:0==e.form.grantMode||1==e.form.activityType||4==e.form.activityType,type:"number",placeholder:"请输入1到24的正整数"},on:{input:function(t){return e.checkVal2("grantDay")}},model:{value:e.form.grantDay,callback:function(t){e.$set(e.form,"grantDay",t)},expression:"form.grantDay"}})],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"总成本限制",prop:"amountLimit","label-width":e.labelWidth}},[r("el-input",{staticStyle:{width:"250px"},attrs:{type:"number",placeholder:"请输入正整数"},on:{input:function(t){return e.checkVal("amountLimit")}},model:{value:e.form.amountLimit,callback:function(t){e.$set(e.form,"amountLimit",t)},expression:"form.amountLimit"}})],1),e._v(" "),r("b-two-date-timer",{ref:"twoTimer",attrs:{labelWidth:e.labelWidth,labelWords:"活动有效期",date1:e.form.effectiveStartTime,date2:e.form.effectiveEndTime},on:{"update:date1":function(t){return e.$set(e.form,"effectiveStartTime",t)},"update:date2":function(t){return e.$set(e.form,"effectiveEndTime",t)}}}),e._v(" "),r("el-form-item",{attrs:{label:"启用",prop:"status","label-width":e.labelWidth}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),e._v(" "),r("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogPrizeVisible,width:"550px",title:"发奖"},on:{"update:visible":function(t){e.dialogPrizeVisible=t}}},[r("el-form",{ref:"formPrize",attrs:{model:e.formPrize,rules:e.rulesPrize}},[r("el-form-item",{attrs:{label:"用户UID","label-width":e.labelWidth,prop:"uid"}},[r("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入用户UID（用 ，隔开）"},on:{input:function(t){return e.checkValPrize("uid")}},model:{value:e.formPrize.uid,callback:function(t){e.$set(e.formPrize,"uid",t)},expression:"formPrize.uid"}})],1)],1),e._v(" "),r("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticStyle:{"margin-right":"10px"},on:{click:function(t){t.stopPropagation(),e.dialogPrizeVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.prizeLoading},on:{click:function(t){return t.stopPropagation(),e.confirmPrizeDialog(t)}}},[e._v("确定")])],1)],1)],1)},a=[],n=(r("8e6e"),r("456d"),r("bd86")),l=r("a8db"),o=(r("28a5"),r("a481"),r("ac6a"),r("96cf"),r("3b8d")),s=r("c249"),c=r("2fee"),p=r("f21b"),u=r("e410"),d=r("4ec3"),f=(r("ca00"),r("57d7"));function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"VoucherActivity",components:{Btable:c["a"],Bsearch:s["a"],iconPage:p["a"],BTwoDateTimer:f["a"]},data:function(){var e=function(e,t,r){if(""!=t){var i=parseInt(t);if(!/^(([1-9])|(1\d)|(2[0-4]))$/.test(i))return r(new Error(e.message));r()}else r()};return{showCheckbox:!1,isCURDAuth:!0,btnLoading:!1,prizeLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",voucherParametersList:[],voucherParametersShow:!1,selectList:[],title:"",labelWidth:"110px",dialogVisible:!1,form:{id:"",activityName:"",activityType:"",grantMode:"",grantDay:"",amountLimit:"",effectiveStartTime:"",effectiveEndTime:"",status:!1,activityVOList:[],relationConditionId:""},rules:{activityName:[{required:!0,message:"必填"}],activityType:[{required:!0,message:"必填"}],grantMode:[{required:!0,message:"必填"}],grantDay:[{required:!1,message:"必填",trigger:"blur"},{validator:e,message:"请输入1到24的正整数",trigger:"blur"}],amountLimit:[{required:!0,message:"必填"}]},curRow:{},activityTypeList:[{label:"注册",value:0},{label:"净划入",value:1},{label:"邀请",value:2},{label:"实名认证",value:4},{label:"净入金和开仓交易额",value:5},{label:"新手操作指引",value:6}],grantModeArr:[{label:"手动模式",value:0},{label:"自动模式",value:1}],triggerArrNow:[],triggerArrAll:[],triggerArrAllNew:[],triggerArrAllOld:[],experienceArr:[],dialogPrizeVisible:!1,formPrize:{uid:""},rulesPrize:{uid:[{required:!0,message:"必填"}]},grantDayShow:!0}},watch:{"form.activityType":{handler:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var i,a,n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:if(this.grantDayShow=0!=t,5!=t){e.next=12;break}this.voucherParametersShow=!1,this.triggerArrAll=this.triggerArrAllNew,this.triggerArrNow=this.triggerArrAll,this.form.grantMode=0==t?0:1,this.form.grantDay="",this.showCheckbox=!1,e.next=33;break;case 12:if(1!=t&&2!=t){e.next=25;break}return this.voucherParametersShow=!0,this.showCheckbox=!1,this.triggerArrNow=[],i={activityType:t},this.form.grantDay=1==t?0:"",this.form.grantMode=0==t?0:1,e.next=21,d["a"].getSpecialTriggerCondition(i);case 21:a=e.sent,a&&(n=a.data.data,this.voucherParametersList=n),e.next=33;break;case 25:this.voucherParametersShow=!1,this.showCheckbox=6==t,this.triggerArrAll=this.triggerArrAllOld,l=[],this.triggerArrAll.forEach((function(e){e.activityType==t&&l.push(e)})),this.triggerArrNow=l,this.form.grantMode=0==t?0:1,1!=t&&4!=t||(this.form.grantDay=0);case 33:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},"form.grantMode":{handler:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(t||0==t)&&(this.rules.grantDay[0].required=!(!t||0==t),0==t&&(this.form.grantDay=""));case 1:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}},computed:{showTriggerArrList:function(){var e=this;return function(t){if(!e.triggerArrNow||e.triggerArrNow.length<=0)return[];var r=JSON.parse(JSON.stringify(e.triggerArrNow)),i=e.selectList.map((function(e){return e.triggerId}));return r=r.filter((function(e){return t==e.value||-1==i.indexOf(e.value)?e:void 0})),r}},showExperienceArrList:function(){var e=this;return function(t){if(e.experienceArr&&!(e.experienceArr.length<=0)){var r=JSON.parse(JSON.stringify(e.experienceArr)),i=e.selectList.map((function(e){return e.experienceId}));return r=r.filter((function(e){return t==e.value||-1==i.indexOf(e.value)?e:void 0})),r}}}},methods:{relationConditionIdChange:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.selectList=[],!t){e.next=8;break}return r={id:t},e.next=5,d["a"].getSpecialTriggerById(r);case 5:i=e.sent,a=i.data.data,i&&a.length&&(this.triggerArrNow=a.map((function(e){return{label:e.triggerCondition,value:e.id,activityType:e.activityType}})),this.$nextTick((function(){document.getElementById("addKeyIdBtn").click()})));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),typeChange:function(e){this.selectList=[],this.form.relationConditionId="",1!=e&&2!=e&&this.$nextTick((function(){document.getElementById("addKeyIdBtn").click()}))},delKeyIdList:function(e){this.selectList.splice(e,1)},addKeyIdList:function(){this.selectList.length>=this.triggerArrNow.length?this.$message.error("已无更多触发选项，不能再添加了"):this.selectList.push({triggerId:"",experienceId:"",couponNumber:"",relationIds:[]})},getAllTriggerCondition:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].getAllTriggerCondition({});case 2:t=e.sent,t.data&&(r=t.data.data,this.triggerArrAllOld=r.map((function(e){return{label:e.triggerCondition,value:e.id,activityType:e.activityType}})),this.triggerArrAll=JSON.parse(JSON.stringify(this.triggerArrAllOld)));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getAllTriggerConditionNew:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].getAllTriggerConditionNew({});case 2:t=e.sent,t&&(r=t.data.data,this.triggerArrAllNew=r.map((function(e){return{label:e.content,value:e.id,activityType:5}})));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getAllExperience:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].getAllExperienceNew({});case 2:t=e.sent,t.data&&(r=t.data.data,this.experienceArr=r.map((function(e){return{label:e.experienceSubtitle,value:e.id}})));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,i,a,n,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,i=t.row,this.curRow=i,"edit"===r&&(this.title="编辑活动",this.dialogVisible=!0,this.$nextTick((function(){if(l.$refs["form"].resetFields(),l.form={id:i.id,activityName:i.activityName,activityType:i.activityType,grantMode:i.grantMode,grantDay:i.grantDay,amountLimit:i.amountLimit,effectiveStartTime:(i.effectiveStartTime+"").replace(/\-/g,"/"),effectiveEndTime:(i.effectiveEndTime+"").replace(/\-/g,"/"),status:i.status,activityVOList:i.activityVOList,relationConditionId:i.relationConditionId},l.selectList=[],5==i.activityType)i.activityVOList.forEach((function(e){l.selectList.push({triggerId:e.conditionId,experienceId:e.experienceId,couponNumber:e.couponNumber})}));else if(6==i.activityType)if(i.activityVOList.length>0){var e=[];i.activityVOList.forEach((function(t){e.push(t.experienceId)})),l.selectList.push({triggerId:i.activityVOList[0].triggerId,relationIds:e})}else l.selectList=[];else i.activityVOList.forEach((function(e){l.selectList.push({triggerId:e.triggerId,experienceId:e.experienceId,couponNumber:e.couponNumber})})),2!=i.activityType&&1!=i.activityType||l.$nextTick((function(){l.triggerArrNow=i.activityVOList.map((function(e){return{label:e.triggerCondition,value:e.triggerId,activityType:i.activityType}}))}))}))),"del"===r&&this.$confirm("确定删除？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:i.id},e.next=3,d["a"].deleteActivity(t);case 3:r=e.sent,r&&(l.$message({type:"success",message:"删除操作成功!"}),l.getList());case 5:case"end":return e.stop()}}),e)})))).catch((function(){l.$message({type:"info",message:"已取消删除"})})),"trstart"!==r){e.next=10;break}return a={id:i.id,status:i.status?1:0},e.next=8,d["a"].changeActivityStatus(a);case 8:n=e.sent,n?(this.$message({type:"success",message:"操作成功!"}),this.getList()):this.getList();case 10:"preReview"===r&&(this.dialogPrizeVisible=!0,this.$nextTick((function(){l.$refs["formPrize"].resetFields(),l.formPrize={uid:""}})));case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(e){this.current_page=e,this.getList()},addLine:function(){var e=this;this.title="添加活动",this.dialogVisible=!0,this.showCheckbox=!1,this.$nextTick((function(){e.$refs["form"].resetFields(),e.$refs["twoTimer"].resetValue(),e.form={id:"",activityName:"",activityType:"",grantMode:"",grantDay:"",amountLimit:"",effectiveStartTime:"",effectiveEndTime:"",status:!1,activityVOList:[]},e.selectList=[{triggerId:"",experienceId:"",couponNumber:"",relationIds:[]}]}))},confirmPrizeDialog:function(){var e=this;this.$refs["formPrize"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var i,a,n,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=12;break}return i=e.formPrize.uid,a={activityId:e.curRow.id,list:i.split(",")},n=[],a.list.forEach((function(e){n.push({uid:+e})})),a.list=n,e.prizeLoading=!0,t.next=9,d["a"].setGrantExperience(a);case 9:l=t.sent,l&&(e.$message({type:"success",message:"操作成功!"}),e.dialogPrizeVisible=!1,e.getList()),e.prizeLoading=!1;case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},confirmOp:function(){var e=this;if(this.form.effectiveStartTime&&this.form.effectiveEndTime)if(this.selectList.length){if(this.showCheckbox){var t=!1;if(this.selectList.forEach((function(r){r.triggerId&&r.relationIds.length||(e.$message({message:"触发条件条目行必须填写完整",type:"error"}),t=!0)})),t)return}else{var r=!1;if(this.selectList.forEach((function(t){t.triggerId&&t.experienceId&&t.couponNumber||(e.$message({message:"触发条件条目行必须填写完整",type:"error"}),r=!0)})),r)return}this.$refs["form"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var i,a,n,o,s,c,p,u,f,h,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=21;break}if(i=e.form,a=i.id,n=i.effectiveStartTime,o=i.effectiveEndTime,s=i.status,i.activityVOList,c=Object(l["a"])(i,["id","effectiveStartTime","effectiveEndTime","status","activityVOList"]),p=[],u=[],e.showCheckbox?e.selectList.forEach((function(e){e.triggerId&&(p.push(e.triggerId),u.push({triggerId:e.triggerId,relationIds:e.relationIds.join()}))})):e.selectList.forEach((function(e){(e.triggerId||e.experienceId)&&(p.push(e.triggerId),u.push({triggerId:e.triggerId,experienceId:e.experienceId,couponNumber:e.couponNumber}))})),p=p.length>1?p.join(","):1==p.length?p[0]+"":"",f=g({effectiveStartTime:e.formatTime(n),effectiveEndTime:e.formatTime(o),status:s?1:0,activityVOList:u,relationTriggerId:p},c),a?Object.assign(f,{id:a}):Object.assign(f),e.btnLoading=!0,a){t.next=15;break}return t.next=12,d["a"].createActivity(f);case 12:t.t0=t.sent,t.next=18;break;case 15:return t.next=17,d["a"].editActivity(f);case 17:t.t0=t.sent;case 18:h=t.t0,h&&(m=a?"编辑成功":"添加成功",e.$message({message:m,type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else this.$message({message:"触发条件条目行必填",type:"error"});else this.$refs["twoTimer"].valiteValue()},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,i,a,n,l,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,d["a"].getActivityList(t);case 8:r=e.sent,r&&(i=r.data.data,a=i.records,n=i.total,l=i.current,o=i.pages,a.forEach((function(e){e["status"]=!!e["status"],e["isclick"]=!!e["status"]})),this.list=a,this.total=n,this.current_page=l,this.pages=o),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),r=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[0].value=[t,r],e.endTime=r.replace(/\//gi,"-"),e.startTime=t.replace(/\//gi,"-")}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},isNumber:function(e){return e=e.replace(/[^0-9]/gi,""),""==e?e="":e<1&&(e=1),e},checkVal2:function(e){this.form[e]=(this.form[e]+"").replace(/[^\d]/g,""),this.form[e]<0&&(this.form[e]=0)},checkVal:function(e){this.form[e]=(this.form[e]+"").replace(/[^\d]/g,""),""==this.form[e]?this.form[e]="":this.form[e]<1&&(this.form[e]=1)},checkValPrize:function(e){this.formPrize[e]=(this.formPrize[e]+"").replace(/[^\d,]/g,""),this.formPrize[e]<0&&(this.formPrize[e]=0)}},mounted:function(){var e=this.$util.getAuthority("VoucherActivity",u["a"],u["b"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchCofig=this.$util.clone(u["c"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getAllTriggerCondition(),this.getAllTriggerConditionNew(),this.getAllExperience()}},b=m,v=(r("e3ef"),r("0c7c")),y=Object(v["a"])(b,i,a,!1,null,null,null);t["default"]=y.exports},7514:function(e,t,r){"use strict";var i=r("5ca1"),a=r("0a49")(5),n="find",l=!0;n in[]&&Array(1)[n]((function(){l=!1})),i(i.P+i.F*l,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(n)},"87f3":function(e,t,r){var i=r("5ca1");i(i.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},9278:function(e,t,r){var i=r("5ca1");i(i.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},"940d":function(e,t,r){},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var i=r("e265"),a=r.n(i),n=r("a4bb"),l=r.n(n);function o(e,t){if(null==e)return{};var r,i,a={},n=l()(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}function s(e,t){if(null==e)return{};var r,i,n=o(e,t);if(a.a){var l=a()(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return s}))},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ce7e:function(e,t,r){var i=r("63b6"),a=r("584a"),n=r("294c");e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],l={};l[e]=t(r),i(i.S+i.F*n((function(){r(1)})),"Object",l)}},e265:function(e,t,r){e.exports=r("ed33")},e3ef:function(e,t,r){"use strict";var i=r("940d"),a=r.n(i);a.a},e410:function(e,t,r){"use strict";r.d(t,"j",(function(){return g})),r.d(t,"g",(function(){return i})),r.d(t,"h",(function(){return a})),r.d(t,"i",(function(){return n})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return u})),r.d(t,"k",(function(){return d})),r.d(t,"l",(function(){return f})),r.d(t,"m",(function(){return h}));var i=[{label:"体验金券ID",prop:"id"},{label:"体验金券名称",prop:"experienceName"},{label:"关联副标题",prop:"experienceSubtitle"},{label:"资产类型",prop:"assetsType",width:100,type:"filter",show_type:"text",filters:[{text:"USDT永续合约",val:1}]},{label:"合约交易对",prop:"coinMarket"},{label:"仓位类型",prop:"positionType",width:100,type:"filter",show_type:"text",filters:[{text:"全仓",val:0},{text:"逐仓",val:1}]},{label:"委托类型",prop:"entrustType",width:100,type:"filter",show_type:"text",filters:[{text:"市价",val:0}]},{label:"最高杠杆倍数",prop:"leverage"},{label:"面值",prop:"faceValue"},{label:"资产币种",prop:"marketIdmy"},{label:"有效期",width:310,arr:["effectiveStartTime","effectiveEndTime"],type:"textArr",join:"至"},{label:"创建时间",prop:"createTime",width:180},{label:"启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"操作",prop:"action",type:"action",width:240,btnGroup:[{label:"批量发券",fn:"batchGrant",type:"primary",alias:"batchGrant"},{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],a=[{label:"体验金券ID",prop:"id"},{label:"体验金券名称",prop:"experienceName"},{label:"关联副标题",prop:"experienceSubtitle"},{label:"资产类型",prop:"assetsType",width:100,type:"filter",show_type:"text",filters:[{text:"USDT永续合约",val:1}]},{label:"合约交易对",prop:"coinMarket"},{label:"仓位类型",prop:"positionType",width:100,type:"filter",show_type:"text",filters:[{text:"全仓",val:0},{text:"逐仓",val:1}]},{label:"委托类型",prop:"entrustType",width:100,type:"filter",show_type:"text",filters:[{text:"市价",val:0}]},{label:"最高杠杆倍数",prop:"leverage"},{label:"面值",prop:"faceValue"},{label:"资产币种",prop:"marketIdmy"},{label:"有效期",width:310,arr:["effectiveStartTime","effectiveEndTime"],type:"textArr",join:"至"},{label:"创建时间",prop:"createTime",width:180}],n=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"体验金券名称",prop:"experienceName",value:""}],l=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动类型",prop:"activityType",width:100,type:"filter",show_type:"text",filters:[{text:"注册",val:0},{text:"净入金",val:1},{text:"邀请",val:2},{text:"抽奖",val:3},{text:"实名认证",val:4},{text:"净入金和开仓交易额",val:5},{text:"新手操作指引",val:6}]},{label:"触发条件 - 关联送券副标题 - 送券数量",type:"labelArr",typeDetail:"stringlistMore",prop:"activityVOList",arrValue:["触发条件","关联送券副标题","送券数量"],arrProp:["triggerCondition","experienceSubtitle","couponNumber"],width:620},{label:"发放模式",prop:"grantMode",width:100,type:"filter",show_type:"text",filters:[{text:"手动模式",val:0},{text:"自动模式",val:1}]},{label:"发券频率(h)",prop:"grantDay"},{label:"总成本限制(USDT)",prop:"amountLimit"},{label:"活动任务有效时间",width:310,arr:["effectiveStartTime","effectiveEndTime"],type:"textArr",join:"至"},{label:"创建时间",prop:"createTime",width:180},{label:"启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"发奖",fn:"preReview",isPop:!1,filter_key:"activityType",filter_status:0,type:"success",alias:"preReview"},{label:"编辑",fn:"edit",type:"primary",alias:"edit",noIsClick:!0},{label:"删除",fn:"del",type:"primary",alias:"del",noIsClick:!0}]}],o=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动类型",prop:"activityType",width:100,type:"filter",show_type:"text",filters:[{text:"注册",val:0},{text:"净入金",val:1},{text:"邀请",val:2},{text:"抽奖",val:3},{text:"实名认证",val:4},{text:"净入金和开仓交易额",val:5},{text:"新手操作指引",val:6}]},{label:"触发条件 - 关联送券副标题 - 送券数量",type:"labelArr",typeDetail:"stringlistMore",prop:"activityVOList",arrValue:["触发条件","关联送券副标题","送券数量"],arrProp:["triggerCondition","experienceName","couponNumber"],width:620},{label:"发放模式",prop:"grantMode",width:100,type:"filter",show_type:"text",filters:[{text:"手动模式",val:0},{text:"自动模式",val:1}]},{label:"发券频率（h）",prop:"grantDay"},{label:"总成本限制(USDT)",prop:"amountLimit"},{label:"活动任务有效时间",width:310,arr:["effectiveStartTime","effectiveEndTime"],type:"textArr",join:"至"},{label:"创建时间",prop:"createTime",width:180}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"活动名称",prop:"activityName",value:""}],c=[{label:"账户",prop:"uid"},{label:"币种",prop:"coinName"},{label:"累计发放（张）",prop:"giveCouponTotal"},{label:"累计发放（USDT）",prop:"giveUsdtTotal"},{label:"累计回收（张）",prop:"recoveryCouponTotal"},{label:"累计回收（USDT）",prop:"recoveryUsdtTotal"},{label:"当前持仓金额",prop:"currentWarehouseAmount"},{label:"操作",prop:"action",type:"action",width:410,btnGroup:[{label:"发放记录",fn:"grant",type:"primary",alias:"grant"},{label:"成交记录",fn:"deal",type:"primary",alias:"deal"},{label:"持仓记录",fn:"position",type:"primary",alias:"position"}]}],p=[{label:"UID",prop:"uid"},{label:"体验金券ID",prop:"experienceId"},{label:"体验金券面值",prop:"faceValue"},{label:"数量",prop:"couponNumber"},{label:"体验金币种",prop:"coinMarket"},{label:"券状态",prop:"status",width:100,type:"filter",show_type:"text",filters:[{text:"未使用",val:0},{text:"已使用",val:1},{text:"已失效",val:2}]},{label:"发放时间",prop:"createTime"},{label:"使用时间",prop:"useTime"},{label:"失效时间",prop:"effectiveEndTime"}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"text",label:"UID",prop:"uid",value:""},{type:"text",label:"体验金券ID",prop:"experienceId",value:""},{type:"select",label:"券状态",prop:"status",value:"",list:[{label:"未使用",value:0},{label:"已使用",value:1},{label:"已失效",value:2}]}],d=[{label:"UID",prop:"uid"},{label:"领取类型",prop:"receiveType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:0},{text:"自动发放",val:1}]},{label:"发放名额数量",prop:"count"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"详情",fn:"details",type:"primary",alias:"details"}]}],f=[{label:"UID",prop:"uid"},{label:"领取类型",prop:"receiveType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:0},{text:"自动发放",val:1}]},{label:"发放名额数量",prop:"count"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"}],h=[{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"领取类型",prop:"receiveType",value:"",list:[{label:"自动发放",value:1},{label:"手动发放",value:0}]}],g=[{label:"序号",type:"index",width:80},{label:"UID",prop:"uid"},{label:"手机号",prop:"phone"},{label:"邮箱",prop:"eamil"},{label:"实名状态",prop:"verifiedStatus",width:100,type:"filter",show_type:"text",filters:[{text:"未认证",val:0},{text:"已认证",val:1}]},{label:"入金状态",prop:"inGoldCountStatus",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"登录IP",prop:"loginIp"},{label:"注册IP",prop:"registeredIp"},{label:"注册时间",prop:"registeredTime"}]},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("28a5"),r("f576"),r("a481"),r("6b54");var i=r("7618");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,a=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(i["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var n={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},l=a.replace(/{([ymdhisa])+}/g,(function(e,t){var r=n[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return l=l.replace(/\//gi,"-"),l}},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},ff53:function(e,t,r){"use strict";var i=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function n(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function l(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=n(e);return t>0?a(Number(e)*Math.pow(10,t)):Number(e)}function o(e){f&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),c=2;c<r;c++)a[c-2]=arguments[c];if(a.length>0)return s.apply(void 0,[s(e,t),a[0]].concat(Object(i["a"])(a.slice(1))));var p=l(e),u=l(t),d=n(e)+n(t),f=p*u;return o(f),f/Math.pow(10,d)}function c(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),l=2;l<r;l++)a[l-2]=arguments[l];if(a.length>0)return c.apply(void 0,[c(e,t),a[0]].concat(Object(i["a"])(a.slice(1))));var o=Math.pow(10,Math.max(n(e),n(t)));return(s(e,o)+s(t,o))/o}function p(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),l=2;l<r;l++)a[l-2]=arguments[l];if(a.length>0)return p.apply(void 0,[p(e,t),a[0]].concat(Object(i["a"])(a.slice(1))));var o=Math.pow(10,Math.max(n(e),n(t)));return(s(e,o)-s(t,o))/o}function u(e,t){for(var r=arguments.length,c=new Array(r>2?r-2:0),p=2;p<r;p++)c[p-2]=arguments[p];if(c.length>0)return u.apply(void 0,[u(e,t),c[0]].concat(Object(i["a"])(c.slice(1))));var d=l(e),f=l(t);return o(d),o(f),s(d/f,a(Math.pow(10,n(t)-n(e))))}function d(e,t){var r=Math.pow(10,t);return u(Math.round(s(e,r)),r)}var f=!0;function h(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f=e}t["a"]={strip:a,plus:c,minus:p,times:s,divide:u,round:d,digitLength:n,float2Fixed:l,enableBoundaryChecking:h}}}]);