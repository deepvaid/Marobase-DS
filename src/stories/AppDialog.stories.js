import AppDialog from '../components/AppDialog.vue';
import AppButton from '../components/AppButton.vue';
import { ref } from 'vue';

export default {
    title: 'Components/AppDialog',
    component: AppDialog,
    tags: ['autodocs'],
    argTypes: {
        width: { control: 'text' },
        persistent: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        width: '500',
    },
    render: (args) => ({
        components: { AppDialog, AppButton },
        setup() {
            const dialog = ref(false);
            return { args, dialog };
        },
        template: `
      <AppDialog v-bind="args" v-model="dialog">
        <template #activator="{ props }">
          <AppButton v-bind="props">Open Dialog</AppButton>
        </template>
        <v-card>
          <v-card-title>Dialog Title</v-card-title>
          <v-card-text>
            This is the content of the dialog. You can put anything here.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <AppButton color="primary" variant="text" @click="dialog = false">Close</AppButton>
          </v-card-actions>
        </v-card>
      </AppDialog>
    `,
    }),
};
