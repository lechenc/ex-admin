(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-566312ec"],{"5e98":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return n}));a("4360");var r=[{label:"委托号",prop:"entrustNo",width:"200"},{label:"UID",prop:"uid"},{label:"交易对",prop:"coinMarket"},{label:"委托类型",prop:"priceType",type:"filter",show_type:"text",filters:[{text:"限价",val:1,type:""},{text:"市价",val:2,type:"warning"}]},{label:"委托方向",prop:"type",type:"filter",show_type:"text",filters:[{text:"买入",val:1,type:"success"},{text:"卖出",val:2,type:"danger"}]},{label:"委托价",prop:"price",width:"200"},{label:"委托量",prop:"amount",width:"200"},{label:"成交均价",prop:"averagePrice"},{label:"挂单金额",prop:"onAmount"},{label:"成交量",prop:"dealAmount"},{label:"委托状态",prop:"status",type:"filter",show_type:"text",filters:[{text:"待成交",val:0,type:""},{text:"全部成交",val:1,type:"success"},{text:"部分成交",val:2,type:"info"},{text:"撤单中",val:3,type:"warning"},{text:"已撤单",val:4,type:"warning"}]},{label:"委托时间",prop:"createTime",type:"time"}],i=[{type:"date_rank",label:"委托时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"UID",prop:"uid",value:"",placeHolder:"请输入",subType:"uid"},{type:"text",label:"委托号",prop:"entrustNo",value:"",placeHolder:"请输入委托号"},{type:"select",label:"委托类型",prop:"priceType",value:"",list:[{label:"限价",value:1},{label:"市价",value:2}]},{type:"select",label:"委托方向",prop:"type",value:"",list:[{label:"买入",value:1},{label:"卖出",value:2}]},{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]},{type:"select",label:"委托状态",prop:"status",value:"",list:[{label:"待成交",value:0},{label:"全部成交",value:1},{label:"部分成交",value:2},{label:"撤单中",value:3},{label:"已撤单",value:4}]},{type:"text_rank",label:"委托价格区间",prop:"minPrice",prop2:"maxPrice",value:[],placeHolder:"请输入"}],s=[{label:"成交号",prop:"dealNo",width:"200"},{label:"委托号",prop:"entrustNo",width:"200"},{label:"交易对",prop:"coinMarket"},{label:"买方UID",prop:"buyUid"},{label:"卖方UID",prop:"sellUid"},{label:"成交价",prop:"dealPrice",width:"200"},{label:"成交量",prop:"amount",width:"200"},{label:"成交额",prop:"dealAmount",width:"200"},{label:"买方手续费",prop:"buyFee"},{label:"卖方手续费",prop:"sellFee"},{label:"成交时间",prop:"createTime",type:"time"}],n=[{type:"date_rank",label:"成交时间",prop:"startTime",prop2:"endTime",value:""},{type:"text",label:"买方UID",prop:"buyUid",value:"",placeHolder:"请输入",subType:"uid"},{type:"text",label:"卖方UID",prop:"sellUid",value:"",placeHolder:"请输入",subType:"uid"},{type:"text",label:"成交号",prop:"dealNo",value:"",placeHolder:"请输入成交号"},{type:"text",label:"委托号",prop:"entrustNo",value:"",placeHolder:"请输入委托号"},{type:"select",label:"交易对",prop:"coinMarket",value:"",list:[]}],o=[],l=[{type:"date_rank",label:"时间区间",prop:"startTime",prop2:"endTime",value:""},{label:"UID",prop:"uid",type:"text",value:"",placeHolder:"请输入"},{type:"select",label:"币种",prop:"coinName",value:"",list:[]}]},6052:function(e,t,a){},7514:function(e,t,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),s="find",n=!0;s in[]&&Array(1)[s]((function(){n=!1})),r(r.P+r.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(s)},"79de":function(e,t,a){"use strict";var r=a("6052"),i=a.n(r);i.a},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9194:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"orderlistspecail-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:e.searchCofig,calLoading:e.calLoading,calTotal:!0},on:{"do-search":e.doSearch,"do-reset":e.doReset,"do-calTotal":e.calTotal}})],1),e._v(" "),a("div",[a("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs}})],1),e._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":e.current_page,"page-sizes":[10,50,100,200],"page-size":e.pageSize,total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.goPage}})],1)])},i=[],s=(a("96cf"),a("3b8d")),n=(a("ac6a"),a("c249")),o=a("2fee"),l=a("f21b"),p=a("5e98"),c=a("4ec3"),u={name:"OrderListSpecial",components:{Btable:o["a"],Bsearch:n["a"],iconPage:l["a"]},data:function(){return{listLoading:!1,calLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,symbollist:[],toDay:"",ago:""}},methods:{doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},pageSizeChange:function(e){this.current_page=1,this.pageSize=e,this.getList()},goPage:function(e){this.current_page=e,this.getList()},calTotal:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,r,i,s,n,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.search_params_obj.type){e.next=5;break}return this.$message({type:"error",message:"委托方向必须选择!",duration:2e3}),e.abrupt("return");case 5:if(this.search_params_obj.priceType){e.next=8;break}return this.$message({type:"error",message:"委托类型必须选择!",duration:2e3}),e.abrupt("return");case 8:if(this.search_params_obj.coinMarket){e.next=11;break}return this.$message({type:"error",message:"交易对必须选择!",duration:2e3}),e.abrupt("return");case 11:return this.calLoading=!0,a={userType:2},this.requiredParams(a),Object.assign(a,this.search_params_obj),e.next=17,c["a"].getOrderEntrustTotal(a);case 17:r=e.sent,r&&(i=r.data.data,i?(s=this.searchCofig[4]["list"].filter((function(e){return e.value==o.search_params_obj.type}))[0].label,n=this.searchCofig[3]["list"].filter((function(e){return e.value==o.search_params_obj.priceType}))[0].label,this.$alert("<p>委托方向：".concat(s,"</p><p>委托类型：").concat(n,"</p><p>交易对：").concat(this.search_params_obj.coinMarket,"</p><p>委托量总计：").concat(i.amount,"</p>"),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){}))):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 20:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i,s,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize,userType:2},this.requiredParams(t),Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=8,c["a"].getOrderList(t);case 8:a=e.sent,a&&(r=a.data.data,i=r.records,s=r.total,n=r.current,o=r.pages,this.total=s,this.pages=o,this.current_page=n,this.list=i),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),requiredParams:function(e){var t=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(e.endTime=parseInt(new Date(this.toDay).getTime()/1e3),e.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinMarket&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinMarket)){var a="";a=this.symbollist.filter((function(e){return e["value"]==t.search_params_obj.coinMarket}))[0].label,this.search_params_obj.coinMarket=a}},formatTime:function(e){return~(e+"").indexOf("/")?parseInt(new Date(e).getTime()/1e3):e},getSymbolList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getSymbolList").then((function(){t.searchCofig[5]["list"]=t.$store.state.common.symbollist,t.symbollist=t.$store.state.common.symbollist}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.configs=p["d"],this.searchCofig=this.$util.clone(p["c"]),this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList(),this.getSymbolList()}},h=u,g=(a("79de"),a("0c7c")),m=Object(g["a"])(h,r,i,!1,null,null,null);t["default"]=m.exports},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var r=a("7618");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var s={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=i.replace(/{([ymdhisa])+}/g,(function(e,t){var a=s[t];return"a"===t?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},ff53:function(e,t,a){"use strict";var r=a("75fc");a("9278"),a("87f3"),a("a481"),a("6b54"),a("28a5"),a("c5f6");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function s(e){var t=e.toString().split(/[eE]/),a=(t[0].split(".")[1]||"").length-+(t[1]||0);return a>0?a:0}function n(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=s(e);return t>0?i(Number(e)*Math.pow(10,t)):Number(e)}function o(e){g&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function l(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),p=2;p<a;p++)i[p-2]=arguments[p];if(i.length>0)return l.apply(void 0,[l(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var c=n(e),u=n(t),h=s(e)+s(t),g=c*u;return o(g),g/Math.pow(10,h)}function p(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];if(i.length>0)return p.apply(void 0,[p(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var o=Math.pow(10,Math.max(s(e),s(t)));return(l(e,o)+l(t,o))/o}function c(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];if(i.length>0)return c.apply(void 0,[c(e,t),i[0]].concat(Object(r["a"])(i.slice(1))));var o=Math.pow(10,Math.max(s(e),s(t)));return(l(e,o)-l(t,o))/o}function u(e,t){for(var a=arguments.length,p=new Array(a>2?a-2:0),c=2;c<a;c++)p[c-2]=arguments[c];if(p.length>0)return u.apply(void 0,[u(e,t),p[0]].concat(Object(r["a"])(p.slice(1))));var h=n(e),g=n(t);return o(h),o(g),l(h/g,i(Math.pow(10,s(t)-s(e))))}function h(e,t){var a=Math.pow(10,t);return u(Math.round(l(e,a)),a)}var g=!0;function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];g=e}t["a"]={strip:i,plus:p,minus:c,times:l,divide:u,round:h,digitLength:s,float2Fixed:n,enableBoundaryChecking:m}}}]);