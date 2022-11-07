<script setup lang="ts">
import StarTitle from "@/components/StarTitle.vue";
import Role from "@/constants/Role";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import ChatBox from "@/components/ChatBox.vue";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "step7" });
};
</script>

<template>
  <main class="step6-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="6"></StepBar>
      </div>
      <div class="col py-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="6"></StepList>
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
                        換你來試試看，在這經典的 Scrum
                        流程圖中，這些流程分別代表哪一個會議呢？
                      </div>
                    </ChatBox>
                    <StarTitle>拖移區塊，把對應流程貼到正確位置</StarTitle>
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
.step6-page {
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
