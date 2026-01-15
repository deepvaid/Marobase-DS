import AppAlert from '../components/AppAlert.vue';

export default {
    title: 'Components/AppAlert',
    component: AppAlert,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'text' },
        title: { control: 'text' },
        text: { control: 'text' },
        type: {
            control: {
                type: 'select',
                options: ['success', 'info', 'warning', 'error'],
            },
        },
        variant: {
            control: {
                type: 'select',
                options: ['elevated', 'flat', 'tonal', 'outlined'],
            },
        },
        closable: { control: 'boolean' },
        icon: { control: 'text' },
    },
};

export const Default = {
    args: {
        type: 'info',
        title: 'Alert Title',
        text: 'This is an alert message.',
        variant: 'tonal',
    },
    render: (args) => ({
        components: { AppAlert },
        setup() {
            return { args };
        },
        template: '<AppAlert v-bind="args" />',
    }),
};

export const Success = {
    args: {
        ...Default.args,
        type: 'success',
        title: 'Success',
        text: 'Operation completed successfully.',
    },
    render: (args) => ({
        components: { AppAlert },
        setup() {
            return { args };
        },
        template: '<AppAlert v-bind="args" />',
    }),
};
