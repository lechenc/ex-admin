(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd24ff0c"],{"15fd":function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}function i(e,t){if(null==e)return{};var r,i,l=a(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}r.d(t,"a",(function(){return i}))},"2e08":function(e,t,r){var a=r("9def"),i=r("9744"),l=r("be13");e.exports=function(e,t,r,n){var o=String(l(e)),s=o.length,p=void 0===r?" ":String(r),c=a(t);if(c<=s||""==p)return o;var u=c-s,d=i.call(p,Math.ceil(u/p.length));return d.length>u&&(d=d.slice(0,u)),n?d+o:o+d}},"4ca8":function(e,t,r){},6162:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"version-container"},[e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addVersion}},[e._v("添加新版本")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"formValue",attrs:{model:e.formValue,rules:e.rules}},[r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id","label-width":e.formLabelWidth,prop:"id"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formValue.id,callback:function(t){e.$set(e.formValue,"id",t)},expression:"formValue.id"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"版本号","label-width":e.formLabelWidth,prop:"version"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formValue.version,callback:function(t){e.$set(e.formValue,"version",t)},expression:"formValue.version"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"客户端","label-width":e.formLabelWidth,prop:"deviceType"}},[r("el-select",{attrs:{placeholder:"",disabled:""!==e.formValue.id},model:{value:e.formValue.deviceType,callback:function(t){e.$set(e.formValue,"deviceType",t)},expression:"formValue.deviceType"}},[r("el-option",{attrs:{label:"安卓",value:2}}),e._v(" "),r("el-option",{attrs:{label:"IOS",value:1}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"下载链接","label-width":e.formLabelWidth,prop:"downloadUrl"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formValue.downloadUrl,callback:function(t){e.$set(e.formValue,"downloadUrl",t)},expression:"formValue.downloadUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"中文更新内容","label-width":e.formLabelWidth,prop:"detailZh"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.formValue.detailZh,callback:function(t){e.$set(e.formValue,"detailZh",t)},expression:"formValue.detailZh"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"英文更新内容","label-width":e.formLabelWidth,prop:"detailEn"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.formValue.detailEn,callback:function(t){e.$set(e.formValue,"detailEn",t)},expression:"formValue.detailEn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否强制更新","label-width":e.formLabelWidth,prop:"forceUpdate"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formValue.forceUpdate,callback:function(t){e.$set(e.formValue,"forceUpdate",t)},expression:"formValue.forceUpdate"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},i=[],l=r("5530"),n=r("15fd"),o=(r("96cf"),r("1da1")),s=r("2fee"),p=r("c804"),c=r("4ec3"),u=["id","forceUpdate"],d={name:"Version",components:{Btable:s["a"]},data:function(){return{isCURDAuth:!0,listLoading:!1,btnLoading:!1,list:[],configs:[],dialogFormVisible:!1,formName:"",formLabelWidth:"120px",formValue:{id:"",version:"",deviceType:"",downloadUrl:"",detailZh:"",detailEn:"",forceUpdate:!1},rules:{version:[{required:!0,message:"必填",trigger:"blur"}],deviceType:[{required:!0,message:"必填",trigger:"change"}],downloadUrl:[{required:!0,message:"必填",trigger:"blur"}],detailZh:[{required:!0,message:"必填",trigger:"blur"}],detailEn:[{required:!0,message:"必填",trigger:"blur"}],forceUpdate:[{required:!0,message:"必填",trigger:"change"}]}}},methods:{addVersion:function(){var e=this;this.formName="添加新版本",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["formValue"].resetFields()}))},confirmOp:function(){var e=this;this.$refs["formValue"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,i,o,s,p,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=16;break}if(a=e.formValue,i=a.id,o=a.forceUpdate,s=Object(n["a"])(a,u),p=Object(l["a"])({forceUpdate:o?1:0},s),e.btnLoading=!0,""!==i){t.next=10;break}return t.next=7,c["a"].addVersion(p);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,c["a"].editVersion(Object(l["a"])({id:i},p));case 12:t.t0=t.sent;case 13:d=t.t0,d&&(e.$message({message:d.data.message,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,"edit"===r&&(this.formName="编辑",this.dialogFormVisible=!0,this.$nextTick((function(){i.$refs["formValue"].resetFields();var e=a.id,t=a.version,r=a.deviceType,l=a.downloadUrl,n=a.detailZh,o=a.detailEn,s=a.forceUpdate;i.formValue={id:e,version:t,deviceType:r,downloadUrl:l,detailZh:n,detailEn:o,forceUpdate:!!s}})));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return this.listLoading=!0,e.next=5,c["a"].getVersionList({});case 5:t=e.sent,t&&(r=t.data.data,this.list=r),this.listLoading=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("Version",p["j"],p["k"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.getList()}},f=d,m=(r("f0d5"),r("2877")),b=Object(m["a"])(f,a,i,!1,null,null,null);t["default"]=b.exports},7514:function(e,t,r){"use strict";var a=r("5ca1"),i=r("0a49")(5),l="find",n=!0;l in[]&&Array(1)[l]((function(){n=!1})),a(a.P+a.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(l)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,r){"use strict";var a=r("4588"),i=r("be13");e.exports=function(e){var t=String(i(this)),r="",l=a(e);if(l<0||l==1/0)throw RangeError("Count can't be negative");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(r+=t);return r}},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},c804:function(e,t,r){"use strict";r.d(t,"j",(function(){return a})),r.d(t,"k",(function(){return i})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return n})),r.d(t,"i",(function(){return o})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f}));var a=[{label:"版本号",prop:"version"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"安卓",val:2},{text:"IOS",val:1}]},{label:"下载链接",prop:"downloadUrl"},{label:"创建时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],i=[{label:"版本号",prop:"version"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"安卓",val:2},{text:"IOS",val:1}]},{label:"下载链接",prop:"downloadUrl"},{label:"创建时间",prop:"createTime"}],l=[{label:"版本号",prop:"versionNumber"},{label:"名称",prop:"keyIdArr",type:"labelArr",typeDetail:"stringlist"},{label:"压缩包URL",prop:"compressedPackageUrl"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"是否灰度",prop:"scaleStatus",type:"switch",fn:"trputon",alias:"trputon"},{label:"是否启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"是否登录展示",prop:"onlineStatus",type:"switch",fn:"trlogin",alias:"trlogin",width:130},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],n=[{label:"版本号",prop:"versionNumber"},{label:"名称",prop:"keyIdArr",type:"labelArr",typeDetail:"stringlist"},{label:"压缩包URL",prop:"compressedPackageUrl"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],o=[],s=[{label:"排序",prop:"sort"},{label:"名称",prop:"keyName"},{label:"key",prop:"appKey"},{label:"英文名称",prop:"englishKeyName"},{label:"白天icon",prop:"iconUrl",type:"img"},{label:"黑天icon",prop:"blackIconUrl",type:"img"},{label:"Html URL",prop:"htmlUrl"},{label:"indexName",prop:"indexName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"首页是否启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"是否需要登录进入",prop:"onlineStatus",type:"switch",fn:"trlogin",alias:"trlogin",width:160},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],p=[{label:"排序",prop:"sort"},{label:"名称",prop:"keyName"},{label:"key",prop:"appKey"},{label:"英文名称",prop:"englishKeyName"},{label:"icon",prop:"iconUrl",type:"img"},{label:"Html URL",prop:"htmlUrl"},{label:"indexName",prop:"indexName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],c=[],u=[{label:"名称",prop:"name"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],d=[{label:"名称",prop:"name"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],f=[]},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("53ca");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var l={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},n=i.replace(/{([ymdhisa])+}/g,(function(e,t){var r=l[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},f0d5:function(e,t,r){"use strict";r("4ca8")},f576:function(e,t,r){"use strict";var a=r("5ca1"),i=r("2e08"),l=r("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);a(a.P+a.F*n,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,r){"use strict";var a=r("2909");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function l(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=l(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function o(e){f&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),p=2;p<r;p++)i[p-2]=arguments[p];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var c=n(e),u=n(t),d=l(e)+l(t),f=c*u;return o(f),f/Math.pow(10,d)}function p(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];if(i.length>0)return p.apply(void 0,[p(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var o=Math.pow(10,Math.max(l(e),l(t)));return(s(e,o)+s(t,o))/o}function c(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var o=Math.pow(10,Math.max(l(e),l(t)));return(s(e,o)-s(t,o))/o}function u(e,t){for(var r=arguments.length,p=new Array(r>2?r-2:0),c=2;c<r;c++)p[c-2]=arguments[c];if(p.length>0)return u.apply(void 0,[u(e,t),p[0]].concat(Object(a["a"])(p.slice(1))));var d=n(e),f=n(t);return o(d),o(f),s(d/f,i(Math.pow(10,l(t)-l(e))))}function d(e,t){var r=Math.pow(10,t);return u(Math.round(s(e,r)),r)}var f=!0;function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f=e}t["a"]={strip:i,plus:p,minus:c,times:s,divide:u,round:d,digitLength:l,float2Fixed:n,enableBoundaryChecking:m}}}]);