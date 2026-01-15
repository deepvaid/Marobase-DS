import{_ as o}from"./AppButton-LqMIXbhV.js";import"./iframe-B0S4ocO_.js";import"./preload-helper-DUhKpxZN.js";const u={title:"Components/AppButton",component:o,tags:["autodocs"],argTypes:{color:{control:"text"},variant:{control:{type:"select",options:["elevated","flat","tonal","outlined","text","plain"]}},default:{control:"text"}}},n={args:{color:"primary",default:"Primary Button"},render:t=>({components:{AppButton:o},setup(){return{args:t}},template:'<AppButton v-bind="args">{{ args.default }}</AppButton>'})},r={args:{color:"secondary",default:"Secondary Button"},render:t=>({components:{AppButton:o},setup(){return{args:t}},template:'<AppButton v-bind="args">{{ args.default }}</AppButton>'})},e={args:{color:"primary",variant:"outlined",default:"Outlined Button"},render:t=>({components:{AppButton:o},setup(){return{args:t}},template:'<AppButton v-bind="args">{{ args.default }}</AppButton>'})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    default: 'Primary Button'
  },
  render: args => ({
    components: {
      AppButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppButton v-bind="args">{{ args.default }}</AppButton>'
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    default: 'Secondary Button'
  },
  render: args => ({
    components: {
      AppButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppButton v-bind="args">{{ args.default }}</AppButton>'
  })
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'outlined',
    default: 'Outlined Button'
  },
  render: args => ({
    components: {
      AppButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppButton v-bind="args">{{ args.default }}</AppButton>'
  })
}`,...e.parameters?.docs?.source}}};const d=["Primary","Secondary","Outlined"];export{e as Outlined,n as Primary,r as Secondary,d as __namedExportsOrder,u as default};
