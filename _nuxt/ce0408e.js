(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{252:function(t,e,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("14b9752d",content,!0,{sourceMap:!1})},253:function(t,e,n){"use strict";var r=n(10),c=n(2),o=n(97),d=n(17),l=n(14),m=n(45),v=n(178),f=n(96),h=n(177),x=n(4),_=n(46),w=n(69).f,y=n(32).f,C=n(16).f,k=n(254).trim,N="Number",I=c.Number,E=I.prototype,M=m(_(E))==N,A=function(t){if(f(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,c,o,d,l,code,m=h(t,"number");if("string"==typeof m&&m.length>2)if(43===(e=(m=k(m)).charCodeAt(0))||45===e){if(88===(n=m.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+m}for(d=(o=m.slice(2)).length,l=0;l<d;l++)if((code=o.charCodeAt(l))<48||code>c)return NaN;return parseInt(o,r)}return+m};if(o(N,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var j,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(M?x((function(){E.valueOf.call(n)})):m(n)!=N)?v(new I(A(e)),n,T):A(e)},R=r?w(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;R.length>O;O++)l(I,j=R[O])&&!l(T,j)&&C(T,j,y(I,j));T.prototype=E,E.constructor=T,d(c,N,T)}},254:function(t,e,n){var r=n(21),c=n(11),o="["+n(255)+"]",d=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),m=function(t){return function(e){var n=c(r(e));return 1&t&&(n=n.replace(d,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},255:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},256:function(t,e,n){"use strict";n(252)},257:function(t,e,n){var r=n(71),c=n(180),o=n(258),d=n(259),l=r(!1),m=c(o),v=c(d);l.push([t.i,"#app[data-v-9d34ecac]{width:100vw;height:100vh;margin:0;padding:0;color:#fff;overflow-x:hidden;overflow-y:auto;overflow:hidden auto}#app #bg[data-v-9d34ecac]{background:url("+m+") no-repeat 50%;background-size:cover;filter:grayscale(.8) brightness(.8) contrast(1.6);box-shadow:inset 0 0 min(10vh,10vw) rgba(0,0,0,.5);position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}#app #content[data-v-9d34ecac]{padding:10vh 0 2rem;display:flex;flex-direction:column;justify-content:center;align-items:stretch}#app #content .container[data-v-9d34ecac]{max-width:992px}#app #content .container #card.card[data-v-9d34ecac]{padding:1rem 2rem;position:relative;border:.5rem ridge rgba(0,0,0,.9);border-radius:.5rem}#app #content .container #card.card .card-bg[data-v-9d34ecac]{background:url("+v+") no-repeat top;background-size:cover;filter:grayscale(.75) brightness(.25);box-shadow:inset 0 0 2rem rgba(0,0,0,.25);opacity:1;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}#app #content .container #card.card .card-content section#header[data-v-9d34ecac]{padding:.5rem 0 2rem;text-align:center;text-shadow:0 0 .5rem rgba(0,0,0,.75)}#app #content .container #card.card .card-content section#header h1[data-v-9d34ecac]{margin:0;padding:0}#app #content .container #card.card .card-content section#input[data-v-9d34ecac]{text-shadow:0 0 .5rem rgba(0,0,0,.75);display:flex;flex-direction:column}#app #content .container #card.card .card-content section#input .row[data-v-9d34ecac]{padding:.25rem 0;align-items:center}#app #content .container #card.card .card-content section#input .row .col-label h5[data-v-9d34ecac]{margin:0;padding:0}#app #content .container #card.card .card-content section#input .row .col-input[data-v-9d34ecac]{display:flex;flex-direction:row;align-items:center}#app #content .container #card.card .card-content section#input .row .col-input #tempText[data-v-9d34ecac]{width:2rem;margin:0 .5rem 0 0}#app #content .container #card.card .card-content section#input .row .col-info[data-v-9d34ecac]{color:#b2b2b2}#app #content .container #card.card .card-content section#input .status[data-v-9d34ecac]{display:flex;flex-direction:row;align-items:center}#app #content .container #card.card .card-content section#input .status .status-sign[data-v-9d34ecac]{height:1rem;width:1rem;margin:0 .25rem;border-radius:50%;box-shadow:inset 0 0 .25rem rgba(0,0,0,.4)}#app #content .container #card.card .card-content section#input .status .status-sign.status-sign-idle[data-v-9d34ecac]{background-color:var(--bs-success)}#app #content .container #card.card .card-content section#input .status .status-sign.status-sign-working[data-v-9d34ecac]{background-color:var(--bs-warning)}#app #content .container #card.card .card-content section#buttons[data-v-9d34ecac]{padding:1rem 0}#app #content .container #card.card .card-content section#output[data-v-9d34ecac]{margin:1rem 0}#app #content .container #card.card .card-content section#output .output .friendly[data-v-9d34ecac]{padding:1rem;color:#b2b2b2;font-style:italic}#app #content .container #card.card .card-content section#output .output .output-wrapper[data-v-9d34ecac]{padding:.25rem .375rem;background:rgba(0,0,0,.2);border-radius:.5rem}#app #content .container #card.card .card-content section#output .output .output-wrapper .output-list .output-item[data-v-9d34ecac]{margin:.125rem 0;padding:.75rem 1rem;border-radius:.5rem}#app #content .container #card.card .card-content section#output .output .output-wrapper .output-list .output-item[data-v-9d34ecac]:hover{background:rgba(0,0,0,.2)}#app #content .container #card.card .card-content section#output .output .output-wrapper .output-list .output-item .output-text[data-v-9d34ecac]{font-size:1.25rem;font-weight:400}#app #content .container #card.card .card-content section#output .saved .friendly[data-v-9d34ecac]{padding:1rem;color:#b2b2b2;font-style:italic}#app #content .container #card.card .card-content section#output .saved .saved-wrapper[data-v-9d34ecac]{padding:.25rem .375rem;background:rgba(0,0,0,.2);border-radius:.5rem}#app #content .container #card.card .card-content section#output .saved .saved-wrapper .saved-list .saved-item[data-v-9d34ecac]{margin:.125rem 0;padding:.75rem 1rem;border-radius:.5rem}#app #content .container #card.card .card-content section#output .saved .saved-wrapper .saved-list .saved-item[data-v-9d34ecac]:hover{background:rgba(0,0,0,.2)}#app #content .container #card.card .card-content section#output .saved .saved-wrapper .saved-list .saved-item .saved-text[data-v-9d34ecac]{font-size:1.25rem;font-weight:400}",""]),t.exports=l},258:function(t,e,n){t.exports=n.p+"img/bg.4cfee4e.jpg"},259:function(t,e,n){t.exports=n.p+"img/paper.9337c21.jpg"},260:function(t,e,n){"use strict";n.r(e);var r=n(120);var c=n(160),o=n(91);function d(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(c.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(7),m=(n(37),n(38),n(52),n(53),n(36),n(253),n(179),n(70),n(1).a.extend({head:{script:[{src:"https://unpkg.com/ml5@0.6.1/dist/ml5.min.js",type:"text/javascript"}]},data:function(){return{rnn:null,status:1,output:[],saved:[],config:{init:{input:"",temperature:.5,min_length:4,max_length:12,cicles:8},state:{input:"",temperature:0,min_length:0,max_length:0,cicles:0,race:"",gender:""},query:{input:"",temperature:0,min_length:0,max_length:0,cicles:0,race:"",gender:""}},race:{human:{name:"human",model:"yob1900",gender:{male:"male",female:"female"}}}}},mounted:function(){this.copyConfig("init","state"),this.loadModel("yob1900f")},methods:{loadModel:function(t){var e=this;this.status=1,this.rnn=ml5.charRNN("/models/"+t,(function(){console.log("model '"+t+"' loaded"),e.status=0}))},copyConfig:function(t,e){for(var n=0,r=Object.keys(this.config[t]);n<r.length;n++){var c=r[n];this.config[e][c]=this.config[t][c]}},generate:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,c,output,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.status=1,t.copyConfig("state","query"),t.output=[],n=0;case 4:if(!(n<t.config.query.cicles)){e.next=21;break}r=0,c=10;case 7:if(!(r<c)){e.next=18;break}return e.next=10,t.single();case 10:if(output=e.sent,t.output.includes(output)){e.next=15;break}return t.output.push(output),r=0,e.abrupt("break",18);case 15:r++,e.next=7;break;case 18:n++,e.next=4;break;case 21:if((o=t.output.length)<t.config.query.cicles)for(i=o;i<t.config.query.cicles;i++)t.output.push("-");console.log("model generated "+o+" entries"),t.status=0;case 25:case"end":return e.stop()}}),e)})))()},single:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,output,r,c,o,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",output="",r=0,c=10,1,o=!0,d="abcdefghijklmnopqrstuvwxyz",t.config.query.input.length>=1?(n=t.config.query.input.slice(-1).toUpperCase(),output+=t.config.query.input):(n=d.charAt(Math.floor(Math.random()*d.length)).toUpperCase(),output+=n),e.next=10,t.rnn.feed(n);case 10:if(!o){e.next=28;break}return e.next=13,t.predict();case 13:if(l=e.sent,d.includes(l.toLowerCase())){e.next=22;break}if(!(output.length<t.config.query.min_length&&r<c)){e.next=20;break}return e.next=18,t.rnn.feed(n);case 18:return r++,e.abrupt("continue",10);case 20:return o=!1,e.abrupt("continue",10);case 22:n=l,r=0,(output+=l).length>=t.config.query.max_length&&(o=!1),e.next=10;break;case 28:return output=output.charAt(0).toUpperCase()+output.slice(1).toLowerCase(),e.abrupt("return",output);case 30:case"end":return e.stop()}}),e)})))()},predict:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.rnn.predict(Number(t.config.query.temperature));case 2:return n=e.sent,e.next=5,t.rnn.feed(n.sample);case 5:return e.abrupt("return",n.sample);case 6:case"end":return e.stop()}}),e)})))()},reset:function(){this.status=1,this.rnn.reset(),this.output=[],this.copyConfig("init","state"),this.copyConfig("state","query"),console.log("model resetted"),this.status=0}},computed:{getOutput:function(){return[].concat(d(this.output),d(new Array(this.config.query.cicles))).splice(0,this.config.query.cicles)}}})),v=(n(256),n(50)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"bg"}}),n("div",{attrs:{id:"content"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"card",attrs:{id:"card"}},[n("div",{staticClass:"card-bg"}),n("div",{staticClass:"card-content"},[t._m(0),n("section",{attrs:{id:"input"}},[n("div",{staticClass:"row"},[t._m(1),n("div",{staticClass:"col-12 col-sm-4 col-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.state.input,expression:"config.state.input"}],attrs:{id:"inputText",type:"text",name:"inputText",placeholder:"Input"},domProps:{value:t.config.state.input},on:{input:function(e){e.target.composing||t.$set(t.config.state,"input",e.target.value)}}})]),n("div",{staticClass:"col-12 col-sm-5 col-info"},[t.config.state.input?n("span",[t._v(t._s(t.config.state.input))]):n("span",[t._v("optional")])])]),n("div",{staticClass:"row"},[t._m(2),n("div",{staticClass:"col-12 col-sm-4 col-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.state.temperature,expression:"config.state.temperature"}],attrs:{id:"inputTemp",type:"range",name:"inputTemp",placeholder:"Temperature",min:"0",max:"1",step:"0.01"},domProps:{value:t.config.state.temperature},on:{__r:function(e){return t.$set(t.config.state,"temperature",e.target.value)}}})]),n("div",{staticClass:"col-12 col-sm-5 col-info"},[n("span",[t._v(t._s(Math.round(100*t.config.state.temperature))+"%")])])]),n("div",{staticClass:"row"},[t._m(3),n("div",{staticClass:"col-12 col-sm-4 col-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.state.min_length,expression:"config.state.min_length"}],attrs:{id:"inputMinLength",type:"number",name:"inputMinLength",placeholder:"Min Length",min:"3",max:t.config.state.max_length,step:"1"},domProps:{value:t.config.state.min_length},on:{input:function(e){e.target.composing||t.$set(t.config.state,"min_length",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.state.max_length,expression:"config.state.max_length"}],attrs:{id:"inputMaxLength",type:"number",name:"inputMaxLength",placeholder:"Max Length",min:t.config.state.min_length,max:"15",step:"1"},domProps:{value:t.config.state.max_length},on:{input:function(e){e.target.composing||t.$set(t.config.state,"max_length",e.target.value)}}})]),n("div",{staticClass:"col-12 col-sm-5 col-info"},[t.config.state.min_length==t.config.state.max_length?n("span",[t._v("exactly "+t._s(t.config.state.min_length)+" chars")]):n("span",[t._v("between "+t._s(t.config.state.min_length)+" and "+t._s(t.config.state.max_length)+" chars")])])]),n("div",{staticClass:"row"},[t._m(4),n("div",{staticClass:"col-12 col-sm-4 col-input"},[0==t.status?n("div",{staticClass:"status"},[n("div",{staticClass:"status-sign status-sign-idle"}),n("span",[t._v("idle")])]):n("div",{staticClass:"status"},[n("div",{staticClass:"status-sign status-sign-working"}),n("span",[t._v("working")])])])])]),n("section",{attrs:{id:"buttons"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-0 col-sm-3"}),n("div",{staticClass:"col-12 col-sm-4"},[n("button",{attrs:{disabled:0!==t.status},on:{click:t.generate}},[t._v("Generate")]),n("button",{attrs:{disabled:0!==t.status},on:{click:t.reset}},[t._v("Reset")])])])]),n("section",{attrs:{id:"output"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"output"},[n("h5",[t._v("Results")]),n("div",{staticClass:"output-wrapper"},[t.status||t.output.length?n("div",{staticClass:"output-list"},t._l(t.getOutput,(function(e,r){return n("div",{key:r,staticClass:"output-item"},[n("span",{staticClass:"output-text"},[t._v(t._s(e||"..."))])])})),0):n("div",{staticClass:"friendly"},[n("span",[t._v("Nothing generated yet")])])])])]),n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"saved"},[n("h5",[t._v("Saved")]),n("div",{staticClass:"saved-wrapper"},[t.saved.length?n("div",{staticClass:"saved-list"},t._l(t.saved,(function(s,e){return n("div",{key:e,staticClass:"saved-item"},[n("span",{staticClass:"saved-text"},[t._v(t._s(s))])])})),0):n("div",{staticClass:"friendly"},[n("span",[t._v("Nothing saved yet")])])])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"header"}},[n("h1",[t._v("Fantasy Name Generator")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-sm-3 col-label"},[n("h5",[t._v("Input Text")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-sm-3 col-label"},[n("h5",[t._v("Randomness")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-sm-3 col-label"},[n("h5",[t._v("Length")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-sm-3 col-label"},[n("h5",[t._v("Status")])])}],!1,null,"9d34ecac",null);e.default=component.exports}}]);