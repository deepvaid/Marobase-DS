import{c as s,f as i,g as l,m as p,j as d,o as u,w as c,r as m,n as v,i as f}from"./iframe-CPoBs-Jw.js";import{_ as g}from"./AppButton-sBWcn_Gp.js";import"./preload-helper-PPVm8Dsz.js";const a={__name:"AppCard",props:{color:{type:String,default:void 0},variant:{type:String,default:"elevated",validator:t=>["elevated","flat","tonal","outlined"].includes(t)},elevation:{type:[Number,String],default:void 0}},setup(t){return(n,A)=>(u(),s(d,p(n.$attrs,{color:t.color,variant:t.variant,elevation:t.elevation}),i({_:2},[l(n.$slots,(C,r)=>({name:r,fn:c(o=>[m(n.$slots,r,v(f(o)))])}))]),1040,["color","variant","elevation"]))}};a.__docgenInfo={exportName:"default",displayName:"AppCard",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'elevated'"},values:["elevated","flat","tonal","outlined"]},{name:"elevation",type:{name:"number|string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppCard.vue"]};const b={title:"Components/AppCard",component:a,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},text:{control:"text"},color:{control:"text"},variant:{control:{type:"select",options:["elevated","flat","tonal","outlined"]}},elevation:{control:{type:"range",min:0,max:24}}}},e={args:{title:"Card Title",subtitle:"Card Subtitle",text:"This is the card content. It can contain text or other components.",variant:"elevated"},render:t=>({components:{AppCard:a,AppButton:g},setup(){return{args:t}},template:`
      <AppCard v-bind="args" width="400">
        <template #actions>
          <AppButton variant="text">Action 1</AppButton>
          <AppButton variant="text">Action 2</AppButton>
        </template>
      </AppCard>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    text: 'This is the card content. It can contain text or other components.',
    variant: 'elevated'
  },
  render: args => ({
    components: {
      AppCard,
      AppButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AppCard v-bind="args" width="400">
        <template #actions>
          <AppButton variant="text">Action 1</AppButton>
          <AppButton variant="text">Action 2</AppButton>
        </template>
      </AppCard>
    \`
  })
}`,...e.parameters?.docs?.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,b as default};
