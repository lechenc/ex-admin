(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aeb20996"],{"0b35":function(e,t,r){"use strict";var o=r("a40c"),n=r.n(o);n.a},1821:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resetUserGoogleCode-container"},[r("el-row",{staticClass:"sac-row"},[r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1)],1),e._v(" "),r("el-card",{staticClass:"box-card"},[r("h5",[e._v("重置用户谷歌验证器")]),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"140px"}},[r("el-form-item",{attrs:{label:"用户谷歌验证码:",prop:"newGoogleCode"}},[r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{type:"text",placeholder:"请输入",readonly:"",disabled:!e.isModify},model:{value:e.form.newGoogleCode,callback:function(t){e.$set(e.form,"newGoogleCode",t)},expression:"form.newGoogleCode"}},[r("el-button",{attrs:{slot:"append",loading:e.btnResetLoading,disabled:!e.isModify,type:"primary"},on:{click:e.reset},slot:"append"},[e._v("重置谷歌秘钥")])],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Google验证码:",prop:"authGoogle"}},[r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{disabled:!e.isModify,type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("form","authGoogle")}},model:{value:e.form.authGoogle,callback:function(t){e.$set(e.form,"authGoogle",t)},expression:"form.authGoogle"}})],1)],1),e._v(" "),e.btnArr.includes("resetGoogleCode")?r("div",[e.isModify?e._e():r("div",{staticClass:"middle"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.isModify=!0}}},[e._v("修改")])],1),e._v(" "),e.isModify?r("div",{staticClass:"middle"},[r("el-button",{attrs:{type:"primary",plain:"",size:"medium"},on:{click:e.cancelSend}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"medium",loading:e.btnSendLoading},on:{click:e.confirmSend}},[e._v("提交修改")])],1):e._e()]):e._e()],1)],1)],1)},n=[],i=(r("6b54"),r("96cf"),r("3b8d")),a=(r("a481"),r("4ec3")),s={data:function(){return{btnArr:[],isModify:!1,btnSendLoading:!1,btnResetLoading:!1,form:{newGoogleCode:"",authGoogle:""},rules:{newGoogleCode:[{required:!0,message:"必填",trigger:"blur"}],authGoogle:[{required:!0,message:"必填",trigger:"blur"}]},current_row:{}}},methods:{checkVal:function(e,t){this[e][t]=(this[e][t]+"").replace(/[^\d]/g,"")},confirmSend:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var o,n,i,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=11;break}if(!e.btnSendLoading){t.next=3;break}return t.abrupt("return");case 3:return o=e.form,n=o.newGoogleCode,i=o.authGoogle,s={newGoogleCode:n,authGoogle:i,userId:e.current_row.userId},e.btnSendLoading=!0,t.next=8,a["a"].apiEditGoogleCode(s);case 8:l=t.sent,l&&(e.$message({message:"修改成功！",type:"success"}),e.isModify=!1,e.form={newGoogleCode:"",authGoogle:""},e.getDetail(e.$route.query.id)),e.btnSendLoading=!1;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},cancelSend:function(){this.isModify=!1,this.form={newGoogleCode:"",authGoogle:""},this.getDetail(this.$route.query.id)},reset:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.btnResetLoading){e.next=2;break}return e.abrupt("return");case 2:return this.btnResetLoading=!0,t={account:this.current_row.uid.toString()},e.next=6,a["a"].getGoogleCode(t);case 6:r=e.sent,r&&(this.form.newGoogleCode=r.data.data.secretKey),this.btnResetLoading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDetail:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={uid:t,pageNum:1,pageSize:10},e.next=3,a["a"].getUserList(r);case 3:o=e.sent,o&&(n=o.data.data.records,n&&n.length>0&&(this.current_row=n[0],this.form.newGoogleCode=this.current_row.googleVerify)),this.listLoading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("UserList",[],[]);this.btnArr=e.btnArr||[],this.getDetail(this.$route.query.id)}},l=s,u=(r("0b35"),r("0c7c")),c=Object(u["a"])(l,o,n,!1,null,"444e937a",null);t["default"]=c.exports},a40c:function(e,t,r){}}]);