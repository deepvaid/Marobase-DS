import{h as m,m as u,n as y,p as g,q as b,o as f,w as h,r as v,s as C,t as S}from"./iframe-Acq_KjEe.js";import"./preload-helper-PPVm8Dsz.js";const s={__name:"AppChip",props:{color:{type:String,default:"primary"},variant:{type:String,default:"tonal",validator:e=>["elevated","flat","tonal","outlined","text","plain"].includes(e)},closable:{type:Boolean,default:!1}},emits:["click:close"],setup(e){return(t,i)=>(f(),m(b,g(t.$attrs,{color:e.color,variant:e.variant,closable:e.closable,"onClick:close":i[0]||(i[0]=c=>t.$emit("click:close"))}),u({_:2},[y(t.$slots,(c,p)=>({name:p,fn:h(d=>[v(t.$slots,p,C(S(d)))])}))]),1040,["color","variant","closable"]))}};s.__docgenInfo={exportName:"default",displayName:"AppChip",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'tonal'"},values:["elevated","flat","tonal","outlined","text","plain"]},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click:close"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppChip.vue"]};const k={title:"Components/AppChip",component:s,tags:["autodocs"],argTypes:{default:{control:"text",description:"The content of the chip",table:{category:"Slots",type:{summary:"html"}},defaultValue:"Chip Content"},color:{control:"text",description:"Applies specified color to the control",table:{category:"Styles",type:{summary:"string"}}},variant:{control:"select",options:["elevated","flat","tonal","outlined","text","plain"],description:"Applies a distinct style to the component",table:{category:"Styles",type:{summary:"string"}}},size:{control:"select",options:["x-small","small","default","large","x-large"],description:"Sets the height and width of the component",table:{category:"Styles",type:{summary:"string"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Adjusts the vertical height used by the component",table:{category:"Styles",type:{summary:"string"}}},elevation:{control:{type:"range",min:0,max:24},description:"Designates an elevation applied to the component",table:{category:"Styles",type:{summary:"number | string"}}},rounded:{control:"select",options:["0","xs","sm","true","lg","xl","pill","circle","shaped"],description:"Adds a border radius to the component",table:{category:"Styles",type:{summary:"string | number | boolean"}}},closable:{control:"boolean",description:"Adds a close icon",table:{category:"Props",type:{summary:"boolean"}}},draggable:{control:"boolean",description:"Makes the chip draggable",table:{category:"Props",type:{summary:"boolean"}}},filter:{control:"boolean",description:"Displays a selection icon when selected",table:{category:"Props",type:{summary:"boolean"}}},link:{control:"boolean",description:"Designates that the component is a link",table:{category:"Props",type:{summary:"boolean"}}},pill:{control:"boolean",description:"Removes the chip padding",table:{category:"Props",type:{summary:"boolean"}}},ripple:{control:"boolean",description:"Applies the v-ripple directive",table:{category:"Props",type:{summary:"boolean"}}}}},n=e=>({components:{AppChip:s},setup(){return{args:e}},template:'<AppChip v-bind="args">{{ args.default }}</AppChip>'}),a={render:n,args:{default:"Chip Label",color:"primary",variant:"tonal"}},o={render:n,args:{default:"Closable Chip",color:"secondary",variant:"tonal",closable:!0}},r={render:n,args:{default:"Filter Chip",color:"primary",filter:!0}},l={render:n,args:{default:"Outlined Chip",variant:"outlined",color:"primary"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip Label',
    color: 'primary',
    variant: 'tonal'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Closable Chip',
    color: 'secondary',
    variant: 'tonal',
    closable: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Filter Chip',
    color: 'primary',
    filter: true
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Outlined Chip',
    variant: 'outlined',
    color: 'primary'
  }
}`,...l.parameters?.docs?.source}}};const P=["Default","Closable","Filter","Outlined"];export{o as Closable,a as Default,r as Filter,l as Outlined,P as __namedExportsOrder,k as default};
