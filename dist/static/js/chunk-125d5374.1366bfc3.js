(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-125d5374"],{"15fd":function(t,e,a){"use strict";function r(t,e){if(null==t)return{};var a,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}function i(t,e){if(null==t)return{};var a,i,s=r(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}a.d(e,"a",(function(){return i}))},"34da":function(t,e,a){"use strict";a("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,r){a.path==t&&(e=r)})),e>=0&&a.splice(e,1)}}}},4734:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"appealJudge-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-con"},[a("H3",[t._v("订单信息")]),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.infoLoading,data:t.list,configs:t.configs}})],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-con"},[a("div",{staticClass:"card-info"},[t.isBuyProEmpty?a("div",{staticClass:"card-info-panel"},[a("H3",[t._v("买方"+t._s(1==t.buyProofInfo.isAdvert?"广告商":"")+"申诉信息")]),t._v(" "),a("div",{staticClass:"line header"},[a("span",[t._v("姓名: "+t._s(t.buyProofInfo.realName))]),t._v(" "),a("span",[t._v("账号:"+t._s(t.buyProofInfo.phone))])]),t._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"title"},[t._v("申诉内容")]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(t.buyProofInfo.proofTxt))])]),t._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"title"},[t._v("申诉凭证")]),t._v(" "),t.$util.isArray(t.buyProofInfo.proofImg)&&t.buyProofInfo.proofImg.length?a("div",{staticClass:"img-list"},t._l(t.buyProofInfo.proofImg,(function(e,r){return a("viewer",{key:r,attrs:{options:t.options}},[a("img",{attrs:{src:e,alt:""}})])})),1):a("div",{staticClass:"img-list"},[a("viewer",{attrs:{options:t.options}},[a("img",{attrs:{src:t.buyProofInfo.proofImg,alt:""}})])],1)])],1):t._e(),t._v(" "),t.isSaleProEmpty?a("div",{staticClass:"card-info-panel"},[a("H3",[t._v("卖方"+t._s(1==t.saleProofInfo.isAdvert?"广告商":"")+"申诉信息")]),t._v(" "),a("div",{staticClass:"line header"},[a("span",[t._v("姓名: "+t._s(t.saleProofInfo.realName))]),t._v(" "),a("span",[t._v("账号:"+t._s(t.saleProofInfo.phone))])]),t._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"title"},[t._v("申诉内容")]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(t.saleProofInfo.proofTxt))])]),t._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"title"},[t._v("申诉凭证")]),t._v(" "),t.$util.isArray(t.saleProofInfo.proofImg)&&t.saleProofInfo.proofImg.length?a("div",{staticClass:"img-list"},t._l(t.saleProofInfo.proofImg,(function(e,r){return a("viewer",{key:r,attrs:{options:t.options}},[a("img",{attrs:{src:e,alt:""}})])})),1):a("div",{staticClass:"img-list"},[a("viewer",{attrs:{options:t.options}},[a("img",{attrs:{src:t.saleProofInfo.proofImg,alt:""}})])],1)])],1):t._e()])])]),t._v(" "),t.isJudgeEnd?a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-con"},[a("H3",[t._v("判决结果")]),t._v(" "),a("el-form",[a("el-form-item",{attrs:{label:"裁决结果"}},[a("div",[t._v(t._s(t._f("winFilter")(t.resultRow.type)))])]),t._v(" "),a("el-form-item",{attrs:{label:"客服处理普通用户结果"}},[a("div",[t._v(t._s(t._f("buyerFilter")(t.resultRow.buyerResult)))])]),t._v(" "),a("el-form-item",{attrs:{label:"客服处理广告商结果"}},[a("div",[t._v(t._s(t._f("sellerFilter")(t.resultRow.sellerResult)))])]),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("div",[t._v(t._s(t.resultRow.auditComment))])]),t._v(" "),a("el-form-item",{attrs:{label:"处理时间"}},[a("div",[t._v(t._s(t._f("typeTime")(t.resultRow.auditTime)))])]),t._v(" "),a("el-form-item",{attrs:{label:"处理人"}},[a("div",[t._v(t._s(t.resultRow.auditUserName))])]),t._v(" "),a("el-form-item",{attrs:{label:"处理人IP"}},[a("div",[t._v(t._s(t.resultRow.auditIp))])])],1)],1)]):t._e(),t._v(" "),"judgment"===t.pageStatus?a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-con"},[a("H3",[t._v("判决")]),t._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules}},[a("el-form-item",{attrs:{label:"裁决结果",prop:"appealResult","label-width":"120px"}},[a("el-select",{staticStyle:{"min-width":"320px"},attrs:{placeholder:"请选择",disabled:!t.isModify},model:{value:t.ruleForm.appealResult,callback:function(e){t.$set(t.ruleForm,"appealResult",e)},expression:"ruleForm.appealResult"}},t._l(t.judgmentList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"处罚普通用户",prop:"userResult","label-width":"120px"}},[a("el-select",{attrs:{placeholder:"请选择",disabled:!t.isModify},model:{value:t.ruleForm.userResult,callback:function(e){t.$set(t.ruleForm,"userResult",e)},expression:"ruleForm.userResult"}},t._l(t.punishBuyList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"处罚广告商",prop:"advertResult","label-width":"120px"}},[a("el-select",{attrs:{placeholder:"请选择",disabled:!t.isModify},model:{value:t.ruleForm.advertResult,callback:function(e){t.$set(t.ruleForm,"advertResult",e)},expression:"ruleForm.advertResult"}},t._l(t.punishSellList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"备注",prop:"auditComment","label-width":"120px"}},[a("el-input",{attrs:{type:"textarea",rows:"4",placeholder:"请输入",disabled:!t.isModify},model:{value:t.ruleForm.auditComment,callback:function(e){t.$set(t.ruleForm,"auditComment",e)},expression:"ruleForm.auditComment"}})],1)],1)],1)],1)]):"edit"===t.pageStatus?a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-con"},[a("H3",[t._v("修改金额")]),t._v(" "),a("el-form",{ref:"editForm",attrs:{model:t.editForm,rules:t.eRules}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"修改金额",prop:"money"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!t.isModify},model:{value:t.editForm.money,callback:function(e){t.$set(t.editForm,"money","string"===typeof e?e.trim():e)},expression:"editForm.money"}})],1)],1)],1)],1)],1)]):t._e(),t._v(" "),"detail"===t.pageStatus||t.hasEmit?t._e():a("div",{staticClass:"container-footer"},[t.isModify?a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){e.stopPropagation(),t.isModify=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.confirmSend(e)}}},[t._v("最终判决")])],1):a("div",["judgment"===t.pageStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.confirmOp(e)}}},[t._v("我要处理申诉")]):t._e(),t._v(" "),"edit"===t.pageStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.confirmOp(e)}}},[t._v("修改金额")]):t._e()],1)])],1)},i=[],s=(a("28a5"),a("5530")),o=a("15fd"),n=(a("c5f6"),a("96cf"),a("1da1")),l=a("2fee"),u=a("f556"),c=a("4ec3"),d=a("ed08"),p=a("34da"),f=["id"],m={name:"AppealJudge",components:{Btable:l["a"]},mixins:[p["a"]],data:function(){return{pageStatus:"",btnLoading:!1,isModify:!1,isJudgeEnd:!1,infoLoading:!1,hasEmit:!1,list:[],curRow:{},appealStatus:"",resultRow:{},configs:[],rowId:"",tradeId:"",appealId:"",buyProofInfo:{},saleProofInfo:{},isBuyProEmpty:!1,isSaleProEmpty:!1,current_page:1,pageSize:10,total:0,pages:0,curObj:null,ruleForm:{id:"",appealResult:"",userResult:"",advertResult:"",auditComment:""},rules:{appealResult:[{required:!0,message:"裁决结果不能为空",trigger:"blur"}],userResult:[{required:!0,message:"普通用户判决不能为空",trigger:"blur"}],advertResult:[{required:!0,message:"广告商判决不能为空",trigger:"blur"}],auditComment:[{required:!0,message:"备注不能为空",trigger:"blur"}]},editForm:{money:""},eRules:{money:[{required:!0,message:"备注不能为空",trigger:"blur"}]},judgmentList:[{label:"买方胜诉(订单完成)",value:2},{label:"卖方胜诉(订单取消)",value:1}],punishBuyList:[{label:"不惩罚",value:1},{label:"禁止法币交易",value:2}],punishSellList:[{label:"不惩罚",value:1},{label:"禁止发布广告",value:3}],options:{inline:!1,button:!1,navbar:!1,title:!1,toolbar:!1,tooltip:!1,movable:!0,zoomable:!0,rotatable:!0,scalable:!1,transition:!0,fullscreen:!0,keyboard:!0}}},filters:{typeTime:function(t){return t?Object(d["a"])(t):""},winFilter:function(t){return 1==t?"买方胜诉(订单完成)":0==t?"卖方胜诉(订单取消)":""},buyerFilter:function(t){return 1==t?"不惩罚":2==t?"禁止法币交易":"无"},sellerFilter:function(t){return 1==t?"不惩罚":3==t?"禁止发布广告":"无"}},methods:{confirmOp:function(){this.isModify=!0,this.$refs["ruleForm"].resetFields()},confirmSend:function(){"judgment"===this.pageStatus?this.appealJudgment():this.appealChangeMoney()},appealChangeMoney:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.editForm.money>0){t.next=3;break}return this.$notify({title:"提示",message:"请输入金额",type:"error"}),t.abrupt("return");case 3:return e={appealId:this.appealId,money:Number(this.editForm.money)},this.btnLoading=!0,t.next=7,c["a"].getAppealChangeMoney(e);case 7:a=t.sent,a&&(this.$message({message:"修改金额成功",type:"success"}),this.isModify=!1,this.hasEmit=!0),this.btnLoading=!1;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),appealJudgment:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs["ruleForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a&&(r="最终判决",i="判决后该申诉订单结束,不可再作修改,请谨慎操作",e.$confirm(i,r,{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.ruleForm,a.id,r=Object(o["a"])(a,f),i=Object(s["a"])({id:e.appealId},r),e.btnLoading=!0,t.next=5,c["a"].putaAdjustAppealNew(i);case 5:n=t.sent,n&&(e.$message({message:"裁决成功",type:"success"}),e.isModify=!1,e.reloadTagsPage("/fiat/appealJudge"),e.reloadTagsPage("/fiat/appeal")),e.btnLoading=!1,e.$router.go(-1);case 9:case"end":return t.stop()}}),t)})))).catch((function(){})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getDetail:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.dealLoading){t.next=2;break}return t.abrupt("return");case 2:return a={id:this.rowId},this.dealLoading=!0,t.next=6,c["a"].getProofInfoNew(a);case 6:r=t.sent,r&&(this.buyProofInfo=r.data.data.buyAppeal,this.buyProofInfo.proofImg=this.dealPic(this.buyProofInfo.proofImg),this.isBuyProEmpty=!this.$util.isEmptyObject(this.buyProofInfo),this.saleProofInfo=r.data.data.sellAppeal,this.saleProofInfo.proofImg=this.dealPic(this.saleProofInfo.proofImg),this.isSaleProEmpty=!this.$util.isEmptyObject(this.saleProofInfo),this.appealId=r.data.data.otcOrderDetail.id,this.resultRow=r.data.data.audit,this.list.push(r.data.data.otcOrderDetail)),this.dealLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),dealPic:function(t){return t?~(t+"").indexOf(",")?(t+"").split(","):t:""},formatTime:function(t){return~(t+"").indexOf("-")?t:this.$util.dateFormat(t,"YYYY-MM-DD hh:mm:ss")},initFunc:function(){this.rowId=this.$route.query.id,this.appealStatus=this.$route.query.appealStatus;var t=this.$route.query.label;"judgment"===t||"edit"===t?this.isModify=!1:"detail"===t&&(this.isModify=!1,1==this.appealStatus&&(this.isJudgeEnd=!0)),this.configs=u["s"],this.pageStatus=t,this.getDetail()}},activated:function(){this.isInTags()||(this.isModify=!1,this.isJudgeEnd=!1,this.infoLoading=!1,this.hasEmit=!1,this.list=[],this.curRow={},this.ruleForm={id:"",appealResult:"",userResult:"",advertResult:"",auditComment:""},this.configs=[],this.tradeId="",this.appealId="",this.buyProofInfo={},this.saleProofInfo={},this.isBuyProEmpty=!1,this.isSaleProEmpty=!1,this.current_page=1,this.pageSize=10,this.total=0,this.pages=0,this.initFunc())}},v=m,h=(a("f373"),a("2877")),g=Object(h["a"])(v,r,i,!1,null,null,null);e["default"]=g.exports},"5ae3":function(t,e,a){},7514:function(t,e,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),s="find",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(s)},"87f3":function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},f373:function(t,e,a){"use strict";var r=a("5ae3"),i=a.n(r);i.a}}]);