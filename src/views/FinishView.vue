<script setup lang="ts">
import ConfluenceLogo from "@/components/images/ConfluenceLogo.vue";
import ChatBox from "@/components/ChatBox.vue";
import NextStepBtn from "@/components/NextStepBtn.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import Role from "@/constants/Role";
import router from "@/router";

const gotoNextPage = () => {
  router.replace({ name: "start" });
};
</script>

<template>
  <main class="finish-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="8"></StepBar>
      </div>
      <div class="col py-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="8"></StepList>
          </div>
          <div class="col overflow-auto">
            <div class="row flex-column flex-nowrap">
              <div class="col main-operation-block p-md-5 text-center">
                恭喜通過 Scrum 新手村任務！<br />
                正式加入敏捷宇宙，開始從 敏捷星 鍛鍊吧
              </div>
            </div>
            <div class="col-auto text-center">
              <NextStepBtn
                btn-label="重新挑戰"
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
.finish-page {
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

@media (max-width: 767.9px) {
  .hidden-nav {
    display: none;
  }
}

@media (min-width: 768px) {
  .content-region {
    height: 80%;
  }

  .hidden-nav {
    visibility: hidden;
  }
}
</style>
