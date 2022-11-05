<script setup lang="ts">
import ConfluenceLogo from "@/components/images/ConfluenceLogo.vue";
import Role from "@/constants/Role";
import ScrumEvent from "@/constants/ScrumEvent";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import ChatBox from "@/components/ChatBox.vue";
import ScrumEventComponent from "@/components/ScrumEvent.vue";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "step6" });
};
</script>

<template>
  <main class="step5-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="5"></StepBar>
      </div>
      <div class="col py-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="5"></StepList>
          </div>
          <div class="col overflow-auto">
            <div class="row flex-column flex-nowrap">
              <div class="col main-operation-block p-md-5">
                <article
                  class="row flex-column flex-md-row flex-nowrap flex-md-wrap"
                >
                  <section class="col-12">
                    <ChatBox :role="Role.KaiXinGou">
                      <div class="fz-14px">
                        等等，你都還不知道什麼是 Sprint 吧！
                      </div>
                      <div class="fz-14px">讓 發大財 先為你介紹一下～</div>
                      <div class="fz-14px">仔細聽好唷，等等會考考你！</div>
                    </ChatBox>
                    <ChatBox :role="Role.FaDaCia" :flip="true">
                      <div class="fz-14px">
                        Sprint 是一個短衝，開發團隊會在這期間執行開發。
                      </div>
                      <div class="fz-14px">
                        在這段期間內，開發團隊舉辦每日站立會議 (Daily
                        Scrum)，追蹤成員間的工作狀況。
                      </div>
                      <div class="fz-14px">
                        除了每日站立會議，在 Sprint 的結束也會包含短衝檢視會議
                        (Sprint Review)、短衝自省會議(Sprint Retrospective)。
                      </div>
                    </ChatBox>
                    <div class="row align-content-stretch">
                      <ScrumEventComponent :event="ScrumEvent.DailyScrum">
                        <div class="">每天都要進行的會議，以 15 分鐘為限制</div>
                        <div class="">
                          每天為團隊的短衝目標 (Sprint Goal) 做了哪些進度
                        </div>
                        <div class="">
                          今天我會如何準備來幫助團隊達成短衝目標
                        </div>
                        <div class="">過程中有遇到什麼問題、難題</div>
                        <div class="">透過團隊分享，追蹤大家的工作狀況</div>
                      </ScrumEventComponent>
                      <ScrumEventComponent :event="ScrumEvent.SprintReview"
                        ><div>
                          用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見
                        </div></ScrumEventComponent
                      >
                      <ScrumEventComponent
                        :event="ScrumEvent.SprintRetrospective"
                        ><div>
                          團隊在自省會議裡，會共同回顧該短衝歷程發生的事情
                        </div>
                        <div>好的地方</div>
                        <div>可以改進的地方</div>
                        <div>如何維持我們已有的成功經驗</div>
                        <div>優化工作流程、讓團隊有變得更好的機會</div>
                        <div>
                          推薦工具：Confluence <ConfluenceLogo></ConfluenceLogo>
                        </div>
                      </ScrumEventComponent>
                    </div>
                  </section>
                </article>
              </div>
            </div>
            <div class="col-auto text-center">
              <NextStepBtn
                btn-label="我來挑戰"
                @click="gotoNextPage"
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
.step5-page {
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
