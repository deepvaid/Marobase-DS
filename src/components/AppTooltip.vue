<template>
  <v-tooltip v-bind="$attrs" :text="text" :location="location">
    <template #activator="slotProps">
      <slot name="activator" v-bind="slotProps" />
    </template>
  </v-tooltip>
</template>

<script setup>
defineProps({
  text: String,
  location: {
    type: String,
    default: 'top',
  },
});
</script>
