(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-073017d9"],{"1d6c":function(e,t,a){},"2e08":function(e,t,a){var r=a("9def"),i=a("9744"),l=a("be13");e.exports=function(e,t,a,n){var o=String(l(e)),s=o.length,p=void 0===a?" ":String(a),c=r(t);if(c<=s||""==p)return o;var u=c-s,f=i.call(p,Math.ceil(u/p.length));return f.length>u&&(f=f.slice(0,u)),n?f+o:o+f}},"32a6":function(e,t,a){var r=a("241e"),i=a("c3a1");a("ce7e")("keys",(function(){return function(e){return i(r(e))}}))},"5b3c":function(e,t,a){"use strict";var r=a("1d6c"),i=a.n(r);i.a},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),l="find",n=!0;l in[]&&Array(1)[l]((function(){n=!1})),r(r.P+r.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(l)},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,a){a("32a6"),e.exports=a("584a").Object.keys},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(e,t,a){"use strict";var r=a("4588"),i=a("be13");e.exports=function(e){var t=String(i(this)),a="",l=r(e);if(l<0||l==1/0)throw RangeError("Count can't be negative");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(a+=t);return a}},a4bb:function(e,t,a){e.exports=a("8aae")},a8db:function(e,t,a){"use strict";var r=a("e265"),i=a.n(r),l=a("a4bb"),n=a.n(l);function o(e,t){if(null==e)return{};var a,r,i={},l=n()(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}function s(e,t){if(null==e)return{};var a,r,l=o(e,t);if(i.a){var n=i()(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(t,"a",(function(){return s}))},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ce7e:function(e,t,a){var r=a("63b6"),i=a("584a"),l=a("294c");e.exports=function(e,t){var a=(i.Object||{})[e]||Object[e],n={};n[e]=t(a),r(r.S+r.F*l((function(){a(1)})),"Object",n)}},d843:function(e,t,a){"use strict";a.r(t);var r,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"voucherList-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?a("div",{staticClass:"container-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addLine}},[e._v("创建体验金券")])],1):e._e(),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"600px",title:e.title},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"体验金券名称",prop:"experienceName","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",maxlength:"20"},model:{value:e.form.experienceName,callback:function(t){e.$set(e.form,"experienceName",t)},expression:"form.experienceName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"关联副标题",prop:"experienceSubtitle","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",maxlength:"20"},model:{value:e.form.experienceSubtitle,callback:function(t){e.$set(e.form,"experienceSubtitle",t)},expression:"form.experienceSubtitle"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产类型",prop:"assetsType","label-width":e.labelWidth}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:e.form.assetsType,callback:function(t){e.$set(e.form,"assetsType",t)},expression:"form.assetsType"}},e._l(e.assetsTypeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"coinId",label:"合约交易对","label-width":e.labelWidth}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:e.form.coinId,callback:function(t){e.$set(e.form,"coinId",t)},expression:"form.coinId"}},e._l(e.symbolList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"仓位类型",prop:"positionType","label-width":e.labelWidth}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:e.form.positionType,callback:function(t){e.$set(e.form,"positionType",t)},expression:"form.positionType"}},e._l(e.positionTypeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"委托类型",prop:"entrustType","label-width":e.labelWidth}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:e.form.entrustType,callback:function(t){e.$set(e.form,"entrustType",t)},expression:"form.entrustType"}},e._l(e.entrustTypeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"最高杠杆倍数",prop:"leverage","label-width":e.labelWidth}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:e.form.leverage,callback:function(t){e.$set(e.form,"leverage",t)},expression:"form.leverage"}},e._l(e.leverageList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"面值",prop:"faceValue","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入正整数"},on:{input:function(t){return e.checkVal("form","faceValue")}},model:{value:e.form.faceValue,callback:function(t){e.$set(e.form,"faceValue",t)},expression:"form.faceValue"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产币种",prop:"marketId","label-width":e.labelWidth}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:e.form.marketId,callback:function(t){e.$set(e.form,"marketId",t)},expression:"form.marketId"}},e._l(e.coinList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"有效期",prop:"timeType","label-width":e.labelWidth}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:e.form.timeType,callback:function(t){e.$set(e.form,"timeType",t)},expression:"form.timeType"}},e._l(e.timeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-row",[0!=e.form.timeType&&e.form.timeType?1==e.form.timeType?a("el-form-item",{attrs:{label:"天数",prop:"effectiveDay","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"text",placeholder:"请输入正整数"},on:{input:function(t){return e.checkVal("form","effectiveDay")}},model:{value:e.form.effectiveDay,callback:function(t){e.$set(e.form,"effectiveDay",t)},expression:"form.effectiveDay"}})],1):e._e():a("b-two-date-timer",{ref:"twoTimer",attrs:{labelWidth:e.labelWidth,labelWords:"日期",date1:e.form.effectiveStartTime,date2:e.form.effectiveEndTime},on:{"update:date1":function(t){return e.$set(e.form,"effectiveStartTime",t)},"update:date2":function(t){return e.$set(e.form,"effectiveEndTime",t)}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"启用",prop:"status","label-width":e.labelWidth}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmOp(t)}}},[e._v("确定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.batchGrantVisible,width:"600px",title:"批量发券"},on:{"update:visible":function(t){e.batchGrantVisible=t}}},[a("el-form",{ref:"batchGrantForm",attrs:{"label-width":"150px",model:e.batchGrantForm,rules:e.batchGrantRules}},[a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"每人发放券数量",prop:"couponNumber"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("batchGrantForm","couponNumber")}},model:{value:e.batchGrantForm.couponNumber,callback:function(t){e.$set(e.batchGrantForm,"couponNumber","string"===typeof t?t.trim():t)},expression:"batchGrantForm.couponNumber"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"UID",prop:"uidList"}},[a("el-input",{attrs:{rows:"3",type:"textarea",placeholder:"请输入UID,以逗号隔开,最多一次性填写500个"},on:{input:function(t){return e.checkVal2("batchGrantForm","uidList")}},model:{value:e.batchGrantForm.uidList,callback:function(t){e.$set(e.batchGrantForm,"uidList","string"===typeof t?t.trim():t)},expression:"batchGrantForm.uidList"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"谷歌验证码",prop:"googleCode"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入"},on:{input:function(t){return e.checkVal("batchGrantForm","googleCode")}},model:{value:e.batchGrantForm.googleCode,callback:function(t){e.$set(e.batchGrantForm,"googleCode","string"===typeof t?t.trim():t)},expression:"batchGrantForm.googleCode"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.batchGrantVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.batchGrantbtnLoading},on:{click:function(t){return t.stopPropagation(),e.batchGrantConfirmOp(t)}}},[e._v("确定")])],1)],1)],1)},l=[],n=(a("8e6e"),a("456d"),a("a8db")),o=(a("ac6a"),a("a481"),a("bd86")),s=(a("96cf"),a("3b8d")),p=a("c249"),c=a("2fee"),u=a("f21b"),f=a("e410"),m=a("57d7"),d=a("4ec3");a("ca00");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={name:"VoucherList",components:{Btable:c["a"],Bsearch:p["a"],iconPage:u["a"],BTwoDateTimer:m["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,batchGrantbtnLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",getCoinList:[],symbolList:[],coinList:[],title:"",labelWidth:"110px",formLabelWidth:"130px",dialogVisible:!1,batchGrantVisible:!1,form:{id:"",experienceName:"",experienceSubtitle:"",assetsType:"",coinId:"",positionType:"",entrustType:"",leverage:"",faceValue:"",marketId:"",effectiveStartTime:"",effectiveEndTime:"",status:!1,timeType:"",effectiveDay:""},rules:{experienceName:[{required:!0,message:"必填"}],experienceSubtitle:[{required:!0,message:"必填"}],assetsType:[{required:!0,message:"必填"}],coinId:[{required:!0,message:"必填"}],positionType:[{required:!0,message:"必填"}],entrustType:[{required:!0,message:"必填"}],leverage:[{required:!0,message:"必填"}],faceValue:[{required:!0,message:"必填"}],marketId:[{required:!0,message:"必填"}],timeType:[{required:!0,message:"必填"}],effectiveDay:[{required:!1,message:"必填"}]},batchGrantForm:{experienceId:"",couponNumber:"",uidList:"",googleCode:""},batchGrantRules:{experienceId:[{required:!0,message:"必填"}],couponNumber:[{required:!0,message:"必填"}],uidList:[{required:!0,message:"必填"},{min:1,max:4e3,message:"最多一次性填写500个",trigger:"blur"}],googleCode:[{required:!0,message:"必填"}]},curRow:{},assetsTypeList:[{label:"USDT永续合约",value:1}],positionTypeList:[{label:"全仓",value:0}],entrustTypeList:[{label:"市价",value:0}],timeList:[{label:"固定日期",value:0},{label:"固定天数",value:1}],leverageList:[{label:"1X",value:1},{label:"2X",value:2},{label:"3X",value:3},{label:"5X",value:5},{label:"10X",value:10},{label:"20X",value:20},{label:"30X",value:30},{label:"50X",value:50},{label:"75X",value:75}]}},watch:(r={"form.timeType":{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(t||0==t)&&(this.rules.effectiveDay[0].required=!(0==t||!t));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()}},Object(o["a"])(r,"form.timeType",(function(e){0==e?delete this.form.effectiveDay:1==e&&(delete this.form.effectiveStartTime,delete this.form.effectiveEndTime)})),Object(o["a"])(r,"batchGrantVisible",(function(e){e||(this.batchGrantForm={experienceId:"",couponNumber:"",uidList:"",googleCode:""})})),r),methods:{batchGrantConfirmOp:function(){var e=this;this.$refs["batchGrantForm"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r,i,l,n,o,s,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=8;break}return r=e.batchGrantForm,i=r.experienceId,l=r.couponNumber,n=r.uidList,o=r.googleCode,s={experienceId:i,couponNumber:l,uidList:n,googleCode:o},t.next=5,d["a"].batchGrantExperience(s);case 5:p=t.sent,p&&(e.$message({message:"发券成功",type:"success"}),e.batchGrantVisible=!1,e.getList()),e.batchGrantbtnLoading=!1;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,r,i,l,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.fn,r=t.row,"edit"===a&&(this.title="编辑体验金券",this.dialogVisible=!0,this.$nextTick((function(){n.$refs["form"].resetFields(),n.form={id:r.id,experienceName:r.experienceName,experienceSubtitle:r.experienceSubtitle,assetsType:r.assetsType,coinId:r.coinId,positionType:r.positionType,entrustType:r.entrustType,leverage:r.leverage,faceValue:r.faceValue,marketId:r.marketId,effectiveStartTime:(r.effectiveStartTime+"").replace(/\-/g,"/"),effectiveEndTime:(r.effectiveEndTime+"").replace(/\-/g,"/"),status:r.status,timeType:r.timeType,effectiveDay:r.effectiveDay}}))),"del"===a&&this.$confirm("确定删除？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:r.id},e.next=3,d["a"].deleteExperience(t);case 3:a=e.sent,a&&(n.$message({type:"success",message:"删除操作成功!"}),n.getList());case 5:case"end":return e.stop()}}),e)})))).catch((function(){n.$message({type:"info",message:"已取消删除"})})),"trstart"!==a){e.next=9;break}return i={id:r.id,status:r.status?1:0},e.next=7,d["a"].editExperienceStatus(i);case 7:l=e.sent,l?(this.$message({type:"success",message:"操作成功!"}),this.getList()):this.getList();case 9:"batchGrant"===a&&(this.batchGrantVisible=!0,this.batchGrantForm.experienceId=r.id);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(e){this.current_page=e,this.getList()},addLine:function(){var e=this;this.title="添加体验金券",this.isCoinLabel=!0,this.dialogVisible=!0,this.$nextTick((function(){e.$refs["form"].resetFields(),e.form={id:"",experienceName:"",experienceSubtitle:"",assetsType:"",coinId:"",positionType:"",entrustType:"",leverage:"",faceValue:"",marketId:"",effectiveStartTime:"",effectiveEndTime:"",status:!1,timeType:"",effectiveDay:""}}))},confirmOp:function(){var e=this;0==this.form.timeType&&!this.form.effectiveStartTime||0==this.form.timeType&&!this.form.effectiveEndTime?this.$refs["twoTimer"].valiteValue():this.$refs["form"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r,i,l,o,s,p,c,u,f,m,b,v,y,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=18;break}if(r=e.form,i=r.id,l=r.coinId,o=r.faceValue,s=r.marketId,p=r.effectiveStartTime,c=r.effectiveEndTime,u=r.status,f=r.timeType,m=r.effectiveDay,b=Object(n["a"])(r,["id","coinId","faceValue","marketId","effectiveStartTime","effectiveEndTime","status","timeType","effectiveDay"]),v=h({coinMarket:e.symbolList.filter((function(e){return e["value"]==l}))[0].label||"",coinId:l,status:u?1:0,faceValue:+o,timeType:+f,marketId:s},b),0==f?(v.effectiveStartTime=e.formatTime(p),v.effectiveEndTime=e.formatTime(c)):1==f&&(v.effectiveDay=+m),i?Object.assign(v,{id:i}):Object.assign(v),e.btnLoading=!0,i){t.next=12;break}return t.next=9,d["a"].createExperience(v);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,d["a"].editExperience(v);case 14:t.t0=t.sent;case 15:y=t.t0,y&&(g=i?"编辑成功":"添加成功",e.$message({message:g,type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i,l,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,d["a"].getQueryExperienceList(t);case 8:a=e.sent,a&&(r=a.data.data,i=r.records,l=r.total,n=r.current,o=r.pages,i.forEach((function(e){e["status"]=!!e["status"],e["marketIdmy"]="USDT"})),this.list=i,this.total=l,this.current_page=n,this.pages=o),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[0].value=[t,a],e.endTime=a.replace(/\//gi,"-"),e.startTime=t.replace(/\//gi,"-")}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},checkVal:function(e,t){this[e][t]=(this[e][t]+"").replace(/[^\d]/g,""),this[e][t]<0&&(this[e][t]=0)},checkVal2:function(e,t){this[e][t]=(this[e][t]+"").replace(/[^\d,]/g,""),this[e][t]=(this[e][t]+"").replace(/,,/g,",")}},mounted:function(){var e=this,t=this.$util.getAuthority("VoucherList",f["g"],f["h"]);this.configs=t.val,this.isCURDAuth=t.isAdd,this.searchCofig=this.$util.clone(f["i"]),this.$store.dispatch("common/getSymbolListContract").then((function(){if(e.symbolList=e.$store.state.common.symbollistContract,e.symbolList.length){var t={label:e.symbolList[0].marketCoinName,value:e.symbolList[0].marketId};e.coinList.push(t)}})),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}},y=v,g=(a("5b3c"),a("0c7c")),x=Object(g["a"])(y,i,l,!1,null,null,null);t["default"]=x.exports},e265:function(e,t,a){e.exports=a("ed33")},e410:function(e,t,a){"use strict";a.d(t,"j",(function(){return b})),a.d(t,"g",(function(){return r})),a.d(t,"h",(function(){return i})),a.d(t,"i",(function(){return l})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"k",(function(){return f})),a.d(t,"l",(function(){return m})),a.d(t,"m",(function(){return d}));var r=[{label:"体验金券ID",prop:"id"},{label:"体验金券名称",prop:"experienceName"},{label:"关联副标题",prop:"experienceSubtitle"},{label:"资产类型",prop:"assetsType",width:100,type:"filter",show_type:"text",filters:[{text:"USDT永续合约",val:1}]},{label:"合约交易对",prop:"coinMarket"},{label:"仓位类型",prop:"positionType",width:100,type:"filter",show_type:"text",filters:[{text:"全仓",val:0},{text:"逐仓",val:1}]},{label:"委托类型",prop:"entrustType",width:100,type:"filter",show_type:"text",filters:[{text:"市价",val:0}]},{label:"最高杠杆倍数",prop:"leverage"},{label:"面值",prop:"faceValue"},{label:"资产币种",prop:"marketIdmy"},{label:"有效期",width:310,arr:["effectiveStartTime","effectiveEndTime"],type:"textArr",join:"至"},{label:"创建时间",prop:"createTime",width:180},{label:"启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"操作",prop:"action",type:"action",width:240,btnGroup:[{label:"批量发券",fn:"batchGrant",type:"primary",alias:"batchGrant"},{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"primary",alias:"del"}]}],i=[{label:"体验金券ID",prop:"id"},{label:"体验金券名称",prop:"experienceName"},{label:"关联副标题",prop:"experienceSubtitle"},{label:"资产类型",prop:"assetsType",width:100,type:"filter",show_type:"text",filters:[{text:"USDT永续合约",val:1}]},{label:"合约交易对",prop:"coinMarket"},{label:"仓位类型",prop:"positionType",width:100,type:"filter",show_type:"text",filters:[{text:"全仓",val:0},{text:"逐仓",val:1}]},{label:"委托类型",prop:"entrustType",width:100,type:"filter",show_type:"text",filters:[{text:"市价",val:0}]},{label:"最高杠杆倍数",prop:"leverage"},{label:"面值",prop:"faceValue"},{label:"资产币种",prop:"marketIdmy"},{label:"有效期",width:310,arr:["effectiveStartTime","effectiveEndTime"],type:"textArr",join:"至"},{label:"创建时间",prop:"createTime",width:180}],l=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"体验金券名称",prop:"experienceName",value:""}],n=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动类型",prop:"activityType",width:100,type:"filter",show_type:"text",filters:[{text:"注册",val:0},{text:"净入金",val:1},{text:"邀请",val:2},{text:"抽奖",val:3},{text:"实名认证",val:4},{text:"净入金和开仓交易额",val:5},{text:"新手操作指引",val:6}]},{label:"触发条件 - 关联送券副标题 - 送券数量",type:"labelArr",typeDetail:"stringlistMore",prop:"activityVOList",arrValue:["触发条件","关联送券副标题","送券数量"],arrProp:["triggerCondition","experienceSubtitle","couponNumber"],width:620},{label:"发放模式",prop:"grantMode",width:100,type:"filter",show_type:"text",filters:[{text:"手动模式",val:0},{text:"自动模式",val:1}]},{label:"发券频率(h)",prop:"grantDay"},{label:"总成本限制(USDT)",prop:"amountLimit"},{label:"活动任务有效时间",width:310,arr:["effectiveStartTime","effectiveEndTime"],type:"textArr",join:"至"},{label:"创建时间",prop:"createTime",width:180},{label:"启用",prop:"status",type:"switch",fn:"trstart",alias:"trstart"},{label:"操作",prop:"action",type:"action",width:220,btnGroup:[{label:"发奖",fn:"preReview",isPop:!1,filter_key:"activityType",filter_status:0,type:"success",alias:"preReview"},{label:"编辑",fn:"edit",type:"primary",alias:"edit",noIsClick:!0},{label:"删除",fn:"del",type:"primary",alias:"del",noIsClick:!0}]}],o=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动类型",prop:"activityType",width:100,type:"filter",show_type:"text",filters:[{text:"注册",val:0},{text:"净入金",val:1},{text:"邀请",val:2},{text:"抽奖",val:3},{text:"实名认证",val:4},{text:"净入金和开仓交易额",val:5},{text:"新手操作指引",val:6}]},{label:"触发条件 - 关联送券副标题 - 送券数量",type:"labelArr",typeDetail:"stringlistMore",prop:"activityVOList",arrValue:["触发条件","关联送券副标题","送券数量"],arrProp:["triggerCondition","experienceName","couponNumber"],width:620},{label:"发放模式",prop:"grantMode",width:100,type:"filter",show_type:"text",filters:[{text:"手动模式",val:0},{text:"自动模式",val:1}]},{label:"发券频率（h）",prop:"grantDay"},{label:"总成本限制(USDT)",prop:"amountLimit"},{label:"活动任务有效时间",width:310,arr:["effectiveStartTime","effectiveEndTime"],type:"textArr",join:"至"},{label:"创建时间",prop:"createTime",width:180}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"活动名称",prop:"activityName",value:""}],p=[{label:"账户",prop:"uid"},{label:"币种",prop:"coinName"},{label:"累计发放（张）",prop:"giveCouponTotal"},{label:"累计发放（USDT）",prop:"giveUsdtTotal"},{label:"累计回收（张）",prop:"recoveryCouponTotal"},{label:"累计回收（USDT）",prop:"recoveryUsdtTotal"},{label:"当前持仓金额",prop:"currentWarehouseAmount"},{label:"操作",prop:"action",type:"action",width:410,btnGroup:[{label:"发放记录",fn:"grant",type:"primary",alias:"grant"},{label:"成交记录",fn:"deal",type:"primary",alias:"deal"},{label:"持仓记录",fn:"position",type:"primary",alias:"position"}]}],c=[{label:"UID",prop:"uid"},{label:"体验金券ID",prop:"experienceId"},{label:"体验金券面值",prop:"faceValue"},{label:"数量",prop:"couponNumber"},{label:"体验金币种",prop:"coinMarket"},{label:"券状态",prop:"status",width:100,type:"filter",show_type:"text",filters:[{text:"未使用",val:0},{text:"已使用",val:1},{text:"已失效",val:2}]},{label:"发放时间",prop:"createTime"},{label:"使用时间",prop:"useTime"},{label:"失效时间",prop:"effectiveEndTime"}],u=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"select",label:"币种",prop:"coinId",value:"",list:[]},{type:"text",label:"UID",prop:"uid",value:""},{type:"text",label:"体验金券ID",prop:"experienceId",value:""},{type:"select",label:"券状态",prop:"status",value:"",list:[{label:"未使用",value:0},{label:"已使用",value:1},{label:"已失效",value:2}]}],f=[{label:"UID",prop:"uid"},{label:"领取类型",prop:"receiveType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:0},{text:"自动发放",val:1}]},{label:"发放名额数量",prop:"count"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"详情",fn:"details",type:"primary",alias:"details"}]}],m=[{label:"UID",prop:"uid"},{label:"领取类型",prop:"receiveType",width:100,type:"filter",show_type:"text",filters:[{text:"手动发放",val:0},{text:"自动发放",val:1}]},{label:"发放名额数量",prop:"count"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"}],d=[{type:"onlyNumber",label:"UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"领取类型",prop:"receiveType",value:"",list:[{label:"自动发放",value:1},{label:"手动发放",value:0}]}],b=[{label:"序号",type:"index",width:80},{label:"UID",prop:"uid"},{label:"手机号",prop:"phone"},{label:"邮箱",prop:"eamil"},{label:"实名状态",prop:"verifiedStatus",width:100,type:"filter",show_type:"text",filters:[{text:"未认证",val:0},{text:"已认证",val:1}]},{label:"入金状态",prop:"inGoldCountStatus",width:100,type:"filter",show_type:"text",filters:[{text:"否",val:0},{text:"是",val:1}]},{label:"登录IP",prop:"loginIp"},{label:"注册IP",prop:"registeredIp"},{label:"注册时间",prop:"registeredTime"}]},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var l={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=i.replace(/{([ymdhisa])+}/g,(function(e,t){var a=l[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},ed33:function(e,t,a){a("014b"),e.exports=a("584a").Object.getOwnPropertySymbols},f576:function(e,t,a){"use strict";var r=a("5ca1"),i=a("2e08"),l=a("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);r(r.P+r.F*n,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function l(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=l(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function o(e){m&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),p=2;p<a;p++)i[p-2]=arguments[p];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var c=n(e),u=n(t),f=l(e)+l(t),m=c*u;return o(m),m/Math.pow(10,f)}function p(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];if(i.length>0)return p.apply(void 0,[p(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var o=Math.pow(10,Math.max(l(e),l(t)));return(s(e,o)+s(t,o))/o}function c(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var o=Math.pow(10,Math.max(l(e),l(t)));return(s(e,o)-s(t,o))/o}function u(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),c=2;c<a;c++)p[c-2]=arguments[c];if(p.length>0)return u.apply(void 0,[u(e,t),p[0]].concat(Object(r["a"])(p.slice(1))));var f=n(e),m=n(t);return o(f),o(m),s(f/m,i(Math.pow(10,l(t)-l(e))))}function f(e,t){var a=Math.pow(10,t);return u(Math.round(s(e,a)),a)}var m=!0;function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m=e}t["a"]={strip:i,plus:p,minus:c,times:s,divide:u,round:f,digitLength:l,float2Fixed:n,enableBoundaryChecking:d}}}]);