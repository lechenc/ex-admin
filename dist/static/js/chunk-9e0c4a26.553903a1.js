(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e0c4a26"],{"31ce":function(e,t,r){"use strict";var a=r("64de"),i=r.n(a);i.a},"64de":function(e,t,r){},bc02:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"acceptanceSetting-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig,excelLoading:e.excelLoading,exportExcel:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel}})],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{"close-on-click-modal":!1,visible:e.dialogVisible,width:"500px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-row",{attrs:{span:36}},[r("el-col",{attrs:{span:36}},[r("el-form-item",{attrs:{label:"权重值","label-width":e.formLabelWidth,prop:"weight"}},[r("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"请输入",disabled:e.isModify},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"授信额度","label-width":e.formLabelWidth,prop:"authorizationLimit"}},[r("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"",disabled:e.isModify},model:{value:e.form.authorizationLimit,callback:function(t){e.$set(e.form,"authorizationLimit",t)},expression:"form.authorizationLimit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收款方式限制次数","label-width":e.formLabelWidth,prop:"payCount"}},[r("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"",disabled:e.isModify},model:{value:e.form.payCount,callback:function(t){e.$set(e.form,"payCount",t)},expression:"form.payCount"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[e.isModify?e._e():r("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1)],1)},i=[],n=(r("a481"),r("ac6a"),r("96cf"),r("3b8d")),s=r("ff53"),o=r("01fb"),c=r("c249"),u=r("2fee"),l=r("f21b"),d=r("f556"),h=r("4ec3"),g=r("ca00"),p=r("658f"),m=r.n(p),f=(r("70ac"),{name:"AcceptanceSetting",components:{Btable:u["a"],Bsearch:c["a"],iconPage:l["a"],vueQr:m.a,CountdownBtn:o["a"]},data:function(){var e=/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/,t=function(t,r,a){if(!e.test(r))return a(new Error(t.message));a()},r=function(e,t,r){if(""==t.trim())return r(new Error(e.message));r()},a=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,i=function(e,t,r){a.test(t)?r():r(new Error(e.message))},n=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,s=function(e,t,r){n.test(t)?r():r(new Error(e.message))};return{weight:"",authorizationLimit:"",payCount:"",listLoading:!1,btnLoading:!1,calLoading:!1,disabled:!1,createVisible:!1,activeName:"first",excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",formLabelWidth:"140px",assetsList:[],isModify:!1,nowUserId:0,title:"",ruleForm:{phone:"",email:"",code:"",loginPassword:""},labelWidth:"100px",dialogVisible:!1,form:{merchantUid:"",phone:"",email:"",rewardInRate:"",userLoginStatus:!1,googleCode:"",userId:""},rules:{rewardInRate:[{required:!0,message:"必填"}],googleCode:[{required:!0,message:"必填"}]},formRules:{code:[{required:!0,message:"请输入验证码",trigger:"blur"},{required:!0,message:"请输入验证码",validator:r,trigger:"blur"}],email:[{required:!0,message:"请输入",trigger:"blur"},{required:!0,validator:r,message:"请输入",trigger:"blur"},{validator:i,message:"请输入正确邮箱",trigger:"blur"}],phone:[{required:!0,message:"请输入",trigger:"blur"},{required:!0,validator:r,message:"请输入",trigger:"blur"},{validator:s,message:"请输入正确手机号",trigger:"blur"}],loginPassword:[{required:!0,message:"请输入登录密码",trigger:"blur"},{required:!0,validator:r,message:"请输入登录密码",trigger:"blur"},{required:!0,validator:t,message:"支持8-16位字符，包含字母、数字和符号其中两种，区分大小写",trigger:"blur"}]}}},watch:{createVisible:function(e,t){e&&(this.ruleForm={})}},methods:{handleClick:function(e){},onCopy:function(){this.$message.success("复制成功")},countdownBtn:function(e){this.disabled=e},createAgent:function(){var e=this;this.$refs["ruleForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,i,n,s,o,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=14;break}return t.prev=1,a=e.ruleForm,i=a.email,n=a.phone,s=a.code,o=a.loginPassword,c={code:s,loginPassword:e.$md5(o)},"first"===e.activeName?(c.phoneOrEmail=n,c.registerType=1):"second"===e.activeName&&(c.phoneOrEmail=i,c.registerType=2),t.next=7,h["a"].acceptanceCreateAgent(c);case 7:u=t.sent,u?(e.$message.success("创建成功"),e.createVisible=!1,e.getList()):e.$message.error(u.data.message),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}())},codeclick:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t=!0,"first"===this.activeName?this.$refs["ruleForm"].validateField(["phone"],(function(e){e&&(t=!1)})):"second"===this.activeName&&this.$refs["ruleForm"].validateField(["email"],(function(e){e&&(t=!1)})),t){e.next=5;break}return e.abrupt("return");case 5:if(!this.disabled){e.next=7;break}return e.abrupt("return");case 7:return this.disabled=!0,r={},"first"===this.activeName?r={smsType:0,phoneOrEmail:this.ruleForm.phone,type:2,phoneAreaCode:"+86"}:"second"===this.activeName&&(r={smsType:0,phoneOrEmail:this.ruleForm.email,type:1}),e.next=12,h["a"].apiSendEmail(r);case 12:a=e.sent,a&&this.$message.success("发送成功"),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));function t(){return e.apply(this,arguments)}return t}(),onError:function(){this.$message.success("复制失败")},doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,i,n,s,o,c,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,this.nowUserId=a.userId,"edit"===r&&(this.isModify=!1,this.title="会员设置",this.dialogVisible=!0,i=a.uid,n=a.phone,s=a.email,a.rewardInRate,o=a.userLoginStatus,c=a.authorizationLimit,u=a.payCount,l=a.weight,this.form={merchantUid:i,userId:this.nowUserId,phone:n,email:s,userLoginStatus:!!o,authorizationLimit:c,weight:l,payCount:u,googleCode:""});case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},exportExcel:function(e){this.search_params_obj=e.query;var t=e.num;g["a"].exportData.apply(this,[t])},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},confirmOp:function(){var e=this;this.isModify?this.dialogVisible=!1:this.$refs["form"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,i,n,s,o,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=9;break}return a=e.form,a.merchantUid,i=a.userId,a.googleCode,a.rewardInRate,a.userLoginStatus,n=a.authorizationLimit,s=a.weight,o=a.payCount,c={userId:i,authorizationLimit:n+"",weight:s+"",payCount:o+""},e.btnLoading=!0,t.next=6,h["a"].getUserUpdateMerchantInfo(c);case 6:u=t.sent,u&&(e.$message({message:"修改成功",type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getAssetsList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={userId:this.nowUserId},e.next=3,h["a"].getPayQueryInfo(t);case 3:r=e.sent,r&&(a=r.data.data,i=[],a&&a.length&&a.forEach((function(e){var t=[];e.coinAddressList.forEach((function(e){"omni"!=e.chainName&&"trc20"!=e.chainName&&t.push(e)})),e.coinAddressList=t,i.push(e)})),this.assetsList=i);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,i,n,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize,appId:3},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,h["a"].getUserGetMerchantInfo(t);case 8:r=e.sent,r&&(console.log(r),a=r.data.data,i=a.records,n=a.total,s=a.current,o=a.pages,this.total=n,this.pages=o,this.current_page=s,i.forEach((function(e){e["isCreateAgent"]=!!e["isCreateAgent"]})),this.list=i,this.dataList=i),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),queryData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=5,h["a"].getUserGetMerchantInfo(t);case 5:if(r=e.sent,this.excelLoading=!1,!r){e.next=9;break}return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:(e+"").replace(/\//gi,"-")},requiredParams:function(e){this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},percentToNum:function(e){return-1!==(e+"").indexOf("%")?(e=(e+"").replace(/\%/,""),e):s["a"].divide(e,100)},numToPercent:function(e){return e+"%"}},mounted:function(){var e=this.$util.getAuthority("AcceptanceSetting",d["f"],d["g"]);this.configs=e.val,this.searchCofig=this.$util.clone(d["h"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}}),b=f,v=(r("31ce"),r("0c7c")),w=Object(v["a"])(b,a,i,!1,null,null,null);t["default"]=w.exports}}]);