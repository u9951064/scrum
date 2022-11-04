<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";

const list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
])
const list2 = ref([
  { name: "Juan", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
])
const list3 = ref([
  { name: "aaa", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
])

const log = (evt: any) => {
  window.console.log(evt);
}
</script>

<template>
  <div class="row">
    <nav class="d-block">
      <StepBar :current-step="5"></StepBar>
      <StepList :current-step="5"></StepList>
    </nav>
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="list-group"
        :list="list1"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="list-group"
        :list="list3"
        group="people1"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="list-group"
        :list="list2"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div>
</template>
