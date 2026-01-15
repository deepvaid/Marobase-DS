import{c as a}from"./iframe-DfNwA3r1.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Components/VCheckbox",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Sets the label",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},indeterminate:{control:"boolean",description:"Sets an indeterminate state for the checkbox",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"boolean",description:"The v-model value of the component",table:{category:"Model",type:{summary:"any"}}}}},o=n=>({components:{VCheckbox:a},setup(){return{args:n}},template:'<v-checkbox v-bind="args" />'}),e={render:o,args:{label:"Checkbox Label",color:"primary"}},t={render:o,args:{label:"Indeterminate Checkbox",color:"primary",indeterminate:!0}},r={render:o,args:{label:"Compact Checkbox",density:"compact",color:"primary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Checkbox Label',
    color: 'primary'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Indeterminate Checkbox',
    color: 'primary',
    indeterminate: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Compact Checkbox',
    density: 'compact',
    color: 'primary'
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","Indeterminate","Density"];export{e as Default,r as Density,t as Indeterminate,m as __namedExportsOrder,l as default};
