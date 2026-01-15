import{c as p,m as i,L as l,o as c,w as m,r as d,n as u,i as g}from"./iframe-axLoFkyX.js";import{_ as y}from"./AppButton-C7X39AZK.js";import"./preload-helper-PPVm8Dsz.js";const n={__name:"AppTooltip",props:{text:String,location:{type:String,default:"top"}},setup(t){return(r,b)=>(c(),p(l,i(r.$attrs,{text:t.text,location:t.location}),{activator:m(s=>[d(r.$slots,"activator",u(g(s)))]),_:3},16,["text","location"]))}};n.__docgenInfo={exportName:"default",displayName:"AppTooltip",description:"",tags:{},props:[{name:"text",type:{name:"string"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:"'top'"}}],slots:[{name:"activator",scoped:!0,bindings:[]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppTooltip.vue"]};const T={title:"Components/AppTooltip",component:n,tags:["autodocs"],argTypes:{text:{control:"text",description:"The content of the tooltip",table:{category:"Props",type:{summary:"string"}}},location:{control:"select",options:["top","bottom","start","end"],description:"Aligns the component towards the selected direction",table:{category:"Styles",type:{summary:"string"}}},origin:{control:"select",options:["auto","overlap","top","bottom","start","end"],description:"Sets the transition origin",table:{category:"Styles",type:{summary:"string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},openOnHover:{control:"boolean",description:"Designates whether the tooltip should open on hover",table:{category:"Props",type:{summary:"boolean"}}},openOnClick:{control:"boolean",description:"Designates whether the tooltip should open on click",table:{category:"Props",type:{summary:"boolean"}}}}},a=t=>({components:{AppTooltip:n,AppButton:y},setup(){return{args:t}},template:`
      <div class="ma-10">
        <AppTooltip v-bind="args">
          <template #activator="{ props }">
            <AppButton v-bind="props" color="primary">Hover me</AppButton>
          </template>
        </AppTooltip>
      </div>
    `}),o={render:a,args:{text:"This is a tooltip",location:"top"}},e={render:a,args:{text:"Clicked!",location:"bottom",openOnHover:!1,openOnClick:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: 'This is a tooltip',
    location: 'top'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: 'Clicked!',
    location: 'bottom',
    openOnHover: false,
    openOnClick: true
  }
}`,...e.parameters?.docs?.source}}};const x=["Default","OpenOnClick"];export{o as Default,e as OpenOnClick,x as __namedExportsOrder,T as default};
