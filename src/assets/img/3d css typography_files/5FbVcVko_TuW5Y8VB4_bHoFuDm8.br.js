var Base64Encoder;(function(n){function e(n){for(var i,r="",u=0;u<n.length;u++)i=n.charCodeAt(u),i<128?r+=t(i):i<2047?(r+=t((i>>6)+192),r+=t((i&63)+128)):i<65535?(r+=t((i>>12)+224),r+=t((i>>6&63)+128),r+=t(i&63|128)):i<1114111&&(r+=t((i>>18)+240),r+=t((i>>12&63)+128),r+=t((i>>6&63)+128),r+=t(i&63|128));return r}function o(n){for(var c="",e=null,f=0,o,r,u,s,h;f<n.length;)o=!1,e=null,r=n[i](f++),r<128?e=t(r):r<194?o=!0:r<224?(u=n[i](f),(u&192)!=128?o=!0:(e=t((r<<6)+u-12416),f+=1)):r<240?(u=n[i](f),s=n[i](f+1),(u&192)!=128||r===224&&u<10||(s&192)!=128?o=!0:(e=t((r<<12)+(u<<6)+s-925824),f+=2)):r<245?(u=n[i](f),s=n[i](f+1),h=n[i](f+2),(u&192)!=128||r===240&&u<144||r===244&&u>=144||(s&192)!=128||(h&192)!=128?o=!0:(e=t((r<<18)+(u<<12)+(s<<6)+h-63447168),f+=2)):o=!0,o&&(e=String.fromCharCode(r)),c+=e;return c}function s(n){for(var t=[],f=0,l=4;f<n.length;l+=4){var a=n[i](f++),s=n[i](f++),h=n[i](f++),e=a<<16|s<<8|h,v=e>>18&63,y=e>>12&63,c=e>>6&63,o=e&63;isNaN(s)?c=o=64:isNaN(h)&&(o=64);t.push(r[u](v));t.push(r[u](y));t.push(r[u](c));t.push(r[u](o))}return t.join("")}function h(n){var t=e(n);return typeof btoa=="function"?window.btoa(t):s(t)}function c(n){var e=[],i;if(n.length%4!=0)throw"base64 malformed padding";for(i=0;i<n.length;){var c=r[f](n[u](i++)),s=r[f](n[u](i++)),o=r[f](n[u](i++)),h=r[f](n[u](i++));if(c<0||s<0||o<0||h<0)throw"base64 malformed";var l=t(c<<2|s>>4),a=t((s&15)<<4|o>>2),v=t((o&3)<<6|h);e.push(l);o!==64&&e.push(a);h!==64&&e.push(v)}return e.join("")}function l(n){var t;return t=typeof atob=="function"?window.atob(n):c(n),o(t)}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="charCodeAt",u="charAt",f="indexOf",t=String.fromCharCode;n.stringToBase64=h;n.base64ToString=l})(Base64Encoder||(Base64Encoder={}))