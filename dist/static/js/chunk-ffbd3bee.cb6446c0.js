(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffbd3bee"],{"2c32":function(t,e,a){},3881:function(t,e,a){"use strict";var i=a("2c32"),s=a.n(i);s.a},c1f3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[t._m(0),t._v(" "),a("h3",[t._v("风险提示")]),t._v(" "),a("ul",{staticClass:"inner-top"},t._l(t.riskRow,(function(e,i){return a("li",{key:i},[a("div",{staticClass:"subTitle"},[t._v(t._s(e.level)+"警报")]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(e.coinName||""))]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(e.amount||0)+"USDT")])])})),0),t._v(" "),a("h3",[t._v("盈亏统计")]),t._v(" "),a("div",{staticClass:"inner-con"},[a("div",{staticClass:"panel all"},[a("div",{staticClass:"line-header"},[t._v("盈亏统计")]),t._v(" "),a("div",{staticClass:"list-panel"},[a("div",{staticClass:"over-con"},[a("div",{staticClass:"con"},[a("div",[t._v("历史盈亏")]),t._v(" "),a("div",[t._v(t._s(t.curRow.profitAndLossHistory||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("昨日盈亏")]),t._v(" "),a("div",[t._v(t._s(t.curRow.yesterdayProfitAndLoss||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("上周盈亏")]),t._v(" "),a("div",[t._v(t._s(t.curRow.lastWeekProfitAndLoss||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("上月盈亏")]),t._v(" "),a("div",[t._v(t._s(t.curRow.lastMonthProfitAndLoss||0))])])])])]),t._v(" "),a("div",{staticClass:"panel"},[a("div",{staticClass:"line-header"},[t._v("\n        当前持仓实时盈亏\n        "),a("div",{staticClass:"chart-subHeader"},[a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择币对"},on:{change:t.changeProfitSelect},model:{value:t.selectProfit,callback:function(e){t.selectProfit=e},expression:"selectProfit"}},t._l(t.symbollist,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),a("div",{attrs:{label:"交易额统计"}},[a("div",{staticClass:"list-panel"},[a("div",{staticClass:"over-con"},[a("div",{staticClass:"con"},[a("div",[t._v("总盈亏")]),t._v(" "),a("div",[t._v(t._s(t.profitRow.profitAndLossSum||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("多仓盈亏")]),t._v(" "),a("div",[t._v(t._s(t.profitRow.mulitProfitAndLoss||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("空仓盈亏")]),t._v(" "),a("div",[t._v(t._s(t.profitRow.emptyProfitAndLoss||0))])])])])])]),t._v(" "),a("div",{staticClass:"panel"},[a("div",{staticClass:"line-header"},[t._v("\n        当日已实现实时盈亏\n        "),a("div",{staticClass:"chart-subHeader"},[a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择币对"},on:{change:t.changeDayProfitSelect},model:{value:t.selectDayProfit,callback:function(e){t.selectDayProfit=e},expression:"selectDayProfit"}},t._l(t.symbollist,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),a("div",{attrs:{label:"交易额统计"}},[a("div",{staticClass:"list-panel"},[a("div",{staticClass:"over-con"},[a("div",{staticClass:"con"},[a("div",[t._v("总盈亏")]),t._v(" "),a("div",[t._v(t._s(t.dayProfitRow.profitAndLossSum||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("多仓已实现盈亏")]),t._v(" "),a("div",[t._v(t._s(t.dayProfitRow.mulitProfitAndLoss||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("空仓已实现盈亏")]),t._v(" "),a("div",[t._v(t._s(t.dayProfitRow.emptyProfitAndLoss||0))])])])])])])]),t._v(" "),a("div",{staticClass:"inner-con"},[a("div",{staticClass:"panel all"},[a("ChartTable")],1),t._v(" "),t._m(1)]),t._v(" "),a("h3",[t._v("人数统计")]),t._v(" "),a("div",{staticClass:"inner-con"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"line-header"},[t._v("合约统计")]),t._v(" "),a("div",{staticClass:"list-panel"},[a("div",{staticClass:"over-con"},[a("div",{staticClass:"con"},[a("div",[t._v("开通合约人数")]),t._v(" "),a("div",[t._v(t._s(t.personRow.openContractNumber||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("历史交易人数")]),t._v(" "),a("div",[t._v(t._s(t.personRow.tradeNumber||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("初级实名认证人数")]),t._v(" "),a("div",[t._v(t._s(t.personRow.authenticationNameNumber||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("高级实名认证人数")]),t._v(" "),a("div",[t._v(t._s(t.personRow.advanceRealNameNumber||0))])])])])]),t._v(" "),a("div",{staticClass:"panel"},[a("div",{staticClass:"line-header"},[t._v("\n        当前实际活跃\n        "),a("div",{staticClass:"chart-subHeader"},[a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择币对"},on:{change:t.changeActivePersonSelect},model:{value:t.selectActivePerson,callback:function(e){t.selectActivePerson=e},expression:"selectActivePerson"}},t._l(t.symbollist,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),a("div",{attrs:{label:"交易额统计"}},[a("div",{staticClass:"list-panel"},[a("div",{staticClass:"over-con"},[a("div",{staticClass:"con"},[a("div",[t._v("持仓人数")]),t._v(" "),a("div",[t._v(t._s(t.activePersonRow.positionNumber||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("持多仓张数")]),t._v(" "),a("div",[t._v(t._s(t.activePersonRow.mulitPositionNumber||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("持空仓张数")]),t._v(" "),a("div",[t._v(t._s(t.activePersonRow.emptyPositionNumber||0))])])])])])])]),t._v(" "),a("h3",[t._v("数据统计")]),t._v(" "),a("div",{staticClass:"inner-con"},[a("div",{staticClass:"panel all"},[a("div",{staticClass:"line-header"},[t._v("\n        交易额统计\n        "),a("div",{staticClass:"chart-subHeader"},[a("el-date-picker",{attrs:{size:"small",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy/MM/dd HH:mm:ss","picker-options":t.$util.datePickerOptions({disabledDate:"aft"}),"default-time":["00:00:00","23:59:59"]},on:{change:t.listTradeAll},model:{value:t.tradeTime,callback:function(e){t.tradeTime=e},expression:"tradeTime"}})],1)]),t._v(" "),a("div",{staticClass:"list-panel"},[a("div",{staticClass:"over-con"},[a("div",{staticClass:"con"},[a("div",[t._v("交易额总量")]),t._v(" "),a("div",[t._v(t._s(t.tradeRow.tradeAmounSum||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("爆仓总额")]),t._v(" "),a("div",[t._v(t._s(t.tradeRow.burstAmountSum||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("资金费用总额")]),t._v(" "),a("div",[t._v(t._s(t.tradeRow.costAmountSum||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("手续费总额")]),t._v(" "),a("div",[t._v(t._s(t.tradeRow.feeAmountSum||0))])]),t._v(" "),a("div",{staticClass:"con"},[a("div",[t._v("实际到账手续费总额")]),t._v(" "),a("div",[t._v(t._s(t.tradeRow.realFeeAmountSum||0))])])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-top"},[a("div",{staticClass:"line"},[t._v("数据统计")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel all"},[a("div",{attrs:{id:"echarPie"}})])}],n=(a("c5f6"),a("ac6a"),a("a481"),a("96cf"),a("3b8d")),r=a("4ec3"),o=a("313e"),c=a.n(o),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chartStatistic-container"},[a("div",{staticClass:"inner-bottom"},[a("div",{staticClass:"chart-con"},[a("div",{staticClass:"chart-header"}),t._v(" "),a("div",{staticClass:"chart-subHeader"},[a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择"},on:{change:t.changeSelect},model:{value:t.selectStatus,callback:function(e){t.selectStatus=e},expression:"selectStatus"}},[a("el-option",{attrs:{label:"月线",value:3}}),t._v(" "),a("el-option",{attrs:{label:"周线",value:2}}),t._v(" "),a("el-option",{attrs:{label:"日线",value:1}})],1)],1),t._v(" "),a("div",{attrs:{id:"echarNow"}})])])])},d=[],v=(a("6c7b"),a("75fc")),u=(a("4f7f"),a("5df3"),a("1c4c"),a("ed08")),h={name:"ChartTable",data:function(){return{timer:-1,curRow:{},radioStatus:"one",selectStatus:1,isMove:!1,myChart:null,startPlace:null,endPlace:null,startTime:"",endTime:"",startTimeBefore:"",endTimeBefore:"",xDay:[],yDay:[],bbxDay:[],bbyDay:[],todayTime:0,interval:5,moveAddNum:1,moveDelNum:1,isAddDate:!0,getCoinName:[],startWeek:"",endWeek:"",startMonth:"",endMonth:"",colorArr:["#369AEC","#1B9C09","#FB6D03","#000","#ffff00","#FFCD43","#9B3B66","#728331","#1E38A1"],linePart:{name:"",data:[],type:"bar",smooth:!0,itemStyle:{normal:{color:"#275F82",lineStyle:{color:"#369AEC"}}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#3BB2F0"},{offset:1,color:"white"}],globalCoord:!1}}}},commonOption:{title:{text:"盈亏统计柱状图",left:"center"},legend:{data:["亏损","盈利"],left:"right"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],splitLine:{show:!1},name:"时间"},grid:{top:80,bottom:100},yAxis:{type:"value",name:"统计量",nameTextStyle:{fontWeight:600,fontSize:18}},tooltip:{trigger:"axis"},dataZoom:[{realtime:!0,type:"slider",show:!0,start:5,end:95,xAxisIndex:0,filterMode:"empty",dataZoomIndex:1}],series:[{name:"",data:[],type:"bar",smooth:!0,itemStyle:{normal:{color:"#275F82",lineStyle:{color:"#369AEC"}}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#3BB2F0"},{offset:1,color:"white"}],globalCoord:!1}}}}]},option:{}}},computed:{device:function(){return this.$store.state.app.device}},methods:{changeSelect:function(t){this.resetData(),this.selectStatus=parseInt(t),this.chartData()},resetData:function(){this.option=JSON.parse(JSON.stringify(this.commonOption)),this.xDay=[],this.yDay=[],this.moveAddNum=1,this.moveDelNum=1;var t=new Date,e=t.getFullYear(),a=parseInt(t.getMonth()),i=new Date(new Date(t).getTime()-864e5*(this.interval+1)).getDate();if(3==this.selectStatus||2==this.selectStatus){var s=new Date(new Date(t).getTime()).getDate();this.endTime=new Date(e,a,s),this.startTime=new Date(2019,0,1)}else 1==this.selectStatus&&(this.startTime=new Date(e,a,i),this.endTime=new Date(new Date(this.startTime).getTime()+864e5*(this.interval-1)));this.startTimeBefore=this.startTime,this.endTimeBefore=this.endTime,this.option.xAxis.data=[],this.option.series=[],this.option.series[0]=this.linePart,this.bbxDay=[],this.bbyDay=[],this.getCoinName=[],this.myChart&&this.myChart.clear()},chartData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={type:this.selectStatus},a.startTime=Object(u["a"])(this.startTime,"{y}-{m}-{d}"),a.endTime=Object(u["a"])(this.endTime,"{y}-{m}-{d}"),t.next=5,r["a"].getHistogram(a);case 5:e=t.sent,this.dealData(e);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dealData:function(t){var e=this;if(t){var a=t.data.data;if(a&&a.length>0){var i=1,s=[],n="";if(a.forEach((function(t){3==e.selectStatus?n="".concat(t.year,"年").concat(t.month,"月"):2==e.selectStatus?n="".concat(t.year,"年第").concat(parseInt(t.week)+1,"周"):1==e.selectStatus&&(n="".concat(t.createDate)),s.push(n)})),this.getCoinName=["lossAmount","profitAmount"],s=Array.from(new Set(s)),this.getCoinName.length>=1)return void this.dealDataMoreLine(a,i,s)}else{var r=Object(u["a"])(this.startTime,"{y}-{m}-{d}"),o=Object(u["a"])(this.endTime,"{y}-{m}-{d}");if(4==this.selectStatus){this.$message({type:"error",message:r+" 至 "+o+" 时间段无数据!",duration:2e3});for(var c=[],l=[],d=[],v=[],h=0;h<this.getCoinName.length;h++){d=[],v=[];for(var m=0;m<this.interval;m++){var f=new Date(new Date(this.startTime).getTime()+864e5*m);if(!(f>=this.todayTime)){var p=Object(u["a"])(f,"{y}-{m}-{d}")+"";d.push(p),v.push(0)}}c.push(d),l.push(v)}this.moreLineChart(c,l)}else this.$message({type:"error",message:"没有更多数据!",duration:2e3}),this.option.xAxis.data=[r,o],this.option.series[0].data=[];this.$nextTick((function(){e.graphical()}))}}},dealDataMoreLine:function(t,e,a){for(var i=this,s=[],n=[],r=[],o=[],c=function(e){if(s=[],n=[],1!=i.selectStatus){for(var c="",l=function(s){var r=a[s];c="",t.forEach((function(t){var a="";3==i.selectStatus?a="".concat(t.year,"年").concat(t.month,"月"):2==i.selectStatus&&(a="".concat(t.year,"年第").concat(parseInt(t.week)+1,"周")),a==r&&(c=Math.abs(i.numNoDot(t[i.getCoinName[e]])))})),c?n.push(c):n.push(0)},d=0;d<a.length;d++)l(d);s=a}else if(1==i.selectStatus)for(var v="",h=function(a){var r=new Date(new Date(i.startTime).getTime()+864e5*a);if(r>=i.todayTime)return"continue";var o=Object(u["a"])(r,"{y}-{m}-{d}")+"";v="",t.forEach((function(t){t.createDate==o&&(v=Math.abs(i.numNoDot(t[i.getCoinName[e]])))})),s.push(o),v?n.push(v):n.push(0)},m=0;m<i.interval;m++)h(m);r.push(s),o.push(n)},l=0;l<this.getCoinName.length;l++)c(l);this.moreLineChart(r,o)},moreLineChart:function(t,e){for(var a=this,i=["亏损","盈利"],s=0;s<e.length;s++){var n,r,o,c;if(this.bbxDay[s]||(this.bbxDay[s]=[]),this.bbyDay[s]||(this.bbyDay[s]=[]),this.isAddDate)(n=this.bbxDay[s]).push.apply(n,Object(v["a"])(t[s])),(r=this.bbyDay[s]).push.apply(r,Object(v["a"])(e[s]));else(o=this.bbxDay[s]).unshift.apply(o,Object(v["a"])(t[s])),(c=this.bbyDay[s]).unshift.apply(c,Object(v["a"])(e[s]));this.bbxDay[s]=Array.from(new Set(this.bbxDay[s])),this.option.series[s]=JSON.parse(JSON.stringify(this.linePart)),this.option.series[s].data=this.bbyDay[s],this.option.series[s].name=i[s],this.option.series[s].itemStyle.normal.lineStyle.color=this.colorArr[s],this.option.series[s].itemStyle.normal.color=this.colorArr[s],this.option.series[s].areaStyle.normal.color.colorStops[0].color=this.colorArr[s]}this.option.legend.data=i;for(var l=this.bbxDay[0]||[],d=-1,u=-1,h=0;h<this.bbxDay.length;h++)this.bbxDay[h].length<l.length?d=h:(l=this.bbxDay[h],u=h);if(d>-1)for(var m=0;m<this.bbxDay.length;m++)if(this.bbxDay[m].length<l.length){this.bbxDay[m]=l;var f=this.option.series[u].data.length-this.option.series[m].data.length;if(this.isAddDate){var p,y=new Array(f).fill(0);(p=this.option.series[m].data).unshift.apply(p,Object(v["a"])(y))}else this.option.series[m].data=this.option.series[m].data.concat(new Array(f).fill(0));this.bbyDay[m]=this.option.series[m].data}this.option.xAxis.data=l,this.option.dataZoom[0].show=1==this.selectStatus,this.$nextTick((function(){a.graphical()}))},graphical:function(){var t=this;this.myChart||(this.myChart=c.a.init(document.getElementById("echarNow")),window.addEventListener("resize",this.myChart.resize),this.myChart.on("dataZoom",(function(e){t.timer&&(clearTimeout(t.timer),t.timer=null),t.timer=setTimeout((function(){if(1==t.selectStatus){if(e.batch?(t.startPlace=e.batch[0].start,t.endPlace=e.batch[0].end):(t.startPlace=e.start,t.endPlace=e.end),t.endPlace>=99){if(t.isAddDate=!0,t.startTime=new Date(new Date(t.startTimeBefore).getTime()+864e5*t.interval*t.moveAddNum),t.endTime=new Date(new Date(t.endTimeBefore).getTime()+864e5*t.interval*t.moveAddNum),t.startTime.getTime()>t.todayTime)return void t.$message({type:"error",message:"未来的数据不可查看!",duration:2e3});t.moveAddNum++,t.chartData()}t.startPlace<=1&&(t.isAddDate=!1,t.startTime=new Date(new Date(t.startTimeBefore).getTime()-864e5*t.interval*t.moveDelNum),t.endTime=new Date(new Date(t.endTimeBefore).getTime()-864e5*t.interval*t.moveDelNum),t.moveDelNum++,t.chartData())}}),500)}))),this.myChart.setOption(this.option)},numNoDot:function(t){return(t+"").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")}},mounted:function(){this.resetData(),this.todayTime=new Date((new Date).getTime()-864e5),this.option=JSON.parse(JSON.stringify(this.commonOption)),this.chartData()}},m=h,f=(a("3881"),a("0c7c")),p=Object(f["a"])(m,l,d,!1,null,null,null),y=p.exports,_={name:"DataStatistics",components:{ChartTable:y},data:function(){return{curRow:{},radioStatus:"three",selectStatus:1,symbollist:[],selectProfit:"",selectDayProfit:"",selectActivePerson:"",tradeTime:"",profitRow:{},dayProfitRow:{},personRow:{},activePersonRow:{},riskRow:{},tradeRow:{},timer:null,myPieChart:null,option:{title:{text:"盈亏统计饼形图",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:[]},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},computed:{device:function(){return this.$store.state.app.device}},methods:{changeProfitSelect:function(t){this.selectProfit=t,this.listCurrentProfit()},changeDayProfitSelect:function(t){this.selectDayProfit=t,this.listDayProfit()},changeActivePersonSelect:function(t){this.selectActivePerson=t,this.listActivePerson()},listDetail:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r["a"].overviewStatistics({});case 2:if(e=t.sent,e&&(a=e.data.data,a)){for(s in i=a,i)i.hasOwnProperty(s)&&(i[s]=i[s]&&(i[s]+"").replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3")||0);this.curRow=i}case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listProfit:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r["a"].getProfitAndLoss({});case 2:e=t.sent,e&&(a=e.data.data,a&&(this.curRow=a));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listCurrentProfit:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={type:1},this.selectProfit&&(e.coinId=this.selectProfit),t.next=4,r["a"].getCurrentProfitAndLoss(e);case 4:a=t.sent,a&&(i=a.data.data,i&&(this.profitRow=i));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listDayProfit:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={type:2},this.selectDayProfit&&(e.coinId=this.selectDayProfit),t.next=4,r["a"].getCurrentProfitAndLoss(e);case 4:a=t.sent,a&&(i=a.data.data,i&&(this.dayProfitRow=i));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listPerson:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r["a"].getContractStatistics({});case 2:e=t.sent,e&&(a=e.data.data,a&&(this.personRow=a));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listActivePerson:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={},this.selectActivePerson&&(e.coinId=this.selectActivePerson),t.next=4,r["a"].getCurrentActive(e);case 4:a=t.sent,a&&(i=a.data.data,i&&(this.activePersonRow=i));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listRisk:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r["a"].getRiskStatement({});case 2:e=t.sent,e&&(a=e.data.data,a.length&&(this.riskRow=a));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listTradeAll:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={},this.tradeTime&&(e["startTime"]=this.tradeTime[0],e["endTime"]=this.tradeTime[1],e["startTime"]=this.formatTime(e["startTime"]),e["endTime"]=this.formatTime(e["endTime"])),t.next=4,r["a"].getTradeStatistics(e);case 4:a=t.sent,a&&(i=a.data.data,i&&(this.tradeRow=i));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPieData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,n,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r["a"].getProfitAndLossGraphicals({});case 2:e=t.sent,e&&(a=e.data.data&&e.data.data.coinRateVOList,i=[],s=[],n=1,a.forEach((function(t){n++,i.push({name:t.coinName||n+"mock",value:o.percentToNum(t.profitLossAmount)}),s.push(t.coinName||n+"mock")})),this.option.legend.data=s,this.option.series[0].data=i,this.graphical());case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),graphical:function(){this.myPieChart||(this.myPieChart=c.a.init(document.getElementById("echarPie"))),this.myPieChart.setOption(this.option)},formatTime:function(t){return~(t+"").indexOf("-")?t:t.replace(/\//gi,"-")},percentToNum:function(t){return-1!==(t+"").indexOf("%")&&(t=t.replace(/\%/,"")),Math.abs(Number(t))},getAllData:function(){var t=this;this.timer=setInterval((function(){t.listRisk(),t.listProfit(),t.listCurrentProfit(),t.listDayProfit(),t.listPerson(),t.listActivePerson(),t.listTradeAll()}),6e3)}},activated:function(){var t=this;this.$store.dispatch("common/getSymbolListContract").then((function(){var e=t.$store.state.common.symbollistContract;e.unshift({label:"全部",value:""}),t.symbollist=e,t.getAllData(),t.listRisk(),t.listProfit(),t.listCurrentProfit(),t.listDayProfit(),t.listPerson(),t.listActivePerson(),t.listTradeAll(),t.getPieData()}))},mounted:function(){var t=this;this.$store.dispatch("common/getSymbolListContract").then((function(){var e=t.$store.state.common.symbollistContract;e.unshift({label:"全部",value:""}),t.symbollist=e,t.getAllData(),t.listRisk(),t.listProfit(),t.listCurrentProfit(),t.listDayProfit(),t.listPerson(),t.listActivePerson(),t.listTradeAll(),t.getPieData()}))},destroyed:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},deactivated:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},b=_,g=(a("fdc8"),Object(f["a"])(b,i,s,!1,null,null,null));e["default"]=g.exports},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("28a5"),a("f576"),a("a481"),a("6b54");var i=a("7618");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{y}/{m}/{d} {h}:{i}:{s}";if(0===arguments.length)return null;var a,s=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(i["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var n={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},r=s.replace(/{([ymdhisa])+}/g,(function(t,e){var a=n[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return r=r.replace(/\//gi,"-"),r}},faa5:function(t,e,a){},fdc8:function(t,e,a){"use strict";var i=a("faa5"),s=a.n(i);s.a}}]);