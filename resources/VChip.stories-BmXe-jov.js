import{d as n}from"./iframe-DfNwA3r1.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/VChip",component:n,tags:["autodocs"],argTypes:{default:{control:"text",description:"The content of the chip",table:{category:"Slots",type:{summary:"html"}},defaultValue:"Chip Content"},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["elevated","flat","tonal","outlined","text","plain"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},size:{control:"select",options:["x-small","small","default","large","x-large"],description:"Sets the height and width of the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},closable:{control:"boolean",description:"Adds a close icon",table:{category:"Props",type:{summary:"boolean"}}},draggable:{control:"boolean",description:"Makes the chip draggable",table:{category:"Props",type:{summary:"boolean"}}},filter:{control:"boolean",description:"Displays a selection icon when selected",table:{category:"Props",type:{summary:"boolean"}}},link:{control:"boolean",description:"Designates that the component is a link",table:{category:"Props",type:{summary:"boolean"}}},pill:{control:"boolean",description:"Removes the chip padding",table:{category:"Props",type:{summary:"boolean"}}},ripple:{control:"boolean",description:"Applies the v-ripple directive",table:{category:"Props",type:{summary:"boolean"}}}}},a=l=>({components:{VChip:n},setup(){return{args:l}},template:'<v-chip v-bind="args">{{ args.default }}</v-chip>'}),e={render:a,args:{default:"Chip Label",color:"primary",variant:"tonal"}},t={render:a,args:{default:"Closable Chip",color:"secondary",variant:"tonal",closable:!0}},o={render:a,args:{default:"Filter Chip",color:"primary",filter:!0}},r={render:a,args:{default:"Outlined Chip",variant:"outlined",color:"primary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip Label',
    color: 'primary',
    variant: 'tonal'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Closable Chip',
    color: 'secondary',
    variant: 'tonal',
    closable: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Filter Chip',
    color: 'primary',
    filter: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Outlined Chip',
    variant: 'outlined',
    color: 'primary'
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","Closable","Filter","Outlined"];export{t as Closable,e as Default,o as Filter,r as Outlined,p as __namedExportsOrder,c as default};
