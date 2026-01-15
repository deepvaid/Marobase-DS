import{c as p,w as i,m,x as u,o as r,y as d,F as g,g as f,z as x,r as v}from"./iframe-B6zKLX_C.js";import"./preload-helper-PPVm8Dsz.js";const a={__name:"AppExpansionPanels",props:{items:{type:Array,default:()=>[]},variant:{type:String,default:"default",validator:e=>["default","accordion","inset","popout"].includes(e)}},setup(e){return(o,E)=>(r(),p(u,m(o.$attrs,{variant:e.variant}),{default:i(()=>[(r(!0),d(g,null,f(e.items,(s,c)=>(r(),p(x,{key:c,title:s.title,text:s.text},{default:i(()=>[v(o.$slots,"item",{item:s})]),_:2},1032,["title","text"]))),128))]),_:3},16,["variant"]))}};a.__docgenInfo={exportName:"default",displayName:"AppExpansionPanels",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","accordion","inset","popout"]}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppExpansionPanels.vue"]};const P={title:"Components/AppExpansionPanels",component:a,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["default","accordion","inset","popout"]}}}},l=[{title:"Item 1",text:"Content for Item 1"},{title:"Item 2",text:"Content for Item 2"},{title:"Item 3",text:"Content for Item 3"}],n={args:{items:l},render:e=>({components:{AppExpansionPanels:a},setup(){return{args:e}},template:'<AppExpansionPanels v-bind="args" />'})},t={args:{items:l,variant:"accordion"},render:e=>({components:{AppExpansionPanels:a},setup(){return{args:e}},template:'<AppExpansionPanels v-bind="args" />'})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => ({
    components: {
      AppExpansionPanels
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppExpansionPanels v-bind="args" />'
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'accordion'
  },
  render: args => ({
    components: {
      AppExpansionPanels
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppExpansionPanels v-bind="args" />'
  })
}`,...t.parameters?.docs?.source}}};const _=["Default","Accordion"];export{t as Accordion,n as Default,_ as __namedExportsOrder,P as default};
