import { VSheet } from 'vuetify/components';

export default {
    title: 'Components/VSheet',
    component: VSheet,
    tags: ['autodocs'],
    argTypes: {
        // Content
        default: {
            control: 'text',
            description: 'The content of the sheet',
            table: { category: 'Slots', type: { summary: 'html' } },
            defaultValue: 'Sheet Content',
        },
        // Styles
        color: {
            control: 'text',
            description: 'Applies specified color to the control',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        elevation: {
            control: { type: 'range', min: 0, max: 24 },
            description: 'Designates an elevation applied to the component',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        rounded: {
            control: 'select',
            options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'],
            description: 'Adds a border radius to the component',
            table: { category: 'Styles', type: { summary: 'string | number | boolean' } },
        },
        border: {
            control: 'boolean',
            description: 'Adds a thin border to the component',
            table: { category: 'Styles', type: { summary: 'boolean' } },
        },
        // Dimensions
        height: {
            control: 'text',
            description: 'Sets the height of the component',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        width: {
            control: 'text',
            description: 'Sets the width of the component',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        maxWidth: {
            control: 'text',
            description: 'Sets the maximum width of the component',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        minWidth: {
            control: 'text',
            description: 'Sets the minimum width of the component',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
    },
};

const Template = (args) => ({
    components: { VSheet },
    setup() {
        return { args };
    },
    template: '<v-sheet v-bind="args" class="pa-4">{{ args.default }}</v-sheet>',
});

export const Default = {
    render: Template,
    args: {
        elevation: 4,
        height: 100,
        width: 200,
        rounded: 'true',
        default: 'Sheet Content',
    },
};

export const Rounded = {
    render: Template,
    args: {
        elevation: 2,
        height: 150,
        width: 150,
        rounded: 'xl',
        default: 'Rounded Sheet',
        color: 'secondary',
    },
};

export const Bordered = {
    render: Template,
    args: {
        elevation: 0,
        height: 100,
        width: 200,
        border: true,
        default: 'Bordered Sheet',
    },
};
