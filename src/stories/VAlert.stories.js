import { VAlert } from 'vuetify/components';

export default {
    title: 'Components/VAlert',
    component: VAlert,
    tags: ['autodocs'],
    argTypes: {
        // Content
        title: {
            control: 'text',
            description: 'The title of the alert',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        text: {
            control: 'text',
            description: 'The content of the alert',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        icon: {
            control: 'text',
            description: 'Icon to display',
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
            options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
            description: 'Applies a distinct style to the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        density: {
            control: 'select',
            options: ['default', 'comfortable', 'compact'],
            description: 'Adjusts the vertical height used by the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        elevation: {
            control: { type: 'range', min: 0, max: 24 },
            description: 'Designates an elevation applied to the component',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        border: {
            control: 'select',
            options: [true, false, 'top', 'end', 'bottom', 'start'],
            description: 'Designates the border side',
            table: { category: 'Styles', type: { summary: 'boolean | string' } },
        },
        rounded: {
            control: 'select',
            options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'],
            description: 'Adds a border radius to the component',
            table: { category: 'Styles', type: { summary: 'string | number | boolean' } },
        },
        // Behavior
        type: {
            control: 'select',
            options: ['success', 'info', 'warning', 'error'],
            description: 'Specify a type for the alert',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        closable: {
            control: 'boolean',
            description: 'Adds a close icon that hides the alert',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        prominent: {
            control: 'boolean',
            description: 'Displays a larger icon and increases height',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        modelValue: {
            control: 'boolean',
            description: 'Controls the visibility of the alert',
            table: { category: 'Model', type: { summary: 'boolean' } },
        },
    },
};

const Template = (args) => ({
    components: { VAlert },
    setup() {
        return { args };
    },
    template: '<v-alert v-bind="args" />',
});

export const Default = {
    render: Template,
    args: {
        type: 'info',
        title: 'Alert Title',
        text: 'This is an alert message.',
        variant: 'tonal',
    },
};

export const Success = {
    render: Template,
    args: {
        type: 'success',
        title: 'Success',
        text: 'Operation completed successfully.',
        variant: 'tonal',
    },
};

export const Warning = {
    render: Template,
    args: {
        type: 'warning',
        title: 'Warning',
        text: 'Please be careful.',
        variant: 'tonal',
    },
};

export const Error = {
    render: Template,
    args: {
        type: 'error',
        title: 'Error',
        text: 'Something went wrong.',
        variant: 'tonal',
    },
};

export const Prominent = {
    render: Template,
    args: {
        type: 'info',
        prominent: true,
        title: 'Prominent Alert',
        text: 'This alert stands out more.',
        variant: 'elevated',
    },
};

export const Outlined = {
    render: Template,
    args: {
        type: 'info',
        variant: 'outlined',
        title: 'Outlined Alert',
        text: 'This alert uses the outlined variant.',
    },
};
