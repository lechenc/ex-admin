(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-790d9050"],{"34da":function(t,e,a){"use strict";a("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,i){a.path==t&&(e=i)})),e>=0&&a.splice(e,1)}}}},"58ef":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wuserDetail-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-con"},[a("div",{staticClass:"header"},[a("div",{staticClass:"main"},[t._v("基本信息")])]),t._v(" "),a("div",{staticClass:"card-info"},[a("div",[a("span",[t._v("UID：")]),t._v(t._s(t.curRow.uid))]),t._v(" "),a("div",[a("span",[t._v("徽章标记：")]),t._v(t._s(t.curRow.emblem<0?"--":"加加林"+t.curRow.emblem))]),t._v(" "),a("div",[a("span",[t._v("邀请人UID：")]),t._v(t._s(t.curRow.inviterUid))]),t._v(" "),a("div",[a("span",[t._v("应用积分：")]),t._v(t._s(t.curRow.applicationPoint))]),t._v(" "),a("div",[a("span",[t._v("累计分红：")]),t._v(t._s(t.curRow.accumulatedDividends))]),t._v(" "),a("div",[a("span",[t._v("姓名：")]),t._v(t._s(t.curRow.realName))]),t._v(" "),a("div",[a("span",[t._v("邮箱：")]),t._v(t._s(t.curRow.email))]),t._v(" "),a("div",[a("span",[t._v("团队总人数：")]),t._v(t._s(t.curRow.totalTeamSize))]),t._v(" "),a("div",[a("span",[t._v("个人总积分：")]),t._v(t._s(t.curRow.totalOneselfScore))]),t._v(" "),a("div",[a("span",[t._v("永久积分：")]),t._v(t._s(t.curRow.permanentPoint))]),t._v(" "),a("div",[a("span",[t._v("累计周薪：")]),t._v(t._s(t.curRow.accumulatedWeeklySalary))]),t._v(" "),a("div",[a("span",[t._v("手机：")]),t._v(t._s(t.curRow.phone))]),t._v(" "),a("div",[a("span",[t._v("昵称：")]),t._v(t._s(t.curRow.nickName))]),t._v(" "),a("div",[a("span",[t._v("直推人数：")]),t._v(t._s(t.curRow.numberOfDirectPromotion))]),t._v(" "),a("div",[a("span",[t._v("循环积分：")]),t._v(t._s(t.curRow.cyclePoint))]),t._v(" "),a("div",[a("span",[t._v("当前星级：")]),t._v("第"+t._s(t.curRow.starLevel)+"级")])])])]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-con"},[a("H3",[t._v("奖励信息")]),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.infoLoading,data:t.infoList,configs:t.infoConfigs},on:{"do-handle":t.doInfoHandle}})],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-con"},[a("H3",[t._v("团队信息")]),t._v(" "),a("el-tabs",{on:{"tab-click":t.teamHandleClick},model:{value:t.teamActive,callback:function(e){t.teamActive=e},expression:"teamActive"}},[a("el-tab-pane",{attrs:{label:"A",name:"A"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"B",name:"B"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"C",name:"C"}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.dealLoading,data:t.dealList,configs:t.dealConfigs}})],1),t._v(" "),a("div",[a("div",{staticClass:"container-footer"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPageDeal}})],1)])],1)])],1)},s=[],n=(a("96cf"),a("1da1")),r=a("2fee"),o=a("64bf"),c=a("4ec3"),d=a("34da"),u={name:"WarehouseUserListDetail",components:{Btable:r["a"]},mixins:[d["a"]],data:function(){return{teamActive:"A",getId:0,infoLoading:!1,dealLoading:!1,infoList:[],dealList:[],infoConfigs:[],dealConfigs:[],curRow:{},current_page:1,pageSize:30,total:0,pages:0}},methods:{doInfoHandle:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,i,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.fn,i=e.row,this.row=i,"switchAd"!==a){t.next=8;break}return s={isOnshelf:i.isOnshelf?1:0,recdId:i.recdId},t.next=6,c["a"].changeOnshelfAds(s);case 6:n=t.sent,n?this.$message({message:"操作成功",type:"success"}):this.getList();case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),goPageDeal:function(t){this.current_page=t,this.teamDetail()},teamHandleClick:function(){this.teamDetail()},teamDetail:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.dealLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize,uid:this.getId,letter:this.teamActive},this.dealLoading=!0,t.next=6,c["a"].warehouseUserDetailTeam(e);case 6:a=t.sent,a&&(a.data&&a.data.data&&a.data.data.data?(a.data.data.data.list?this.dealList=a.data.data.data.list:this.dealList=[],this.total=a.data.data.data.size):(this.dealList=[],this.total=0)),this.dealLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),rewardDetail:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.infoLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize,uid:this.getId},this.infoLoading=!0,t.next=6,c["a"].warehouseUserDetailReward(e);case 6:a=t.sent,a&&(i=a.data.data.records,this.infoList=i),this.infoLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listDetail:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={pageNum:this.current_page,pageSize:this.pageSize,uid:this.getId},t.next=3,c["a"].warehouseUserDetailBasic(e);case 3:a=t.sent,a&&(i=a.data.data,i&&(this.curRow=i));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},activated:function(){this.isInTags()||(this.infoList=[],this.dealList=[],this.infoConfigs=[],this.dealConfigs=[],this.curRow={},this.current_page=1,this.pageSize=30,this.total=0,this.pages=0,this.infoConfigs=o["x"],this.dealConfigs=o["y"],this.getId=this.$route.query.id,this.listDetail(),this.rewardDetail(),this.teamDetail())}},l=u,v=(a("b0d0"),a("2877")),p=Object(v["a"])(l,i,s,!1,null,null,null);e["default"]=p.exports},b0d0:function(t,e,a){"use strict";a("fe3b")},fe3b:function(t,e,a){}}]);