(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c525"],{f379:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.linkList}},[n("el-table-column",{attrs:{label:"名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),n("el-table-column",{attrs:{label:"链接",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(e.row.href)}})]}}])}),n("el-table-column",{attrs:{label:"图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{attrs:{src:t.row.icon,height:"50",alt:""}})]}}])}),n("el-table-column",{attrs:{label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(e.row.des)}})]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v(" 删除 ")])]}}])})],1)],1)},s=[],l=n("365c"),o={name:"LinkDelete",data:function(){return{linkList:[]}},methods:{handleDelete:function(t,e){var n=this;Object(l["e"])(e._id).then((function(t){0===t.data.code?(n.$message({message:t.data.msg,type:"success",duration:2e3}),setTimeout((function(){n.getList()}),2e3)):n.$message({message:t.data.msg,type:"error",duration:2e3})})).catch((function(){}))},getList:function(){var t=this;Object(l["r"])().then((function(e){t.linkList=e.data.data})).catch()}},created:function(){this.getList()}},i=o,c=n("2877"),r=Object(c["a"])(i,a,s,!1,null,"2cf3bb8a",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d22c525.7f7d6168.js.map