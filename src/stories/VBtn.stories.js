import { VBtn } from 'vuetify/components';

export default {
    title: 'Components/VBtn',
    component: VBtn,
    tags: ['autodocs'],
    argTypes: {
        // Content
        default: {
            control: 'text',
            description: 'The content of the button',
            table: {
                category: 'Slots',
                type: { summary: 'html' },
            },
            defaultValue: 'Button',
        },
        prependIcon: {
            control: 'text',
            description: 'Creates a v-icon in the prepend slot',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        appendIcon: {
            control: 'text',
            description: 'Creates a v-icon in the append slot',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        // Styles
        color: {
            control: 'text',
            description: 'Applies specified color to the control',
            table: {
                category: 'Styles',
                type: { summary: 'string' },
            },
        },
        variant: {
            control: 'select',
            options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
            description: 'Applies a distinct style to the component',
            table: {
                category: 'Styles',
                type: { summary: 'string' },
            },
        },
        size: {
            control: 'select',
            options: ['x-small', 'small', 'default', 'large', 'x-large'],
            description: 'Sets the height and width of the component',
            table: {
                category: 'Styles',
                type: { summary: 'string' },
            },
        },
        density: {
            control: 'select',
            options: ['default', 'comfortable', 'compact'],
            description: 'Adjusts the vertical height used by the component',
            table: {
                category: 'Styles',
                type: { summary: 'string' },
            },
        },
        rounded: {
            control: 'select',
            options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'],
            description: 'Adds a border radius to the component',
            table: {
                category: 'Styles',
                type: { summary: 'string | number | boolean' },
            },
        },
        elevation: {
            control: { type: 'range', min: 0, max: 24 },
            description: 'Designates an elevation applied to the component between 0 and 24',
            table: {
                category: 'Styles',
                type: { summary: 'number | string' },
            },
        },
        // Booleans
        block: {
            control: 'boolean',
            description: 'Expands the button to 100% of available space',
            table: {
                category: 'Props',
                type: { summary: 'boolean' },
            },
        },
        ripple: {
            control: 'boolean',
            description: 'Applies the v-ripple directive',
            table: {
                category: 'Props',
                type: { summary: 'boolean' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Removes the ability to click or target the component',
            table: {
                category: 'Props',
                type: { summary: 'boolean' },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Displays linear progress bar',
            table: {
                category: 'Props',
                type: { summary: 'boolean' },
            },
        },
        stacked: {
            control: 'boolean',
            description: 'Displays multiple children in a vertical stack',
            table: {
                category: 'Props',
                type: { summary: 'boolean' },
            },
        },
        icon: {
            control: 'boolean',
            description: 'Designates the button as an icon button',
            table: { category: 'Props', type: { summary: 'boolean | string' } }
        },
        // Events
        onClick: {
            action: 'click',
            description: 'Emitted when the component is clicked',
            table: {
                category: 'Events',
            },
        },
    },
};

const Template = (args) => ({
    components: { VBtn },
    setup() {
        return { args };
    },
    template: '<v-btn v-bind="args">{{ args.default }}</v-btn>',
});

export const Primary = {
    render: Template,
    args: {
        color: 'primary',
        variant: 'elevated',
        default: 'Primary Button',
    },
};

export const Secondary = {
    render: Template,
    args: {
        color: 'secondary',
        variant: 'flat',
        default: 'Secondary Button',
    },
};

export const Outlined = {
    render: Template,
    args: {
        color: 'primary',
        variant: 'outlined',
        default: 'Outlined Button',
    },
};

export const Text = {
    render: Template,
    args: {
        color: 'primary',
        variant: 'text',
        default: 'Text Button',
    },
};

export const Tonal = {
    render: Template,
    args: {
        color: 'primary',
        variant: 'tonal',
        default: 'Tonal Button',
    },
};

export const Plain = {
    render: Template,
    args: {
        color: 'red',
        variant: 'plain',
        default: 'Plain Button',
    },
};

export const Rounded = {
    render: Template,
    args: {
        color: 'primary',
        rounded: 'pill',
        default: 'Rounded Button',
    },
};

export const Block = {
    render: Template,
    args: {
        color: 'primary',
        block: true,
        default: 'Block Button',
    },
};

export const WithIcons = {
    render: Template,
    args: {
        color: 'primary',
        variant: 'elevated',
        default: 'Icon Button',
        prependIcon: 'mdi-check',
        appendIcon: 'mdi-arrow-right',
    },
};

