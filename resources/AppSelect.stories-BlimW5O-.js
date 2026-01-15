import{c as m,f as u,g as d,m as y,D as g,o as b,w as f,r as v,n as S,i as h}from"./iframe-D_1rW3Ka.js";import"./preload-helper-PPVm8Dsz.js";const r={__name:"AppSelect",props:{items:{type:Array,default:()=>[]},color:{type:String,default:"primary"},variant:{type:String,default:"outlined",validator:e=>["filled","outlined","plain","underlined","solo"].includes(e)},modelValue:[String,Number,Object]},emits:["update:modelValue"],setup(e){return(t,l)=>(b(),m(g,y(t.$attrs,{items:e.items,color:e.color,variant:e.variant,"onUpdate:modelValue":l[0]||(l[0]=n=>t.$emit("update:modelValue",n))}),u({_:2},[d(t.$slots,(n,s)=>({name:s,fn:f(c=>[v(t.$slots,s,S(h(c)))])}))]),1040,["items","color","variant"]))}};r.__docgenInfo={exportName:"default",displayName:"AppSelect",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'outlined'"},values:["filled","outlined","plain","underlined","solo"]},{name:"modelValue",type:{name:"string|number|object"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppSelect.vue"]};const P={title:"Components/AppSelect",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"Sets the input label",table:{category:"Props",type:{summary:"string"}}},items:{control:"object",description:"Can be an array of objects or strings",table:{category:"Props",type:{summary:"array"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["filled","outlined","plain","underlined","solo"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},multiple:{control:"boolean",description:"Changes select to multiple. Accepts array for value",table:{category:"Props",type:{summary:"boolean"}}},chips:{control:"boolean",description:"Changes display of selections to chips",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"object",description:"The v-model value of the component",table:{category:"Model",type:{summary:"any"}}}}},i=["Item 1","Item 2","Item 3","Item 4"],p=e=>({components:{AppSelect:r},setup(){return{args:e}},template:'<AppSelect v-bind="args" />'}),a={render:p,args:{label:"Select Item",items:i,color:"primary",variant:"outlined"}},o={render:p,args:{label:"Select Multiple",items:i,color:"primary",variant:"outlined",multiple:!0,chips:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Select Item',
    items,
    color: 'primary',
    variant: 'outlined'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Select Multiple',
    items,
    color: 'primary',
    variant: 'outlined',
    multiple: true,
    chips: true
  }
}`,...o.parameters?.docs?.source}}};const I=["Default","Multiple"];export{a as Default,o as Multiple,I as __namedExportsOrder,P as default};
