<script setup lang="ts">
import { useStore as usePopupStore } from "../store/popupMessage";
import IconPopPass from "./icons/IconPopPass.vue";
import IconPopFailed from "./icons/IconPopFailed.vue";

const popupStore = usePopupStore();
</script>

<template>
  <div
    class="popup"
    :class="{
      'd-none': popupStore.state.visibility !== 'visible',
      'popup-error': popupStore.state.icon === 'error',
      'popup-success': popupStore.state.icon !== 'error',
    }"
    @click.stop="popupStore.dispatch('close')"
  >
    <div class="popup-msg-block">
      <div class="icon">
        <IconPopPass v-if="popupStore.state.icon === 'success'"></IconPopPass>
        <IconPopFailed v-else></IconPopFailed>
      </div>
      <div
        class="title"
        v-if="popupStore.getters.hasTitle"
        v-text="popupStore.state.title"
      ></div>
      <div
        class="message"
        v-if="popupStore.getters.hasMessage"
        v-html="popupStore.state.message"
      ></div>
      <button
        type="button"
        v-text="popupStore.state.btnLabel"
        @click.stop="popupStore.dispatch('close')"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 9, 43, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.popup > .popup-msg-block {
  padding-left: 2rem;
  padding-right: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #ff4069;
  border-radius: 20px;
  text-align: center;
  margin: auto;
  width: 80vw;
}

@media (min-width: 576px) {
  .popup > .popup-msg-block {
    width: 45vw;
  }
}

@media (min-width: 992px) {
  .popup > .popup-msg-block {
    width: 30vw;
  }
}

@media (min-width: 1024px) {
  .popup > .popup-msg-block {
    width: 27vw;
  }
}

@media (min-width: 1400) {
  .popup > .popup-msg-block {
    width: 17vw;
  }
}

.popup > .popup-msg-block > .icon {
  margin-top: -35px;
}
.popup > .popup-msg-block > * ~ * {
  margin-top: 1rem;
}

.popup > .popup-msg-block > .title,
.popup > .popup-msg-block > .message {
  color: #00092b;
}

.popup > .popup-msg-block > .title {
  font-size: 1rem;
  font-weight: 700;
}

.popup > .popup-msg-block > .message {
  font-size: 0.875rem;
}

.popup > .popup-msg-block > button {
  display: block;
  width: 100%;
  margin: 1.5rem auto 1rem;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 400;
  font-size: 0.875rem;
}

.popup-error > .popup-msg-block > button {
  color: #ffffff;
  background: #ff4069;
  border-radius: 8px;
  border: none;
}

.popup-success > .popup-msg-block > button {
  color: #00092b;
  background: #0defb5;
}
</style>
