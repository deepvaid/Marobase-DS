import AppSwitch from '../components/AppSwitch.vue';

export default {
    title: 'Components/AppSwitch',
    component: AppSwitch,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        color: { control: 'text' },
        inset: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        label: 'Switch Label',
        color: 'primary',
    },
    render: (args) => ({
        components: { AppSwitch },
        setup() {
            return { args };
        },
        template: '<AppSwitch v-bind="args" />',
    }),
};

export const Inset = {
    args: {
        ...Default.args,
        inset: true,
    },
    render: (args) => ({
        components: { AppSwitch },
        setup() {
            return { args };
        },
        template: '<AppSwitch v-bind="args" />',
    }),
};
