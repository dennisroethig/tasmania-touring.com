/*! ResponsiveSlides.js v1.54
 * http://responsiveslides.com
 * http://viljamis.com
 *
 * Copyright (c) 2011-2012 @viljamis
 * Available under the MIT license
 */
!function(t,n,a){t.fn.responsiveSlides=function(e){var s=t.extend({auto:!0,speed:500,timeout:4e3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:t.noop,after:t.noop},e);return this.each(function(){a++;var o,i,r,l,u,c,f=t(this),d=0,p=f.children(),v=p.size(),h=parseFloat(s.speed),m=parseFloat(s.timeout),C=parseFloat(s.maxwidth),x=s.namespace,y=x+a,b=x+"_nav "+y+"_nav",g=x+"_here",w=y+"_on",_=y+"_s",I=t("<ul class='"+x+"_tabs "+y+"_tabs' />"),q={"float":"left",position:"relative",opacity:1,zIndex:2},z={"float":"none",position:"absolute",opacity:0,zIndex:1},T=function(){var t=document.body||document.documentElement,n=t.style,a="transition";if("string"==typeof n[a])return!0;o=["Moz","Webkit","Khtml","O","ms"],a=a.charAt(0).toUpperCase()+a.substr(1);var e;for(e=0;e<o.length;e++)if("string"==typeof n[o[e]+a])return!0;return!1}(),k=function(n){s.before(n),T?(p.removeClass(w).css(z).eq(n).addClass(w).css(q),d=n,setTimeout(function(){s.after(n)},h)):p.stop().fadeOut(h,function(){t(this).removeClass(w).css(z).css("opacity",1)}).eq(n).fadeIn(h,function(){t(this).addClass(w).css(q),s.after(n),d=n})};if(s.random&&(p.sort(function(){return Math.round(Math.random())-.5}),f.empty().append(p)),p.each(function(t){this.id=_+t}),f.addClass(x+" "+y),e&&e.maxwidth&&f.css("max-width",C),p.hide().css(z).eq(0).addClass(w).css(q).show(),T&&p.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"}),p.size()>1){if(h+100>m)return;if(s.pager&&!s.manualControls){var F=[];p.each(function(t){var n=t+1;F+="<li><a href='#' class='"+_+n+"'>"+n+"</a>"+"</li>"}),I.append(F),e.navContainer?t(s.navContainer).append(I):f.after(I)}if(s.manualControls&&(I=t(s.manualControls),I.addClass(x+"_tabs "+y+"_tabs")),(s.pager||s.manualControls)&&I.find("li").each(function(n){t(this).addClass(_+(n+1))}),(s.pager||s.manualControls)&&(c=I.find("a"),i=function(t){c.closest("li").removeClass(g).eq(t).addClass(g)}),s.auto&&(r=function(){u=setInterval(function(){p.stop(!0,!0);var t=v>d+1?d+1:0;(s.pager||s.manualControls)&&i(t),k(t)},m)},r()),l=function(){s.auto&&(clearInterval(u),r())},s.pause&&f.hover(function(){clearInterval(u)},function(){l()}),(s.pager||s.manualControls)&&(c.bind("click",function(n){n.preventDefault(),s.pauseControls||l();var a=c.index(this);d===a||t("."+w).queue("fx").length||(i(a),k(a))}).eq(0).closest("li").addClass(g),s.pauseControls&&c.hover(function(){clearInterval(u)},function(){l()})),s.nav){var M="<a href='#' class='"+b+" prev'>"+s.prevText+"</a>"+"<a href='#' class='"+b+" next'>"+s.nextText+"</a>";e.navContainer?t(s.navContainer).append(M):f.after(M);var D=t("."+y+"_nav"),O=D.filter(".prev");D.bind("click",function(n){n.preventDefault();var a=t("."+w);if(!a.queue("fx").length){var e=p.index(a),o=e-1,r=v>e+1?d+1:0;k(t(this)[0]===O[0]?o:r),(s.pager||s.manualControls)&&i(t(this)[0]===O[0]?o:r),s.pauseControls||l()}}),s.pauseControls&&D.hover(function(){clearInterval(u)},function(){l()})}}if("undefined"==typeof document.body.style.maxWidth&&e.maxwidth){var W=function(){f.css("width","100%"),f.width()>C&&f.css("width",C)};W(),t(n).bind("resize",function(){W()})}})}}(jQuery,this,0);