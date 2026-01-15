import AppDivider from '../components/AppDivider.vue';

export default {
    title: 'Components/AppDivider',
    component: AppDivider,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'text' },
        thickness: { control: 'number' },
        vertical: { control: 'boolean' },
        inset: { control: 'boolean' },
    },
};

export const Horizontal = {
    args: {
        thickness: 1,
    },
    render: (args) => ({
        components: { AppDivider },
        setup() {
            return { args };
        },
        template: `
      <div>
        <p>Item 1</p>
        <AppDivider v-bind="args" />
        <p>Item 2</p>
      </div>
    `,
    }),
};

export const Vertical = {
    args: {
        thickness: 1,
        vertical: true,
    },
    render: (args) => ({
        components: { AppDivider },
        setup() {
            return { args };
        },
        template: `
      <div class="d-flex align-center" style="height: 50px;">
        <span>Left</span>
        <AppDivider v-bind="args" class="mx-4" />
        <span>Right</span>
      </div>
    `,
    }),
};
