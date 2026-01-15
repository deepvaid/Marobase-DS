import AppCard from '../components/AppCard.vue';
import AppButton from '../components/AppButton.vue';

export default {
    title: 'Components/AppCard',
    component: AppCard,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        text: { control: 'text' },
        color: { control: 'text' },
        variant: {
            control: {
                type: 'select',
                options: ['elevated', 'flat', 'tonal', 'outlined'],
            },
        },
        elevation: { control: { type: 'range', min: 0, max: 24 } },
    },
};

export const Default = {
    args: {
        title: 'Card Title',
        subtitle: 'Card Subtitle',
        text: 'This is the card content. It can contain text or other components.',
        variant: 'elevated',
    },
    render: (args) => ({
        components: { AppCard, AppButton },
        setup() {
            return { args };
        },
        template: `
      <AppCard v-bind="args" width="400">
        <template #actions>
          <AppButton variant="text">Action 1</AppButton>
          <AppButton variant="text">Action 2</AppButton>
        </template>
      </AppCard>
    `,
    }),
};
