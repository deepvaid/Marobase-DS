<template>
  <v-chip
    v-bind="$attrs"
    :color="color"
    :variant="variant"
    :closable="closable"
    @click:close="$emit('click:close')"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </v-chip>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'tonal',
    validator: (value) =>
      ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'].includes(value),
  },
  closable: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click:close']);
</script>
