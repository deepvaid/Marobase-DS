import { VTable } from 'vuetify/components';

export default {
    title: 'Components/VTable',
    component: VTable,
    tags: ['autodocs'],
    argTypes: {
        // Content
        headers: {
            control: 'object',
            description: 'Array of table headers',
            table: { category: 'Props', type: { summary: 'array' } },
        },
        items: {
            control: 'object',
            description: 'Array of table items',
            table: { category: 'Props', type: { summary: 'array' } },
        },
        // Styles
        density: {
            control: 'select',
            options: ['default', 'comfortable', 'compact'],
            description: 'Adjusts the vertical height used by the component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        theme: {
            control: 'text',
            description: 'Specify a theme for this component',
            table: { category: 'Styles', type: { summary: 'string' } },
        },
        height: {
            control: 'text',
            description: 'Sets the height for the component',
            table: { category: 'Styles', type: { summary: 'string | number' } },
        },
        // Behavior
        hover: {
            control: 'boolean',
            description: 'Adds a hover effect to table rows',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
        fixedHeader: {
            control: 'boolean',
            description: 'Fixes the header to the top of the table',
            table: { category: 'Props', type: { summary: 'boolean' } },
        },
    },
};

const headers = ['Name', 'Calories'];
const items = [
    ['Frozen Yogurt', 159],
    ['Ice cream sandwich', 237],
    ['Eclair', 262],
];

const Template = (args) => ({
    components: { VTable },
    setup() {
        return { args };
    },
    template: `
      <v-table v-bind="args">
        <thead>
          <tr>
            <th v-for="header in args.headers" :key="header" class="text-left">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in args.items" :key="item[0]">
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
          </tr>
        </tbody>
      </v-table>
    `,
});

export const Default = {
    render: Template,
    args: {
        headers,
        items,
        density: 'default',
    },
};

export const Dense = {
    render: Template,
    args: {
        headers,
        items,
        density: 'compact',
    },
};

export const Hover = {
    render: Template,
    args: {
        headers,
        items,
        hover: true,
    },
};
