<template>
  <v-btn :color="color" :variant="variant" @click="$emit('click')">
    <slot>Button</slot>
  </v-btn>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'elevated',
    validator: (value) =>
      ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'].includes(value),
  },
});

defineEmits(['click']);
</script>
