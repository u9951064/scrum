<script setup lang="ts">
import ConfluenceLogo from "@/components/images/ConfluenceLogo.vue";
import ChatBox from "@/components/ChatBox.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import Role from "@/constants/Role";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "finish" });
};
</script>

<template>
  <main class="step7-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="7"></StepBar>
      </div>
      <div class="col py-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="7"></StepList>
          </div>
          <div class="col overflow-auto">
            <div class="row flex-column flex-nowrap">
              <div class="col main-operation-block p-md-5">
                <article
                  class="row flex-column flex-md-row flex-nowrap flex-md-wrap"
                >
                  <section class="col-12">
                    <ChatBox :role="Role.ShiTouShen">
                      <div class="text-center"><ConfluenceLogo></ConfluenceLogo></div>
                      <div class="fz-14px">
                        哇賽新來的，你真的很幸運，今天剛好是 敏捷星 的
                        Retro，你也來見識一下，看看 Retro 都該做些什麼吧～～
                      </div>
                      <div class="fz-14px">
                        我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改進的地方？並記錄在
                        Confluence 中。 重點在於
                        (正面表述)，你也思考看看，哪一些是適合 Retro
                        的回饋吧～～
                      </div>
                    </ChatBox>
                    <div class="text-center">
                      思考看看，哪些回答是適合 Retro 的回饋並打勾
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
.step7-page {
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
