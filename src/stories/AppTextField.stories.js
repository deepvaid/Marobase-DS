import AppTextField from '../components/AppTextField.vue';

export default {
    title: 'Components/AppTextField',
    component: AppTextField,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        color: { control: 'text' },
        variant: {
            control: {
                type: 'select',
                options: ['filled', 'outlined', 'plain', 'underlined', 'solo'],
            },
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        errorMessages: { control: 'text' },
    },
};

export const Default = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        color: 'primary',
        variant: 'outlined',
    },
    render: (args) => ({
        components: { AppTextField },
        setup() {
            return { args };
        },
        template: '<AppTextField v-bind="args" />',
    }),
};

export const WithValue = {
    args: {
        ...Default.args,
        modelValue: 'Initial Value',
    },
    render: (args) => ({
        components: { AppTextField },
        setup() {
            return { args };
        },
        template: '<AppTextField v-bind="args" />',
    }),
};

export const ErrorState = {
    args: {
        ...Default.args,
        errorMessages: 'This field is required',
    },
    render: (args) => ({
        components: { AppTextField },
        setup() {
            return { args };
        },
        template: '<AppTextField v-bind="args" />',
    }),
};
