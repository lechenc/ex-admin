(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563d878c"],{"15fd":function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}function i(e,t){if(null==e)return{};var r,i,n=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return i}))},"2e08":function(e,t,r){var a=r("9def"),i=r("9744"),n=r("be13");e.exports=function(e,t,r,o){var l=String(n(e)),s=l.length,p=void 0===r?" ":String(r),c=a(t);if(c<=s||""==p)return l;var u=c-s,d=i.call(p,Math.ceil(u/p.length));return d.length>u&&(d=d.slice(0,u)),o?d+l:l+d}},"3ccd":function(e,t,r){},4078:function(e,t,r){"use strict";r("3ccd")},7514:function(e,t,r){"use strict";var a=r("5ca1"),i=r("0a49")(5),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(n)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,r){"use strict";var a=r("4588"),i=r("be13");e.exports=function(e){var t=String(i(this)),r="",n=a(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},c804:function(e,t,r){"use strict";r.d(t,"j",(function(){return a})),r.d(t,"k",(function(){return i})),r.d(t,"g",(function(){return n})),r.d(t,"h",(function(){return o})),r.d(t,"i",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f}));var a=[{label:"版本号",prop:"version"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"安卓",val:2},{text:"IOS",val:1}]},{label:"下载链接",prop:"downloadUrl"},{label:"创建时间",prop:"createTime"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],i=[{label:"版本号",prop:"version"},{label:"客户端",prop:"deviceType",type:"filter",show_type:"text",filters:[{text:"安卓",val:2},{text:"IOS",val:1}]},{label:"下载链接",prop:"downloadUrl"},{label:"创建时间",prop:"createTime"}],n=[{label:"版本号",prop:"versionNumber"},{label:"名称",prop:"keyIdArr",type:"labelArr",typeDetail:"stringlist"},{label:"压缩包URL",prop:"compressedPackageUrl"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"是否灰度",prop:"scaleStatus",type:"switch",fn:"trputon",alias:"trputon"},{label:"是否启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"是否登录展示",prop:"onlineStatus",type:"switch",fn:"trlogin",alias:"trlogin",width:130},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],o=[{label:"版本号",prop:"versionNumber"},{label:"名称",prop:"keyIdArr",type:"labelArr",typeDetail:"stringlist"},{label:"压缩包URL",prop:"compressedPackageUrl"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],l=[],s=[{label:"排序",prop:"sort"},{label:"名称",prop:"keyName"},{label:"key",prop:"appKey"},{label:"英文名称",prop:"englishKeyName"},{label:"白天icon",prop:"iconUrl",type:"img"},{label:"黑天icon",prop:"blackIconUrl",type:"img"},{label:"Html URL",prop:"htmlUrl"},{label:"indexName",prop:"indexName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"首页是否启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"是否需要登录进入",prop:"onlineStatus",type:"switch",fn:"trlogin",alias:"trlogin",width:160},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],p=[{label:"排序",prop:"sort"},{label:"名称",prop:"keyName"},{label:"key",prop:"appKey"},{label:"英文名称",prop:"englishKeyName"},{label:"icon",prop:"iconUrl",type:"img"},{label:"Html URL",prop:"htmlUrl"},{label:"indexName",prop:"indexName"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],c=[],u=[{label:"名称",prop:"name"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],d=[{label:"名称",prop:"name"},{label:"UID",prop:"uid"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],f=[]},ce9a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grayScale-container"},[r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addLine}},[e._v("添加")])],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,width:"500px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"名称",prop:"name","label-width":e.labelWidth}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"UID",prop:"uid","label-width":e.labelWidth}},[r("el-input",{attrs:{type:"number",placeholder:"请输入"},model:{value:e.form.uid,callback:function(t){e.$set(e.form,"uid",t)},expression:"form.uid"}})],1)],1),e._v(" "),r("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1)],1)},i=[],n=r("5530"),o=r("15fd"),l=(r("ac6a"),r("7f7f"),r("96cf"),r("1da1")),s=r("c249"),p=r("2fee"),c=r("f21b"),u=r("c804"),d=r("4ec3"),f=["id","uid"],b={name:"GrayScale",components:{Btable:p["a"],Bsearch:s["a"],iconPage:c["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,title:"添加",labelWidth:"100px",dialogVisible:!1,form:{id:"",name:"",uid:""},rules:{name:[{required:!0,message:"必填"}],uid:[{required:!0,message:"必填"}]},curRow:{}}},methods:{doHandle:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,this.curRow=a,"edit"===r&&(this.title="编辑",this.dialogVisible=!0,this.$nextTick((function(){i.$refs["form"].resetFields(),i.form={id:a.id,name:a.name,uid:a.uid}}))),"del"===r&&this.$confirm("确定删除？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:a.id},e.next=3,d["a"].getDeleteGrayScale(t);case 3:r=e.sent,r&&(i.$message({type:"success",message:"通过操作成功!"}),i.getList());case 5:case"end":return e.stop()}}),e)})))).catch((function(){}));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},addLine:function(){var e=this;this.title="添加",this.dialogVisible=!0,this.$nextTick((function(){e.form={id:"",name:"",uid:""},e.$refs["form"].resetFields()}))},confirmOp:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(r){var a,i,l,s,p,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=16;break}if(a=e.form,i=a.id,l=a.uid,s=Object(o["a"])(a,f),p=Object(n["a"])({uid:l},s),e.btnLoading=!0,""!==i){t.next=10;break}return t.next=7,d["a"].getAddGrayScale(p);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,d["a"].getEditGrayScale(Object(n["a"])({id:i},p));case 12:t.t0=t.sent;case 13:c=t.t0,c&&(u=""===i?"添加成功":"编辑成功",e.$message({message:u,type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getList:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,r,a,i,n,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,d["a"].getGrayScalePageList(t);case 7:r=e.sent,r&&(a=r.data.data,i=a.records,n=a.total,o=a.current,l=a.pages,this.list=i,this.total=n,this.current_page=o,this.pages=l),this.listLoading=!1;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("GrayScale",u["a"],u["b"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchCofig=this.$util.clone(u["c"]),this.getList()}},g=b,m=(r("4078"),r("2877")),h=Object(m["a"])(g,a,i,!1,null,null,null);t["default"]=h.exports},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("53ca");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var n={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},o=i.replace(/{([ymdhisa])+}/g,(function(e,t){var r=n[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},f576:function(e,t,r){"use strict";var a=r("5ca1"),i=r("2e08"),n=r("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);a(a.P+a.F*o,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,r){"use strict";var a=r("2909");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function n(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=n(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function l(e){f&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),p=2;p<r;p++)i[p-2]=arguments[p];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var c=o(e),u=o(t),d=n(e)+n(t),f=c*u;return l(f),f/Math.pow(10,d)}function p(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(i.length>0)return p.apply(void 0,[p(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var l=Math.pow(10,Math.max(n(e),n(t)));return(s(e,l)+s(t,l))/l}function c(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(a["a"])(i.slice(1))));var l=Math.pow(10,Math.max(n(e),n(t)));return(s(e,l)-s(t,l))/l}function u(e,t){for(var r=arguments.length,p=new Array(r>2?r-2:0),c=2;c<r;c++)p[c-2]=arguments[c];if(p.length>0)return u.apply(void 0,[u(e,t),p[0]].concat(Object(a["a"])(p.slice(1))));var d=o(e),f=o(t);return l(d),l(f),s(d/f,i(Math.pow(10,n(t)-n(e))))}function d(e,t){var r=Math.pow(10,t);return u(Math.round(s(e,r)),r)}var f=!0;function b(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f=e}t["a"]={strip:i,plus:p,minus:c,times:s,divide:u,round:d,digitLength:n,float2Fixed:o,enableBoundaryChecking:b}}}]);