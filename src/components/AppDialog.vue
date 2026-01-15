<template>
  <v-dialog
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :width="width"
    :persistent="persistent"
  >
    <template v-if="$slots.activator" #activator="slotProps">
      <slot name="activator" v-bind="slotProps" />
    </template>
    
    <slot>
      <v-card>
        <v-card-text>Dialog Content</v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="$emit('update:modelValue', false)">Close</v-btn>
        </v-card-actions>
      </v-card>
    </slot>
  </v-dialog>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  width: {
    type: [String, Number],
    default: 'auto',
  },
  persistent: Boolean,
});

defineEmits(['update:modelValue']);
</script>
