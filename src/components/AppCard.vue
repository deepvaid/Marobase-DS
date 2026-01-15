<template>
  <v-card v-bind="$attrs" :color="color" :variant="variant" :elevation="elevation">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </v-card>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: 'elevated',
    validator: (value) =>
      ['elevated', 'flat', 'tonal', 'outlined'].includes(value),
  },
  elevation: {
    type: [Number, String],
    default: undefined,
  },
});
</script>
