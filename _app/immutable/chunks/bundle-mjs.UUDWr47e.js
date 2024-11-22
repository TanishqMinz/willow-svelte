function Ne(e,r){const t={},n={},a={$$scope:1};let o=e.length;for(;o--;){const s=e[o],i=r[o];if(i){for(const c in s)c in i||(n[c]=1);for(const c in i)a[c]||(t[c]=i[c],a[c]=1);e[o]=i}else for(const c in s)a[c]=1}for(const s in n)s in t||(t[s]=void 0);return t}function Le(e){return typeof e=="object"&&e!==null?e:{}}const O="-";function ne(e){const r=ie(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=e;function a(s){const i=s.split(O);return i[0]===""&&i.length!==1&&i.shift(),D(i,r)||se(s)}function o(s,i){const c=t[s]||[];return i&&n[s]?[...c,...n[s]]:c}return{getClassGroupId:a,getConflictingClassGroupIds:o}}function D(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],n=r.nextPart.get(t),a=n?D(e.slice(1),n):void 0;if(a)return a;if(r.validators.length===0)return;const o=e.join(O);return(s=r.validators.find(({validator:i})=>i(o)))==null?void 0:s.classGroupId}const Q=/^\[(.+)\]$/;function se(e){if(Q.test(e)){const r=Q.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ie(e){const{theme:r,prefix:t}=e,n={nextPart:new Map,validators:[]};return ae(Object.entries(e.classGroups),t).forEach(([o,s])=>{V(s,n,o,r)}),n}function V(e,r,t,n){e.forEach(a=>{if(typeof a=="string"){const o=a===""?r:Y(r,a);o.classGroupId=t;return}if(typeof a=="function"){if(le(a)){V(a(n),r,t,n);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([o,s])=>{V(s,Y(r,o),t,n)})})}function Y(e,r){let t=e;return r.split(O).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t}function le(e){return e.isThemeGetter}function ae(e,r){return r?e.map(([t,n])=>{const a=n.map(o=>typeof o=="string"?r+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,i])=>[r+s,i])):o);return[t,a]}):e}function ce(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,n=new Map;function a(o,s){t.set(o,s),r++,r>e&&(r=0,n=t,t=new Map)}return{get(o){let s=t.get(o);if(s!==void 0)return s;if((s=n.get(o))!==void 0)return a(o,s),s},set(o,s){t.has(o)?t.set(o,s):a(o,s)}}}const ee="!";function de(e){const{separator:r,experimentalParseClassName:t}=e,n=r.length===1,a=r[0],o=r.length;function s(i){const c=[];let b=0,p=0,g;for(let f=0;f<i.length;f++){let m=i[f];if(b===0){if(m===a&&(n||i.slice(f,f+o)===r)){c.push(i.slice(p,f)),p=f+o;continue}if(m==="/"){g=f;continue}}m==="["?b++:m==="]"&&b--}const h=c.length===0?i:i.substring(p),x=h.startsWith(ee),S=x?h.substring(1):h,y=g&&g>p?g-p:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:S,maybePostfixModifierPosition:y}}return t?function(c){return t({className:c,parseClassName:s})}:s}function ue(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(n=>{n[0]==="["?(r.push(...t.sort(),n),t=[]):t.push(n)}),r.push(...t.sort()),r}function pe(e){return{cache:ce(e.cacheSize),parseClassName:de(e),...ne(e)}}const fe=/\s+/;function be(e,r){const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:a}=r,o=new Set;return e.trim().split(fe).map(s=>{const{modifiers:i,hasImportantModifier:c,baseClassName:b,maybePostfixModifierPosition:p}=t(s);let g=!!p,h=n(g?b.substring(0,p):b);if(!h){if(!g)return{isTailwindClass:!1,originalClassName:s};if(h=n(b),!h)return{isTailwindClass:!1,originalClassName:s};g=!1}const x=ue(i).join(":");return{isTailwindClass:!0,modifierId:c?x+ee:x,classGroupId:h,originalClassName:s,hasPostfixModifier:g}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:i,classGroupId:c,hasPostfixModifier:b}=s,p=i+c;return o.has(p)?!1:(o.add(p),a(c,b).forEach(g=>o.add(i+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function ge(){let e=0,r,t,n="";for(;e<arguments.length;)(r=arguments[e++])&&(t=re(r))&&(n&&(n+=" "),n+=t);return n}function re(e){if(typeof e=="string")return e;let r,t="";for(let n=0;n<e.length;n++)e[n]&&(r=re(e[n]))&&(t&&(t+=" "),t+=r);return t}function me(e,...r){let t,n,a,o=s;function s(c){const b=r.reduce((p,g)=>g(p),e());return t=pe(b),n=t.cache.get,a=t.cache.set,o=i,i(c)}function i(c){const b=n(c);if(b)return b;const p=be(c,t);return a(c,p),p}return function(){return o(ge.apply(null,arguments))}}function d(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const te=/^\[(?:([a-z-]+):)?(.+)\]$/i,he=/^\d+\/\d+$/,ye=new Set(["px","full","screen"]),xe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,we=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ve=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ke=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ce=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return z(e)||ye.has(e)||he.test(e)}function k(e){return A(e,"length",Pe)}function z(e){return!!e&&!Number.isNaN(Number(e))}function E(e){return A(e,"number",z)}function R(e){return!!e&&Number.isInteger(Number(e))}function ze(e){return e.endsWith("%")&&z(e.slice(0,-1))}function l(e){return te.test(e)}function C(e){return xe.test(e)}const Se=new Set(["length","size","percentage"]);function Ae(e){return A(e,Se,oe)}function Me(e){return A(e,"position",oe)}const Ge=new Set(["image","url"]);function Re(e){return A(e,Ge,Te)}function Ie(e){return A(e,"",je)}function I(){return!0}function A(e,r,t){const n=te.exec(e);return n?n[1]?typeof r=="string"?n[1]===r:r.has(n[1]):t(n[2]):!1}function Pe(e){return we.test(e)&&!ve.test(e)}function oe(){return!1}function je(e){return ke.test(e)}function Te(e){return Ce.test(e)}function Ee(){const e=d("colors"),r=d("spacing"),t=d("blur"),n=d("brightness"),a=d("borderColor"),o=d("borderRadius"),s=d("borderSpacing"),i=d("borderWidth"),c=d("contrast"),b=d("grayscale"),p=d("hueRotate"),g=d("invert"),h=d("gap"),x=d("gradientColorStops"),S=d("gradientColorStopPositions"),y=d("inset"),f=d("margin"),m=d("opacity"),w=d("padding"),B=d("saturate"),N=d("scale"),U=d("sepia"),F=d("skew"),q=d("space"),J=d("translate"),L=()=>["auto","contain","none"],_=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",l,r],u=()=>[l,r],X=()=>["",v,k],P=()=>["auto",z,l],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],j=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",l],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[z,E],T=()=>[z,l];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[v,k],blur:["none","",C,l],brightness:G(),borderColor:[e],borderRadius:["none","","full",C,l],borderSpacing:u(),borderWidth:X(),contrast:G(),grayscale:M(),hueRotate:T(),invert:M(),gap:u(),gradientColorStops:[e],gradientColorStopPositions:[ze,k],inset:W(),margin:W(),opacity:G(),padding:u(),saturate:G(),scale:G(),sepia:M(),skew:T(),space:u(),translate:u()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),l]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",R,l]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",R,l]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",R,l]},l]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[R,l]},l]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[C]},C]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",C,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",z,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...j(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,k]}],"underline-offset":[{"underline-offset":["auto",v,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:u()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),Me]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ae]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Re]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...j(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:j()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...j()]}],"outline-offset":[{"outline-offset":[v,l]}],"outline-w":[{outline:[v,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[v,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,Ie]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",C,l]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[B]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[B]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[R,l]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":u()}],"scroll-mx":[{"scroll-mx":u()}],"scroll-my":[{"scroll-my":u()}],"scroll-ms":[{"scroll-ms":u()}],"scroll-me":[{"scroll-me":u()}],"scroll-mt":[{"scroll-mt":u()}],"scroll-mr":[{"scroll-mr":u()}],"scroll-mb":[{"scroll-mb":u()}],"scroll-ml":[{"scroll-ml":u()}],"scroll-p":[{"scroll-p":u()}],"scroll-px":[{"scroll-px":u()}],"scroll-py":[{"scroll-py":u()}],"scroll-ps":[{"scroll-ps":u()}],"scroll-pe":[{"scroll-pe":u()}],"scroll-pt":[{"scroll-pt":u()}],"scroll-pr":[{"scroll-pr":u()}],"scroll-pb":[{"scroll-pb":u()}],"scroll-pl":[{"scroll-pl":u()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,k,E]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const _e=me(Ee);export{Le as a,Ne as g,_e as t};