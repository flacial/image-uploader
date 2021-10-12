import{S as O,i as R,s as S,c as me,e as p,a as f,b as y,u as ge,g as he,d as ve,t as I,f as ye,h as ke,j as x,k as v,l as be,w as Z,m as F,p as re,n as $,r as te,o as ne,q as W,v as M,x as Y,y as K,z as C,A as X,B as U,C as h,D as we,E as Ce,F as Ue,G as Ie,H as ie,I as ae,J as oe,K as ce}from"./vendor.558f652c.js";const xe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};xe();function Le(r){let e,t,l,s;const n=r[8].default,a=me(n,r,r[7],null);return{c(){e=p("div"),a&&a.c(),f(e,"class","card svelte-1vbwm1l"),f(e,"style",t="max-width: "+r[1]+"px; max-height: "+r[0]+"px; "+(r[2]?fe:"")+" padding-block: "+r[3]+"px "+r[4]+"px; background-color: "+r[5])},m(i,o){y(i,e,o),a&&a.m(e,null),s=!0},p(i,[o]){a&&a.p&&(!s||o&128)&&ge(a,n,i,i[7],s?ve(n,i[7],o,null):he(i[7]),null),(!s||o&63&&t!==(t="max-width: "+i[1]+"px; max-height: "+i[0]+"px; "+(i[2]?fe:"")+" padding-block: "+i[3]+"px "+i[4]+"px; background-color: "+i[5]))&&f(e,"style",t)},i(i){s||(I(a,i),l||ye(()=>{l=ke(e,r[6],{delay:100,duration:300}),l.start()}),s=!0)},o(i){x(a,i),s=!1},d(i){i&&v(e),a&&a.d(i)}}}const fe="display: flex; flex-direction: column; align-items: center;";function He(r,e,t){let{$$slots:l={},$$scope:s}=e,{maxHeight:n=625}=e,{maxWidth:a=525}=e,{center:i=!0}=e,{paddingYTop:o=55}=e,{paddingYBottom:d=0}=e,{backgroundColor:g="rgba(230, 230, 230, 0.27)"}=e,{transition:m=be}=e;return r.$$set=c=>{"maxHeight"in c&&t(0,n=c.maxHeight),"maxWidth"in c&&t(1,a=c.maxWidth),"center"in c&&t(2,i=c.center),"paddingYTop"in c&&t(3,o=c.paddingYTop),"paddingYBottom"in c&&t(4,d=c.paddingYBottom),"backgroundColor"in c&&t(5,g=c.backgroundColor),"transition"in c&&t(6,m=c.transition),"$$scope"in c&&t(7,s=c.$$scope)},[n,a,i,o,d,g,m,s,l]}class le extends O{constructor(e){super();R(this,e,He,Le,S,{maxHeight:0,maxWidth:1,center:2,paddingYTop:3,paddingYBottom:4,backgroundColor:5,transition:6})}}const de=async({url:r="https://cialfla.freedomains.dev/image/api/upload",file:e})=>{const t=new FormData,l=e.name?e:e.getAsFile();return t.append("imageFile",l),(await fetch(r,{method:"POST",body:t})).json()},Q=Z(""),V=Z(""),G=Z(""),ee=Z(!1);function qe(r){let e,t,l;return{c(){e=p("div"),f(e,"class","imageInput svelte-cpiub1")},m(s,n){y(s,e,n),r[4](e),t||(l=[F(e,"drop",re(r[1])),F(e,"dragover",re(r[2])),F(e,"dragleave",r[3])],t=!0)},p:$,i:$,o:$,d(s){s&&v(e),r[4](null),t=!1,te(l)}}}function De(r,e,t){const l={backgroundColor:"rgb(79 80 202 / 40%)",border:"2px dashed #171aff",initiaLbackgroundColor:"rgba(108, 109, 209, 0.4)",initialBorder:"2px dashed #b6b7ff"};let s;const n=d=>{const g=d.dataTransfer.items;if(g){const[m]=g;if(m.kind==="file"&&m.getAsFile().type.split("/")[0]==="image"){const u=new FileReader,k=m.getAsFile();G.set(k.name),u.onload=()=>{Q.set(u.result)},u.readAsDataURL(k),de({file:m}).then(D=>{V.set(D)}).catch(()=>ee.set(!0))}}else console.log(d.dataTransfer.files)},a=()=>{t(0,s.style.backgroundColor=l.backgroundColor,s),t(0,s.style.border=l.border,s)},i=()=>{t(0,s.style.backgroundColor=l.initiaLbackgroundColor,s),t(0,s.style.border=l.initialBorder,s)};function o(d){ne[d?"unshift":"push"](()=>{s=d,t(0,s)})}return[s,n,a,i,o]}class Be extends O{constructor(e){super();R(this,e,De,qe,S,{})}}function ze(r){let e;return{c(){e=p("span"),e.textContent="Drag and drop an image",f(e,"class","dragInfo svelte-inc7wh")},m(t,l){y(t,e,l)},d(t){t&&v(e)}}}function Te(r){let e;return{c(){e=p("div"),e.innerHTML=`<img src="error.svg" alt="error"/> 
      <span class="error svelte-inc7wh">Internal Error</span>`,f(e,"class","error__container svelte-inc7wh")},m(t,l){y(t,e,l)},d(t){t&&v(e)}}}function Fe(r){let e,t,l,s,n,a,i,o,d,g,m,c,u,k,D,B,L,j,E,z,P,J,T;a=new Be({});function A(_,w){return _[0]?Te:ze}let N=A(r),H=N(r);return{c(){e=p("h1"),e.textContent="Upload Image",t=C(),l=p("span"),l.textContent="Any image type*",s=C(),n=p("div"),W(a.$$.fragment),i=C(),o=p("img"),g=C(),H.c(),m=C(),c=p("div"),u=p("hr"),k=C(),D=p("span"),D.textContent="OR",B=C(),L=p("hr"),j=C(),E=p("div"),z=p("button"),z.innerHTML=`<span class="card__choose-file__icon svelte-inc7wh"><img class="card__choose-file__icon__svg svelte-inc7wh" src="upload.svg" alt="Upload icon"/></span> 
      <span class="card__choose-file__text svelte-inc7wh">Select Image</span>`,f(e,"class","card__heading svelte-inc7wh"),f(l,"class","card__imageTypeInfo svelte-inc7wh"),f(o,"class","card__dudeOnDisk svelte-inc7wh"),X(o.src,d="dudeOnDisk.png")||f(o,"src",d),f(o,"alt","dude on disk"),f(n,"class","card__dragdrop__container svelte-inc7wh"),f(u,"class","lineLeft svelte-inc7wh"),f(D,"class","card__or__word svelte-inc7wh"),f(L,"class","lineRight svelte-inc7wh"),U(c,"margin-top",(r[0]&&32)+"px"),f(c,"class","card__or svelte-inc7wh"),f(z,"class","card__choose-file svelte-inc7wh"),f(E,"class","card__choose-file__container svelte-inc7wh")},m(_,w){y(_,e,w),y(_,t,w),y(_,l,w),y(_,s,w),y(_,n,w),M(a,n,null),h(n,i),h(n,o),y(_,g,w),H.m(_,w),y(_,m,w),y(_,c,w),h(c,u),h(c,k),h(c,D),h(c,B),h(c,L),y(_,j,w),y(_,E,w),h(E,z),P=!0,J||(T=F(z,"click",r[1]),J=!0)},p(_,w){N!==(N=A(_))&&(H.d(1),H=N(_),H&&(H.c(),H.m(m.parentNode,m))),(!P||w&1)&&U(c,"margin-top",(_[0]&&32)+"px")},i(_){P||(I(a.$$.fragment,_),P=!0)},o(_){x(a.$$.fragment,_),P=!1},d(_){_&&v(e),_&&v(t),_&&v(l),_&&v(s),_&&v(n),Y(a),_&&v(g),H.d(_),_&&v(m),_&&v(c),_&&v(j),_&&v(E),J=!1,T()}}}function We(r){let e,t;return e=new le({props:{paddingYBottom:55,$$slots:{default:[Fe]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},m(l,s){M(e,l,s),t=!0},p(l,[s]){const n={};s&5&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Me(r,e,t){let l;return K(r,ee,n=>t(0,l=n)),[l,()=>{const n=document.createElement("input");n.type="file",n.addEventListener("change",a=>{const[i]=a.target.files;G.set(i.name);const o=new FileReader;o.onload=()=>{Q.set(o.result)},o.readAsDataURL(i),de({file:i}).then(d=>{console.log(d),V.set(d)}).catch(()=>ee.set(!0))}),n.click()}]}class Ye extends O{constructor(e){super();R(this,e,Me,We,S,{})}}function Pe(r){let e;return{c(){e=p("div"),e.innerHTML=`<div class="circle circle1 svelte-1wfk3r3"></div> 
  <div class="circle circle2 svelte-1wfk3r3"></div> 
  <div class="circle circle3 svelte-1wfk3r3"></div>`,f(e,"class","circles__container svelte-1wfk3r3")},m(t,l){y(t,e,l)},p:$,i:$,o:$,d(t){t&&v(e)}}}class ue extends O{constructor(e){super();R(this,e,null,Pe,S,{})}}function Ae(r){let e,t,l,s,n,a;return n=new ue({}),{c(){e=p("div"),t=p("h1"),t.textContent="Uploading...",l=C(),s=p("div"),W(n.$$.fragment),f(t,"class","svelte-1hfgh40"),f(s,"class","loading__container svelte-1hfgh40"),f(e,"class","wrapper svelte-1hfgh40")},m(i,o){y(i,e,o),h(e,t),h(e,l),h(e,s),M(n,s,null),a=!0},i(i){a||(I(n.$$.fragment,i),a=!0)},o(i){x(n.$$.fragment,i),a=!1},d(i){i&&v(e),Y(n)}}}function $e(r){let e,t;return e=new le({props:{maxWidth:367,maxHeight:214,paddingYTop:35,paddingYBottom:65,$$slots:{default:[Ae]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},m(l,s){M(e,l,s),t=!0},p(l,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}class je extends O{constructor(e){super();R(this,e,null,$e,S,{})}}function _e(r,e,t){const l=r.slice();return l[10]=e[t],l}function pe(r){let e,t,l,s,n,a;return{c(){e=p("div"),t=p("img"),f(t,"class","partyPopper svelte-od9w7"),X(t.src,l="party-popper.png")||f(t,"src",l),f(t,"alt","partyPopper"),U(t,"left",r[2].offsetWidth/3+"px"),U(t,"top",r[2].offsetHeight/3+"px"),U(t,"height",r[2].offsetHeight/3+"px"),U(t,"width",r[2].offsetWidth/3+"px"),f(e,"class","party-poppers svelte-od9w7"),U(e,"transform","rotate("+r[6](10,-80)+"deg)"),U(e,"height",r[2].offsetHeight+"px"),U(e,"width",r[2].offsetWidth+"px")},m(i,o){y(i,e,o),h(e,t),n||(a=we(s=r[10].call(null,t)),n=!0)},p(i,o){o&4&&U(t,"left",i[2].offsetWidth/3+"px"),o&4&&U(t,"top",i[2].offsetHeight/3+"px"),o&4&&U(t,"height",i[2].offsetHeight/3+"px"),o&4&&U(t,"width",i[2].offsetWidth/3+"px"),o&4&&U(e,"height",i[2].offsetHeight+"px"),o&4&&U(e,"width",i[2].offsetWidth+"px")},d(i){i&&v(e),n=!1,a()}}}function Ee(r){let e,t,l,s,n,a,i=r[3],o=[];for(let d=0;d<i.length;d+=1)o[d]=pe(_e(r,i,d));return{c(){e=p("div");for(let d=0;d<o.length;d+=1)o[d].c();t=C(),l=p("img"),f(l,"class","emoji svelte-od9w7"),X(l.src,s="party-popper.png")||f(l,"src",s),f(l,"alt","Party popper emoji"),U(l,"width",r[0]+"px"),f(e,"class","div svelte-od9w7")},m(d,g){y(d,e,g);for(let m=0;m<o.length;m+=1)o[m].m(e,null);h(e,t),h(e,l),r[9](l),n||(a=[F(l,"click",r[4]),F(l,"load",r[8])],n=!0)},p(d,[g]){if(g&76){i=d[3];let m;for(m=0;m<i.length;m+=1){const c=_e(d,i,m);o[m]?o[m].p(c,g):(o[m]=pe(c),o[m].c(),o[m].m(e,t))}for(;m<o.length;m+=1)o[m].d(1);o.length=i.length}g&1&&U(l,"width",d[0]+"px")},i:$,o:$,d(d){d&&v(e),Ce(o,d),r[9](null),n=!1,te(a)}}}function Oe(r,e,t){let{emojiWidth:l=70}=e,{shotsDelayed:s=!0}=e,{partyMode:n=!0}=e,a,i=[];const o=()=>{t(3,i=[...i,u=>{Ue({targets:u,translateX:[{value:Math.floor(Math.random()*100+40),duration:3e3}],opacity:[{value:0,duation:3e3}],rotate:"2turn",duration:7e3,complete:()=>{u.style.display="none"}})}])},d=(u,k=0)=>{if(k!==u)if(o(),s)setTimeout(()=>d(u,k+1),20);else return d(u,k+1)},g=(u,k)=>Math.floor(Math.random()*(u-k)+k),m=()=>n&&d(25);function c(u){ne[u?"unshift":"push"](()=>{a=u,t(2,a)})}return r.$$set=u=>{"emojiWidth"in u&&t(0,l=u.emojiWidth),"shotsDelayed"in u&&t(7,s=u.shotsDelayed),"partyMode"in u&&t(1,n=u.partyMode)},[l,n,a,i,o,d,g,s,m,c]}class Re extends O{constructor(e){super();R(this,e,Oe,Ee,S,{emojiWidth:0,shotsDelayed:7,partyMode:1})}}function Se(r){let e,t,l,s,n,a,i,o,d,g,m,c,u,k,D,B,L,j,E,z,P,J,T,A,N,H,_,w,se;return g=new Re({}),{c(){e=p("div"),t=p("div"),t.innerHTML='<img src="arrow_back.svg" alt="back home" class="svelte-1qdcyxz"/>',l=C(),s=p("div"),n=p("h1"),a=p("span"),a.textContent="Uploaded",i=C(),o=ie(r[2]),d=C(),W(g.$$.fragment),m=C(),c=p("div"),u=p("img"),D=C(),B=p("div"),L=p("button"),j=p("span"),j.innerHTML=`<img class="svg userImage__link__icon__svg svelte-1qdcyxz" src="link.svg" alt="Upload icon"/> 
        <img class="svg userImage__copy svelte-1qdcyxz" alt="Copy to clipboard" src="copy.svg"/>`,E=C(),z=p("span"),P=ie(r[0]),J=C(),T=p("a"),A=p("img"),f(t,"class","back svelte-1qdcyxz"),U(a,"color","#b6b8ff"),f(n,"class","svelte-1qdcyxz"),f(s,"class","heading svelte-1qdcyxz"),f(e,"class","wrapper svelte-1qdcyxz"),f(u,"class","userImage svelte-1qdcyxz"),X(u.src,k=r[3])||f(u,"src",k),f(u,"alt",r[2]),f(c,"class","userImage__container svelte-1qdcyxz"),f(j,"class","userImage__link__icon svelte-1qdcyxz"),f(z,"class","userImage__link__text svelte-1qdcyxz"),f(L,"class","userImage__link svelte-1qdcyxz"),f(A,"class","svg userImage__open__icon__svg svelte-1qdcyxz"),X(A.src,N="open.svg")||f(A,"src",N),f(A,"alt","Upload icon"),f(T,"class","userImage__open svelte-1qdcyxz"),f(T,"href",H=r[1].fileUrl),f(T,"target","_blank"),f(B,"class","userImage__link__container svelte-1qdcyxz")},m(b,q){y(b,e,q),h(e,t),h(e,l),h(e,s),h(s,n),h(n,a),h(n,i),h(n,o),h(s,d),M(g,s,null),y(b,m,q),y(b,c,q),h(c,u),y(b,D,q),y(b,B,q),h(B,L),h(L,j),h(L,E),h(L,z),h(z,P),h(B,J),h(B,T),h(T,A),_=!0,w||(se=[F(t,"click",r[5]),F(L,"mouseenter",r[6]),F(L,"mouseleave",r[7]),F(L,"click",r[4])],w=!0)},p(b,q){(!_||q&4)&&ae(o,b[2]),(!_||q&8&&!X(u.src,k=b[3]))&&f(u,"src",k),(!_||q&4)&&f(u,"alt",b[2]),(!_||q&1)&&ae(P,b[0]),(!_||q&2&&H!==(H=b[1].fileUrl))&&f(T,"href",H)},i(b){_||(I(g.$$.fragment,b),_=!0)},o(b){x(g.$$.fragment,b),_=!1},d(b){b&&v(e),Y(g),b&&v(m),b&&v(c),b&&v(D),b&&v(B),w=!1,te(se)}}}function Ne(r){let e,t;return e=new le({props:{paddingYTop:24,paddingYBottom:24,transition:Ie,$$slots:{default:[Se]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},m(l,s){M(e,l,s),t=!0},p(l,[s]){const n={};s&527&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Ke(r,e,t){let l,s,n;K(r,V,c=>t(1,l=c)),K(r,G,c=>t(2,s=c)),K(r,Q,c=>t(3,n=c));let a=l.fileUrl;const i=c=>{navigator.clipboard.writeText(c)};return[a,l,s,n,()=>{i(l.fileUrl),t(0,a="Copied")},()=>{G.set(""),Q.set(""),V.set("")},()=>t(0,a="Copy to clipboard"),()=>t(0,a=l.fileUrl)]}class Je extends O{constructor(e){super();R(this,e,Ke,Ne,S,{})}}function Xe(r){let e,t,l;return t=new ue({}),{c(){e=p("div"),W(t.$$.fragment),f(e,"class","loading svelte-eo1ywk")},m(s,n){y(s,e,n),M(t,e,null),l=!0},p:$,i(s){l||(I(t.$$.fragment,s),l=!0)},o(s){x(t.$$.fragment,s),l=!1},d(s){s&&v(e),Y(t)}}}function Qe(r){let e,t,l,s;const n=[Ge,Ze,Ve],a=[];function i(o,d){return o[1]||!o[2]?0:o[3]?1:o[2]?2:-1}return~(t=i(r))&&(l=a[t]=n[t](r)),{c(){e=p("div"),l&&l.c(),f(e,"class","card__container svelte-eo1ywk")},m(o,d){y(o,e,d),~t&&a[t].m(e,null),s=!0},p(o,d){let g=t;t=i(o),t!==g&&(l&&(ce(),x(a[g],1,1,()=>{a[g]=null}),oe()),~t?(l=a[t],l||(l=a[t]=n[t](o),l.c()),I(l,1),l.m(e,null)):l=null)},i(o){s||(I(l),s=!0)},o(o){x(l),s=!1},d(o){o&&v(e),~t&&a[t].d()}}}function Ve(r){let e,t;return e=new je({}),{c(){W(e.$$.fragment)},m(l,s){M(e,l,s),t=!0},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Ze(r){let e,t;return e=new Je({}),{c(){W(e.$$.fragment)},m(l,s){M(e,l,s),t=!0},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Ge(r){let e,t;return e=new Ye({}),{c(){W(e.$$.fragment)},m(l,s){M(e,l,s),t=!0},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function et(r){let e,t,l,s,n,a,i,o;const d=[Qe,Xe],g=[];function m(c,u){return c[0]?0:1}return a=m(r),i=g[a]=d[a](r),{c(){e=p("link"),t=p("link"),l=p("link"),s=C(),n=p("div"),i.c(),f(e,"rel","preconnect"),f(e,"href","https://fonts.googleapis.com"),f(t,"rel","preconnect"),f(t,"href","https://fonts.gstatic.com"),f(t,"crossorigin","use-credentials"),f(l,"href","https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"),f(l,"rel","stylesheet"),f(n,"class","wrapper svelte-eo1ywk")},m(c,u){h(document.head,e),h(document.head,t),h(document.head,l),y(c,s,u),y(c,n,u),g[a].m(n,null),o=!0},p(c,[u]){let k=a;a=m(c),a===k?g[a].p(c,u):(ce(),x(g[k],1,1,()=>{g[k]=null}),oe(),i=g[a],i?i.p(c,u):(i=g[a]=d[a](c),i.c()),I(i,1),i.m(n,null))},i(c){o||(I(i),o=!0)},o(c){x(i),o=!1},d(c){v(e),v(t),v(l),c&&v(s),c&&v(n),g[a].d()}}}function tt(r,e,t){let l,s,n;K(r,ee,i=>t(1,l=i)),K(r,Q,i=>t(2,s=i)),K(r,V,i=>t(3,n=i));let a;return window.onload=()=>t(0,a=!0),[a,l,s,n]}class lt extends O{constructor(e){super();R(this,e,tt,et,S,{})}}new lt({target:document.getElementById("app")});
