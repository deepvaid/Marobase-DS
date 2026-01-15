import{c as m,f as i,g as d,m as u,k as y,o as b,w as g,r as h,n as f,i as k}from"./iframe-D3WsbN1i.js";import"./preload-helper-PPVm8Dsz.js";const a={__name:"AppCheckbox",props:{color:{type:String,default:"primary"},modelValue:[Boolean,Array]},emits:["update:modelValue"],setup(r){return(e,n)=>(b(),m(y,u(e.$attrs,{color:r.color,"onUpdate:modelValue":n[0]||(n[0]=s=>e.$emit("update:modelValue",s))}),i({_:2},[d(e.$slots,(s,l)=>({name:l,fn:g(c=>[h(e.$slots,l,f(k(c)))])}))]),1040,["color"]))}};a.__docgenInfo={exportName:"default",displayName:"AppCheckbox",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"boolean|array"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppCheckbox.vue"]};const v={title:"Components/AppCheckbox",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Sets the label",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},indeterminate:{control:"boolean",description:"Sets an indeterminate state for the checkbox",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"boolean",description:"The v-model value of the component",table:{category:"Model",type:{summary:"any"}}}}},p=r=>({components:{AppCheckbox:a},setup(){return{args:r}},template:'<AppCheckbox v-bind="args" />'}),o={render:p,args:{label:"Checkbox Label",color:"primary"}},t={render:p,args:{label:"Indeterminate Checkbox",color:"primary",indeterminate:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Checkbox Label',
    color: 'primary'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Indeterminate Checkbox',
    color: 'primary',
    indeterminate: true
  }
}`,...t.parameters?.docs?.source}}};const A=["Default","Indeterminate"];export{o as Default,t as Indeterminate,A as __namedExportsOrder,v as default};
