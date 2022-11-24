<script setup lang="ts">
import ChatBox from "@/components/ChatBox.vue";
import CheckBox from "@/components/CheckBox.vue";
import ConfluenceLogo from "@/components/images/ConfluenceLogo.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import StarTitle from "@/components/StarTitle.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import TypeIn from "@/components/TypeIn.vue";
import Role from "@/constants/Role";
import router from "@/router";
import { computed, reactive, ref } from "vue";
import {
  useStore as usePopupStore,
  type PopupShow,
} from "../store/popupMessage";

interface ListItem {
  label: string;
  checked: boolean;
  correctly: boolean;
}
const popupStore = usePopupStore();

const goodJobList = reactive([
  {
    label: "這次我幫了很多人救火耶！",
    checked: false,
    correctly: false,
  },
  {
    label: "大家在開發上都會互相 cover，讓任務都有準時在時間內完成。",
    checked: false,
    correctly: true,
  },
] as ListItem[]);

const improveList = reactive([
  {
    label: "可以記錄這次的開發時間，讓預估團隊點數可以更精準。",
    checked: false,
    correctly: true,
  },
  {
    label: "開發時間預估不準確，請後端下次改進，避免 delay 到我。",
    checked: false,
    correctly: false,
  },
] as ListItem[]);

const checkAnswer = (): boolean => {
  let isCorrectly = true;
  for (const goodJob of goodJobList) {
    isCorrectly = isCorrectly && goodJob.checked == goodJob.correctly;
  }
  for (const improvement of improveList) {
    isCorrectly = isCorrectly && improvement.checked == improvement.correctly;
  }
  return isCorrectly;
};

const checkAnswerOrGoNextPage = () => {
  if (checkAnswer()) {
    popupStore.dispatch("show", {
      title: "回饋正確",
      btnLabel: "繼續",
      icon: "success",
      btnCB: () => router.push({ name: "finish" }),
    } as PopupShow);
  } else {
    popupStore.dispatch("show", {
      title: "回饋錯誤",
      message: "打勾處好像不是 Retro 會有的回饋耶",
      btnLabel: "再試一次",
      icon: "error",
    } as PopupShow);
  }
};

const setGoodJobListUnique = (index: number) => {
  goodJobList.forEach((el, i) => {
    if (i !== index) {
      el.checked = false;
    }
  });
};

const setImproveListUnique = (index: number) => {
  improveList.forEach((el, i) => {
    if (i !== index) {
      el.checked = false;
    }
  });
};

const finishedChat = ref(0);
const chat1Config = ref([
  {
    tagBegin: '<div class="fz-14px">',
    inner: [
      {
        inner: "哇賽新來的，你真的很幸運，今天剛好有 Retro，你",
      },
      {
        tagBegin: '<span class="highlight-blue">',
        inner: "也來",
        tagEnd: "</span>",
      },
      {
        inner: "見識一下，看看 Retro 都該做些什麼吧～～",
      },
    ],
    tagEnd: "</div>",
  },
  {
    tagBegin: '<div class="fz-14px pt-3 pb-1">',
    inner: [
      {
        inner: "我們會在會議裡請團隊成員提出哪些是",
      },
      {
        tagBegin: '<span class="highlight-blue">',
        inner: "做得好的地方",
        tagEnd: "</span>",
      },
      {
        inner: "、哪些可以",
      },
      {
        tagBegin: '<span class="highlight-blue">',
        inner: "繼續改進的地方",
        tagEnd: "</span>",
      },
      {
        inner: "？並記錄在 Confluence 中。 重點在於",
      },
      {
        tagBegin: '<span class="highlight-blue">',
        inner: "(正面表述)",
        tagEnd: "</span>",
      },
      {
        inner: "，你也思考看看，哪一些是",
      },
      {
        tagBegin: '<span class="highlight-blue">',
        inner: "適合 Retro 的回饋",
        tagEnd: "</span>",
      },
      {
        inner: "吧～～",
      },
    ],
    tagEnd: "</div>",
  },
]);

const allowSubmit = computed(
  () =>
    improveList.findIndex((el) => el.checked) !== -1 &&
    goodJobList.findIndex((el) => el.checked) !== -1
);
</script>

<template>
  <main class="step7-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="7"></StepBar>
      </div>
      <div class="col pt-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="7"></StepList>
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
                    <ChatBox :role="Role.ShiTouShen">
                      <div class="text-center">
                        <ConfluenceLogo></ConfluenceLogo>
                      </div>
                      <TypeIn
                        :screen-configs="chat1Config"
                        @ended="finishedChat = finishedChat + 1"
                      ></TypeIn>
                    </ChatBox>
                    <template v-if="finishedChat >= 1">
                      <StarTitle
                        >思考看看，哪些回答是適合 Retro 的回饋並打勾</StarTitle
                      >
                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="list-block">
                            <div
                              class="list-title text-center py-2 c-purple bg-white"
                            >
                              做得好的地方！
                            </div>
                            <div
                              class="list-item row"
                              v-for="(item, index) in goodJobList"
                              :key="index"
                            >
                              <div class="col-auto">
                                <CheckBox
                                  v-model="item.checked"
                                  :model-id="`goodJobList-${index}`"
                                  @input="setGoodJobListUnique(index)"
                                ></CheckBox>
                              </div>
                              <label
                                class="col"
                                v-text="item.label"
                                :for="`goodJobList-${index}`"
                              ></label>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="list-block">
                            <div
                              class="list-title text-center py-2 c-purple bg-white"
                            >
                              有哪些可以做得更好？
                            </div>
                            <div
                              class="list-item row"
                              v-for="(item, index) in improveList"
                              :key="index"
                            >
                              <div class="col-auto">
                                <CheckBox
                                  v-model="item.checked"
                                  :model-id="`improveList-${index}`"
                                  @input="setImproveListUnique(index)"
                                ></CheckBox>
                              </div>
                              <label
                                class="col"
                                v-text="item.label"
                                :for="`improveList-${index}`"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </section>
                </article>
              </div>
              <div class="col-auto text-center">
                <NextStepBtn
                  v-if="finishedChat >= 1"
                  btn-label="我想我了解了！"
                  @click="checkAnswerOrGoNextPage"
                  :disabled="!allowSubmit"
                ></NextStepBtn>
              </div>
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
.step7-page {
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

.list-block {
  margin-top: 20px;
}

.list-item {
  width: 100%;
  align-items: center;
  min-height: 3.5em;
  margin: 0;
}

.list-block {
  border: 2px solid #fff;
}

.list-item ~ .list-item {
  border-top: 2px solid #fff;
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

.bg-plant {
  background-image: url("../assets/largePlant7.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 50vmin;
  background-position: center bottom -40vmin;
  padding-bottom: 90px;
}
</style>
