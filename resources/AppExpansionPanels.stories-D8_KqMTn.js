import{k as s,l as i,m as l,n as c}from"./iframe-B12PdS1D.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Components/VExpansionPanels",component:s,tags:["autodocs"],argTypes:{items:{control:"object",description:"Items to display in the expansion panels",table:{category:"Props",type:{summary:"array"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["default","accordion","inset","popout"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},readonly:{control:"boolean",description:"Makes the component read-only",table:{category:"Props",type:{summary:"boolean"}}},multiple:{control:"boolean",description:"Allow multiple panels to be open at the same time",table:{category:"Props",type:{summary:"boolean"}}},mandatory:{control:"boolean",description:"Forces at least one panel to be open",table:{category:"Props",type:{summary:"boolean"}}}}},a=[{title:"Item 1",text:"Content for Item 1"},{title:"Item 2",text:"Content for Item 2"},{title:"Item 3",text:"Content for Item 3"}],r=p=>({components:{VExpansionPanels:s,VExpansionPanel:c,VExpansionPanelTitle:l,VExpansionPanelText:i},setup(){return{args:p}},template:`
      <v-expansion-panels v-bind="args">
        <v-expansion-panel v-for="(item, i) in args.items" :key="i">
            <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
            <v-expansion-panel-text>{{ item.text }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    `}),e={render:r,args:{items:a}},t={render:r,args:{items:a,variant:"accordion"}},o={render:r,args:{items:a,variant:"inset"}},n={render:r,args:{items:a,variant:"popout"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    variant: 'accordion'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    variant: 'inset'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    variant: 'popout'
  }
}`,...n.parameters?.docs?.source}}};const u=["Default","Accordion","Inset","Popout"];export{t as Accordion,e as Default,o as Inset,n as Popout,u as __namedExportsOrder,y as default};
