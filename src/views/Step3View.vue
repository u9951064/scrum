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
  router.push({ name: "step4" });
};

const finishedChat = ref(0);
const chat1Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        inner:
          "產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召開",
      },
      {
        tagBegin: ' <span class="highlight-green">',
        inner: "短衝規劃會議 (Sprint Planning)",
        tagEnd: "</span>",
      },
      {
        inner: "。",
      },
    ],
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px pt-3">',
    inner: [
      {
        inner:
          "短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出",
      },
      {
        tagBegin: '<span class="highlight-green">',
        inner: "短衝待辦清單",
        tagEnd: "</span>",
      },
      {
        inner: "，並由開發團隊在接下來的產品開發週期裡執行。",
      },
    ],
    tagEnd: "</div>",
  },
]);

const chat2Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        inner: "嗨嗨，你是新來的前端吧！ 我是這次的",
      },
      {
        tagBegin: '<span class="highlight-blue">',
        inner: "Scrum Master",
        tagEnd: "</span> ",
      },
      {
        inner:
          "石光神，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議、提升團隊成員對 Scrum 瞭解。 這兩位是 開新果 和 發大才，是我們開發團隊的成員唷～",
      },
    ],
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px pt-3">',
    inner: [
      {
        inner: "目前我們團隊一次",
      },
      {
        tagBegin: '<span class="highlight-blue">',
        inner: "Sprint 週期是兩週",
        tagEnd: "</span> ",
      },
      {
        inner: "的時間，依照我的觀察，目前團隊可以負擔的點數 ",
      },
      {
        tagBegin: '<span class="highlight-blue">',
        inner: "(Sprint Point) 大約是 20 點",
        tagEnd: "</span> ",
      },
      {
        inner: "左右。",
      },
    ],
    tagEnd: "</div>",
  },
]);

const chat3Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: "欸新來的，你應該不知道點數是什麼意思吧？哈哈",
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px">',
    inner: "我來跟你介紹一下吧～",
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        tagBegin: '<span class="highlight-yellow">',
        inner: "Sprint Point",
        tagEnd: "</span> ",
      },
      {
        inner: "，目的是為了衡量速度，是用大概花費的時間",
      },
      {
        tagBegin: '<span class="highlight-yellow">',
        inner: "預估出的相對點數",
        tagEnd: "</span> ",
      },
      {
        inner: "。",
      },
    ],
    tagEnd: "</div>",
  },
]);

const chat4Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        inner: "沒錯，如 開新果 說的，我這邊已經把剛剛討論好的點數",
      },
      {
        tagBegin: '<span class="highlight-red">',
        inner: "標上去",
        tagEnd: "</span> ",
      },
      {
        inner: "囉～",
      },
      {
        tagBegin: "<br />",
        inner: "你來練習把任務排到短衝待辦清單吧！",
      },
    ],
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px pt-3">',
    inner: [
      {
        inner: "By the way, 我們平常管理任務是使用",
      },
      {
        tagBegin: ' <span class="highlight-red">',
        inner: "Jira",
        tagEnd: "</span> ",
      },
      {
        tagBegin: " ",
        inner: "這套軟體，你有時間記得先去註冊和熟悉唷。",
      },
    ],
    tagEnd: "</div>",
  },
]);
</script>

<template>
  <main class="step3-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="3"></StepBar>
      </div>
      <div class="col pt-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="3"></StepList>
          </div>
          <div
            class="col overflow-auto"
            :class="{ 'bg-plant': finishedChat >= 4 }"
          >
            <div class="row flex-column flex-nowrap g-0">
              <div class="col main-operation-block p-md-5">
                <article
                  class="row flex-column flex-md-row flex-nowrap flex-md-wrap"
                >
                  <section class="col-12">
                    <ChatBox :role="Role.GouMinEr">
                      <TypeIn
                        :screen-configs="chat1Config"
                        @ended="finishedChat = finishedChat + 1"
                      ></TypeIn>
                    </ChatBox>
                    <ChatBox
                      :role="Role.ShiTouShen"
                      :flip="true"
                      v-if="finishedChat >= 1"
                    >
                      <TypeIn
                        :screen-configs="chat2Config"
                        @ended="finishedChat = finishedChat + 1"
                      ></TypeIn>
                    </ChatBox>
                    <ChatBox :role="Role.KaiXinGou" v-if="finishedChat >= 2">
                      <TypeIn
                        :screen-configs="chat3Config"
                        @ended="finishedChat = finishedChat + 1"
                      ></TypeIn>
                    </ChatBox>
                    <ChatBox
                      :role="Role.FaDaCia"
                      :flip="true"
                      :logo="true"
                      v-if="finishedChat >= 3"
                    >
                      <TypeIn
                        :screen-configs="chat4Config"
                        @ended="finishedChat = finishedChat + 1"
                      ></TypeIn>
                    </ChatBox>
                  </section>
                </article>
              </div>
              <div class="col-auto text-center">
                <NextStepBtn
                  v-if="finishedChat >= 4"
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
.step3-page {
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
  background-image: url("../assets/largePlant3.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 50vmin;
  background-position: center bottom -45vmin;
  padding-bottom: 70px;
}

@media (min-width: 768px) {
  .bg-plant {
    padding-bottom: 90px;
  }
}
</style>
