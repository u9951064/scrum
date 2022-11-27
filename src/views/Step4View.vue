<script setup lang="ts">
import IconDownArrow from "@/components/icons/IconDownArrow.vue";
import IconRightArrow from "@/components/icons/IconRrightArrow.vue";
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

const resetAnswer = () => {
  while (backlogTarget.value.length > 0) {
    backlogSource.value.push(backlogTarget.value.pop() as OptionRecord);
  }
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
    btnCB: resetAnswer,
  } as PopupShow);

  return false;
};

const checkAnswerOrGoNextPage = () => {
  const checkedResult = checkAnswer();
  switch (checkedResult) {
    case "pass":
      popupStore.dispatch("show", {
        title: "點數正確",
        icon: "success",
        btnLabel: "繼續",
        btnCB: () => router.push({ name: "step5" }),
      } as PopupShow);
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
        title: "沒有任務",
        message: "沒有任務在短衝待辦清單耶，這個 Sprint 有 20 點可消耗喔",
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
      <div class="col pt-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="4"></StepList>
          </div>
          <div class="col overflow-auto bg-plant">
            <div class="row flex-column flex-nowrap g-0 justify-content-center">
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
                    <div class="row flex-md-nowrap pt-2 pt-md-5">
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
                                <div class="py-2 c-purple bg-white fw-500">
                                  產品待辦清單 (Product Backlog)
                                </div>
                              </template>
                              <template #item="{ element }">
                                <div class="list-group-item position-relative">
                                  <div
                                    class="point"
                                    v-text="element.point"
                                  ></div>
                                  <div
                                    class="row flex-column justify-content-center h-100"
                                  >
                                    <div
                                      class="title"
                                      v-text="element.title"
                                    ></div>
                                    <div
                                      class="description"
                                      v-if="element.description.length > 0"
                                      v-text="element.description"
                                    ></div>
                                  </div>
                                </div>
                              </template>
                            </draggable>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-1">
                        <div
                          class="row flex-column justify-content-center h-100"
                        >
                          <div class="col-auto p-2">
                            <IconRightArrow
                              class="d-none d-md-inline-block"
                            ></IconRightArrow>
                            <IconDownArrow
                              class="d-inline-block d-md-none"
                            ></IconDownArrow>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-5 me-auto position-relative">
                        <div class="point-item">
                          {{ remainderingPoint }}點/5人
                        </div>
                        <div class="row h-100">
                          <div class="col-12">
                            <draggable
                              class="list-group"
                              :list="backlogTarget"
                              group="backlogList"
                              itemKey="key"
                            >
                              <template #header>
                                <div class="py-2 c-purple bg-white fw-500">
                                  炙熱星 的短衝待辦清單
                                </div>
                              </template>
                              <template #item="{ element }">
                                <div class="list-group-item position-relative">
                                  <div
                                    class="point"
                                    v-text="element.point"
                                  ></div>
                                  <div
                                    class="row flex-column justify-content-center h-100"
                                  >
                                    <div
                                      class="title"
                                      v-text="element.title"
                                    ></div>
                                    <div
                                      class="description"
                                      v-if="element.description.length > 0"
                                      v-text="element.description"
                                    ></div>
                                  </div>
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
              <div class="col-auto text-center">
                <NextStepBtn
                  btn-label="準備好了！開始 Sprint"
                  @click="checkAnswerOrGoNextPage"
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

.list-group {
  height: 100%;
  min-height: 20rem;
  border: 3px solid #ffffff;
  border-radius: 0;
}

.point {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  font-weight: 600;
  color: #00092b;
  background-color: #0defb5;
  text-align: center;
  font-size: 0.7rem;
  line-height: 0.7rem;
  padding: 0.4rem;
  border-radius: 100%;
  overflow: hidden;
}

.list-group-item {
  min-height: 4.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-bottom: 3px solid #ffffff;
}

.point-item {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #0defb5;
  border-radius: 6px;
  width: auto;
  font-weight: 600;
  font-size: 9px;
  position: absolute;
  right: 0.75rem;
  margin-top: -2.5rem;
  padding: 5px 10px;
}

.bg-plant {
  background-image: url("../assets/largePlant4.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 50vmin;
  background-position: center bottom -35vmin;
  padding-bottom: 70px;
}

@media (min-width: 768px) {
  .bg-plant {
    padding-bottom: 90px;
  }
}
</style>
