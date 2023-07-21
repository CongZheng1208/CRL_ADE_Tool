import{h as t,d as O,g as L,_ as Y,r as P,p as B,E as xe,t as M,F as pe,a4 as n,e as u,c as a,f as C,n as T,bv as ge,gY as me,gZ as ye,I as Ce,bq as we,s as q,a7 as ze,y as Re,gC as Se,bo as _e,S as De,hR as Ae,a0 as G,__tla as Te}from"./index-2c8f1a32.js";import{u as W,__tla as $e}from"./use-merged-state-05139191.js";let Z,J,Fe=Promise.all([(()=>{try{return Te}catch{}})(),(()=>{try{return $e}catch{}})()]).then(async()=>{let N,K,I,E,H,j;N=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),K=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),I=pe("n-checkbox-group"),E={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},J=O({name:"CheckboxGroup",props:E,setup(o){const{mergedClsPrefixRef:p}=L(o),g=Y(o),{mergedSizeRef:w,mergedDisabledRef:S}=g,s=P(o.defaultValue),z=B(()=>o.value),b=W(z,s),l=B(()=>{var h;return((h=b.value)===null||h===void 0?void 0:h.length)||0}),c=B(()=>Array.isArray(b.value)?new Set(b.value):new Set);function $(h,r){const{nTriggerFormInput:m,nTriggerFormChange:y}=g,{onChange:k,"onUpdate:value":v,onUpdateValue:f}=o;if(Array.isArray(b.value)){const i=Array.from(b.value),F=i.findIndex(V=>V===r);h?~F||(i.push(r),f&&n(f,i,{actionType:"check",value:r}),v&&n(v,i,{actionType:"check",value:r}),m(),y(),s.value=i,k&&n(k,i)):~F&&(i.splice(F,1),f&&n(f,i,{actionType:"uncheck",value:r}),v&&n(v,i,{actionType:"uncheck",value:r}),k&&n(k,i),s.value=i,m(),y())}else h?(f&&n(f,[r],{actionType:"check",value:r}),v&&n(v,[r],{actionType:"check",value:r}),k&&n(k,[r]),s.value=[r],m(),y()):(f&&n(f,[],{actionType:"uncheck",value:r}),v&&n(v,[],{actionType:"uncheck",value:r}),k&&n(k,[]),s.value=[],m(),y())}return xe(I,{checkedCountRef:l,maxRef:M(o,"max"),minRef:M(o,"min"),valueSetRef:c,disabledRef:S,mergedSizeRef:w,toggleCheckbox:$}),{mergedClsPrefix:p}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),H=u([a("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[u("&:hover",[a("checkbox-box",[C("border",{border:"var(--n-border-checked)"})])]),u("&:focus:not(:active)",[a("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),T("inside-table",[a("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),T("checked",[a("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[a("checkbox-icon",[u(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("indeterminate",[a("checkbox-box",[a("checkbox-icon",[u(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),u(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("checked, indeterminate",[u("&:focus:not(:active)",[a("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),a("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),T("disabled",{cursor:"not-allowed"},[T("checked",[a("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),a("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),a("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",{border:"var(--n-border-disabled)"}),a("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),C("label",{color:"var(--n-text-color-disabled)"})]),a("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),a("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[C("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),a("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[u(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ge({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[u("&:empty",{display:"none"})])]),me(a("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ye(a("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),j=Object.assign(Object.assign({},q.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Z=O({name:"Checkbox",props:j,setup(o){const p=P(null),{mergedClsPrefixRef:g,inlineThemeDisabled:w,mergedRtlRef:S}=L(o),s=Y(o,{mergedSize(e){const{size:x}=o;if(x!==void 0)return x;if(l){const{value:d}=l.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:x}=o;if(x!==void 0)return x;if(l){if(l.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:R}=l;if(d!==void 0&&R.value>=d&&!r.value)return!0;const{minRef:{value:D}}=l;if(D!==void 0&&R.value<=D&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:z,mergedSizeRef:b}=s,l=Ce(I,null),c=P(o.defaultChecked),$=M(o,"checked"),h=W($,c),r=we(()=>{if(l){const e=l.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return h.value===o.checkedValue}),m=q("Checkbox","-checkbox",H,Ae,o,g);function y(e){if(l&&o.value!==void 0)l.toggleCheckbox(!r.value,o.value);else{const{onChange:x,"onUpdate:checked":d,onUpdateChecked:R}=o,{nTriggerFormInput:D,nTriggerFormChange:U}=s,A=r.value?o.uncheckedValue:o.checkedValue;d&&n(d,A,e),R&&n(R,A,e),x&&n(x,A,e),D(),U(),c.value=A}}function k(e){z.value||y(e)}function v(e){if(!z.value)switch(e.key){case" ":case"Enter":y(e)}}function f(e){switch(e.key){case" ":e.preventDefault()}}const i={focus:()=>{var e;(e=p.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=p.value)===null||e===void 0||e.blur()}},F=ze("Checkbox",S,g),V=B(()=>{const{value:e}=b,{common:{cubicBezierEaseInOut:x},self:{borderRadius:d,color:R,colorChecked:D,colorDisabled:U,colorTableHeader:A,colorTableHeaderModal:Q,colorTableHeaderPopover:X,checkMarkColor:ee,checkMarkColorDisabled:oe,border:re,borderFocus:ae,borderDisabled:ce,borderChecked:le,boxShadowFocus:ne,textColor:ie,textColorDisabled:de,checkMarkColorDisabledChecked:te,colorDisabledChecked:se,borderDisabledChecked:be,labelPadding:ue,labelLineHeight:he,labelFontWeight:ke,[G("fontSize",e)]:ve,[G("size",e)]:fe}}=m.value;return{"--n-label-line-height":he,"--n-label-font-weight":ke,"--n-size":fe,"--n-bezier":x,"--n-border-radius":d,"--n-border":re,"--n-border-checked":le,"--n-border-focus":ae,"--n-border-disabled":ce,"--n-border-disabled-checked":be,"--n-box-shadow-focus":ne,"--n-color":R,"--n-color-checked":D,"--n-color-table":A,"--n-color-table-modal":Q,"--n-color-table-popover":X,"--n-color-disabled":U,"--n-color-disabled-checked":se,"--n-text-color":ie,"--n-text-color-disabled":de,"--n-check-mark-color":ee,"--n-check-mark-color-disabled":oe,"--n-check-mark-color-disabled-checked":te,"--n-font-size":ve,"--n-label-padding":ue}}),_=w?Re("checkbox",B(()=>b.value[0]),V,o):void 0;return Object.assign(s,i,{rtlEnabled:F,selfRef:p,mergedClsPrefix:g,mergedDisabled:z,renderedChecked:r,mergedTheme:m,labelId:Se(),handleClick:k,handleKeyUp:v,handleKeyDown:f,cssVars:w?void 0:V,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender})},render(){var o;const{$slots:p,renderedChecked:g,mergedDisabled:w,indeterminate:S,privateInsideTable:s,cssVars:z,labelId:b,label:l,mergedClsPrefix:c,focusable:$,handleKeyUp:h,handleKeyDown:r,handleClick:m}=this;return(o=this.onRender)===null||o===void 0||o.call(this),t("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,g&&`${c}-checkbox--checked`,w&&`${c}-checkbox--disabled`,S&&`${c}-checkbox--indeterminate`,s&&`${c}-checkbox--inside-table`],tabindex:w||!$?void 0:0,role:"checkbox","aria-checked":S?"mixed":g,"aria-labelledby":b,style:z,onKeyup:h,onKeydown:r,onClick:m,onMousedown:()=>{De("selectstart",window,y=>{y.preventDefault()},{once:!0})}},t("div",{class:`${c}-checkbox-box-wrapper`},"\xA0",t("div",{class:`${c}-checkbox-box`},t(_e,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${c}-checkbox-icon`},K):t("div",{key:"check",class:`${c}-checkbox-icon`},N)}),t("div",{class:`${c}-checkbox-box__border`}))),l!==null||p.default?t("span",{class:`${c}-checkbox__label`,id:b},p.default?p.default():l):null)}})});export{Z as _,Fe as __tla,J as a};
