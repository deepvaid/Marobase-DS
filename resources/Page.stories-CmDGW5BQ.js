import{M as m}from"./Header-69YM6V0B.js";import{y as g,q as d,M as h,O as y,o as v}from"./iframe-Brs_epFi.js";import{_ as f}from"./Button-evTXqfph.js";import"./preload-helper-PPVm8Dsz.js";const c={name:"my-page",components:{MyHeader:m},data(){return{user:null}},methods:{onLogin(){this.user={name:"Jane Doe"}},onLogout(){this.user=null},onCreateAccount(){this.user={name:"Jane Doe"}}}};function w(s,e,o,i,u,a){const l=y("my-header");return v(),g("article",null,[d(l,{user:u.user,onLogin:a.onLogin,onLogout:a.onLogout,onCreateAccount:a.onCreateAccount},null,8,["user","onLogin","onLogout","onCreateAccount"]),e[0]||(e[0]=h('<section class="storybook-page"><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1))])}const p=f(c,[["render",w]]);c.__docgenInfo={displayName:"my-page",exportName:"default",description:"",tags:{},sourceFiles:["/Users/0619mpind/.gemini/antigravity/playground/outer-constellation/my-vuetify-system/src/stories/Page.vue"]};const{expect:r,userEvent:_,within:B}=__STORYBOOK_MODULE_TEST__,T={title:"Example/Page",component:p,parameters:{layout:"fullscreen"}},t={},n={render:()=>({components:{MyPage:p},template:"<my-page />"}),play:async({canvasElement:s})=>{const e=B(s),o=e.getByRole("button",{name:/Log in/i});await r(o).toBeInTheDocument(),await _.click(o),await r(o).not.toBeInTheDocument();const i=e.getByRole("button",{name:/Log out/i});await r(i).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MyPage
    },
    template: '<my-page />'
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const I=["LoggedOut","LoggedIn"];export{n as LoggedIn,t as LoggedOut,I as __namedExportsOrder,T as default};
