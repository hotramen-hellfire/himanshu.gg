var MsnShared;(function(n){function u(n,t,i){var f,u,r;if(i==null)return null;if(i.getElementsByClassName)return i.getElementsByClassName(n);for(f=[],t==null&&(t="*"),u=i.getElementsByTagName(t),r=0;r<u.length;r++)(" "+u[r].className+" ").indexOf(" "+n+" ")>-1&&f.push(u[r]);return f}function t(n,t){var i=n.classList;return i?i.contains(t):(" "+n.className+" ").indexOf(" "+t+" ")>=0}function i(n,t){if(n!=null){var i=n.classList;i?i.remove(t):n.className=n.className.replace(t,"")}}function r(n,i){if(n!=null){var r=n.classList;r?r.add(i):t(n,i)||(n.className+=" "+i)}}function f(n){r(n,"b_hide")}function e(n){i(n,"b_hide")}function o(n){var i=0,t;if(n&&(t=getComputedStyle(n),t)){var r=parseInt(t.height),u=parseInt(t.marginTop),f=parseInt(t.marginBottom);i=isNaN(r)?0:r;i+=isNaN(u)?0:u;i+=isNaN(f)?0:f}return i}function s(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];return n.replace(/{(\d+)}/g,function(n,t){return typeof i[t]!="undefined"?i[t]:n})}n.getElementsByClassName=u;n.hasClass=t;n.removeClass=i;n.addClass=r;n.hide=f;n.show=e;n.getCssHeight=o;n.stringFormat=s})(MsnShared||(MsnShared={}))