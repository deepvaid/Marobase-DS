import { VList } from 'vuetify/components';

export default {
    title: 'Components/VList',
    component: VList,
    tags: ['autodocs'],
    argTypes: {
        // Content
        items: {
            control: 'object',
            description: 'Array of items to display in the list',
            table: { category: 'Props', type: { summary: 'array' } },
        },
        // Styles
        bgColor: {
            control: 'text',
            description: 'Applies specified color to the background',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        density: {
            control: 'select',
            options: ['default', 'comfortable', 'compact'],
            description: 'Adjusts the vertical height used by the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        lines: {
            control: 'select',
            options: ['one', 'two', 'three', false],
            description: 'Control the number of lines in list items',
            table: { category: 'Styles', type: { summary: 'string | boolean' } },
        },
        rounded: {
            control: 'select',
            options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'],
            description: 'Adds a border radius to the component',
            table: { category: 'Styles', type: { summary: 'string | number | boolean' } },
        },
        // Behavior
        disabled: {
            control: 'boolean',
            description: 'Removes the ability to click or target the component',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        nav: {
            control: 'boolean',
            description: 'Styles list items for navigation',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        selectStrategy: {
            control: 'select',
            options: ['single-leaf', 'independent', 'leaf', 'classic'],
            description: 'Define the selection strategy',
            table: { category: 'Props', type: { summary: 'string' } },
        },
    },
};

const items = [
    { title: 'Item 1', subtitle: 'Subtitle 1', value: 1 },
    { title: 'Item 2', subtitle: 'Subtitle 2', value: 2 },
    { title: 'Item 3', subtitle: 'Subtitle 3', value: 3 },
];

const Template = (args) => ({
    components: { VList },
    setup() {
        return { args };
    },
    template: '<v-card width="300"><v-list v-bind="args" :items="args.items" /></v-card>',
});

export const Default = {
    render: Template,
    args: {
        items,
        lines: 'two',
        nav: true,
    },
};

export const Dense = {
    render: Template,
    args: {
        items,
        density: 'compact',
        nav: true,
    },
};
