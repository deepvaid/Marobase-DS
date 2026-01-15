import{v as n}from"./iframe-B12PdS1D.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/VTable",component:n,tags:["autodocs"],argTypes:{headers:{control:"object",description:"Array of table headers",table:{category:"Props",type:{summary:"array"}}},items:{control:"object",description:"Array of table items",table:{category:"Props",type:{summary:"array"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},theme:{control:"text",description:"Specify a theme for this component",table:{category:"Styles",type:{summary:"string"}}},height:{control:"text",description:"Sets the height for the component",table:{category:"Styles",type:{summary:"string | number"}}},hover:{control:"boolean",description:"Adds a hover effect to table rows",table:{category:"Props",type:{summary:"boolean"}}},fixedHeader:{control:"boolean",description:"Fixes the header to the top of the table",table:{category:"Props",type:{summary:"boolean"}}}}},a=["Name","Calories"],o=[["Frozen Yogurt",159],["Ice cream sandwich",237],["Eclair",262]],s=c=>({components:{VTable:n},setup(){return{args:c}},template:`
      <v-table v-bind="args">
        <thead>
          <tr>
            <th v-for="header in args.headers" :key="header" class="text-left">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in args.items" :key="item[0]">
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
          </tr>
        </tbody>
      </v-table>
    `}),e={render:s,args:{headers:a,items:o,density:"default"}},t={render:s,args:{headers:a,items:o,density:"compact"}},r={render:s,args:{headers:a,items:o,hover:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers,
    items,
    density: 'default'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers,
    items,
    density: 'compact'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers,
    items,
    hover: true
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","Dense","Hover"];export{e as Default,t as Dense,r as Hover,p as __namedExportsOrder,i as default};
