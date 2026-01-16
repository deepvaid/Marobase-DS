<template>
  <v-app :theme="themeName" class="story-wrapper">
    <v-main>
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>

<script setup>
defineProps({
  themeName: String
})
</script>

<style>
.story-wrapper.v-application {
  height: auto !important;
  min-height: 0 !important;
}
.story-wrapper .v-application__wrap {
    min-height: auto !important;
    height: auto !important;
}
.story-wrapper .v-main {
    flex: 0 1 auto !important;
}
</style>
