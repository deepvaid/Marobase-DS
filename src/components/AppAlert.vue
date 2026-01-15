<template>
  <v-alert
    v-bind="$attrs"
    :color="color"
    :variant="variant"
    :type="type"
    :closable="closable"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </v-alert>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: 'flat',
    validator: (value) =>
      ['elevated', 'flat', 'tonal', 'outlined'].includes(value),
  },
  type: {
    type: String,
    default: undefined,
    validator: (value) =>
      ['success', 'info', 'warning', 'error'].includes(value),
  },
  closable: {
    type: Boolean,
    default: false,
  },
});
</script>
