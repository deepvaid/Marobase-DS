import { VSwitch } from 'vuetify/components';

export default {
    title: 'Components/VSwitch',
    component: VSwitch,
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
        inset: {
            control: 'boolean',
            description: 'Applies the inset style',
            table: { category: 'Styles', type: { summary: 'boolean' } },
        },
        flat: {
            control: 'boolean',
            description: 'Removes the shadow',
            table: { category: 'Styles', type: { summary: 'boolean' } },
        },
        // Behavior
        disabled: {
            control: 'boolean',
            description: 'Removes the ability to click or target the component',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        loading: {
            control: 'boolean',
            description: 'Displays linear progress bar',
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
    components: { VSwitch },
    setup() {
        return { args };
    },
    template: '<v-switch v-bind="args" />',
});

export const Default = {
    render: Template,
    args: {
        label: 'Switch Label',
        color: 'primary',
    },
};

export const Inset = {
    render: Template,
    args: {
        label: 'Inset Switch',
        color: 'primary',
        inset: true,
    },
};

export const Color = {
    render: Template,
    args: {
        label: 'Success Switch',
        color: 'success',
        modelValue: true,
        inset: true,
    },
};
