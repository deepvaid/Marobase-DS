import AppSelect from '../components/AppSelect.vue';

export default {
    title: 'Components/AppSelect',
    component: AppSelect,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        items: { control: 'object' },
        color: { control: 'text' },
        variant: {
            control: {
                type: 'select',
                options: ['filled', 'outlined', 'plain', 'underlined', 'solo'],
            },
        },
        multiple: { control: 'boolean' },
        chips: { control: 'boolean' },
    },
};

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

export const Default = {
    args: {
        label: 'Select Item',
        items,
        color: 'primary',
        variant: 'outlined',
    },
    render: (args) => ({
        components: { AppSelect },
        setup() {
            return { args };
        },
        template: '<AppSelect v-bind="args" />',
    }),
};

export const Multiple = {
    args: {
        ...Default.args,
        label: 'Select Multiple',
        multiple: true,
        chips: true,
    },
    render: (args) => ({
        components: { AppSelect },
        setup() {
            return { args };
        },
        template: '<AppSelect v-bind="args" />',
    }),
};
