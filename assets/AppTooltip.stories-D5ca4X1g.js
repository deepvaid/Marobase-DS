import{c as a,m as s,L as r,o as i,w as l,r as c,n as m,i as u}from"./iframe-DeKf58vn.js";import{_ as d}from"./AppButton-BtPP-LY9.js";import"./preload-helper-PPVm8Dsz.js";const e={__name:"AppTooltip",props:{text:String,location:{type:String,default:"top"}},setup(t){return(p,g)=>(i(),a(r,s(p.$attrs,{text:t.text,location:t.location}),{activator:l(n=>[c(p.$slots,"activator",m(u(n)))]),_:3},16,["text","location"]))}};e.__docgenInfo={exportName:"default",displayName:"AppTooltip",description:"",tags:{},props:[{name:"text",type:{name:"string"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:"'top'"}}],slots:[{name:"activator",scoped:!0,bindings:[]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppTooltip.vue"]};const f={title:"Components/AppTooltip",component:e,tags:["autodocs"],argTypes:{text:{control:"text"},location:{control:{type:"select",options:["top","bottom","start","end"]}}}},o={args:{text:"This is a tooltip",location:"top"},render:t=>({components:{AppTooltip:e,AppButton:d},setup(){return{args:t}},template:`
      <div class="ma-10">
        <AppTooltip v-bind="args">
          <template #activator="{ props }">
            <AppButton v-bind="props">Hover me</AppButton>
          </template>
        </AppTooltip>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'This is a tooltip',
    location: 'top'
  },
  render: args => ({
    components: {
      AppTooltip,
      AppButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="ma-10">
        <AppTooltip v-bind="args">
          <template #activator="{ props }">
            <AppButton v-bind="props">Hover me</AppButton>
          </template>
        </AppTooltip>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,f as default};
