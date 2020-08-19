/*!
 * jQuery Upload File Plugin
 * version: 4.0.10
 * @requires jQuery v1.5 or later & form plugin
 * Copyright (c) 2013 Ravishanker Kusuma
 * http://hayageek.com/
 */
!function(e){void 0==e.fn.ajaxForm&&e.getScript("/vendor/ajax-form.min.js");var t={};t.fileapi=void 0!==e("<input type='file'/>").get(0).files,t.formdata=void 0!==window.FormData,e.fn.uploadFile=function(a){function r(){_||(_=!0,function e(){if($.sequential||($.sequentialCount=99999),0==b.length&&0==x.length)$.afterUploadAll&&$.afterUploadAll(y),_=!1;else{if(x.length<$.sequentialCount){var t=b.shift();void 0!=t&&(x.push(t),t.removeClass(y.formGroup),t.submit())}window.setTimeout(e,100)}}())}function i(t,a,r){r.on("dragenter",function(t){t.stopPropagation(),t.preventDefault(),e(this).addClass(a.dragDropHoverClass)}),r.on("dragover",function(t){t.stopPropagation(),t.preventDefault();var r=e(this);r.hasClass(a.dragDropContainerClass)&&!r.hasClass(a.dragDropHoverClass)&&r.addClass(a.dragDropHoverClass)}),r.on("drop",function(r){r.preventDefault(),e(this).removeClass(a.dragDropHoverClass),t.errorLog.html("");var i=r.originalEvent.dataTransfer.files;return!a.multiple&&i.length>1?void(a.showError&&e("<div class='"+a.errorClass+"'>"+a.multiDragErrorStr+"</div>").appendTo(t.errorLog)):void(0!=a.onSelect(i)&&o(a,t,i))}),r.on("dragleave",function(){e(this).removeClass(a.dragDropHoverClass)}),e(document).on("dragenter",function(e){e.stopPropagation(),e.preventDefault()}),e(document).on("dragover",function(t){t.stopPropagation(),t.preventDefault();var r=e(this);r.hasClass(a.dragDropContainerClass)||r.removeClass(a.dragDropHoverClass)}),e(document).on("drop",function(t){t.stopPropagation(),t.preventDefault(),e(this).removeClass(a.dragDropHoverClass)})}function n(e){var t="",a=e/1024;if(parseInt(a)>1024){var r=a/1024;t=r.toFixed(2)+" MB"}else t=a.toFixed(2)+" KB";return t}function s(t){var a=[];a="string"==jQuery.type(t)?t.split("&"):e.param(t).split("&");var r,i,n=a.length,s=[];for(r=0;n>r;r++)a[r]=a[r].replace(/\+/g," "),i=a[r].split("="),s.push([decodeURIComponent(i[0]),decodeURIComponent(i[1])]);return s}function o(t,a,r){for(var i=0;i<r.length;i++)if(l(a,t,r[i].name))if(t.allowDuplicates||!d(a,r[i].name))if(-1!=t.maxFileSize&&r[i].size>t.maxFileSize)t.showError&&e("<div class='"+t.errorClass+"'><b>"+r[i].name+"</b> "+t.sizeErrorStr+n(t.maxFileSize)+"</div>").appendTo(a.errorLog);else if(-1==t.maxFileCount||a.selectedFiles<t.maxFileCount){a.selectedFiles++,a.existingFileNames.push(r[i].name);var o=t,c=new FormData,h=t.fileName.replace("[]","");c.append(h,r[i]);var u=t.formData;if(u)for(var p=s(u),g=0;g<p.length;g++)p[g]&&c.append(p[g][0],p[g][1]);o.fileData=c;var $=new m(a,t),v="";v=t.showFileCounter?a.fileCounter+t.fileCounterStyle+r[i].name:r[i].name,t.showFileSize&&(v+=" ("+n(r[i].size)+")"),$.filename.html(v);var y=e("<form style='display:block; position:absolute;left: 150px;' class='"+a.formGroup+"' method='"+t.method+"' action='"+t.url+"' enctype='"+t.enctype+"'></form>");y.appendTo("body");var w=[];w.push(r[i].name),f(y,o,$,w,a,r[i]),a.fileCounter++}else t.showError&&e("<div class='"+t.errorClass+"'><b>"+r[i].name+"</b> "+t.maxFileCountErrorStr+t.maxFileCount+"</div>").appendTo(a.errorLog);else t.showError&&e("<div class='"+t.errorClass+"'><b>"+r[i].name+"</b> "+t.duplicateErrorStr+"</div>").appendTo(a.errorLog);else t.showError&&e("<div class='"+t.errorClass+"'><b>"+r[i].name+"</b> "+t.extErrorStr+t.allowedTypes+"</div>").appendTo(a.errorLog)}function l(e,t,a){var r=t.allowedTypes.toLowerCase().split(/[\s,]+/g),i=a.split(".").pop().toLowerCase();return"*"!=t.allowedTypes&&jQuery.inArray(i,r)<0?!1:!0}function d(e,t){var a=!1;if(e.existingFileNames.length)for(var r=0;r<e.existingFileNames.length;r++)(e.existingFileNames[r]==t||$.duplicateStrict&&e.existingFileNames[r].toLowerCase()==t.toLowerCase())&&(a=!0);return a}function c(e,t){if(e.existingFileNames.length)for(var a=0;a<t.length;a++){var r=e.existingFileNames.indexOf(t[a]);-1!=r&&e.existingFileNames.splice(r,1)}}function h(e,t){if(e){t.show();var a=new FileReader;a.onload=function(e){t.attr("src",e.target.result)},a.readAsDataURL(e)}}function u(t,a){if(t.showFileCounter){var r=e(a.container).find(".ajax-file-upload-filename").length;a.fileCounter=r+1,e(a.container).find(".ajax-file-upload-filename").each(function(){var a=e(this).html().split(t.fileCounterStyle),i=(parseInt(a[0])-1,r+t.fileCounterStyle+a[1]);e(this).html(i),r--})}}function p(a,r,i,n){var s="ajax-upload-id-"+(new Date).getTime(),d=e("<form method='"+i.method+"' action='"+i.url+"' enctype='"+i.enctype+"'></form>"),c="<input type='file' id='"+s+"' name='"+i.fileName+"' accept='"+i.acceptFiles+"'/>";i.multiple&&(i.fileName.indexOf("[]")!=i.fileName.length-2&&(i.fileName+="[]"),c="<input type='file' id='"+s+"' name='"+i.fileName+"' accept='"+i.acceptFiles+"' multiple/>");var h=e(c).appendTo(d);h.change(function(){a.errorLog.html("");var s=(i.allowedTypes.toLowerCase().split(","),[]);if(this.files){for(v=0;v<this.files.length;v++)s.push(this.files[v].name);if(0==i.onSelect(this.files))return}else{var c=e(this).val(),h=[];if(s.push(c),!l(a,i,c))return void(i.showError&&e("<div class='"+i.errorClass+"'><b>"+c+"</b> "+i.extErrorStr+i.allowedTypes+"</div>").appendTo(a.errorLog));if(h.push({name:c,size:"NA"}),0==i.onSelect(h))return}if(u(i,a),n.unbind("click"),d.hide(),p(a,r,i,n),d.addClass(r),i.serialize&&t.fileapi&&t.formdata){d.removeClass(r);var g=this.files;d.remove(),o(i,a,g)}else{for(var $="",v=0;v<s.length;v++)$+=i.showFileCounter?a.fileCounter+i.fileCounterStyle+s[v]+"<br>":s[v]+"<br>",a.fileCounter++;if(-1!=i.maxFileCount&&a.selectedFiles+s.length>i.maxFileCount)return void(i.showError&&e("<div class='"+i.errorClass+"'><b>"+$+"</b> "+i.maxFileCountErrorStr+i.maxFileCount+"</div>").appendTo(a.errorLog));a.selectedFiles+=s.length;var y=new m(a,i);y.filename.html($),f(d,i,y,s,a,null)}}),i.nestedForms?(d.css({margin:0,padding:0}),n.css({position:"relative",overflow:"hidden",cursor:"default"}),h.css({position:"absolute",cursor:"pointer",top:"0px",width:"100%",height:"100%",left:"0px","z-index":"100",opacity:"0.0",filter:"alpha(opacity=0)","-ms-filter":"alpha(opacity=0)","-khtml-opacity":"0.0","-moz-opacity":"0.0"}),d.appendTo(n)):(d.appendTo(e("body")),d.css({margin:0,padding:0,display:"block",position:"absolute",left:"-250px"}),-1!=navigator.appVersion.indexOf("MSIE ")?n.attr("for",s):n.click(function(){h.click()}))}function g(t,a){return this.statusbar=e("<div class='ajax-file-upload-statusbar'></div>").width(a.statusBarWidth),this.preview=e("<img class='ajax-file-upload-preview' />").width(a.previewWidth).height(a.previewHeight).appendTo(this.statusbar).hide(),this.filename=e("<span class='ajax-file-upload-filename'></span>").appendTo(this.statusbar),this.del=e('<span class="btn btn-danger btn-xs pull-right"><a href="#" style="color:#fff;"><i class="fa fa-trash"></i></a></span>').appendTo(this.statusbar).hide(),this.progressDiv=e("<div class='progress' style='padding-left:0px;'>").appendTo(this.statusbar).hide(),this.progressbar=e("<div class='progress-bar progress-bar-success'></div>").appendTo(this.progressDiv),this.abort=e("<div>"+a.abortStr+"</div>").appendTo(this.statusbar).hide(),this.cancel=e("<div>"+a.cancelStr+"</div>").appendTo(this.statusbar).hide(),this.done=e("<div>"+a.doneStr+"</div>").appendTo(this.statusbar).hide(),this.download=e("<div>"+a.downloadStr+"</div>").appendTo(this.statusbar).hide(),this.abort.addClass("ajax-file-upload-red"),this.done.addClass("ajax-file-upload-green"),this.download.addClass("ajax-file-upload-green"),this.cancel.addClass("ajax-file-upload-red"),this.del.addClass("ajax-file-upload-red"),this}function m(t,a){var r=null;return r=a.customProgressBar?new a.customProgressBar(t,a):new g(t,a),r.abort.addClass(t.formGroup),r.abort.addClass(a.abortButtonClass),r.cancel.addClass(t.formGroup),r.cancel.addClass(a.cancelButtonClass),a.extraHTML&&(r.extraHTML=e("<div class='extrahtml'>"+a.extraHTML()+"</div>").insertAfter(r.filename)),"bottom"==a.uploadQueueOrder?e(t.container).append(r.statusbar):e(t.container).prepend(r.statusbar),r}function f(a,i,n,o,l,d){var p={cache:!1,contentType:!1,processData:!1,forceSync:!1,type:i.method,data:i.formData,formData:i.fileData,dataType:i.returnType,headers:i.headers,beforeSubmit:function(t,r,d){if(0!=i.onSubmit.call(this,o)){if(i.dynamicFormData){var h=s(i.dynamicFormData());if(h)for(var p=0;p<h.length;p++)h[p]&&(void 0!=i.fileData?d.formData.append(h[p][0],h[p][1]):d.data[h[p][0]]=h[p][1])}return i.extraHTML&&e(n.extraHTML).find("input,select,textarea").each(function(){void 0!=i.fileData?d.formData.append(e(this).attr("name"),e(this).val()):d.data[e(this).attr("name")]=e(this).val()}),!0}return n.statusbar.append("<div class='"+i.errorClass+"'>"+i.uploadErrorStr+"</div>"),n.cancel.show(),a.remove(),n.cancel.click(function(){b.splice(b.indexOf(a),1),c(l,o),n.statusbar.remove(),i.onCancel.call(l,o,n),l.selectedFiles-=o.length,u(i,l)}),!1},beforeSend:function(e){n.progressDiv.show(),n.cancel.hide(),n.done.hide(),i.showAbort&&(n.abort.show(),n.abort.click(function(){c(l,o),e.abort(),l.selectedFiles-=o.length,i.onAbort.call(l,o,n)})),n.progressbar.width(t.formdata?"1%":"5%")},uploadProgress:function(e,t,a,r){r>98&&(r=98);var s=r+"%";r>1&&n.progressbar.width(s),i.showProgress&&(n.progressbar.html(s),n.progressbar.css("text-align","center"))},success:function(t,r,s){if(n.cancel.remove(),x.pop(),"json"==i.returnType&&"object"==e.type(t)&&t.hasOwnProperty(i.customErrorKeyStr)){n.abort.hide();var d=t[i.customErrorKeyStr];return i.onError.call(this,o,200,d,n),i.showStatusAfterError?(n.progressDiv.hide(),n.statusbar.append("<span class='"+i.errorClass+"'>ERROR: "+d+"</span>"),n.statusbar.delay(5e3).fadeOut(400)):(n.statusbar.hide(),n.statusbar.remove()),l.selectedFiles-=o.length,void a.remove()}l.responses.push(t),n.progressbar.width("100%"),i.showProgress&&(n.progressbar.html("100%"),n.progressbar.css("text-align","center")),n.abort.hide(),i.onSuccess.call(this,o,t,s,n),i.showStatusAfterSuccess?(n.progressDiv.hide(),i.showDone?(n.done.show(),n.done.click(function(){n.statusbar.hide("slow"),n.statusbar.remove()})):n.done.hide(),i.showDelete?(n.del.show(),n.del.click(function(){c(l,o),n.statusbar.hide().remove(),i.deleteCallback&&i.deleteCallback.call(this,t,n),l.selectedFiles-=o.length,u(i,l)})):n.del.hide(),n.statusbar.hide()):(n.statusbar.hide("slow"),n.statusbar.remove()),i.showDownload&&(n.download.show(),n.download.click(function(){i.downloadCallback&&i.downloadCallback(t,n)})),a.remove()},error:function(e,t,r){n.cancel.remove(),x.pop(),n.abort.hide(),"abort"==e.statusText?(n.statusbar.hide("slow").remove(),u(i,l)):(i.onError.call(this,o,t,r,n),i.showStatusAfterError?(n.progressDiv.hide(),n.statusbar.append("<span class='"+i.errorClass+"'>ERROR: "+r+"</span>")):(n.statusbar.hide(),n.statusbar.remove()),l.selectedFiles-=o.length),a.remove()}};i.showPreview&&null!=d&&"image"==d.type.toLowerCase().split("/").shift()&&h(d,n.preview),i.autoSubmit?(a.ajaxForm(p),b.push(a),r()):(i.showCancel&&(n.cancel.show(),n.cancel.click(function(){b.splice(b.indexOf(a),1),c(l,o),a.remove(),n.statusbar.remove(),i.onCancel.call(l,o,n),l.selectedFiles-=o.length,u(i,l)})),a.ajaxForm(p))}var $=e.extend({url:"",method:"POST",enctype:"multipart/form-data",returnType:null,allowDuplicates:!0,duplicateStrict:!1,allowedTypes:"*",acceptFiles:"*",fileName:"file",formData:!1,dynamicFormData:!1,maxFileSize:-1,maxFileCount:-1,multiple:!0,dragDrop:!0,autoSubmit:!0,showCancel:!1,showAbort:!1,showDone:!1,showDelete:!0,showError:!0,showStatusAfterSuccess:!1,showStatusAfterError:!1,showFileCounter:!1,fileCounterStyle:") ",showFileSize:!0,showProgress:!0,nestedForms:!0,showDownload:!1,onLoad:function(){},onSelect:function(){return!0},onSubmit:function(){},onSuccess:function(){},onError:function(){},onCancel:function(){},onAbort:function(){},downloadCallback:!1,deleteCallback:!1,afterUploadAll:!1,serialize:!0,sequential:!1,sequentialCount:1,customProgressBar:!1,abortButtonClass:"ajax-file-upload-abort",cancelButtonClass:"ajax-file-upload-cancel",dragDropContainerClass:"ajax-upload-dragdrop",dragDropHoverClass:"state-hover",errorClass:"help-block",uploadButtonClass:"btn btn-primary btn-sm",dragDropStr:"<span><b>Drag &amp; Drop Files</b></span>",uploadStr:"Upload",abortStr:"Abort",cancelStr:"Cancel",deletelStr:"Delete",doneStr:"Done",multiDragErrorStr:"Multiple File Drag &amp; Drop is not allowed.",extErrorStr:"is not allowed. Allowed extensions: ",duplicateErrorStr:"is not allowed. File already exists.",sizeErrorStr:"is not allowed. Allowed Max size: ",uploadErrorStr:"Upload is not allowed",maxFileCountErrorStr:" is not allowed. Maximum allowed files are:",downloadStr:"Download",customErrorKeyStr:"error",showQueueDiv:!1,statusBarWidth:"100%",dragdropWidth:"100%",showPreview:!1,previewHeight:"auto",previewWidth:"100%",extraHTML:!1,uploadQueueOrder:"top",headers:{}},a);this.fileCounter=1,this.selectedFiles=0;var v="ajax-file-upload-"+(new Date).getTime();this.formGroup=v,this.errorLog=e("<div></div>"),this.responses=[],this.existingFileNames=[],t.formdata||($.dragDrop=!1),t.formdata&&1!==$.maxFileCount||($.multiple=!1),e(this).html("");var y=this,w=e("<div>"+$.uploadStr+"</div>");e(w).addClass($.uploadButtonClass),function k(){if(e.fn.ajaxForm){if($.dragDrop){var t=e('<div class="'+$.dragDropContainerClass+'" style="vertical-align:top;"></div>').width($.dragdropWidth);e(y).append(t),e(t).append(w),e(t).append(e($.dragDropStr)),i(y,$,t)}else e(y).append(w);e(y).append(y.errorLog),y.container=$.showQueueDiv?e("#"+$.showQueueDiv):e("<div class='ajax-file-upload-container'></div>").insertAfter(e(y)),$.onLoad.call(this,y),p(y,v,$,w)}else window.setTimeout(k,10)}(),this.startUpload=function(){e("form").each(function(){e(this).hasClass(y.formGroup)&&b.push(e(this))}),b.length<1||r()},this.getFileCount=function(){return y.selectedFiles},this.stopUpload=function(){e("."+$.abortButtonClass).each(function(){e(this).hasClass(y.formGroup)&&e(this).click()}),e("."+$.cancelButtonClass).each(function(){e(this).hasClass(y.formGroup)&&e(this).click()})},this.cancelAll=function(){e("."+$.cancelButtonClass).each(function(){e(this).hasClass(y.formGroup)&&e(this).click()})},this.update=function(t){$=e.extend($,t)},this.reset=function(e){y.fileCounter=1,y.selectedFiles=0,y.errorLog.html(""),0!=e&&y.container.html("")},this.remove=function(){y.container.html(""),e(y).remove()},this.createProgress=function(e,t,a){var r=new m(this,$);r.progressDiv.show(),r.progressbar.width("100%");var i="";return i=$.showFileCounter?y.fileCounter+$.fileCounterStyle+e:e,$.showFileSize&&(i+=" ("+n(a)+")"),r.filename.html(i),y.fileCounter++,y.selectedFiles++,$.showPreview&&(r.preview.attr("src",t),r.preview.show()),$.showDownload&&(r.download.show(),r.download.click(function(){$.downloadCallback&&$.downloadCallback.call(y,[e],r)})),$.showDelete&&(r.del.show(),r.del.click(function(){r.statusbar.hide().remove();var t=[e];$.deleteCallback&&$.deleteCallback.call(this,t,r),y.selectedFiles-=1,u($,y)})),r},this.getResponses=function(){return this.responses};var b=[],x=[],_=!1;return this}}(jQuery);