(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84b07096"],{"091b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"agentsListsConfig-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1)],1),e._v(" "),a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addCoin}},[e._v("添加级别")])],1),e._v(" "),a("div",[a("Btable",{attrs:{maxHeight:"800px",listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.formName,width:"600px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"cForm",attrs:{model:e.cForm,rules:e.rules}},[a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"等级模式","label-width":e.formLabelWidth,prop:"levelMode"}},[a("el-select",{attrs:{placeholder:"",wdith:"20%",disabled:!!e.cForm.id},model:{value:e.cForm.levelMode,callback:function(t){e.$set(e.cForm,"levelMode","string"===typeof t?t.trim():t)},expression:"cForm.levelMode"}},e._l(e.levelModeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"代理级别","label-width":e.formLabelWidth,prop:"level"}},[a("el-input",{attrs:{type:e.cForm.id||2!=e.cForm.levelMode?"text":"number",placeholder:"请输入",disabled:!!e.cForm.id},model:{value:e.cForm.level,callback:function(t){e.$set(e.cForm,"level","string"===typeof t?t.trim():t)},expression:"cForm.level"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"代理模式","label-width":e.formLabelWidth,prop:"agentMode"}},[a("el-select",{attrs:{placeholder:"",wdith:"20%"},on:{change:e.agentModeChange},model:{value:e.cForm.agentMode,callback:function(t){e.$set(e.cForm,"agentMode","string"===typeof t?t.trim():t)},expression:"cForm.agentMode"}},e._l(e.modeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"手续费返佣比例","label-width":e.formLabelWidth,prop:"feeCommission"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("feeCommission",1)}},model:{value:e.cForm.feeCommission,callback:function(t){e.$set(e.cForm,"feeCommission","string"===typeof t?t.trim():t)},expression:"cForm.feeCommission"}},[a("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1)],1)],1),e._v(" "),e.modeIsShow?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"用户盈利承担比例","label-width":e.formLabelWidth,prop:"profitRatio"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("profitRatio",1)}},model:{value:e.cForm.profitRatio,callback:function(t){e.$set(e.cForm,"profitRatio","string"===typeof t?t.trim():t)},expression:"cForm.profitRatio"}},[a("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1)],1)],1):e._e(),e._v(" "),e.modeIsShow?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"用户亏损分红比例","label-width":e.formLabelWidth,prop:"lossRatio"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("lossRatio",1)}},model:{value:e.cForm.lossRatio,callback:function(t){e.$set(e.cForm,"lossRatio","string"===typeof t?t.trim():t)},expression:"cForm.lossRatio"}},[a("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1)],1)],1):e._e(),e._v(" "),e.modeIsShow?a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"每次结算盈利情况下可提取比例","label-width":e.formLabelWidth,prop:"profitExtractRatio"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("profitExtractRatio",1)}},model:{value:e.cForm.profitExtractRatio,callback:function(t){e.$set(e.cForm,"profitExtractRatio","string"===typeof t?t.trim():t)},expression:"cForm.profitExtractRatio"}},[a("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1)],1)],1):e._e(),e._v(" "),a("el-row",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"返佣结算时间","label-width":e.formLabelWidth,prop:"delayDay"}},[a("el-col",{attrs:{span:5}},[a("el-select",{attrs:{placeholder:""},model:{value:e.cForm.delayUnit,callback:function(t){e.$set(e.cForm,"delayUnit","string"===typeof t?t.trim():t)},expression:"cForm.delayUnit"}},e._l(e.delayUnitList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{type:"text",placeholder:"请输入时间(必须为正整数)"},on:{input:function(t){return e.checkVal("delayDay")}},model:{value:e.cForm.delayDay,callback:function(t){e.$set(e.cForm,"delayDay","string"===typeof t?t.trim():t)},expression:"cForm.delayDay"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},i=[],o=(a("ac6a"),a("a481"),a("96cf"),a("3b8d")),s=a("c249"),n=a("2fee"),l=a("f21b"),c=a("65fc"),m=a("4ec3"),u=(a("bc3a"),a("34da"),a("ff53")),d={name:"AgentsListsConfig",components:{Btable:n["a"],Bsearch:s["a"],iconPage:l["a"]},watch:{dialogFormVisible:function(e){e||(this.modeIsShow=!1)},"cForm.delayUnit":function(e){1==e?(this.sevenreg=/^[1-7]$/,this.sevenregmsg="请输1-7的正整数"):2==e&&(this.sevenreg=/^([1-9]|1[0-9]|20|21|22|23|24|25|26|27|28)$/,this.sevenregmsg="请输1-28的正整数")}},data:function(){var e=this,t=function(t,a,r){if(!e.sevenreg.test(a))return r(new Error(e.sevenregmsg));r()};return{sevenreg:/^[1-7]$/,sevenregmsg:"请输1-7的正整数",modeIsShow:!1,btnArr:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,formLabelWidth:"150px",dialogFormVisible:!1,modeList:[{label:"手续费模式",value:1},{label:"团队长模式",value:2}],delayUnitList:[{label:"按周",value:1},{label:"按月",value:2}],editBeforeLevelMode:0,cForm:{id:"",level:"",levelMode:"",agentMode:"",feeCommission:"",delayDay:"",delayUnit:1,profitRatio:"",lossRatio:"",profitExtractRatio:""},formName:"添加级别",rules:{level:[{required:!0,message:"必填",trigger:"blur"}],levelMode:[{required:!0,message:"必填",trigger:"blur"}],agentMode:[{required:!0,message:"必填",trigger:"blur"}],feeCommission:[{required:!0,message:"必填",trigger:"blur"}],delayDay:[{required:!0,message:"必填",trigger:"blur"},{validator:t,required:!0,trigger:"blur"}],profitRatio:[{required:!0,message:"必填",trigger:"blur"}],lossRatio:[{required:!0,message:"必填",trigger:"blur"}],profitExtractRatio:[{required:!0,message:"必填",trigger:"blur"}]},levelModeList:[{label:"固定模式",value:1},{label:"升级模式",value:2}]}},methods:{agentModeChange:function(e){1==e?this.modeIsShow=!1:2==e&&(this.modeIsShow=!0)},addCoin:function(){var e=this;this.formName="添加级别",this.dialogFormVisible=!0,this.leverList=[],this.$nextTick((function(){e.$refs["cForm"].resetFields(),e.cForm={id:"",level:"",levelMode:"",agentMode:"",feeCommission:"",delayDay:"",delayUnit:1,profitRatio:"",lossRatio:"",profitExtractRatio:""}}))},confirmOp:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["cForm"].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){var r,i,o,s,n,l,c,u,d,p,f,h,g,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=18;break}if(r=t.cForm,i=r.id,o=r.level,s=r.agentMode,n=r.levelMode,l=r.feeCommission,c=r.profitRatio,u=r.lossRatio,d=r.profitExtractRatio,p=r.delayDay,f=r.delayUnit,h={level:o,agentMode:s,levelMode:n,delayUnit:f,delayDay:p,feeCommission:l+"%",businessType:2},t.modeIsShow&&(h.profitRatio=c+"%",h.lossRatio=u+"%",h.profitExtractRatio=d+"%"),""===i||Object.assign(h,{id:i}),t.btnLoading=!0,""!==i){e.next=12;break}return e.next=9,m["a"].addBusinessLevelSelect(h);case 9:e.t0=e.sent,e.next=15;break;case 12:return e.next=14,m["a"].updateBusinessLevel(h);case 14:e.t0=e.sent;case 15:g=e.t0,g&&(v=""===i?"添加成功":"修改成功",t.$message({message:v,type:"success"}),t.dialogFormVisible=!1,t.getList()),t.btnLoading=!1;case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.fn,r=t.row,"del"!==a){e.next=4;break}return this.$confirm("确认删除吗?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].deleteBusinessLevel({id:r.id});case 2:t=e.sent,t&&(i.$message({type:"success",message:"删除成功"}),i.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),e.abrupt("return");case 4:"edit"===a&&(this.formName="编辑级别",this.dialogFormVisible=!0,1==r.agentMode?this.modeIsShow=!1:this.modeIsShow=!0,this.$nextTick((function(){i.$refs["cForm"].resetFields();var e=r.id,t=r.level,a=r.agentMode,o=r.levelMode,s=r.feeCommission,n=r.profitRatio,l=r.lossRatio,c=r.profitExtractRatio,m=r.delayUnit,u=r.delayDay;i.cForm={id:e,level:t,agentMode:a,levelMode:o,delayUnit:m,delayDay:u,feeCommission:i.percentToNum(s),profitRatio:i.percentToNum(n),lossRatio:i.percentToNum(l),profitExtractRatio:i.percentToNum(c)},i.editBeforeLevelMode=o})));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkVal:function(e,t){this.cForm[e]=(this.cForm[e]+"").replace(/[^\d.]/g,""),t&&this.cForm[e]>=100&&(this.cForm[e]=99.99),this.cForm[e]=(this.cForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),"delayDay"==e&&(this.cForm[e]=(this.cForm[e]+"").replace(/\./g,"")),this.cForm[e]<0&&(this.cForm[e]=0)},percentToNum:function(e){return-1!==(e+"").indexOf("%")?(e=e.replace(/\%/,""),e):e},numToPercent:function(e){return u["a"].times(e,100)},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i,o,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize,businessType:2},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,m["a"].businessLevelList(t);case 8:a=e.sent,a&&(r=a.data.data,i=r.records,o=r.total,s=r.current,n=r.pages,this.total=o,this.pages=n,this.current_page=s,this.list=i,this.listLoading=!1);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.configs=c["j"],this.searchCofig=this.$util.clone(c["k"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},p=d,f=(a("1a22"),a("0c7c")),h=Object(f["a"])(p,r,i,!1,null,null,null);t["default"]=h.exports},"1a22":function(e,t,a){"use strict";var r=a("672f"),i=a.n(r);i.a},"34da":function(e,t,a){"use strict";a("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,r){a.path==e&&(t=r)})),t>=0&&a.splice(t,1)}}}},"672f":function(e,t,a){}}]);