var Elevator=function(){"use strict";function n(n,o){for(var e in o)e in n||(n[e]=o[e]);return n}function o(n,o,e,i){return n/=i/2,1>n?e/2*n*n+o:(n--,-e/2*(n*(n-2)-1)+o)}function e(n,o){for(var e in o){var i=void 0===n[e]&&"function"!=typeof e;i&&(n[e]=o[e])}return n}function i(n){v||(v=n);var e=n-v,t=o(e,w,-w,s);window.scrollTo(0,t),s>e?f=requestAnimationFrame(i):r()}function t(){T||(T=!0,w=document.documentElement.scrollTop||m.scrollTop,p||(s=1.5*w),requestAnimationFrame(i),c&&c.play())}function u(){v=null,w=null,T=!1}function r(){u(),c&&(c.pause(),c.currentTime=0),A&&A.play()}function l(){T&&(cancelAnimationFrame(f),u(),c&&(c.pause(),c.currentTime=0),window.scrollTo(0,0))}function d(n){n.addEventListener("click",t,!1)}function a(n){m=document.body;var o={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0};n=e(n,o),n.element&&d(n.element),n.duration&&(p=!0,s=n.duration),window.addEventListener("blur",l,!1),window.Audio&&(n.mainAudio&&(c=new Audio(n.mainAudio),c.setAttribute("preload",n.preloadAudio),c.setAttribute("loop",n.loopAudio)),n.endAudio&&(A=new Audio(n.endAudio),A.setAttribute("preload","true")))}var c,A,m=null,f=null,s=null,p=!1,v=null,w=null,T=!1;return n(a,{elevate:t})}();