(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7db0f8d2"],{"32a6":function(e,t,r){var a=r("241e"),o=r("c3a1");r("ce7e")("keys",(function(){return function(e){return o(a(e))}}))},"5a20":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pairs-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addSymbol}},[e._v("添加")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"symbolForm",attrs:{model:e.symbolForm,rules:e.rules}},[r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"coinMarketId","label-width":e.formLabelWidth,prop:"coinMarketId"}},[r("el-input",{attrs:{autocomplete:"off"},on:{input:function(t){return e.checkVal("coinMarketId")}},model:{value:e.symbolForm.coinMarketId,callback:function(t){e.$set(e.symbolForm,"coinMarketId",t)},expression:"symbolForm.coinMarketId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"交易币种","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{placeholder:"",wdith:"20%"},model:{value:e.symbolForm.coinId,callback:function(t){e.$set(e.symbolForm,"coinId",t)},expression:"symbolForm.coinId"}},e._l(e.coin_list,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"定价货币","label-width":e.formLabelWidth,prop:"marketId"}},[r("el-select",{attrs:{placeholder:"",wdith:"20%"},model:{value:e.symbolForm.marketId,callback:function(t){e.$set(e.symbolForm,"marketId",t)},expression:"symbolForm.marketId"}},e._l(e.coin_list,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"首发价","label-width":e.formLabelWidth,prop:"initPrice"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("initPrice")}},model:{value:e.symbolForm.initPrice,callback:function(t){e.$set(e.symbolForm,"initPrice",t)},expression:"symbolForm.initPrice"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"下单档位","label-width":e.formLabelWidth,prop:"gears"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("gears")}},model:{value:e.symbolForm.gears,callback:function(t){e.$set(e.symbolForm,"gears",t)},expression:"symbolForm.gears"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"最小下单量","label-width":e.formLabelWidth,prop:"minTradeLimit"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("minTradeLimit")}},model:{value:e.symbolForm.minTradeLimit,callback:function(t){e.$set(e.symbolForm,"minTradeLimit",t)},expression:"symbolForm.minTradeLimit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"最大下单量","label-width":e.formLabelWidth,prop:"maxTradeLimit"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("maxTradeLimit")}},model:{value:e.symbolForm.maxTradeLimit,callback:function(t){e.$set(e.symbolForm,"maxTradeLimit",t)},expression:"symbolForm.maxTradeLimit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"买入费率","label-width":e.formLabelWidth,prop:"exRateBuy"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("exRateBuy")}},model:{value:e.symbolForm.exRateBuy,callback:function(t){e.$set(e.symbolForm,"exRateBuy",t)},expression:"symbolForm.exRateBuy"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"卖出费率","label-width":e.formLabelWidth,prop:"exRateSell"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("exRateSell")}},model:{value:e.symbolForm.exRateSell,callback:function(t){e.$set(e.symbolForm,"exRateSell",t)},expression:"symbolForm.exRateSell"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"价格小数位","label-width":e.formLabelWidth,prop:"pricePrecision"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("pricePrecision")}},model:{value:e.symbolForm.pricePrecision,callback:function(t){e.$set(e.symbolForm,"pricePrecision",t)},expression:"symbolForm.pricePrecision"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"数量小数位","label-width":e.formLabelWidth,prop:"amountPrecision"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("amountPrecision")}},model:{value:e.symbolForm.amountPrecision,callback:function(t){e.$set(e.symbolForm,"amountPrecision",t)},expression:"symbolForm.amountPrecision"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"排序","label-width":e.formLabelWidth,prop:"sortNo"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("sortNo")}},model:{value:e.symbolForm.sortNo,callback:function(t){e.$set(e.symbolForm,"sortNo",t)},expression:"symbolForm.sortNo"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"分区排序","label-width":e.formLabelWidth,prop:"partitionSort"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("partitionSort")}},model:{value:e.symbolForm.partitionSort,callback:function(t){e.$set(e.symbolForm,"partitionSort",t)},expression:"symbolForm.partitionSort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"撮合引擎类型","label-width":e.formLabelWidth,prop:"mainStream"}},[r("el-select",{attrs:{disabled:"编辑币种"==e.formName,placeholder:"",wdith:"20%"},model:{value:e.symbolForm.mainStream,callback:function(t){e.$set(e.symbolForm,"mainStream",t)},expression:"symbolForm.mainStream"}},e._l(e.mainStream_list,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"是否上架","label-width":e.formLabelWidth,prop:"status"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.symbolForm.status,callback:function(t){e.$set(e.symbolForm,"status",t)},expression:"symbolForm.status"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"开启下单","label-width":e.formLabelWidth,prop:"onDealing"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.symbolForm.onDealing,callback:function(t){e.$set(e.symbolForm,"onDealing",t)},expression:"symbolForm.onDealing"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推荐至首页","label-width":e.formLabelWidth,prop:"onTop"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.symbolForm.onTop,callback:function(t){e.$set(e.symbolForm,"onTop",t)},expression:"symbolForm.onTop"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否NFT专区","label-width":e.formLabelWidth,prop:"onTop"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.symbolForm.onTop,callback:function(t){e.$set(e.symbolForm,"onTop",t)},expression:"symbolForm.onTop"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},o=[],i=(r("8e6e"),r("456d"),r("ac6a"),r("bd86")),l=r("a8db"),n=(r("96cf"),r("3b8d")),s=r("c249"),p=r("2fee"),c=r("f21b"),m=r("6f79"),u=r("4ec3");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"Pairs",components:{Btable:p["a"],Bsearch:s["a"],iconPage:c["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,dialogFormVisible:!1,symbolForm:{coinMarketId:"",coinId:"",marketId:"",initPrice:"",gears:"",minTradeLimit:"",maxTradeLimit:"",exRateBuy:"",exRateSell:"",pricePrecision:"",amountPrecision:"",sortNo:"",partitionSort:"",mainStream:"",status:!1,onTop:!1,onDealing:!1},rules:{coinId:[{required:!0,message:"必填",trigger:"change"}],marketId:[{required:!0,message:"必填",trigger:"change"}],initPrice:[{required:!0,message:"必填",trigger:"blur"}],gears:[{required:!0,message:"必填",trigger:"blur"}],minTradeLimit:[{required:!0,message:"必填",trigger:"blur"}],maxTradeLimit:[{required:!0,message:"必填",trigger:"blur"}],exRateBuy:[{required:!0,message:"必填",trigger:"blur"}],exRateSell:[{required:!0,message:"必填",trigger:"blur"}],sortNo:[{required:!0,message:"必填",trigger:"blur"}],pricePrecision:[{required:!0,message:"必填",trigger:"blur"}],amountPrecision:[{required:!0,message:"必填",trigger:"blur"}],mainStream:[{required:!0,message:"必填",trigger:"blur"}]},mainStream_list:[{label:"平台币",value:0},{label:"主流币1",value:1},{label:"主流币2",value:2}],formName:"新增交易对",formLabelWidth:"120px",pairList:[],coin_list:[]}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,i,l,n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"switchCoin"!==r){e.next=8;break}return o={coinMarketId:a.coinMarketId},o.status=a.status?1:0,e.next=6,u["a"].editSymbol(o);case 6:i=e.sent,i?this.$message({message:i.data.message,type:"success"}):this.getList();case 8:if("switchCoinOrder"!==r){e.next=15;break}return l={coinMarketId:a.coinMarketId},l.onDealing=a.onDealing?1:0,e.next=13,u["a"].editSymbol(l);case 13:n=e.sent,n?this.$message({message:n.data.message,type:"success"}):this.getList();case 15:"edit"===r&&(this.formName="编辑币种",this.dialogFormVisible=!0,this.$nextTick((function(){s.$refs["symbolForm"].resetFields();var e=a.coinMarketId,t=a.coinId,r=a.marketId,o=a.minTradeLimit,i=a.maxTradeLimit,l=a.exRateBuy,n=a.exRateSell,p=a.sortNo,c=a.partitionSort,m=a.pricePrecision,u=a.amountPrecision,b=a.mainStream,d=a.status,f=a.onTop,h=a.onDealing,y=a.initPrice,g=a.gears;s.symbolForm={coinMarketId:e,coinId:t,marketId:r,minTradeLimit:o,maxTradeLimit:i,exRateBuy:l,exRateSell:n,sortNo:p,partitionSort:c,pricePrecision:m,amountPrecision:u,mainStream:b,status:d,onTop:f,onDealing:h,initPrice:y,gears:g}})));case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addSymbol:function(){var e=this;this.formName="新增交易对",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["symbolForm"].resetFields()}))},confirmOp:function(){var e=this;this.$refs["symbolForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,i,n,s,p,c,m,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=18;break}if(a=e.symbolForm,o=a.coinMarketId,i=a.status,n=a.onDealing,s=a.onTop,p=a.initPrice,c=Object(l["a"])(a,["coinMarketId","status","onDealing","onTop","initPrice"]),m=d({status:i?1:0,onTop:s?1:0,onDealing:n?1:0,initPrice:p||1},c),e.btnLoading=!0,""!==o){t.next=10;break}return t.next=7,u["a"].addSymbol(m);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,u["a"].editSymbol(d({coinMarketId:o},m));case 12:t.t0=t.sent;case 13:b=t.t0,b&&(e.$message({message:b.data.message,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1,t.next=19;break;case 18:return t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},checkVal:function(e){this.symbolForm[e]<0&&(this.symbolForm[e]=0)},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,o,i,l,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,u["a"].getSymbolList(t);case 7:r=e.sent,r&&(a=r.data.data,o=a.records,i=a.total,l=a.current,n=a.pages,this.total=i,this.pages=n,this.current_page=l,[],o.forEach((function(e){e["status"]=!!e["status"],e["onTop"]=!!e["onTop"],e["onDealing"]=!!e["onDealing"]})),this.list=o,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getSymbolList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getSymbolList").then((function(){t.searchCofig[0]["list"]=t.$store.state.common.symbollist})),this.$store.dispatch("common/getCoinList").then((function(){t.coin_list=t.$store.state.common.coinlist}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("Pairs",m["s"],m["t"]),this.configs=t.val,this.isCURDAuth=t.isAdd,this.searchCofig=this.$util.clone(m["u"]),this.getList(),this.getSymbolList();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},h=f,y=(r("9a4a"),r("0c7c")),g=Object(y["a"])(h,a,o,!1,null,"4230dc00",null);t["default"]=g.exports},"6f79":function(e,t,r){"use strict";r.d(t,"o",(function(){return v})),r.d(t,"n",(function(){return g})),r.d(t,"f",(function(){return x})),r.d(t,"g",(function(){return w})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return l})),r.d(t,"s",(function(){return n})),r.d(t,"t",(function(){return s})),r.d(t,"u",(function(){return p})),r.d(t,"p",(function(){return c})),r.d(t,"q",(function(){return m})),r.d(t,"r",(function(){return u})),r.d(t,"h",(function(){return b})),r.d(t,"i",(function(){return d})),r.d(t,"j",(function(){return f})),r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return y})),r.d(t,"k",(function(){return k})),r.d(t,"l",(function(){return F})),r.d(t,"m",(function(){return S}));var a=r("4360"),o=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"排序",prop:"position"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"},{label:"热门",prop:"hot",type:"switch",fn:"trhot",alias:"trhot"},{label:"上架币币",prop:"isTrade",type:"switch",fn:"switchTrade",alias:"trputon"},{label:"充币",prop:"isDeposit",type:"switch",fn:"switchDeposit",alias:"trfill"},{label:"提币",prop:"isWithdraw",type:"switch",fn:"switchWithdraw",alias:"trdraw"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],i=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"排序",prop:"position"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"}],l=[{type:"select",label:"币种",prop:"coinId",value:"",list:a["a"].state.common.coinlist}],n=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币",val:0},{text:"主流币1",val:1},{text:"主流币2",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"下单",prop:"onDealing",type:"switch",fn:"switchCoinOrder",alias:"trorder"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],s=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币类",val:0},{text:"主流币类",val:1},{text:"非主流币类",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"}],p=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:a["a"].state.common.symbollist}],c=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"},{label:"启动状态",prop:"status",type:"switch",fn:"switchWithdraw",alias:"trstart"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],m=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"}],u=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:[]}],b=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],d=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],f=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],h=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],y=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],g=[{label:"板块名称",prop:"name"},{label:"板块描述",prop:"desc"},{label:"英文描述",prop:"descEn"},{label:"相关交易对-是否合约",prop:"pairList",key1:"coinMarket",key2:"supportContract",type:"valueArr"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],v=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],x=[{label:"币种名称",prop:"coinName"},{label:"单笔限额",prop:"singleMaxAmount"},{label:"单日限额",prop:"dayMaxAmount"},{label:"UID",prop:"uidList"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],w=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],k=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],F=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],S=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}]},7514:function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(5),i="find",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),a(a.P+a.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},"9a4a":function(e,t,r){"use strict";var a=r("dd4a"),o=r.n(a);o.a},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var a=r("e265"),o=r.n(a),i=r("a4bb"),l=r.n(i);function n(e,t){if(null==e)return{};var r,a,o={},i=l()(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}function s(e,t){if(null==e)return{};var r,a,i=n(e,t);if(o.a){var l=o()(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,"a",(function(){return s}))},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ce7e:function(e,t,r){var a=r("63b6"),o=r("584a"),i=r("294c");e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],l={};l[e]=t(r),a(a.S+a.F*i((function(){r(1)})),"Object",l)}},dd4a:function(e,t,r){},e265:function(e,t,r){e.exports=r("ed33")},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("7618");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var i={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},l=o.replace(/{([ymdhisa])+}/g,(function(e,t){var r=i[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return l=l.replace(/\//gi,"-"),l}},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},ff53:function(e,t,r){"use strict";var a=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function l(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?o(Number(e)*Math.pow(10,t)):Number(e)}function n(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),p=2;p<r;p++)o[p-2]=arguments[p];if(o.length>0)return s.apply(void 0,[s(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var c=l(e),m=l(t),u=i(e)+i(t),b=c*m;return n(b),b/Math.pow(10,u)}function p(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),l=2;l<r;l++)o[l-2]=arguments[l];if(o.length>0)return p.apply(void 0,[p(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(s(e,n)+s(t,n))/n}function c(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),l=2;l<r;l++)o[l-2]=arguments[l];if(o.length>0)return c.apply(void 0,[c(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var n=Math.pow(10,Math.max(i(e),i(t)));return(s(e,n)-s(t,n))/n}function m(e,t){for(var r=arguments.length,p=new Array(r>2?r-2:0),c=2;c<r;c++)p[c-2]=arguments[c];if(p.length>0)return m.apply(void 0,[m(e,t),p[0]].concat(Object(a["a"])(p.slice(1))));var u=l(e),b=l(t);return n(u),n(b),s(u/b,o(Math.pow(10,i(t)-i(e))))}function u(e,t){var r=Math.pow(10,t);return m(Math.round(s(e,r)),r)}var b=!0;function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:o,plus:p,minus:c,times:s,divide:m,round:u,digitLength:i,float2Fixed:l,enableBoundaryChecking:d}}}]);