(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2ab5116"],{"2ab6":function(e,l,t){"use strict";t.d(l,"H",(function(){return F})),t.d(l,"D",(function(){return H})),t.d(l,"E",(function(){return j})),t.d(l,"B",(function(){return V})),t.d(l,"C",(function(){return B})),t.d(l,"G",(function(){return G})),t.d(l,"F",(function(){return C})),t.d(l,"d",(function(){return _})),t.d(l,"e",(function(){return k})),t.d(l,"o",(function(){return I})),t.d(l,"p",(function(){return M})),t.d(l,"q",(function(){return R})),t.d(l,"I",(function(){return E})),t.d(l,"J",(function(){return N})),t.d(l,"y",(function(){return v})),t.d(l,"z",(function(){return f})),t.d(l,"A",(function(){return h})),t.d(l,"k",(function(){return S})),t.d(l,"i",(function(){return U})),t.d(l,"j",(function(){return D})),t.d(l,"n",(function(){return m})),t.d(l,"l",(function(){return w})),t.d(l,"m",(function(){return g})),t.d(l,"c",(function(){return A})),t.d(l,"a",(function(){return x})),t.d(l,"b",(function(){return T})),t.d(l,"f",(function(){return c})),t.d(l,"g",(function(){return d})),t.d(l,"h",(function(){return y})),t.d(l,"r",(function(){return r})),t.d(l,"s",(function(){return o})),t.d(l,"t",(function(){return i})),t.d(l,"u",(function(){return n})),t.d(l,"v",(function(){return u})),t.d(l,"w",(function(){return b})),t.d(l,"x",(function(){return s}));var a=t("2b0e"),p=new a["default"],r=[{label:"中文标题",prop:"title"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],o=[{label:"中文标题",prop:"title"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"}],i=[{type:"text",label:"标题",prop:"title"}],n=[{label:"币种",prop:"symbol"},{label:"持币数量",prop:"amount"},{label:"收币地址",prop:"address"}],u=[{label:"中文标题",prop:"title"},{label:"中文内容",prop:"content"},{label:"英文标题",prop:"englishTitle"},{label:"英文内容",prop:"englishContent"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],b=[{label:"中文标题",prop:"title"},{label:"中文内容",prop:"content"},{label:"英文标题",prop:"englishTitle"},{label:"英文内容",prop:"englishContent"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"}],s=[{type:"text",label:"标题",prop:"title"},{type:"select",label:"公告类型",prop:"type",value:1,list:[{label:"普通弹窗公告",value:1},{label:"维护公告",value:2}],isClear:!0}],c=[{label:"名称",prop:"bannerName",width:"200"},{label:"代理是否可见",prop:"isProxyVisible",type:"filter",show_type:"text",filters:[{text:"是",val:!0},{text:"否",val:!1}]},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"生效时间",prop:"effectTime",width:"200"},{label:"创建时间",prop:"createTime",width:"200"},{label:"上架",prop:"bannerStatus",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],d=[{label:"名称",prop:"bannerName",width:"200"},{label:"代理是否可见",prop:"isProxyVisible",type:"filter",show_type:"text",filters:[{text:"是",val:!0},{text:"否",val:!1}]},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"生效时间",prop:"effectTime",width:"200"},{label:"创建时间",prop:"createTime",width:"200"}],y=[{label:"标题",prop:"bannerName",type:"text"}],v=[{label:"类型",prop:"bannerType",type:"filter",show_type:"text",filters:[{text:"普通海报",val:1},{text:"会员海报",val:2}]},{label:"名称",prop:"bannerName",width:"200"},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime",width:"200"},{label:"更新时间",prop:"effectTime",width:"200"},{label:"上架",prop:"bannerStatus",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],f=[{label:"类型",prop:"bannerType",type:"filter",show_type:"text",filters:[{text:"普通海报",val:1},{text:"会员海报",val:2}]},{label:"名称",prop:"bannerName",width:"200"},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime",width:"200"},{label:"更新时间",prop:"effectTime",width:"200"}],h=[{label:"名称",prop:"bannerName",type:"text"}],m=[{label:"标题",prop:"chineseTitle",type:"text"}],w=[{label:"栏目名称",prop:"chineseSubjectName"},{label:"中文标题",prop:"chineseTitle"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],g=[{label:"UID",prop:"uid",width:100},{label:"姓名",prop:"coinName"},{label:"首日充值金额（USDT）",prop:"chainName"},{label:"首充时间",prop:"amount",width:200},{label:"奖励数量（USDT）",prop:"fee"},{label:"用户累计开仓交易额USDT",prop:"realAmount",width:200},{label:"奖励到账金额USDT",prop:"toAddress",width:140}],x=[{label:"UID",prop:"uid"},{label:"姓名",prop:"username"},{label:"首日充值金额（USDT）",prop:"netAmount"},{label:"首充时间",prop:"firstRechargeTime"},{label:"奖励数量（USDT）",prop:"reward"},{label:"用户累计开仓交易额USDT",prop:"cumulativeTradeAmount"},{label:"奖励到账金额USDT",prop:"rewardToAccount"}],T=[{label:"UID",prop:"uid"},{label:"姓名",prop:"username"},{label:"首日充值金额（USDT）",prop:"netAmount"},{label:"首充时间",prop:"firstRechargeTime"},{label:"奖励数量（USDT）",prop:"reward"},{label:"用户累计开仓交易额USDT",prop:"cumulativeTradeAmount"},{label:"奖励到账金额USDT",prop:"rewardToAccount"}],A=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"奖励数量",prop:"reward",value:"",multiple:!0,list:[{label:10,value:10},{label:30,value:30},{label:50,value:50},{label:100,value:100},{label:300,value:300},{label:500,value:500},{label:1e3,value:1e3},{label:2e3,value:2e3}]},{type:"select",label:"到账奖励数量",prop:"rewardToAccount",value:"",multiple:!0,list:[{label:10,value:10},{label:30,value:30},{label:50,value:50},{label:100,value:100},{label:300,value:300},{label:500,value:500},{label:1e3,value:1e3},{label:2e3,value:2e3}]}],S=[{label:"标题",prop:"chineseSubjectName",type:"text"}],U=[{label:"栏目中文名称",prop:"chineseSubjectName"},{label:"栏目英文名称",prop:"englishSubjectName"},{label:"icon",prop:"iconUrl",type:"img"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],D=[{label:"栏目中文名称",prop:"chineseSubjectName"},{label:"栏目英文名称",prop:"englishSubjectName"},{label:"icon",prop:"iconUrl",type:"img"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"}],E=[{label:"单点类型",prop:"ssoType",type:"filter",show_type:"text",filters:[{text:"IOS",val:1},{text:"安卓",val:2},{text:"PC",val:3}]},{label:"备注",prop:"remark"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"开关",prop:"status",type:"switch",fn:"trputon",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],N=[{label:"单点类型",prop:"ssoType",type:"filter",show_type:"text",filters:[{text:"IOS",val:1},{text:"安卓",val:2},{text:"PC",val:3}]},{label:"备注",prop:"remark"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],I=[{label:"发送平台",prop:"platformName"},{label:"发送类型",prop:"messageType",type:"filter",show_type:"text",filters:[{text:"短信",val:1},{text:"邮件",val:2}]},{label:"用户UID",prop:"uid"},{label:"区号",prop:"phoneAreaCode",type:"noneShowValue",showValue:"无"},{label:"手机号码",prop:"phone",type:"noneShowValue",showValue:"无",width:"120"},{label:"邮箱号码",prop:"email",type:"noneShowValue",showValue:"无",width:"150"},{label:"发送时间",prop:"createTime"},{label:"回执时间",prop:"syncTime"},{label:"回执状态",prop:"syncResult",type:"filter",show_type:"text",filters:[{text:"成功",val:!0},{text:"失败",val:!1}]},{label:"发送内容",prop:"content",type:"textType",width:"450",alias:"content"}],M=[{label:"发送平台",prop:"platformName"},{label:"发送类型",prop:"messageType",type:"filter",show_type:"text",filters:[{text:"短信",val:1},{text:"邮件",val:2}]},{label:"用户UID",prop:"uid"},{label:"区号",prop:"phoneAreaCode",type:"noneShowValue",showValue:"无"},{label:"手机号码",prop:"phone",type:"noneShowValue",showValue:"无",width:"120"},{label:"邮箱号码",prop:"email",type:"noneShowValue",showValue:"无",width:"150"},{label:"发送时间",prop:"createTime"},{label:"回执时间",prop:"syncTime"},{label:"回执状态",prop:"syncResult",type:"filter",show_type:"text",filters:[{text:"成功",val:!0},{text:"失败",val:!1}]}],R=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"用户UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"发送类型",prop:"messageType",value:1,list:[{label:"短信",value:1},{label:"邮件",value:2}]},{type:"text",label:"发送号码",prop:"keyWord",value:"",placeHolder:"请输入手机号或邮箱号码"},{type:"select",label:"回执状态",prop:"syncResult",value:"",list:[{label:"成功",value:!0},{label:"失败",value:!1}]},{type:"select",label:"发送平台",prop:"platform",value:"",list:p.$msgTypeArr}],_=[{label:"UID",prop:"uid"},{label:"累计充值金额",prop:"inAmount"},{label:"累计提币金额",prop:"outAmount"},{label:"累计净入金",prop:"netAmount"},{label:"累计开仓交易额",prop:"cumulativeTradeAmount"},{label:"应得奖励数量",prop:"reward"},{label:"实际到账奖励数量",prop:"rewardToAccount"},{label:"实名状态",prop:"userVerifiedStatus",type:"filter",show_type:"text",filters:[{text:"高级待审核",val:0,type:"info"},{text:"初级认证成功",val:1,type:"success"},{text:"高级认证失败",val:2,type:"warning"},{text:"未认证",val:3,type:"primary"},{text:"高级认证成功",val:4,type:"success"}]},{label:"用户违规标记",prop:"isViolation",type:"switch",fn:"trsignBtn",alias:"trsignBtn",width:"150"}],k=[{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入",lengthLimited:"uid",digits:"9"},{type:"select",label:"用户违规标记",prop:"isViolation",value:"",list:[{label:"全部",value:""},{label:"是",value:!0},{label:"否",value:!1}]},{type:"select",label:"实名状态",prop:"userVerifiedStatus",value:"",list:[{label:"未认证",value:3},{label:"初级认证成功",value:1},{label:"高级待审核",value:0},{label:"高级认证失败",value:2},{label:"高级认证成功",value:4}]}],C=[{label:"盲盒ID",prop:"boxId"},{label:"盲盒种类",prop:"boxType",width:100,type:"filter",show_type:"text",filters:[{text:"邀新充值盲盒",val:0},{text:"邀新交易盲盒",val:1},{text:"充值盲盒",val:2},{text:"幸运盲盒",val:3},{text:"交易盲盒",val:4},{text:"惊喜盲盒",val:5}]},{label:"用户UID",prop:"uid"},{label:"盲盒获取方式",prop:"isManual",width:100,type:"filter",show_type:"text",filters:[{text:"系统发放",val:0},{text:"手动发放",val:1}]},{label:"盲盒状态",prop:"isEnable",width:100,type:"filter",show_type:"text",filters:[{text:"已开启",val:1},{text:"未开启",val:0}]},{label:"内含币种",prop:"tokenSymbol"},{label:"币数量",prop:"tokenAmount"},{label:"等U价值",prop:"usdtAmount"},{label:"盲盒发放时间",prop:"createTime"},{label:"盲盒开启时间",prop:"openTime"},{label:"盲盒过期时间",prop:"effectiveTime"},{label:"备注",prop:"manualRemarks"}],G=[{type:"date_rank",label:"盲盒开启时间",prop:"enableTimeS",prop2:"enableTimeE",value:""},{type:"date_rank",label:"盲盒发放时间",prop:"createTimeS",prop2:"createTimeE",value:""},{type:"select",label:"盲盒种类",prop:"boxType",value:"",list:[{label:"邀新充值盲盒",value:0},{label:"邀新交易盲盒",value:1},{label:"充值盲盒",value:2},{label:"幸运盲盒",value:3},{label:"交易盲盒",value:4},{label:"惊喜盲盒",value:5}]},{type:"select",label:"等U价值",prop:"usdtAmount",value:"",list:[]},{type:"select",label:"盲盒开启状态",prop:"isEnable",value:"",list:[{label:"未开启",value:0},{label:"已开启",value:1}]},{type:"select",label:"盲盒有效状态",prop:"isEffective",value:"",list:[{label:"有效",value:0},{label:"失效",value:1}]},{type:"onlyNumber",label:"用户UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"盲盒ID",prop:"boxId",value:"",placeHolder:"请输入"},{type:"select",label:"盲盒获取方式",prop:"isManual",value:"",list:[{label:"系统发放",value:0},{label:"手动发放",value:1}]}],V=[{label:"用户UID",prop:"uid"},{label:"上级用户UID",prop:"inviteUid"},{label:"用户充值金额",prop:"inAmount"},{label:"自身是否获得邀新充值盲盒",prop:"rechargeBox",width:150,type:"filter",show_type:"text",filters:[{text:"是",val:1},{text:"否",val:0}]},{label:"上级是否获得邀新充值盲盒",prop:"inviteRechargeBox",width:150,type:"filter",show_type:"text",filters:[{text:"是",val:1},{text:"否",val:0}]},{label:"用户现货交易金额",prop:"cumulativeTradeAmount"},{label:"自身是否获得邀新交易盲盒",prop:"tradeBox",width:150,type:"filter",show_type:"text",filters:[{text:"是",val:1},{text:"否",val:0}]},{label:"上级是否获得邀新交易盲盒",prop:"inviteTradeBox",width:150,type:"filter",show_type:"text",filters:[{text:"是",val:1},{text:"否",val:0}]},{label:"用户净充值金额",prop:"netAmount"},{label:"用户合约交易额",prop:"contractCumulativeTradeAmount"}],B=[{type:"onlyNumber",label:"用户UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"上级用户UID",prop:"inviteUid",value:"",placeHolder:"请输入"}],H=[{label:"用户UID",prop:"uid"},{label:"单双数字",prop:"singleDouble",width:150,type:"filter",show_type:"text",filters:[{text:"单",val:1},{text:"双",val:2}]},{label:"充值到账日期",prop:"arrivalTime"},{label:"Txid",prop:"blockHash"}],j=[{type:"date_rank",label:"充值到账日期",prop:"arrivalStartTime",prop2:"arrivalEndTime",value:""},{type:"onlyNumber",label:"用户UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"text",label:"Txid",prop:"blockHash",value:"",placeHolder:"请输入"},{type:"select",label:"单双数字",prop:"singleDouble",value:"",list:[{label:"单",value:1},{label:"双",value:2}]}],F=[]},"2e08":function(e,l,t){var a=t("9def"),p=t("9744"),r=t("be13");e.exports=function(e,l,t,o){var i=String(r(e)),n=i.length,u=void 0===t?" ":String(t),b=a(l);if(b<=n||""==u)return i;var s=b-n,c=p.call(u,Math.ceil(s/u.length));return c.length>s&&(c=c.slice(0,s)),o?c+i:i+c}},7514:function(e,l,t){"use strict";var a=t("5ca1"),p=t("0a49")(5),r="find",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(e){return p(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")(r)},"87f3":function(e,l,t){var a=t("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,l,t){var a=t("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,l,t){"use strict";var a=t("4588"),p=t("be13");e.exports=function(e){var l=String(p(this)),t="",r=a(e);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(l+=l))1&r&&(t+=l);return t}},c270:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,l,t){"use strict";t.d(l,"a",(function(){return p}));t("28a5"),t("f576"),t("a481"),t("6b54");var a=t("7618");function p(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var t,p=l||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?t=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),t=new Date(e));var r={y:t.getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()},o=p.replace(/{([ymdhisa])+}/g,(function(e,l){var t=r[l];return"a"===l?["日","一","二","三","四","五","六"][t]:t.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},f576:function(e,l,t){"use strict";var a=t("5ca1"),p=t("2e08"),r=t("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);a(a.P+a.F*o,"String",{padStart:function(e){return p(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,l,t){"use strict";var a=t("75fc");t("9278"),t("87f3"),t("a481"),t("6b54"),t("28a5"),t("c5f6");function p(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(l))}function r(e){var l=e.toString().split(/[eE]/),t=(l[0].split(".")[1]||"").length-+(l[1]||0);return t>0?t:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var l=r(e);return l>0?p(Number(e)*Math.pow(10,l)):Number(e)}function i(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function n(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),u=2;u<t;u++)p[u-2]=arguments[u];if(p.length>0)return n.apply(void 0,[n(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var b=o(e),s=o(l),c=r(e)+r(l),d=b*s;return i(d),d/Math.pow(10,c)}function u(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),o=2;o<t;o++)p[o-2]=arguments[o];if(p.length>0)return u.apply(void 0,[u(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var i=Math.pow(10,Math.max(r(e),r(l)));return(n(e,i)+n(l,i))/i}function b(e,l){for(var t=arguments.length,p=new Array(t>2?t-2:0),o=2;o<t;o++)p[o-2]=arguments[o];if(p.length>0)return b.apply(void 0,[b(e,l),p[0]].concat(Object(a["a"])(p.slice(1))));var i=Math.pow(10,Math.max(r(e),r(l)));return(n(e,i)-n(l,i))/i}function s(e,l){for(var t=arguments.length,u=new Array(t>2?t-2:0),b=2;b<t;b++)u[b-2]=arguments[b];if(u.length>0)return s.apply(void 0,[s(e,l),u[0]].concat(Object(a["a"])(u.slice(1))));var c=o(e),d=o(l);return i(c),i(d),n(c/d,p(Math.pow(10,r(l)-r(e))))}function c(e,l){var t=Math.pow(10,l);return s(Math.round(n(e,t)),t)}var d=!0;function y(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}l["a"]={strip:p,plus:u,minus:b,times:n,divide:s,round:c,digitLength:r,float2Fixed:o,enableBoundaryChecking:y}}}]);