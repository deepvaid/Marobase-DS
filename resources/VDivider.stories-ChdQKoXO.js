import{j as n}from"./iframe-DfNwA3r1.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/VDivider",component:n,tags:["autodocs"],argTypes:{color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},thickness:{control:"number",description:"Sets the thickness of the divider",table:{category:"Styles",type:{summary:"number | string"}}},inset:{control:"boolean",description:"Adds indentation to the divider",table:{category:"Styles",type:{summary:"boolean"}}},vertical:{control:"boolean",description:"Displays the divider vertically",table:{category:"Styles",type:{summary:"boolean"}}},length:{control:"text",description:"Sets the max-height/width of the divider",table:{category:"Styles",type:{summary:"number | string"}}},opacity:{control:"range",min:0,max:100,description:"Sets the opacity of the divider",table:{category:"Styles",type:{summary:"number | string"}}}}},a=s=>({components:{VDivider:n},setup(){return{args:s}},template:`
      <div>
        <p>Item 1</p>
        <v-divider v-bind="args" />
        <p>Item 2</p>
      </div>
    `}),e={render:a,args:{thickness:1}},t={render:s=>({components:{VDivider:n},setup(){return{args:s}},template:`
      <div class="d-flex align-center" style="height: 50px;">
        <span>Left</span>
        <v-divider v-bind="args" class="mx-4" />
        <span>Right</span>
      </div>
    `}),args:{thickness:1,vertical:!0}},r={render:a,args:{thickness:1,inset:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    thickness: 1
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VDivider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="d-flex align-center" style="height: 50px;">
        <span>Left</span>
        <v-divider v-bind="args" class="mx-4" />
        <span>Right</span>
      </div>
    \`
  }),
  args: {
    thickness: 1,
    vertical: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    thickness: 1,
    inset: true
  }
}`,...r.parameters?.docs?.source}}};const p=["Horizontal","Vertical","Inset"];export{e as Horizontal,r as Inset,t as Vertical,p as __namedExportsOrder,c as default};
