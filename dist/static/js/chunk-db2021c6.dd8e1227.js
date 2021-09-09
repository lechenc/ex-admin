(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db2021c6"],{"32a6":function(e,t,r){var a=r("241e"),o=r("c3a1");r("ce7e")("keys",(function(){return function(e){return o(a(e))}}))},"3abc":function(e,t,r){},6016:function(e,t,r){"use strict";r.d(t,"n",(function(){return F})),r.d(t,"o",(function(){return k})),r.d(t,"p",(function(){return S})),r.d(t,"g",(function(){return w})),r.d(t,"h",(function(){return x})),r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return y})),r.d(t,"k",(function(){return f})),r.d(t,"l",(function(){return h})),r.d(t,"m",(function(){return g})),r.d(t,"q",(function(){return b})),r.d(t,"r",(function(){return d})),r.d(t,"s",(function(){return m})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return i})),r.d(t,"i",(function(){return n})),r.d(t,"j",(function(){return p})),r.d(t,"v",(function(){return u})),r.d(t,"u",(function(){return c})),r.d(t,"t",(function(){return s}));var a=[{label:"订单号",prop:"orderNo"},{label:"交易账户",prop:"uid"},{label:"交易产品",prop:"symbolKey"},{label:"买或卖",prop:"directionString"},{label:"交易量",prop:"numberString"},{label:"手续费",type:"fixedValue",val:"0"},{label:"过夜利息",prop:"interestString"},{label:"盈亏",prop:"profitLossString"},{label:"开仓时间",prop:"openTime"},{label:"开仓价格",prop:"openPriceString"},{label:"平仓时间",prop:"closeTime"},{label:"平仓类型",prop:"typeString"},{label:"平仓价格",prop:"closePriceString"}],o=[{type:"date_rank",label:"平仓时间",prop:"closeStartTime",prop2:"closeEndTime",value:""},{type:"onlyNumber",label:"交易账户",prop:"uid",value:""},{type:"text",label:"订单号",prop:"orderId",value:""},{type:"select",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"平仓类型",prop:"type",value:"",list:[{label:"正常平仓",value:0},{label:"爆仓",value:1}]}],l=[{label:"订单号",prop:"orderId"},{label:"交易账户",prop:"uid"},{label:"交易产品",prop:"symbolKey"},{label:"委托类型",prop:"dealTypeString"},{label:"委托状态",prop:"statusString"},{label:"委托价格",prop:"priceString"},{label:"委托量",prop:"handNumString"},{label:"委托方向",prop:"dealDirectionString"},{label:"止盈价格",prop:"profitPriceString"},{label:"止损价格",prop:"lossPriceString"},{label:"委托时间",prop:"orderTime"},{label:"委托期限",prop:"termValidityTime"}],i=[{type:"date_rank",label:"委托时间",prop:"orderStartTime",prop2:"orderEndTime",value:""},{type:"text",label:"订单号",prop:"orderId",value:""},{type:"select",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"委托类型",prop:"dealType",value:"",list:[{label:"市价开仓",value:0},{label:"限价开仓",value:1}]},{type:"select",label:"委托状态",prop:"status",value:"",list:[{value:"0",label:"待成交"},{value:"1",label:"已成交"},{value:"2",label:"已删除"}]},{type:"select",label:"委托方向",prop:"dealDirection",value:"",list:[{label:"卖",value:0},{label:"买",value:1}]}],n=[{label:"订单号",prop:"orderNo"},{label:"交易账户",prop:"uid"},{label:"交易产品",prop:"symbolKey"},{label:"买或卖",prop:"directionString"},{label:"交易量",prop:"holdVolString"},{label:"开仓时间",prop:"openTime"},{label:"开仓价格",prop:"openPriceString"},{label:"手续费",type:"fixedValue",val:"0"},{label:"过夜利息",prop:"interestString"},{label:"盈亏",prop:"profitLossString"}],p=[{type:"date_rank",label:"开仓时间",prop:"openStartTime",prop2:"openEndTime",value:""},{type:"onlyNumber",label:"交易账户",prop:"uid",value:""},{type:"text",label:"订单号",prop:"orderId",value:""},{type:"select",label:"交易产品",prop:"foreignId",value:"",list:[]},{type:"select",label:"买或卖",prop:"dealDirection",value:"",list:[{label:"卖",value:0},{label:"买",value:1}]}],s=[{label:"机器人ID",prop:"id"},{label:"交易产品",prop:"symbolKey"},{label:"下单最小值",prop:"minVol"},{label:"下单最大值",prop:"maxVol"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"},{label:"启动状态",prop:"enable",width:"120",type:"switch",fn:"trswitch",alias:"trswitch"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],c=[{label:"机器人ID",prop:"id"},{label:"交易产品",prop:"symbolKey"},{label:"下单最小值",prop:"minVol"},{label:"下单最大值",prop:"maxVol"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"}],u=[{type:"select",label:"交易产品",prop:"foreignId",value:"",list:[]}],b=[{label:"资产",prop:"name"},{label:"入金汇率",prop:"rateIn"},{label:"出金汇率",prop:"rateOut"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"},{label:"手动配置开关",prop:"enable",width:"120",type:"switch",fn:"trswitch",alias:"trswitch"},{label:"操作",prop:"action",type:"action",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],d=[{label:"资产",prop:"name"},{label:"入金汇率",prop:"rateIn"},{label:"出金汇率",prop:"rateOut"},{label:"创建时间",prop:"created"},{label:"更新时间",prop:"updated"}],m=[{type:"text",label:"资产",prop:"name",value:""}],f=[{label:"ID",prop:"id"},{label:"icon",prop:"iconUrl",type:"img"},{label:"交易品种",prop:"symbol"},{label:"中文名称",prop:"chineseName"},{label:"每手合约交易大小",prop:"minVol"},{label:"建议点差",prop:"priceDiff"},{label:"持仓手数数范围区间",arr:["orderCounterQtyStep","maxVol"],type:"textArr",join:"-"},{label:"杠杆倍数",prop:"multiple"},{label:"挂单距离限制",prop:"dealDistance"},{label:"百分比强平率",prop:"closeRate",type:"afterJoin",join:"%",nothingValue:"0"},{label:"价格小数位",prop:"decimalVol"},{label:"排序",prop:"rank"},{label:"上架",prop:"headblock",width:"120",type:"switch",fn:"trHeadblockSwitch",alias:"trHeadblockSwitch"},{label:"交易",prop:"trade",width:"120",type:"switch",fn:"trTradeSwitch",alias:"trTradeSwitch"},{label:"操作",prop:"action",type:"action",width:"130",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],h=[{label:"ID",prop:"id"},{label:"icon",prop:"iconUrl",type:"img"},{label:"交易品种",prop:"symbol"},{label:"中文名称",prop:"chineseName"},{label:"每手合约交易大小",prop:"minVol"},{label:"建议点差",prop:"priceDiff"},{label:"持仓手数数范围区间",arr:["orderCounterQtyStep","maxVol"],type:"textArr",join:"-"},{label:"杠杆倍数",prop:"multiple"},{label:"挂单距离限制",prop:"dealDistance"},{label:"百分比强平率",prop:"closeRate",type:"afterJoin",join:"%"},{label:"价格小数位",prop:"decimalVol"},{label:"排序",prop:"rank"}],g=[{type:"select",label:"是否上架",prop:"headblock",value:"",list:[{label:"是",value:"y"},{label:"否",value:"n"}]},{type:"select",label:"是否开启交易",prop:"trade",value:"",list:[{label:"是",value:"y"},{label:"否",value:"n"}]}],v=[{label:"时间",prop:"created"},{label:"交易账户",prop:"uid"},{label:"交易产品",prop:"symbol"},{label:"类型",prop:"type",type:"filter",show_type:"text",width:100,filters:[{text:"平仓",val:1},{text:"爆仓",val:2},{text:"币汇划入",val:3},{text:"币汇转出",val:4},{text:"手续费",val:5},{text:"隔夜费用",val:6}]},{label:"变动金额",prop:"changePrice"},{label:"变动前账户余额",prop:"beforePrice"},{label:"变动前账户余额",prop:"afterPrice"},{label:"订单号",prop:"orderNo"}],y=[{type:"date_rank",label:"时间",prop:"startTime",prop2:"endTime",value:""},{type:"onlyNumber",label:"交易账户",prop:"uid",value:""},{type:"select",label:"交易产品",prop:"forexId",value:"",list:[]},{type:"text",label:"订单号",prop:"orderNo",value:""},{type:"select",label:"类型",prop:"type",value:"",list:[{label:"平仓",value:1},{label:"爆仓",value:2},{label:"币汇划入",value:3},{label:"币汇转出",value:4},{label:"手续费",value:5},{label:"隔夜费用",value:6}]}],w=[{label:"交易账户",prop:"uid"},{label:"余额",prop:"usable"},{label:"变动金额",prop:"field"},{label:"保证金比列",prop:"rate"}],x=[{type:"onlyNumber",label:"交易账户",prop:"uid",value:""}],F=[{label:"id",prop:"id"},{label:"交易产品",prop:"symbol"},{label:"多头隔夜费率",prop:"doServiceCharge",type:"afterJoin",join:"%",nothingValue:"0"},{label:"空头隔夜费率",prop:"koServiceCharge",type:"afterJoin",join:"%",nothingValue:"0"},{label:"触发费率时间",prop:"beginTime"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"是否开启",prop:"costType",type:"filter",show_type:"text",width:140,filters:[{val:"0",text:"否"},{val:"1",text:"是"}]},{label:"操作",prop:"action",type:"action",width:"130",btnGroup:[{label:"编辑",fn:"edit",type:"primary",alias:"edit"}]}],k=[{label:"id",prop:"id"},{label:"交易产品",prop:"symbol"},{label:"多头隔夜费率",prop:"doServiceCharge"},{label:"空头隔夜费率",prop:"koServiceCharge"},{label:"触发费率时间",prop:"beginTime"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{label:"是否开启",prop:"costType",type:"filter",show_type:"text",width:140,filters:[{val:"0",text:"否"},{val:"1",text:"是"}]}],S=[{type:"select",label:"交易产品",prop:"forexId",value:"",list:[]},{type:"select",label:"是否开启",prop:"costType",value:"",list:[{label:"否",value:0},{label:"是",value:1}]}]},"638b":function(e,t,r){"use strict";var a=r("3abc"),o=r.n(a);o.a},7514:function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(5),l="find",i=!0;l in[]&&Array(1)[l]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(l)},"87f3":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},9278:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";var a=r("e265"),o=r.n(a),l=r("a4bb"),i=r.n(l);function n(e,t){if(null==e)return{};var r,a,o={},l=i()(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}function p(e,t){if(null==e)return{};var r,a,l=n(e,t);if(o.a){var i=o()(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}r.d(t,"a",(function(){return p}))},b7a1:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"coinForexPairsConfigs-container"},[r("div",{staticClass:"container-top"},[r("Bsearch",{attrs:{configs:e.searchCofig},on:{"do-search":e.doSearch,"do-reset":e.doReset}})],1),e._v(" "),r("div",[r("Btable",{attrs:{listLoading:e.listLoading,data:e.list,configs:e.configs},on:{"do-handle":e.doHandle}})],1),e._v(" "),r("div",{staticClass:"container-footer"},[r("icon-page",{attrs:{total:e.total,pages:e.pages}}),e._v(" "),r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.current_page,"page-size":e.pageSize,total:e.total},on:{"current-change":e.goPage}})],1),e._v(" "),r("el-dialog",{attrs:{width:"600px",title:e.formName,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"robotForm",attrs:{model:e.robotForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"交易品种","label-width":e.formLabelWidth,prop:"symbol"}},[r("el-select",{attrs:{placeholder:"",wdith:"20%",disabled:!!e.robotForm.id},model:{value:e.robotForm.symbol,callback:function(t){e.$set(e.robotForm,"symbol",t)},expression:"robotForm.symbol"}},e._l(e.coinForexList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"icon","label-width":e.formLabelWidth,prop:"iconUrl"}},[r("el-input",{attrs:{size:"small",placeholder:"只能上传jpg/png文件，且不超过2m"},model:{value:e.robotForm.iconUrl,callback:function(t){e.$set(e.robotForm,"iconUrl",t)},expression:"robotForm.iconUrl"}},[r("el-upload",{ref:"coinel",attrs:{slot:"append","before-upload":e.beforeUpload,action:e.$img_api,multiple:"",name:"file",data:{type:"exchange"},"show-file-list":!0,"on-success":e.upload,"on-error":e.uploadError,limit:1,"on-exceed":e.exceed,accept:".png,.jpg"},slot:"append"},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"中文名称","label-width":e.formLabelWidth,prop:"chineseName"}},[r("el-input",{attrs:{autocomplete:"off",type:"text"},model:{value:e.robotForm.chineseName,callback:function(t){e.$set(e.robotForm,"chineseName",t)},expression:"robotForm.chineseName"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:24}},[r("b-two-range-choose",{ref:"twoChoose",attrs:{labelWidth:e.formLabelWidth,labelWords:"持仓手数数范围区间",getVal1:e.robotForm.orderCounterQtyStep,getVal2:e.robotForm.maxVol,isdisabled:!1},on:{"update:getVal1":function(t){return e.$set(e.robotForm,"orderCounterQtyStep",t)},"update:get-val1":function(t){return e.$set(e.robotForm,"orderCounterQtyStep",t)},"update:getVal2":function(t){return e.$set(e.robotForm,"maxVol",t)},"update:get-val2":function(t){return e.$set(e.robotForm,"maxVol",t)},handler:e.getRangeVal}})],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"建议点差","label-width":e.formLabelWidth,prop:"priceDiff"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("priceDiff")}},model:{value:e.robotForm.priceDiff,callback:function(t){e.$set(e.robotForm,"priceDiff",t)},expression:"robotForm.priceDiff"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"每手合约交易大小","label-width":e.formLabelWidth,prop:"minVol"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("minVol")}},model:{value:e.robotForm.minVol,callback:function(t){e.$set(e.robotForm,"minVol",t)},expression:"robotForm.minVol"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"挂单距离限制","label-width":e.formLabelWidth,prop:"dealDistance"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("dealDistance")}},model:{value:e.robotForm.dealDistance,callback:function(t){e.$set(e.robotForm,"dealDistance",t)},expression:"robotForm.dealDistance"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"价格小数位","label-width":e.formLabelWidth,prop:"decimalVol"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("decimalVol")}},model:{value:e.robotForm.decimalVol,callback:function(t){e.$set(e.robotForm,"decimalVol",t)},expression:"robotForm.decimalVol"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"排序","label-width":e.formLabelWidth,prop:"rank"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("rank")}},model:{value:e.robotForm.rank,callback:function(t){e.$set(e.robotForm,"rank",t)},expression:"robotForm.rank"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"杠杆倍数","label-width":e.formLabelWidth,prop:"multiple"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("multiple")}},model:{value:e.robotForm.multiple,callback:function(t){e.$set(e.robotForm,"multiple",t)},expression:"robotForm.multiple"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"强平保证金率","label-width":e.formLabelWidth,prop:"closeRate"}},[r("el-input",{attrs:{autocomplete:"off",type:"number"},on:{input:function(t){return e.checkVal("closeRate")}},model:{value:e.robotForm.closeRate,callback:function(t){e.$set(e.robotForm,"closeRate",t)},expression:"robotForm.closeRate"}},[r("template",{slot:"append"},[e._v("%")])],2)],1)],1)],1),e._v(" "),r("el-row",{attrs:{span:24}},[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"是否上架","label-width":e.formLabelWidth,prop:"headblock"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.robotForm.headblock,callback:function(t){e.$set(e.robotForm,"headblock",t)},expression:"robotForm.headblock"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"是否交易","label-width":e.formLabelWidth,prop:"trade"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.robotForm.trade,callback:function(t){e.$set(e.robotForm,"trade",t)},expression:"robotForm.trade"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmOp}},[e._v("确 定")])],1)],1)],1)},o=[],l=(r("8e6e"),r("456d"),r("a481"),r("ac6a"),r("bd86")),i=r("a8db"),n=(r("96cf"),r("3b8d")),p=(r("7f7f"),r("c249")),s=r("2fee"),c=r("f21b"),u=r("6016"),b=r("4ec3"),d=r("ae7b");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={name:"CoinForexPairsConfigs",components:{Btable:s["a"],Bsearch:p["a"],iconPage:c["a"],BTwoRangeChoose:d["a"]},data:function(){return{searchCofig:[],btnLoading:!1,listLoading:!1,list:[],configs:[],searchConfig:[],search_params_obj:{},current_page:1,pages:0,pageSize:10,total:0,toDay:"",ago:"",btnArr:[],formName:"",robotForm:{},rules:{symbol:[{required:!0,message:"必选",trigger:"blur"}],iconUrl:[{required:!0,message:"必填",trigger:"change"}],chineseName:[{required:!0,message:"必填",trigger:"change"}],priceDiff:[{required:!0,message:"必填",trigger:"change"}],minVol:[{required:!0,message:"必填",trigger:"change"}],dealDistance:[{required:!0,message:"必填",trigger:"change"}],decimalVol:[{required:!0,message:"必填",trigger:"change"}],rank:[{required:!0,message:"必填",trigger:"change"}],multiple:[{required:!0,message:"必填",trigger:"change"}],closeRate:[{required:!0,message:"必填",trigger:"change"}]},formLabelWidth:"170px",userArr:[],coinForexList:[],dialogFormVisible:!1}},methods:{checkVal:function(e){this.robotForm[e]<0&&(this.robotForm[e]=0)},beforeUpload:function(e){var t=e.name.substring(e.name.lastIndexOf(".")+1),r="jpg"===t||"png"===t,a=e.size/1024/1024<2;return r||this.$message({message:"上传文件只能是 jpg、png格式!",type:"error"}),a||this.$message({message:"上传文件大小不能超过 2MB!",type:"error"}),r&&a},getRangeVal:function(e){console.log("val",e)},upload:function(e,t,r){if(!e.data)return this.$message.error("图片上传失败"),void this.$refs.coinel.clearFiles();this.robotForm.iconUrl=e.data[0].url,this.$refs.coinel.handleRemove(t),this.$refs.coinel.clearFiles()},uploadError:function(){this.$message.error("图片上传失败")},exceed:function(e,t){this.$message.error("单次只能选择一张图片进行上传！")},addRobot:function(){var e=this;this.formName="添加币汇交易对",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["robotForm"].resetFields(),e.robotForm={id:"",symbol:"",iconUrl:"",chineseName:"",orderCounterQtyStep:"",maxVol:"",priceDiff:"",minVol:"",dealDistance:"",decimalVol:"",rank:"",multiple:"",closeRate:"",headblock:"",trade:""}}))},confirmOp:function(){var e=this;this.$refs["twoChoose"].validateValue()&&this.$refs["robotForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,l,n,p,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=15;break}if(a=e.robotForm,o=a.id,l=a.headblock,n=a.trade,p=Object(i["a"])(a,["id","headblock","trade"]),s=f({headblock:l?"Y":"N",trade:n?"Y":"N"},p),o){t.next=9;break}return t.next=6,b["a"].apiEditCoinForexPairsConfigs(s);case 6:t.t0=t.sent,t.next=12;break;case 9:return t.next=11,b["a"].apiEditCoinForexPairsConfigs(f({id:o},s));case 11:t.t0=t.sent;case 12:c=t.t0,c&&(o?"编辑成功":"添加成功",e.$message({message:c.data.message,type:"success"}),e.dialogFormVisible=!1,e.getList()),e.btnLoading=!1;case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},doHandle:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,l,i,n,p,s,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.fn,a=t.row,"edit"===r&&(this.formName="编辑币汇交易对",this.dialogFormVisible=!0,this.$nextTick((function(){c.$refs["robotForm"].resetFields();var e=a.id,t=a.symbol,r=a.iconUrl,o=a.chineseName,l=a.orderCounterQtyStep,i=a.maxVol,n=a.priceDiff,p=a.minVol,s=a.dealDistance,u=a.decimalVol,b=a.rank,d=a.multiple,m=a.closeRate,f=a.headblock,h=a.trade;c.robotForm={id:e,symbol:t,iconUrl:r,chineseName:o,orderCounterQtyStep:l,maxVol:i,priceDiff:n,minVol:p,dealDistance:s,decimalVol:u,rank:b,multiple:d,closeRate:m,headblock:f,trade:h}}))),"trHeadblockSwitch"!==r&&"trTradeSwitch"!==r){e.next=11;break}return o=a.headblock,l=a.trade,i=a.id,n=a.symbol,p={headblock:o?"Y":"N",trade:l?"Y":"N",id:i,symbol:n},this.listLoading=!0,e.next=8,b["a"].apiCoinForexPairsConfigsSwitch(p);case 8:s=e.sent,s?(this.$message({message:"切换成功",type:"success"}),this.getList()):this.getList(),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doSearch:function(e){this.current_page=1,this.search_params_obj=e,this.search_params_obj.startTime||this.search_params_obj.endTime||(this.search_params_obj.flag=1),this.getList()},doReset:function(){this.search_params_obj={},this.searchCofig.forEach((function(e){e["value"]=""})),this.getList()},goPage:function(e){this.current_page=e,this.getList()},getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a,o,l,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.listLoading){e.next=2;break}return e.abrupt("return");case 2:return this.listLoading=!0,t={pageNum:this.current_page,pageSize:this.pageSize},this.requiredParams(this.search_params_obj),Object.assign(t,this.search_params_obj),e.next=8,b["a"].getCoinForexPairsConfigsList(t);case 8:r=e.sent,r&&(a=r.data.data,o=a.records,l=a.current,i=a.total,n=a.pages,this.total=i,this.pages=n,this.current_page=l,this.list=o,o.forEach((function(e){e["headblock"]="Y"===e["headblock"],e["trade"]="Y"===e["trade"]})),this.list=o),this.listLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),formatTime:function(e){return~(e+"").indexOf("-")?e:e.replace(/\//gi,"-")},requiredParams:function(e){},getCoinForexList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("common/getCoinForexList").then((function(){t.coinForexList=t.$store.state.common.coinForexList,t.searchCofig[0]["list"]=t.coinForexList}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this.$util.getAuthority("CoinForexPairsConfigs",u["k"],u["l"]);this.btnArr=e.btnArr||[],this.configs=e.val,this.searchCofig=u["m"],this.toDay=this.$util.diyTime("toDay"),this.ago=this.$util.diyTime("ago"),this.getList()}},g=h,v=(r("638b"),r("0c7c")),y=Object(v["a"])(g,a,o,!1,null,null,null);t["default"]=y.exports},c270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoQ+1ZMU7EMBC0BaKipYKaXyAFHkKRh0XiGzRY4gE0dLTQcDUlZ5TIiTZRNp4JTiB3vu6i9dqzM7ubja3Z+M9u/PzmsAAUlX+ay4gr7W27tqi8M8b4+r98Ln2n2qvHQHBazAHhStv5KirfHD4AGGVZ2pD7ORmUwwUgI6pFiI00y9JAci2rGAMZQAifxhLCXjIG2ENoCRqT0E3lL06MeREF4EpUtvkSWhnAZzj0hyttBjBZollmFE3Xza4p57WEpM1zaXdJJMSWUSRBEZtkSbxJAGR772RQr2OrELkX1shIpxkAETCdAcIJbMomK+w4GC4+0GQAEUqSzQNyn9g7z/BMSEMUa5apQhlAiIDGHsRA7F1lqklpUkXkhCS6sMHKKKlLNdUygBAamgG2oSD27KcUZC5fvJFpeYUA3jyAs1NzPgb08d5+tc+TNTKg/PXOEovu3YO/3H+b9xEAb6601xnAMDILMfA6wsAOYiBG8bCpIQA0n0gj05JezYEMYCRkf8YA8lrBMsb2AagTywuOVO8wqRrZcQPQ6Eak9QupaJ9qsImM1TRSRhPNDEcCAKF+xTm4t9W/u6Uk5ReVEBv8xn5w0d1dmCMX3draiZzpLtVXHWhmRSayKANYIqqMzx/S2sFPO9G+rAAAAABJRU5ErkJggg=="},ce7e:function(e,t,r){var a=r("63b6"),o=r("584a"),l=r("294c");e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),a(a.S+a.F*l((function(){r(1)})),"Object",i)}},e265:function(e,t,r){e.exports=r("ed33")},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("28a5"),r("f576"),r("a481"),r("6b54");var a=r("7618");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var l={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},i=o.replace(/{([ymdhisa])+}/g,(function(e,t){var r=l[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return i=i.replace(/\//gi,"-"),i}},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},ff53:function(e,t,r){"use strict";var a=r("75fc");r("9278"),r("87f3"),r("a481"),r("6b54"),r("28a5"),r("c5f6");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function l(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function i(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=l(e);return t>0?o(Number(e)*Math.pow(10,t)):Number(e)}function n(e){d&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," is beyond boundary when transfer to integer, the results may not be accurate"))}function p(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),s=2;s<r;s++)o[s-2]=arguments[s];if(o.length>0)return p.apply(void 0,[p(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var c=i(e),u=i(t),b=l(e)+l(t),d=c*u;return n(d),d/Math.pow(10,b)}function s(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(o.length>0)return s.apply(void 0,[s(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var n=Math.pow(10,Math.max(l(e),l(t)));return(p(e,n)+p(t,n))/n}function c(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(o.length>0)return c.apply(void 0,[c(e,t),o[0]].concat(Object(a["a"])(o.slice(1))));var n=Math.pow(10,Math.max(l(e),l(t)));return(p(e,n)-p(t,n))/n}function u(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),c=2;c<r;c++)s[c-2]=arguments[c];if(s.length>0)return u.apply(void 0,[u(e,t),s[0]].concat(Object(a["a"])(s.slice(1))));var b=i(e),d=i(t);return n(b),n(d),p(b/d,o(Math.pow(10,l(t)-l(e))))}function b(e,t){var r=Math.pow(10,t);return u(Math.round(p(e,r)),r)}var d=!0;function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d=e}t["a"]={strip:o,plus:s,minus:c,times:p,divide:u,round:b,digitLength:l,float2Fixed:i,enableBoundaryChecking:m}}}]);