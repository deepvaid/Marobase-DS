import{c as r,f as l,w as a,m as u,C as c,o as s,r as m,n as d,i as v,q as f,A as g,y as A,F as y,g as M,B as b}from"./iframe-D_wd5sgK.js";import{_ as B}from"./AppButton-C42ZDCnx.js";import"./preload-helper-DUhKpxZN.js";const p={__name:"AppMenu",props:{items:{type:Array,default:()=>[]},location:{type:String,default:"bottom"},openOnHover:Boolean},emits:["click:item"],setup(e){return(t,O)=>(s(),r(c,u(t.$attrs,{location:e.location,"open-on-hover":e.openOnHover}),l({default:a(()=>[f(g,null,{default:a(()=>[(s(!0),A(y,null,M(e.items,(n,i)=>(s(),r(b,{key:i,title:n.title,onClick:_=>t.$emit("click:item",n)},null,8,["title","onClick"]))),128))]),_:1})]),_:2},[t.$slots.activator?{name:"activator",fn:a(n=>[m(t.$slots,"activator",d(v(n)))]),key:"0"}:void 0]),1040,["location","open-on-hover"]))}};p.__docgenInfo={exportName:"default",displayName:"AppMenu",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:"'bottom'"}},{name:"openOnHover",type:{name:"boolean"}}],events:[{name:"click:item"}],slots:[{name:"activator",scoped:!0,bindings:[]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppMenu.vue"]};const h={title:"Components/AppMenu",component:p,tags:["autodocs"],argTypes:{location:{control:{type:"select",options:["top","bottom","start","end"]}},openOnHover:{control:"boolean"}}},k=[{title:"Option 1"},{title:"Option 2"},{title:"Option 3"}],o={args:{items:k,location:"bottom"},render:e=>({components:{AppMenu:p,AppButton:B},setup(){return{args:e}},template:`
      <AppMenu v-bind="args">
        <template #activator="{ props }">
          <AppButton v-bind="props">Open Menu</AppButton>
        </template>
      </AppMenu>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    location: 'bottom'
  },
  render: args => ({
    components: {
      AppMenu,
      AppButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AppMenu v-bind="args">
        <template #activator="{ props }">
          <AppButton v-bind="props">Open Menu</AppButton>
        </template>
      </AppMenu>
    \`
  })
}`,...o.parameters?.docs?.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,h as default};
