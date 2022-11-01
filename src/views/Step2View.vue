<script setup lang="ts">
import { onMounted, ref } from "vue";
import draggable from "vuedraggable";
import NextStepBtn from "@/components/NextStepBtn.vue";
import router from "@/router";

const backlogPriorities = ref([
  { title: "會員系統", description: "（登入、註冊、權理管理）", priority: 1 },
  { title: "應徵者的線上履歷編輯器", description: null, priority: 2 },
  {
    title: "前台職缺列表",
    description: "（職缺詳細內容、點選可發送應徵意願）",
    priority: 3,
  },
  {
    title: "後台職缺管理功能",
    description: "（資訊上架、下架、顯示應徵者資料）",
    priority: 4,
  },
]);

const checkAnswerOrGoNextPage = () => {
  const currentOrder = backlogPriorities.value.map((record) => record.priority);
  const isCorrect =
    JSON.stringify([1, 2, 3, 4]) === JSON.stringify(currentOrder);
  if (isCorrect) {
    router.replace({ name: "step3" });
  } else {
    // show tips
    backlogPriorities.value = backlogPriorities.value.sort(
      (a, b) => a.priority - b.priority
    );
  }
};

onMounted(() => {
  backlogPriorities.value = backlogPriorities.value.sort(
    () => Math.random() - 0.5
  );
});
</script>

<template>
  <main>
    <div class="">
      <draggable
        class="list-group"
        :list="backlogPriorities"
        group="backlogSort"
        itemKey="priority"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            <div class="title" v-text="element.title"></div>
            <div
              class="description"
              v-if="element.description"
              v-text="element.description"
            ></div>
          </div>
        </template>
      </draggable>
    </div>
    <NextStepBtn
      btn-label="排序完成"
      @click="checkAnswerOrGoNextPage"
    ></NextStepBtn>
  </main>
</template>
