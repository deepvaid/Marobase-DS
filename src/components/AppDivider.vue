<template>
  <v-divider
    v-bind="$attrs"
    :color="color"
    :thickness="thickness"
    :vertical="vertical"
    :inset="inset"
  />
</template>

<script setup>
defineProps({
  color: String,
  thickness: [String, Number],
  vertical: Boolean,
  inset: Boolean,
});
</script>
