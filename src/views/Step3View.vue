<script setup lang="ts">
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "step4" });
};
</script>

<template>
  <main>
    <nav class="d-block">
      <StepBar :current-step="3"></StepBar>
      <StepList :current-step="3"></StepList>
    </nav>
    <div class="chat-list">
      <div class="chat-block">
        <div class="avatar"></div>
        <div class="chat-message">
          <p>
            產品待辦清單好了之後，我們來召集 Scrum Master
            和開發團隊共同召開短衝規劃會議 (Sprint Planning)。
          </p>
          <p>
            短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單，並由開發團隊在接下來的產品開發週期裡執行。
          </p>
        </div>
      </div>
    </div>
    <NextStepBtn btn-label="我來挑戰" @click="gotoNextPage"></NextStepBtn>
  </main>
</template>
