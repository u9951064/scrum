<script setup lang="ts">
import ChatBox from "@/components/ChatBox.vue";
import Step6Desktop from "@/components/images/Step6Desktop.vue";
import Step6Mobile from "@/components/images/Step6Mobile.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import StarTitle from "@/components/StarTitle.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import TypeIn from "@/components/TypeIn.vue";
import Role from "@/constants/Role";
import router from "@/router";
import { computed, reactive, ref } from "vue";
import draggable from "vuedraggable";
import {
  useStore as usePopupStore,
  type PopupShow,
} from "../store/popupMessage";

interface SprintItem {
  name: "retro" | "review";
}

const popupStore = usePopupStore();

const sprintRetroSource = ref([{ name: "retro" }] as SprintItem[]);

const sprintReviewSource = ref([{ name: "review" }] as SprintItem[]);

const sprintRetroTarget = ref([] as SprintItem[]);

const sprintReviewTarget = ref([] as SprintItem[]);

const isDisabled = reactive({
  sprintRetroSource: false,
  sprintReviewSource: false,
  sprintRetroTarget: false,
  sprintReviewTarget: false,
});

const onStartEvent = (
  sourceName:
    | "sprintRetroSource"
    | "sprintReviewSource"
    | "sprintRetroTarget"
    | "sprintReviewTarget"
) => {
  isDisabled.sprintRetroSource =
    sourceName !== "sprintRetroSource" && sprintRetroSource.value.length > 0;

  isDisabled.sprintReviewSource =
    sourceName !== "sprintReviewSource" && sprintReviewSource.value.length > 0;

  isDisabled.sprintRetroTarget =
    sourceName !== "sprintRetroTarget" && sprintRetroTarget.value.length > 0;

  isDisabled.sprintReviewTarget =
    sourceName !== "sprintReviewTarget" && sprintReviewTarget.value.length > 0;
};

const onEndEvent = () => {
  isDisabled.sprintRetroSource = false;
  isDisabled.sprintReviewSource = false;
  isDisabled.sprintRetroTarget = false;
  isDisabled.sprintReviewTarget = false;
};

const checkAnswerOrGoNextPage = () => {
  let isCorrect = true;
  isCorrect = isCorrect && sprintRetroTarget.value.length === 1;
  isCorrect = isCorrect && sprintReviewTarget.value.length === 1;
  isCorrect = isCorrect && sprintRetroTarget.value[0].name === "retro";
  isCorrect = isCorrect && sprintReviewTarget.value[0].name === "review";
  if (isCorrect) {
    popupStore.dispatch("show", {
      icon: "success",
      title: "????????????",
      btnLabel: "??????",
      btnCB: () => router.push({ name: "step7" }),
    } as PopupShow);
  } else {
    popupStore.dispatch("show", {
      icon: "error",
      title: "????????????",
      message: "Scrum ?????????????????????",
      btnLabel: "????????????",
      btnCB: () => {
        sprintRetroSource.value = [{ name: "retro" }] as SprintItem[];
        sprintReviewSource.value = [{ name: "review" }] as SprintItem[];
        sprintRetroTarget.value = [] as SprintItem[];
        sprintReviewTarget.value = [] as SprintItem[];
      },
    } as PopupShow);
  }
};

const finishedChat = ref(0);
const chat1Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        inner: "????????????????????????????????????",
      },
      {
        tagBegin: ' <span class="highlight-yellow">',
        inner: "Scrum ?????????",
        tagEnd: "</span>",
      },
      {
        inner: "???????????????????????????????????????????????????",
      },
    ],
    tagEnd: "</div>",
  },
]);

const allowSubmit = computed(
  () =>
    sprintRetroTarget.value.length !== 0 &&
    sprintReviewTarget.value.length !== 0
);
</script>

