(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1de96b1c"],{"2e08":function(e,l,t){var a=t("9def"),p=t("9744"),r=t("be13");e.exports=function(e,l,t,o){var n=String(r(e)),i=n.length,u=void 0===t?" ":String(t),b=a(l);if(b<=i||""==u)return n;var s=b-i,v=p.call(u,Math.ceil(s/u.length));return v.length>s&&(v=v.slice(0,s)),o?v+n:n+v}},"65fc":function(e,l,t){"use strict";t.d(l,"b",(function(){return P})),t.d(l,"a",(function(){return C})),t.d(l,"q",(function(){return G})),t.d(l,"w",(function(){return E})),t.d(l,"x",(function(){return R})),t.d(l,"k",(function(){return H})),t.d(l,"i",(function(){return _})),t.d(l,"j",(function(){return k})),t.d(l,"u",(function(){return M})),t.d(l,"t",(function(){return N})),t.d(l,"v",(function(){return S})),t.d(l,"z",(function(){return T})),t.d(l,"y",(function(){return A})),t.d(l,"h",(function(){return I})),t.d(l,"f",(function(){return D})),t.d(l,"g",(function(){return w})),t.d(l,"I",(function(){return U})),t.d(l,"H",(function(){return g})),t.d(l,"G",(function(){return h})),t.d(l,"r",(function(){return m})),t.d(l,"s",(function(){return f})),t.d(l,"l",(function(){return a})),t.d(l,"m",(function(){return p})),t.d(l,"n",(function(){return r})),t.d(l,"o",(function(){return o})),t.d(l,"p",(function(){return n})),t.d(l,"A",(function(){return v})),t.d(l,"B",(function(){return d})),t.d(l,"c",(function(){return i})),t.d(l,"d",(function(){return u})),t.d(l,"E",(function(){return b})),t.d(l,"F",(function(){return s})),t.d(l,"C",(function(){return y})),t.d(l,"D",(function(){return c})),t.d(l,"e",(function(){return x}));var a=[{label:"代理商UID",prop:"uid"},{label:"上级代理UID",prop:"upperUid"},{label:"类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"商务",val:31},{text:"代理",val:32}]},{label:"级别",prop:"commissionLevel"},{label:"创建时间",prop:"createTime"},{label:"登录名",prop:"username"},{label:"备注",prop:"remark"},{label:"手续费返佣比例",prop:"commissionPercent"},{label:"团队长返佣比例",prop:"packPercent"},{label:"结算后加入保证金比例",prop:"bondPercent"},{label:"是否本人手续费返佣",prop:"selfCommission",type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"手续费返佣结算时间",prop:"feeDelayUnit",type:"textAndfilter",show_type:"text",filters:[{text:"周",val:1},{text:"月",val:2},{text:"日",val:3}],prop2:"feeDelayDay"},{label:"团队长返佣结算时间",prop:"delayUnit",type:"textAndfilter",show_type:"text",filters:[{text:"周",val:1},{text:"月",val:2},{text:"日",val:3}],prop2:"delayDay"},{label:"可释放保证金",prop:"amount"},{label:"设置保证金额度",prop:"bondLimit"},{label:"代理总盈利阀值",prop:"profitMargin",type:"noneShowValue",showValue:"-"},{label:"用户可盈利阈值",prop:"userProfitMargin",type:"noneShowValue",showValue:"-"},{label:"返佣开关",prop:"commissionSwitch",type:"filter",show_type:"text",filters:[{text:"关闭",val:0},{text:"开启",val:1}]},{label:"登录开关",prop:"loginSwitch",type:"filter",show_type:"text",filters:[{text:"关闭",val:0},{text:"开启",val:1}]},{label:"操作",prop:"action",type:"action",width:260,btnGroup:[{label:"编辑",fn:"edit",filter_type:"array",filter_key:"userGrade",filter_status:["1"],type:"primary",alias:"edit1"},{label:"编辑",fn:"edit",filter_type:"arrayExcept",filter_key:"userGrade",filter_status:["1"],type:"primary",alias:"edit2"},{label:"释放保证金",fn:"releaseMoney",type:"primary",alias:"releaseMoney"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],p=[{label:"代理商UID",prop:"uid"},{label:"上级代理UID",prop:"upperUid"},{label:"类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"商务",val:31},{text:"代理",val:32}]},{label:"级别",prop:"commissionLevel"},{label:"创建时间",prop:"createTime"},{label:"登录名",prop:"username"},{label:"备注",prop:"remark"},{label:"手续费返佣比例",prop:"commissionPercent"},{label:"团队长返佣比例",prop:"packPercent"},{label:"结算后加入保证金比例",prop:"bondPercent"},{label:"是否本人手续费返佣",prop:"selfCommission",type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"手续费返佣结算时间",prop:"feeDelayUnit",type:"textAndfilter",show_type:"text",filters:[{text:"周",val:1},{text:"月",val:2},{text:"日",val:3}],prop2:"feeDelayDay"},{label:"团队长返佣结算时间",prop:"delayUnit",type:"textAndfilter",show_type:"text",filters:[{text:"周",val:1},{text:"月",val:2},{text:"日",val:3}],prop2:"delayDay"},{label:"可释放保证金",prop:"amount"},{label:"设置保证金额度",prop:"bondLimit"},{label:"代理总盈利阀值",prop:"profitMargin",type:"noneShowValue",showValue:"-"},{label:"用户可盈利阈值",prop:"userProfitMargin",type:"noneShowValue",showValue:"-"},{label:"返佣开关",prop:"commissionSwitch",type:"filter",show_type:"text",filters:[{text:"关闭",val:0},{text:"开启",val:1}]},{label:"登录开关",prop:"loginSwitch",type:"filter",show_type:"text",filters:[{text:"关闭",val:0},{text:"开启",val:1}]}],r=[{type:"text",label:"代理商UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"text",label:"查询直属下级代理商UID",prop:"upperUid",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"userType",value:"",list:[{label:"商务",value:31},{label:"代理",value:32}]},{type:"select",label:"级别",prop:"commissionLevel",value:"",list:[]},{type:"select",label:"返佣开关",prop:"commissionSwitch",value:"",list:[{label:"关闭",value:0},{label:"开启",value:1}]},{type:"select",label:"限制登录开关",prop:"loginSwitch",value:"",list:[{label:"关闭",value:0},{label:"开启",value:1}]},{type:"select",label:"是否本人手续费返佣",prop:"selfCommission",value:"",list:[{label:"否",value:0},{label:"是",value:1}]}],o=[{label:"代理商级别",prop:"level"},{label:"代理模式",prop:"agentMode",type:"filter",show_type:"text",filters:[{text:"手续费模式",val:1},{text:"团队长模式",val:2}]},{label:"等级模式",prop:"levelMode",type:"filter",show_type:"text",filters:[{text:"固定模式",val:1},{text:"升级模式",val:2}]},{label:"手续费返佣比例",prop:"feeCommission"},{label:"返佣结算时间",prop:"delayUnit",type:"textAndfilter",show_type:"text",filters:[{text:"周",val:1},{text:"月",val:2}],prop2:"delayDay"},{label:"添加时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],n=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"等级模式",prop:"levelMode",value:"",list:[{label:"固定模式",value:1},{label:"升级模式",value:2}]},{type:"select",label:"代理模式",prop:"agentMode",value:"",list:[{label:"手续费模式",value:1},{label:"团队长模式",value:2}]}],i=[{label:"时间",prop:"createTime"},{label:"订单号",prop:"orderId"},{label:"代理UID",prop:"uid"},{label:"用户类型",prop:"userType",type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"后台管理员用户",val:2},{text:"机器人",val:3},{text:"CPT用户",val:4},{text:"系统用户",val:100},{text:"收益账号",val:101},{text:"成本账号",val:102},{text:"支出账号",val:103},{text:"支出子账号",val:104},{text:"收入账号",val:105},{text:"合约收益账号",val:106},{text:"TP商户账号",val:20},{text:"顶级代理商账号",val:21},{text:"代理商账号",val:22},{text:"平台商户账号",val:23},{text:"顶级承兑商",val:24},{text:"承兑商代理",val:25},{text:"商务",val:31},{text:"代理",val:32},{text:"分析师",val:41}]},{label:"类型",prop:"optType",type:"filter",show_type:"text",filters:[{text:"充币",val:0},{text:"提币待审核",val:1},{text:"提币成功",val:2},{text:"提币失败",val:3},{text:"买下单",val:4},{text:"卖下单",val:5},{text:"买成交",val:6},{text:"卖成交",val:7},{text:"买撤单",val:8},{text:"卖撤单",val:9},{text:"锁仓手动释放可用金额",val:20},{text:"锁仓冻结金额",val:21},{text:"锁仓手动释放冻结金额",val:23},{text:"广告下架",val:39},{text:"合约返佣",val:88},{text:"合约返佣结算",val:95},{text:"普通用户手续费返佣",val:101},{text:"币币划转至合约",val:50},{text:"合约划转至币币",val:51},{text:"法币划转至合约",val:52},{text:"合约划转至法币",val:53},{text:"币币划转至法币",val:10},{text:"法币划转至币币",val:11},{text:"发送红包",val:"106"},{text:"领取红包",val:"107"},{text:"过期红包退还",val:"108"},{text:"补充保证金",val:"109"},{text:"释放保证金",val:"110"}]},{label:"变动资产",prop:"amount"},{label:"变动前资产",prop:"beforeAmount"},{label:"变动后资产",prop:"afterAmount"},{label:"操作资金类型",prop:"amountType",type:"filter",show_type:"text",filters:[{text:"可用余额",val:1},{text:"冻结金额",val:2}]}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"代理UID",prop:"agentUid",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"optType",value:"",list:[{label:"充币",value:0},{label:"提币待审核",value:1},{label:"提币成功",value:2},{label:"提币失败",value:3},{label:"买下单",value:4},{label:"卖下单",value:5},{label:"买成交",value:6},{label:"卖成交",value:7},{label:"买撤单",value:8},{label:"卖撤单",value:9},{label:"锁仓手动释放可用金额",value:20},{label:"锁仓冻结金额",value:21},{label:"锁仓手动释放冻结金额",value:23},{label:"广告下架",value:39},{label:"合约返佣",value:88},{label:"合约返佣结算",value:95},{label:"普通用户手续费返佣",value:101},{label:"币币划转至合约",value:50},{label:"合约划转至币币",value:51},{label:"法币划转至合约",value:52},{label:"合约划转至法币",value:53},{label:"币币划转至法币",value:10},{label:"法币划转至币币",value:11},{label:"发送红包",value:"106"},{label:"领取红包",value:"107"},{label:"过期红包退还",value:"108"},{label:"补充保证金",value:"109"},{label:"释放保证金",value:"110"}]},{type:"text",label:"订单号",prop:"orderId",value:"",placeHolder:"请输入"},{type:"selectChange",label:"用户类型",prop:"userType",value:"",list:[{label:"商务",value:31},{label:"代理",value:32}]}],b=[{label:"币种",prop:"coinName"},{label:"可用",prop:"amount"},{label:"冻结",prop:"frozenAmount"},{label:"待结算",prop:"waitAmount"},{label:"保证金",prop:"expandAmount"},{label:"历史总返佣",prop:"returnSumAmount"},{label:"下面整条链的合约盈亏总合计",prop:"allStat"},{label:"下面整条链的手续费合计",prop:"commissionStat"},{label:"自身获得手续费合计",prop:"myselfStat"},{label:"下面整条链贡献给平台的手续费合计",prop:"platformCommission",type:"headerBtn",btnFn:"platformCommissionInfo",btnLabel:"查看详情",btnType:"text"},{label:"下面整条链贡献给平台的合约盈亏合计",prop:"platformProfitLoss"},{label:"自身获得团队长合计",prop:"captainStat"},{label:"下面整条链合约净入金合计",prop:"inOutStat"}],s=[{label:"序号",type:"index",width:80},{label:"UID",prop:"uid"},{label:"是否入金",prop:"positionType",type:"filter",show_type:"text",filters:[{text:"是",val:0},{text:"否",val:1}]},{label:"手机",prop:"phone"},{label:"邮箱",prop:"email"},{label:"注册IP",prop:"registerIp"},{label:"注册时间",prop:"registerTime"}],v=[{label:"时间",prop:"createTime",type:"time"},{label:"用户UID(from)",prop:"uid"},{label:"代理商UID(to)",prop:"agentUid"},{label:"最上级代理商UID",prop:"topProxyUid"},{label:"返佣类型",prop:"orderType",width:120,type:"filter",show_type:"text",filters:[{text:"合约返佣",val:1},{text:"币币返佣",val:2}]},{label:"币对",prop:"coinMarket"},{label:"手续费类型",prop:"positionDirection",width:120,type:"filter",show_type:"text",filters:[{text:"开仓手续费",val:10},{text:"平仓手续费",val:11}]},{label:"成交数量",prop:"positionAmount"},{label:"手续费金额",prop:"originAmount"},{label:"代理商返佣金额",width:130,prop:"amount"},{label:"结算状态",prop:"grantStatus",width:120,type:"filter",show_type:"text",filters:[{text:"已结算",val:1},{text:"未结算",val:0}]},{label:"仓位ID",prop:"relateRecdId"}],d=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"用户UID(from)",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"代理商UID(to)",prop:"agentId",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"最上级代理商UID",prop:"topAgentId",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"仓位ID",prop:"relateRecdId",value:"",placeHolder:"请输入"},{type:"select",label:"币对",prop:"coinMarket",value:"",list:[]},{type:"select",label:"返佣类型",prop:"orderType",value:"",list:[{label:"合约返佣",value:1},{label:"币币返佣",value:2}]},{type:"select",label:"结算状态",prop:"isReward",value:"",list:[{label:"未结算",value:0},{label:"已结算",value:1}]}],y=[{label:"时间",prop:"createTime",type:"time"},{label:"用户UID(from)",prop:"uid"},{label:"用户UID(to)",prop:"toUid"},{label:"返佣类型",prop:"orderType",width:120,type:"filter",show_type:"text",filters:[{text:"合约返佣",val:1}]},{label:"币对",prop:"coinMarket"},{label:"手续费类型",prop:"positionDirection",width:120,type:"filter",show_type:"text",filters:[{text:"开仓手续费",val:10},{text:"平仓手续费",val:11}]},{label:"成交数量",prop:"positionAmount"},{label:"手续费金额",prop:"originAmount"},{label:"返佣金额",prop:"amount"},{label:"仓位ID",prop:"relateRecdId"}],c=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"用户UID(from)",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"用户UID(to)",prop:"agentId",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"仓位ID",prop:"relateRecdId",value:"",placeHolder:"请输入"},{type:"select",label:"币对",prop:"coinMarket",value:"",list:[]},{type:"select",label:"返佣类型",prop:"orderType",value:"",list:[{label:"合约返佣",value:1},{label:"币币返佣",value:2}]}],m=[{label:"用户UID(from)",prop:"uid"},{label:"代理商UID(to)",prop:"agentUid"},{label:"时间",prop:"createTime",type:"time"},{label:"仓位ID",prop:"positionId"},{label:"币对",prop:"coinMarket"},{label:"杠杆倍数",prop:"leverTimes"},{label:"已实现盈亏",prop:"originAmount"},{label:"平仓方向",prop:"closePositionDirection",width:120,type:"filter",show_type:"text",filters:[{text:"平多",val:1},{text:"平空",val:2}]},{label:"仓位类型",prop:"closePositionType",width:120,type:"filter",show_type:"text",filters:[{text:"逐仓",val:1},{text:"全仓",val:0}]},{label:"代理商获得金额",prop:"amount"},{label:"结算状态",prop:"grantStatus",width:120,type:"filter",show_type:"text",filters:[{text:"已结算",val:1},{text:"未结算",val:0}]}],f=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"用户UID(from)",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"代理商UID(to)",prop:"agentId",value:"",placeHolder:"请输入"},{type:"select",label:"币对",prop:"coinMarket",value:"",list:[]},{type:"select",label:"结算状态",prop:"isReward",value:"",list:[{label:"已结算",value:1},{label:"未结算",value:0}]},{type:"onlyNumber",label:"仓位ID",prop:"positionId",value:"",placeHolder:"请输入"}],x=[{type:"text",label:"代理UID",prop:"uid",value:"",placeHolder:"请输入"}],h=[{label:"用户UID",prop:"uid"},{label:"代理商UID",prop:"agentUid"},{label:"用户可盈利阀值(USDT)",prop:"profitMargin"},{label:"用户当期盈亏(USDT)",prop:"profitAndLoss"},{label:"用户合约资产(USDT)",prop:"contractAmount"},{label:"代理待结算(USDT)",prop:"agentSettlement"},{label:"代理保证金",prop:"amountExpand"},{label:"代理下方总有效用户(交易)",prop:"tradeUserNum"},{label:"代理下方总用户",prop:"userNum"},{label:"团队长返佣比例",prop:"packagePercent"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"补充保证金",fn:"supple",type:"text",alias:"supple"},{label:"移出监控",fn:"remove",type:"text",alias:"remove"}]}],g=[{label:"用户UID",prop:"uid"},{label:"代理商UID",prop:"agentUid"},{label:"用户可盈利阀值(USDT)",prop:"profitMargin"},{label:"用户当期盈亏(USDT)",prop:"profitAndLoss"},{label:"用户合约资产(USDT)",prop:"contractAmount"},{label:"代理待结算(USDT)",prop:"agentSettlement"},{label:"代理保证金",prop:"amountExpand"},{label:"代理下方总有效用户(交易)",prop:"tradeUserNum"},{label:"代理下方总用户",prop:"userNum"},{label:"团队长返佣比例",prop:"packagePercent"}],U=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"代理商UID",prop:"agentUID",value:"",placeHolder:"请输入"}],D=[{label:"代理商UID",prop:"agentUid"},{label:"备注",prop:"remark"},{label:"总盈利阀值(USDT)",prop:"profitMargin"},{label:"保证金(USDT)",prop:"amountExpand"},{label:"待结算(USDT)",prop:"agentSettlement"},{label:"代理下方总盈亏(USDT)",prop:"profitAndLoss"},{label:"代理下方总有效用户(交易)",prop:"tradeUserNum"},{label:"代理下方总用户",prop:"userNum"},{label:"团队长返佣比例",prop:"packagePercent"},{label:"操作",prop:"action",type:"action",width:120,btnGroup:[{label:"补充保证金",fn:"supple",type:"text",alias:"supple"}]}],w=[{label:"代理商UID",prop:"agentUid"},{label:"备注",prop:"remark"},{label:"总盈利阀值(USDT)",prop:"profitMargin"},{label:"保证金(USDT)",prop:"amountExpand"},{label:"待结算(USDT)",prop:"agentSettlement"},{label:"代理下方总盈亏(USDT)",prop:"profitAndLoss"},{label:"代理下方总有效用户(交易)",prop:"tradeUserNum"},{label:"代理下方总用户",prop:"userNum"},{label:"团队长返佣比例",prop:"packagePercent"}],I=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"代理商UID",prop:"agentUID",value:"",placeHolder:"请输入"}],A=[{label:"时间",prop:"createTime"},{label:"订单号",prop:"id"},{label:"代理UID",prop:"uid"},{label:"类型",prop:"optType",type:"filter",show_type:"text",filters:[{text:"补充保证金",val:2},{text:"释放保证金",val:3},{text:"结算保证金",val:1}]},{label:"变动保证金",prop:"amount"},{label:"变动前保证金",prop:"beforeAmount"},{label:"变动后保证金",prop:"afterAmount"}],T=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"代理UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"类型",prop:"optType",value:"",list:[{label:"补充保证金",value:2},{label:"释放保证金",value:3},{label:"结算保证金",value:1}]},{type:"onlyNumber",label:"订单号",prop:"relateRecdId",value:"",placeHolder:"请输入"}],S=[{type:"onlyNumber",label:"商务UID",prop:"businessUid",value:"",placeHolder:"请输入"},{type:"select",label:"商务关系",prop:"type",value:1,list:[{label:"查上级",value:0},{label:"当前级别",value:1},{label:"查下级",value:2}]}],N=[{label:"时间",prop:"createTime",type:"time"},{label:"用户UID",prop:"uid"},{label:"商务UID",prop:"businessUid"},{label:"返佣类型",prop:"orderType",width:120,type:"filter",show_type:"text",filters:[{text:"合约返佣",val:1},{text:"币币返佣",val:2}]},{label:"币对",prop:"coinMarket"},{label:"成交数量",prop:"positionAmount"},{label:"手续费金额",prop:"originFeeAmountSum"},{label:"商务返佣金额",width:130,prop:"commissionAmount"},{label:"结算状态",prop:"businessGrantStatus",width:120,type:"filter",show_type:"text",filters:[{text:"已结算",val:1},{text:"待结算",val:0}]},{label:"订单号",prop:"orderNumber"}],M=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"商务UID",prop:"toUid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"订单号",prop:"orderNumber",value:"",placeHolder:"请输入"},{type:"select",label:"币对",prop:"coinMarket",value:"",list:[]},{type:"select",label:"返佣类型",prop:"orderType",value:"",list:[{label:"合约返佣",value:1},{label:"币币返佣",value:2}]},{type:"select",label:"结算状态",prop:"isReward",value:"",list:[{label:"已结算",value:1},{label:"待结算",value:0}]}],_=[{label:"UID",prop:"uid"},{label:"发放类型",prop:"grantType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:1},{text:"自动发放",val:2}]},{label:"发放名额数量",prop:"quotaCount"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"详情",fn:"details",type:"primary"}]}],k=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"发放类型",prop:"grantType",value:"",list:[{label:"手动发放",value:1},{label:"自动发放",value:2}]}],H=[{label:"使用时间",prop:"useTime"},{label:"使用UID",prop:"useUid"},{label:"使用比例",prop:"commissionPercent"}],E=[{label:"用户UID",prop:"uid"},{label:"上级代理商UID",prop:"agentId"},{label:"最上级代理商UID",prop:"topAgentId"},{label:"开仓与平仓间隔时（笔）",prop:"intervalCount"},{label:"合约单笔盈利达到（笔）",prop:"singleOrderCount"},{label:"合约累计盈利达到（USDT）",prop:"totalOrderProfit"},{label:"操作",prop:"action",type:"action",width:200,btnGroup:[{label:"平仓记录",fn:"toCloseContract",type:"text"},{label:"用户管理",fn:"toUserlistDetail",type:"text"}]}],R=[{type:"date_rank",label:"时间",prop:"timeRangeStart",prop2:"timeRangeEnd",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"上级代理商UID",prop:"agentId",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"最上级代理端UID",prop:"topAgentId",value:"",placeHolder:"请输入"},{type:"text",minWidth:"250px",label:"风控筛选条件：合约单笔盈利大于",prop:"singleOrderGt",value:"",placeHolder:"请输入"},{type:"text",label:"合约累计盈利大于",prop:"totalOrderGt",value:"",placeHolder:"请输入"},{type:"text",minWidth:"160px",label:"开仓与平仓间隔时（s）",prop:"interval",value:"",placeHolder:"请输入"}],C=[{label:"代理商UID",prop:"uid"},{label:"类型",prop:"typeName"},{label:"手机",prop:"phone"},{label:"邮箱",prop:"email"},{label:"下线普通用户数量",prop:"commonUserCount"},{label:"下线代理数量",prop:"agentUserCount"},{label:"币种",prop:"coinName"},{label:"总充币",prop:"depositAmount"},{label:"总买币",prop:"octInAmount"},{label:"总入金",prop:"totalInAmount"},{label:"净入金",prop:"totalNetAmount"}],P=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"coinName",value:"",list:[]}],G=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""}]},7514:function(e,l,t){"use strict";var a=t("5ca1"),p=t("0a49")(5),r="find",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(e){return p(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")(r)},"87f3":function(e,l,t){var a=t("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,l,t){var a=t("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,l,t){"use strict";var a=t("4588"),p=t("be13");e.exports=function(e){var l=String(p(this)),t="",r=a(e);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(l+=l))1&r&&(t+=l);return t}},c270:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,l,t){"use strict";t.d(l,"a",(function(){return p}));t("28a5"),t("f576"),t("a481"),t("6b54");var a=t("7618");function p(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var t,p=l||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?t=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),t=new Date(e));var r={y:t.getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()},o=p.replace(/{([ymdhisa])+}/g,(function(e,l){var t=r[l];return"a"===l?["日","一","二","三","四","五","六"][t]:t.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},f576:function(e,l,t){"use strict";var a=t("5ca1"),p=t("2e08"),r=t("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);a(a.P+a.F*o,"String",{padStart:function(e){return p(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,l,t){"use strict";var a=t("75fc");t("9278"),t("87f3"),t("a481"),t("6b54"),t("28a5"),t("c5f6");function p(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(l))}function r(e){var l=e.toString().split(/[eE]/),t=(l[0].split(".")[1]||"").length-+(l[1]||0);return t>0?t:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var l=r(e);return l>0?p(Number(e)*Math.pow(10,l)):Number(e)}function n(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function i(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),u=2;u<t;u++)p[u-2]=arguments[u];if(p.length>0)return i.apply(void 0,[i(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var b=o(e),s=o(l),v=r(e)+r(l),d=b*s;return n(d),d/Math.pow(10,v)}function u(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),o=2;o<t;o++)p[o-2]=arguments[o];if(p.length>0)return u.apply(void 0,[u(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var n=Math.pow(10,Math.max(r(e),r(l)));return(i(e,n)+i(l,n))/n}function b(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),o=2;o<t;o++)p[o-2]=arguments[o];if(p.length>0)return b.apply(void 0,[b(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var n=Math.pow(10,Math.max(r(e),r(l)));return(i(e,n)-i(l,n))/n}function s(e,l){for(var t=arguments.length,u=new Array(t>2?t-2:0),b=2;b<t;b++)u[b-2]=arguments[b];if(u.length>0)return s.apply(void 0,[s(e,l),u[0]].concat(Object(a["a"])(u.slice(1))));var v=o(e),d=o(l);return n(v),n(d),i(v/d,p(Math.pow(10,r(l)-r(e))))}function v(e,l){var t=Math.pow(10,l);return s(Math.round(i(e,t)),t)}var d=!0;function y(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}l["a"]={strip:p,plus:u,minus:b,times:i,divide:s,round:v,digitLength:r,float2Fixed:o,enableBoundaryChecking:y}}}]);