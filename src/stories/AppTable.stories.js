import AppTable from '../components/AppTable.vue';

export default {
    title: 'Components/AppTable',
    component: AppTable,
    tags: ['autodocs'],
    argTypes: {
        density: {
            control: { type: 'select', options: ['default', 'comfortable', 'compact'] },
        },
        hover: { control: 'boolean' },
    },
};

const headers = ['Name', 'Calories'];
const items = [
    ['Frozen Yogurt', 159],
    ['Ice cream sandwich', 237],
    ['Eclair', 262],
];

export const Default = {
    args: {
        headers,
        items,
    },
    render: (args) => ({
        components: { AppTable },
        setup() {
            return { args };
        },
        template: '<AppTable v-bind="args" />',
    }),
};
