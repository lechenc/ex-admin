(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a15ea74"],{"6b7f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collection-container"},[a("div",[a("Btable",{attrs:{listLoading:t.listLoading,data:t.list,configs:t.configs},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("el-dialog",{attrs:{title:"详情","custom-class":"work-order-list-dialog",visible:t.dialogVisible,width:"600px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{attrs:{model:t.coinForm}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.coinKey))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"归集地址","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.defaultcollectionaddress))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"归集地址余额","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.balance))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"手续费地址","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.handlingfeeaddress))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"手续费地址余额","label-width":t.formLabelWidth}},[t._v(t._s(t.curRow.feeBalance))])],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},r=[],n=(a("96cf"),a("1da1")),o=a("2fee"),s=a("f9e1"),l=a("4ec3"),c={name:"Collection",components:{Btable:o["a"]},data:function(){return{listLoading:!1,list:[],curRow:{},detailRow:{},configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:100,total:0,coinForm:{},dialogVisible:!1,formLabelWidth:"110px"}},methods:{doHandle:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.fn,a=e.row,this.curRow=a,t.next=4,l["a"].getAddressListDetail({id:a.id});case 4:i=t.sent,i&&(this.curRow=i.data.data),this.dialogVisible=!0;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),goPage:function(t){this.current_page=t,this.getList()},getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.listLoading){t.next=2;break}return t.abrupt("return");case 2:return e={},this.listLoading=!0,t.next=6,l["a"].getAddressList(e);case 6:a=t.sent,a&&(i=a.data.data,this.list=i),this.listLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this.$util.getAuthority("Collection",s["e"],s["f"]);this.configs=t.val,this.getList()}},u=c,d=(a("bc88"),a("2877")),f=Object(d["a"])(u,i,r,!1,null,null,null);e["default"]=f.exports},7514:function(t,e,a){"use strict";var i=a("5ca1"),r=a("0a49")(5),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},"87f3":function(t,e,a){var i=a("5ca1");i(i.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(t,e,a){var i=a("5ca1");i(i.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},a54e:function(t,e,a){},bc88:function(t,e,a){"use strict";var i=a("a54e"),r=a.n(i);r.a}}]);