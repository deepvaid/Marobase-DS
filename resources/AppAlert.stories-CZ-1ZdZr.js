import{V as i}from"./iframe-B12PdS1D.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/VAlert",component:i,tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the alert",table:{category:"Props",type:{summary:"string"}}},text:{control:"text",description:"The content of the alert",table:{category:"Props",type:{summary:"string"}}},icon:{control:"text",description:"Icon to display",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["text","flat","elevated","tonal","outlined","plain"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},border:{control:"select",options:[!0,!1,"top","end","bottom","start"],description:"Designates the border side",table:{category:"Styles",type:{summary:"boolean | string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},type:{control:"select",options:["success","info","warning","error"],description:"Specify a type for the alert",table:{category:"Props",type:{summary:"string"}}},closable:{control:"boolean",description:"Adds a close icon that hides the alert",table:{category:"Props",type:{summary:"boolean"}}},prominent:{control:"boolean",description:"Displays a larger icon and increases height",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"boolean",description:"Controls the visibility of the alert",table:{category:"Model",type:{summary:"boolean"}}}}},e=l=>({components:{VAlert:i},setup(){return{args:l}},template:'<v-alert v-bind="args" />'}),t={render:e,args:{type:"info",title:"Alert Title",text:"This is an alert message.",variant:"tonal"}},r={render:e,args:{type:"success",title:"Success",text:"Operation completed successfully.",variant:"tonal"}},n={render:e,args:{type:"warning",title:"Warning",text:"Please be careful.",variant:"tonal"}},o={render:e,args:{type:"error",title:"Error",text:"Something went wrong.",variant:"tonal"}},a={render:e,args:{type:"info",prominent:!0,title:"Prominent Alert",text:"This alert stands out more.",variant:"elevated"}},s={render:e,args:{type:"info",variant:"outlined",title:"Outlined Alert",text:"This alert uses the outlined variant."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'info',
    title: 'Alert Title',
    text: 'This is an alert message.',
    variant: 'tonal'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'success',
    title: 'Success',
    text: 'Operation completed successfully.',
    variant: 'tonal'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'warning',
    title: 'Warning',
    text: 'Please be careful.',
    variant: 'tonal'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'error',
    title: 'Error',
    text: 'Something went wrong.',
    variant: 'tonal'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'info',
    prominent: true,
    title: 'Prominent Alert',
    text: 'This alert stands out more.',
    variant: 'elevated'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'info',
    variant: 'outlined',
    title: 'Outlined Alert',
    text: 'This alert uses the outlined variant.'
  }
}`,...s.parameters?.docs?.source}}};const d=["Default","Success","Warning","Error","Prominent","Outlined"];export{t as Default,o as Error,s as Outlined,a as Prominent,r as Success,n as Warning,d as __namedExportsOrder,m as default};