<template>
  <main class="step6-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="6"></StepBar>
      </div>
      <div class="col pt-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="6"></StepList>
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
                    <ChatBox :role="Role.KaiXinGou">
                      <TypeIn
                        :screen-configs="chat1Config"
                        @ended="finishedChat = finishedChat + 1"
                      ></TypeIn>
                    </ChatBox>
                    <template v-if="finishedChat >= 1">
                      <StarTitle>????????????????????????????????????????????????</StarTitle>
                      <div class="position-relative">
                        <div class="d-none d-md-block sprint-flow">
                          <Step6Desktop></Step6Desktop>
                        </div>
                        <div class="d-block d-md-none sprint-flow">
                          <Step6Mobile></Step6Mobile>
                        </div>
                        <div class="sprint-daily">
                          <img class="w-100" src="../assets/SprintDaily.svg" />
                        </div>
                        <draggable
                          :disabled="isDisabled.sprintRetroSource"
                          @start="onStartEvent('sprintRetroSource')"
                          @end="onEndEvent"
                          class="sprint-source sprint-retro-source"
                          :list="sprintRetroSource"
                          group="sprintEvent"
                          itemKey="name"
                        >
                          <template #item="{ element }">
                            <div :class="`sprint-event-${element.name}`">
                              <img
                                v-if="element.name === 'retro'"
                                class="w-100"
                                src="../assets/SprintRetro.svg"
                              />
                              <img
                                v-if="element.name === 'review'"
                                class="w-100"
                                src="../assets/SprintReview.svg"
                              />
                            </div>
                          </template>
                        </draggable>
                        <draggable
                          :disabled="isDisabled.sprintReviewSource"
                          @start="onStartEvent('sprintReviewSource')"
                          @end="onEndEvent"
                          class="sprint-source sprint-review-source"
                          :list="sprintReviewSource"
                          group="sprintEvent"
                          itemKey="name"
                        >
                          <template #item="{ element }">
                            <div :class="`sprint-event-${element.name}`">
                              <img
                                v-if="element.name === 'retro'"
                                class="w-100"
                                src="../assets/SprintRetro.svg"
                              />
                              <img
                                v-if="element.name === 'review'"
                                class="w-100"
                                src="../assets/SprintReview.svg"
                              />
                            </div>
                          </template>
                        </draggable>
                        <draggable
                          :disabled="isDisabled.sprintRetroTarget"
                          @start="onStartEvent('sprintRetroTarget')"
                          @end="onEndEvent"
                          class="sprint-target sprint-retro-target"
                          :list="sprintRetroTarget"
                          group="sprintEvent"
                          itemKey="name"
                        >
                          <template #item="{ element }">
                            <div :class="`sprint-event-item-${element.name}`">
                              <img
                                v-if="element.name === 'retro'"
                                class="w-100"
                                src="../assets/SprintRetro.svg"
                              />
                              <img
                                v-if="element.name === 'review'"
                                class="w-100"
                                src="../assets/SprintReview.svg"
                              />
                            </div>
                          </template>
                        </draggable>
                        <draggable
                          :disabled="isDisabled.sprintReviewTarget"
                          @start="onStartEvent('sprintReviewTarget')"
                          @end="onEndEvent"
                          class="sprint-target sprint-review-target"
                          :list="sprintReviewTarget"
                          group="sprintEvent"
                          itemKey="name"
                        >
                          <template #item="{ element }">
                            <div :class="`sprint-event-item-${element.name}`">
                              <img
                                v-if="element.name === 'retro'"
                                class="w-100"
                                src="../assets/SprintRetro.svg"
                              />
                              <img
                                v-if="element.name === 'review'"
                                class="w-100"
                                src="../assets/SprintReview.svg"
                              />
                            </div>
                          </template>
                        </draggable>
                      </div>
                    </template>
                  </section>
                </article>
              </div>
              <div class="col-auto text-center">
                <NextStepBtn
                  v-if="finishedChat >= 1"
                  btn-label="????????????"
                  @click="checkAnswerOrGoNextPage"
                  :disabled="!allowSubmit"
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
.step6-page {
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

.sprint-flow {
  padding-top: 35%;
}

.sprint-daily {
  position: absolute;
  margin: auto;
  right: 3%;
  top: 50%;
  width: 70%;
}

.sprint-source {
  position: absolute;
  margin: auto;
  top: 0;
  left: 8%;
  right: 8%;
  min-height: 3rem;
  max-height: 7.5rem;
}

.sprint-review-source {
  top: 10%;
}

.sprint-retro-source {
  top: 0%;
}

.sprint-target {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border: 3px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 3.25rem;
  max-height: 3.25rem;
  right: 3%;
  left: 15%;
  text-align: center;
}

.sprint-retro-target:empty::after,
.sprint-review-target:empty::after {
  content: "?";
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
}

.sprint-retro-target {
  bottom: 8%;
}

.sprint-review-target {
  bottom: 19%;
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

  .sprint-flow {
    padding-top: 0;
  }

  .sprint-daily {
    position: absolute;
    margin: auto;
    right: 40%;
    top: 10%;
    width: 32%;
  }

  .sprint-retro-target,
  .sprint-review-target {
    bottom: 19%;
  }

  .sprint-review-target {
    right: 36%;
    left: 33%;
  }

  .sprint-retro-target {
    right: 4%;
    left: 67%;
  }

  .sprint-source {
    position: absolute;
    margin: auto;
    left: unset;
    right: 3%;
    min-height: 3rem;
    max-height: 7.5rem;
  }

  .sprint-review-source {
    top: 18%;
    width: 33%;
  }

  .sprint-retro-source {
    top: 38%;
    width: 39%;
  }
}

.bg-plant {
  background-image: url("../assets/largePlant6.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 50vmin;
  background-position: center bottom -42vmin;
  padding-bottom: 70px;
}

@media (min-width: 768px) {
  .bg-plant {
    padding-bottom: 90px;
  }
}
</style>
