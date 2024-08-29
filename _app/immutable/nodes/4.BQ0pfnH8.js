import{s as R,e as g,c as v,b as I,f as m,l as u,i as A,m as T,a as B,t as q,g as M,d as H,o as J,h,j as K}from"../chunks/scheduler.BAfOzc7k.js";import{S as U,i as W,t as S,c as X,a as z,b as Y,d as Z,m as ee,e as te,g as se}from"../chunks/index.TMB9Ny7t.js";import{e as L,B as le}from"../chunks/Button.B6IhoTbm.js";import{b as N}from"../chunks/paths.GDs0n0UW.js";function O(o,s,n){const l=o.slice();return l[2]=s[n],l}function ae(o){let s;return{c(){s=q("View More")},l(n){s=H(n,"View More")},m(n,l){A(n,s,l)},d(n){n&&m(s)}}}function Q(o){let s,n,l,e,f,a,r,t,p,x=o[2].number+"",V,C,b,E=o[2].title+"",j,G,d,k,P,D,_;return d=new le({props:{class:"bg-[#8b4513] text-white px-4 py-2 rounded hover:bg-[#724214] transition-colors",href:o[2].href,$$slots:{default:[ae]},$$scope:{ctx:o}}}),{c(){s=g("div"),n=g("div"),l=g("img"),a=B(),r=g("div"),t=g("h2"),p=q("Issue "),V=q(x),C=B(),b=g("h1"),j=q(E),G=B(),Y(d.$$.fragment),P=B(),this.h()},l(i){s=v(i,"DIV",{class:!0});var c=I(s);n=v(c,"DIV",{class:!0});var $=I(n);l=v($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(m),a=M(c),r=v(c,"DIV",{class:!0});var w=I(r);t=v(w,"H2",{class:!0});var y=I(t);p=H(y,"Issue "),V=H(y,x),y.forEach(m),C=M(w),b=v(w,"H1",{class:!0});var F=I(b);j=H(F,E),F.forEach(m),G=M(w),Z(d.$$.fragment,w),w.forEach(m),P=M(c),c.forEach(m),this.h()},h(){J(l.src,e=o[2].src)||u(l,"src",e),u(l,"alt",f=o[2].title),u(l,"class","w-full object-cover aspect-video"),u(n,"class","w-[45%]"),u(t,"class","text-lg font-semibold mb-2 font-sans text-[#8b4513]"),u(b,"class","text-4xl font-bold mb-4 font-serif"),u(r,"class",k="w-[45%] "+(o[2].align==="left"?"text-right":"text-left")),u(s,"class",D="mb-24 flex "+(o[2].align==="left"?"flex-row-reverse":"")+" items-center justify-between")},m(i,c){A(i,s,c),h(s,n),h(n,l),h(s,a),h(s,r),h(r,t),h(t,p),h(t,V),h(r,C),h(r,b),h(b,j),h(r,G),ee(d,r,null),h(s,P),_=!0},p(i,c){(!_||c&1&&!J(l.src,e=i[2].src))&&u(l,"src",e),(!_||c&1&&f!==(f=i[2].title))&&u(l,"alt",f),(!_||c&1)&&x!==(x=i[2].number+"")&&K(V,x),(!_||c&1)&&E!==(E=i[2].title+"")&&K(j,E);const $={};c&1&&($.href=i[2].href),c&32&&($.$$scope={dirty:c,ctx:i}),d.$set($),(!_||c&1&&k!==(k="w-[45%] "+(i[2].align==="left"?"text-right":"text-left")))&&u(r,"class",k),(!_||c&1&&D!==(D="mb-24 flex "+(i[2].align==="left"?"flex-row-reverse":"")+" items-center justify-between"))&&u(s,"class",D)},i(i){_||(S(d.$$.fragment,i),_=!0)},o(i){z(d.$$.fragment,i),_=!1},d(i){i&&m(s),te(d)}}}function re(o){let s,n,l=L(o[0]),e=[];for(let a=0;a<l.length;a+=1)e[a]=Q(O(o,l,a));const f=a=>z(e[a],1,1,()=>{e[a]=null});return{c(){s=g("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){s=v(a,"DIV",{class:!0});var r=I(s);for(let t=0;t<e.length;t+=1)e[t].l(r);r.forEach(m),this.h()},h(){u(s,"class","bg-[#d2b48c] min-h-screen p-8")},m(a,r){A(a,s,r);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(s,null);n=!0},p(a,[r]){if(r&1){l=L(a[0]);let t;for(t=0;t<l.length;t+=1){const p=O(a,l,t);e[t]?(e[t].p(p,r),S(e[t],1)):(e[t]=Q(p),e[t].c(),S(e[t],1),e[t].m(s,null))}for(se(),t=l.length;t<e.length;t+=1)f(t);X()}},i(a){if(!n){for(let r=0;r<l.length;r+=1)S(e[r]);n=!0}},o(a){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)z(e[r]);n=!1},d(a){a&&m(s),T(e,a)}}}function ne(o,s,n){let{data:l}=s,{Issues:e}=l;return o.$$set=f=>{"data"in f&&n(1,l=f.data)},o.$$.update=()=>{o.$$.dirty&1&&n(0,e=e.map(f=>({...f,src:`${N}${f.src}`,href:`${N}${f.href}`})))},[e,l]}class ue extends U{constructor(s){super(),W(this,s,ne,re,R,{data:1})}}export{ue as component};