/*! jQuery UI integration for DataTables' Buttons
 * ©2016 SpryMedia Ltd - datatables.net/license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","datatables.net-jqui","datatables.net-buttons"],function(b){return a(b,window,document)})}else{if(typeof exports==="object"){module.exports=function(b,c){if(!b){b=window}if(!c||!c.fn.dataTable){c=require("datatables.net-jqui")(b,c).$}if(!c.fn.dataTable.Buttons){require("datatables.net-buttons")(b,c)}return a(c,b,b.document)}}else{a(jQuery,window,document)}}}(function(d,b,a,e){var c=d.fn.dataTable;d.extend(true,c.Buttons.defaults,{dom:{container:{className:"dt-buttons ui-buttonset"},button:{className:"dt-button ui-button ui-state-default ui-button-text-only",disabled:"ui-state-disabled",active:"ui-state-active"},buttonLiner:{tag:"span",className:"ui-button-text"}}});c.ext.buttons.collection.text=function(f){return f.i18n("buttons.collection",'Collection <span class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"/>')};return c.Buttons}));
