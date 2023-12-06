var Chevrons;(function(n){function s(){f=null;t=null;e=!1;o=!1}function a(n,t,i,r,u,f){var e,o=function(n,t,i,r,f){return new l(n,t,i,r,u,f)};typeof SmartRendering!="undefined"?SmartRendering.LoadElementWhenDisplayed(this,_ge(n),o,[n,t,i,r]):o.apply(this,[n,t,i,r,f]);(e=window.ChevronsPoleWheel||window.ChevronsPoleWheelCF)===null||e===void 0?void 0:e.init({container:_ge(n),btnPrev:t,btnNext:i})}var i="disabled",h="hidden",r="darkchv",u="exp",c="expd",t=null,f=null,e=!1,o=!1,l=function(){function n(n,t,i,r,f,e){var o=this;this.controlId=n;this.prevSlideBtn=t;this.nextSlideBtn=i;this.tabbable=r;this.enableGradientDisappear=f;this.nextChevronOverlay=_ge(e+"_chevron_overlay_next");this.prevChevronOverlay=_ge(e+"_chevron_overlay_prev");this.onPrevClick(function(){var n="slideexp_slideprev",t="Prev",i=Lib.CssClass.contains(o.prevSlideBtn,u);i&&(Lib.CssClass.remove(o.prevSlideBtn,u),Lib.CssClass.add(o.prevSlideBtn,c),n="slideexp_expandleft",t="ExpandLeft");sj_evt.fire(n,o.controlId);Log.Log(t,"SlideExp","Chevron",!1,"Category","CommonControls")});this.onNextClick(function(){var n="slideexp_slidenext",t="Next",i=Lib.CssClass.contains(o.nextSlideBtn,u);i&&(Lib.CssClass.remove(o.nextSlideBtn,u),Lib.CssClass.add(o.nextSlideBtn,c),n="slideexp_expandright",t="ExpandRight");sj_evt.fire(n,o.controlId);Log.Log(t,"SlideExp","Chevron",!1,"Category","CommonControls")});this.onMouseOver(function(){sj_evt.fire("slideexp_pauseautoslide",o.controlId)});this.onMouseOut(function(){sj_evt.fire("slideexp_resumeautoslide",o.controlId)});this.onMouseMove(this.tryDisappearAfterMouseMove);sj_evt.bind("slideexp_leftmost",function(n){o.isForMe(n)&&(o.disablePrev(!0),o.disableNext(!1))});sj_evt.bind("slideexp_rightmost",function(n){o.isForMe(n)&&(o.disablePrev(!1),o.disableNext(!0))});sj_evt.bind("slideexp_middle",function(n){o.isForMe(n)&&(o.disablePrev(!1),o.disableNext(!1))});sj_evt.bind("slideexp_leftrightmost",function(n){o.isForMe(n)&&(o.disablePrev(!0),o.disableNext(!0))});sj_evt.bind("slideexp_mouseover_show",function(n){o.isForMe(n)&&o.show()});sj_evt.bind("slideexp_mouseout_hide",function(n){o.isForMe(n)&&o.hide()});sj_evt.bind("slideexp_mouseover_dark",function(n){o.isForMe(n)&&o.changToDark()});sj_evt.bind("slideexp_mouseout_light",function(n){o.isForMe(n)&&o.changToLight()})}return n.prototype.onPrevClick=function(n){this.prevSlideBtn!=null&&this.nextSlideBtn!=null&&(n&&sj_be(this.prevSlideBtn,"click",n),n&&sj_be(this.prevSlideBtn,"keyup",function(t){t.keyCode===13&&n()}))},n.prototype.onNextClick=function(n){this.prevSlideBtn!=null&&this.nextSlideBtn!=null&&(n&&sj_be(this.nextSlideBtn,"click",n),n&&sj_be(this.nextSlideBtn,"keyup",function(t){t.keyCode===13&&n()}))},n.prototype.onMouseOver=function(n){this.prevSlideBtn!=null&&this.nextSlideBtn!=null&&n&&(sj_be(this.prevSlideBtn,"mouseover",n),sj_be(this.nextSlideBtn,"mouseover",n))},n.prototype.onMouseOut=function(n){this.prevSlideBtn!=null&&this.nextSlideBtn!=null&&n&&(sj_be(this.prevSlideBtn,"mouseout",n),sj_be(this.nextSlideBtn,"mouseout",n))},n.prototype.onMouseMove=function(n){this.prevSlideBtn!=null&&this.nextSlideBtn!=null&&_G.EF!==undefined&&_G.EF.chevroncheckmousemove===1&&(sj_be(this.prevSlideBtn,"mousemove",n),sj_be(this.nextSlideBtn,"mousemove",n))},n.prototype.show=function(){this.setHidden(!1)},n.prototype.changToDark=function(){this.prevSlideBtn!=null&&this.nextSlideBtn!=null&&(Lib.CssClass.add(this.prevSlideBtn,r),Lib.CssClass.add(this.nextSlideBtn,r))},n.prototype.hide=function(){this.setHidden(!0)},n.prototype.changToLight=function(){this.prevSlideBtn!=null&&this.nextSlideBtn!=null&&(Lib.CssClass.remove(this.prevSlideBtn,r),Lib.CssClass.remove(this.nextSlideBtn,r))},n.prototype.disablePrev=function(n){this.prevSlideBtn!=null&&(this.updateClassIf(this.prevSlideBtn,n,i),this.updateTabindexIf(this.prevSlideBtn,n),this.enableGradientDisappear)&&(this.prevChevronOverlay&&this.updateClassIf(this.prevChevronOverlay,n,i),n?!t&&n&&(t=this.prevSlideBtn,f=setTimeout(this.gradientDisappear,_G!==null&&_G.CTT!==null?_G.CTT:5e3)):this.stopGradientDisappear(this.prevSlideBtn))},n.prototype.disableNext=function(n){this.nextSlideBtn!=null&&(this.updateClassIf(this.nextSlideBtn,n,i),this.updateTabindexIf(this.nextSlideBtn,n),this.enableGradientDisappear)&&(this.nextChevronOverlay&&this.updateClassIf(this.nextChevronOverlay,n,i),n?!t&&n&&(t=this.nextSlideBtn,f=setTimeout(this.gradientDisappear,_G!==null&&_G.CTT!==null?_G.CTT:5e3)):this.stopGradientDisappear(this.nextSlideBtn))},n.prototype.tryDisappearAfterMouseMove=function(){t!=null&&(e=!0,o)&&(t.style.display="none",s())},n.prototype.gradientDisappear=function(){t!=null&&(_G.EF===undefined||_G.EF.chevroncheckmousemove!==1||(o=!0,e))&&(t.style.display="none",s())},n.prototype.stopGradientDisappear=function(n){n.style.display="";t!==null&&t===n&&(clearInterval(f),s())},n.prototype.setHidden=function(n){this.prevSlideBtn!=null&&this.nextSlideBtn!=null&&(this.updateClassIf(this.prevSlideBtn,n,h),this.updateClassIf(this.nextSlideBtn,n,h))},n.prototype.updateClassIf=function(n,t,i){t?Lib.CssClass.add(n,i):Lib.CssClass.remove(n,i)},n.prototype.updateTabindexIf=function(n,t){this.tabbable&&(t?n.removeAttribute("tabindex"):n.setAttribute("tabindex","0"))},n.prototype.isForMe=function(n){return n[1]===this.controlId},n}();n.init=a;sj_evt.fire("chevrons_init",l)})(Chevrons||(Chevrons={}))