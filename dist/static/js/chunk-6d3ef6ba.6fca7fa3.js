(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3ef6ba"],{"2e08":function(e,t,r){var a=r("9def"),o=r("9744"),n=r("be13");e.exports=function(e,t,r,i){var s=String(n(e)),l=s.length,u=void 0===r?" ":String(r),c=a(t);if(c<=l||""==u)return s;var d=c-l,p=o.call(u,Math.ceil(d/u.length));return p.length>d&&(p=p.slice(0,d)),i?p+s:s+p}},"57d5":function(e,t,r){},"70ac":function(e,t,r){var a;(function(o){"use strict";function n(e,t){var r=(65535&e)+(65535&t),a=(e>>16)+(t>>16)+(r>>16);return a<<16|65535&r}function i(e,t){return e<<t|e>>>32-t}function s(e,t,r,a,o,s){return n(i(n(n(t,e),n(a,s)),o),r)}function l(e,t,r,a,o,n,i){return s(t&r|~t&a,e,t,o,n,i)}function u(e,t,r,a,o,n,i){return s(t&a|r&~a,e,t,o,n,i)}function c(e,t,r,a,o,n,i){return s(t^r^a,e,t,o,n,i)}function d(e,t,r,a,o,n,i){return s(r^(t|~a),e,t,o,n,i)}function p(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var r,a,o,i,s,p=1732584193,m=-271733879,f=-1732584194,g=271733878;for(r=0;r<e.length;r+=16)a=p,o=m,i=f,s=g,p=l(p,m,f,g,e[r],7,-680876936),g=l(g,p,m,f,e[r+1],12,-389564586),f=l(f,g,p,m,e[r+2],17,606105819),m=l(m,f,g,p,e[r+3],22,-1044525330),p=l(p,m,f,g,e[r+4],7,-176418897),g=l(g,p,m,f,e[r+5],12,1200080426),f=l(f,g,p,m,e[r+6],17,-1473231341),m=l(m,f,g,p,e[r+7],22,-45705983),p=l(p,m,f,g,e[r+8],7,1770035416),g=l(g,p,m,f,e[r+9],12,-1958414417),f=l(f,g,p,m,e[r+10],17,-42063),m=l(m,f,g,p,e[r+11],22,-1990404162),p=l(p,m,f,g,e[r+12],7,1804603682),g=l(g,p,m,f,e[r+13],12,-40341101),f=l(f,g,p,m,e[r+14],17,-1502002290),m=l(m,f,g,p,e[r+15],22,1236535329),p=u(p,m,f,g,e[r+1],5,-165796510),g=u(g,p,m,f,e[r+6],9,-1069501632),f=u(f,g,p,m,e[r+11],14,643717713),m=u(m,f,g,p,e[r],20,-373897302),p=u(p,m,f,g,e[r+5],5,-701558691),g=u(g,p,m,f,e[r+10],9,38016083),f=u(f,g,p,m,e[r+15],14,-660478335),m=u(m,f,g,p,e[r+4],20,-405537848),p=u(p,m,f,g,e[r+9],5,568446438),g=u(g,p,m,f,e[r+14],9,-1019803690),f=u(f,g,p,m,e[r+3],14,-187363961),m=u(m,f,g,p,e[r+8],20,1163531501),p=u(p,m,f,g,e[r+13],5,-1444681467),g=u(g,p,m,f,e[r+2],9,-51403784),f=u(f,g,p,m,e[r+7],14,1735328473),m=u(m,f,g,p,e[r+12],20,-1926607734),p=c(p,m,f,g,e[r+5],4,-378558),g=c(g,p,m,f,e[r+8],11,-2022574463),f=c(f,g,p,m,e[r+11],16,1839030562),m=c(m,f,g,p,e[r+14],23,-35309556),p=c(p,m,f,g,e[r+1],4,-1530992060),g=c(g,p,m,f,e[r+4],11,1272893353),f=c(f,g,p,m,e[r+7],16,-155497632),m=c(m,f,g,p,e[r+10],23,-1094730640),p=c(p,m,f,g,e[r+13],4,681279174),g=c(g,p,m,f,e[r],11,-358537222),f=c(f,g,p,m,e[r+3],16,-722521979),m=c(m,f,g,p,e[r+6],23,76029189),p=c(p,m,f,g,e[r+9],4,-640364487),g=c(g,p,m,f,e[r+12],11,-421815835),f=c(f,g,p,m,e[r+15],16,530742520),m=c(m,f,g,p,e[r+2],23,-995338651),p=d(p,m,f,g,e[r],6,-198630844),g=d(g,p,m,f,e[r+7],10,1126891415),f=d(f,g,p,m,e[r+14],15,-1416354905),m=d(m,f,g,p,e[r+5],21,-57434055),p=d(p,m,f,g,e[r+12],6,1700485571),g=d(g,p,m,f,e[r+3],10,-1894986606),f=d(f,g,p,m,e[r+10],15,-1051523),m=d(m,f,g,p,e[r+1],21,-2054922799),p=d(p,m,f,g,e[r+8],6,1873313359),g=d(g,p,m,f,e[r+15],10,-30611744),f=d(f,g,p,m,e[r+6],15,-1560198380),m=d(m,f,g,p,e[r+13],21,1309151649),p=d(p,m,f,g,e[r+4],6,-145523070),g=d(g,p,m,f,e[r+11],10,-1120210379),f=d(f,g,p,m,e[r+2],15,718787259),m=d(m,f,g,p,e[r+9],21,-343485551),p=n(p,a),m=n(m,o),f=n(f,i),g=n(g,s);return[p,m,f,g]}function m(e){var t,r="";for(t=0;t<32*e.length;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function f(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;for(t=0;t<8*e.length;t+=8)r[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return r}function g(e){return m(p(f(e),8*e.length))}function b(e,t){var r,a,o=f(e),n=[],i=[];for(n[15]=i[15]=void 0,o.length>16&&(o=p(o,8*e.length)),r=0;r<16;r+=1)n[r]=909522486^o[r],i[r]=1549556828^o[r];return a=p(n.concat(f(t)),512+8*t.length),m(p(i.concat(a),640))}function h(e){var t,r,a="0123456789abcdef",o="";for(r=0;r<e.length;r+=1)t=e.charCodeAt(r),o+=a.charAt(t>>>4&15)+a.charAt(15&t);return o}function v(e){return unescape(encodeURIComponent(e))}function y(e){return g(v(e))}function w(e){return h(y(e))}function C(e,t){return b(v(e),v(t))}function F(e,t){return h(C(e,t))}function x(e,t,r){return t?r?C(t,e):F(t,e):r?y(e):w(e)}function k(e,t,r){return x(e+"hello, moto",t,r)}a=function(){return{md5:x,hbmd5:k}}.call(t,r,t,e),void 0===a||(e.exports=a)})()},7514:function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(5),n="find",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(n)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"91f2":function(e,t,r){"use strict";r("57d5")},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,r){"use strict";var a=r("4588"),o=r("be13");e.exports=function(e){var t=String(o(this)),r="",n=a(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},cd08:function(e,t,r){"use strict";r.d(t,"h",(function(){return f})),r.d(t,"i",(function(){return g})),r.d(t,"l",(function(){return b})),r.d(t,"m",(function(){return h})),r.d(t,"f",(function(){return p})),r.d(t,"g",(function(){return m})),r.d(t,"j",(function(){return l})),r.d(t,"k",(function(){return u})),r.d(t,"n",(function(){return a})),r.d(t,"o",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return d}));var a=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"},{label:"角色权限开关",prop:"status",type:"switch",fn:"switchCoin",alias:"trroleauth"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"修改/授权",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],o=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"}],n=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"账号状态",prop:"status",type:"filter",show_type:"text",width:"120",filters:[{text:"开启",val:1},{text:"关闭",val:0}]},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],i=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"账号状态",prop:"status",type:"filter",show_type:"text",width:"120",filters:[{text:"开启",val:1},{text:"关闭",val:0}]}],s=[{type:"text",label:"账号",prop:"account",value:"",placeHolder:"请输入账号"}],l=[{label:"操作人员",prop:"account"},{label:"角色",prop:"roleName"},{label:"内容",prop:"content"},{label:"请求地址",prop:"requestAddress"},{label:"IP",prop:"userIp"},{label:"时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"账号",prop:"account",value:""},{type:"text",label:"角色",prop:"roleName",value:""},{type:"text",label:"内容",prop:"content",value:""},{type:"text",label:"请求地址",prop:"requestAddress",value:""},{type:"text",label:"IP",prop:"userIp",value:""}],c=[{label:"路径名称",prop:"name"},{label:"请求路径",prop:"requestUrl"},{label:"操作",prop:"action",type:"action",width:150,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"primary"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],d=[{type:"text",label:"路径名称",prop:"name",value:""},{type:"text",label:"请求路径",prop:"requestUrl",value:""}],p=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],m=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],f=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],g=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],b=[{label:"账号",prop:"account"},{label:"职务",prop:"jobName"},{label:"部门",prop:"deptName"},{label:"级别",prop:"isOwer",type:"filter",show_type:"textColorLine",width:"120",filters:[{text:"普通成员",val:0},{text:"部门负责人",val:1}]},{label:"备注",prop:"name"},{label:"添加时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"可用状态",prop:"status",type:"switch",fn:"switch",alias:"trswitch"},{label:"操作",width:"180",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary"},{label:"删除",fn:"del",type:"primary"}]}],h=[{type:"text",label:"搜索部门",prop:"name",value:"",width:"350px"}]},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("53ca");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var n={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},i=o.replace(/{([ymdhisa])+}/g,(function(e,t){var r=n[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},f36b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"peopleManagement-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),r("div",{staticClass:"container-center"},[r("div",{staticClass:"center-sidebar"},[r("div",{staticClass:"center-sidebar-title"},[e._v("人员结构")]),e._v(" "),r("div",{staticClass:"center-sidebar-tree"},[r("el-tree",{ref:"sidebarTree",attrs:{"filter-node-method":e.filterNode,"default-expanded-keys":[1],draggable:!1,"allow-drop":e.collapse,data:e.treeData,"node-key":"roleId",props:e.defaultProps,"expand-on-click-node":!1},on:{"node-click":e.sidebarTreeClick,"node-drop":e.sort},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,o=t.data;return r("span",{staticClass:"custom-tree-node"},[r("span",{staticClass:"sac-label"},[e._v(" "+e._s(a.label)+" "),r("i",{directives:[{name:"show",rawName:"v-show",value:o.describe,expression:"data.describe"}],staticClass:"el-icon-info sac-icon",on:{click:function(t){return e.showDescription(o.describe)}}})]),e._v(" "),e.isOwer?r("span",{staticClass:"sac-btn"},[r("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[r("span",{staticClass:"el-dropdown-link"},[r("i",{staticClass:"el-icon-arrow-down el-icon-more"})]),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:{type:"add",node:a,data:o}}},[e._v("添加子部门")]),e._v(" "),r("el-dropdown-item",{attrs:{command:{type:"edit",node:a,data:o}}},[e._v("编辑部门")]),e._v(" "),r("el-dropdown-item",{attrs:{command:{type:"del",node:a,data:o}}},[e._v("删除部门")])],1)],1)],1):e._e()])}}])})],1)]),e._v(" "),e.contentIsShow&&e.userCreated?r("div",{staticClass:"center-content"},[e.isCURDAuth?r("div",{staticClass:"container-btn"},[e.userCreated?r("span",{staticClass:"btn-text"},[e._v(" "+e._s(e.currentData.name)+" ("+e._s(e.total)+"人) ")]):e._e(),e._v(" "),e.isOwer&&e.userCreated?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addpeopleManagement}},[e._v("添加成员")]):e._e()],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{actionShow:e.isOwer,filter_type_value:e.filter_type_value,listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1)]):e._e()]),e._v(" "),r("el-dialog",{attrs:{width:"600px",title:e.sidebarDialogTitle,visible:e.sidebarDialogVisible},on:{"update:visible":function(t){e.sidebarDialogVisible=t}}},[r("el-form",{ref:"sidebarForm",attrs:{model:e.sidebarForm,rules:e.sidebarRules}},[r("el-form-item",{attrs:{label:"子部门名称","label-width":e.formLabelWidth,prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.sidebarForm.name,callback:function(t){e.$set(e.sidebarForm,"name",t)},expression:"sidebarForm.name"}})],1),e._v(" "),r("el-form-item",{staticClass:"tree-line",attrs:{label:"权限",prop:"menuId","label-width":e.formLabelWidth}},[r("el-tree",{ref:"tree",attrs:{accordion:!0,"check-strictly":!0,data:e.curChildrenMenu,"show-checkbox":"","node-key":"id",props:e.tree_props}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否可用","label-width":e.formLabelWidth,prop:"status"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.sidebarForm.status,callback:function(t){e.$set(e.sidebarForm,"status",t)},expression:"sidebarForm.status"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"googleCode"}},[r("el-input",{attrs:{placeholder:"请输入"},on:{input:function(t){return e.checkVal("sidebarForm","googleCode")}},model:{value:e.sidebarForm.googleCode,callback:function(t){e.$set(e.sidebarForm,"googleCode","string"===typeof t?t.trim():t)},expression:"sidebarForm.googleCode"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.sidebarDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.sidebarBtnLoading},on:{click:e.sidebarConfirmOp}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{width:"600px",title:e.userDialogTitle,visible:e.userDialogVisible},on:{"update:visible":function(t){e.userDialogVisible=t}}},[r("el-form",{ref:"userForm",attrs:{model:e.userForm,rules:e.userRules}},[r("el-form-item",{attrs:{autocomplete:"off",label:"账号名","label-width":e.formLabelWidth,prop:"account"}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:10}},[e.accountType?r("el-select",{attrs:{disabled:e.oldType,filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入","remote-method":e.remoteMethod,loading:e.loading},on:{change:e.searchChange},model:{value:e.userForm.account,callback:function(t){e.$set(e.userForm,"account","string"===typeof t?t.trim():t)},expression:"userForm.account"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.userForm.account,callback:function(t){e.$set(e.userForm,"account","string"===typeof t?t.trim():t)},expression:"userForm.account"}})],1),e._v(" "),r("el-col",{attrs:{span:10}},[e.accountType?r("el-button",{attrs:{type:"success"},on:{click:e.changeAccountType}},[e._v("切换为普通")]):r("el-button",{attrs:{type:"primary"},on:{click:e.changeAccountType}},[e._v(" 切换为可搜索 ")])],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth,prop:"password"}},[r("el-input",{attrs:{disabled:e.oldType,type:"password","auto-complete":"new-password",autocomplete:"off"},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password","string"===typeof t?t.trim():t)},expression:"userForm.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属部门","label-width":e.formLabelWidth}},[r("el-input",{attrs:{type:"text",disabled:"",autocomplete:"off"},model:{value:e.curRoleName,callback:function(t){e.curRoleName=t},expression:"curRoleName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"职务","label-width":e.formLabelWidth,prop:"jobName"}},[r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.userForm.jobName,callback:function(t){e.$set(e.userForm,"jobName",t)},expression:"userForm.jobName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth,prop:"name"}},[r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"级别","label-width":e.formLabelWidth,prop:"isOwer"}},[r("el-radio",{attrs:{label:0,border:""},model:{value:e.userForm.isOwer,callback:function(t){e.$set(e.userForm,"isOwer",t)},expression:"userForm.isOwer"}},[e._v("普通成员")]),e._v(" "),r("el-radio",{attrs:{label:1,border:""},model:{value:e.userForm.isOwer,callback:function(t){e.$set(e.userForm,"isOwer",t)},expression:"userForm.isOwer"}},[e._v("部门负责人")])],1),e._v(" "),r("el-form-item",{staticClass:"tree-line",attrs:{label:"权限",prop:"menuId","label-width":e.formLabelWidth}},[r("el-tree",{ref:"userTree",attrs:{accordion:!0,"check-strictly":!0,data:e.currentData.childrenMenu,"show-checkbox":"","node-key":"id",props:e.tree_props}})],1),e._v(" "),r("el-form-item",{attrs:{label:""===e.userForm.userId?"新用户谷歌密钥":"谷歌密钥","label-width":e.formLabelWidth,prop:"googleCode"}},[r("el-input",{attrs:{disabled:e.oldType,autocomplete:"off"},model:{value:e.userForm.googleCode,callback:function(t){e.$set(e.userForm,"googleCode",t)},expression:"userForm.googleCode"}},[r("el-button",{staticClass:"gcode",attrs:{slot:"append",disabled:e.googleCodeDisable},on:{click:function(t){return t.stopPropagation(),e.getGoogleCode(t)}},slot:"append"},[e._v("获取密钥")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"adminGoogleCode"}},[r("el-input",{attrs:{placeholder:"请输入"},on:{input:function(t){return e.checkVal("userForm","adminGoogleCode")}},model:{value:e.userForm.adminGoogleCode,callback:function(t){e.$set(e.userForm,"adminGoogleCode","string"===typeof t?t.trim():t)},expression:"userForm.adminGoogleCode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否可用","label-width":e.formLabelWidth,prop:"status"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.userForm.status,callback:function(t){e.$set(e.userForm,"status",t)},expression:"userForm.status"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.userDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.userBtnLoading},on:{click:e.userConfirmOp}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{width:"500px",title:"确认删除?",visible:e.delDialogVisible},on:{"update:visible":function(t){e.delDialogVisible=t}}},[r("el-form",{ref:"delForm",attrs:{model:e.delForm,rules:e.delRules}},[r("el-form-item",{attrs:{label:e.delLabel,"label-width":e.formLabelWidth,prop:"account"}},[r("el-input",{attrs:{disabled:"",type:"text",autocomplete:"off"},model:{value:e.delForm.account,callback:function(t){e.$set(e.delForm,"account",t)},expression:"delForm.account"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"adminGoogleCode"}},[r("el-input",{attrs:{placeholder:"请输入"},on:{input:function(t){return e.checkVal("delForm","adminGoogleCode")}},model:{value:e.delForm.adminGoogleCode,callback:function(t){e.$set(e.delForm,"adminGoogleCode","string"===typeof t?t.trim():t)},expression:"delForm.adminGoogleCode"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.delDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.delBtnLoading},on:{click:e.delConfirmOp}},[e._v("确 定")])],1)],1)],1)},o=[],n=(r("6762"),r("2fdb"),r("28a5"),r("b85c")),i=(r("7514"),r("a481"),r("7f7f"),r("ac6a"),r("96cf"),r("1da1")),s=r("5530"),l=r("c249"),u=r("2fee"),c=r("f21b"),d=r("cd08"),p=r("4ec3"),m=r("70ac"),f=r.n(m),g=r("2f62"),b={name:"PeopleManagement",components:{Btable:u["a"],Bsearch:l["a"],iconPage:c["a"]},computed:Object(s["a"])({},Object(g["c"])({isOwer:function(e){return!!e.app.isOwer}})),data:function(){return{delLabel:"",delDialogVisible:!1,delBtnLoading:!1,delForm:{},delRules:{adminGoogleCode:[{required:!0,message:"必填",trigger:"blur"}],account:[{required:!0,message:"必填",trigger:"blur"}]},filter_type_value:"",contentIsShow:!1,userRules:{name:[{required:!0,message:"必填",trigger:"blur"}],account:[{required:!0,message:"必填",trigger:"blur"},{validator:this.validateAccount,trigger:"blur"}],password:[{required:!0,message:"必填",trigger:"blur"},{validator:this.validatePassword,trigger:"blur"}],roleName:[{required:!0,message:"必填",trigger:"blur"}],jobName:[{required:!0,message:"必填",trigger:"blur"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}],adminGoogleCode:[{required:!0,message:"必填",trigger:"blur"}]},userDialogTitle:"",userDialogVisible:!1,userForm:{},sidebarForm:{id:"",name:"",menuId:[],status:!1,googleCode:""},userBtnLoading:!1,sidebarDialogTitle:"",sidebarDialogVisible:!1,sidebarBtnLoading:!1,defaultProps:{children:"children",label:"name"},isCURDAuth:!0,listLoading:!1,list:[],searchCofig:[],configs:[],current_page:1,pageSize:this.$pageSize,total:0,pages:0,treeData:[],formName:"添加角色",formLabelWidth:"120px",currentNode:"",currentData:{},dialogTitle:"",rules:{name:[{required:!0,message:"必填",trigger:"blur"}]},sidebarRules:{name:[{required:!0,message:"必填",trigger:"blur"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}]},sidebarTreeData:[{name:"董事会",children:[{name:"深圳集团"}]}],peopleManagementForm:{id:"",name:"",menuId:""},tree_props:{label:"name",children:"children"},ruleForm:{},currentForm:{},curChildrenMenu:[],result:[],userCreated:!0,options:[],loading:!1,accountTypeText:"切换为可搜索",accountType:!1,oldType:!1,curRoleName:"",googleCodeDisable:!1}},methods:{validateAccount:function(e,t,r){""==t?r(new Error("必填")):/^[A-Za-z]{1}[A-Za-z0-9]/.test(t)?r():r(new Error("只能输入字母和数字,以字母开头"))},validatePassword:function(e,t,r){""==t?r(new Error("必填")):/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/g.test(t)||"******"===t?r():r(new Error("请输入包含字母和数字的8-16位密码"))},changeAccountType:function(){var e=this;this.accountType=!this.accountType,this.accountType?this.$nextTick((function(){e.googleCodeDisable=!1,e.oldType=!1,e.userForm.name="",e.userForm.password="",e.userForm.account="",e.userForm.jobName="",e.userForm.isOwer=0,e.userForm.googleCode=""})):this.$nextTick((function(){e.googleCodeDisable=!1,e.oldType=!1,e.userForm.name="",e.userForm.password="",e.userForm.account="",e.userForm.jobName="",e.userForm.isOwer=0,e.userForm.googleCode="",e.userRules.password=[{required:!0,message:"必填",trigger:"blur"},{validator:e.validatePassword,trigger:"blur"}],e.userRules.account=[{required:!0,message:"必填",trigger:"blur"},{validator:e.validateAccount,trigger:"blur"}],e.userRules.password[0].required=!0,e.userRules.account[0].required=!0}))},searchChange:function(e){var t=this.options.filter((function(t){return t.id==e}))[0];console.log("obj",t),t&&(this.oldType=!0,this.$refs["userForm"].resetFields(),this.userRules.password[0].required=!1,this.userRules.account[0].required=!1,this.userForm.account=t.account,this.userForm.name=t.label||"",this.userForm.password=t.loginPassword,this.userForm.jobName=t.jobName||"",this.userForm.isOwer=t.isOwer||0,this.userForm.googleCode=t.googleCode,t.googleCode?this.googleCodeDisable=!0:this.googleCodeDisable=!1)},remoteMethod:function(e){var t=this;""!==e?(this.loading=!0,this.userForm.account=e,setTimeout(Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!1,r.next=3,p["a"].apiPeopleManagementSearch({keyword:e});case 3:a=r.sent,a&&(t.options=a.data.data.filter((function(t){return t.account.toLowerCase().indexOf(e.toLowerCase())>-1})),t.options.forEach((function(e){e.label=e.account,e.value=e.id})));case 5:case"end":return r.stop()}}),r)}))),300)):this.options=[]},handleSelect:function(e){console.log(e)},delConfirmOp:function(){var e=this;this.$refs["delForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,i,s,l,u,c,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=18;break}if(a=e.delForm.type,!e.delBtnLoading){t.next=4;break}return t.abrupt("return");case 4:if(1==a?(n=e.delForm,i=n.userId,s=n.adminGoogleCode,o={userId:i,adminGoogleCode:s}):(l=e.delForm,u=l.parentRoleIdPath,c=l.adminGoogleCode,o={parentRoleIdPath:u,adminGoogleCode:c}),e.delBtnLoading=!0,1!=a){t.next=12;break}return t.next=9,p["a"].apiDeleteUserPeopleManagement(o);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,p["a"].apiDeletePeopleManagement(o);case 14:t.t0=t.sent;case 15:d=t.t0,d&&(e.$message({message:"删除成功",type:"success"}),e.delDialogVisible=!1,1==a?e.getList(e.currentData):e.getMenuList()),e.delBtnLoading=!1;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getGoogleCode:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.userForm.account){e.next=3;break}return this.$message({message:"请先填写账号名",type:"error"}),e.abrupt("return");case 3:return e.next=5,p["a"].getGoogleCode({account:this.userForm.account});case 5:t=e.sent,t&&(this.userForm.googleCode=t.data.data.secretKey,this.$nextTick((function(){r.$refs.userForm.validateField("googleCode")})));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),sidebarTreeClick:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.currentData=JSON.parse(JSON.stringify(t)),0==this.currentData.level?this.userCreated=!1:this.userCreated=!0,this.filter_type_value=this.currentData.name,0!=this.currentData.level){e.next=5;break}return e.abrupt("return");case 5:this.getList(this.currentData);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkVal:function(e,t){this[e][t]=(this[e][t]+"").replace(/[^\d]/g,"")},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},sidebarConfirmOp:function(){var e=this;this.$refs["sidebarForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,i,l,u,c,d,m,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=20;break}if(a=e.$refs["tree"].getCheckedKeys(),e.sidebarForm.menuId=a.join(","),o=e.sidebarForm,n=o.roleId,i=o.name,l=o.menuId,u=o.status,c=o.googleCode,!e.sidebarBtnLoading){t.next=6;break}return t.abrupt("return");case 6:if(d={name:i,menuId:l,googleCode:c,status:u?0:1,parentRoleId:e.currentData.roleId},e.sidebarBtnLoading=!0,n){t.next=14;break}return t.next=11,p["a"].apiAddPeopleManagementList(d);case 11:t.t0=t.sent,t.next=17;break;case 14:return t.next=16,p["a"].apiEditPeopleManagementList(Object(s["a"])({roleId:n},d));case 16:t.t0=t.sent;case 17:m=t.t0,m&&(f=n?"编辑成功":"添加成功",e.$message({message:f,type:"success"}),e.sidebarDialogVisible=!1,e.getMenuList()),e.sidebarBtnLoading=!1;case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},userConfirmOp:function(){var e=this;this.accountType&&(this.userRules.password=[],this.userRules.account=[]),this.$refs["userForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,i,l,u,c,d,m,g,b,h,v,y,w,C;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=21;break}if(a=e.$refs["userTree"].getCheckedKeys(),e.userForm.menuId=a.join(","),o=e.userForm,n=o.userId,i=o.menuId,l=o.name,u=o.roleId,c=o.password,d=o.account,m=o.jobName,g=o.isOwer,b=o.googleCode,h=o.adminGoogleCode,v=o.status,!e.userBtnLoading){t.next=6;break}return t.abrupt("return");case 6:if(y={account:d,menuId:i,name:l,roleName:e.curRoleName,jobName:m,isOwer:g,googleCode:b,adminGoogleCode:h,status:v?0:1,roleId:u},(n&&"******"!==c||!n)&&(e.accountType||(y.password=f.a.hbmd5(c))),e.userBtnLoading=!0,""!==n){t.next=15;break}return t.next=12,p["a"].apiAddUserPeopleManagementList(y);case 12:t.t0=t.sent,t.next=18;break;case 15:return t.next=17,p["a"].apiEditUserPeopleManagementList(Object(s["a"])({userId:n},y));case 17:t.t0=t.sent;case 18:w=t.t0,w&&(C=""===n?"添加成功":"编辑成功",e.$message({message:C,type:"success"}),e.userDialogVisible=!1,e.getList(e.currentData),e.options=[]),e.userBtnLoading=!1;case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showDescription:function(e){this.$alert(e,"描述",{showClose:!1,closeOnClickModal:!1}).catch((function(){}))},handleCommand:function(e){var t=this,r=e.type,a=e.node,o=e.data;if("add"==r){this.sidebarDialogTitle="创建 ".concat(o.name," 的子菜单"),this.sidebarDialogVisible=!0,this.currentNode=a;JSON.parse(JSON.stringify(o));this.$nextTick((function(){t.sidebarForm={id:"",name:"",menuId:"",status:!1,googleCode:""},t.$refs.sidebarForm.resetFields()})),this.$nextTick((function(){t.curChildrenMenu=t.currentData.childrenMenu,t.$refs.tree.setCheckedKeys([])}))}else if("edit"==r){this.sidebarDialogTitle="修改 ".concat(o.name," 菜单"),this.sidebarDialogVisible=!0;var n=JSON.parse(JSON.stringify(o));n.status=!n.status,0==this.currentData.level?this.curChildrenMenu=this.currentData.childrenMenu:this.curChildrenMenu=a.parent.data.childrenMenu,this.$nextTick((function(){t.currentData.level,t.find(t.currentData.childrenMenu,"id"),t.$refs.tree.setCheckedKeys(t.result)})),this.sidebarForm=n}else if("del"==r){if(o.children&&o.children.length>0)return void this.$message.error({title:"错误",message:"请先删除子菜单！"});this.delDialogVisible=!0,this.$nextTick((function(){t.delForm={type:2,parentRoleIdPath:o.parentRoleIdPath,account:o.name,adminGoogleCode:""},t.delLabel="部门名称",t.$refs["delForm"].resetFields()}),0)}},find:function(e,t){if(null==e)return null;var r,a=Object(n["a"])(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;o.hasOwnProperty(t)&&this.result.push(o[t]),this.find(o.children,t)}}catch(i){a.e(i)}finally{a.f()}},collapse:function(e,t,r){},sort:function(e,t,r,a){},doSearch:function(e){if(this.current_page=1,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),!this.currentData.hasOwnProperty("roleId"))return this.$message.error("请选择部门");0!=this.currentData.level&&this.getList(this.currentData)},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.currentData.hasOwnProperty("roleId")&&0!=this.currentData.level&&this.getList(this.currentData)},addpeopleManagement:function(){var e=this;this.userDialogTitle="添加成员",this.userDialogVisible=!0,this.accountType=!1,this.$nextTick((function(){e.$refs["userForm"].resetFields(),e.userForm={userId:"",name:"",password:"",account:"",jobName:"",menuId:"",isOwer:0,roleId:e.currentData.roleId,googleCode:"",adminGoogleCode:"",status:!1},e.curRoleName=e.currentData.name,e.userRules.password=[{required:!0,message:"必填",trigger:"blur"},{validator:e.validatePassword,trigger:"blur"}],e.userRules.account=[{required:!0,message:"必填",trigger:"blur"},{validator:e.validateAccount,trigger:"blur"}],e.userRules.password[0].required=!0,e.userRules.account[0].required=!0})),setTimeout((function(){e.$refs.userTree.setCheckedKeys([])}),0)},confirmOp:function(){var e=this;this.$refs["Form"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,i,s,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=21;break}if(a=e.$refs["tree"].getCheckedKeys(),e.Form.menuId=a.join(","),o=e.Form,n=o.id,i=o.name,s=o.menuId,""!==n){t.next=13;break}return e.userBtnLoading=!0,t.next=8,p["a"].add({name:i,menuId:s});case 8:l=t.sent,l&&(e.$message({message:"新增角色成功",type:"success"}),e.userDialogVisible=!1,e.getMenuList()),e.userBtnLoading=!1,t.next=19;break;case 13:return e.userBtnLoading=!0,t.next=16,p["a"].edit({id:n,name:i,menuId:s});case 16:u=t.sent,u&&(e.$message({message:"编辑角色成功",type:"success"}),e.userDialogVisible=!1,e.getMenuList()),e.userBtnLoading=!1;case 19:t.next=22;break;case 21:return t.abrupt("return",!1);case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,n,i,s,l,u,c,d,m,f,g,b,h,v,y=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"switch"!==r){e.next=7;break}return o={userId:a.userId,status:a.status?0:1},e.next=5,p["a"].apiSwitchUserPeopleManagementList(o);case 5:n=e.sent,n?(this.$message({message:n.data.message,type:"success"}),this.getList(this.currentData)):this.getList(this.currentData);case 7:"edit"===r&&(this.userDialogTitle="编辑成员",this.accountType=!1,this.userDialogVisible=!0,i=a.userId,s=a.name,l=a.password,u=a.account,c=a.deptName,d=a.jobName,m=a.menuIds,f=a.isOwer,g=a.roleId,b=a.googleCode,h=a.status,v=m.indexOf(",")>-1?m.split(","):[m],this.$nextTick((function(){y.$refs["userForm"].resetFields(),y.userForm={userId:i,name:s,password:l,account:u,jobName:d,menuId:"",isOwer:f,roleId:g,googleCode:b,status:h,adminGoogleCode:""},y.curRoleName=c}),0),setTimeout((function(){y.$refs.userTree.setCheckedKeys(v)}),0)),"del"===r&&(this.delDialogVisible=!0,this.$nextTick((function(){y.delForm={type:1,adminGoogleCode:"",account:a.account,userId:a.userId},y.delLabel="账号名称",y.$refs["delForm"].resetFields()}),0));case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),goPage:function(e){this.current_page=e,this.getList(this.currentData)},getList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,n,i,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return r={pageNum:this.current_page,pageSize:this.pageSize,id:t.roleId,level:t.level,parentRoleIdPath:t.parentRoleIdPath},this.listLoading=!0,e.next=6,p["a"].apiGetPeopleManagementListById(r);case 6:a=e.sent,a?(o=a.data.data,n=o.records,i=o.total,s=o.current,l=o.pages,n.forEach((function(e){e["status"]=!e["status"]})),this.list=n,this.total=i,this.pages=l,this.current_page=s):(this.list=[],this.total=0,this.pages=0,this.current_page=1),this.contentIsShow=!0,this.listLoading=!1;case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getMenuList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"].apiGetPeopleManagementList({});case 2:t=e.sent,t&&(this.treeData=t.data.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),delSameItem:function(e,t){var r=[];return e.forEach((function(e){t.includes(e)||r.push(e)})),r}},mounted:function(){this.configs=d["l"],this.searchCofig=this.$util.clone(d["m"]),this.getMenuList(),this.$watch((function(){return this.searchCofig[0].value}),(function(e,t){this.$refs.sidebarTree.filter(e)}))}},h=b,v=(r("91f2"),r("2877")),y=Object(v["a"])(h,a,o,!1,null,null,null);t["default"]=y.exports},f576:function(e,t,r){"use strict";var a=r("5ca1"),o=r("2e08"),n=r("a25f"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);a(a.P+a.F*i,"String",{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,r){"use strict";var a=r("2909");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function n(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=n(e);return t>0?o(Number(e)*Math.pow(10,t)):Number(e)}function s(e){m&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function l(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];if(o.length>0)return l.apply(void 0,[l(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var c=i(e),d=i(t),p=n(e)+n(t),m=c*d;return s(m),m/Math.pow(10,p)}function u(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(o.length>0)return u.apply(void 0,[u(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var s=Math.pow(10,Math.max(n(e),n(t)));return(l(e,s)+l(t,s))/s}function c(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(o.length>0)return c.apply(void 0,[c(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var s=Math.pow(10,Math.max(n(e),n(t)));return(l(e,s)-l(t,s))/s}function d(e,t){for(var r=arguments.length,u=new Array(r>2?r-2:0),c=2;c<r;c++)u[c-2]=arguments[c];if(u.length>0)return d.apply(void 0,[d(e,t),u[0]].concat(Object(a["a"])(u.slice(1))));var p=i(e),m=i(t);return s(p),s(m),l(p/m,o(Math.pow(10,n(t)-n(e))))}function p(e,t){var r=Math.pow(10,t);return d(Math.round(l(e,r)),r)}var m=!0;function f(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m=e}t["a"]={strip:o,plus:u,minus:c,times:l,divide:d,round:p,digitLength:n,float2Fixed:i,enableBoundaryChecking:f}}}]);