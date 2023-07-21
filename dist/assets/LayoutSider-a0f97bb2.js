import{by as ao,k as no,bz as io,bA as D,c as a,n as y,F as co,d as O,s as P,r as B,g as V,E as H,bB as U,p as C,y as q,h as c,ae as X,f as n,e as z,N as bo,I as uo,t as G,a4 as R,__tla as go}from"./index-2c8f1a32.js";import{C as ho,__tla as po}from"./Dropdown-b9507282.js";import{p as J,l as vo,__tla as fo}from"./Menu-5758de85.js";import{f as E,__tla as mo}from"./use-houdini-1f4096eb.js";import{u as yo,__tla as xo}from"./use-merged-state-05139191.js";let K,Q,Co=Promise.all([(()=>{try{return go}catch{}})(),(()=>{try{return po}catch{}})(),(()=>{try{return fo}catch{}})(),(()=>{try{return mo}catch{}})(),(()=>{try{return xo}catch{}})()]).then(async()=>{const Z=o=>{const{baseColor:e,textColor2:t,bodyColor:d,cardColor:p,dividerColor:u,actionColor:x,scrollbarColor:S,scrollbarColorHover:v,invertedColor:g}=o;return{textColor:t,textColorInverted:"#FFF",color:d,colorEmbedded:x,headerColor:p,headerColorInverted:g,footerColor:x,footerColorInverted:g,headerBorderColor:u,headerBorderColorInverted:g,footerBorderColor:u,footerBorderColorInverted:g,siderBorderColor:u,siderBorderColorInverted:g,siderColor:p,siderColorInverted:g,siderToggleButtonBorder:`1px solid ${u}`,siderToggleButtonColor:e,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:D(d,S),siderToggleBarColorHover:D(d,v),__invertScrollbar:"true"}},oo=ao({name:"Layout",common:no,peers:{Scrollbar:io},self:Z}),F=oo,eo=a("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[a("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ro={embedded:Boolean,position:J,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},L=co("n-layout");function to(o){return O({name:o?"LayoutContent":"Layout",props:Object.assign(Object.assign({},P.props),ro),setup(e){const t=B(null),d=B(null),{mergedClsPrefixRef:p,inlineThemeDisabled:u}=V(e),x=P("Layout","-layout",eo,F,e,p);function S(i,b){if(e.nativeScrollbar){const{value:h}=t;h&&(b===void 0?h.scrollTo(i):h.scrollTo(i,b))}else{const{value:h}=d;h&&h.scrollTo(i,b)}}H(L,e);let v=0,g=0;const j=i=>{var b;const h=i.target;v=h.scrollLeft,g=h.scrollTop,(b=e.onScroll)===null||b===void 0||b.call(e,i)};U(()=>{if(e.nativeScrollbar){const i=t.value;i&&(i.scrollTop=g,i.scrollLeft=v)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},k={scrollTo:S},$=C(()=>{const{common:{cubicBezierEaseInOut:i},self:b}=x.value;return{"--n-bezier":i,"--n-color":e.embedded?b.colorEmbedded:b.color,"--n-text-color":b.textColor}}),m=u?q("layout",C(()=>e.embedded?"e":""),$,e):void 0;return Object.assign({mergedClsPrefix:p,scrollableElRef:t,scrollbarInstRef:d,hasSiderStyle:w,mergedTheme:x,handleNativeElScroll:j,cssVars:u?void 0:$,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender},k)},render(){var e;const{mergedClsPrefix:t,hasSider:d}=this;(e=this.onRender)===null||e===void 0||e.call(this);const p=d?this.hasSiderStyle:void 0,u=[this.themeClass,o&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return c("div",{class:u,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,p],onScroll:this.handleNativeElScroll},this.$slots):c(X,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,p]}),this.$slots))}})}let Y,A,N,W;Q=to(!1),Y=a("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[y("bordered",[n("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),n("left-placement",[y("bordered",[n("border",`
 right: 0;
 `)])]),y("right-placement",`
 justify-content: flex-start;
 `,[y("bordered",[n("border",`
 left: 0;
 `)]),y("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[z("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[z("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),y("collapsed",[a("layout-toggle-bar",[z("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
 transform: rotate(0);
 `)])]),a("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[a("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[n("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),n("bottom",`
 position: absolute;
 top: 34px;
 `),z("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),z("&:hover",[n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),n("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),a("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),y("show-content",[a("layout-sider-scroll-container",{opacity:1})]),y("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),A=O({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:o}=this;return c("div",{class:`${o}-layout-toggle-button`,onClick:this.onClick},c(bo,{clsPrefix:o},{default:()=>c(ho,null)}))}}),N=O({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:o}=this;return c("div",{onClick:this.onClick,class:`${o}-layout-toggle-bar`},c("div",{class:`${o}-layout-toggle-bar__top`}),c("div",{class:`${o}-layout-toggle-bar__bottom`}))}}),W={position:J,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},K=O({name:"LayoutSider",props:Object.assign(Object.assign({},P.props),W),setup(o){const e=uo(L),t=B(null),d=B(null),p=C(()=>E(v.value?o.collapsedWidth:o.width)),u=C(()=>o.collapseMode!=="transform"?{}:{minWidth:E(o.width)}),x=C(()=>e?e.siderPlacement:"left"),S=B(o.defaultCollapsed),v=yo(G(o,"collapsed"),S);function g(s,r){if(o.nativeScrollbar){const{value:l}=t;l&&(r===void 0?l.scrollTo(s):l.scrollTo(s,r))}else{const{value:l}=d;l&&l.scrollTo(s,r)}}function j(){const{"onUpdate:collapsed":s,onUpdateCollapsed:r,onExpand:l,onCollapse:I}=o,{value:_}=v;r&&R(r,!_),s&&R(s,!_),S.value=!_,_?l&&R(l):I&&R(I)}let w=0,k=0;const $=s=>{var r;const l=s.target;w=l.scrollLeft,k=l.scrollTop,(r=o.onScroll)===null||r===void 0||r.call(o,s)};U(()=>{if(o.nativeScrollbar){const s=t.value;s&&(s.scrollTop=k,s.scrollLeft=w)}}),H(vo,{collapsedRef:v,collapseModeRef:G(o,"collapseMode")});const{mergedClsPrefixRef:m,inlineThemeDisabled:i}=V(o),b=P("Layout","-layout-sider",Y,F,o,m);function h(s){var r,l;s.propertyName==="max-width"&&(v.value?(r=o.onAfterLeave)===null||r===void 0||r.call(o):(l=o.onAfterEnter)===null||l===void 0||l.call(o))}const lo={scrollTo:g},M=C(()=>{const{common:{cubicBezierEaseInOut:s},self:r}=b.value,{siderToggleButtonColor:l,siderToggleButtonBorder:I,siderToggleBarColor:_,siderToggleBarColorHover:so}=r,f={"--n-bezier":s,"--n-toggle-button-color":l,"--n-toggle-button-border":I,"--n-toggle-bar-color":_,"--n-toggle-bar-color-hover":so};return o.inverted?(f["--n-color"]=r.siderColorInverted,f["--n-text-color"]=r.textColorInverted,f["--n-border-color"]=r.siderBorderColorInverted,f["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColorInverted,f.__invertScrollbar=r.__invertScrollbar):(f["--n-color"]=r.siderColor,f["--n-text-color"]=r.textColor,f["--n-border-color"]=r.siderBorderColor,f["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColor),f}),T=i?q("layout-sider",C(()=>o.inverted?"a":"b"),M,o):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:d,mergedClsPrefix:m,mergedTheme:b,styleMaxWidth:p,mergedCollapsed:v,scrollContainerStyle:u,siderPlacement:x,handleNativeElScroll:$,handleTransitionend:h,handleTriggerClick:j,inlineThemeDisabled:i,cssVars:M,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},lo)},render(){var o;const{mergedClsPrefix:e,mergedCollapsed:t,showTrigger:d}=this;return(o=this.onRender)===null||o===void 0||o.call(this),c("aside",{class:[`${e}-layout-sider`,this.themeClass,`${e}-layout-sider--${this.position}-positioned`,`${e}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${e}-layout-sider--bordered`,t&&`${e}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${e}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:E(this.width)}]},this.nativeScrollbar?c("div",{class:`${e}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(X,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),d?d==="bar"?c(N,{clsPrefix:e,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(A,{clsPrefix:e,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${e}-layout-sider__border`}):null)}})});export{K as _,Co as __tla,Q as a};
