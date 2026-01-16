import { VDivider } from 'vuetify/components';

export default {
    title: 'Components/VDivider',
    component: VDivider,
    tags: ['autodocs'],
    argTypes: {
        // Styles
        color: {
            control: 'text',
            description: 'Applies specified color to the control',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        thickness: {
            control: 'number',
            description: 'Sets the thickness of the divider',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        inset: {
            control: 'boolean',
            description: 'Adds indentation to the divider',
            table: { category: 'Styles', type: { summary: 'boolean' } },
        },
        vertical: {
            control: 'boolean',
            description: 'Displays the divider vertically',
            table: { category: 'Styles', type: { summary: 'boolean' } },
        },
        length: {
            control: 'text',
            description: 'Sets the max-height/width of the divider',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
        opacity: {
            control: 'range',
            min: 0,
            max: 100,
            description: 'Sets the opacity of the divider',
            table: { category: 'Styles', type: { summary: 'number | string' } },
        },
    },
};

const Template = (args) => ({
    components: { VDivider },
    setup() {
        return { args };
    },
    template: `
      <div>
        <p>Item 1</p>
        <v-divider v-bind="args" />
        <p>Item 2</p>
      </div>
    `,
});

export const Horizontal = {
    render: Template,
    args: {
        thickness: 1,
    },
};

export const Vertical = {
    render: (args) => ({
        components: { VDivider },
        setup() {
            return { args };
        },
        template: `
      <div class="d-flex align-center" style="height: 50px;">
        <span>Left</span>
        <v-divider v-bind="args" class="mx-4" />
        <span>Right</span>
      </div>
    `,
    }),
    args: {
        thickness: 1,
        vertical: true,
    },
};

export const Inset = {
    render: Template,
    args: {
        thickness: 1,
        inset: true,
    },
};
