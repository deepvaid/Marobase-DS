import{e as o,f as n,g as i,h as l,i as c,b as d,a as p,r as m}from"./iframe-DfNwA3r1.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Components/VDialog",component:o,tags:["autodocs"],argTypes:{width:{control:"text",description:"Sets the width of the dialog",table:{category:"Styles",type:{summary:"string | number"}}},maxWidth:{control:"text",description:"Sets the maximum width of the dialog",table:{category:"Styles",type:{summary:"string | number"}}},scrollable:{control:"boolean",description:"When set to true, expects a v-card and v-card-text component with a designated height",table:{category:"Styles",type:{summary:"boolean"}}},fullscreen:{control:"boolean",description:"Changes layout for fullscreen display",table:{category:"Styles",type:{summary:"boolean"}}},transition:{control:"text",description:"Sets the component transition",table:{category:"Styles",type:{summary:"string"}}},scrim:{control:"text",description:"Accepts a color string or boolean to control the scrim background",table:{category:"Styles",type:{summary:"string | boolean"}}},persistent:{control:"boolean",description:"Clicking outside will not dismiss the dialog",table:{category:"Props",type:{summary:"boolean"}}},retainFocus:{control:"boolean",description:"Tab focus will return to the first child of the dialog on close",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"boolean",description:"The v-model value of the component",table:{category:"Model",type:{summary:"boolean"}}}}},a=r=>({components:{VDialog:o,VBtn:p,VCard:d,VCardTitle:c,VCardText:l,VCardActions:i,VSpacer:n},setup(){const s=m(!1);return{args:r,dialog:s}},template:`
      <v-dialog v-bind="args" v-model="dialog">
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-card-title>Dialog Title</v-card-title>
          <v-card-text>
            This is the content of the dialog. You can put anything here.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    `}),e={render:a,args:{width:"500",persistent:!1}},t={render:a,args:{width:"500",persistent:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    width: '500',
    persistent: false
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    width: '500',
    persistent: true
  }
}`,...t.parameters?.docs?.source}}};const b=["Default","Persistent"];export{e as Default,t as Persistent,b as __namedExportsOrder,y as default};
