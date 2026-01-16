import { VDialog, VBtn, VCard, VCardTitle, VCardText, VCardActions, VSpacer } from 'vuetify/components';
import { ref } from 'vue';

export default {
  title: 'Components/VDialog',
  component: VDialog,
  tags: ['autodocs'],
  argTypes: {
    // Styles
    width: {
      control: 'text',
      description: 'Sets the width of the dialog',
      table: { category: 'Styles', type: { summary: 'string | number' } },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width of the dialog',
      table: { category: 'Styles', type: { summary: 'string | number' } },
    },
    scrollable: {
      control: 'boolean',
      description: 'When set to true, expects a v-card and v-card-text component with a designated height',
      table: { category: 'Styles', type: { summary: 'boolean' } },
    },
    fullscreen: {
      control: 'boolean',
      description: 'Changes layout for fullscreen display',
      table: { category: 'Styles', type: { summary: 'boolean' } },
    },
    transition: {
      control: 'text',
      description: 'Sets the component transition',
      table: { category: 'Styles', type: { summary: 'string' } },
    },
    scrim: {
      control: 'text',
      description: 'Accepts a color string or boolean to control the scrim background',
      table: { category: 'Styles', type: { summary: 'string | boolean' } },
    },
    // Behavior
    persistent: {
      control: 'boolean',
      description: 'Clicking outside will not dismiss the dialog',
      table: { category: 'Props', type: { summary: 'boolean' } },
    },
    retainFocus: {
      control: 'boolean',
      description: 'Tab focus will return to the first child of the dialog on close',
      table: { category: 'Props', type: { summary: 'boolean' } },
    },
    modelValue: {
      control: 'boolean',
      description: 'The v-model value of the component',
      table: { category: 'Model', type: { summary: 'boolean' } },
    },
  },
};

const Template = (args) => ({
  components: { VDialog, VBtn, VCard, VCardTitle, VCardText, VCardActions, VSpacer },
  setup() {
    const dialog = ref(false);
    return { args, dialog };
  },
  template: `
      <v-dialog v-bind="args" v-model="dialog">
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-card-title>Dialog Title</v-card-title>
          <v-card-text>
            This is the content of the dialog. You can put anything here.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    `,
});

export const Default = {
  render: Template,
  args: {
    width: '500',
    persistent: false,
  },
};

export const Persistent = {
  render: Template,
  args: {
    width: '500',
    persistent: true,
  },
};
