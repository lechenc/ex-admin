(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e9c2238"],{c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},cebb:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return p})),a.d(t,"f",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"n",(function(){return y})),a.d(t,"p",(function(){return m})),a.d(t,"o",(function(){return v})),a.d(t,"i",(function(){return u})),a.d(t,"k",(function(){return b})),a.d(t,"j",(function(){return s})),a.d(t,"l",(function(){return c})),a.d(t,"m",(function(){return d})),a.d(t,"g",(function(){return f})),a.d(t,"h",(function(){return h}));var l=[{label:"单号",prop:"id"},{label:"UID",prop:"uid"},{label:"国籍",prop:"nationalityName"},{label:"姓名",prop:"realName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo"},{label:"头像页",prop:"cardFrontUrl",type:"img"},{label:"国徽页",prop:"cardBackUrl",type:"img"},{label:"手持证件",prop:"antiMoneyUrl",type:"img"},{label:"录制视频",prop:"videoUrl",type:"video"},{label:"验证码",prop:"verificationCode"},{label:"提交时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核人",prop:"auditUserName"},{label:"审核人IP",prop:"auditUserIp"},{label:"状态",prop:"auditStatus",width:"110",type:"filter",show_type:"text",filters:[{text:"待审核",val:0,type:"info"},{text:"审核通过",val:1,type:"success"},{text:"审核不通过",val:2,type:"warning"}]},{label:"驳回原因",prop:"auditRemark"},{label:"操作",prop:"action",type:"action",width:"180",btnGroup:[{label:"审核通过",fn:"checkPass",type:"primary",alias:"pass",noIsClick:!0},{label:"拒绝",fn:"checkOut",type:"danger",alias:"refuse",noIsClick:!0}]}],p=[{label:"单号",prop:"id"},{label:"UID",prop:"uid"},{label:"国籍",prop:"nationalityName"},{label:"姓名",prop:"realName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo"},{label:"头像页",prop:"cardFrontUrl",type:"img"},{label:"国徽页",prop:"cardBackUrl",type:"img"},{label:"手持证件",prop:"antiMoneyUrl",type:"img"},{label:"录制视频",prop:"videoUrl",prop2:"videoUrl",type:"video"},{label:"验证码",prop:"verificationCode"},{label:"提交时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核人",prop:"auditUserName"},{label:"审核人IP",prop:"auditUserIp"},{label:"状态",prop:"auditStatus",width:"110",type:"filter",show_type:"text",filters:[{text:"待审核",val:0,type:"info"},{text:"审核通过",val:1,type:"success"},{text:"审核不通过",val:2,type:"warning"}]},{label:"驳回原因",prop:"auditRemark"}],r=[{type:"date_rank",label:"提交时间",prop:"startTime",prop2:"endTime",value:""},{type:"number",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"number",label:"手机",prop:"phone",value:"",placeHolder:"请输入"},{type:"text",label:"邮箱",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"姓名",prop:"realName",value:"",placeHolder:"请输入"},{type:"number",label:"证件号码",prop:"cardNo",value:"",placeHolder:"请输入"},{type:"text",label:"邀请码",prop:"inviteCode",value:"",placeHolder:"请输入"},{type:"select",label:"审核状态",prop:"auditStatus",value:"",list:[{label:"待审核",value:0},{label:"审核通过",value:1},{label:"审核不通过",value:2}]},{type:"select",label:"登录状态",prop:"userLoginStatus",value:"",list:[{label:"禁止",value:0},{label:"允许",value:1}]}],i=[{label:"UID",prop:"uid"},{label:"姓名",prop:"realName"},{label:"保证金",arr:["amount","coinName"],type:"textArr",join:""},{label:"申请类型",prop:"auditType",type:"filter",show_type:"text",width:"140",filters:[{text:"取消广告商",val:1},{text:"成为广告商",val:2}]},{label:"提交时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核人",prop:"auditUserName"},{label:"审核人IP",prop:"auditIp"},{label:"状态",prop:"auditStatus",width:"110",type:"filter",show_type:"text",filters:[{text:"待审核",val:0,type:"info"},{text:"审核通过",val:1,type:"success"},{text:"审核不通过",val:2,type:"warning"}]},{label:"驳回原因",prop:"auditComment",width:"160"},{label:"操作",prop:"action",type:"action",width:"180",btnGroup:[{label:"审核通过",fn:"pass",type:"success",alias:"pass",noIsClick:!0},{label:"拒绝",fn:"refuse",type:"danger",alias:"refuse",noIsClick:!0}]}],o=[{label:"UID",prop:"uid"},{label:"姓名",prop:"realName"},{label:"保证金",prop:"amount",type:"textArrKeyValue",arr:["amount","coinName"]},{label:"申请类型",prop:"auditType",type:"filter",show_type:"text",width:"140",filters:[{text:"取消广告商",val:1},{text:"成为广告商",val:2}]},{label:"提交时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核人",prop:"auditUserName"},{label:"审核人IP",prop:"auditIp"},{label:"状态",prop:"auditStatus",width:"110",type:"filter",show_type:"text",filters:[{text:"待审核",val:0,type:"info"},{text:"审核通过",val:1,type:"success"},{text:"审核不通过",val:2,type:"warning"}]},{label:"驳回原因",prop:"auditComment",width:"160"}],n=[{type:"date_rank",label:"提交时间",prop:"createStartTime",prop2:"createEndTime",value:""},{type:"date_rank",label:"审核时间",prop:"auditStartTime",prop2:"auditEndTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"申请类型",prop:"auditType",value:"",list:[{label:"取消广告商",value:1},{label:"成为广告商",value:2}]},{type:"select",label:"审核状态",prop:"auditStatus",value:"",list:[{label:"待审核",value:0},{label:"审核通过",value:1},{label:"审核不通过",value:2}]},{type:"text",label:"姓名",prop:"realName",value:"",placeHolder:"请输入"}],u=[{label:"账号UID",prop:"uid"},{label:"国籍",prop:"nationalityName"},{label:"证件姓名",prop:"realName"},{label:"收款姓名",prop:"userName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo"},{label:"支付方式类型",prop:"payType",type:"filter",show_type:"text",filters:[{text:"银行卡",val:1},{text:"支付宝",val:2},{text:"微信",val:3}]},{label:"账号",prop:"num"},{label:"二维码",prop:"qrcode",type:"img"},{label:"银行名称",prop:"bankName"},{label:"支行名称",prop:"bankBranch"},{label:"提交时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核状态",prop:"auditStatus",type:"filter",show_type:"text",width:130,filters:[{text:"待审核",val:0},{text:"审核成功",val:1},{text:"审核失败",val:2}]},{label:"驳回原因",prop:"auditComment"},{label:"操作",prop:"action",type:"action",width:"180",btnGroup:[{label:"审核",fn:"pass",isPop:!1,filter_key:"auditStatus",filter_status:0,type:"success",alias:"pass"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],b=[{label:"账号UID",prop:"uid"},{label:"国籍",prop:"nationalityName"},{label:"证件姓名",prop:"realName"},{label:"收款姓名",prop:"userName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo"},{label:"支付方式类型",prop:"payType",type:"filter",show_type:"text",filters:[{text:"银行卡",val:1},{text:"支付宝",val:2},{text:"微信",val:3}]},{label:"账号",prop:"num"},{label:"二维码",prop:"qrcode",type:"img"},{label:"银行名称",prop:"bankName"},{label:"支行名称",prop:"bankBranch"},{label:"提交时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核状态",prop:"auditStatus",type:"filter",show_type:"text",width:130,filters:[{text:"待审核",val:0},{text:"审核成功",val:1},{text:"审核失败",val:2}]},{label:"驳回原因",prop:"auditComment"}],s=[{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"text",label:"姓名",prop:"realName",value:"",placeHolder:"请输入"},{type:"select",label:"审核状态",prop:"auditStatus",value:"",list:[{label:"待审核",value:0},{label:"审核成功",value:1},{label:"审核失败",value:2}]}],c=[{label:"账号UID",prop:"uid"},{label:"国籍",prop:"nationalityName"},{label:"姓名",prop:"realName"},{label:"收款姓名",prop:"userName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo"},{label:"支付方式类型",prop:"payType",type:"filter",show_type:"text",filters:[{text:"银行卡",val:1},{text:"支付宝",val:2},{text:"微信",val:3}]},{label:"账号",prop:"num"},{label:"二维码",prop:"qrcode",type:"img"},{label:"银行名称",prop:"bankName"},{label:"支行名称",prop:"bankBranch"},{label:"提交时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核状态",prop:"auditStatus",type:"filter",show_type:"text",width:130,filters:[{text:"待审核",val:0},{text:"审核成功",val:1},{text:"审核失败",val:2}]},{label:"操作",prop:"action",type:"action",width:290,btnGroup:[{label:"通过",fn:"pass",type:"success",alias:"pass",isPop:!1,filter_key:"auditStatus",filter_status:0},{label:"拒绝",fn:"refuse",type:"danger",alias:"refuse",isPop:!1,filter_key:"auditStatus",filter_status:0}]}],d=[{label:"账号UID",prop:"uid"},{label:"国籍",prop:"nationalityName"},{label:"姓名",prop:"realName"},{label:"收款姓名",prop:"userName"},{label:"证件类型",prop:"certificateName"},{label:"证件号码",prop:"cardNo"},{label:"支付方式类型",prop:"payType",type:"filter",show_type:"text",filters:[{text:"银行卡",val:1},{text:"支付宝",val:2},{text:"微信",val:3}]},{label:"账号",prop:"num"},{label:"二维码",prop:"qrcode",type:"img"},{label:"银行名称",prop:"bankName"},{label:"支行名称",prop:"bankBranch"},{label:"提交时间",prop:"createTime",type:"time"},{label:"审核时间",prop:"auditTime",type:"time"},{label:"审核状态",prop:"auditStatus",type:"filter",show_type:"text",width:130,filters:[{text:"待审核",val:0},{text:"审核成功",val:1},{text:"审核失败",val:2}]},{label:"备注",prop:"auditComment",width:200}],y=[{label:"订单号",prop:"id"},{label:"币商编号",prop:"uid"},{label:"商户名称",prop:"nationalityName"},{label:"订单金额（CNY）",prop:"realName"},{label:"手续费（USDT）",prop:"certificateType"},{label:"价格/数量",prop:"cardNo"},{label:"交易类型",prop:"cardFrontUrl",type:"img"},{label:"订单状态",prop:"cardBackUrl",type:"filter",show_type:"text",filters:[{text:"待审核",val:0,type:"info"},{text:"审核通过",val:1,type:"success"}]},{label:"收款人",prop:"antiMoneyUrl",type:"img"},{label:"收款账号",prop:"createTime",type:"time"},{label:"收款账户信息",prop:"updateTime",type:"time"},{label:"收款账户类型",prop:"auditUserName"},{label:"添加时间",prop:"auditUserIp"},{label:"操作",prop:"action",type:"action",width:"180",btnGroup:[{label:"审核",fn:"checkPass",type:"primary"}]}],m=[],v=[{type:"date_rank",label:"添加时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"币商码",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"text",label:"商户码",prop:"phone",value:"",placeHolder:"请输入"},{type:"text",label:"收款人",prop:"email",value:"",placeHolder:"请输入"},{type:"text",label:"订单号",prop:"realName",value:"",placeHolder:"请输入"},{type:"text",label:"收款人",prop:"cardNo",value:"",placeHolder:"请输入"},{type:"select",label:"状态",prop:"auditStatus",value:"",list:[{label:"待审核",value:0},{label:"审核通过",value:1},{label:"审核不通过",value:2},{label:"未提交审核",value:3}]},{type:"select",label:"收款账户",prop:"userLoginStatus",value:"",list:[{label:"禁止",value:0},{label:"允许",value:1}]}],f=[{label:"商户名称",prop:"name"},{label:"手机号码",prop:"phone"},{label:"邮箱",prop:"email"},{label:"邀请人",prop:"certificateType"},{label:"状态",prop:"status",type:"filter",show_type:"text",filters:[{text:"待审核",val:0},{text:"审核通过",val:1},{text:"审核不通过",val:2},{text:"未提交审核",val:3}]},{label:"注册时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",width:"180",btnGroup:[{label:"审核",fn:"pass",type:"primary",isPop:!1,filter_key:"status",filter_status:0},{label:"重发邮件",fn:"email",type:"primary",isPop:!1,filter_key:"status",filter_status:100}]}],h=[{type:"date_rank",label:"添加时间",prop:"startDate",prop2:"endDate",value:""},{type:"select",label:"状态",prop:"status",value:"",list:[{label:"待审核",value:0},{label:"审核通过",value:1},{label:"审核不通过",value:2},{label:"未提交审核",value:3}]}]},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("28a5"),a("f576"),a("a481"),a("6b54");var l=a("7618");function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,p=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(l["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var r={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},i=p.replace(/{([ymdhisa])+}/g,(function(e,t){var a=r[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},ff53:function(e,t,a){"use strict";var l=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function r(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=r(e);return t>0?p(Number(e)*Math.pow(10,t)):Number(e)}function o(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function n(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),u=2;u<a;u++)p[u-2]=arguments[u];if(p.length>0)return n.apply(void 0,[n(e,t),p[0]].concat(Object(l["a"])(p.slice(1))));var b=i(e),s=i(t),c=r(e)+r(t),d=b*s;return o(d),d/Math.pow(10,c)}function u(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),i=2;i<a;i++)p[i-2]=arguments[i];if(p.length>0)return u.apply(void 0,[u(e,t),p[0]].concat(Object(l["a"])(p.slice(1))));var o=Math.pow(10,Math.max(r(e),r(t)));return(n(e,o)+n(t,o))/o}function b(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),i=2;i<a;i++)p[i-2]=arguments[i];if(p.length>0)return b.apply(void 0,[b(e,t),p[0]].concat(Object(l["a"])(p.slice(1))));var o=Math.pow(10,Math.max(r(e),r(t)));return(n(e,o)-n(t,o))/o}function s(e,t){for(var a=arguments.length,u=new Array(a>2?a-2:0),b=2;b<a;b++)u[b-2]=arguments[b];if(u.length>0)return s.apply(void 0,[s(e,t),u[0]].concat(Object(l["a"])(u.slice(1))));var c=i(e),d=i(t);return o(c),o(d),n(c/d,p(Math.pow(10,r(t)-r(e))))}function c(e,t){var a=Math.pow(10,t);return s(Math.round(n(e,a)),a)}var d=!0;function y(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:p,plus:u,minus:b,times:n,divide:s,round:c,digitLength:r,float2Fixed:i,enableBoundaryChecking:y}}}]);