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

const getLabel = (stepIndex: number): string => {
  if (stepIndex !== props.currentStep) {
    return `${stepIndex}`;
  }
  switch (props.currentStep) {
    case 1:
      return "PO星";
    case 2:
      return "順序星";
    case 3:
      return "點數星";
    case 4:
      return "待辦星";
    case 5:
      return "短衝星";
    case 6:
      return "流程星";
    case 7:
      return "回饋星";
    case 8:
      return "敏捷星";
    default:
      return "";
  }
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
      <div class="index col-12 col-md" v-text="getLabel(1)"></div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(2) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant2></IconPlant2>
      </div>
      <div class="index col-12 col-md" v-text="getLabel(2)"></div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(3) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant3></IconPlant3>
      </div>
      <div class="index col-12 col-md" v-text="getLabel(3)"></div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(4) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant4></IconPlant4>
      </div>
      <div class="index col-12 col-md" v-text="getLabel(4)"></div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(5) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant5></IconPlant5>
      </div>
      <div class="index col-12 col-md" v-text="getLabel(5)"></div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(6) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant6></IconPlant6>
      </div>
      <div class="index col-12 col-md" v-text="getLabel(6)"></div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(7) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant7></IconPlant7>
      </div>
      <div class="index col-12 col-md" v-text="getLabel(7)"></div>
    </li>
    <li class="step-list-item col row g-0" :class="{ active: isActive(8) }">
      <div class="plant-icon col-12 col-md-auto">
        <IconPlant8></IconPlant8>
      </div>
      <div class="index col-12 col-md" v-text="getLabel(8)"></div>
    </li>
  </ul>
</template>

<style scoped>
ul.step-list {
  padding: 0;
  min-width: 77px;
  margin: 0 0 0.5rem 0;
}

ul.step-list > li.step-list-item {
  list-style-type: none;
  text-align: center;
  opacity: 0.3;
  font-size: 9px;
}

ul.step-list > li.step-list-item.active {
  opacity: 1;
}

ul.step-list .index,
ul.step-list .plant-icon {
  align-self: center;
}

@media (min-width: 768px) {
  ul.step-list > li.step-list-item ~ li.step-list-item {
    padding-top: 0.5rem;
  }
  ul.step-list .index {
    padding-left: 0.375rem;
  }
}
</style>
