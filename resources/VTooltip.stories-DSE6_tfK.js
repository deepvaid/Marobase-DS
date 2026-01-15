import{x as e,a as s}from"./iframe-mUIwl-Cp.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Components/VTooltip",component:e,tags:["autodocs"],argTypes:{text:{control:"text",description:"The content of the tooltip",table:{category:"Props",type:{summary:"string"}}},location:{control:"select",options:["top","bottom","start","end"],description:"Aligns the component towards the selected direction",table:{category:"Styles",type:{summary:"string"}}},origin:{control:"select",options:["auto","overlap","top","bottom","start","end"],description:"Sets the transition origin",table:{category:"Styles",type:{summary:"string"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},openOnHover:{control:"boolean",description:"Designates whether the tooltip should open on hover",table:{category:"Props",type:{summary:"boolean"}}},openOnClick:{control:"boolean",description:"Designates whether the tooltip should open on click",table:{category:"Props",type:{summary:"boolean"}}}}},r=n=>({components:{VTooltip:e,VBtn:s},setup(){return{args:n}},template:`
      <div class="ma-10">
        <v-tooltip v-bind="args">
          <template #activator="{ props }">
            <v-btn v-bind="props" color="primary">Hover me</v-btn>
          </template>
        </v-tooltip>
      </div>
    `}),t={render:r,args:{text:"This is a tooltip",location:"top"}},o={render:r,args:{text:"Clicked!",location:"bottom",openOnHover:!1,openOnClick:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: 'This is a tooltip',
    location: 'top'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: 'Clicked!',
    location: 'bottom',
    openOnHover: false,
    openOnClick: true
  }
}`,...o.parameters?.docs?.source}}};const l=["Default","OpenOnClick"];export{t as Default,o as OpenOnClick,l as __namedExportsOrder,p as default};
