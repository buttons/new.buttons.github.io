(function(){"use strict";var e={5906:function(e,o,t){var s=t(9242),r=t(3396),n=t(7139);const c=e=>((0,r.dD)("data-v-58fedd8e"),e=e(),(0,r.Cn)(),e),i={id:"app"},a={autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:"false"},l={class:"form-group"},u=c((()=>(0,r._)("h4",null,"Choose a button",-1))),p={class:"row"},d={class:"form-check"},h={class:"form-check-label"},m=["value","onUpdate:modelValue"],f=c((()=>(0,r._)("br",null,null,-1))),b=c((()=>(0,r._)("hr",null,null,-1))),v={key:0,class:"row"},g={class:"col-12 col-sm-6 col-md-5"},y=c((()=>(0,r._)("h4",null,"Button options",-1))),w={class:"form-group"},_={class:"input-group"},k=c((()=>(0,r._)("div",{class:"input-group-append input-group-prepend"},[(0,r._)("span",{class:"input-group-text"},"/")],-1))),x=["disabled"],S={class:"form-group"},C={class:"form-row align-items-center my-1"},U={class:"col-auto mr-auto"},V={class:"form-check"},H={class:"form-check-label"},D=(0,r.Uk)(" Color scheme "),M={class:"col-auto"},z=c((()=>(0,r._)("label",{class:"sr-only",for:"prefers-color-scheme-no-preference"},"@media (prefers-color-scheme: no-preference)",-1))),T=["disabled"],G={class:"form-row align-items-center my-1 ml-3"},O=c((()=>(0,r._)("div",{class:"col-auto mr-auto"},[(0,r._)("label",{for:"prefers-color-scheme-light",class:"form-check-label col-form-label-sm"},"@media (prefers-color-scheme: light)")],-1))),B={class:"col-auto"},$=["disabled"],j={class:"form-row align-items-center my-1 ml-3"},A=c((()=>(0,r._)("div",{class:"col-auto mr-auto"},[(0,r._)("label",{for:"prefers-color-scheme-dark",class:"form-check-label col-form-label-sm"},"@media (prefers-color-scheme: dark)")],-1))),I={class:"col-auto"},P=["disabled"],L={class:"form-row my-2"},E={class:"col-auto"},K={class:"form-check"},R={class:"form-check-label"},W=(0,r.Uk)(" Large button "),Y={class:"form-row my-2"},Z={class:"col-auto"},F={class:"form-check"},q={class:"form-check-label"},N=["disabled"],J=(0,r.Uk)(" Show count "),Q={class:"form-row my-2"},X={class:"col-auto"},ee={class:"form-check"},oe={class:"form-check-label"},te=(0,r.Uk)(" Standard icon "),se={class:"form-group"},re=c((()=>(0,r._)("label",{for:"syntax"},"Syntax",-1))),ne=c((()=>(0,r._)("option",null,"html",-1))),ce=c((()=>(0,r._)("option",{value:"vue"},"vue-github-button",-1))),ie=c((()=>(0,r._)("option",{value:"react"},"react-github-btn",-1))),ae=[ne,ce,ie],le={class:"col-12 col-sm-6 col-md-7"},ue=c((()=>(0,r._)("h4",null,"Preview and code",-1))),pe=c((()=>(0,r._)("p",null,"Try out your button, then copy and paste the code below into the HTML for your site.",-1))),de={class:"form-group"},he={class:"form-group"};function me(e,o,t,c,ne,ce){const ie=(0,r.up)("github-button"),me=(0,r.up)("code-snippet");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("form",a,[(0,r._)("fieldset",l,[u,(0,r._)("div",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(ne.types,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"col-9 col-sm-6 col-md-4 col-lg-2",key:e.value},[(0,r._)("div",d,[(0,r._)("label",h,[(0,r.wy)((0,r._)("input",{type:"radio",class:"form-check-input",name:"type",value:e.value,"onUpdate:modelValue":e=>ne.options.type=e},null,8,m),[[s.G2,ne.options.type]]),(0,r.Uk)((0,n.zw)(ce.capitalize(e.value)),1),f,(0,r.Wm)(ie,{href:"#","data-size":"large","data-icon":e.icon,"data-text":ce.capitalize(e.value),"aria-hidden":"true"},null,8,["data-icon","data-text"])])])])))),128))])]),b,ne.options.type?((0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",g,[y,(0,r._)("div",w,[(0,r._)("div",_,[(0,r.wy)((0,r._)("input",{ref:"user",class:(0,n.C_)(["form-control",{"is-invalid":""!==ne.options.user&&!ce.isValidUser}]),type:"text",maxlength:"39",placeholder:":user",autofocus:"autofocus","onUpdate:modelValue":o[0]||(o[0]=e=>ne.options.user=e)},null,2),[[s.nr,ne.options.user]]),k,(0,r.wy)((0,r._)("input",{ref:"repo",class:(0,n.C_)(["form-control",{"is-invalid":""!==ne.options.repo&&!ce.isValidRepo}]),type:"text",maxlength:"100",placeholder:":repo",disabled:"follow"===ne.options.type||"sponsor"===ne.options.type,"onUpdate:modelValue":o[1]||(o[1]=e=>ne.options.repo=e)},null,10,x),[[s.nr,ne.options.repo]])])]),(0,r._)("div",S,[(0,r._)("div",C,[(0,r._)("div",U,[(0,r._)("div",V,[(0,r._)("label",H,[(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=e=>ne.options.colorScheme=e)},null,512),[[s.e8,ne.options.colorScheme]]),D])])]),(0,r._)("div",M,[z,(0,r.wy)((0,r._)("select",{id:"prefers-color-scheme-no-preference",class:"form-control form-control-sm",disabled:!0!==ne.options.colorScheme,"onUpdate:modelValue":o[3]||(o[3]=e=>ne.options.prefersColorScheme["no-preference"]=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(ne.colorSchemes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e},(0,n.zw)(e),1)))),128))],8,T),[[s.bM,ne.options.prefersColorScheme["no-preference"]]])])]),(0,r._)("div",G,[O,(0,r._)("div",B,[(0,r.wy)((0,r._)("select",{id:"prefers-color-scheme-light",class:"form-control form-control-sm",disabled:!0!==ne.options.colorScheme,"onUpdate:modelValue":o[4]||(o[4]=e=>ne.options.prefersColorScheme.light=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(ne.colorSchemes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e},(0,n.zw)(e),1)))),128))],8,$),[[s.bM,ne.options.prefersColorScheme.light]])])]),(0,r._)("div",j,[A,(0,r._)("div",I,[(0,r.wy)((0,r._)("select",{id:"prefers-color-scheme-dark",class:"form-control form-control-sm",disabled:!0!==ne.options.colorScheme,"onUpdate:modelValue":o[5]||(o[5]=e=>ne.options.prefersColorScheme.dark=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(ne.colorSchemes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e},(0,n.zw)(e),1)))),128))],8,P),[[s.bM,ne.options.prefersColorScheme.dark]])])]),(0,r._)("div",L,[(0,r._)("div",E,[(0,r._)("div",K,[(0,r._)("label",R,[(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[6]||(o[6]=e=>ne.options.largeButton=e)},null,512),[[s.e8,ne.options.largeButton]]),W])])])]),(0,r._)("div",Y,[(0,r._)("div",Z,[(0,r._)("div",F,[(0,r._)("label",q,[(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"checkbox",disabled:"sponsor"===ne.options.type||"discuss"===ne.options.type||"download"===ne.options.type||"install this package"===ne.options.type||"use this GitHub Action"===ne.options.type||"use this template"===ne.options.type,"onUpdate:modelValue":o[7]||(o[7]=e=>ne.options.showCount=e)},null,8,N),[[s.e8,ne.options.showCount]]),J])])])]),(0,r._)("div",Q,[(0,r._)("div",X,[(0,r._)("div",ee,[(0,r._)("label",oe,[(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[8]||(o[8]=e=>ne.options.standardIcon=e)},null,512),[[s.e8,ne.options.standardIcon]]),te])])])])]),(0,r._)("div",se,[re,(0,r.wy)((0,r._)("select",{id:"syntax",class:"form-control","onUpdate:modelValue":o[9]||(o[9]=e=>ne.options.syntax=e)},ae,512),[[s.bM,ne.options.syntax]])])]),(0,r._)("div",le,[ue,pe,(0,r._)("p",{style:(0,n.j5)({height:ne.options.largeButton?"28px":"20px"})},[(0,r.Wm)(ie,(0,n.vs)((0,r.F4)(ce.getPreviewAttrs())),null,16)],4),(0,r._)("div",de,[(0,r.Wm)(me,{code:ce.templateHTML},null,8,["code"])]),(0,r._)("div",he,[(0,r.Wm)(me,{code:ce.scriptHTML},null,8,["code"])])])])):(0,r.kq)("",!0)])])}var fe=t(8279);const be=["rows","value"];function ve(e,o,t,n,c,i){return(0,r.wg)(),(0,r.iD)("textarea",{class:"form-control",rows:t.code.split("\n").length,readonly:"",value:t.code,onClick:o[0]||(o[0]=o=>e.$el.select()),onFocus:o[1]||(o[1]=o=>e.$el.select()),onMouseup:o[2]||(o[2]=(0,s.iM)((()=>{}),["prevent"]))},null,40,be)}var ge={name:"code-snippet",props:["code"]},ye=t(89);const we=(0,ye.Z)(ge,[["render",ve],["__scopeId","data-v-2db68b12"]]);var _e=we,ke={name:"app",components:{GithubButton:fe.Z,CodeSnippet:_e},data(){return{types:[{value:"follow",icon:"octicon-mark-github"},{value:"sponsor",icon:"octicon-heart"},{value:"watch",icon:"octicon-eye"},{value:"star",icon:"octicon-star"},{value:"fork",icon:"octicon-repo-forked"},{value:"issue",icon:"octicon-issue-opened"},{value:"discuss",icon:"octicon-comment-discussion"},{value:"download",icon:"octicon-download"},{value:"install this package",icon:"octicon-package"},{value:"use this template",icon:"octicon-repo-template"},{value:"use this GitHub Action",icon:"octicon-play"}],colorSchemes:["light","light_high_contrast","dark","dark_dimmed","dark_high_contrast"],options:{user:"",repo:"",type:null,colorScheme:!1,prefersColorScheme:{"no-preference":"light",light:"light",dark:"dark"},largeButton:!1,showCount:!1,standardIcon:!1,syntax:(e=>/\bvue-github-button\b/i.test(e)?"vue":/\breact-github-btn\b/i.test(e)?"react":"html")(document.referrer)},timeoutID:0}},watch:{"options.type"(){this.$nextTick((()=>{document.activeElement!==this.$refs.user&&document.activeElement!==this.$refs.repo&&("follow"===this.options.type||"sponsor"===this.options.type||!this.isValidUser||this.isValidUser&&this.isValidRepo?this.$refs.user.focus():this.$refs.repo.focus())}))},"attrs.href"(){this.attrs["data-show-count"]&&(clearTimeout(this.timeoutID),this.timeoutID=setTimeout((()=>{this.timeoutID=0}),300))}},computed:{isValidUser(){const e=this.options.user;return e.length>0&&e.length<40&&!/[^A-Za-z0-9-]|^-|-$|--/i.test(e)},isValidRepo(){const e=this.options.repo;return e.length>0&&e.length<101&&!/[^\w-.]|\.git$|^\.\.?$/i.test(e)},attrs(){const e={...this.options};return this.isValidUser&&(this.isValidRepo||"follow"===e.type||"sponsor"===e.type)||(e.user="ntkme",e.repo="github-buttons"),{href:(()=>{const o="https://github.com",t="/"+e.user,s=t+"/"+e.repo;switch(e.type){case"follow":return o+t;case"sponsor":return o+"/sponsors/"+e.user;case"watch":return o+s+"/subscription";case"star":return o+s;case"fork":return o+s+"/fork";case"discuss":return o+s+"/discussions";case"issue":return o+s+"/issues";case"download":return o+s+"/archive/HEAD.zip";case"install this package":return o+s+"/packages";case"use this GitHub Action":return o+s;case"use this template":return o+s+"/generate";default:return o}})(),"data-text":(()=>this.capitalize(e.type)+("follow"===e.type?" @"+e.user:""))(),"data-color-scheme":(()=>{if(!0===e.colorScheme)return"no-preference: "+e.prefersColorScheme["no-preference"]+"; light: "+e.prefersColorScheme.light+"; dark: "+e.prefersColorScheme.dark+";"})(),"data-icon":(()=>{if(!e.standardIcon)switch(e.type){case"sponsor":return"octicon-heart";case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-repo-forked";case"issue":return"octicon-issue-opened";case"discuss":return"octicon-comment-discussion";case"download":return"octicon-download";case"install this package":return"octicon-package";case"use this GitHub Action":return"octicon-play";case"use this template":return"octicon-repo-template"}})(),"data-size":(()=>{if(e.largeButton)return"large"})(),"data-show-count":(()=>{if(e.showCount)switch(e.type){case"sponsor":case"discuss":case"download":case"install this package":case"use this GitHub Action":case"use this template":return;default:return!0}})(),"aria-label":(()=>this.capitalize(e.type)+("follow"===e.type||"sponsor"===e.type?" @"+e.user:" "+e.user+"/"+e.repo)+" on GitHub")()}},templateHTML(){const e=document.createElement("a");"html"===this.options.syntax&&(e.className="github-button");const o=this.attrs;for(const t in o)null!=o[t]&&("data-text"===t?e.textContent=o[t]:e.setAttribute(t,o[t]));return"\x3c!-- Place this tag where you want the button to render. --\x3e\n"+(e=>{switch(this.options.syntax){case"vue":return e.replace(/^<a/,"<github-button").replace(/a>$/,"github-button>");case"react":return e.replace(/^<a/,"<GitHubButton").replace(/a>$/,"GitHubButton>");default:return e}})(e.outerHTML)},scriptHTML(){switch(this.options.syntax){case"vue":return"import GithubButton from 'vue-github-button'\n\nexport default {\n  components: {\n    GithubButton\n  },\n  // ...\n}";case"react":return"import GitHubButton from 'react-github-btn'";default:return'\x3c!-- Place this tag in your head or just before your close body tag. --\x3e\n<script async defer src="https://buttons.github.io/buttons.js"><\/script>'}}},methods:{capitalize(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""},getPreviewAttrs(){return{...this.attrs,"data-show-count":this.attrs["data-show-count"]&&!this.timeoutID}}}};const xe=(0,ye.Z)(ke,[["render",me],["__scopeId","data-v-58fedd8e"]]);var Se=xe;window.onbeforeunload=function(){},(0,s.ri)(Se).mount("#app")}},o={};function t(s){var r=o[s];if(void 0!==r)return r.exports;var n=o[s]={exports:{}};return e[s](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(o,s,r,n){if(!s){var c=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],n=e[u][2];for(var i=!0,a=0;a<s.length;a++)(!1&n||c>=n)&&Object.keys(t.O).every((function(e){return t.O[e](s[a])}))?s.splice(a--,1):(i=!1,n<c&&(c=n));if(i){e.splice(u--,1);var l=r();void 0!==l&&(o=l)}}return o}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,r,n]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var s in o)t.o(o,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,s){var r,n,c=s[0],i=s[1],a=s[2],l=0;if(c.some((function(o){return 0!==e[o]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(a)var u=a(t)}for(o&&o(s);l<c.length;l++)n=c[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},s=self["webpackChunkbuttons_github_io"]=self["webpackChunkbuttons_github_io"]||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(5906)}));s=t.O(s)})();
//# sourceMappingURL=app.f8f2ff4d.js.map