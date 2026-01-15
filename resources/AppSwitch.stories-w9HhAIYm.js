import{u as s}from"./iframe-B12PdS1D.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/VSwitch",component:s,tags:["autodocs"],argTypes:{label:{control:"text",description:"Sets the label",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},inset:{control:"boolean",description:"Applies the inset style",table:{category:"Styles",type:{summary:"boolean"}}},flat:{control:"boolean",description:"Removes the shadow",table:{category:"Styles",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},loading:{control:"boolean",description:"Displays linear progress bar",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"boolean",description:"The v-model value of the component",table:{category:"Model",type:{summary:"any"}}}}},r=a=>({components:{VSwitch:s},setup(){return{args:a}},template:'<v-switch v-bind="args" />'}),e={render:r,args:{label:"Switch Label",color:"primary"}},t={render:r,args:{label:"Inset Switch",color:"primary",inset:!0}},o={render:r,args:{label:"Success Switch",color:"success",modelValue:!0,inset:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Switch Label',
    color: 'primary'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Inset Switch',
    color: 'primary',
    inset: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Success Switch',
    color: 'success',
    modelValue: true,
    inset: true
  }
}`,...o.parameters?.docs?.source}}};const i=["Default","Inset","Color"];export{o as Color,e as Default,t as Inset,i as __namedExportsOrder,c as default};
