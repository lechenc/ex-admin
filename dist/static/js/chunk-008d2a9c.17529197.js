(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-008d2a9c"],{"1af2":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"resetauth-container"},[a("div",{staticClass:"wrap"},[a("label",{staticClass:"label",attrs:{for:"goolepwd"}},[e._v("新谷歌密钥：")]),e._v(" "),a("span",{staticClass:"prop"},[a("el-input",{attrs:{id:"goolepwd",type:"text",disabled:!0,size:"small",placeholder:"请填写原密码"},model:{value:e.goolepwd,callback:function(t){e.goolepwd=t},expression:"goolepwd"}}),e._v(" "),a("el-button",{staticClass:"prop-btn",attrs:{type:"primary"},on:{click:e.reloadQr}},[e._v("生成Google新密钥")])],1)]),e._v(" "),a("div",{staticClass:"pic"},[a("div",{staticClass:"title"},[e._v(" 新二维码:")]),e._v(" "),a("div",{staticClass:"qrcode"},[e.isGetQr?a("div",{staticClass:"qrcode_content",attrs:{id:"qrcode"}}):a("span",[e._v("无")])])]),e._v(" "),a("div",{staticClass:"wrap"},[a("label",{staticClass:"label",attrs:{for:"googlecode"}},[e._v("原谷歌验证码：")]),e._v(" "),a("span",{staticClass:"prop"},[a("el-input",{attrs:{disabled:!e.isCURDAuth,id:"googlecode",size:"medium",placeholder:""},model:{value:e.googlecode,callback:function(t){e.googlecode=t},expression:"googlecode"}})],1)]),e._v(" "),a("div",{staticClass:"wrap button"},[a("el-button",{attrs:{disabled:!e.isCURDAuth,size:"medium",type:"primary",loading:e.btnLoading},on:{click:e.confirm}},[e._v("确定")])],1)])},r=[],p=(a("96cf"),a("3b8d")),o=a("d044"),i=a.n(o),n=a("4ec3"),s=(a("a78e"),a("cd08"),{name:"Resetauth",data:function(){return{isCURDAuth:!0,btnLoading:!1,goolepwd:"",googlecode:"",qrPic:"",isGetQr:!1}},mounted:function(){var e=this.$util.getAuthority("Restauth",[],[]);this.isCURDAuth=e.isModify},methods:{reloadQr:function(){this.getData()},getData:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={account:localStorage.getItem("user_name")},this.isGetQr=!0,e.next=4,n["a"].getGoogleCode(t);case 4:a=e.sent,a&&(this.goolepwd=a.data.data.secretKey,l=a.data.data.googleAuthQRCodeData,document.querySelector("#qrcode").innerHTML="",new i.a("qrcode",{width:230,height:230,text:l,colorDark:"#000",colorLight:"#fff"}));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirm:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.googlecode){e.next=3;break}return this.$message.error("Google验证码不能为空"),e.abrupt("return",!0);case 3:return t={newGoogleCode:this.goolepwd,authGoogle:this.googlecode},this.btnLoading=!0,e.next=7,n["a"].editGoogleCode(t);case 7:a=e.sent,a&&(this.$notify.success("密钥修改成功"),this.getData()),this.btnLoading=!1;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),c=s,d=(a("f51a"),a("0c7c")),u=Object(d["a"])(c,l,r,!1,null,null,null);t["default"]=u.exports},"3aac":function(e,t,a){},cd08:function(e,t,a){"use strict";a.d(t,"h",(function(){return w})),a.d(t,"i",(function(){return x})),a.d(t,"l",(function(){return v})),a.d(t,"m",(function(){return g})),a.d(t,"j",(function(){return y})),a.d(t,"k",(function(){return f})),a.d(t,"p",(function(){return m})),a.d(t,"q",(function(){return h})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return b})),a.d(t,"n",(function(){return n})),a.d(t,"o",(function(){return s})),a.d(t,"r",(function(){return l})),a.d(t,"s",(function(){return r})),a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return d}));var l=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"},{label:"角色权限开关",prop:"status",type:"switch",fn:"switchCoin",alias:"trroleauth"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"修改/授权",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],r=[{label:"角色名称",prop:"name"},{label:"用户数",prop:"userNumber"},{label:"添加时间",prop:"createTime",type:"time"}],p=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"账号状态",prop:"status",type:"filter",show_type:"text",width:"120",filters:[{text:"开启",val:1},{text:"关闭",val:0}]},{label:"操作",prop:"action",type:"action",width:140,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"delete",type:"danger",alias:"del"}]}],o=[{label:"账号",prop:"account"},{label:"角色",prop:"roleName"},{label:"添加时间",prop:"createTime",type:"time"},{label:"账号状态",prop:"status",type:"filter",show_type:"text",width:"120",filters:[{text:"开启",val:1},{text:"关闭",val:0}]}],i=[{type:"text",label:"账号",prop:"account",value:"",placeHolder:"请输入账号"}],n=[{label:"操作人员",prop:"account"},{label:"角色",prop:"roleName"},{label:"内容",prop:"content"},{label:"请求地址",prop:"requestAddress"},{label:"IP",prop:"userIp"},{label:"时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"账号",prop:"account",value:""},{type:"text",label:"角色",prop:"roleName",value:""},{type:"text",label:"内容",prop:"content",value:""},{type:"text",label:"请求地址",prop:"requestAddress",value:""},{type:"text",label:"IP",prop:"userIp",value:""}],c=[{label:"路径名称",prop:"name"},{label:"请求路径",prop:"requestUrl"},{label:"操作",prop:"action",type:"action",width:150,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"primary"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],d=[{type:"text",label:"路径名称",prop:"name",value:""},{type:"text",label:"请求路径",prop:"requestUrl",value:""}],u=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],b=[{label:"域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],y=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"是否默认",prop:"isDefault",type:"switch",fn:"trDefault",alias:"trDefault"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"},{label:"操作",prop:"action",width:"240",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"},{label:"删除",fn:"del",type:"danger",alias:"del"}]}],f=[{label:"固定域名地址",prop:"domainName"},{label:"排序",prop:"sort"},{label:"备注",prop:"remark"},{label:"创建时间",prop:"createTime",type:"time"}],m=[{label:"账号",prop:"account"},{label:"职务",prop:"jobName"},{label:"部门",prop:"deptName"},{label:"级别",prop:"isOwer",type:"filter",show_type:"textColorLine",width:"120",filters:[{text:"普通成员",val:0},{text:"部门负责人",val:1}]},{label:"备注",prop:"name"},{label:"添加时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"可用状态",prop:"status",type:"switch",fn:"switch",alias:"trswitch"},{label:"操作",width:"180",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary"},{label:"删除",fn:"del",type:"primary"}]}],h=[{type:"text",label:"搜索部门",prop:"name",value:"",width:"350px"}],v=[{label:"IP地址",prop:"ip"},{label:"名单类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"白名单",val:1},{text:"黑名单",val:2}]},{label:"启用/禁用",prop:"enable",type:"filter_switch",fn:"trable",alias:"trable",width:"150",filter_key:"property",filter_status:1},{label:"IP类型",prop:"property",type:"filter",show_type:"text",filters:[{text:"内部",val:1},{text:"外部",val:2}]},{label:"备注",prop:"remark"},{label:"操作",prop:"action",type:"action",width:240,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit",filter_type:"arrayExcept",filter_key:"property",filter_status:["1"]},{label:"删除",fn:"delete",type:"danger",alias:"delete",filter_type:"arrayExcept",filter_key:"property",filter_status:["1"]}]}],g=[{label:"IP地址",prop:"ip"},{label:"名单类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"白名单",val:1},{text:"黑名单",val:2}]},{label:"启用/禁用",prop:"enable",type:"filter",show_type:"text",filters:[{text:"启用",val:!0},{text:"禁用",val:!1}]},{label:"IP类型",prop:"type",type:"filter",show_type:"text",filters:[{text:"内部",val:1},{text:"外部",val:2}]},{label:"备注",prop:"remark"}],w=[{label:"UID",prop:"uid"},{label:"域名地址",prop:"domainAddress"},{label:"用户IP地址",prop:"userIpAddress"},{label:"设备型号",prop:"deviceModel"},{label:"操作系统",prop:"operatingSystem"},{label:"运营商",prop:"operator"},{label:"失败记录时间",prop:"created"}],x=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{label:"UID",type:"onlyNumber",prop:"UID"},{label:"域名地址",prop:"domainAddress"},{label:"用户IP地址",prop:"userIpAddress"},{label:"运营商",prop:"operator"}]},f51a:function(e,t,a){"use strict";var l=a("3aac"),r=a.n(l);r.a}}]);