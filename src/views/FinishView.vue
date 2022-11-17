<script setup lang="ts">
import NextStepBtn from "@/components/NextStepBtn.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";

const shareLink = () => {
  const url = window.location.href.replace(/#[\w\W]+$/, "");
  if (navigator.share) {
    navigator.share({
      title: "Scrum Planet",
      text: "一起來學習 Scrum",
      url,
    });
  } else {
    // TODO: not support share api
  }
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
          <div class="col overflow-auto position-relative">
            <img class="ufo" src="../assets/UFO.svg" />
            <img class="plant" src="../assets/plant8.svg" />
            <div class="content-block">
              <div class="p-md-5">
                恭喜通過 Scrum 新手村任務！<br />
                正式加入敏捷宇宙，點擊上方小星球，<br />
                自由探索 Scrum 精神吧！
              </div>
              <NextStepBtn
                btn-label="分享連結"
                @click="shareLink()"
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

.content-block {
  text-align: center;
  position: absolute;
  bottom: 6vh;
  left: 0;
  right: 0;
}

.ufo {
  position: absolute;
  top: 6vmax;
  bottom: 80vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 15vmin;
  z-index: 3;
  animation: up-down 5s linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.plant {
  position: absolute;
  top: 0;
  bottom: 15vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 55vmin;
  z-index: 2;
  animation: rotation 120s linear;
  animation-iteration-count: infinite;
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

  .ufo {
    width: 8vmin;
  }
  .plant {
    bottom: 10vh;
    width: 30vmin;
  }
}

@keyframes up-down {
  from {
    transform: translateY(0vh);
  }
  to {
    transform: translateY(6vh);
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-719.99deg);
  }
}
</style>
