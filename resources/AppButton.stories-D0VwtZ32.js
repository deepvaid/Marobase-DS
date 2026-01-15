import{_ as i}from"./AppButton-Dg3rFC23.js";import"./iframe-DhnUqBR_.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Components/AppButton",component:i,tags:["autodocs"],argTypes:{default:{control:"text",description:"The content of the button",table:{category:"Slots",type:{summary:"html"}},defaultValue:"Button"},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["text","flat","elevated","tonal","outlined","plain"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},size:{control:"select",options:["x-small","small","default","large","x-large"],description:"Sets the height and width of the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component between 0 and 24",table:{category:"Styles",type:{summary:"number | string"}}},block:{control:"boolean",description:"Expands the button to 100% of available space",table:{category:"Props",type:{summary:"boolean"}}},ripple:{control:"boolean",description:"Applies the v-ripple directive",table:{category:"Props",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},loading:{control:"boolean",description:"Displays linear progress bar",table:{category:"Props",type:{summary:"boolean"}}},onClick:{action:"click",description:"Emitted when the component is clicked",table:{category:"Events"}}}},e=p=>({components:{AppButton:i},setup(){return{args:p}},template:'<AppButton v-bind="args">{{ args.default }}</AppButton>'}),t={render:e,args:{color:"primary",variant:"elevated",default:"Primary Button"}},r={render:e,args:{color:"secondary",variant:"flat",default:"Secondary Button"}},o={render:e,args:{color:"primary",variant:"outlined",default:"Outlined Button"}},a={render:e,args:{color:"primary",variant:"text",default:"Text Button"}},n={render:e,args:{color:"primary",variant:"tonal",default:"Tonal Button"}},s={render:e,args:{color:"red",variant:"plain",default:"Plain Button"}},l={render:e,args:{color:"primary",rounded:"pill",default:"Rounded Button"}},c={render:e,args:{color:"primary",block:!0,default:"Block Button"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    color: 'primary',
    variant: 'elevated',
    default: 'Primary Button'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    color: 'secondary',
    variant: 'flat',
    default: 'Secondary Button'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    color: 'primary',
    variant: 'outlined',
    default: 'Outlined Button'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    color: 'primary',
    variant: 'text',
    default: 'Text Button'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    color: 'primary',
    variant: 'tonal',
    default: 'Tonal Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    color: 'red',
    variant: 'plain',
    default: 'Plain Button'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    color: 'primary',
    rounded: 'pill',
    default: 'Rounded Button'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    color: 'primary',
    block: true,
    default: 'Block Button'
  }
}`,...c.parameters?.docs?.source}}};const g=["Primary","Secondary","Outlined","Text","Tonal","Plain","Rounded","Block"];export{c as Block,o as Outlined,s as Plain,t as Primary,l as Rounded,r as Secondary,a as Text,n as Tonal,g as __namedExportsOrder,y as default};
