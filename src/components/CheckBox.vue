<script setup lang="ts">
import IconChecked from "./icons/IconChecked.vue";
import IconUnchecked from "./icons/IconUncheck.vue";

defineProps({
  modelValue: Boolean,
  modelId: {
    type: String,
    required: false,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="d-inline-block">
    <input
      class="d-none"
      :id="modelId"
      type="checkbox"
      :value="modelValue"
      @input="emit('update:modelValue', !modelValue)"
    />
    <IconChecked v-if="modelValue"></IconChecked>
    <IconUnchecked v-else></IconUnchecked>
  </label>
</template>

<style scoped>
</style>
