(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-368d041e"],{"445c":function(t,e,i){"use strict";var r=i("8ae8"),a=i.n(r);a.a},"8ae8":function(t,e,i){},cbe8:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"highFrequencyConfig-container"},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"200px",size:"medium"}},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"box-card-con"},[i("H5",[t._v("免实名提币管理")]),t._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"免额币种类型: ",prop:"monitorRange"}},[i("el-select",{attrs:{disabled:!t.isModify,placeholder:"请选择"},model:{value:t.coinId,callback:function(e){t.coinId=e},expression:"coinId"}},t._l(t.symbollist,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),t._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"新用户无需实名可提币额度:  ",prop:"withdrawQuota"}},[i("el-input",{staticStyle:{width:"55%"},attrs:{type:"number",placeholder:"请输入",disabled:!t.isModify},model:{value:t.form.withdrawQuota,callback:function(e){t.$set(t.form,"withdrawQuota",e)},expression:"form.withdrawQuota"}})],1)],1)],1),t._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否需要验证初级实名: ",prop:"firstVerifiedSwift"}},[i("el-radio-group",{attrs:{disabled:!t.isModify},model:{value:t.form.firstVerifiedSwift,callback:function(e){t.$set(t.form,"firstVerifiedSwift",e)},expression:"form.firstVerifiedSwift"}},[i("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),i("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1)],1)],1),t._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"无需实名即可提币总开关: ",prop:"withdrawSwift"}},[i("el-switch",{attrs:{disabled:!t.isModify,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form.withdrawSwift,callback:function(e){t.$set(t.form,"withdrawSwift",e)},expression:"form.withdrawSwift"}})],1)],1)],1),t._v(" "),t.btnArr.includes("edit")?i("div",[t.isModify?t._e():i("div",{staticClass:"middle"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.isModify=!0}}},[t._v("编辑")])],1),t._v(" "),t.isModify?i("div",{staticClass:"middle"},[i("el-button",{attrs:{type:"primary",plain:"",size:"medium"},on:{click:t.cancelSend}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"medium",loading:t.btnLoading},on:{click:t.confirmSend}},[t._v("提交修改")])],1):t._e()]):t._e()],1)])],1)],1)},a=[],n=(i("a481"),i("96cf"),i("3b8d")),s=i("4ec3"),o={name:"HighFrequencyConfig",data:function(){return{btnArr:[],btnLoading:!1,isModify:!1,listLoading:!1,labelWidth:"140px",isRegisterSwitch:!1,coinId:1,form:{withdrawQuota:"",firstVerifiedSwift:0,withdrawSwift:!1},symbollist:[{label:"BTC",value:1}],rules:{withdrawQuota:[{required:!0,message:"必填",trigger:"blur"}],firstVerifiedSwift:[{required:!0,message:"必选",trigger:"blur"}]}}},methods:{cancelSend:function(){this.isModify=!1,this.getList()},getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,i,r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!this.listLoading){t.next=3;break}return t.abrupt("return");case 3:return e={},this.listLoading=!0,t.next=7,s["a"].apiGetRealNameFreeExtract(e);case 7:i=t.sent,i&&(r=i.data.data,a=r.withdrawQuota,n=r.firstVerifiedSwift,o=r.withdrawSwift,this.form={withdrawQuota:a,firstVerifiedSwift:n,withdrawSwift:!!o}),this.listLoading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log("error");case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}(),checkVal:function(t){this.form[t]=(this.form[t]+"").replace(/[^\d]/g,""),this.form[t]<0&&(this.form[t]=0)},confirmSend:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs["form"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(i){var r,a,n,o,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=9;break}return r=e.form,a=r.withdrawQuota,n=r.firstVerifiedSwift,o=r.withdrawSwift,l={withdrawQuota:a,firstVerifiedSwift:n,withdrawSwift:o?1:0},e.btnLoading=!0,t.next=6,s["a"].apiEditRealNameFreeExtract(l);case 6:c=t.sent,c&&(e.$message({message:"修改成功！",type:"success"}),e.getList(),e.isModify=!1),e.btnLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSymbolList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("common/getCoinList").then((function(){var t=e.$store.state.common.coinlist;e.symbollist=t.filter((function(t){return"BTC"==t.label}))}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this.$util.getAuthority("HighFrequencyConfig",[],[]);this.btnArr=t.btnArr,this.getList(),this.getSymbolList()}},l=o,c=(i("445c"),i("0c7c")),f=Object(c["a"])(l,r,a,!1,null,null,null);e["default"]=f.exports}}]);