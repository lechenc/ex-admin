(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02d4a40c"],{"15fd":function(e,t,l){"use strict";function a(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}function r(e,t){if(null==e)return{};var l,r,i=a(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}l.d(t,"a",(function(){return r}))},"2ab6":function(e,t,l){"use strict";l.d(t,"m",(function(){return R})),l.d(t,"n",(function(){return I})),l.d(t,"o",(function(){return N})),l.d(t,"z",(function(){return U})),l.d(t,"A",(function(){return E})),l.d(t,"w",(function(){return d})),l.d(t,"x",(function(){return h})),l.d(t,"y",(function(){return f})),l.d(t,"i",(function(){return x})),l.d(t,"g",(function(){return A})),l.d(t,"h",(function(){return S})),l.d(t,"l",(function(){return m})),l.d(t,"j",(function(){return g})),l.d(t,"k",(function(){return y})),l.d(t,"c",(function(){return T})),l.d(t,"a",(function(){return v})),l.d(t,"b",(function(){return w})),l.d(t,"d",(function(){return u})),l.d(t,"e",(function(){return c})),l.d(t,"f",(function(){return b})),l.d(t,"p",(function(){return a})),l.d(t,"q",(function(){return r})),l.d(t,"r",(function(){return i})),l.d(t,"s",(function(){return n})),l.d(t,"t",(function(){return p})),l.d(t,"u",(function(){return o})),l.d(t,"v",(function(){return s}));var a=[{label:"中文标题",prop:"title"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],r=[{label:"中文标题",prop:"title"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"}],i=[{type:"text",label:"标题",prop:"title"}],n=[{label:"币种",prop:"symbol"},{label:"持币数量",prop:"amount"},{label:"收币地址",prop:"address"}],p=[{label:"中文标题",prop:"title"},{label:"中文内容",prop:"content"},{label:"英文标题",prop:"englishTitle"},{label:"英文内容",prop:"englishContent"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],o=[{label:"中文标题",prop:"title"},{label:"中文内容",prop:"content"},{label:"英文标题",prop:"englishTitle"},{label:"英文内容",prop:"englishContent"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"}],s=[{type:"text",label:"标题",prop:"title"},{type:"select",label:"公告类型",prop:"type",value:1,list:[{label:"普通弹窗公告",value:1},{label:"维护公告",value:2}],isClear:!0}],u=[{label:"名称",prop:"bannerName",width:"200"},{label:"代理是否可见",prop:"isProxyVisible",type:"filter",show_type:"text",filters:[{text:"是",val:!0},{text:"否",val:!1}]},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"生效时间",prop:"effectTime",width:"200"},{label:"创建时间",prop:"createTime",width:"200"},{label:"上架",prop:"bannerStatus",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],c=[{label:"名称",prop:"bannerName",width:"200"},{label:"代理是否可见",prop:"isProxyVisible",type:"filter",show_type:"text",filters:[{text:"是",val:!0},{text:"否",val:!1}]},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"生效时间",prop:"effectTime",width:"200"},{label:"创建时间",prop:"createTime",width:"200"}],b=[{label:"标题",prop:"bannerName",type:"text"}],d=[{label:"类型",prop:"bannerType",type:"filter",show_type:"text",filters:[{text:"普通海报",val:1},{text:"会员海报",val:2}]},{label:"名称",prop:"bannerName",width:"200"},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime",width:"200"},{label:"更新时间",prop:"effectTime",width:"200"},{label:"上架",prop:"bannerStatus",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],h=[{label:"类型",prop:"bannerType",type:"filter",show_type:"text",filters:[{text:"普通海报",val:1},{text:"会员海报",val:2}]},{label:"名称",prop:"bannerName",width:"200"},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime",width:"200"},{label:"更新时间",prop:"effectTime",width:"200"}],f=[{label:"名称",prop:"bannerName",type:"text"}],m=[{label:"标题",prop:"chineseTitle",type:"text"}],g=[{label:"栏目名称",prop:"chineseSubjectName"},{label:"中文标题",prop:"chineseTitle"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],y=[{label:"UID",prop:"uid",width:100},{label:"姓名",prop:"coinName"},{label:"首日充值金额（USDT）",prop:"chainName"},{label:"首充时间",prop:"amount",width:200},{label:"奖励数量（USDT）",prop:"fee"},{label:"用户累计开仓交易额USDT",prop:"realAmount",width:200},{label:"奖励到账金额USDT",prop:"toAddress",width:140}],v=[{label:"UID",prop:"uid"},{label:"姓名",prop:"username"},{label:"首日充值金额（USDT）",prop:"netAmount"},{label:"首充时间",prop:"firstRechargeTime"},{label:"奖励数量（USDT）",prop:"reward"},{label:"用户累计开仓交易额USDT",prop:"cumulativeTradeAmount"},{label:"奖励到账金额USDT",prop:"rewardToAccount"}],w=[{label:"UID",prop:"uid"},{label:"姓名",prop:"username"},{label:"首日充值金额（USDT）",prop:"netAmount"},{label:"首充时间",prop:"firstRechargeTime"},{label:"奖励数量（USDT）",prop:"reward"},{label:"用户累计开仓交易额USDT",prop:"cumulativeTradeAmount"},{label:"奖励到账金额USDT",prop:"rewardToAccount"}],T=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"select",label:"奖励数量",prop:"reward",value:"",multiple:!0,list:[{label:10,value:10},{label:30,value:30},{label:50,value:50},{label:100,value:100},{label:300,value:300},{label:500,value:500},{label:1e3,value:1e3},{label:2e3,value:2e3}]},{type:"select",label:"到账奖励数量",prop:"rewardToAccount",value:"",multiple:!0,list:[{label:10,value:10},{label:30,value:30},{label:50,value:50},{label:100,value:100},{label:300,value:300},{label:500,value:500},{label:1e3,value:1e3},{label:2e3,value:2e3}]}],x=[{label:"标题",prop:"chineseSubjectName",type:"text"}],A=[{label:"栏目中文名称",prop:"chineseSubjectName"},{label:"栏目英文名称",prop:"englishSubjectName"},{label:"icon",prop:"iconUrl",type:"img"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],S=[{label:"栏目中文名称",prop:"chineseSubjectName"},{label:"栏目英文名称",prop:"englishSubjectName"},{label:"icon",prop:"iconUrl",type:"img"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"}],U=[{label:"单点类型",prop:"ssoType",type:"filter",show_type:"text",filters:[{text:"IOS",val:1},{text:"安卓",val:2},{text:"PC",val:3}]},{label:"备注",prop:"remark"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"开关",prop:"status",type:"switch",fn:"trputon",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],E=[{label:"单点类型",prop:"ssoType",type:"filter",show_type:"text",filters:[{text:"IOS",val:1},{text:"安卓",val:2},{text:"PC",val:3}]},{label:"备注",prop:"remark"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],R=[{label:"发送平台",prop:"platformName"},{label:"发送类型",prop:"messageType",type:"filter",show_type:"text",filters:[{text:"短信",val:1},{text:"邮件",val:2}]},{label:"用户UID",prop:"uid"},{label:"区号",prop:"phoneAreaCode",type:"noneShowValue",showValue:"无"},{label:"手机号码",prop:"phone",type:"noneShowValue",showValue:"无",width:"120"},{label:"邮箱号码",prop:"email",type:"noneShowValue",showValue:"无",width:"150"},{label:"发送时间",prop:"createTime"},{label:"回执时间",prop:"syncTime"},{label:"回执状态",prop:"syncResult",type:"filter",show_type:"text",filters:[{text:"成功",val:!0},{text:"失败",val:!1}]},{label:"发送内容",prop:"content",type:"textType",width:"450",alias:"content"}],I=[{label:"发送平台",prop:"platformName"},{label:"发送类型",prop:"messageType",type:"filter",show_type:"text",filters:[{text:"短信",val:1},{text:"邮件",val:2}]},{label:"用户UID",prop:"uid"},{label:"区号",prop:"phoneAreaCode",type:"noneShowValue",showValue:"无"},{label:"手机号码",prop:"phone",type:"noneShowValue",showValue:"无",width:"120"},{label:"邮箱号码",prop:"email",type:"noneShowValue",showValue:"无",width:"150"},{label:"发送时间",prop:"createTime"},{label:"回执时间",prop:"syncTime"},{label:"回执状态",prop:"syncResult",type:"filter",show_type:"text",filters:[{text:"成功",val:!0},{text:"失败",val:!1}]}],N=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"用户UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"发送类型",prop:"messageType",value:1,list:[{label:"短信",value:1},{label:"邮件",value:2}]},{type:"text",label:"发送号码",prop:"keyWord",value:"",placeHolder:"请输入手机号或邮箱号码"},{type:"select",label:"回执状态",prop:"syncResult",value:"",list:[{label:"成功",value:!0},{label:"失败",value:!1}]},{type:"select",label:"发送平台",prop:"platform",value:"",list:[{label:"摩杜云",value:"1"},{label:"美联软通",value:"2"},{label:"网易网盾",value:"3"}]}]},"2e08":function(e,t,l){var a=l("9def"),r=l("9744"),i=l("be13");e.exports=function(e,t,l,n){var p=String(i(e)),o=p.length,s=void 0===l?" ":String(l),u=a(t);if(u<=o||""==s)return p;var c=u-o,b=r.call(s,Math.ceil(c/s.length));return b.length>c&&(b=b.slice(0,c)),n?b+p:p+b}},"5d48":function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"c-upload"},[e.base64?l("div",{staticClass:"file-select preview",attrs:{title:"双击大图预览"},on:{click:e.clickHandle}},[l("div",{staticClass:"img-view",style:{background:"url("+e.base64+")"}}),e._v(" "),l("i",{staticClass:"el-icon-delete-solid delete",on:{click:function(t){return t.stopPropagation(),e.deleteFile(t)}}}),e._v(" "),l("transition",{attrs:{name:"slide-up"}},[e.uploaded?l("i",{staticClass:"el-icon-check checked"}):e._e()])],1):l("div",{ref:"fileSelecter",staticClass:"file-select",class:{uploaded:e.uploaded},on:{click:e.fileSelect}},[l("i",{staticClass:"el-icon-upload"})]),e._v(" "),l("div",{staticClass:"title",class:{required:e.required}},[e._v(e._s(e.title))]),e._v(" "),l("input",{ref:"fileInput",staticClass:"c-file-input",attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg"},on:{change:e.fileChange}})])},r=[],i=(l("96cf"),l("1da1")),n=l("bc3a"),p=l.n(n),o=l("ca00"),s={name:"BSingleUpload",data:function(){return{disabled:!1,file:null,width:"100%",height:"100%",mWidth:120,mHeight:120,uploaded:!1,loading:null,timmer:null,start:0,baseUrl:""}},props:{auto:{type:Boolean,default:!0},required:{type:Boolean,default:!1},title:{type:String,default:"上传图片"},value:{type:String}},computed:{base64:function(){return this.baseUrl||this.value},picUrl:{get:function(){return this.baseUrl||this.value},set:function(e){this.$emit("input",e||"")}}},mounted:function(){},methods:{clickHandle:function(){var e=this,t=+new Date;t-this.start>300&&(this.start=0,clearTimeout(this.timmer)),this.start?t-this.start<300&&(clearTimeout(this.timmer),this.viewImg(),this.start=0):(this.start=+new Date,this.timmer=setTimeout((function(){e.fileSelect(window.event)}),300))},reset:function(){this.uploaded=!1,this.file=null,this.base64="",this.baseUrl=""},viewImg:function(){this.$store.dispatch("app/setViewerImages",[this.base64]),this.$store.dispatch("app/showSingleViewerImages",!0),this.$store.dispatch("app/setSingleViewerTitle",this.title)},fileChange:function(e){var t=this,l=e.target.files[0];this.$emit("input",l),this.file=l;var a=new FileReader;this.uploaded=!1,a.onload=function(){var e=new Image;e.onload=function(){var r=e,i=r.width,n=r.height,p=o["a"].autoImgSize(i,n,t.mWidth,t.mHeight);t.width=p.width,t.height=p.height,t.base64=a.result,l.base64=a.result,t.baseUrl=a.result,e=null,a=null,t.auto&&t.upload()},e.onerror=function(e){t.$message.error("解析图片失败")},e.src=a.result},a.onError=function(){t.$message.error("解析图片失败")},a.readAsDataURL(l)},upload:function(e){var t=this;return new Promise((function(l,a){if("file"!==o["a"].type(t.file))l({result:200});else{if(!t.file)return void t.$Toast({title:"提示",message:"请先选择图片"});t.loading=t.$loading({target:t.$el,text:"正在上传"});window;var r={"Content-Type":"multipart/form-data"},i=p.a.create({baseURL:"http://testapi.wallet.alpex.pro/wallet/util"}),n=new FormData;n.append("type","exchange"),n.append("files",t.file),i.post("/open/uploadFile",n,{headers:r}).then((function(r){var i=r.data;200===i.result?(e&&t.$Toast({title:"提示",message:"上传成功"}),t.uploaded=!0,t.picUrl=i.result.urls[0],l(i)):(e&&t.$Toast({title:"提示",message:"上传失败"}),a())})).catch((function(e){a(),console.error(e)})).finally((function(){t.loading.close(),t.loading=null}))}}))},deleteFile:function(){this.file=null,this.reset(),this.uploaded=!1},fileSelect:function(e){var t=this.$refs.fileInput;t.value="",t.click()},changeToBase64:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,l,a,r,i,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.file&&!this.loading){e.next=2;break}return e.abrupt("return");case 2:if(this.loading=!0,this,!o["a"].isBase64(this.value)){e.next=10;break}t=new Image,t.onload=function(){var e=o["a"].autoImgSize(t.width,t.height,n.mWidth,n.mHeight),l=e.width,a=e.height;n.width=l,n.height=a,n.file={base64:n.value},n.base64=n.value,t=null,n.loading=null},t.src=this.value,e.next=14;break;case 10:return e.next=12,o["a"].img2base64(this.value);case 12:l=e.sent,200===l.result&&(a=o["a"].autoImgSize(l.width,l.height,this.mWidth,this.mHeight),r=a.width,i=a.height,this.file={base64:l.base64},this.width=r,this.height=i,this.base64=l.base64,this.loading=null);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},u=s,c=(l("6245"),l("2877")),b=Object(c["a"])(u,a,r,!1,null,null,null);t["a"]=b.exports},6245:function(e,t,l){"use strict";l("a44a")},7514:function(e,t,l){"use strict";var a=l("5ca1"),r=l("0a49")(5),i="find",n=!0;i in[]&&Array(1)[i]((function(){n=!1})),a(a.P+a.F*n,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),l("9c6c")(i)},"87f3":function(e,t,l){var a=l("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,l){var a=l("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,l){"use strict";var a=l("4588"),r=l("be13");e.exports=function(e){var t=String(r(this)),l="",i=a(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(l+=t);return l}},a44a:function(e,t,l){},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,l){"use strict";l.d(t,"a",(function(){return r}));l("28a5"),l("f576"),l("a481"),l("6b54");var a=l("53ca");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var l,r=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?l=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),l=new Date(e));var i={y:l.getFullYear(),m:l.getMonth()+1,d:l.getDate(),h:l.getHours(),i:l.getMinutes(),s:l.getSeconds(),a:l.getDay()},n=r.replace(/{([ymdhisa])+}/g,(function(e,t){var l=i[t];return"a"===t?["日","一","二","三","四","五","六"][l]:l.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},f576:function(e,t,l){"use strict";var a=l("5ca1"),r=l("2e08"),i=l("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*n,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,l){"use strict";var a=l("2909");l("9278"),l("87f3"),l("a481"),l("6b54"),l("28a5"),l("c5f6");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),l=(t[0].split(".")[1]||"").length-+(t[1]||0);return l>0?l:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?r(Number(e)*Math.pow(10,t)):Number(e)}function p(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function o(e,t){for(var l=arguments.length,r=new Array(l>2?l-2:0),s=2;s<l;s++)r[s-2]=arguments[s];if(r.length>0)return o.apply(void 0,[o(e,t),r[0]].concat(Object(a["a"])(r.slice(1))));var u=n(e),c=n(t),b=i(e)+i(t),d=u*c;return p(d),d/Math.pow(10,b)}function s(e,t){for(var l=arguments.length,r=new Array(l>2?l-2:0),n=2;n<l;n++)r[n-2]=arguments[n];if(r.length>0)return s.apply(void 0,[s(e,t),r[0]].concat(Object(a["a"])(r.slice(1))));var p=Math.pow(10,Math.max(i(e),i(t)));return(o(e,p)+o(t,p))/p}function u(e,t){for(var l=arguments.length,r=new Array(l>2?l-2:0),n=2;n<l;n++)r[n-2]=arguments[n];if(r.length>0)return u.apply(void 0,[u(e,t),r[0]].concat(Object(a["a"])(r.slice(1))));var p=Math.pow(10,Math.max(i(e),i(t)));return(o(e,p)-o(t,p))/p}function c(e,t){for(var l=arguments.length,s=new Array(l>2?l-2:0),u=2;u<l;u++)s[u-2]=arguments[u];if(s.length>0)return c.apply(void 0,[c(e,t),s[0]].concat(Object(a["a"])(s.slice(1))));var b=n(e),d=n(t);return p(b),p(d),o(b/d,r(Math.pow(10,i(t)-i(e))))}function b(e,t){var l=Math.pow(10,t);return c(Math.round(o(e,l)),l)}var d=!0;function h(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:r,plus:s,minus:u,times:o,divide:c,round:b,digitLength:i,float2Fixed:n,enableBoundaryChecking:h}}}]);