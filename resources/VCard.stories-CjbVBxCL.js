import{b as n,a as i}from"./iframe-phUp45JQ.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/VCard",component:n,tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the card",table:{category:"Props",type:{summary:"string"}}},subtitle:{control:"text",description:"The subtitle of the card",table:{category:"Props",type:{summary:"string"}}},text:{control:"text",description:"The content of the card",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["text","flat","elevated","tonal","outlined","plain"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},hover:{control:"boolean",description:"Applies a hover effect",table:{category:"Props",type:{summary:"boolean"}}},link:{control:"boolean",description:"Designates that the component is a link",table:{category:"Props",type:{summary:"boolean"}}}}},o=s=>({components:{VCard:n,VBtn:i},setup(){return{args:s}},template:`
      <v-card v-bind="args" width="400">
        <template #actions>
          <v-btn variant="text" color="primary">Action 1</v-btn>
          <v-btn variant="text" color="primary">Action 2</v-btn>
        </template>
      </v-card>
    `}),t={render:o,args:{title:"Card Title",subtitle:"Card Subtitle",text:"This is the card content. It can contain text or other components.",variant:"elevated"}},e={render:o,args:{title:"Outlined Card",text:"An outlined card uses a thin border instead of shadow.",variant:"outlined"}},r={render:o,args:{title:"Tonal Card",text:"A tonal card uses a background color with reduced opacity.",variant:"tonal",color:"primary"}},a={render:o,args:{title:"Flat Card",text:"A flat card has no shadow.",variant:"flat"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    text: 'This is the card content. It can contain text or other components.',
    variant: 'elevated'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Outlined Card',
    text: 'An outlined card uses a thin border instead of shadow.',
    variant: 'outlined'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Tonal Card',
    text: 'A tonal card uses a background color with reduced opacity.',
    variant: 'tonal',
    color: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Flat Card',
    text: 'A flat card has no shadow.',
    variant: 'flat'
  }
}`,...a.parameters?.docs?.source}}};const p=["Default","Outlined","Tonal","Flat"];export{t as Default,a as Flat,e as Outlined,r as Tonal,p as __namedExportsOrder,d as default};
