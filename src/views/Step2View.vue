<script setup lang="ts">
import Role from "@/constants/Role";
import { onMounted, ref } from "vue";
import draggable from "vuedraggable";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import ChatBox from "@/components/ChatBox.vue";
import router from "@/router";

interface OptionRecord {
  title: string;
  description: string;
  priority: number;
}

const mobileDetector = ref();

const isMobile = () => {
  return !!(
    mobileDetector.value.offsetWidth ||
    mobileDetector.value.offsetHeight ||
    mobileDetector.value.getClientRects().length
  );
};

const backlogPrioritiesForMobile = ref([
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
] as OptionRecord[]);

const backlogPrioritiesForDesktop = ref([
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
] as OptionRecord[]);

const backlogPrioritiesForDesktopTarget = ref([] as OptionRecord[]);

const checkMobileAnswer = () => {
  const currentOrder = backlogPrioritiesForMobile.value.map(
    (record) => record.priority
  );
  const isCorrect =
    JSON.stringify([1, 2, 3, 4]) === JSON.stringify(currentOrder);
  if (isCorrect) {
    return true;
  }
  backlogPrioritiesForMobile.value = backlogPrioritiesForMobile.value.sort(
    (a, b) => a.priority - b.priority
  );
  return false;
};
const checkDesktopAnswer = () => {
  const currentOrder = backlogPrioritiesForDesktopTarget.value.map(
    (record) => record.priority
  );
  const isCorrect =
    JSON.stringify([1, 2, 3, 4]) === JSON.stringify(currentOrder);
  if (isCorrect) {
    return true;
  }
  while (backlogPrioritiesForDesktop.value.length > 0) {
    const obj = backlogPrioritiesForDesktop.value.pop() as OptionRecord;
    backlogPrioritiesForDesktopTarget.value.push(obj);
  }
  backlogPrioritiesForDesktopTarget.value =
    backlogPrioritiesForDesktopTarget.value.sort(
      (a, b) => a.priority - b.priority
    );
  return false;
};

const checkAnswerOrGoNextPage = () => {
  let isCorrect = false;
  if (isMobile()) {
    isCorrect = checkMobileAnswer();
  } else {
    isCorrect = checkDesktopAnswer();
  }
  if (isCorrect) {
    router.replace({ name: "step3" });
  } else {
    // TODO: popup
  }
};

onMounted(() => {
  backlogPrioritiesForDesktop.value = backlogPrioritiesForDesktop.value.sort(
    () => Math.random() - 0.5
  );
  backlogPrioritiesForMobile.value = backlogPrioritiesForMobile.value.sort(
    () => Math.random() - 0.5
  );
});
</script>

<template>
  <main class="step2-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="2"></StepBar>
      </div>
      <div class="col py-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="2"></StepList>
          </div>
          <div class="col overflow-auto">
            <div class="row flex-column flex-nowrap">
              <div class="col main-operation-block p-md-5">
                <article
                  class="row flex-column flex-md-row flex-nowrap flex-md-wrap"
                >
                  <section class="col-12">
                    <ChatBox :role="Role.GouMinEr" :flip="true" :logo="true">
                      <div class="fz-14px">
                        請把需求放到產品待辦清單，並調整待辦的優先度順序。
                        我們公司也推薦使用 Jira 來做任務的管理呢！
                      </div>
                    </ChatBox>
                  </section>
                  <section class="col-12 text-center">
                    <div class="d-block d-md-none" ref="mobileDetector">
                      <div class="">拖移區塊，並調整待辦清單的優先度順序</div>
                      <div class="row">
                        <div class="col-auto text-center">
                          <div
                            class="h-100 row flex-column flex-nowrap justify-content-between pt-5"
                          >
                            <div class="col-auto">
                              優<br />先<br />度<br />高
                            </div>
                            <div class="col-auto">
                              優<br />先<br />度<br />低
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <draggable
                            class="list-group"
                            :list="backlogPrioritiesForMobile"
                            group="mobileList"
                            itemKey="priority"
                          >
                            <template #header>
                              <div class="py-2 c-purple bg-white">
                                產品待辦清單 (Product Backlog)
                              </div>
                            </template>
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
                      </div>
                    </div>
                    <div class="d-none d-md-block">
                      <div class="">
                        拖移左側區塊，移至右側待辦清單，並調整優先度順序
                      </div>
                      <div class="row flex-nowrap">
                        <div class="col-6">
                          <div class="row h-100">
                            <div class="col">
                              <draggable
                                class="list-group"
                                :list="backlogPrioritiesForDesktop"
                                group="desktopList"
                                itemKey="priority"
                              >
                                <template #item="{ element }">
                                  <div class="list-group-item">
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
                        <div class="col-6">
                          <div class="row h-100">
                            <div class="col-auto text-center">
                              <div
                                class="h-100 row flex-column flex-nowrap justify-content-between pt-5"
                              >
                                <div class="col-auto">
                                  優<br />先<br />度<br />高
                                </div>
                                <div class="col-auto">
                                  優<br />先<br />度<br />低
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <draggable
                                class="list-group"
                                :list="backlogPrioritiesForDesktopTarget"
                                group="desktopList"
                                itemKey="priority"
                              >
                                <template #header>
                                  <div class="py-2 c-purple bg-white">
                                    產品待辦清單 (Product Backlog)
                                  </div>
                                </template>
                                <template #item="{ element }">
                                  <div class="list-group-item">
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
                    </div>
                  </section>
                </article>
              </div>
            </div>
            <div class="col-auto text-center">
              <NextStepBtn
                btn-label="排序完成"
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
.step2-page {
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
