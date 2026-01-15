import{c,f as m,g as d,m as u,G as y,o as g,w as b,r as h,n as S,i as f}from"./iframe-D3WsbN1i.js";import"./preload-helper-PPVm8Dsz.js";const a={__name:"AppSwitch",props:{color:{type:String,default:"primary"},modelValue:[Boolean,Array]},emits:["update:modelValue"],setup(r){return(e,s)=>(g(),c(y,u(e.$attrs,{color:r.color,"onUpdate:modelValue":s[0]||(s[0]=n=>e.$emit("update:modelValue",n))}),m({_:2},[d(e.$slots,(n,l)=>({name:l,fn:b(i=>[h(e.$slots,l,S(f(i)))])}))]),1040,["color"]))}};a.__docgenInfo={exportName:"default",displayName:"AppSwitch",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"boolean|array"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppSwitch.vue"]};const A={title:"Components/AppSwitch",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Sets the label",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},inset:{control:"boolean",description:"Applies the inset style",table:{category:"Styles",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},loading:{control:"boolean",description:"Displays linear progress bar",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"boolean",description:"The v-model value of the component",table:{category:"Model",type:{summary:"any"}}}}},p=r=>({components:{AppSwitch:a},setup(){return{args:r}},template:'<AppSwitch v-bind="args" />'}),t={render:p,args:{label:"Switch Label",color:"primary"}},o={render:p,args:{label:"Inset Switch",color:"primary",inset:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Switch Label',
    color: 'primary'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Inset Switch',
    color: 'primary',
    inset: true
  }
}`,...o.parameters?.docs?.source}}};const V=["Default","Inset"];export{t as Default,o as Inset,V as __namedExportsOrder,A as default};
