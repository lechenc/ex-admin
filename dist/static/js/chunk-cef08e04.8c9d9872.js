(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cef08e04"],{"2e08":function(t,e,a){var s=a("9def"),i=a("9744"),r=a("be13");t.exports=function(t,e,a,n){var o=String(r(t)),c=o.length,d=void 0===a?" ":String(a),l=s(e);if(l<=c||""==d)return o;var u=l-c,h=i.call(d,Math.ceil(u/d.length));return h.length>u&&(h=h.slice(0,u)),n?h+o:o+h}},"34da":function(t,e,a){"use strict";a("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,s){a.path==t&&(e=s)})),e>=0&&a.splice(e,1)}}}},"3d78":function(t,e,a){"use strict";var s=a("8bc6"),i=a.n(s);i.a},"5c78":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogueRecord-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),a("div",{staticClass:"container-middle"},[a("div",{staticClass:"dialog"},[a("div",{staticClass:"info"},[a("div",{staticClass:"l-info"},[a("span",{staticClass:"line1"},[t._v("订单总额")]),t._v(" "),a("span",{staticClass:"line2"},[t._v(t._s(t.row.money))])]),t._v(" "),a("div",{staticClass:"l-info"},[a("span",{staticClass:"line1"},[t._v(t._s(t._f("typeTime")(t.row.payTime||t.row.createTime)))]),t._v(" "),a("span",{staticClass:"line2"},[t._v("订单状态："+t._s(t._f("orderStatus")(t.row.tradeStatus)))])])]),t._v(" "),a("div",{staticClass:"room"},[a("div",{staticClass:"header"},[t._v("聊天记录")]),t._v(" "),a("div",{attrs:{id:"chat"}},[a("div",{staticClass:"talk"},t._l(t.talkList,(function(e,s){return a("div",{key:s,class:1==e.label?"leftline":2==e.label?"rightline":"middleLine"},[a("div",{staticClass:"txt-line"},[a("div",{staticClass:"tip-name"},[t._v(t._s(e.adminAccount||e.toName))]),t._v(" "),1==e.type||3==e.type?a("div",{staticClass:"inner-txt"},[t._v(t._s(e.content))]):2==e.type?a("div",{staticClass:"inner-txt"},[a("img",{attrs:{src:e.content,alt:""}})]):t._e()])])})),0)])])])])],1)},i=[],r=(a("ac6a"),a("96cf"),a("3b8d")),n=a("4ec3"),o=(a("ca00"),a("34da")),c=a("ed08"),d={name:"DialogueRecordPay",components:{},mixins:[o["a"]],data:function(){return{listLoading:!1,btnLoading:!1,talkList:[],words:"",orderId:"",row:"",current_page:1,pageSize:10,total:0,pages:0}},filters:{typeTime:function(t){return t?Object(c["a"])(t):""},orderStatus:function(t){var e="";switch(t){case 1:e="未付款";break;case 2:e="已付款(等待放行)";break;case 3:e="已完成";break;case 4:e="用户取消";break;case 5:e="申诉中";break;case 6:e="申诉后完成交易";break;case 7:e="申诉后取消交易";break;case 8:e="支付超时取消";break}return e}},methods:{onBeforeUpload:function(t){var e=t.size/1024/1024<8;e||this.$message.error("上传文件大小不能超过 8 MB！")},exceed:function(t,e){this.$message.error("单次只能选择一张图片进行上传！")},uploadZh:function(t,e,a){this.words="",this.words=t.data[0].url,this.$refs.upzh.handleRemove(e),this.sendMsg("pic")},uploadError:function(){this.$message.error("图片上传失败")},sendMsg:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={orderId:this.orderId,fromUID:this.buyUid,toUID:this.sellUid,content:this.words,type:e?2:1},this.btnLoading=!0,t.next=4,n["a"].otcSendMessage(a);case 4:s=t.sent,s&&(this.$message({message:"发送成功",type:"success"}),this.words="",this.getList()),this.btnLoading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={orderId:this.orderId},this.listLoading=!0,t.next=6,n["a"].getOtccChatRecords(e);case 6:a=t.sent,a&&(this.talkList=this.dealDataFunc(a.data.data)),this.listLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dealDataFunc:function(t){var e=this;return t.forEach((function(t){1==t.type||2==t.type?(t.fromUid==e.buyUid&&(t.label=1),t.fromUid==e.sellUid&&(t.label=2)):3==t.type&&(t.label=3)})),t}},updated:function(){var t=document.getElementById("chat");t.scrollTop=t.scrollHeight},deactivated:function(){localStorage.removeItem("dialogueRow")},activated:function(){this.isInTags()||(this.talkList=[],this.words="",this.orderId="",this.row=JSON.parse(localStorage.getItem("dialogueRow")),this.orderId=this.row.recordId,this.sellUid=this.row.advertUid,this.buyUid=this.row.uid,this.getList())}},l=d,u=(a("3d78"),a("0c7c")),h=Object(u["a"])(l,s,i,!1,null,null,null);e["default"]=h.exports},"8bc6":function(t,e,a){},9744:function(t,e,a){"use strict";var s=a("4588"),i=a("be13");t.exports=function(t){var e=String(i(this)),a="",r=s(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(a+=e);return a}},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("28a5"),a("f576"),a("a481"),a("6b54");var s=a("7618");function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,i=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(s["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var r={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=i.replace(/{([ymdhisa])+}/g,(function(t,e){var a=r[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return n=n.replace(/\//gi,"-"),n}},f576:function(t,e,a){"use strict";var s=a("5ca1"),i=a("2e08"),r=a("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);s(s.P+s.F*n,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})}}]);