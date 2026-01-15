<template>
  <v-sheet
    v-bind="$attrs"
    :color="color"
    :elevation="elevation"
    :height="height"
    :width="width"
    :rounded="rounded"
    :border="border"
  >
    <slot />
  </v-sheet>
</template>

<script setup>
defineProps({
  color: String,
  elevation: [Number, String],
  height: [Number, String],
  width: [Number, String],
  rounded: [Boolean, String, Number],
  border: [Boolean, String, Number],
});
</script>
