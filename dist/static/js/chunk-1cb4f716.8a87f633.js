(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cb4f716"],{"0203":function(e,t,l){"use strict";l.d(t,"d",(function(){return x})),l.d(t,"e",(function(){return f})),l.d(t,"f",(function(){return h})),l.d(t,"a",(function(){return d})),l.d(t,"b",(function(){return y})),l.d(t,"c",(function(){return c})),l.d(t,"g",(function(){return a})),l.d(t,"i",(function(){return p})),l.d(t,"k",(function(){return r})),l.d(t,"j",(function(){return i})),l.d(t,"h",(function(){return o})),l.d(t,"m",(function(){return u})),l.d(t,"n",(function(){return n})),l.d(t,"o",(function(){return s})),l.d(t,"l",(function(){return b})),l.d(t,"p",(function(){return v}));var a=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",width:120,type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"系统用户",val:100},{text:"机器人",val:3},{text:"分析师",val:41},{val:2,text:"后台管理员用户"},{val:101,text:"收益账号"},{val:102,text:"成本账号"},{val:103,text:"支出账号"},{val:104,text:"支出子账号"},{val:105,text:"收入账号"},{val:106,text:"合约收益账号"},{val:20,text:"TP商户账号"},{val:21,text:"顶级代理商账号"},{val:22,text:"代理商账号"},{val:23,text:"平台商户账号"},{val:24,text:"顶级广告商"},{val:25,text:"广告商代理"},{val:31,text:"商务端"},{val:32,text:"商务代理"}]},{label:"手机",prop:"phone",width:"150"},{label:"邮箱",prop:"email",width:"200"},{label:"姓名",prop:"realName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo",width:"200"},{label:"昵称",prop:"nickName"},{label:"头像页",prop:"cardFrontUrl",type:"img"},{label:"国徽页",prop:"cardBackUrl",type:"img"},{label:"录制视频",prop:"videoUrl",type:"video"},{label:"邀请人UID",prop:"inviterUid"},{label:"邀请码",prop:"inviteCode"},{label:"邀请下级人数",prop:"sonCount",prop2:"sonColor",type:"textOneColor"},{label:"设备号",prop:"deviceToken",width:150},{label:"版本号",prop:"loginVersionNum",width:110},{label:"注册IP",prop:"registerIp",width:130},{label:"登录IP",prop:"loginIp",width:150},{label:"用户上次使用时长",prop:"userUsedTime",prop2:"timeColor",width:150,type:"textColor"},{label:"用户累计使用时长",prop:"userActiveTime",prop2:"timeColor",width:150,type:"textColor"},{label:"实名认证来源",prop:"verifiedSource",type:"filter_myShowHide",filtersProp:"userVerifiedStatus",filtersValue:[0,1,3],filters:[{text:"平台",val:1},{text:"阿里",val:2}]},{label:"实名审核状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",width:"120",filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"登录状态",prop:"userLoginStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:0,type:"success"},{text:"失效",val:1,type:"warning"}]},{label:"交易状态",prop:"userTradeStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"法币状态",prop:"userOtcStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"提币状态",prop:"userWithdrawStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"注册时间",prop:"registerTime",width:"100"},{label:"操作",prop:"action",type:"action",width:"120",btnGroup:[{label:"查看/编辑",fn:"viewDetail",type:"primary",alias:"detail"},{label:"编辑",fn:"edit",type:"noVisible",alias:"edit"}]}],p=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",width:120,type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"系统用户",val:100},{text:"机器人",val:3},{text:"分析师",val:41},{val:2,text:"后台管理员用户"},{val:101,text:"收益账号"},{val:102,text:"成本账号"},{val:103,text:"支出账号"},{val:104,text:"支出子账号"},{val:105,text:"收入账号"},{val:106,text:"合约收益账号"},{val:20,text:"TP商户账号"},{val:21,text:"顶级代理商账号"},{val:22,text:"代理商账号"},{val:23,text:"平台商户账号"},{val:24,text:"顶级广告商"},{val:25,text:"广告商代理"},{val:31,text:"商务端"},{val:32,text:"商务代理"}]},{label:"手机",prop:"phone",width:"150"},{label:"邮箱",prop:"email",width:"200"},{label:"姓名",prop:"realName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo",width:"200"},{label:"昵称",prop:"nickName"},{label:"头像页",prop:"cardFrontUrl",type:"img"},{label:"国徽页",prop:"cardBackUrl",type:"img"},{label:"录制视频",prop:"videoUrl",type:"video"},{label:"邀请人UID",prop:"inviterUid"},{label:"邀请码",prop:"inviteCode"},{label:"邀请下级人数",prop:"sonCount",prop2:"sonColor",type:"textOneColor"},{label:"设备号",prop:"deviceToken",width:150},{label:"版本号",prop:"loginVersionNum",width:110},{label:"注册IP",prop:"registerIp",width:130},{label:"登录IP",prop:"loginIp",width:150},{label:"用户上次使用时长",prop:"userUsedTime",prop2:"timeColor",width:150,type:"textColor"},{label:"用户累计使用时长",prop:"userActiveTime",prop2:"timeColor",width:150,type:"textColor"},{label:"实名认证来源",prop:"verifiedSource",type:"filter",show_type:"text",width:"120",filters:[{text:"平台",val:1},{text:"阿里",val:2}]},{label:"实名审核状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",width:"120",filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"登录状态",prop:"userLoginStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:0,type:"success"},{text:"失效",val:1,type:"warning"}]},{label:"交易状态",prop:"userTradeStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"法币状态",prop:"userOtcStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"提币状态",prop:"userWithdrawStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"注册时间",prop:"registerTime",width:"100"}],r=[{type:"date_rank",label:"注册时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"用户类型",prop:"userType",value:"",list:[{label:"普通用户",value:1},{label:"系统用户",value:100},{label:"机器人",value:3},{label:"分析师",value:41},{value:2,label:"后台管理员用户"},{value:101,label:"收益账号"},{value:102,label:"成本账号"},{value:103,label:"支出账号"},{value:104,label:"支出子账号"},{value:105,label:"收入账号"},{value:106,label:"合约收益账号"},{value:20,label:"TP商户账号"},{value:21,label:"顶级代理商账号"},{value:22,label:"代理商账号"},{value:23,label:"平台商户账号"},{value:24,label:"顶级广告商"},{value:25,label:"广告商代理"},{value:31,label:"商务端"},{value:32,label:"商务代理"}]},{type:"text",label:"手机",prop:"phone",value:"",placeHolder:"请输入"},{type:"text",label:"邮箱",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"姓名",prop:"realName",value:"",placeHolder:"请输入"},{type:"text",label:"身份证号码",prop:"cardNo",value:"",placeHolder:"请输入"},{type:"text",label:"邀请码",prop:"inviteCode",value:"",placeHolder:"请输入"},{type:"select",label:"实名审核状态",prop:"verifiedAudit",value:"",list:[{label:"高级待审核",value:0},{label:"初级认证成功",value:1},{label:"高级认证失败",value:2},{label:"未认证",value:3},{label:"高级认证成功",value:4}]},{type:"select",label:"登录状态",prop:"userLoginStatus",value:"",list:[{label:"正常",value:0},{label:"失效",value:1}]},{type:"select",label:"提币状态",prop:"userWithdrawStatus",value:"",list:[{label:"正常",value:1},{label:"失效",value:0}]},{type:"text",label:"设备号",prop:"deviceToken",value:"",placeHolder:"请输入"},{type:"text",label:"版本号",prop:"loginVersionNum",value:"",placeHolder:"请输入"},{type:"text",label:"登录IP",prop:"loginIp",value:"",placeHolder:"请输入"},{type:"text",label:"注册IP",prop:"registerIp",value:"",placeHolder:"请输入"},{type:"select",label:"交易状态",prop:"userTradeStatus",value:"",list:[{label:"正常",value:1},{label:"失效",value:0}]},{type:"select",label:"法币状态",prop:"userOtcStatus",value:"",list:[{label:"正常",value:1},{label:"失效",value:0}]}],i=[{label:"支付方式",prop:"payTypeName"},{label:"姓名",prop:"realName"},{label:"账号",prop:"num"},{label:"银行名称",prop:"bankName"},{label:"支行名称",prop:"bankBranch"},{label:"二维码",prop:"qrCode",type:"img"},{label:"是否启用",prop:"isShow",width:100,type:"filter",show_type:"text",filters:[{text:"未启用",val:0},{text:"启用",val:1}]}],o=[{label:"币种",prop:"coinName"},{label:"币币入金",prop:"coinIn"},{label:"法币入金",prop:"otcIn"},{label:"合约入金",prop:"contractIn"},{label:"币币出金",prop:"coinOut"},{label:"法币出金",prop:"otcOut"},{label:"合约出金",prop:"contractOut"},{label:"出入金合计数量",prop:"totalInOut"}],u=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",width:100,type:"filter",show_type:"text",filters:[{val:1,text:"普通用户"},{val:20,text:"TP商户账号"},{val:21,text:"顶级代理商账号"},{val:22,text:"代理商账号"},{val:24,text:"顶级广告商"},{val:25,text:"广告商代理"},{val:31,text:"商务端"},{val:32,text:"商务代理"}]},{label:"手机",prop:"phone",width:"150"},{label:"邮箱",prop:"email",width:"200"},{label:"姓名",prop:"realName"},{label:"邀请人UID",prop:"inviterUid"},{label:"邀请码",prop:"inviteCode"},{label:"邀请下级人数",prop:"sonCount"},{label:"实名状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",width:120,filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"入金状态",prop:"depositStatus",width:90,type:"filter",show_type:"text",filters:[{text:"初级",val:1},{text:"中级",val:2},{text:"高级",val:3},{text:"超级",val:4}]},{label:"是否尊贵会员",prop:"userFlag",width:90,type:"filter",show_type:"text",filters:[{text:"是",val:1},{text:"否",val:0}]},{label:"当前资产",prop:"amount",width:"100"},{label:"7天资产动向",prop:"sevenDaysAmount",width:"100"},{label:"15天资产动向",prop:"fifteenDaysAmount",width:"100"},{label:"30天资产动向",prop:"thirtyDaysAmount",width:"100"},{label:"注册时间",prop:"registerTime",type:"time"},{label:"操作",prop:"action",type:"action",width:"120",btnGroup:[{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],n=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",width:100,type:"filter",show_type:"text",filters:[{val:1,text:"普通用户"},{val:20,text:"TP商户账号"},{val:21,text:"顶级代理商账号"},{val:22,text:"代理商账号"},{val:24,text:"顶级广告商"},{val:25,text:"广告商代理"},{val:31,text:"商务端"},{val:32,text:"商务代理"}]},{label:"手机",prop:"phone",width:"150"},{label:"邮箱",prop:"email",width:"200"},{label:"姓名",prop:"realName"},{label:"邀请人UID",prop:"inviterUid"},{label:"邀请码",prop:"inviteCode"},{label:"邀请下级人数",prop:"sonCount"},{label:"实名状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",width:120,filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"入金状态",prop:"depositStatus",width:90,type:"filter",show_type:"text",filters:[{text:"初级",val:1},{text:"中级",val:2},{text:"高级",val:3},{text:"超级",val:4}]},{label:"是否尊贵会员",prop:"userFlag",width:90,type:"filter",show_type:"text",filters:[{text:"是",val:1},{text:"否",val:0}]},{label:"当前资产",prop:"amount",width:"100"},{label:"7天资产动向",prop:"sevenDaysAmount",width:"100"},{label:"15天资产动向",prop:"fifteenDaysAmount",width:"100"},{label:"30天资产动向",prop:"thirtyDaysAmount",width:"100"},{label:"注册时间",prop:"registerTime",type:"time"}],s=[{type:"date_rank",label:"注册时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"用户类型",prop:"userType",value:"",list:[{label:"普通用户",value:1},{value:20,label:"TP商户账号"},{value:21,label:"顶级代理商账号"},{value:22,label:"代理商账号"},{value:24,label:"顶级广告商"},{value:25,label:"广告商代理"},{value:31,label:"商务端"},{value:32,label:"商务代理"}]},{type:"select",label:"实名状态",prop:"verifiedAudit",value:"",list:[{label:"高级待审核",value:0},{label:"初级认证成功",value:1},{label:"高级认证失败",value:2},{label:"未认证",value:3},{label:"高级认证成功",value:4}]},{type:"onlyNumber",label:"手机",prop:"phone",value:"",placeHolder:"请输入"},{type:"text",label:"邮箱",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"姓名",prop:"realName",value:"",placeHolder:"请输入"},{type:"text",label:"证据号码",prop:"cardNo",value:"",placeHolder:"请输入"},{type:"text",label:"邀请码",prop:"inviteCode",value:"",placeHolder:"请输入"},{type:"select",label:"入金状态",prop:"depositStatus",value:"",list:[{label:"初级",value:1},{label:"中级",value:2},{label:"高级",value:3},{label:"超级",value:4}]},{type:"text_rank_number",label:"当前资产",prop:"amountMin",prop2:"amountMax",value:[],placeHolder:"请输入"},{type:"select",label:"资产排序",prop:"sort",value:"",list:[{label:"正序",value:1},{label:"倒序",value:2}]},{type:"select",label:"是否尊贵会员",prop:"userFlag",value:"",list:[{label:"是",value:1},{label:"否",value:0}]}],b=[{label:"币种",prop:"coinName"},{label:"总充币",prop:"rechargeAmount"},{label:"总提币",prop:"withdrawAmount"},{label:"空投",prop:"airdropAmount"},{label:"买入数量",prop:"buyQuantity"},{label:"卖出数量",prop:"sellQuantity"},{label:"买入金额",prop:"buyAmount"},{label:"卖出金额",prop:"sellAmount"},{label:"总数量",prop:"totalQuantity"},{label:"盈亏",prop:"totalAmount"},{label:"操作",prop:"action",type:"action",width:"120",btnGroup:[{label:"成交记录",fn:"record",type:"primary"}]}],v=[{label:"序号",type:"index",width:80},{label:"UID",prop:"uid"},{label:"手机号",prop:"phone"},{label:"邮箱",prop:"eamil"},{label:"实名状态",prop:"verifiedStatus",width:100,type:"filter",show_type:"text",filters:[{text:"未认证",val:0},{text:"已认证",val:1}]},{label:"入金状态",prop:"inGoldCountStatus",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"登录IP",prop:"loginIp"},{label:"注册IP",prop:"registeredIp"},{label:"注册时间",prop:"registeredTime"}],d=[{label:"订单号",prop:"orderId"},{label:"需迁移的UID",prop:"changeUid"},{label:"原上级的UID",prop:"formerParentUid"},{label:"迁移至的UID",prop:"laterParentUid"},{label:"状态",prop:"auditStatus",width:90,type:"filter",show_type:"text",filters:[{val:0,text:"待初审"},{val:1,text:"待复审"},{val:2,text:"初审驳回"},{val:3,text:"复审通过"},{val:4,text:"复审驳回"}]},{label:"提交时间",prop:"createTime"},{label:"初审时间",prop:"firstAuditTime"},{label:"初审人",prop:"firstAuditUserName"},{label:"复审时间",prop:"reviewAuditTime"},{label:"复审人",prop:"reviewAuditUserName"},{label:"操作",prop:"action",type:"action",width:"240",btnGroup:[{label:"初审",fn:"firstTrial",filter_type:"array",filter_key:"auditStatus",filter_status:["0"],type:"success",alias:"firstTrial"},{label:"复审",fn:"recheck",filter_type:"array",filter_key:"auditStatus",filter_status:["1"],type:"success",alias:"recheck"},{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],y=[{label:"订单号",prop:"orderId"},{label:"需迁移的UID",prop:"changeUid"},{label:"原上级的UID",prop:"formerParentUid"},{label:"迁移至的UID",prop:"laterParentUid"},{label:"状态",prop:"auditStatus",width:90,type:"filter",show_type:"text",filters:[{val:0,text:"待初审"},{val:1,text:"待复审"},{val:2,text:"初审驳回"},{val:3,text:"复审通过"},{val:4,text:"复审驳回"}]},{label:"提交时间",prop:"createTime"},{label:"初审时间",prop:"firstAuditTime"},{label:"初审人",prop:"firstAuditUserName"},{label:"复审时间",prop:"reviewAuditTime"},{label:"复审人",prop:"reviewAuditUserName"}],c=[{type:"date_rank",label:"时间",prop:"startCreateTime",prop2:"endCreateTime",value:""},{type:"onlyNumber",label:"订单号",prop:"orderId",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"需迁移的UID",prop:"changeUid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"原上级的UID",prop:"formerParentUid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"迁移至的UID",prop:"laterParentUid",value:"",placeHolder:"请输入"},{type:"select",label:"状态",prop:"auditStatus",value:"",list:[{value:0,label:"待初审"},{value:1,label:"待复审"},{value:2,label:"初审驳回"},{value:3,label:"复审通过"},{value:4,label:"复审驳回"}]}],x=[{label:"异常设备号",prop:"devNo"},{label:"异常注册IP",prop:"registerIp"},{label:"异常登录IP",prop:"loginIp"},{label:"迁移至的UID",prop:"laterParentUid"},{label:"当前状态",prop:"disposeStatus",width:90,type:"filter",show_type:"text",filters:[{val:0,text:"待处理"},{val:1,text:"异常处理"},{val:2,text:"正常处理"}]},{label:"创建时间",prop:"createTime"},{label:"处理时间",prop:"disposeTime"},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:"240",btnGroup:[{filter_type:"array",label:"编辑",filter_key:"disposeStatus",filter_status:["0"],fn:"edit",type:"primary",alias:"edit"},{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],f=[{label:"异常设备号",prop:"devNo"},{label:"异常注册IP",prop:"registerIp"},{label:"异常登录IP",prop:"loginIp"},{label:"迁移至的UID",prop:"laterParentUid"},{label:"当前状态",prop:"disposeStatus",width:90,type:"filter",show_type:"text",filters:[{val:0,text:"待处理"},{val:1,text:"异常处理"},{val:2,text:"正常处理"}]},{label:"创建时间",prop:"createTime"},{label:"处理时间",prop:"disposeTime"},{label:"更新时间",prop:"updateTime"}],h=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"异常注册IP",prop:"registerIp",value:"",placeHolder:"请输入"},{type:"text",label:"异常登录ip",prop:"loginIp",value:"",placeHolder:"请输入"},{type:"select",label:"当前状态",prop:"disposeStatus",value:"",list:[{value:0,label:"待处理"},{value:1,label:"异常处理"},{value:2,label:"正常处理"}]}]},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,l){"use strict";l.d(t,"a",(function(){return p}));l("28a5"),l("f576"),l("a481"),l("6b54");var a=l("7618");function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var l,p=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?l=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),l=new Date(e));var r={y:l.getFullYear(),m:l.getMonth()+1,d:l.getDate(),h:l.getHours(),i:l.getMinutes(),s:l.getSeconds(),a:l.getDay()},i=p.replace(/{([ymdhisa])+}/g,(function(e,t){var l=r[t];return"a"===t?["日","一","二","三","四","五","六"][l]:l.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},ff53:function(e,t,l){"use strict";var a=l("75fc");l("9278"),l("87f3"),l("a481"),l("6b54"),l("28a5"),l("c5f6");function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function r(e){var t=e.toString().split(/[eE]/),l=(t[0].split(".")[1]||"").length-+(t[1]||0);return l>0?l:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=r(e);return t>0?p(Number(e)*Math.pow(10,t)):Number(e)}function o(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function u(e,t){for(var l=arguments.length,p=new Array(l>2?l-2:0),n=2;n<l;n++)p[n-2]=arguments[n];if(p.length>0)return u.apply(void 0,[u(e,t),p[0]].concat(Object(a["a"])(p.slice(1))));var s=i(e),b=i(t),v=r(e)+r(t),d=s*b;return o(d),d/Math.pow(10,v)}function n(e,t){for(var l=arguments.length,p=new Array(l>2?l-2:0),i=2;i<l;i++)p[i-2]=arguments[i];if(p.length>0)return n.apply(void 0,[n(e,t),p[0]].concat(Object(a["a"])(p.slice(1))));var o=Math.pow(10,Math.max(r(e),r(t)));return(u(e,o)+u(t,o))/o}function s(e,t){for(var l=arguments.length,p=new Array(l>2?l-2:0),i=2;i<l;i++)p[i-2]=arguments[i];if(p.length>0)return s.apply(void 0,[s(e,t),p[0]].concat(Object(a["a"])(p.slice(1))));var o=Math.pow(10,Math.max(r(e),r(t)));return(u(e,o)-u(t,o))/o}function b(e,t){for(var l=arguments.length,n=new Array(l>2?l-2:0),s=2;s<l;s++)n[s-2]=arguments[s];if(n.length>0)return b.apply(void 0,[b(e,t),n[0]].concat(Object(a["a"])(n.slice(1))));var v=i(e),d=i(t);return o(v),o(d),u(v/d,p(Math.pow(10,r(t)-r(e))))}function v(e,t){var l=Math.pow(10,t);return b(Math.round(u(e,l)),l)}var d=!0;function y(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:p,plus:n,minus:s,times:u,divide:b,round:v,digitLength:r,float2Fixed:i,enableBoundaryChecking:y}}}]);