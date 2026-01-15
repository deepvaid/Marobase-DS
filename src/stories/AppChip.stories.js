import AppChip from '../components/AppChip.vue';

export default {
    title: 'Components/AppChip',
    component: AppChip,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' }, // Note: v-chip uses slot for content usually, but we can treat it as slot in story
        color: { control: 'text' },
        variant: {
            control: {
                type: 'select',
                options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
            },
        },
        closable: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        default: 'Chip Label',
        color: 'primary',
    },
    render: (args) => ({
        components: { AppChip },
        setup() {
            return { args };
        },
        template: '<AppChip v-bind="args">{{ args.default }}</AppChip>',
    }),
};

export const Closable = {
    args: {
        default: 'Closable Chip',
        color: 'secondary',
        closable: true,
    },
    render: (args) => ({
        components: { AppChip },
        setup() {
            return { args };
        },
        template: '<AppChip v-bind="args">{{ args.default }}</AppChip>',
    }),
};
