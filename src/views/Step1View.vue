<script setup lang="ts">
import GouMinErCVCard from "@/components/images/GouMinErCVCard.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "step2" });
};
</script>

<template>
  <main class="step1-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="1"></StepBar>
      </div>
      <div class="col py-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="1"></StepList>
          </div>
          <div class="col overflow-auto">
            <div class="row flex-column flex-nowrap">
              <div class="col main-operation-block p-md-5">
                <article class="row flex-column flex-md-row flex-nowrap">
                  <section class="col-12 col-md-6 text-center">
                    <GouMinErCVCard></GouMinErCVCard>
                  </section>
                  <section class="col-12 col-md-6">
                    <p>PO 也就是產品負責人 (Product Owner)。</p>
                    <p>
                      產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。<br />
                      最後排出產品待辦清單 (Product Backlog) 唷！
                    </p>
                    <p>
                      剛好我最近手邊有一個 ( 人才招募系統 ) 的案子，我才剛列出了
                      ( 產品需求清單 )。<br />
                      既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧
                      🤖
                    </p>
                  </section>
                </article>
              </div>
              <div class="col-auto text-center">
                <NextStepBtn
                  btn-label="接受挑戰"
                  @click="gotoNextPage"
                ></NextStepBtn>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-auto hidden-nav">
            <StepList :current-step="1"></StepList>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.step1-page {
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  background: linear-gradient(180deg, #4a289c 0%, #00092b 100%);
  overflow: hidden;
}

.content-region {
  max-width: 1024px;
  max-height: 100%;
  width: 100%;
  height: 100%;
}

.main-operation-block {
  overflow-x: hidden;
  overflow-y: auto;
}

@media (max-width: 767.9px) {
  .hidden-nav {
    display: none;
  }
}

@media (min-width: 768px) {
  .content-region {
    height: 80%;
  }

  .main-operation-block {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #ffffff;
    border-radius: 30px;
  }

  .hidden-nav {
    visibility: hidden;
  }
}
</style>
