(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-147877f0"],{3664:function(e,t,r){},"449d":function(e,t,r){"use strict";var a=r("3664"),o=r.n(a);o.a},7514:function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(5),n="find",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(n)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9763:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"account-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addAccount}},[e._v("添加账号")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"userForm",attrs:{model:e.userForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"账号名称","label-width":e.formLabelWidth,prop:"account"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.userForm.account,callback:function(t){e.$set(e.userForm,"account",t)},expression:"userForm.account"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"登录密码","label-width":e.formLabelWidth,prop:"password"}},[r("el-input",{ref:"password",attrs:{autocomplete:"off",type:e.passwordType},on:{"~focus":function(t){return t.preventDefault(),e.clearPwd(t)}},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}}),e._v(" "),r("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[r("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"所属角色","label-width":e.formLabelWidth,prop:"roleId"}},[r("el-select",{attrs:{placeholder:"选择所属角色",wdith:"20%"},model:{value:e.userForm.roleId,callback:function(t){e.$set(e.userForm,"roleId",t)},expression:"userForm.roleId"}},e._l(e.role_list,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:""===e.userForm.id?"新用户谷歌密钥":"谷歌密钥","label-width":e.formLabelWidth,prop:"googleCode"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.userForm.googleCode,callback:function(t){e.$set(e.userForm,"googleCode",t)},expression:"userForm.googleCode"}},[r("div",{staticClass:"gcode",attrs:{slot:"append"},on:{click:function(t){return t.stopPropagation(),e.getGoogleCode(t)}},slot:"append"},[e._v("获取密钥")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"authGoogle"}},[r("el-input",{attrs:{placeholder:"请输入管理员谷歌验证码",autocomplete:"off"},model:{value:e.userForm.authGoogle,callback:function(t){e.$set(e.userForm,"authGoogle",t)},expression:"userForm.authGoogle"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":e.formLabelWidth,prop:"status",label:"账号状态(是否生效)"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.userForm.status,callback:function(t){e.$set(e.userForm,"status",t)},expression:"userForm.status"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{width:"500px",title:"删除该账号",visible:e.delFormVisible},on:{"update:visible":function(t){e.delFormVisible=t}}},[r("el-form",{ref:"delForm",attrs:{rules:e.delFormRules,model:e.delForm}},[r("el-form-item",{attrs:{"label-width":e.delFormLabelWidth,label:"账户名称"}},[r("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:e.delForm.account,callback:function(t){e.$set(e.delForm,"account",t)},expression:"delForm.account"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":e.delFormLabelWidth,label:"谷歌验证码",prop:"authGoogle"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.delForm.authGoogle,callback:function(t){e.$set(e.delForm,"authGoogle",t)},expression:"delForm.authGoogle"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.delFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.delBtnLoading},on:{click:e.confirmDel}},[e._v("确 定")])],1)],1)],1)},o=[],n=(r("ac6a"),r("96cf"),r("3b8d")),i=r("c249"),l=r("2fee"),s=r("f21b"),u=r("cd08"),c=r("4ec3"),p=r("70ac"),d=r.n(p),m={name:"Account",components:{Btable:l["a"],Bsearch:i["a"],iconPage:s["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,delBtnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,dialogFormVisible:!1,passwordType:"password",oldPwd:"",userForm:{},role_list:[],rules:{account:[{required:!0,message:"必填",trigger:"blur"}],password:[{required:!0,message:"必填",trigger:"blur"}],roleId:[{required:!0,message:"必填",trigger:"change"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}],authGoogle:[{required:!0,message:"谷歌验证码必填",trigger:"blur"}]},isModify:!1,formName:"添加账号",formLabelWidth:"140px",delFormLabelWidth:"110px",delFormVisible:!1,delForm:{account:"",id:"",authGoogle:""},delFormRules:{authGoogle:[{required:!0,message:"谷歌验证码必填",trigger:"blur"}]}}},methods:{addAccount:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.formName="添加账号",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["userForm"].resetFields(),t.userForm={authGoogle:"",googleCode:"",account:"",password:"",roleId:"",status:!1}}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirmDel:function(){var e=this;this.$refs["delForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=9;break}return e.delBtnLoading=!0,t.next=4,c["a"].deleteAccount({id:e.delForm.id,authGoogle:e.delForm.authGoogle});case 4:a=t.sent,a&&(e.$message({message:"账号角色删除成功",type:"success"}),e.delFormVisible=!1,e.getList()),e.delBtnLoading=!1,t.next=9;break;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},confirmOp:function(){var e=this;this.$refs["userForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,i,l,s,u,p,m,f,b,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=20;break}if(a=e.userForm,o=a.authGoogle,n=a.googleCode,i=a.password,l=a.roleId,s=a.id,u=a.account,p=a.status,s){t.next=10;break}return m={authGoogle:o,googleCode:n,account:u,password:d.a.hbmd5(i),roleId:l,status:p?0:1},t.next=6,c["a"].addAccount(m);case 6:f=t.sent,f&&(e.$message({message:"账号添加成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),t.next=18;break;case 10:return b={authGoogle:o,googleCode:n,account:u,roleId:l,status:p?0:1,id:s},e.oldPwd!==i&&(b.password=d.a.hbmd5(i)),e.btnLoading=!0,t.next=15,c["a"].editAccount(b);case 15:g=t.sent,g&&(e.$message({message:"账号编辑成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 18:t.next=21;break;case 20:return t.abrupt("return",!1);case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"edit"!==r){e.next=6;break}return this.dialogFormVisible=!0,this.formName="编辑账号",this.$nextTick((function(){o.$refs["userForm"].resetFields(),o.userForm.googleCode=a.googleCode,o.userForm.account=a.account,o.userForm.password=a.password,o.userForm.roleId=a.roleId,o.userForm.status=a.status,o.userForm.id=a.id,o.oldPwd=a.password})),e.abrupt("return");case 6:"delete"===r&&(this.delForm.id=a.id,this.delForm.account=a.account,this.delForm.authGoogle="",this.delFormVisible=!0);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},clearPwd:function(){this.userForm.id&&(this.userForm.password="")},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,o,n,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,c["a"].getAccountList(t);case 7:r=e.sent,r&&(a=r.data.data,o=a.records,n=a.total,i=a.current,l=a.pages,o.forEach((function(e){e["status"]=!e["status"]})),this.list=o,this.total=n,this.current_page=i,this.pages=l,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getRoleList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].addRoleList({});case 2:t=e.sent,t&&(this.role_list=t.data.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getGoogleCode:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.userForm.account){e.next=3;break}return this.$message({message:"请先填写账户名称",type:"error"}),e.abrupt("return");case 3:return e.next=5,c["a"].getGoogleCode({account:this.userForm.account});case 5:t=e.sent,t&&(this.userForm.googleCode=t.data.data.secretKey,this.$nextTick((function(){r.$refs.userForm.validateField("googleCode")})));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("Account",u["a"],u["b"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchCofig=this.$util.clone(u["c"]),this.getList(),this.getRoleList()}},f=m,b=(r("449d"),r("0c7c")),g=Object(b["a"])(f,a,o,!1,null,null,null);t["default"]=g.exports},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},cd08:function(e,t,r){"use strict";r.d(t,"h",(function(){return f})),r.d(t,"i",(function(){return b})),r.d(t,"l",(function(){return g})),r.d(t,"m",(function(){return h})),r.d(t,"n",(function(){return v})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return m})),r.d(t,"j",(function(){return s})),r.d(t,"k",(function(){return u})),r.d(t,"o",(function(){return a})),r.d(t,"p",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return p}));var a=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"},{label:"角色权限开关",prop:"status",type:"switch",fn:"switchCoin",alias:"trroleauth"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"修改/授权",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],o=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"}],n=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],i=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"}],l=[{type:"text",label:"账号",prop:"account",value:"",placeHolder:"请输入账号"}],s=[{label:"操作人员",prop:"account"},{label:"角色",prop:"roleName"},{label:"内容",prop:"content"},{label:"请求地址",prop:"requestAddress"},{label:"IP",prop:"userIp"},{label:"时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"账号",prop:"account",value:""},{type:"text",label:"角色",prop:"roleName",value:""},{type:"text",label:"内容",prop:"content",value:""},{type:"text",label:"请求地址",prop:"requestAddress",value:""},{type:"text",label:"IP",prop:"userIp",value:""}],c=[{label:"路径名称",prop:"name"},{label:"请求路径",prop:"requestUrl"},{label:"操作",prop:"action",type:"action",width:150,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"primary"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],p=[{type:"text",label:"路径名称",prop:"name",value:""},{type:"text",label:"请求路径",prop:"requestUrl",value:""}],d=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],m=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],f=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],b=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],g=[{label:"账号",prop:"account"},{label:"职务",prop:"jobName"},{label:"部门",prop:"deptName"},{label:"备注",prop:"name"},{label:"添加时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"可用状态",prop:"status",type:"switch",fn:"switch",alias:"trswitch"},{label:"操作",width:"180",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",filter_key:"deptName",filter_type:"filter_label",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],h=[{label:"账号",prop:"account"},{label:"职务",prop:"jobName"},{label:"部门",prop:"deptName"},{label:"备注",prop:"name"},{label:"添加时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],v=[{type:"text",label:"搜索部门",prop:"name",value:"",width:"350px"}]},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("7618");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var n={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},i=o.replace(/{([ymdhisa])+}/g,(function(e,t){var r=n[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},ff53:function(e,t,r){"use strict";var a=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function n(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=n(e);return t>0?o(Number(e)*Math.pow(10,t)):Number(e)}function l(e){m&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];if(o.length>0)return s.apply(void 0,[s(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var c=i(e),p=i(t),d=n(e)+n(t),m=c*p;return l(m),m/Math.pow(10,d)}function u(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(o.length>0)return u.apply(void 0,[u(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var l=Math.pow(10,Math.max(n(e),n(t)));return(s(e,l)+s(t,l))/l}function c(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(o.length>0)return c.apply(void 0,[c(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var l=Math.pow(10,Math.max(n(e),n(t)));return(s(e,l)-s(t,l))/l}function p(e,t){for(var r=arguments.length,u=new Array(r>2?r-2:0),c=2;c<r;c++)u[c-2]=arguments[c];if(u.length>0)return p.apply(void 0,[p(e,t),u[0]].concat(Object(a["a"])(u.slice(1))));var d=i(e),m=i(t);return l(d),l(m),s(d/m,o(Math.pow(10,n(t)-n(e))))}function d(e,t){var r=Math.pow(10,t);return p(Math.round(s(e,r)),r)}var m=!0;function f(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m=e}t["a"]={strip:o,plus:u,minus:c,times:s,divide:p,round:d,digitLength:n,float2Fixed:i,enableBoundaryChecking:f}}}]);