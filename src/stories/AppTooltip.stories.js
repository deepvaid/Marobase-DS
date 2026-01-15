import AppTooltip from '../components/AppTooltip.vue';
import AppButton from '../components/AppButton.vue';

export default {
    title: 'Components/AppTooltip',
    component: AppTooltip,
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
        location: {
            control: { type: 'select', options: ['top', 'bottom', 'start', 'end'] },
        },
    },
};

export const Default = {
    args: {
        text: 'This is a tooltip',
        location: 'top',
    },
    render: (args) => ({
        components: { AppTooltip, AppButton },
        setup() {
            return { args };
        },
        template: `
      <div class="ma-10">
        <AppTooltip v-bind="args">
          <template #activator="{ props }">
            <AppButton v-bind="props">Hover me</AppButton>
          </template>
        </AppTooltip>
      </div>
    `,
    }),
};
