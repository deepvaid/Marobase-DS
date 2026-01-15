import{p as o,q as a,o as i,a as l}from"./iframe-mUIwl-Cp.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Components/VMenu",component:o,tags:["autodocs"],argTypes:{items:{control:"object",description:"Items to display in the menu list",table:{category:"Props",type:{summary:"array"}}},location:{control:"select",options:["top","bottom","start","end","center"],description:"Aligns the component towards the selected direction",table:{category:"Styles",type:{summary:"string"}}},offset:{control:"number",description:"Sets the offset of the menu",table:{category:"Styles",type:{summary:"string | number | array"}}},disabled:{control:"boolean",description:"Removes the ability to click or target the component",table:{category:"Props",type:{summary:"boolean"}}},openOnHover:{control:"boolean",description:"Designates whether the menu should open on hover",table:{category:"Props",type:{summary:"boolean"}}},closeOnContentClick:{control:"boolean",description:"Designates if menu should close when its content is clicked",table:{category:"Props",type:{summary:"boolean"}}},closeOnBack:{control:"boolean",description:"Closes the menu when the back button is pressed",table:{category:"Props",type:{summary:"boolean"}}},persistent:{control:"boolean",description:"Clicking outside will not dismiss the menu",table:{category:"Props",type:{summary:"boolean"}}}}},n=[{title:"Option 1"},{title:"Option 2"},{title:"Option 3"}],s=r=>({components:{VMenu:o,VBtn:l,VList:i,VListItem:a},setup(){return{args:r}},template:`
      <v-menu v-bind="args">
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary">Open Menu</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in args.items" :key="index" :value="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    `}),e={render:s,args:{items:n,location:"bottom"}},t={render:s,args:{items:n,location:"end",openOnHover:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    location: 'bottom'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    items,
    location: 'end',
    openOnHover: true
  }
}`,...t.parameters?.docs?.source}}};const d=["Default","OpenOnHover"];export{e as Default,t as OpenOnHover,d as __namedExportsOrder,p as default};
