<template>
  <v-menu v-bind="$attrs" :location="location" :open-on-hover="openOnHover">
    <template v-if="$slots.activator" #activator="slotProps">
      <slot name="activator" v-bind="slotProps" />
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :title="item.title"
        @click="$emit('click:item', item)"
      />
    </v-list>
  </v-menu>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
    // items: { title: string }
  },
  location: {
    type: String,
    default: 'bottom',
  },
  openOnHover: Boolean,
});

defineEmits(['click:item']);
</script>
