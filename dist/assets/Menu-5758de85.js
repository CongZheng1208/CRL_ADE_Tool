import{d as R,h as u,F as V,I as k,p as b,E as M,ao as $,an as Pe,N as Re,r as J,bq as Q,bt as ke,bC as X,bD as Y,e as g,c as h,n as C,f as d,aq as D,bu as Fe,g as Te,s as ve,bE as Oe,w as me,t as ue,a4 as F,y as Ee,__tla as Le}from"./index-2c8f1a32.js";import{g as $e,_ as _e,i as Me,e as je,__tla as Ke}from"./Dropdown-b9507282.js";import{u as he,__tla as Be}from"./use-merged-state-05139191.js";let pe,ee,xe,Ve=Promise.all([(()=>{try{return Le}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Be}catch{}})()]).then(async()=>{let oe,T,j,K,q;oe=R({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),ee=V("n-layout-sider"),xe={type:String,default:"static"},T=V("n-menu"),j=V("n-submenu"),K=V("n-menu-item-group"),q=8;function U(e){const i=k(T),{props:r,mergedCollapsedRef:n}=i,l=k(j,null),a=k(K,null),s=b(()=>r.mode==="horizontal"),v=b(()=>s.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=b(()=>{var m;return Math.max((m=r.collapsedIconSize)!==null&&m!==void 0?m:r.iconSize,r.iconSize)}),w=b(()=>{var m;return!s.value&&e.root&&n.value&&(m=r.collapsedIconSize)!==null&&m!==void 0?m:r.iconSize}),H=b(()=>{if(s.value)return;const{collapsedWidth:m,indent:I,rootIndent:S}=r,{root:A,isGroup:N}=e,O=S===void 0?I:S;if(A)return n.value?m/2-c.value/2:O;if(a)return I/2+a.paddingLeftRef.value;if(l)return(N?I/2:I)+l.paddingLeftRef.value}),y=b(()=>{const{collapsedWidth:m,indent:I,rootIndent:S}=r,{value:A}=c,{root:N}=e;return s.value||!N||!n.value?q:(S===void 0?I:S)+A+q-(m+A)/2});return{dropdownPlacement:v,activeIconSize:w,maxIconSize:c,paddingLeft:H,iconMarginRight:y,NMenu:i,NSubmenu:l}}const G={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},te=Object.assign(Object.assign({},G),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ge=R({name:"MenuOptionGroup",props:te,setup(e){M(j,null);const i=U(e);M(K,{paddingLeftRef:i.paddingLeft});const{mergedClsPrefixRef:r,props:n}=k(T);return function(){const{value:l}=r,a=i.paddingLeft.value,{nodeProps:s}=n,v=s==null?void 0:s(e.tmNode.rawNode);return u("div",{class:`${l}-menu-item-group`,role:"group"},u("div",Object.assign({},v,{class:[`${l}-menu-item-group-title`,v==null?void 0:v.class],style:[(v==null?void 0:v.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),$(e.title),e.extra?u(Pe,null," ",$(e.extra)):null),u("div",null,e.tmNodes.map(c=>W(c,n))))}}}),re=R({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:i}=k(T);return{menuProps:i,style:b(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:b(()=>{const{maxIconSize:r,activeIconSize:n,iconMarginRight:l}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:i,menuProps:{renderIcon:r,renderLabel:n,renderExtra:l,expandIcon:a}}=this,s=r?r(i.rawNode):$(this.icon);return u("div",{onClick:v=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,v)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(i.rawNode):$(this.title),this.extra||l?u("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(i.rawNode):$(this.extra)):null),this.showArrow?u(Re,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(i.rawNode):u(oe,null)}):null)}}),ie=Object.assign(Object.assign({},G),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),fe=R({name:"Submenu",props:ie,setup(e){const i=U(e),{NMenu:r,NSubmenu:n}=i,{props:l,mergedCollapsedRef:a,mergedThemeRef:s}=r,v=b(()=>{const{disabled:m}=e;return n!=null&&n.mergedDisabledRef.value||l.disabled?!0:m}),c=J(!1);M(j,{paddingLeftRef:i.paddingLeft,mergedDisabledRef:v}),M(K,null);function w(){const{onClick:m}=e;m&&m()}function H(){v.value||(a.value||r.toggleExpand(e.internalKey),w())}function y(m){c.value=m}return{menuProps:l,mergedTheme:s,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,iconMarginRight:i.iconMarginRight,dropdownPlacement:i.dropdownPlacement,dropdownShow:c,paddingLeft:i.paddingLeft,mergedDisabled:v,mergedValue:r.mergedValueRef,childActive:Q(()=>r.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>l.mode==="horizontal"?!1:a.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!v.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:y,handleClick:H}},render(){var e;const{mergedClsPrefix:i,menuProps:{renderIcon:r,renderLabel:n}}=this,l=()=>{const{isHorizontal:s,paddingLeft:v,collapsed:c,mergedDisabled:w,maxIconSize:H,activeIconSize:y,title:m,childActive:I,icon:S,handleClick:A,menuProps:{nodeProps:N},dropdownShow:O,iconMarginRight:Z,tmNode:_,mergedClsPrefix:B}=this,E=N==null?void 0:N(_.rawNode);return u("div",Object.assign({},E,{class:[`${B}-menu-item`,E==null?void 0:E.class],role:"menuitem"}),u(re,{tmNode:_,paddingLeft:v,collapsed:c,disabled:w,iconMarginRight:Z,maxIconSize:H,activeIconSize:y,title:m,extra:this.extra,showArrow:!s,childActive:I,clsPrefix:B,icon:S,hover:O,onClick:A}))},a=()=>u(ke,null,{default:()=>{const{tmNodes:s,collapsed:v}=this;return v?null:u("div",{class:`${i}-submenu-children`,role:"menu"},s.map(c=>W(c,this.menuProps)))}});return this.root?u($e,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:n}),{default:()=>u("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):u("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),ne=Object.assign(Object.assign({},G),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),be=R({name:"MenuOption",props:ne,setup(e){const i=U(e),{NSubmenu:r,NMenu:n}=i,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:s}=n,v=r?r.mergedDisabledRef:{value:!1},c=b(()=>v.value||e.disabled);function w(y){const{onClick:m}=e;m&&m(y)}function H(y){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),w(y))}return{mergedClsPrefix:a,dropdownPlacement:i.dropdownPlacement,paddingLeft:i.paddingLeft,iconMarginRight:i.iconMarginRight,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:Q(()=>e.root&&s.value&&l.mode!=="horizontal"&&!c.value),selected:Q(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:H}},render(){const{mergedClsPrefix:e,mergedTheme:i,tmNode:r,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l==null?void 0:l(r.rawNode);return u("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),u(_e,{theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(r.rawNode):$(this.title),trigger:()=>u(re,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),ze=R({name:"MenuDivider",setup(){const e=k(T),{mergedClsPrefixRef:i,isHorizontalRef:r}=e;return()=>r.value?null:u("div",{class:`${i.value}-menu-divider`})}}),Ce=Y(te),ye=Y(ne),we=Y(ie);function le(e){return e.type==="divider"||e.type==="render"}function Ie(e){return e.type==="divider"}function W(e,i){const{rawNode:r}=e,{show:n}=r;if(n===!1)return null;if(le(r))return Ie(r)?u(ze,Object.assign({key:e.key},r.props)):null;const{labelField:l}=i,{key:a,level:s,isGroup:v}=e,c=Object.assign(Object.assign({},r),{title:r.title||r[l],extra:r.titleExtra||r.extra,key:a,internalKey:a,level:s,root:s===0,isGroup:v});return e.children?e.isGroup?u(ge,X(c,Ce,{tmNode:e,tmNodes:e.children,key:a})):u(fe,X(c,we,{key:a,rawNodes:r[i.childrenField],tmNodes:e.children,tmNode:e})):u(be,X(c,ye,{key:a,tmNode:e}))}const ae=[g("&::before","background-color: var(--n-item-color-hover);"),d("arrow",`
 color: var(--n-arrow-color-hover);
 `),d("icon",`
 color: var(--n-item-icon-color-hover);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[g("a",`
 color: var(--n-item-text-color-hover);
 `),d("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ce=[d("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),d("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Ae=g([h("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[C("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[h("submenu","margin: 0;"),h("menu-item","margin: 0;"),h("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[g("&::before","display: none;"),C("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),h("menu-item-content",[C("selected",[d("icon","color: var(--n-item-icon-color-active-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-horizontal);"),d("extra","color: var(--n-item-text-color-active-horizontal);")])]),C("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),d("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),d("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),D("disabled",[D("selected, child-active",[g("&:focus-within",ce)]),C("selected",[P(null,[d("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-hover-horizontal);"),d("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),C("child-active",[P(null,[d("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[g("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),d("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),P("border-bottom: 2px solid var(--n-border-color-horizontal);",ce)]),h("menu-item-content-header",[g("a","color: var(--n-item-text-color-horizontal);")])])]),C("collapsed",[h("menu-item-content",[C("selected",[g("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),h("menu-item-content-header","opacity: 0;"),d("arrow","opacity: 0;"),d("icon","color: var(--n-item-icon-color-collapsed);")])]),h("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),h("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("> *","z-index: 1;"),g("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),C("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),C("collapsed",[d("arrow","transform: rotate(0);")]),C("selected",[g("&::before","background-color: var(--n-item-color-active);"),d("arrow","color: var(--n-arrow-color-active);"),d("icon","color: var(--n-item-icon-color-active);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[g("a","color: var(--n-item-text-color-active);"),d("extra","color: var(--n-item-text-color-active);")])]),C("child-active",[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[g("a",`
 color: var(--n-item-text-color-child-active);
 `),d("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),d("arrow",`
 color: var(--n-arrow-color-child-active);
 `),d("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),D("disabled",[D("selected, child-active",[g("&:focus-within",ae)]),C("selected",[P(null,[d("arrow","color: var(--n-arrow-color-active-hover);"),d("icon","color: var(--n-item-icon-color-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[g("a","color: var(--n-item-text-color-active-hover);"),d("extra","color: var(--n-item-text-color-active-hover);")])])]),C("child-active",[P(null,[d("arrow","color: var(--n-arrow-color-child-active-hover);"),d("icon","color: var(--n-item-icon-color-child-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[g("a","color: var(--n-item-text-color-child-active-hover);"),d("extra","color: var(--n-item-text-color-child-active-hover);")])])]),C("selected",[P(null,[g("&::before","background-color: var(--n-item-color-active-hover);")])]),P(null,ae)]),d("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),d("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),h("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[g("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[g("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),d("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),h("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[h("menu-item-content",`
 height: var(--n-item-height);
 `),h("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Fe({duration:".2s"})])]),h("menu-item-group",[h("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),h("menu-tooltip",[g("a",`
 color: inherit;
 text-decoration: none;
 `)]),h("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function P(e,i){return[C("hover",e,i),g("&:hover",e,i)]}let de;de=Object.assign(Object.assign({},ve.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),pe=R({name:"Menu",props:de,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=Te(e),n=ve("Menu","-menu",Ae,Oe,e,i),l=k(ee,null),a=b(()=>{var x;const{collapsed:f}=e;if(f!==void 0)return f;if(l){const{collapseModeRef:o,collapsedRef:p}=l;if(o.value==="width")return(x=p.value)!==null&&x!==void 0?x:!1}return!1}),s=b(()=>{const{keyField:x,childrenField:f,disabledField:o}=e;return Me(e.items||e.options,{getIgnored(p){return le(p)},getChildren(p){return p[f]},getDisabled(p){return p[o]},getKey(p){var z;return(z=p[x])!==null&&z!==void 0?z:p.name}})}),v=b(()=>new Set(s.value.treeNodes.map(x=>x.key))),{watchProps:c}=e,w=J(null);c!=null&&c.includes("defaultValue")?me(()=>{w.value=e.defaultValue}):w.value=e.defaultValue;const H=ue(e,"value"),y=he(H,w),m=J([]),I=()=>{m.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(y.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?me(I):I();const S=je(e,["expandedNames","expandedKeys"]),A=he(S,m),N=b(()=>s.value.treeNodes),O=b(()=>s.value.getPath(y.value).keyPath);M(T,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:y,mergedExpandedKeysRef:A,activePathRef:O,mergedClsPrefixRef:i,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ue(e,"inverted"),doSelect:Z,toggleExpand:B});function Z(x,f){const{"onUpdate:value":o,onUpdateValue:p,onSelect:z}=e;p&&F(p,x,f),o&&F(o,x,f),z&&F(z,x,f),w.value=x}function _(x){const{"onUpdate:expandedKeys":f,onUpdateExpandedKeys:o,onExpandedNamesChange:p,onOpenNamesChange:z}=e;f&&F(f,x),o&&F(o,x),p&&F(p,x),z&&F(z,x),m.value=x}function B(x){const f=Array.from(A.value),o=f.findIndex(p=>p===x);if(~o)f.splice(o,1);else{if(e.accordion&&v.value.has(x)){const p=f.findIndex(z=>v.value.has(z));p>-1&&f.splice(p,1)}f.push(x)}_(f)}const E=x=>{const f=s.value.getPath(x??y.value,{includeSelf:!1}).keyPath;if(!f.length)return;const o=Array.from(A.value),p=new Set([...o,...f]);e.accordion&&v.value.forEach(z=>{p.has(z)&&!f.includes(z)&&p.delete(z)}),_(Array.from(p))},se=b(()=>{const{inverted:x}=e,{common:{cubicBezierEaseInOut:f},self:o}=n.value,{borderRadius:p,borderColorHorizontal:z,fontSize:Se,itemHeight:He,dividerColor:Ne}=o,t={"--n-divider-color":Ne,"--n-bezier":f,"--n-font-size":Se,"--n-border-color-horizontal":z,"--n-border-radius":p,"--n-item-height":He};return x?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),L=r?Ee("menu",b(()=>e.inverted?"a":"b"),se,e):void 0;return{mergedClsPrefix:i,controlledExpandedKeys:S,uncontrolledExpanededKeys:m,mergedExpandedKeys:A,uncontrolledValue:w,mergedValue:y,activePath:O,tmNodes:N,mergedTheme:n,mergedCollapsed:a,cssVars:r?void 0:se,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender,showOption:E}},render(){const{mergedClsPrefix:e,mode:i,themeClass:r,onRender:n}=this;return n==null||n(),u("div",{role:i==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${i}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>W(l,this.$props)))}})});export{pe as _,Ve as __tla,ee as l,xe as p};
