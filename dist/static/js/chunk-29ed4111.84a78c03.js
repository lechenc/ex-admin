(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29ed4111"],{"010b":function(t,e,s){},1166:function(t,e,s){"use strict";var a=s("010b"),r=s.n(a);r.a},"34da":function(t,e,s){"use strict";s("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,s=this.$store.state.app.tagsList;s.forEach((function(s,a){s.path==t&&(e=a)})),e>=0&&s.splice(e,1)}}}},b4db:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userdetail-container"},[s("el-row",{staticClass:"sac-row"},[s("el-col",{attrs:{span:4}},[s("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"box-card-con"},[s("H3",[t._v("用户信息")]),t._v(" "),s("div",[s("div",[t._v("UID："+t._s(t.current_row.uid))]),t._v(" "),s("div",[t._v("用户类型："+t._s(t._f("userType")(t.current_row.userType)))]),t._v(" "),s("div",[t._v("手机："+t._s(t.current_row.phone))]),t._v(" "),s("div",[t._v("邮箱："+t._s(t.current_row.email))]),t._v(" "),s("div",[t._v("用户名："+t._s(t.current_row.userName))]),t._v(" "),s("div",[t._v("唯一识别码："+t._s(t.current_row.uniqueCode))]),t._v(" "),s("div",[t._v("注册时间："+t._s(t.current_row.registerTime))])]),t._v(" "),s("h3",[t._v("用户状态")]),t._v(" "),s("div",[s("div",[t._v("\n          登录状态："),s("span",[t._v(t._s(t._f("boolDiy")(t.is_login)))])]),t._v(" "),s("div",[t._v("\n          法币状态："),s("span",[t._v(t._s(t._f("boolDiy")(t.is_c2c)))])]),t._v(" "),s("div",[t._v("\n          提币状态："),s("span",[t._v(t._s(t._f("boolDiy")(t.is_draw)))])])])],1)]),t._v(" "),s("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"用户资产",name:"assets"}},[[s("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:t.assetsList,border:""}},[s("el-table-column",{attrs:{prop:"coinName",label:"币种"}}),t._v(" "),s("el-table-column",{attrs:{prop:"payAmount",label:"可用"}}),t._v(" "),s("el-table-column",{attrs:{prop:"pyaFrozenAmount",label:"冻结"}}),t._v(" "),s("el-table-column",{attrs:{label:"充币地址",width:"470px",prop:"coinAddressList"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"qrimg-wraper"},[e.row["coinAddressList"].length?s("div",[s("div",{staticClass:"colline"},t._l(e.row["coinAddressList"],(function(e,a){return s("div",{key:a},[s("span",{staticClass:"label"},[t._v(t._s(e.chainName)+"： ")]),t._v(" "),s("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover"}},[s("div",{staticStyle:{width:"150px",height:"150px"}},[s("vue-qr",{attrs:{text:e.address,margin:0,colorDark:"#000",colorLight:"#fff",size:150}})],1),t._v(" "),s("el-button",{staticStyle:{"margin-right":"8px"},attrs:{slot:"reference",size:"small"},slot:"reference"},[s("span",[t._v(t._s(e.address))])])],1),t._v(" "),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.address,expression:"item.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{plain:"",size:"small"}},[t._v("复制")])],1)})),0)]):s("div",[t._v("无")])])]}}])})],1),t._v(" "),s("div",{staticClass:"container-footer"},[s("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.assets_curr_page,"page-size":t.pageSize,total:t.assets_total},on:{"current-change":t.goAssetsPage}})],1)]],2),t._v(" "),s("el-tab-pane",{attrs:{label:"邀请明细",name:"share"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.inviteList,border:""}},[s("el-table-column",{attrs:{type:"index",label:"序号",width:"70px"}}),t._v(" "),s("el-table-column",{attrs:{prop:"uid",label:"UID"}}),t._v(" "),s("el-table-column",{attrs:{prop:"phone",label:"手机"}}),t._v(" "),s("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),t._v(" "),s("el-table-column",{attrs:{prop:"loginIp",label:"登录IP"}}),t._v(" "),s("el-table-column",{attrs:{prop:"registerIp",label:"注册IP"}}),t._v(" "),s("el-table-column",{attrs:{prop:"registerTime",label:"注册时间"}})],1),t._v(" "),s("div",{staticClass:"container-footer"},[s("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.invite_curr_page,"page-size":t.pageSize,total:t.invite_total},on:{"current-change":t.goInvitePage}})],1)],1)],1),t._v(" "),s("el-card",[s("H3",[t._v("法币收款方式")]),t._v(" "),s("Btable",{attrs:{listLoading:t.otcListLoading,data:t.otcList,configs:t.otcConfigs},on:{"do-handle":t.doHandle}})],1)],1)},r=[],i=(s("ac6a"),s("96cf"),s("3b8d")),n=s("658f"),o=s.n(n),c=s("4ec3"),u=s("34da"),l=s("2fee"),p=s("434a"),d={components:{vueQr:o.a,Btable:l["a"]},name:"UserlistDetailPay",mixins:[u["a"]],data:function(){return{listLoading:!1,otcListLoading:!1,activeName:"assets",otcConfigs:[],isModify:!1,current_page:1,pageSize:10,current_row:{},otcList:[],is_login:!1,is_exchange:!1,is_c2c:!1,is_draw:!1,is_advertise:!1,operareObj:{is_login:1,is_exchange:2,is_c2c:3,is_draw:4,is_advertise:5},nowUserId:0,assetsList:[],assets_curr_page:0,assets_total:0,inviteList:[],invite_curr_page:0,invite_total:0}},filters:{userType:function(t){switch(t){case 1:return"普通用户";case 100:return"系统用户";case 3:return"机器人"}},boolDiy:function(t){return t?"是":"否"}},methods:{onCopy:function(){this.$message.success("复制成功")},onError:function(){this.$message.success("复制失败")},handleUpdate:function(t){var e=this,s=this[t];this.$confirm("确认更改状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(Object(i["a"])(regeneratorRuntime.mark((function a(){var r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r={userId:e.current_row.userId,operate:e.operareObj[t],status:e[t]?0:1},a.next=3,c["a"].updateOperateStatus(r);case 3:i=a.sent,i?(e.$message({message:i.data.message,type:"success"}),e[t]=!s,e.getList()):e.$message({message:"更新失败",type:"danger"});case 5:case"end":return a.stop()}}),a)})))).catch((function(){}))},doHandle:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var s,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.fn,a=e.row,r={userId:a.userId,payId:a.recdId},"open"===s?r.status=1:"close"===s&&(r.status=2),t.next=5,c["a"].updatePayStatus(r);case 5:i=t.sent,i&&(this.$message({type:"success",message:"open"===s?"开启成功":"停止使用操作成功"}),this.getDetail());case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleClick:function(t,e){},goInvitePage:function(t){this.invite_curr_page=t,this.getInviteList()},goAssetsPage:function(t){this.assets_curr_page=t,this.getAssetsList()},getAssetsList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,s,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={userId:this.nowUserId,appId:3},t.next=3,c["a"].accountQuery(e);case 3:s=t.sent,s&&(a=s.data.data,r=[],a&&a.length&&a.forEach((function(t){var e=[];t.coinAddressList.forEach((function(t){"omni"!=t.chainName&&e.push(t)})),t.coinAddressList=e,r.push(t)})),this.assetsList=r);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getInviteList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,s,a,r,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={pageNum:this.invite_curr_page,pageSize:this.pageSize,userId:this.nowUserId},t.next=3,c["a"].getInviteList(e);case 3:s=t.sent,s&&(a=s.data.data,r=a.records,i=a.total,n=a.current,this.invite_total=i,this.invite_curr_page=n,this.inviteList=r);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getDetail:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var s,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return s={uid:e,pageNum:this.current_page,pageSize:this.pageSize},this.listLoading=!0,t.next=6,c["a"].getUserList(s);case 6:a=t.sent,a&&(r=a.data.data.records,r&&r.length>0&&(this.current_row=r[0],this.is_login=!!this.current_row.userLoginStatus,this.is_exchange=!!this.current_row.userTradeStatus,this.is_c2c=!!this.current_row.userOtcStatus,this.is_draw=!!this.current_row.userWithdrawStatus,this.is_advertise=!!this.current_row.isPublishAdv,this.nowUserId=this.current_row.userId,this.getInviteList(),this.getAssetsList())),this.listLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getOtcBindListFunc:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var s,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.otcListLoading){t.next=2;break}return t.abrupt("return");case 2:return s={uid:e},this.otcListLoading=!0,t.next=6,c["a"].getOtcBindList(s);case 6:a=t.sent,a&&(r=a.data.data,r&&r.length>0&&(this.otcList=r)),this.otcListLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},activated:function(){if(!this.isInTags()){this.activeName="assets",this.current_page=1,this.pageSize=10,this.current_row={},this.is_login=!1,this.is_exchange=!1,this.is_c2c=!1,this.is_draw=!1,this.assetsList=[],this.assets_curr_page=0,this.assets_total=0,this.inviteList=[],this.invite_curr_page=0,this.invite_total=0;var t=this.$util.getAuthority("UserList",p["q"],p["r"]);t.isModify?this.isModify=!1:this.isModify=!0,this.otcConfigs=p["s"],this.getDetail(this.$route.query.id),this.getOtcBindListFunc(this.$route.query.id)}}},h=d,v=(s("1166"),s("0c7c")),_=Object(v["a"])(h,a,r,!1,null,null,null);e["default"]=_.exports}}]);