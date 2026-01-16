import { VCard, VBtn } from 'vuetify/components';

export default {
    title: 'Components/VCard',
    component: VCard,
    tags: ['autodocs'],
    argTypes: {
        // Content
        title: {
            control: 'text',
            description: 'The title of the card',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        subtitle: {
            control: 'text',
            description: 'The subtitle of the card',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        text: {
            control: 'text',
            description: 'The content of the card',
            table: { category: 'Props', type: { summary: 'string' } },
        },
        // Styles
        color: {
            control: 'text',
            description: 'Applies specified color to the control',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        variant: {
            control: 'select',
            options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
            description: 'Applies a distinct style to the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        density: {
            control: 'select',
            options: ['default', 'comfortable', 'compact'],
            description: 'Adjusts the vertical height used by the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        elevation: {
            control: { type: 'range', min: 0, max: 24 },
            description: 'Designates an elevation applied to the component',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        rounded: {
            control: 'select',
            options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'],
            description: 'Adds a border radius to the component',
            table: { category: 'Styles', type: { summary: 'string | number | boolean' } },
        },
        // Behavior
        disabled: {
            control: 'boolean',
            description: 'Removes the ability to click or target the component',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        hover: {
            control: 'boolean',
            description: 'Applies a hover effect',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        link: {
            control: 'boolean',
            description: 'Designates that the component is a link',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
    },
};

const Template = (args) => ({
    components: { VCard, VBtn },
    setup() {
        return { args };
    },
    template: `
      <v-card v-bind="args" width="400">
        <template #actions>
          <v-btn variant="text" color="primary">Action 1</v-btn>
          <v-btn variant="text" color="primary">Action 2</v-btn>
        </template>
      </v-card>
    `,
});

export const Default = {
    render: Template,
    args: {
        title: 'Card Title',
        subtitle: 'Card Subtitle',
        text: 'This is the card content. It can contain text or other components.',
        variant: 'elevated',
    },
};

export const Outlined = {
    render: Template,
    args: {
        title: 'Outlined Card',
        text: 'An outlined card uses a thin border instead of shadow.',
        variant: 'outlined',
    },
};

export const Tonal = {
    render: Template,
    args: {
        title: 'Tonal Card',
        text: 'A tonal card uses a background color with reduced opacity.',
        variant: 'tonal',
        color: 'primary',
    },
};

export const Flat = {
    render: Template,
    args: {
        title: 'Flat Card',
        text: 'A flat card has no shadow.',
        variant: 'flat',
    },
};
