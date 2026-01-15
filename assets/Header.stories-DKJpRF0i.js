import{M as s}from"./Header-DvZLtXa9.js";import"./Button-CsUy7fV9.js";import"./iframe-B0S4ocO_.js";import"./preload-helper-DUhKpxZN.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,m={title:"Example/Header",component:s,tags:["autodocs"],render:a=>({components:{MyHeader:s},setup(){return{...a}},template:'<my-header :user="user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:o(),onLogout:o(),onCreateAccount:o()}},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...r.parameters?.docs?.source}}};const p=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,p as __namedExportsOrder,m as default};
