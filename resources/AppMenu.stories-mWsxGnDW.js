import{d as l,i as u,w as r,m as d,D as y,o as s,r as g,n as b,l as f,s as v,B as h,z as O,F as k,j as A,C as M}from"./iframe-xrjQq8ex.js";import{_ as B}from"./AppButton-HXqODqN5.js";import"./preload-helper-PPVm8Dsz.js";const i={__name:"AppMenu",props:{items:{type:Array,default:()=>[]},location:{type:String,default:"bottom"},openOnHover:Boolean},emits:["click:item"],setup(e){return(t,C)=>(s(),l(y,d(t.$attrs,{location:e.location,"open-on-hover":e.openOnHover}),u({default:r(()=>[v(h,null,{default:r(()=>[(s(!0),O(k,null,A(e.items,(o,m)=>(s(),l(M,{key:m,title:o.title,onClick:P=>t.$emit("click:item",o)},null,8,["title","onClick"]))),128))]),_:1})]),_:2},[t.$slots.activator?{name:"activator",fn:r(o=>[g(t.$slots,"activator",b(f(o)))]),key:"0"}:void 0]),1040,["location","open-on-hover"]))}};i.__docgenInfo={exportName:"default",displayName:"AppMenu",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:"'bottom'"}},{name:"openOnHover",type:{name:"boolean"}}],events:[{name:"click:item"}],slots:[{name:"activator",scoped:!0,bindings:[]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppMenu.vue"]};const w={title:"Components/AppMenu",component:i,tags:["autodocs"],argTypes:{items:{control:"object",description:"Items to display in the menu list",table:{category:"Props",type:{summary:"array"}}},location:{control:"select",options:["top","bottom","start","end","center"],description:"Aligns the component towards the selected direction",table:{category:"Styles",type:{summary:"string"}}},offset:{control:"number",description:"Sets the offset of the menu",table:{category:"Styles",type:{summary:"string | number | array"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},openOnHover:{control:"boolean",description:"Designates whether the menu should open on hover",table:{category:"Props",type:{summary:"boolean"}}},closeOnContentClick:{control:"boolean",description:"Designates if menu should close when its content is clicked",table:{category:"Props",type:{summary:"boolean"}}},closeOnBack:{control:"boolean",description:"Closes the menu when the back button is pressed",table:{category:"Props",type:{summary:"boolean"}}},persistent:{control:"boolean",description:"Clicking outside will not dismiss the menu",table:{category:"Props",type:{summary:"boolean"}}}}},p=[{title:"Option 1"},{title:"Option 2"},{title:"Option 3"}],c=e=>({components:{AppMenu:i,AppButton:B},setup(){return{args:e}},template:`
      <AppMenu v-bind="args">
        <template #activator="{ props }">
          <AppButton v-bind="props" color="primary">Open Menu</AppButton>
        </template>
      </AppMenu>
    `}),n={render:c,args:{items:p,location:"bottom"}},a={render:c,args:{items:p,location:"end",openOnHover:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    location: 'bottom'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    location: 'end',
    openOnHover: true
  }
}`,...a.parameters?.docs?.source}}};const V=["Default","OpenOnHover"];export{n as Default,a as OpenOnHover,V as __namedExportsOrder,w as default};
