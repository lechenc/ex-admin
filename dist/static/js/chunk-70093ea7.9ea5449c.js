(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70093ea7"],{6327:function(e,t,a){},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),l="find",o=!0;l in[]&&Array(1)[l]((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(l)},"792f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lotteryRecord-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"600px",title:e.formName},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"活动UID","label-width":e.labelWidth}},[a("span",[e._v(e._s(e.curRow.id))])]),e._v(" "),a("el-form-item",{attrs:{label:"活动名称","label-width":e.labelWidth}},[a("span",[e._v(e._s(e.curRow.activityName))])]),e._v(" "),a("el-form-item",{attrs:{label:"获奖人UID","label-width":e.labelWidth}},[a("span",[e._v(e._s(e.curRow.uid))])]),e._v(" "),a("el-form-item",{attrs:{label:"获奖人类型","label-width":e.labelWidth}},[a("span",[e._v(e._s(e._f("uTypeft")(e.curRow.userType)))])]),e._v(" "),a("el-form-item",{attrs:{label:"当前剩余机会数","label-width":e.labelWidth}},[a("span",[e._v(e._s(e.curRow.retainChance))])]),e._v(" "),a("el-form-item",{attrs:{label:"奖励名称","label-width":e.labelWidth}},[a("span",[e._v(e._s(e.curRow.prizeName))])]),e._v(" "),a("el-form-item",{attrs:{label:"奖励内容描述","label-width":e.labelWidth}},[a("span",[e._v(e._s(e.curRow.prizeDescribe))])]),e._v(" "),a("el-form-item",{attrs:{label:"获奖时间","label-width":e.labelWidth}},[a("span",[e._v(e._s(e._f("typeTime")(e.curRow.lotteryTime)))])]),e._v(" "),"edit"==e.showType?a("el-form-item",{attrs:{label:"使用状态",prop:"useStatus","label-width":e.labelWidth}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},model:{value:e.form.useStatus,callback:function(t){e.$set(e.form,"useStatus",t)},expression:"form.useStatus"}},e._l(e.useStatusList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),e._v(" "),"detail"==e.showType?a("el-form-item",{attrs:{label:"使用状态","label-width":e.labelWidth}},[a("span",[e._v(e._s(e._f("utype")(e.curRow.useStatus)))])]):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"使用时间","label-width":e.labelWidth}},[a("span",[e._v(e._s(e._f("typeTime")(e.curRow.useTime)))])]),e._v(" "),a("el-form-item",{attrs:{label:"失效时间","label-width":e.labelWidth}},[a("span",[e._v(e._s(e._f("typeTime")(e.curRow.invalidTime)))])])],1),e._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){t.stopPropagation(),e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return t.stopPropagation(),e.confirmSend(t)}}},[e._v("确定")])],1)],1)],1)},i=[],l=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),o=a("c249"),n=a("2fee"),s=a("f21b"),p=a("9ef8"),u=a("4ec3"),c=a("ed08"),d={name:"LotteryRecord",components:{Btable:n["a"],Bsearch:o["a"],iconPage:s["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,calLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",curRow:{},labelWidth:"120px",showType:"edit",dialogFormVisible:!1,formName:"奖励详情",formLabelWidth:"180px",useStatusList:[{label:"未使用",value:0},{label:"已使用",value:1},{label:"已过期",value:2},{label:"使用中",value:3}],form:{id:"",useStatus:""},rules:{useStatus:[{required:!0,message:"必填"}]}}},filters:{typeTime:function(e){return e?Object(c["a"])(e):""},uTypeft:function(e){switch(e){case 1:return"标记用户";case 2:return"普通用户"}},utype:function(e){switch(e){case 0:return"未使用";case 1:return"已使用";case 2:return"已过期";case 3:return"使用中"}}},methods:{timeDiy:function(e){return e?Object(c["a"])(e):""},doHandle:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var a,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fn,r=t.row,this.curRow=r,"edit"===a&&(this.showType="edit",this.formName="抽奖记录编辑",this.dialogFormVisible=!0,this.$nextTick((function(){i.$refs["form"].resetFields(),i.form={id:r.id,useStatus:r.useStatus}}))),"detail"===a&&(this.showType="detail",this.formName="抽奖记录详情",this.dialogFormVisible=!0);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},goPage:function(e){this.current_page=e,this.getList()},confirmSend:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("edit"!=this.showType){e.next=3;break}e.next=5;break;case 3:return this.dialogFormVisible=!1,e.abrupt("return");case 5:this.$refs["form"].validate(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(a){var r,i,l,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=9;break}return r=t.form,i=r.id,l=r.useStatus,o={id:i,useStatus:l},t.btnLoading=!0,e.next=6,u["a"].getPrizeUserRecord(o);case 6:n=e.sent,n&&(t.$message({message:"操作成功！",type:"success"}),t.getList(),t.dialogFormVisible=!1),t.btnLoading=!1;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i,l,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,u["a"].getuserRecordList(t);case 8:a=e.sent,a&&(r=a.data.data,i=r.records,l=r.total,o=r.current,n=r.pages,this.total=l,this.pages=n,this.current_page=o,this.list=i,this.listLoading=!1);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){if(this.$util.isEmptyObject(this.search_params_obj)){var t=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),a=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");this.searchCofig[0].value=[t,a],e.endTime=a.replace(/\//gi,"-"),e.startTime=t.replace(/\//gi,"-")}this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime))},formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")}},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("LotteryRecord",p["g"],p["h"]),this.configs=t.val,this.isCURDAuth=t.isAdd,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(p["i"]),this.getList();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},b=d,h=(a("b80a"),a("0c7c")),m=Object(h["a"])(b,r,i,!1,null,"3d5827f2",null);t["default"]=m.exports},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},"9ef8":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"g",(function(){return o})),a.d(t,"h",(function(){return n})),a.d(t,"i",(function(){return s})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return u})),a.d(t,"f",(function(){return c}));var r=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动任务有效时间",width:310,arr:["startTime","endTime"],type:"textArr",join:"至"},{label:"抽奖机会总数",prop:"totalRaffle"},{label:"已发放机会数",prop:"sendRaffle"},{label:"已用机会数",prop:"useRaffle"},{label:"抽奖机会截止时间",prop:"luckDrawEndTime",width:160},{label:"活动状态",prop:"status",type:"filter",show_type:"text",width:110,filters:[{val:"1",text:"未开始"},{val:"2",text:"进行中"},{val:"3",text:"抽奖中"},{val:"4",text:"待发奖"},{val:"5",text:"已结束"}]},{label:"上架开关",prop:"activityStatus",type:"switch",fn:"trputon",alias:"trputon"},{label:"抽奖开关",prop:"playStatus",type:"switch",fn:"trdraw",alias:"trdraw"},{label:"创建时间",prop:"createTime",width:160},{label:"更新时间",prop:"updateTime",width:160},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],i=[{label:"活动ID",prop:"id"},{label:"活动名称",prop:"activityName"},{label:"活动任务有效时间",width:310,arr:["startTime","endTime"],type:"textArr",join:"至"},{label:"抽奖机会总数",prop:"totalRaffle"},{label:"已发放机会数",prop:"sendRaffle"},{label:"已用机会数",prop:"useRaffle"},{label:"抽奖机会截止时间",prop:"luckDrawEndTime",width:160},{label:"活动状态",prop:"status",type:"filter",show_type:"text",width:110,filters:[{val:"1",text:"未开始"},{val:"2",text:"进行中"},{val:"3",text:"抽奖中"},{val:"4",text:"待发奖"},{val:"5",text:"已结束"}]},{label:"创建时间",prop:"createTime",width:160},{label:"更新时间",prop:"updateTime",width:160}],l=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"活动ID",prop:"id",value:"",placeHolder:"请输入"},{type:"select",label:"上架开关",prop:"activityStatus",value:"",list:[{label:"下架",value:0},{label:"上架",value:1}]},{type:"select",label:"抽奖开关",prop:"playStatus",value:"",list:[{label:"不可抽奖",value:0},{label:"可抽奖",value:1}]}],o=[{label:"中奖记录ID",prop:"id"},{label:"活动ID",prop:"activityId"},{label:"活动名称",prop:"activityName"},{label:"获奖人UID",prop:"uid"},{label:"获奖人类型",prop:"userType",type:"filter",show_type:"text",width:150,filters:[{val:"1",text:"标记用户"},{val:"2",text:"普通用户"}]},{label:"当前机会剩余数",prop:"retainChance"},{label:"奖励类型",prop:"prizeType",type:"filter",show_type:"text",width:150,filters:[{val:"1",text:"币币奖品"},{val:"2",text:"体验金奖励"},{val:"3",text:"其他"}]},{label:"奖励名称",prop:"prizeName"},{label:"内容描述",prop:"prizeDescribe"},{label:"获奖时间",prop:"lotteryTime",type:"time"},{label:"使用状态",prop:"useStatus",type:"filter",show_type:"text",width:150,filters:[{val:"0",text:"未使用"},{val:"1",text:"已使用"},{val:"2",text:"已过期"},{val:"3",text:"使用中"}]},{label:"使用时间",prop:"useTime",type:"time"},{label:"失效时间",prop:"invalidTime",type:"time"},{label:"操作",prop:"action",type:"action",width:160,btnGroup:[{label:"编辑",fn:"edit",isPop:!1,filter_key:"prizeType",filter_status:2,out:!0,type:"success",alias:"edit"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],n=[{label:"中奖记录ID",prop:"id"},{label:"活动ID",prop:"activityId"},{label:"活动名称",prop:"activityName"},{label:"获奖人UID",prop:"uid"},{label:"获奖人类型",prop:"userType",type:"filter",show_type:"text",width:150,filters:[{val:"1",text:"标记用户"},{val:"2",text:"普通用户"}]},{label:"当前机会剩余数",prop:"retainChance"},{label:"奖励类型",prop:"prizeType",type:"filter",show_type:"text",width:150,filters:[{val:"1",text:"币币奖品"},{val:"2",text:"体验金奖励"},{val:"3",text:"其他"}]},{label:"奖励名称",prop:"prizeName"},{label:"内容描述",prop:"prizeDescribe"},{label:"获奖时间",prop:"lotteryTime",type:"time"},{label:"使用状态",prop:"useStatus",type:"filter",show_type:"text",width:150,filters:[{val:"0",text:"未使用"},{val:"1",text:"已使用"},{val:"2",text:"已过期"},{val:"3",text:"使用中"}]},{label:"使用时间",prop:"useTime",type:"time"},{label:"失效时间",prop:"invalidTime",type:"time"}],s=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"活动ID",prop:"activityId",value:"",placeHolder:"请输入"},{type:"onlyNumber",label:"获奖人UID",prop:"uid",value:"",placeHolder:"请输入"},{type:"select",label:"使用状态",prop:"useStatus",value:"",list:[{label:"未使用",value:0},{label:"已使用",value:1},{value:2,label:"已过期"},{value:3,label:"使用中"}]},{type:"text",label:"奖励名称",prop:"prizeName",value:"",placeHolder:"请输入"}],p=[{label:"奖品编号",prop:"id"},{label:"奖励类型",prop:"prizeType",type:"filter",show_type:"text",width:150,filters:[{val:1,text:"币种奖品"},{val:2,text:"体验金券奖品"},{val:3,text:"其他奖品"}]},{label:"奖励名称",prop:"prizeName"},{label:"奖励logo",prop:"prizeLogo",type:"img"},{label:"奖励数量",prop:"amount"},{label:"体验金编号",prop:"relationExperienceId"},{label:"奖励内容",prop:"prizeDescribe"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"},{label:"操作",prop:"action",type:"action",width:210,btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"},{label:"删除",fn:"del",type:"danger",alias:"del"},{label:"详情",fn:"detail",type:"primary",alias:"detail"}]}],u=[{label:"奖品编号",prop:"id"},{label:"奖励类型",prop:"prizeType",type:"filter",show_type:"text",width:150,filters:[{val:1,text:"币种奖品"},{val:2,text:"体验金券奖品"},{val:3,text:"其他奖品"}]},{label:"奖励名称",prop:"prizeName"},{label:"奖励logo",prop:"prizeLogo",type:"img"},{label:"奖励数量",prop:"amount"},{label:"体验金编号",prop:"relationExperienceId"},{label:"奖励内容",prop:"prizeDescribe"},{label:"创建时间",prop:"createTime",type:"time"},{label:"更新时间",prop:"updateTime",type:"time"}],c=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"奖品编号",prop:"id",value:"",placeHolder:"请输入"}]},b80a:function(e,t,a){"use strict";var r=a("6327"),i=a.n(r);i.a},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var l={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},o=i.replace(/{([ymdhisa])+}/g,(function(e,t){var a=l[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return o=o.replace(/\//gi,"-"),o}},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function l(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function o(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=l(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function n(e){b&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function s(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),p=2;p<a;p++)i[p-2]=arguments[p];if(i.length>0)return s.apply(void 0,[s(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var u=o(e),c=o(t),d=l(e)+l(t),b=u*c;return n(b),b/Math.pow(10,d)}function p(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];if(i.length>0)return p.apply(void 0,[p(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var n=Math.pow(10,Math.max(l(e),l(t)));return(s(e,n)+s(t,n))/n}function u(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];if(i.length>0)return u.apply(void 0,[u(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var n=Math.pow(10,Math.max(l(e),l(t)));return(s(e,n)-s(t,n))/n}function c(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),u=2;u<a;u++)p[u-2]=arguments[u];if(p.length>0)return c.apply(void 0,[c(e,t),p[0]].concat(Object(r["a"])(p.slice(1))));var d=o(e),b=o(t);return n(d),n(b),s(d/b,i(Math.pow(10,l(t)-l(e))))}function d(e,t){var a=Math.pow(10,t);return c(Math.round(s(e,a)),a)}var b=!0;function h(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b=e}t["a"]={strip:i,plus:p,minus:u,times:s,divide:c,round:d,digitLength:l,float2Fixed:o,enableBoundaryChecking:h}}}]);