import{j as e}from"./jsx-runtime-BnIj46N_.js";import{f as L}from"./index-2ywIqtt-.js";import{r as n}from"./index-CsdIBAqE.js";function I({onChange:l,status:a,size:g,rangeValue:o,min:r,max:u,step:c}){const[b,d]=n.useState(0),h=n.useRef(),m=n.useRef(),[S,y]=n.useState();function x(){const i=Math.floor((o-r)/(u-r)*100);d(i)}function p(){const i=h.current.offsetWidth,f=m.current.offsetWidth,s=(o-r)/(u-r)*100/100*(i-f);s<=0?y(0):y(s)}function R(i){const{value:f}=i.target;l(+f),p()}return n.useEffect(()=>{x(),p()},[o]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"slider-container",children:[e.jsx("input",{ref:h,type:"range",className:`slider slider-size-${g} slider-${a}`,min:r,max:u,value:o,onChange:R,step:c}),e.jsx("div",{className:`thumb thumb-size-${g}`,ref:m,style:{transform:`translateX(${S}px)`}}),e.jsx("div",{className:"tooltip",style:{transform:`translateX(${S}px)`},children:o||0}),e.jsx("div",{style:{width:b+"%"},className:"progress-bar"})]})})}I.__docgenInfo={description:"",methods:[],displayName:"ContinousSlider"};function z({min:l,max:a,onChange:g,step:o=1,size:r,status:u}){const[c,b]=n.useState(l),[d,h]=n.useState(a),[m,S]=n.useState(),[y,x]=n.useState(),p=n.useRef(null),R=n.useRef(null),i=n.useRef(null);function f(t){return Math.floor((t-l)/(a-l)*100)}return n.useEffect(()=>{const t=f(c),s=f(d);i.current.style.left=t+"%",i.current.style.width=`${s-t}%`;const N=p.current.offsetWidth,v=Math.floor(t/100*N);S(v)},[c]),n.useEffect(()=>{const t=f(c),s=f(d);i.current.style.right=s+"%",i.current.style.width=`${s-t}%`;const N=R.current.offsetWidth,v=Math.floor(s/100*N);x(v)},[d]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"slider-container",children:[e.jsx("input",{ref:p,type:"range",className:`left-thumb  multi-thumb slider thumb-zindex-3 slider-size-${r} slider-${u}`,min:l,max:a,value:c,step:o,onChange:t=>{if(t.target.value<a){const s=Math.min(t.target.value,d-1);b(s)}}}),e.jsx("input",{step:o,ref:R,type:"range",className:`right-thumb multi-thumb slider thumb-zindex-4 slider-size-${r} slider-${u}`,min:l,max:a,value:d,onChange:t=>{if(t.target.value>c){const s=Math.max(+t.target.value,c+1);h(s)}}}),e.jsx("div",{className:"left-tooltip ",style:{left:`${m}px`},children:c}),e.jsx("div",{className:"right-tooltip ",style:{left:`${y}px`},children:d}),e.jsx("div",{ref:i,className:"multi-slider-track"})]})})}z.__docgenInfo={description:"",methods:[],displayName:"RangeSlider",props:{step:{defaultValue:{value:"1",computed:!1},required:!1}}};function O({onChange:l,status:a,size:g,rangeValue:o,min:r,max:u,step:c}){const[b,d]=n.useState(0),h=n.useRef(),m=n.useRef(),S=n.useRef(),[y,x]=n.useState();let p=0;function R(){const t=Math.floor((o-r)/(u-r)*100);d(t)}if(m.current){const t=u-r,s=c/t;p=Math.floor(s*h.current.offsetWidth)-2}function i(){const t=h.current.offsetWidth,s=m.current.offsetWidth,v=(o-r)/(u-r)*100/100*(t-s);v<=0?x(0):x(v)}function f(t){const{value:s}=t.target;l(+s),i()}return n.useEffect(()=>{R(),i()},[o]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"slider-container",children:[e.jsx("input",{ref:h,type:"range",className:`slider slider-size-${g} slider-${a}`,min:r,max:u,value:o,onChange:f,step:c}),e.jsx("div",{className:`thumb thumb-size-${g}`,ref:m,style:{transform:`translateX(${y}px)`}}),e.jsx("div",{className:"tooltip",style:{transform:`translateX(${y}px)`},children:o||0}),e.jsx("div",{className:"discrete-slider",ref:S,children:Array(Math.floor(u/c)).fill("").map((t,s)=>e.jsx("div",{className:`slider-dot ${y>p*s?"slider-dot-white":null}`,style:{left:`${p*s}px`}},s))}),e.jsx("div",{style:{width:b+"%"},className:"progress-bar"})]})})}O.__docgenInfo={description:"",methods:[],displayName:"DiscreteSlider"};function V({type:l,...a}){switch(l){case"Continuous":return e.jsx(I,{...a});case"Discrete":return e.jsx(O,{...a});case"Range":return e.jsx(z,{...a});default:throw new Error("Invalid Slider type")}}V.__docgenInfo={description:"",methods:[],displayName:"Slider"};const{useArgs:X}=__STORYBOOK_MODULE_PREVIEW_API__,K={title:"Components/Slider",component:V,tags:["autodocs"],parameters:{layout:"centered"},args:{onChange:L()},argTypes:{type:{control:{type:"radio"},options:["Continuous","Discrete","Range"]},status:{type:{control:{type:"radio"}},options:["default","hover","focus"]},size:{type:{control:{type:"radio"}},options:["24","32"]}}},$=l=>{const[{rangeValue:a},g]=X(0);function o(r){g({rangeValue:r})}return e.jsx(V,{...l,onChange:o,rangeValue:a})},j=$.bind({});j.args={type:"Continuous",min:0,max:100,step:1};const C=$.bind({});C.args={type:"Discrete",min:0,max:100,step:10};const w=$.bind({});w.args={type:"Range",min:0,max:100,step:1};var _,P,T;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [{
    rangeValue
  }, updateArgs] = useArgs(0);
  function onChange(newValue) {
    updateArgs({
      rangeValue: newValue
    });
  }
  return <Slider {...args} onChange={onChange} rangeValue={rangeValue} />;
}`,...(T=(P=j.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var W,A,M;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [{
    rangeValue
  }, updateArgs] = useArgs(0);
  function onChange(newValue) {
    updateArgs({
      rangeValue: newValue
    });
  }
  return <Slider {...args} onChange={onChange} rangeValue={rangeValue} />;
}`,...(M=(A=C.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var B,E,D;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [{
    rangeValue
  }, updateArgs] = useArgs(0);
  function onChange(newValue) {
    updateArgs({
      rangeValue: newValue
    });
  }
  return <Slider {...args} onChange={onChange} rangeValue={rangeValue} />;
}`,...(D=(E=w.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const U=["Continuous","Discrete","Range"];export{j as Continuous,C as Discrete,w as Range,U as __namedExportsOrder,K as default};
