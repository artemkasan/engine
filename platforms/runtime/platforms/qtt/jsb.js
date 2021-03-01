!function n(r,i,a){function u(t,e){if(!i[t]){if(!r[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(c)return c(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=i[t]={exports:{}},r[t][0].call(o.exports,function(e){return u(r[t][1][e]||e)},o,o.exports,n,r,i,a)}return i[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){void 0===v&&(v=Object.assign({},t),Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(t[e]=function(){return console.warn("AudioEngine."+e+" is deprecated"),v[e].apply(t,arguments)})}));return new T};function n(e,t,o){if(e=y.get(e),"function"!=typeof o||!e)return-1;for(var n=e[t]||[],r=0,i=n.length;r<i;++r)if(o===n[r])return n.splice(r,1),o.length+1;return 0}function r(e,t,o){if(e=y.get(e),"function"!=typeof o||!e)return-1;var n=e[t];if(n){for(var r=0,i=n.length;r<i;++r)if(o===n[r])return 0;n.push(o)}else n=e[t]=[o];return n.length}var i="canplayCallbacks",a="endedCallbacks",u="errorCallbacks",c="pauseCallbacks",s="playCallbacks",f="seekedCallbacks",l="seekingCallbacks",d="stopCallbacks",h="timeUpdateCallbacks",p="waitingCallbacks",b=10003,m=-1,g={ERROR:-1,INITIALIZING:0,PLAYING:1,PAUSED:2},v=void 0,y=new WeakMap,j=function(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],n=y.get(e);if(n)for(var r=n[t]||[],i=0,a=r.length;i<a;++i)r[i].apply(e,o)};function T(){this.startTime=0,this.autoplay=!1,y.set(this,{src:"",volume:1,loop:!1}),Object.defineProperty(this,"loop",{set:function(e){e=!!e;var t,o=y.get(this);o&&("number"==typeof(t=o.audioID)&&0<=t&&v.setLoop(t,e),o.loop=e)},get:function(){var e=y.get(this);return!!e&&e.loop}}),Object.defineProperty(this,"volume",{set:function(e){"number"==typeof e?e<0?e=0:1<e&&(e=1):e=1;var t,o=y.get(this);o&&("number"==typeof(t=o.audioID)&&0<=t&&v.setVolume(t,e),o.volume=e)},get:function(){var e=y.get(this);return e?e.volume:1}}),Object.defineProperty(this,"src",{set:function(e){var t,o,n,r=y.get(this);r&&(t=r.src,"string"==typeof(r.src=e)&&("number"==typeof(o=r.audioID)&&0<=o&&v.getState(o)===g.PAUSED&&t!==e&&(v.stop(o),r.audioID=-1),n=this,v.preload(e,function(){setTimeout(function(){n.src===e&&(j(n,i),n.autoplay&&n.play())})})))},get:function(){var e=y.get(this);return e?e.src:""}}),Object.defineProperty(this,"duration",{get:function(){var e=y.get(this);if(e){e=e.audioID;if("number"==typeof e&&0<=e)return v.getDuration(e)}return NaN},set:function(){}}),Object.defineProperty(this,"currentTime",{get:function(){var e=y.get(this);if(e){e=e.audioID;if("number"==typeof e&&0<=e)return v.getCurrentTime(e)}return 0},set:function(){}}),Object.defineProperty(this,"paused",{get:function(){var e=y.get(this);if(e){e=e.audioID;if("number"==typeof e&&0<=e)return v.getState(e)===g.PAUSED}return!0},set:function(){}}),Object.defineProperty(this,"buffered",{get:function(){var e=y.get(this);if(e){e=e.audioID;if("number"==typeof e&&0<=e)return v.getBuffered(e)}return 0},set:function(){}})}o=T.prototype;o.destroy=function(){var e,t=y.get(this);t&&("number"==typeof(e=t.audioID)&&0<=e&&(v.stop(e),t.audioID=-1,j(this,d)),t[i]=[],t[a]=[],t[u]=[],t[c]=[],t[s]=[],t[f]=[],t[l]=[],t[d]=[],t[h]=[],t[p]=[],clearInterval(t.intervalID))},o.play=function(){var e=y.get(this);if(e){var t,o=e.src,n=e.audioID;if("string"==typeof o&&""!==o){if("number"==typeof n&&0<=n){if(v.getState(n)===g.PAUSED)return v.resume(n),void j(this,s);v.stop(n),e.audioID=-1}-1!==(n=v.play(o,this.loop,this.volume))?(e.audioID=n,"number"==typeof this.startTime&&0<this.startTime&&v.setCurrentTime(n,this.startTime),j(this,p),t=this,v.setCanPlayCallback(n,function(){o===t.src&&(j(t,i),j(t,s))}),v.setWaitingCallback(n,function(){o===t.src&&j(t,p)}),v.setErrorCallback(n,function(){o===t.src&&(e.audioID=-1,j(t,u))}),v.setFinishCallback(n,function(){o===t.src&&(e.audioID=-1,j(t,a))})):j(this,u,[{errMsg:"unknown",errCode:m}])}else j(this,u,[{errMsg:"invalid src",errCode:b}])}},o.pause=function(){var e=y.get(this);!e||"number"==typeof(e=e.audioID)&&0<=e&&(v.pause(e),j(this,c))},o.seek=function(e){var t=y.get(this);t&&"number"==typeof e&&0<=e&&("number"==typeof(t=t.audioID)&&0<=t&&(v.setCurrentTime(t,e),j(this,l),j(this,f)))},o.stop=function(){var e,t=y.get(this);!t||"number"==typeof(e=t.audioID)&&0<=e&&(v.stop(e),t.audioID=-1,j(this,d))},o.offCanplay=function(e){n(this,i,e)},o.offEnded=function(e){n(this,a,e)},o.offError=function(e){n(this,u,e)},o.offPause=function(e){n(this,c,e)},o.offPlay=function(e){n(this,s,e)},o.offSeeked=function(e){n(this,f,e)},o.offSeeking=function(e){n(this,l,e)},o.offStop=function(e){n(this,d,e)},o.offTimeUpdate=function(e){1===n(this,h,e)&&clearInterval(y.get(this).intervalID)},o.offWaiting=function(e){n(this,p,e)},o.onCanplay=function(e){r(this,i,e)},o.onEnded=function(e){r(this,a,e)},o.onError=function(e){r(this,u,e)},o.onPause=function(e){r(this,c,e)},o.onPlay=function(e){r(this,s,e)},o.onSeeked=function(e){r(this,f,e)},o.onSeeking=function(e){r(this,"seekingCallbacks",e)},o.onStop=function(e){r(this,d,e)},o.onTimeUpdate=function(e){var t,o;1===r(this,h,e)&&(e=y.get(this),t=this,o=setInterval(function(){var e=y.get(t);e?"number"==typeof(e=e.audioID)&&0<=e&&v.getState(e)===g.PLAYING&&j(t,h):clearInterval(o)},500),e.intervalID=o)},o.onWaiting=function(e){r(this,p,e)}},{}],2:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("onShow",i,jsb),r.default.exportTo("onHide",i,jsb),r.default.exportTo("offShow",i,jsb),r.default.exportTo("offHide",i,jsb)},{"../../util":20}],3:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("loadSubpackage",i,jsb)},{"../../util":20}],4:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("env",i,jsb),r.default.exportTo("getSystemInfo",i,jsb),r.default.exportTo("getSystemInfoSync",i,jsb)},{"../../util":20}],5:[function(e,t,o){"use strict";function s(e){for(var t,o=0;o<l.length;o++)if(t=l[o],e.identifier===t.identifier)return o;return-1}function f(e,t){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])}var n=loadRuntime(),l=[],d={touchstart:[],touchmove:[],touchend:[],touchcancel:[]};function r(e,t){for(var o=d[e]||[],n=o.length,r=0;r<n;++r)if(t===o[r])return void o.splice(r,1)}var h=!1,i=n.getSystemInfoSync();window.innerWidth&&i.windowWidth!==window.innerWidth&&(h=!0);i=function(c){return function(e){if("function"!=typeof e){var t,o=new TouchEvent(c);"touchstart"===c?e.forEach(function(e){0<=(t=s(e))?f(e,l[t]):(f(e,e={}),l.push(e))}):"touchmove"===c?e.forEach(function(e){0<=(t=s(e))&&f(e,l[t])}):"touchend"!==c&&"touchcancel"!==c||e.forEach(function(e){0<=(t=s(e))&&l.splice(t,1)});var r=[].concat(l),i=[];e.forEach(function(e){for(var t=r.length,o=0;o<t;++o){var n=r[o];if(e.identifier===n.identifier)return void i.push(n)}i.push(e)}),o.touches=r,o.targetTouches=r,o.changedTouches=i,h&&(r.forEach(function(e){e.clientX/=window.devicePixelRatio,e.clientY/=window.devicePixelRatio,e.pageX/=window.devicePixelRatio,e.pageY/=window.devicePixelRatio}),"touchcancel"!==c&&"touchend"!==c||i.forEach(function(e){e.clientX/=window.devicePixelRatio,e.clientY/=window.devicePixelRatio,e.pageX/=window.devicePixelRatio,e.pageY/=window.devicePixelRatio}));for(var n=d[c],a=n.length,u=0;u<a;u++)n[u](o)}else!function(e){for(var t=d[c],o=0,n=t.length;o<n;o++)if(e===t[o])return;t.push(e)}(e)}};n.onTouchStart?(jsb.onTouchStart=n.onTouchStart,jsb.offTouchStart=n.offTouchStart):(jsb.onTouchStart=i("touchstart"),jsb.offTouchStart=function(e){r("touchstart",e)}),n.onTouchMove?(jsb.onTouchMove=n.onTouchMove,jsb.offTouchMove=n.offTouchMove):(jsb.onTouchMove=i("touchmove"),jsb.offTouchMove=function(e){r("touchmove",e)}),n.onTouchCancel?(jsb.onTouchCancel=n.onTouchCancel,jsb.offTouchCancel=n.offTouchCancel):(jsb.onTouchCancel=i("touchcancel"),jsb.offTouchCancel=function(e){r("touchcancel",e)}),n.onTouchEnd?(jsb.onTouchEnd=n.onTouchEnd,jsb.offTouchEnd=n.offTouchEnd):(jsb.onTouchEnd=i("touchend"),jsb.offTouchEnd=function(e){r("touchend",e)})},{}],6:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i,a,u=loadRuntime(),c=[];jsb.device=jsb.device||{},u.offAccelerometerChange?(jsb.onAccelerometerChange=u.onAccelerometerChange.bind(u),jsb.offAccelerometerChange=u.offAccelerometerChange.bind(u),jsb.stopAccelerometer=u.stopAccelerometer.bind(u),i=u.startAccelerometer.bind(u),jsb.startAccelerometer=function(e){return i(Object.assign({type:"accelerationIncludingGravity"},e))},jsb.device.setMotionEnabled=function(e){e?u.startAccelerometer({type:"accelerationIncludingGravity"}):u.stopAccelerometer({})}):(r.default.weakMap.get(jsb).runtimeNonsupports.push("offAccelerometerChange"),jsb.onAccelerometerChange=function(e){if("function"==typeof e){for(var t=c.length,o=0;o<t;++o)if(e===c[o])return;c.push(e)}},jsb.offAccelerometerChange=function(e){for(var t=c.length,o=0;o<t;++o)if(e===c[o])return void c.splice(o,1)},a="android"===u.getSystemInfoSync().platform.toLowerCase(),jsb.device.dispatchDeviceMotionEvent=function(e){var t=Object.assign({},e._accelerationIncludingGravity);a?(t.x/=-10,t.y/=-10,t.z/=-10):(t.x/=10,t.y/=10,t.z/=10),c.forEach(function(e){e({x:t.x,y:t.y,z:t.z})})},jsb.stopAccelerometer=function(){jsb.device.setMotionEnabled(!1)},jsb.startAccelerometer=function(){jsb.device.setMotionEnabled(!0)})},{"../../util":20}],7:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("getBatteryInfo",i,jsb),r.default.exportTo("getBatteryInfoSync",i,jsb)},{"../../util":20}],8:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("getFileSystemManager",i,jsb)},{"../../util":20}],9:[function(e,t,o){"use strict";var n,r=(n=e("../util"))&&n.__esModule?n:{default:n};window.jsb||(window.jsb={});var i={runtimeNonsupports:[]};r.default.weakMap.set(jsb,i),jsb.runtimeSupport=function(t){return!i.runtimeNonsupports.find(function(e){return t===e})},e("./base/lifecycle"),e("./base/subpackage"),e("./base/system-info"),e("./base/touch-event"),e("./device/accelerometer"),e("./device/battery"),e("./file/file-system-manager"),e("./interface/keyboard"),e("./interface/window"),e("./media/audio"),e("./media/video"),e("./network/download"),e("./rendering/canvas"),e("./rendering/webgl"),e("./rendering/font"),e("./rendering/frame"),e("./rendering/image")},{"../util":20,"./base/lifecycle":2,"./base/subpackage":3,"./base/system-info":4,"./base/touch-event":5,"./device/accelerometer":6,"./device/battery":7,"./file/file-system-manager":8,"./interface/keyboard":10,"./interface/window":11,"./media/audio":12,"./media/video":13,"./network/download":14,"./rendering/canvas":15,"./rendering/font":16,"./rendering/frame":17,"./rendering/image":18,"./rendering/webgl":19}],10:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("onKeyboardInput",i,jsb),r.default.exportTo("onKeyboardConfirm",i,jsb),r.default.exportTo("onKeyboardComplete",i,jsb),r.default.exportTo("offKeyboardInput",i,jsb),r.default.exportTo("offKeyboardConfirm",i,jsb),r.default.exportTo("offKeyboardComplete",i,jsb),r.default.exportTo("hideKeyboard",i,jsb),r.default.exportTo("showKeyboard",i,jsb),r.default.exportTo("updateKeyboard",i,jsb)},{"../../util":20}],11:[function(e,t,o){"use strict";var n=loadRuntime().onWindowResize;jsb.onWindowResize=function(t){n(function(e){t(e.width||e.windowWidth,e.height||e.windowHeight)})}},{}],12:[function(e,t,o){"use strict";var n=r(e("../../inner-context")),e=r(e("../../util"));function r(e){return e&&e.__esModule?e:{default:e}}var i=loadRuntime();e.default.exportTo("AudioEngine",i,jsb),e.default.exportTo("createInnerAudioContext",i,jsb,function(){i.AudioEngine&&(jsb.createInnerAudioContext=function(){return(0,n.default)(i.AudioEngine)})})},{"../../inner-context":1,"../../util":20}],13:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("createVideo",i,jsb)},{"../../util":20}],14:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("downloadFile",i,jsb)},{"../../util":20}],15:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("createCanvas",i,jsb,function(){document&&"function"==typeof document.createElement&&(jsb.createCanvas=function(){return document.createElement("canvas")})})},{"../../util":20}],16:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("loadFont",i,jsb)},{"../../util":20}],17:[function(e,t,o){"use strict";var n=loadRuntime();jsb.setPreferredFramesPerSecond?jsb.setPreferredFramesPerSecond=jsb.setPreferredFramesPerSecond.bind(jsb):n.setPreferredFramesPerSecond?jsb.setPreferredFramesPerSecond=n.setPreferredFramesPerSecond.bind(n):jsb.setPreferredFramesPerSecond=function(){console.error("The setPreferredFramesPerSecond is not define!")}},{}],18:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("loadImageData",i,jsb),r.default.exportTo("createImage",i,jsb,function(){document&&"function"==typeof document.createElement&&(jsb.createImage=function(){return document.createElement("image")})})},{"../../util":20}],19:[function(e,t,o){"use strict";var h,p,b;window.__gl&&(h=window.__gl,p=h.texImage2D,h.texImage2D=function(e,t,o,n,r,i,a,u,c){var s,f,l,d=arguments.length;6===d?(u=r,a=n,(s=i)instanceof HTMLImageElement?(f=console.error,console.error=function(){},p.apply(void 0,arguments),console.error=f,h.texImage2D_image(e,t,s._imageMeta)):s instanceof HTMLCanvasElement?(l=console.error,console.error=function(){},p.apply(void 0,arguments),console.error=l,l=s.getContext("2d"),h.texImage2D_canvas(e,t,o,a,u,l)):s instanceof ImageData?(l=console.error,console.error=function(){},p(e,t,o,s.width,s.height,0,a,u,s.data),console.error=l):console.error("Invalid pixel argument passed to gl.texImage2D!")):9===d?p(e,t,o,n,r,i,a,u,c):console.error("gl.texImage2D: invalid argument count!")},b=h.texSubImage2D,h.texSubImage2D=function(e,t,o,n,r,i,a,u,c){var s,f,l,d=arguments.length;7===d?(s=a,u=i,a=r,s instanceof HTMLImageElement?(f=console.error,console.error=function(){},b.apply(void 0,arguments),console.error=f,h.texSubImage2D_image(e,t,o,n,s._imageMeta)):s instanceof HTMLCanvasElement?(l=console.error,console.error=function(){},b.apply(void 0,arguments),console.error=l,l=s.getContext("2d"),h.texSubImage2D_canvas(e,t,o,n,a,u,l)):s instanceof ImageData?(l=console.error,console.error=function(){},b(e,t,o,n,s.width,s.height,a,u,s.data),console.error=l):console.error("Invalid pixel argument passed to gl.texImage2D!")):9===d?b(e,t,o,n,r,i,a,u,c):console.error(new Error("gl.texImage2D: invalid argument count!").stack)})},{}],20:[function(e,t,o){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={exportTo:function(e,t,o,n){var r;"object"===i(t)&&"object"===i(o)?void 0!==(r=t[e])?"function"==typeof r?(o[e]=r.bind(t),Object.assign(o[e],r)):o[e]=r:(this.weakMap.get(o).runtimeNonsupports.push(e),o[e]=function(){return console.error(e+" is not support!"),{}},"function"==typeof n&&n()):console.warn("invalid exportTo: ",e)},weakMap:new WeakMap};o.default=n},{}]},{},[9]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqc2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIG4ocixpLGEpe2Z1bmN0aW9uIHUodCxlKXtpZighaVt0XSl7aWYoIXJbdF0pe3ZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWUmJm8pcmV0dXJuIG8odCwhMCk7aWYoYylyZXR1cm4gYyh0LCEwKTt0aHJvdyhvPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrdCtcIidcIikpLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsb31vPWlbdF09e2V4cG9ydHM6e319LHJbdF1bMF0uY2FsbChvLmV4cG9ydHMsZnVuY3Rpb24oZSl7cmV0dXJuIHUoclt0XVsxXVtlXXx8ZSl9LG8sby5leHBvcnRzLG4scixpLGEpfXJldHVybiBpW3RdLmV4cG9ydHN9Zm9yKHZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsZT0wO2U8YS5sZW5ndGg7ZSsrKXUoYVtlXSk7cmV0dXJuIHV9KHsxOltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5kZWZhdWx0PWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXYmJih2PU9iamVjdC5hc3NpZ24oe30sdCksT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0W2VdJiYodFtlXT1mdW5jdGlvbigpe3JldHVybiBjb25zb2xlLndhcm4oXCJBdWRpb0VuZ2luZS5cIitlK1wiIGlzIGRlcHJlY2F0ZWRcIiksdltlXS5hcHBseSh0LGFyZ3VtZW50cyl9KX0pKTtyZXR1cm4gbmV3IFR9O2Z1bmN0aW9uIG4oZSx0LG8pe2lmKGU9eS5nZXQoZSksXCJmdW5jdGlvblwiIT10eXBlb2Ygb3x8IWUpcmV0dXJuLTE7Zm9yKHZhciBuPWVbdF18fFtdLHI9MCxpPW4ubGVuZ3RoO3I8aTsrK3IpaWYobz09PW5bcl0pcmV0dXJuIG4uc3BsaWNlKHIsMSksby5sZW5ndGgrMTtyZXR1cm4gMH1mdW5jdGlvbiByKGUsdCxvKXtpZihlPXkuZ2V0KGUpLFwiZnVuY3Rpb25cIiE9dHlwZW9mIG98fCFlKXJldHVybi0xO3ZhciBuPWVbdF07aWYobil7Zm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7KytyKWlmKG89PT1uW3JdKXJldHVybiAwO24ucHVzaChvKX1lbHNlIG49ZVt0XT1bb107cmV0dXJuIG4ubGVuZ3RofXZhciBpPVwiY2FucGxheUNhbGxiYWNrc1wiLGE9XCJlbmRlZENhbGxiYWNrc1wiLHU9XCJlcnJvckNhbGxiYWNrc1wiLGM9XCJwYXVzZUNhbGxiYWNrc1wiLHM9XCJwbGF5Q2FsbGJhY2tzXCIsZj1cInNlZWtlZENhbGxiYWNrc1wiLGw9XCJzZWVraW5nQ2FsbGJhY2tzXCIsZD1cInN0b3BDYWxsYmFja3NcIixoPVwidGltZVVwZGF0ZUNhbGxiYWNrc1wiLHA9XCJ3YWl0aW5nQ2FsbGJhY2tzXCIsYj0xMDAwMyxtPS0xLGc9e0VSUk9SOi0xLElOSVRJQUxJWklORzowLFBMQVlJTkc6MSxQQVVTRUQ6Mn0sdj12b2lkIDAseT1uZXcgV2Vha01hcCxqPWZ1bmN0aW9uKGUsdCl7dmFyIG89Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOltdLG49eS5nZXQoZSk7aWYobilmb3IodmFyIHI9blt0XXx8W10saT0wLGE9ci5sZW5ndGg7aTxhOysraSlyW2ldLmFwcGx5KGUsbyl9O2Z1bmN0aW9uIFQoKXt0aGlzLnN0YXJ0VGltZT0wLHRoaXMuYXV0b3BsYXk9ITEseS5zZXQodGhpcyx7c3JjOlwiXCIsdm9sdW1lOjEsbG9vcDohMX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibG9vcFwiLHtzZXQ6ZnVuY3Rpb24oZSl7ZT0hIWU7dmFyIHQsbz15LmdldCh0aGlzKTtvJiYoXCJudW1iZXJcIj09dHlwZW9mKHQ9by5hdWRpb0lEKSYmMDw9dCYmdi5zZXRMb29wKHQsZSksby5sb29wPWUpfSxnZXQ6ZnVuY3Rpb24oKXt2YXIgZT15LmdldCh0aGlzKTtyZXR1cm4hIWUmJmUubG9vcH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInZvbHVtZVwiLHtzZXQ6ZnVuY3Rpb24oZSl7XCJudW1iZXJcIj09dHlwZW9mIGU/ZTwwP2U9MDoxPGUmJihlPTEpOmU9MTt2YXIgdCxvPXkuZ2V0KHRoaXMpO28mJihcIm51bWJlclwiPT10eXBlb2YodD1vLmF1ZGlvSUQpJiYwPD10JiZ2LnNldFZvbHVtZSh0LGUpLG8udm9sdW1lPWUpfSxnZXQ6ZnVuY3Rpb24oKXt2YXIgZT15LmdldCh0aGlzKTtyZXR1cm4gZT9lLnZvbHVtZToxfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic3JjXCIse3NldDpmdW5jdGlvbihlKXt2YXIgdCxvLG4scj15LmdldCh0aGlzKTtyJiYodD1yLnNyYyxcInN0cmluZ1wiPT10eXBlb2Yoci5zcmM9ZSkmJihcIm51bWJlclwiPT10eXBlb2Yobz1yLmF1ZGlvSUQpJiYwPD1vJiZ2LmdldFN0YXRlKG8pPT09Zy5QQVVTRUQmJnQhPT1lJiYodi5zdG9wKG8pLHIuYXVkaW9JRD0tMSksbj10aGlzLHYucHJlbG9hZChlLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe24uc3JjPT09ZSYmKGoobixpKSxuLmF1dG9wbGF5JiZuLnBsYXkoKSl9KX0pKSl9LGdldDpmdW5jdGlvbigpe3ZhciBlPXkuZ2V0KHRoaXMpO3JldHVybiBlP2Uuc3JjOlwiXCJ9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJkdXJhdGlvblwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgZT15LmdldCh0aGlzKTtpZihlKXtlPWUuYXVkaW9JRDtpZihcIm51bWJlclwiPT10eXBlb2YgZSYmMDw9ZSlyZXR1cm4gdi5nZXREdXJhdGlvbihlKX1yZXR1cm4gTmFOfSxzZXQ6ZnVuY3Rpb24oKXt9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjdXJyZW50VGltZVwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgZT15LmdldCh0aGlzKTtpZihlKXtlPWUuYXVkaW9JRDtpZihcIm51bWJlclwiPT10eXBlb2YgZSYmMDw9ZSlyZXR1cm4gdi5nZXRDdXJyZW50VGltZShlKX1yZXR1cm4gMH0sc2V0OmZ1bmN0aW9uKCl7fX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGF1c2VkXCIse2dldDpmdW5jdGlvbigpe3ZhciBlPXkuZ2V0KHRoaXMpO2lmKGUpe2U9ZS5hdWRpb0lEO2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlJiYwPD1lKXJldHVybiB2LmdldFN0YXRlKGUpPT09Zy5QQVVTRUR9cmV0dXJuITB9LHNldDpmdW5jdGlvbigpe319KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImJ1ZmZlcmVkXCIse2dldDpmdW5jdGlvbigpe3ZhciBlPXkuZ2V0KHRoaXMpO2lmKGUpe2U9ZS5hdWRpb0lEO2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlJiYwPD1lKXJldHVybiB2LmdldEJ1ZmZlcmVkKGUpfXJldHVybiAwfSxzZXQ6ZnVuY3Rpb24oKXt9fSl9bz1ULnByb3RvdHlwZTtvLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZSx0PXkuZ2V0KHRoaXMpO3QmJihcIm51bWJlclwiPT10eXBlb2YoZT10LmF1ZGlvSUQpJiYwPD1lJiYodi5zdG9wKGUpLHQuYXVkaW9JRD0tMSxqKHRoaXMsZCkpLHRbaV09W10sdFthXT1bXSx0W3VdPVtdLHRbY109W10sdFtzXT1bXSx0W2ZdPVtdLHRbbF09W10sdFtkXT1bXSx0W2hdPVtdLHRbcF09W10sY2xlYXJJbnRlcnZhbCh0LmludGVydmFsSUQpKX0sby5wbGF5PWZ1bmN0aW9uKCl7dmFyIGU9eS5nZXQodGhpcyk7aWYoZSl7dmFyIHQsbz1lLnNyYyxuPWUuYXVkaW9JRDtpZihcInN0cmluZ1wiPT10eXBlb2YgbyYmXCJcIiE9PW8pe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBuJiYwPD1uKXtpZih2LmdldFN0YXRlKG4pPT09Zy5QQVVTRUQpcmV0dXJuIHYucmVzdW1lKG4pLHZvaWQgaih0aGlzLHMpO3Yuc3RvcChuKSxlLmF1ZGlvSUQ9LTF9LTEhPT0obj12LnBsYXkobyx0aGlzLmxvb3AsdGhpcy52b2x1bWUpKT8oZS5hdWRpb0lEPW4sXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuc3RhcnRUaW1lJiYwPHRoaXMuc3RhcnRUaW1lJiZ2LnNldEN1cnJlbnRUaW1lKG4sdGhpcy5zdGFydFRpbWUpLGoodGhpcyxwKSx0PXRoaXMsdi5zZXRDYW5QbGF5Q2FsbGJhY2sobixmdW5jdGlvbigpe289PT10LnNyYyYmKGoodCxpKSxqKHQscykpfSksdi5zZXRXYWl0aW5nQ2FsbGJhY2sobixmdW5jdGlvbigpe289PT10LnNyYyYmaih0LHApfSksdi5zZXRFcnJvckNhbGxiYWNrKG4sZnVuY3Rpb24oKXtvPT09dC5zcmMmJihlLmF1ZGlvSUQ9LTEsaih0LHUpKX0pLHYuc2V0RmluaXNoQ2FsbGJhY2sobixmdW5jdGlvbigpe289PT10LnNyYyYmKGUuYXVkaW9JRD0tMSxqKHQsYSkpfSkpOmoodGhpcyx1LFt7ZXJyTXNnOlwidW5rbm93blwiLGVyckNvZGU6bX1dKX1lbHNlIGoodGhpcyx1LFt7ZXJyTXNnOlwiaW52YWxpZCBzcmNcIixlcnJDb2RlOmJ9XSl9fSxvLnBhdXNlPWZ1bmN0aW9uKCl7dmFyIGU9eS5nZXQodGhpcyk7IWV8fFwibnVtYmVyXCI9PXR5cGVvZihlPWUuYXVkaW9JRCkmJjA8PWUmJih2LnBhdXNlKGUpLGoodGhpcyxjKSl9LG8uc2Vlaz1mdW5jdGlvbihlKXt2YXIgdD15LmdldCh0aGlzKTt0JiZcIm51bWJlclwiPT10eXBlb2YgZSYmMDw9ZSYmKFwibnVtYmVyXCI9PXR5cGVvZih0PXQuYXVkaW9JRCkmJjA8PXQmJih2LnNldEN1cnJlbnRUaW1lKHQsZSksaih0aGlzLGwpLGoodGhpcyxmKSkpfSxvLnN0b3A9ZnVuY3Rpb24oKXt2YXIgZSx0PXkuZ2V0KHRoaXMpOyF0fHxcIm51bWJlclwiPT10eXBlb2YoZT10LmF1ZGlvSUQpJiYwPD1lJiYodi5zdG9wKGUpLHQuYXVkaW9JRD0tMSxqKHRoaXMsZCkpfSxvLm9mZkNhbnBsYXk9ZnVuY3Rpb24oZSl7bih0aGlzLGksZSl9LG8ub2ZmRW5kZWQ9ZnVuY3Rpb24oZSl7bih0aGlzLGEsZSl9LG8ub2ZmRXJyb3I9ZnVuY3Rpb24oZSl7bih0aGlzLHUsZSl9LG8ub2ZmUGF1c2U9ZnVuY3Rpb24oZSl7bih0aGlzLGMsZSl9LG8ub2ZmUGxheT1mdW5jdGlvbihlKXtuKHRoaXMscyxlKX0sby5vZmZTZWVrZWQ9ZnVuY3Rpb24oZSl7bih0aGlzLGYsZSl9LG8ub2ZmU2Vla2luZz1mdW5jdGlvbihlKXtuKHRoaXMsbCxlKX0sby5vZmZTdG9wPWZ1bmN0aW9uKGUpe24odGhpcyxkLGUpfSxvLm9mZlRpbWVVcGRhdGU9ZnVuY3Rpb24oZSl7MT09PW4odGhpcyxoLGUpJiZjbGVhckludGVydmFsKHkuZ2V0KHRoaXMpLmludGVydmFsSUQpfSxvLm9mZldhaXRpbmc9ZnVuY3Rpb24oZSl7bih0aGlzLHAsZSl9LG8ub25DYW5wbGF5PWZ1bmN0aW9uKGUpe3IodGhpcyxpLGUpfSxvLm9uRW5kZWQ9ZnVuY3Rpb24oZSl7cih0aGlzLGEsZSl9LG8ub25FcnJvcj1mdW5jdGlvbihlKXtyKHRoaXMsdSxlKX0sby5vblBhdXNlPWZ1bmN0aW9uKGUpe3IodGhpcyxjLGUpfSxvLm9uUGxheT1mdW5jdGlvbihlKXtyKHRoaXMscyxlKX0sby5vblNlZWtlZD1mdW5jdGlvbihlKXtyKHRoaXMsZixlKX0sby5vblNlZWtpbmc9ZnVuY3Rpb24oZSl7cih0aGlzLFwic2Vla2luZ0NhbGxiYWNrc1wiLGUpfSxvLm9uU3RvcD1mdW5jdGlvbihlKXtyKHRoaXMsZCxlKX0sby5vblRpbWVVcGRhdGU9ZnVuY3Rpb24oZSl7dmFyIHQsbzsxPT09cih0aGlzLGgsZSkmJihlPXkuZ2V0KHRoaXMpLHQ9dGhpcyxvPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIGU9eS5nZXQodCk7ZT9cIm51bWJlclwiPT10eXBlb2YoZT1lLmF1ZGlvSUQpJiYwPD1lJiZ2LmdldFN0YXRlKGUpPT09Zy5QTEFZSU5HJiZqKHQsaCk6Y2xlYXJJbnRlcnZhbChvKX0sNTAwKSxlLmludGVydmFsSUQ9byl9LG8ub25XYWl0aW5nPWZ1bmN0aW9uKGUpe3IodGhpcyxwLGUpfX0se31dLDI6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi8uLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07dmFyIGk9bG9hZFJ1bnRpbWUoKTtyLmRlZmF1bHQuZXhwb3J0VG8oXCJvblNob3dcIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwib25IaWRlXCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcIm9mZlNob3dcIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwib2ZmSGlkZVwiLGksanNiKX0se1wiLi4vLi4vdXRpbFwiOjIwfV0sMzpbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO3ZhciBuLHI9KG49ZShcIi4uLy4uL3V0aWxcIikpJiZuLl9fZXNNb2R1bGU/bjp7ZGVmYXVsdDpufTt2YXIgaT1sb2FkUnVudGltZSgpO3IuZGVmYXVsdC5leHBvcnRUbyhcImxvYWRTdWJwYWNrYWdlXCIsaSxqc2IpfSx7XCIuLi8uLi91dGlsXCI6MjB9XSw0OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwiZW52XCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcImdldFN5c3RlbUluZm9cIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwiZ2V0U3lzdGVtSW5mb1N5bmNcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDU6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUpe2Zvcih2YXIgdCxvPTA7bzxsLmxlbmd0aDtvKyspaWYodD1sW29dLGUuaWRlbnRpZmllcj09PXQuaWRlbnRpZmllcilyZXR1cm4gbztyZXR1cm4tMX1mdW5jdGlvbiBmKGUsdCl7Zm9yKHZhciBvIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShvKSYmKHRbb109ZVtvXSl9dmFyIG49bG9hZFJ1bnRpbWUoKSxsPVtdLGQ9e3RvdWNoc3RhcnQ6W10sdG91Y2htb3ZlOltdLHRvdWNoZW5kOltdLHRvdWNoY2FuY2VsOltdfTtmdW5jdGlvbiByKGUsdCl7Zm9yKHZhciBvPWRbZV18fFtdLG49by5sZW5ndGgscj0wO3I8bjsrK3IpaWYodD09PW9bcl0pcmV0dXJuIHZvaWQgby5zcGxpY2UociwxKX12YXIgaD0hMSxpPW4uZ2V0U3lzdGVtSW5mb1N5bmMoKTt3aW5kb3cuaW5uZXJXaWR0aCYmaS53aW5kb3dXaWR0aCE9PXdpbmRvdy5pbm5lcldpZHRoJiYoaD0hMCk7aT1mdW5jdGlvbihjKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl7dmFyIHQsbz1uZXcgVG91Y2hFdmVudChjKTtcInRvdWNoc3RhcnRcIj09PWM/ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpezA8PSh0PXMoZSkpP2YoZSxsW3RdKTooZihlLGU9e30pLGwucHVzaChlKSl9KTpcInRvdWNobW92ZVwiPT09Yz9lLmZvckVhY2goZnVuY3Rpb24oZSl7MDw9KHQ9cyhlKSkmJmYoZSxsW3RdKX0pOlwidG91Y2hlbmRcIiE9PWMmJlwidG91Y2hjYW5jZWxcIiE9PWN8fGUuZm9yRWFjaChmdW5jdGlvbihlKXswPD0odD1zKGUpKSYmbC5zcGxpY2UodCwxKX0pO3ZhciByPVtdLmNvbmNhdChsKSxpPVtdO2UuZm9yRWFjaChmdW5jdGlvbihlKXtmb3IodmFyIHQ9ci5sZW5ndGgsbz0wO288dDsrK28pe3ZhciBuPXJbb107aWYoZS5pZGVudGlmaWVyPT09bi5pZGVudGlmaWVyKXJldHVybiB2b2lkIGkucHVzaChuKX1pLnB1c2goZSl9KSxvLnRvdWNoZXM9cixvLnRhcmdldFRvdWNoZXM9cixvLmNoYW5nZWRUb3VjaGVzPWksaCYmKHIuZm9yRWFjaChmdW5jdGlvbihlKXtlLmNsaWVudFgvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLGUuY2xpZW50WS89d2luZG93LmRldmljZVBpeGVsUmF0aW8sZS5wYWdlWC89d2luZG93LmRldmljZVBpeGVsUmF0aW8sZS5wYWdlWS89d2luZG93LmRldmljZVBpeGVsUmF0aW99KSxcInRvdWNoY2FuY2VsXCIhPT1jJiZcInRvdWNoZW5kXCIhPT1jfHxpLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5jbGllbnRYLz13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxlLmNsaWVudFkvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLGUucGFnZVgvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLGUucGFnZVkvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfSkpO2Zvcih2YXIgbj1kW2NdLGE9bi5sZW5ndGgsdT0wO3U8YTt1Kyspblt1XShvKX1lbHNlIWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1kW2NdLG89MCxuPXQubGVuZ3RoO288bjtvKyspaWYoZT09PXRbb10pcmV0dXJuO3QucHVzaChlKX0oZSl9fTtuLm9uVG91Y2hTdGFydD8oanNiLm9uVG91Y2hTdGFydD1uLm9uVG91Y2hTdGFydCxqc2Iub2ZmVG91Y2hTdGFydD1uLm9mZlRvdWNoU3RhcnQpOihqc2Iub25Ub3VjaFN0YXJ0PWkoXCJ0b3VjaHN0YXJ0XCIpLGpzYi5vZmZUb3VjaFN0YXJ0PWZ1bmN0aW9uKGUpe3IoXCJ0b3VjaHN0YXJ0XCIsZSl9KSxuLm9uVG91Y2hNb3ZlPyhqc2Iub25Ub3VjaE1vdmU9bi5vblRvdWNoTW92ZSxqc2Iub2ZmVG91Y2hNb3ZlPW4ub2ZmVG91Y2hNb3ZlKTooanNiLm9uVG91Y2hNb3ZlPWkoXCJ0b3VjaG1vdmVcIiksanNiLm9mZlRvdWNoTW92ZT1mdW5jdGlvbihlKXtyKFwidG91Y2htb3ZlXCIsZSl9KSxuLm9uVG91Y2hDYW5jZWw/KGpzYi5vblRvdWNoQ2FuY2VsPW4ub25Ub3VjaENhbmNlbCxqc2Iub2ZmVG91Y2hDYW5jZWw9bi5vZmZUb3VjaENhbmNlbCk6KGpzYi5vblRvdWNoQ2FuY2VsPWkoXCJ0b3VjaGNhbmNlbFwiKSxqc2Iub2ZmVG91Y2hDYW5jZWw9ZnVuY3Rpb24oZSl7cihcInRvdWNoY2FuY2VsXCIsZSl9KSxuLm9uVG91Y2hFbmQ/KGpzYi5vblRvdWNoRW5kPW4ub25Ub3VjaEVuZCxqc2Iub2ZmVG91Y2hFbmQ9bi5vZmZUb3VjaEVuZCk6KGpzYi5vblRvdWNoRW5kPWkoXCJ0b3VjaGVuZFwiKSxqc2Iub2ZmVG91Y2hFbmQ9ZnVuY3Rpb24oZSl7cihcInRvdWNoZW5kXCIsZSl9KX0se31dLDY6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi8uLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07dmFyIGksYSx1PWxvYWRSdW50aW1lKCksYz1bXTtqc2IuZGV2aWNlPWpzYi5kZXZpY2V8fHt9LHUub2ZmQWNjZWxlcm9tZXRlckNoYW5nZT8oanNiLm9uQWNjZWxlcm9tZXRlckNoYW5nZT11Lm9uQWNjZWxlcm9tZXRlckNoYW5nZS5iaW5kKHUpLGpzYi5vZmZBY2NlbGVyb21ldGVyQ2hhbmdlPXUub2ZmQWNjZWxlcm9tZXRlckNoYW5nZS5iaW5kKHUpLGpzYi5zdG9wQWNjZWxlcm9tZXRlcj11LnN0b3BBY2NlbGVyb21ldGVyLmJpbmQodSksaT11LnN0YXJ0QWNjZWxlcm9tZXRlci5iaW5kKHUpLGpzYi5zdGFydEFjY2VsZXJvbWV0ZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIGkoT2JqZWN0LmFzc2lnbih7dHlwZTpcImFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHlcIn0sZSkpfSxqc2IuZGV2aWNlLnNldE1vdGlvbkVuYWJsZWQ9ZnVuY3Rpb24oZSl7ZT91LnN0YXJ0QWNjZWxlcm9tZXRlcih7dHlwZTpcImFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHlcIn0pOnUuc3RvcEFjY2VsZXJvbWV0ZXIoe30pfSk6KHIuZGVmYXVsdC53ZWFrTWFwLmdldChqc2IpLnJ1bnRpbWVOb25zdXBwb3J0cy5wdXNoKFwib2ZmQWNjZWxlcm9tZXRlckNoYW5nZVwiKSxqc2Iub25BY2NlbGVyb21ldGVyQ2hhbmdlPWZ1bmN0aW9uKGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe2Zvcih2YXIgdD1jLmxlbmd0aCxvPTA7bzx0OysrbylpZihlPT09Y1tvXSlyZXR1cm47Yy5wdXNoKGUpfX0sanNiLm9mZkFjY2VsZXJvbWV0ZXJDaGFuZ2U9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWMubGVuZ3RoLG89MDtvPHQ7KytvKWlmKGU9PT1jW29dKXJldHVybiB2b2lkIGMuc3BsaWNlKG8sMSl9LGE9XCJhbmRyb2lkXCI9PT11LmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0udG9Mb3dlckNhc2UoKSxqc2IuZGV2aWNlLmRpc3BhdGNoRGV2aWNlTW90aW9uRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSxlLl9hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5KTthPyh0LngvPS0xMCx0LnkvPS0xMCx0LnovPS0xMCk6KHQueC89MTAsdC55Lz0xMCx0LnovPTEwKSxjLmZvckVhY2goZnVuY3Rpb24oZSl7ZSh7eDp0LngseTp0Lnksejp0Lnp9KX0pfSxqc2Iuc3RvcEFjY2VsZXJvbWV0ZXI9ZnVuY3Rpb24oKXtqc2IuZGV2aWNlLnNldE1vdGlvbkVuYWJsZWQoITEpfSxqc2Iuc3RhcnRBY2NlbGVyb21ldGVyPWZ1bmN0aW9uKCl7anNiLmRldmljZS5zZXRNb3Rpb25FbmFibGVkKCEwKX0pfSx7XCIuLi8uLi91dGlsXCI6MjB9XSw3OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwiZ2V0QmF0dGVyeUluZm9cIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwiZ2V0QmF0dGVyeUluZm9TeW5jXCIsaSxqc2IpfSx7XCIuLi8uLi91dGlsXCI6MjB9XSw4OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwiZ2V0RmlsZVN5c3RlbU1hbmFnZXJcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDk6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07d2luZG93LmpzYnx8KHdpbmRvdy5qc2I9e30pO3ZhciBpPXtydW50aW1lTm9uc3VwcG9ydHM6W119O3IuZGVmYXVsdC53ZWFrTWFwLnNldChqc2IsaSksanNiLnJ1bnRpbWVTdXBwb3J0PWZ1bmN0aW9uKHQpe3JldHVybiFpLnJ1bnRpbWVOb25zdXBwb3J0cy5maW5kKGZ1bmN0aW9uKGUpe3JldHVybiB0PT09ZX0pfSxlKFwiLi9iYXNlL2xpZmVjeWNsZVwiKSxlKFwiLi9iYXNlL3N1YnBhY2thZ2VcIiksZShcIi4vYmFzZS9zeXN0ZW0taW5mb1wiKSxlKFwiLi9iYXNlL3RvdWNoLWV2ZW50XCIpLGUoXCIuL2RldmljZS9hY2NlbGVyb21ldGVyXCIpLGUoXCIuL2RldmljZS9iYXR0ZXJ5XCIpLGUoXCIuL2ZpbGUvZmlsZS1zeXN0ZW0tbWFuYWdlclwiKSxlKFwiLi9pbnRlcmZhY2Uva2V5Ym9hcmRcIiksZShcIi4vaW50ZXJmYWNlL3dpbmRvd1wiKSxlKFwiLi9tZWRpYS9hdWRpb1wiKSxlKFwiLi9tZWRpYS92aWRlb1wiKSxlKFwiLi9uZXR3b3JrL2Rvd25sb2FkXCIpLGUoXCIuL3JlbmRlcmluZy9jYW52YXNcIiksZShcIi4vcmVuZGVyaW5nL3dlYmdsXCIpLGUoXCIuL3JlbmRlcmluZy9mb250XCIpLGUoXCIuL3JlbmRlcmluZy9mcmFtZVwiKSxlKFwiLi9yZW5kZXJpbmcvaW1hZ2VcIil9LHtcIi4uL3V0aWxcIjoyMCxcIi4vYmFzZS9saWZlY3ljbGVcIjoyLFwiLi9iYXNlL3N1YnBhY2thZ2VcIjozLFwiLi9iYXNlL3N5c3RlbS1pbmZvXCI6NCxcIi4vYmFzZS90b3VjaC1ldmVudFwiOjUsXCIuL2RldmljZS9hY2NlbGVyb21ldGVyXCI6NixcIi4vZGV2aWNlL2JhdHRlcnlcIjo3LFwiLi9maWxlL2ZpbGUtc3lzdGVtLW1hbmFnZXJcIjo4LFwiLi9pbnRlcmZhY2Uva2V5Ym9hcmRcIjoxMCxcIi4vaW50ZXJmYWNlL3dpbmRvd1wiOjExLFwiLi9tZWRpYS9hdWRpb1wiOjEyLFwiLi9tZWRpYS92aWRlb1wiOjEzLFwiLi9uZXR3b3JrL2Rvd25sb2FkXCI6MTQsXCIuL3JlbmRlcmluZy9jYW52YXNcIjoxNSxcIi4vcmVuZGVyaW5nL2ZvbnRcIjoxNixcIi4vcmVuZGVyaW5nL2ZyYW1lXCI6MTcsXCIuL3JlbmRlcmluZy9pbWFnZVwiOjE4LFwiLi9yZW5kZXJpbmcvd2ViZ2xcIjoxOX1dLDEwOltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwib25LZXlib2FyZElucHV0XCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcIm9uS2V5Ym9hcmRDb25maXJtXCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcIm9uS2V5Ym9hcmRDb21wbGV0ZVwiLGksanNiKSxyLmRlZmF1bHQuZXhwb3J0VG8oXCJvZmZLZXlib2FyZElucHV0XCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcIm9mZktleWJvYXJkQ29uZmlybVwiLGksanNiKSxyLmRlZmF1bHQuZXhwb3J0VG8oXCJvZmZLZXlib2FyZENvbXBsZXRlXCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcImhpZGVLZXlib2FyZFwiLGksanNiKSxyLmRlZmF1bHQuZXhwb3J0VG8oXCJzaG93S2V5Ym9hcmRcIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwidXBkYXRlS2V5Ym9hcmRcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDExOltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49bG9hZFJ1bnRpbWUoKS5vbldpbmRvd1Jlc2l6ZTtqc2Iub25XaW5kb3dSZXNpemU9ZnVuY3Rpb24odCl7bihmdW5jdGlvbihlKXt0KGUud2lkdGh8fGUud2luZG93V2lkdGgsZS5oZWlnaHR8fGUud2luZG93SGVpZ2h0KX0pfX0se31dLDEyOltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cihlKFwiLi4vLi4vaW5uZXItY29udGV4dFwiKSksZT1yKGUoXCIuLi8uLi91dGlsXCIpKTtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgaT1sb2FkUnVudGltZSgpO2UuZGVmYXVsdC5leHBvcnRUbyhcIkF1ZGlvRW5naW5lXCIsaSxqc2IpLGUuZGVmYXVsdC5leHBvcnRUbyhcImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0XCIsaSxqc2IsZnVuY3Rpb24oKXtpLkF1ZGlvRW5naW5lJiYoanNiLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuKDAsbi5kZWZhdWx0KShpLkF1ZGlvRW5naW5lKX0pfSl9LHtcIi4uLy4uL2lubmVyLWNvbnRleHRcIjoxLFwiLi4vLi4vdXRpbFwiOjIwfV0sMTM6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi8uLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07dmFyIGk9bG9hZFJ1bnRpbWUoKTtyLmRlZmF1bHQuZXhwb3J0VG8oXCJjcmVhdGVWaWRlb1wiLGksanNiKX0se1wiLi4vLi4vdXRpbFwiOjIwfV0sMTQ6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi8uLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07dmFyIGk9bG9hZFJ1bnRpbWUoKTtyLmRlZmF1bHQuZXhwb3J0VG8oXCJkb3dubG9hZEZpbGVcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDE1OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwiY3JlYXRlQ2FudmFzXCIsaSxqc2IsZnVuY3Rpb24oKXtkb2N1bWVudCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCYmKGpzYi5jcmVhdGVDYW52YXM9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKX0pfSl9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDE2OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwibG9hZEZvbnRcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDE3OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49bG9hZFJ1bnRpbWUoKTtqc2Iuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kP2pzYi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQ9anNiLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZC5iaW5kKGpzYik6bi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQ/anNiLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZD1uLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZC5iaW5kKG4pOmpzYi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQ9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiVGhlIHNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCBpcyBub3QgZGVmaW5lIVwiKX19LHt9XSwxODpbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO3ZhciBuLHI9KG49ZShcIi4uLy4uL3V0aWxcIikpJiZuLl9fZXNNb2R1bGU/bjp7ZGVmYXVsdDpufTt2YXIgaT1sb2FkUnVudGltZSgpO3IuZGVmYXVsdC5leHBvcnRUbyhcImxvYWRJbWFnZURhdGFcIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwiY3JlYXRlSW1hZ2VcIixpLGpzYixmdW5jdGlvbigpe2RvY3VtZW50JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50JiYoanNiLmNyZWF0ZUltYWdlPWZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWFnZVwiKX0pfSl9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDE5OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGgscCxiO3dpbmRvdy5fX2dsJiYoaD13aW5kb3cuX19nbCxwPWgudGV4SW1hZ2UyRCxoLnRleEltYWdlMkQ9ZnVuY3Rpb24oZSx0LG8sbixyLGksYSx1LGMpe3ZhciBzLGYsbCxkPWFyZ3VtZW50cy5sZW5ndGg7Nj09PWQ/KHU9cixhPW4sKHM9aSlpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQ/KGY9Y29uc29sZS5lcnJvcixjb25zb2xlLmVycm9yPWZ1bmN0aW9uKCl7fSxwLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpLGNvbnNvbGUuZXJyb3I9ZixoLnRleEltYWdlMkRfaW1hZ2UoZSx0LHMuX2ltYWdlTWV0YSkpOnMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudD8obD1jb25zb2xlLmVycm9yLGNvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oKXt9LHAuYXBwbHkodm9pZCAwLGFyZ3VtZW50cyksY29uc29sZS5lcnJvcj1sLGw9cy5nZXRDb250ZXh0KFwiMmRcIiksaC50ZXhJbWFnZTJEX2NhbnZhcyhlLHQsbyxhLHUsbCkpOnMgaW5zdGFuY2VvZiBJbWFnZURhdGE/KGw9Y29uc29sZS5lcnJvcixjb25zb2xlLmVycm9yPWZ1bmN0aW9uKCl7fSxwKGUsdCxvLHMud2lkdGgscy5oZWlnaHQsMCxhLHUscy5kYXRhKSxjb25zb2xlLmVycm9yPWwpOmNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHBpeGVsIGFyZ3VtZW50IHBhc3NlZCB0byBnbC50ZXhJbWFnZTJEIVwiKSk6OT09PWQ/cChlLHQsbyxuLHIsaSxhLHUsYyk6Y29uc29sZS5lcnJvcihcImdsLnRleEltYWdlMkQ6IGludmFsaWQgYXJndW1lbnQgY291bnQhXCIpfSxiPWgudGV4U3ViSW1hZ2UyRCxoLnRleFN1YkltYWdlMkQ9ZnVuY3Rpb24oZSx0LG8sbixyLGksYSx1LGMpe3ZhciBzLGYsbCxkPWFyZ3VtZW50cy5sZW5ndGg7Nz09PWQ/KHM9YSx1PWksYT1yLHMgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50PyhmPWNvbnNvbGUuZXJyb3IsY29uc29sZS5lcnJvcj1mdW5jdGlvbigpe30sYi5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSxjb25zb2xlLmVycm9yPWYsaC50ZXhTdWJJbWFnZTJEX2ltYWdlKGUsdCxvLG4scy5faW1hZ2VNZXRhKSk6cyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50PyhsPWNvbnNvbGUuZXJyb3IsY29uc29sZS5lcnJvcj1mdW5jdGlvbigpe30sYi5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSxjb25zb2xlLmVycm9yPWwsbD1zLmdldENvbnRleHQoXCIyZFwiKSxoLnRleFN1YkltYWdlMkRfY2FudmFzKGUsdCxvLG4sYSx1LGwpKTpzIGluc3RhbmNlb2YgSW1hZ2VEYXRhPyhsPWNvbnNvbGUuZXJyb3IsY29uc29sZS5lcnJvcj1mdW5jdGlvbigpe30sYihlLHQsbyxuLHMud2lkdGgscy5oZWlnaHQsYSx1LHMuZGF0YSksY29uc29sZS5lcnJvcj1sKTpjb25zb2xlLmVycm9yKFwiSW52YWxpZCBwaXhlbCBhcmd1bWVudCBwYXNzZWQgdG8gZ2wudGV4SW1hZ2UyRCFcIikpOjk9PT1kP2IoZSx0LG8sbixyLGksYSx1LGMpOmNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiZ2wudGV4SW1hZ2UyRDogaW52YWxpZCBhcmd1bWVudCBjb3VudCFcIikuc3RhY2spfSl9LHt9XSwyMDpbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSl7cmV0dXJuKGk9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8uZGVmYXVsdD12b2lkIDA7dmFyIG49e2V4cG9ydFRvOmZ1bmN0aW9uKGUsdCxvLG4pe3ZhciByO1wib2JqZWN0XCI9PT1pKHQpJiZcIm9iamVjdFwiPT09aShvKT92b2lkIDAhPT0ocj10W2VdKT9cImZ1bmN0aW9uXCI9PXR5cGVvZiByPyhvW2VdPXIuYmluZCh0KSxPYmplY3QuYXNzaWduKG9bZV0scikpOm9bZV09cjoodGhpcy53ZWFrTWFwLmdldChvKS5ydW50aW1lTm9uc3VwcG9ydHMucHVzaChlKSxvW2VdPWZ1bmN0aW9uKCl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZStcIiBpcyBub3Qgc3VwcG9ydCFcIikse319LFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm4oKSk6Y29uc29sZS53YXJuKFwiaW52YWxpZCBleHBvcnRUbzogXCIsZSl9LHdlYWtNYXA6bmV3IFdlYWtNYXB9O28uZGVmYXVsdD1ufSx7fV19LHt9LFs5XSk7Il0sImZpbGUiOiJqc2IuanMifQ==