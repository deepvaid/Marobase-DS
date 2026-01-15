import{c as d,f as u,w as a,m,p as c,o as g,r as p,n as v,i as f,q as r,j as A,s as D,a as i,t as y,V,u as B}from"./iframe-CPoBs-Jw.js";import{_ as h}from"./AppButton-sBWcn_Gp.js";import"./preload-helper-PPVm8Dsz.js";const l={__name:"AppDialog",props:{modelValue:Boolean,width:{type:[String,Number],default:"auto"},persistent:Boolean},emits:["update:modelValue"],setup(o){return(e,t)=>(g(),d(c,m(e.$attrs,{"model-value":o.modelValue,"onUpdate:modelValue":t[1]||(t[1]=n=>e.$emit("update:modelValue",n)),width:o.width,persistent:o.persistent}),u({default:a(()=>[p(e.$slots,"default",{},()=>[r(A,null,{default:a(()=>[r(D,null,{default:a(()=>[...t[2]||(t[2]=[i("Dialog Content",-1)])]),_:1}),r(y,null,{default:a(()=>[r(V,{color:"primary",block:"",onClick:t[0]||(t[0]=n=>e.$emit("update:modelValue",!1))},{default:a(()=>[...t[3]||(t[3]=[i("Close",-1)])]),_:1})]),_:1})]),_:1})])]),_:2},[e.$slots.activator?{name:"activator",fn:a(n=>[p(e.$slots,"activator",v(f(n)))]),key:"0"}:void 0]),1040,["model-value","width","persistent"]))}};l.__docgenInfo={exportName:"default",displayName:"AppDialog",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"}},{name:"width",type:{name:"string|number"},defaultValue:{func:!1,value:"'auto'"}},{name:"persistent",type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/components/AppDialog.vue"]};const x={title:"Components/AppDialog",component:l,tags:["autodocs"],argTypes:{width:{control:"text"},persistent:{control:"boolean"}}},s={args:{width:"500"},render:o=>({components:{AppDialog:l,AppButton:h},setup(){const e=B(!1);return{args:o,dialog:e}},template:`
      <AppDialog v-bind="args" v-model="dialog">
        <template #activator="{ props }">
          <AppButton v-bind="props">Open Dialog</AppButton>
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
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    width: '500'
  },
  render: args => ({
    components: {
      AppDialog,
      AppButton
    },
    setup() {
      const dialog = ref(false);
      return {
        args,
        dialog
      };
    },
    template: \`
      <AppDialog v-bind="args" v-model="dialog">
        <template #activator="{ props }">
          <AppButton v-bind="props">Open Dialog</AppButton>
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
    \`
  })
}`,...s.parameters?.docs?.source}}};const $=["Default"];export{s as Default,$ as __namedExportsOrder,x as default};
