import{c as o,w as a,m as s,E as i,o as d,r as p}from"./iframe-BRiC_UZM.js";import"./preload-helper-PPVm8Dsz.js";const n={__name:"AppSheet",props:{color:String,elevation:[Number,String],height:[Number,String],width:[Number,String],rounded:[Boolean,String,Number],border:[Boolean,String,Number]},setup(e){return(r,m)=>(d(),o(i,s(r.$attrs,{color:e.color,elevation:e.elevation,height:e.height,width:e.width,rounded:e.rounded,border:e.border}),{default:a(()=>[p(r.$slots,"default")]),_:3},16,["color","elevation","height","width","rounded","border"]))}};n.__docgenInfo={exportName:"default",displayName:"AppSheet",description:"",tags:{},props:[{name:"color",type:{name:"string"}},{name:"elevation",type:{name:"number|string"}},{name:"height",type:{name:"number|string"}},{name:"width",type:{name:"number|string"}},{name:"rounded",type:{name:"boolean|string|number"}},{name:"border",type:{name:"boolean|string|number"}}],slots:[{name:"default"}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppSheet.vue"]};const c={title:"Components/AppSheet",component:n,tags:["autodocs"],argTypes:{color:{control:"text"},elevation:{control:{type:"range",min:0,max:24}},height:{control:"text"},width:{control:"text"},rounded:{control:"boolean"},border:{control:"boolean"}}},t={args:{elevation:4,height:100,width:200,rounded:!0},render:e=>({components:{AppSheet:n},setup(){return{args:e}},template:'<AppSheet v-bind="args" class="pa-4">Sheet Content</AppSheet>'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 4,
    height: 100,
    width: 200,
    rounded: true
  },
  render: args => ({
    components: {
      AppSheet
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppSheet v-bind="args" class="pa-4">Sheet Content</AppSheet>'
  })
}`,...t.parameters?.docs?.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,c as default};
