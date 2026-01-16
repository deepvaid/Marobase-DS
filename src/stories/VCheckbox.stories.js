import { VCheckbox } from 'vuetify/components';

export default {
    title: 'Components/VCheckbox',
    component: VCheckbox,
    tags: ['autodocs'],
    argTypes: {
        // Content
        label: {
            control: 'text',
            description: 'Sets the label',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        // Styles
        color: {
            control: 'text',
            description: 'Applies specified color to the control',
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
        indeterminate: {
            control: 'boolean',
            description: 'Sets an indeterminate state for the checkbox',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        modelValue: {
            control: 'boolean',
            description: 'The v-model value of the component',
            table: { category: 'Model', type: { summary: 'any' } },
        },
    },
};

const Template = (args) => ({
    components: { VCheckbox },
    setup() {
        return { args };
    },
    template: '<v-checkbox v-bind="args" />',
});

export const Default = {
    render: Template,
    args: {
        label: 'Checkbox Label',
        color: 'primary',
    },
};

export const Indeterminate = {
    render: Template,
    args: {
        label: 'Indeterminate Checkbox',
        color: 'primary',
        indeterminate: true,
    },
};

export const Density = {
    render: Template,
    args: {
        label: 'Compact Checkbox',
        density: 'compact',
        color: 'primary',
    },
};
