(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{495:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),l=r(102);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},dialogVisible:!1,infoLoadEngine:null,block_ids:[],game_status:{isGaming:null,isBetting:null,track_win:null,iteration:null},racetracks:[]}},computed:c({},Object(l.d)("deck",{list:function(t){return t.list_rooms}})),methods:c({},Object(l.b)({createDeck:"deck/createDeck",joinDeck:"deck/joinDeck"}))},v=r(65),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-button",{attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("\n    新增卡组\n  ")]),t._v(" "),r("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"卡组名称"}},[r("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.createDeck(t.form.name)}}},[t._v("立即创建")]),t._v(" "),r("el-button",[t._v("取消")])],1)],1)],1),t._v(" "),r("br"),t._v(" "),r("el-card",{staticStyle:{"margin-top":"10px","font-family":"'Noto Serif SC', serif"}},[r("div",{attrs:{slot:"header"},slot:"header"},[t._v("游戏状态信息")]),t._v(" "),r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[t._v("赛马信息:")]),t._v(" "),r("span",[t._v("本轮获胜🐎:\n        "+t._s(t.game_status.track_win&&t.game_status.track_win.length?t.game_status.track_win:"暂未分出胜负"))]),t._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.racetracks,height:"220"}},[r("el-table-column",{attrs:{prop:"total_token",label:"总下注量","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"distance",label:"跑出距离","show-overflow-tooltip":""}})],1)],1),t._v(" "),r("el-card",{staticStyle:{"margin-top":"10px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[t._v("游戏状态:")]),t._v(" "),r("div",[r("div",[t._v("\n          游戏状态："+t._s(t.game_status.isGaming?"比赛开始":"等待开始")+"\n        ")]),t._v(" "),r("div",[t._v("\n          下注状态："+t._s(t.game_status.isBetting?"可以下注":"下注停止")+"\n        ")]),t._v(" "),r("div",[t._v("\n          结算状态："+t._s(t.game_status.isGaming||t.game_status.isBetting?"未开始结算":"结算冷却时间")+"\n        ")]),t._v(" "),r("div",[t._v("游戏局数：第 "+t._s(t.game_status.iteration)+" 局")])])]),t._v(" "),r("el-card",{staticStyle:{"margin-top":"10px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[t._v("选用的BlockID:")]),t._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.block_ids,height:"150"}},[r("el-table-column",{attrs:{prop:"blockid",label:"BlockID","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"time",label:"Time","show-overflow-tooltip":""}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);