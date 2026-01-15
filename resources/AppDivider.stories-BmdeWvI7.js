import{c as o,m as c,v as p,o as l}from"./iframe-DhnUqBR_.js";import"./preload-helper-PPVm8Dsz.js";const s={__name:"AppDivider",props:{color:String,thickness:[String,Number],vertical:Boolean,inset:Boolean},setup(e){return(i,m)=>(l(),o(p,c(i.$attrs,{color:e.color,thickness:e.thickness,vertical:e.vertical,inset:e.inset}),null,16,["color","thickness","vertical","inset"]))}};s.__docgenInfo={exportName:"default",displayName:"AppDivider",description:"",tags:{},props:[{name:"color",type:{name:"string"}},{name:"thickness",type:{name:"string|number"}},{name:"vertical",type:{name:"boolean"}},{name:"inset",type:{name:"boolean"}}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppDivider.vue"]};const u={title:"Components/AppDivider",component:s,tags:["autodocs"],argTypes:{color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},thickness:{control:"number",description:"Sets the thickness of the divider",table:{category:"Styles",type:{summary:"number | string"}}},inset:{control:"boolean",description:"Adds indentation to the divider",table:{category:"Styles",type:{summary:"boolean"}}},vertical:{control:"boolean",description:"Displays the divider vertically",table:{category:"Styles",type:{summary:"boolean"}}},length:{control:"text",description:"Sets the max-height/width of the divider",table:{category:"Styles",type:{summary:"number | string"}}},opacity:{control:"range",min:0,max:100,description:"Sets the opacity of the divider",table:{category:"Styles",type:{summary:"number | string"}}}}},a=e=>({components:{AppDivider:s},setup(){return{args:e}},template:`
      <div>
        <p>Item 1</p>
        <AppDivider v-bind="args" />
        <p>Item 2</p>
      </div>
    `}),t={render:a,args:{thickness:1}},r={render:e=>({components:{AppDivider:s},setup(){return{args:e}},template:`
      <div class="d-flex align-center" style="height: 50px;">
        <span>Left</span>
        <AppDivider v-bind="args" class="mx-4" />
        <span>Right</span>
      </div>
    `}),args:{thickness:1,vertical:!0}},n={render:a,args:{thickness:1,inset:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    thickness: 1
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AppDivider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="d-flex align-center" style="height: 50px;">
        <span>Left</span>
        <AppDivider v-bind="args" class="mx-4" />
        <span>Right</span>
      </div>
    \`
  }),
  args: {
    thickness: 1,
    vertical: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    thickness: 1,
    inset: true
  }
}`,...n.parameters?.docs?.source}}};const y=["Horizontal","Vertical","Inset"];export{t as Horizontal,n as Inset,r as Vertical,y as __namedExportsOrder,u as default};
