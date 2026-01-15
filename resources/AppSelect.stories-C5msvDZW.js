import{c as i,f as u,g as m,m as c,D as d,o as g,w as f,r as S,n as v,i as y}from"./iframe-Brs_epFi.js";import"./preload-helper-PPVm8Dsz.js";const r={__name:"AppSelect",props:{items:{type:Array,default:()=>[]},color:{type:String,default:"primary"},variant:{type:String,default:"outlined",validator:e=>["filled","outlined","plain","underlined","solo"].includes(e)},modelValue:[String,Number,Object]},emits:["update:modelValue"],setup(e){return(n,l)=>(g(),i(d,c(n.$attrs,{items:e.items,color:e.color,variant:e.variant,"onUpdate:modelValue":l[0]||(l[0]=o=>n.$emit("update:modelValue",o))}),u({_:2},[m(n.$slots,(o,s)=>({name:s,fn:f(p=>[S(n.$slots,s,v(y(p)))])}))]),1040,["items","color","variant"]))}};r.__docgenInfo={exportName:"default",displayName:"AppSelect",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'outlined'"},values:["filled","outlined","plain","underlined","solo"]},{name:"modelValue",type:{name:"string|number|object"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppSelect.vue"]};const I={title:"Components/AppSelect",component:r,tags:["autodocs"],argTypes:{label:{control:"text"},items:{control:"object"},color:{control:"text"},variant:{control:{type:"select",options:["filled","outlined","plain","underlined","solo"]}},multiple:{control:"boolean"},chips:{control:"boolean"}}},b=["Item 1","Item 2","Item 3","Item 4"],t={args:{label:"Select Item",items:b,color:"primary",variant:"outlined"},render:e=>({components:{AppSelect:r},setup(){return{args:e}},template:'<AppSelect v-bind="args" />'})},a={args:{...t.args,label:"Select Multiple",multiple:!0,chips:!0},render:e=>({components:{AppSelect:r},setup(){return{args:e}},template:'<AppSelect v-bind="args" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select Item',
    items,
    color: 'primary',
    variant: 'outlined'
  },
  render: args => ({
    components: {
      AppSelect
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppSelect v-bind="args" />'
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Select Multiple',
    multiple: true,
    chips: true
  },
  render: args => ({
    components: {
      AppSelect
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppSelect v-bind="args" />'
  })
}`,...a.parameters?.docs?.source}}};const D=["Default","Multiple"];export{t as Default,a as Multiple,D as __namedExportsOrder,I as default};
