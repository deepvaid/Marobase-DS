import{g as s}from"./iframe-Acq_KjEe.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/VTextField",component:s,tags:["autodocs"],argTypes:{label:{control:"text",description:"Sets the input label",table:{category:"Props",type:{summary:"string"}}},placeholder:{control:"text",description:"Sets the input placeholder",table:{category:"Props",type:{summary:"string"}}},hint:{control:"text",description:"Hint text",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["filled","outlined","plain","underlined","solo","solo-inverted","solo-filled"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},baseColor:{control:"text",description:"Sets the color of text fields when not focused",table:{category:"Styles",type:{summary:"string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},loading:{control:"boolean",description:"Displays linear progress bar",table:{category:"Props",type:{summary:"boolean"}}},clearable:{control:"boolean",description:"Adds a clear icon when input has value",table:{category:"Props",type:{summary:"boolean"}}},errorMessages:{control:"text",description:"Puts the input in an error state and passes through custom error messages",table:{category:"Props",type:{summary:"string | array"}}},modelValue:{control:"text",description:"The v-model value of the component",table:{category:"Model",type:{summary:"any"}}}}},e=l=>({components:{VTextField:s},setup(){return{args:l}},template:'<v-text-field v-bind="args" />'}),r={render:e,args:{label:"Label",placeholder:"Placeholder",color:"primary",variant:"outlined"}},t={render:e,args:{label:"Filled",variant:"filled",color:"primary"}},o={render:e,args:{label:"Underlined",variant:"underlined",color:"primary"}},a={render:e,args:{label:"Compact",density:"compact",variant:"outlined"}},n={render:e,args:{label:"Error",color:"error",variant:"outlined",errorMessages:"This field is required"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    color: 'primary',
    variant: 'outlined'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Filled',
    variant: 'filled',
    color: 'primary'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Underlined',
    variant: 'underlined',
    color: 'primary'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Compact',
    density: 'compact',
    variant: 'outlined'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Error',
    color: 'error',
    variant: 'outlined',
    errorMessages: 'This field is required'
  }
}`,...n.parameters?.docs?.source}}};const p=["Default","Filled","Underlined","Compact","ErrorState"];export{a as Compact,r as Default,n as ErrorState,t as Filled,o as Underlined,p as __namedExportsOrder,d as default};
