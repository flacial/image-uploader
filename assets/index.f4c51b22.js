import{S as R,i as S,s as q,c as ge,e as _,a as f,b,u as he,g as ve,d as be,t as I,f as ke,h as ye,j as U,k as v,l as we,w as Z,m as E,p as re,n as L,r as ne,o as se,q as T,v as $,x as F,y as z,z as w,A as X,B as C,C as g,D as Ce,E as Ie,F as Ue,G as Le,H as He,I as De,J as Be,K as Me,L as ie,M as oe,N as ae,O as ce}from"./vendor.bebbdd40.js";const Te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};Te();function $e(n){let e,t,l,r;const s=n[8].default,o=ge(s,n,n[7],null);return{c(){e=_("div"),o&&o.c(),f(e,"class","card svelte-1vbwm1l"),f(e,"style",t="max-width: "+n[1]+"px; max-height: "+n[0]+"px; "+(n[2]?fe:"")+" padding-block: "+n[3]+"px "+n[4]+"px; background-color: "+n[5])},m(i,c){b(i,e,c),o&&o.m(e,null),r=!0},p(i,[c]){o&&o.p&&(!r||c&128)&&he(o,s,i,i[7],r?be(s,i[7],c,null):ve(i[7]),null),(!r||c&63&&t!==(t="max-width: "+i[1]+"px; max-height: "+i[0]+"px; "+(i[2]?fe:"")+" padding-block: "+i[3]+"px "+i[4]+"px; background-color: "+i[5]))&&f(e,"style",t)},i(i){r||(I(o,i),l||ke(()=>{l=ye(e,n[6],{delay:100,duration:300}),l.start()}),r=!0)},o(i){U(o,i),r=!1},d(i){i&&v(e),o&&o.d(i)}}}const fe="display: flex; flex-direction: column; align-items: center;";function Fe(n,e,t){let{$$slots:l={},$$scope:r}=e,{maxHeight:s=625}=e,{maxWidth:o=525}=e,{center:i=!0}=e,{paddingYTop:c=55}=e,{paddingYBottom:d=0}=e,{backgroundColor:m="rgba(230, 230, 230, 0.27)"}=e,{transition:p=we}=e;return n.$$set=a=>{"maxHeight"in a&&t(0,s=a.maxHeight),"maxWidth"in a&&t(1,o=a.maxWidth),"center"in a&&t(2,i=a.center),"paddingYTop"in a&&t(3,c=a.paddingYTop),"paddingYBottom"in a&&t(4,d=a.paddingYBottom),"backgroundColor"in a&&t(5,m=a.backgroundColor),"transition"in a&&t(6,p=a.transition),"$$scope"in a&&t(7,r=a.$$scope)},[s,o,i,c,d,m,p,r,l]}class te extends R{constructor(e){super();S(this,e,Fe,$e,q,{maxHeight:0,maxWidth:1,center:2,paddingYTop:3,paddingYBottom:4,backgroundColor:5,transition:6})}}const de=async({url:n="https://cialfla.freedomains.dev/image/api/upload",file:e})=>{const t=new FormData,l=e.name?e:e.getAsFile();return t.append("imageFile",l),(await fetch(n,{method:"POST",body:t})).json()},Q=Z(""),V=Z(""),G=Z(""),ee=Z(!1);function We(n){let e,t,l;return{c(){e=_("div"),f(e,"class","imageInput svelte-cpiub1")},m(r,s){b(r,e,s),n[4](e),t||(l=[E(e,"drop",re(n[1])),E(e,"dragover",re(n[2])),E(e,"dragleave",n[3])],t=!0)},p:L,i:L,o:L,d(r){r&&v(e),n[4](null),t=!1,ne(l)}}}function Pe(n,e,t){const l={backgroundColor:"rgb(79 80 202 / 40%)",border:"2px dashed #171aff",initiaLbackgroundColor:"rgba(108, 109, 209, 0.4)",initialBorder:"2px dashed #b6b7ff"};let r;const s=d=>{const m=d.dataTransfer.items;if(m){const[p]=m;if(p.kind==="file"&&p.getAsFile().type.split("/")[0]==="image"){const h=new FileReader,H=p.getAsFile();G.set(H.name),h.onload=()=>{Q.set(h.result)},h.readAsDataURL(H),de({file:p}).then(W=>{V.set(W)}).catch(()=>ee.set(!0))}}else console.log(d.dataTransfer.files)},o=()=>{t(0,r.style.backgroundColor=l.backgroundColor,r),t(0,r.style.border=l.border,r)},i=()=>{t(0,r.style.backgroundColor=l.initiaLbackgroundColor,r),t(0,r.style.border=l.initialBorder,r)};function c(d){se[d?"unshift":"push"](()=>{r=d,t(0,r)})}return[r,s,o,i,c]}class Ye extends R{constructor(e){super();S(this,e,Pe,We,q,{})}}function Ae(n){let e;return{c(){e=_("span"),e.textContent="Drag and drop an image",f(e,"class","dragInfo svelte-inc7wh")},m(t,l){b(t,e,l)},d(t){t&&v(e)}}}function Oe(n){let e;return{c(){e=_("div"),e.innerHTML=`<img src="error.svg" alt="error"/> 
      <span class="error svelte-inc7wh">Internal Error</span>`,f(e,"class","error__container svelte-inc7wh")},m(t,l){b(t,e,l)},d(t){t&&v(e)}}}function je(n){let e,t,l,r,s,o,i,c,d,m,p,a,h,H,W,P,D,x,N,Y,O,J,A;o=new Ye({});function j(u,y){return u[0]?Oe:Ae}let K=j(n),B=K(n);return{c(){e=_("h1"),e.textContent="Upload Image",t=w(),l=_("span"),l.textContent="Any image type*",r=w(),s=_("div"),T(o.$$.fragment),i=w(),c=_("img"),m=w(),B.c(),p=w(),a=_("div"),h=_("hr"),H=w(),W=_("span"),W.textContent="OR",P=w(),D=_("hr"),x=w(),N=_("div"),Y=_("button"),Y.innerHTML=`<span class="card__choose-file__icon svelte-inc7wh"><img class="card__choose-file__icon__svg svelte-inc7wh" src="upload.svg" alt="Upload icon"/></span> 
      <span class="card__choose-file__text svelte-inc7wh">Select Image</span>`,f(e,"class","card__heading svelte-inc7wh"),f(l,"class","card__imageTypeInfo svelte-inc7wh"),f(c,"class","card__dudeOnDisk svelte-inc7wh"),X(c.src,d="dudeOnDisk.png")||f(c,"src",d),f(c,"alt","dude on disk"),f(s,"class","card__dragdrop__container svelte-inc7wh"),f(h,"class","lineLeft svelte-inc7wh"),f(W,"class","card__or__word svelte-inc7wh"),f(D,"class","lineRight svelte-inc7wh"),C(a,"margin-top",(n[0]&&32)+"px"),f(a,"class","card__or svelte-inc7wh"),f(Y,"class","card__choose-file svelte-inc7wh"),f(N,"class","card__choose-file__container svelte-inc7wh")},m(u,y){b(u,e,y),b(u,t,y),b(u,l,y),b(u,r,y),b(u,s,y),$(o,s,null),g(s,i),g(s,c),b(u,m,y),B.m(u,y),b(u,p,y),b(u,a,y),g(a,h),g(a,H),g(a,W),g(a,P),g(a,D),b(u,x,y),b(u,N,y),g(N,Y),O=!0,J||(A=E(Y,"click",n[1]),J=!0)},p(u,y){K!==(K=j(u))&&(B.d(1),B=K(u),B&&(B.c(),B.m(p.parentNode,p))),(!O||y&1)&&C(a,"margin-top",(u[0]&&32)+"px")},i(u){O||(I(o.$$.fragment,u),O=!0)},o(u){U(o.$$.fragment,u),O=!1},d(u){u&&v(e),u&&v(t),u&&v(l),u&&v(r),u&&v(s),F(o),u&&v(m),B.d(u),u&&v(p),u&&v(a),u&&v(x),u&&v(N),J=!1,A()}}}function Ee(n){let e,t;return e=new te({props:{paddingYBottom:55,$$slots:{default:[je]},$$scope:{ctx:n}}}),{c(){T(e.$$.fragment)},m(l,r){$(e,l,r),t=!0},p(l,[r]){const s={};r&5&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function xe(n,e,t){let l;return z(n,ee,s=>t(0,l=s)),[l,()=>{const s=document.createElement("input");s.type="file",s.addEventListener("change",o=>{const[i]=o.target.files;G.set(i.name);const c=new FileReader;c.onload=()=>{Q.set(c.result)},c.readAsDataURL(i),de({file:i}).then(d=>{console.log(d),V.set(d)}).catch(()=>ee.set(!0))}),s.click()}]}class Ne extends R{constructor(e){super();S(this,e,xe,Ee,q,{})}}function Re(n){let e;return{c(){e=_("div"),e.innerHTML=`<div class="circle circle1 svelte-1wfk3r3"></div> 
  <div class="circle circle2 svelte-1wfk3r3"></div> 
  <div class="circle circle3 svelte-1wfk3r3"></div>`,f(e,"class","circles__container svelte-1wfk3r3")},m(t,l){b(t,e,l)},p:L,i:L,o:L,d(t){t&&v(e)}}}class ue extends R{constructor(e){super();S(this,e,null,Re,q,{})}}function Se(n){let e,t,l,r,s,o;return s=new ue({}),{c(){e=_("div"),t=_("h1"),t.textContent="Uploading...",l=w(),r=_("div"),T(s.$$.fragment),f(t,"class","svelte-1hfgh40"),f(r,"class","loading__container svelte-1hfgh40"),f(e,"class","wrapper svelte-1hfgh40")},m(i,c){b(i,e,c),g(e,t),g(e,l),g(e,r),$(s,r,null),o=!0},i(i){o||(I(s.$$.fragment,i),o=!0)},o(i){U(s.$$.fragment,i),o=!1},d(i){i&&v(e),F(s)}}}function qe(n){let e,t;return e=new te({props:{maxWidth:367,maxHeight:214,paddingYTop:35,paddingYBottom:65,$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){T(e.$$.fragment)},m(l,r){$(e,l,r),t=!0},p(l,[r]){const s={};r&1&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}class _e extends R{constructor(e){super();S(this,e,null,qe,q,{})}}function pe(n,e,t){const l=n.slice();return l[9]=e[t],l}function me(n){let e,t,l,r,s,o;return{c(){e=_("div"),t=_("img"),f(t,"class","partyPopper svelte-od9w7"),X(t.src,l="party-popper.png")||f(t,"src",l),f(t,"alt","partyPopper"),C(t,"left",n[1].offsetWidth/3+"px"),C(t,"top",n[1].offsetHeight/3+"px"),C(t,"height",n[1].offsetHeight/3+"px"),C(t,"width",n[1].offsetWidth/3+"px"),f(e,"class","party-poppers svelte-od9w7"),C(e,"transform","rotate("+n[4](10,-80)+"deg)"),C(e,"height",n[1].offsetHeight+"px"),C(e,"width",n[1].offsetWidth+"px")},m(i,c){b(i,e,c),g(e,t),s||(o=Ce(r=n[9].call(null,t)),s=!0)},p(i,c){c&2&&C(t,"left",i[1].offsetWidth/3+"px"),c&2&&C(t,"top",i[1].offsetHeight/3+"px"),c&2&&C(t,"height",i[1].offsetHeight/3+"px"),c&2&&C(t,"width",i[1].offsetWidth/3+"px"),c&2&&C(e,"height",i[1].offsetHeight+"px"),c&2&&C(e,"width",i[1].offsetWidth+"px")},d(i){i&&v(e),s=!1,o()}}}function Ke(n){let e,t,l,r,s,o,i=n[2],c=[];for(let d=0;d<i.length;d+=1)c[d]=me(pe(n,i,d));return{c(){e=_("div");for(let d=0;d<c.length;d+=1)c[d].c();t=w(),l=_("img"),f(l,"class","emoji svelte-od9w7"),X(l.src,r="party-popper.png")||f(l,"src",r),f(l,"alt","Party popper emoji"),C(l,"width",n[0]+"px"),f(e,"class","div svelte-od9w7")},m(d,m){b(d,e,m);for(let p=0;p<c.length;p+=1)c[p].m(e,null);g(e,t),g(e,l),n[7](l),s||(o=E(l,"click",n[3]),s=!0)},p(d,[m]){if(m&22){i=d[2];let p;for(p=0;p<i.length;p+=1){const a=pe(d,i,p);c[p]?c[p].p(a,m):(c[p]=me(a),c[p].c(),c[p].m(e,t))}for(;p<c.length;p+=1)c[p].d(1);c.length=i.length}m&1&&C(l,"width",d[0]+"px")},i:L,o:L,d(d){d&&v(e),Ie(c,d),n[7](null),s=!1,o()}}}function ze(n,e,t){let{emojiWidth:l=70}=e,{shotsDelayed:r=!0}=e,{partyMode:s=!0}=e,o,i=[];const c=()=>{t(2,i=[...i,a=>{Le({targets:a,translateX:[{value:Math.floor(Math.random()*100+40),duration:3e3}],opacity:[{value:0,duation:3e3}],rotate:"2turn",duration:7e3,complete:()=>{a.style.display="none"}})}])},d=(a,h=0)=>{if(h!==a)if(c(),r)setTimeout(()=>d(a,h+1),20);else return d(a,h+1)},m=(a,h)=>Math.floor(Math.random()*(a-h)+h);Ue(()=>{s&&d(25)});function p(a){se[a?"unshift":"push"](()=>{o=a,t(1,o)})}return n.$$set=a=>{"emojiWidth"in a&&t(0,l=a.emojiWidth),"shotsDelayed"in a&&t(5,r=a.shotsDelayed),"partyMode"in a&&t(6,s=a.partyMode)},[l,o,i,c,m,r,s,p]}class Je extends R{constructor(e){super();S(this,e,ze,Ke,q,{emojiWidth:0,shotsDelayed:5,partyMode:6})}}const Xe=n=>new Promise(function(e){let t=new Image;t.onload=e,t.src=n});function Qe(n){return{c:L,m:L,p:L,i:L,o:L,d:L}}function Ve(n){let e,t;return e=new te({props:{paddingYTop:24,paddingYBottom:24,transition:Me,$$slots:{default:[Ze]},$$scope:{ctx:n}}}),{c(){T(e.$$.fragment)},m(l,r){$(e,l,r),t=!0},p(l,r){const s={};r&527&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Ze(n){let e,t,l,r,s,o,i,c,d,m,p,a,h,H,W,P,D,x,N,Y,O,J,A,j,K,B,u,y,le;return m=new Je({}),{c(){e=_("div"),t=_("div"),t.innerHTML='<img src="arrow_back.svg" alt="back home" class="svelte-v3l9bb"/>',l=w(),r=_("div"),s=_("h1"),o=_("span"),o.textContent="Uploaded",i=w(),c=ie(n[2]),d=w(),T(m.$$.fragment),p=w(),a=_("div"),h=_("img"),W=w(),P=_("div"),D=_("button"),x=_("span"),x.innerHTML='<img class="svg userImage__copy svelte-v3l9bb" alt="Copy to clipboard" src="copy.svg"/>',N=w(),Y=_("span"),O=ie(n[0]),J=w(),A=_("a"),j=_("img"),f(t,"class","back svelte-v3l9bb"),C(o,"color","#b6b8ff"),f(s,"class","svelte-v3l9bb"),f(r,"class","heading svelte-v3l9bb"),f(e,"class","wrapper svelte-v3l9bb"),f(h,"class","userImage svelte-v3l9bb"),X(h.src,H=n[3])||f(h,"src",H),f(h,"alt",n[2]),f(a,"class","userImage__container svelte-v3l9bb"),f(x,"class","userImage__link__icon svelte-v3l9bb"),f(Y,"class","userImage__link__text svelte-v3l9bb"),f(D,"class","userImage__link svelte-v3l9bb"),f(j,"class","svg userImage__open__icon__svg svelte-v3l9bb"),X(j.src,K="open.svg")||f(j,"src",K),f(j,"alt","Upload icon"),f(A,"class","userImage__open svelte-v3l9bb"),f(A,"href",B=n[1].fileUrl),f(A,"target","_blank"),f(P,"class","userImage__link__container svelte-v3l9bb")},m(k,M){b(k,e,M),g(e,t),g(e,l),g(e,r),g(r,s),g(s,o),g(s,i),g(s,c),g(r,d),$(m,r,null),b(k,p,M),b(k,a,M),g(a,h),b(k,W,M),b(k,P,M),g(P,D),g(D,x),g(D,N),g(D,Y),g(Y,O),g(P,J),g(P,A),g(A,j),u=!0,y||(le=[E(t,"click",n[5]),E(D,"mouseenter",n[6]),E(D,"mouseleave",n[7]),E(D,"click",n[4])],y=!0)},p(k,M){(!u||M&4)&&oe(c,k[2]),(!u||M&8&&!X(h.src,H=k[3]))&&f(h,"src",H),(!u||M&4)&&f(h,"alt",k[2]),(!u||M&1)&&oe(O,k[0]),(!u||M&2&&B!==(B=k[1].fileUrl))&&f(A,"href",B)},i(k){u||(I(m.$$.fragment,k),u=!0)},o(k){U(m.$$.fragment,k),u=!1},d(k){k&&v(e),F(m),k&&v(p),k&&v(a),k&&v(W),k&&v(P),y=!1,ne(le)}}}function Ge(n){let e,t;return e=new _e({}),{c(){T(e.$$.fragment)},m(l,r){$(e,l,r),t=!0},p:L,i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function et(n){let e,t,l={ctx:n,current:null,token:null,hasCatch:!1,pending:Ge,then:Ve,catch:Qe,blocks:[,,,]};return He(Xe("party-popper.png"),l),{c(){e=De(),l.block.c()},m(r,s){b(r,e,s),l.block.m(r,l.anchor=s),l.mount=()=>e.parentNode,l.anchor=e,t=!0},p(r,[s]){n=r,Be(l,n,s)},i(r){t||(I(l.block),t=!0)},o(r){for(let s=0;s<3;s+=1){const o=l.blocks[s];U(o)}t=!1},d(r){r&&v(e),l.block.d(r),l.token=null,l=null}}}function tt(n,e,t){let l,r,s;z(n,V,a=>t(1,l=a)),z(n,G,a=>t(2,r=a)),z(n,Q,a=>t(3,s=a));let o=l.fileUrl;const i=a=>{navigator.clipboard.writeText(a)};return[o,l,r,s,()=>{i(l.fileUrl),t(0,o="Copied")},()=>{G.set(""),Q.set(""),V.set("")},()=>t(0,o="Copy to clipboard"),()=>t(0,o=l.fileUrl)]}class lt extends R{constructor(e){super();S(this,e,tt,et,q,{})}}function rt(n){let e,t,l;return t=new ue({}),{c(){e=_("div"),T(t.$$.fragment),f(e,"class","loading svelte-eo1ywk")},m(r,s){b(r,e,s),$(t,e,null),l=!0},p:L,i(r){l||(I(t.$$.fragment,r),l=!0)},o(r){U(t.$$.fragment,r),l=!1},d(r){r&&v(e),F(t)}}}function nt(n){let e,t,l,r;const s=[ot,it,st],o=[];function i(c,d){return c[1]||!c[2]?0:c[3]?1:c[2]?2:-1}return~(t=i(n))&&(l=o[t]=s[t](n)),{c(){e=_("div"),l&&l.c(),f(e,"class","card__container svelte-eo1ywk")},m(c,d){b(c,e,d),~t&&o[t].m(e,null),r=!0},p(c,d){let m=t;t=i(c),t!==m&&(l&&(ce(),U(o[m],1,1,()=>{o[m]=null}),ae()),~t?(l=o[t],l||(l=o[t]=s[t](c),l.c()),I(l,1),l.m(e,null)):l=null)},i(c){r||(I(l),r=!0)},o(c){U(l),r=!1},d(c){c&&v(e),~t&&o[t].d()}}}function st(n){let e,t;return e=new _e({}),{c(){T(e.$$.fragment)},m(l,r){$(e,l,r),t=!0},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function it(n){let e,t;return e=new lt({}),{c(){T(e.$$.fragment)},m(l,r){$(e,l,r),t=!0},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function ot(n){let e,t;return e=new Ne({}),{c(){T(e.$$.fragment)},m(l,r){$(e,l,r),t=!0},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function at(n){let e,t,l,r,s,o,i,c;const d=[nt,rt],m=[];function p(a,h){return a[0]?0:1}return o=p(n),i=m[o]=d[o](n),{c(){e=_("link"),t=_("link"),l=_("link"),r=w(),s=_("div"),i.c(),f(e,"rel","preconnect"),f(e,"href","https://fonts.googleapis.com"),f(t,"rel","preconnect"),f(t,"href","https://fonts.gstatic.com"),f(t,"crossorigin","use-credentials"),f(l,"href","https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"),f(l,"rel","stylesheet"),f(s,"class","wrapper svelte-eo1ywk")},m(a,h){g(document.head,e),g(document.head,t),g(document.head,l),b(a,r,h),b(a,s,h),m[o].m(s,null),c=!0},p(a,[h]){let H=o;o=p(a),o===H?m[o].p(a,h):(ce(),U(m[H],1,1,()=>{m[H]=null}),ae(),i=m[o],i?i.p(a,h):(i=m[o]=d[o](a),i.c()),I(i,1),i.m(s,null))},i(a){c||(I(i),c=!0)},o(a){U(i),c=!1},d(a){v(e),v(t),v(l),a&&v(r),a&&v(s),m[o].d()}}}function ct(n,e,t){let l,r,s;z(n,ee,i=>t(1,l=i)),z(n,Q,i=>t(2,r=i)),z(n,V,i=>t(3,s=i));let o;return window.onload=()=>t(0,o=!0),[o,l,r,s]}class ft extends R{constructor(e){super();S(this,e,ct,at,q,{})}}new ft({target:document.getElementById("app")});
