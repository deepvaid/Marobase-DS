import{c as u,f as m,g as y,m as g,h as f,o as b,w as v,r as h,n as A,i as S}from"./iframe-Brs_epFi.js";import"./preload-helper-PPVm8Dsz.js";const c={__name:"AppAlert",props:{color:{type:String,default:void 0},variant:{type:String,default:"flat",validator:e=>["elevated","flat","tonal","outlined"].includes(e)},type:{type:String,default:void 0,validator:e=>["success","info","warning","error"].includes(e)},closable:{type:Boolean,default:!1}},setup(e){return(i,x)=>(b(),u(f,g(i.$attrs,{color:e.color,variant:e.variant,type:e.type,closable:e.closable}),m({_:2},[y(i.$slots,(T,p)=>({name:p,fn:v(d=>[h(i.$slots,p,A(S(d)))])}))]),1040,["color","variant","type","closable"]))}};c.__docgenInfo={exportName:"default",displayName:"AppAlert",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'flat'"},values:["elevated","flat","tonal","outlined"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"undefined"},values:["success","info","warning","error"]},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppAlert.vue"]};const O={title:"Components/AppAlert",component:c,tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the alert",table:{category:"Props",type:{summary:"string"}}},text:{control:"text",description:"The content of the alert",table:{category:"Props",type:{summary:"string"}}},icon:{control:"text",description:"Icon to display",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["text","flat","elevated","tonal","outlined","plain"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},border:{control:"select",options:[!0,!1,"top","end","bottom","start"],description:"Designates the border side",table:{category:"Styles",type:{summary:"boolean | string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},type:{control:"select",options:["success","info","warning","error"],description:"Specify a type for the alert",table:{category:"Props",type:{summary:"string"}}},closable:{control:"boolean",description:"Adds a close icon that hides the alert",table:{category:"Props",type:{summary:"boolean"}}},prominent:{control:"boolean",description:"Displays a larger icon and increases height",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"boolean",description:"Controls the visibility of the alert",table:{category:"Model",type:{summary:"boolean"}}}}},t=e=>({components:{AppAlert:c},setup(){return{args:e}},template:'<AppAlert v-bind="args" />'}),r={render:t,args:{type:"info",title:"Alert Title",text:"This is an alert message.",variant:"tonal"}},a={render:t,args:{type:"success",title:"Success",text:"Operation completed successfully.",variant:"tonal"}},n={render:t,args:{type:"warning",title:"Warning",text:"Please be careful.",variant:"tonal"}},o={render:t,args:{type:"error",title:"Error",text:"Something went wrong.",variant:"tonal"}},s={render:t,args:{type:"info",prominent:!0,title:"Prominent Alert",text:"This alert stands out more.",variant:"elevated"}},l={render:t,args:{type:"info",variant:"outlined",title:"Outlined Alert",text:"This alert uses the outlined variant."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'info',
    title: 'Alert Title',
    text: 'This is an alert message.',
    variant: 'tonal'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'success',
    title: 'Success',
    text: 'Operation completed successfully.',
    variant: 'tonal'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'info',
    prominent: true,
    title: 'Prominent Alert',
    text: 'This alert stands out more.',
    variant: 'elevated'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'info',
    variant: 'outlined',
    title: 'Outlined Alert',
    text: 'This alert uses the outlined variant.'
  }
}`,...l.parameters?.docs?.source}}};const V=["Default","Success","Warning","Error","Prominent","Outlined"];export{r as Default,o as Error,l as Outlined,s as Prominent,a as Success,n as Warning,V as __namedExportsOrder,O as default};
