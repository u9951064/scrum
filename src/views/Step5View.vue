<script setup lang="ts">
import ChatBox from "@/components/ChatBox.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import TypeIn from "@/components/TypeIn.vue";
import Role from "@/constants/Role";
import router from "@/router";
import { ref } from "vue";

const gotoNextPage = () => {
  router.push({ name: "step6" });
};

const finishedChat = ref(0);
const chat1Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        inner: "等等，你都還不知道什麼是",
      },
      {
        tagBegin: ' <span class="highlight-yellow">',
        inner: "Sprint",
        tagEnd: "</span>",
      },
      {
        tagBegin: " ",
        inner: "吧！",
      },
    ],
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px">',
    inner: "讓 發大財 先為你介紹一下～",
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px">',
    inner: "仔細聽好唷，等等會考考你！",
    tagEnd: "</div>",
  },
]);

const chat2Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        tagBegin: '<span class="highlight-red">',
        inner: "Sprint 是一個短衝",
        tagEnd: "</span>",
      },
      {
        inner: "，開發團隊會在這期間執行開發。",
      },
    ],
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      { inner: "在這段期間內，開發團隊舉辦" },
      {
        tagBegin: '<span class="highlight-red">',
        inner: "每日站立會議 (Daily Scrum)",
        tagEnd: "</span>",
      },
      { inner: "，追蹤成員間的工作狀況。" },
    ],
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        inner: "除了每日站立會議，在 Sprint 的結束也會包含",
      },
      {
        tagBegin: '<span class="highlight-red">',
        inner: "短衝檢視會議 (Sprint Review)",
        tagEnd: "</span>",
      },
      {
        inner: "、",
      },
      {
        tagBegin: '<span class="highlight-red">',
        inner: "短衝自省會議(Sprint Retrospective)",
        tagEnd: "</span>",
      },
      {
        inner: "。",
      },
    ],
    tagEnd: "</div>",
  },
]);
</script>

<template>
  <main class="step5-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="5"></StepBar>
      </div>
      <div class="col pt-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="5"></StepList>
          </div>
          <div
            class="col overflow-auto"
            :class="{ 'bg-plant': finishedChat >= 2 }"
          >
            <div class="row flex-column g-0 flex-nowrap">
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
                    <ChatBox
                      v-if="finishedChat >= 1"
                      :role="Role.FaDaCia"
                      :flip="true"
                    >
                      <TypeIn
                        :screen-configs="chat2Config"
                        @ended="finishedChat = finishedChat + 1"
                      ></TypeIn>
                    </ChatBox>
                    <div class="row" v-if="finishedChat >= 2">
                      <div class="col-12 col-md-4 pt-3">
                        <picture>
                          <source
                            srcset="../assets/step5/IntroDailyScrumDesktop.svg"
                            media="(min-width: 768px)"
                          />
                          <img
                            class="w-100"
                            src="../assets/step5/IntroDailyScrumMobile.svg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div class="col-12 col-md-4 pt-3">
                        <picture>
                          <source
                            srcset="../assets/step5/IntroScrumReviewDesktop.svg"
                            media="(min-width: 768px)"
                          />
                          <img
                            class="w-100"
                            src="../assets/step5/IntroScrumReviewMobile.svg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div class="col-12 col-md-4 pt-3">
                        <picture>
                          <source
                            srcset="../assets/step5/IntroScrumRetroDesktop.svg"
                            media="(min-width: 768px)"
                          />
                          <img
                            class="w-100"
                            src="../assets/step5/IntroScrumRetroMobile.svg"
                            alt=""
                          />
                        </picture>
                      </div>
                    </div>
                  </section>
                </article>
              </div>
              <div class="col-auto text-center">
                <NextStepBtn
                  v-if="finishedChat >= 2"
                  btn-label="我來挑戰"
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
.step5-page {
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
  background-image: url("../assets/largePlant5.svg");
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
