import { VTextField } from 'vuetify/components';

export default {
    title: 'Components/VTextField',
    component: VTextField,
    tags: ['autodocs'],
    argTypes: {
        // Content
        label: {
            control: 'text',
            description: 'Sets the input label',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        placeholder: {
            control: 'text',
            description: 'Sets the input placeholder',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        hint: {
            control: 'text',
            description: 'Hint text',
            table: { category: 'Props', type: { summary: 'string' } },
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
        baseColor: {
            control: 'text',
            description: 'Sets the color of text fields when not focused',
            table: { category: 'Styles', type: { summary: 'string' } },
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
        clearable: {
            control: 'boolean',
            description: 'Adds a clear icon when input has value',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        errorMessages: {
            control: 'text',
            description: 'Puts the input in an error state and passes through custom error messages',
            table: { category: 'Props', type: { summary: 'string | array' } },
        },
        modelValue: {
            control: 'text',
            description: 'The v-model value of the component',
            table: { category: 'Model', type: { summary: 'any' } },
        },
    },
};

const Template = (args) => ({
    components: { VTextField },
    setup() {
        return { args };
    },
    template: '<v-text-field v-bind="args" />',
});

export const Default = {
    render: Template,
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        color: 'primary',
        variant: 'outlined',
    },
};

export const Filled = {
    render: Template,
    args: {
        label: 'Filled',
        variant: 'filled',
        color: 'primary',
    },
};

export const Underlined = {
    render: Template,
    args: {
        label: 'Underlined',
        variant: 'underlined',
        color: 'primary',
    },
};

export const Compact = {
    render: Template,
    args: {
        label: 'Compact',
        density: 'compact',
        variant: 'outlined',
    },
};

export const ErrorState = {
    render: Template,
    args: {
        label: 'Error',
        color: 'error',
        variant: 'outlined',
        errorMessages: 'This field is required',
    },
};
