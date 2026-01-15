import{c as o,f as c,g as p,m as i,h as u,o as d,w as m,r as f,n as g,i as y}from"./iframe-D_wd5sgK.js";import"./preload-helper-DUhKpxZN.js";const a={__name:"AppAlert",props:{color:{type:String,default:void 0},variant:{type:String,default:"flat",validator:e=>["elevated","flat","tonal","outlined"].includes(e)},type:{type:String,default:void 0,validator:e=>["success","info","warning","error"].includes(e)},closable:{type:Boolean,default:!1}},setup(e){return(r,A)=>(d(),o(u,i(r.$attrs,{color:e.color,variant:e.variant,type:e.type,closable:e.closable}),c({_:2},[p(r.$slots,(v,s)=>({name:s,fn:m(l=>[f(r.$slots,s,g(y(l)))])}))]),1040,["color","variant","type","closable"]))}};a.__docgenInfo={exportName:"default",displayName:"AppAlert",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'flat'"},values:["elevated","flat","tonal","outlined"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"undefined"},values:["success","info","warning","error"]},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppAlert.vue"]};const S={title:"Components/AppAlert",component:a,tags:["autodocs"],argTypes:{color:{control:"text"},title:{control:"text"},text:{control:"text"},type:{control:{type:"select",options:["success","info","warning","error"]}},variant:{control:{type:"select",options:["elevated","flat","tonal","outlined"]}},closable:{control:"boolean"},icon:{control:"text"}}},t={args:{type:"info",title:"Alert Title",text:"This is an alert message.",variant:"tonal"},render:e=>({components:{AppAlert:a},setup(){return{args:e}},template:'<AppAlert v-bind="args" />'})},n={args:{...t.args,type:"success",title:"Success",text:"Operation completed successfully."},render:e=>({components:{AppAlert:a},setup(){return{args:e}},template:'<AppAlert v-bind="args" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Alert Title',
    text: 'This is an alert message.',
    variant: 'tonal'
  },
  render: args => ({
    components: {
      AppAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppAlert v-bind="args" />'
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'success',
    title: 'Success',
    text: 'Operation completed successfully.'
  },
  render: args => ({
    components: {
      AppAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<AppAlert v-bind="args" />'
  })
}`,...n.parameters?.docs?.source}}};const h=["Default","Success"];export{t as Default,n as Success,h as __namedExportsOrder,S as default};
