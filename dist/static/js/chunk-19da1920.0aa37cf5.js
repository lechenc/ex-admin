(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19da1920"],{"15fd":function(e,t,i){"use strict";function o(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}function a(e,t){if(null==e)return{};var i,a,n=o(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}i.d(t,"a",(function(){return a}))},"34da":function(e,t,i){"use strict";i("ac6a");t["a"]={methods:{isInTags:function(){return this.$route.path==this.$store.state.app.tagsActivePath&&(this.$store.commit("app/setTagsActivePath",""),!0)},reloadTagsPage:function(e){var t=-1,i=this.$store.state.app.tagsList;i.forEach((function(i,o){i.path==e&&(t=o)})),t>=0&&i.splice(t,1)}}}},"5a25":function(e,t,i){},"76ec":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"setting-container"},[i("div",{staticClass:"container-top"},[i("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),e.isCURDAuth?i("div",{staticClass:"container-btn"},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addCoin}},[e._v("添加")])],1):e._e(),e._v(" "),i("div",[i("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),i("div",{staticClass:"container-footer"},[i("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),i("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),i("el-dialog",{attrs:{title:e.formName,width:"920px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"coinForm",attrs:{model:e.coinForm,rules:e.rules}},[i("el-row",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"coin","label-width":e.formLabelWidth,prop:"coinId"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.coinForm.coinId,callback:function(t){e.$set(e.coinForm,"coinId",t)},expression:"coinForm.coinId"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"id","label-width":e.formLabelWidth,prop:"id"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.coinForm.id,callback:function(t){e.$set(e.coinForm,"id",t)},expression:"coinForm.id"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"币种简称","label-width":e.formLabelWidth,prop:"coinName"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"币种简称"},model:{value:e.coinForm.coinName,callback:function(t){e.$set(e.coinForm,"coinName",t)},expression:"coinForm.coinName"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"币种全称","label-width":e.formLabelWidth,prop:"englishDesc"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"币种全称"},model:{value:e.coinForm.englishDesc,callback:function(t){e.$set(e.coinForm,"englishDesc",t)},expression:"coinForm.englishDesc"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"币种中文","label-width":e.formLabelWidth,prop:"chineseDesc"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"币种中文"},model:{value:e.coinForm.chineseDesc,callback:function(t){e.$set(e.coinForm,"chineseDesc",t)},expression:"coinForm.chineseDesc"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"发行价","label-width":e.formLabelWidth,prop:"issuePrice"}},[i("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"发行价"},on:{input:function(t){return e.checkVal("issuePrice")}},model:{value:e.coinForm.issuePrice,callback:function(t){e.$set(e.coinForm,"issuePrice",t)},expression:"coinForm.issuePrice"}},[i("div",{attrs:{slot:"append"},slot:"append"},[e._v("$")])])],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"币种总量","label-width":e.formLabelWidth,prop:"totalIssuance"}},[i("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"发行总量"},on:{input:function(t){return e.checkVal("totalIssuance")}},model:{value:e.coinForm.totalIssuance,callback:function(t){e.$set(e.coinForm,"totalIssuance",t)},expression:"coinForm.totalIssuance"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"流通量","label-width":e.formLabelWidth,prop:"totalCirculation"}},[i("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"流通量"},on:{input:function(t){return e.checkVal("totalCirculation")}},model:{value:e.coinForm.totalCirculation,callback:function(t){e.$set(e.coinForm,"totalCirculation",t)},expression:"coinForm.totalCirculation"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"白皮书","label-width":e.formLabelWidth,prop:"whitePaper"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"白皮书"},model:{value:e.coinForm.whitePaper,callback:function(t){e.$set(e.coinForm,"whitePaper",t)},expression:"coinForm.whitePaper"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"发行时间","label-width":e.formLabelWidth,prop:"publishTime"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.coinForm.publishTime,callback:function(t){e.$set(e.coinForm,"publishTime",t)},expression:"coinForm.publishTime"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"币种介绍","label-width":e.formLabelWidth,prop:"coinIntroduction"}},[i("el-input",{attrs:{rows:"5",autocomplete:"off",placeholder:"请输入中文币种介绍",type:"textarea"},model:{value:e.coinForm.coinIntroduction,callback:function(t){e.$set(e.coinForm,"coinIntroduction",t)},expression:"coinForm.coinIntroduction"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"币种英文介绍","label-width":e.formLabelWidth,prop:"coinIntroductionEnglish"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"请输入英文币种介绍",type:"textarea"},model:{value:e.coinForm.coinIntroductionEnglish,callback:function(t){e.$set(e.coinForm,"coinIntroductionEnglish",t)},expression:"coinForm.coinIntroductionEnglish"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"官网","label-width":e.formLabelWidth,prop:"officialWebsite"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"官网"},model:{value:e.coinForm.officialWebsite,callback:function(t){e.$set(e.coinForm,"officialWebsite",t)},expression:"coinForm.officialWebsite"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"区块链浏览器","label-width":e.formLabelWidth,prop:"blockchainBrowser"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"区块链浏览器"},model:{value:e.coinForm.blockchainBrowser,callback:function(t){e.$set(e.coinForm,"blockchainBrowser",t)},expression:"coinForm.blockchainBrowser"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"币种小数位","label-width":e.formLabelWidth,prop:"decimalPlaces"}},[i("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("decimalPlaces")}},model:{value:e.coinForm.decimalPlaces,callback:function(t){e.$set(e.coinForm,"decimalPlaces",t)},expression:"coinForm.decimalPlaces"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"转至币汇最小额","label-width":e.formLabelWidth,prop:"exchangeOutSingleMinAmount"}},[i("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("exchangeOutSingleMinAmount")}},model:{value:e.coinForm.exchangeOutSingleMinAmount,callback:function(t){e.$set(e.coinForm,"exchangeOutSingleMinAmount",t)},expression:"coinForm.exchangeOutSingleMinAmount"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"单笔最小提币额","label-width":e.formLabelWidth,prop:"tranOutSingleMinAmount"}},[i("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"单笔最小提币额"},on:{input:function(t){return e.checkVal("tranOutSingleMinAmount")}},model:{value:e.coinForm.tranOutSingleMinAmount,callback:function(t){e.$set(e.coinForm,"tranOutSingleMinAmount",t)},expression:"coinForm.tranOutSingleMinAmount"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"单笔最大提币额","label-width":e.formLabelWidth,prop:"tranOutSingleMaxAmount"}},[i("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"单笔最大提币额"},on:{input:function(t){return e.checkVal("tranOutSingleMaxAmount")}},model:{value:e.coinForm.tranOutSingleMaxAmount,callback:function(t){e.$set(e.coinForm,"tranOutSingleMaxAmount",t)},expression:"coinForm.tranOutSingleMaxAmount"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"单日最大提币额","label-width":e.formLabelWidth,prop:"tranOutDayMaxAmount"}},[i("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("tranOutDayMaxAmount")}},model:{value:e.coinForm.tranOutDayMaxAmount,callback:function(t){e.$set(e.coinForm,"tranOutDayMaxAmount",t)},expression:"coinForm.tranOutDayMaxAmount"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"所属链","label-width":e.formLabelWidth,prop:"chainName"}},[i("el-select",{attrs:{placeholder:""},model:{value:e.coinForm.chainName,callback:function(t){e.$set(e.coinForm,"chainName",t)},expression:"coinForm.chainName"}},e._l(e.chainArr,(function(e,t){return i("el-option",{key:t,attrs:{label:e.chainName,value:e.chainName}})})),1)],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"转至差价合约手续费","label-width":e.formLabelWidth,prop:"exchangeFee"}},[i("div",{staticStyle:{display:"flex"}},[i("el-input",{attrs:{type:"number",autocomplete:"off",wdith:"80%"},on:{input:function(t){return e.checkVal("fee_type")}},model:{value:e.coinForm.exchangeFee,callback:function(t){e.$set(e.coinForm,"exchangeFee",t)},expression:"coinForm.exchangeFee"}}),e._v(" "),i("el-select",{attrs:{placeholder:"",wdith:"20%"},model:{value:e.coinForm.fee_type,callback:function(t){e.$set(e.coinForm,"fee_type",t)},expression:"coinForm.fee_type"}},[i("el-option",{attrs:{label:"百分比",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"固定值",value:"2"}})],1)],1)])],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"提币手续费","label-width":e.formLabelWidth,prop:"tranOutFee"}},[i("div",{staticStyle:{display:"flex"}},[i("el-input",{attrs:{type:"number",autocomplete:"off",wdith:"80%"},on:{input:function(t){return e.checkVal("fee_ex_type")}},model:{value:e.coinForm.tranOutFee,callback:function(t){e.$set(e.coinForm,"tranOutFee",t)},expression:"coinForm.tranOutFee"}}),e._v(" "),i("el-select",{attrs:{placeholder:"",wdith:"20%"},model:{value:e.coinForm.fee_ex_type,callback:function(t){e.$set(e.coinForm,"fee_ex_type",t)},expression:"coinForm.fee_ex_type"}},[i("el-option",{attrs:{label:"百分比",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"固定值",value:"2"}})],1)],1)])],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"币种icon","label-width":e.formLabelWidth,prop:"iconUrl"}},[i("el-input",{attrs:{size:"small",placeholder:"请选择上传"},model:{value:e.coinForm.iconUrl,callback:function(t){e.$set(e.coinForm,"iconUrl",t)},expression:"coinForm.iconUrl"}},[i("el-upload",{ref:"coinel",attrs:{slot:"append",action:e.$img_api,multiple:"",name:"file",data:{type:"exchange"},"show-file-list":!0,"on-success":e.upload,"on-error":e.uploadError,limit:1,"on-exceed":e.exceed},slot:"append"},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"内部提币免审额度","label-width":e.formLabelWidth,prop:"isOwnAmount"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},on:{input:function(t){return e.checkVal("isOwnAmount")}},model:{value:e.coinForm.isOwnAmount,callback:function(t){e.$set(e.coinForm,"isOwnAmount",t)},expression:"coinForm.isOwnAmount"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"排序","label-width":e.formLabelWidth,prop:"position"}},[i("el-input",{attrs:{autocomplete:"off",type:"text"},on:{input:function(t){return e.checkVal("position")}},model:{value:e.coinForm.position,callback:function(t){e.$set(e.coinForm,"position",t)},expression:"coinForm.position"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"是否上架","label-width":e.formLabelWidth,prop:"isTrade"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.coinForm.isTrade,callback:function(t){e.$set(e.coinForm,"isTrade",t)},expression:"coinForm.isTrade"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"是否提币","label-width":e.formLabelWidth,prop:"isWithdraw"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.coinForm.isWithdraw,callback:function(t){e.$set(e.coinForm,"isWithdraw",t)},expression:"coinForm.isWithdraw"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"是否充币","label-width":e.formLabelWidth,prop:"isDeposit"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.coinForm.isDeposit,callback:function(t){e.$set(e.coinForm,"isDeposit",t)},expression:"coinForm.isDeposit"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"划转法币","label-width":e.formLabelWidth,prop:"isTransferOtc"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.coinForm.isTransferOtc,callback:function(t){e.$set(e.coinForm,"isTransferOtc",t)},expression:"coinForm.isTransferOtc"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"是否热门","label-width":e.formLabelWidth,prop:"hot"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.coinForm.hot,callback:function(t){e.$set(e.coinForm,"hot",t)},expression:"coinForm.hot"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"广告商提币状态","label-width":e.formLabelWidth,prop:"otcWithdrawSwitch"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.coinForm.otcWithdrawSwitch,callback:function(t){e.$set(e.coinForm,"otcWithdrawSwitch",t)},expression:"coinForm.otcWithdrawSwitch"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"广告商充币状态","label-width":e.formLabelWidth,prop:"otcDepositSwitch"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.coinForm.otcDepositSwitch,callback:function(t){e.$set(e.coinForm,"otcDepositSwitch",t)},expression:"coinForm.otcDepositSwitch"}})],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},a=[],n=(i("ac6a"),i("a481"),i("5530")),r=i("15fd"),s=(i("96cf"),i("1da1")),c=i("c249"),l=i("2fee"),u=i("f21b"),m=i("6f79"),p=i("4ec3"),h=(i("bc3a"),i("34da"),["id","coinId","tranOutFee","exchangeFee","fee_type","fee_ex_type","isDeposit","isWithdraw","isTrade","isTransferOtc","hot","otcWithdrawSwitch","otcDepositSwitch","publishTime","isOwnAmount"]),d={name:"Setting",components:{Btable:l["a"],Bsearch:c["a"],iconPage:u["a"]},data:function(){return{isCURDAuth:!0,btnLoading:!1,listLoading:!1,list:[],configs:[],searchCofig:[],search_params_obj:{},current_page:1,pageSize:this.$pageSize,total:0,pages:0,chainArr:[],formLabelWidth:"150px",dialogFormVisible:!1,coinForm:{id:"",coinId:"",coinName:"",englishDesc:"",chineseDesc:"",issuePrice:"",totalIssuance:"",totalCirculation:"",whitePaper:"",coinIntroduction:"",coinIntroductionEnglish:"",officialWebsite:"",position:"",blockchainBrowser:"",decimalPlaces:"",tranOutSingleMinAmount:"",tranOutSingleMaxAmount:"",tranOutDayMaxAmount:"",chainName:"erc20",tranOutFee:"",exchangeFee:"",exchangeOutSingleMinAmount:"",fee_type:"1",fee_ex_type:"1",iconUrl:"",isDeposit:!1,isWithdraw:!1,isTrade:!1,isTransferOtc:!1,hot:!1,otcWithdrawSwitch:!1,otcDepositSwitch:!1,publishTime:"",isOwnAmount:""},formName:"新增币种",imageUrl:"",rules:{exchangeFee:[{required:!0,message:"必填",trigger:"blur"}],coinName:[{required:!0,message:"必填",trigger:"blur"}],englishDesc:[{required:!0,message:"必填",trigger:"blur"}],chineseDesc:[{required:!0,message:"必填",trigger:"blur"}],decimalPlaces:[{required:!0,message:"必填",trigger:"blur"}],tranOutSingleMinAmount:[{required:!0,message:"必填",trigger:"blur"}],tranOutSingleMaxAmount:[{required:!0,message:"必填",trigger:"blur"}],tranOutDayMaxAmount:[{required:!0,message:"必填",trigger:"blur"}],tranOutFee:[{required:!0,message:"必填",trigger:"blur"}],iconUrl:[{required:!0,message:"必填",trigger:"blur"}],isOwnAmount:[{required:!0,message:"必填",trigger:"blur"}]}}},methods:{upload:function(e,t,i){if(!e.data)return this.$message.error("图片上传失败"),void this.$refs.coinel.clearFiles();this.coinForm.iconUrl=e.data[0].url,this.$refs.coinel.handleRemove(t),this.$refs.coinel.clearFiles()},uploadError:function(){this.$message.error("图片上传失败")},exceed:function(e,t){this.$message.error("单次只能选择一张图片进行上传！")},addCoin:function(){var e=this;this.formName="添加币种",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["coinForm"].resetFields(),e.coinForm={id:"",coinId:"",coinName:"",englishDesc:"",chineseDesc:"",issuePrice:"",totalIssuance:"",totalCirculation:"",whitePaper:"",coinIntroduction:"",coinIntroductionEnglish:"",officialWebsite:"",position:"",blockchainBrowser:"",decimalPlaces:"",tranOutSingleMinAmount:"",tranOutSingleMaxAmount:"",tranOutDayMaxAmount:"",chainName:"erc20",tranOutFee:"",exchangeFee:"",exchangeOutSingleMinAmount:"",fee_type:"1",fee_ex_type:"1",iconUrl:"",isDeposit:!1,isWithdraw:!1,isTrade:!1,isTransferOtc:!1,hot:!1,otcWithdrawSwitch:!1,otcDepositSwitch:!1,publishTime:"",isOwnAmount:""}}))},confirmOp:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["coinForm"].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(i){var o,a,s,c,l,u,m,d,f,b,g,w,F,v,x,O,_,k,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=10;break}return o=t.coinForm,a=o.id,s=o.coinId,c=o.tranOutFee,l=o.exchangeFee,u=o.fee_type,m=o.fee_ex_type,d=o.isDeposit,f=o.isWithdraw,b=o.isTrade,g=o.isTransferOtc,w=o.hot,F=o.otcWithdrawSwitch,v=o.otcDepositSwitch,x=o.publishTime,O=o.isOwnAmount,_=Object(r["a"])(o,h),k=Object(n["a"])({tranOutFee:"1"===m?c+"%":c,exchangeFee:"1"===u?l+"%":l,isDeposit:d?1:0,isWithdraw:f?1:0,isTrade:b?1:0,isTransferOtc:g?1:0,hot:w?1:0,otcWithdrawSwitch:F?1:0,otcDepositSwitch:v?1:0,isOtc:0,publishTime:t.formatTime(x),isOwnAmount:+O},_),""===a?Object.assign(k,{updateOrAdd:1}):Object.assign(k,{id:a,coinId:s,updateOrAdd:2}),t.btnLoading=!0,e.next=7,p["a"].addUpdateCoin(k);case 7:y=e.sent,y&&(t.$message({message:y.data.message,type:"success"}),t.dialogFormVisible=!1,t.getList()),t.btnLoading=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:this.$util.dateFormat(e,"YYYY-MM-DD HH:mm:ss")},doHandle:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var i,o,a,n,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.fn,o=t.row,"switchTrade"!==i&&"switchDeposit"!==i&&"switchWithdraw"!==i&&"trhot"!==i){e.next=9;break}return a={switchTrade:function(){return{isTrade:o.isTrade?1:0}},switchDeposit:function(){return{isDeposit:o.isDeposit?1:0}},switchWithdraw:function(){return{isWithdraw:o.isWithdraw?1:0}},trhot:function(){return{hot:o.hot?1:0}}},n={id:o.id,updateOrAdd:2},Object.assign(n,a[i]()),e.next=7,p["a"].addUpdateCoin(n);case 7:r=e.sent,r?this.$message({message:r.data.message,type:"success"}):this.getList();case 9:"edit"===i&&(this.formName="编辑币种",this.dialogFormVisible=!0,this.$nextTick((function(){s.$refs["coinForm"].resetFields();var e=o.id,t=o.coinId,i=o.coinName,a=o.englishDesc,n=o.chineseDesc,r=o.issuePrice,c=o.totalIssuance,l=o.totalCirculation,u=o.whitePaper,m=o.coinIntroduction,p=o.coinIntroductionEnglish,h=o.officialWebsite,d=o.position,f=o.blockchainBrowser,b=o.decimalPlaces,g=o.tranOutSingleMinAmount,w=o.tranOutSingleMaxAmount,F=o.tranOutDayMaxAmount,v=o.chainName,x=o.tranOutFee,O=o.exchangeFee,_=o.iconUrl,k=o.isDeposit,y=o.isWithdraw,W=o.isTrade,S=o.isTransferOtc,A=o.hot,D=o.otcWithdrawSwitch,$=o.otcDepositSwitch,L=o.exchangeOutSingleMinAmount,T=o.publishTime,M=o.isOwnAmount;s.coinForm={id:e,coinId:t,coinName:i,englishDesc:a,chineseDesc:n,issuePrice:r,totalIssuance:c,totalCirculation:l,whitePaper:u,coinIntroduction:m,coinIntroductionEnglish:p,officialWebsite:h,position:d,blockchainBrowser:f,decimalPlaces:b,tranOutSingleMinAmount:g,tranOutSingleMaxAmount:w,tranOutDayMaxAmount:F,chainName:v,iconUrl:_,isDeposit:k,isWithdraw:y,isTrade:W,publishTime:T,isTransferOtc:S,hot:A,otcWithdrawSwitch:D,otcDepositSwitch:$,exchangeOutSingleMinAmount:L,isOwnAmount:M,fee_type:O&&-1===(O+"").indexOf("%")?"2":"1",fee_ex_type:x&&-1===(x+"").indexOf("%")?"2":"1",exchangeFee:-1!==(O+"").indexOf("%")?O.replace(/\%/,""):O,tranOutFee:-1!==(x+"").indexOf("%")?x.replace(/\%/,""):x}})));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkVal:function(e){"fee_ex_type"===e?"1"==this.coinForm.fee_ex_type&&(this.coinForm.tranOutFee=this.coinForm.tranOutFee>100?100:this.coinForm.tranOutFee):"fee_type"===e?"1"==this.coinForm.fee_type&&(this.coinForm.exchangeFee=this.coinForm.exchangeFee>100?100:this.coinForm.exchangeFee):this.coinForm.exchangeOutSingleMinAmount=this.coinForm.exchangeOutSingleMinAmount,this.coinForm[e]<0&&(this.coinForm[e]=0)},doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getChainList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"].getChainList({});case 2:t=e.sent,t&&(this.chainArr=t.data.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,i,o,a,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return t={pageNum:this.current_page,pageSize:this.pageSize},Object.assign(t,this.search_params_obj),this.listLoading=!0,e.next=7,p["a"].getCoinListFormal(t);case 7:i=e.sent,i&&(o=i.data.data,a=o.records,n=o.total,r=o.current,s=o.pages,this.total=n,this.pages=s,this.current_page=r,a.forEach((function(e){e["isTrade"]=!!e["isTrade"],e["isDeposit"]=!!e["isDeposit"],e["isWithdraw"]=!!e["isWithdraw"],e["isTransferOtc"]=!!e["isTransferOtc"],e["hot"]=!!e["hot"],e["otcWithdrawSwitch"]=!!e["otcWithdrawSwitch"],e["otcDepositSwitch"]=!!e["otcDepositSwitch"]})),this.list=a,this.listLoading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$util.getAuthority("Setting",m["c"],m["d"]),this.configs=t.val,this.isCURDAuth=t.isAdd,this.searchCofig=this.$util.clone(m["e"]),this.$store.dispatch("common/getCoinList").then((function(){i.searchCofig[0]["list"]=i.$store.state.common.coinlist})),this.getChainList(),this.getList();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),created:function(){}},f=d,b=(i("bd36"),i("2877")),g=Object(b["a"])(f,o,a,!1,null,null,null);t["default"]=g.exports},bd36:function(e,t,i){"use strict";i("5a25")}}]);