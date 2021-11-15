(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19073473"],{"76f5":function(i,t,e){},8538:function(i,t,e){"use strict";e("76f5")},e9e3:function(i,t,e){"use strict";e.r(t);var r=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"riskConfig-container"},[e("el-row",{staticClass:"sac-row"},[e("el-col",{attrs:{span:4}},[e("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(t){return i.$router.go(-1)}}},[i._v("返回")])],1)],1),i._v(" "),e("el-form",{ref:"form",attrs:{model:i.form,rules:i.rules,"label-width":"180px",size:"medium"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"box-card-con"},[e("H5",[i._v("风控参数配置")]),i._v(" "),e("el-row",{attrs:{span:24}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"相同的注册IP人数达到: ",prop:"registerIpLimit"}},[e("el-input",{staticStyle:{width:"55%"},attrs:{type:"number",placeholder:"请输入",disabled:!i.isModify},on:{input:function(t){return i.checkVal("registerIpLimit")}},model:{value:i.form.registerIpLimit,callback:function(t){i.$set(i.form,"registerIpLimit",t)},expression:"form.registerIpLimit"}})],1)],1)],1),i._v(" "),e("el-row",{attrs:{span:24}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"相同的登录IP人数达到: ",prop:"loginIpLimit"}},[e("el-input",{staticStyle:{width:"55%"},attrs:{type:"number",placeholder:"请输入",disabled:!i.isModify},on:{input:function(t){return i.checkVal("loginIpLimit")}},model:{value:i.form.loginIpLimit,callback:function(t){i.$set(i.form,"loginIpLimit",t)},expression:"form.loginIpLimit"}})],1)],1)],1),i._v(" "),e("el-row",{attrs:{span:24}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"相同的设备号人数达到: ",prop:"registerDeviceLimit"}},[e("el-input",{staticStyle:{width:"55%"},attrs:{type:"number",placeholder:"请输入",disabled:!i.isModify},on:{input:function(t){return i.checkVal("registerDeviceLimit")}},model:{value:i.form.registerDeviceLimit,callback:function(t){i.$set(i.form,"registerDeviceLimit",t)},expression:"form.registerDeviceLimit"}})],1)],1)],1),i._v(" "),i.btnArr.includes("detailEdit")?e("div",[i.isModify?i._e():e("div",{staticClass:"middle"},[e("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){i.isModify=!0}}},[i._v("编辑")])],1),i._v(" "),i.isModify?e("div",{staticClass:"middle"},[e("el-button",{attrs:{type:"primary",plain:"",size:"medium"},on:{click:function(t){i.isModify=!1}}},[i._v("取消")]),i._v(" "),e("el-button",{attrs:{type:"primary",size:"medium",loading:i.btnLoading},on:{click:i.confirmSend}},[i._v("提交修改")])],1):i._e()]):i._e()],1)])],1)],1)},n=[],s=(e("a481"),e("96cf"),e("1da1")),a=e("4ec3"),o={name:"RiskConfig",data:function(){return{btnArr:[],btnLoading:!1,isModify:!1,listLoading:!1,labelWidth:"140px",isRegisterSwitch:!1,form:{registerIpLimit:"",loginIpLimit:"",registerDeviceLimit:""},rules:{registerIpLimit:[{required:!0,message:"必填",trigger:"blur"}],loginIpLimit:[{required:!0,message:"必填",trigger:"blur"}],registerDeviceLimit:[{required:!0,message:"必填",trigger:"blur"}]}}},methods:{getList:function(){var i=Object(s["a"])(regeneratorRuntime.mark((function i(){var t,e,r,n,s,o,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!this.listLoading){i.next=2;break}return i.abrupt("return");case 2:return t={},this.listLoading=!0,i.next=6,a["a"].apiGetRiskConfig(t);case 6:e=i.sent,e&&(r=e.data.data,n=r.registerIpLimit,s=r.loginIpLimit,o=r.registerDeviceLimit,l=r.id,this.form={registerIpLimit:n,loginIpLimit:s,registerDeviceLimit:o,id:l}),this.listLoading=!1;case 9:case"end":return i.stop()}}),i,this)})));function t(){return i.apply(this,arguments)}return t}(),checkVal:function(i){this.form[i]=(this.form[i]+"").replace(/[^\d]/g,""),this.form[i]<0&&(this.form[i]=0)},confirmSend:function(){var i=Object(s["a"])(regeneratorRuntime.mark((function i(){var t=this;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:this.$refs["form"].validate(function(){var i=Object(s["a"])(regeneratorRuntime.mark((function i(e){var r,n,s,o,l,c,m;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e){i.next=9;break}return r=t.form,n=r.registerIpLimit,s=r.loginIpLimit,o=r.registerDeviceLimit,l=r.id,c={registerIpLimit:n,loginIpLimit:s,registerDeviceLimit:o,id:l},t.btnLoading=!0,i.next=6,a["a"].apiEditRiskConfig(c);case 6:m=i.sent,m&&(t.$message({message:"修改成功！",type:"success"}),t.getList(),t.isModify=!1),t.btnLoading=!1;case 9:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}());case 1:case"end":return i.stop()}}),i,this)})));function t(){return i.apply(this,arguments)}return t}()},mounted:function(){var i=this.$util.getAuthority("RiskList",[],[]);this.btnArr=i.btnArr||[],this.getList()}},l=o,c=(e("8538"),e("2877")),m=Object(c["a"])(l,r,n,!1,null,null,null);t["default"]=m.exports}}]);