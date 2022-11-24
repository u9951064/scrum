<script setup lang="ts">
import ChatBox from "@/components/ChatBox.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import StarTitle from "@/components/StarTitle.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import Role from "@/constants/Role";
import router from "@/router";
import { onMounted, ref, computed } from "vue";
import TypeIn from "@/components/TypeIn.vue";
import draggable from "vuedraggable";
import {
  useStore as usePopupStore,
  type PopupShow,
} from "../store/popupMessage";

const popupStore = usePopupStore();

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

const isAllowChange = ref(true);

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
  return JSON.stringify([1, 2, 3, 4]) === JSON.stringify(currentOrder);
};
const checkDesktopAnswer = () => {
  const currentOrder = backlogPrioritiesForDesktopTarget.value.map(
    (record) => record.priority
  );
  return JSON.stringify([1, 2, 3, 4]) === JSON.stringify(currentOrder);
};

const gotoNextPage = () => {
  router.replace({ name: "step3" });
};

const fixAnswer = () => {
  backlogPrioritiesForDesktopTarget.value =
    backlogPrioritiesForDesktopTarget.value.sort(
      (a, b) => a.priority - b.priority
    );

  backlogPrioritiesForMobile.value = backlogPrioritiesForMobile.value.sort(
    (a, b) => a.priority - b.priority
  );
};

const checkAnswerOrGoNextPage = () => {
  let isCorrect = false;
  if (isMobile()) {
    isCorrect = checkMobileAnswer();
  } else {
    isCorrect = checkDesktopAnswer();
  }
  if (isCorrect) {
    if (isAllowChange.value) {
      popupStore.dispatch("show", {
        icon: "success",
        title: "排序正確",
        message: "",
        btnLabel: "繼續",
        btnCB: gotoNextPage,
      } as PopupShow);
    } else {
      gotoNextPage();
    }
  } else {
    popupStore.dispatch("show", {
      icon: "error",
      title: "順序錯誤",
      message: "產品待辦清單的順序錯囉，讓 果敏兒 幫你排完正確的順序吧！",
      btnLabel: "OK",
      btnCB: () => {
        fixAnswer();
        isAllowChange.value = false;
      },
    } as PopupShow);
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

const finishedChat = ref(0);
const chat1Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        inner:
          "請把需求放到產品待辦清單，並調整待辦的優先度順序。我們公司也推薦使用",
      },
      {
        tagBegin: ' <span class="highlight-green">',
        inner: "Jira",
        tagEnd: "</span> ",
      },
      {
        inner: "來做任務的管理呢！",
      },
    ],
    tagEnd: "</div>",
  },
]);

const allowSubmit = computed(() => {
  if (isMobile()) {
    return true;
  }
  return backlogPrioritiesForDesktop.value.length === 0;
});
</script>

<template>
  <main class="step2-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="2"></StepBar>
      </div>
      <div class="col pt-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto step-block">
            <StepList :current-step="2"></StepList>
          </div>
          <div
            class="col overflow-auto"
            :class="{ 'bg-plant': finishedChat >= 1 }"
          >
            <div class="row flex-column flex-nowrap g-0">
              <div class="col main-operation-block p-md-5">
                <article
                  class="row flex-column flex-md-row flex-nowrap flex-md-wrap"
                >
                  <section class="col-12">
                    <ChatBox :role="Role.GouMinEr" :logo="true">
                      <TypeIn
                        :screen-configs="chat1Config"
                        @ended="finishedChat = 1"
                      ></TypeIn>
                    </ChatBox>
                  </section>
                  <section class="col-12 text-center" v-if="finishedChat >= 1">
                    <div class="d-block d-md-none">
                      <StarTitle
                        >拖移區塊，並調整待辦清單的優先度順序</StarTitle
                      >
                      <div class="row">
                        <div class="col-auto text-center">
                          <div
                            class="h-100 row flex-column flex-nowrap justify-content-between pt-5"
                          >
                            <div class="col-auto priority-label">
                              優<br />先<br />度<br />高
                            </div>
                            <div class="col-auto priority-label">
                              優<br />先<br />度<br />低
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <draggable
                            class="list-group"
                            :disabled="!isAllowChange"
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
                      <StarTitle>
                        拖移左側區塊，移至右側待辦清單，並調整優先度順序
                      </StarTitle>
                      <div class="row flex-nowrap">
                        <div class="col-6">
                          <div class="row h-100">
                            <div class="col">
                              <draggable
                                class="list-group"
                                :disabled="!isAllowChange"
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
                                      v-if="element.description"
                                      v-text="element.description"
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
                                <div class="col-auto priority-label">
                                  優<br />先<br />度<br />高
                                </div>
                                <div class="col-auto priority-label">
                                  優<br />先<br />度<br />低
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <draggable
                                class="list-group list-target"
                                :disabled="!isAllowChange"
                                :list="backlogPrioritiesForDesktopTarget"
                                group="desktopList"
                                itemKey="priority"
                              >
                                <template #header>
                                  <div class="py-2 c-purple bg-white fw-500">
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
                                      v-if="element.description"
                                      v-text="element.description"
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
              <div class="col-auto text-center">
                <NextStepBtn
                  v-if="finishedChat >= 1"
                  btn-label="排序完成"
                  @click="checkAnswerOrGoNextPage"
                  :disabled="!allowSubmit"
                ></NextStepBtn>
                <div class="d-block d-md-none" ref="mobileDetector"></div>
              </div>
            </div>
          </div>
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

.priority-label {
  font-size: 15px;
  font-weight: 700;
  color: #0defb5;
}

.list-group {
  border-radius: 0;
}

.list-group .list-group-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 6rem;
  font-size: 14px;
}

@media (max-width: 767.9px) {
  .list-group {
    border: 3px solid #ffffff;
  }

  .list-group .list-group-item {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }

  .list-group .list-group-item ~ .list-group-item {
    border-top: 3px solid #ffffff;
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

  .list-group {
    height: 100%;
    min-height: 26rem;
    margin-bottom: -3px;
  }

  .list-target {
    background: rgba(255, 255, 255, 0.1);
    border: 3px solid #ffffff;
  }

  .list-target .list-group-item {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border-bottom: 3px solid #ffffff;
  }

  .list-group:not(.list-target) .list-group-item {
    background: rgba(255, 255, 255, 0.1);
    border: 3px solid #ffffff;
    color: #ffffff;
  }

  .list-group:not(.list-target) .list-group-item + .list-group-item {
    margin-top: 0.4rem;
  }
}

.bg-plant {
  background-image: url("../assets/largePlant2.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 50vmin;
  background-position: center bottom -35vmin;
  padding-bottom: 90px;
}
</style>
