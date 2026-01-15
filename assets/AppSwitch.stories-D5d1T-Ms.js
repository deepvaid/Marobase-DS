import{c as i,f as c,g as m,m as u,G as d,o as g,w as S,r as w,n as h,i as y}from"./iframe-BX8w7LxZ.js";import"./preload-helper-DUhKpxZN.js";const a={__name:"AppSwitch",props:{color:{type:String,default:"primary"},modelValue:[Boolean,Array]},emits:["update:modelValue"],setup(e){return(t,o)=>(g(),i(d,u(t.$attrs,{color:e.color,"onUpdate:modelValue":o[0]||(o[0]=s=>t.$emit("update:modelValue",s))}),c({_:2},[m(t.$slots,(s,p)=>({name:p,fn:S(l=>[w(t.$slots,p,h(y(l)))])}))]),1040,["color"]))}};a.__docgenInfo={exportName:"default",displayName:"AppSwitch",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"boolean|array"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppSwitch.vue"]};const A={title:"Components/AppSwitch",component:a,tags:["autodocs"],argTypes:{label:{control:"text"},color:{control:"text"},inset:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{label:"Switch Label",color:"primary"},render:e=>({components:{AppSwitch:a},setup(){return{args:e}},template:'<AppSwitch v-bind="args" />'})},n={args:{...r.args,inset:!0},render:e=>({components:{AppSwitch:a},setup(){return{args:e}},template:'<AppSwitch v-bind="args" />'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Switch Label',
    color: 'primary'
  },
  render: args => ({
    components: {
      AppSwitch
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppSwitch v-bind="args" />'
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    inset: true
  },
  render: args => ({
    components: {
      AppSwitch
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppSwitch v-bind="args" />'
  })
}`,...n.parameters?.docs?.source}}};const v=["Default","Inset"];export{r as Default,n as Inset,v as __namedExportsOrder,A as default};
