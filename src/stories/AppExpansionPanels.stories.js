import AppExpansionPanels from '../components/AppExpansionPanels.vue';

export default {
    title: 'Components/AppExpansionPanels',
    component: AppExpansionPanels,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['default', 'accordion', 'inset', 'popout'],
            },
        },
    },
};

const items = [
    { title: 'Item 1', text: 'Content for Item 1' },
    { title: 'Item 2', text: 'Content for Item 2' },
    { title: 'Item 3', text: 'Content for Item 3' },
];

export const Default = {
    args: {
        items,
    },
    render: (args) => ({
        components: { AppExpansionPanels },
        setup() {
            return { args };
        },
        template: '<AppExpansionPanels v-bind="args" />',
    }),
};

export const Accordion = {
    args: {
        items,
        variant: 'accordion',
    },
    render: (args) => ({
        components: { AppExpansionPanels },
        setup() {
            return { args };
        },
        template: '<AppExpansionPanels v-bind="args" />',
    }),
};
