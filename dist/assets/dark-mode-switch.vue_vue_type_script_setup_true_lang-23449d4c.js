import{c as T,aq as u,f as s,n as a,d as $,g as H,s as k,gK as L,p as y,y as S,h,an as j,aC as v,aD as p,aE as C,aF as M,__tla as F}from"./index-2c8f1a32.js";let z,P,W=Promise.all([(()=>{try{return F}catch{}})()]).then(async()=>{let g,x,f,b,w;g=T("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[u("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[u("no-title",`
 display: flex;
 align-items: center;
 `)]),s("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),a("title-position-left",[s("line",[a("left",{width:"28px"})])]),a("title-position-right",[s("line",[a("right",{width:"28px"})])]),a("dashed",[s("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),a("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),s("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),u("dashed",[s("line",{backgroundColor:"var(--n-color)"})]),a("dashed",[s("line",{borderColor:"var(--n-color)"})]),a("vertical",{backgroundColor:"var(--n-color)"})]),x=Object.assign(Object.assign({},k.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),z=$({name:"Divider",props:x,setup(r){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=H(r),t=k("Divider","-divider",g,L,r,n),d=y(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:l,textColor:c,fontWeight:m}}=t.value;return{"--n-bezier":e,"--n-color":l,"--n-text-color":c,"--n-font-weight":m}}),i=o?S("divider",void 0,d,r):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var r;const{$slots:n,titlePlacement:o,vertical:t,dashed:d,cssVars:i,mergedClsPrefix:e}=this;return(r=this.onRender)===null||r===void 0||r.call(this),h("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:t,[`${e}-divider--no-title`]:!n.default,[`${e}-divider--dashed`]:d,[`${e}-divider--title-position-${o}`]:n.default&&o}],style:i},t?null:h("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!t&&n.default?h(j,null,h("div",{class:`${e}-divider__title`},this.$slots),h("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),f={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},b=C("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),w=[b];function B(r,n){return v(),p("svg",f,w)}const D={name:"mdi-moon-waning-crescent",render:B},E={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},R=C("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),V=[R];function O(r,n){return v(),p("svg",E,V)}let _;_={name:"mdi-white-balance-sunny",render:O},P=$({name:"DarkModeSwitch",__name:"dark-mode-switch",props:{dark:{type:Boolean,default:!1}},emits:["update:dark"],setup(r,{emit:n}){const o=r,t=y({get(){return o.dark},set(i){n("update:dark",i)}});function d(i){const e=i.clientX,l=i.clientY,c=Math.hypot(Math.max(e,innerWidth-e),Math.max(l,innerHeight-l));if(!document.startViewTransition){t.value=!t.value;return}document.startViewTransition(()=>{t.value=!t.value}).ready.then(()=>{const m=[`circle(0px at ${e}px ${l}px)`,`circle(${c}px at ${e}px ${l}px)`];document.documentElement.animate({clipPath:t.value?m:[...m].reverse()},{duration:300,easing:"ease-in",pseudoElement:t.value?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(i,e)=>{const l=D,c=_;return v(),p("div",{class:"flex-center text-18px cursor-pointer",onClick:d},[t.value?(v(),M(l,{key:0})):(v(),M(c,{key:1}))])}}})});export{z as _,W as __tla,P as a};
