<script setup lang="ts">
import IconStar from "./icons/IconStar.vue";
</script>

<template>
  <div class="star-title row g-0 my-2">
    <div class="col text-end">
      <IconStar></IconStar>
    </div>
    <div class="col-auto px-2 text-center">
      <slot></slot>
    </div>
    <div class="col text-start">
      <IconStar></IconStar>
    </div>
  </div>
</template>

<style scoped>
.star-title {
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.star-title > * {
  max-width: 90%;
  width: auto;
}
</style>
