(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68fe5bda"],{"01fb":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"son"},[e.disabled?r("span",[e._v(" "+e._s(e.s)+"s ")]):r("span",[e._v(" 获取验证码 ")])])},s=[],i={props:{disabled:{type:Boolean,default:!1}},data:function(){return{s:60,id:null}},methods:{time:function(){var e=this;this.s--,this.id=setInterval((function(){e.s--}),1e3)}},watch:{disabled:function(e){e&&this.time()},s:function(e){e<=0&&(this.$emit("countdownBtn",!1),this.s=60,clearInterval(this.id))}},beforeUnmount:function(){clearInterval(this.id)}},o=i,n=(r("8fc4"),r("0c7c")),l=Object(n["a"])(o,a,s,!1,null,null,null);t["a"]=l.exports},"126c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"acceptanceList-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig,excelLoading:e.excelLoading,exportExcel:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-exportExcel":e.exportExcel}})],1),e._v(" "),r("div",[r("div",{staticClass:"container-btn"},[e.btnArr.includes("add")?r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.createAdver}},[e._v(" 创建一级承兑商代理")]):e._e()],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1)]),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{"close-on-click-modal":!1,visible:e.dialogVisible,width:"900px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"代理商编号","label-width":e.formLabelWidth,prop:"merchantUid"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",disabled:!0},model:{value:e.form.merchantUid,callback:function(t){e.$set(e.form,"merchantUid",t)},expression:"form.merchantUid"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"手机号","label-width":e.formLabelWidth,prop:"phone"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"",disabled:!0},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"邮箱号","label-width":e.formLabelWidth,prop:"email"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"",disabled:!0},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-table",{staticClass:"agent-table",staticStyle:{width:"100%","text-align":"center","margin-bottom":"30px"},attrs:{data:e.assetsList,border:""}},[r("el-table-column",{attrs:{prop:"coinName",label:"币种"}}),e._v(" "),r("el-table-column",{attrs:{label:"持币量"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(parseFloat(t.row["payAmount"])+parseFloat(t.row["pyaFrozenAmount"])+parseFloat(t.row["otcAmount"])+parseFloat(t.row["otcFrozenAmount"])||"0")+"\n            ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"payAmount",label:"币币可用资产"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(parseFloat(t.row["payAmount"])||"0")+"\n            ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"pyaFrozenAmount",label:"币币冻结资产"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(parseFloat(t.row["pyaFrozenAmount"])||"0")+"\n            ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"otcAmount",label:"法币可用资产"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(parseFloat(t.row["otcAmount"])||"0")+"\n            ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"otcFrozenAmount",label:"法币冻结资产"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(parseFloat(t.row["otcFrozenAmount"])||"0")+"\n            ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"充币地址",width:"470px",prop:"coinAddressList"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"qrimg-wraper"},[t.row["coinAddressList"].length?r("div",[r("div",{staticClass:"colline"},e._l(t.row["coinAddressList"],(function(t,a){return r("div",{key:a},[r("span",{staticClass:"label"},[e._v(e._s(t.chainName)+"： ")]),e._v(" "),r("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover"}},[r("div",{staticStyle:{width:"150px",height:"150px"}},[r("vue-qr",{attrs:{text:t.address,margin:0,colorDark:"#000",colorLight:"#fff",size:150}})],1),e._v(" "),r("el-button",{staticStyle:{"margin-right":"8px"},attrs:{slot:"reference",size:"small"},slot:"reference"},[r("span",[e._v(e._s(t.address))])])],1),e._v(" "),r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.address,expression:"item.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{plain:"",size:"small"}},[e._v("复制")])],1)})),0)]):r("div",[e._v("无")])])]}}])})],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"出售返佣费率","label-width":e.formLabelWidth,prop:"rewardInRate"}},[r("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"请输入",disabled:e.isModify},on:{input:function(t){return e.checkVal("rewardInRate")}},model:{value:e.form.rewardInRate,callback:function(t){e.$set(e.form,"rewardInRate",t)},expression:"form.rewardInRate"}},[r("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1)],1)],1),e._v(" "),e.isModify?e._e():r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"谷歌验证码","label-width":e.formLabelWidth,prop:"googleCode"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",disabled:e.isModify},model:{value:e.form.googleCode,callback:function(t){e.$set(e.form,"googleCode",t)},expression:"form.googleCode"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[e.isModify?e._e():r("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{"close-on-click-modal":!1,title:"创建代理商",visible:e.createVisible,width:"550px"},on:{"update:visible":function(t){e.createVisible=t}}},[r("div",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.formRules,"label-width":"140px"}},[r("el-row",{attrs:{type:"flex",span:24}},[r("el-col",{attrs:{span:2}}),e._v(" "),r("el-col",{attrs:{span:9}},[r("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"手机注册",name:"first"}}),e._v(" "),r("el-tab-pane",{attrs:{label:"邮箱注册",name:"second"}})],1)],1)],1),e._v(" "),"first"===e.activeName?r("el-form-item",{attrs:{label:"代理商账户",prop:"phone"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入手机号"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}},[r("template",{slot:"prepend"},[e._v("+86")])],2)],1):"second"===e.activeName?r("el-form-item",{attrs:{label:"代理商账户",prop:"email"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入邮箱"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"获取验证码",prop:"code"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入验证码"},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}},[r("span",{attrs:{slot:"suffix"},on:{click:e.codeclick},slot:"suffix"},[r("CountdownBtn",{attrs:{disabled:e.disabled},on:{countdownBtn:e.countdownBtn}})],1)])],1),e._v(" "),r("el-form-item",{staticClass:"myLine",attrs:{label:"登录密码",prop:"loginPassword"}},[r("el-input",{attrs:{"show-password":"",autocomplete:"off",type:"password",placeholder:"请输入设置密码"},model:{value:e.ruleForm.loginPassword,callback:function(t){e.$set(e.ruleForm,"loginPassword",t)},expression:"ruleForm.loginPassword"}})],1),e._v(" "),r("div",[e._v("创建成功后承兑商代理可用此账号登录alpex交易所")])],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.createVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.createAgent}},[e._v("确 定")])],1)])],1)},s=[],i=(r("a481"),r("ac6a"),r("96cf"),r("3b8d")),o=r("ff53"),n=r("01fb"),l=r("c249"),c=r("2fee"),u=r("f21b"),d=r("f556"),p=r("4ec3"),m=r("ca00"),f=r("658f"),h=r.n(f),g=r("70ac"),b=r.n(g),v={name:"AcceptanceList",components:{Btable:c["a"],Bsearch:l["a"],iconPage:u["a"],vueQr:h.a,CountdownBtn:n["a"]},data:function(){var e=/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/,t=function(t,r,a){if(!e.test(r))return a(new Error(t.message));a()},r=function(e,t,r){if(""==t.trim())return r(new Error(e.message));r()},a=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,s=function(e,t,r){a.test(t)?r():r(new Error(e.message))},i=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,o=function(e,t,r){i.test(t)?r():r(new Error(e.message))};return{btnArr:[],listLoading:!1,btnLoading:!1,calLoading:!1,disabled:!1,createVisible:!1,excelTitle:"代理商列表",activeName:"first",excelLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",formLabelWidth:"110px",assetsList:[],isModify:!1,nowUserId:0,title:"",ruleForm:{phone:"",email:"",code:"",loginPassword:"",invitationCode:""},labelWidth:"100px",dialogVisible:!1,form:{merchantUid:"",phone:"",email:"",rewardInRate:"",userLoginStatus:!1,googleCode:"",userId:""},rules:{rewardInRate:[{required:!0,message:"必填"}],googleCode:[{required:!0,message:"必填"}]},formRules:{code:[{required:!0,message:"请输入验证码",trigger:"blur"},{required:!0,message:"请输入验证码",validator:r,trigger:"blur"}],email:[{required:!0,message:"请输入",trigger:"blur"},{required:!0,validator:r,message:"请输入",trigger:"blur"},{validator:s,message:"请输入正确邮箱",trigger:"blur"}],phone:[{required:!0,message:"请输入",trigger:"blur"},{required:!0,validator:r,message:"请输入",trigger:"blur"},{validator:o,message:"请输入正确手机号",trigger:"blur"}],loginPassword:[{required:!0,message:"请输入登录密码",trigger:"blur"},{required:!0,validator:r,message:"请输入登录密码",trigger:"blur"},{required:!0,validator:t,message:"支持8-16位字符，包含字母、数字和符号其中两种，区分大小写",trigger:"blur"}]}}},watch:{createVisible:function(e){e&&(this.ruleForm={})}},methods:{handleClick:function(e){},onError:function(){this.$message.success("复制失败")},onCopy:function(){this.$message.success("复制成功")},countdownBtn:function(e){this.disabled=e},createAgent:function(){var e=this;this.$refs["ruleForm"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,s,i,o,n,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=14;break}return t.prev=1,a=e.ruleForm,s=a.email,i=a.phone,o=a.code,n=a.loginPassword,l={code:o,loginPassword:b.a.hbmd5(n)},"first"==e.activeName?(l.phoneOrEmail=i,l.registerType=1):"second"==e.activeName&&(l.phoneOrEmail=s,l.registerType=2),t.next=7,p["a"].acceptanceCreateAgent(l);case 7:c=t.sent,c?(e.$message.success("创建成功"),e.createVisible=!1,e.getList()):e.$message.error(c.data.message),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}())},codeclick:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t=!0,"first"==this.activeName?this.$refs["ruleForm"].validateField(["phone"],(function(e){e&&(t=!1)})):"second"==this.activeName&&this.$refs["ruleForm"].validateField(["email"],(function(e){e&&(t=!1)})),t){e.next=5;break}return e.abrupt("return");case 5:if(!this.disabled){e.next=7;break}return e.abrupt("return");case 7:return this.disabled=!0,r={},"first"==this.activeName?r={smsType:0,phoneOrEmail:this.ruleForm.phone,type:2,phoneAreaCode:"+86"}:"second"==this.activeName&&(r={smsType:0,phoneOrEmail:this.ruleForm.email,type:1}),e.next=12,p["a"].apiSendEmail(r);case 12:a=e.sent,a&&this.$message.success("发送成功"),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));function t(){return e.apply(this,arguments)}return t}(),doHandle:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a,s,i,o,n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fn,a=t.row,this.nowUserId=a.userId,"edit"!==r&&"detail"!==r||("edit"===r?(this.isModify=!1,this.title="代理商编辑"):(this.title="代理商信息详情",this.isModify=!0),this.getAssetsList(),this.dialogVisible=!0,s=a.uid,i=a.phone,o=a.email,n=a.rewardInRate,l=a.userLoginStatus,this.form={merchantUid:s,userId:this.nowUserId,phone:i,email:o,rewardInRate:this.percentToNum(n),userLoginStatus:!l,googleCode:""});case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},exportExcel:function(e){this.search_params_obj=e.query;var t=e.num;m["a"].exportData.apply(this,[t])},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},confirmOp:function(){var e=this;console.log("this.isModify",this.isModify),this.isModify?this.dialogVisible=!1:this.$refs["form"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,s,i,o,n,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=9;break}return a=e.form,s=a.merchantUid,i=a.userId,o=a.googleCode,n=a.rewardInRate,a.userLoginStatus,l={uid:s,userId:i,legalRewardInRate:n?e.numToPercent(n):"0%",googleCode:o,userLoginStatus:0},e.btnLoading=!0,t.next=6,p["a"].editAcceptanceupdate(l);case 6:c=t.sent,c&&(e.$message({message:"修改成功",type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getAssetsList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={userId:this.nowUserId},e.next=3,p["a"].getPayQueryInfo(t);case 3:r=e.sent,r&&(a=r.data.data,s=[],a&&a.length&&a.forEach((function(e){var t=[];e.coinAddressList.forEach((function(e){"omni"!==e.chainName&&t.push(e)})),e.coinAddressList=t,s.push(e)})),this.assetsList=s);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createAdver:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.createVisible=!0;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a,s,i,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,p["a"].getAcceptanceTransRecord(t);case 8:r=e.sent,r&&(a=r.data.data,s=a.records,i=a.total,o=a.current,n=a.pages,this.total=i,this.pages=n,this.current_page=o,s.forEach((function(e){e["isCreateAgent"]=!!e["isCreateAgent"]})),this.list=s,this.dataList=s),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),queryData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.excelLoading=!0,this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=5,p["a"].getAcceptanceTransRecord(t);case 5:if(r=e.sent,this.excelLoading=!1,!r){e.next=9;break}return e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:(e+"").replace(/\//gi,"-")},requiredParams:function(e){this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},percentToNum:function(e){return-1!==(e+"").indexOf("%")?(e=(e+"").replace(/\%/,""),e):o["a"].divide(e,100)},numToPercent:function(e){return e+"%"},checkVal:function(e){this.form[e]=this.form[e]>100?100:this.form[e],this.form[e]=(this.form[e]+"").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),this.form[e]<0&&(this.form[e]=0)}},mounted:function(){var e=this.$util.getAuthority("AcceptanceList",d["a"],d["b"]);this.btnArr=e.btnArr||[],this.configs=e.val,this.searchCofig=this.$util.clone(d["c"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}},_=v,w=(r("ff97"),r("0c7c")),x=Object(w["a"])(_,a,s,!1,null,null,null);t["default"]=x.exports},"8f08":function(e,t,r){},"8fc4":function(e,t,r){"use strict";var a=r("8f08"),s=r.n(a);s.a},f116:function(e,t,r){},ff97:function(e,t,r){"use strict";var a=r("f116"),s=r.n(a);s.a}}]);