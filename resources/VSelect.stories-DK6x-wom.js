import{s as l}from"./iframe-DfNwA3r1.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/VSelect",component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"Sets the input label",table:{category:"Props",type:{summary:"string"}}},items:{control:"object",description:"Can be an array of objects or strings",table:{category:"Props",type:{summary:"array"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["filled","outlined","plain","underlined","solo","solo-inverted","solo-filled"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},multiple:{control:"boolean",description:"Changes select to multiple. Accepts array for value",table:{category:"Props",type:{summary:"boolean"}}},chips:{control:"boolean",description:"Changes display of selections to chips",table:{category:"Props",type:{summary:"boolean"}}},clearable:{control:"boolean",description:"Adds a clear icon when input has value",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"object",description:"The v-model value of the component",table:{category:"Model",type:{summary:"any"}}}}},r=["Item 1","Item 2","Item 3","Item 4"],a=s=>({components:{VSelect:l},setup(){return{args:s}},template:'<v-select v-bind="args" />'}),e={render:a,args:{label:"Select Item",items:r,color:"primary",variant:"outlined"}},t={render:a,args:{label:"Select Multiple",items:r,color:"primary",variant:"outlined",multiple:!0,chips:!0}},o={render:a,args:{label:"Filled Select",items:r,variant:"filled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Select Item',
    items,
    color: 'primary',
    variant: 'outlined'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Select Multiple',
    items,
    color: 'primary',
    variant: 'outlined',
    multiple: true,
    chips: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Filled Select',
    items,
    variant: 'filled'
  }
}`,...o.parameters?.docs?.source}}};const p=["Default","Multiple","Filled"];export{e as Default,o as Filled,t as Multiple,p as __namedExportsOrder,i as default};
