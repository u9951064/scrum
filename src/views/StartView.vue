<script setup lang="ts">
import NextStepBtn from "@/components/NextStepBtn.vue";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "step1" });
};
</script>

<template>
  <main>
    <article class="">
      <p>
        嗨嗨，歡迎加入敏捷星球，<br />在正式加入專案開發之前，需要請你先了解
        Scrum 的流程與精神！
      </p>
      <p>請接受挑戰任務，成功通過<br />Scrum 新手村的挑戰 任務吧 👽</p>
    </article>
    <NextStepBtn btn-label="接受挑戰" @click="gotoNextPage"></NextStepBtn>
  </main>
</template>
