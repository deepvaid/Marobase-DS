import AppCheckbox from '../components/AppCheckbox.vue';

export default {
    title: 'Components/AppCheckbox',
    component: AppCheckbox,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        color: { control: 'text' },
        disabled: { control: 'boolean' },
        indeterminate: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        label: 'Checkbox Label',
        color: 'primary',
    },
    render: (args) => ({
        components: { AppCheckbox },
        setup() {
            return { args };
        },
        template: '<AppCheckbox v-bind="args" />',
    }),
};
