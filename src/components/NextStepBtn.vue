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
@keyframes pulseBox {
  0% {
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.6);
  }

  100% {
    box-shadow: 0px 0px 18px 0px rgba(255, 255, 255, 0.9);
  }
}

.next-btn {
  margin: 0.75rem auto 1rem;
  padding: calc(1.125rem + 2px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 1rem;
  background: #00092bdd;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.16em;
  min-width: 330px;
  animation-name: pulseBox;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

.next-btn:hover {
  padding: 1.125rem;
  border-width: 3px;
}
</style>
