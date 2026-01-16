import { VExpansionPanels, VExpansionPanel, VExpansionPanelTitle, VExpansionPanelText } from 'vuetify/components';

export default {
    title: 'Components/VExpansionPanels',
    component: VExpansionPanels,
    tags: ['autodocs'],
    argTypes: {
        // Content
        items: {
            control: 'object',
            description: 'Items to display in the expansion panels',
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
            options: ['default', 'accordion', 'inset', 'popout'],
            description: 'Applies a distinct style to the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        rounded: {
            control: 'select',
            options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'],
            description: 'Adds a border radius to the component',
            table: { category: 'Styles', type: { summary: 'string | number | boolean' } },
        },
        elevation: {
            control: { type: 'range', min: 0, max: 24 },
            description: 'Designates an elevation applied to the component',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        // Behavior
        disabled: {
            control: 'boolean',
            description: 'Removes the ability to click or target the component',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        readonly: {
            control: 'boolean',
            description: 'Makes the component read-only',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        multiple: {
            control: 'boolean',
            description: 'Allow multiple panels to be open at the same time',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        mandatory: {
            control: 'boolean',
            description: 'Forces at least one panel to be open',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
    },
};

const items = [
    { title: 'Item 1', text: 'Content for Item 1' },
    { title: 'Item 2', text: 'Content for Item 2' },
    { title: 'Item 3', text: 'Content for Item 3' },
];

const Template = (args) => ({
    components: { VExpansionPanels, VExpansionPanel, VExpansionPanelTitle, VExpansionPanelText },
    setup() {
        return { args };
    },
    template: `
      <v-expansion-panels v-bind="args">
        <v-expansion-panel v-for="(item, i) in args.items" :key="i">
            <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
            <v-expansion-panel-text>{{ item.text }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    `,
});

export const Default = {
    render: Template,
    args: {
        items,
    },
};

export const Accordion = {
    render: Template,
    args: {
        items,
        variant: 'accordion',
    },
};

export const Inset = {
    render: Template,
    args: {
        items,
        variant: 'inset',
    },
};

export const Popout = {
    render: Template,
    args: {
        items,
        variant: 'popout',
    },
};
