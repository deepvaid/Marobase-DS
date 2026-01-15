<template>
  <v-table v-bind="$attrs" :density="density" :hover="hover">
    <slot>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header" class="text-left">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in items" :key="i">
          <td v-for="(cell, j) in row" :key="j">{{ cell }}</td>
        </tr>
      </tbody>
    </slot>
  </v-table>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    default: () => [], // Simple array of strings for headers
  },
  items: {
    type: Array,
    default: () => [], // Array of arrays or objects for rows
  },
  density: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'comfortable', 'compact'].includes(v),
  },
  hover: Boolean,
});
</script>
