<template>
  <v-expansion-panels v-bind="$attrs" :variant="variant">
    <v-expansion-panel
      v-for="(item, i) in items"
      :key="i"
      :title="item.title"
      :text="item.text"
    >
      <slot name="item" :item="item" />
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
    // items: { title: string, text: string }[]
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'accordion', 'inset', 'popout'].includes(v),
  },
});
</script>
