(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac1ff806"],{"24a9":function(t,a,e){},"2e08":function(t,a,e){var s=e("9def"),i=e("9744"),r=e("be13");t.exports=function(t,a,e,n){var o=String(r(t)),c=o.length,h=void 0===e?" ":String(e),u=s(a);if(u<=c||""==h)return o;var p=u-c,l=i.call(h,Math.ceil(p/h.length));return l.length>p&&(l=l.slice(0,p)),n?l+o:o+l}},7514:function(t,a,e){"use strict";var s=e("5ca1"),i=e("0a49")(5),r="find",n=!0;r in[]&&Array(1)[r]((function(){n=!1})),s(s.P+s.F*n,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(r)},"87f3":function(t,a,e){var s=e("5ca1");s(s.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,a,e){var s=e("5ca1");s(s.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},9744:function(t,a,e){"use strict";var s=e("4588"),i=e("be13");t.exports=function(t){var a=String(i(this)),e="",r=s(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(a+=a))1&r&&(e+=a);return e}},af80:function(t,a,e){"use strict";var s=e("24a9"),i=e.n(s);i.a},d0eb:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"advertiseRecord-container"},[e("div",{staticClass:"container-top"},[e("Bsearch",{attrs:{configs:t.searchCofig,calLoading:t.calLoading,calTotal:!0},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-calTotal":t.calTotal}})],1),t._v(" "),e("div",[e("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),e("div",{staticClass:"container-footer"},[e("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),e("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1)])},i=[],r=(e("28a5"),e("a481"),e("ac6a"),e("96cf"),e("3b8d")),n=e("c249"),o=e("2fee"),c=e("f21b"),h=e("f556"),u=e("4ec3"),p=(e("ca00"),{name:"FiatAdvertiseRecord",components:{Btable:o["a"],Bsearch:n["a"],iconPage:c["a"]},data:function(){return{isCURDAuth:!0,listLoading:!1,calLoading:!1,list:[],dataList:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:10,total:0,pages:0,toDay:"",ago:"",coinList:[]}},methods:{doHandle:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var e,s,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=a.fn,s=a.row,this.row=s,"detail"===e&&(localStorage.setItem("advertiseRecord",JSON.stringify(s)),this.$router.push({path:"/fiat/advertiseRecordDetail",query:{id:s.id}})),"switchAd"!==e){t.next=9;break}return i={isOnshelf:s.isOnshelf?1:0,id:s.id},t.next=7,u["a"].changeOnshelfAdsNew(i);case 7:r=t.sent,r?this.$message({message:"操作成功",type:"success"}):this.getList();case 9:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},calTotal:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var e,s,i,r,n,o,c,h=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.search_params_obj=a,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.search_params_obj.coinName){t.next=5;break}return this.$message({type:"error",message:"币种必须选择!",duration:2e3}),t.abrupt("return");case 5:if(this.search_params_obj.isOnshelf||0==this.search_params_obj.isOnshelf){t.next=8;break}return this.$message({type:"error",message:"是否上架必须选择!",duration:2e3}),t.abrupt("return");case 8:return this.calLoading=!0,e={},this.requiredParams(e),Object.assign(e,this.search_params_obj),t.next=14,u["a"].getOtcAdvertTotal(e);case 14:s=t.sent,s?(i=s.data.data,i&&(r="<p>币种：".concat(this.search_params_obj.coinName,"</p>"),this.search_params_obj.startTime&&(r+="<p>时间：".concat(this.$util.dateFormat(1e3*this.search_params_obj.startTime,"YYYY/MM/DD").replace(/\//g,"-"))+"     "+"".concat(this.$util.dateFormat(1e3*this.search_params_obj.endTime,"YYYY/MM/DD").replace(/\//g,"-"),"</p>")),(this.search_params_obj.advertType||0==this.search_params_obj.advertType)&&(n=this.searchCofig[2]["list"].filter((function(t){return t.value==h.search_params_obj.advertType}))[0].label,r+="<p>广告类型：".concat(n,"</p>")),(this.search_params_obj.isOnshelf||0==this.search_params_obj.isOnshelf)&&(o=this.searchCofig[4]["list"].filter((function(t){return t.value==h.search_params_obj.isOnshelf}))[0].label,r+="<p>是否上架：".concat(o,"</p>")),(this.search_params_obj.pricingMethod||0==this.search_params_obj.pricingMethod)&&(c=this.searchCofig[5]["list"].filter((function(t){return t.value==h.search_params_obj.pricingMethod}))[0].label,r+="<p>价格类型：".concat(c,"</p>")),r+="<p>广告数量：".concat(i.amount,"</p><p>广告剩余数量：").concat(i.remainAmount,"</p>"),this.$alert(r,"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){})))):this.$message({type:"error",message:"数据列表为空!"}),this.calLoading=!1;case 17:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a,e,s,i,r,n,o,c=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return a={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(a),Object.assign(a,this.search_params_obj),this.listLoading=!0,t.next=8,u["a"].queryAdvListNew(a);case 8:e=t.sent,e&&(s=e.data.data,i=s.records,r=s.total,n=s.current,o=s.pages,this.total=+r,this.pages=o,this.current_page=n,i.forEach((function(t){t["payList"]=c.filterPay(t["payList"]),t["isOnshelf"]=!!t["isOnshelf"],t["disabled"]=!t["sysStatus"]})),this.list=i,this.listLoading=!1),this.listLoading=!1;case 11:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),formatTime:function(t){return~(t+"").indexOf("/")?parseInt(new Date(t).getTime()/1e3):t},filterPay:function(t){var a=this,e=[];return t?(~t.indexOf(",")?t.split(",").forEach((function(t){e.push(a.payMatch(t))})):e.push(this.payMatch(t)),e):[]},payMatch:function(t){switch(t){case"1":return"银行卡";case"2":return"支付宝";case"3":return"微信"}},requiredParams:function(t){var a=this;if(this.$util.isEmptyObject(this.search_params_obj)&&(t.endTime=parseInt(new Date(this.toDay).getTime()/1e3),t.startTime=parseInt(new Date(this.ago).getTime()/1e3),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")]),this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinName&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)){var e="";e=this.coinList.filter((function(t){return t["value"]==a.search_params_obj.coinName}))[0].label,this.search_params_obj.coinName=e}}},mounted:function(){var t=this,a=this.$util.getAuthority("FiatAdvertiseRecord",h["i"],h["j"]);this.configs=a.val,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(h["k"]),this.$store.dispatch("common/getFiatCoinList").then((function(){t.coinList=t.$store.state.common.fiatcoinlist,t.searchCofig[3]["list"]=t.$store.state.common.fiatcoinlist})),this.getList()}}),l=p,m=(e("af80"),e("0c7c")),g=Object(m["a"])(l,s,i,!1,null,null,null);a["default"]=g.exports},f576:function(t,a,e){"use strict";var s=e("5ca1"),i=e("2e08"),r=e("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);s(s.P+s.F*n,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})}}]);