import { VSelect } from 'vuetify/components';

export default {
    title: 'Components/VSelect',
    component: VSelect,
    tags: ['autodocs'],
    argTypes: {
        // Content
        label: {
            control: 'text',
            description: 'Sets the input label',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        items: {
            control: 'object',
            description: 'Can be an array of objects or strings',
            table: { category: 'Props', type: { summary: 'array' } },
        },
        // Styles
        color: {
            control: 'text',
            description: 'Applies specified color to the control',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        variant: {
            control: 'select',
            options: ['filled', 'outlined', 'plain', 'underlined', 'solo', 'solo-inverted', 'solo-filled'],
            description: 'Applies a distinct style to the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        density: {
            control: 'select',
            options: ['default', 'comfortable', 'compact'],
            description: 'Adjusts the vertical height used by the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        // Behavior
        disabled: {
            control: 'boolean',
            description: 'Removes the ability to click or target the component',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        multiple: {
            control: 'boolean',
            description: 'Changes select to multiple. Accepts array for value',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        chips: {
            control: 'boolean',
            description: 'Changes display of selections to chips',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        clearable: {
            control: 'boolean',
            description: 'Adds a clear icon when input has value',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        modelValue: {
            control: 'object',
            description: 'The v-model value of the component',
            table: { category: 'Model', type: { summary: 'any' } },
        },
    },
};

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const Template = (args) => ({
    components: { VSelect },
    setup() {
        return { args };
    },
    template: '<v-select v-bind="args" />',
});

export const Default = {
    render: Template,
    args: {
        label: 'Select Item',
        items,
        color: 'primary',
        variant: 'outlined',
    },
};

export const Multiple = {
    render: Template,
    args: {
        label: 'Select Multiple',
        items,
        color: 'primary',
        variant: 'outlined',
        multiple: true,
        chips: true,
    },
};

export const Filled = {
    render: Template,
    args: {
        label: 'Filled Select',
        items,
        variant: 'filled',
    },
};
