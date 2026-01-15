import{c as d,w as i,m as l,E as m,o as c,r as p}from"./iframe-axLoFkyX.js";import"./preload-helper-PPVm8Dsz.js";const n={__name:"AppSheet",props:{color:String,elevation:[Number,String],height:[Number,String],width:[Number,String],rounded:[Boolean,String,Number],border:[Boolean,String,Number]},setup(e){return(s,u)=>(c(),d(m,l(s.$attrs,{color:e.color,elevation:e.elevation,height:e.height,width:e.width,rounded:e.rounded,border:e.border}),{default:i(()=>[p(s.$slots,"default")]),_:3},16,["color","elevation","height","width","rounded","border"]))}};n.__docgenInfo={exportName:"default",displayName:"AppSheet",description:"",tags:{},props:[{name:"color",type:{name:"string"}},{name:"elevation",type:{name:"number|string"}},{name:"height",type:{name:"number|string"}},{name:"width",type:{name:"number|string"}},{name:"rounded",type:{name:"boolean|string|number"}},{name:"border",type:{name:"boolean|string|number"}}],slots:[{name:"default"}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppSheet.vue"]};const y={title:"Components/AppSheet",component:n,tags:["autodocs"],argTypes:{default:{control:"text",description:"The content of the sheet",table:{category:"Slots",type:{summary:"html"}},defaultValue:"Sheet Content"},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},border:{control:"boolean",description:"Adds a thin border to the component",table:{category:"Styles",type:{summary:"boolean"}}},height:{control:"text",description:"Sets the height of the component",table:{category:"Styles",type:{summary:"number | string"}}},width:{control:"text",description:"Sets the width of the component",table:{category:"Styles",type:{summary:"number | string"}}},maxWidth:{control:"text",description:"Sets the maximum width of the component",table:{category:"Styles",type:{summary:"number | string"}}},minWidth:{control:"text",description:"Sets the minimum width of the component",table:{category:"Styles",type:{summary:"number | string"}}}}},a=e=>({components:{AppSheet:n},setup(){return{args:e}},template:'<AppSheet v-bind="args" class="pa-4">{{ args.default }}</AppSheet>'}),t={render:a,args:{elevation:4,height:100,width:200,rounded:"true",default:"Sheet Content"}},r={render:a,args:{elevation:2,height:150,width:150,rounded:"xl",default:"Rounded Sheet",color:"secondary"}},o={render:a,args:{elevation:0,height:100,width:200,border:!0,default:"Bordered Sheet"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    elevation: 4,
    height: 100,
    width: 200,
    rounded: 'true',
    default: 'Sheet Content'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    elevation: 2,
    height: 150,
    width: 150,
    rounded: 'xl',
    default: 'Rounded Sheet',
    color: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    elevation: 0,
    height: 100,
    width: 200,
    border: true,
    default: 'Bordered Sheet'
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","Rounded","Bordered"];export{o as Bordered,t as Default,r as Rounded,b as __namedExportsOrder,y as default};
