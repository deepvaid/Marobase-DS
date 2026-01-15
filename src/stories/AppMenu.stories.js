import AppMenu from '../components/AppMenu.vue';
import AppButton from '../components/AppButton.vue';

export default {
    title: 'Components/AppMenu',
    component: AppMenu,
    tags: ['autodocs'],
    argTypes: {
        location: {
            control: { type: 'select', options: ['top', 'bottom', 'start', 'end'] },
        },
        openOnHover: { control: 'boolean' },
    },
};

const items = [
    { title: 'Option 1' },
    { title: 'Option 2' },
    { title: 'Option 3' },
];

export const Default = {
    args: {
        items,
        location: 'bottom',
    },
    render: (args) => ({
        components: { AppMenu, AppButton },
        setup() {
            return { args };
        },
        template: `
      <AppMenu v-bind="args">
        <template #activator="{ props }">
          <AppButton v-bind="props">Open Menu</AppButton>
        </template>
      </AppMenu>
    `,
    }),
};
