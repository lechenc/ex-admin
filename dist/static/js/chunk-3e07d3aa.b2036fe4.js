(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e07d3aa"],{"32a6":function(e,t,r){var a=r("241e"),o=r("c3a1");r("ce7e")("keys",(function(){return function(e){return o(a(e))}}))},5432:function(e,t,r){"use strict";var a=r("67eb"),o=r.n(a);o.a},"5c3f":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("8e6e"),core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("456d"),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__),E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("bd86"),E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a8db"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__),E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("3b8d"),_components_search_b_search__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("c249"),_components_table_b_table__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("2fee"),_components_icon_page__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("f21b"),_config_column_contractAgent__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("65fc"),_api_api__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("4ec3"),_utils_module_md5__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("70ac"),_utils_module_md5__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_utils_module_md5__WEBPACK_IMPORTED_MODULE_14__);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}__webpack_exports__["a"]={name:"AgentsLists",components:{Btable:_components_table_b_table__WEBPACK_IMPORTED_MODULE_10__["a"],Bsearch:_components_search_b_search__WEBPACK_IMPORTED_MODULE_9__["a"],iconPage:_components_icon_page__WEBPACK_IMPORTED_MODULE_11__["a"]},data:function(){var e=function(e,t,r){""==t?r(new Error("请输入密码")):/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g.test(t)||"********"===t?r():r(new Error("请输入包含字母和数字的6-16位密码"))};return{paramsRules:{agentUID:[{required:!0,message:"必填",trigger:"blur"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}]},isBusiness:!1,paramsForm:{},paramsVisible:!1,paramsBtnLoading:!1,emailReg:/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,phoneReg:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,listLoading:!1,btnLoading:!1,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",userTypeList:[{label:"币币账户",value:1}],delayUnitList:[{label:"按周",value:1},{label:"按月",value:2},{label:"按日",value:3}],btnArr:[],agentModelList:[{label:"手续费模式",value:1},{label:"团队长模式",value:2}],agentLevelList:[],formLabelWidth:"170px",editBeforeLevelMode:0,userId:"",cForm:{uid:"",username:"",remark:"",password:"",commissionPercent:"",packPercent:"",bondPercent:"",delayDay:"",feeDelayDay:"",delayUnit:1,feeDelayUnit:1,commissionSwitch:!0,loginSwitch:!0,bondLimit:"",googleCode:"",profitMargin:"",userProfitMargin:"",phoneEmailFirst:"",phoneEmailSecond:"",phoneEmailThird:"",selfCommission:0},rules:{uid:[{required:!0,message:"必填",trigger:"blur"}],username:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"}],password:[{required:!0,validator:e,trigger:"blur"}],commissionPercent:[{required:!0,message:"必填",trigger:"blur"}],packPercent:[{required:!0,message:"必填",trigger:"blur"}],bondPercent:[{required:!0,message:"必填",trigger:"blur"}],bondLimit:[{required:!0,message:"必填",trigger:"blur"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}],delayDay:[{required:!0,message:"必填",trigger:"blur"}],feeDelayDay:[{required:!0,message:"必填",trigger:"blur"}],selfCommission:[{required:!0,message:"必填",trigger:"blur"}]},formName:"",dialogFormVisible:!1,releaseMoneyVisible:!1,oldPwd:"",passwordType:"password",inputLevelTxt:"请先选择代理模式",levelModeList:[{label:"固定模式",value:1},{label:"升级模式",value:2}],twoLevelModel:!1,releaseMoneyForm:{agentUID:"",userType:1,coinId:"USDT",bondAmount:"",amount:"",googleCode:""},releaseMoneyRules:{agentUID:[{required:!0,message:"必填",trigger:"blur"}],userType:[{required:!0,message:"必填",trigger:"blur"}],coinId:[{required:!0,message:"必填",trigger:"blur"}],bondAmount:[{required:!0,message:"必填",trigger:"blur"}],amount:[{required:!0,message:"必填",trigger:"blur"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}]},releaseMoneybtnLoading:!1,coin_List:[],decimalReg:/^(\-)*(\d+)\.(\d\d\d\d).*$/}},watch:{"cForm.agentMode":{handler:function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}if(this.cForm.agentMode&&this.cForm.levelMode){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].getLevelAgentMode({agentMode:this.cForm.agentMode,businessType:2,levelMode:this.cForm.levelMode});case 5:a=e.sent,a&&(o=a.data.data.map((function(e){return{label:e["level"],value:e["level"]}})),this.agentLevelList=o,this.inputLevelTxt=this.agentLevelList.length?"请选择":"请先选择代理模式",2==this.cForm.levelMode&&(this.cForm.level=o&&o[0].value||""));case 7:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},"cForm.levelMode":{handler:function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}if(this.cForm.agentMode&&this.cForm.levelMode){e.next=3;break}return e.abrupt("return");case 3:return 1==this.cForm.levelMode&&2==this.editBeforeLevelMode&&this.cForm.userId&&(this.cForm.level=""),e.next=6,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].getLevelAgentMode({agentMode:this.cForm.agentMode,businessType:2,levelMode:this.cForm.levelMode});case 6:a=e.sent,a&&(o=a.data.data.map((function(e){return{label:e["level"],value:e["level"]}})),this.agentLevelList=o,this.inputLevelTxt=this.agentLevelList.length?"请选择":"请先选择等级模式",2==this.cForm.levelMode&&(this.cForm.level=o&&o[0].value||""));case 8:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},releaseMoneyVisible:function(e){e||(this.releaseMoneyForm={agentUID:"",userType:1,coinId:"USDT",bondAmount:"",amount:"",googleCode:""},this.decimalReg=/^(\-)*(\d+)\.(\d\d\d\d).*$/)}},methods:{paramsConfirmOp:function(){var e=this;this.$refs["paramsForm"].validate(function(){var t=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=11;break}if(a=e.paramsForm,o=a.agentUID,n=a.googleCode,!e.paramsBtnLoading){t.next=4;break}return t.abrupt("return");case 4:return s={agentUID:o,googleCode:n},e.paramsBtnLoading=!0,t.next=8,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].apiParamsConfirmOp(s);case 8:i=t.sent,i&&(e.$message({message:"设置成功",type:"success"}),e.paramsVisible=!1,e.getList()),e.paramsBtnLoading=!1;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editParams:function(){var e=this;this.paramsVisible=!0,this.$nextTick((function(){e.$refs["paramsForm"].resetFields(),e.paramsForm={agentUID:"",googleCode:""}}))},changeDecimal:function changeDecimal(val){this.releaseMoneyForm.amount="";for(var decimal=this.coin_List.filter((function(e){return e["label"]==val}))[0].decimalPlaces,arr=[],i=0;i<decimal;i++)arr.push("\\d");var s1="/^(\\-)*(\\d+)\\.(",s2=arr.join(""),s3=").*$/",reg=s1.concat(s2,s3);this.decimalReg=eval(reg)},getSymbolList:function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getCoinList").then((function(){var e=t.$store.state.common.coinlist;t.coin_List=e.filter((function(e){return"USDT"==e.label}))}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),releaseMoneyconfirmOp:function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["releaseMoneyForm"].validate(function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(r){var a,o,n,s,i,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=13;break}if(a=t.releaseMoneyForm,o=a.bondAmount,n=a.amount,s=a.googleCode,i=a.agentUID,o&&!(n>o)){e.next=4;break}return e.abrupt("return",t.$message.error("代理的可释放余额不足"));case 4:if(!t.releaseMoneybtnLoading){e.next=6;break}return e.abrupt("return");case 6:return t.releaseMoneybtnLoading=!0,l={amount:n,googleCode:s,agentUID:i},e.next=10,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].apiReleaseAgentMargin(l);case 10:c=e.sent,c&&(t.$message.success("操作成功"),t.releaseMoneyVisible=!1,t.getList()),t.releaseMoneybtnLoading=!1;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),delayUnitChange:function(e,t){3==e?(this.cForm[t]=16,this.$refs["cForm"].validateField(t)):this.cForm[t]=""},releaseMoneyCheckVal:function(e,t){"amount"===e&&(this.releaseMoneyForm[e]=(this.releaseMoneyForm[e]+"").replace(this.decimalReg,"$1$2.$3")),t&&(this.releaseMoneyForm[e]=(this.releaseMoneyForm[e]+"").replace(/[^\d]/g,"")),this.releaseMoneyForm[e]<0&&(this.releaseMoneyForm[e]=0)},checkVal:function(e,t){this.cForm[e]=(this.cForm[e]+"").replace(/[^\d]/g,""),1===t&&this.cForm[e]>=100&&(this.cForm[e]=100),2===t&&this.cForm[e]>=100&&(this.cForm[e]=100),"delayDay"==e?(this.cForm[e]=(this.cForm[e]+"").replace(/\./g,""),1===this.cForm["delayUnit"]&&this.cForm[e]>7&&(this.cForm[e]=7),2===this.cForm["delayUnit"]&&this.cForm[e]>28&&(this.cForm[e]=28),"0"==this.cForm[e]&&(this.cForm[e]=1)):"feeDelayDay"==e&&(this.cForm[e]=(this.cForm[e]+"").replace(/\./g,""),1===this.cForm["feeDelayUnit"]&&this.cForm[e]>7&&(this.cForm[e]=7),2===this.cForm["feeDelayUnit"]&&this.cForm[e]>28&&(this.cForm[e]=28),"0"==this.cForm[e]&&(this.cForm[e]=1)),this.cForm[e]<0&&(this.cForm[e]=0)},paramsCheckVal:function(e,t){this.paramsForm[e]>=100&&(this.paramsForm[e]=100),this.paramsForm[e]<0&&(this.paramsForm[e]=0),t&&(this.paramsForm[e]=(this.paramsForm[e]+"").replace(/[^\d]/g,""))},uploadIcon:function(e,t,r){if(!e.data)return this.$message.error("图片上传失败"),void this.$refs.iconDot.clearFiles();this.cForm.communityPhoto=e.data[0].url,this.$refs.iconDot.handleRemove(t),this.$refs.iconDot.clearFiles()},uploadError:function(){this.$message.error("图片上传失败")},exceed:function(e,t){this.$message.error("单次只能选择一张图片进行上传！")},onCopy:function(){this.$message.success("复制成功")},onError:function(){this.$message.success("复制失败")},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},showPwd:function(){this.passwordType="password"===this.passwordType?"text":"password"},doHandle:function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,n,s,i,l,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,this.userId=a.userId,"detail"!==r){e.next=5;break}return this.$router.push({path:"/agent/agentsListsDetail",query:{userId:a.userId}}),e.abrupt("return");case 5:if("trlogin"!==r&&"trclose"!==r){e.next=14;break}return o={trclose:function(){return{commissionSwitch:a.commissionSwitch?1:0}},trlogin:function(){return{loginSwitch:a.loginSwitch?1:0}}},n={userId:a.userId,businessType:2},Object.assign(n,o[r]()),e.next=11,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].updateBusinessAgent(n);case 11:return s=e.sent,s?(this.$message({message:"操作成功",type:"success"}),this.getList()):this.getList(),e.abrupt("return");case 14:if("edit"===r&&(this.formName="编辑代理商",this.dialogFormVisible=!0,this.$nextTick((function(){c.$refs["cForm"].resetFields();var e=a.uid,t=a.username,r=a.remark,o=a.userGrade,n=a.commissionPercent,s=a.packPercent,i=a.bondPercent,l=a.delayDay,_=a.delayUnit,m=a.feeDelayDay,u=a.feeDelayUnit,p=a.commissionSwitch,d=a.loginSwitch,h=a.bondLimit,g=a.googleCode,b=a.profitMargin,f=a.userProfitMargin,y=a.phoneEmailFirst,v=a.phoneEmailSecond,E=a.phoneEmailThird,M=a.selfCommission;c.twoLevelModel=2==o,31==a.userType?c.isBusiness=!0:c.isBusiness=!1,c.cForm={uid:e,username:t,remark:r,password:"********",commissionPercent:n.split("%").join(""),packPercent:s.split("%").join(""),bondPercent:i.split("%").join(""),delayDay:l,delayUnit:_,feeDelayDay:m,feeDelayUnit:u,commissionSwitch:1===p,loginSwitch:1===d,bondLimit:h,googleCode:g,profitMargin:b,userProfitMargin:f,phoneEmailFirst:y,phoneEmailSecond:v,phoneEmailThird:E,selfCommission:M}}))),"releaseMoney"!=r){e.next=23;break}return this.releaseMoneyVisible=!0,this.releaseMoneyForm.agentUID=a.uid,i={agentUserId:a.userId},e.next=21,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].apiGetAgentBondAmount(i);case 21:l=e.sent,l&&(this.releaseMoneyForm.bondAmount=l.data.data);case 23:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addLine:function(){var e=this;this.formName="添加代理商",this.userId="",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["cForm"].resetFields(),e.twoLevelModel=!1,e.isBusiness=!1,e.cForm={uid:"",username:"",remark:"",password:"",commissionPercent:"",packPercent:"",bondPercent:"",delayDay:"",feeDelayDay:"",delayUnit:1,feeDelayUnit:1,commissionSwitch:!0,loginSwitch:!0,bondLimit:"",googleCode:"",profitMargin:"",userProfitMargin:"",phoneEmailFirst:"",phoneEmailSecond:"",phoneEmailThird:"",selfCommission:0}}))},confirmOp:function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["cForm"].validate(function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(r){var a,o,n,s,i,l,c,_,m,u,p,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=28;break}if(a=t.userId,o=t.cForm,n=o.password,s=o.commissionSwitch,i=o.loginSwitch,l=o.commissionPercent,c=o.packPercent,_=o.bondPercent,m=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["a"])(o,["password","commissionSwitch","loginSwitch","commissionPercent","packPercent","bondPercent"]),u=_objectSpread({loginSwitch:i?1:0,commissionSwitch:s?1:0,commissionPercent:l+"%",bondPercent:_+"%"},m),t.isBusiness?u.packPercent="0%":u.packPercent=c+"%",(a&&"********"!==n||!a)&&(u.password=_utils_module_md5__WEBPACK_IMPORTED_MODULE_14___default.a.md5(n)),!u.phoneEmailFirst){e.next=9;break}if(t.emailReg.test(u.phoneEmailFirst)||t.phoneReg.test(u.phoneEmailFirst)){e.next=9;break}return e.abrupt("return",t.$message.error("手机号或者邮箱格式错误"));case 9:if(!u.phoneEmailSecond){e.next=12;break}if(t.emailReg.test(u.phoneEmailSecond)||t.phoneReg.test(u.phoneEmailSecond)){e.next=12;break}return e.abrupt("return",t.$message.error("手机号或者邮箱格式错误"));case 12:if(!u.phoneEmailThird){e.next=15;break}if(t.emailReg.test(u.phoneEmailThird)||t.phoneReg.test(u.phoneEmailThird)){e.next=15;break}return e.abrupt("return",t.$message.error("手机号或者邮箱格式错误"));case 15:if(t.btnLoading=!0,""!==a){e.next=22;break}return e.next=19,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].addAgent(u);case 19:e.t0=e.sent,e.next=25;break;case 22:return e.next=24,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].updateAgent(Object.assign(u,{userId:a}));case 24:e.t0=e.sent;case 25:p=e.t0,p&&(d=""===a?"新增成功":"编辑成功",t.$message({message:d,type:"success"}),t.dialogFormVisible=!1,t.getList()),t.btnLoading=!1;case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(E_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var t,r,a,o,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,_api_api__WEBPACK_IMPORTED_MODULE_13__["a"].getAgentList(t);case 8:r=e.sent,r&&(a=r.data.data,o=a.records,n=a.total,s=a.current,i=a.pages,this.total=n,this.pages=i,this.current_page=s,this.list=o),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){},formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e}},activated:function(){},mounted:function(){var e=this.$util.getAuthority("AgentsLists",_config_column_contractAgent__WEBPACK_IMPORTED_MODULE_12__["g"],_config_column_contractAgent__WEBPACK_IMPORTED_MODULE_12__["h"]);this.configs=e.val,this.btnArr=e.btnArr||[],this.searchCofig=this.$util.clone(_config_column_contractAgent__WEBPACK_IMPORTED_MODULE_12__["i"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getSymbolList()}}},"67eb":function(e,t,r){},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},a4bb:function(e,t,r){e.exports=r("8aae")},a4e6:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"agentsLists-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.btnArr.length?r("div",{staticClass:"container-btn"},[e.btnArr.includes("add")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addLine}},[e._v("添加一级代理商")]):e._e(),e._v(" "),e.btnArr.includes("params")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.editParams}},[e._v("商务返佣参数设置")]):e._e()],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,width:"700px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"cForm",attrs:{model:e.cForm,rules:e.rules}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"代理商UID","label-width":e.formLabelWidth,prop:"uid"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!!e.userId},model:{value:e.cForm.uid,callback:function(t){e.$set(e.cForm,"uid","string"===typeof t?t.trim():t)},expression:"cForm.uid"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"登录名","label-width":e.formLabelWidth,prop:"username"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入6-20位字符，不可输入特殊字符"},model:{value:e.cForm.username,callback:function(t){e.$set(e.cForm,"username","string"===typeof t?t.trim():t)},expression:"cForm.username"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"登录密码","label-width":e.formLabelWidth,prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入包含字母和数字的6-16位密码"},model:{value:e.cForm.password,callback:function(t){e.$set(e.cForm,"password","string"===typeof t?t.trim():t)},expression:"cForm.password"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth,prop:"remark"}},[r("el-input",{attrs:{maxlength:"50",type:"text",placeholder:"请输入"},model:{value:e.cForm.remark,callback:function(t){e.$set(e.cForm,"remark","string"===typeof t?t.trim():t)},expression:"cForm.remark"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"手续费返佣比例","label-width":e.formLabelWidth,prop:"commissionPercent"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("commissionPercent",1)}},model:{value:e.cForm.commissionPercent,callback:function(t){e.$set(e.cForm,"commissionPercent","string"===typeof t?t.trim():t)},expression:"cForm.commissionPercent"}},[r("template",{slot:"append"},[e._v("%")])],2)],1)],1)],1),e._v(" "),e.isBusiness?e._e():r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"团队长返佣比例","label-width":e.formLabelWidth,prop:"packPercent"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("packPercent",1)}},model:{value:e.cForm.packPercent,callback:function(t){e.$set(e.cForm,"packPercent","string"===typeof t?t.trim():t)},expression:"cForm.packPercent"}},[r("template",{slot:"append"},[e._v("%")])],2)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"每次结算盈利情况下加入保证金比例","label-width":e.formLabelWidth,prop:"bondPercent"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("bondPercent",2)}},model:{value:e.cForm.bondPercent,callback:function(t){e.$set(e.cForm,"bondPercent","string"===typeof t?t.trim():t)},expression:"cForm.bondPercent"}},[r("template",{slot:"append"},[e._v("%")])],2)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"是否本人手续费返佣",prop:"selfCommission"}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.cForm.selfCommission,callback:function(t){e.$set(e.cForm,"selfCommission",t)},expression:"cForm.selfCommission"}},[r("el-option",{attrs:{value:0,label:"否"}}),e._v(" "),r("el-option",{attrs:{value:1,label:"是"}})],1)],1)],1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"手续费返佣结算时间","label-width":e.formLabelWidth,prop:"feeDelayDay"}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.delayUnitChange(e.cForm.feeDelayUnit,"feeDelayDay")}},model:{value:e.cForm.feeDelayUnit,callback:function(t){e.$set(e.cForm,"feeDelayUnit",t)},expression:"cForm.feeDelayUnit"}},e._l(e.delayUnitList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-col",{attrs:{span:16}},[r("el-input",{attrs:{disabled:3==e.cForm.feeDelayUnit,type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("feeDelayDay")}},model:{value:e.cForm.feeDelayDay,callback:function(t){e.$set(e.cForm,"feeDelayDay",t)},expression:"cForm.feeDelayDay"}})],1)],1)],1)],1)],1),e._v(" "),e.isBusiness?e._e():r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"团队长返佣结算时间","label-width":e.formLabelWidth,prop:"delayDay"}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.delayUnitChange(e.cForm.delayUnit,"delayDay")}},model:{value:e.cForm.delayUnit,callback:function(t){e.$set(e.cForm,"delayUnit",t)},expression:"cForm.delayUnit"}},e._l(e.delayUnitList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-col",{attrs:{span:16}},[r("el-input",{attrs:{disabled:3==e.cForm.delayUnit,type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("delayDay")}},model:{value:e.cForm.delayDay,callback:function(t){e.$set(e.cForm,"delayDay",t)},expression:"cForm.delayDay"}})],1)],1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"保证金额度","label-width":e.formLabelWidth,prop:"bondLimit"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入"},on:{input:function(t){return e.checkVal("bondLimit")}},model:{value:e.cForm.bondLimit,callback:function(t){e.$set(e.cForm,"bondLimit",t)},expression:"cForm.bondLimit"}})],1)],1)],1),e._v(" "),e.twoLevelModel&&!e.isBusiness?r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"设置代理总盈利阀值","label-width":e.formLabelWidth,prop:"profitMargin"}},[r("el-input",{staticClass:"my-mumber-input",attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("profitMargin")}},model:{value:e.cForm.profitMargin,callback:function(t){e.$set(e.cForm,"profitMargin","string"===typeof t?t.trim():t)},expression:"cForm.profitMargin"}})],1)],1)],1):e._e(),e._v(" "),e.twoLevelModel&&!e.isBusiness?r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"设置用户盈利阀值","label-width":e.formLabelWidth,prop:"userProfitMargin"}},[r("el-input",{staticClass:"my-mumber-input",attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("userProfitMargin")}},model:{value:e.cForm.userProfitMargin,callback:function(t){e.$set(e.cForm,"userProfitMargin","string"===typeof t?t.trim():t)},expression:"cForm.userProfitMargin"}})],1)],1)],1):e._e(),e._v(" "),e.twoLevelModel&&!e.isBusiness?r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"监控手机/邮箱","label-width":e.formLabelWidth,prop:"phoneEmailFirst"}},[r("el-input",{staticClass:"my-mumber-input",attrs:{type:"text",placeholder:"请输入"},model:{value:e.cForm.phoneEmailFirst,callback:function(t){e.$set(e.cForm,"phoneEmailFirst","string"===typeof t?t.trim():t)},expression:"cForm.phoneEmailFirst"}})],1)],1)],1):e._e(),e._v(" "),e.twoLevelModel&&!e.isBusiness?r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"监控手机/邮箱","label-width":e.formLabelWidth,prop:"phoneEmailSecond"}},[r("el-input",{staticClass:"my-mumber-input",attrs:{type:"text",placeholder:"请输入"},model:{value:e.cForm.phoneEmailSecond,callback:function(t){e.$set(e.cForm,"phoneEmailSecond","string"===typeof t?t.trim():t)},expression:"cForm.phoneEmailSecond"}})],1)],1)],1):e._e(),e._v(" "),e.twoLevelModel&&!e.isBusiness?r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"监控手机/邮箱","label-width":e.formLabelWidth,prop:"phoneEmailThird"}},[r("el-input",{staticClass:"my-mumber-input",attrs:{type:"text",placeholder:"请输入"},model:{value:e.cForm.phoneEmailThird,callback:function(t){e.$set(e.cForm,"phoneEmailThird","string"===typeof t?t.trim():t)},expression:"cForm.phoneEmailThird"}})],1)],1)],1):e._e(),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"返佣开关","label-width":e.formLabelWidth,prop:"commissionSwitch"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.cForm.commissionSwitch,callback:function(t){e.$set(e.cForm,"commissionSwitch",t)},expression:"cForm.commissionSwitch"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"登录开关","label-width":e.formLabelWidth,prop:"loginSwitch"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.cForm.loginSwitch,callback:function(t){e.$set(e.cForm,"loginSwitch",t)},expression:"cForm.loginSwitch"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"管理员谷歌验证码","label-width":e.formLabelWidth,prop:"googleCode"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入谷歌验证码",type:"text"},model:{value:e.cForm.googleCode,callback:function(t){e.$set(e.cForm,"googleCode","string"===typeof t?t.trim():t)},expression:"cForm.googleCode"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"代理商释放保证金",width:"600px",visible:e.releaseMoneyVisible},on:{"update:visible":function(t){e.releaseMoneyVisible=t}}},[r("el-form",{ref:"releaseMoneyForm",attrs:{model:e.releaseMoneyForm,rules:e.releaseMoneyRules}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"代理商UID","label-width":e.formLabelWidth,prop:"agentUID"}},[r("el-input",{attrs:{disabled:"",type:"text",placeholder:"请输入"},model:{value:e.releaseMoneyForm.agentUID,callback:function(t){e.$set(e.releaseMoneyForm,"agentUID","string"===typeof t?t.trim():t)},expression:"releaseMoneyForm.agentUID"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"账户类型","label-width":e.formLabelWidth,prop:"userType"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.releaseMoneyForm.userType,callback:function(t){e.$set(e.releaseMoneyForm,"userType",t)},expression:"releaseMoneyForm.userType"}},e._l(e.userTypeList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeDecimal},model:{value:e.releaseMoneyForm.coinId,callback:function(t){e.$set(e.releaseMoneyForm,"coinId",t)},expression:"releaseMoneyForm.coinId"}},e._l(e.coin_List,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.label}})})),1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"可释放数量","label-width":e.formLabelWidth,prop:"bondAmount"}},[r("el-input",{attrs:{disabled:"",type:"text",placeholder:"请输入"},model:{value:e.releaseMoneyForm.bondAmount,callback:function(t){e.$set(e.releaseMoneyForm,"bondAmount","string"===typeof t?t.trim():t)},expression:"releaseMoneyForm.bondAmount"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"释放数量","label-width":e.formLabelWidth,prop:"amount"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.releaseMoneyCheckVal("amount")}},model:{value:e.releaseMoneyForm.amount,callback:function(t){e.$set(e.releaseMoneyForm,"amount","string"===typeof t?t.trim():t)},expression:"releaseMoneyForm.amount"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"管理员谷歌","label-width":e.formLabelWidth,prop:"googleCode"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.releaseMoneyCheckVal("googleCode","nodot")}},model:{value:e.releaseMoneyForm.googleCode,callback:function(t){e.$set(e.releaseMoneyForm,"googleCode","string"===typeof t?t.trim():t)},expression:"releaseMoneyForm.googleCode"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.releaseMoneyVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.releaseMoneybtnLoading},on:{click:e.releaseMoneyconfirmOp}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"商务返佣参数设置 ",width:"600px",visible:e.paramsVisible},on:{"update:visible":function(t){e.paramsVisible=t}}},[r("el-form",{ref:"paramsForm",attrs:{model:e.paramsForm,"label-width":e.formLabelWidth,rules:e.paramsRules}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"允许一级商务可设置范围",prop:"agentUID"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入"},on:{input:function(t){return e.paramsCheckVal("agentUID")}},model:{value:e.paramsForm.agentUID,callback:function(t){e.$set(e.paramsForm,"agentUID","string"===typeof t?t.trim():t)},expression:"paramsForm.agentUID"}},[r("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"管理员谷歌",prop:"googleCode"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){e.paramsForm.googleCode=e.paramsForm.googleCode.replace(/[^\d]/g,"")}},model:{value:e.paramsForm.googleCode,callback:function(t){e.$set(e.paramsForm,"googleCode","string"===typeof t?t.trim():t)},expression:"paramsForm.googleCode"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.paramsVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.paramsBtnLoading},on:{click:e.paramsConfirmOp}},[e._v("确 定")])],1)],1)],1)},o=[],n=r("5c3f"),s=n["a"],i=(r("5432"),r("0c7c")),l=Object(i["a"])(s,a,o,!1,null,null,null);t["default"]=l.exports},a8db:function(e,t,r){"use strict";var a=r("e265"),o=r.n(a),n=r("a4bb"),s=r.n(n);function i(e,t){if(null==e)return{};var r,a,o={},n=s()(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}function l(e,t){if(null==e)return{};var r,a,n=i(e,t);if(o.a){var s=o()(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return l}))},ce7e:function(e,t,r){var a=r("63b6"),o=r("584a"),n=r("294c");e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),a(a.S+a.F*n((function(){r(1)})),"Object",s)}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols}}]);