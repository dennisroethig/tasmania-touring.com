/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */
!function(t){t.fn.unveil=function(i){function e(){r=f.filter(function(){var i=t(this),e=s.scrollTop(),n=e+s.height(),r=i.offset().top,o=r+i.height(),u=i.is(":visible");return o>=e-c&&n+c>=r&&u}),n=r.trigger("unveil"),f=f.not(n)}var n,r,o,s=t(window),c=i||0,u=window.devicePixelRatio>1,a=u?"data-src-retina":"data-src",f=this;return this.one("unveil",function(){var i=this;o=i.getAttribute(a),o=o||i.getAttribute("data-src"),o&&function(i,e){setTimeout(function(){i.setAttribute("src",e),t('img[data-src="'+e+'"]').each(function(){t(this).prop("src",e)})},0)}(i,o)}),s.scroll(e),s.resize(e),e(),this}}(window.jQuery||window.Zepto);