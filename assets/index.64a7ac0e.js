import{S,i as N,s as R,c as pe,e as p,a as f,b,u as ge,g as he,d as ve,t as j,f as be,h as ke,j as L,k as v,l as ye,w as G,m as k,n as W,p as re,o as q,r as te,q as ne,v as M,x as Y,y as P,z,A as U,B as X,C as h,D as we,E as Ie,F as Ue,G as Ce,H as ie,I as ae,J as oe,K as ce}from"./vendor.0acc2670.js";const je=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};je();function Le(r){let e,t,l,s;const n=r[8].default,a=pe(n,r,r[7],null);return{c(){e=p("div"),a&&a.c(),f(e,"class","card svelte-1vbwm1l"),f(e,"style",t="max-width: "+r[1]+"px; max-height: "+r[0]+"px; "+(r[2]?fe:"")+" padding-block: "+r[3]+"px "+r[4]+"px; background-color: "+r[5])},m(i,o){b(i,e,o),a&&a.m(e,null),s=!0},p(i,[o]){a&&a.p&&(!s||o&128)&&ge(a,n,i,i[7],s?ve(n,i[7],o,null):he(i[7]),null),(!s||o&63&&t!==(t="max-width: "+i[1]+"px; max-height: "+i[0]+"px; "+(i[2]?fe:"")+" padding-block: "+i[3]+"px "+i[4]+"px; background-color: "+i[5]))&&f(e,"style",t)},i(i){s||(j(a,i),l||be(()=>{l=ke(e,r[6],{delay:100,duration:300}),l.start()}),s=!0)},o(i){L(a,i),s=!1},d(i){i&&v(e),a&&a.d(i)}}}const fe="display: flex; flex-direction: column; align-items: center;";function De(r,e,t){let{$$slots:l={},$$scope:s}=e,{maxHeight:n=625}=e,{maxWidth:a=525}=e,{center:i=!0}=e,{paddingYTop:o=55}=e,{paddingYBottom:d=0}=e,{backgroundColor:g="rgba(230, 230, 230, 0.27)"}=e,{transition:m=ye}=e;return r.$$set=c=>{"maxHeight"in c&&t(0,n=c.maxHeight),"maxWidth"in c&&t(1,a=c.maxWidth),"center"in c&&t(2,i=c.center),"paddingYTop"in c&&t(3,o=c.paddingYTop),"paddingYBottom"in c&&t(4,d=c.paddingYBottom),"backgroundColor"in c&&t(5,g=c.backgroundColor),"transition"in c&&t(6,m=c.transition),"$$scope"in c&&t(7,s=c.$$scope)},[n,a,i,o,d,g,m,s,l]}class le extends S{constructor(e){super();N(this,e,De,Le,R,{maxHeight:0,maxWidth:1,center:2,paddingYTop:3,paddingYBottom:4,backgroundColor:5,transition:6})}}const de=async({url:r="https://cialfla.freedomains.dev/image/api/upload",file:e})=>{const t=new FormData,l=e.name?e:e.getAsFile();return t.append("imageFile",l),(await fetch(r,{method:"POST",body:t})).json()},ee=G(""),V=G(""),Z=G(""),Q=G(!1);function xe(r){let e,t,l;return{c(){e=p("div"),k(e,"background-color",r[0]),k(e,"border",r[1]),f(e,"class","imageInput svelte-17m05dh")},m(s,n){b(s,e,n),r[6](e),t||(l=[W(e,"drop",re(r[3])),W(e,"dragover",re(r[4])),W(e,"dragleave",r[5])],t=!0)},p(s,[n]){n&1&&k(e,"background-color",s[0]),n&2&&k(e,"border",s[1])},i:q,o:q,d(s){s&&v(e),r[6](null),t=!1,te(l)}}}function Be(r,e,t){const l={backgroundColor:"rgb(79 80 202 / 40%)",border:"2px dashed #171aff",initiaLbackgroundColor:"rgba(108, 109, 209, 0.4)",initialBorder:"2px dashed #b6b7ff"};let s=l.initiaLbackgroundColor,n=l.initialBorder,a;const i=m=>{const c=m.dataTransfer.items;if(c){const[u]=c;if(u.kind==="file")if(u.getAsFile().type.split("/")[0]==="image"){const B=u.getAsFile();Z.set(B.name),Q.set(!1);const D=new FileReader;D.onload=()=>ee.set(D.result),D.readAsDataURL(B),de({file:u}).then(C=>V.set(C)).catch(()=>Q.set(!0))}else d()}else console.log(m.dataTransfer.files)},o=()=>{t(0,s=l.backgroundColor),t(1,n=l.border)},d=()=>{t(0,s=l.initiaLbackgroundColor),t(1,n=l.initialBorder)};function g(m){ne[m?"unshift":"push"](()=>{a=m,t(2,a)})}return[s,n,a,i,o,d,g]}class He extends S{constructor(e){super();N(this,e,Be,xe,R,{})}}function Te(r){let e;return{c(){e=p("span"),e.textContent="Drag and drop an image",f(e,"class","dragInfo svelte-inc7wh")},m(t,l){b(t,e,l)},d(t){t&&v(e)}}}function Fe(r){let e;return{c(){e=p("div"),e.innerHTML=`<img src="error.svg" alt="error"/> 
      <span class="error svelte-inc7wh">Internal Error</span>`,f(e,"class","error__container svelte-inc7wh")},m(t,l){b(t,e,l)},d(t){t&&v(e)}}}function We(r){let e,t,l,s,n,a,i,o,d,g,m,c,u,w,B,D,C,E,O,T,A,J,F;a=new He({});function $(_,I){return _[0]?Fe:Te}let K=$(r),x=K(r);return{c(){e=p("h1"),e.textContent="Upload Image",t=U(),l=p("span"),l.textContent="Any image type*",s=U(),n=p("div"),M(a.$$.fragment),i=U(),o=p("img"),g=U(),x.c(),m=U(),c=p("div"),u=p("hr"),w=U(),B=p("span"),B.textContent="OR",D=U(),C=p("hr"),E=U(),O=p("div"),T=p("button"),T.innerHTML=`<span class="card__choose-file__icon svelte-inc7wh"><img class="card__choose-file__icon__svg svelte-inc7wh" src="upload.svg" alt="Upload icon"/></span> 
      <span class="card__choose-file__text svelte-inc7wh">Select Image</span>`,f(e,"class","card__heading svelte-inc7wh"),f(l,"class","card__imageTypeInfo svelte-inc7wh"),f(o,"class","card__dudeOnDisk svelte-inc7wh"),X(o.src,d="dudeOnDisk.png")||f(o,"src",d),f(o,"alt","dude on disk"),f(n,"class","card__dragdrop__container svelte-inc7wh"),f(u,"class","lineLeft svelte-inc7wh"),f(B,"class","card__or__word svelte-inc7wh"),f(C,"class","lineRight svelte-inc7wh"),k(c,"margin-top",(r[0]&&32)+"px"),f(c,"class","card__or svelte-inc7wh"),f(T,"class","card__choose-file svelte-inc7wh"),f(O,"class","card__choose-file__container svelte-inc7wh")},m(_,I){b(_,e,I),b(_,t,I),b(_,l,I),b(_,s,I),b(_,n,I),Y(a,n,null),h(n,i),h(n,o),b(_,g,I),x.m(_,I),b(_,m,I),b(_,c,I),h(c,u),h(c,w),h(c,B),h(c,D),h(c,C),b(_,E,I),b(_,O,I),h(O,T),A=!0,J||(F=W(T,"click",r[1]),J=!0)},p(_,I){K!==(K=$(_))&&(x.d(1),x=K(_),x&&(x.c(),x.m(m.parentNode,m))),(!A||I&1)&&k(c,"margin-top",(_[0]&&32)+"px")},i(_){A||(j(a.$$.fragment,_),A=!0)},o(_){L(a.$$.fragment,_),A=!1},d(_){_&&v(e),_&&v(t),_&&v(l),_&&v(s),_&&v(n),P(a),_&&v(g),x.d(_),_&&v(m),_&&v(c),_&&v(E),_&&v(O),J=!1,F()}}}function Me(r){let e,t;return e=new le({props:{paddingYBottom:55,$$slots:{default:[We]},$$scope:{ctx:r}}}),{c(){M(e.$$.fragment)},m(l,s){Y(e,l,s),t=!0},p(l,[s]){const n={};s&5&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Ye(r,e,t){let l;return z(r,Q,n=>t(0,l=n)),[l,()=>{const n=document.createElement("input");n.type="file",n.addEventListener("change",a=>{const[i]=a.target.files;Z.set(i.name),Q.set(!1);const o=new FileReader;o.onload=()=>ee.set(o.result),o.readAsDataURL(i),de({file:i}).then(d=>V.set(d)).catch(()=>Q.set(!0))}),n.click()}]}class Pe extends S{constructor(e){super();N(this,e,Ye,Me,R,{})}}function Ae(r){let e;return{c(){e=p("div"),e.innerHTML=`<div class="circle circle1 svelte-1wfk3r3"></div> 
  <div class="circle circle2 svelte-1wfk3r3"></div> 
  <div class="circle circle3 svelte-1wfk3r3"></div>`,f(e,"class","circles__container svelte-1wfk3r3")},m(t,l){b(t,e,l)},p:q,i:q,o:q,d(t){t&&v(e)}}}class ue extends S{constructor(e){super();N(this,e,null,Ae,R,{})}}function $e(r){let e,t,l,s,n,a;return n=new ue({}),{c(){e=p("div"),t=p("h1"),t.textContent="Uploading...",l=U(),s=p("div"),M(n.$$.fragment),f(t,"class","svelte-1hfgh40"),f(s,"class","loading__container svelte-1hfgh40"),f(e,"class","wrapper svelte-1hfgh40")},m(i,o){b(i,e,o),h(e,t),h(e,l),h(e,s),Y(n,s,null),a=!0},i(i){a||(j(n.$$.fragment,i),a=!0)},o(i){L(n.$$.fragment,i),a=!1},d(i){i&&v(e),P(n)}}}function Ee(r){let e,t;return e=new le({props:{maxWidth:367,maxHeight:214,paddingYTop:35,paddingYBottom:65,$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){M(e.$$.fragment)},m(l,s){Y(e,l,s),t=!0},p(l,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}class Oe extends S{constructor(e){super();N(this,e,null,Ee,R,{})}}function _e(r,e,t){const l=r.slice();return l[10]=e[t],l}function me(r){let e,t,l,s,n,a;return{c(){e=p("div"),t=p("img"),f(t,"class","partyPopper svelte-od9w7"),X(t.src,l="party-popper.png")||f(t,"src",l),f(t,"alt","partyPopper"),k(t,"left",r[2].offsetWidth/3+"px"),k(t,"top",r[2].offsetHeight/3+"px"),k(t,"height",r[2].offsetHeight/3+"px"),k(t,"width",r[2].offsetWidth/3+"px"),f(e,"class","party-poppers svelte-od9w7"),k(e,"transform","rotate("+r[6](10,-80)+"deg)"),k(e,"height",r[2].offsetHeight+"px"),k(e,"width",r[2].offsetWidth+"px")},m(i,o){b(i,e,o),h(e,t),n||(a=we(s=r[10].call(null,t)),n=!0)},p(i,o){o&4&&k(t,"left",i[2].offsetWidth/3+"px"),o&4&&k(t,"top",i[2].offsetHeight/3+"px"),o&4&&k(t,"height",i[2].offsetHeight/3+"px"),o&4&&k(t,"width",i[2].offsetWidth/3+"px"),o&4&&k(e,"height",i[2].offsetHeight+"px"),o&4&&k(e,"width",i[2].offsetWidth+"px")},d(i){i&&v(e),n=!1,a()}}}function Se(r){let e,t,l,s,n,a,i=r[3],o=[];for(let d=0;d<i.length;d+=1)o[d]=me(_e(r,i,d));return{c(){e=p("div");for(let d=0;d<o.length;d+=1)o[d].c();t=U(),l=p("img"),f(l,"class","emoji svelte-od9w7"),X(l.src,s="party-popper.png")||f(l,"src",s),f(l,"alt","Party popper emoji"),k(l,"width",r[0]+"px"),f(e,"class","div svelte-od9w7")},m(d,g){b(d,e,g);for(let m=0;m<o.length;m+=1)o[m].m(e,null);h(e,t),h(e,l),r[9](l),n||(a=[W(l,"click",r[4]),W(l,"load",r[8])],n=!0)},p(d,[g]){if(g&76){i=d[3];let m;for(m=0;m<i.length;m+=1){const c=_e(d,i,m);o[m]?o[m].p(c,g):(o[m]=me(c),o[m].c(),o[m].m(e,t))}for(;m<o.length;m+=1)o[m].d(1);o.length=i.length}g&1&&k(l,"width",d[0]+"px")},i:q,o:q,d(d){d&&v(e),Ie(o,d),r[9](null),n=!1,te(a)}}}function Ne(r,e,t){let{emojiWidth:l=70}=e,{shotsDelayed:s=!0}=e,{partyMode:n=!0}=e,a,i=[];const o=()=>{t(3,i=[...i,u=>{Ue({targets:u,translateX:[{value:Math.floor(Math.random()*100+40),duration:3e3}],opacity:[{value:0,duation:3e3}],rotate:"2turn",duration:7e3,complete:()=>{u.style.display="none"}})}])},d=(u,w=0)=>{if(w!==u)if(o(),s)setTimeout(()=>d(u,w+1),20);else return d(u,w+1)},g=(u,w)=>Math.floor(Math.random()*(u-w)+w),m=()=>n&&d(25);function c(u){ne[u?"unshift":"push"](()=>{a=u,t(2,a)})}return r.$$set=u=>{"emojiWidth"in u&&t(0,l=u.emojiWidth),"shotsDelayed"in u&&t(7,s=u.shotsDelayed),"partyMode"in u&&t(1,n=u.partyMode)},[l,n,a,i,o,d,g,s,m,c]}class Re extends S{constructor(e){super();N(this,e,Ne,Se,R,{emojiWidth:0,shotsDelayed:7,partyMode:1})}}function qe(r){let e,t,l,s,n,a,i,o,d,g,m,c,u,w,B,D,C,E,O,T,A,J,F,$,K,x,_,I,se;return g=new Re({}),{c(){e=p("div"),t=p("div"),t.innerHTML='<img src="arrow_back.svg" alt="back home" class="svelte-104bxj9"/>',l=U(),s=p("div"),n=p("h1"),a=p("span"),a.textContent="Uploaded",i=U(),o=ie(r[2]),d=U(),M(g.$$.fragment),m=U(),c=p("div"),u=p("img"),B=U(),D=p("div"),C=p("button"),E=p("span"),E.innerHTML=`<img class="svg userImage__link__icon__svg svelte-104bxj9" src="link.svg" alt="Upload icon"/> 
        <img class="svg userImage__copy svelte-104bxj9" alt="Copy to clipboard" src="copy.svg"/>`,O=U(),T=p("span"),A=ie(r[0]),J=U(),F=p("a"),$=p("img"),f(t,"class","back svelte-104bxj9"),k(a,"color","#b6b8ff"),f(n,"class","svelte-104bxj9"),f(s,"class","heading svelte-104bxj9"),f(e,"class","wrapper svelte-104bxj9"),f(u,"class","userImage svelte-104bxj9"),X(u.src,w=r[3])||f(u,"src",w),f(u,"alt",r[2]),f(c,"class","userImage__container svelte-104bxj9"),f(E,"class","userImage__link__icon svelte-104bxj9"),f(T,"class","userImage__link__text svelte-104bxj9"),f(C,"class","userImage__link svelte-104bxj9"),f($,"class","svg userImage__open__icon__svg svelte-104bxj9"),X($.src,K="open.svg")||f($,"src",K),f($,"alt","Upload icon"),f(F,"class","userImage__open svelte-104bxj9"),f(F,"href",x=r[1].fileUrl),f(F,"target","_blank"),f(D,"class","userImage__link__container svelte-104bxj9")},m(y,H){b(y,e,H),h(e,t),h(e,l),h(e,s),h(s,n),h(n,a),h(n,i),h(n,o),h(s,d),Y(g,s,null),b(y,m,H),b(y,c,H),h(c,u),b(y,B,H),b(y,D,H),h(D,C),h(C,E),h(C,O),h(C,T),h(T,A),h(D,J),h(D,F),h(F,$),_=!0,I||(se=[W(t,"click",r[5]),W(C,"mouseenter",r[6]),W(C,"mouseleave",r[7]),W(C,"click",r[4])],I=!0)},p(y,H){(!_||H&4)&&ae(o,y[2]),(!_||H&8&&!X(u.src,w=y[3]))&&f(u,"src",w),(!_||H&4)&&f(u,"alt",y[2]),(!_||H&1)&&ae(A,y[0]),(!_||H&2&&x!==(x=y[1].fileUrl))&&f(F,"href",x)},i(y){_||(j(g.$$.fragment,y),_=!0)},o(y){L(g.$$.fragment,y),_=!1},d(y){y&&v(e),P(g),y&&v(m),y&&v(c),y&&v(B),y&&v(D),I=!1,te(se)}}}function Ke(r){let e,t;return e=new le({props:{paddingYTop:24,paddingYBottom:24,transition:Ce,$$slots:{default:[qe]},$$scope:{ctx:r}}}),{c(){M(e.$$.fragment)},m(l,s){Y(e,l,s),t=!0},p(l,[s]){const n={};s&527&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function ze(r,e,t){let l,s,n;z(r,V,c=>t(1,l=c)),z(r,Z,c=>t(2,s=c)),z(r,ee,c=>t(3,n=c));let a=l.fileUrl;const i=c=>{navigator.clipboard.writeText(c)};return[a,l,s,n,()=>{i(l.fileUrl),t(0,a="Copied")},()=>{Z.set(""),ee.set(""),V.set("")},()=>t(0,a="Copy to clipboard"),()=>t(0,a=l.fileUrl)]}class Je extends S{constructor(e){super();N(this,e,ze,Ke,R,{})}}function Xe(r){let e,t,l;return t=new ue({}),{c(){e=p("div"),M(t.$$.fragment),f(e,"class","loading svelte-eo1ywk")},m(s,n){b(s,e,n),Y(t,e,null),l=!0},p:q,i(s){l||(j(t.$$.fragment,s),l=!0)},o(s){L(t.$$.fragment,s),l=!1},d(s){s&&v(e),P(t)}}}function Qe(r){let e,t,l,s;const n=[Ge,Ze,Ve],a=[];function i(o,d){return o[1]||!o[2]?0:o[3]?1:o[2]?2:-1}return~(t=i(r))&&(l=a[t]=n[t](r)),{c(){e=p("div"),l&&l.c(),f(e,"class","card__container svelte-eo1ywk")},m(o,d){b(o,e,d),~t&&a[t].m(e,null),s=!0},p(o,d){let g=t;t=i(o),t!==g&&(l&&(ce(),L(a[g],1,1,()=>{a[g]=null}),oe()),~t?(l=a[t],l||(l=a[t]=n[t](o),l.c()),j(l,1),l.m(e,null)):l=null)},i(o){s||(j(l),s=!0)},o(o){L(l),s=!1},d(o){o&&v(e),~t&&a[t].d()}}}function Ve(r){let e,t;return e=new Oe({}),{c(){M(e.$$.fragment)},m(l,s){Y(e,l,s),t=!0},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Ze(r){let e,t;return e=new Je({}),{c(){M(e.$$.fragment)},m(l,s){Y(e,l,s),t=!0},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Ge(r){let e,t;return e=new Pe({}),{c(){M(e.$$.fragment)},m(l,s){Y(e,l,s),t=!0},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function et(r){let e,t,l,s,n,a,i,o;const d=[Qe,Xe],g=[];function m(c,u){return c[0]?0:1}return a=m(r),i=g[a]=d[a](r),{c(){e=p("link"),t=p("link"),l=p("link"),s=U(),n=p("div"),i.c(),f(e,"rel","preconnect"),f(e,"href","https://fonts.googleapis.com"),f(t,"rel","preconnect"),f(t,"href","https://fonts.gstatic.com"),f(t,"crossorigin","use-credentials"),f(l,"href","https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"),f(l,"rel","stylesheet"),f(n,"class","wrapper svelte-eo1ywk")},m(c,u){h(document.head,e),h(document.head,t),h(document.head,l),b(c,s,u),b(c,n,u),g[a].m(n,null),o=!0},p(c,[u]){let w=a;a=m(c),a===w?g[a].p(c,u):(ce(),L(g[w],1,1,()=>{g[w]=null}),oe(),i=g[a],i?i.p(c,u):(i=g[a]=d[a](c),i.c()),j(i,1),i.m(n,null))},i(c){o||(j(i),o=!0)},o(c){L(i),o=!1},d(c){v(e),v(t),v(l),c&&v(s),c&&v(n),g[a].d()}}}function tt(r,e,t){let l,s,n;z(r,Q,i=>t(1,l=i)),z(r,Z,i=>t(2,s=i)),z(r,V,i=>t(3,n=i));let a;return window.onload=()=>t(0,a=!0),[a,l,s,n]}class lt extends S{constructor(e){super();N(this,e,tt,et,R,{})}}new lt({target:document.getElementById("app")});
