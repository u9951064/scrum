<script setup lang="ts">
defineProps({
  btnLabel: String,
});

defineEmits(["click"]);
</script>

<template>
  <div class="">
    <button class="next-btn" type="button" @click="$emit('click', $event)">
      {{ btnLabel }}
    </button>
  </div>
</template>

<style scoped>
.next-btn {
  padding: 1.125rem;
  border: 1px solid #ffffff;
  border-radius: 0.5rem;
}
</style>
