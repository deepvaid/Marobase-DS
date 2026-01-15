import{c as d,f as p,g as u,m,j as y,o as g,w as f,r as v,n as b,i as h}from"./iframe-D_1rW3Ka.js";import{_ as A}from"./AppButton-C5bDniHZ.js";import"./preload-helper-PPVm8Dsz.js";const l={__name:"AppCard",props:{color:{type:String,default:void 0},variant:{type:String,default:"elevated",validator:e=>["elevated","flat","tonal","outlined"].includes(e)},elevation:{type:[Number,String],default:void 0}},setup(e){return(s,x)=>(g(),d(y,m(s.$attrs,{color:e.color,variant:e.variant,elevation:e.elevation}),p({_:2},[u(s.$slots,(C,i)=>({name:i,fn:f(c=>[v(s.$slots,i,b(h(c)))])}))]),1040,["color","variant","elevation"]))}};l.__docgenInfo={exportName:"default",displayName:"AppCard",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'elevated'"},values:["elevated","flat","tonal","outlined"]},{name:"elevation",type:{name:"number|string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppCard.vue"]};const P={title:"Components/AppCard",component:l,tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the card",table:{category:"Props",type:{summary:"string"}}},subtitle:{control:"text",description:"The subtitle of the card",table:{category:"Props",type:{summary:"string"}}},text:{control:"text",description:"The content of the card",table:{category:"Props",type:{summary:"string"}}},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["text","flat","elevated","tonal","outlined","plain"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},hover:{control:"boolean",description:"Applies a hover effect",table:{category:"Props",type:{summary:"boolean"}}},link:{control:"boolean",description:"Designates that the component is a link",table:{category:"Props",type:{summary:"boolean"}}}}},n=e=>({components:{AppCard:l,AppButton:A},setup(){return{args:e}},template:`
      <AppCard v-bind="args" width="400">
        <template #actions>
          <AppButton variant="text" color="primary">Action 1</AppButton>
          <AppButton variant="text" color="primary">Action 2</AppButton>
        </template>
      </AppCard>
    `}),t={render:n,args:{title:"Card Title",subtitle:"Card Subtitle",text:"This is the card content. It can contain text or other components.",variant:"elevated"}},a={render:n,args:{title:"Outlined Card",text:"An outlined card uses a thin border instead of shadow.",variant:"outlined"}},r={render:n,args:{title:"Tonal Card",text:"A tonal card uses a background color with reduced opacity.",variant:"tonal",color:"primary"}},o={render:n,args:{title:"Flat Card",text:"A flat card has no shadow.",variant:"flat"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    text: 'This is the card content. It can contain text or other components.',
    variant: 'elevated'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Outlined Card',
    text: 'An outlined card uses a thin border instead of shadow.',
    variant: 'outlined'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Tonal Card',
    text: 'A tonal card uses a background color with reduced opacity.',
    variant: 'tonal',
    color: 'primary'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Flat Card',
    text: 'A flat card has no shadow.',
    variant: 'flat'
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","Outlined","Tonal","Flat"];export{t as Default,o as Flat,a as Outlined,r as Tonal,_ as __namedExportsOrder,P as default};
