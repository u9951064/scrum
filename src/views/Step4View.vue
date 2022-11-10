<script setup lang="ts">
import NextStepBtn from "@/components/NextStepBtn.vue";
import StarTitle from "@/components/StarTitle.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import router from "@/router";
import { computed, onMounted, ref } from "vue";
import draggable from "vuedraggable";
import {
  useStore as usePopupStore,
  type PopupShow,
} from "../store/popupMessage";

interface OptionRecord {
  title: string;
  description: string;
  point: number;
  key: number;
}

const popupStore = usePopupStore();

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
    return "overflow";
  }
  if (backlogTarget.value.length === 0) {
    return "empty";
  }
  return "pass";
};

const onEndEvent = () => {
  const checkedResult = checkAnswer();
  if (checkedResult !== "overflow") {
    return true;
  }
  popupStore.dispatch("show", {
    title: "點數過多",
    message: "塞太多任務啦！<br/>這個 Sprint 只有 20 點喔！",
    icon: "error",
    btnLabel: "再試一次",
  } as PopupShow);

  return false;
};

const checkAnswerOrGoNextPage = () => {
  const checkedResult = checkAnswer();
  switch (checkedResult) {
    case "pass":
      router.replace({ name: "step5" });
      break;
    case "overflow":
      popupStore.dispatch("show", {
        title: "點數過多",
        message: "塞太多任務啦！<br/>這個 Sprint 只有 20 點喔！",
        icon: "error",
        btnLabel: "再試一次",
      } as PopupShow);
      break;
    case "empty":
    default:
      popupStore.dispatch("show", {
        title: "這個 Sprint 還有 20 點喔！",
        message: "請在點數限制內安排任務到短衝清單中。",
        icon: "error",
        btnLabel: "再試一次",
      } as PopupShow);
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
                      <StarTitle
                        >請在點數限制內，把產品待辦清單任務，移至右側短衝清單中</StarTitle
                      >
                    </div>
                    <div class="d-block d-md-none">
                      <StarTitle
                        >請在點數限制內，把產品待辦清單任務，移動至下方短衝清單中</StarTitle
                      >
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
