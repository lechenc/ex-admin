(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79e705ee"],{1803:function(e,t,a){"use strict";var r=a("6b74"),o=a.n(r);o.a},"32a6":function(e,t,a){var r=a("241e"),o=a("c3a1");a("ce7e")("keys",(function(){return function(e){return o(r(e))}}))},"459e":function(e,t,a){},"6b74":function(e,t,a){},"6f79":function(e,t,a){"use strict";a.d(t,"n",(function(){return A})),a.d(t,"o",(function(){return M})),a.d(t,"p",(function(){return F})),a.d(t,"r",(function(){return y})),a.d(t,"q",(function(){return v})),a.d(t,"f",(function(){return x})),a.d(t,"g",(function(){return w})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return l})),a.d(t,"v",(function(){return n})),a.d(t,"w",(function(){return p})),a.d(t,"x",(function(){return s})),a.d(t,"s",(function(){return c})),a.d(t,"t",(function(){return u})),a.d(t,"u",(function(){return m})),a.d(t,"h",(function(){return b})),a.d(t,"i",(function(){return d})),a.d(t,"j",(function(){return f})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return g})),a.d(t,"k",(function(){return k})),a.d(t,"l",(function(){return T})),a.d(t,"m",(function(){return _}));var r=a("4360"),o=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"排序",prop:"position"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"},{label:"热门",prop:"hot",type:"switch",fn:"trhot",alias:"trhot"},{label:"上架币币",prop:"isTrade",type:"switch",fn:"switchTrade",alias:"trputon"},{label:"充币",prop:"isDeposit",type:"switch",fn:"switchDeposit",alias:"trfill"},{label:"提币",prop:"isWithdraw",type:"switch",fn:"switchWithdraw",alias:"trdraw"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],i=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"排序",prop:"position"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"}],l=[{type:"select",label:"币种",prop:"coinId",value:"",list:r["a"].state.common.coinlist}],n=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币",val:0},{text:"主流币1",val:1},{text:"主流币2",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"下单",prop:"onDealing",type:"switch",fn:"switchCoinOrder",alias:"trorder"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"},{label:"操作",prop:"action",type:"action",width:"200",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"一键删除K线",fn:"onekeyDelete",filter_type:"filter_indexOf_Except",filter_key:"coinMarket",filter_status:["ALPT","CNHT"],type:"primary",alias:"onekeyDelete"},{label:"一键拉取K线",fn:"onekeyPull",filter_type:"filter_indexOf_Except",filter_key:"coinMarket",filter_status:["ALPT","CNHT"],type:"primary",alias:"onekeyPull"},{label:"一键更新K线",fn:"onekeyUpdate",filter_type:"filter_indexOf_Except",filter_key:"coinMarket",filter_status:["ALPT","CNHT"],type:"primary",alias:"onekeyUpdate"}]}],p=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币类",val:0},{text:"主流币类",val:1},{text:"非主流币类",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"}],s=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:r["a"].state.common.symbollist}],c=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"},{label:"启动状态",prop:"status",type:"switch",fn:"switchWithdraw",alias:"trstart"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],u=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"}],m=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:[]}],b=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单标记价浮动比例",prop:"markFloatingRatio"},{label:"下单成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],d=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单标记价浮动比例",prop:"markFloatingRatio"},{label:"下单成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],f=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],h=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],g=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],v=[{label:"板块名称",prop:"name"},{label:"板块描述",prop:"desc"},{label:"英文描述",prop:"descEn"},{label:"相关交易对-是否合约",prop:"pairList",key1:"coinMarket",key2:"supportContract",type:"valueArr"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],y=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],x=[{label:"币种名称",prop:"coinName"},{label:"单笔限额",prop:"singleMaxAmount"},{label:"单日限额",prop:"dayMaxAmount"},{label:"UID",prop:"uidList"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],w=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],k=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],T=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],_=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],A=[{label:"K线类型",prop:"fromType",type:"filter",show_type:"text",filters:[{text:"币币",val:"1"},{text:"法币",val:"2"},{text:"合约",val:"5"}]},{label:"交易对品种",prop:"uid"},{label:"K线时间类型",prop:"coinName"},{label:"旧高开低收",prop:"toCoinName"},{label:"新高开低收",prop:"amount"},{label:"备注",prop:"fee"},{label:"创建人",prop:"dealAmount"},{label:"创建时间",prop:"createTime",type:"time"},{label:"审核人",prop:"dealAmount1"},{label:"审核时间",prop:"createTime2",type:"time"},{label:"状态",prop:"fromType2",type:"filter",show_type:"text",filters:[{text:"币币",val:"1"},{text:"法币",val:"2"},{text:"合约",val:"5"}]},{label:"操作",prop:"action",type:"action",width:"130",btnGroup:[{label:"审核",fn:"check",type:"primary",alias:"check"}]}],M=[{label:"K线类型",prop:"fromType",type:"filter",show_type:"text",filters:[{text:"币币",val:"1"},{text:"法币",val:"2"},{text:"合约",val:"5"}]},{label:"交易对品种",prop:"uid"},{label:"K线时间类型",prop:"coinName"},{label:"旧高开低收",prop:"toCoinName"},{label:"新高开低收",prop:"amount"},{label:"备注",prop:"fee"},{label:"创建人",prop:"dealAmount"},{label:"创建时间",prop:"createTime",type:"time"},{label:"审核人",prop:"dealAmount1"},{label:"审核时间",prop:"createTime2",type:"time"},{label:"状态",prop:"fromType2",type:"filter",show_type:"text",filters:[{text:"币币",val:"1"},{text:"法币",val:"2"},{text:"合约",val:"5"}]}],F=[{type:"date_rank",label:"创建时间",prop:"startTime",prop2:"endTime",value:""},{type:"date_rank",label:"更新时间",prop:"startTime2",prop2:"endTime2",value:""},{type:"select",label:"K线类型",prop:"accountType",value:"",list:[{label:"币币",value:1},{label:"法币",value:2},{label:"合约",value:5}]},{type:"select",label:"K线时间类型",prop:"accountType2",value:"",list:[{label:"币币",value:1},{label:"法币",value:2},{label:"合约",value:5}]},{type:"text",label:"创建人",prop:"id",value:""},{type:"text",label:"审核人",prop:"id2",value:""},{type:"select",label:"交易对品种",prop:"accountType3",value:"",list:[{label:"币币",value:1},{label:"法币",value:2},{label:"合约",value:5}]},{type:"select",label:"状态",prop:"accountType4",value:"",list:[{label:"币币",value:1},{label:"法币",value:2},{label:"合约",value:5}]}]},7514:function(e,t,a){"use strict";var r=a("5ca1"),o=a("0a49")(5),i="find",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,a){a("32a6"),e.exports=a("584a").Object.keys},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},a4bb:function(e,t,a){e.exports=a("8aae")},a8db:function(e,t,a){"use strict";var r=a("e265"),o=a.n(r),i=a("a4bb"),l=a.n(i);function n(e,t){if(null==e)return{};var a,r,o={},i=l()(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}function p(e,t){if(null==e)return{};var a,r,i=n(e,t);if(o.a){var l=o()(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}a.d(t,"a",(function(){return p}))},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ce7e:function(e,t,a){var r=a("63b6"),o=a("584a"),i=a("294c");e.exports=function(e,t){var a=(o.Object||{})[e]||Object[e],l={};l[e]=t(a),r(r.S+r.F*i((function(){a(1)})),"Object",l)}},e265:function(e,t,a){e.exports=a("ed33")},e4fa:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"robot-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addRobot}},[e._v("添加")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("div",[a("span",[e._v("共"+e._s(e.pages)+"页")]),e._v("/"),a("span",[e._v(e._s(e.total)+"条数据")])]),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible,width:"650px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"robotForm",attrs:{model:e.robotForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"交易对","label-width":e.formLabelWidth,prop:"coinMarketId"}},[a("el-select",{attrs:{placeholder:"",wdith:"20%"},model:{value:e.robotForm.coinMarketId,callback:function(t){e.$set(e.robotForm,"coinMarketId",t)},expression:"robotForm.coinMarketId"}},e._l(e.coin_list,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"下单开始时间",prop:"startTime","label-width":e.formLabelWidth}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.robotForm.startTime,callback:function(t){e.$set(e.robotForm,"startTime",t)},expression:"robotForm.startTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"下单结束时间",prop:"endTime","label-width":e.formLabelWidth}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.robotForm.endTime,callback:function(t){e.$set(e.robotForm,"endTime",t)},expression:"robotForm.endTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账号","label-width":e.formLabelWidth,prop:"account"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.robotForm.account,callback:function(t){e.$set(e.robotForm,"account",t)},expression:"robotForm.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth,prop:"loginPassword"}},[a("el-input",{attrs:{autocomplete:"off",type:"number"},model:{value:e.robotForm.loginPassword,callback:function(t){e.$set(e.robotForm,"loginPassword",t)},expression:"robotForm.loginPassword"}})],1),e._v(" "),a("b-range-choose",{ref:"range",attrs:{label:"单次下单数据区间",value:e.robotForm.amountSection},on:{handler:e.rangeValue}}),e._v(" "),e.isAdd?e._e():a("el-form-item",{attrs:{label:"启动状态","label-width":e.formLabelWidth,prop:"status"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.robotForm.status,callback:function(t){e.$set(e.robotForm,"status",t)},expression:"robotForm.status"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},o=[],i=(a("8e6e"),a("456d"),a("ac6a"),a("7514"),a("bd86")),l=a("a8db"),n=(a("96cf"),a("3b8d")),p=a("c249"),s=a("2fee"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"left-p"},[a("span",{staticClass:"dot"},[e._v("*")]),e._v(" "+e._s(e.label))])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"min"}},[a("el-input",{on:{change:e.handleMinChange},model:{value:e.form.min,callback:function(t){e.$set(e.form,"min",t)},expression:"form.min"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"wavy"},[e._v("~")])]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"max"}},[a("el-input",{on:{change:e.handleMaxChange},model:{value:e.form.max,callback:function(t){e.$set(e.form,"max",t)},expression:"form.max"}})],1)],1)],1)],1)],1)],1)},u=[],m=(a("c5f6"),a("28a5"),{name:"BRangeChoose",props:{label:{type:String,default:""},value:{type:String,default:"0-0"}},watch:{value:{handler:function(e,t){if(e){var a=e.split("-");this.form.min=a[0],this.form.max=a[1]}else this.form.min="",this.form.max=""},immediate:!0}},data:function(){return{form:{min:0,max:1},rules:{min:[{required:!0,message:"必填项",trigger:"blur"},{validator:this.validateCom,trigger:"blur"},{validator:this.validateMin,trigger:"blur"}],max:[{required:!0,message:"必填项",trigger:"blur"},{validator:this.validateCom,trigger:"blur"},{validator:this.validateMax,trigger:"blur"}]}}},methods:{validateCom:function(e,t,a){var r=Number(t);return r<-1e6?a(new Error("输入值必须大于".concat(-1e6))):r>1e18?a(new Error("输入值必须小于".concat(1e18))):a()},validateMin:function(e,t,a){var r=Number(t),o=Number(this.form.max);return!o||r<o?a():a(new Error("输入值不得大于最大阈值"))},validateMax:function(e,t,a){var r=Number(t),o=Number(this.form.min);return!o||r>o?a():a(new Error("输入值不得小于最小阈值"))},handleMinChange:function(){this.$refs.form.validateField("max"),this.getFormData()},handleMaxChange:function(){this.$refs.form.validateField("min"),this.getFormData()},getFormData:function(){var e=this,t={};this.$refs.form.validate((function(a){t.valid=a,t.form=e.form})),this.$emit("handler",t)},resetForm:function(){this.$refs.form.resetFields()},validate:function(){this.$refs.form.validate((function(e){return!!e}))}}}),b=m,d=(a("fef9f"),a("0c7c")),f=Object(d["a"])(b,c,u,!1,null,null,null),h=f.exports,g=a("6f79"),v=a("4ec3");function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w={name:"Robot",components:{Btable:s["a"],Bsearch:p["a"],BRangeChoose:h},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,dialogFormVisible:!1,isAdd:!1,getAmountSection:"",robotForm:{id:"",startTime:"",endTime:"",account:"",loginPassword:"",coinMarket:"",amountSection:"",coinMarketId:"",status:1},rules:{startTime:[{required:!0,message:"必填",trigger:"change"}],endTime:[{required:!0,message:"必填",trigger:"change"}],account:[{required:!0,message:"必填",trigger:"blur"}],loginPassword:[{required:!0,message:"必填",trigger:"blur"}],coinMarketId:[{required:!0,message:"必填",trigger:"blur"}],amountSection:[{required:!0,message:"必填",trigger:"blur"}]},formName:"新增交易对",formLabelWidth:"150px",coin_list:[]}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,o,i,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.fn,r=t.row,"switchCoin"!==a){e.next=8;break}return o={id:r.id},o.status=r.status?0:1,e.next=6,v["a"].editRobot(o);case 6:i=e.sent,i&&this.$message({message:i.data.message,type:"success"});case 8:"edit"===a&&(this.isAdd=!1,this.formName="编辑机器人",this.dialogFormVisible=!0,this.$nextTick((function(){l.$refs["robotForm"].resetFields(),l.$refs["range"].resetForm();var e=r.id,t=r.startTime,a=r.endTime,o=r.account,i=r.loginPassword,n=r.coinMarket,p=r.amountSection,s=r.coinMarketId,c=r.status;l.robotForm={id:e,startTime:t,endTime:a,account:o,loginPassword:i,amountSection:p,coinMarketId:s,coinMarket:n,status:c}})));case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),rangeValue:function(e){e.valid&&(this.getAmountSection=e.form.min+"-"+e.form.max)},addRobot:function(){var e=this;this.isAdd=!0,this.formName="新增机器人",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["robotForm"].resetFields(),e.$refs["range"].resetForm()}))},confirmOp:function(){var e=this;this.$refs["range"].validate(),this.$refs["robotForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,o,i,n,p,s,c,u,m,b,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=18;break}if(r=e.robotForm,o=r.id,i=r.coinMarketId,n=r.coinMarket,p=r.startTime,s=r.amountSection,c=r.endTime,u=r.status,m=Object(l["a"])(r,["id","coinMarketId","coinMarket","startTime","amountSection","endTime","status"]),b=x({coinMarketId:i,startTime:e.formatTime(p),endTime:e.formatTime(c),status:u?0:1,amountSection:e.getAmountSection?e.getAmountSection:s||"",coinMarket:n||(e.coin_list.find((function(e){return e.value==i})).label||"")},m),e.btnLoading=!0,""!==o){t.next=10;break}return t.next=7,v["a"].addRobot(b);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,v["a"].editRobot(x({id:o,status:u},b));case 12:t.t0=t.sent;case 13:d=t.t0,d&&(e.$message({message:d.data.message,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1,t.next=19;break;case 18:return t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},formatTime:function(e){return"string"===typeof e?e:parseInt(new Date(e).getTime()/1e3)},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,o,i,l,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,v["a"].getRobotList(t);case 7:a=e.sent,a&&(r=a.data.data,o=r.records,i=r.total,l=r.current,n=r.pages,this.total=i,this.pages=n,this.current_page=l,[],o.forEach((function(e){e["status"]=!e["status"]})),this.list=o,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getSymbolList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getSymbolList").then((function(){t.searchCofig[0]["list"]=t.$store.state.common.symbollist,t.coin_list=t.$store.state.common.symbollist}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("Robot",g["s"],g["t"]),this.configs=t.val,this.isCURDAuth=t.isAdd,this.searchCofig=this.$util.clone(g["u"]),this.getList(),this.getSymbolList();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},k=w,T=(a("1803"),Object(d["a"])(k,r,o,!1,null,"2d18ffaa",null));t["default"]=T.exports},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},l=o.replace(/{([ymdhisa])+}/g,(function(e,t){var a=i[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return l=l.replace(/\//gi,"-"),l}},ed33:function(e,t,a){a("014b"),e.exports=a("584a").Object.getOwnPropertySymbols},fef9f:function(e,t,a){"use strict";var r=a("459e"),o=a.n(r);o.a},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function l(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?o(Number(e)*Math.pow(10,t)):Number(e)}function n(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,o=new Array(a>2?a-2:0),s=2;s<a;s++)o[s-2]=arguments[s];if(o.length>0)return p.apply(void 0,[p(e,t),o[0]].concat(Object(r["a"])(o.slice(1))));var c=l(e),u=l(t),m=i(e)+i(t),b=c*u;return n(b),b/Math.pow(10,m)}function s(e,t){for(var a=arguments.length,o=new Array(a>2?a-2:0),l=2;l<a;l++)o[l-2]=arguments[l];if(o.length>0)return s.apply(void 0,[s(e,t),o[0]].concat(Object(r["a"])(o.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(p(e,n)+p(t,n))/n}function c(e,t){for(var a=arguments.length,o=new Array(a>2?a-2:0),l=2;l<a;l++)o[l-2]=arguments[l];if(o.length>0)return c.apply(void 0,[c(e,t),o[0]].concat(Object(r["a"])(o.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(p(e,n)-p(t,n))/n}function u(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var m=l(e),b=l(t);return n(m),n(b),p(m/b,o(Math.pow(10,i(t)-i(e))))}function m(e,t){var a=Math.pow(10,t);return u(Math.round(p(e,a)),a)}var b=!0;function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:o,plus:s,minus:c,times:p,divide:u,round:m,digitLength:i,float2Fixed:l,enableBoundaryChecking:d}}}]);