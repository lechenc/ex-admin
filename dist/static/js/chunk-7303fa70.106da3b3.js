(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7303fa70"],{"0df4":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("8e6e"),core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("456d"),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__),C_Users_Admin_Desktop_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("bd86"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__),C_Users_Admin_Desktop_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("3b8d"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__),_components_search_b_search__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("c249"),_components_table_b_table__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("2fee"),_components_icon_page__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("f21b"),_config_column_symbol__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("6f79"),_utils_index__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("ed08"),_api_api__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("4ec3");function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){Object(C_Users_Admin_Desktop_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}__webpack_exports__["a"]={name:"coinWhiteList",components:{Btable:_components_table_b_table__WEBPACK_IMPORTED_MODULE_8__["a"],Bsearch:_components_search_b_search__WEBPACK_IMPORTED_MODULE_7__["a"],iconPage:_components_icon_page__WEBPACK_IMPORTED_MODULE_9__["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,btnLoading2:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,dialogFormVisible:!1,dialogFormVisible2:!1,chainForm:{id:"",googleCode:"",coinName:"",singleMaxAmount:"",dayMaxAmount:"",uidList:""},chainForm2:{id:"",googleCode:""},rules:{googleCode:[{required:!0,message:"必填",trigger:"blur"}],coinName:[{required:!0,message:"必填",trigger:"blur"}],singleMaxAmount:[{required:!0,message:"必填",trigger:"blur"}],dayMaxAmount:[{required:!0,message:"必填",trigger:"blur"}],uidList:[{required:!0,message:"必填",trigger:"blur"}]},rules2:{googleCode:[{required:!0,message:"必填",trigger:"blur"}]},formName:"",formLabelWidth:"125px",coinList:[],decimalReg:/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/}},watch:{dialogFormVisible:function(e){e||(this.decimalReg=/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/)}},filters:{typeTime:function(e){return e?Object(_utils_index__WEBPACK_IMPORTED_MODULE_11__["a"])(e):""}},methods:{checkVal3:function(e,t){this[e][t]=(this[e][t]+"").replace(/[^\d]/g,"")},checkVal:function(e){"singleMaxAmount"!==e&&"dayMaxAmount"!==e||(this.chainForm[e]=(this.chainForm[e]+"").replace(this.decimalReg,"$1$2.$3")),this.chainForm[e]<0&&(this.chainForm[e]=0)},confirmOp2:function(){var e=this;this.$refs["chainForm2"].validate(function(){var t=Object(C_Users_Admin_Desktop_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["a"])(regeneratorRuntime.mark((function t(a){var r,i,o,n,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=9;break}return r=e.chainForm2,i=r.id,o=r.googleCode,n={id:i,googleCode:o},e.btnLoading2=!0,t.next=6,_api_api__WEBPACK_IMPORTED_MODULE_12__["a"].deleteCoinWhiteList(n);case 6:l=t.sent,l&&(e.$message({message:"删除成功",type:"success"}),e.dialogFormVisible2=!1,e.getList()),e.btnLoading2=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},checkVal2:function(e){this.chainForm[e]=(this.chainForm[e]+"").replace(/[^\d,]/g,""),this.chainForm[e]=(this.chainForm[e]+"").replace(/,,/g,",")},changeDecimal:function changeDecimal(val){this.chainForm.singleMaxAmount="",this.chainForm.dayMaxAmount="";for(var decimal=this.coinList.filter((function(e){return e["label"]==val}))[0].decimalPlaces,arr=[],i=0;i<decimal;i++)arr.push("\\d");var s1="/^(\\-)*(\\d+)\\.(",s2=arr.join(""),s3=").*$/",reg=s1.concat(s2,s3);this.decimalReg=eval(reg)},doHandle:function(){var e=Object(C_Users_Admin_Desktop_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["a"])(regeneratorRuntime.mark((function e(t){var a,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,r=t.row,"edit"===a&&(this.formName="编辑",this.dialogFormVisible=!0,this.$nextTick((function(){i.$refs["chainForm"].resetFields();var e=r.id,t=r.googleCode,a=r.coinName,o=r.singleMaxAmount,n=r.dayMaxAmount,l=r.uidList;i.chainForm={id:e,googleCode:t,coinName:a,singleMaxAmount:o,dayMaxAmount:n,uidList:l}}))),"del"===a&&(this.dialogFormVisible2=!0,this.chainForm2={id:r.id,googleCode:""});case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addChain:function(){var e=this;this.formName="添加",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["chainForm"].resetFields(),e.chainForm={id:"",type:1,googleCode:"",coinName:"",singleMaxAmount:"",dayMaxAmount:"",uidList:""}}))},confirmOp:function(){var e=this;this.$refs["chainForm"].validate(function(){var t=Object(C_Users_Admin_Desktop_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["a"])(regeneratorRuntime.mark((function t(a){var r,i,o,n,l,_,p,s,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=18;break}if(r=e.chainForm,i=r.id,o=r.googleCode,n=r.coinName,l=r.singleMaxAmount,_=r.dayMaxAmount,p=r.uidList,s={googleCode:o,coinName:n,singleMaxAmount:l,dayMaxAmount:_,uidList:p},s.coinId=e.coinList.filter((function(e){return e.label==n}))[0].value,e.btnLoading=!0,console.log("id",i),""!=i){t.next=12;break}return t.next=9,_api_api__WEBPACK_IMPORTED_MODULE_12__["a"].addEditCoinWhiteList(_objectSpread({},s,{type:1}));case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,_api_api__WEBPACK_IMPORTED_MODULE_12__["a"].addEditCoinWhiteList(_objectSpread({},s,{id:i,type:2}));case 14:t.t0=t.sent;case 15:c=t.t0,c&&(u=""===i?"新增成功":"编辑成功",e.$message({message:u,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(C_Users_Admin_Desktop_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,_api_api__WEBPACK_IMPORTED_MODULE_12__["a"].getCoinWhiteList(t);case 7:a=e.sent,console.log("res",a),a?(this.list=a.data.data,this.listLoading=!1):this.listLoading=!1;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(C_Users_Admin_Desktop_exchange_admin_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("coinWhiteList",_config_column_symbol__WEBPACK_IMPORTED_MODULE_10__["f"],_config_column_symbol__WEBPACK_IMPORTED_MODULE_10__["g"]),this.configs=t.val,this.isCURDAuth=t.isAdd,this.getList(),this.$store.dispatch("common/getCoinList").then((function(){a.coinList=a.$store.state.common.coinlist}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},"52e5":function(e,t,a){"use strict";var r=a("bea9"),i=a.n(r);i.a},5325:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"coinWhiteList-container"},[e.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addChain}},[e._v("添加")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.formName,width:"500px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"chainForm",attrs:{model:e.chainForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth,prop:"coinName"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeDecimal},model:{value:e.chainForm.coinName,callback:function(t){e.$set(e.chainForm,"coinName",t)},expression:"chainForm.coinName"}},e._l(e.coinList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"单笔限额","label-width":e.formLabelWidth,prop:"singleMaxAmount"}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("singleMaxAmount")}},model:{value:e.chainForm.singleMaxAmount,callback:function(t){e.$set(e.chainForm,"singleMaxAmount",t)},expression:"chainForm.singleMaxAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单日限额","label-width":e.formLabelWidth,prop:"dayMaxAmount"}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("dayMaxAmount")}},model:{value:e.chainForm.dayMaxAmount,callback:function(t){e.$set(e.chainForm,"dayMaxAmount",t)},expression:"chainForm.dayMaxAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"UID","label-width":e.formLabelWidth,prop:"uidList"}},[a("el-input",{attrs:{placeholder:"请输入UID,以逗号隔开",autocomplete:"off",type:"textarea"},on:{input:function(t){return e.checkVal2("uidList")}},model:{value:e.chainForm.uidList,callback:function(t){e.$set(e.chainForm,"uidList",t)},expression:"chainForm.uidList"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"googleCode"}},[a("el-input",{staticClass:"my-mumber-input",attrs:{placeholder:"请输入",autocomplete:"off",type:"text"},on:{input:function(t){return e.checkVal3("chainForm","googleCode")}},model:{value:e.chainForm.googleCode,callback:function(t){e.$set(e.chainForm,"googleCode",t)},expression:"chainForm.googleCode"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"删除",width:"500px",visible:e.dialogFormVisible2},on:{"update:visible":function(t){e.dialogFormVisible2=t}}},[a("el-form",{ref:"chainForm2",attrs:{model:e.chainForm2,rules:e.rules2}},[a("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"googleCode"}},[a("el-input",{staticClass:"my-mumber-input",attrs:{placeholder:"请输入",autocomplete:"off",type:"text"},on:{input:function(t){return e.checkVal3("chainForm2","googleCode")}},model:{value:e.chainForm2.googleCode,callback:function(t){e.$set(e.chainForm2,"googleCode",t)},expression:"chainForm2.googleCode"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible2=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading2},on:{click:e.confirmOp2}},[e._v("确 定")])],1)],1)],1)},i=[],o=a("0df4"),n=o["a"],l=(a("52e5"),a("0c7c")),_=Object(l["a"])(n,r,i,!1,null,"fb2f7f84",null);t["default"]=_.exports},"6f79":function(e,t,a){"use strict";a.d(t,"o",(function(){return y})),a.d(t,"n",(function(){return g})),a.d(t,"f",(function(){return M})),a.d(t,"g",(function(){return E})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return n})),a.d(t,"s",(function(){return l})),a.d(t,"t",(function(){return _})),a.d(t,"u",(function(){return p})),a.d(t,"p",(function(){return s})),a.d(t,"q",(function(){return c})),a.d(t,"r",(function(){return u})),a.d(t,"h",(function(){return m})),a.d(t,"i",(function(){return d})),a.d(t,"j",(function(){return b})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return f})),a.d(t,"k",(function(){return A})),a.d(t,"l",(function(){return v})),a.d(t,"m",(function(){return O}));var r=a("4360"),i=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"},{label:"热门",prop:"hot",type:"switch",fn:"trhot",alias:"trhot"},{label:"上架币币",prop:"isTrade",type:"switch",fn:"switchTrade",alias:"trputon"},{label:"充币",prop:"isDeposit",type:"switch",fn:"switchDeposit",alias:"trfill"},{label:"提币",prop:"isWithdraw",type:"switch",fn:"switchWithdraw",alias:"trdraw"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],o=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"}],n=[{type:"select",label:"币种",prop:"coinId",value:"",list:r["a"].state.common.coinlist}],l=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币",val:0},{text:"主流币1",val:1},{text:"主流币2",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"下单",prop:"onDealing",type:"switch",fn:"switchCoinOrder",alias:"trorder"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],_=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币类",val:0},{text:"主流币类",val:1},{text:"非主流币类",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"}],p=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:r["a"].state.common.symbollist}],s=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"},{label:"启动状态",prop:"status",type:"switch",fn:"switchWithdraw",alias:"trstart"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],c=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"}],u=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:[]}],m=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],d=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],b=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],h=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],f=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],g=[{label:"板块名称",prop:"chainName"},{label:"板块描述",prop:"coinName"},{label:"相关交易对-是否合约",prop:"createTime1"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],y=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],M=[{label:"币种名称",prop:"coinName"},{label:"单笔限额",prop:"singleMaxAmount"},{label:"单日限额",prop:"dayMaxAmount"},{label:"UID",prop:"uidList"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],E=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],A=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],v=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],O=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}]},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),o="find",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),r(r.P+r.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},bea9:function(e,t,a){},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var o={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=i.replace(/{([ymdhisa])+}/g,(function(e,t){var a=o[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function o(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=o(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function l(e){m&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function _(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),p=2;p<a;p++)i[p-2]=arguments[p];if(i.length>0)return _.apply(void 0,[_(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var s=n(e),c=n(t),u=o(e)+o(t),m=s*c;return l(m),m/Math.pow(10,u)}function p(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];if(i.length>0)return p.apply(void 0,[p(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var l=Math.pow(10,Math.max(o(e),o(t)));return(_(e,l)+_(t,l))/l}function s(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var l=Math.pow(10,Math.max(o(e),o(t)));return(_(e,l)-_(t,l))/l}function c(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),s=2;s<a;s++)p[s-2]=arguments[s];if(p.length>0)return c.apply(void 0,[c(e,t),p[0]].concat(Object(r["a"])(p.slice(1))));var u=n(e),m=n(t);return l(u),l(m),_(u/m,i(Math.pow(10,o(t)-o(e))))}function u(e,t){var a=Math.pow(10,t);return c(Math.round(_(e,a)),a)}var m=!0;function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m=e}t["a"]={strip:i,plus:p,minus:s,times:_,divide:c,round:u,digitLength:o,float2Fixed:n,enableBoundaryChecking:d}}}]);