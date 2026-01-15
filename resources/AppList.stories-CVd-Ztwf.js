import{o}from"./iframe-B12PdS1D.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Components/VList",component:o,tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of items to display in the list",table:{category:"Props",type:{summary:"array"}}},bgColor:{control:"text",description:"Applies specified color to the background",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},lines:{control:"select",options:["one","two","three",!1],description:"Control the number of lines in list items",table:{category:"Styles",type:{summary:"string | boolean"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},nav:{control:"boolean",description:"Styles list items for navigation",table:{category:"Props",type:{summary:"boolean"}}},selectStrategy:{control:"select",options:["single-leaf","independent","leaf","classic"],description:"Define the selection strategy",table:{category:"Props",type:{summary:"string"}}}}},s=[{title:"Item 1",subtitle:"Subtitle 1",value:1},{title:"Item 2",subtitle:"Subtitle 2",value:2},{title:"Item 3",subtitle:"Subtitle 3",value:3}],r=a=>({components:{VList:o},setup(){return{args:a}},template:'<v-card width="300"><v-list v-bind="args" :items="args.items" /></v-card>'}),e={render:r,args:{items:s,lines:"two",nav:!0}},t={render:r,args:{items:s,density:"compact",nav:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    lines: 'two',
    nav: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    density: 'compact',
    nav: true
  }
}`,...t.parameters?.docs?.source}}};const c=["Default","Dense"];export{e as Default,t as Dense,c as __namedExportsOrder,l as default};
