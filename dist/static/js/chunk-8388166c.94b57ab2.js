(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8388166c"],{"32a6":function(e,t,r){var a=r("241e"),o=r("c3a1");r("ce7e")("keys",(function(){return function(e){return o(a(e))}}))},"542b":function(e,t,r){},"6f79":function(e,t,r){"use strict";r.d(t,"o",(function(){return v})),r.d(t,"n",(function(){return y})),r.d(t,"f",(function(){return w})),r.d(t,"g",(function(){return x})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return l})),r.d(t,"s",(function(){return n})),r.d(t,"t",(function(){return p})),r.d(t,"u",(function(){return s})),r.d(t,"p",(function(){return c})),r.d(t,"q",(function(){return u})),r.d(t,"r",(function(){return b})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"j",(function(){return f})),r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return g})),r.d(t,"k",(function(){return k})),r.d(t,"l",(function(){return A})),r.d(t,"m",(function(){return _}));var a=r("4360"),o=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"排序",prop:"position"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"},{label:"热门",prop:"hot",type:"switch",fn:"trhot",alias:"trhot"},{label:"上架币币",prop:"isTrade",type:"switch",fn:"switchTrade",alias:"trputon"},{label:"充币",prop:"isDeposit",type:"switch",fn:"switchDeposit",alias:"trfill"},{label:"提币",prop:"isWithdraw",type:"switch",fn:"switchWithdraw",alias:"trdraw"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],i=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"排序",prop:"position"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"}],l=[{type:"select",label:"币种",prop:"coinId",value:"",list:a["a"].state.common.coinlist}],n=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币",val:0},{text:"主流币1",val:1},{text:"主流币2",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"下单",prop:"onDealing",type:"switch",fn:"switchCoinOrder",alias:"trorder"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"},{label:"操作",prop:"action",type:"action",width:"450",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"一键删除K线",fn:"onekeyDelete",filter_type:"arrayExcept",filter_key:"coinMarket",filter_status:["ALPT/USDT","CNHT/USDT"],type:"primary",alias:"onekeyDelete"},{label:"一键拉取K线",fn:"onekeyPull",filter_type:"arrayExcept",filter_key:"coinMarket",filter_status:["ALPT/USDT","CNHT/USDT"],type:"primary",alias:"onekeyPull"},{label:"一键更新K线",fn:"onekeyUpdate",filter_type:"arrayExcept",filter_key:"coinMarket",filter_status:["ALPT/USDT","CNHT/USDT"],type:"primary",alias:"onekeyUpdate"}]}],p=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币类",val:0},{text:"主流币类",val:1},{text:"非主流币类",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"}],s=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:a["a"].state.common.symbollist}],c=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"},{label:"启动状态",prop:"status",type:"switch",fn:"switchWithdraw",alias:"trstart"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],u=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"}],b=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:[]}],d=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单标记价浮动比例",prop:"markFloatingRatio"},{label:"下单成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],m=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单标记价浮动比例",prop:"markFloatingRatio"},{label:"下单成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],f=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],h=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],g=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],y=[{label:"板块名称",prop:"name"},{label:"板块描述",prop:"desc"},{label:"英文描述",prop:"descEn"},{label:"相关交易对-是否合约",prop:"pairList",key1:"coinMarket",key2:"supportContract",type:"valueArr"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],v=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],w=[{label:"币种名称",prop:"coinName"},{label:"单笔限额",prop:"singleMaxAmount"},{label:"单日限额",prop:"dayMaxAmount"},{label:"UID",prop:"uidList"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],x=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],k=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],A=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],_=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}]},7514:function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(5),i="find",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),a(a.P+a.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var a=r("e265"),o=r.n(a),i=r("a4bb"),l=r.n(i);function n(e,t){if(null==e)return{};var r,a,o={},i=l()(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}function p(e,t){if(null==e)return{};var r,a,i=n(e,t);if(o.a){var l=o()(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,"a",(function(){return p}))},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ce7e:function(e,t,r){var a=r("63b6"),o=r("584a"),i=r("294c");e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],l={};l[e]=t(r),a(a.S+a.F*i((function(){r(1)})),"Object",l)}},dd7c:function(e,t,r){"use strict";var a=r("542b"),o=r.n(a);o.a},e265:function(e,t,r){e.exports=r("ed33")},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("7618");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var i={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},l=o.replace(/{([ymdhisa])+}/g,(function(e,t){var r=i[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return l=l.replace(/\//gi,"-"),l}},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},f7fe:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"currencyRobot-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addRobot}},[e._v("添加")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"robotForm",attrs:{model:e.robotForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"主流币机器人ID","label-width":e.formLabelWidth,prop:"uid"}},[r("el-select",{attrs:{placeholder:"",wdith:"20%",disabled:!!e.robotForm.id},model:{value:e.robotForm.uid,callback:function(t){e.$set(e.robotForm,"uid",t)},expression:"robotForm.uid"}},e._l(e.userArr,(function(e,t){return r("el-option",{key:t,attrs:{label:e.phone,value:e.uid}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"交易对","label-width":e.formLabelWidth,prop:"coinMarket"}},[r("el-select",{attrs:{placeholder:"",wdith:"20%",disabled:!!e.robotForm.id},model:{value:e.robotForm.coinMarket,callback:function(t){e.$set(e.robotForm,"coinMarket",t)},expression:"robotForm.coinMarket"}},e._l(e.coin_list,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"下单委托深度取值比例","label-width":e.formLabelWidth,prop:"proportion"}},[r("el-input",{attrs:{type:"number",autocomplete:"off"},on:{input:function(t){return e.checkVal("proportion")}},model:{value:e.robotForm.proportion,callback:function(t){e.$set(e.robotForm,"proportion",t)},expression:"robotForm.proportion"}},[r("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"深度参数","label-width":e.formLabelWidth,prop:"depthParameter"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},model:{value:e.robotForm.depthParameter,callback:function(t){e.$set(e.robotForm,"depthParameter",t)},expression:"robotForm.depthParameter"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"启动开关","label-width":e.formLabelWidth,prop:"status"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.robotForm.status,callback:function(t){e.$set(e.robotForm,"status",t)},expression:"robotForm.status"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"googleCode"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},model:{value:e.robotForm.googleCode,callback:function(t){e.$set(e.robotForm,"googleCode",t)},expression:"robotForm.googleCode"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},o=[],i=(r("8e6e"),r("456d"),r("ac6a"),r("bd86")),l=r("a8db"),n=(r("a481"),r("96cf"),r("3b8d")),p=r("c249"),s=r("2fee"),c=r("f21b"),u=r("ff53"),b=r("6f79"),d=r("4ec3");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={name:"CurrencyRobot",components:{Btable:s["a"],Bsearch:p["a"],iconPage:c["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,dialogFormVisible:!1,robotForm:{id:"",uid:"",coinMarket:"",proportion:"",depthParameter:"",status:!1,googleCode:""},rules:{uid:[{required:!0,message:"必填",trigger:"change"}],coinMarket:[{required:!0,message:"必填",trigger:"change"}],proportion:[{required:!0,message:"必填",trigger:"blur"}],depthParameter:[{required:!0,message:"必填",trigger:"blur"}],status:[{required:!0,message:"必填",trigger:"blur"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}]},formName:"",formLabelWidth:"195px",coin_list:[],userArr:[]}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,"edit"===r&&(this.getRobotUserArr(),this.formName="编辑主流币机器人",this.dialogFormVisible=!0,this.$nextTick((function(){o.$refs["robotForm"].resetFields();var e=a.id,t=a.uid,r=a.coinMarket,i=a.proportion,l=a.depthParameter,n=a.status,p=a.googleCode;o.robotForm={id:e,uid:t,coinMarket:r,proportion:(i+"").replace(/\%/g,""),depthParameter:l,status:n,googleCode:p}})));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addRobot:function(){var e=this;this.userArr.length?(this.getRobotUserArr(),this.formName="添加主流币机器人",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["robotForm"].resetFields(),e.robotForm={id:"",uid:"",coinMarket:"",proportion:"",depthParameter:"",status:!1,googleCode:""}}))):this.$message({message:"机器人列表为空，不可添加",type:"error"})},confirmOp:function(){var e=this;this.$refs["robotForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,i,n,p,s,c,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=18;break}if(a=e.robotForm,o=a.id,i=a.proportion,n=a.uid,p=a.status,s=Object(l["a"])(a,["id","proportion","uid","status"]),"",""!==o&&e.robotForm.userId,c=f({uid:n,status:p?2:1,proportion:u["a"].divide(i,100)},s),""===o&&(c.userId=e.userArr.length&&e.userArr.filter((function(e){return e.uid==n}))&&e.userArr.filter((function(e){return e.uid==n}))[0].userId||""),e.btnLoading=!0,""!==o){t.next=12;break}return t.next=9,d["a"].setRoboAddRobot(c);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,d["a"].setRoboEditRobot(f({id:o},c));case 14:t.t0=t.sent;case 15:b=t.t0,b&&(""===o?"添加成功":"编辑成功",e.$message({message:b.data.message,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,o,i,l,n,p=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.search_params_obj.coinMarket&&(this.search_params_obj.coinMarket=this.coin_list.filter((function(e){return e.value==p.search_params_obj.coinMarket}))[0].label||""),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,d["a"].getRobotRobotPage(t);case 8:r=e.sent,r&&(a=r.data.data,o=a.records,i=a.total,l=a.current,n=a.pages,this.total=i,this.pages=n,this.current_page=l,o.forEach((function(e){e["statusText"]=e["status"],e["status"]=2==e["status"],e["proportion"]=e["proportion"]&&(u["a"].times(e["proportion"],100)+"").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")+"%"})),this.list=o,this.listLoading=!1);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getRobotUserArr:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].getRobotRobotList({});case 2:t=e.sent,t&&(this.userArr=t.data.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkVal:function(e){this.robotForm[e]=(this.robotForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d).*$/,"$1$2.$3"),this.robotForm[e]<0&&(this.robotForm[e]=0)},getSymbolList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getSymbolList").then((function(){t.searchCofig[0]["list"]=t.$store.state.common.symbollist,t.coin_list=t.$store.state.common.symbollist}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("CurrencyRobot",b["k"],b["l"]),this.configs=t.val,this.isCURDAuth=t.isAdd,this.searchCofig=this.$util.clone(b["m"]),this.getSymbolList(),this.getRobotUserArr(),this.getList();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},g=h,y=(r("dd7c"),r("0c7c")),v=Object(y["a"])(g,a,o,!1,null,"ec2e9fe4",null);t["default"]=v.exports},ff53:function(e,t,r){"use strict";var a=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function l(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?o(Number(e)*Math.pow(10,t)):Number(e)}function n(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),s=2;s<r;s++)o[s-2]=arguments[s];if(o.length>0)return p.apply(void 0,[p(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var c=l(e),u=l(t),b=i(e)+i(t),d=c*u;return n(d),d/Math.pow(10,b)}function s(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),l=2;l<r;l++)o[l-2]=arguments[l];if(o.length>0)return s.apply(void 0,[s(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(p(e,n)+p(t,n))/n}function c(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),l=2;l<r;l++)o[l-2]=arguments[l];if(o.length>0)return c.apply(void 0,[c(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(p(e,n)-p(t,n))/n}function u(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),c=2;c<r;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(a["a"])(s.slice(1))));var b=l(e),d=l(t);return n(b),n(d),p(b/d,o(Math.pow(10,i(t)-i(e))))}function b(e,t){var r=Math.pow(10,t);return u(Math.round(p(e,r)),r)}var d=!0;function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:o,plus:s,minus:c,times:p,divide:u,round:b,digitLength:i,float2Fixed:l,enableBoundaryChecking:m}}}]);