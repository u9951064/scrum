<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import draggable from "vuedraggable";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import router from "@/router";

interface OptionRecord {
  title: string;
  description: string;
  point: number;
  key: number;
}

const backlogSource = ref([
  {
    title: "會員系統",
    description: "（登入、註冊、權理管理）",
    point: 8,
    key: 1,
  },
  {
    title: "應徵者的線上履歷編輯器",
    description: "",
    point: 13,
    key: 1,
  },
  {
    title: "前台職缺列表",
    description: "（職缺詳細內容、點選可發送應徵意願）",
    point: 5,
    key: 1,
  },
  {
    title: "後台職缺管理功能",
    description: "（資訊上架、下架、顯示應徵者資料）",
    point: 8,
    key: 1,
  },
] as OptionRecord[]);

const backlogTarget = ref([] as OptionRecord[]);

const remainderingPoint = computed(() => {
  return backlogTarget.value.reduce((carry, record) => {
    carry -= record.point;
    return carry;
  }, 20);
});

const checkAnswer = () => {
  if (remainderingPoint.value < 0) {
    return false;
  }
  if (backlogTarget.value.length === 0) {
    return false;
  }
  return true;
};

const onEndEvent = () => {
  if (remainderingPoint.value >= 0) {
    return true;
  }

  if (backlogTarget.value.length === 0) {
    return true;
  }

  // TODO: show alert
  console.log("error");
  return false;
};

const checkAnswerOrGoNextPage = () => {
  let isCorrect = checkAnswer();

  console.log({
    1: remainderingPoint.value,
    2: backlogTarget.value.length,
    3: isCorrect,
  });
  if (isCorrect) {
    router.replace({ name: "step5" });
  } else {
    console.log("1111");
    // TODO: popup
  }
};

onMounted(() => {
  backlogSource.value = backlogSource.value.sort(() => Math.random() - 0.5);
});
</script>

<template>
  <main class="step4-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="4"></StepBar>
      </div>
      <div class="col py-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="4"></StepList>
          </div>
          <div class="col overflow-auto">
            <div class="row flex-column flex-nowrap justify-content-center">
              <div class="col main-operation-block p-md-5">
                <article
                  class="row flex-column flex-md-row flex-nowrap flex-md-wrap"
                >
                  <section class="col-12 text-center">
                    <div class="d-none d-md-block">
                      請在點數限制內，把產品待辦清單任務，移至右側短衝清單中
                    </div>
                    <div class="d-block d-md-none">
                      請在點數限制內，把產品待辦清單任務，移動至下方短衝清單中
                    </div>
                    <div class="row flex-md-nowrap">
                      <div class="col-12 col-md-5 ms-auto">
                        <div class="row h-100">
                          <div class="col">
                            <draggable
                              class="list-group"
                              :list="backlogSource"
                              group="backlogList"
                              @end="onEndEvent"
                              itemKey="key"
                            >
                              <template #header>
                                <div class="py-2 c-purple bg-white">
                                  產品待辦清單 (Product Backlog)
                                </div>
                              </template>
                              <template #item="{ element }">
                                <div class="list-group-item p-relative">
                                  <div
                                    class="point"
                                    v-text="element.point"
                                  ></div>
                                  <div
                                    class="title"
                                    v-text="element.title"
                                  ></div>
                                  <div
                                    class="description"
                                    v-text="element.description || '&nbsp;'"
                                  ></div>
                                </div>
                              </template>
                            </draggable>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-1"></div>
                      <div class="col-12 col-md-5 me-auto">
                        <div class="row h-100">
                          <div class="col-12">
                            <draggable
                              class="list-group"
                              :list="backlogTarget"
                              group="backlogList"
                              itemKey="key"
                            >
                              <template #header>
                                <div class="py-2 c-purple bg-white">
                                  炙熱星 的短衝待辦清單
                                </div>
                              </template>
                              <template #item="{ element }">
                                <div class="list-group-item p-relative">
                                  <div
                                    class="point"
                                    v-text="element.point"
                                  ></div>
                                  <div
                                    class="title"
                                    v-text="element.title"
                                  ></div>
                                  <div
                                    class="description"
                                    v-text="element.description || '&nbsp;'"
                                  ></div>
                                </div>
                              </template>
                            </draggable>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </article>
              </div>
            </div>
            <div class="col-auto text-center">
              <NextStepBtn
                btn-label="準備好了！開始 Sprint"
                @click="checkAnswerOrGoNextPage"
              ></NextStepBtn>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-auto hidden-nav">
          <StepList :current-step="1"></StepList>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.step4-page {
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

.list-group {
  height: 100%;
  border: 2px solid #ffffff;
  border-radius: 0;
}
</style>
