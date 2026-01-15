import{c as v,w as A,m as T,H as S,o as t,r as x,I as l,y as a,F as c,g as m,J as f}from"./iframe-D_1rW3Ka.js";import"./preload-helper-PPVm8Dsz.js";const p={__name:"AppTable",props:{headers:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]},density:{type:String,default:"default",validator:e=>["default","comfortable","compact"].includes(e)},hover:Boolean},setup(e){return(y,k)=>(t(),v(S,T(y.$attrs,{density:e.density,hover:e.hover}),{default:A(()=>[x(y.$slots,"default",{},()=>[l("thead",null,[l("tr",null,[(t(!0),a(c,null,m(e.headers,r=>(t(),a("th",{key:r,class:"text-left"},f(r),1))),128))])]),l("tbody",null,[(t(!0),a(c,null,m(e.items,(r,h)=>(t(),a("tr",{key:h},[(t(!0),a(c,null,m(r,(g,b)=>(t(),a("td",{key:b},f(g),1))),128))]))),128))])])]),_:3},16,["density","hover"]))}};p.__docgenInfo={exportName:"default",displayName:"AppTable",description:"",tags:{},props:[{name:"headers",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"density",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","comfortable","compact"]},{name:"hover",type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppTable.vue"]};const F={title:"Components/AppTable",component:p,tags:["autodocs"],argTypes:{headers:{control:"object",description:"Array of table headers",table:{category:"Props",type:{summary:"array"}}},items:{control:"object",description:"Array of table items",table:{category:"Props",type:{summary:"array"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},theme:{control:"text",description:"Specify a theme for this component",table:{category:"Styles",type:{summary:"string"}}},height:{control:"text",description:"Sets the height for the component",table:{category:"Styles",type:{summary:"string | number"}}},hover:{control:"boolean",description:"Adds a hover effect to table rows",table:{category:"Props",type:{summary:"boolean"}}},fixedHeader:{control:"boolean",description:"Fixes the header to the top of the table",table:{category:"Props",type:{summary:"boolean"}}}}},d=["Name","Calories"],i=[["Frozen Yogurt",159],["Ice cream sandwich",237],["Eclair",262]],u=e=>({components:{AppTable:p},setup(){return{args:e}},template:'<AppTable v-bind="args" />'}),s={render:u,args:{headers:d,items:i,density:"default"}},o={render:u,args:{headers:d,items:i,density:"compact"}},n={render:u,args:{headers:d,items:i,hover:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers,
    items,
    density: 'default'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers,
    items,
    density: 'compact'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers,
    items,
    hover: true
  }
}`,...n.parameters?.docs?.source}}};const P=["Default","Dense","Hover"];export{s as Default,o as Dense,n as Hover,P as __namedExportsOrder,F as default};
