(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d5a8dac"],{c270:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,l,t){"use strict";t.d(l,"a",(function(){return p}));t("28a5"),t("f576"),t("a481"),t("6b54");var a=t("7618");function p(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var t,p=l||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?t=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),t=new Date(e));var r={y:t.getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()},o=p.replace(/{([ymdhisa])+}/g,(function(e,l){var t=r[l];return"a"===l?["日","一","二","三","四","五","六"][t]:t.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},f556:function(e,l,t){"use strict";t.d(l,"t",(function(){return X})),t.d(l,"u",(function(){return Z})),t.d(l,"a",(function(){return J})),t.d(l,"b",(function(){return K})),t.d(l,"f",(function(){return F})),t.d(l,"g",(function(){return Y})),t.d(l,"h",(function(){return Q})),t.d(l,"m",(function(){return j})),t.d(l,"c",(function(){return R})),t.d(l,"d",(function(){return z})),t.d(l,"e",(function(){return L})),t.d(l,"G",(function(){return E})),t.d(l,"H",(function(){return P})),t.d(l,"I",(function(){return B})),t.d(l,"B",(function(){return H})),t.d(l,"C",(function(){return G})),t.d(l,"T",(function(){return M})),t.d(l,"U",(function(){return O})),t.d(l,"D",(function(){return k})),t.d(l,"E",(function(){return S})),t.d(l,"F",(function(){return C})),t.d(l,"x",(function(){return _})),t.d(l,"y",(function(){return D})),t.d(l,"v",(function(){return g})),t.d(l,"w",(function(){return N})),t.d(l,"l",(function(){return I})),t.d(l,"n",(function(){return A})),t.d(l,"o",(function(){return U})),t.d(l,"i",(function(){return a})),t.d(l,"j",(function(){return p})),t.d(l,"k",(function(){return r})),t.d(l,"A",(function(){return o})),t.d(l,"z",(function(){return i})),t.d(l,"p",(function(){return b})),t.d(l,"q",(function(){return n})),t.d(l,"r",(function(){return d})),t.d(l,"s",(function(){return u})),t.d(l,"L",(function(){return v})),t.d(l,"M",(function(){return s})),t.d(l,"N",(function(){return y})),t.d(l,"J",(function(){return m})),t.d(l,"K",(function(){return w})),t.d(l,"R",(function(){return f})),t.d(l,"S",(function(){return T})),t.d(l,"O",(function(){return c})),t.d(l,"P",(function(){return h})),t.d(l,"Q",(function(){return x}));var a=[{label:"广告商UID",prop:"uid"},{label:"广告类型",prop:"advertType",type:"filter",show_type:"text",width:170,filters:[{val:1,text:"在线出售"},{val:2,text:"在线求购"}]},{label:"交易币种",prop:"coinName"},{label:"定价方式",prop:"pricingMethod",type:"filter",show_type:"text",width:130,filters:[{val:1,text:"固定定价"},{val:0,text:"浮动定价"},{val:2,text:"市场定价"}]},{label:"交易价格(CNY)",prop:"price",width:"170"},{label:"初始总量",prop:"totalStock",width:"170"},{label:"冻结存量",prop:"lockedStock",width:"170"},{label:"已成交的数量",prop:"dealAmount",width:"170"},{label:"剩余数量",prop:"remainAmount",width:"170"},{label:"最大交易额",prop:"maxTradeAmount"},{label:"最小交易额",prop:"minTradeAmount"},{label:"支付方式",prop:"payList",type:"labelArr",typeDetail:"stringlist"},{label:"广告单号",prop:"id"},{label:"上/下架时间",prop:"onshelfTime",type:"time"},{label:"是否上架",prop:"isOnshelf",type:"switch",fn:"switchAd",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:200,btnGroup:[{label:"查看/编辑",fn:"detail",type:"primary",alias:"detail"}]}],p=[{label:"广告商UID",prop:"uid"},{label:"广告类型",prop:"advertType",type:"filter",show_type:"text",width:170,filters:[{val:1,text:"在线出售"},{val:2,text:"在线求购"}]},{label:"交易币种",prop:"coinName"},{label:"定价方式",prop:"pricingMethod",type:"filter",show_type:"text",filters:[{val:1,text:"固定定价"},{val:0,text:"浮动定价"},{val:2,text:"市场定价"}]},{label:"交易价格(CNY)",prop:"price",width:"170"},{label:"初始总量",prop:"totalStock",width:"170"},{label:"冻结存量",prop:"lockedStock",width:"170"},{label:"已成交的数量",prop:"dealAmount",width:"170"},{label:"剩余数量",prop:"remainAmount",width:"170"},{label:"最大交易额",prop:"maxTradeAmount"},{label:"最小交易额",prop:"minTradeAmount"},{label:"支付方式",prop:"payList",type:"labelArr",typeDetail:"stringlist"},{label:"广告单号",prop:"id"},{label:"上/下架时间",prop:"onshelfTime",type:"time"}],r=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"广告类型",prop:"advertType",value:"",list:[{label:"在线出售",value:1},{label:"在线求购",value:2}]},{type:"select_search",label:"币种",prop:"coinName",value:"",list:[]},{type:"select",label:"是否上架",prop:"isOnshelf",value:"",list:[{label:"上架",value:1},{label:"下架",value:0}]},{type:"select",label:"价格类型",prop:"pricingMethod",value:"",list:[{label:"固定定价",value:1},{label:"浮动定价",value:0},{label:"市场定价",value:2}]},{type:"select",label:"剩余数量排序",prop:"remainOrder",value:"",list:[{label:"正序",value:"ASC"},{label:"倒序",value:"DESC"}]}],o=[{label:"广告商UID",prop:"uid"},{label:"广告类型",prop:"advertType",type:"filter",show_type:"text",width:170,filters:[{val:1,text:"在线出售"},{val:2,text:"在线求购"}]},{label:"交易币种",prop:"coinName"},{label:"定价方式",prop:"pricingMethod",type:"filter",show_type:"text",filters:[{val:1,text:"固定定价"},{val:0,text:"浮动定价"},{val:2,text:"市场定价"}]},{label:"交易价格(CNY)",prop:"price",width:"170"},{label:"初始总量",prop:"totalStock",width:"170"},{label:"冻结存量",prop:"lockedStock",width:"170"},{label:"已成交的数量",prop:"dealAmount",width:"170"},{label:"剩余数量",prop:"remainAmount",width:"170"},{label:"最大交易额",prop:"maxTradeAmount"},{label:"最小交易额",prop:"minTradeAmount"},{label:"支付方式",prop:"payList",type:"labelArr",typeDetail:"stringlist"},{label:"广告单号",prop:"id"},{label:"上/下架时间",prop:"onshelfTime",type:"time"},{label:"是否上架",prop:"isOnshelf",type:"switch",fn:"switchAd",alias:"trputon"}],i=[{label:"订单号",prop:"recordId",width:"180"},{label:"广告类型",prop:"advertType",type:"filter",show_type:"text",width:170,filters:[{val:"1",text:"在线出售"},{val:"2",text:"在线求购"}]},{label:"广告商UID",prop:"advertUid"},{label:"交易方UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"交易价格(CNY)",prop:"price",width:"170"},{label:"交易数量",prop:"amount"},{label:"总金额",prop:"money"},{label:"订单状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"未付款",val:1},{text:"已付款(等待放行)",val:2},{text:"已完成",val:3},{text:"用户取消",val:4},{text:"申诉中",val:5},{text:"申诉后完成交易",val:6},{text:"申诉后取消交易",val:7},{text:"支付超时取消",val:8}]},{label:"交易类型",prop:"tradeType",type:"filter",show_type:"text",filters:[{text:"法币交易",val:0},{text:"匹配下单",val:1},{text:"抢单",val:2},{text:"手动录单",val:3}]},{label:"手续费",prop:"fee"},{label:"下单时间",prop:"createTime",type:"time"},{label:"确认付款时间",prop:"payTime",type:"time"},{label:"确认放行时间",prop:"letgoTime",type:"time"}],b=[{label:"交易类型",prop:"appealTradeType",type:"filter",show_type:"text",width:120,filters:[{text:"普通交易订单",val:0},{text:"tp商户交易订单",val:1},{text:"币富通自选订单",val:2},{text:"收银台兑入单",val:3},{text:"商户批量兑出单",val:4},{text:"币富通一键购买单",val:5},{text:"币富通一键出售单",val:6},{text:"商户币币批量出金",val:7},{text:"用户币币手动入金",val:8}]},{label:"订单号",prop:"tradeId"},{label:"买方UID",prop:"uid"},{label:"卖方UID",prop:"targetUid"},{label:"币种",prop:"coinName"},{label:"交易数量",prop:"amount"},{label:"兑人民币汇率",prop:"cny"},{label:"折算人民币数量",prop:"money"},{label:"状态",prop:"appealStatus",type:"filter",show_type:"text",filters:[{text:"申诉中",val:"0"},{text:"已处理",val:"1"},{text:"取消",val:"3"}]},{label:"买家口令",prop:"slaveCode"},{label:"卖家口令",prop:"masterCode"},{label:"确认付款时间",prop:"payTime"},{label:"申诉时间",prop:"createTime",type:"time"},{label:"判决时间",prop:"auditTime",type:"time"},{label:"判决人",prop:"auditUserName"},{label:"判决人IP",prop:"auditIp"},{label:"操作",prop:"action",type:"action",width:170,btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"判诀",fn:"judgment",isPop:!1,filter_key:"appealStatus",filter_status:0,type:"success",alias:"judgment"}]}],n=[{label:"交易类型",prop:"appealTradeType",type:"filter",show_type:"text",width:100,filters:[{text:"普通交易订单",val:0},{text:"tp商户交易订单",val:1},{text:"币富通自选订单",val:2},{text:"收银台兑入单",val:3},{text:"商户批量兑出单",val:4},{text:"币富通一键购买单",val:5},{text:"币富通一键出售单",val:6},{text:"商户币币批量出金",val:7},{text:"用户币币手动入金",val:8}]},{label:"订单号",prop:"tradeId"},{label:"买方UID",prop:"uid"},{label:"卖方UID",prop:"targetUid"},{label:"币种",prop:"coinName"},{label:"交易数量",prop:"amount"},{label:"兑人民币汇率",prop:"cny"},{label:"折算人民币数量",prop:"money"},{label:"状态",prop:"appealStatus",type:"filter",show_type:"text",filters:[{text:"申诉中",val:"0"},{text:"已处理",val:"1"},{text:"取消",val:"3"}]},{label:"买家口令",prop:"slaveCode"},{label:"卖家口令",prop:"masterCode"},{label:"确认付款时间",prop:"payTime"},{label:"申诉时间",prop:"createTime",type:"time"},{label:"判决时间",prop:"auditTime",type:"time"},{label:"判决人",prop:"auditUserName"},{label:"判决人IP",prop:"auditIp"}],d=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"订单号",prop:"tradeId",value:"",placeHolder:"请输入"},{type:"select",label:"交易类型",prop:"appealTradeType",value:"",list:[{label:"普通交易订单",value:0},{label:"tp商户交易订单",value:1},{label:"币富通自选订单",value:2},{label:"收银台兑入单",value:3},{label:"商户批量兑出单",value:4},{label:"币富通一键购买单",value:5},{label:"币富通一键出售单",value:6},{label:"商户币币批量出金",value:7},{label:"用户币币手动入金",value:8}]},{type:"select",label:"申诉状态",prop:"appealStatus",value:"",list:[{label:"申诉中",value:"0"},{label:"已处理",value:"1"},{label:"取消",value:"3"}]}],u=[{label:"广告商UID",prop:"advertUid"},{label:"买方UID",prop:"uid"},{label:"卖方UID",prop:"targetUid"},{label:"交易数量",prop:"amount"},{label:"兑人民币汇率",prop:"cny"},{label:"折算人民币数量",width:100,prop:"money"},{label:"收款人名称",prop:"bankUserName"},{label:"银行卡号",prop:"bankCardId"},{label:"银行名称",prop:"bankName"},{label:"支行名称",prop:"bankBranch"},{label:"状态",prop:"appealStatus",type:"filter",show_type:"text",filters:[{text:"申诉中",val:"0"},{text:"已处理",val:"1"},{text:"取消",val:"3"}]},{label:"订单交易类型",prop:"appealTradeType",type:"filter",show_type:"text",width:140,filters:[{val:"0",text:"普通交易"},{val:"1",text:"商户交易"}]},{label:"币种",prop:"coinName"},{label:"买家口令",prop:"slaveCode"},{label:"卖家口令",prop:"masterCode"},{label:"申诉时间",prop:"createTime",type:"time"}],v=[{label:"交易类型",prop:"tradeType",type:"filter",show_type:"text",width:80,filters:[{val:"0",text:"普通法币交易"},{val:"1",text:"Tp订单交易"}]},{label:"订单号",prop:"recordId",width:"100"},{label:"广告单号",prop:"advertId",width:"100"},{label:"广告类型",prop:"advertType",type:"filter",show_type:"text",width:90,filters:[{val:"1",text:"在线出售"},{val:"2",text:"在线求购"}]},{label:"广告商UID",prop:"advertUid",width:"90"},{label:"用户UID",prop:"uid",width:"90"},{label:"币种",prop:"coinName",width:"90"},{label:"交易价格(CNY）",prop:"price",width:"100"},{label:"交易数量",prop:"amount",width:"90"},{label:"总金额",prop:"money",width:"90"},{label:"手续费",prop:"fee",width:"90"},{label:"支付类型",prop:"payType",type:"filter",show_type:"text",width:90,filters:[{val:"1",text:"银行卡"},{val:"2",text:"支付宝"},{val:"3",text:"微信"}]},{label:"支付凭证",prop:"paymentUrl",type:"imgArr"},{label:"订单状态",prop:"tradeStatus",type:"filter",show_type:"text",width:"100",filters:[{text:"未付款",val:1},{text:"已付款(等待放行)",val:2},{text:"已完成",val:3},{text:"用户取消",val:4},{text:"申诉中",val:5},{text:"申诉后完成交易",val:6},{text:"申诉后取消交易",val:7},{text:"支付超时取消",val:8}]},{label:"下单时间",prop:"localCreateTime",type:"time",width:"100"},{label:"支付时间",prop:"localPayTime",type:"time",width:"100"},{label:"放行时间",prop:"localLetGoTime",type:"time",width:"100"},{label:"收款人名称",prop:"bankUserName",width:"100"},{label:"银行名称",prop:"bankName",width:"100"},{label:"支行名称",prop:"bankBranch",width:"100"},{label:"是否激活",prop:"isActivation",type:"filter",show_type:"text",width:100,filters:[{val:"0",text:"未激活"},{val:"1",text:"激活"}]},{label:"操作",prop:"action",type:"action",width:200,btnGroup:[{label:"激活",fn:"activation",type:"primary",alias:"activation"},{label:"对话记录",fn:"dialog",type:"primary",alias:"dialog",noIsClick:!0}]}],s=[{label:"交易类型",prop:"tradeType",type:"filter",show_type:"text",width:80,filters:[{val:"0",text:"普通法币交易"},{val:"1",text:"Tp订单交易"}]},{label:"订单号",prop:"recordId",width:"100"},{label:"广告单号",prop:"advertId",width:"100"},{label:"广告类型",prop:"advertType",type:"filter",show_type:"text",width:90,filters:[{val:"1",text:"在线出售"},{val:"2",text:"在线求购"}]},{label:"广告商UID",prop:"advertUid",width:"90"},{label:"用户UID",prop:"uid",width:"90"},{label:"币种",prop:"coinName",width:"90"},{label:"交易价格(CNY）",prop:"price",width:"100"},{label:"交易数量",prop:"amount",width:"90"},{label:"总金额",prop:"money",width:"90"},{label:"手续费",prop:"fee",width:"90"},{label:"支付类型",prop:"payType",type:"filter",show_type:"text",width:90,filters:[{val:"1",text:"银行卡"},{val:"2",text:"支付宝"},{val:"3",text:"微信"}]},{label:"支付凭证",prop:"paymentUrl",type:"imgArr"},{label:"订单状态",prop:"tradeStatus",type:"filter",show_type:"text",width:"100",filters:[{text:"未付款",val:1},{text:"已付款(等待放行)",val:2},{text:"已完成",val:3},{text:"用户取消",val:4},{text:"申诉中",val:5},{text:"申诉后完成交易",val:6},{text:"申诉后取消交易",val:7},{text:"支付超时取消",val:8}]},{label:"下单时间",prop:"localCreateTime",type:"time",width:"100"},{label:"支付时间",prop:"localPayTime",type:"time",width:"100"},{label:"放行时间",prop:"localLetGoTime",type:"time",width:"100"},{label:"收款人名称",prop:"bankUserName",width:"100"},{label:"银行名称",prop:"bankName",width:"100"},{label:"支行名称",prop:"bankBranch",width:"100"},{label:"是否激活",prop:"isActivation",type:"filter",show_type:"text",width:100,filters:[{val:"0",text:"未激活"},{val:"1",text:"激活"}]}],y=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"广告商UID",prop:"advertUid",value:"",placeHolder:"请输入",subType:"uid"},{type:"text",label:"用户UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"收款类型",prop:"payType",value:"",list:[{label:"银行卡",value:1},{label:"支付宝",value:2},{label:"微信",value:3}]},{type:"text",label:"订单号",prop:"recordId",value:"",placeHolder:"请输入"},{type:"select",label:"订单状态",prop:"tradeStatus",value:"",list:[{label:"未付款",value:1},{label:"已付款(等待放行)",value:2},{label:"已完成",value:3},{label:"用户取消",value:4},{label:"申诉中",value:5},{label:"申诉后完成交易",value:6},{label:"申诉后取消交易",value:7},{label:"支付超时取消",value:8}]},{type:"select",label:"广告类型",prop:"advertType",value:"",list:[{label:"在线出售",value:1},{label:"在线求购",value:2}]},{type:"select_search",label:"币种",prop:"coinName",value:"",list:[]}],c=[{label:"广告类型",prop:"advertType",type:"filter",show_type:"text",width:60,filters:[{val:"1",text:"在线出售"},{val:"2",text:"在线求购"}]},{label:"平台订单号",prop:"recordId",width:"80"},{label:"商户订单号",prop:"apiOrderNo",width:"80"},{label:"广告商UID",prop:"advertUid",width:"95"},{label:"商户UID",prop:"uid",width:"80"},{label:"币种",prop:"coinName",width:"80"},{label:"交易价格(CNY）",prop:"price",width:"80"},{label:"交易数量",prop:"amount",width:"90"},{label:"总金额",prop:"money",width:"70"},{label:"手续费",prop:"fee",width:"70"},{label:"订单状态",prop:"tradeStatus",type:"filter",show_type:"text",width:"80",filters:[{text:"未付款",val:1},{text:"已付款(等待放行)",val:2},{text:"已完成",val:3},{text:"用户取消",val:4},{text:"申诉中",val:5},{text:"申诉后完成交易",val:6},{text:"申诉后取消交易",val:7},{text:"支付超时取消",val:8}]},{label:"收款人名称",prop:"bankUserName",width:"80"},{label:"卡号",prop:"bankCardId",width:"100"},{label:"银行名称",prop:"bankName",width:"90"},{label:"支行名称",prop:"bankBranch",width:"90"},{label:"交易类型",prop:"tradeType",type:"filter",show_type:"text",width:120,filters:[{val:"0",text:"普通法币交易"},{val:"1",text:"Tp订单交易"}]},{label:"广告单号",prop:"advertId",width:"180"},{label:"支付类型",prop:"payType",type:"filter",show_type:"text",width:100,filters:[{val:"1",text:"银行卡"},{val:"2",text:"支付宝"},{val:"3",text:"微信"}]},{label:"支付凭证",prop:"paymentUrl",type:"imgArr"},{label:"下单时间",prop:"localCreateTime",type:"time",width:"100"},{label:"支付时间",prop:"localPayTime",type:"time",width:"100"},{label:"放行时间",prop:"localLetGoTime",type:"time",width:"100"},{label:"是否激活",prop:"isActivation",type:"filter",show_type:"text",width:100,filters:[{val:"0",text:"未激活"},{val:"1",text:"激活"}]},{label:"操作",prop:"action",type:"action",width:240,btnGroup:[{label:"激活",fn:"activation",type:"primary",alias:"activation"},{label:"对话记录",fn:"dialog",type:"primary",alias:"dialog",noIsClick:!0},{label:"回调",fn:"callBack",type:"primary",alias:"callBack",noIsClick:!0}]}],h=[{label:"广告类型",prop:"advertType",type:"filter",show_type:"text",width:60,filters:[{val:"1",text:"在线出售"},{val:"2",text:"在线求购"}]},{label:"平台订单号",prop:"recordId",width:"80"},{label:"商户订单号",prop:"apiOrderNo",width:"80"},{label:"广告商UID",prop:"advertUid",width:"95"},{label:"商户UID",prop:"uid",width:"80"},{label:"币种",prop:"coinName",width:"80"},{label:"交易价格(CNY）",prop:"price",width:"80"},{label:"交易数量",prop:"amount",width:"90"},{label:"总金额",prop:"money",width:"70"},{label:"手续费",prop:"fee",width:"70"},{label:"订单状态",prop:"tradeStatus",type:"filter",show_type:"text",width:"80",filters:[{text:"未付款",val:1},{text:"已付款(等待放行)",val:2},{text:"已完成",val:3},{text:"用户取消",val:4},{text:"申诉中",val:5},{text:"申诉后完成交易",val:6},{text:"申诉后取消交易",val:7},{text:"支付超时取消",val:8}]},{label:"收款人名称",prop:"bankUserName",width:"80"},{label:"卡号",prop:"bankCardId",width:"100"},{label:"银行名称",prop:"bankName",width:"90"},{label:"支行名称",prop:"bankBranch",width:"90"},{label:"交易类型",prop:"tradeType",type:"filter",show_type:"text",width:120,filters:[{val:"0",text:"普通法币交易"},{val:"1",text:"Tp订单交易"}]},{label:"广告单号",prop:"advertId",width:"180"},{label:"支付类型",prop:"payType",type:"filter",show_type:"text",width:100,filters:[{val:"1",text:"银行卡"},{val:"2",text:"支付宝"},{val:"3",text:"微信"}]},{label:"支付凭证",prop:"paymentUrl",type:"imgArr"},{label:"下单时间",prop:"localCreateTime",type:"time",width:"100"},{label:"支付时间",prop:"localPayTime",type:"time",width:"100"},{label:"放行时间",prop:"localLetGoTime",type:"time",width:"100"},{label:"是否激活",prop:"isActivation",type:"filter",show_type:"text",width:100,filters:[{val:"0",text:"未激活"},{val:"1",text:"激活"}]}],x=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"广告商UID",prop:"advertUid",value:"",placeHolder:"请输入",subType:"uid"},{type:"text",label:"商户UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"收款类型",prop:"payType",value:"",list:[{label:"银行卡",value:1},{label:"支付宝",value:2},{label:"微信",value:3}]},{type:"text",label:"平台订单号",prop:"recordId",value:"",placeHolder:"请输入"},{type:"text",label:"商户订单号",prop:"apiOrderNo",value:"",placeHolder:"请输入"},{type:"select",label:"订单状态",prop:"tradeStatus",value:"",list:[{label:"未付款",value:1},{label:"已付款(等待放行)",value:2},{label:"已完成",value:3},{label:"用户取消",value:4},{label:"申诉中",value:5},{label:"申诉后完成交易",value:6},{label:"申诉后取消交易",value:7},{label:"支付超时取消",value:8}]},{type:"select",label:"广告类型",prop:"advertType",value:"",list:[{label:"在线出售",value:1},{label:"在线求购",value:2}]},{type:"select_search",label:"币种",prop:"coinName",value:"",list:[]},{type:"text",label:"收款人姓名",prop:"bankUserName",value:"",placeHolder:"请输入"},{type:"text",label:"银行卡号",prop:"bankCardId",value:"",placeHolder:"请输入"}],m=[{label:"币种名称",prop:"coinName"},{label:"广告费率",prop:"fee"},{label:"单笔交易最小限额",prop:"singleMinAmount",width:"160"},{label:"单笔交易最大限额",prop:"singleMaxAmount",width:"160"},{label:"订单付款时间",prop:"payTimeout"},{label:"放行时间",prop:"releaseTime"},{label:"订单日取消上限",prop:"dailyCancellationQuantity",width:"140"},{label:"排序",prop:"position"},{label:"小数位",prop:"decimalPlaces"},{label:"保证金数量",prop:"depositAmount"},{label:"保证金退还天数",prop:"depositDay",width:"140"},{label:"是否开启TP交易",prop:"isTp",type:"switch",fn:"trdraw",alias:"trdraw",width:"150"},{label:"是否开启法币交易",prop:"isOtc",type:"switch",fn:"trstart",alias:"trstart",width:"150"},{label:"是否启用保证金",prop:"isOtcDeposit",type:"switch",fn:"trputon",alias:"trputon",width:"150"},{label:"操作",prop:"action",type:"action",width:130,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],w=[{label:"币种名称",prop:"coinName"},{label:"广告费率",prop:"fee"},{label:"单笔交易最小限额",prop:"singleMinAmount",width:"160"},{label:"单笔交易最大限额",prop:"singleMaxAmount",width:"160"},{label:"订单付款时间",prop:"payTimeout"},{label:"排序",prop:"position"},{label:"小数位",prop:"decimalPlaces"},{label:"放行时间",prop:"releaseTime"},{label:"订单日取消上限",prop:"dailyCancellationQuantity",width:"140"},{label:"保证金数量",prop:"depositAmount"},{label:"保证金退还天数",prop:"depositDay",width:"140"}],f=[{label:"收款方式",prop:"payType",type:"filter",show_type:"text",filters:[{text:"银行卡",val:1},{text:"支付宝",val:2},{text:"微信",val:3}]},{label:"上限数量",prop:"limitNum"},{label:"状态",prop:"status",type:"switch",fn:"trputon",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],T=[{label:"收款方式",prop:"payType",type:"filter",show_type:"text",filters:[{text:"银行卡",val:1},{text:"支付宝",val:2},{text:"微信",val:3}]},{label:"上限数量",prop:"limitNum"}],A=[{label:"UID",prop:"uid",width:"110"},{label:"订单时间",prop:"createTime",type:"time"},{label:"订单号",prop:"recordId"},{label:"订单类型",prop:"advertType",type:"filter",show_type:"text",filters:[{text:"在线出售",val:1},{text:"在线求购",val:2},{text:"抢单在线出售",val:3},{text:"抢单在线购买",val:4},{text:"匹配在线出售",val:5},{text:"匹配在线购买",val:6}]},{label:"订单数量（USDT）",prop:"originAmount"},{label:"收益比例",prop:"rate"},{label:"收益数量（USDT）",prop:"amount"}],U=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"订单号",prop:"orderId",value:"",placeHolder:"请输入"},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"订单类型",prop:"advertType",value:"",list:[{label:"在线出售",value:1},{label:"在线求购",value:2}]}],I=[{type:"text",label:"广告商UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"代理关系",prop:"direction",value:"",list:[{label:"查上级",value:1},{label:"查下级",value:2}]}],g=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"商户总账",val:20}]},{label:"用户名称",prop:"merchantName"},{label:"法币交易状态",prop:"userOtcStatus",type:"filter",show_type:"text",filters:[{text:"失效",val:0},{text:"有效",val:1}]},{label:"USDT资产",prop:"amount"},{label:"可用USDT资产",prop:"realAmount"},{label:"冻结USDT资产",prop:"frozenAmount"},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"锁定",fn:"lock",isPop:!1,filter_key:"userOtcStatus",filter_status:1,type:"danger",alias:"lock"},{label:"激活",fn:"activation",isPop:!1,filter_key:"userOtcStatus",filter_status:0,type:"success",alias:"activation"},{label:"流水查询",fn:"detail",isPop:!1,type:"primary",alias:"detail"}]}],N=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"商户总账",val:20}]},{label:"用户名称",prop:"merchantName"},{label:"法币交易状态",prop:"userOtcStatus",type:"filter",show_type:"text",filters:[{text:"失效",val:0},{text:"有效",val:1}]},{label:"USDT资产",prop:"amount"},{label:"可用USDT资产",prop:"realAmount"},{label:"冻结USDT资产",prop:"frozenAmount"}],_=[{label:"时间",prop:"createTime",width:190},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"类型",prop:"optType",type:"filter",width:150,show_type:"text",filters:[{text:"充币",val:"0"},{text:"提币待审核",val:"1"},{text:"提币成功",val:"2"},{text:"提币失败",val:"3"},{text:"买下单",val:"4"},{text:"卖下单",val:"5"},{text:"买成交",val:"6"},{text:"卖成交",val:"7"},{text:"买撤单",val:"8"},{text:"卖撤单",val:"9"},{text:"钱包划转至OTC",val:"10"},{text:"OTC划转至钱包",val:"11"},{text:"钱包划转至币汇",val:"12"},{text:"币汇划转至钱包",val:"13"},{text:"特殊调账",val:"14"},{text:"标仓周奖励",val:"15"},{text:"标仓季度奖励",val:"16"},{text:"机械人加钱",val:"17"},{text:"注册活动加币",val:"18"},{text:"锁仓自动释放可用金额",val:"19"},{text:"锁仓手动释放可用金额",val:"20"},{text:"锁仓冻结金额",val:"21"},{text:"锁仓自动释放冻结金额",val:"22"},{text:"锁仓手动释放冻结金额",val:"23"},{text:"锁仓账户支出",val:"24"},{text:"锁仓账户退还",val:"25"},{text:"抽奖活动获得",val:"26"},{text:"注册商家冻结资金",val:"27"},{text:"取消商家解冻资金",val:"28"},{text:"申请商家失败，解冻保证金",val:"29"},{text:"创建法币订单",val:"30"},{text:"取消法币订单",val:"31"},{text:"法币卖出",val:"32"},{text:"申诉买方赢，法币卖出",val:"33"},{text:"申诉卖方赢，取消法币订单",val:"34"},{text:"激活法币订单",val:"35"},{text:"法币买入",val:"36"},{text:"申诉买方赢，法币买入",val:"37"},{text:"创建广告",val:"38"},{text:"广告下架",val:"39"},{text:"返佣",val:"40"},{text:"升级信用额度,冻结资产",val:"41"},{text:"解冻信用额度，解冻资产",val:"42"},{text:"活动支出",val:"100"},{text:"划转手续费",val:"80"},{text:"币币交易手续费",val:"81"},{text:"法币交易手续费",val:"82"},{text:"提币手续费",val:"83"},{text:"资产账户划转",val:"84"},{text:"收益账户销账",val:"85"},{text:"收入账号手动充值",val:"86"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"资金类型",prop:"amountType",type:"filter",show_type:"text",filters:[{text:"可用余额",val:1},{text:"冻结金额",val:2}]},{label:"订单号",prop:"relateRecdId"}],D=[{type:"date_rank",label:"创建时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"资金类型",prop:"amountType",value:"",list:[{label:"可用余额",value:1},{label:"冻结金额",value:2}]},{type:"text",label:"订单号",prop:"relateRecdId",value:"",placeHolder:"请输入"},{type:"select_search",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"类型",prop:"optType",value:"",list:[{label:"充币",value:"0"},{label:"提币待审核",value:"1"},{label:"提币成功",value:"2"},{label:"提币失败",value:"3"},{label:"买下单",value:"4"},{label:"卖下单",value:"5"},{label:"买成交",value:"6"},{label:"卖成交",value:"7"},{label:"买撤单",value:"8"},{label:"卖撤单",value:"9"},{label:"钱包划转至OTC",value:"10"},{label:"OTC划转至钱包",value:"11"},{label:"钱包划转至币汇",value:"12"},{label:"币汇划转至钱包",value:"13"},{label:"特殊调账",value:"14"},{label:"标仓周奖励",value:"15"},{label:"标仓季度奖励",value:"16"},{label:"机械人加钱",value:"17"},{label:"注册活动加币",value:"18"},{label:"锁仓自动释放可用金额",value:"19"},{label:"锁仓手动释放可用金额",value:"20"},{label:"锁仓冻结金额",value:"21"},{label:"锁仓自动释放冻结金额",value:"22"},{label:"锁仓手动释放冻结金额",value:"23"},{label:"锁仓账户支出",value:"24"},{label:"锁仓账户退还",value:"25"},{label:"抽奖活动获得",value:"26"},{label:"注册商家冻结资金",value:"27"},{label:"取消商家解冻资金",value:"28"},{label:"申请商家失败，解冻保证金",value:"29"},{label:"创建法币订单",value:"30"},{label:"取消法币订单",value:"31"},{label:"法币卖出",value:"32"},{label:"申诉买方赢，法币卖出",value:"33"},{label:"申诉卖方赢，取消法币订单",value:"34"},{label:"激活法币订单",value:"35"},{label:"法币买入",value:"36"},{label:"申诉买方赢，法币买入",value:"37"},{label:"创建广告",value:"38"},{label:"广告下架",value:"39"},{label:"返佣",value:"40"},{label:"升级信用额度,冻结资产",value:"41"},{label:"解冻信用额度，解冻资产",value:"42"},{label:"活动支出",value:"100"},{label:"划转手续费",value:"80"},{label:"币币交易手续费",value:"81"},{label:"法币交易手续费",value:"82"},{label:"提币手续费",value:"83"},{label:"资产账户划转",value:"84"},{label:"收益账户销账",value:"85"},{label:"收入账号手动充值",value:"86"}]}],k=[{label:"用户名称",prop:"merchantName"},{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"普通用户",val:0},{text:"广告商",val:1}]},{label:"支付方式限制次数",prop:"payCount"},{label:"匹配权重值",prop:"weight"},{label:"会员等级",prop:"gradeg"},{label:"信用额度",prop:"creditLimit"},{label:"授权额度",prop:"authorizationLimit"},{label:"每日总额度",prop:"total"},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"解冻信用额度",fn:"freeze",isPop:!1,filter_key:"isCanFreeze",filter_status:1,type:"success",alias:"freeze"}]}],S=[{label:"用户名称",prop:"merchantName"},{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"普通用户",val:0},{text:"广告商",val:1}]},{label:"支付方式限制次数",prop:"payCount"},{label:"匹配权重值",prop:"weight"},{label:"会员等级",prop:"gradeg"},{label:"信用额度",prop:"creditLimit"},{label:"授权额度",prop:"authorizationLimit"},{label:"每日总额度",prop:"total"}],C=[{type:"text",label:"用户名称",prop:"merchantName",value:"",placeHolder:"请输入"},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入"}],M=[{label:"货币",prop:"coinName"},{label:"购买汇率",prop:"currentBuyFee"},{label:"出售汇率",prop:"currentSellFee"},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"购买汇差",fn:"buy",type:"primary",alias:"buy"},{label:"出售汇差",fn:"sell",type:"primary",alias:"sell"}]}],O=[{label:"货币",prop:"coinName"},{label:"购买汇率",prop:"currentBuyFee"},{label:"出售汇率",prop:"currentSellFee"}],H=[{label:"等级ID",prop:"memberLevel"},{label:"等级名称",prop:"levelName"},{label:"币种",prop:"coinName"},{label:"额度要求",prop:"amount",width:220},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],G=[{label:"等级ID",prop:"memberLevel"},{label:"等级名称",prop:"levelName"},{label:"币种",prop:"coinName"},{label:"额度要求",prop:"amount",width:220}],E=[{label:"商户名称",prop:"userName"},{label:"商户编号",prop:"uid"},{label:"userId",prop:"userId",type:"myIsShow"},{label:"充值渠道授权",prop:"despositChannel",width:200},{label:"充值承兑商授权",prop:"despositAdvertiser",width:200},{label:"提现渠道授权",prop:"withdrawChannel"},{label:"提现承兑商授权",prop:"withdrawAdvertiser",width:200},{label:"充值单笔限额",arr:["chargeMinimum","chargeMaximum"],type:"textArr",join:"~"},{label:"提现单笔限额",arr:["withdrawalMinimum","withdrawalMaximum"],type:"textArr",join:"~"},{label:"操作",prop:"action",type:"action",width:"200",btnGroup:[{label:"配置",fn:"configuration",type:"primary",alias:"configuration"}]}],P=[{label:"商户名称",prop:"userName"},{label:"商户编号",prop:"uid"},{label:"userId",prop:"userId",type:"myIsShow"},{label:"充值渠道授权",prop:"despositChannel",width:200},{label:"充值承兑商授权",prop:"despositAdvertiser",width:200},{label:"提现渠道授权",prop:"withdrawChannel"},{label:"提现承兑商授权",prop:"withdrawAdvertiser",width:200},{label:"充值单笔限额",arr:["chargeMinimum","chargeMaximum"],type:"textArr",join:"~"},{label:"提现单笔限额",arr:["withdrawalMinimum","withdrawalMaximum"],type:"textArr",join:"~"}],B=[{label:"商户名称",prop:"userName",placeHolder:"请输入商户名称"},{label:"商户编号",prop:"userId",placeHolder:"请输入商户编号"}],R=[{label:"序号",type:"index",width:"120"},{label:"注册时间",prop:"createTime",width:150},{label:"上级代理商编号",prop:"upperUid"},{label:"代理商编号",prop:"uid"},{label:"手机号",prop:"phone"},{label:"邮箱号",prop:"email"},{label:"出售返佣费率",prop:"rewardInRate"},{label:"邀请码",prop:"inviteCode"},{label:"操作",prop:"action",type:"action",width:"250",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],z=[{label:"注册时间",prop:"createTime",width:150},{label:"上级代理商编号",prop:"upperUid"},{label:"代理商编号",prop:"uid"},{label:"手机号",prop:"phone"},{label:"邮箱号",prop:"email"},{label:"转入返佣费率",prop:"rewardInRate"},{label:"下级承兑商数",prop:"subsetMerchantCount"},{label:"邀请码",prop:"inviteCode"}],L=[{label:"邮箱号",prop:"email"},{type:"onlyNumber",label:"代理商编号",prop:"uid"},{type:"onlyNumber",label:"上级代理商编号",prop:"upperUid"},{type:"select",label:"代理商状态",prop:"isTrade",value:"",list:[{label:"已锁定",value:1},{label:"正常",value:0}]}],j=[{type:"onlyNumber",label:"代理商UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"代理关系",prop:"direction",value:"",list:[{label:"查上级",value:1},{label:"查下级",value:2}]}],F=[{label:"序号",type:"index",width:"120"},{label:"承兑商昵称",prop:"merchantName",width:150},{label:"承兑商UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"普通用户",val:0},{text:"广告商",val:1}]},{label:"每日收款方式限制次数",prop:"payCount",width:200},{label:"匹配权重值",prop:"weight"},{label:"授信额度",prop:"authorizationLimit"},{label:"每日总额度",prop:"total"},{label:"操作",prop:"action",type:"action",width:"150",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],Y=[{label:"用户名字",prop:"createTime",width:150},{label:"用户UID",prop:"upperUid"},{label:"用户类型",prop:"uid"},{label:"每日收款方式限制次数",prop:"payment",width:200},{label:"匹配权重值",prop:"email"},{label:"会员等级",prop:"rewardInRate"},{label:"信用额度",prop:"inviteCode"},{label:"授信额度",prop:"lineCredit"},{label:"每日总额度",prop:"dayAllowance"}],Q=[{label:"承兑商昵称",prop:"merchantName",value:"",placeHolder:"承兑商昵称"},{label:"承兑商UID",type:"onlyNumber",prop:"uid",value:"",placeHolder:""}],J=[{label:"创建时间",prop:"createTime",width:150},{label:"渠道名称",prop:"channelName",width:150},{label:"渠道编号",prop:"id"},{label:"承兑商UID",prop:"advertiserUid",width:200},{label:"承兑商数量",prop:"advertiserCount",width:200},{label:"购买市价上架广告数量",prop:"buyMarketPriceCount",width:200},{label:"出售市价上架广告数量",prop:"sellMarketPriceCount",width:200},{label:"购买市价广告挂单额度",prop:"buyMarketPriceAmount",width:200},{label:"出售市价广告挂单额度",prop:"sellMarketPriceAmount",width:200},{label:"今日购买市价交易额度",prop:"todayBuyTradeAmount",width:200},{label:"今日出售市价交易额度",prop:"todaySellTradeAmount",width:200}],K=[{label:"渠道名称",prop:"channelName",value:"",placeHolder:""}],X=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"商户总账",val:20}]},{label:"用户名称",prop:"merchantName"},{label:"法币交易状态",prop:"userOtcStatus",type:"filter",show_type:"text",filters:[{text:"禁止",val:0},{text:"正常",val:1}]},{label:"USDT资产",prop:"amount"},{label:"可用USDT资产",prop:"realAmount"},{label:"冻结USDT资产",prop:"frozenAmount"},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"锁定",fn:"lock",isPop:!1,filter_key:"userOtcStatus",filter_status:1,type:"danger",alias:"lock"},{label:"激活",fn:"activation",isPop:!1,filter_key:"userOtcStatus",filter_status:0,type:"success",alias:"activation"},{label:"流水查询",fn:"detail",isPop:!1,type:"primary",alias:"detail"}]}],Z=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"商户总账",val:20}]},{label:"用户名称",prop:"merchantName"},{label:"法币交易状态",prop:"userOtcStatus",type:"filter",show_type:"text",filters:[{text:"禁止",val:0},{text:"正常",val:1}]},{label:"USDT资产",prop:"amount"},{label:"可用USDT资产",prop:"realAmount"},{label:"冻结USDT资产",prop:"frozenAmount"}]},ff53:function(e,l,t){"use strict";var a=t("75fc");t("9278"),t("87f3"),t("a481"),t("6b54"),t("28a5"),t("c5f6");function p(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(l))}function r(e){var l=e.toString().split(/[eE]/),t=(l[0].split(".")[1]||"").length-+(l[1]||0);return t>0?t:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var l=r(e);return l>0?p(Number(e)*Math.pow(10,l)):Number(e)}function i(e){s&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function b(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),n=2;n<t;n++)p[n-2]=arguments[n];if(p.length>0)return b.apply(void 0,[b(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var d=o(e),u=o(l),v=r(e)+r(l),s=d*u;return i(s),s/Math.pow(10,v)}function n(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),o=2;o<t;o++)p[o-2]=arguments[o];if(p.length>0)return n.apply(void 0,[n(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var i=Math.pow(10,Math.max(r(e),r(l)));return(b(e,i)+b(l,i))/i}function d(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),o=2;o<t;o++)p[o-2]=arguments[o];if(p.length>0)return d.apply(void 0,[d(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var i=Math.pow(10,Math.max(r(e),r(l)));return(b(e,i)-b(l,i))/i}function u(e,l){for(var t=arguments.length,n=new Array(t>2?t-2:0),d=2;d<t;d++)n[d-2]=arguments[d];if(n.length>0)return u.apply(void 0,[u(e,l),n[0]].concat(Object(a["a"])(n.slice(1))));var v=o(e),s=o(l);return i(v),i(s),b(v/s,p(Math.pow(10,r(l)-r(e))))}function v(e,l){var t=Math.pow(10,l);return u(Math.round(b(e,t)),t)}var s=!0;function y(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];s=e}l["a"]={strip:p,plus:n,minus:d,times:b,divide:u,round:v,digitLength:r,float2Fixed:o,enableBoundaryChecking:y}}}]);