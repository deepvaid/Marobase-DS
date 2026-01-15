import{h as m,w as d,p as y,B as g,o as p,C as b,F as f,n as v,D as x,r as P}from"./iframe-Acq_KjEe.js";import"./preload-helper-PPVm8Dsz.js";const l={__name:"AppExpansionPanels",props:{items:{type:Array,default:()=>[]},variant:{type:String,default:"default",validator:e=>["default","accordion","inset","popout"].includes(e)}},setup(e){return(c,A)=>(p(),m(g,y(c.$attrs,{variant:e.variant}),{default:d(()=>[(p(!0),b(f,null,v(e.items,(i,u)=>(p(),m(x,{key:u,title:i.title,text:i.text},{default:d(()=>[P(c.$slots,"item",{item:i})]),_:2},1032,["title","text"]))),128))]),_:3},16,["variant"]))}};l.__docgenInfo={exportName:"default",displayName:"AppExpansionPanels",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","accordion","inset","popout"]}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppExpansionPanels.vue"]};const I={title:"Components/AppExpansionPanels",component:l,tags:["autodocs"],argTypes:{items:{control:"object",description:"Items to display in the expansion panels",table:{category:"Props",type:{summary:"array"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["default","accordion","inset","popout"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},readonly:{control:"boolean",description:"Makes the component read-only",table:{category:"Props",type:{summary:"boolean"}}},multiple:{control:"boolean",description:"Allow multiple panels to be open at the same time",table:{category:"Props",type:{summary:"boolean"}}},mandatory:{control:"boolean",description:"Forces at least one panel to be open",table:{category:"Props",type:{summary:"boolean"}}}}},r=[{title:"Item 1",text:"Content for Item 1"},{title:"Item 2",text:"Content for Item 2"},{title:"Item 3",text:"Content for Item 3"}],s=e=>({components:{AppExpansionPanels:l},setup(){return{args:e}},template:'<AppExpansionPanels v-bind="args" />'}),t={render:s,args:{items:r}},a={render:s,args:{items:r,variant:"accordion"}},o={render:s,args:{items:r,variant:"inset"}},n={render:s,args:{items:r,variant:"popout"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    variant: 'accordion'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    variant: 'inset'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    variant: 'popout'
  }
}`,...n.parameters?.docs?.source}}};const S=["Default","Accordion","Inset","Popout"];export{a as Accordion,t as Default,o as Inset,n as Popout,S as __namedExportsOrder,I as default};
