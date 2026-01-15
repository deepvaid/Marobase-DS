import AppList from '../components/AppList.vue';

export default {
    title: 'Components/AppList',
    component: AppList,
    tags: ['autodocs'],
    argTypes: {
        lines: {
            control: { type: 'select', options: ['one', 'two', 'three', false] },
        },
        nav: { control: 'boolean' },
    },
};

const items = [
    { title: 'Item 1', subtitle: 'Subtitle 1', value: 1 },
    { title: 'Item 2', subtitle: 'Subtitle 2', value: 2 },
    { title: 'Item 3', subtitle: 'Subtitle 3', value: 3 },
];

export const Default = {
    args: {
        items,
        lines: 'two',
    },
    render: (args) => ({
        components: { AppList },
        setup() {
            return { args };
        },
        template: '<v-card width="300"><AppList v-bind="args" /></v-card>',
    }),
};
