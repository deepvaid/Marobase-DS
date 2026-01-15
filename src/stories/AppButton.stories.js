import AppButton from '../components/AppButton.vue';

export default {
    title: 'Components/AppButton',
    component: AppButton,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'text' },
        variant: {
            control: {
                type: 'select',
                options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
            },
        },
        default: { control: 'text' },
    },
};

export const Primary = {
    args: {
        color: 'primary',
        default: 'Primary Button',
    },
    render: (args) => ({
        components: { AppButton },
        setup() {
            return { args };
        },
        template: '<AppButton v-bind="args">{{ args.default }}</AppButton>',
    }),
};

export const Secondary = {
    args: {
        color: 'secondary',
        default: 'Secondary Button',
    },
    render: (args) => ({
        components: { AppButton },
        setup() {
            return { args };
        },
        template: '<AppButton v-bind="args">{{ args.default }}</AppButton>',
    }),
};

export const Outlined = {
    args: {
        color: 'primary',
        variant: 'outlined',
        default: 'Outlined Button',
    },
    render: (args) => ({
        components: { AppButton },
        setup() {
            return { args };
        },
        template: '<AppButton v-bind="args">{{ args.default }}</AppButton>',
    }),
};
