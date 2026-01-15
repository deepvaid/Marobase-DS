import{c as f,w as y,m as g,H as b,o as a,r as v,I as s,y as t,F as l,g as o,J as c}from"./iframe-D3WsbN1i.js";import"./preload-helper-PPVm8Dsz.js";const u={__name:"AppTable",props:{headers:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]},density:{type:String,default:"default",validator:e=>["default","comfortable","compact"].includes(e)},hover:Boolean},setup(e){return(p,T)=>(a(),f(b,g(p.$attrs,{density:e.density,hover:e.hover}),{default:y(()=>[v(p.$slots,"default",{},()=>[s("thead",null,[s("tr",null,[(a(!0),t(l,null,o(e.headers,r=>(a(),t("th",{key:r,class:"text-left"},c(r),1))),128))])]),s("tbody",null,[(a(!0),t(l,null,o(e.items,(r,d)=>(a(),t("tr",{key:d},[(a(!0),t(l,null,o(r,(m,i)=>(a(),t("td",{key:i},c(m),1))),128))]))),128))])])]),_:3},16,["density","hover"]))}};u.__docgenInfo={exportName:"default",displayName:"AppTable",description:"",tags:{},props:[{name:"headers",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"density",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","comfortable","compact"]},{name:"hover",type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppTable.vue"]};const V={title:"Components/AppTable",component:u,tags:["autodocs"],argTypes:{density:{control:{type:"select",options:["default","comfortable","compact"]}},hover:{control:"boolean"}}},h=["Name","Calories"],A=[["Frozen Yogurt",159],["Ice cream sandwich",237],["Eclair",262]],n={args:{headers:h,items:A},render:e=>({components:{AppTable:u},setup(){return{args:e}},template:'<AppTable v-bind="args" />'})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    headers,
    items
  },
  render: args => ({
    components: {
      AppTable
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppTable v-bind="args" />'
  })
}`,...n.parameters?.docs?.source}}};const x=["Default"];export{n as Default,x as __namedExportsOrder,V as default};
