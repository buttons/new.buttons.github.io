(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)a=i[p],s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("form",{attrs:{autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:"false"}},[o("fieldset",{staticClass:"form-group"},[o("h4",[t._v("Choose a button")]),o("div",{staticClass:"row"},t._l(t.types,function(e){return o("div",{key:e.value,staticClass:"col-9 col-sm-6 col-md-4 col-lg-2"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.type,expression:"options.type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"type"},domProps:{value:e.value,checked:t._q(t.options.type,e.value)},on:{change:function(o){return t.$set(t.options,"type",e.value)}}}),t._v(t._s(t._f("capitalize")(e.value))),o("br"),o("span",{attrs:{"aria-hidden":"true"}},[o("github-button",{attrs:{href:"#","data-size":"large","data-icon":e.icon,"data-text":t.$options.filters.capitalize(e.value)}})],1)])])])}),0)]),o("hr"),t.options.type?o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6 col-md-4"},[o("h4",[t._v("Button options")]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.user,expression:"options.user"}],ref:"user",staticClass:"form-control",class:{"is-invalid":""!==t.options.user&&!t.isValidUser},attrs:{type:"text",maxlength:"39",placeholder:":user",autofocus:"autofocus"},domProps:{value:t.options.user},on:{input:function(e){e.target.composing||t.$set(t.options,"user",e.target.value)}}}),t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.repo,expression:"options.repo"}],ref:"repo",staticClass:"form-control",class:{"is-invalid":""!==t.options.repo&&!t.isValidRepo},attrs:{type:"text",maxlength:"100",placeholder:":repo",disabled:"follow"===t.options.type},domProps:{value:t.options.repo},on:{input:function(e){e.target.composing||t.$set(t.options,"repo",e.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"checkbox"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.largeButton,expression:"options.largeButton"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.largeButton)?t._i(t.options.largeButton,null)>-1:t.options.largeButton},on:{change:function(e){var o=t.options.largeButton,n=e.target,s=!!n.checked;if(Array.isArray(o)){var r=null,a=t._i(o,r);n.checked?a<0&&t.$set(t.options,"largeButton",o.concat([r])):a>-1&&t.$set(t.options,"largeButton",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"largeButton",s)}}}),t._v(" Large button\n            ")])]),o("div",{staticClass:"checkbox"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.showCount,expression:"options.showCount"}],attrs:{type:"checkbox",disabled:"download"===t.options.type},domProps:{checked:Array.isArray(t.options.showCount)?t._i(t.options.showCount,null)>-1:t.options.showCount},on:{change:function(e){var o=t.options.showCount,n=e.target,s=!!n.checked;if(Array.isArray(o)){var r=null,a=t._i(o,r);n.checked?a<0&&t.$set(t.options,"showCount",o.concat([r])):a>-1&&t.$set(t.options,"showCount",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"showCount",s)}}}),t._v(" Show count\n            ")])]),o("div",{staticClass:"checkbox"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.standardIcon,expression:"options.standardIcon"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.standardIcon)?t._i(t.options.standardIcon,null)>-1:t.options.standardIcon},on:{change:function(e){var o=t.options.standardIcon,n=e.target,s=!!n.checked;if(Array.isArray(o)){var r=null,a=t._i(o,r);n.checked?a<0&&t.$set(t.options,"standardIcon",o.concat([r])):a>-1&&t.$set(t.options,"standardIcon",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"standardIcon",s)}}}),t._v(" Standard icon\n            ")])])])]),o("div",{staticClass:"col-12 col-sm-6 col-md-8"},[o("h4",[t._v("Preview and code")]),o("p",[t._v("Try out your button, then copy and paste the code below into the HTML for your site.")]),o("p",{style:{height:t.options.largeButton?"28px":"20px"}},[o("github-button",t._b({},"github-button",Object.assign({},t.attrs,{"data-show-count":t.attrs["data-show-count"]&&!t.timeoutID}),!1))],1),o("div",{staticClass:"form-group"},[o("snippet",{attrs:{code:t.aHTML}})],1),o("div",{staticClass:"form-group"},[o("snippet",{attrs:{code:t.scriptHTML}})],1)])]):t._e()])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-group-append input-group-prepend"},[o("span",{staticClass:"input-group-text"},[t._v("/")])])}],a=(o("6b54"),o("cebc")),i=(o("db43"),o("e878")),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{rows:"2",readonly:""},domProps:{value:t.code},on:{click:function(e){return t.$el.select()},focus:function(e){return t.$el.select()},mouseup:function(t){t.preventDefault()},input:function(e){e.target.composing||(t.code=e.target.value)}}})},u=[],l={name:"snippet",props:["code"]},p=l,d=(o("cab0"),o("2877")),f=Object(d["a"])(p,c,u,!1,null,"11a09f2e",null),h=f.exports,v="\x3c!-- Place this tag where you want the button to render. --\x3e",m="\x3c!-- Place this tag in your head or just before your close body tag. --\x3e",g='<script async defer src="https://buttons.github.io/buttons.js"><\/script>',b={name:"app",components:{GithubButton:i["a"],Snippet:h},data:function(){return{types:[{value:"follow",icon:"octicon-mark-github"},{value:"watch",icon:"octicon-eye"},{value:"star",icon:"octicon-star"},{value:"fork",icon:"octicon-repo-forked"},{value:"issue",icon:"octicon-issue-opened"},{value:"download",icon:"octicon-cloud-download"}],options:{user:"",repo:"",type:null,largeButton:!1,showCount:!1,standardIcon:!1},scriptHTML:m+"\n"+g,timeoutID:0}},watch:{"options.type":function(){var t=this;this.$nextTick(function(){document.activeElement!==t.$refs.user&&document.activeElement!==t.$refs.repo&&("follow"===t.options.type||!t.isValidUser||t.isValidUser&&t.isValidRepo?t.$refs.user.focus():t.$refs.repo.focus())})},"attrs.href":function(){var t=this;this.attrs["data-show-count"]&&(clearTimeout(this.timeoutID),this.timeoutID=setTimeout(function(){t.timeoutID=0},300))}},computed:{isValidUser:function(){var t=this.options.user;return t.length>0&&t.length<40&&!/[^A-Za-z0-9-]|^-|-$|--/i.test(t)},isValidRepo:function(){var t=this.options.repo;return t.length>0&&t.length<101&&!/[^\w-.]|\.git$|^\.\.?$/i.test(t)},attrs:function(){var t=this,e=Object(a["a"])({},this.options);return this.isValidUser&&(this.isValidRepo||"follow"===e.type)||(e.user="ntkme",e.repo="github-buttons"),{class:"github-button",href:function(){var t="https://github.com",o="/"+e.user,n=o+"/"+e.repo;switch(e.type){case"follow":return t+o;case"watch":return t+n+"/subscription";case"star":return t+n;case"fork":return t+n+"/fork";case"issue":return t+n+"/issues";case"download":return t+n+"/archive/master.zip";default:return t}}(),"data-text":function(){return t.$options.filters.capitalize(e.type)+("follow"===e.type?" @"+e.user:"")}(),"data-icon":function(){if(!e.standardIcon)switch(e.type){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-repo-forked";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download"}}(),"data-size":function(){if(e.largeButton)return"large"}(),"data-show-count":function(){if(e.showCount)switch(e.type){case"download":return;default:return!0}}(),"aria-label":function(){return t.$options.filters.capitalize(e.type)+("follow"===e.type?" @"+e.user:" "+e.user+"/"+e.repo)+" on GitHub"}()}},aHTML:function(){var t=document.createElement("a"),e=this.attrs;for(var o in e)null!=e[o]&&("data-text"===o?t.textContent=e[o]:t.setAttribute(o,e[o]));return v+"\n"+t.outerHTML}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}}},y=b,w=(o("e676"),Object(d["a"])(y,s,r,!1,null,"1d3b4fa6",null)),x=w.exports;window.onbeforeunload=function(){},n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app")},"791a":function(t,e,o){},cab0:function(t,e,o){"use strict";var n=o("e97c"),s=o.n(n);s.a},db43:function(t,e,o){},e676:function(t,e,o){"use strict";var n=o("791a"),s=o.n(n);s.a},e97c:function(t,e,o){}});
//# sourceMappingURL=app.1caf7248.js.map