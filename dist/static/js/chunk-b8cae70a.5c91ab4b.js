(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8cae70a"],{c270:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,l,t){"use strict";t.d(l,"a",(function(){return p}));t("28a5"),t("f576"),t("a481"),t("6b54");var a=t("7618");function p(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var t,p=l||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?t=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),t=new Date(e));var r={y:t.getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()},o=p.replace(/{([ymdhisa])+}/g,(function(e,l){var t=r[l];return"a"===l?["日","一","二","三","四","五","六"][t]:t.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},f9e1:function(e,l,t){"use strict";t.d(l,"r",(function(){return E})),t.d(l,"p",(function(){return M})),t.d(l,"q",(function(){return O})),t.d(l,"v",(function(){return a})),t.d(l,"w",(function(){return p})),t.d(l,"x",(function(){return r})),t.d(l,"j",(function(){return o})),t.d(l,"k",(function(){return i})),t.d(l,"l",(function(){return u})),t.d(l,"B",(function(){return n})),t.d(l,"C",(function(){return d})),t.d(l,"y",(function(){return c})),t.d(l,"z",(function(){return y})),t.d(l,"A",(function(){return x})),t.d(l,"e",(function(){return f})),t.d(l,"f",(function(){return m})),t.d(l,"g",(function(){return h})),t.d(l,"b",(function(){return w})),t.d(l,"a",(function(){return T})),t.d(l,"c",(function(){return A})),t.d(l,"d",(function(){return I})),t.d(l,"m",(function(){return b})),t.d(l,"n",(function(){return v})),t.d(l,"o",(function(){return s})),t.d(l,"s",(function(){return _})),t.d(l,"t",(function(){return g})),t.d(l,"u",(function(){return N})),t.d(l,"D",(function(){return U})),t.d(l,"E",(function(){return k})),t.d(l,"F",(function(){return D})),t.d(l,"h",(function(){return S})),t.d(l,"i",(function(){return R}));t("4360");var a=[{label:"订单号",prop:"id"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"链名称",prop:"chainName"},{label:"到账数量",prop:"amount"},{label:"FROM地址",prop:"fromAddress"},{label:"TO地址",prop:"toAddress"},{label:"充币TXID",prop:"txId"},{label:"状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"成功",val:1},{text:"失败",val:2},{text:"充币待确认",val:6}]},{label:"充币时间",prop:"createTime"},{label:"归集状态",prop:"collectStatus",type:"filter",show_type:"text",filters:[{text:"未归集",val:0},{text:"已归集",val:1},{text:"归集失败",val:2}]},{label:"归集TXID",prop:"collectTxId"},{label:"归集时间",prop:"confirmTime"},{label:"操作",prop:"action",type:"action",width:"300",btnGroup:[{label:"链上归集已失败，重新调用钱包去归集",fn:"message",filter_type:"array",filter_key:"collectStatus",filter_status:["1"],type:"success",alias:"message"}]}],p=[{label:"订单号",prop:"id"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"链名称",prop:"chainName"},{label:"到账数量",prop:"amount"},{label:"FROM地址",prop:"fromAddress"},{label:"TO地址",prop:"toAddress"},{label:"充币TXID",prop:"txId"},{label:"状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"成功",val:1},{text:"失败",val:2},{text:"充币待确认",val:6}]},{label:"充币时间",prop:"createTime"},{label:"归集状态",prop:"collectStatus",type:"filter",show_type:"text",filters:[{text:"未归集",val:0},{text:"已归集",val:1},{text:"归集失败",val:2}]},{label:"归集TXID",prop:"collectTxId"},{label:"归集时间",prop:"confirmTime"}],r=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"订单号",prop:"id",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"充币状态",prop:"tradeStatus",value:"",list:[{label:"待审核",value:0},{label:"成功",value:1},{label:"失败",value:2},{label:"充币待确认",value:6}]},{type:"text",label:"充币txid",prop:"txId",value:""},{type:"select",label:"归集状态",prop:"collectStatus",value:"",list:[{label:"未归集",value:0},{label:"已归集",value:1},{label:"归集失败",value:2}]},{type:"text",label:"归集txid",prop:"collectTxId",value:""},{type:"text",label:"FROM地址",prop:"fromAddress",value:""},{type:"text",label:"TO地址",prop:"toAddress",value:""},{type:"select",label:"链名称",prop:"chainName",value:"",list:[]}],o=[{label:"订单号",prop:"id",width:200},{label:"from UID",prop:"uid",width:100},{label:"币种",prop:"coinName"},{label:"提币数量",prop:"amount",width:200},{label:"手续费",prop:"fee"},{label:"到账数量",prop:"realAmount",width:200},{label:"from 地址",prop:"fromAddress",width:140},{label:"to 地址",prop:"toAddress",width:140},{label:"to UID",prop:"toUid",width:140},{label:"链类型",prop:"chainName"},{label:"状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"成功",val:1},{text:"失败",val:2},{text:"初步审核成功",val:3},{text:"初步审核失败",val:4}]},{label:"提币时间",prop:"createTime",width:200},{label:"初审时间",prop:"firstAuditTime",width:200},{label:"初审人",prop:"firstAuditUserName"},{label:"复审时间",prop:"reviewAuditTime",width:200},{label:"复审人",prop:"reviewAuditUserName"},{label:"操作",prop:"action",type:"action",width:270,btnGroup:[{label:"初审",fn:"preReview",isPop:!1,filter_key:"tradeStatus",filter_status:0,type:"success",alias:"preReview"},{label:"复审",fn:"nextReview",isPop:!1,filter_key:"tradeStatus",filter_status:3,type:"success",alias:"nextReview"},{label:"初审驳回",fn:"preReject",isPop:!1,filter_key:"tradeStatus",filter_status:0,type:"danger",alias:"preReject"},{label:"复审驳回",fn:"nextReject",isPop:!1,filter_key:"tradeStatus",filter_status:3,type:"danger",alias:"nextReject"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],i=[{label:"订单号",prop:"id",width:200},{label:"from UID",prop:"uid",width:100},{label:"币种",prop:"coinName"},{label:"提币数量",prop:"amount",width:200},{label:"手续费",prop:"fee"},{label:"到账数量",prop:"realAmount",width:200},{label:"from 地址",prop:"fromAddress",width:140},{label:"to 地址",prop:"toAddress",width:140},{label:"to UID",prop:"toUid",width:140},{label:"链类型",prop:"chainName"},{label:"状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"成功",val:1},{text:"失败",val:2},{text:"初步审核成功",val:3},{text:"初步审核失败",val:4}]},{label:"提币时间",prop:"createTime",width:200},{label:"初审时间",prop:"firstAuditTime",width:200},{label:"初审人",prop:"firstAuditUserName"},{label:"复审时间",prop:"reviewAuditTime",width:200},{label:"复审人",prop:"reviewAuditUserName"}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"from UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"onlyNumber",label:"to UID",prop:"toUid",value:"",placeHolder:"请输入"},{type:"text",label:"from 地址",prop:"fromAddress",value:"",placeHolder:"请输入"},{type:"text",label:"to 地址",prop:"toAddress",value:"",placeHolder:"请输入"},{type:"select",label:"状态",prop:"tradeStatus",value:"",list:[{label:"待审核",value:0},{label:"成功",value:1},{label:"失败",value:2},{label:"初步审核成功",value:3},{label:"初步审核失败",value:4}]},{type:"select",label:"链类型",prop:"chainName",value:"",list:[]}],b=[{label:"订单号",prop:"id",width:200},{label:"UID",prop:"uid",width:100},{label:"币种",prop:"coinName"},{label:"链名称",prop:"chainName"},{label:"提币数量",prop:"amount",width:200},{label:"手续费",prop:"fee"},{label:"到账数量",prop:"realAmount",width:200},{label:"提币地址",prop:"toAddress",width:140},{label:"TXID",prop:"txId",width:200},{label:"状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"成功",val:1},{text:"失败",val:2},{text:"初步审核成功",val:3},{text:"初步审核失败",val:4}]},{label:"提币时间",prop:"createTime",width:200},{label:"初审时间",prop:"firstAuditTime",width:200},{label:"初审人",prop:"firstAuditUserName"},{label:"复审时间",prop:"reviewAuditTime",width:200},{label:"复审人",prop:"reviewAuditUserName"},{label:"操作",prop:"action",type:"action",width:420,btnGroup:[{label:"初审",fn:"preReview",isPop:!1,filter_key:"tradeStatus",filter_status:0,type:"success",alias:"preReview"},{label:"复审",fn:"nextReview",isPop:!1,filter_key:"tradeStatus",filter_status:3,type:"success",alias:"nextReview"},{label:"初审驳回",fn:"preReject",isPop:!1,filter_key:"tradeStatus",filter_status:0,type:"danger",alias:"preReject"},{label:"复审驳回",fn:"nextReject",isPop:!1,filter_key:"tradeStatus",filter_status:3,type:"danger",alias:"nextReject"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"查看该用户出入金明细",fn:"inOutGoldList",type:"primary",alias:"inOutGoldList"}]}],v=[{label:"订单号",prop:"id",width:200},{label:"UID",prop:"uid",width:100},{label:"币种",prop:"coinName"},{label:"链名称",prop:"chainName"},{label:"提币数量",prop:"amount",width:200},{label:"手续费",prop:"fee"},{label:"到账数量",prop:"realAmount",width:200},{label:"提币地址",prop:"toAddress",width:140},{label:"TXID",prop:"txId",width:200},{label:"状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"成功",val:1},{text:"失败",val:2},{text:"初步审核成功",val:3},{text:"初步审核失败",val:4}]},{label:"提币时间",prop:"createTime",width:200},{label:"初审时间",prop:"firstAuditTime",width:200},{label:"初审人",prop:"firstAuditUserName"},{label:"复审时间",prop:"reviewAuditTime",width:200},{label:"复审人",prop:"reviewAuditUserName"}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"text",label:"提币地址",prop:"toAddress",value:"",placeHolder:"请输入提币地址"},{type:"select",label:"状态",prop:"tradeStatus",value:"",list:[{label:"待审核",value:0},{label:"成功",value:1},{label:"失败",value:2},{label:"初步审核成功",value:3},{label:"初步审核失败",value:4}]},{type:"select",label:"链名称",prop:"chainName",value:"",list:[]}],n=[{label:"订单号",prop:"orderNo"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"划转数量",prop:"amount",type:"removeMinus"},{label:"手续费",prop:"fee"},{label:"到账数量",prop:"dealAmount",type:"removeMinus"},{label:"FROM账户",prop:"fromType",type:"filter",show_type:"text",filters:[{text:"币币",val:1},{text:"法币",val:2},{text:"理财",val:3},{text:"币汇",val:4},{text:"合约",val:5}]},{label:"TO账户",prop:"toType",type:"filter",show_type:"text",filters:[{text:"币币",val:1},{text:"法币",val:2},{text:"理财",val:3},{text:"币汇",val:4},{text:"合约",val:5}]},{label:"状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"待审核",val:0,type:"info"},{text:"成功",val:1,type:"success"},{text:"失败",val:2,type:"warning"},{text:"初步审核成功",val:3,type:"success"},{text:"初步审核失败",val:4,type:"warning"},{text:"划转待确认",val:5,type:"warning"}]},{label:"时间",prop:"createTime",type:"time"}],d=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"订单号",prop:"orderNo",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"FROM账号",prop:"fromType",value:"",list:[{label:"币币",value:"1"},{label:"法币",value:"2"},{label:"理财",value:"3"},{label:"币汇",value:"4"},{label:"合约",value:"5"}]},{type:"select",label:"TO账号",prop:"toType",value:"",list:[{label:"币币",value:"1"},{label:"法币",value:"2"},{label:"理财",value:"3"},{label:"币汇",value:"4"},{label:"合约",value:"5"}]}],c=[{label:"订单号",prop:"orderNo"},{label:"UID",prop:"uid"},{label:"账户类型",prop:"accountType",width:100,type:"filter",show_type:"text",filters:[{text:"币币",val:1},{text:"法币",val:2},{text:"理财",val:3},{text:"币汇",val:4},{text:"合约",val:5}]},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"状态",prop:"status",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"成功",val:1},{text:"驳回",val:2}]},{label:"申请时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核人",prop:"auditName"},{label:"审核人IP",prop:"auditIp"},{label:"操作",prop:"action",type:"action",width:"240",btnGroup:[{label:"审核通过",fn:"checkPass",filter_key:"status",filter_status:0,isPop:!1,type:"success",alias:"pass"},{label:"驳回",fn:"checkOut",filter_key:"status",filter_status:0,isPop:!1,type:"danger",alias:"refuse"},{label:"详情",fn:"viewDetail",type:"primary",alias:"detail"}]}],y=[{label:"订单号",prop:"orderNo"},{label:"UID",prop:"uid"},{label:"账户类型",prop:"accountType",width:100,type:"filter",show_type:"text",filters:[{text:"币币",val:1},{text:"法币",val:2},{text:"理财",val:3},{text:"币汇",val:4},{text:"合约",val:5}]},{label:"币种",prop:"coinName"},{label:"数量",prop:"amount"},{label:"状态",prop:"status",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"成功",val:1},{text:"驳回",val:2}]},{label:"申请时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核人",prop:"auditName"},{label:"审核人IP",prop:"auditIp"}],x=[{type:"text",label:"订单号",prop:"orderNo",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"状态",prop:"status",value:"",list:[{label:"待审核",value:0},{label:"成功",value:1},{label:"驳回",value:2}]},{type:"select",label:"资金账户类型",prop:"accountType",value:"",list:[{label:"币币",value:1},{label:"法币",value:2},{label:"理财",value:3},{label:"币汇",value:4},{label:"合约",value:5}]}],f=[{label:"币种",prop:"coinKey"},{label:"归集地址",prop:"defaultcollectionaddress"},{label:"手续费地址",prop:"handlingfeeaddress"},{label:"操作",prop:"action",type:"action",width:110,btnGroup:[{label:"归集详情",fn:"edit",alias:"edit",type:"primary"}]}],m=[{label:"币种",prop:"coinKey"},{label:"归集地址",prop:"defaultcollectionaddress"}],h=[{label:"用户UID",prop:"userId"},{label:"被归集地址",prop:"address"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"删除",fn:"del"}]}],w=[{type:"text",label:"用户UID",prop:"userId",value:"",placeHolder:"请输入"},{type:"text",label:"地址",prop:"address",value:"",placeHolder:"请输入"}],T=[{label:"用户UID",prop:"userId"},{label:"地址",prop:"address"}],A=[{label:"时间",prop:"createTime"},{label:"UID",prop:"uid"},{label:"币种",prop:"coinName"},{label:"类型",prop:"optType",width:150,type:"filter",show_type:"text",filters:[{text:"充币",val:"0"},{text:"提币待审核",val:"1"},{text:"提币成功",val:"2"},{text:"提币失败",val:"3"},{text:"买下单",val:"4"},{text:"卖下单",val:"5"},{text:"买成交",val:"6"},{text:"卖成交",val:"7"},{text:"买撤单",val:"8"},{text:"卖撤单",val:"9"},{text:"币币划至法币",val:"10"},{text:"法币划至币币",val:"11"},{text:"币币划转至币汇",val:"12"},{text:"币汇划转至币币",val:"13"},{text:"特殊调账",val:"14"},{text:"标仓周奖励",val:"15"},{text:"标仓季度奖励",val:"16"},{text:"机械人加钱",val:"17"},{text:"注册活动加币",val:"18"},{text:"锁仓自动释放可用金额",val:"19"},{text:"锁仓手动释放可用金额",val:"20"},{text:"锁仓冻结金额",val:"21"},{text:"锁仓自动释放冻结金额",val:"22"},{text:"锁仓手动释放冻结金额",val:"23"},{text:"锁仓账户支出",val:"24"},{text:"锁仓账户退还",val:"25"},{text:"抽奖活动获得",val:"26"},{text:"注册商家冻结资金",val:"27"},{text:"取消商家解冻资金",val:"28"},{text:"申请商家失败，解冻保证金",val:"29"},{text:"创建法币订单",val:"30"},{text:"取消法币订单",val:"31"},{text:"法币卖出",val:"32"},{text:"申诉买方赢，法币卖出",val:"33"},{text:"申诉卖方赢，取消法币订单",val:"34"},{text:"激活法币订单",val:"35"},{text:"法币买入",val:"36"},{text:"申诉买方赢，法币买入",val:"37"},{text:"创建广告",val:"38"},{text:"广告下架",val:"39"},{text:"返佣",val:"40"},{text:"升级信用额度,冻结资产",val:"41"},{text:"解冻信用额度，解冻资产",val:"42"},{text:"币币划转至合约",val:"50"},{text:"合约划转至币币",val:"51"},{text:"法币划转至合约",val:"52"},{text:"合约划转至法币",val:"53"},{text:"币支付待审核",val:"70"},{text:"币支付划转成功",val:"71"},{text:"币支付划转失败",val:"72"},{text:"币支付提币待审核",val:"73"},{text:"币支付提币成功",val:"74"},{text:"币支付提币失败",val:"75"},{text:"币支付充币",val:"76"},{text:"币支付商户提现待审核",val:"77"},{text:"币支付商户提现成功",val:"78"},{text:"币支付商户提现失败",val:"79"},{text:"活动支出",val:"100"},{text:"划转手续费",val:"80"},{text:"币币交易手续费",val:"81"},{text:"法币交易手续费",val:"82"},{text:"提币手续费",val:"83"},{text:"资产账户划转",val:"84"},{text:"收益账户销账",val:"85"},{text:"合约返佣",val:"88"},{text:"合约收益账户销账",val:"89"},{text:"资金费用",val:94},{text:"合约返佣结算",val:95},{text:"合约手续费",val:96},{text:"普通用户手续费返佣",val:"101"},{text:"平台手续费返佣",val:"104"},{text:"平台团队长模式的返佣",val:"105"},{text:"发送红包",val:"106"},{text:"领取红包",val:"107"},{text:"过期红包退还",val:"108"},{text:"补充保证金",val:"109"},{text:"释放保证金",val:"110"},{text:"内部充币",val:"111"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"操作资金类型",prop:"amountType",width:120,type:"filter",show_type:"text",filters:[{text:"可用余额",val:"1"},{text:"冻结金额",val:"2"}]},{label:"订单号",prop:"relateRecdId"}],I=[{type:"date_rank_s",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",subType:"uid"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"text",label:"订单号",prop:"relateRecdId",value:""},{type:"select",label:"类型",prop:"optType",value:"",list:[{label:"充币",value:"0"},{label:"提币待审核",value:"1"},{label:"提币成功",value:"2"},{label:"提币失败",value:"3"},{label:"买下单",value:"4"},{label:"卖下单",value:"5"},{label:"买成交",value:"6"},{label:"卖成交",value:"7"},{label:"买撤单",value:"8"},{label:"卖撤单",value:"9"},{label:"币币划至法币",value:"10"},{label:"法币划至币币",value:"11"},{label:"币币划转至币汇",value:"12"},{label:"币汇划转至币币",value:"13"},{label:"特殊调账",value:"14"},{label:"标仓周奖励",value:"15"},{label:"标仓季度奖励",value:"16"},{label:"机械人加钱",value:"17"},{label:"注册活动加币",value:"18"},{label:"锁仓自动释放可用金额",value:"19"},{label:"锁仓手动释放可用金额",value:"20"},{label:"锁仓冻结金额",value:"21"},{label:"锁仓自动释放冻结金额",value:"22"},{label:"锁仓手动释放冻结金额",value:"23"},{label:"锁仓账户支出",value:"24"},{label:"锁仓账户退还",value:"25"},{label:"抽奖活动获得",value:"26"},{label:"注册商家冻结资金",value:"27"},{label:"取消商家解冻资金",value:"28"},{label:"申请商家失败，解冻保证金",value:"29"},{label:"创建法币订单",value:"30"},{label:"取消法币订单",value:"31"},{label:"法币卖出",value:"32"},{label:"申诉买方赢，法币卖出",value:"33"},{label:"申诉卖方赢，取消法币订单",value:"34"},{label:"激活法币订单",value:"35"},{label:"法币买入",value:"36"},{label:"申诉买方赢，法币买入",value:"37"},{label:"创建广告",value:"38"},{label:"广告下架",value:"39"},{label:"返佣",value:"40"},{label:"升级信用额度,冻结资产",value:"41"},{label:"解冻信用额度，解冻资产",value:"42"},{label:"币币划转至合约",value:"50"},{label:"合约划转至币币",value:"51"},{label:"法币划转至合约",value:"52"},{label:"合约划转至法币",value:"53"},{label:"币支付待审核",value:"70"},{label:"币支付划转成功",value:"71"},{label:"币支付划转失败",value:"72"},{label:"币支付提币待审核",value:"73"},{label:"币支付提币成功",value:"74"},{label:"币支付提币失败",value:"75"},{label:"币支付充币",value:"76"},{label:"币支付商户提现待审核",value:"77"},{label:"币支付商户提现成功",value:"78"},{label:"币支付商户提现失败",value:"79"},{label:"活动支出",value:"100"},{label:"划转手续费",value:"80"},{label:"币币交易手续费",value:"81"},{label:"法币交易手续费",value:"82"},{label:"提币手续费",value:"83"},{label:"资产账户划转",value:"84"},{label:"收益账户销账",value:"85"},{label:"合约返佣结算",value:"95"},{label:"普通用户手续费返佣",value:"101"},{label:"平台手续费返佣",value:"104"},{label:"平台团队长模式的返佣",value:"105"},{label:"发送红包",value:"106"},{label:"领取红包",value:"107"},{label:"过期红包退还",value:"108"},{label:"补充保证金",value:"109"},{label:"释放保证金",value:"110"},{label:"内部充币",value:"111"}]}],_=[{label:"订单号",prop:"id"},{label:"UID",prop:"uid"},{label:"账号类型",prop:"accountType",width:150,type:"filter",show_type:"text",filters:[{text:"币币账户",val:"1"}]},{label:"锁仓类型",prop:"orderType",width:150,type:"filter",show_type:"text",filters:[{text:"星球算力冻结",val:"1"},{text:"原始合伙人冻结",val:"2"},{text:"私募冻结",val:"3"}]},{label:"锁仓时间类型",prop:"lockType",width:120,type:"filter",show_type:"text",filters:[{text:"日锁仓",val:"1"},{text:"月锁仓",val:"2"}]},{label:"币种",prop:"coinName"},{label:"锁仓数量",prop:"lockAmount"},{label:"已释放数量",prop:"releaseAmount"},{label:"状态",prop:"orderStatus",width:150,type:"filter",show_type:"text",filters:[{text:"释放中",val:"0"},{text:"已经释放完成",val:"1"}]},{label:"冻结时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:"240",btnGroup:[{label:"编辑",fn:"edit",filter_key:"orderStatus",filter_status:0,isPop:!1,type:"primary",alias:"edit"},{label:"解冻",fn:"freeze",filter_key:"orderStatus",filter_status:0,isPop:!1,type:"danger",alias:"freeze"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],g=[{label:"订单号",prop:"id"},{label:"UID",prop:"uid"},{label:"账号类型",prop:"accountType",width:150,type:"filter",show_type:"text",filters:[{text:"币币账户",val:"1"}]},{label:"锁仓类型",prop:"orderType",width:150,type:"filter",show_type:"text",filters:[{text:"星球算力冻结",val:"1"},{text:"原始合伙人冻结",val:"2"},{text:"私募冻结",val:"3"}]},{label:"锁仓时间类型",prop:"lockType",width:120,type:"filter",show_type:"text",filters:[{text:"日锁仓",val:"1"},{text:"月锁仓",val:"2"}]},{label:"币种",prop:"coinName"},{label:"锁仓数量",prop:"lockAmount"},{label:"已释放数量",prop:"releaseAmount"},{label:"状态",prop:"orderStatus",width:150,type:"filter",show_type:"text",filters:[{text:"释放中",val:"0"},{text:"已经释放完成",val:"1"}]},{label:"冻结时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"}],N=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"订单号",prop:"orderId",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"状态",prop:"status",value:"",list:[{label:"释放中",value:0},{label:"已释放完成",value:1}]},{type:"select",label:"锁仓时间类型",prop:"lockType",value:"",list:[{label:"日锁仓",value:"1"},{label:"月锁仓",value:"2"}]},{type:"select",label:"锁仓类型",prop:"orderType",value:"",list:[{label:"星球算力冻结",value:1},{label:"原始合伙人冻结",value:2},{label:"私募冻结",value:3}]}],U=[{label:"订单号",prop:"orderId"},{label:"子订单号",prop:"id",width:"190"},{label:"UID",prop:"uid"},{label:"账号类型",prop:"accountType",width:150,type:"filter",show_type:"text",filters:[{text:"币币账户",val:"1"}]},{label:"锁仓类型",prop:"orderType",width:150,type:"filter",show_type:"text",filters:[{text:"星球算力冻结",val:"1"},{text:"原始合伙人冻结",val:"2"},{text:"私募冻结",val:"3"}]},{label:"锁仓时间类型",prop:"lockType",width:150,type:"filter",show_type:"text",filters:[{text:"日锁仓",val:"1"},{text:"月锁仓",val:"2"}]},{label:"解冻方式",prop:"detailsType",width:150,type:"filter",show_type:"text",filters:[{text:"自动释放",val:"1"},{text:"手动释放",val:"2"}]},{label:"币种",prop:"coinName"},{label:"解冻数量",prop:"amount"},{label:"剩余解冻数量",prop:"remainingAmount"},{label:"解冻时间",prop:"createTime",width:"160"},{label:"解冻原因",prop:"remark"},{label:"操作",prop:"action",type:"action",width:"140",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],k=[{label:"订单号",prop:"orderId"},{label:"子订单号",prop:"id",width:"190"},{label:"UID",prop:"uid"},{label:"账号类型",prop:"accountType",width:150,type:"filter",show_type:"text",filters:[{text:"币币账户",val:"1"}]},{label:"锁仓类型",prop:"orderType",width:150,type:"filter",show_type:"text",filters:[{text:"星球算力冻结",val:"1"},{text:"原始合伙人冻结",val:"2"},{text:"私募冻结",val:"3"}]},{label:"锁仓时间类型",prop:"lockType",width:150,type:"filter",show_type:"text",filters:[{text:"日锁仓",val:"1"},{text:"月锁仓",val:"2"}]},{label:"解冻方式",prop:"detailsType",width:150,type:"filter",show_type:"text",filters:[{text:"自动释放",val:"1"},{text:"手动释放",val:"2"}]},{label:"币种",prop:"coinName"},{label:"解冻数量",prop:"amount"},{label:"剩余解冻数量",prop:"remainingAmount"},{label:"解冻时间",prop:"createTime",width:"160"},{label:"解冻原因",prop:"remark"}],D=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{label:"订单号",type:"onlyNumber",prop:"orderId",value:""},{label:"子订单号",prop:"id",value:""},{label:"UID",prop:"uid",value:"",placeHolder:"请输入",type:"onlyNumber"},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"select",label:"释放状态",prop:"detailsType",value:"",list:[{label:"自动释放",value:1},{label:"手动释放",value:2}]},{type:"select",label:"锁仓时间类型",prop:"lockType",value:"",list:[{label:"日锁仓",value:"1"},{label:"月锁仓",value:"2"}]},{type:"select",label:"锁仓类型",prop:"orderType",value:"",list:[{label:"星球算力冻结",value:1},{label:"原始合伙人冻结",value:2},{label:"私募冻结",value:3}]}],S=[{label:"订单号",prop:"orderNo"},{label:"UID",prop:"uid"},{label:"来源币种",prop:"coinName"},{type:"joint",jointValue:"USDT",label:"目标币种",prop:"toCoinName"},{label:"划转数量",prop:"amount"},{label:"手续费",prop:"fee"},{label:"到账数量",prop:"dealAmount"},{label:"FORM账户",prop:"fromType",type:"filter",show_type:"text",filters:[{text:"币币",val:"1"},{text:"法币",val:"2"},{text:"合约",val:"5"}]},{label:"TO账户",prop:"toType",type:"filter",show_type:"text",filters:[{text:"币币",val:"1"},{text:"法币",val:"2"},{text:"合约",val:"5"}]},{label:"状态",prop:"tradeStatus",type:"filter",show_type:"text",filters:[{text:"待审核",val:"0"},{text:"成功",val:"1"},{text:"失败",val:"2"}]},{label:"时间",prop:"createTime",type:"time"}],R=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"订单号",prop:"id",value:""},{type:"text",label:"UID",prop:"uid",value:""},{type:"select",label:"来源币种",prop:"coinId",value:"",list:[]},{type:"select",label:"FORM账号",prop:"accountType",value:"",list:[{label:"币币",value:1},{label:"法币",value:2},{label:"合约",value:5}]},{type:"select",label:"TO账号",prop:"toAccountType",value:"",list:[{label:"币币",value:1},{label:"法币",value:2},{label:"合约",value:5}]}],M=[{label:"链类型名称",prop:"chain"},{label:"币种名称",prop:"coin"},{label:"单笔限额",prop:"maxAutoWithdraw"},{label:"单日限额",prop:"maxDailyAutoWithdraw"},{type:"switch",prop:"isStatus",label:"热钱包启用开关",alias:"trswitch",disabled:!0},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"查看余额",fn:"checkBalance",type:"primary",alias:"checkBalance"}]}],O=[{label:"链类型名称",prop:"chain"},{label:"币种名称",prop:"coin"},{label:"单笔限额",prop:"maxAutoWithdraw"},{label:"单日限额",prop:"maxDailyAutoWithdraw"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],E=[{label:"热钱包地址",prop:"address"},{label:"当前余额",prop:"amount"},{label:"累计热提币",prop:"totalWithdraw"}]},ff53:function(e,l,t){"use strict";var a=t("75fc");t("9278"),t("87f3"),t("a481"),t("6b54"),t("28a5"),t("c5f6");function p(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(l))}function r(e){var l=e.toString().split(/[eE]/),t=(l[0].split(".")[1]||"").length-+(l[1]||0);return t>0?t:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var l=r(e);return l>0?p(Number(e)*Math.pow(10,l)):Number(e)}function i(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function u(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),b=2;b<t;b++)p[b-2]=arguments[b];if(p.length>0)return u.apply(void 0,[u(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var v=o(e),s=o(l),n=r(e)+r(l),d=v*s;return i(d),d/Math.pow(10,n)}function b(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),o=2;o<t;o++)p[o-2]=arguments[o];if(p.length>0)return b.apply(void 0,[b(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var i=Math.pow(10,Math.max(r(e),r(l)));return(u(e,i)+u(l,i))/i}function v(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),o=2;o<t;o++)p[o-2]=arguments[o];if(p.length>0)return v.apply(void 0,[v(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var i=Math.pow(10,Math.max(r(e),r(l)));return(u(e,i)-u(l,i))/i}function s(e,l){for(var t=arguments.length,b=new Array(t>2?t-2:0),v=2;v<t;v++)b[v-2]=arguments[v];if(b.length>0)return s.apply(void 0,[s(e,l),b[0]].concat(Object(a["a"])(b.slice(1))));var n=o(e),d=o(l);return i(n),i(d),u(n/d,p(Math.pow(10,r(l)-r(e))))}function n(e,l){var t=Math.pow(10,l);return s(Math.round(u(e,t)),t)}var d=!0;function c(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}l["a"]={strip:p,plus:b,minus:v,times:u,divide:s,round:n,digitLength:r,float2Fixed:o,enableBoundaryChecking:c}}}]);