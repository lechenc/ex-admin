(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-477f4d48"],{"2e08":function(e,t,r){var a=r("9def"),o=r("9744"),n=r("be13");e.exports=function(e,t,r,i){var l=String(n(e)),s=l.length,u=void 0===r?" ":String(r),c=a(t);if(c<=s||""==u)return l;var p=c-s,d=o.call(u,Math.ceil(p/u.length));return d.length>p&&(d=d.slice(0,p)),i?d+l:l+d}},3664:function(e,t,r){},"449d":function(e,t,r){"use strict";var a=r("3664"),o=r.n(a);o.a},"70ac":function(e,t,r){var a;(function(o){"use strict";function n(e,t){var r=(65535&e)+(65535&t),a=(e>>16)+(t>>16)+(r>>16);return a<<16|65535&r}function i(e,t){return e<<t|e>>>32-t}function l(e,t,r,a,o,l){return n(i(n(n(t,e),n(a,l)),o),r)}function s(e,t,r,a,o,n,i){return l(t&r|~t&a,e,t,o,n,i)}function u(e,t,r,a,o,n,i){return l(t&a|r&~a,e,t,o,n,i)}function c(e,t,r,a,o,n,i){return l(t^r^a,e,t,o,n,i)}function p(e,t,r,a,o,n,i){return l(r^(t|~a),e,t,o,n,i)}function d(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var r,a,o,i,l,d=1732584193,f=-271733879,m=-1732584194,g=271733878;for(r=0;r<e.length;r+=16)a=d,o=f,i=m,l=g,d=s(d,f,m,g,e[r],7,-680876936),g=s(g,d,f,m,e[r+1],12,-389564586),m=s(m,g,d,f,e[r+2],17,606105819),f=s(f,m,g,d,e[r+3],22,-1044525330),d=s(d,f,m,g,e[r+4],7,-176418897),g=s(g,d,f,m,e[r+5],12,1200080426),m=s(m,g,d,f,e[r+6],17,-1473231341),f=s(f,m,g,d,e[r+7],22,-45705983),d=s(d,f,m,g,e[r+8],7,1770035416),g=s(g,d,f,m,e[r+9],12,-1958414417),m=s(m,g,d,f,e[r+10],17,-42063),f=s(f,m,g,d,e[r+11],22,-1990404162),d=s(d,f,m,g,e[r+12],7,1804603682),g=s(g,d,f,m,e[r+13],12,-40341101),m=s(m,g,d,f,e[r+14],17,-1502002290),f=s(f,m,g,d,e[r+15],22,1236535329),d=u(d,f,m,g,e[r+1],5,-165796510),g=u(g,d,f,m,e[r+6],9,-1069501632),m=u(m,g,d,f,e[r+11],14,643717713),f=u(f,m,g,d,e[r],20,-373897302),d=u(d,f,m,g,e[r+5],5,-701558691),g=u(g,d,f,m,e[r+10],9,38016083),m=u(m,g,d,f,e[r+15],14,-660478335),f=u(f,m,g,d,e[r+4],20,-405537848),d=u(d,f,m,g,e[r+9],5,568446438),g=u(g,d,f,m,e[r+14],9,-1019803690),m=u(m,g,d,f,e[r+3],14,-187363961),f=u(f,m,g,d,e[r+8],20,1163531501),d=u(d,f,m,g,e[r+13],5,-1444681467),g=u(g,d,f,m,e[r+2],9,-51403784),m=u(m,g,d,f,e[r+7],14,1735328473),f=u(f,m,g,d,e[r+12],20,-1926607734),d=c(d,f,m,g,e[r+5],4,-378558),g=c(g,d,f,m,e[r+8],11,-2022574463),m=c(m,g,d,f,e[r+11],16,1839030562),f=c(f,m,g,d,e[r+14],23,-35309556),d=c(d,f,m,g,e[r+1],4,-1530992060),g=c(g,d,f,m,e[r+4],11,1272893353),m=c(m,g,d,f,e[r+7],16,-155497632),f=c(f,m,g,d,e[r+10],23,-1094730640),d=c(d,f,m,g,e[r+13],4,681279174),g=c(g,d,f,m,e[r],11,-358537222),m=c(m,g,d,f,e[r+3],16,-722521979),f=c(f,m,g,d,e[r+6],23,76029189),d=c(d,f,m,g,e[r+9],4,-640364487),g=c(g,d,f,m,e[r+12],11,-421815835),m=c(m,g,d,f,e[r+15],16,530742520),f=c(f,m,g,d,e[r+2],23,-995338651),d=p(d,f,m,g,e[r],6,-198630844),g=p(g,d,f,m,e[r+7],10,1126891415),m=p(m,g,d,f,e[r+14],15,-1416354905),f=p(f,m,g,d,e[r+5],21,-57434055),d=p(d,f,m,g,e[r+12],6,1700485571),g=p(g,d,f,m,e[r+3],10,-1894986606),m=p(m,g,d,f,e[r+10],15,-1051523),f=p(f,m,g,d,e[r+1],21,-2054922799),d=p(d,f,m,g,e[r+8],6,1873313359),g=p(g,d,f,m,e[r+15],10,-30611744),m=p(m,g,d,f,e[r+6],15,-1560198380),f=p(f,m,g,d,e[r+13],21,1309151649),d=p(d,f,m,g,e[r+4],6,-145523070),g=p(g,d,f,m,e[r+11],10,-1120210379),m=p(m,g,d,f,e[r+2],15,718787259),f=p(f,m,g,d,e[r+9],21,-343485551),d=n(d,a),f=n(f,o),m=n(m,i),g=n(g,l);return[d,f,m,g]}function f(e){var t,r="";for(t=0;t<32*e.length;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function m(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;for(t=0;t<8*e.length;t+=8)r[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return r}function g(e){return f(d(m(e),8*e.length))}function h(e,t){var r,a,o=m(e),n=[],i=[];for(n[15]=i[15]=void 0,o.length>16&&(o=d(o,8*e.length)),r=0;r<16;r+=1)n[r]=909522486^o[r],i[r]=1549556828^o[r];return a=d(n.concat(m(t)),512+8*t.length),f(d(i.concat(a),640))}function b(e){var t,r,a="0123456789abcdef",o="";for(r=0;r<e.length;r+=1)t=e.charCodeAt(r),o+=a.charAt(t>>>4&15)+a.charAt(15&t);return o}function v(e){return unescape(encodeURIComponent(e))}function y(e){return g(v(e))}function w(e){return b(y(e))}function F(e,t){return h(v(e),v(t))}function A(e,t){return b(F(e,t))}function x(e,t,r){return t?r?F(t,e):A(t,e):r?y(e):w(e)}function _(e,t,r){return x(e+"hello, moto",t,r)}a=function(){return{md5:x,hbmd5:_}}.call(t,r,t,e),void 0===a||(e.exports=a)})()},7514:function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(5),n="find",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(n)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,r){"use strict";var a=r("4588"),o=r("be13");e.exports=function(e){var t=String(o(this)),r="",n=a(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},9763:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"account-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addAccount}},[e._v("添加账号")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"userForm",attrs:{model:e.userForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"账号名称","label-width":e.formLabelWidth,prop:"account"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.userForm.account,callback:function(t){e.$set(e.userForm,"account",t)},expression:"userForm.account"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"登录密码","label-width":e.formLabelWidth,prop:"password"}},[r("el-input",{ref:"password",attrs:{autocomplete:"off",type:e.passwordType},on:{"~focus":function(t){return t.preventDefault(),e.clearPwd(t)}},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}}),e._v(" "),r("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[r("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"所属角色","label-width":e.formLabelWidth,prop:"roleId"}},[r("el-select",{attrs:{placeholder:"选择所属角色",wdith:"20%"},model:{value:e.userForm.roleId,callback:function(t){e.$set(e.userForm,"roleId",t)},expression:"userForm.roleId"}},e._l(e.role_list,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:""===e.userForm.id?"新用户谷歌密钥":"谷歌密钥","label-width":e.formLabelWidth,prop:"googleCode"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.userForm.googleCode,callback:function(t){e.$set(e.userForm,"googleCode",t)},expression:"userForm.googleCode"}},[r("div",{staticClass:"gcode",attrs:{slot:"append"},on:{click:function(t){return t.stopPropagation(),e.getGoogleCode(t)}},slot:"append"},[e._v("获取密钥")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"authGoogle"}},[r("el-input",{attrs:{placeholder:"请输入管理员谷歌验证码",autocomplete:"off"},model:{value:e.userForm.authGoogle,callback:function(t){e.$set(e.userForm,"authGoogle",t)},expression:"userForm.authGoogle"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":e.formLabelWidth,prop:"status",label:"账号状态(是否生效)"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.userForm.status,callback:function(t){e.$set(e.userForm,"status",t)},expression:"userForm.status"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{width:"500px",title:"删除该账号",visible:e.delFormVisible},on:{"update:visible":function(t){e.delFormVisible=t}}},[r("el-form",{ref:"delForm",attrs:{rules:e.delFormRules,model:e.delForm}},[r("el-form-item",{attrs:{"label-width":e.delFormLabelWidth,label:"账户名称"}},[r("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:e.delForm.account,callback:function(t){e.$set(e.delForm,"account",t)},expression:"delForm.account"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":e.delFormLabelWidth,label:"谷歌验证码",prop:"authGoogle"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.delForm.authGoogle,callback:function(t){e.$set(e.delForm,"authGoogle",t)},expression:"delForm.authGoogle"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.delFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.delBtnLoading},on:{click:e.confirmDel}},[e._v("确 定")])],1)],1)],1)},o=[],n=(r("ac6a"),r("96cf"),r("3b8d")),i=r("c249"),l=r("2fee"),s=r("f21b"),u=r("cd08"),c=r("4ec3"),p=r("70ac"),d=r.n(p),f={name:"Account",components:{Btable:l["a"],Bsearch:i["a"],iconPage:s["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,delBtnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,dialogFormVisible:!1,passwordType:"password",oldPwd:"",userForm:{},role_list:[],rules:{account:[{required:!0,message:"必填",trigger:"blur"}],password:[{required:!0,message:"必填",trigger:"blur"}],roleId:[{required:!0,message:"必填",trigger:"change"}],googleCode:[{required:!0,message:"必填",trigger:"blur"}],authGoogle:[{required:!0,message:"谷歌验证码必填",trigger:"blur"}]},isModify:!1,formName:"添加账号",formLabelWidth:"140px",delFormLabelWidth:"110px",delFormVisible:!1,delForm:{account:"",id:"",authGoogle:""},delFormRules:{authGoogle:[{required:!0,message:"谷歌验证码必填",trigger:"blur"}]}}},methods:{addAccount:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.formName="添加账号",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["userForm"].resetFields(),t.userForm={authGoogle:"",googleCode:"",account:"",password:"",roleId:"",status:!1,id:""}}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirmDel:function(){var e=this;this.$refs["delForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=9;break}return e.delBtnLoading=!0,t.next=4,c["a"].deleteAccount({id:e.delForm.id,authGoogle:e.delForm.authGoogle});case 4:a=t.sent,a&&(e.$message({message:"账号角色删除成功",type:"success"}),e.delFormVisible=!1,e.getList()),e.delBtnLoading=!1,t.next=9;break;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},confirmOp:function(){var e=this;this.$refs["userForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,i,l,s,u,p,f,m,g,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=20;break}if(a=e.userForm,o=a.authGoogle,n=a.googleCode,i=a.password,l=a.roleId,s=a.id,u=a.account,p=a.status,s){t.next=10;break}return f={authGoogle:o,googleCode:n,account:u,password:d.a.hbmd5(i),roleId:l,status:p?0:1},t.next=6,c["a"].addAccount(f);case 6:m=t.sent,m&&(e.$message({message:"账号添加成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),t.next=18;break;case 10:return g={authGoogle:o,googleCode:n,account:u,roleId:l,status:p?0:1,id:s},e.oldPwd!==i&&(g.password=d.a.hbmd5(i)),e.btnLoading=!0,t.next=15,c["a"].editAccount(g);case 15:h=t.sent,h&&(e.$message({message:"账号编辑成功",type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 18:t.next=21;break;case 20:return t.abrupt("return",!1);case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"edit"!==r){e.next=6;break}return this.dialogFormVisible=!0,this.formName="编辑账号",this.$nextTick((function(){o.$refs["userForm"].resetFields();var e=a.googleCode,t=a.account,r=a.password,n=a.roleId,i=a.status,l=a.id;o.userForm={googleCode:e,account:t,password:r,roleId:n,status:i,id:l},o.oldPwd=r})),e.abrupt("return");case 6:"delete"===r&&(this.delForm.id=a.id,this.delForm.account=a.account,this.delForm.authGoogle="",this.delFormVisible=!0);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},clearPwd:function(){this.userForm.id&&(this.userForm.password="")},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,o,n,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,c["a"].getAccountList(t);case 7:r=e.sent,r&&(a=r.data.data,o=a.records,n=a.total,i=a.current,l=a.pages,o.forEach((function(e){e["status"]=!e["status"]})),this.list=o,this.total=n,this.current_page=i,this.pages=l,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getRoleList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].addRoleList({});case 2:t=e.sent,t&&(this.role_list=t.data.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getGoogleCode:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.userForm.account){e.next=3;break}return this.$message({message:"请先填写账户名称",type:"error"}),e.abrupt("return");case 3:return e.next=5,c["a"].getGoogleCode({account:this.userForm.account});case 5:t=e.sent,t&&(this.userForm.googleCode=t.data.data.secretKey,this.$nextTick((function(){r.$refs.userForm.validateField("googleCode")})));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("Account",u["a"],u["b"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchCofig=this.$util.clone(u["c"]),this.getList(),this.getRoleList()}},m=f,g=(r("449d"),r("0c7c")),h=Object(g["a"])(m,a,o,!1,null,null,null);t["default"]=h.exports},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},cd08:function(e,t,r){"use strict";r.d(t,"h",(function(){return m})),r.d(t,"i",(function(){return g})),r.d(t,"l",(function(){return h})),r.d(t,"m",(function(){return b})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return f})),r.d(t,"j",(function(){return s})),r.d(t,"k",(function(){return u})),r.d(t,"n",(function(){return a})),r.d(t,"o",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return p}));var a=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"},{label:"角色权限开关",prop:"status",type:"switch",fn:"switchCoin",alias:"trroleauth"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"修改/授权",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],o=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"}],n=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],i=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"}],l=[{type:"text",label:"账号",prop:"account",value:"",placeHolder:"请输入账号"}],s=[{label:"操作人员",prop:"account"},{label:"角色",prop:"roleName"},{label:"内容",prop:"content"},{label:"请求地址",prop:"requestAddress"},{label:"IP",prop:"userIp"},{label:"时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"账号",prop:"account",value:""},{type:"text",label:"角色",prop:"roleName",value:""},{type:"text",label:"内容",prop:"content",value:""},{type:"text",label:"请求地址",prop:"requestAddress",value:""},{type:"text",label:"IP",prop:"userIp",value:""}],c=[{label:"路径名称",prop:"name"},{label:"请求路径",prop:"requestUrl"},{label:"操作",prop:"action",type:"action",width:150,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"primary"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],p=[{type:"text",label:"路径名称",prop:"name",value:""},{type:"text",label:"请求路径",prop:"requestUrl",value:""}],d=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],f=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],m=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],g=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],h=[{label:"账号",prop:"account"},{label:"职务",prop:"jobName"},{label:"部门",prop:"deptName"},{label:"级别",prop:"isOwer",type:"filter",show_type:"textColorLine",width:"120",filters:[{text:"普通成员",val:0},{text:"部门负责人",val:1}]},{label:"备注",prop:"name"},{label:"添加时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"可用状态",prop:"status",type:"switch",fn:"switch",alias:"trswitch"},{label:"操作",width:"180",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary"},{label:"删除",fn:"del",type:"primary"}]}],b=[{type:"text",label:"搜索部门",prop:"name",value:"",width:"350px"}]},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("7618");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var n={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},i=o.replace(/{([ymdhisa])+}/g,(function(e,t){var r=n[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},f576:function(e,t,r){"use strict";var a=r("5ca1"),o=r("2e08"),n=r("a25f"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);a(a.P+a.F*i,"String",{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,r){"use strict";var a=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function n(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=n(e);return t>0?o(Number(e)*Math.pow(10,t)):Number(e)}function l(e){f&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];if(o.length>0)return s.apply(void 0,[s(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var c=i(e),p=i(t),d=n(e)+n(t),f=c*p;return l(f),f/Math.pow(10,d)}function u(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(o.length>0)return u.apply(void 0,[u(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var l=Math.pow(10,Math.max(n(e),n(t)));return(s(e,l)+s(t,l))/l}function c(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(o.length>0)return c.apply(void 0,[c(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var l=Math.pow(10,Math.max(n(e),n(t)));return(s(e,l)-s(t,l))/l}function p(e,t){for(var r=arguments.length,u=new Array(r>2?r-2:0),c=2;c<r;c++)u[c-2]=arguments[c];if(u.length>0)return p.apply(void 0,[p(e,t),u[0]].concat(Object(a["a"])(u.slice(1))));var d=i(e),f=i(t);return l(d),l(f),s(d/f,o(Math.pow(10,n(t)-n(e))))}function d(e,t){var r=Math.pow(10,t);return p(Math.round(s(e,r)),r)}var f=!0;function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f=e}t["a"]={strip:o,plus:u,minus:c,times:s,divide:p,round:d,digitLength:n,float2Fixed:i,enableBoundaryChecking:m}}}]);