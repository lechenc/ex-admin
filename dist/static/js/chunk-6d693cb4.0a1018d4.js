(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d693cb4"],{6605:function(e,t,a){},"6f33":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chainType-container"},[e.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addChain}},[e._v("添加")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"chainForm",attrs:{model:e.chainForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"类型名称","label-width":e.formLabelWidth,prop:"chainName"}},[a("el-input",{attrs:{autocomplete:"off",type:"text"},model:{value:e.chainForm.chainName,callback:function(t){e.$set(e.chainForm,"chainName",t)},expression:"chainForm.chainName"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"链类型详情",visible:e.dialogDetailVisible,width:"500px"},on:{"update:visible":function(t){e.dialogDetailVisible=t}}},[a("el-form",[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"类型名称","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.chainName))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"相关币种","label-width":e.formLabelWidth}},[e._v(e._s(e.curRow.coinName))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"创建时间","label-width":e.formLabelWidth}},[e._v(e._s(e._f("typeTime")(e.curRow.createTime)))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"更新时间","label-width":e.formLabelWidth}},[e._v(e._s(e._f("typeTime")(e.curRow.updateTime)))])],1)],1)],1),e._v(" "),a("div",{staticClass:"middle",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogDetailVisible=!1}}},[e._v("确 定")])],1)],1)],1)},i=[],l=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),n=(a("96cf"),a("3b8d")),o=a("c249"),p=a("2fee"),c=a("f21b"),s=a("6f79"),u=a("ed08"),b=a("4ec3");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={name:"ChainType",components:{Btable:p["a"],Bsearch:o["a"],iconPage:c["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,dialogFormVisible:!1,chainForm:{id:"",chainName:""},rules:{chainName:[{required:!0,message:"必填",trigger:"blur"}]},formName:"",formLabelWidth:"125px",curRow:{},dialogDetailVisible:!1}},filters:{typeTime:function(e){return e?Object(u["a"])(e):""}},methods:{doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,r=t.row,"edit"===a&&(this.formName="编辑链类型",this.dialogFormVisible=!0,this.$nextTick((function(){i.$refs["chainForm"].resetFields();var e=r.id,t=r.chainName;i.chainForm={id:e,chainName:t}}))),"detail"===a&&(this.curRow=r,this.dialogDetailVisible=!0),"del"===a&&this.$confirm("确定删除？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:r.id},e.next=3,b["a"].setDeleteChain(t);case 3:a=e.sent,a&&(i.$message({type:"success",message:"删除成功!"}),i.getList());case 5:case"end":return e.stop()}}),e)})))).catch((function(){}));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addChain:function(){var e=this;this.formName="添加链类型",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["chainForm"].resetFields(),e.chainForm={id:"",chainName:""}}))},confirmOp:function(){var e=this;this.$refs["chainForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,i,l,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=16;break}if(r=e.chainForm,i=r.id,l=r.chainName,n={chainName:l},e.btnLoading=!0,""!==i){t.next=10;break}return t.next=7,b["a"].setAddChain(n);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,b["a"].setUpdateChain(m({id:i},n));case 12:t.t0=t.sent;case 13:o=t.t0,o&&(""===i?"添加成功":"编辑成功",e.$message({message:o.data.message,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i,l,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,b["a"].getChainPage(t);case 7:a=e.sent,a&&(r=a.data.data,i=r.records,l=r.total,n=r.current,o=r.pages,this.total=l,this.pages=o,this.current_page=n,this.list=i,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("ChainType",s["a"],s["b"]),this.configs=t.val,this.isCURDAuth=t.isAdd,this.getList();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},f=h,g=(a("b8c6"),a("0c7c")),y=Object(g["a"])(f,r,i,!1,null,"107b21a2",null);t["default"]=y.exports},"6f79":function(e,t,a){"use strict";a.d(t,"o",(function(){return v})),a.d(t,"n",(function(){return y})),a.d(t,"f",(function(){return w})),a.d(t,"g",(function(){return x})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return n})),a.d(t,"s",(function(){return o})),a.d(t,"t",(function(){return p})),a.d(t,"u",(function(){return c})),a.d(t,"p",(function(){return s})),a.d(t,"q",(function(){return u})),a.d(t,"r",(function(){return b})),a.d(t,"h",(function(){return d})),a.d(t,"i",(function(){return m})),a.d(t,"j",(function(){return h})),a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return g})),a.d(t,"k",(function(){return A})),a.d(t,"l",(function(){return T})),a.d(t,"m",(function(){return N}));var r=a("4360"),i=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"},{label:"热门",prop:"hot",type:"switch",fn:"trhot",alias:"trhot"},{label:"上架币币",prop:"isTrade",type:"switch",fn:"switchTrade",alias:"trputon"},{label:"充币",prop:"isDeposit",type:"switch",fn:"switchDeposit",alias:"trfill"},{label:"提币",prop:"isWithdraw",type:"switch",fn:"switchWithdraw",alias:"trdraw"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],l=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"}],n=[{type:"select",label:"币种",prop:"coinId",value:"",list:r["a"].state.common.coinlist}],o=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币",val:0},{text:"主流币1",val:1},{text:"主流币2",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"下单",prop:"onDealing",type:"switch",fn:"switchCoinOrder",alias:"trorder"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],p=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币类",val:0},{text:"主流币类",val:1},{text:"非主流币类",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"}],c=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:r["a"].state.common.symbollist}],s=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"},{label:"启动状态",prop:"status",type:"switch",fn:"switchWithdraw",alias:"trstart"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],u=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"}],b=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:[]}],d=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],m=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],h=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],f=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],g=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],y=[{label:"板块名称",prop:"chainName"},{label:"板块描述",prop:"coinName"},{label:"相关交易对-是否合约",prop:"createTime1"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],v=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],w=[{label:"币种名称",prop:"coinName"},{label:"单笔限额",prop:"singleMaxAmount"},{label:"单日限额",prop:"dayMaxAmount"},{label:"UID",prop:"uidList"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],x=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],A=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],T=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],N=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}]},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),l="find",n=!0;l in[]&&Array(1)[l]((function(){n=!1})),r(r.P+r.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(l)},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},b8c6:function(e,t,a){"use strict";var r=a("6605"),i=a.n(r);i.a},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var l={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=i.replace(/{([ymdhisa])+}/g,(function(e,t){var a=l[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function l(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=l(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function o(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),c=2;c<a;c++)i[c-2]=arguments[c];if(i.length>0)return p.apply(void 0,[p(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var s=n(e),u=n(t),b=l(e)+l(t),d=s*u;return o(d),d/Math.pow(10,b)}function c(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var o=Math.pow(10,Math.max(l(e),l(t)));return(p(e,o)+p(t,o))/o}function s(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var o=Math.pow(10,Math.max(l(e),l(t)));return(p(e,o)-p(t,o))/o}function u(e,t){for(var a=arguments.length,c=new Array(a>2?a-2:0),s=2;s<a;s++)c[s-2]=arguments[s];if(c.length>0)return u.apply(void 0,[u(e,t),c[0]].concat(Object(r["a"])(c.slice(1))));var b=n(e),d=n(t);return o(b),o(d),p(b/d,i(Math.pow(10,l(t)-l(e))))}function b(e,t){var a=Math.pow(10,t);return u(Math.round(p(e,a)),a)}var d=!0;function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:i,plus:c,minus:s,times:p,divide:u,round:b,digitLength:l,float2Fixed:n,enableBoundaryChecking:m}}}]);