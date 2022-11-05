<script setup lang="ts">
import Role from "@/constants/Role";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import ChatBox from "@/components/ChatBox.vue";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "step4" });
};
</script>

<template>
  <main class="step3-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="3"></StepBar>
      </div>
      <div class="col py-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="3"></StepList>
          </div>
          <div class="col overflow-auto">
            <div class="row flex-column flex-nowrap">
              <div class="col main-operation-block p-md-5">
                <article
                  class="row flex-column flex-md-row flex-nowrap flex-md-wrap"
                >
                  <section class="col-12">
                    <ChatBox :role="Role.GouMinEr">
                      <div class="fz-14px">
                        產品待辦清單好了之後，我們來召集 Scrum Master
                        和開發團隊共同召開 短衝規劃會議 (Sprint Planning)。
                      </div>
                      <div class="fz-14px">
                        短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單，並由開發團隊在接下來的產品開發週期裡執行。
                      </div>
                    </ChatBox>
                    <ChatBox :role="Role.ShiTouShen" :flip="true">
                      <div class="fz-14px">
                        嗨嗨，你是新來的前端吧！ 我是這次的 Scrum Master
                        石光神，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議、提升團隊成員對
                        Scrum 瞭解。 這兩位是 開新果 和
                        發大才，是我們開發團隊的成員唷～
                      </div>
                      <div class="fz-14px">
                        目前我們團隊一次 Sprint
                        週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數
                        (Sprint Point) 大約是 20 點左右。
                      </div>
                    </ChatBox>
                    <ChatBox :role="Role.KaiXinGou">
                      <div class="fz-14px">
                        欸新來的，你應該不知道點數是什麼意思吧？哈哈
                      </div>
                      <div class="fz-14px">我來跟你介紹一下吧～</div>
                      <div class="fz-14px">
                        Sprint
                        Point，目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
                      </div>
                    </ChatBox>

                    <ChatBox :role="Role.FaDaCia" :flip="true" :logo="true">
                      <div class="fz-14px">
                        沒錯，如 開新果
                        說的，我這邊已經把剛剛討論好的點數標上去囉～<br />
                        你來練習把任務排到短衝待辦清單吧！
                      </div>
                      <div class="fz-14px">
                        By the way, 我們平常管理任務是使用 Jira
                        這套軟體，你有時間記得先去註冊和熟悉唷。
                      </div>
                    </ChatBox>
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
.step3-page {
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
