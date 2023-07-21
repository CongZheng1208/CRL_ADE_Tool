import{r as E,o as pe,v as _e,x as Ae,h0 as yi,p as _,b7 as wi,h1 as xi,h2 as Ci,U as we,h3 as ki,S as ze,F as Ge,I as ce,ab as ct,a9 as ut,aa as $o,bq as ve,d as ne,E as fe,gz as Si,h4 as zi,a2 as oo,h5 as En,h6 as $i,u as ht,t as Q,z as pt,h as c,aj as Ln,L as Oi,C as Oo,h7 as Pi,gV as Ri,gO as ft,A as to,av as jn,bs as Po,aK as Mi,h8 as Dn,h9 as Fi,ha as Kn,hb as Ti,hc as Wn,hd as Hn,he as no,hf as Un,hg as Gn,hh as Ro,hi as Bi,hj as Vn,a as Ii,hk as Yn,hl as _i,hm as Ai,hn as Ni,ho as Ei,hp as Li,hq as Xn,hr as ji,c as W,f as U,e as oe,g as Ke,s as se,hs as Di,ht as Ki,a0 as te,y as Ne,N as qn,ao as $e,T as Mo,n as Y,aq as me,m as vt,hu as Wi,au as Ve,bp as Hi,ae as Ui,B as Gi,at as gt,hv as Vi,w as bt,hw as Yi,a3 as Fo,ac as Zn,a1 as mt,gN as Jn,ad as Xi,an as yt,bx as Qn,hx as er,ax as qi,hy as Zi,bC as or,a4 as ue,k as Ji,hz as Qi,gL as re,a7 as ea,am as oa,hA as tr,hB as ta,hC as na,_ as ra,hD as la,hE as ia,hF as aa,hG as sa,Z as nr,hH as da,__tla as ca}from"./index-2c8f1a32.js";import{u as To,__tla as ua}from"./use-merged-state-05139191.js";import{c as ha,t as wt,i as rr,g as pa,b as fa,u as lr,N as va,__tla as ga}from"./Input-d9366742.js";import{b as ir,__tla as ba}from"./Grid-94c75c25.js";import{f as Bo,__tla as ma}from"./use-houdini-1f4096eb.js";let xt,Ct,ro,ar,Oe,lo,io,ao,Io,sr,dr,Ee,_o,kt,St,zt,$t,so,Ot,Pt,Rt,Mt,co,uo,xe,Ye,ya=Promise.all([(()=>{try{return ca}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return ma}catch{}})()]).then(async()=>{Ee=function(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1};function cr(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}Mt=function(e){return o=>{o?e.value=o.$el:e.value=null}},co=function(e){const o=e.filter(t=>t!==void 0);if(o.length!==0)return o.length===1?o[0]:t=>{e.forEach(n=>{n&&n(t)})}};let Ao;function ur(){return Ao===void 0&&(Ao=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Ao}function hr(e,o,t){if(!o)return e;const n=E(e.value);let r=null;return pe(e,l=>{r!==null&&window.clearTimeout(r),l===!0?t&&!t.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}let We,Xe;(()=>{var e,o;We=yi?(o=(e=document)===null||e===void 0?void 0:e.fonts)===null||o===void 0?void 0:o.ready:void 0,Xe=!1,We!==void 0?We.then(()=>{Xe=!0}):Xe=!0})(),Ot=function(e){if(Xe)return;let o=!1;_e(()=>{Xe||(We==null||We.then(()=>{o||e()}))}),Ae(()=>{o=!0})},Io=function(e,o){return _(()=>{for(const t of o)if(e[t]!==void 0)return e[t];return e[o[o.length-1]]})};function pr(e={},o){const t=wi({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,l=s=>{switch(s.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}n!==void 0&&Object.keys(n).forEach(d=>{if(d!==s.key)return;const u=n[d];if(typeof u=="function")u(s);else{const{stop:f=!1,prevent:h=!1}=u;f&&s.stopPropagation(),h&&s.preventDefault(),u.handler(s)}})},i=s=>{switch(s.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(d=>{if(d!==s.key)return;const u=r[d];if(typeof u=="function")u(s);else{const{stop:f=!1,prevent:h=!1}=u;f&&s.stopPropagation(),h&&s.preventDefault(),u.handler(s)}})},a=()=>{(o===void 0||o.value)&&(ze("keydown",document,l),ze("keyup",document,i)),o!==void 0&&pe(o,s=>{s?(ze("keydown",document,l),ze("keyup",document,i)):(we("keydown",document,l),we("keyup",document,i))})};return xi()?(Ci(a),Ae(()=>{(o===void 0||o.value)&&(we("keydown",document,l),we("keyup",document,i))})):a(),ki(t)}const No=Ge("n-internal-select-menu"),Ft=Ge("n-internal-select-menu-body"),Tt="__disabled__";xe=function(e){const o=ce(ct,null),t=ce(ut,null),n=ce($o,null),r=ce(Ft,null),l=E();if(typeof document<"u"){l.value=document.fullscreenElement;const i=()=>{l.value=document.fullscreenElement};_e(()=>{ze("fullscreenchange",document,i)}),Ae(()=>{we("fullscreenchange",document,i)})}return ve(()=>{var i;const{to:a}=e;return a!==void 0?a===!1?Tt:a===!0?l.value||"body":a:o!=null&&o.value?(i=o.value.$el)!==null&&i!==void 0?i:o.value:t!=null&&t.value?t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:a??(l.value||"body")})},xe.tdkey=Tt,xe.propTo={type:[String,Object,Boolean],default:void 0};let Fe=null;function Bt(){if(Fe===null&&(Fe=document.getElementById("v-binder-view-measurer"),Fe===null)){Fe=document.createElement("div"),Fe.id="v-binder-view-measurer";const{style:e}=Fe;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Fe)}return Fe.getBoundingClientRect()}function fr(e,o){const t=Bt();return{top:o,left:e,height:0,width:0,right:t.width-e,bottom:t.height-o}}function Eo(e){const o=e.getBoundingClientRect(),t=Bt();return{left:o.left-t.left,top:o.top-t.top,bottom:t.height+t.top-o.bottom,right:t.width+t.left-o.right,width:o.width,height:o.height}}function vr(e){return e.nodeType===9?null:e.parentNode}function It(e){if(e===null)return null;const o=vr(e);if(o===null)return null;if(o.nodeType===9)return document;if(o.nodeType===1){const{overflow:t,overflowX:n,overflowY:r}=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(t+r+n))return o}return It(o)}let _t,Le,At,Nt;_t=ne({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var o;fe("VBinder",(o=Si())===null||o===void 0?void 0:o.proxy);const t=ce("VBinder",null),n=E(null),r=g=>{n.value=g,t&&e.syncTargetWithParent&&t.setTargetRef(g)};let l=[];const i=()=>{let g=n.value;for(;g=It(g),g!==null;)l.push(g);for(const S of l)ze("scroll",S,f,!0)},a=()=>{for(const g of l)we("scroll",g,f,!0);l=[]},s=new Set,d=g=>{s.size===0&&i(),s.has(g)||s.add(g)},u=g=>{s.has(g)&&s.delete(g),s.size===0&&a()},f=()=>{ir(h)},h=()=>{s.forEach(g=>g())},b=new Set,p=g=>{b.size===0&&ze("resize",window,k),b.has(g)||b.add(g)},m=g=>{b.has(g)&&b.delete(g),b.size===0&&we("resize",window,k)},k=()=>{b.forEach(g=>g())};return Ae(()=>{we("resize",window,k),a()}),{targetRef:n,setTargetRef:r,addScrollListener:d,removeScrollListener:u,addResizeListener:p,removeResizeListener:m}},render(){return zi("binder",this.$slots)}}),ro=_t,lo=ne({name:"Target",setup(){const{setTargetRef:e,syncTarget:o}=ce("VBinder");return{syncTarget:o,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:o}=this;return e?oo(En("follower",this.$slots),[[o]]):En("follower",this.$slots)}}),Le="@@mmoContext",At={mounted(e,{value:o}){e[Le]={handler:void 0},typeof o=="function"&&(e[Le].handler=o,ze("mousemoveoutside",e,o))},updated(e,{value:o}){const t=e[Le];typeof o=="function"?t.handler?t.handler!==o&&(we("mousemoveoutside",e,t.handler),t.handler=o,ze("mousemoveoutside",e,o)):(e[Le].handler=o,ze("mousemoveoutside",e,o)):t.handler&&(we("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:o}=e[Le];o&&we("mousemoveoutside",e,o),e[Le].handler=void 0}},Nt=At,{c:Oe}=$i(),io="vueuc-style";function Et(e){return e&-e}class gr{constructor(o,t){this.l=o,this.min=t;const n=new Array(o+1);for(let r=0;r<o+1;++r)n[r]=0;this.ft=n}add(o,t){if(t===0)return;const{l:n,ft:r}=this;for(o+=1;o<=n;)r[o]+=t,o+=Et(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:t,min:n,l:r}=this;if(o>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let l=o*n;for(;o>0;)l+=t[o],o-=Et(o);return l}getBound(o){let t=0,n=this.l;for(;n>t;){const r=Math.floor((t+n)/2),l=this.sum(r);if(l>o){n=r;continue}else if(l<o){if(t===r)return this.sum(t+1)<=o?t+1:r;t=r}else return r}return t}}const ho={top:"bottom",bottom:"top",left:"right",right:"left"},Lt={start:"end",center:"center",end:"start"},Lo={top:"height",bottom:"height",left:"width",right:"width"},br={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},mr={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},yr={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},jt={top:!0,bottom:!1,left:!0,right:!1},Dt={top:"end",bottom:"start",left:"end",right:"start"};function wr(e,o,t,n,r,l){if(!r||l)return{placement:e,top:0,left:0};const[i,a]=e.split("-");let s=a??"center",d={top:0,left:0};const u=(b,p,m)=>{let k=0,g=0;const S=t[b]-o[p]-o[b];return S>0&&n&&(m?g=jt[p]?S:-S:k=jt[p]?S:-S),{left:k,top:g}},f=i==="left"||i==="right";if(s!=="center"){const b=yr[e],p=ho[b],m=Lo[b];if(t[m]>o[m]){if(o[b]+o[m]<t[m]){const k=(t[m]-o[m])/2;o[b]<k||o[p]<k?o[b]<o[p]?(s=Lt[a],d=u(m,p,f)):d=u(m,b,f):s="center"}}else t[m]<o[m]&&o[p]<0&&o[b]>o[p]&&(s=Lt[a])}else{const b=i==="bottom"||i==="top"?"left":"top",p=ho[b],m=Lo[b],k=(t[m]-o[m])/2;(o[b]<k||o[p]<k)&&(o[b]>o[p]?(s=Dt[b],d=u(m,b,f)):(s=Dt[p],d=u(m,p,f)))}let h=i;return o[i]<t[Lo[i]]&&o[i]<o[ho[i]]&&(h=ho[i]),{placement:s!=="center"?`${h}-${s}`:h,left:d.left,top:d.top}}function xr(e,o){return o?mr[e]:br[e]}function Cr(e,o,t,n,r,l){if(l)switch(e){case"bottom-start":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-o.top+t.height/2)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-o.top+t.height/2)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-o.top+t.height/2+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-o.top+t.height/2+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}let Kt;Kt=Oe([Oe(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Oe(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Oe("> *",{pointerEvents:"all"})])]),ao=ne({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const o=ce("VBinder"),t=ve(()=>e.enabled!==void 0?e.enabled:e.show),n=E(null),r=E(null),l=()=>{const{syncTrigger:h}=e;h.includes("scroll")&&o.addScrollListener(s),h.includes("resize")&&o.addResizeListener(s)},i=()=>{o.removeScrollListener(s),o.removeResizeListener(s)};_e(()=>{t.value&&(s(),l())});const a=ht();Kt.mount({id:"vueuc/binder",head:!0,anchorMetaName:io,ssr:a}),Ae(()=>{i()}),Ot(()=>{t.value&&s()});const s=()=>{if(!t.value)return;const h=n.value;if(h===null)return;const b=o.targetRef,{x:p,y:m,overlap:k}=e,g=p!==void 0&&m!==void 0?fr(p,m):Eo(b);h.style.setProperty("--v-target-width",`${Math.round(g.width)}px`),h.style.setProperty("--v-target-height",`${Math.round(g.height)}px`);const{width:S,minWidth:H,placement:z,internalShift:O,flip:L}=e;h.setAttribute("v-placement",z),k?h.setAttribute("v-overlap",""):h.removeAttribute("v-overlap");const{style:R}=h;S==="target"?R.width=`${g.width}px`:S!==void 0?R.width=S:R.width="",H==="target"?R.minWidth=`${g.width}px`:H!==void 0?R.minWidth=H:R.minWidth="";const K=Eo(h),B=Eo(r.value),{left:j,top:C,placement:w}=wr(z,g,K,O,L,k),I=xr(w,k),{left:y,top:M,transform:D}=Cr(w,B,g,C,j,k);h.setAttribute("v-placement",w),h.style.setProperty("--v-offset-left",`${Math.round(j)}px`),h.style.setProperty("--v-offset-top",`${Math.round(C)}px`),h.style.transform=`translateX(${y}) translateY(${M}) ${D}`,h.style.setProperty("--v-transform-origin",I),h.style.transformOrigin=I};pe(t,h=>{h?(l(),d()):i()});const d=()=>{Oo().then(s).catch(h=>console.error(h))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(h=>{pe(Q(e,h),s)}),["teleportDisabled"].forEach(h=>{pe(Q(e,h),d)}),pe(Q(e,"syncTrigger"),h=>{h.includes("resize")?o.addResizeListener(s):o.removeResizeListener(s),h.includes("scroll")?o.addScrollListener(s):o.removeScrollListener(s)});const u=pt(),f=ve(()=>{const{to:h}=e;if(h!==void 0)return h;u.value});return{VBinder:o,mergedEnabled:t,offsetContainerRef:r,followerRef:n,mergedTo:f,syncPosition:s}},render(){return c(Oi,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,o;const t=c("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[c("div",{class:"v-binder-follower-content",ref:"followerRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e))]);return this.zindexable?oo(t,[[Ln,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});let po;function kr(){return po===void 0&&("matchMedia"in window?po=window.matchMedia("(pointer:coarse)").matches:po=!1),po}let jo;function Wt(){return jo===void 0&&(jo="chrome"in window?window.devicePixelRatio:1),jo}let Ht,Te,Ut,Do;Ht=Oe(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Oe("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Oe("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),zt=ne({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=ht();Ht.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:io,ssr:o}),_e(()=>{const{defaultScrollIndex:C,defaultScrollKey:w}=e;C!=null?p({index:C}):w!=null&&p({key:w})});let t=!1,n=!1;Pi(()=>{if(t=!1,!n){n=!0;return}p({top:f.value,left:u})}),Ri(()=>{t=!0,n||(n=!0)});const r=_(()=>{const C=new Map,{keyField:w}=e;return e.items.forEach((I,y)=>{C.set(I[w],y)}),C}),l=E(null),i=E(void 0),a=new Map,s=_(()=>{const{items:C,itemSize:w,keyField:I}=e,y=new gr(C.length,w);return C.forEach((M,D)=>{const F=M[I],A=a.get(F);A!==void 0&&y.add(D,A)}),y}),d=E(0);let u=0;const f=E(0),h=ve(()=>Math.max(s.value.getBound(f.value-ft(e.paddingTop))-1,0)),b=_(()=>{const{value:C}=i;if(C===void 0)return[];const{items:w,itemSize:I}=e,y=h.value,M=Math.min(y+Math.ceil(C/I+1),w.length-1),D=[];for(let F=y;F<=M;++F)D.push(w[F]);return D}),p=(C,w)=>{if(typeof C=="number"){S(C,w,"auto");return}const{left:I,top:y,index:M,key:D,position:F,behavior:A,debounce:x=!0}=C;if(I!==void 0||y!==void 0)S(I,y,A);else if(M!==void 0)g(M,A,x);else if(D!==void 0){const $=r.value.get(D);$!==void 0&&g($,A,x)}else F==="bottom"?S(0,Number.MAX_SAFE_INTEGER,A):F==="top"&&S(0,0,A)};let m,k=null;function g(C,w,I){const{value:y}=s,M=y.sum(C)+ft(e.paddingTop);if(!I)l.value.scrollTo({left:0,top:M,behavior:w});else{m=C,k!==null&&window.clearTimeout(k),k=window.setTimeout(()=>{m=void 0,k=null},16);const{scrollTop:D,offsetHeight:F}=l.value;if(M>D){const A=y.get(C);M+A<=D+F||l.value.scrollTo({left:0,top:M+A-F,behavior:w})}else l.value.scrollTo({left:0,top:M,behavior:w})}}function S(C,w,I){l.value.scrollTo({left:C,top:w,behavior:I})}function H(C,w){var I,y,M;if(t||e.ignoreItemResize||j(w.target))return;const{value:D}=s,F=r.value.get(C),A=D.get(F),x=(M=(y=(I=w.borderBoxSize)===null||I===void 0?void 0:I[0])===null||y===void 0?void 0:y.blockSize)!==null&&M!==void 0?M:w.contentRect.height;if(x===A)return;x-e.itemSize===0?a.delete(C):a.set(C,x-e.itemSize);const $=x-A;if($===0)return;D.add(F,$);const V=l.value;if(V!=null){if(m===void 0){const le=D.sum(F);V.scrollTop>le&&V.scrollBy(0,$)}else if(F<m)V.scrollBy(0,$);else if(F===m){const le=D.sum(F);x+le>V.scrollTop+V.offsetHeight&&V.scrollBy(0,$)}B()}d.value++}const z=!kr();let O=!1;function L(C){var w;(w=e.onScroll)===null||w===void 0||w.call(e,C),(!z||!O)&&B()}function R(C){var w;if((w=e.onWheel)===null||w===void 0||w.call(e,C),z){const I=l.value;if(I!=null){if(C.deltaX===0&&(I.scrollTop===0&&C.deltaY<=0||I.scrollTop+I.offsetHeight>=I.scrollHeight&&C.deltaY>=0))return;C.preventDefault(),I.scrollTop+=C.deltaY/Wt(),I.scrollLeft+=C.deltaX/Wt(),B(),O=!0,ir(()=>{O=!1})}}}function K(C){if(t||j(C.target)||C.contentRect.height===i.value)return;i.value=C.contentRect.height;const{onResize:w}=e;w!==void 0&&w(C)}function B(){const{value:C}=l;C!=null&&(f.value=C.scrollTop,u=C.scrollLeft)}function j(C){let w=C;for(;w!==null;){if(w.style.display==="none")return!0;w=w.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:_(()=>{const{itemResizable:C}=e,w=Po(s.value.sum());return d.value,[e.itemsStyle,{boxSizing:"content-box",height:C?"":w,minHeight:C?w:"",paddingTop:Po(e.paddingTop),paddingBottom:Po(e.paddingBottom)}]}),visibleItemsStyle:_(()=>(d.value,{transform:`translateY(${Po(s.value.sum(h.value))})`})),viewportItems:b,listElRef:l,itemsElRef:E(null),scrollTo:p,handleListResize:K,handleListScroll:L,handleListWheel:R,handleItemResize:H}},render(){const{itemResizable:e,keyField:o,keyToIndex:t,visibleItemsTag:n}=this;return c(jn,{onResize:this.handleListResize},{default:()=>{var r,l;return c("div",to(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?c("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[c(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(i=>{const a=i[o],s=t.get(a),d=this.$slots.default({item:i,index:s})[0];return e?c(jn,{key:a,onResize:u=>this.handleItemResize(a,u)},{default:()=>d}):(d.key=a,d)})})]):(l=(r=this.$slots).empty)===null||l===void 0?void 0:l.call(r)])}})}}),Te="v-hidden",Ut=Oe("[v-hidden]",{display:"none!important"}),Do=ne({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=E(null),n=E(null);function r(){const{value:i}=t,{getCounter:a,getTail:s}=e;let d;if(a!==void 0?d=a():d=n.value,!i||!d)return;d.hasAttribute(Te)&&d.removeAttribute(Te);const{children:u}=i,f=i.offsetWidth,h=[],b=o.tail?s==null?void 0:s():null;let p=b?b.offsetWidth:0,m=!1;const k=i.children.length-(o.tail?1:0);for(let S=0;S<k-1;++S){if(S<0)continue;const H=u[S];if(m){H.hasAttribute(Te)||H.setAttribute(Te,"");continue}else H.hasAttribute(Te)&&H.removeAttribute(Te);const z=H.offsetWidth;if(p+=z,h[S]=z,p>f){const{updateCounter:O}=e;for(let L=S;L>=0;--L){const R=k-1-L;O!==void 0?O(R):d.textContent=`${R}`;const K=d.offsetWidth;if(p-=h[L],p+K<=f||L===0){m=!0,S=L-1,b&&(S===-1?(b.style.maxWidth=`${f-K}px`,b.style.boxSizing="border-box"):b.style.maxWidth="");break}}}}const{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),d.setAttribute(Te,""))}const l=ht();return Ut.mount({id:"vueuc/overflow",head:!0,anchorMetaName:io,ssr:l}),_e(r),{selfRef:t,counterRef:n,sync:r}},render(){const{$slots:e}=this;return Oo(this.sync),c("div",{class:"v-overflow",ref:"selfRef"},[Mi(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Gt(e,o){o&&(_e(()=>{const{value:t}=e;t&&Dn.registerHandler(t,o)}),Ae(()=>{const{value:t}=e;t&&Dn.unregisterHandler(t)}))}var Sr="__lodash_hash_undefined__";function zr(e){return this.__data__.set(e,Sr),this}function $r(e){return this.__data__.has(e)}function fo(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Fi;++o<t;)this.add(e[o])}fo.prototype.add=fo.prototype.push=zr,fo.prototype.has=$r;function Or(e,o){for(var t=-1,n=e==null?0:e.length;++t<n;)if(o(e[t],t,e))return!0;return!1}function Pr(e,o){return e.has(o)}var Rr=1,Mr=2;function Vt(e,o,t,n,r,l){var i=t&Rr,a=e.length,s=o.length;if(a!=s&&!(i&&s>a))return!1;var d=l.get(e),u=l.get(o);if(d&&u)return d==o&&u==e;var f=-1,h=!0,b=t&Mr?new fo:void 0;for(l.set(e,o),l.set(o,e);++f<a;){var p=e[f],m=o[f];if(n)var k=i?n(m,p,f,o,e,l):n(p,m,f,e,o,l);if(k!==void 0){if(k)continue;h=!1;break}if(b){if(!Or(o,function(g,S){if(!Pr(b,S)&&(p===g||r(p,g,t,n,l)))return b.push(S)})){h=!1;break}}else if(!(p===m||r(p,m,t,n,l))){h=!1;break}}return l.delete(e),l.delete(o),h}function Fr(e){var o=-1,t=Array(e.size);return e.forEach(function(n,r){t[++o]=[r,n]}),t}function Tr(e){var o=-1,t=Array(e.size);return e.forEach(function(n){t[++o]=n}),t}var Br=1,Ir=2,_r="[object Boolean]",Ar="[object Date]",Nr="[object Error]",Er="[object Map]",Lr="[object Number]",jr="[object RegExp]",Dr="[object Set]",Kr="[object String]",Wr="[object Symbol]",Hr="[object ArrayBuffer]",Ur="[object DataView]",Yt=Kn?Kn.prototype:void 0,Ko=Yt?Yt.valueOf:void 0;function Gr(e,o,t,n,r,l,i){switch(t){case Ur:if(e.byteLength!=o.byteLength||e.byteOffset!=o.byteOffset)return!1;e=e.buffer,o=o.buffer;case Hr:return!(e.byteLength!=o.byteLength||!l(new Wn(e),new Wn(o)));case _r:case Ar:case Lr:return Ti(+e,+o);case Nr:return e.name==o.name&&e.message==o.message;case jr:case Kr:return e==o+"";case Er:var a=Fr;case Dr:var s=n&Br;if(a||(a=Tr),e.size!=o.size&&!s)return!1;var d=i.get(e);if(d)return d==o;n|=Ir,i.set(e,o);var u=Vt(a(e),a(o),n,r,l,i);return i.delete(e),u;case Wr:if(Ko)return Ko.call(e)==Ko.call(o)}return!1}var Vr=1,Yr=Object.prototype,Xr=Yr.hasOwnProperty;function qr(e,o,t,n,r,l){var i=t&Vr,a=Hn(e),s=a.length,d=Hn(o),u=d.length;if(s!=u&&!i)return!1;for(var f=s;f--;){var h=a[f];if(!(i?h in o:Xr.call(o,h)))return!1}var b=l.get(e),p=l.get(o);if(b&&p)return b==o&&p==e;var m=!0;l.set(e,o),l.set(o,e);for(var k=i;++f<s;){h=a[f];var g=e[h],S=o[h];if(n)var H=i?n(S,g,h,o,e,l):n(g,S,h,e,o,l);if(!(H===void 0?g===S||r(g,S,t,n,l):H)){m=!1;break}k||(k=h=="constructor")}if(m&&!k){var z=e.constructor,O=o.constructor;z!=O&&"constructor"in e&&"constructor"in o&&!(typeof z=="function"&&z instanceof z&&typeof O=="function"&&O instanceof O)&&(m=!1)}return l.delete(e),l.delete(o),m}var Zr=1,Xt="[object Arguments]",qt="[object Array]",vo="[object Object]",Jr=Object.prototype,Zt=Jr.hasOwnProperty;function Qr(e,o,t,n,r,l){var i=no(e),a=no(o),s=i?qt:Un(e),d=a?qt:Un(o);s=s==Xt?vo:s,d=d==Xt?vo:d;var u=s==vo,f=d==vo,h=s==d;if(h&&Gn(e)){if(!Gn(o))return!1;i=!0,u=!1}if(h&&!u)return l||(l=new Ro),i||Bi(e)?Vt(e,o,t,n,r,l):Gr(e,o,s,t,n,r,l);if(!(t&Zr)){var b=u&&Zt.call(e,"__wrapped__"),p=f&&Zt.call(o,"__wrapped__");if(b||p){var m=b?e.value():e,k=p?o.value():o;return l||(l=new Ro),r(m,k,t,n,l)}}return h?(l||(l=new Ro),qr(e,o,t,n,r,l)):!1}function Wo(e,o,t,n,r){return e===o?!0:e==null||o==null||!Vn(e)&&!Vn(o)?e!==e&&o!==o:Qr(e,o,t,n,Wo,r)}var el=1,ol=2;function tl(e,o,t,n){var r=t.length,l=r,i=!n;if(e==null)return!l;for(e=Object(e);r--;){var a=t[r];if(i&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++r<l;){a=t[r];var s=a[0],d=e[s],u=a[1];if(i&&a[2]){if(d===void 0&&!(s in e))return!1}else{var f=new Ro;if(n)var h=n(d,u,s,e,o,f);if(!(h===void 0?Wo(u,d,el|ol,n,f):h))return!1}}return!0}function Jt(e){return e===e&&!Ii(e)}function nl(e){for(var o=Yn(e),t=o.length;t--;){var n=o[t],r=e[n];o[t]=[n,r,Jt(r)]}return o}function Qt(e,o){return function(t){return t==null?!1:t[e]===o&&(o!==void 0||e in Object(t))}}function rl(e){var o=nl(e);return o.length==1&&o[0][2]?Qt(o[0][0],o[0][1]):function(t){return t===e||tl(t,e,o)}}function ll(e,o){return e!=null&&o in Object(e)}function il(e,o,t){o=ha(o,e);for(var n=-1,r=o.length,l=!1;++n<r;){var i=wt(o[n]);if(!(l=e!=null&&t(e,i)))break;e=e[i]}return l||++n!=r?l:(r=e==null?0:e.length,!!r&&_i(r)&&Ai(i,r)&&(no(e)||Ni(e)))}function al(e,o){return e!=null&&il(e,o,ll)}var sl=1,dl=2;function cl(e,o){return rr(e)&&Jt(o)?Qt(wt(e),o):function(t){var n=pa(t,e);return n===void 0&&n===o?al(t,e):Wo(o,n,sl|dl)}}function ul(e){return function(o){return o==null?void 0:o[e]}}function hl(e){return function(o){return fa(o,e)}}function pl(e){return rr(e)?ul(wt(e)):hl(e)}function fl(e){return typeof e=="function"?e:e==null?Ei:typeof e=="object"?no(e)?cl(e[0],e[1]):rl(e):pl(e)}function vl(e,o){return e&&Li(e,o,Yn)}function gl(e,o){return function(t,n){if(t==null)return t;if(!Xn(t))return e(t,n);for(var r=t.length,l=o?r:-1,i=Object(t);(o?l--:++l<r)&&n(i[l],l,i)!==!1;);return t}}var bl=gl(vl);const ml=bl;function yl(e,o){var t=-1,n=Xn(e)?Array(e.length):[];return ml(e,function(r,l,i){n[++t]=o(r,l,i)}),n}function wl(e,o){var t=no(e)?ji:yl;return t(e,fl(o))}let en,on,tn;en=ne({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),xt=ne({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),on=ne({name:"Empty",render(){return c("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),c("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),tn=ne({props:{onFocus:Function,onBlur:Function},setup(e){return()=>c("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function nn(e){return Array.isArray(e)?e:[e]}const Ho={STOP:"STOP"};function rn(e,o){const t=o(e);e.children!==void 0&&t!==Ho.STOP&&e.children.forEach(n=>rn(n,o))}function xl(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?i=>{i.isLeaf||(n.push(i.key),l(i.children))}:i=>{i.isLeaf||(i.isGroup||n.push(i.key),l(i.children))};function l(i){i.forEach(r)}return l(e),n}function Cl(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function kl(e){return e.children}function Sl(e){return e.key}function zl(){return!1}function $l(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function Ol(e){return e.disabled===!0}function Pl(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function Uo(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function Go(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function Rl(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function Ml(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function Fl(e){return(e==null?void 0:e.type)==="group"}St=function(e){const o=new Map;return e.forEach((t,n)=>{o.set(t.key,n)}),t=>{var n;return(n=o.get(t))!==null&&n!==void 0?n:null}};class Tl extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Bl(e,o,t,n){return go(o.concat(e),t,n,!1)}function Il(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let l=r.parent;for(;l!==null&&!(l.disabled||t.has(l.key));)t.add(l.key),l=l.parent}}),t}function _l(e,o,t,n){const r=go(o,t,n,!1),l=go(e,t,n,!0),i=Il(e,t),a=[];return r.forEach(s=>{(l.has(s)||i.has(s))&&a.push(s)}),a.forEach(s=>r.delete(s)),r}function Vo(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:l,cascade:i,leafOnly:a,checkStrategy:s,allowNotLoaded:d}=e;if(!i)return n!==void 0?{checkedKeys:Rl(t,n),indeterminateKeys:Array.from(l)}:r!==void 0?{checkedKeys:Ml(t,r),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:u}=o;let f;r!==void 0?f=_l(r,t,o,d):n!==void 0?f=Bl(n,t,o,d):f=go(t,o,d,!1);const h=s==="parent",b=s==="child"||a,p=f,m=new Set,k=Math.max.apply(null,Array.from(u.keys()));for(let g=k;g>=0;g-=1){const S=g===0,H=u.get(g);for(const z of H){if(z.isLeaf)continue;const{key:O,shallowLoaded:L}=z;if(b&&L&&z.children.forEach(j=>{!j.disabled&&!j.isLeaf&&j.shallowLoaded&&p.has(j.key)&&p.delete(j.key)}),z.disabled||!L)continue;let R=!0,K=!1,B=!0;for(const j of z.children){const C=j.key;if(!j.disabled){if(B&&(B=!1),p.has(C))K=!0;else if(m.has(C)){K=!0,R=!1;break}else if(R=!1,K)break}}R&&!B?(h&&z.children.forEach(j=>{!j.disabled&&p.has(j.key)&&p.delete(j.key)}),p.add(O)):K&&m.add(O),S&&b&&p.has(O)&&p.delete(O)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(m)}}function go(e,o,t,n){const{treeNodeMap:r,getChildren:l}=o,i=new Set,a=new Set(e);return e.forEach(s=>{const d=r.get(s);d!==void 0&&rn(d,u=>{if(u.disabled)return Ho.STOP;const{key:f}=u;if(!i.has(f)&&(i.add(f),a.add(f),Pl(u.rawNode,l))){if(n)return Ho.STOP;if(!t)throw new Tl}})}),a}function Al(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const l=n.treeNodeMap;let i=e==null?null:(r=l.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return a.treeNode=null,a;for(;i;)!i.ignored&&(o||!i.isGroup)&&a.treeNodePath.push(i),i=i.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(s=>s.key),a}function Nl(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function El(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function ln(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?Ll:El,l={reverse:o==="prev"};let i=!1,a=null;function s(d){if(d!==null){if(d===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!d.disabled||n)&&!d.ignored&&!d.isGroup){a=d;return}if(d.isGroup){const u=Yo(d,l);u!==null?a=u:s(r(d,t))}else{const u=r(d,!1);if(u!==null)s(u);else{const f=jl(d);f!=null&&f.isGroup?s(r(f,t)):t&&s(r(d,!0))}}}}return s(e),a}function Ll(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function jl(e){return e.parent}function Yo(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,l=t?r-1:0,i=t?-1:r,a=t?-1:1;for(let s=l;s!==i;s+=a){const d=n[s];if(!d.disabled&&!d.ignored)if(d.isGroup){const u=Yo(d,o);if(u!==null)return u}else return d}}return null}const Dl={getChild(){return this.ignored?null:Yo(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return ln(this,"next",e)},getPrev(e={}){return ln(this,"prev",e)}};kt=function(e,o){const t=o?new Set(o):void 0,n=[];function r(l){l.forEach(i=>{n.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&r(i.children)})}return r(e),n};function Kl(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function an(e,o,t,n,r,l=null,i=0){const a=[];return e.forEach((s,d)=>{var u;const f=Object.create(n);if(f.rawNode=s,f.siblings=a,f.level=i,f.index=d,f.isFirstChild=d===0,f.isLastChild=d+1===e.length,f.parent=l,!f.ignored){const h=r(s);Array.isArray(h)&&(f.children=an(h,o,t,n,r,f,i+1))}a.push(f),o.set(f.key,f),t.has(i)||t.set(i,[]),(u=t.get(i))===null||u===void 0||u.push(f)}),a}_o=function(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:l=Ol,getIgnored:i=zl,getIsGroup:a=Fl,getKey:s=Sl}=o,d=(t=o.getChildren)!==null&&t!==void 0?t:kl,u=o.ignoreEmptyChildren?z=>{const O=d(z);return Array.isArray(O)?O.length?O:null:O}:d,f=Object.assign({get key(){return s(this.rawNode)},get disabled(){return l(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return Cl(this.rawNode,u)},get shallowLoaded(){return $l(this.rawNode,u)},get ignored(){return i(this.rawNode)},contains(z){return Kl(this,z)}},Dl),h=an(e,n,r,f,u);function b(z){if(z==null)return null;const O=n.get(z);return O&&!O.isGroup&&!O.ignored?O:null}function p(z){if(z==null)return null;const O=n.get(z);return O&&!O.ignored?O:null}function m(z,O){const L=p(z);return L?L.getPrev(O):null}function k(z,O){const L=p(z);return L?L.getNext(O):null}function g(z){const O=p(z);return O?O.getParent():null}function S(z){const O=p(z);return O?O.getChild():null}const H={treeNodes:h,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(z){return kt(h,z)},getNode:b,getPrev:m,getNext:k,getParent:g,getChild:S,getFirstAvailableNode(){return Nl(h)},getPath(z,O={}){return Al(z,O,H)},getCheckedKeys(z,O={}){const{cascade:L=!0,leafOnly:R=!1,checkStrategy:K="all",allowNotLoaded:B=!1}=O;return Vo({checkedKeys:Uo(z),indeterminateKeys:Go(z),cascade:L,leafOnly:R,checkStrategy:K,allowNotLoaded:B},H)},check(z,O,L={}){const{cascade:R=!0,leafOnly:K=!1,checkStrategy:B="all",allowNotLoaded:j=!1}=L;return Vo({checkedKeys:Uo(O),indeterminateKeys:Go(O),keysToCheck:z==null?[]:nn(z),cascade:R,leafOnly:K,checkStrategy:B,allowNotLoaded:j},H)},uncheck(z,O,L={}){const{cascade:R=!0,leafOnly:K=!1,checkStrategy:B="all",allowNotLoaded:j=!1}=L;return Vo({checkedKeys:Uo(O),indeterminateKeys:Go(O),keysToUncheck:z==null?[]:nn(z),cascade:R,leafOnly:K,checkStrategy:B,allowNotLoaded:j},H)},getNonLeafKeys(z={}){return xl(h,z)}};return H};let sn,dn;sn=W("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[U("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[oe("+",[U("description",`
 margin-top: 8px;
 `)])]),U("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),U("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),dn=Object.assign(Object.assign({},se.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Ct=ne({name:"Empty",props:dn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Ke(e),n=se("Empty","-empty",sn,Di,e,o),{localeRef:r}=lr("Empty"),l=ce(Ki,null),i=_(()=>{var u,f,h;return(u=e.description)!==null&&u!==void 0?u:(h=(f=l==null?void 0:l.mergedComponentPropsRef.value)===null||f===void 0?void 0:f.Empty)===null||h===void 0?void 0:h.description}),a=_(()=>{var u,f;return((f=(u=l==null?void 0:l.mergedComponentPropsRef.value)===null||u===void 0?void 0:u.Empty)===null||f===void 0?void 0:f.renderIcon)||(()=>c(on,null))}),s=_(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:f},self:{[te("iconSize",u)]:h,[te("fontSize",u)]:b,textColor:p,iconColor:m,extraTextColor:k}}=n.value;return{"--n-icon-size":h,"--n-font-size":b,"--n-bezier":f,"--n-text-color":p,"--n-icon-color":m,"--n-extra-text-color":k}}),d=t?Ne("empty",_(()=>{let u="";const{size:f}=e;return u+=f[0],u}),s,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:a,localizedDescription:_(()=>i.value||r.value.description),cssVars:t?void 0:s,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),c("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?c("div",{class:`${o}-empty__icon`},e.icon?e.icon():c(qn,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?c("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?c("div",{class:`${o}-empty__extra`},e.extra()):null)}});function Wl(e,o){return c(Mo,{name:"fade-in-scale-up-transition"},{default:()=>e?c(qn,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>c(en)}):null})}let Xo,qo,cn,bo,ae,un;Xo=ne({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:t,multipleRef:n,valueSetRef:r,renderLabelRef:l,renderOptionRef:i,labelFieldRef:a,valueFieldRef:s,showCheckmarkRef:d,nodePropsRef:u,handleOptionClick:f,handleOptionMouseEnter:h}=ce(No),b=ve(()=>{const{value:g}=t;return g?e.tmNode.key===g.key:!1});function p(g){const{tmNode:S}=e;S.disabled||f(g,S)}function m(g){const{tmNode:S}=e;S.disabled||h(g,S)}function k(g){const{tmNode:S}=e,{value:H}=b;S.disabled||H||h(g,S)}return{multiple:n,isGrouped:ve(()=>{const{tmNode:g}=e,{parent:S}=g;return S&&S.rawNode.type==="group"}),showCheckmark:d,nodeProps:u,isPending:b,isSelected:ve(()=>{const{value:g}=o,{value:S}=n;if(g===null)return!1;const H=e.tmNode.rawNode[s.value];if(S){const{value:z}=r;return z.has(H)}else return g===H}),labelField:a,renderLabel:l,renderOption:i,handleMouseMove:k,handleMouseEnter:m,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:t,isPending:n,isGrouped:r,showCheckmark:l,nodeProps:i,renderOption:a,renderLabel:s,handleClick:d,handleMouseEnter:u,handleMouseMove:f}=this,h=Wl(t,e),b=s?[s(o,t),l&&h]:[$e(o[this.labelField],o,t),l&&h],p=i==null?void 0:i(o),m=c("div",Object.assign({},p,{class:[`${e}-base-select-option`,o.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:n,[`${e}-base-select-option--show-checkmark`]:l}],style:[(p==null?void 0:p.style)||"",o.style||""],onClick:co([d,p==null?void 0:p.onClick]),onMouseenter:co([u,p==null?void 0:p.onMouseenter]),onMousemove:co([f,p==null?void 0:p.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},b));return o.render?o.render({node:m,option:o,selected:t}):a?a({node:m,option:o,selected:t}):m}}),qo=ne({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:t,nodePropsRef:n}=ce(No);return{labelField:t,nodeProps:n,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:t,nodeProps:n,tmNode:{rawNode:r}}=this,l=n==null?void 0:n(r),i=o?o(r,!1):$e(r[this.labelField],r,!1),a=c("div",Object.assign({},l,{class:[`${e}-base-select-group-header`,l==null?void 0:l.class]}),i);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}}),cn=W("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[W("scrollbar",`
 max-height: var(--n-height);
 `),W("virtual-list",`
 max-height: var(--n-height);
 `),W("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[U("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),W("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),W("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),U("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),U("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),U("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),W("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),W("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Y("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),oe("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),oe("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Y("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Y("pending",[oe("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Y("selected",`
 color: var(--n-option-text-color-active);
 `,[oe("&::before",`
 background-color: var(--n-option-color-active);
 `),Y("pending",[oe("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Y("disabled",`
 cursor: not-allowed;
 `,[me("selected",`
 color: var(--n-option-text-color-disabled);
 `),Y("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),U("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[vt({enterScale:"0.5"})])])]),Pt=ne({name:"InternalSelectMenu",props:Object.assign(Object.assign({},se.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const o=se("InternalSelectMenu","-internal-select-menu",cn,Wi,e,Q(e,"clsPrefix")),t=E(null),n=E(null),r=E(null),l=_(()=>e.treeMate.getFlattenedNodes()),i=_(()=>St(l.value)),a=E(null);function s(){const{treeMate:x}=e;let $=null;const{value:V}=e;V===null?$=x.getFirstAvailableNode():(e.multiple?$=x.getNode((V||[])[(V||[]).length-1]):$=x.getNode(V),(!$||$.disabled)&&($=x.getFirstAvailableNode())),C($||null)}function d(){const{value:x}=a;x&&!e.treeMate.getNode(x.key)&&(a.value=null)}let u;pe(()=>e.show,x=>{x?u=pe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?s():d(),Oo(w)):d()},{immediate:!0}):u==null||u()},{immediate:!0}),Ae(()=>{u==null||u()});const f=_(()=>ft(o.value.self[te("optionHeight",e.size)])),h=_(()=>gt(o.value.self[te("padding",e.size)])),b=_(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=_(()=>{const x=l.value;return x&&x.length===0});function m(x){const{onToggle:$}=e;$&&$(x)}function k(x){const{onScroll:$}=e;$&&$(x)}function g(x){var $;($=r.value)===null||$===void 0||$.sync(),k(x)}function S(){var x;(x=r.value)===null||x===void 0||x.sync()}function H(){const{value:x}=a;return x||null}function z(x,$){$.disabled||C($,!1)}function O(x,$){$.disabled||m($)}function L(x){var $;Ee(x,"action")||($=e.onKeyup)===null||$===void 0||$.call(e,x)}function R(x){var $;Ee(x,"action")||($=e.onKeydown)===null||$===void 0||$.call(e,x)}function K(x){var $;($=e.onMousedown)===null||$===void 0||$.call(e,x),!e.focusable&&x.preventDefault()}function B(){const{value:x}=a;x&&C(x.getNext({loop:!0}),!0)}function j(){const{value:x}=a;x&&C(x.getPrev({loop:!0}),!0)}function C(x,$=!1){a.value=x,$&&w()}function w(){var x,$;const V=a.value;if(!V)return;const le=i.value(V.key);le!==null&&(e.virtualScroll?(x=n.value)===null||x===void 0||x.scrollTo({index:le}):($=r.value)===null||$===void 0||$.scrollTo({index:le,elSize:f.value}))}function I(x){var $,V;!(($=t.value)===null||$===void 0)&&$.contains(x.target)&&((V=e.onFocus)===null||V===void 0||V.call(e,x))}function y(x){var $,V;!(($=t.value)===null||$===void 0)&&$.contains(x.relatedTarget)||(V=e.onBlur)===null||V===void 0||V.call(e,x)}fe(No,{handleOptionMouseEnter:z,handleOptionClick:O,valueSetRef:b,pendingTmNodeRef:a,nodePropsRef:Q(e,"nodeProps"),showCheckmarkRef:Q(e,"showCheckmark"),multipleRef:Q(e,"multiple"),valueRef:Q(e,"value"),renderLabelRef:Q(e,"renderLabel"),renderOptionRef:Q(e,"renderOption"),labelFieldRef:Q(e,"labelField"),valueFieldRef:Q(e,"valueField")}),fe(Ft,t),_e(()=>{const{value:x}=r;x&&x.sync()});const M=_(()=>{const{size:x}=e,{common:{cubicBezierEaseInOut:$},self:{height:V,borderRadius:le,color:Ce,groupHeaderTextColor:Re,actionDividerColor:Me,optionTextColorPressed:ke,optionTextColor:ee,optionTextColorDisabled:ye,optionTextColorActive:he,optionOpacityDisabled:Be,optionCheckColor:Se,actionTextColor:Ze,optionColorPending:je,optionColorActive:De,loadingColor:Je,loadingSize:Qe,optionColorActivePending:eo,[te("optionFontSize",x)]:He,[te("optionHeight",x)]:Ue,[te("optionPadding",x)]:be}}=o.value;return{"--n-height":V,"--n-action-divider-color":Me,"--n-action-text-color":Ze,"--n-bezier":$,"--n-border-radius":le,"--n-color":Ce,"--n-option-font-size":He,"--n-group-header-text-color":Re,"--n-option-check-color":Se,"--n-option-color-pending":je,"--n-option-color-active":De,"--n-option-color-active-pending":eo,"--n-option-height":Ue,"--n-option-opacity-disabled":Be,"--n-option-text-color":ee,"--n-option-text-color-active":he,"--n-option-text-color-disabled":ye,"--n-option-text-color-pressed":ke,"--n-option-padding":be,"--n-option-padding-left":gt(be,"left"),"--n-option-padding-right":gt(be,"right"),"--n-loading-color":Je,"--n-loading-size":Qe}}),{inlineThemeDisabled:D}=e,F=D?Ne("internal-select-menu",_(()=>e.size[0]),M,e):void 0,A={selfRef:t,next:B,prev:j,getPendingTmNode:H};return Gt(t,e.onResize),Object.assign({mergedTheme:o,virtualListRef:n,scrollbarRef:r,itemSize:f,padding:h,flattenedNodes:l,empty:p,virtualListContainer(){const{value:x}=n;return x==null?void 0:x.listElRef},virtualListContent(){const{value:x}=n;return x==null?void 0:x.itemsElRef},doScroll:k,handleFocusin:I,handleFocusout:y,handleKeyUp:L,handleKeyDown:R,handleMouseDown:K,handleVirtualListResize:S,handleVirtualListScroll:g,cssVars:D?void 0:M,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender},A)},render(){const{$slots:e,virtualScroll:o,clsPrefix:t,mergedTheme:n,themeClass:r,onRender:l}=this;return l==null||l(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?c("div",{class:`${t}-base-select-menu__loading`},c(Hi,{clsPrefix:t,strokeWidth:20})):this.empty?c("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Gi(e.empty,()=>[c(Ct,{theme:n.peers.Empty,themeOverrides:n.peerOverrides.Empty})])):c(Ui,{ref:"scrollbarRef",theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?c(zt,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:i})=>i.isGroup?c(qo,{key:i.key,clsPrefix:t,tmNode:i}):i.ignored?null:c(Xo,{clsPrefix:t,key:i.key,tmNode:i})}):c("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(i=>i.isGroup?c(qo,{key:i.key,clsPrefix:t,tmNode:i}):c(Xo,{clsPrefix:t,key:i.key,tmNode:i})))}),Ve(e.action,i=>i&&[c("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},i),c(tn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),bo={top:"bottom",bottom:"top",left:"right",right:"left"},ae="var(--n-arrow-height) * 1.414",un=oe([W("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[oe(">",[W("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),me("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[me("scrollable",[me("show-header-or-footer","padding: var(--n-padding);")])]),U("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),U("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Y("scrollable, show-header-or-footer",[U("content",`
 padding: var(--n-padding);
 `)])]),W("popover-shared",`
 transform-origin: inherit;
 `,[W("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[W("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${ae});
 height: calc(${ae});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),oe("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),oe("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),oe("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),oe("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ge("top-start",`
 top: calc(${ae} / -2);
 left: calc(${Pe("top-start")} - var(--v-offset-left));
 `),ge("top",`
 top: calc(${ae} / -2);
 transform: translateX(calc(${ae} / -2)) rotate(45deg);
 left: 50%;
 `),ge("top-end",`
 top: calc(${ae} / -2);
 right: calc(${Pe("top-end")} + var(--v-offset-left));
 `),ge("bottom-start",`
 bottom: calc(${ae} / -2);
 left: calc(${Pe("bottom-start")} - var(--v-offset-left));
 `),ge("bottom",`
 bottom: calc(${ae} / -2);
 transform: translateX(calc(${ae} / -2)) rotate(45deg);
 left: 50%;
 `),ge("bottom-end",`
 bottom: calc(${ae} / -2);
 right: calc(${Pe("bottom-end")} + var(--v-offset-left));
 `),ge("left-start",`
 left: calc(${ae} / -2);
 top: calc(${Pe("left-start")} - var(--v-offset-top));
 `),ge("left",`
 left: calc(${ae} / -2);
 transform: translateY(calc(${ae} / -2)) rotate(45deg);
 top: 50%;
 `),ge("left-end",`
 left: calc(${ae} / -2);
 bottom: calc(${Pe("left-end")} + var(--v-offset-top));
 `),ge("right-start",`
 right: calc(${ae} / -2);
 top: calc(${Pe("right-start")} - var(--v-offset-top));
 `),ge("right",`
 right: calc(${ae} / -2);
 transform: translateY(calc(${ae} / -2)) rotate(45deg);
 top: 50%;
 `),ge("right-end",`
 right: calc(${ae} / -2);
 bottom: calc(${Pe("right-end")} + var(--v-offset-top));
 `),...wl({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,o)=>{const t=["right","left"].includes(o),n=t?"width":"height";return e.map(r=>{const l=r.split("-")[1]==="end",i=`calc((${`var(--v-target-${n}, 0px)`} - ${ae}) / 2)`,a=Pe(r);return oe(`[v-placement="${r}"] >`,[W("popover-shared",[Y("center-arrow",[W("popover-arrow",`${o}: calc(max(${i}, ${a}) ${l?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function Pe(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ge(e,o){const t=e.split("-")[0],n=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return oe(`[v-placement="${e}"] >`,[W("popover-shared",`
 margin-${bo[t]}: var(--n-space);
 `,[Y("show-arrow",`
 margin-${bo[t]}: var(--n-space-arrow);
 `),Y("overlap",`
 margin: 0;
 `),Vi("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${bo[t]}: auto;
 ${n}
 `,[W("popover-arrow",o)])])])}const hn=Object.assign(Object.assign({},se.props),{to:xe.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),pn=({arrowStyle:e,clsPrefix:o})=>c("div",{key:"__popover-arrow__",class:`${o}-popover-arrow-wrapper`},c("div",{class:`${o}-popover-arrow`,style:e})),Hl=ne({name:"PopoverBody",inheritAttrs:!1,props:hn,setup(e,{slots:o,attrs:t}){const{namespaceRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:l}=Ke(e),i=se("Popover","-popover",un,Yi,e,r),a=E(null),s=ce("NPopover"),d=E(null),u=E(e.show),f=E(!1);bt(()=>{const{show:R}=e;R&&!ur()&&!e.internalDeactivateImmediately&&(f.value=!0)});const h=_(()=>{const{trigger:R,onClickoutside:K}=e,B=[],{positionManuallyRef:{value:j}}=s;return j||(R==="click"&&!K&&B.push([Fo,z,void 0,{capture:!0}]),R==="hover"&&B.push([Nt,H])),K&&B.push([Fo,z,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&f.value)&&B.push([Zn,e.show]),B}),b=_(()=>{const R=e.width==="trigger"?void 0:Bo(e.width),K=[];R&&K.push({width:R});const{maxWidth:B,minWidth:j}=e;return B&&K.push({maxWidth:Bo(B)}),j&&K.push({maxWidth:Bo(j)}),l||K.push(p.value),K}),p=_(()=>{const{common:{cubicBezierEaseInOut:R,cubicBezierEaseIn:K,cubicBezierEaseOut:B},self:{space:j,spaceArrow:C,padding:w,fontSize:I,textColor:y,dividerColor:M,color:D,boxShadow:F,borderRadius:A,arrowHeight:x,arrowOffset:$,arrowOffsetVertical:V}}=i.value;return{"--n-box-shadow":F,"--n-bezier":R,"--n-bezier-ease-in":K,"--n-bezier-ease-out":B,"--n-font-size":I,"--n-text-color":y,"--n-color":D,"--n-divider-color":M,"--n-border-radius":A,"--n-arrow-height":x,"--n-arrow-offset":$,"--n-arrow-offset-vertical":V,"--n-padding":w,"--n-space":j,"--n-space-arrow":C}}),m=l?Ne("popover",void 0,p,e):void 0;s.setBodyInstance({syncPosition:k}),Ae(()=>{s.setBodyInstance(null)}),pe(Q(e,"show"),R=>{e.animated||(R?u.value=!0:u.value=!1)});function k(){var R;(R=a.value)===null||R===void 0||R.syncPosition()}function g(R){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(R)}function S(R){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(R)}function H(R){e.trigger==="hover"&&!O().contains(mt(R))&&s.handleMouseMoveOutside(R)}function z(R){(e.trigger==="click"&&!O().contains(mt(R))||e.onClickoutside)&&s.handleClickOutside(R)}function O(){return s.getTriggerElement()}fe($o,d),fe(ut,null),fe(ct,null);function L(){if(m==null||m.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&f.value))return null;let R;const K=s.internalRenderBodyRef.value,{value:B}=r;if(K)R=K([`${B}-popover-shared`,m==null?void 0:m.themeClass.value,e.overlap&&`${B}-popover-shared--overlap`,e.showArrow&&`${B}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${B}-popover-shared--center-arrow`],d,b.value,g,S);else{const{value:j}=s.extraClassRef,{internalTrapFocus:C}=e,w=!Jn(o.header)||!Jn(o.footer),I=()=>{var y;const M=w?c(yt,null,Ve(o.header,A=>A?c("div",{class:`${B}-popover__header`,style:e.headerStyle},A):null),Ve(o.default,A=>A?c("div",{class:`${B}-popover__content`,style:e.contentStyle},o):null),Ve(o.footer,A=>A?c("div",{class:`${B}-popover__footer`,style:e.footerStyle},A):null)):e.scrollable?(y=o.default)===null||y===void 0?void 0:y.call(o):c("div",{class:`${B}-popover__content`,style:e.contentStyle},o),D=e.scrollable?c(Qn,{contentClass:w?void 0:`${B}-popover__content`,contentStyle:w?void 0:e.contentStyle},{default:()=>M}):M,F=e.showArrow?pn({arrowStyle:e.arrowStyle,clsPrefix:B}):null;return[D,F]};R=c("div",to({class:[`${B}-popover`,`${B}-popover-shared`,m==null?void 0:m.themeClass.value,j.map(y=>`${B}-${y}`),{[`${B}-popover--scrollable`]:e.scrollable,[`${B}-popover--show-header-or-footer`]:w,[`${B}-popover--raw`]:e.raw,[`${B}-popover-shared--overlap`]:e.overlap,[`${B}-popover-shared--show-arrow`]:e.showArrow,[`${B}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:d,style:b.value,onKeydown:s.handleKeydown,onMouseenter:g,onMouseleave:S},t),C?c(Xi,{active:e.show,autoFocus:!0},{default:I}):I())}return oo(R,h.value)}return{displayed:f,namespace:n,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:a,adjustedTo:xe(e),followerEnabled:u,renderContentNode:L}},render(){return c(ao,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===xe.tdkey},{default:()=>this.animated?c(Mo,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Ul=Object.keys(hn),Gl={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Vl(e,o,t){Gl[o].forEach(n=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[n],l=t[n];r?e.props[n]=(...i)=>{r(...i),l(...i)}:e.props[n]=l})}let fn,vn,gn,bn,mn,yn,wn,xn,Cn,kn;Ye={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:xe.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},fn=Object.assign(Object.assign(Object.assign({},se.props),Ye),{internalOnAfterLeave:Function,internalRenderBody:Function}),uo=ne({name:"Popover",inheritAttrs:!1,props:fn,__popover__:!0,setup(e){const o=pt(),t=E(null),n=_(()=>e.show),r=E(e.defaultShow),l=To(n,r),i=ve(()=>e.disabled?!1:l.value),a=()=>{if(e.disabled)return!0;const{getDisabled:y}=e;return!!(y!=null&&y())},s=()=>a()?!1:l.value,d=Io(e,["arrow","showArrow"]),u=_(()=>e.overlap?!1:d.value);let f=null;const h=E(null),b=E(null),p=ve(()=>e.x!==void 0&&e.y!==void 0);function m(y){const{"onUpdate:show":M,onUpdateShow:D,onShow:F,onHide:A}=e;r.value=y,M&&ue(M,y),D&&ue(D,y),y&&F&&ue(F,!0),y&&A&&ue(A,!1)}function k(){f&&f.syncPosition()}function g(){const{value:y}=h;y&&(window.clearTimeout(y),h.value=null)}function S(){const{value:y}=b;y&&(window.clearTimeout(y),b.value=null)}function H(){const y=a();if(e.trigger==="focus"&&!y){if(s())return;m(!0)}}function z(){const y=a();if(e.trigger==="focus"&&!y){if(!s())return;m(!1)}}function O(){const y=a();if(e.trigger==="hover"&&!y){if(S(),h.value!==null||s())return;const M=()=>{m(!0),h.value=null},{delay:D}=e;D===0?M():h.value=window.setTimeout(M,D)}}function L(){const y=a();if(e.trigger==="hover"&&!y){if(g(),b.value!==null||!s())return;const M=()=>{m(!1),b.value=null},{duration:D}=e;D===0?M():b.value=window.setTimeout(M,D)}}function R(){L()}function K(y){var M;s()&&(e.trigger==="click"&&(g(),S(),m(!1)),(M=e.onClickoutside)===null||M===void 0||M.call(e,y))}function B(){if(e.trigger==="click"&&!a()){g(),S();const y=!s();m(y)}}function j(y){e.internalTrapFocus&&y.key==="Escape"&&(g(),S(),m(!1))}function C(y){r.value=y}function w(){var y;return(y=t.value)===null||y===void 0?void 0:y.targetRef}function I(y){f=y}return fe("NPopover",{getTriggerElement:w,handleKeydown:j,handleMouseEnter:O,handleMouseLeave:L,handleClickOutside:K,handleMouseMoveOutside:R,setBodyInstance:I,positionManuallyRef:p,isMountedRef:o,zIndexRef:Q(e,"zIndex"),extraClassRef:Q(e,"internalExtraClass"),internalRenderBodyRef:Q(e,"internalRenderBody")}),bt(()=>{l.value&&a()&&m(!1)}),{binderInstRef:t,positionManually:p,mergedShowConsideringDisabledProp:i,uncontrolledShow:r,mergedShowArrow:u,getMergedShow:s,setShow:C,handleClick:B,handleMouseEnter:O,handleMouseLeave:L,handleFocus:H,handleBlur:z,syncPosition:k}},render(){var e;const{positionManually:o,$slots:t}=this;let n,r=!1;if(!o&&(t.activator?n=er(t,"activator"):n=er(t,"trigger"),n)){n=qi(n),n=n.type===Zi?c("span",[n]):n;const l={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=n.type)===null||e===void 0)&&e.__popover__)r=!0,n.props||(n.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),n.props.internalSyncTargetWithParent=!0,n.props.internalInheritedEventHandlers?n.props.internalInheritedEventHandlers=[l,...n.props.internalInheritedEventHandlers]:n.props.internalInheritedEventHandlers=[l];else{const{internalInheritedEventHandlers:i}=this,a=[l,...i],s={onBlur:d=>{a.forEach(u=>{u.onBlur(d)})},onFocus:d=>{a.forEach(u=>{u.onFocus(d)})},onClick:d=>{a.forEach(u=>{u.onClick(d)})},onMouseenter:d=>{a.forEach(u=>{u.onMouseenter(d)})},onMouseleave:d=>{a.forEach(u=>{u.onMouseleave(d)})}};Vl(n,i?"nested":o?"manual":this.trigger,s)}}return c(ro,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const l=this.getMergedShow();return[this.internalTrapFocus&&l?oo(c("div",{style:{position:"fixed",inset:0}}),[[Ln,{enabled:l,zIndex:this.zIndex}]]):null,o?null:c(lo,null,{default:()=>n}),c(Hl,or(this.$props,Ul,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:l})),{default:()=>{var i,a;return(a=(i=this.$slots).default)===null||a===void 0?void 0:a.call(i)},header:()=>{var i,a;return(a=(i=this.$slots).header)===null||a===void 0?void 0:a.call(i)},footer:()=>{var i,a;return(a=(i=this.$slots).footer)===null||a===void 0?void 0:a.call(i)}})]}})}}),vn=e=>{const{textColor2:o,primaryColorHover:t,primaryColorPressed:n,primaryColor:r,infoColor:l,successColor:i,warningColor:a,errorColor:s,baseColor:d,borderColor:u,opacityDisabled:f,tagColor:h,closeIconColor:b,closeIconColorHover:p,closeIconColorPressed:m,borderRadiusSmall:k,fontSizeMini:g,fontSizeTiny:S,fontSizeSmall:H,fontSizeMedium:z,heightMini:O,heightTiny:L,heightSmall:R,heightMedium:K,closeColorHover:B,closeColorPressed:j,buttonColor2Hover:C,buttonColor2Pressed:w,fontWeightStrong:I}=e;return Object.assign(Object.assign({},Qi),{closeBorderRadius:k,heightTiny:O,heightSmall:L,heightMedium:R,heightLarge:K,borderRadius:k,opacityDisabled:f,fontSizeTiny:g,fontSizeSmall:S,fontSizeMedium:H,fontSizeLarge:z,fontWeightStrong:I,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:C,colorPressedCheckable:w,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:n,border:`1px solid ${u}`,textColor:o,color:h,colorBordered:"rgb(250, 250, 252)",closeIconColor:b,closeIconColorHover:p,closeIconColorPressed:m,closeColorHover:B,closeColorPressed:j,borderPrimary:`1px solid ${re(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:re(r,{alpha:.12}),colorBorderedPrimary:re(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:re(r,{alpha:.12}),closeColorPressedPrimary:re(r,{alpha:.18}),borderInfo:`1px solid ${re(l,{alpha:.3})}`,textColorInfo:l,colorInfo:re(l,{alpha:.12}),colorBorderedInfo:re(l,{alpha:.1}),closeIconColorInfo:l,closeIconColorHoverInfo:l,closeIconColorPressedInfo:l,closeColorHoverInfo:re(l,{alpha:.12}),closeColorPressedInfo:re(l,{alpha:.18}),borderSuccess:`1px solid ${re(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:re(i,{alpha:.12}),colorBorderedSuccess:re(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:re(i,{alpha:.12}),closeColorPressedSuccess:re(i,{alpha:.18}),borderWarning:`1px solid ${re(a,{alpha:.35})}`,textColorWarning:a,colorWarning:re(a,{alpha:.15}),colorBorderedWarning:re(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:re(a,{alpha:.12}),closeColorPressedWarning:re(a,{alpha:.18}),borderError:`1px solid ${re(s,{alpha:.23})}`,textColorError:s,colorError:re(s,{alpha:.1}),colorBorderedError:re(s,{alpha:.08}),closeIconColorError:s,closeIconColorHoverError:s,closeIconColorPressedError:s,closeColorHoverError:re(s,{alpha:.12}),closeColorPressedError:re(s,{alpha:.18})})},gn={name:"Tag",common:Ji,self:vn},bn=gn,mn={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},yn=W("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Y("strong",`
 font-weight: var(--n-font-weight-strong);
 `),U("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),U("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),U("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),U("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Y("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[U("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),U("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Y("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Y("icon, avatar",[Y("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Y("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Y("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[me("disabled",[oe("&:hover","background-color: var(--n-color-hover-checkable);",[me("checked","color: var(--n-text-color-hover-checkable);")]),oe("&:active","background-color: var(--n-color-pressed-checkable);",[me("checked","color: var(--n-text-color-pressed-checkable);")])]),Y("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[me("disabled",[oe("&:hover","background-color: var(--n-color-checked-hover);"),oe("&:active","background-color: var(--n-color-checked-pressed);")])])])]),wn=Object.assign(Object.assign(Object.assign({},se.props),mn),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),xn=Ge("n-tag"),so=ne({name:"Tag",props:wn,setup(e){const o=E(null),{mergedBorderedRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:l}=Ke(e),i=se("Tag","-tag",yn,bn,e,n);fe(xn,{roundRef:Q(e,"round")});function a(b){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:m,onUpdateChecked:k,"onUpdate:checked":g}=e;k&&k(!p),g&&g(!p),m&&m(!p)}}function s(b){if(e.triggerClickOnClose||b.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&ue(p,b)}}const d={setTextContent(b){const{value:p}=o;p&&(p.textContent=b)}},u=ea("Tag",l,n),f=_(()=>{const{type:b,size:p,color:{color:m,textColor:k}={}}=e,{common:{cubicBezierEaseInOut:g},self:{padding:S,closeMargin:H,closeMarginRtl:z,borderRadius:O,opacityDisabled:L,textColorCheckable:R,textColorHoverCheckable:K,textColorPressedCheckable:B,textColorChecked:j,colorCheckable:C,colorHoverCheckable:w,colorPressedCheckable:I,colorChecked:y,colorCheckedHover:M,colorCheckedPressed:D,closeBorderRadius:F,fontWeightStrong:A,[te("colorBordered",b)]:x,[te("closeSize",p)]:$,[te("closeIconSize",p)]:V,[te("fontSize",p)]:le,[te("height",p)]:Ce,[te("color",b)]:Re,[te("textColor",b)]:Me,[te("border",b)]:ke,[te("closeIconColor",b)]:ee,[te("closeIconColorHover",b)]:ye,[te("closeIconColorPressed",b)]:he,[te("closeColorHover",b)]:Be,[te("closeColorPressed",b)]:Se}}=i.value;return{"--n-font-weight-strong":A,"--n-avatar-size-override":`calc(${Ce} - 8px)`,"--n-bezier":g,"--n-border-radius":O,"--n-border":ke,"--n-close-icon-size":V,"--n-close-color-pressed":Se,"--n-close-color-hover":Be,"--n-close-border-radius":F,"--n-close-icon-color":ee,"--n-close-icon-color-hover":ye,"--n-close-icon-color-pressed":he,"--n-close-icon-color-disabled":ee,"--n-close-margin":H,"--n-close-margin-rtl":z,"--n-close-size":$,"--n-color":m||(t.value?x:Re),"--n-color-checkable":C,"--n-color-checked":y,"--n-color-checked-hover":M,"--n-color-checked-pressed":D,"--n-color-hover-checkable":w,"--n-color-pressed-checkable":I,"--n-font-size":le,"--n-height":Ce,"--n-opacity-disabled":L,"--n-padding":S,"--n-text-color":k||Me,"--n-text-color-checkable":R,"--n-text-color-checked":j,"--n-text-color-hover-checkable":K,"--n-text-color-pressed-checkable":B}}),h=r?Ne("tag",_(()=>{let b="";const{type:p,size:m,color:{color:k,textColor:g}={}}=e;return b+=p[0],b+=m[0],k&&(b+=`a${tr(k)}`),g&&(b+=`b${tr(g)}`),t.value&&(b+="c"),b}),f,e):void 0;return Object.assign(Object.assign({},d),{rtlEnabled:u,mergedClsPrefix:n,contentRef:o,mergedBordered:t,handleClick:a,handleCloseClick:s,cssVars:r?void 0:f,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender})},render(){var e,o;const{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:l}={},round:i,onRender:a,$slots:s}=this;a==null||a();const d=Ve(s.avatar,f=>f&&c("div",{class:`${t}-tag__avatar`},f)),u=Ve(s.icon,f=>f&&c("div",{class:`${t}-tag__icon`},f));return c("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:i,[`${t}-tag--avatar`]:d,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||d,c("span",{class:`${t}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&r?c(oa,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?c("div",{class:`${t}-tag__border`,style:{borderColor:l}}):null)}}),Cn=oe([W("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[W("base-loading",`
 color: var(--n-loading-color);
 `),W("base-selection-tags","min-height: var(--n-height);"),U("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),U("state-border",`
 z-index: 1;
 border-color: #0000;
 `),W("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[U("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),W("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[U("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),W("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[U("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),W("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),W("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[W("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[U("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),U("render-label",`
 color: var(--n-text-color);
 `)]),me("disabled",[oe("&:hover",[U("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Y("focus",[U("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Y("active",[U("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),W("base-selection-label","background-color: var(--n-color-active);"),W("base-selection-tags","background-color: var(--n-color-active);")])]),Y("disabled","cursor: not-allowed;",[U("arrow",`
 color: var(--n-arrow-color-disabled);
 `),W("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[W("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),U("render-label",`
 color: var(--n-text-color-disabled);
 `)]),W("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),W("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),W("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[U("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),U("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Y(`${e}-status`,[U("state-border",`border: var(--n-border-${e});`),me("disabled",[oe("&:hover",[U("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Y("active",[U("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),W("base-selection-label",`background-color: var(--n-color-active-${e});`),W("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Y("focus",[U("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),W("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),W("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[oe("&:last-child","padding-right: 0;"),W("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[U("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),kn=ne({name:"InternalSelection",props:Object.assign(Object.assign({},se.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const o=E(null),t=E(null),n=E(null),r=E(null),l=E(null),i=E(null),a=E(null),s=E(null),d=E(null),u=E(null),f=E(!1),h=E(!1),b=E(!1),p=se("InternalSelection","-internal-selection",Cn,ta,e,Q(e,"clsPrefix")),m=_(()=>e.clearable&&!e.disabled&&(b.value||e.active)),k=_(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):$e(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),g=_(()=>{const P=e.selectedOption;if(P)return P[e.labelField]}),S=_(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function H(){var P;const{value:N}=o;if(N){const{value:ie}=t;ie&&(ie.style.width=`${N.offsetWidth}px`,e.maxTagCount!=="responsive"&&((P=d.value)===null||P===void 0||P.sync()))}}function z(){const{value:P}=u;P&&(P.style.display="none")}function O(){const{value:P}=u;P&&(P.style.display="inline-block")}pe(Q(e,"active"),P=>{P||z()}),pe(Q(e,"pattern"),()=>{e.multiple&&Oo(H)});function L(P){const{onFocus:N}=e;N&&N(P)}function R(P){const{onBlur:N}=e;N&&N(P)}function K(P){const{onDeleteOption:N}=e;N&&N(P)}function B(P){const{onClear:N}=e;N&&N(P)}function j(P){const{onPatternInput:N}=e;N&&N(P)}function C(P){var N;(!P.relatedTarget||!(!((N=n.value)===null||N===void 0)&&N.contains(P.relatedTarget)))&&L(P)}function w(P){var N;!((N=n.value)===null||N===void 0)&&N.contains(P.relatedTarget)||R(P)}function I(P){B(P)}function y(){b.value=!0}function M(){b.value=!1}function D(P){!e.active||!e.filterable||P.target!==t.value&&P.preventDefault()}function F(P){K(P)}function A(P){if(P.key==="Backspace"&&!x.value&&!e.pattern.length){const{selectedOptions:N}=e;N!=null&&N.length&&F(N[N.length-1])}}const x=E(!1);let $=null;function V(P){const{value:N}=o;if(N){const ie=P.target.value;N.textContent=ie,H()}e.ignoreComposition&&x.value?$=P:j(P)}function le(){x.value=!0}function Ce(){x.value=!1,e.ignoreComposition&&j($),$=null}function Re(P){var N;h.value=!0,(N=e.onPatternFocus)===null||N===void 0||N.call(e,P)}function Me(P){var N;h.value=!1,(N=e.onPatternBlur)===null||N===void 0||N.call(e,P)}function ke(){var P,N;if(e.filterable)h.value=!1,(P=i.value)===null||P===void 0||P.blur(),(N=t.value)===null||N===void 0||N.blur();else if(e.multiple){const{value:ie}=r;ie==null||ie.blur()}else{const{value:ie}=l;ie==null||ie.blur()}}function ee(){var P,N,ie;e.filterable?(h.value=!1,(P=i.value)===null||P===void 0||P.focus()):e.multiple?(N=r.value)===null||N===void 0||N.focus():(ie=l.value)===null||ie===void 0||ie.focus()}function ye(){const{value:P}=t;P&&(O(),P.focus())}function he(){const{value:P}=t;P&&P.blur()}function Be(P){const{value:N}=a;N&&N.setTextContent(`+${P}`)}function Se(){const{value:P}=s;return P}function Ze(){return t.value}let je=null;function De(){je!==null&&window.clearTimeout(je)}function Je(){e.disabled||e.active||(De(),je=window.setTimeout(()=>{S.value&&(f.value=!0)},100))}function Qe(){De()}function eo(P){P||(De(),f.value=!1)}pe(S,P=>{P||(f.value=!1)}),_e(()=>{bt(()=>{const P=i.value;P&&(P.tabIndex=e.disabled||h.value?-1:0)})}),Gt(n,e.onResize);const{inlineThemeDisabled:He}=e,Ue=_(()=>{const{size:P}=e,{common:{cubicBezierEaseInOut:N},self:{borderRadius:ie,color:wo,placeholderColor:nt,textColor:rt,paddingSingle:lt,paddingMultiple:it,caretColor:xo,colorDisabled:Co,textColorDisabled:ko,placeholderColorDisabled:at,colorActive:st,boxShadowFocus:So,boxShadowActive:Ie,boxShadowHover:v,border:T,borderFocus:G,borderHover:J,borderActive:X,arrowColor:q,arrowColorDisabled:Z,loadingColor:de,colorActiveWarning:zo,boxShadowFocusWarning:dt,boxShadowActiveWarning:Jl,boxShadowHoverWarning:Ql,borderWarning:ei,borderFocusWarning:oi,borderHoverWarning:ti,borderActiveWarning:ni,colorActiveError:ri,boxShadowFocusError:li,boxShadowActiveError:ii,boxShadowHoverError:ai,borderError:si,borderFocusError:di,borderHoverError:ci,borderActiveError:ui,clearColor:hi,clearColorHover:pi,clearColorPressed:fi,clearSize:vi,arrowSize:gi,[te("height",P)]:bi,[te("fontSize",P)]:mi}}=p.value;return{"--n-bezier":N,"--n-border":T,"--n-border-active":X,"--n-border-focus":G,"--n-border-hover":J,"--n-border-radius":ie,"--n-box-shadow-active":Ie,"--n-box-shadow-focus":So,"--n-box-shadow-hover":v,"--n-caret-color":xo,"--n-color":wo,"--n-color-active":st,"--n-color-disabled":Co,"--n-font-size":mi,"--n-height":bi,"--n-padding-single":lt,"--n-padding-multiple":it,"--n-placeholder-color":nt,"--n-placeholder-color-disabled":at,"--n-text-color":rt,"--n-text-color-disabled":ko,"--n-arrow-color":q,"--n-arrow-color-disabled":Z,"--n-loading-color":de,"--n-color-active-warning":zo,"--n-box-shadow-focus-warning":dt,"--n-box-shadow-active-warning":Jl,"--n-box-shadow-hover-warning":Ql,"--n-border-warning":ei,"--n-border-focus-warning":oi,"--n-border-hover-warning":ti,"--n-border-active-warning":ni,"--n-color-active-error":ri,"--n-box-shadow-focus-error":li,"--n-box-shadow-active-error":ii,"--n-box-shadow-hover-error":ai,"--n-border-error":si,"--n-border-focus-error":di,"--n-border-hover-error":ci,"--n-border-active-error":ui,"--n-clear-size":vi,"--n-clear-color":hi,"--n-clear-color-hover":pi,"--n-clear-color-pressed":fi,"--n-arrow-size":gi}}),be=He?Ne("internal-selection",_(()=>e.size[0]),Ue,e):void 0;return{mergedTheme:p,mergedClearable:m,patternInputFocused:h,filterablePlaceholder:k,label:g,selected:S,showTagsPanel:f,isComposing:x,counterRef:a,counterWrapperRef:s,patternInputMirrorRef:o,patternInputRef:t,selfRef:n,multipleElRef:r,singleElRef:l,patternInputWrapperRef:i,overflowRef:d,inputTagElRef:u,handleMouseDown:D,handleFocusin:C,handleClear:I,handleMouseEnter:y,handleMouseLeave:M,handleDeleteOption:F,handlePatternKeyDown:A,handlePatternInputInput:V,handlePatternInputBlur:Me,handlePatternInputFocus:Re,handleMouseEnterCounter:Je,handleMouseLeaveCounter:Qe,handleFocusout:w,handleCompositionEnd:Ce,handleCompositionStart:le,onPopoverUpdateShow:eo,focus:ee,focusInput:ye,blur:ke,blurInput:he,updateCounter:Be,getCounter:Se,getTail:Ze,renderLabel:e.renderLabel,cssVars:He?void 0:Ue,themeClass:be==null?void 0:be.themeClass,onRender:be==null?void 0:be.onRender}},render(){const{status:e,multiple:o,size:t,disabled:n,filterable:r,maxTagCount:l,bordered:i,clsPrefix:a,onRender:s,renderTag:d,renderLabel:u}=this;s==null||s();const f=l==="responsive",h=typeof l=="number",b=f||h,p=c(na,null,{default:()=>c(va,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var k,g;return(g=(k=this.$slots).arrow)===null||g===void 0?void 0:g.call(k)}})});let m;if(o){const{labelField:k}=this,g=C=>c("div",{class:`${a}-base-selection-tag-wrapper`,key:C.value},d?d({option:C,handleClose:()=>{this.handleDeleteOption(C)}}):c(so,{size:t,closable:!C.disabled,disabled:n,onClose:()=>{this.handleDeleteOption(C)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>u?u(C,!0):$e(C[k],C,!0)})),S=()=>(h?this.selectedOptions.slice(0,l):this.selectedOptions).map(g),H=r?c("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:n,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,z=f?()=>c("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c(so,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:n})):void 0;let O;if(h){const C=this.selectedOptions.length-l;C>0&&(O=c("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},c(so,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:n},{default:()=>`+${C}`})))}const L=f?r?c(Do,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:S,counter:z,tail:()=>H}):c(Do,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:S,counter:z}):h?S().concat(O):S(),R=b?()=>c("div",{class:`${a}-base-selection-popover`},f?S():this.selectedOptions.map(g)):void 0,K=b?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,B=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,j=r?c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},L,f?null:H,p):c("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:n?void 0:0},L,p);m=c(yt,null,b?c(uo,Object.assign({},K,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>j,default:R}):j,B)}else if(r){const k=this.pattern||this.isComposing,g=this.active?!k:!this.selected,S=this.active?!1:this.selected;m=c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:n,disabled:n,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),S?c("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},c("div",{class:`${a}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):u?u(this.selectedOption,!0):$e(this.label,this.selectedOption,!0))):null,g?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else m=c("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${a}-base-selection-input`,title:cr(this.label),key:"input"},c("div",{class:`${a}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):u?u(this.selectedOption,!0):$e(this.label,this.selectedOption,!0))):c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),p);return c("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},m,i?c("div",{class:`${a}-base-selection__border`}):null,i?c("div",{class:`${a}-base-selection__state-border`}):null)}});function mo(e){return e.type==="group"}function Sn(e){return e.type==="ignored"}function Zo(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}Rt=function(e,o){return{getIsGroup:mo,getIgnored:Sn,getKey(t){return mo(t)?t.name||t.key||"key-required":t[e]},getChildren(t){return t[o]}}};function Yl(e,o,t,n){if(!o)return e;function r(l){if(!Array.isArray(l))return[];const i=[];for(const a of l)if(mo(a)){const s=r(a[n]);s.length&&i.push(Object.assign({},a,{[n]:s}))}else{if(Sn(a))continue;o(t,a)&&i.push(a)}return i}return r(e)}function Xl(e,o,t){const n=new Map;return e.forEach(r=>{mo(r)?r[t].forEach(l=>{n.set(l[o],l)}):n.set(r[o],r)}),n}let zn,$n,On,Jo,Pn,Rn,yo,qe,Qo;zn=oe([W("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),W("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[vt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),$n=Object.assign(Object.assign({},se.props),{to:xe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),sr=ne({name:"Select",props:$n,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:t,namespaceRef:n,inlineThemeDisabled:r}=Ke(e),l=se("Select","-select",zn,la,e,o),i=E(e.defaultValue),a=Q(e,"value"),s=To(a,i),d=E(!1),u=E(""),f=_(()=>{const{valueField:v,childrenField:T}=e,G=Rt(v,T);return _o(w.value,G)}),h=_(()=>Xl(j.value,e.valueField,e.childrenField)),b=E(!1),p=To(Q(e,"show"),b),m=E(null),k=E(null),g=E(null),{localeRef:S}=lr("Select"),H=_(()=>{var v;return(v=e.placeholder)!==null&&v!==void 0?v:S.value.placeholder}),z=Io(e,["items","options"]),O=[],L=E([]),R=E([]),K=E(new Map),B=_(()=>{const{fallbackOption:v}=e;if(v===void 0){const{labelField:T,valueField:G}=e;return J=>({[T]:String(J),[G]:J})}return v===!1?!1:T=>Object.assign(v(T),{value:T})}),j=_(()=>R.value.concat(L.value).concat(z.value)),C=_(()=>{const{filter:v}=e;if(v)return v;const{labelField:T,valueField:G}=e;return(J,X)=>{if(!X)return!1;const q=X[T];if(typeof q=="string")return Zo(J,q);const Z=X[G];return typeof Z=="string"?Zo(J,Z):typeof Z=="number"?Zo(J,String(Z)):!1}}),w=_(()=>{if(e.remote)return z.value;{const{value:v}=j,{value:T}=u;return!T.length||!e.filterable?v:Yl(v,C.value,T,e.childrenField)}});function I(v){const T=e.remote,{value:G}=K,{value:J}=h,{value:X}=B,q=[];return v.forEach(Z=>{if(J.has(Z))q.push(J.get(Z));else if(T&&G.has(Z))q.push(G.get(Z));else if(X){const de=X(Z);de&&q.push(de)}}),q}const y=_(()=>{if(e.multiple){const{value:v}=s;return Array.isArray(v)?I(v):[]}return null}),M=_(()=>{const{value:v}=s;return!e.multiple&&!Array.isArray(v)?v===null?null:I([v])[0]||null:null}),D=ra(e),{mergedSizeRef:F,mergedDisabledRef:A,mergedStatusRef:x}=D;function $(v,T){const{onChange:G,"onUpdate:value":J,onUpdateValue:X}=e,{nTriggerFormChange:q,nTriggerFormInput:Z}=D;G&&ue(G,v,T),X&&ue(X,v,T),J&&ue(J,v,T),i.value=v,q(),Z()}function V(v){const{onBlur:T}=e,{nTriggerFormBlur:G}=D;T&&ue(T,v),G()}function le(){const{onClear:v}=e;v&&ue(v)}function Ce(v){const{onFocus:T,showOnFocus:G}=e,{nTriggerFormFocus:J}=D;T&&ue(T,v),J(),G&&ye()}function Re(v){const{onSearch:T}=e;T&&ue(T,v)}function Me(v){const{onScroll:T}=e;T&&ue(T,v)}function ke(){var v;const{remote:T,multiple:G}=e;if(T){const{value:J}=K;if(G){const{valueField:X}=e;(v=y.value)===null||v===void 0||v.forEach(q=>{J.set(q[X],q)})}else{const X=M.value;X&&J.set(X[e.valueField],X)}}}function ee(v){const{onUpdateShow:T,"onUpdate:show":G}=e;T&&ue(T,v),G&&ue(G,v),b.value=v}function ye(){A.value||(ee(!0),b.value=!0,e.filterable&&ko())}function he(){ee(!1)}function Be(){u.value="",R.value=O}const Se=E(!1);function Ze(){e.filterable&&(Se.value=!0)}function je(){e.filterable&&(Se.value=!1,p.value||Be())}function De(){A.value||(p.value?e.filterable?ko():he():ye())}function Je(v){var T,G;!((G=(T=g.value)===null||T===void 0?void 0:T.selfRef)===null||G===void 0)&&G.contains(v.relatedTarget)||(d.value=!1,V(v),he())}function Qe(v){Ce(v),d.value=!0}function eo(v){d.value=!0}function He(v){var T;!((T=m.value)===null||T===void 0)&&T.$el.contains(v.relatedTarget)||(d.value=!1,V(v),he())}function Ue(){var v;(v=m.value)===null||v===void 0||v.focus(),he()}function be(v){var T;p.value&&(!((T=m.value)===null||T===void 0)&&T.$el.contains(mt(v))||he())}function P(v){if(!Array.isArray(v))return[];if(B.value)return Array.from(v);{const{remote:T}=e,{value:G}=h;if(T){const{value:J}=K;return v.filter(X=>G.has(X)||J.has(X))}else return v.filter(J=>G.has(J))}}function N(v){ie(v.rawNode)}function ie(v){if(A.value)return;const{tag:T,remote:G,clearFilterAfterSelect:J,valueField:X}=e;if(T&&!G){const{value:q}=R,Z=q[0]||null;if(Z){const de=L.value;de.length?de.push(Z):L.value=[Z],R.value=O}}if(G&&K.value.set(v[X],v),e.multiple){const q=P(s.value),Z=q.findIndex(de=>de===v[X]);if(~Z){if(q.splice(Z,1),T&&!G){const de=wo(v[X]);~de&&(L.value.splice(de,1),J&&(u.value=""))}}else q.push(v[X]),J&&(u.value="");$(q,I(q))}else{if(T&&!G){const q=wo(v[X]);~q?L.value=[L.value[q]]:L.value=O}Co(),he(),$(v[X],v)}}function wo(v){return L.value.findIndex(T=>T[e.valueField]===v)}function nt(v){p.value||ye();const{value:T}=v.target;u.value=T;const{tag:G,remote:J}=e;if(Re(T),G&&!J){if(!T){R.value=O;return}const{onCreate:X}=e,q=X?X(T):{[e.labelField]:T,[e.valueField]:T},{valueField:Z}=e;z.value.some(de=>de[Z]===q[Z])||L.value.some(de=>de[Z]===q[Z])?R.value=O:R.value=[q]}}function rt(v){v.stopPropagation();const{multiple:T}=e;!T&&e.filterable&&he(),le(),T?$([],[]):$(null,null)}function lt(v){!Ee(v,"action")&&!Ee(v,"empty")&&v.preventDefault()}function it(v){Me(v)}function xo(v){var T,G,J,X,q;if(!e.keyboard){v.preventDefault();return}switch(v.key){case" ":if(e.filterable)break;v.preventDefault();case"Enter":if(!(!((T=m.value)===null||T===void 0)&&T.isComposing)){if(p.value){const Z=(G=g.value)===null||G===void 0?void 0:G.getPendingTmNode();Z?N(Z):e.filterable||(he(),Co())}else if(ye(),e.tag&&Se.value){const Z=R.value[0];if(Z){const de=Z[e.valueField],{value:zo}=s;e.multiple&&Array.isArray(zo)&&zo.some(dt=>dt===de)||ie(Z)}}}v.preventDefault();break;case"ArrowUp":if(v.preventDefault(),e.loading)return;p.value&&((J=g.value)===null||J===void 0||J.prev());break;case"ArrowDown":if(v.preventDefault(),e.loading)return;p.value?(X=g.value)===null||X===void 0||X.next():ye();break;case"Escape":p.value&&(ia(v),he()),(q=m.value)===null||q===void 0||q.focus();break}}function Co(){var v;(v=m.value)===null||v===void 0||v.focus()}function ko(){var v;(v=m.value)===null||v===void 0||v.focusInput()}function at(){var v;p.value&&((v=k.value)===null||v===void 0||v.syncPosition())}ke(),pe(Q(e,"options"),ke);const st={focus:()=>{var v;(v=m.value)===null||v===void 0||v.focus()},blur:()=>{var v;(v=m.value)===null||v===void 0||v.blur()}},So=_(()=>{const{self:{menuBoxShadow:v}}=l.value;return{"--n-menu-box-shadow":v}}),Ie=r?Ne("select",void 0,So,e):void 0;return Object.assign(Object.assign({},st),{mergedStatus:x,mergedClsPrefix:o,mergedBordered:t,namespace:n,treeMate:f,isMounted:pt(),triggerRef:m,menuRef:g,pattern:u,uncontrolledShow:b,mergedShow:p,adjustedTo:xe(e),uncontrolledValue:i,mergedValue:s,followerRef:k,localizedPlaceholder:H,selectedOption:M,selectedOptions:y,mergedSize:F,mergedDisabled:A,focused:d,activeWithoutMenuOpen:Se,inlineThemeDisabled:r,onTriggerInputFocus:Ze,onTriggerInputBlur:je,handleTriggerOrMenuResize:at,handleMenuFocus:eo,handleMenuBlur:He,handleMenuTabOut:Ue,handleTriggerClick:De,handleToggle:N,handleDeleteOption:ie,handlePatternInput:nt,handleClear:rt,handleTriggerBlur:Je,handleTriggerFocus:Qe,handleKeydown:xo,handleMenuAfterLeave:Be,handleMenuClickOutside:be,handleMenuScroll:it,handleMenuKeydown:xo,handleMenuMousedown:lt,mergedTheme:l,cssVars:r?void 0:So,themeClass:Ie==null?void 0:Ie.themeClass,onRender:Ie==null?void 0:Ie.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(ro,null,{default:()=>[c(lo,null,{default:()=>c(kn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,o;return[(o=(e=this.$slots).arrow)===null||o===void 0?void 0:o.call(e)]}})}),c(ao,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===xe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(Mo,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,o,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),oo(c(Pt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(o=this.menuProps)===null||o===void 0?void 0:o.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var n,r;return[(r=(n=this.$slots).empty)===null||r===void 0?void 0:r.call(n)]},action:()=>{var n,r;return[(r=(n=this.$slots).action)===null||r===void 0?void 0:r.call(n)]}}),this.displayDirective==="show"?[[Zn,this.mergedShow],[Fo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Fo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),On=Object.assign(Object.assign({},Ye),se.props),ar=ne({name:"Tooltip",props:On,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=Ke(e),t=se("Tooltip","-tooltip",void 0,aa,e,o),n=E(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(r){n.value.setShow(r)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:_(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return c(uo,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Jo=ne({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Pn=W("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[Y("color-transition",{transition:"color .3s var(--n-bezier)"}),Y("depth",{color:"var(--n-color)"},[oe("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),oe("svg",{height:"1em",width:"1em"})]),Rn=Object.assign(Object.assign({},se.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),$t=ne({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Rn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Ke(e),n=se("Icon","-icon",Pn,sa,e,o),r=_(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:a},self:s}=n.value;if(i!==void 0){const{color:d,[`opacity${i}Depth`]:u}=s;return{"--n-bezier":a,"--n-color":d,"--n-opacity":u}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),l=t?Ne("icon",_(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:_(()=>{const{size:i,color:a}=e;return{fontSize:Bo(i),color:a}}),cssVars:t?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:n,component:r,onRender:l,themeClass:i}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&nr("icon","don't wrap `n-icon` inside `n-icon`"),l==null||l(),c("i",to(this.$attrs,{role:"img",class:[`${n}-icon`,i,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?c(r):this.$slots)}}),yo=Ge("n-dropdown-menu"),qe=Ge("n-dropdown"),Qo=Ge("n-dropdown-option");function et(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function ql(e){return e.type==="group"}function Mn(e){return e.type==="divider"}function Zl(e){return e.type==="render"}let ot,Fn,Tn,Bn,tt,In,_n,An,Nn;ot=ne({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=ce(qe),{hoverKeyRef:t,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:l,activeKeyPathRef:i,animatedRef:a,mergedShowRef:s,renderLabelRef:d,renderIconRef:u,labelFieldRef:f,childrenFieldRef:h,renderOptionRef:b,nodePropsRef:p,menuPropsRef:m}=o,k=ce(Qo,null),g=ce(yo),S=ce($o),H=_(()=>e.tmNode.rawNode),z=_(()=>{const{value:F}=h;return et(e.tmNode.rawNode,F)}),O=_(()=>{const{disabled:F}=e.tmNode;return F}),L=_(()=>{if(!z.value)return!1;const{key:F,disabled:A}=e.tmNode;if(A)return!1;const{value:x}=t,{value:$}=n,{value:V}=r,{value:le}=l;return x!==null?le.includes(F):$!==null?le.includes(F)&&le[le.length-1]!==F:V!==null?le.includes(F):!1}),R=_(()=>n.value===null&&!a.value),K=hr(L,300,R),B=_(()=>!!(k!=null&&k.enteringSubmenuRef.value)),j=E(!1);fe(Qo,{enteringSubmenuRef:j});function C(){j.value=!0}function w(){j.value=!1}function I(){const{parentKey:F,tmNode:A}=e;A.disabled||s.value&&(r.value=F,n.value=null,t.value=A.key)}function y(){const{tmNode:F}=e;F.disabled||s.value&&t.value!==F.key&&I()}function M(F){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:A}=F;A&&!Ee({target:A},"dropdownOption")&&!Ee({target:A},"scrollbarRail")&&(t.value=null)}function D(){const{value:F}=z,{tmNode:A}=e;s.value&&!F&&!A.disabled&&(o.doSelect(A.key,A.rawNode),o.doUpdateShow(!1))}return{labelField:f,renderLabel:d,renderIcon:u,siblingHasIcon:g.showIconRef,siblingHasSubmenu:g.hasSubmenuRef,menuProps:m,popoverBody:S,animated:a,mergedShowSubmenu:_(()=>K.value&&!B.value),rawNode:H,hasSubmenu:z,pending:ve(()=>{const{value:F}=l,{key:A}=e.tmNode;return F.includes(A)}),childActive:ve(()=>{const{value:F}=i,{key:A}=e.tmNode,x=F.findIndex($=>A===$);return x===-1?!1:x<F.length-1}),active:ve(()=>{const{value:F}=i,{key:A}=e.tmNode,x=F.findIndex($=>A===$);return x===-1?!1:x===F.length-1}),mergedDisabled:O,renderOption:b,nodeProps:p,handleClick:D,handleMouseMove:y,handleMouseEnter:I,handleMouseLeave:M,handleSubmenuBeforeEnter:C,handleSubmenuAfterEnter:w}},render(){var e,o;const{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:l,siblingHasIcon:i,siblingHasSubmenu:a,renderLabel:s,renderIcon:d,renderOption:u,nodeProps:f,props:h,scrollable:b}=this;let p=null;if(r){const S=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);p=c(tt,Object.assign({},S,{clsPrefix:l,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const m={class:[`${l}-dropdown-option-body`,this.pending&&`${l}-dropdown-option-body--pending`,this.active&&`${l}-dropdown-option-body--active`,this.childActive&&`${l}-dropdown-option-body--child-active`,this.mergedDisabled&&`${l}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=f==null?void 0:f(n),g=c("div",Object.assign({class:[`${l}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),c("div",to(m,h),[c("div",{class:[`${l}-dropdown-option-body__prefix`,i&&`${l}-dropdown-option-body__prefix--show-icon`]},[d?d(n):$e(n.icon)]),c("div",{"data-dropdown-option":!0,class:`${l}-dropdown-option-body__label`},s?s(n):$e((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),c("div",{"data-dropdown-option":!0,class:[`${l}-dropdown-option-body__suffix`,a&&`${l}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c($t,null,{default:()=>c(xt,null)}):null)]),this.hasSubmenu?c(ro,null,{default:()=>[c(lo,null,{default:()=>c("div",{class:`${l}-dropdown-offset-container`},c(ao,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>c("div",{class:`${l}-dropdown-menu-wrapper`},t?c(Mo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return u?u({node:g,option:n}):g}}),Fn=ne({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=ce(yo),{renderLabelRef:t,labelFieldRef:n,nodePropsRef:r,renderOptionRef:l}=ce(qe);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:r,renderOption:l}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:l,renderOption:i}=this,{rawNode:a}=this.tmNode,s=c("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(a)),c("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},$e(a.icon)),c("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},l?l(a):$e((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),c("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return i?i({node:s,option:a}):s}}),Tn=ne({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:n}=e;return c(yt,null,c(Fn,{clsPrefix:t,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:l}=r;return l.show===!1?null:Mn(l)?c(Jo,{clsPrefix:t,key:r.key}):r.isGroup?(nr("dropdown","`group` node is not allowed to be put in `group` node."),null):c(ot,{clsPrefix:t,tmNode:r,parentKey:o,key:r.key})}))}}),Bn=ne({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return c("div",o,[e==null?void 0:e()])}}),tt=ne({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=ce(qe);fe(yo,{showIconRef:_(()=>{const r=o.value;return e.tmNodes.some(l=>{var i;if(l.isGroup)return(i=l.children)===null||i===void 0?void 0:i.some(({rawNode:s})=>r?r(s):s.icon);const{rawNode:a}=l;return r?r(a):a.icon})}),hasSubmenuRef:_(()=>{const{value:r}=t;return e.tmNodes.some(l=>{var i;if(l.isGroup)return(i=l.children)===null||i===void 0?void 0:i.some(({rawNode:s})=>et(s,r));const{rawNode:a}=l;return et(a,r)})})});const n=E(null);return fe(ct,null),fe(ut,null),fe($o,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,n=this.tmNodes.map(r=>{const{rawNode:l}=r;return l.show===!1?null:Zl(l)?c(Bn,{tmNode:r,key:r.key}):Mn(l)?c(Jo,{clsPrefix:o,key:r.key}):ql(l)?c(Tn,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):c(ot,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:l.props,scrollable:t})});return c("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?c(Qn,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?pn({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),In=W("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[vt(),W("dropdown-option",`
 position: relative;
 `,[oe("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[oe("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),W("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[oe("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),me("disabled",[Y("pending",`
 color: var(--n-option-text-color-hover);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),oe("&::before","background-color: var(--n-option-color-hover);")]),Y("active",`
 color: var(--n-option-text-color-active);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),oe("&::before","background-color: var(--n-option-color-active);")]),Y("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),Y("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),Y("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[U("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[Y("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),U("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[Y("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),W("icon",`
 font-size: var(--n-option-icon-size);
 `)]),U("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),U("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[Y("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),W("icon",`
 font-size: var(--n-option-icon-size);
 `)]),W("dropdown-menu","pointer-events: all;")]),W("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),W("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),W("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),oe(">",[W("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),me("scrollable",`
 padding: var(--n-padding);
 `),Y("scrollable",[U("content",`
 padding: var(--n-padding);
 `)])]),_n={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},An=Object.keys(Ye),Nn=Object.assign(Object.assign(Object.assign({},Ye),_n),se.props),dr=ne({name:"Dropdown",inheritAttrs:!1,props:Nn,setup(e){const o=E(!1),t=To(Q(e,"show"),o),n=_(()=>{const{keyField:w,childrenField:I}=e;return _o(e.options,{getKey(y){return y[w]},getDisabled(y){return y.disabled===!0},getIgnored(y){return y.type==="divider"||y.type==="render"},getChildren(y){return y[I]}})}),r=_(()=>n.value.treeNodes),l=E(null),i=E(null),a=E(null),s=_(()=>{var w,I,y;return(y=(I=(w=l.value)!==null&&w!==void 0?w:i.value)!==null&&I!==void 0?I:a.value)!==null&&y!==void 0?y:null}),d=_(()=>n.value.getPath(s.value).keyPath),u=_(()=>n.value.getPath(e.value).keyPath),f=ve(()=>e.keyboard&&t.value);pr({keydown:{ArrowUp:{prevent:!0,handler:O},ArrowRight:{prevent:!0,handler:z},ArrowDown:{prevent:!0,handler:L},ArrowLeft:{prevent:!0,handler:H},Enter:{prevent:!0,handler:R},Escape:S}},f);const{mergedClsPrefixRef:h,inlineThemeDisabled:b}=Ke(e),p=se("Dropdown","-dropdown",In,da,e,h);fe(qe,{labelFieldRef:Q(e,"labelField"),childrenFieldRef:Q(e,"childrenField"),renderLabelRef:Q(e,"renderLabel"),renderIconRef:Q(e,"renderIcon"),hoverKeyRef:l,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:d,activeKeyPathRef:u,animatedRef:Q(e,"animated"),mergedShowRef:t,nodePropsRef:Q(e,"nodeProps"),renderOptionRef:Q(e,"renderOption"),menuPropsRef:Q(e,"menuProps"),doSelect:m,doUpdateShow:k}),pe(t,w=>{!e.animated&&!w&&g()});function m(w,I){const{onSelect:y}=e;y&&ue(y,w,I)}function k(w){const{"onUpdate:show":I,onUpdateShow:y}=e;I&&ue(I,w),y&&ue(y,w),o.value=w}function g(){l.value=null,i.value=null,a.value=null}function S(){k(!1)}function H(){B("left")}function z(){B("right")}function O(){B("up")}function L(){B("down")}function R(){const w=K();w!=null&&w.isLeaf&&t.value&&(m(w.key,w.rawNode),k(!1))}function K(){var w;const{value:I}=n,{value:y}=s;return!I||y===null?null:(w=I.getNode(y))!==null&&w!==void 0?w:null}function B(w){const{value:I}=s,{value:{getFirstAvailableNode:y}}=n;let M=null;if(I===null){const D=y();D!==null&&(M=D.key)}else{const D=K();if(D){let F;switch(w){case"down":F=D.getNext();break;case"up":F=D.getPrev();break;case"right":F=D.getChild();break;case"left":F=D.getParent();break}F&&(M=F.key)}}M!==null&&(l.value=null,i.value=M)}const j=_(()=>{const{size:w,inverted:I}=e,{common:{cubicBezierEaseInOut:y},self:M}=p.value,{padding:D,dividerColor:F,borderRadius:A,optionOpacityDisabled:x,[te("optionIconSuffixWidth",w)]:$,[te("optionSuffixWidth",w)]:V,[te("optionIconPrefixWidth",w)]:le,[te("optionPrefixWidth",w)]:Ce,[te("fontSize",w)]:Re,[te("optionHeight",w)]:Me,[te("optionIconSize",w)]:ke}=M,ee={"--n-bezier":y,"--n-font-size":Re,"--n-padding":D,"--n-border-radius":A,"--n-option-height":Me,"--n-option-prefix-width":Ce,"--n-option-icon-prefix-width":le,"--n-option-suffix-width":V,"--n-option-icon-suffix-width":$,"--n-option-icon-size":ke,"--n-divider-color":F,"--n-option-opacity-disabled":x};return I?(ee["--n-color"]=M.colorInverted,ee["--n-option-color-hover"]=M.optionColorHoverInverted,ee["--n-option-color-active"]=M.optionColorActiveInverted,ee["--n-option-text-color"]=M.optionTextColorInverted,ee["--n-option-text-color-hover"]=M.optionTextColorHoverInverted,ee["--n-option-text-color-active"]=M.optionTextColorActiveInverted,ee["--n-option-text-color-child-active"]=M.optionTextColorChildActiveInverted,ee["--n-prefix-color"]=M.prefixColorInverted,ee["--n-suffix-color"]=M.suffixColorInverted,ee["--n-group-header-text-color"]=M.groupHeaderTextColorInverted):(ee["--n-color"]=M.color,ee["--n-option-color-hover"]=M.optionColorHover,ee["--n-option-color-active"]=M.optionColorActive,ee["--n-option-text-color"]=M.optionTextColor,ee["--n-option-text-color-hover"]=M.optionTextColorHover,ee["--n-option-text-color-active"]=M.optionTextColorActive,ee["--n-option-text-color-child-active"]=M.optionTextColorChildActive,ee["--n-prefix-color"]=M.prefixColor,ee["--n-suffix-color"]=M.suffixColor,ee["--n-group-header-text-color"]=M.groupHeaderTextColor),ee}),C=b?Ne("dropdown",_(()=>`${e.size[0]}${e.inverted?"i":""}`),j,e):void 0;return{mergedClsPrefix:h,mergedTheme:p,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&g()},doUpdateShow:k,cssVars:b?void 0:j,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const e=(n,r,l,i,a)=>{var s;const{mergedClsPrefix:d,menuProps:u}=this;(s=this.onRender)===null||s===void 0||s.call(this);const f=(u==null?void 0:u(void 0,this.tmNodes.map(b=>b.rawNode)))||{},h={ref:Mt(r),class:[n,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[l,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:a};return c(tt,to(this.$attrs,h,f))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(uo,Object.assign({},or(this.$props,An),t),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}})});export{xt as C,Ct as N,ro as V,ar as _,ya as __tla,Oe as a,lo as b,io as c,ao as d,Io as e,sr as f,dr as g,Ee as h,_o as i,kt as j,St as k,zt as l,$t as m,so as n,Ot as o,Pt as p,Rt as q,Mt as r,co as s,uo as t,xe as u,Ye as v};
