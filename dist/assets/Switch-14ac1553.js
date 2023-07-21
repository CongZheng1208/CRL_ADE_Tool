import{k as ve,gM as ge,gL as pe,c as W,f as t,bv as L,e as O,n as l,aq as H,d as fe,g as we,s as I,_ as me,r as P,t as ye,p as F,y as ke,gN as T,h as i,au as f,a0 as w,bs as A,gO as s,bo as xe,bp as _e,a4 as M,__tla as $e}from"./index-2c8f1a32.js";import{u as Ce,__tla as Se}from"./use-merged-state-05139191.js";let X,Be=Promise.all([(()=>{try{return $e}catch{}})(),(()=>{try{return Se}catch{}})()]).then(async()=>{const Y=e=>{const{primaryColor:d,opacityDisabled:v,borderRadius:n,textColor3:r}=e,m="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},ge),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:v,railColor:m,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${pe(d,{alpha:.2})}`})},q={name:"Switch",common:ve,self:Y},E=q,G=W("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),W("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[L({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),O("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),H("disabled",[H("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[O("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[O("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[L()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),J=Object.assign(Object.assign({},I.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let x;X=fe({name:"Switch",props:J,setup(e){x===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?x=CSS.supports("width","max(1px)"):x=!1:x=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:v}=we(e),n=I("Switch","-switch",G,E,e,d),r=me(e),{mergedSizeRef:m,mergedDisabledRef:g}=r,_=P(e.defaultValue),S=ye(e,"value"),p=Ce(S,_),$=F(()=>p.value===e.checkedValue),y=P(!1),o=P(!1),c=F(()=>{const{railStyle:a}=e;if(a)return a({focused:o.value,checked:$.value})});function u(a){const{"onUpdate:value":B,onChange:z,onUpdateValue:R}=e,{nTriggerFormInput:V,nTriggerFormChange:D}=r;B&&M(B,a),R&&M(R,a),z&&M(z,a),_.value=a,V(),D()}function Q(){const{nTriggerFormFocus:a}=r;a()}function Z(){const{nTriggerFormBlur:a}=r;a()}function ee(){e.loading||g.value||(p.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function te(){o.value=!0,Q()}function ae(){o.value=!1,Z(),y.value=!1}function oe(a){e.loading||g.value||a.key===" "&&(p.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),y.value=!1)}function ie(a){e.loading||g.value||a.key===" "&&(a.preventDefault(),y.value=!0)}const U=F(()=>{const{value:a}=m,{self:{opacityDisabled:B,railColor:z,railColorActive:R,buttonBoxShadow:V,buttonColor:D,boxShadowFocus:ne,loadingColor:re,textColor:le,iconColor:se,[w("buttonHeight",a)]:h,[w("buttonWidth",a)]:de,[w("buttonWidthPressed",a)]:ce,[w("railHeight",a)]:b,[w("railWidth",a)]:C,[w("railBorderRadius",a)]:ue,[w("buttonBorderRadius",a)]:he},common:{cubicBezierEaseInOut:be}}=n.value;let j,N,K;return x?(j=`calc((${b} - ${h}) / 2)`,N=`max(${b}, ${h})`,K=`max(${C}, calc(${C} + ${h} - ${b}))`):(j=A((s(b)-s(h))/2),N=A(Math.max(s(b),s(h))),K=s(b)>s(h)?C:A(s(C)+s(h)-s(b))),{"--n-bezier":be,"--n-button-border-radius":he,"--n-button-box-shadow":V,"--n-button-color":D,"--n-button-width":de,"--n-button-width-pressed":ce,"--n-button-height":h,"--n-height":N,"--n-offset":j,"--n-opacity-disabled":B,"--n-rail-border-radius":ue,"--n-rail-color":z,"--n-rail-color-active":R,"--n-rail-height":b,"--n-rail-width":C,"--n-width":K,"--n-box-shadow-focus":ne,"--n-loading-color":re,"--n-text-color":le,"--n-icon-color":se}}),k=v?ke("switch",F(()=>m.value[0]),U,e):void 0;return{handleClick:ee,handleBlur:ae,handleFocus:te,handleKeyup:oe,handleKeydown:ie,mergedRailStyle:c,pressed:y,mergedClsPrefix:d,mergedValue:p,checked:$,mergedDisabled:g,cssVars:v?void 0:U,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:v,mergedRailStyle:n,onRender:r,$slots:m}=this;r==null||r();const{checked:g,unchecked:_,icon:S,"checked-icon":p,"unchecked-icon":$}=m,y=!(T(S)&&T(p)&&T($));return i("div",{role:"switch","aria-checked":v,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,v&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},f(g,o=>f(_,c=>o||c?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),o),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),c)):null)),i("div",{class:`${e}-switch__button`},f(S,o=>f(p,c=>f($,u=>i(xe,null,{default:()=>this.loading?i(_e,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||o)?i("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||o):!this.checked&&(u||o)?i("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||o):null})))),f(g,o=>o&&i("div",{key:"checked",class:`${e}-switch__checked`},o)),f(_,o=>o&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}})});export{X as N,Be as __tla};
