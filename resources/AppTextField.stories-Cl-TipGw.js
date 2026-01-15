import{c,f as m,g as u,m as y,K as g,o as b,w as f,r as h,n as v,i as x}from"./iframe-D3WsbN1i.js";import"./preload-helper-PPVm8Dsz.js";const l={__name:"AppTextField",props:{color:{type:String,default:"primary"},variant:{type:String,default:"outlined",validator:e=>["filled","outlined","plain","underlined","solo"].includes(e)},modelValue:[String,Number]},emits:["update:modelValue"],setup(e){return(t,s)=>(b(),c(g,y(t.$attrs,{color:e.color,variant:e.variant,"onUpdate:modelValue":s[0]||(s[0]=i=>t.$emit("update:modelValue",i))}),m({_:2},[u(t.$slots,(i,p)=>({name:p,fn:f(d=>[h(t.$slots,p,v(x(d)))])}))]),1040,["color","variant"]))}};l.__docgenInfo={exportName:"default",displayName:"AppTextField",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'outlined'"},values:["filled","outlined","plain","underlined","solo"]},{name:"modelValue",type:{name:"string|number"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppTextField.vue"]};const S={title:"Components/AppTextField",component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"Sets the input label",table:{category:"Props",type:{summary:"string"}}},placeholder:{control:"text",description:"Sets the input placeholder",table:{category:"Props",type:{summary:"string"}}},hint:{control:"text",description:"Hint text",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["filled","outlined","plain","underlined","solo"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},loading:{control:"boolean",description:"Displays linear progress bar",table:{category:"Props",type:{summary:"boolean"}}},errorMessages:{control:"text",description:"Puts the input in an error state and passes through custom error messages",table:{category:"Props",type:{summary:"string | array"}}},modelValue:{control:"text",description:"The v-model value of the component",table:{category:"Model",type:{summary:"any"}}}}},n=e=>({components:{AppTextField:l},setup(){return{args:e}},template:'<AppTextField v-bind="args" />'}),r={render:n,args:{label:"Label",placeholder:"Placeholder",color:"primary",variant:"outlined"}},a={render:n,args:{label:"Label",color:"primary",variant:"outlined",modelValue:"Initial Value"}},o={render:n,args:{label:"Label",color:"primary",variant:"outlined",errorMessages:"This field is required"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    color: 'primary',
    variant: 'outlined'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label',
    color: 'primary',
    variant: 'outlined',
    modelValue: 'Initial Value'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label',
    color: 'primary',
    variant: 'outlined',
    errorMessages: 'This field is required'
  }
}`,...o.parameters?.docs?.source}}};const P=["Default","WithValue","ErrorState"];export{r as Default,o as ErrorState,a as WithValue,P as __namedExportsOrder,S as default};
