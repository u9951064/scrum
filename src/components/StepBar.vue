<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
});

const stepRatio = computed(() => {
  const ratio = (props.currentStep / 8) * 100;
  return `width: ${ratio.toFixed(2)}%`;
});
</script>

<template>
  <div class="step-bar d-block">
    <div class="d-block" :style="stepRatio"></div>
  </div>
</template>

<style scoped>
.step-bar {
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
}

.step-bar > div {
  height: 0.5rem;
  background: linear-gradient(90deg, #f8ffa1 0%, #4affb3 47.92%, #37dbff 97.4%);
}
</style>