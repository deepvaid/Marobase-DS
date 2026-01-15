import{c as a,m as i,v as o,o as p}from"./iframe-CPoBs-Jw.js";import"./preload-helper-PPVm8Dsz.js";const t={__name:"AppDivider",props:{color:String,thickness:[String,Number],vertical:Boolean,inset:Boolean},setup(e){return(s,c)=>(p(),a(o,i(s.$attrs,{color:e.color,thickness:e.thickness,vertical:e.vertical,inset:e.inset}),null,16,["color","thickness","vertical","inset"]))}};t.__docgenInfo={exportName:"default",displayName:"AppDivider",description:"",tags:{},props:[{name:"color",type:{name:"string"}},{name:"thickness",type:{name:"string|number"}},{name:"vertical",type:{name:"boolean"}},{name:"inset",type:{name:"boolean"}}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppDivider.vue"]};const d={title:"Components/AppDivider",component:t,tags:["autodocs"],argTypes:{color:{control:"text"},thickness:{control:"number"},vertical:{control:"boolean"},inset:{control:"boolean"}}},n={args:{thickness:1},render:e=>({components:{AppDivider:t},setup(){return{args:e}},template:`
      <div>
        <p>Item 1</p>
        <AppDivider v-bind="args" />
        <p>Item 2</p>
      </div>
    `})},r={args:{thickness:1,vertical:!0},render:e=>({components:{AppDivider:t},setup(){return{args:e}},template:`
      <div class="d-flex align-center" style="height: 50px;">
        <span>Left</span>
        <AppDivider v-bind="args" class="mx-4" />
        <span>Right</span>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 1
  },
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
      <div>
        <p>Item 1</p>
        <AppDivider v-bind="args" />
        <p>Item 2</p>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 1,
    vertical: true
  },
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
  })
}`,...r.parameters?.docs?.source}}};const v=["Horizontal","Vertical"];export{n as Horizontal,r as Vertical,v as __namedExportsOrder,d as default};
