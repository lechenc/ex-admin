(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4465b4c","chunk-2d0a347b"],{"0203":function(e,t,a){"use strict";a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return f})),a.d(t,"f",(function(){return x})),a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h})),a.d(t,"c",(function(){return v})),a.d(t,"g",(function(){return l})),a.d(t,"i",(function(){return r})),a.d(t,"k",(function(){return i})),a.d(t,"j",(function(){return o})),a.d(t,"h",(function(){return s})),a.d(t,"m",(function(){return p})),a.d(t,"n",(function(){return n})),a.d(t,"o",(function(){return u})),a.d(t,"l",(function(){return d})),a.d(t,"p",(function(){return c}));var l=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",width:120,type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"系统用户",val:100},{text:"机器人",val:3},{text:"分析师",val:41},{text:"CPT用户",val:4},{val:2,text:"后台管理员用户"},{val:101,text:"收益账号"},{val:102,text:"成本账号"},{val:103,text:"支出账号"},{val:104,text:"支出子账号"},{val:105,text:"收入账号"},{val:106,text:"合约收益账号"},{val:20,text:"TP商户账号"},{val:21,text:"顶级代理商账号"},{val:22,text:"代理商账号"},{val:23,text:"平台商户账号"},{val:24,text:"顶级广告商"},{val:25,text:"广告商代理"},{val:31,text:"商务"},{val:32,text:"代理"}]},{label:"注册来源",prop:"registAppId",type:"filter",show_type:"text",width:"120",filters:[{text:"IOS",val:1},{text:"安卓",val:2},{text:"PC",val:3},{text:"CPT",val:10}]},{label:"手机",prop:"phone",width:"150"},{label:"邮箱",prop:"email",width:"200"},{label:"姓名",prop:"realName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo",width:"200"},{label:"昵称",prop:"nickName"},{label:"头像页",prop:"cardFrontUrl",type:"img"},{label:"国徽页",prop:"cardBackUrl",type:"img"},{label:"录制视频",prop:"videoUrl",type:"video"},{label:"邀请人UID",prop:"inviterUid"},{label:"邀请码",prop:"inviteCode"},{label:"邀请下级人数",prop:"sonCount",prop2:"sonColor",type:"textOneColor"},{label:"设备号",prop:"deviceToken",width:150},{label:"版本号",prop:"loginVersionNum",width:110},{label:"注册IP",prop:"registerIp",width:130},{label:"登录IP",prop:"loginIp",width:150},{label:"用户上次使用时长",prop:"userUsedTime",prop2:"timeColor",width:150,type:"textColor"},{label:"用户累计使用时长",prop:"userActiveTime",prop2:"timeColor",width:150,type:"textColor"},{label:"实名认证来源",prop:"verifiedSource",type:"filter_myShowHide",filtersProp:"userVerifiedStatus",filtersValue:[0,1,3],filters:[{text:"平台",val:1},{text:"阿里",val:2}]},{label:"实名审核状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",width:"120",filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"登录状态",prop:"userLoginStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:0,type:"success"},{text:"失效",val:1,type:"warning"}]},{label:"交易状态",prop:"userTradeStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"法币状态",prop:"userOtcStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"提币状态",prop:"userWithdrawStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"注册时间",prop:"registerTime",width:"100"},{label:"操作",prop:"action",type:"action",width:"120",btnGroup:[{label:"查看/编辑",fn:"viewDetail",type:"primary",alias:"detail"},{label:"编辑",fn:"edit",type:"noVisible",alias:"edit"}]}],r=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",width:120,type:"filter",show_type:"text",filters:[{text:"普通用户",val:1},{text:"系统用户",val:100},{text:"机器人",val:3},{text:"分析师",val:41},{text:"CPT用户",val:4},{val:2,text:"后台管理员用户"},{val:101,text:"收益账号"},{val:102,text:"成本账号"},{val:103,text:"支出账号"},{val:104,text:"支出子账号"},{val:105,text:"收入账号"},{val:106,text:"合约收益账号"},{val:20,text:"TP商户账号"},{val:21,text:"顶级代理商账号"},{val:22,text:"代理商账号"},{val:23,text:"平台商户账号"},{val:24,text:"顶级广告商"},{val:25,text:"广告商代理"},{val:31,text:"商务"},{val:32,text:"代理"}]},{label:"注册来源",prop:"registAppId",type:"filter",show_type:"text",width:"120",filters:[{text:"IOS=",val:1},{text:"安卓",val:2},{text:"PC",val:3},{text:"CPT",val:10}]},{label:"手机",prop:"phone",width:"150"},{label:"邮箱",prop:"email",width:"200"},{label:"姓名",prop:"realName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo",width:"200"},{label:"昵称",prop:"nickName"},{label:"头像页",prop:"cardFrontUrl",type:"img"},{label:"国徽页",prop:"cardBackUrl",type:"img"},{label:"录制视频",prop:"videoUrl",type:"video"},{label:"邀请人UID",prop:"inviterUid"},{label:"邀请码",prop:"inviteCode"},{label:"邀请下级人数",prop:"sonCount",prop2:"sonColor",type:"textOneColor"},{label:"设备号",prop:"deviceToken",width:150},{label:"版本号",prop:"loginVersionNum",width:110},{label:"注册IP",prop:"registerIp",width:130},{label:"登录IP",prop:"loginIp",width:150},{label:"用户上次使用时长",prop:"userUsedTime",prop2:"timeColor",width:150,type:"textColor"},{label:"用户累计使用时长",prop:"userActiveTime",prop2:"timeColor",width:150,type:"textColor"},{label:"实名认证来源",prop:"verifiedSource",type:"filter",show_type:"text",width:"120",filters:[{text:"平台",val:1},{text:"阿里",val:2}]},{label:"实名审核状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",width:"120",filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"登录状态",prop:"userLoginStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:0,type:"success"},{text:"失效",val:1,type:"warning"}]},{label:"交易状态",prop:"userTradeStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"法币状态",prop:"userOtcStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"提币状态",prop:"userWithdrawStatus",width:90,type:"filter",show_type:"text",filters:[{text:"正常",val:1,type:"success"},{text:"失效",val:0,type:"warning"}]},{label:"注册时间",prop:"registerTime",width:"100"}],i=[{type:"date_rank",label:"注册时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"用户类型",prop:"userType",value:"",list:[{label:"普通用户",value:1},{label:"系统用户",value:100},{label:"机器人",value:3},{label:"分析师",value:41},{label:"CPT用户",value:4},{value:2,label:"后台管理员用户"},{value:101,label:"收益账号"},{value:102,label:"成本账号"},{value:103,label:"支出账号"},{value:104,label:"支出子账号"},{value:105,label:"收入账号"},{value:106,label:"合约收益账号"},{value:20,label:"TP商户账号"},{value:21,label:"顶级代理商账号"},{value:22,label:"代理商账号"},{value:23,label:"平台商户账号"},{value:24,label:"顶级广告商"},{value:25,label:"广告商代理"},{value:31,label:"商务"},{value:32,label:"代理"}]},{type:"select",label:"注册来源",prop:"registAppId",value:"",list:[{label:"IOS",value:1},{label:"安卓",value:2},{label:"PC",value:3},{label:"CPT",value:10}]},{type:"text",label:"手机",prop:"phone",value:"",placeHolder:"请输入"},{type:"text",label:"邮箱",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"姓名",prop:"realName",value:"",placeHolder:"请输入"},{type:"text",label:"身份证号码",prop:"cardNo",value:"",placeHolder:"请输入"},{type:"text",label:"邀请码",prop:"inviteCode",value:"",placeHolder:"请输入"},{type:"select",label:"实名审核状态",prop:"verifiedAudit",value:"",list:[{label:"高级待审核",value:0},{label:"初级认证成功",value:1},{label:"高级认证失败",value:2},{label:"未认证",value:3},{label:"高级认证成功",value:4}]},{type:"select",label:"登录状态",prop:"userLoginStatus",value:"",list:[{label:"正常",value:0},{label:"失效",value:1}]},{type:"select",label:"提币状态",prop:"userWithdrawStatus",value:"",list:[{label:"正常",value:1},{label:"失效",value:0}]},{type:"text",label:"设备号",prop:"deviceToken",value:"",placeHolder:"请输入"},{type:"text",label:"版本号",prop:"loginVersionNum",value:"",placeHolder:"请输入"},{type:"text",label:"登录IP",prop:"loginIp",value:"",placeHolder:"请输入"},{type:"text",label:"注册IP",prop:"registerIp",value:"",placeHolder:"请输入"},{type:"select",label:"交易状态",prop:"userTradeStatus",value:"",list:[{label:"正常",value:1},{label:"失效",value:0}]},{type:"select",label:"法币状态",prop:"userOtcStatus",value:"",list:[{label:"正常",value:1},{label:"失效",value:0}]},{type:"onlyNumber",label:"邀请人UID",prop:"inviterUid",value:"",placeHolder:"请输入"}],o=[{label:"支付方式",prop:"payTypeName"},{label:"姓名",prop:"realName"},{label:"账号",prop:"num"},{label:"银行名称",prop:"bankName"},{label:"支行名称",prop:"bankBranch"},{label:"二维码",prop:"qrCode",type:"img"},{label:"是否启用",prop:"isShow",width:100,type:"filter",show_type:"text",filters:[{text:"未启用",val:0},{text:"启用",val:1}]}],s=[{label:"币种",prop:"coinName"},{label:"币币当前余额可用",prop:"tradeAmount"},{label:"币币当前余额冻结",prop:"tradeFrozenAmount"},{label:"币币累计入金",prop:"tradeIn"},{label:"币币累计出金",prop:"tradeOut"},{label:"币币累计交易手续费",prop:"tradeFeeAmount"},{label:"法币当前余额可用",prop:"otcAmount"},{label:"法币当前余额冻结",prop:"otcFrozenAmount"},{label:"法币累计入金",prop:"otcIn"},{label:"法币累计出金",prop:"otcOut"},{label:"法币累计交易手续费",prop:"otcFeeAmount"},{label:"合约账户当前总余额",prop:"contractTotalBalance"},{label:"合约累计净入金",prop:"contractIn"},{label:"合约累计产生手续费金额",prop:"contractFee"},{label:"合约累计交易产生盈亏",prop:"contractCloseProfit"},{label:"合约累计获得手续费返佣",prop:"contractCommission"},{label:"合约累计获得团队长返佣",prop:"contractTeamCommission"},{label:"币币与法币净出入金合计",prop:"total"}],p=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",width:100,type:"filter",show_type:"text",filters:[{val:1,text:"普通用户"},{val:20,text:"TP商户账号"},{val:21,text:"顶级代理商账号"},{val:22,text:"代理商账号"},{val:24,text:"顶级广告商"},{val:25,text:"广告商代理"},{val:31,text:"商务端"},{val:32,text:"代理"}]},{label:"手机",prop:"phone",width:"150"},{label:"邮箱",prop:"email",width:"200"},{label:"姓名",prop:"realName"},{label:"邀请人UID",prop:"inviterUid"},{label:"邀请码",prop:"inviteCode"},{label:"邀请下级人数",prop:"sonCount"},{label:"实名状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",width:120,filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"入金状态",prop:"depositStatus",width:90,type:"filter",show_type:"text",filters:[{text:"初级",val:1},{text:"中级",val:2},{text:"高级",val:3},{text:"超级",val:4}]},{label:"是否尊贵会员",prop:"userFlag",width:90,type:"filter",show_type:"text",filters:[{text:"是",val:1},{text:"否",val:0}]},{label:"当前资产",prop:"amount",width:"100"},{label:"7天资产动向",prop:"sevenDaysAmount",width:"100"},{label:"15天资产动向",prop:"fifteenDaysAmount",width:"100"},{label:"30天资产动向",prop:"thirtyDaysAmount",width:"100"},{label:"注册时间",prop:"registerTime",type:"time"},{label:"操作",prop:"action",type:"action",width:"120",btnGroup:[{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],n=[{label:"UID",prop:"uid"},{label:"用户类型",prop:"userType",width:100,type:"filter",show_type:"text",filters:[{val:1,text:"普通用户"},{val:20,text:"TP商户账号"},{val:21,text:"顶级代理商账号"},{val:22,text:"代理商账号"},{val:24,text:"顶级广告商"},{val:25,text:"广告商代理"},{val:31,text:"商务端"},{val:32,text:"代理"}]},{label:"手机",prop:"phone",width:"150"},{label:"邮箱",prop:"email",width:"200"},{label:"姓名",prop:"realName"},{label:"邀请人UID",prop:"inviterUid"},{label:"邀请码",prop:"inviteCode"},{label:"邀请下级人数",prop:"sonCount"},{label:"实名状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",width:120,filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"入金状态",prop:"depositStatus",width:90,type:"filter",show_type:"text",filters:[{text:"初级",val:1},{text:"中级",val:2},{text:"高级",val:3},{text:"超级",val:4}]},{label:"是否尊贵会员",prop:"userFlag",width:90,type:"filter",show_type:"text",filters:[{text:"是",val:1},{text:"否",val:0}]},{label:"当前资产",prop:"amount",width:"100"},{label:"7天资产动向",prop:"sevenDaysAmount",width:"100"},{label:"15天资产动向",prop:"fifteenDaysAmount",width:"100"},{label:"30天资产动向",prop:"thirtyDaysAmount",width:"100"},{label:"注册时间",prop:"registerTime",type:"time"}],u=[{type:"date_rank",label:"注册时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"用户类型",prop:"userType",value:"",list:[{label:"普通用户",value:1},{value:20,label:"TP商户账号"},{value:21,label:"顶级代理商账号"},{value:22,label:"代理商账号"},{value:24,label:"顶级广告商"},{value:25,label:"广告商代理"},{value:31,label:"商务端"},{value:32,label:"代理"}]},{type:"select",label:"实名状态",prop:"verifiedAudit",value:"",list:[{label:"高级待审核",value:0},{label:"初级认证成功",value:1},{label:"高级认证失败",value:2},{label:"未认证",value:3},{label:"高级认证成功",value:4}]},{type:"onlyNumber",label:"手机",prop:"phone",value:"",placeHolder:"请输入"},{type:"text",label:"邮箱",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"姓名",prop:"realName",value:"",placeHolder:"请输入"},{type:"text",label:"证据号码",prop:"cardNo",value:"",placeHolder:"请输入"},{type:"text",label:"邀请码",prop:"inviteCode",value:"",placeHolder:"请输入"},{type:"select",label:"入金状态",prop:"depositStatus",value:"",list:[{label:"初级",value:1},{label:"中级",value:2},{label:"高级",value:3},{label:"超级",value:4}]},{type:"text_rank_number",label:"当前资产",prop:"amountMin",prop2:"amountMax",value:[],placeHolder:"请输入"},{type:"select",label:"资产排序",prop:"sort",value:"",list:[{label:"正序",value:1},{label:"倒序",value:2}]},{type:"select",label:"是否尊贵会员",prop:"userFlag",value:"",list:[{label:"是",value:1},{label:"否",value:0}]}],d=[{label:"币种",prop:"coinName"},{label:"总充币",prop:"rechargeAmount"},{label:"总提币",prop:"withdrawAmount"},{label:"空投",prop:"airdropAmount"},{label:"买入数量",prop:"buyQuantity"},{label:"卖出数量",prop:"sellQuantity"},{label:"买入金额",prop:"buyAmount"},{label:"卖出金额",prop:"sellAmount"},{label:"总数量",prop:"totalQuantity"},{label:"盈亏",prop:"totalAmount"},{label:"操作",prop:"action",type:"action",width:"120",btnGroup:[{label:"成交记录",fn:"record",type:"primary"}]}],c=[{label:"序号",type:"index",width:80},{label:"UID",prop:"uid"},{label:"手机号",prop:"phone"},{label:"邮箱",prop:"eamil"},{label:"实名状态",prop:"verifiedStatus",width:100,type:"filter",show_type:"text",filters:[{text:"未认证",val:0},{text:"已认证",val:1}]},{label:"入金状态",prop:"inGoldCountStatus",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"登录IP",prop:"loginIp"},{label:"注册IP",prop:"registeredIp"},{label:"注册时间",prop:"registeredTime"}],b=[{label:"订单号",prop:"orderId"},{label:"需迁移的UID",prop:"changeUid"},{label:"原上级的UID",prop:"formerParentUid"},{label:"迁移至的UID",prop:"laterParentUid"},{label:"状态",prop:"auditStatus",width:90,type:"filter",show_type:"text",filters:[{val:0,text:"待初审"},{val:1,text:"待复审"},{val:2,text:"初审驳回"},{val:3,text:"复审通过"},{val:4,text:"复审驳回"}]},{label:"提交时间",prop:"createTime"},{label:"初审时间",prop:"firstAuditTime"},{label:"初审人",prop:"firstAuditUserName"},{label:"复审时间",prop:"reviewAuditTime"},{label:"复审人",prop:"reviewAuditUserName"},{label:"操作",prop:"action",type:"action",width:"240",btnGroup:[{label:"初审",fn:"firstTrial",filter_type:"array",filter_key:"auditStatus",filter_status:["0"],type:"success",alias:"firstTrial"},{label:"复审",fn:"recheck",filter_type:"array",filter_key:"auditStatus",filter_status:["1"],type:"success",alias:"recheck"},{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],h=[{label:"订单号",prop:"orderId"},{label:"需迁移的UID",prop:"changeUid"},{label:"原上级的UID",prop:"formerParentUid"},{label:"迁移至的UID",prop:"laterParentUid"},{label:"状态",prop:"auditStatus",width:90,type:"filter",show_type:"text",filters:[{val:0,text:"待初审"},{val:1,text:"待复审"},{val:2,text:"初审驳回"},{val:3,text:"复审通过"},{val:4,text:"复审驳回"}]},{label:"提交时间",prop:"createTime"},{label:"初审时间",prop:"firstAuditTime"},{label:"初审人",prop:"firstAuditUserName"},{label:"复审时间",prop:"reviewAuditTime"},{label:"复审人",prop:"reviewAuditUserName"}],v=[{type:"date_rank",label:"时间",prop:"startCreateTime",prop2:"endCreateTime",value:""},{type:"onlyNumber",label:"订单号",prop:"orderId",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"需迁移的UID",prop:"changeUid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"原上级的UID",prop:"formerParentUid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"迁移至的UID",prop:"laterParentUid",value:"",placeHolder:"请输入"},{type:"select",label:"状态",prop:"auditStatus",value:"",list:[{value:0,label:"待初审"},{value:1,label:"待复审"},{value:2,label:"初审驳回"},{value:3,label:"复审通过"},{value:4,label:"复审驳回"}]}],m=[{label:"异常类型",prop:"limitType",width:160,type:"filter",show_type:"text",filters:[{val:0,text:"异常设备"},{val:1,text:"异常注册IP"},{val:2,text:"异常登录"}]},{label:"异常数据",prop:"serialNumber"},{label:"当前状态",prop:"disposeStatus",width:160,type:"filter",show_type:"text",filters:[{val:0,text:"待处理"},{val:1,text:"已按异常处理"},{val:2,text:"已按正常处理"}]},{label:"创建时间",prop:"createTime"},{label:"处理时间",prop:"disposeTime"},{label:"操作",prop:"action",type:"action",width:"200",btnGroup:[{filter_type:"array",label:"编辑",filter_key:"disposeStatus",filter_status:["0"],fn:"edit",type:"primary",alias:"edit"},{label:"查看详情",fn:"detail",type:"primary",alias:"detail"}]}],f=[{label:"异常类型",prop:"limitType",width:90,type:"filter",show_type:"text",filters:[{val:0,text:"异常设备"},{val:1,text:"异常注册IP"},{val:2,text:"异常登录"}]},{label:"异常数据",prop:"serialNumber"},{label:"当前状态",prop:"disposeStatus",width:90,type:"filter",show_type:"text",filters:[{val:0,text:"待处理"},{val:1,text:"已按异常处理"},{val:2,text:"已按正常处理"}]},{label:"创建时间",prop:"createTime"},{label:"处理时间",prop:"disposeTime"}],x=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"异常类型",prop:"limitType",value:"",list:[{value:0,label:"异常设备"},{value:1,label:"异常注册IP"},{value:2,label:"异常登录"}]},{type:"select",label:"当前状态",prop:"disposeStatus",value:"",list:[{value:0,label:"待处理"},{value:1,label:"已按异常处理"},{value:2,label:"已按正常处理"}]}]},"259f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"extract-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,excelLoading:e.excelLoading,exportExcel:!0,calLoading:e.calLoading,calTotal:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel,"do-calTotal":e.calTotal}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"760px",title:e.reviewTitle},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"reviewForm",attrs:{model:e.reviewForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"订单号","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.id))])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"UID","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.uid))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"币种","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.coinName))])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币数量","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.amount))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手续费","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.fee))])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"到账数量","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.realAmount))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币地址","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.toAddress))])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币二维码","label-width":e.formLabelWidth}},[a("div",{staticStyle:{width:"150px",height:"150px"}},[a("vue-qr",{attrs:{text:e.handleData.toAddress,margin:0,colorDark:"#000",colorLight:"#fff",size:150}})],1)])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"地址类型","label-width":e.formLabelWidth}},[e._v(e._s(1==e.handleData.isOwn?"内部交易":0==e.handleData.isOwn?"涉外交易":""))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币时间","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.createTime))])],1)],1),e._v(" "),a("el-row"),e._v(" "),a("el-form-item",{attrs:{label:"订单状态","label-width":e.formLabelWidth}},[e._v(e._s(e._f("fStatus")(e.handleData.tradeStatus)))]),e._v(" "),a("el-row"),e._v(" "),parseInt(e.handleData.tradeStatus)>2||1==parseInt(e.handleData.tradeStatus)?a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"初审时间","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.firstAuditTime))])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"初审人","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.firstAuditUserName))])],1)],1):e._e(),e._v(" "),(parseInt(e.handleData.tradeStatus)>3||1==parseInt(e.handleData.tradeStatus))&&4!=parseInt(e.handleData.tradeStatus)?a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"复审时间","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.reviewAuditTime))])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"复审人","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.reviewAuditUserName))])],1)],1):e._e(),e._v(" "),a("el-row"),e._v(" "),"nextReview"===e.handleStatus?[a("el-form-item",{attrs:{label:"txId",prop:"txId","label-width":e.formLabelWidth}},[a("el-input",{attrs:{size:"medium"},model:{value:e.reviewForm.txId,callback:function(t){e.$set(e.reviewForm,"txId",t)},expression:"reviewForm.txId"}})],1)]:e._e(),e._v(" "),[1==parseInt(e.handleData.tradeStatus)?a("el-form-item",{attrs:{label:"Txid","label-width":e.formLabelWidth}},[a("span",[e._v(e._s(e.handleData.txId)+" ")]),e._v(" "),e.isModify?a("el-input",{attrs:{disabled:!0},model:{value:e.handleData.txId,callback:function(t){e.$set(e.handleData,"txId",t)},expression:"handleData.txId"}}):e._e()],1):e._e()],e._v(" "),e.handleData.tradeStatus>2||1==parseInt(e.handleData.tradeStatus)?a("el-form-item",{attrs:{label:"初审备注","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.firstRemark))]):e._e(),e._v(" "),(e.handleData.tradeStatus>3||1==parseInt(e.handleData.tradeStatus))&&4!=parseInt(e.handleData.tradeStatus)?a("el-form-item",{attrs:{label:"复审备注","label-width":e.formLabelWidth}},[e._v(e._s(e.handleData.reviewRemark))]):e._e()],2),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading,disabled:e.buttonDisabled},on:{click:function(t){return t.stopPropagation(),e.confirmReview(t)}}},[e._v(e._s(e.confirmText))])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.rejectVisible,width:"500px",title:"驳回"},on:{"update:visible":function(t){e.rejectVisible=t}}},[a("el-form",{ref:"rejectForm",attrs:{model:e.rejectForm,rules:e.rejectRules}},[a("el-form-item",{attrs:{label:"驳回理由",prop:"mark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入拒绝理由"},model:{value:e.rejectForm.mark,callback:function(t){e.$set(e.rejectForm,"mark",t)},expression:"rejectForm.mark"}})],1)],1),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.rejectVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.rejLoading},on:{click:function(t){return t.stopPropagation(),e.confirmReject(t)}}},[e._v("驳回")])],1)],1),e._v(" "),a("el-dialog",{attrs:{width:"1000px",visible:e.dialogTableVisible,title:"用户出入金统计"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("Btable",{attrs:{listLoading:e.inOutGoldListLoading,data:e.inOutGoldList,configs:e.inOutGoldConfigs}})],1),e._v(" "),a("el-dialog",{attrs:{title:"验证收款码",visible:e.qrcodeShow,width:"500px"},on:{"update:visible":function(t){e.qrcodeShow=t}}},[a("div",{staticStyle:{"padding-left":"20px",width:"100%"}},[a("vue-qr",{attrs:{text:e.analysisQrCode,margin:0,colorDark:"#000",colorLight:"#fff",size:420}})],1)])],1)},r=[],i=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),o=a("658f"),s=a.n(o),p=a("c249"),n=a("2fee"),u=a("f21b"),d=a("f9e1"),c=a("0203"),b=a("4ec3"),h=a("ca00"),v={name:"ExtractForeign",components:{Btable:n["a"],Bsearch:p["a"],vueQr:s.a,iconPage:u["a"]},data:function(){return{inOutGoldListLoading:!1,inOutGoldList:[],inOutGoldConfigs:[],dialogTableVisible:!1,listLoading:!1,btnLoading:!1,rejLoading:!1,excelLoading:!1,calLoading:!1,isModify:!1,list:[],dataList:[],toDay:"",ago:"",configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,formLabelWidth:"120px",handleStatus:"",handleData:{},dialogVisible:!1,confirmText:"",reviewTitle:"",reviewForm:{txId:"",mark:""},rules:{txId:[{required:!0,message:"必填",trigger:"blur"}]},rejectVisible:!1,rejectForm:{mark:""},rejectRules:{mark:[{required:!0,message:"必填",trigger:"blur"}]},analysisQrCode:"",qrcodeShow:!1,buttonDisabled:!0,dialogUser:!1}},filters:{fStatus:function(e){var t="";switch(e){case 0:t="待审核";break;case 1:t="成功";break;case 2:t="失败";break;case 3:t="初步审核成功";break;case 4:t="初步审核失败";break;case 5:t="划转待确认";break;case 6:t="充币确认中";break}return t}},methods:{getInOutGoldListFunc:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){var l,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.inOutGoldListLoading){e.next=2;break}return e.abrupt("return");case 2:return l=t?{userId:t}:{uid:a},this.inOutGoldListLoading=!0,e.next=6,b["a"].apiGetInOutGoldList(l);case 6:r=e.sent,r?(i=r.data.data,i&&i.length>0&&(this.inOutGoldList=i)):this.inOutGoldList=[],this.inOutGoldListLoading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),doHandle:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,l,r,i,o,s,p,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.fn,l=t.row,this.handleStatus=a,this.handleData=l,console.log(123123123),"preReview"!==a&&"nextReview"!==a){e.next=24;break}if(console.log(a),this.reviewTitle="preReview"===a?"提币初审":"提币复审",this.confirmText="preReview"===a?"初审通过":"复审通过","preReview"!==a){e.next=20;break}return r=l.chainName,i=l.coinName,o=l.amount,e.next=12,b["a"].checkAmountWithHot({chainName:r,coinName:i,amount:o});case 12:s=e.sent,console.log(s),this.dialogUser=Boolean(s),console.log(this.dialogUser),this.openReviewDialog(),this.buttonDisabled=!1,e.next=22;break;case 20:this.buttonDisabled=!1,this.openReviewDialog();case 22:e.next=25;break;case 24:"preReject"===a||"nextReject"===a?this.openRejectDialog():"detail"===a?(this.reviewTitle="提币详情",this.confirmText="确定",this.openReviewDialog()):"showqr"===a?this.verify(l):"inOutGoldList"===a&&(this.dialogTableVisible=!0,p=l.userId,n=l.uid,this.getInOutGoldListFunc(p,n));case 25:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),openReviewDialog:function(){var e=this;this.dialogVisible=!0,this.$nextTick((function(){e.reviewForm={txId:"",mark:""},e.$refs["reviewForm"].resetFields()}))},openRejectDialog:function(){var e=this;this.rejectVisible=!0,this.$nextTick((function(){e.rejectForm={mark:""},e.$refs["rejectForm"].resetFields()}))},confirmReject:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.buttonDisabled){e.next=2;break}return e.abrupt("return");case 2:this.$refs["rejectForm"].validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var l,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return l={firstOrReview:"preReject"===t.handleStatus?1:2,auditStatus:2,auditOpinion:t.rejectForm.mark,id:t.handleData.id,txid:t.handleData.txId},t.rejLoading=!0,e.next=5,b["a"].auditWithdraw(l);case 5:r=e.sent,r&&(t.$message({message:"preReject"===t.handleStatus?"初审驳回成功":"复审驳回成功",type:"success"}),t.rejectVisible=!1,t.getList()),t.rejLoading=!1;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirmReview:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("detail"!==this.handleStatus){e.next=3;break}return this.dialogVisible=!1,e.abrupt("return");case 3:t=function(){a.$refs["reviewForm"].validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var l,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return l={firstOrReview:"preReview"===a.handleStatus?1:2,auditStatus:1,auditOpinion:"审核通过",id:a.handleData.id},"nextReview"===a.handleStatus&&(l.txId=a.reviewForm.txId),a.btnLoading=!0,e.next=6,b["a"].auditWithdraw(l);case 6:r=e.sent,r&&(a.$message({message:"preReview"===a.handleStatus?"初审成功":"复审成功",type:"success"}),a.dialogVisible=!1,a.getList()),a.btnLoading=!1;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},this.dialogUser?t():this.$confirm("当前热钱包余额不足,是否继续审核通过,通过后该笔提币将进入热钱包处理队列,当余额补足后,热钱包将自动打币【注：请及时联系财务协助处理】","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t()})).catch((function(){a.dialogVisible=!1}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),verify:function(e){this.analysisQrCode=e.toAddress,this.qrcodeShow=!0},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},exportExcel:function(e){this.search_params_obj=e.query;var t=e.num;h["a"].exportData.apply(this,[t])},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},calTotal:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,l,r,i,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.search_params_obj.coinId){e.next=5;break}return this.$message({type:"error",message:"币种必须选择!",duration:2e3}),e.abrupt("return");case 5:return this.calLoading=!0,a={isOwn:0},this.requiredParams(a),a.appId=0,Object.assign(a,this.search_params_obj),e.next=12,b["a"].getWithdrawSum(a);case 12:l=e.sent,l&&(r=l.data.data,r?(i=this.searchCofig[2]["list"].filter((function(e){return e.value==o.search_params_obj.coinId}))[0].label,this.$alert("<p>币种：".concat(i,"</p><p>提币数量总计：").concat(r.amountSum,"</p><p>手续费总计：").concat(r.feeSum,"</p><p>到账数量总计：").concat(r.realAmountSum,"</p>"),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){}))):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,l,r,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize,isOwn:0,appId:0},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,b["a"].getWithdrawList(t);case 8:a=e.sent,a&&(l=a.data.data,r=l.records,i=l.total,o=l.current,s=l.pages,this.total=i,this.pages=s,this.current_page=o,this.list=r,this.dataList=r),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),queryData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,t.isOwn=0,t.appId=0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=7,b["a"].getWithdrawList(t);case 7:return a=e.sent,this.excelLoading=!1,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},requiredParams:function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");e.endTime=a.replace(/\//gi,"-"),e.startTime=t.replace(/\//gi,"-"),this.searchCofig[0].value=[t,a]}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},getRechargeChainName:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].apiGetRechargeChainName({});case 2:t=e.sent,t&&(a=t.data.data,this.searchCofig[5]["list"]=a.map((function(e){return{label:e.chainName,value:e.chainName}})));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this,t=this.$util.getAuthority("ExtractForeign",d["m"],d["n"]);this.configs=t.val,this.inOutGoldConfigs=c["h"],this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(d["o"]),this.$store.dispatch("common/getCoinList").then((function(){e.searchCofig[2]["list"]=e.$store.state.common.coinlist})),this.getList(),this.getRechargeChainName()}},m=v,f=(a("a49b"),a("0c7c")),x=Object(f["a"])(m,l,r,!1,null,null,null);t["default"]=x.exports},a262:function(e,t,a){},a49b:function(e,t,a){"use strict";var l=a("a262"),r=a.n(l);r.a}}]);