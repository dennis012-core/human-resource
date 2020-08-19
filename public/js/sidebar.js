+function(c){var b=function(e,d){this.$element=c(e);this.options=c.extend({},b.DEFAULTS,d);this.transitioning=null;if(this.options.parent){this.$parent=c(this.options.parent)}if(this.options.toggle){this.toggle()}};b.DEFAULTS={toggle:true};b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("sidebar-open")){return}var e=c.Event("show.bs.sidebar");this.$element.trigger(e);if(e.isDefaultPrevented()){return}this.$element.addClass("sidebar-open");this.transitioning=1;var d=function(){this.$element;this.transitioning=0;this.$element.trigger("shown.bs.sidebar")};if(!c.support.transition){return d.call(this)}this.$element.one(c.support.transition.end,c.proxy(d,this)).emulateTransitionEnd(400)};b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("sidebar-open")){return}var e=c.Event("hide.bs.sidebar");this.$element.trigger(e);if(e.isDefaultPrevented()){return}this.$element.removeClass("sidebar-open");this.transitioning=1;var d=function(){this.transitioning=0;this.$element.trigger("hidden.bs.sidebar")};if(!c.support.transition){return d.call(this)}this.$element.one(c.support.transition.end,c.proxy(d,this)).emulateTransitionEnd(400)};b.prototype.toggle=function(){this[this.$element.hasClass("sidebar-open")?"hide":"show"]()};var a=c.fn.sidebar;c.fn.sidebar=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.sidebar");var e=c.extend({},b.DEFAULTS,g.data(),typeof e=="object"&&d);if(!f&&e.toggle&&d=="show"){d=!d}if(!f){g.data("bs.sidebar",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.sidebar.Constructor=b;c.fn.collapse.noConflict=function(){c.fn.sidebar=a;return this};c(document).on("click.bs.sidebar.data-api",'[data-toggle="sidebar"]',function(k){var j=c(this),f;var i=j.attr("data-target")||k.preventDefault()||(f=j.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"");var d=c(i);var h=d.data("bs.sidebar");var g=h?"toggle":j.data();d.sidebar(g)});c("html").on("click.bs.sidebar.autohide",function(f){var g=c(f.target);var e=g.is('.sidebar, [data-toggle="sidebar"]')||g.parents('.sidebar, [data-toggle="sidebar"]').length;if(e){return}else{var d=c(".sidebar");d.each(function(j,h){var k=c(h);if(k.data("bs.sidebar")&&k.hasClass("sidebar-open")){k.sidebar("hide")}})}})}(jQuery);
