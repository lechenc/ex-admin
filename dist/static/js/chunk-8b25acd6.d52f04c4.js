(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b25acd6"],{"32a6":function(e,t,r){var n=r("241e"),i=r("c3a1");r("ce7e")("keys",(function(){return function(e){return i(n(e))}}))},"64b3":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"notice-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchConfig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),r("div",{staticClass:"notice-button"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.create}},[e._v("添加设置")])],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-Dialog",{staticClass:"notice-dialog",attrs:{visible:e.showDialog,title:e.title,width:"700px"},on:{"update:visible":function(t){e.showDialog=t}}},[r("el-form",{ref:"form",staticStyle:{width:"90%","padding-left":"15px"},attrs:{model:e.form,"label-width":"160px",rules:e.rules}},[r("el-form-item",{attrs:{label:"选择模拟币种",prop:"coinMarket"}},[r("el-select",{attrs:{placeholder:"请选择",width:"20%"},model:{value:e.form.coinMarket,callback:function(t){e.$set(e.form,"coinMarket",t)},expression:"form.coinMarket"}},e._l(e.symbollist,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{staticClass:"my-form-item",attrs:{label:"开通模拟账户自动赠送金额",prop:"openAutoAmount"}},[r("el-input",{attrs:{size:"small",placeholder:"请输入",type:"number"},model:{value:e.form.openAutoAmount,callback:function(t){e.$set(e.form,"openAutoAmount",t)},expression:"form.openAutoAmount"}})],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{staticClass:"my-form-item",attrs:{label:"账号总价值低于多少金额可领取模拟金",prop:"lowAmount"}},[r("el-input",{attrs:{size:"small",type:"number",placeholder:"请输入"},model:{value:e.form.lowAmount,callback:function(t){e.$set(e.form,"lowAmount",t)},expression:"form.lowAmount"}})],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"每日每次可以领取金额",prop:"todayReceiveAmount"}},[r("el-input",{attrs:{size:"small",placeholder:"请输入",type:"Number"},model:{value:e.form.todayReceiveAmount,callback:function(t){e.$set(e.form,"todayReceiveAmount","string"===typeof t?t.trim():t)},expression:"form.todayReceiveAmount"}})],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"模拟金领取开关",prop:"receiveSwitch"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.receiveSwitch,callback:function(t){e.$set(e.form,"receiveSwitch","string"===typeof t?t.trim():t)},expression:"form.receiveSwitch"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"comfirn-btn footer"},[r("el-button",{attrs:{type:"primary",size:"small",loading:e.btnLoading},on:{click:e.confirm}},[e._v("确定")]),e._v(" "),r("el-button",{attrs:{type:"default",size:"small"},on:{click:function(t){e.showDialog=!1}}},[e._v("取消")])],1)],1)],1)},i=[],a=(r("8e6e"),r("456d"),r("a481"),r("ac6a"),r("bd86")),o=r("a8db"),s=(r("96cf"),r("3b8d")),c=r("c249"),u=r("2fee"),l=r("f21b"),m=r("e8f8"),f=r("4ec3");r("ca00");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={name:"columnMimic",components:{Btable:u["a"],Bsearch:c["a"],iconPage:l["a"]},data:function(){return{symbollist:[],form:{id:"",coinMarket:"",openAutoAmount:"",lowAmount:"",todayReceiveAmount:"",receiveSwitch:!1},toDay:"",ago:"",rules:{coinMarket:[{required:!0,message:"请输入",trigger:"blur"}],openAutoAmount:[{required:!0,message:"请输入",trigger:"blur"}],lowAmount:[{required:!0,message:"请输入",trigger:"blur"}],todayReceiveAmount:[{required:!0,message:"请输入",trigger:"blur"}]},showDialog:!1,title:"添加设置",btnLoading:!1,listLoading:!1,list:[],configs:[],searchConfig:[],search_params_obj:{},current_page:1,pages:0,pageSize:10,total:0,detail_list:[],row:{}}},watch:{showDialog:function(e){e||(this.form={id:"",coinMarket:"",openAutoAmount:"",lowAmount:"",todayReceiveAmount:"",receiveSwitch:!1})}},methods:{uploadError:function(){this.$message.error("图片上传失败")},exceed:function(e,t){this.$message.error("单次只能选择一张图片进行上传！")},uploadIcon:function(e,t,r){if(!e.data)return this.$message.error("图片上传失败"),void this.$refs.iconDot.clearFiles();this.form.iconUrl=e.data[0].url,this.$refs.iconDot.handleRemove(t),this.$refs.iconDot.clearFiles()},confirm:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.form.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var n,i,a,s,c,u,l,m,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=20;break}if(n=t.form,i=n.id,a=n.receiveSwitch,s=n.coinMarket,c=Object(o["a"])(n,["id","receiveSwitch","coinMarket"]),u="",u=t.symbollist.filter((function(e){return e["label"]==s}))[0].value,l=h({receiveSwitch:a?1:0,coinMarket:s,coinId:u},c),t.btnLoading=!0,i){e.next=12;break}return e.next=9,f["a"].addColumnMimic(h({},l));case 9:e.t0=e.sent,e.next=15;break;case 12:return e.next=14,f["a"].editColumnMimic(h({id:i},l));case 14:e.t0=e.sent;case 15:m=e.t0,m&&(p=i?"编辑成功":"新增成功",t.$message({message:p,type:"success"}),t.showDialog=!1,t.getList()),t.btnLoading=!1,e.next=21;break;case 20:t.$message.error({title:"提示",message:"请完成表单内容填写再重试"});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),doHandle:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,n,i,a,o,c,u,l,m,p=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,n=t.row,"edit"===r&&(this.showDialog=!0,i=n.id,a=n.coinMarket,o=n.openAutoAmount,c=n.lowAmount,u=n.todayReceiveAmount,l=n.receiveSwitch,this.form={id:i,coinMarket:a,openAutoAmount:o,lowAmount:c,todayReceiveAmount:u,receiveSwitch:1==l},this.title="编辑设置"),"empty"===r&&this.$confirm(n.coinMarket+"是否一键清空?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].emptyColumnMimic({coinName:n.coinMarket});case 2:t=e.sent,t&&(p.$message({type:"success",message:t.data.message}),p.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),"cancel"===r&&this.$confirm(n.coinMarket+"是否一键撤单?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].cancelColumnMimic({coinMarket:n.coinMarket});case 2:t=e.sent,t&&(p.$message({type:"success",message:t.data.message}),p.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),"close"===r&&this.$confirm(n.coinMarket+"是否一键平仓?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].closeColumnMimic({coinMarket:n.coinMarket});case 2:t=e.sent,t&&(p.$message({type:"success",message:t.data.message}),p.getList());case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),"switchCoin"!==r){e.next=10;break}return e.next=8,f["a"].editColumn({id:n.id,columnStatus:n.columnStatus?1:0});case 8:m=e.sent,m?(this.$message({type:"success",message:m.data.message}),this.getList()):this.getList();case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,console.log("this.search_params_obj",this.symbollist),this.getList()},doReset:function(){this.search_params_obj={},this.searchConfig.forEach((function(e){e["value"]=""})),this.getList()},create:function(){this.showDialog=!0,this.title="添加设置"},goPage:function(e){this.current_page=e,this.getList()},requiredParams:function(e){var t=this;if(this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinId){var r="";r=this.symbollist.filter((function(e){return e["value"]==t.search_params_obj.coinId}))[0].value,console.log("this.symbollist",r),this.search_params_obj.coinId=r}},getSymbolList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getsymbolMimiclistContract").then((function(){t.symbollist=t.$store.state.common.symbolMimiclistContract,t.searchConfig[2]["list"]=t.symbollist}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,n,i,a,o,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return this.listLoading=!0,this,t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),e.next=9,f["a"].getColumnMimicList(t);case 9:r=e.sent,r&&(n=r.data.data,i=n.records,a=n.current,o=n.total,s=n.pages,this.total=o,this.pages=s,this.current_page=a,c=[],i.forEach((function(e){"BTCUSDT"!=e.coinMarket&&c.push(e)})),console.log("list",c),this.list=c),this.listLoading=!1;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.configs=m["l"],this.searchConfig=this.$util.clone(m["m"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getSymbolList()}},d=g,b=(r("f64b"),r("0c7c")),v=Object(b["a"])(d,n,i,!1,null,null,null);t["default"]=v.exports},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var n=r("e265"),i=r.n(n),a=r("a4bb"),o=r.n(a);function s(e,t){if(null==e)return{};var r,n,i={},a=o()(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}function c(e,t){if(null==e)return{};var r,n,a=s(e,t);if(i.a){var o=i()(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return c}))},c5ff:function(e,t,r){},ce7e:function(e,t,r){var n=r("63b6"),i=r("584a"),a=r("294c");e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],o={};o[e]=t(r),n(n.S+n.F*a((function(){r(1)})),"Object",o)}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},f64b:function(e,t,r){"use strict";var n=r("c5ff"),i=r.n(n);i.a}}]);