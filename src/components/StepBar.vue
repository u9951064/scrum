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
  <div class="step-bar">
    <div class="" :style="stepRatio"></div>
  </div>
</template>

<style scoped>
.step-bar {
  height: 0.5rem;
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
}

.step-bar > div {
  height: 100%;
  display: block;
  background: linear-gradient(
    90deg,
    #f8ffa1 0%,
    #4affb3 25%,
    #37dbff 50%,
    #4affb3 75%,
    #f8ffa1 100%
  );
  background-size: 200%;
  animation: gradient 1.5s ease infinite;
}



@keyframes gradient {
  0% {
    background-position: 200% 0;
  }

  50% {
    background-position: 100% 0;
  }

  to {
    background-position: 0 0;
  }
}
</style>
