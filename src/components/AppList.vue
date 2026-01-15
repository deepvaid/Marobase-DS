<template>
  <v-list v-bind="$attrs" :lines="lines" :nav="nav">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :title="item.title"
      :subtitle="item.subtitle"
      :prepend-icon="item.prependIcon"
      :append-icon="item.appendIcon"
      :value="item.value"
      @click="$emit('click:item', item)"
    >
      <slot name="item" :item="item" />
    </v-list-item>
  </v-list>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
    // items: { title, subtitle, prependIcon, appendIcon, value }
  },
  lines: {
    type: [String, Boolean],
    default: 'one',
    validator: (v) => ['one', 'two', 'three'].includes(v) || v === false,
  },
  nav: Boolean,
});

defineEmits(['click:item']);
</script>
