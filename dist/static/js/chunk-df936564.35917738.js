(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df936564"],{"1e4d":function(e,t,a){"use strict";var r=a("3c19"),n=a.n(r);n.a},"3c19":function(e,t,a){},7514:function(e,t,a){"use strict";var r=a("5ca1"),n=a("0a49")(5),i="find",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},cd08:function(e,t,a){"use strict";a.d(t,"h",(function(){return b})),a.d(t,"i",(function(){return f})),a.d(t,"l",(function(){return g})),a.d(t,"m",(function(){return h})),a.d(t,"n",(function(){return y})),a.d(t,"f",(function(){return d})),a.d(t,"g",(function(){return m})),a.d(t,"j",(function(){return p})),a.d(t,"k",(function(){return s})),a.d(t,"o",(function(){return r})),a.d(t,"p",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return c}));var r=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"},{label:"角色权限开关",prop:"status",type:"switch",fn:"switchCoin",alias:"trroleauth"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"修改/授权",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],n=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"}],i=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],l=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"}],o=[{type:"text",label:"账号",prop:"account",value:"",placeHolder:"请输入账号"}],p=[{label:"操作人员",prop:"account"},{label:"角色",prop:"roleName"},{label:"内容",prop:"content"},{label:"请求地址",prop:"requestAddress"},{label:"IP",prop:"userIp"},{label:"时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"账号",prop:"account",value:""},{type:"text",label:"角色",prop:"roleName",value:""},{type:"text",label:"内容",prop:"content",value:""},{type:"text",label:"请求地址",prop:"requestAddress",value:""},{type:"text",label:"IP",prop:"userIp",value:""}],u=[{label:"路径名称",prop:"name"},{label:"请求路径",prop:"requestUrl"},{label:"操作",prop:"action",type:"action",width:150,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"primary"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],c=[{type:"text",label:"路径名称",prop:"name",value:""},{type:"text",label:"请求路径",prop:"requestUrl",value:""}],d=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],m=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],b=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],f=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],g=[{label:"账号",prop:"account"},{label:"职务",prop:"jobName"},{label:"部门",prop:"deptName"},{label:"备注",prop:"name"},{label:"添加时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"可用状态",prop:"status",type:"switch",fn:"switch",alias:"trswitch"},{label:"操作",width:"180",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",filter_key:"deptName",filter_type:"filter_label",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],h=[{label:"账号",prop:"account"},{label:"职务",prop:"jobName"},{label:"部门",prop:"deptName"},{label:"备注",prop:"name"},{label:"添加时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],y=[{type:"text",label:"搜索部门",prop:"name",value:"",width:"350px"},{type:"text",label:"搜索成员",prop:"name1",value:"",width:"350px"}]},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,n=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},l=n.replace(/{([ymdhisa])+}/g,(function(e,t){var a=i[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return l=l.replace(/\//gi,"-"),l}},f982:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"role-container"},[e.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addRole}},[e._v("添加角色")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"roleForm",attrs:{model:e.roleForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"角色名称","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),e._v(" "),a("el-form-item",{staticClass:"tree-line",attrs:{label:"权限","label-width":e.formLabelWidth}},[a("el-tree",{ref:"tree",attrs:{accordion:!0,"check-strictly":!0,data:e.treeData,"show-checkbox":"","node-key":"id",props:e.tree_props}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},n=[],i=(a("6762"),a("2fdb"),a("ac6a"),a("28a5"),a("7f7f"),a("96cf"),a("3b8d")),l=a("c249"),o=a("2fee"),p=a("f21b"),s=a("cd08"),u=a("4ec3"),c={name:"Role",components:{Btable:o["a"],Bsearch:l["a"],iconPage:p["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],current_page:1,pageSize:this.$pageSize,total:0,pages:0,treeData:[],dialogFormVisible:!1,formName:"添加角色",formLabelWidth:"120px",rules:{name:[{required:!0,message:"必填",trigger:"blur"}]},roleForm:{id:"",name:"",menuId:""},tree_props:{label:"name",children:"children"}}},methods:{addRole:function(){var e=this;this.formName="添加角色",this.dialogFormVisible=!0,this.roleForm.id="",this.roleForm.name="",this.roleForm.menuId="",setTimeout((function(){e.$refs.tree.setCheckedKeys([])}),0)},confirmOp:function(){var e=this;this.$refs["roleForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r,n,i,l,o,p,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=21;break}if(r=e.$refs["tree"].getCheckedKeys(),e.roleForm.menuId=r.join(","),n=e.roleForm,i=n.id,l=n.name,o=n.menuId,""!==i){t.next=13;break}return e.btnLoading=!0,t.next=8,u["a"].addRole({name:l,menuId:o});case 8:p=t.sent,p&&(e.$message({message:"新增角色成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1,t.next=19;break;case 13:return e.btnLoading=!0,t.next=16,u["a"].editRole({id:i,name:l,menuId:o});case 16:s=t.sent,s&&(e.$message({message:"编辑角色成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 19:t.next=22;break;case 21:return t.abrupt("return",!1);case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,r,n,l,o,p=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.fn,r=t.row,"switchCoin"!==a){e.next=7;break}return n={id:r.id,status:r.status?0:1},e.next=5,u["a"].editRole(n);case 5:l=e.sent,l&&(this.$message({message:l.data.message,type:"success"}),this.getList());case 7:"edit"===a&&(this.formName="编辑",console.log("row",r),this.roleForm.id=r.id,this.roleForm.name=r.name,o=r.menuId.indexOf(",")>-1?r.menuId.split(","):[r.menuId],this.dialogFormVisible=!0,setTimeout((function(){p.$refs["tree"].setCheckedKeys(o)}),0)),"delete"===a&&this.$confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].deleteRole({id:r.id});case 2:t=e.sent,t&&(p.$message({message:"删除角色成功",type:"success"}),p.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,r,n,i,l,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.listLoading=!0,e.next=6,u["a"].getRoleList(t);case 6:a=e.sent,a&&(r=a.data.data,n=r.records,i=r.total,l=r.current,o=r.pages,n.forEach((function(e){e["status"]=!e["status"]})),this.list=n,this.total=i,this.pages=o,this.current_page=l),this.listLoading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getMenuInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getMenuList({pageNum:1,pageSize:100,userType:0});case 2:t=e.sent,t&&(this.treeData=t.data.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),delSameItem:function(e,t){var a=[];return e.forEach((function(e){t.includes(e)||a.push(e)})),a}},mounted:function(){var e=this.$util.getAuthority("Role",s["o"],s["p"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.getList(),this.getMenuInfo()}},d=c,m=(a("1e4d"),a("0c7c")),b=Object(m["a"])(d,r,n,!1,null,null,null);t["default"]=b.exports},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function l(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?n(Number(e)*Math.pow(10,t)):Number(e)}function o(e){m&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),s=2;s<a;s++)n[s-2]=arguments[s];if(n.length>0)return p.apply(void 0,[p(e,t),n[0]].concat(Object(r["a"])(n.slice(1))));var u=l(e),c=l(t),d=i(e)+i(t),m=u*c;return o(m),m/Math.pow(10,d)}function s(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),l=2;l<a;l++)n[l-2]=arguments[l];if(n.length>0)return s.apply(void 0,[s(e,t),n[0]].concat(Object(r["a"])(n.slice(1))));var o=Math.pow(10,Math.max(i(e),i(t)));return(p(e,o)+p(t,o))/o}function u(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),l=2;l<a;l++)n[l-2]=arguments[l];if(n.length>0)return u.apply(void 0,[u(e,t),n[0]].concat(Object(r["a"])(n.slice(1))));var o=Math.pow(10,Math.max(i(e),i(t)));return(p(e,o)-p(t,o))/o}function c(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];if(s.length>0)return c.apply(void 0,[c(e,t),s[0]].concat(Object(r["a"])(s.slice(1))));var d=l(e),m=l(t);return o(d),o(m),p(d/m,n(Math.pow(10,i(t)-i(e))))}function d(e,t){var a=Math.pow(10,t);return c(Math.round(p(e,a)),a)}var m=!0;function b(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m=e}t["a"]={strip:n,plus:s,minus:u,times:p,divide:c,round:d,digitLength:i,float2Fixed:l,enableBoundaryChecking:b}}}]);