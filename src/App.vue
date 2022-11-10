<script setup lang="ts">
import { RouterView } from "vue-router";
import PopupMessage from "./components/PopupMessage.vue";
</script>

<template>
  <div class="w-100 h-100">
    <RouterView />
    <PopupMessage></PopupMessage>
  </div>
</template>

<style scoped></style>
