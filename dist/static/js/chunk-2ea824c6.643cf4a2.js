(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ea824c6"],{"2e08":function(e,t,l){var a=l("9def"),r=l("9744"),p=l("be13");e.exports=function(e,t,l,i){var o=String(p(e)),n=o.length,b=void 0===l?" ":String(l),c=a(t);if(c<=n||""==b)return o;var u=c-n,s=r.call(b,Math.ceil(u/b.length));return s.length>u&&(s=s.slice(0,u)),i?s+o:o+s}},"6f79":function(e,t,l){"use strict";l.d(t,"h",(function(){return P})),l.d(t,"i",(function(){return C})),l.d(t,"t",(function(){return G})),l.d(t,"s",(function(){return D})),l.d(t,"G",(function(){return R})),l.d(t,"F",(function(){return U})),l.d(t,"p",(function(){return M})),l.d(t,"q",(function(){return _})),l.d(t,"r",(function(){return S})),l.d(t,"v",(function(){return x})),l.d(t,"u",(function(){return v})),l.d(t,"f",(function(){return w})),l.d(t,"g",(function(){return g})),l.d(t,"c",(function(){return r})),l.d(t,"d",(function(){return p})),l.d(t,"e",(function(){return i})),l.d(t,"z",(function(){return o})),l.d(t,"A",(function(){return n})),l.d(t,"B",(function(){return b})),l.d(t,"w",(function(){return c})),l.d(t,"x",(function(){return u})),l.d(t,"y",(function(){return s})),l.d(t,"j",(function(){return y})),l.d(t,"k",(function(){return d})),l.d(t,"l",(function(){return m})),l.d(t,"a",(function(){return f})),l.d(t,"b",(function(){return h})),l.d(t,"m",(function(){return T})),l.d(t,"n",(function(){return A})),l.d(t,"o",(function(){return k})),l.d(t,"C",(function(){return N})),l.d(t,"D",(function(){return I})),l.d(t,"E",(function(){return E}));var a=l("4360"),r=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"排序",prop:"position"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"},{label:"热门",prop:"hot",type:"switch",fn:"trhot",alias:"trhot"},{label:"上架币币",prop:"isTrade",type:"switch",fn:"switchTrade",alias:"trputon"},{label:"充币",prop:"isDeposit",type:"switch",fn:"switchDeposit",alias:"trfill"},{label:"提币",prop:"isWithdraw",type:"switch",fn:"switchWithdraw",alias:"trdraw"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],p=[{label:"币种icon",prop:"iconUrl",type:"img"},{label:"币种简称",prop:"coinName"},{label:"最小转出额",prop:"tranOutSingleMinAmount"},{label:"币种小数位",prop:"decimalPlaces"},{label:"排序",prop:"position"},{label:"转出手续费",prop:"tranOutFee"},{label:"所属链",prop:"chainName"}],i=[{type:"select_search",label:"币种",prop:"coinId",value:"",list:a["a"].state.common.coinlist}],o=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币",val:0},{text:"主流币1",val:1},{text:"主流币2",val:2},{text:"主流币3",val:3}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"下单",prop:"onDealing",type:"switch",fn:"switchCoinOrder",alias:"trorder"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"},{label:"操作",prop:"action",type:"action",width:"200",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"一键删除K线",fn:"onekeyDelete",filter_type:"filter_indexOf_Except",filter_key:"coinMarket",filter_status:["ALPT","CNHT"],type:"primary",alias:"onekeyDelete"},{label:"一键拉取K线",fn:"onekeyPull",filter_type:"filter_indexOf_Except",filter_key:"coinMarket",filter_status:["ALPT","CNHT"],type:"primary",alias:"onekeyPull"},{label:"一键更新K线",fn:"onekeyUpdate",filter_type:"filter_indexOf_Except",filter_key:"coinMarket",filter_status:["ALPT","CNHT"],type:"primary",alias:"onekeyUpdate"}]}],n=[{label:"交易对",prop:"coinMarket"},{label:"初始价",prop:"initPrice"},{label:"撮合引擎类型",prop:"mainStream",type:"filter",show_type:"text",width:"120",filters:[{text:"平台币类",val:0},{text:"主流币类",val:1},{text:"非主流币类",val:2}]},{label:"下单档位",prop:"gears"},{label:"价格小数位",prop:"pricePrecision"},{label:"数量小数位",prop:"amountPrecision"},{label:"买入费率",prop:"exRateBuy"},{label:"卖出费率",prop:"exRateSell"},{label:"最小下单量",prop:"minTradeLimit"},{label:"最大下单量",prop:"maxTradeLimit"},{label:"排序",prop:"sortNo"},{label:"分区排序",prop:"partitionSort"}],b=[{type:"select_search",label:"交易对",prop:"coinMarketId",value:"",list:a["a"].state.common.symbollist}],c=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"},{label:"启动状态",prop:"status",type:"switch",fn:"switchWithdraw",alias:"trstart"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],u=[{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"用户名",prop:"account"},{label:"用户名密码",prop:"loginPassword"},{label:"单次挂单数量区间",prop:"amountSection"},{label:"开始时间",prop:"startTime",type:"time"},{label:"结束时间",prop:"endTime",type:"time"}],s=[{type:"select",label:"交易对",prop:"coinMarketId",value:"",list:[]}],y=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单标记价浮动比例",prop:"markFloatingRatio"},{label:"下单成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],d=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单标记价浮动比例",prop:"markFloatingRatio"},{label:"下单成交价浮动比例",prop:"floatingRatio"},{label:"最新成交最小张数",prop:"minSheets"},{label:"最新成交最大张数",prop:"maxSheets"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"是否模拟",prop:"isMock",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"模拟交易对",prop:"mockCoinMarket"},{label:"是否正常",prop:"isFormal",width:100,type:"filter",show_type:"text",filters:[{text:"都关闭",val:0},{text:"正常打开",val:1},{text:"模拟盘打开",val:2},{text:"都打开",val:3}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],m=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],f=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:420,btnGroup:[{label:"一键同步区块高度",fn:"onekeyStepBlockHeight",type:"primary",alias:"onekeyStepBlockHeight"},{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],h=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],v=[{label:"板块名称",prop:"name"},{label:"板块描述",prop:"desc"},{label:"英文描述",prop:"descEn"},{label:"相关交易对-是否合约",prop:"pairList",key1:"coinMarket",key2:"supportContract",type:"valueArr"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:250,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],x=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],w=[{label:"币种名称",prop:"coinName"},{label:"单笔限额",prop:"singleMaxAmount"},{label:"单日限额",prop:"dayMaxAmount"},{label:"UID",prop:"uidList"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],g=[{label:"链名称",prop:"chainName"},{label:"相关币种",prop:"coinName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],T=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],A=[{label:"ID",prop:"id"},{label:"机器人UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"下单委托深度取值比例",prop:"proportion"},{label:"深度参数",prop:"depthParameter"},{label:"启动状态",prop:"statusText",width:100,type:"filter",show_type:"text",filters:[{text:"未启动",val:1},{text:"已启动",val:2}]},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],k=[{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],M=[{label:"K线类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"币币交易",val:0},{text:"合约交易",val:1}]},{label:"交易对品种",prop:"coinMarket"},{label:"K线时间类型",prop:"type",type:"timeType",show_type:"text",filters:[{text:"1min",val:0},{text:"5min",val:1},{text:"15min",val:2},{text:"30min",val:3},{text:"1h",val:4},{text:"4h",val:5},{text:"1d",val:6},{text:"1w",val:7},{text:"1m",val:8}]},{label:"旧高开低收",arr:["oldHigh","oldOpen","oldLow","oldClose"],type:"textArr",join:","},{label:"新高开低收",arr:["newHigh","newOpen","newLow","newClose"],type:"textArr",join:","},{label:"备注",prop:"remark"},{label:"创建人",prop:"userName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"审核人",prop:"checkUserName"},{label:"审核时间",prop:"updateTime",type:"time"},{label:"状态",prop:"status",type:"filter",show_type:"text",filters:[{text:"未处理",val:0},{text:"已通过",val:1},{text:"已驳回",val:2}]},{label:"操作",prop:"action",type:"action",width:"130",btnGroup:[{label:"审核",fn:"check",filter_type:"array",filter_key:"status",filter_status:["0"],type:"primary",alias:"check"}]}],_=[{label:"K线类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"币币交易",val:0},{text:"合约交易",val:1}]},{label:"交易对品种",prop:"coinMarket"},{label:"K线时间类型",prop:"type",type:"timeType",show_type:"text",filters:[{text:"1min",val:0},{text:"5min",val:1},{text:"15min",val:2},{text:"30min",val:3},{text:"1h",val:4},{text:"4h",val:5},{text:"1d",val:6},{text:"1w",val:7},{text:"1m",val:8}]},{label:"旧高开低收",arr:["oldHigh","oldOpen","oldLow","oldClose"],type:"textArr",join:","},{label:"新高开低收",arr:["newHigh","newOpen","newLow","newClose"],type:"textArr",join:","},{label:"备注",prop:"remark"},{label:"创建人",prop:"userName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"审核人",prop:"checkUserName"},{label:"审核时间",prop:"updateTime",type:"time"},{label:"状态",prop:"status",type:"filter",show_type:"text",filters:[{text:"未处理",val:0},{text:"已通过",val:1},{text:"已驳回",val:2}]}],S=[{type:"date_rank",label:"创建时间",prop:"createTimeStart",prop2:"createTimeEnd",value:""},{type:"date_rank",label:"更新时间",prop:"dealTimeStart",prop2:"dealTimeEnd",value:""},{type:"select",label:"K线类型",prop:"type",value:"",list:[{label:"币币交易",value:0},{label:"合约交易",value:1}]},{type:"select",label:"交易对品种",prop:"coinMarket",value:"",list:[]},{type:"select",label:"K线时间类型",prop:"timeType",value:"",list:[{label:"1min",value:0},{label:"5min",value:1},{label:"15min",value:2},{label:"30min",value:3},{label:"1h",value:4},{label:"4h",value:5},{label:"1d",value:6},{label:"1w",value:7},{label:"1m",value:8}]},{type:"text",label:"创建人",prop:"userName",value:""},{type:"text",label:"审核人",prop:"checkUserName",value:""},{type:"select",label:"状态",prop:"status",value:"",list:[{label:"未处理",value:0},{label:"已通过",value:1},{label:"已驳回",value:2}]}],N=[{type:"date_rank_s",label:"更新时间",prop:"updateTimeStart",prop2:"updateTimeEnd"},{type:"select",label:"交易类型",prop:"coinType",value:"",list:[]},{type:"select",prop:"coinMarket",label:"交易对",value:"",list:[]}],E=[{label:"序号",prop:"id"},{label:"交易对类型",prop:"coinType",type:"filter",show_type:"text",filters:[{val:0,text:"合约"},{val:1,text:"币币"}]},{label:"交易对",prop:"coinMarket"},{label:"24h成交额下限",prop:"turnoverLower"},{label:"24h成交额上线限",prop:"turnoverUpper"},{label:"占比(%)",prop:"proportion"},{label:"创建时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],I=N,U=[{label:"创建时间",prop:"createTime"},{label:"ID",prop:"id",width:"180"},{label:"事务类型",prop:"transactionType",type:"filter",show_type:"text",filters:[{text:"合约订单",val:1},{text:"划转",val:2}]},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:"200",btnGroup:[{label:"一键修复",fn:"repair",type:"primary",alias:"repair"}]}],R=[],D=[{label:"创建时间",prop:"createTime"},{label:"ID",prop:"id",width:"180"},{label:"事务类型",prop:"transactionType",type:"filter",show_type:"text",filters:[{text:"合约订单",val:1},{text:"划转",val:2}]},{label:"处理状态",prop:"status",type:"filter",show_type:"text",filters:[{text:"未处理",val:0},{text:"业务执行完成",val:1},{text:"回滚成功",val:2}]},{label:"操作",prop:"action",type:"action",width:"200",btnGroup:[{label:"一键修复",fn:"repair",type:"primary",alias:"repair"}]}],G=[],P=[{label:"创建时间",prop:"createTime"},{label:"ID",prop:"id",width:"180"},{label:"消息",prop:"manage",width:"180"},{label:"事务类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"订单消费失败",val:0},{text:"订单下单失败,需资产回退",val:1},{text:"成交信息插入失败",val:2},{text:"合约订单消费失败",val:3},{text:"合约下单，资产回退",val:4},{text:"合约发送清算失败",val:5}]},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:"200",btnGroup:[{label:"一键修复",fn:"repair",type:"primary",alias:"repair"}]}],C=[]},7514:function(e,t,l){"use strict";var a=l("5ca1"),r=l("0a49")(5),p="find",i=!0;p in[]&&Array(1)[p]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),l("9c6c")(p)},"87f3":function(e,t,l){var a=l("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,l){var a=l("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,l){"use strict";var a=l("4588"),r=l("be13");e.exports=function(e){var t=String(r(this)),l="",p=a(e);if(p<0||p==1/0)throw RangeError("Count can't be negative");for(;p>0;(p>>>=1)&&(t+=t))1&p&&(l+=t);return l}},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,l){"use strict";l.d(t,"a",(function(){return r}));l("28a5"),l("f576"),l("a481"),l("6b54");var a=l("7618");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var l,r=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?l=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),l=new Date(e));var p={y:l.getFullYear(),m:l.getMonth()+1,d:l.getDate(),h:l.getHours(),i:l.getMinutes(),s:l.getSeconds(),a:l.getDay()},i=r.replace(/{([ymdhisa])+}/g,(function(e,t){var l=p[t];return"a"===t?["日","一","二","三","四","五","六"][l]:l.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},f576:function(e,t,l){"use strict";var a=l("5ca1"),r=l("2e08"),p=l("a25f"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(p);a(a.P+a.F*i,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,l){"use strict";var a=l("75fc");l("9278"),l("87f3"),l("a481"),l("6b54"),l("28a5"),l("c5f6");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function p(e){var t=e.toString().split(/[eE]/),l=(t[0].split(".")[1]||"").length-+(t[1]||0);return l>0?l:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=p(e);return t>0?r(Number(e)*Math.pow(10,t)):Number(e)}function o(e){y&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function n(e,t){for(var l=arguments.length,r=new Array(l>2?l-2:0),b=2;b<l;b++)r[b-2]=arguments[b];if(r.length>0)return n.apply(void 0,[n(e,t),r[0]].concat(Object(a["a"])(r.slice(1))));var c=i(e),u=i(t),s=p(e)+p(t),y=c*u;return o(y),y/Math.pow(10,s)}function b(e,t){for(var l=arguments.length,r=new Array(l>2?l-2:0),i=2;i<l;i++)r[i-2]=arguments[i];if(r.length>0)return b.apply(void 0,[b(e,t),r[0]].concat(Object(a["a"])(r.slice(1))));var o=Math.pow(10,Math.max(p(e),p(t)));return(n(e,o)+n(t,o))/o}function c(e,t){for(var l=arguments.length,r=new Array(l>2?l-2:0),i=2;i<l;i++)r[i-2]=arguments[i];if(r.length>0)return c.apply(void 0,[c(e,t),r[0]].concat(Object(a["a"])(r.slice(1))));var o=Math.pow(10,Math.max(p(e),p(t)));return(n(e,o)-n(t,o))/o}function u(e,t){for(var l=arguments.length,b=new Array(l>2?l-2:0),c=2;c<l;c++)b[c-2]=arguments[c];if(b.length>0)return u.apply(void 0,[u(e,t),b[0]].concat(Object(a["a"])(b.slice(1))));var s=i(e),y=i(t);return o(s),o(y),n(s/y,r(Math.pow(10,p(t)-p(e))))}function s(e,t){var l=Math.pow(10,t);return u(Math.round(n(e,l)),l)}var y=!0;function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];y=e}t["a"]={strip:r,plus:b,minus:c,times:n,divide:u,round:s,digitLength:p,float2Fixed:i,enableBoundaryChecking:d}}}]);