(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e0a4e58"],{"20d6":function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(6),i="findIndex",n=!0;i in[]&&Array(1)[i]((function(){n=!1})),a(a.P+a.F*n,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"32a6":function(e,t,r){var a=r("241e"),o=r("c3a1");r("ce7e")("keys",(function(){return function(e){return o(a(e))}}))},"4eea":function(e,t,r){"use strict";var a=r("a7a3"),o=r.n(a);o.a},"5a20":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pairs-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addSymbol}},[e._v("添加")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{actionMoreShow:!0,actionMoreText:"更多",moreArr:e.moreArr,listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"symbolForm",attrs:{model:e.symbolForm,rules:e.rules}},[r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"coinMarketId","label-width":e.formLabelWidth,prop:"coinMarketId"}},[r("el-input",{attrs:{autocomplete:"off"},on:{input:function(t){return e.checkVal("coinMarketId")}},model:{value:e.symbolForm.coinMarketId,callback:function(t){e.$set(e.symbolForm,"coinMarketId",t)},expression:"symbolForm.coinMarketId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"交易币种","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{filterable:"",placeholder:"",wdith:"20%"},model:{value:e.symbolForm.coinId,callback:function(t){e.$set(e.symbolForm,"coinId",t)},expression:"symbolForm.coinId"}},e._l(e.coin_list,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"定价货币","label-width":e.formLabelWidth,prop:"marketId"}},[r("el-select",{attrs:{filterable:"",placeholder:"",wdith:"20%"},model:{value:e.symbolForm.marketId,callback:function(t){e.$set(e.symbolForm,"marketId",t)},expression:"symbolForm.marketId"}},e._l(e.coin_list,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"首发价","label-width":e.formLabelWidth,prop:"initPrice"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("initPrice")}},model:{value:e.symbolForm.initPrice,callback:function(t){e.$set(e.symbolForm,"initPrice",t)},expression:"symbolForm.initPrice"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"下单档位","label-width":e.formLabelWidth,prop:"gears"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("gears")}},model:{value:e.symbolForm.gears,callback:function(t){e.$set(e.symbolForm,"gears",t)},expression:"symbolForm.gears"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"最小下单量","label-width":e.formLabelWidth,prop:"minTradeLimit"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("minTradeLimit")}},model:{value:e.symbolForm.minTradeLimit,callback:function(t){e.$set(e.symbolForm,"minTradeLimit",t)},expression:"symbolForm.minTradeLimit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"最大下单量","label-width":e.formLabelWidth,prop:"maxTradeLimit"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("maxTradeLimit")}},model:{value:e.symbolForm.maxTradeLimit,callback:function(t){e.$set(e.symbolForm,"maxTradeLimit",t)},expression:"symbolForm.maxTradeLimit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"买入费率","label-width":e.formLabelWidth,prop:"exRateBuy"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("exRateBuy")}},model:{value:e.symbolForm.exRateBuy,callback:function(t){e.$set(e.symbolForm,"exRateBuy",t)},expression:"symbolForm.exRateBuy"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"卖出费率","label-width":e.formLabelWidth,prop:"exRateSell"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("exRateSell")}},model:{value:e.symbolForm.exRateSell,callback:function(t){e.$set(e.symbolForm,"exRateSell",t)},expression:"symbolForm.exRateSell"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"价格小数位","label-width":e.formLabelWidth,prop:"pricePrecision"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("pricePrecision")}},model:{value:e.symbolForm.pricePrecision,callback:function(t){e.$set(e.symbolForm,"pricePrecision",t)},expression:"symbolForm.pricePrecision"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"数量小数位","label-width":e.formLabelWidth,prop:"amountPrecision"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("amountPrecision")}},model:{value:e.symbolForm.amountPrecision,callback:function(t){e.$set(e.symbolForm,"amountPrecision",t)},expression:"symbolForm.amountPrecision"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"排序","label-width":e.formLabelWidth,prop:"sortNo"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("sortNo")}},model:{value:e.symbolForm.sortNo,callback:function(t){e.$set(e.symbolForm,"sortNo",t)},expression:"symbolForm.sortNo"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"分区排序","label-width":e.formLabelWidth,prop:"partitionSort"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("partitionSort")}},model:{value:e.symbolForm.partitionSort,callback:function(t){e.$set(e.symbolForm,"partitionSort",t)},expression:"symbolForm.partitionSort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"撮合引擎类型","label-width":e.formLabelWidth,prop:"mainStream"}},[r("el-select",{attrs:{disabled:"编辑币种"==e.formName,placeholder:"",wdith:"20%"},model:{value:e.symbolForm.mainStream,callback:function(t){e.$set(e.symbolForm,"mainStream",t)},expression:"symbolForm.mainStream"}},e._l(e.mainStream_list,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"是否上架","label-width":e.formLabelWidth,prop:"status"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.symbolForm.status,callback:function(t){e.$set(e.symbolForm,"status",t)},expression:"symbolForm.status"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"开启下单","label-width":e.formLabelWidth,prop:"onDealing"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.symbolForm.onDealing,callback:function(t){e.$set(e.symbolForm,"onDealing",t)},expression:"symbolForm.onDealing"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推荐至首页","label-width":e.formLabelWidth,prop:"onTop"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.symbolForm.onTop,callback:function(t){e.$set(e.symbolForm,"onTop",t)},expression:"symbolForm.onTop"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否NFT专区","label-width":e.formLabelWidth,prop:"onTop"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.symbolForm.onTop,callback:function(t){e.$set(e.symbolForm,"onTop",t)},expression:"symbolForm.onTop"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},o=[],i=(r("8e6e"),r("456d"),r("20d6"),r("ac6a"),r("bd86")),n=r("a8db"),s=(r("28a5"),r("96cf"),r("3b8d")),l=r("c249"),c=r("2fee"),m=r("f21b"),u=r("6f79"),b=r("4ec3");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={name:"Pairs",components:{Btable:c["a"],Bsearch:l["a"],iconPage:m["a"]},data:function(){return{moreArr:[],isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,dialogFormVisible:!1,symbolForm:{coinMarketId:"",coinId:"",marketId:"",initPrice:"",gears:"",minTradeLimit:"",maxTradeLimit:"",exRateBuy:"",exRateSell:"",pricePrecision:"",amountPrecision:"",sortNo:"",partitionSort:"",mainStream:"",status:!1,onTop:!1,onDealing:!1},rules:{coinId:[{required:!0,message:"必填",trigger:"change"}],marketId:[{required:!0,message:"必填",trigger:"change"}],initPrice:[{required:!0,message:"必填",trigger:"blur"}],gears:[{required:!0,message:"必填",trigger:"blur"}],minTradeLimit:[{required:!0,message:"必填",trigger:"blur"}],maxTradeLimit:[{required:!0,message:"必填",trigger:"blur"}],exRateBuy:[{required:!0,message:"必填",trigger:"blur"}],exRateSell:[{required:!0,message:"必填",trigger:"blur"}],sortNo:[{required:!0,message:"必填",trigger:"blur"}],pricePrecision:[{required:!0,message:"必填",trigger:"blur"}],amountPrecision:[{required:!0,message:"必填",trigger:"blur"}],mainStream:[{required:!0,message:"必填",trigger:"blur"}]},mainStream_list:[{label:"平台币",value:0},{label:"主流币1",value:1},{label:"主流币2",value:2},{label:"主流币3",value:3}],formName:"新增交易对",formLabelWidth:"120px",pairList:[],coin_list:[]}},methods:{doHandle:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,i,n,l,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"switchCoin"!==r){e.next=8;break}return o={coinMarketId:a.coinMarketId},o.status=a.status?1:0,e.next=6,b["a"].editSymbol(o);case 6:i=e.sent,i?this.$message({message:i.data.message,type:"success"}):this.getList();case 8:if("switchCoinOrder"!==r){e.next=15;break}return n={coinMarketId:a.coinMarketId},n.onDealing=a.onDealing?1:0,e.next=13,b["a"].editSymbol(n);case 13:l=e.sent,l?this.$message({message:l.data.message,type:"success"}):this.getList();case 15:if("edit"===r&&(this.formName="编辑币种",this.dialogFormVisible=!0,this.$nextTick((function(){c.$refs["symbolForm"].resetFields();var e=a.coinMarketId,t=a.coinId,r=a.marketId,o=a.minTradeLimit,i=a.maxTradeLimit,n=a.exRateBuy,s=a.exRateSell,l=a.sortNo,m=a.partitionSort,u=a.pricePrecision,b=a.amountPrecision,p=a.mainStream,f=a.status,d=a.onTop,h=a.onDealing,g=a.initPrice,y=a.gears;c.symbolForm={coinMarketId:e,coinId:t,marketId:r,minTradeLimit:o,maxTradeLimit:i,exRateBuy:n,exRateSell:s,sortNo:l,partitionSort:m,pricePrecision:u,amountPrecision:b,mainStream:p,status:f,onTop:d,onDealing:h,initPrice:g,gears:y}}))),"onekeyDelete"!==r){e.next=20;break}if(a.status&&a.onDealing){e.next=19;break}return e.abrupt("return",this.$message.error("请打开上架和下单开关后再操作"));case 19:this.$confirm(a.coinMarket+"是否一键删除K线?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].pairsOnekeyDelete({coinMarket:a.coinMarket,signInterface:"pp.wa1992.3$5@!!__"});case 2:t=e.sent,t&&(c.$message({type:"success",message:"一键删除成功"}),c.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 20:if("onekeyPull"!==r){e.next=24;break}if(a.status&&a.onDealing){e.next=23;break}return e.abrupt("return",this.$message.error("请打开上架和下单开关后再操作"));case 23:this.$confirm(a.coinMarket+"是否一键拉取K线?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].pairsOnekeyPull({symbol:a.coinMarket.split("/").join("").toLocaleLowerCase(),coinMarke:a.coinMarket});case 2:t=e.sent,t&&(c.$message({type:"success",message:"一键拉取成功"}),c.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 24:if("onekeyUpdate"!==r){e.next=28;break}if(a.status&&a.onDealing){e.next=27;break}return e.abrupt("return",this.$message.error("请打开上架和下单开关后再操作"));case 27:this.$confirm(a.coinMarket+"是否一键更新K线?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].pairsOnekeyUpdate({coinMarket:a.coinMarket});case 2:t=e.sent,t&&(c.$message({type:"success",message:"一键更新成功"}),c.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 28:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addSymbol:function(){var e=this;this.formName="新增交易对",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["symbolForm"].resetFields()}))},confirmOp:function(){var e=this;this.$refs["symbolForm"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,o,i,s,l,c,m,u,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=18;break}if(a=e.symbolForm,o=a.coinMarketId,i=a.status,s=a.onDealing,l=a.onTop,c=a.initPrice,m=Object(n["a"])(a,["coinMarketId","status","onDealing","onTop","initPrice"]),u=f({status:i?1:0,onTop:l?1:0,onDealing:s?1:0,initPrice:c||1},m),e.btnLoading=!0,""!==o){t.next=10;break}return t.next=7,b["a"].addSymbol(u);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,b["a"].editSymbol(f({coinMarketId:o},u));case 12:t.t0=t.sent;case 13:p=t.t0,p&&(e.$message({message:p.data.message,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1,t.next=19;break;case 18:return t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},checkVal:function(e){this.symbolForm[e]<0&&(this.symbolForm[e]=0)},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a,o,i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,b["a"].getSymbolList(t);case 7:r=e.sent,r&&(a=r.data.data,o=a.records,i=a.total,n=a.current,s=a.pages,this.total=i,this.pages=s,this.current_page=n,[],o.forEach((function(e){e["status"]=!!e["status"],e["onTop"]=!!e["onTop"],e["onDealing"]=!!e["onDealing"]})),this.list=o,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getSymbolList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getSymbolList").then((function(){t.searchCofig[0]["list"]=t.$store.state.common.symbollist})),this.$store.dispatch("common/getCoinList").then((function(){t.coin_list=t.$store.state.common.coinlist}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("Pairs",u["v"],u["w"]),r=t.val.findIndex((function(e){return"action"==e.type})),a=t.val[r].btnGroup,this.moreArr=a.filter((function(e,t){return 0!=t})),t.val[r]["btnGroup"].splice(1),this.configs=t.val,this.isCURDAuth=t.isAdd,this.searchCofig=this.$util.clone(u["x"]),this.getList(),this.getSymbolList();case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},h=d,g=(r("4eea"),r("0c7c")),y=Object(g["a"])(h,a,o,!1,null,"12366e22",null);t["default"]=y.exports},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},a4bb:function(e,t,r){e.exports=r("8aae")},a7a3:function(e,t,r){},a8db:function(e,t,r){"use strict";var a=r("e265"),o=r.n(a),i=r("a4bb"),n=r.n(i);function s(e,t){if(null==e)return{};var r,a,o={},i=n()(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}function l(e,t){if(null==e)return{};var r,a,i=s(e,t);if(o.a){var n=o()(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,"a",(function(){return l}))},ce7e:function(e,t,r){var a=r("63b6"),o=r("584a"),i=r("294c");e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],n={};n[e]=t(r),a(a.S+a.F*i((function(){r(1)})),"Object",n)}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols}}]);