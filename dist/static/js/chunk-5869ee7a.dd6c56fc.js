(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5869ee7a"],{"34da":function(t,e,a){"use strict";a("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,r){a.path==t&&(e=r)})),e>=0&&a.splice(e,1)}}}},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},"517f":function(t,e,a){"use strict";var r=a("ef3a"),i=a.n(r);i.a},"5d73":function(t,e,a){t.exports=a("469f")},7514:function(t,e,a){"use strict";var r=a("5ca1"),i=a("0a49")(5),n="find",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},"768b":function(t,e,a){"use strict";var r=a("a745"),i=a.n(r);function n(t){if(i()(t))return t}var s=a("5d73"),o=a.n(s),d=a("c8bb"),l=a.n(d),c=a("67bb"),u=a.n(c);function f(t,e){if("undefined"!==typeof u.a&&l()(Object(t))){var a=[],r=!0,i=!1,n=void 0;try{for(var s,d=o()(t);!(r=(s=d.next()).done);r=!0)if(a.push(s.value),e&&a.length===e)break}catch(c){i=!0,n=c}finally{try{r||null==d["return"]||d["return"]()}finally{if(i)throw n}}return a}}var h=a("e630");function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){return n(t)||f(t,e)||Object(h["a"])(t,e)||p()}a.d(e,"a",(function(){return m}))},"7d7b":function(t,e,a){var r=a("e4ae"),i=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},"87f3":function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},ab8b:function(t,e,a){},d626:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collectionDetail-container"},[a("el-row",{staticClass:"sac-row"},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),a("el-card",[a("div",{staticClass:"setting-form"},[a("el-form",{ref:"formInfo",attrs:{model:t.formInfo}},[a("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth}},[t._v(t._s(t.coinName))]),t._v(" "),a("el-form-item",{attrs:{label:"CFO地址","label-width":t.formLabelWidth}},[t._v(t._s(t.detailRow.address||""))]),t._v(" "),a("el-form-item",{attrs:{label:"CFO余额","label-width":t.formLabelWidth}},[t._v(t._s(t.detailRow.balance||0))]),t._v(" "),a("el-form-item",{attrs:{label:"手续费地址","label-width":t.formLabelWidth}},[t._v(t._s(t.detailRow.handlingfeeaddress||""))]),t._v(" "),a("el-form-item",{attrs:{label:"手续费余额","label-width":t.formLabelWidth}},[t._v(t._s(t.detailRow.feeBalance||0))]),t._v(" "),a("el-form-item",{attrs:{label:"余额通知数值","label-width":t.formLabelWidth}},[t._v(t._s(t.detailRow.noticeMin||""))]),t._v(" "),a("el-form-item",{attrs:{label:"余额手机号码","label-width":t.formLabelWidth}},[t._v(t._s(t.detailRow.phone||""))])],1),t._v(" "),a("h3",[t._v("归集管理")]),t._v(" "),a("el-form",[a("el-form-item",{attrs:{label:"默认归集方式","label-width":t.formLabelWidth}},[a("el-button",{attrs:{type:"info"}},[t._v(t._s(t.detailRow.address||""))]),t._v(" "),a("el-button",{attrs:{round:"",plain:"",size:"small",type:"primary"},on:{click:function(e){return t.updateInfo(-1)}}},[t._v("修改")])],1),t._v(" "),t._l(t.addrList,(function(e,r){return a("el-form-item",{key:r,attrs:{label:"归集方式","label-width":t.formLabelWidth}},[a("div",[a("el-button",{attrs:{type:"info",size:"medium"}},[t._v(t._s(e.address))]),t._v(" "),a("el-button",{attrs:{round:"",plain:"",type:"primary",size:"small"},on:{click:function(a){return a.stopPropagation(),t.showAddrDialog(e)}}},[t._v("被归集地址明细")]),t._v(" "),a("el-button",{attrs:{round:"",plain:"",type:"danger",size:"small"},on:{click:function(a){return a.stopPropagation(),t.delCollec(e)}}},[t._v("删除归集方式")]),t._v(" "),a("el-button",{attrs:{round:"",plain:"",type:"danger",size:"small"},on:{click:function(e){return e.stopPropagation(),t.updateInfo(r)}}},[t._v("修改归集方式")])],1),t._v(" "),a("div",[a("el-form-item",{attrs:{label:"余额","label-width":t.formLabelWidth}},[t._v(t._s(e.balance))]),t._v(" "),a("el-form-item",{attrs:{label:"余额通知数值","label-width":t.formLabelWidth}},[t._v(t._s(e.noticeMin))]),t._v(" "),a("el-form-item",{attrs:{label:"余额手机号码","label-width":t.formLabelWidth}},[t._v(t._s(e.phone))])],1)])})),t._v(" "),a("el-form-item",{attrs:{label:"","label-width":t.formLabelWidth}},[a("el-button",{attrs:{type:"success"},on:{click:function(e){return e.stopPropagation(),t.addCollect(e)}}},[t._v("+新增归集方式")])],1)],2)],1)]),t._v(" "),a("collection-addr-detail-dialog",{attrs:{visible:t.show_addr_detail_modal,dataObj:t.current_obj},on:{"update:visible":function(e){t.show_addr_detail_modal=e},close:t.closeAddrDialog}}),t._v(" "),a("el-dialog",{attrs:{title:t.formName,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"formInfo",attrs:{model:t.formInfo,rules:t.rules}},[t.isAddNoUpdata?a("div",[a("el-form-item",{attrs:{label:"归集地址","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择归集地址"},on:{change:t.changeCollectOption},model:{value:t.formInfo.address,callback:function(e){t.$set(t.formInfo,"address",e)},expression:"formInfo.address"}},t._l(t.selectAddrList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.address,value:t.address}})})),1)],1)],1):a("div",[t.isDefaultAddr&&t.addrList.length>0?a("el-form-item",{attrs:{label:"归集地址","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择归集地址"},on:{change:t.changeCollectOption},model:{value:t.formInfo.address,callback:function(e){t.$set(t.formInfo,"address",e)},expression:"formInfo.address"}},t._l(t.addrList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.address,value:t.address}})})),1)],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"余额通知数值","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.formInfo.noticeMin,callback:function(e){t.$set(t.formInfo,"noticeMin",e)},expression:"formInfo.noticeMin"}},[a("div",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("低于")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"余额手机号码","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.formInfo.phone,callback:function(e){t.$set(t.formInfo,"phone",e)},expression:"formInfo.phone"}})],1)],1)]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmAddr}},[t._v("确定")])],1)],1)],1)},i=[],n=(a("ac6a"),a("5df3"),a("768b")),s=(a("96cf"),a("3b8d")),o=a("2fee"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collectionAddrDialog-container"},[a("el-dialog",{staticClass:"addr-container",attrs:{width:"1000px",title:t.title,visible:t.showDialog,closeOnClickModal:!1},on:{"update:visible":function(e){t.showDialog=e},open:t.dialogOpen}},[a("div",{staticClass:"container-top"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.addAddr}},[t._v("添加地址")])],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{staticClass:"new-dialog",attrs:{width:"800px",title:t.subTitle,visible:t.show_addr_form,"append-to-body":"","max-height":"700px"},on:{"update:visible":function(e){t.show_addr_form=e}}},[a("div",{staticClass:"setting-form"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig},on:{"do-search":t.doSearch,"do-reset":t.doReset}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.addrLoading,data:t.addAddrList,configs:t.addAddrCol,selection:!0},on:{"do-handle":t.doAddrHandle,select:t.getSelectRow}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":t.current_page_addr,"page-size":t.pageSize_addr,total:t.total_addr},on:{"current-change":t.goPageAddr}})],1),t._v(" "),a("div",{staticClass:"footer"},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1)])])],1)],1)},l=[],c=a("4ec3"),u=a("f9e1"),f=a("c249"),h={components:{Bsearch:f["a"],Btable:o["a"]},props:{visible:{default:!1,type:Boolean},dataObj:{default:function(){},type:Object}},computed:{showDialog:{get:function(){return this.visible},set:function(t){this.$emit("close",t)}}},data:function(){return{title:"被归集地址明细",subTitle:"添加地址",mainId:"",nextId:"",configs:[],list:[],listLoading:!1,show_addr_form:!1,addrLoading:!1,addAddrList:[],searchCofig:[],addAddrCol:[],userIdArr:"",current_page_addr:1,pageSize_addr:20,total_addr:0,search_params_obj:{},current_page:1,pageSize:20,total:0}},methods:{doSearch:function(t){this.current_page_addr=1,this.search_params_obj=t,this.getAddList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.getAddList()},goPage:function(t){this.current_page=t,this.getList()},goPageAddr:function(t){this.current_page_addr=t,this.getAddList()},addAddr:function(){this.show_addr_form=!0},doHandle:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.fn,r=e.row,"del"===a&&this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:r.id},t.next=3,c["a"].deleteUser(e);case 3:a=t.sent,a&&(i.$message({message:"删除用户地址成功",type:"success"}),i.getList());case 5:case"end":return t.stop()}}),t)})))).catch((function(){console.log("cancel")}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),doAddrHandle:function(){},confirm:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={tbWalletToAddressId:this.nextId,clientAppInfoId:this.mainId,tbWalletAddressInfoId:this.userIdArr},t.next=3,c["a"].addAddressUser(e);case 3:a=t.sent,a&&(this.$message({message:"新增用户地址成功",type:"success"}),this.show_addr_form=!1,this.getList(),this.getAddList());case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,e={tbWalletToAddressId:this.nextId,clientAppInfoId:this.mainId,pageNum:this.current_page,pageSize:this.pageSize},t.next=4,c["a"].userPage(e);case 4:a=t.sent,a&&(r=a.data.data,i=r.records,n=r.current,s=r.total,this.list=i,this.total=s,this.current_page=n,this.listLoading=!1);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getAddList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.addrLoading=!0,e={clientAppInfoId:this.mainId,pageNum:this.current_page_addr,pageSize:this.pageSize_addr},Object.assign(e,this.search_params_obj),t.next=5,c["a"].addressUserList(e);case 5:a=t.sent,a&&(r=a.data.data,i=r.records,n=r.total,s=r.current,this.addAddrList=i,this.current_page_addr=s,this.total_addr=n,this.addrLoading=!1);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancel:function(){this.$emit("close")},dialogOpen:function(){this.mainId=this.dataObj.clientAppInfoId,this.nextId=this.dataObj.id,this.configs=u["g"],this.searchCofig=u["b"],this.getList(),this.addAddrCol=u["a"],this.getAddList()},getSelectRow:function(t){if(t&&t.length>0){var e=[];t.forEach((function(t){e.push(t.tbWalletAddressInfoId)})),this.userIdArr=e.join(",")}}}},p=h,m=(a("517f"),a("0c7c")),g=Object(m["a"])(p,d,l,!1,null,null,null),b=g.exports,v=a("34da"),_={computed:{isDeskTop:function(){return"mobile"!==this.$store.state.app.device}}},w={name:"CollectionDetail",components:{Btable:o["a"],collectionAddrDetailDialog:b},mixins:[v["a"],_],data:function(){return{btnLoading:!1,coinName:"",addrList:[],defaultAddrList:[],selectAddrList:[],curRow:null,detailRow:{},listId:0,show_addr_detail_modal:!1,activeName:"assets",isAddNoUpdata:!0,isDefaultAddr:!1,dialogFormVisible:!1,formName:"添加归集地址",formInfo:{id:0,address:"",noticeMin:"",phone:""},formValue:{},current_obj:{},rules:{}}},computed:{formLabelWidth:function(){return this.isDeskTop?"125px":"auto"}},methods:{closeAddrDialog:function(){this.show_addr_detail_modal=!1},showAddrDialog:function(t){this.current_obj=t,this.show_addr_detail_modal=!0},delCollec:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={id:e.id},t.next=3,c["a"].deleteAddress(r);case 3:i=t.sent,i&&(a.$message({type:"success",message:"删除归集方式成功!"}),a.getCollectInfo());case 5:case"end":return t.stop()}}),t)})))).catch((function(){console.log("cancel")}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addCollect:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.selectAddrList.length>0?(this.formName="添加归集地址",this.isAddNoUpdata=!0,this.dialogFormVisible=!0,this.curRow=null,this.$nextTick((function(){e.formInfo={id:0,address:"",noticeMin:"",phone:""},e.$refs["formInfo"].resetFields()}))):this.$message({type:"danger",message:"归集列表为空，不可新建归集方式!"});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:-1==e?(this.curRow=this.detailRow,this.isDefaultAddr=!0):(this.curRow=this.addrList[e],this.isDefaultAddr=!1),this.formName="修改归集地址信息",this.isAddNoUpdata=!1,this.dialogFormVisible=!0,this.$nextTick((function(){a.$refs["formInfo"].resetFields(),a.formInfo={id:a.curRow.id,address:a.curRow.address,noticeMin:a.curRow.noticeMin,phone:a.curRow.phone}}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),changeCollectOption:function(t){this.curRow?this.editType():this.formInfo.address=t},confirmAddr:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.curRow){t.next=13;break}if(this.formInfo.address){t.next=4;break}return this.$message({type:"danger",message:"尚未勾选归集方式!"}),t.abrupt("return");case 4:return e={id:this.selectAddrList.filter((function(t){return t.address==r.formInfo.address}))[0].id,type:1},this.btnLoading=!0,t.next=8,c["a"].updateAddress(e);case 8:a=t.sent,a&&(this.$message({type:"success",message:"新增归集方式成功!"}),this.dialogFormVisible=!1,this.getCollectInfo()),this.btnLoading=!1,t.next=14;break;case 13:this.editInfo();case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),editType:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r,i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={type:this.isDefaultAddr?2:1},this.isDefaultAddr?(r=this.addrList.filter((function(t){return t.address==n.formInfo.address})),r&&r.length>0?(a.id=r[0].id,a.clientAppInfoId=this.listId):this.$message({type:"danger",message:"切换归集条目失败!"})):a.id=this.curRow.id,t.next=4,c["a"].updateAddress(a);case 4:i=t.sent,i&&this.$message({type:"success",message:"切换归集条目成功!"});case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.formInfo,a=e.noticeMin,e.phone,r={id:this.curRow.id,noticeMin:a,phone:a},t.next=4,c["a"].updateCollect(r);case 4:i=t.sent,i&&(this.$message({type:"success",message:"修改操作成功!"}),this.dialogFormVisible=!1,this.getCollectInfo());case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCollectInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,s,o,d,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={clientAppInfoId:this.listId},a={clientAppInfoId:this.listId,notionalPoolingState:2},r={clientAppInfoId:this.listId,defaultNotionalPoolingState:2},t.next=5,Promise.all([c["a"].getAddressListById(e),c["a"].getAddressListById(a),c["a"].getAddressListById(r)]);case 5:i=t.sent,s=Object(n["a"])(i,3),o=s[0],d=s[1],l=s[2],l&&(this.defaultAddrList=l.data.data),o&&(this.selectAddrList=o.data.data),d&&(this.addrList=d.data.data);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getListDetail:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={clientAppInfoId:this.listId},t.next=3,c["a"].getAddress(e);case 3:a=t.sent,a&&(this.detailRow=a.data&&a.data.data||{});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},activated:function(){this.isInTags()||(this.coinName="",this.addrList=[],this.defaultAddrList=[],this.selectAddrList=[],this.curRow=null,this.detailRow={},this.listId=this.$route.query.id,this.coinName=this.$route.query.coinName,this.getListDetail(),this.getCollectInfo())}},I=w,A=(a("f808"),Object(m["a"])(I,r,i,!1,null,null,null));e["default"]=A.exports},ef3a:function(t,e,a){},f808:function(t,e,a){"use strict";var r=a("ab8b"),i=a.n(r);i.a}}]);