import{M as t}from"./Button-IeCqvGtg.js";import"./iframe-BX8w7LxZ.js";import"./preload-helper-DUhKpxZN.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,p={title:"Example/Button",component:t,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},backgroundColor:{control:"color"}},args:{onClick:n()}},r={args:{primary:!0,label:"Button"}},a={args:{label:"Button"}},e={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}},s={args:{primary:!1,label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: "Button"
  }
}`,...s.parameters?.docs?.source}}};const u=["Primary","Secondary","Large","Small","Mystorybook"];export{e as Large,s as Mystorybook,r as Primary,a as Secondary,o as Small,u as __namedExportsOrder,p as default};
