import { VTooltip, VBtn } from 'vuetify/components';

export default {
  title: 'Components/VTooltip',
  component: VTooltip,
  tags: ['autodocs'],
  argTypes: {
    // Content
    text: {
      control: 'text',
      description: 'The content of the tooltip',
      table: { category: 'Props', type: { summary: 'string' } },
    },
    // Styles
    location: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end'],
      description: 'Aligns the component towards the selected direction',
      table: { category: 'Styles', type: { summary: 'string' } },
    },
    origin: {
      control: 'select',
      options: ['auto', 'overlap', 'top', 'bottom', 'start', 'end'],
      description: 'Sets the transition origin',
      table: { category: 'Styles', type: { summary: 'string' } },
    },
    // Behavior
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component',
      table: { category: 'Props', type: { summary: 'boolean' } },
    },
    openOnHover: {
      control: 'boolean',
      description: 'Designates whether the tooltip should open on hover',
      table: { category: 'Props', type: { summary: 'boolean' } },
    },
    openOnClick: {
      control: 'boolean',
      description: 'Designates whether the tooltip should open on click',
      table: { category: 'Props', type: { summary: 'boolean' } },
    },
  },
};

const Template = (args) => ({
  components: { VTooltip, VBtn },
  setup() {
    return { args };
  },
  template: `
      <div class="ma-10">
        <v-tooltip v-bind="args">
          <template #activator="{ props }">
            <v-btn v-bind="props" color="primary">Hover me</v-btn>
          </template>
        </v-tooltip>
      </div>
    `,
});

export const Default = {
  render: Template,
  args: {
    text: 'This is a tooltip',
    location: 'top',
  },
};

export const OpenOnClick = {
  render: Template,
  args: {
    text: 'Clicked!',
    location: 'bottom',
    openOnHover: false,
    openOnClick: true,
  },
};
