<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

interface ScreenConfig {
  tagBegin?: string;
  inner: string | ScreenConfig[];
  tagEnd?: string;
}

const props = defineProps<{
  screenConfigs: ScreenConfig[];
  speedMs?: number;
}>();

const emits = defineEmits(["ended"]);

const fullyContent = computed((): string => {
  return controlSteps.value.length > 0
    ? controlSteps.value[controlSteps.value.length - 1]
    : "";
});

const controlSteps = computed(() => {
  const decodeScreenConfig = (configList: ScreenConfig[]): string[] => {
    const result: string[] = [];
    for (let config of configList) {
      const lastString = result.length > 0 ? result[result.length - 1] : "";
      if (typeof config.inner === "string") {
        const charList = config.inner.trim().split("");
        if (charList.length === 0) {
          result.push(
            `${lastString}${config.tagBegin || ""}${config.tagEnd || ""}`
          );
        } else {
          let acc = "";
          for (let char of charList) {
            acc = `${acc}${char}`;
            result.push(
              `${lastString}${config.tagBegin || ""}${acc}${
                config.tagEnd || ""
              }`
            );
          }
        }
      } else {
        result.push(
          ...decodeScreenConfig(config.inner).map(
            (str) =>
              `${lastString}${config.tagBegin || ""}${str}${
                config.tagEnd || ""
              }`
          )
        );
      }
    }
    return result;
  };
  return decodeScreenConfig(props.screenConfigs as ScreenConfig[]);
});

let timer: null | number = null;
const currentIndex = ref(0);
const currentContent = computed(() => {
  if (currentIndex.value >= controlSteps.value.length) {
    return controlSteps.value[controlSteps.value.length - 1];
  } else {
    return controlSteps.value[currentIndex.value];
  }
});

const clearTimer = () => {
  timer && clearInterval(timer);
  timer = null;
};

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value += 1;
    if (currentIndex.value >= controlSteps.value.length) {
      clearTimer();
      emits("ended");
    }
  }, props.speedMs || 20);
});

onBeforeUnmount(clearTimer);
</script>

<template>
  <div class="position-relative">
    <div class="hidden-block" v-html="fullyContent"></div>
    <div class="animation-block" v-html="currentContent"></div>
  </div>
</template>

<style scoped>
.hidden-block {
  opacity: 0;
}
.animation-block {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
