(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"050a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{}};e.default=o},"0720":function(t,e,n){"use strict";n.r(e);var o=n("e147");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var i,s,r,u,c=n("f0c5"),f=Object(c["a"])(o["default"],i,s,!1,null,null,null,!1,r,u);e["default"]=f.exports},"0c16":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a473")),a=n("b98a");function i(t){return t&&t.__esModule?t:{default:t}}var s={name:"ShowStave",data:function(){return{status:"",noteTop:"0%"}},mounted:function(){var t=this;a.EventBus.$on("keyboardTouch",(function(e){e==t.status["do"]?a.EventBus.$emit("addScore",1):0==t.status.length||a.EventBus.$emit("reduceScore",1)})),a.EventBus.$on("changeNote",(function(e){t.getRandomTop()})),setTimeout(t.getRandomTop(),3e3)},methods:{getRandomTop:function(){var t=o.default.getRandomNoteItem();this.noteTop=t["pos"],this.status=t,a.EventBus.$emit("currentStep",t["step"])}}};e.default=s},"0c2b":function(t,e,n){"use strict";n.r(e);var o=n("9790"),a=n("6913");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports},"0de9":function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function i(t,e){switch(o(e)){case"Function":return"function() { [native code] }";default:return e}}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];console[t].apply(console,n)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var r=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(a){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=o(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(r.length>1){var c=r.pop();u=r.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=r[0];console[s](u)}n.r(e),n.d(e,"log",(function(){return s})),n.d(e,"default",(function(){return r}))},"0e97":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={Score:n("4049").default,ShowStave:n("6aa2").default,KeyboardComponent:n("57af").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{attrs:{id:"app",_i:0}},[n("Score",{attrs:{id:"score",_i:1}}),n("ShowStave",{attrs:{id:"showStave",_i:2}}),n("KeyboardComponent",{attrs:{id:"keyboard",_i:3}})],1)},i=[]},"10cb":function(t,e,n){"use strict";n.r(e);var o=n("3cd3"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"1f73":function(t,e,n){"use strict";n.r(e);var o=n("21fd"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"21fd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("b98a"),a=i(n("5528"));function i(t){return t&&t.__esModule?t:{default:t}}var s=uni.createInnerAudioContext(),r={name:"KeyboardComponent",props:a.default.getKeyboardConfig(),data:function(){return{step:0,notes:{}}},mounted:function(){var e=this;o.EventBus.$on("currentStep",(function(n){t("log","\u97f3\u8c03",n," at components/KeyboardComponent/KeyboardComponent.vue:80"),e.step=n}))},methods:{mouseStartClick:function(e){var n=e.currentTarget.dataset.type;t("log","\u4e0b\u6807",n," at components/KeyboardComponent/KeyboardComponent.vue:87"),o.EventBus.$emit("keyboardTouch",n);var a="/static/media/"+n+this.step.toString()+".mp3";s.autoplay=!0,s.src=a,s.volume=1,s.play(),s.onError((function(e){t("log",e," at components/KeyboardComponent/KeyboardComponent.vue:95")}))},mouseEndClick:function(t){t.currentTarget.dataset.type;s.pause()}}};e.default=r}).call(this,n("0de9")["default"])},"25dd":function(t,e,n){"use strict";n.r(e);var o=n("0e97"),a=n("801b");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports},"2a7c":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/pianoGame/index/index",(function(){return Vue.extend(n("25dd").default)})),__definePage("pages/index/index",(function(){return Vue.extend(n("0c2b").default)}))},"3cd3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"PengpaiFadeInOut",props:{duration:{type:Number,default:2600},wait:{type:Number,default:3e3},top:{type:Number,default:350},left:{type:Number,default:10},radius:{type:Number,default:30},info:{type:[Array,Object],default:function(){return[]}}},data:function(){return{animationData:{},animationNumber:{},show:!0}},mounted:function(){this.donghua()},watch:{},methods:{donghua:function(){var t=this;this.animationData=uni.createAnimation({duration:this.duration/2,timingFunction:"ease"}).top(this.top-this.radius).opacity(.9).step().export(),setTimeout((function(){t.animationData=uni.createAnimation({duration:t.duration/2,timingFunction:"ease"}).top(t.top-2*t.radius).opacity(0).step().export()}),this.wait)}}};e.default=o},4049:function(t,e,n){"use strict";n.r(e);var o=n("de24"),a=n("c33a");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports},4526:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){},onShow:function(){},onHide:function(){}};e.default=o},"453b":function(t,e,n){"use strict";n.r(e);var o=n("6694"),a=n("10cb");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"b72d379a",null,!1,o["a"],s);e["default"]=u.exports},"4b79":function(t,e,n){"use strict";n("2a7c");var o=i(n("8bbf")),a=i(n("0720"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,a.default.mpType="app";var c=new o.default(r({},a.default));c.$mount()},5528:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={getKeyboardConfig:function(){return{keyboardHeight:{type:String,default:"30%",required:!1}}}};e.default=o},"57af":function(t,e,n){"use strict";n.r(e);var o=n("ed15"),a=n("1f73");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports},6694:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[t._$s(1,"i",t.show)?n("view",{ref:"ani",staticClass:t._$s(1,"sc","message"),style:t._$s(1,"s",{top:t.top+"rpx",left:t.left+"%"}),attrs:{animation:t._$s(1,"a-animation",t.animationData),_i:1}},[n("view",{staticClass:t._$s(2,"sc","round bg-gradual-orange flex justify-start shadow"),attrs:{_i:2}},[n("view",{staticClass:t._$s(3,"sc","cu-avatar cu-a-sm round"),style:t._$s(3,"s",{backgroundImage:"url("+t.info.img+")"}),attrs:{_i:3}}),n("view",{staticClass:t._$s(4,"sc","padding-lr-sm flex align-center"),attrs:{_i:4}},[n("text",{staticClass:t._$s(5,"sc","text-sm"),attrs:{_i:5}},[t._v(t._$s(5,"t0-0",t._s(t.info.title)))])])])]):t._e()])},i=[]},6913:function(t,e,n){"use strict";n.r(e);var o=n("050a"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"6aa2":function(t,e,n){"use strict";n.r(e);var o=n("96a8"),a=n("7a2c");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"7526c22d",null,!1,o["a"],s);e["default"]=u.exports},"7a2c":function(t,e,n){"use strict";n.r(e);var o=n("0c16"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"801b":function(t,e,n){"use strict";n.r(e);var o=n("f1ac"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"8bbf":function(t,e){t.exports=Vue},"96a8":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",[o("image",{attrs:{src:t._$s(1,"a-src",n("d60b")),_i:1}}),o("image",{style:t._$s(2,"s",{top:t.noteTop}),attrs:{src:t._$s(2,"a-src",n("a3b0")),_i:2}})])},i=[]},9790:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("image",{staticClass:t._$s(1,"sc","logo"),attrs:{_i:1}}),n("view",{staticClass:t._$s(2,"sc","text-area"),attrs:{_i:2}},[n("text",{staticClass:t._$s(3,"sc","title"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.title)))])])])},i=[]},a3b0:function(t,e){t.exports="/static/img/note.gif"},a473:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=[{step:6,do:"C",file:"C6",pos:"-2.8%",pitchName:"do"},{step:5,do:"B",file:"B5",pos:"0%",pitchName:"si"},{step:5,do:"A",file:"A5",pos:"2.8%",pitchName:"la"},{step:5,do:"G",file:"G5",pos:"5.6%",pitchName:"sol"},{step:5,do:"F",file:"F5",pos:"8.4%",pitchName:"fa"},{step:5,do:"E",file:"E5",pos:"11.1%",pitchName:"mi"},{step:5,do:"D",file:"D5",pos:"13.9%",pitchName:"re"},{step:5,do:"C",file:"C5",pos:"16.7%",pitchName:"do"},{step:4,do:"B",file:"B4",pos:"19.6%",pitchName:"si"},{step:4,do:"A",file:"A4",pos:"22.2%",pitchName:"la"},{step:4,do:"G",file:"G4",pos:"25.0%",pitchName:"sol"},{step:4,do:"F",file:"F4",pos:"27.8%",pitchName:"fa"},{step:4,do:"E",file:"E4",pos:"30.5%",pitchName:"mi"},{step:4,do:"D",file:"D4",pos:"33.3%",pitchName:"re"},{step:4,do:"C",file:"C4",pos:"36.0%",pitchName:"do"},{step:3,do:"B",file:"B3",pos:"38.8%",pitchName:"si"},{step:3,do:"A",file:"A3",pos:"41.6%",pitchName:"la"}],a=[{step:4,do:"E",file:"E4",pos:"52.8%",pitchName:"mi"},{step:4,do:"D",file:"D4",pos:"55.6%",pitchName:"re"},{step:4,do:"C",file:"C4",pos:"58.4%",pitchName:"do"},{step:3,do:"B",file:"B3",pos:"61.1%",pitchName:"si"},{step:3,do:"A",file:"A3",pos:"63.9%",pitchName:"la"},{step:3,do:"G",file:"G3",pos:"66.7%",pitchName:"sol"},{step:3,do:"F",file:"F3",pos:"69.5%",pitchName:"fa"},{step:3,do:"E",file:"E3",pos:"72.2%",pitchName:"mi"},{step:3,do:"D",file:"D3",pos:"75.0%",pitchName:"re"},{step:3,do:"C",file:"C3",pos:"77.8%",pitchName:"do"},{step:2,do:"B",file:"B2",pos:"80.6%",pitchName:"si"},{step:2,do:"A",file:"A2",pos:"83.3%",pitchName:"la"},{step:2,do:"G",file:"G2",pos:"86.1%",pitchName:"sol"},{step:2,do:"F",file:"F2",pos:"88.9%",pitchName:"fa"},{step:2,do:"E",file:"E2",pos:"91.7%",pitchName:"mi"},{step:2,do:"D",file:"D2",pos:"94.4%",pitchName:"re"},{step:2,do:"C",file:"C2",pos:"97.2%",pitchName:"do"}],i=function(){var t=o.length,e=Math.floor(Math.random()*t);return Math.random()>.5?o[e]:a[e]},s={getRandomNoteItem:i,leftNotes:a,rightNotes:o};e.default=s},b7bc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("b98a"),a=i(n("453b"));function i(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{score:0,error:0,status:0,messageList:[]}},components:{PengpaiFadeInOut:a.default},mounted:function(){var e=this;o.EventBus.$on("addScore",(function(n){e.status=0,t("log","\u52a0\u5206",n," at components/Score/Score.vue:32"),e.score+=1,e.messageList=e.messageList.concat({img:"data:image/png;base64,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",title:"\u6b63\u786e"}),999==e.score&&e.resetGame(),setTimeout((function(){e.messageList.pop()}),1e3),o.EventBus.$emit("changeNote",1)})),o.EventBus.$on("reduceScore",(function(n){e.status=0,t("log","\u9519\u8bef",n," at components/Score/Score.vue:45"),e.error+=1,e.messageList=e.messageList.concat({img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUdwTK8ZH68ZH68ZH68ZH68ZH68ZH+4ZH+4ZH68ZH68ZH68ZH68ZH68ZH+4ZH68ZH68ZH68ZH+4ZH+4ZH+4ZH+4ZH+4ZH+4ZH+4ZH68ZH+4ZHwaYlh4AAAAZdFJOUwBA34Awz3DPEL8gnxDvv1CPr68gj3BAMICpM3Z6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEPklEQVR42tVb2barIAxVUFuca+f8/4feMzM0QEBt1uWhDy7q3pKBEJKiyBrlJOVJfQwhPn9PUk5l8aZRypN4okOc5N4sqkY9I0M11W7os3iShph34NA3RPQfDk2/7cd3z+TRtdupnXpmDbWNSlaZ8F8U1itDG1n8od5XEHLAdUzJpjS+riobqfCpQ7Nm9bHPq+fJ81XtNKN/yJaDRF7WRJa0bRAOMk/66tW4SQJtX12GytCEclhhVJNLfki2yGalNr+4rkRd7Nbbs+s/uhTHb/9XZHq00tYFRd4e+noDHUbsqO5z8OtV3tT2JDQGNv681pfPqQws/GFav5lNQxoDtdnyo2JQKfZXbxTVWIva0f1Pt1lU1XdUj1RmOo4kxxbwKu2wE77FYGgpCrgxvsVAEfyWpX/3x3gAOCzXMw3rfF0+54/WfFMTPb61wvFvI/yN8R6Hv5vzbzgD3Lz1hEFPOF7AGpcYvjv/qD9Qa1gdEYD2f8cDOGM8huCPozv/oOdPQVs0LGAO4FtvfMUPz59DltBh63MBSGGA4VtSq/1WVmEacgNIYYDjA9zCKK4LMGxkhBQGPnwYMUVTPh8sDIMCSGDgxQcw/IHweGSFPX9AAoMAPlyxL7WWoEUfj0BnEMKHBf3UFjUBUzdC73QYHMNzUW03DKHHrQOAyiCMD4Dbe4+EIS2dgMEghg+4wTevqmnbxoHIIIo/4govXjnZprEAiUEU31JCc0uoXBctbM2+AoVBHN80Q2vBZ/eBs0edgcCAgA9nT+QrXAm4W9RIYEDAH92N15FB4w0T7rDJuHtDn8bWyiYW3uSNi//08W11XgnQhJAqAEsG1vZQF0lbHHGgW7cw7V4GT+JrGeChw2wGH6fXUHQ7Bp7g6c8XnczlaIvNGfiCt9b0BB43uAUDf/g6aC0s46mDXAaBAF5pLZwIybA8BqEDhNSKJymJgxwGIXztiqQmEMxGpjMI4mvBS22F4YRUKoMwvt4AT1odIqfeNAYRfG17ikwgiUEUP4dAAoM4fhYBMgMCvkFAhJIWWQwo+IXegn8JDDwEBL8I/h8l5DbD3RwRuytm34zYt2P2gIQ9JGMPSvnDcvaDCfvRjONwWlvOJ3Q8X43vZqiQ4/nuCYpHLEHhT9Hc3pOi2T1JtUSSVOxpOv5EJXuqlj1ZzZ+uZ7+wYL+yMZ4yXVrh13bX913b4ReX5zdeXLJf3fJfXrNf3/MXMJhFVKESjmWvEg5iEctjvyIWShnPsmsZj7eQ6XxdPl46JhcyPRILmfhLufiL2djL+fgLGvlLOvmLWvnLetkLm/lLu/mL2/nL+wv2BocCafFIpLC2xYO/yYW/zadgb3Qqclq9xKatXp+66Olgc5rdyp2a3Yp4u99ziLT7rd9RmRsevxaYt+WTJIh9m16/tgfett9vZWBtfP7hwNr6/auSnM3vmsVf+3+9sv3/H03Kv6I7KXMXAAAAAElFTkSuQmCC",title:"\u9519\u8bef"}),999==e.score&&e.resetGame(),setTimeout((function(){e.messageList.pop()}),1e3)}))},methods:{resetGame:function(){this.score=0,this.error=0}}};e.default=s}).call(this,n("0de9")["default"])},b98a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var o=a(n("8bbf"));function a(t){return t&&t.__esModule?t:{default:t}}var i=new o.default;e.EventBus=i},c33a:function(t,e,n){"use strict";n.r(e);var o=n("b7bc"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},d60b:function(t,e){t.exports="/static/img/stave.jpg"},de24:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:t._$s(1,"sc","score"),attrs:{_i:1}},[n("text",{staticClass:t._$s(2,"sc","text"),attrs:{_i:2}}),n("text",{staticClass:t._$s(3,"sc","number"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.score)))])]),n("view",{staticClass:t._$s(4,"sc","error"),attrs:{_i:4}},[n("text",{staticClass:t._$s(5,"sc","text"),attrs:{_i:5}}),n("text",{staticClass:t._$s(6,"sc","number"),attrs:{_i:6}},[t._v(t._$s(6,"t0-0",t._s(t.error)))])]),t._l(t._$s(7,"f",{forItems:t.messageList}),(function(e,o,a,i){return n("PengpaiFadeInOut",{key:t._$s(7,"f",{forIndex:a,key:o}),attrs:{duration:1e3,wait:3e3,top:50,left:45,radius:30,loop:!0,info:e,_i:"7-"+i}})}))],2)},i=[]},e147:function(t,e,n){"use strict";n.r(e);var o=n("4526"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},ed15:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{attrs:{id:"pianoBoard",_i:0}},[n("view",{attrs:{id:"normal",_i:1}},[n("view",{staticClass:t._$s(2,"sc","keyDown keyC"),attrs:{_i:2},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(3,"sc","keyDownName"),attrs:{_i:3}})]),n("view",{staticClass:t._$s(4,"sc","keyDown keyD"),attrs:{_i:4},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(5,"sc","keyDownName"),attrs:{_i:5}})]),n("view",{staticClass:t._$s(6,"sc","keyDown keyE"),attrs:{_i:6},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(7,"sc","keyDownName"),attrs:{_i:7}})]),n("view",{staticClass:t._$s(8,"sc","keyDown keyF"),attrs:{_i:8},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(9,"sc","keyDownName"),attrs:{_i:9}})]),n("view",{staticClass:t._$s(10,"sc","keyDown keyG"),attrs:{_i:10},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(11,"sc","keyDownName"),attrs:{_i:11}})]),n("view",{staticClass:t._$s(12,"sc","keyDown keyA"),attrs:{_i:12},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(13,"sc","keyDownName"),attrs:{_i:13}})]),n("view",{staticClass:t._$s(14,"sc","keyDown keyB"),attrs:{_i:14},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(15,"sc","keyDownName"),attrs:{_i:15}})])]),n("view",{attrs:{id:"higher",_i:16}},[n("view",{staticClass:t._$s(17,"sc","keyUp keyUpC"),attrs:{_i:17},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(18,"sc","keyUpName"),attrs:{_i:18}})]),n("view",{staticClass:t._$s(19,"sc","keyUp keyUpD"),attrs:{_i:19},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(20,"sc","keyUpName"),attrs:{_i:20}})]),n("view",{staticClass:t._$s(21,"sc","keyUp keyUpF"),attrs:{_i:21},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(22,"sc","keyUpName"),attrs:{_i:22}})]),n("view",{staticClass:t._$s(23,"sc","keyUp keyUpG"),attrs:{_i:23},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(24,"sc","keyUpName"),attrs:{_i:24}})]),n("view",{staticClass:t._$s(25,"sc","keyUp keyUpA"),attrs:{_i:25},on:{touchstart:function(e){return t.mouseStartClick(e)},touchend:function(e){return t.mouseEndClick(e)}}},[n("text",{staticClass:t._$s(26,"sc","keyUpName"),attrs:{_i:26}})])])])},i=[]},f0c5:function(t,e,n){"use strict";function o(t,e,n,o,a,i,s,r,u,c){var f,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(l.components,p)&&(l.components[p]=u[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=f):a&&(f=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),f)if(l.functional){l._injectStyles=f;var m=l.render;l.render=function(t,e){return f.call(e),m(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},f1ac:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("4049")),a=s(n("6aa2")),i=s(n("57af"));function s(t){return t&&t.__esModule?t:{default:t}}var r={components:{KeyboardComponent:i.default,ShowStave:a.default,Score:o.default},data:function(){return{}},methods:{}};e.default=r}},[["4b79","app-config"]]]);