<script setup lang="ts">
import NextStepBtn from "@/components/NextStepBtn.vue";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "step2" });
};
</script>

<template>
  <main>
    <nav></nav>
    <article class="">
      <p>PO 也就是產品負責人 (Product Owner)。</p>
      <p>
        產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。<br />
        最後排出產品待辦清單 (Product Backlog) 唷！
      </p>
      <p>
        剛好我最近手邊有一個 ( 人才招募系統 ) 的案子，我才剛列出了 (
        產品需求清單 )。<br />
        既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧 🤖
      </p>
    </article>
    <NextStepBtn btn-label="接受挑戰" @click="gotoNextPage"></NextStepBtn>
  </main>
</template>
