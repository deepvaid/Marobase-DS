import{c as d,f as u,g as m,m as c,K as g,o as f,w as v,r as x,n as T,i as F}from"./iframe-Brs_epFi.js";import"./preload-helper-PPVm8Dsz.js";const n={__name:"AppTextField",props:{color:{type:String,default:"primary"},variant:{type:String,default:"outlined",validator:e=>["filled","outlined","plain","underlined","solo"].includes(e)},modelValue:[String,Number]},emits:["update:modelValue"],setup(e){return(a,l)=>(f(),d(g,c(a.$attrs,{color:e.color,variant:e.variant,"onUpdate:modelValue":l[0]||(l[0]=s=>a.$emit("update:modelValue",s))}),u({_:2},[m(a.$slots,(s,i)=>({name:i,fn:v(p=>[x(a.$slots,i,T(F(p)))])}))]),1040,["color","variant"]))}};n.__docgenInfo={exportName:"default",displayName:"AppTextField",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'outlined'"},values:["filled","outlined","plain","underlined","solo"]},{name:"modelValue",type:{name:"string|number"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppTextField.vue"]};const A={title:"Components/AppTextField",component:n,tags:["autodocs"],argTypes:{label:{control:"text"},color:{control:"text"},variant:{control:{type:"select",options:["filled","outlined","plain","underlined","solo"]}},disabled:{control:"boolean"},loading:{control:"boolean"},errorMessages:{control:"text"}}},r={args:{label:"Label",placeholder:"Placeholder",color:"primary",variant:"outlined"},render:e=>({components:{AppTextField:n},setup(){return{args:e}},template:'<AppTextField v-bind="args" />'})},t={args:{...r.args,modelValue:"Initial Value"},render:e=>({components:{AppTextField:n},setup(){return{args:e}},template:'<AppTextField v-bind="args" />'})},o={args:{...r.args,errorMessages:"This field is required"},render:e=>({components:{AppTextField:n},setup(){return{args:e}},template:'<AppTextField v-bind="args" />'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    color: 'primary',
    variant: 'outlined'
  },
  render: args => ({
    components: {
      AppTextField
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppTextField v-bind="args" />'
  })
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    modelValue: 'Initial Value'
  },
  render: args => ({
    components: {
      AppTextField
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppTextField v-bind="args" />'
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    errorMessages: 'This field is required'
  },
  render: args => ({
    components: {
      AppTextField
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppTextField v-bind="args" />'
  })
}`,...o.parameters?.docs?.source}}};const V=["Default","WithValue","ErrorState"];export{r as Default,o as ErrorState,t as WithValue,V as __namedExportsOrder,A as default};
