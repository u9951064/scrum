<script setup lang="ts">
import GouMinErCVCard from "@/components/images/GouMinErCVCard.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import TypeIn from "@/components/TypeIn.vue";
import router from "@/router";
import { ref } from "vue";

const showBtn = ref(false);
const gotoNextPage = () => {
  if (showBtn.value) {
    router.push({ name: "step2" });
  }
};

const typeInConfig = ref([
  {
    tagBegin: "<p>",
    inner: "我是 敏捷宇宙 的 PO，果敏兒",
    tagEnd: "</p>",
  },
  {
    tagBegin: '<p><span class="highlight-green">',
    inner: "PO 也就是產品負責人 (Product Owner)。",
    tagEnd: "</span></p>",
  },
  {
    tagBegin: "<p>",
    inner: [
      {
        inner:
          "產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。",
      },
      {
        tagBegin: "<br />",
        inner: "最後排出",
      },
      {
        tagBegin: '<span class="highlight-green">',
        inner: "產品待辦清單 (Product Backlog) 唷！",
        tagEnd: "</span>",
      },
    ],
    tagEnd: "</p>",
  },
  {
    tagBegin: "<p>",
    inner: [
      {
        inner:
          "剛好我最近手邊有一個 ( 人才招募系統 ) 的案子，我才剛列出了( 產品需求清單 )。",
      },
      {
        tagBegin: "<br />",
        inner: "既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！",
      },
    ],
    tagEnd: "</p>",
  },
]);
</script>

<template>
  <main class="step1-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="1"></StepBar>
      </div>
      <div class="col pt-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="1"></StepList>
          </div>
          <div class="col overflow-auto" :class="{ 'bg-plant': showBtn }">
            <div class="row flex-column flex-nowrap g-0">
              <div class="col main-operation-block p-md-5">
                <article class="row flex-column flex-md-row flex-nowrap">
                  <section class="col-12 col-md-6 text-center">
                    <div
                      class="h-100 w-100 row flex-column justify-content-center g-0"
                    >
                      <GouMinErCVCard class="col-auto w-100"></GouMinErCVCard>
                    </div>
                  </section>
                  <section class="col-12 col-md-6 pt-3">
                    <TypeIn
                      :screen-configs="typeInConfig"
                      @ended="showBtn = true"
                    ></TypeIn>
                  </section>
                </article>
              </div>
              <div class="col-auto text-center">
                <NextStepBtn
                  :class="{ hideBtn: !showBtn }"
                  btn-label="接受挑戰"
                  @click="gotoNextPage"
                ></NextStepBtn>
              </div>
            </div>
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

@media (min-width: 768px) {
  .content-region {
    height: 80%;
  }

  .main-operation-block {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #ffffff;
    border-radius: 30px;
  }
}

.bg-plant {
  background-image: url("../assets/largePlant1.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 55vmin;
  background-position: center bottom -35vmin;
  padding-bottom: 90px;
}
</style>
