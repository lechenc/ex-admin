(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c733205"],{"29d7":function(e,t,r){"use strict";var n=r("33fc"),a=r.n(n);a.a},"2e08":function(e,t,r){var n=r("9def"),a=r("9744"),i=r("be13");e.exports=function(e,t,r,s){var o=String(i(e)),c=o.length,l=void 0===r?" ":String(r),u=n(t);if(u<=c||""==l)return o;var f=u-c,p=a.call(l,Math.ceil(f/l.length));return p.length>f&&(p=p.slice(0,f)),s?p+o:o+p}},"2f21":function(e,t,r){"use strict";var n=r("79e5");e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"32a6":function(e,t,r){var n=r("241e"),a=r("c3a1");r("ce7e")("keys",(function(){return function(e){return a(n(e))}}))},"33fc":function(e,t,r){},4537:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"apiKey-container"},[e.isCURDAuth?r("div",{staticClass:"container-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addLine}},[e._v("添加")])],1):e._e(),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,width:"600px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"备注",prop:"keyName","label-width":e.labelWidth}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.form.keyName,callback:function(t){e.$set(e.form,"keyName",t)},expression:"form.keyName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"API Key:",prop:"backSecret","label-width":e.labelWidth}},[r("el-col",{attrs:{span:19}},[r("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!0},on:{input:function(t){return e.checkVal("backSecret")}},model:{value:e.form.backSecret,callback:function(t){e.$set(e.form,"backSecret",t)},expression:"form.backSecret"}})],1),e._v(" "),r("el-col",{attrs:{span:4}},[r("el-button",{staticClass:"btn-right",attrs:{type:"primary",size:"medium"},on:{click:function(t){return t.stopPropagation(),e.editPwd("backSecret")}}},[e._v("获取Key")])],1)],1),e._v(" "),r("el-form-item",{staticStyle:{margin:"5px 0px"},attrs:{label:"Secret Key:",prop:"cashAccesskey","label-width":e.labelWidth}},[r("el-col",{attrs:{span:19}},[r("el-input",{attrs:{type:"text",placeholder:"请输入",disabled:!0},on:{input:function(t){return e.checkVal("cashAccesskey")}},model:{value:e.form.cashAccesskey,callback:function(t){e.$set(e.form,"cashAccesskey",t)},expression:"form.cashAccesskey"}})],1),e._v(" "),r("el-col",{attrs:{span:4}},[r("el-button",{staticClass:"btn-right",attrs:{type:"primary",size:"medium"},on:{click:function(t){return t.stopPropagation(),e.editPwd("cashAccesskey")}}},[e._v("获取Key")])],1)],1),e._v(" "),r("el-form-item",{staticStyle:{margin:"5px 0px"},attrs:{"label-width":e.labelWidth}},[e._v(" 密钥仅显示1次,遗失后不可找回,请务必妥善保存 ")]),e._v(" "),r("el-form-item",{attrs:{label:"谷歌验证",prop:"keyName","label-width":e.labelWidth}},[r("el-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.form.keyName,callback:function(t){e.$set(e.form,"keyName","string"===typeof t?t.trim():t)},expression:"form.keyName"}})],1)],1),e._v(" "),r("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1)],1)},a=[],i=(r("8e6e"),r("456d"),r("a481"),r("bd86")),s=r("a8db"),o=(r("ac6a"),r("55dd"),r("96cf"),r("3b8d")),c=r("c249"),l=r("2fee"),u=r("f21b"),f=r("e582"),p=r("4ec3");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"ApiKey",components:{Btable:l["a"],Bsearch:c["a"],iconPage:u["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,title:"添加",labelWidth:"100px",dialogVisible:!1,form:{},rules:{keyName:[{required:!0,message:"必填"}],englishKeyName:[{required:!0,message:"必填"}],appKey:[{required:!0,message:"必填"}],iconUrl:[{required:!0,message:"必填"}],blackIconUrl:[{required:!0,message:"必填"}],htmlUrl:[{required:!0,message:"必填"}],indexName:[{required:!0,message:"必填"}]},curRow:{}}},methods:{editPwd:function(e){this.form[e]=this.$util.randomRange(32)},uploadIcon:function(e,t,r){if(!e.data)return this.$message.error("图片上传失败"),void this.$refs.iconDot.clearFiles();this.form.iconUrl=e.data[0].url,this.$refs.iconDot.handleRemove(t),this.$refs.iconDot.clearFiles()},uploadIcon2:function(e,t,r){if(!e.data)return this.$message.error("图片上传失败"),void this.$refs.iconDot2.clearFiles();console.log("response",e),this.form.blackIconUrl=e.data[0].url,this.$refs.iconDot2.handleRemove(t),this.$refs.iconDot2.clearFiles()},uploadError:function(){this.$message.error("图片上传失败")},uploadError2:function(){this.$message.error("图片上传失败")},uploadCompressError:function(){this.$message.error("文件上传失败")},exceed:function(e,t){this.$message.error("单次只能选择一张图片进行上传！")},exceed2:function(e,t){this.$message.error("单次只能选择一张图片进行上传！")},doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,i,s,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,n=t.row,this.curRow=n,"edit"===r&&(this.title="编辑",this.dialogVisible=!0,this.$nextTick((function(){c.$refs["form"].resetFields(),c.form={id:n.id,keyName:n.keyName,englishKeyName:n.englishKeyName,appKey:n.appKey,iconUrl:n.iconUrl,blackIconUrl:n.blackIconUrl,htmlUrl:n.htmlUrl,indexName:n.indexName,status:!!n.status,onlineStatus:!!n.onlineStatus,sort:n.sort}}))),"del"===r&&this.$confirm("确定删除？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:n.id},e.next=3,p["a"].getDeleteKey(t);case 3:r=e.sent,r&&(c.$message({type:"success",message:"通过操作成功!"}),c.getList());case 5:case"end":return e.stop()}}),e)})))).catch((function(){})),"trstart"!==r&&"trlogin"!==r){e.next=12;break}return a={trstart:function(){return{status:n.status?1:0}},trlogin:function(){return{onlineStatus:n.onlineStatus?1:0}}},i={id:n.id},Object.assign(i,a[r]()),e.next=10,p["a"].getEditKey(i);case 10:s=e.sent,s?(this.$message({message:"切换成功",type:"success"}),this.getList()):this.getList();case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},addLine:function(){var e=this;this.title="添加",this.dialogVisible=!0,this.$nextTick((function(){e.form={id:"",keyName:"",englishKeyName:"",appKey:"",iconUrl:"",blackIconUrl:"",htmlUrl:"",indexName:"",status:!1,onlineStatus:!1,sort:"",backSecret:"",cashAccesskey:""},e.$refs["form"].resetFields()}))},confirmOp:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var n,a,i,o,c,l,u,f,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=16;break}if(n=e.form,a=n.id,i=n.appKey,o=n.status,c=n.onlineStatus,l=Object(s["a"])(n,["id","appKey","status","onlineStatus"]),u=h({status:o?1:0,onlineStatus:c?1:0,appKey:i},l),e.btnLoading=!0,""!==a){t.next=10;break}return t.next=7,p["a"].getAddKey(u);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,p["a"].getEditKey(h({id:a},u));case 12:t.t0=t.sent;case 13:f=t.t0,f&&(d=""===a?"添加成功":"编辑成功",e.$message({message:d,type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,p["a"].getUserKeyPage(t);case 7:r=e.sent,r&&(n=r.data.data,a=n.records,i=n.total,s=n.current,o=n.pages,a.forEach((function(e){e["status"]=!!e["status"],e["onlineStatus"]=!!e["onlineStatus"]})),this.list=a,this.total=i,this.current_page=s,this.pages=o),this.listLoading=!1;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkVal:function(e){this.form[e]=(this.form[e]+"").replace(/[^\d]/g,""),this.form[e]>100&&(this.form[e]=100),this.form[e]<0&&(this.form[e]=0)}},mounted:function(){var e=this.$util.getAuthority("ApiKey",f["apiKeyCol"],f["apiKeyColNoBtn"]);this.configs=e.val,this.isCURDAuth=e.isAdd,this.searchCofig=this.$util.clone(f["apiKeyConfig"]),this.getList()}},g=m,b=(r("29d7"),r("0c7c")),y=Object(b["a"])(g,n,a,!1,null,null,null);t["default"]=y.exports},"55dd":function(e,t,r){"use strict";var n=r("5ca1"),a=r("d8e8"),i=r("4bf8"),s=r("79e5"),o=[].sort,c=[1,2,3];n(n.P+n.F*(s((function(){c.sort(void 0)}))||!s((function(){c.sort(null)}))||!r("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(i(this)):o.call(i(this),a(e))}})},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},9744:function(e,t,r){"use strict";var n=r("4588"),a=r("be13");e.exports=function(e){var t=String(a(this)),r="",i=n(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var n=r("e265"),a=r.n(n),i=r("a4bb"),s=r.n(i);function o(e,t){if(null==e)return{};var r,n,a={},i=s()(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function c(e,t){if(null==e)return{};var r,n,i=o(e,t);if(a.a){var s=a()(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,"a",(function(){return c}))},ce7e:function(e,t,r){var n=r("63b6"),a=r("584a"),i=r("294c");e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i((function(){r(1)})),"Object",s)}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},f576:function(e,t,r){"use strict";var n=r("5ca1"),a=r("2e08"),i=r("a25f"),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);n(n.P+n.F*s,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})}}]);