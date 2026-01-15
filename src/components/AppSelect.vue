<template>
  <v-select
    v-bind="$attrs"
    :items="items"
    :color="color"
    :variant="variant"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </v-select>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'outlined',
    validator: (value) =>
      ['filled', 'outlined', 'plain', 'underlined', 'solo'].includes(value),
  },
  modelValue: [String, Number, Object],
});

defineEmits(['update:modelValue']);
</script>
