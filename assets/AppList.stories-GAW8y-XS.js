import{c as o,w as l,m as p,A as c,o as a,y as u,F as m,g as d,B as v,r as g}from"./iframe-DeKf58vn.js";import"./preload-helper-PPVm8Dsz.js";const i={__name:"AppList",props:{items:{type:Array,default:()=>[]},lines:{type:[String,Boolean],default:"one",validator:e=>["one","two","three"].includes(e)||e===!1},nav:Boolean},emits:["click:item"],setup(e){return(s,y)=>(a(),o(c,p(s.$attrs,{lines:e.lines,nav:e.nav}),{default:l(()=>[(a(!0),u(m,null,d(e.items,(t,r)=>(a(),o(v,{key:r,title:t.title,subtitle:t.subtitle,"prepend-icon":t.prependIcon,"append-icon":t.appendIcon,value:t.value,onClick:b=>s.$emit("click:item",t)},{default:l(()=>[g(s.$slots,"item",{item:t})]),_:2},1032,["title","subtitle","prepend-icon","append-icon","value","onClick"]))),128))]),_:3},16,["lines","nav"]))}};i.__docgenInfo={exportName:"default",displayName:"AppList",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"lines",type:{name:"string|boolean"},defaultValue:{func:!1,value:"'one'"}},{name:"nav",type:{name:"boolean"}}],events:[{name:"click:item"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppList.vue"]};const k={title:"Components/AppList",component:i,tags:["autodocs"],argTypes:{lines:{control:{type:"select",options:["one","two","three",!1]}},nav:{control:"boolean"}}},f=[{title:"Item 1",subtitle:"Subtitle 1",value:1},{title:"Item 2",subtitle:"Subtitle 2",value:2},{title:"Item 3",subtitle:"Subtitle 3",value:3}],n={args:{items:f,lines:"two"},render:e=>({components:{AppList:i},setup(){return{args:e}},template:'<v-card width="300"><AppList v-bind="args" /></v-card>'})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    lines: 'two'
  },
  render: args => ({
    components: {
      AppList
    },
    setup() {
      return {
        args
      };
    },
    template: '<v-card width="300"><AppList v-bind="args" /></v-card>'
  })
}`,...n.parameters?.docs?.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,k as default};
