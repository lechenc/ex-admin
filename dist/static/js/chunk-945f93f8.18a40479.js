(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-945f93f8"],{"2e08":function(e,t,r){var a=r("9def"),n=r("9744"),i=r("be13");e.exports=function(e,t,r,s){var o=String(i(e)),c=o.length,l=void 0===r?" ":String(r),u=a(t);if(u<=c||""==l)return o;var m=u-c,g=n.call(l,Math.ceil(m/l.length));return g.length>m&&(g=g.slice(0,m)),s?g+o:o+g}},"32a6":function(e,t,r){var a=r("241e"),n=r("c3a1");r("ce7e")("keys",(function(){return function(e){return n(a(e))}}))},"34da":function(e,t,r){"use strict";r("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,r=this.$store.state.app.tagsList;r.forEach((function(r,a){r.path==e&&(t=a)})),t>=0&&r.splice(t,1)}}}},5446:function(e,t,r){"use strict";var a=r("cac6"),n=r.n(a);n.a},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},9744:function(e,t,r){"use strict";var a=r("4588"),n=r("be13");e.exports=function(e){var t=String(n(this)),r="",i=a(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var a=r("e265"),n=r.n(a),i=r("a4bb"),s=r.n(i);function o(e,t){if(null==e)return{};var r,a,n={},i=s()(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}function c(e,t){if(null==e)return{};var r,a,i=o(e,t);if(n.a){var s=n()(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,"a",(function(){return c}))},c07a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contractRobot-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.formName,width:"520px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"cForm",attrs:{model:e.cForm,rules:e.rules}},[r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"机器人ID","label-width":e.formLabelWidth,prop:"coinId"}},[r("el-select",{attrs:{placeholder:"",wdith:"20%"},model:{value:e.cForm.coinId,callback:function(t){e.$set(e.cForm,"coinId",t)},expression:"cForm.coinId"}},e._l(e.coinList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"币对","label-width":e.formLabelWidth,prop:"marketId"}},[r("el-select",{attrs:{placeholder:"",wdith:"20%"},model:{value:e.cForm.marketId,callback:function(t){e.$set(e.cForm,"marketId",t)},expression:"cForm.marketId"}},e._l(e.coinList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"下单委托深度取值比例（%）","label-width":e.formLabelWidth,prop:"faceValue"}},[r("el-input",{attrs:{type:"number",placeholder:""},model:{value:e.cForm.faceValue,callback:function(t){e.$set(e.cForm,"faceValue",t)},expression:"cForm.faceValue"}},[r("div",{attrs:{slot:"append"},slot:"append"},[e._v("%")])])],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"深度类型","label-width":e.formLabelWidth,prop:"makerFee"}},[r("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:""},on:{input:function(t){return e.checkVal("makerFee")}},model:{value:e.cForm.makerFee,callback:function(t){e.$set(e.cForm,"makerFee",t)},expression:"cForm.makerFee"}})],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"启动状态","label-width":e.formLabelWidth,prop:"status"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.cForm.status,callback:function(t){e.$set(e.cForm,"status",t)},expression:"cForm.status"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},n=[],i=(r("8e6e"),r("456d"),r("ac6a"),r("a481"),r("bd86")),s=r("a8db"),o=(r("96cf"),r("3b8d")),c=r("c249"),l=r("2fee"),u=r("f21b"),m=r("e582"),g=r("4ec3");r("34da");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"ContractRobot",components:{Btable:l["a"],Bsearch:c["a"],iconPage:u["a"]},data:function(){return{btnArr:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,chainArr:[],coinList:[],formLabelWidth:"150px",dialogFormVisible:!1,leverList:[{label:"1",value:1},{label:"2",value:1},{label:"3",value:1},{label:"5",value:1},{label:"10",value:1},{label:"20",value:1},{label:"30",value:1},{label:"50",value:1},{label:"75",value:1},{label:"100",value:1}],cForm:{id:"",initPrice:"",coinId:"",marketId:"",faceValue:"",makerFee:"",takerFee:"",maxEntrustAmount:"",minEntrustAmount:"",maxEntrustPrice:"",minEntrustPrice:"",gears:"",pricePrecision:"",sortNo:"",lever:""},formName:"",rules:{initPrice:[{required:!0,message:"必填",trigger:"blur"}],coinId:[{required:!0,message:"必填",trigger:"blur"}],marketId:[{required:!0,message:"必填",trigger:"blur"}],faceValue:[{required:!0,message:"必填",trigger:"blur"}],makerFee:[{required:!0,message:"必填",trigger:"blur"}],takerFee:[{required:!0,message:"必填",trigger:"blur"}],maxEntrustAmount:[{required:!0,message:"必填",trigger:"blur"}],minEntrustAmount:[{required:!0,message:"必填",trigger:"blur"}],maxEntrustPrice:[{required:!0,message:"必填",trigger:"blur"}],minEntrustPrice:[{required:!0,message:"必填",trigger:"blur"}],gears:[{required:!0,message:"必填",trigger:"blur"}],pricePrecision:[{required:!0,message:"必填",trigger:"blur"}],sortNo:[{required:!0,message:"必填",trigger:"blur"}],lever:[{required:!0,message:"必填",trigger:"blur"}]}}},methods:{addCoin:function(){var e=this;this.formName="添加机器人",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["cForm"].resetFields(),e.cForm={id:"",initPrice:"",coinId:"",marketId:"",faceValue:"",makerFee:"",takerFee:"",maxEntrustAmount:"",minEntrustAmount:"",maxEntrustPrice:"",minEntrustPrice:"",gears:"",pricePrecision:"",sortNo:"",lever:""}}))},confirmOp:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["cForm"].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var a,n,i,o,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=17;break}if(a=t.cForm,n=a.id,i=a.status,o=a.onDealing,c=Object(s["a"])(a,["id","status","onDealing"]),l=p({status:i?1:0,onDealing:o?1:0},c),""===n||Object.assign(l,{id:n}),t.btnLoading=!0,""!==n){e.next=11;break}return e.next=8,g["a"].getAddMarketContractcoinMarkets(l);case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,g["a"].getUpdateMarketContractcoinMarkets(l);case 13:e.t0=e.sent;case 14:u=e.t0,u&&(t.$message({message:u.data.message,type:"success"}),t.dialogFormVisible=!1,t.getList()),t.btnLoading=!1;case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),doHandle:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"trstart"!==r){e.next=8;break}return n={id:a.id},Object.assign(n,map[r]()),e.next=6,g["a"].getUpdateMarketContractcoinMarkets(n);case 6:i=e.sent,i?this.$message({message:i.data.message,type:"success"}):this.getList();case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkVal:function(e,t){"makerFee"!==e&&"takerFee"!==e||(this.cForm[e]=(this.cForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/,"$1$2.$3")),"maxEntrustAmount"!==e&&"minEntrustAmount"!==e&&"maxEntrustPrice"!==e&&"minEntrustPrice"!==e||(this.cForm[e]=(this.cForm[e]+"").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")),noDot&&(this.cForm[e]=this.cForm[e].replace(/[^\d]/g,"")),this.cForm[e]<0&&(this.cForm[e]=0)},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,g["a"].getListMarketContractcoinMarkets(t);case 7:r=e.sent,r&&(a=r.data.data,n=a.records,i=a.total,s=a.current,o=a.pages,this.total=i,this.pages=o,this.current_page=s,n.forEach((function(e){e["status"]=!!e["status"],e["onDealing"]=!!e["onDealing"]})),this.list=n,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("ContractRobot",m["z"],m["A"]),this.configs=t.val,this.btnArr=t.btnArr||[]||[],this.searchCofig=this.$util.clone(m["B"]),this.$store.dispatch("common/getSymbolListContract").then((function(){r.searchCofig[0]["list"]=r.$store.state.common.symbollistContract,r.coinList=r.$store.state.common.coinlist})),this.getList();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},b=f,h=(r("5446"),r("0c7c")),v=Object(h["a"])(b,a,n,!1,null,null,null);t["default"]=v.exports},cac6:function(e,t,r){},ce7e:function(e,t,r){var a=r("63b6"),n=r("584a"),i=r("294c");e.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],s={};s[e]=t(r),a(a.S+a.F*i((function(){r(1)})),"Object",s)}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},f576:function(e,t,r){"use strict";var a=r("5ca1"),n=r("2e08"),i=r("a25f"),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*s,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})}}]);