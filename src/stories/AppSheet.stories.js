import AppSheet from '../components/AppSheet.vue';

export default {
    title: 'Components/AppSheet',
    component: AppSheet,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'text' },
        elevation: { control: { type: 'range', min: 0, max: 24 } },
        height: { control: 'text' },
        width: { control: 'text' },
        rounded: { control: 'boolean' },
        border: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        elevation: 4,
        height: 100,
        width: 200,
        rounded: true,
    },
    render: (args) => ({
        components: { AppSheet },
        setup() {
            return { args };
        },
        template: '<AppSheet v-bind="args" class="pa-4">Sheet Content</AppSheet>',
    }),
};
