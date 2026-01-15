import{c as n}from"./iframe-xrjQq8ex.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/VSheet",component:n,tags:["autodocs"],argTypes:{default:{control:"text",description:"The content of the sheet",table:{category:"Slots",type:{summary:"html"}},defaultValue:"Sheet Content"},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},border:{control:"boolean",description:"Adds a thin border to the component",table:{category:"Styles",type:{summary:"boolean"}}},height:{control:"text",description:"Sets the height of the component",table:{category:"Styles",type:{summary:"number | string"}}},width:{control:"text",description:"Sets the width of the component",table:{category:"Styles",type:{summary:"number | string"}}},maxWidth:{control:"text",description:"Sets the maximum width of the component",table:{category:"Styles",type:{summary:"number | string"}}},minWidth:{control:"text",description:"Sets the minimum width of the component",table:{category:"Styles",type:{summary:"number | string"}}}}},o=a=>({components:{VSheet:n},setup(){return{args:a}},template:'<v-sheet v-bind="args" class="pa-4">{{ args.default }}</v-sheet>'}),e={render:o,args:{elevation:4,height:100,width:200,rounded:"true",default:"Sheet Content"}},t={render:o,args:{elevation:2,height:150,width:150,rounded:"xl",default:"Rounded Sheet",color:"secondary"}},r={render:o,args:{elevation:0,height:100,width:200,border:!0,default:"Bordered Sheet"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    elevation: 4,
    height: 100,
    width: 200,
    rounded: 'true',
    default: 'Sheet Content'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    elevation: 2,
    height: 150,
    width: 150,
    rounded: 'xl',
    default: 'Rounded Sheet',
    color: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    elevation: 0,
    height: 100,
    width: 200,
    border: true,
    default: 'Bordered Sheet'
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","Rounded","Bordered"];export{r as Bordered,e as Default,t as Rounded,l as __namedExportsOrder,i as default};
