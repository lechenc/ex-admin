(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f96c100"],{"12b1":function(e,t,i){},"26bd":function(e,t,i){"use strict";var n=i("12b1"),r=i.n(n);r.a},b890:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"voucherParameters-container"},[i("el-card",{staticClass:"box-card"},[i("el-button",{attrs:{type:"primary"},on:{click:e.addType}},[e._v(" 添加新类型 ")]),e._v(" "),i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"medium"}},[i("div",{staticClass:"box-card-con"},[i("H5",[e._v("条件十二: 贵族会员福利")]),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"需入金量达到USDT：",prop:"incomeAmount","label-width":e.labelWidth}},[i("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!e.isModify},on:{input:function(t){return e.checkVal("incomeAmount","noDot")}},model:{value:e.form.incomeAmount,callback:function(t){e.$set(e.form,"incomeAmount",t)},expression:"form.incomeAmount"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"需开仓交易额USDT：",prop:"openPositionAmount","label-width":e.labelWidth}},[i("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!e.isModify},on:{input:function(t){return e.checkVal("openPositionAmount","noDot")}},model:{value:e.form.openPositionAmount,callback:function(t){e.$set(e.form,"openPositionAmount",t)},expression:"form.openPositionAmount"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"可获得邀请名额",prop:"inviteNumber","label-width":e.labelWidth}},[i("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!e.isModify},on:{input:function(t){return e.checkVal("inviteNumber","noDot")}},model:{value:e.form.inviteNumber,callback:function(t){e.$set(e.form,"inviteNumber",t)},expression:"form.inviteNumber"}})],1)],1)],1)],1)]),e._v(" "),i("el-form",{ref:"netCashForm",attrs:{model:e.netCashForm,rules:e.netCashRules}},e._l(e.netCashForm.netCashList,(function(t,n){return i("div",{key:n,staticClass:"con"},[i("H5",[e._v("条件十三: 代理净入金"+e._s(n+1))]),e._v(" "),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{required:!0,label:"关联代理UID","label-width":e.labelWidth}},[i("el-input",{attrs:{rows:"3",type:"textarea",placeholder:"请输入代理UID,以逗号隔开"},on:{input:function(e){t.triggerId=t.triggerId.replace(/[^\d,]/g,"")}},model:{value:t.triggerId,callback:function(i){e.$set(t,"triggerId","string"===typeof i?i.trim():i)},expression:"el.triggerId"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:16}},[e._l(t.triggerIdList,(function(t,r){return i("el-row",{key:r},[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{required:!0,label:r+1+" 累计净划入","label-width":"180px"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.experienceId,callback:function(i){e.$set(t,"experienceId",i)},expression:"fl.experienceId"}},e._l(e.coinList,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{required:!0,label:"达到USDT","label-width":e.labelWidth}},[i("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(e){t.relationIds=t.relationIds.replace(/[^\d]/g,"")}},model:{value:t.relationIds,callback:function(i){e.$set(t,"relationIds","string"===typeof i?i.trim():i)},expression:"fl.relationIds"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:4}},[i("el-button",{staticStyle:{"margin-left":"20px","margin-top":"5px"},attrs:{size:"small",round:"",plain:"",type:"danger"},on:{click:function(t){return t.stopPropagation(),e.delTriggerIdList(n,r)}}},[e._v("删除")])],1)],1)})),e._v(" "),i("el-row",{staticClass:"type-middle"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addNetCash(n)}}},[e._v("+添加")])],1)],2)],1)],1)})),0),e._v(" "),i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"medium"}},[i("div",{staticClass:"box-card-con"},[i("H5",[e._v("条件十四: 直推邀请")]),e._v(" "),i("el-form-item",{attrs:{label:"需入金量达到",prop:"incomeAmount","label-width":e.labelWidth}},[i("el-col",{attrs:{span:8}},[i("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!e.isModify},on:{input:function(t){return e.checkVal("incomeAmount","noDot")}},model:{value:e.form.incomeAmount,callback:function(t){e.$set(e.form,"incomeAmount",t)},expression:"form.incomeAmount"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"需开仓交易额",prop:"openPositionAmount","label-width":e.labelWidth}},[i("el-col",{attrs:{span:8}},[i("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!e.isModify},on:{input:function(t){return e.checkVal("openPositionAmount","noDot")}},model:{value:e.form.openPositionAmount,callback:function(t){e.$set(e.form,"openPositionAmount",t)},expression:"form.openPositionAmount"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"可获得邀请名额",prop:"inviteNumber","label-width":e.labelWidth}},[i("el-col",{attrs:{span:8}},[i("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!e.isModify},on:{input:function(t){return e.checkVal("inviteNumber","noDot")}},model:{value:e.form.inviteNumber,callback:function(t){e.$set(e.form,"inviteNumber",t)},expression:"form.inviteNumber"}})],1)],1)],1)]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible,width:"500px",title:"添加新类型"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":e.labelWidth,rules:e.addRules}},[i("el-form-item",{attrs:{label:"类型",prop:"type"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},e._l(e.addTypeList,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),i("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticStyle:{"margin-right":"10px"},on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),e.confirmAdd(t)}}},[e._v("确定")])],1)],1),e._v(" "),e.isCURDAuth?i("div",[e.isModify?e._e():i("div",{staticClass:"middle"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.isModify=!0}}},[e._v("修改")])],1),e._v(" "),e.isModify?i("div",{staticClass:"middle"},[i("el-button",{attrs:{type:"primary",plain:"",size:"medium"},on:{click:e.cancelSend}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"medium",loading:e.confirmLoading},on:{click:e.confirmSend}},[e._v("提交修改")])],1):e._e()]):e._e()],1)],1)},r=[],o=(i("a481"),i("96cf"),i("3b8d")),a=i("4ec3"),s=(i("ca00"),{data:function(){return{dialogVisible:!1,isCURDAuth:!0,isModify:!1,listLoading:!1,confirmLoading:!1,list:[],labelWidth:"140px",form:{id:"",incomeAmount:"",inviteNumber:"",openPositionAmount:""},rules:{incomeAmount:[{required:!0,message:"必填",trigger:"blur"}],inviteNumber:[{required:!0,message:"必填",trigger:"blur"}],openPositionAmount:[{required:!0,message:"必填",trigger:"blur"}]},netCashForm:{netCashList:[{triggerId:"",triggerIdList:[{experienceId:"",relationIds:""}]}]},coinList:[],netCashRules:{},addForm:{},addRules:{type:[{required:!0,message:"必填",trigger:"blur"}]},addTypeList:[{label:"净入金金额开仓交易额",value:1},{label:"代理净入金",value:2},{label:"直推邀请",value:3}]}},methods:{delTriggerIdList:function(e,t){1==this.netCashForm.netCashList[e].triggerIdList.length?this.netCashForm={netCashList:[]}:this.netCashForm.netCashList[e].triggerIdList.splice(t,1)},confirmAdd:function(){var e=this;this.$refs["addForm"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(i){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i&&(n=e.addForm.type,2==n&&(e.netCashForm.netCashList.push({triggerId:"",triggerIdList:[{experienceId:"",relationIds:""}]}),e.dialogVisible=!1));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addType:function(){var e=this;this.dialogVisible=!0,this.$nextTick((function(){e.addForm={type:""}}))},addNetCash:function(e){console.log("index",e),this.netCashForm.netCashList[e].triggerIdList.push({experienceId:"",relationIds:""})},cancelSend:function(){this.isModify=!1,this.getList()},checkVal:function(e,t){t&&(this.form[e]=(this.form[e]+"").replace(/[^\d]/g,"")),this.form[e]<0&&(this.form[e]=0)},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={},this.listLoading=!0,e.next=6,a["a"].getAllTriggerConditionNew(t);case 6:i=e.sent,i&&(n=i.data.data[0],this.form={id:n.id,incomeAmount:n.incomeAmount,inviteNumber:n.inviteNumber,openPositionAmount:n.openPositionAmount}),this.listLoading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirmSend:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["form"].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(i){var n,r,o,s,l,u,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=17;break}if(n=t.form,r=n.openPositionAmount,o=n.incomeAmount,s=n.inviteNumber,l=n.id,u={incomeAmount:parseFloat(o),inviteNumber:parseFloat(s),openPositionAmount:parseFloat(r)},l&&(u.id=l),t.confirmLoading=!0,l){e.next=11;break}return e.next=8,a["a"].addVoucherParameters(u);case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,a["a"].editVoucherParameters(u);case 13:e.t0=e.sent;case 14:c=e.t0,c&&(d="",d=l?"修改成功！":"添加成功！",t.$message({message:d,type:"success"}),t.getList(),t.isModify=!1),t.confirmLoading=!1;case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("VoucherParameters",[],[]);this.isCURDAuth=e.isModify,this.getList()}}),l=s,u=(i("26bd"),i("0c7c")),c=Object(u["a"])(l,n,r,!1,null,null,null);t["default"]=c.exports}}]);