(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf13f80"],{"1e4d":function(e,t,r){"use strict";var a=r("3c19"),n=r.n(a);n.a},"2e08":function(e,t,r){var a=r("9def"),n=r("9744"),i=r("be13");e.exports=function(e,t,r,l){var o=String(i(e)),p=o.length,s=void 0===r?" ":String(r),u=a(t);if(u<=p||""==s)return o;var c=u-p,d=n.call(s,Math.ceil(c/s.length));return d.length>c&&(d=d.slice(0,c)),l?d+o:o+d}},"3c19":function(e,t,r){},7514:function(e,t,r){"use strict";var a=r("5ca1"),n=r("0a49")(5),i="find",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),a(a.P+a.F*l,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,r){"use strict";var a=r("4588"),n=r("be13");e.exports=function(e){var t=String(n(this)),r="",i=a(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},cd08:function(e,t,r){"use strict";r.d(t,"h",(function(){return w})),r.d(t,"i",(function(){return x})),r.d(t,"l",(function(){return y})),r.d(t,"m",(function(){return v})),r.d(t,"j",(function(){return b})),r.d(t,"k",(function(){return m})),r.d(t,"p",(function(){return h})),r.d(t,"q",(function(){return g})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return f})),r.d(t,"n",(function(){return p})),r.d(t,"o",(function(){return s})),r.d(t,"r",(function(){return a})),r.d(t,"s",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return c}));var a=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"},{label:"角色权限开关",prop:"status",type:"switch",fn:"switchCoin",alias:"trroleauth"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"修改/授权",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],n=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"}],i=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"账号状态",prop:"status",type:"filter",show_type:"text",width:"120",filters:[{text:"开启",val:1},{text:"关闭",val:0}]},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],l=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"账号状态",prop:"status",type:"filter",show_type:"text",width:"120",filters:[{text:"开启",val:1},{text:"关闭",val:0}]}],o=[{type:"text",label:"账号",prop:"account",value:"",placeHolder:"请输入账号"}],p=[{label:"操作人员",prop:"account"},{label:"角色",prop:"roleName"},{label:"内容",prop:"content"},{label:"请求地址",prop:"requestAddress"},{label:"IP",prop:"userIp"},{label:"时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"账号",prop:"account",value:""},{type:"text",label:"角色",prop:"roleName",value:""},{type:"text",label:"内容",prop:"content",value:""},{type:"text",label:"请求地址",prop:"requestAddress",value:""},{type:"text",label:"IP",prop:"userIp",value:""}],u=[{label:"路径名称",prop:"name"},{label:"请求路径",prop:"requestUrl"},{label:"操作",prop:"action",type:"action",width:150,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"primary"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],c=[{type:"text",label:"路径名称",prop:"name",value:""},{type:"text",label:"请求路径",prop:"requestUrl",value:""}],d=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],f=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],b=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],m=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],h=[{label:"账号",prop:"account"},{label:"职务",prop:"jobName"},{label:"部门",prop:"deptName"},{label:"级别",prop:"isOwer",type:"filter",show_type:"textColorLine",width:"120",filters:[{text:"普通成员",val:0},{text:"部门负责人",val:1}]},{label:"备注",prop:"name"},{label:"添加时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"可用状态",prop:"status",type:"switch",fn:"switch",alias:"trswitch"},{label:"操作",width:"180",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary"},{label:"删除",fn:"del",type:"primary"}]}],g=[{type:"text",label:"搜索部门",prop:"name",value:"",width:"350px"}],y=[{label:"IP地址",prop:"ip"},{label:"名单类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"白名单",val:1},{text:"黑名单",val:2}]},{label:"启用/禁用",prop:"enable",type:"filter_switch",fn:"trable",alias:"trable",width:"150",filter_key:"property",filter_status:1},{label:"IP类型",prop:"property",type:"filter",show_type:"text",filters:[{text:"内部",val:1},{text:"外部",val:2}]},{label:"备注",prop:"remark"},{label:"操作",prop:"action",type:"action",width:240,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit",filter_type:"arrayExcept",filter_key:"property",filter_status:["1"]},{label:"删除",fn:"delete",type:"danger",alias:"delete",filter_type:"arrayExcept",filter_key:"property",filter_status:["1"]}]}],v=[{label:"IP地址",prop:"ip"},{label:"名单类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"白名单",val:1},{text:"黑名单",val:2}]},{label:"启用/禁用",prop:"enable",type:"filter",show_type:"text",filters:[{text:"启用",val:!0},{text:"禁用",val:!1}]},{label:"IP类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"内部",val:1},{text:"外部",val:2}]},{label:"备注",prop:"remark"}],w=[{label:"域名地址",prop:"domainAddress"},{label:"用户IP地址",prop:"userIpAddress"},{label:"设备型号",prop:"deviceModel"},{label:"操作系统",prop:"operatingSystem"},{label:"运营商",prop:"operator"},{label:"失败记录时间",prop:"created"}],x=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{label:"域名地址",prop:"domainAddress"},{label:"用户IP地址",prop:"userIpAddress"},{label:"运营商",prop:"operator"}]},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("7618");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,n=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var i={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},l=n.replace(/{([ymdhisa])+}/g,(function(e,t){var r=i[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return l=l.replace(/\//gi,"-"),l}},f576:function(e,t,r){"use strict";var a=r("5ca1"),n=r("2e08"),i=r("a25f"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*l,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},f982:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"role-container"},[e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addRole}},[e._v("添加角色")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"roleForm",attrs:{model:e.roleForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"角色名称","label-width":e.formLabelWidth,prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),e._v(" "),r("el-form-item",{staticClass:"tree-line",attrs:{label:"权限","label-width":e.formLabelWidth}},[r("el-tree",{ref:"tree",attrs:{accordion:!0,"check-strictly":!0,data:e.treeData,"show-checkbox":"","node-key":"id",props:e.tree_props}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},n=[],i=(r("6762"),r("2fdb"),r("ac6a"),r("28a5"),r("7f7f"),r("96cf"),r("3b8d")),l=r("c249"),o=r("2fee"),p=r("f21b"),s=r("cd08"),u=r("4ec3"),c={name:"Role",components:{Btable:o["a"],Bsearch:l["a"],iconPage:p["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],current_page:1,pageSize:this.$pageSize,total:0,pages:0,treeData:[],dialogFormVisible:!1,formName:"添加角色",formLabelWidth:"120px",rules:{name:[{required:!0,message:"必填",trigger:"blur"}]},roleForm:{id:"",name:"",menuId:""},tree_props:{label:"name",children:"children"}}},methods:{addRole:function(){var e=this;this.formName="添加角色",this.dialogFormVisible=!0,this.roleForm.id="",this.roleForm.name="",this.roleForm.menuId="",setTimeout((function(){e.$refs.tree.setCheckedKeys([])}),0)},confirmOp:function(){var e=this;this.$refs["roleForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,n,i,l,o,p,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=21;break}if(a=e.$refs["tree"].getCheckedKeys(),e.roleForm.menuId=a.join(","),n=e.roleForm,i=n.id,l=n.name,o=n.menuId,""!==i){t.next=13;break}return e.btnLoading=!0,t.next=8,u["a"].addRole({name:l,menuId:o});case 8:p=t.sent,p&&(e.$message({message:"新增角色成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1,t.next=19;break;case 13:return e.btnLoading=!0,t.next=16,u["a"].editRole({id:i,name:l,menuId:o});case 16:s=t.sent,s&&(e.$message({message:"编辑角色成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 19:t.next=22;break;case 21:return t.abrupt("return",!1);case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a,n,l,o,p=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"switchCoin"!==r){e.next=7;break}return n={id:a.id,status:a.status?0:1},e.next=5,u["a"].editRole(n);case 5:l=e.sent,l&&(this.$message({message:l.data.message,type:"success"}),this.getList());case 7:"edit"===r&&(this.formName="编辑",this.roleForm.id=a.id,this.roleForm.name=a.name,o=a.menuId.indexOf(",")>-1?a.menuId.split(","):[a.menuId],this.dialogFormVisible=!0,setTimeout((function(){p.$refs["tree"].setCheckedKeys(o)}),0)),"delete"===r&&this.$confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].deleteRole({id:a.id});case 2:t=e.sent,t&&(p.$message({message:"删除角色成功",type:"success"}),p.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n,i,l,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.listLoading=!0,e.next=6,u["a"].getRoleList(t);case 6:r=e.sent,r&&(a=r.data.data,n=a.records,i=a.total,l=a.current,o=a.pages,n.forEach((function(e){e["status"]=!e["status"]})),this.list=n,this.total=i,this.pages=o,this.current_page=l),this.listLoading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getMenuInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getMenuList({pageNum:1,pageSize:100,userType:0});case 2:t=e.sent,t&&(this.treeData=t.data.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),delSameItem:function(e,t){var r=[];return e.forEach((function(e){t.includes(e)||r.push(e)})),r}},mounted:function(){var e=this.$util.getAuthority("Role",s["r"],s["s"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.getList(),this.getMenuInfo()}},d=c,f=(r("1e4d"),r("0c7c")),b=Object(f["a"])(d,a,n,!1,null,null,null);t["default"]=b.exports},ff53:function(e,t,r){"use strict";var a=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function l(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?n(Number(e)*Math.pow(10,t)):Number(e)}function o(e){f&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),s=2;s<r;s++)n[s-2]=arguments[s];if(n.length>0)return p.apply(void 0,[p(e,t),n[0]].concat(Object(a["a"])(n.slice(1))));var u=l(e),c=l(t),d=i(e)+i(t),f=u*c;return o(f),f/Math.pow(10,d)}function s(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),l=2;l<r;l++)n[l-2]=arguments[l];if(n.length>0)return s.apply(void 0,[s(e,t),n[0]].concat(Object(a["a"])(n.slice(1))));var o=Math.pow(10,Math.max(i(e),i(t)));return(p(e,o)+p(t,o))/o}function u(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),l=2;l<r;l++)n[l-2]=arguments[l];if(n.length>0)return u.apply(void 0,[u(e,t),n[0]].concat(Object(a["a"])(n.slice(1))));var o=Math.pow(10,Math.max(i(e),i(t)));return(p(e,o)-p(t,o))/o}function c(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),u=2;u<r;u++)s[u-2]=arguments[u];if(s.length>0)return c.apply(void 0,[c(e,t),s[0]].concat(Object(a["a"])(s.slice(1))));var d=l(e),f=l(t);return o(d),o(f),p(d/f,n(Math.pow(10,i(t)-i(e))))}function d(e,t){var r=Math.pow(10,t);return c(Math.round(p(e,r)),r)}var f=!0;function b(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f=e}t["a"]={strip:n,plus:s,minus:u,times:p,divide:c,round:d,digitLength:i,float2Fixed:l,enableBoundaryChecking:b}}}]);