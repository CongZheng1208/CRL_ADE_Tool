import{c as n,f as r,d as w,g as R,s as b,a7 as P,p as T,y,h as s,au as o,hU as F,__tla as E}from"./index-2c8f1a32.js";let h,N=Promise.all([(()=>{try{return E}catch{}})()]).then(async()=>{let f,x;f=n("statistic",[r("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),n("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[r("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[n("icon",{verticalAlign:"-0.125em"})]),r("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),r("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[n("icon",{verticalAlign:"-0.125em"})])])]),x=Object.assign(Object.assign({},b.props),{tabularNums:Boolean,label:String,value:[String,Number]}),h=w({name:"Statistic",props:x,setup(a){const{mergedClsPrefixRef:e,inlineThemeDisabled:l,mergedRtlRef:c}=R(a),u=b("Statistic","-statistic",f,F,a,e),v=P("Statistic",c,e),t=T(()=>{const{self:{labelFontWeight:m,valueFontSize:g,valueFontWeight:d,valuePrefixTextColor:p,labelTextColor:z,valueSuffixTextColor:_,valueTextColor:C,labelFontSize:$},common:{cubicBezierEaseInOut:S}}=u.value;return{"--n-bezier":S,"--n-label-font-size":$,"--n-label-font-weight":m,"--n-label-text-color":z,"--n-value-font-weight":d,"--n-value-font-size":g,"--n-value-prefix-text-color":p,"--n-value-suffix-text-color":_,"--n-value-text-color":C}}),i=l?y("statistic",void 0,t,a):void 0;return{rtlEnabled:v,mergedClsPrefix:e,cssVars:l?void 0:t,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var a;const{mergedClsPrefix:e,$slots:{default:l,label:c,prefix:u,suffix:v}}=this;return(a=this.onRender)===null||a===void 0||a.call(this),s("div",{class:[`${e}-statistic`,this.themeClass,this.rtlEnabled&&`${e}-statistic--rtl`],style:this.cssVars},o(c,t=>s("div",{class:`${e}-statistic__label`},this.label||t)),s("div",{class:`${e}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},o(u,t=>t&&s("span",{class:`${e}-statistic-value__prefix`},t)),this.value!==void 0?s("span",{class:`${e}-statistic-value__content`},this.value):o(l,t=>t&&s("span",{class:`${e}-statistic-value__content`},t)),o(v,t=>t&&s("span",{class:`${e}-statistic-value__suffix`},t))))}})});export{h as _,N as __tla};
