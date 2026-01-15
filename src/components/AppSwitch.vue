<template>
  <v-switch
    v-bind="$attrs"
    :color="color"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </v-switch>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  modelValue: [Boolean, Array],
});

defineEmits(['update:modelValue']);
</script>
