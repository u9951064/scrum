<script setup lang="ts">
import IconPlant1 from "./icons/IconPlant1.vue";
import IconPlant2 from "./icons/IconPlant2.vue";
import IconPlant3 from "./icons/IconPlant3.vue";
import IconPlant4 from "./icons/IconPlant4.vue";
import IconPlant5 from "./icons/IconPlant5.vue";
import IconPlant6 from "./icons/IconPlant6.vue";
import IconPlant7 from "./icons/IconPlant7.vue";
import IconPlant8 from "./icons/IconPlant8.vue";

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
});

const isActive = (stepIndex: number) => {
  return stepIndex <= props.currentStep;
};
</script>

<template>
  <ul class="step-list row flex-md-column g-0">
    <li
      class="step-list-item col row g-0 justify-content-md-center"
      :class="{ active: isActive(1) }"
    >
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant1></IconPlant1>
      </div>
      <div class="line col-12 col-md"></div>
      <div class="index col-12 col-md-auto">1</div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(2) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant2></IconPlant2>
      </div>
      <div class="line col-12 col-md"></div>
      <div class="index col-12 col-md-auto">2</div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(3) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant3></IconPlant3>
      </div>
      <div class="line col-12 col-md"></div>
      <div class="index col-12 col-md-auto">3</div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(4) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant4></IconPlant4>
      </div>
      <div class="line col-12 col-md"></div>
      <div class="index col-12 col-md-auto">4</div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(5) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant5></IconPlant5>
      </div>
      <div class="line col-12 col-md"></div>
      <div class="index col-12 col-md-auto">5</div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(6) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant6></IconPlant6>
      </div>
      <div class="line col-12 col-md"></div>
      <div class="index col-12 col-md-auto">6</div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(7) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant7></IconPlant7>
      </div>
      <div class="line col-12 col-md"></div>
      <div class="index col-12 col-md-auto">7</div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(8) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant8></IconPlant8>
      </div>
      <div class="line col-12 col-md"></div>
      <div class="index col-12 col-md-auto">8</div>
    </li>
  </ul>
</template>

<style scoped>
ul.step-list > li.step-list-item {
  list-style-type: none;
  opacity: 0.3;
}

ul.step-list > li.step-list-item.active {
  opacity: 1;
}

ul.step-list > li.step-list-item .plant-icon {
  list-style-type: none;
}
</style>
