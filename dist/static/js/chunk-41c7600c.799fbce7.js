(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41c7600c"],{"2ab6":function(e,t,l){"use strict";l.d(t,"t",(function(){return A})),l.d(t,"u",(function(){return T})),l.d(t,"q",(function(){return h})),l.d(t,"r",(function(){return d})),l.d(t,"s",(function(){return f})),l.d(t,"f",(function(){return v})),l.d(t,"d",(function(){return w})),l.d(t,"e",(function(){return x})),l.d(t,"i",(function(){return g})),l.d(t,"g",(function(){return m})),l.d(t,"h",(function(){return y})),l.d(t,"a",(function(){return c})),l.d(t,"b",(function(){return u})),l.d(t,"c",(function(){return b})),l.d(t,"j",(function(){return a})),l.d(t,"k",(function(){return i})),l.d(t,"l",(function(){return r})),l.d(t,"m",(function(){return n})),l.d(t,"n",(function(){return p})),l.d(t,"o",(function(){return o})),l.d(t,"p",(function(){return s}));var a=[{label:"中文标题",prop:"title"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],i=[{label:"中文标题",prop:"title"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"}],r=[{type:"text",label:"标题",prop:"title"}],n=[{label:"币种",prop:"symbol"},{label:"持币数量",prop:"amount"},{label:"收币地址",prop:"address"}],p=[{label:"中文标题",prop:"title"},{label:"中文内容",prop:"content"},{label:"英文标题",prop:"englishTitle"},{label:"英文内容",prop:"englishContent"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],o=[{label:"中文标题",prop:"title"},{label:"中文内容",prop:"content"},{label:"英文标题",prop:"englishTitle"},{label:"英文内容",prop:"englishContent"},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime"}],s=[{type:"text",label:"标题",prop:"title"},{type:"select",label:"公告类型",prop:"type",value:1,list:[{label:"普通弹窗公告",value:1},{label:"维护公告",value:2}],isClear:!0}],c=[{label:"名称",prop:"bannerName",width:"200"},{label:"代理是否可见",prop:"isProxyVisible",type:"filter",show_type:"text",filters:[{text:"是",val:!0},{text:"否",val:!1}]},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"生效时间",prop:"effectTime",width:"200"},{label:"创建时间",prop:"createTime",width:"200"},{label:"上架",prop:"bannerStatus",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],u=[{label:"名称",prop:"bannerName",width:"200"},{label:"代理是否可见",prop:"isProxyVisible",type:"filter",show_type:"text",filters:[{text:"是",val:!0},{text:"否",val:!1}]},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"生效时间",prop:"effectTime",width:"200"},{label:"创建时间",prop:"createTime",width:"200"}],b=[{label:"标题",prop:"bannerName",type:"text"}],h=[{label:"类型",prop:"bannerType",type:"filter",show_type:"text",filters:[{text:"普通海报",val:1},{text:"会员海报",val:2}]},{label:"名称",prop:"bannerName",width:"200"},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime",width:"200"},{label:"更新时间",prop:"effectTime",width:"200"},{label:"上架",prop:"bannerStatus",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:180,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],d=[{label:"类型",prop:"bannerType",type:"filter",show_type:"text",filters:[{text:"普通海报",val:1},{text:"会员海报",val:2}]},{label:"名称",prop:"bannerName",width:"200"},{label:"中文图片",prop:"imgUrl",type:"img"},{label:"英文图片",prop:"imgUrlEn",type:"img"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"ios",val:1},{text:"安卓",val:2},{text:"pc,h5",val:3}]},{label:"排序",prop:"weight"},{label:"创建时间",prop:"createTime",width:"200"},{label:"更新时间",prop:"effectTime",width:"200"}],f=[{label:"名称",prop:"bannerName",type:"text"}],g=[{label:"标题",prop:"chineseTitle",type:"text"}],m=[{label:"栏目名称",prop:"chineseSubjectName"},{label:"中文标题",prop:"chineseTitle"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"},{label:"上架",prop:"status",type:"switch",fn:"switchCoin",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],y=[{label:"栏目名称",prop:"chineseSubjectName"},{label:"中文标题",prop:"chineseTitle"},{label:"英文标题",prop:"englishTitle"},{label:"中文链接",prop:"url"},{label:"英文链接",prop:"englishLink"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"}],v=[{label:"标题",prop:"chineseSubjectName",type:"text"}],w=[{label:"栏目中文名称",prop:"chineseSubjectName"},{label:"栏目英文名称",prop:"englishSubjectName"},{label:"icon",prop:"iconUrl",type:"img"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"editRow",type:"primary",alias:"edit"},{label:"删除",fn:"delRow",type:"danger",alias:"del"}]}],x=[{label:"栏目中文名称",prop:"chineseSubjectName"},{label:"栏目英文名称",prop:"englishSubjectName"},{label:"icon",prop:"iconUrl",type:"img"},{label:"排序",prop:"sort"},{label:"创建时间",prop:"createTime"}],A=[{label:"单点类型",prop:"ssoType",type:"filter",show_type:"text",filters:[{text:"PC",val:1},{text:"IOS",val:2},{text:"Android",val:3}]},{label:"备注",prop:"remark"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"开关",prop:"status",type:"switch",fn:"trputon",alias:"trputon"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],T=[{label:"单点类型",prop:"ssoType",type:"filter",show_type:"text",filters:[{text:"PC",val:1},{text:"IOS",val:2},{text:"Android",val:3}]},{label:"备注",prop:"remark"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}]},"32a6":function(e,t,l){var a=l("241e"),i=l("c3a1");l("ce7e")("keys",(function(){return function(e){return i(a(e))}}))},"5d48":function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"c-upload"},[e.base64?l("div",{staticClass:"file-select preview",attrs:{title:"双击大图预览"},on:{click:e.clickHandle}},[l("div",{staticClass:"img-view",style:{background:"url("+e.base64+")"}}),e._v(" "),l("i",{staticClass:"el-icon-delete-solid delete",on:{click:function(t){return t.stopPropagation(),e.deleteFile(t)}}}),e._v(" "),l("transition",{attrs:{name:"slide-up"}},[e.uploaded?l("i",{staticClass:"el-icon-check checked"}):e._e()])],1):l("div",{ref:"fileSelecter",staticClass:"file-select",class:{uploaded:e.uploaded},on:{click:e.fileSelect}},[l("i",{staticClass:"el-icon-upload"})]),e._v(" "),l("div",{staticClass:"title",class:{required:e.required}},[e._v(e._s(e.title))]),e._v(" "),l("input",{ref:"fileInput",staticClass:"c-file-input",attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg"},on:{change:e.fileChange}})])},i=[],r=(l("96cf"),l("3b8d")),n=l("bc3a"),p=l.n(n),o=l("ca00"),s={name:"BSingleUpload",data:function(){return{disabled:!1,file:null,width:"100%",height:"100%",mWidth:120,mHeight:120,uploaded:!1,loading:null,timmer:null,start:0,baseUrl:""}},props:{auto:{type:Boolean,default:!0},required:{type:Boolean,default:!1},title:{type:String,default:"上传图片"},value:{type:String}},computed:{base64:function(){return this.baseUrl||this.value},picUrl:{get:function(){return this.baseUrl||this.value},set:function(e){this.$emit("input",e||"")}}},mounted:function(){},methods:{clickHandle:function(){var e=this,t=+new Date;t-this.start>300&&(this.start=0,clearTimeout(this.timmer)),this.start?t-this.start<300&&(clearTimeout(this.timmer),this.viewImg(),this.start=0):(this.start=+new Date,this.timmer=setTimeout((function(){e.fileSelect(window.event)}),300))},reset:function(){this.uploaded=!1,this.file=null,this.base64="",this.baseUrl=""},viewImg:function(){this.$store.dispatch("app/setViewerImages",[this.base64]),this.$store.dispatch("app/showSingleViewerImages",!0),this.$store.dispatch("app/setSingleViewerTitle",this.title)},fileChange:function(e){var t=this,l=e.target.files[0];this.$emit("input",l),this.file=l;var a=new FileReader;this.uploaded=!1,a.onload=function(){var e=new Image;e.onload=function(){var i=e,r=i.width,n=i.height,p=o["a"].autoImgSize(r,n,t.mWidth,t.mHeight);t.width=p.width,t.height=p.height,t.base64=a.result,l.base64=a.result,t.baseUrl=a.result,e=null,a=null,t.auto&&t.upload()},e.onerror=function(e){t.$message.error("解析图片失败")},e.src=a.result},a.onError=function(){t.$message.error("解析图片失败")},a.readAsDataURL(l)},upload:function(e){var t=this;return new Promise((function(l,a){if("file"!==o["a"].type(t.file))l({result:200});else{if(!t.file)return void t.$Toast({title:"提示",message:"请先选择图片"});t.loading=t.$loading({target:t.$el,text:"正在上传"});window;var i={"Content-Type":"multipart/form-data"},r=p.a.create({baseURL:"http://testapi.wallet.alpex.pro/wallet/util"}),n=new FormData;n.append("type","exchange"),n.append("files",t.file),r.post("/open/uploadFile",n,{headers:i}).then((function(i){var r=i.data;200===r.result?(e&&t.$Toast({title:"提示",message:"上传成功"}),t.uploaded=!0,t.picUrl=r.result.urls[0],l(r)):(e&&t.$Toast({title:"提示",message:"上传失败"}),a())})).catch((function(e){a(),console.error(e)})).finally((function(){t.loading.close(),t.loading=null}))}}))},deleteFile:function(){this.file=null,this.reset(),this.uploaded=!1},fileSelect:function(e){var t=this.$refs.fileInput;t.value="",t.click()},changeToBase64:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,l,a,i,r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.file&&!this.loading){e.next=2;break}return e.abrupt("return");case 2:if(this.loading=!0,this,!o["a"].isBase64(this.value)){e.next=10;break}t=new Image,t.onload=function(){var e=o["a"].autoImgSize(t.width,t.height,n.mWidth,n.mHeight),l=e.width,a=e.height;n.width=l,n.height=a,n.file={base64:n.value},n.base64=n.value,t=null,n.loading=null},t.src=this.value,e.next=14;break;case 10:return e.next=12,o["a"].img2base64(this.value);case 12:l=e.sent,200===l.result&&(a=o["a"].autoImgSize(l.width,l.height,this.mWidth,this.mHeight),i=a.width,r=a.height,this.file={base64:l.base64},this.width=i,this.height=r,this.base64=l.base64,this.loading=null);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},c=s,u=(l("6245"),l("0c7c")),b=Object(u["a"])(c,a,i,!1,null,null,null);t["a"]=b.exports},6245:function(e,t,l){"use strict";var a=l("9c9a"),i=l.n(a);i.a},7514:function(e,t,l){"use strict";var a=l("5ca1"),i=l("0a49")(5),r="find",n=!0;r in[]&&Array(1)[r]((function(){n=!1})),a(a.P+a.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),l("9c6c")(r)},"87f3":function(e,t,l){var a=l("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,l){l("32a6"),e.exports=l("584a").Object.keys},9278:function(e,t,l){var a=l("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},"9c9a":function(e,t,l){},a4bb:function(e,t,l){e.exports=l("8aae")},a8db:function(e,t,l){"use strict";var a=l("e265"),i=l.n(a),r=l("a4bb"),n=l.n(r);function p(e,t){if(null==e)return{};var l,a,i={},r=n()(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(i[l]=e[l]);return i}function o(e,t){if(null==e)return{};var l,a,r=p(e,t);if(i.a){var n=i()(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}l.d(t,"a",(function(){return o}))},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ce7e:function(e,t,l){var a=l("63b6"),i=l("584a"),r=l("294c");e.exports=function(e,t){var l=(i.Object||{})[e]||Object[e],n={};n[e]=t(l),a(a.S+a.F*r((function(){l(1)})),"Object",n)}},e265:function(e,t,l){e.exports=l("ed33")},ed08:function(e,t,l){"use strict";l.d(t,"a",(function(){return i}));l("28a5"),l("f576"),l("a481"),l("6b54");var a=l("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var l,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?l=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),l=new Date(e));var r={y:l.getFullYear(),m:l.getMonth()+1,d:l.getDate(),h:l.getHours(),i:l.getMinutes(),s:l.getSeconds(),a:l.getDay()},n=i.replace(/{([ymdhisa])+}/g,(function(e,t){var l=r[t];return"a"===t?["日","一","二","三","四","五","六"][l]:l.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},ed33:function(e,t,l){l("014b"),e.exports=l("584a").Object.getOwnPropertySymbols},ff53:function(e,t,l){"use strict";var a=l("75fc");l("9278"),l("87f3"),l("a481"),l("6b54"),l("28a5"),l("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function r(e){var t=e.toString().split(/[eE]/),l=(t[0].split(".")[1]||"").length-+(t[1]||0);return l>0?l:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=r(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function p(e){h&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function o(e,t){for(var l=arguments.length,i=new Array(l>2?l-2:0),s=2;s<l;s++)i[s-2]=arguments[s];if(i.length>0)return o.apply(void 0,[o(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var c=n(e),u=n(t),b=r(e)+r(t),h=c*u;return p(h),h/Math.pow(10,b)}function s(e,t){for(var l=arguments.length,i=new Array(l>2?l-2:0),n=2;n<l;n++)i[n-2]=arguments[n];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var p=Math.pow(10,Math.max(r(e),r(t)));return(o(e,p)+o(t,p))/p}function c(e,t){for(var l=arguments.length,i=new Array(l>2?l-2:0),n=2;n<l;n++)i[n-2]=arguments[n];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var p=Math.pow(10,Math.max(r(e),r(t)));return(o(e,p)-o(t,p))/p}function u(e,t){for(var l=arguments.length,s=new Array(l>2?l-2:0),c=2;c<l;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(a["a"])(s.slice(1))));var b=n(e),h=n(t);return p(b),p(h),o(b/h,i(Math.pow(10,r(t)-r(e))))}function b(e,t){var l=Math.pow(10,t);return u(Math.round(o(e,l)),l)}var h=!0;function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];h=e}t["a"]={strip:i,plus:s,minus:c,times:o,divide:u,round:b,digitLength:r,float2Fixed:n,enableBoundaryChecking:d}}}]);