/*! Select for DataTables 1.2.0
 * 2015-2016 SpryMedia Ltd - datatables.net/license/mit
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","datatables.net"],function(b){return a(b,window,document)})}else{if(typeof exports==="object"){module.exports=function(b,c){if(!b){b=window}if(!c||!c.fn.dataTable){c=require("datatables.net")(b,c).$}return a(c,b,b.document)}}else{a(jQuery,window,document)}}}(function(e,k,n,b){var d=e.fn.dataTable;d.select={};d.select.version="1.2.0";d.select.init=function(t){var B=t.settings()[0];var z=B.oInit.select;var w=d.defaults.select;var r=z===b?w:z;var y="row";var s="api";var A=false;var u=true;var v="td, th";var x="selected";B._select={};if(r===true){s="os"}else{if(typeof r==="string"){s=r}else{if(e.isPlainObject(r)){if(r.blurable!==b){A=r.blurable}if(r.info!==b){u=r.info}if(r.items!==b){y=r.items}if(r.style!==b){s=r.style}if(r.selector!==b){v=r.selector}if(r.className!==b){x=r.className}}}}t.select.selector(v);t.select.items(y);t.select.style(s);t.select.blurable(A);t.select.info(u);B._select.className=x;e.fn.dataTable.ext.order["select-checkbox"]=function(D,C){return this.api().column(C,{order:"index"}).nodes().map(function(E){if(D._select.items==="row"){return e(E).parent().hasClass(D._select.className)}else{if(D._select.items==="cell"){return e(E).hasClass(D._select.className)}}return false})};if(e(t.table().node()).hasClass("selectable")){t.select.style("os")}};function l(x,r,w){var u;var s;var y;var t=function(C,A){if(C>A){var B=A;A=C;C=B}var z=false;return x.columns(":visible").indexes().filter(function(D){if(D===C){z=true}if(D===A){z=false;return true}return z})};var v=function(D,A){var B=x.rows({search:"applied"}).indexes();if(B.indexOf(D)>B.indexOf(A)){var C=A;A=D;D=C}var z=false;return B.filter(function(E){if(E===D){z=true}if(E===A){z=false;return true}return z})};if(!x.cells({selected:true}).any()&&!w){s=t(0,r.column);y=v(0,r.row)}else{s=t(w.column,r.column);y=v(w.row,r.row)}u=x.cells(y,s).flatten();if(!x.cells(r,{selected:true}).any()){x.cells(u).select()}else{x.cells(u).deselect()}}function o(t){var s=t.settings()[0];var r=s._select.selector;e(t.table().body()).off("mousedown.dtSelect",r).off("mouseup.dtSelect",r).off("click.dtSelect",r);e("body").off("click.dtSelect")}function c(u){var s=e(u.table().body());var t=u.settings()[0];var r=t._select.selector;s.on("mousedown.dtSelect",r,function(v){if(v.shiftKey||v.metaKey||v.ctrlKey){s.css("-moz-user-select","none").one("selectstart.dtSelect",r,function(){return false})}}).on("mouseup.dtSelect",r,function(){s.css("-moz-user-select","")}).on("click.dtSelect",r,function(B){var y=u.select.items();var w;if(k.getSelection&&k.getSelection().toString()){return}var x=u.settings()[0];if(e(B.target).closest("div.dataTables_wrapper")[0]!=u.table().container()){return}var v=u.cell(e(B.target).closest("td, th"));if(!v.any()){return}var A=e.Event("user-select.dt");h(u,A,[y,v,B]);if(A.isDefaultPrevented()){return}var z=v.index();if(y==="row"){w=z.row;m(B,u,x,"row",w)}else{if(y==="column"){w=v.index().column;m(B,u,x,"column",w)}else{if(y==="cell"){w=v.index();m(B,u,x,"cell",w)}}}x._select_lastCell=z});e("body").on("click.dtSelect",function(v){if(t._select.blurable){if(e(v.target).parents().filter(u.table().container()).length){return}if(e(v.target).parents("div.DTE").length){return}f(t,true)}})}function h(t,s,r,u){if(u&&!t.flatten().length){return}if(typeof s==="string"){s=s+".dt"}r.unshift(t);e(t.table().node()).triggerHandler(s,r)}function a(t){var r=t.settings()[0];if(!r._select.info||!r.aanFeatures.i){return}var s=e('<span class="select-info"/>');var u=function(w,v){s.append(e('<span class="select-item"/>').append(t.i18n("select."+w+"s",{_:"%d "+w+"s selected",0:"",1:"1 "+w+" selected"},v)))};u("row",t.rows({selected:true}).flatten().length);u("column",t.columns({selected:true}).flatten().length);u("cell",t.cells({selected:true}).flatten().length);e.each(r.aanFeatures.i,function(w,x){x=e(x);var v=x.children("span.select-info");if(v.length){v.remove()}if(s.text()!==""){x.append(s)}})}function p(r){var s=new d.Api(r);r.aoRowCreatedCallback.push({fn:function(y,w,u){var v,t;var x=r.aoData[u];if(x._select_selected){e(y).addClass(r._select.className)}for(v=0,t=r.aoColumns.length;v<t;v++){if(r.aoColumns[v]._select_selected||(x._selected_cells&&x._selected_cells[v])){e(x.anCells[v]).addClass(r._select.className)}}},sName:"select-deferRender"});s.on("preXhr.dt.dtSelect",function(){var u=s.rows({selected:true}).ids(true).filter(function(v){return v!==b});var t=s.cells({selected:true}).eq(0).map(function(v){var w=s.row(v.row).id(true);return w?{row:w,column:v.column}:b}).filter(function(v){return v!==b});s.one("draw.dt.dtSelect",function(){s.rows(u).select();if(t.any()){t.each(function(v){s.cells(v.row,v.column).select()})}})});s.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",function(){a(s)});s.on("destroy.dtSelect",function(){o(s);s.off(".dtSelect")})}function j(y,w,r,x){var u=y[w+"s"]({search:"applied"}).indexes();var t=e.inArray(x,u);var s=e.inArray(r,u);if(!y[w+"s"]({selected:true}).any()&&t===-1){u.splice(e.inArray(r,u)+1,u.length)}else{if(t>s){var v=s;s=t;t=v}u.splice(s+1,u.length);u.splice(0,t)}if(!y[w](r,{selected:true}).any()){y[w+"s"](u).select()}else{u.splice(e.inArray(r,u),1);y[w+"s"](u).deselect()}}function f(r,t){if(t||r._select.style==="single"){var s=new d.Api(r);s.rows({selected:true}).deselect();s.columns({selected:true}).deselect();s.cells({selected:true}).deselect()}}function m(y,x,s,w,r){var v=x.select.style();var t=x[w](r,{selected:true}).any();if(v==="os"){if(y.ctrlKey||y.metaKey){x[w](r).select(!t)}else{if(y.shiftKey){if(w==="cell"){l(x,r,s._select_lastCell||null)}else{j(x,w,r,s._select_lastCell?s._select_lastCell[w]:null)}}else{var u=x[w+"s"]({selected:true});if(t&&u.flatten().length===1){x[w](r).deselect()}else{u.deselect();x[w](r).select()}}}}else{if(v=="multi+shift"){if(y.shiftKey){if(w==="cell"){l(x,r,s._select_lastCell||null)}else{j(x,w,r,s._select_lastCell?s._select_lastCell[w]:null)}}else{x[w](r).select(!t)}}else{x[w](r).select(!t)}}}e.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(r,s){d.ext.selector[s.type].push(function(y,z,v){var x=z.selected;var A;var u=[];if(x===b){return v}for(var w=0,t=v.length;w<t;w++){A=y[s.prop][v[w]];if((x===true&&A._select_selected===true)||(x===false&&!A._select_selected)){u.push(v[w])}}return u})});d.ext.selector.cell.push(function(w,x,t){var v=x.selected;var y;var s=[];if(v===b){return t}for(var u=0,r=t.length;u<r;u++){y=w.aoData[t[u].row];if((v===true&&y._selected_cells&&y._selected_cells[t[u].column]===true)||(v===false&&(!y._selected_cells||!y._selected_cells[t[u].column]))){s.push(t[u])}}return s});var i=d.Api.register;var g=d.Api.registerPlural;i("select()",function(){return this.iterator("table",function(r){d.select.init(new d.Api(r))})});i("select.blurable()",function(r){if(r===b){return this.context[0]._select.blurable}return this.iterator("table",function(s){s._select.blurable=r})});i("select.info()",function(r){if(a===b){return this.context[0]._select.info}return this.iterator("table",function(s){s._select.info=r})});i("select.items()",function(r){if(r===b){return this.context[0]._select.items}return this.iterator("table",function(s){s._select.items=r;h(new d.Api(s),"selectItems",[r])})});i("select.style()",function(r){if(r===b){return this.context[0]._select.style}return this.iterator("table",function(s){s._select.style=r;if(!s._select_init){p(s)}var t=new d.Api(s);o(t);if(r!=="api"){c(t)}h(new d.Api(s),"selectStyle",[r])})});i("select.selector()",function(r){if(r===b){return this.context[0]._select.selector}return this.iterator("table",function(s){o(new d.Api(s));s._select.selector=r;if(s._select.style!=="api"){c(new d.Api(s))}})});g("rows().select()","row().select()",function(r){var s=this;if(r===false){return this.deselect()}this.iterator("row",function(u,t){f(u);u.aoData[t]._select_selected=true;e(u.aoData[t].nTr).addClass(u._select.className)});this.iterator("table",function(t,u){h(s,"select",["row",s[u]],true)});return this});g("columns().select()","column().select()",function(r){var s=this;if(r===false){return this.deselect()}this.iterator("column",function(u,t){f(u);u.aoColumns[t]._select_selected=true;var v=new d.Api(u).column(t);e(v.header()).addClass(u._select.className);e(v.footer()).addClass(u._select.className);v.nodes().to$().addClass(u._select.className)});this.iterator("table",function(t,u){h(s,"select",["column",s[u]],true)});return this});g("cells().select()","cell().select()",function(r){var s=this;if(r===false){return this.deselect()}this.iterator("cell",function(t,u,w){f(t);var v=t.aoData[u];if(v._selected_cells===b){v._selected_cells=[]}v._selected_cells[w]=true;if(v.anCells){e(v.anCells[w]).addClass(t._select.className)}});this.iterator("table",function(t,u){h(s,"select",["cell",s[u]],true)});return this});g("rows().deselect()","row().deselect()",function(){var r=this;this.iterator("row",function(t,s){t.aoData[s]._select_selected=false;e(t.aoData[s].nTr).removeClass(t._select.className)});this.iterator("table",function(s,t){h(r,"deselect",["row",r[t]],true)});return this});g("columns().deselect()","column().deselect()",function(){var r=this;this.iterator("column",function(t,s){t.aoColumns[s]._select_selected=false;var v=new d.Api(t);var u=v.column(s);e(u.header()).removeClass(t._select.className);e(u.footer()).removeClass(t._select.className);v.cells(null,s).indexes().each(function(x){var y=t.aoData[x.row];var w=y._selected_cells;if(y.anCells&&(!w||!w[x.column])){e(y.anCells[x.column]).removeClass(t._select.className)}})});this.iterator("table",function(s,t){h(r,"deselect",["column",r[t]],true)});return this});g("cells().deselect()","cell().deselect()",function(){var r=this;this.iterator("cell",function(s,t,v){var u=s.aoData[t];u._selected_cells[v]=false;if(u.anCells&&!s.aoColumns[v]._select_selected){e(u.anCells[v]).removeClass(s._select.className)}});this.iterator("table",function(s,t){h(r,"deselect",["cell",r[t]],true)});return this});function q(r,s){return function(t){return t.i18n("buttons."+r,s)}}e.extend(d.ext.buttons,{selected:{text:q("selected","Selected"),className:"buttons-selected",init:function(s){var r=this;s.on("draw.dt.DT select.dt.DT deselect.dt.DT",function(){var t=r.rows({selected:true}).any()||r.columns({selected:true}).any()||r.cells({selected:true}).any();r.enable(t)});this.disable()}},selectedSingle:{text:q("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(s){var r=this;s.on("draw.dt.DT select.dt.DT deselect.dt.DT",function(){var t=s.rows({selected:true}).flatten().length+s.columns({selected:true}).flatten().length+s.cells({selected:true}).flatten().length;r.enable(t===1)});this.disable()}},selectAll:{text:q("selectAll","Select all"),className:"buttons-select-all",action:function(){var r=this.select.items();this[r+"s"]().select()}},selectNone:{text:q("selectNone","Deselect all"),className:"buttons-select-none",action:function(){f(this.settings()[0],true)},init:function(s){var r=this;s.on("draw.dt.DT select.dt.DT deselect.dt.DT",function(){var t=s.rows({selected:true}).flatten().length+s.columns({selected:true}).flatten().length+s.cells({selected:true}).flatten().length;r.enable(t>0)});this.disable()}}});e.each(["Row","Column","Cell"],function(r,t){var s=t.toLowerCase();d.ext.buttons["select"+t+"s"]={text:q("select"+t+"s","Select "+s+"s"),className:"buttons-select-"+s+"s",action:function(){this.select.items(s)},init:function(v){var u=this;v.on("selectItems.dt.DT",function(y,w,x){u.active(x===s)})}}});e(n).on("preInit.dt.dtSelect",function(s,r){if(s.namespace!=="dt"){return}d.select.init(new d.Api(r))});return d.select}));
