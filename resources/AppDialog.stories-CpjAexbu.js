import{h as c,m as u,w as o,p as g,u as y,o as f,r as p,s as b,t as v,v as s,b as h,x as w,i as d,y as V,a as A,z as D}from"./iframe-Acq_KjEe.js";import{_ as S}from"./AppButton-BnMFi8y3.js";import"./preload-helper-PPVm8Dsz.js";const i={__name:"AppDialog",props:{modelValue:Boolean,width:{type:[String,Number],default:"auto"},persistent:Boolean},emits:["update:modelValue"],setup(a){return(e,t)=>(f(),c(y,g(e.$attrs,{"model-value":a.modelValue,"onUpdate:modelValue":t[1]||(t[1]=r=>e.$emit("update:modelValue",r)),width:a.width,persistent:a.persistent}),u({default:o(()=>[p(e.$slots,"default",{},()=>[s(h,null,{default:o(()=>[s(w,null,{default:o(()=>[...t[2]||(t[2]=[d("Dialog Content",-1)])]),_:1}),s(V,null,{default:o(()=>[s(A,{color:"primary",block:"",onClick:t[0]||(t[0]=r=>e.$emit("update:modelValue",!1))},{default:o(()=>[...t[3]||(t[3]=[d("Close",-1)])]),_:1})]),_:1})]),_:1})])]),_:2},[e.$slots.activator?{name:"activator",fn:o(r=>[p(e.$slots,"activator",b(v(r)))]),key:"0"}:void 0]),1040,["model-value","width","persistent"]))}};i.__docgenInfo={exportName:"default",displayName:"AppDialog",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"}},{name:"width",type:{name:"string|number"},defaultValue:{func:!1,value:"'auto'"}},{name:"persistent",type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppDialog.vue"]};const T={title:"Components/AppDialog",component:i,tags:["autodocs"],argTypes:{width:{control:"text",description:"Sets the width of the dialog",table:{category:"Styles",type:{summary:"string | number"}}},maxWidth:{control:"text",description:"Sets the maximum width of the dialog",table:{category:"Styles",type:{summary:"string | number"}}},scrollable:{control:"boolean",description:"When set to true, expects a v-card and v-card-text component with a designated height",table:{category:"Styles",type:{summary:"boolean"}}},fullscreen:{control:"boolean",description:"Changes layout for fullscreen display",table:{category:"Styles",type:{summary:"boolean"}}},transition:{control:"text",description:"Sets the component transition",table:{category:"Styles",type:{summary:"string"}}},scrim:{control:"text",description:"Accepts a color string or boolean to control the scrim background",table:{category:"Styles",type:{summary:"string | boolean"}}},persistent:{control:"boolean",description:"Clicking outside will not dismiss the dialog",table:{category:"Props",type:{summary:"boolean"}}},retainFocus:{control:"boolean",description:"Tab focus will return to the first child of the dialog on close",table:{category:"Props",type:{summary:"boolean"}}},modelValue:{control:"boolean",description:"The v-model value of the component",table:{category:"Model",type:{summary:"boolean"}}}}},m=a=>({components:{AppDialog:i,AppButton:S},setup(){const e=D(!1);return{args:a,dialog:e}},template:`
      <AppDialog v-bind="args" v-model="dialog">
        <template #activator="{ props }">
          <AppButton v-bind="props" color="primary">Open Dialog</AppButton>
        </template>
        <v-card>
          <v-card-title>Dialog Title</v-card-title>
          <v-card-text>
            This is the content of the dialog. You can put anything here.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <AppButton color="primary" variant="text" @click="dialog = false">Close</AppButton>
          </v-card-actions>
        </v-card>
      </AppDialog>
    `}),n={render:m,args:{width:"500",persistent:!1}},l={render:m,args:{width:"500",persistent:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    width: '500',
    persistent: false
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    width: '500',
    persistent: true
  }
}`,...l.parameters?.docs?.source}}};const k=["Default","Persistent"];export{n as Default,l as Persistent,k as __namedExportsOrder,T as default};
