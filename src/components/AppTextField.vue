<template>
  <v-text-field
    v-bind="$attrs"
    :color="color"
    :variant="variant"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </v-text-field>
</template>

<script setup>
defineProps({
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
  modelValue: [String, Number],
});

defineEmits(['update:modelValue']);
</script>
