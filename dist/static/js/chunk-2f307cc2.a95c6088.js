(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f307cc2"],{"0a99":function(t,e,a){"use strict";var r=a("84d8"),i=a.n(r);i.a},"34da":function(t,e,a){"use strict";a("ac6a");e["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(t){var e=-1,a=this.$store.state.app.tagsList;a.forEach((function(a,r){a.path==t&&(e=r)})),e>=0&&a.splice(e,1)}}}},"84d8":function(t,e,a){},b613:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"extractPay-container"},[a("div",{staticClass:"container-top"},[a("Bsearch",{attrs:{configs:t.searchCofig,excelLoading:t.excelLoading,exportExcel:!0},on:{"do-search":t.doSearch,"do-reset":t.doReset,"do-exportExcel":t.exportExcel}})],1),t._v(" "),a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("div",{staticClass:"container-footer"},[a("icon-page",{attrs:{total:t.total,pages:t.pages}}),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,sizes, prev, pager, next, jumper","current-page":t.current_page,"page-sizes":[10,50,100,200],"page-size":t.pageSize,total:t.total},on:{"size-change":t.pageSizeChange,"current-change":t.goPage}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible,width:"760px",title:t.reviewTitle},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"reviewForm",attrs:{model:t.reviewForm,rules:t.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"订单号","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.id))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"UID","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.uid))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.coinName))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币数量","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.amount))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手续费","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.fee))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"到账数量","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.realAmount))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币地址","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.toAddress))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币二维码","label-width":t.formLabelWidth}},[a("div",{staticStyle:{width:"150px",height:"150px"}},[a("vue-qr",{attrs:{text:t.handleData.toAddress,margin:0,colorDark:"#000",colorLight:"#fff",size:150}})],1)])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"地址类型","label-width":t.formLabelWidth}},[t._v(t._s(1==t.handleData.isOwn?"内部交易":0==t.handleData.isOwn?"涉外交易":""))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提币时间","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.createTime))])],1)],1),t._v(" "),a("el-row"),t._v(" "),a("el-form-item",{attrs:{label:"订单状态","label-width":t.formLabelWidth}},[t._v(t._s(t._f("fStatus")(t.handleData.tradeStatus)))]),t._v(" "),a("el-row"),t._v(" "),parseInt(t.handleData.tradeStatus)>2||1==parseInt(t.handleData.tradeStatus)?a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"初审时间","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.firstAuditTime))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"初审人","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.firstAuditUserName))])],1)],1):t._e(),t._v(" "),(parseInt(t.handleData.tradeStatus)>3||1==parseInt(t.handleData.tradeStatus))&&4!=parseInt(t.handleData.tradeStatus)?a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"复审时间","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.reviewAuditTime))])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"复审人","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.reviewAuditUserName))])],1)],1):t._e(),t._v(" "),a("el-row"),t._v(" "),t.handleData.tradeStatus>2||1==parseInt(t.handleData.tradeStatus)?a("el-form-item",{attrs:{label:"初审备注","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.firstRemark))]):t._e(),t._v(" "),(t.handleData.tradeStatus>3||1==parseInt(t.handleData.tradeStatus))&&4!=parseInt(t.handleData.tradeStatus)?a("el-form-item",{attrs:{label:"复审备注","label-width":t.formLabelWidth}},[t._v(t._s(t.handleData.reviewRemark))]):t._e()],1),t._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){e.stopPropagation(),t.dialogVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.confirmReview(e)}}},[t._v(t._s(t.confirmText))])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.rejectVisible,width:"500px",title:"驳回"},on:{"update:visible":function(e){t.rejectVisible=e}}},[a("el-form",{ref:"rejectForm",attrs:{model:t.rejectForm,rules:t.rejectRules}},[a("el-form-item",{attrs:{label:"驳回理由",prop:"mark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入拒绝理由"},model:{value:t.rejectForm.mark,callback:function(e){t.$set(t.rejectForm,"mark",e)},expression:"rejectForm.mark"}})],1)],1),t._v(" "),a("div",{staticClass:"inner-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){e.stopPropagation(),t.rejectVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.rejLoading},on:{click:function(e){return e.stopPropagation(),t.confirmReject(e)}}},[t._v("驳回")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"验证收款码",visible:t.qrcodeShow,width:"500px"},on:{"update:visible":function(e){t.qrcodeShow=e}}},[a("div",{staticStyle:{"padding-left":"20px",width:"100%"}},[a("vue-qr",{attrs:{text:t.analysisQrCode,margin:0,colorDark:"#000",colorLight:"#fff",size:420}})],1)])],1)},i=[],s=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),n=a("bd86"),o=a("658f"),l=a.n(o),c=a("c249"),h=a("2fee"),u=a("f21b"),d=a("434a"),m=a("4ec3"),p=a("ca00"),f=a("34da"),g={name:"ExtractPay",components:{Btable:h["a"],Bsearch:c["a"],vueQr:l.a,iconPage:u["a"]},mixins:[f["a"]],data:function(){var t;return t={listLoading:!1,btnLoading:!1,rejLoading:!1,excelLoading:!1,calLoading:!1,isModify:!1,list:[],coinList:[],toDay:"",ago:"",dataList:[]},Object(n["a"])(t,"coinList",[]),Object(n["a"])(t,"configs",[]),Object(n["a"])(t,"searchCofig",[]),Object(n["a"])(t,"search_params_obj",{}),Object(n["a"])(t,"current_page",1),Object(n["a"])(t,"pageSize",this.$pageSize),Object(n["a"])(t,"total",0),Object(n["a"])(t,"pages",0),Object(n["a"])(t,"formLabelWidth","120px"),Object(n["a"])(t,"handleStatus",""),Object(n["a"])(t,"handleData",{}),Object(n["a"])(t,"dialogVisible",!1),Object(n["a"])(t,"confirmText",""),Object(n["a"])(t,"reviewTitle",""),Object(n["a"])(t,"reviewForm",{txId:"",mark:""}),Object(n["a"])(t,"rules",{}),Object(n["a"])(t,"rejectVisible",!1),Object(n["a"])(t,"rejectForm",{mark:""}),Object(n["a"])(t,"rejectRules",{mark:[{required:!0,message:"必填",trigger:"blur"}]}),Object(n["a"])(t,"analysisQrCode",""),Object(n["a"])(t,"qrcodeShow",!1),t},filters:{fStatus:function(t){var e="";switch(t){case 0:e="初审待审核";break;case 1:e="初审审核成功";break;case 2:e="初审审核失败";break;case 8:e="复审审核成功";break;case 9:e="复审审核失败";break}return e}},methods:{doHandle:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.fn,r=e.row,this.handleStatus=a,this.handleData=r,"preReview"===a||"nextReview"===a?(this.reviewTitle="preReview"===a?"提币初审":"提币复审",this.confirmText="preReview"===a?"初审通过":"复审通过",this.openReviewDialog()):"preReject"===a||"nextReject"===a?this.openRejectDialog():"detail"===a?(this.reviewTitle="提币详情",this.confirmText="确定",this.openReviewDialog()):"showqr"===a&&this.verify(r);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),openReviewDialog:function(){var t=this;this.dialogVisible=!0,this.$nextTick((function(){t.reviewForm={txId:"",mark:""},t.$refs["reviewForm"].resetFields()}))},openRejectDialog:function(){var t=this;this.rejectVisible=!0,this.$nextTick((function(){t.rejectForm={mark:""},t.$refs["rejectForm"].resetFields()}))},confirmReject:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs["rejectForm"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=8;break}return r={firstOrReview:"preReject"===e.handleStatus?1:2,auditStatus:2,auditOpinion:e.rejectForm.mark,id:e.handleData.id,txid:e.handleData.txId},e.rejLoading=!0,t.next=5,m["a"].auditWithdraw(r);case 5:i=t.sent,i&&(e.$message({message:"preReject"===e.handleStatus?"初审驳回成功":"复审驳回成功",type:"success"}),e.rejectVisible=!1,e.getList()),e.rejLoading=!1;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),confirmReview:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("detail"!==this.handleStatus){t.next=3;break}return this.dialogVisible=!1,t.abrupt("return");case 3:this.$refs["reviewForm"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=8;break}return r={firstOrReview:"preReview"===e.handleStatus?1:2,auditStatus:1,auditOpinion:"审核通过",id:e.handleData.id},e.btnLoading=!0,t.next=5,m["a"].auditWithdraw(r);case 5:i=t.sent,i&&(e.$message({message:"preReview"===e.handleStatus?"初审成功":"复审成功",type:"success"}),e.dialogVisible=!1,e.getList()),e.btnLoading=!1;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),verify:function(t){this.analysisQrCode=t.toAddress,this.qrcodeShow=!0},doSearch:function(t){this.current_page=1,this.search_params_obj=t,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(t){t["value"]=""})),this.searchCofig[0].value=[this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss")],this.getList()},exportExcel:function(t){this.search_params_obj=t.query;var e=t.num;p["a"].exportData.apply(this,[e])},pageSizeChange:function(t){this.current_page=1,this.pageSize=t,this.getList()},goPage:function(t){this.current_page=t,this.getList()},calTotal:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r,i,s,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.requiredParams(),this.search_params_obj.coinName){t.next=6;break}return this.$message({type:"error",message:"币种必须选择!",duration:2e3}),t.abrupt("return");case 6:return this.calLoading=!0,a={},this.requiredParams(a),Object.assign(a,this.search_params_obj),t.next=12,m["a"].getWithdrawSum(a);case 12:r=t.sent,r&&(i=r.data.data,i?(s=this.searchCofig[2]["list"].filter((function(t){return t.value==n.search_params_obj.coinId}))[0].label,this.$alert("<p>币种：".concat(s,"</p><p>提币数量总计：").concat(i.amountSum,"</p><p>手续费总计：").concat(i.feeSum,"</p><p>到账数量总计：").concat(i.realAmountSum,"</p>"),"统计结果",{dangerouslyUseHTMLString:!0}).catch((function(){}))):this.$message({type:"error",message:"数据列表为空!"})),this.calLoading=!1;case 15:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,s,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(e),Object.assign(e,this.search_params_obj),this.listLoading=!0,t.next=8,m["a"].getCPWithdrawQueryList(e);case 8:a=t.sent,a&&(r=a.data.data,i=r.records,s=r.total,n=r.current,o=r.pages,this.total=s,this.pages=o,this.current_page=n,this.list=i,this.dataList=i,this.listLoading=!1);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),queryData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.excelLoading=!0,this.requiredParams(e),Object.assign(e,this.search_params_obj),t.next=5,m["a"].getCPWithdrawQueryList(e);case 5:return a=t.sent,this.excelLoading=!1,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")},requiredParams:function(t){var e=this;if(this.$util.isEmptyObject(this.search_params_obj)){var a=this.$util.dateFormat(this.ago,"YYYY/MM/DD HH:mm:ss"),r=this.$util.dateFormat(this.toDay,"YYYY/MM/DD HH:mm:ss");t.endTime=r.replace(/\//gi,"-"),t.startTime=a.replace(/\//gi,"-"),this.searchCofig[0].value=[a,r]}if(this.search_params_obj.startTime&&(this.search_params_obj.endTime=this.formatTime(this.search_params_obj.endTime),this.search_params_obj.startTime=this.formatTime(this.search_params_obj.startTime)),this.search_params_obj.coinName&&/^[0-9]+.?[0-9]*$/.test(this.search_params_obj.coinName)){var i="";i=this.coinList.filter((function(t){return t["value"]==e.search_params_obj.coinName}))[0].label,this.search_params_obj.coinName=i}}},activated:function(){var t=this;if(!this.isInTags()){this.list=[],this.coinList=[],this.toDay="",this.ago="",this.dataList=[],this.configs=[],this.searchCofig=[],this.search_params_obj={},this.current_page=1,this.pageSize=this.$pageSize,this.total=0,this.pages=0;var e=this.$util.getAuthority("Extract",d["g"],d["h"]);this.configs=e.val,this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.searchCofig=this.$util.clone(d["i"]),this.$store.dispatch("common/getCoinList").then((function(){var e=t.$store.state.common.coinlist,a=e.filter((function(t){return"USDT"==t.label}))||[];t.coinList=a,t.searchCofig[2]["list"]=a}));var a=this.$route.query.toAddress,r=this.$route.query.coinName,i=this.$route.query.coinId;a?(this.searchCofig[3].value=a,this.searchCofig[2].value=i,this.search_params_obj={toAddress:a,coinName:r},this.getList()):this.getList()}}},b=g,v=(a("0a99"),a("0c7c")),_=Object(v["a"])(b,r,i,!1,null,null,null);e["default"]=_.exports}}]);