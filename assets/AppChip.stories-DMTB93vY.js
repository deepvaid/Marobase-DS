import{c as i,f as c,g as u,m as d,l as m,o as f,w as g,r as C,n as v,i as b}from"./iframe-DeKf58vn.js";import"./preload-helper-PPVm8Dsz.js";const r={__name:"AppChip",props:{color:{type:String,default:"primary"},variant:{type:String,default:"tonal",validator:e=>["elevated","flat","tonal","outlined","text","plain"].includes(e)},closable:{type:Boolean,default:!1}},emits:["click:close"],setup(e){return(a,o)=>(f(),i(m,d(a.$attrs,{color:e.color,variant:e.variant,closable:e.closable,"onClick:close":o[0]||(o[0]=s=>a.$emit("click:close"))}),c({_:2},[u(a.$slots,(s,l)=>({name:l,fn:g(p=>[C(a.$slots,l,v(b(p)))])}))]),1040,["color","variant","closable"]))}};r.__docgenInfo={exportName:"default",displayName:"AppChip",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'tonal'"},values:["elevated","flat","tonal","outlined","text","plain"]},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click:close"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppChip.vue"]};const A={title:"Components/AppChip",component:r,tags:["autodocs"],argTypes:{label:{control:"text"},color:{control:"text"},variant:{control:{type:"select",options:["elevated","flat","tonal","outlined","text","plain"]}},closable:{control:"boolean"}}},t={args:{default:"Chip Label",color:"primary"},render:e=>({components:{AppChip:r},setup(){return{args:e}},template:'<AppChip v-bind="args">{{ args.default }}</AppChip>'})},n={args:{default:"Closable Chip",color:"secondary",closable:!0},render:e=>({components:{AppChip:r},setup(){return{args:e}},template:'<AppChip v-bind="args">{{ args.default }}</AppChip>'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'Chip Label',
    color: 'primary'
  },
  render: args => ({
    components: {
      AppChip
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppChip v-bind="args">{{ args.default }}</AppChip>'
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'Closable Chip',
    color: 'secondary',
    closable: true
  },
  render: args => ({
    components: {
      AppChip
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppChip v-bind="args">{{ args.default }}</AppChip>'
  })
}`,...n.parameters?.docs?.source}}};const k=["Default","Closable"];export{n as Closable,t as Default,k as __namedExportsOrder,A as default};
