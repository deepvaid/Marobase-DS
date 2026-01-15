import{c as p,f as c,g as m,m as i,k as d,o as u,w as b,r as g,n as y,i as k}from"./iframe-DRjJAYyG.js";import"./preload-helper-PPVm8Dsz.js";const r={__name:"AppCheckbox",props:{color:{type:String,default:"primary"},modelValue:[Boolean,Array]},emits:["update:modelValue"],setup(a){return(e,n)=>(u(),p(d,i(e.$attrs,{color:a.color,"onUpdate:modelValue":n[0]||(n[0]=t=>e.$emit("update:modelValue",t))}),c({_:2},[m(e.$slots,(t,s)=>({name:s,fn:b(l=>[g(e.$slots,s,y(k(l)))])}))]),1040,["color"]))}};r.__docgenInfo={exportName:"default",displayName:"AppCheckbox",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"boolean|array"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppCheckbox.vue"]};const C={title:"Components/AppCheckbox",component:r,tags:["autodocs"],argTypes:{label:{control:"text"},color:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},o={args:{label:"Checkbox Label",color:"primary"},render:a=>({components:{AppCheckbox:r},setup(){return{args:a}},template:'<AppCheckbox v-bind="args" />'})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    color: 'primary'
  },
  render: args => ({
    components: {
      AppCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppCheckbox v-bind="args" />'
  })
}`,...o.parameters?.docs?.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,C as default};
