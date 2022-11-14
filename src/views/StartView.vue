<script setup lang="ts">
import NextStepBtn from "@/components/NextStepBtn.vue";
import router from "@/router";

const gotoNextPage = () => {
  router.push({ name: "step1" });
};
</script>

<template>
  <div class="start-page">
    <main class="main-content-block row flex-column justify-content-end">
      <article class="col-auto description fw-400">
        <p>
          嗨嗨，歡迎加入敏捷星球，<br />在正式加入專案開發之前，需要請你先了解
          Scrum 的流程與精神！
        </p>
        <p>請接受挑戰任務，成功通過<br />Scrum 新手村的挑戰 任務吧</p>
      </article>
      <nav class="col-auto text-center">
        <NextStepBtn btn-label="接受挑戰" @click="gotoNextPage"></NextStepBtn>
      </nav>
    </main>
  </div>
</template>

<style scoped>
.start-page {
  width: 100%;
  height: 100%;
  padding-bottom: 8%;
}

.start-page > .main-content-block {
  margin: auto;
  max-width: 560px;
  height: 100%;
}

.start-page .description {
  font-size: 1rem;
}
</style>
