<script setup lang="ts">
import NextStepBtn from "@/components/NextStepBtn.vue";
import TypeIn from "@/components/TypeIn.vue";
import router from "@/router";
import { ref } from "vue";

const showBtn = ref(false);
const gotoNextPage = () => {
  if (showBtn.value) {
    router.push({ name: "step1" });
  }
};

const typeInConfig = ref([
  {
    tagBegin: "<p>",
    inner: [
      {
        inner: "嗨嗨，歡迎加入 敏捷宇宙，",
      },
      {
        tagBegin: "<br />",
        inner:
          "在正式加入專案開發之前，需要先請你到不同星球，了解 Scrum 的流程與精神！",
      },
    ],
    tagEnd: "</p>",
  },
  {
    tagBegin: "<p>",
    inner: [
      {
        inner: "請接受挑戰任務，成功通過",
      },
      {
        tagBegin: '<span class="highlight-green">',
        inner: "Scrum 新手村的任務",
        tagEnd: "</span>",
      },
      {
        inner: "吧",
      },
    ],
    tagEnd: "</p>",
  },
]);
</script>

<template>
  <div class="start-page position-relative">
    <div class="bg-plants">
      <img class="plant plant1" src="../assets/largePlant1.svg" />
      <img class="plant plant2" src="../assets/largePlant2.svg" />
      <img class="plant plant3" src="../assets/largePlant3.svg" />
      <img class="plant plant4" src="../assets/largePlant4.svg" />
      <img class="plant plant5" src="../assets/largePlant5.svg" />
      <img class="plant plant6" src="../assets/largePlant6.svg" />
      <img class="plant plant7" src="../assets/largePlant7.svg" />
      <img class="plant plant8" src="../assets/largePlant8.svg" />
      <img class="ufo" src="../assets/UFO.svg" />
    </div>
    <main class="main-content-block row flex-column justify-content-end">
      <article class="col-auto description fw-400">
        <TypeIn :screen-configs="typeInConfig" @ended="showBtn = true"></TypeIn>
      </article>
      <nav class="col-auto text-center">
        <NextStepBtn
          :class="{ hideBtn: !showBtn }"
          btn-label="接受挑戰"
          @click="gotoNextPage"
        ></NextStepBtn>
      </nav>
    </main>
  </div>
</template>

<style scoped>
.start-page {
  width: 100%;
  height: 100%;
  padding-bottom: 8%;
}

.start-page > .main-content-block {
  margin: auto;
  max-width: 560px;
  height: 100%;
}

.start-page .description {
  font-size: 1rem;
}

.plant {
  width: 10%;
  position: absolute;
  animation: rotation 120s linear;
  animation-iteration-count: infinite;
}

.plant1 {
  width: 23vw;
  top: 43vh;
  left: 25vw;
  animation-duration: 100s;
  filter: drop-shadow(0px 0px 0.8em #8dcfcb68);
}

.plant2 {
  width: 9vw;
  top: 22vh;
  left: 20vw;
  animation-duration: 50s;
  filter: drop-shadow(0px 0px 0.8em #92ff5b9b);
}

.plant3 {
  width: 46vw;
  top: -10vh;
  left: -10vw;
  animation-duration: 60s;
  filter: drop-shadow(0px 0px 0.8em #b766ff9a);
}

.plant4 {
  width: 23vw;
  top: 31vh;
  left: -5vw;
  animation-duration: 40s;
  filter: drop-shadow(0px 0px 0.7em #ff63559c);
}

.plant5 {
  width: 35vw;
  top: -4vh;
  right: -13vw;
  animation-duration: 90s;
  filter: drop-shadow(0px 0px 1.2em #648dffa8);
}

.plant6 {
  width: 21vw;
  top: 23vh;
  right: 12vw;
  animation-duration: 70s;
  filter: drop-shadow(0px 0px 0.8em #ff414166);
}

.plant7 {
  width: 7vw;
  top: 15vh;
  right: 36vw;
  animation-duration: 40s;
  filter: drop-shadow(0px 0px 1em #faa84ab6);
}

.plant8 {
  width: 50vw;
  bottom: 30vh;
  right: -10vw;
  animation-duration: 110s;
  filter: drop-shadow(0px 0px 1.2em #5c3af4c8);
}

.ufo {
  width: 7.5vw;
  position: absolute;
  top: 60vh;
  left: 4vh;
  animation: fly 6s linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@media (min-width: 768px) {
  .plant1 {
    width: 11vw;
    top: 35vh;
    left: 36vw;
  }
  .plant2 {
    width: 3vw;
    left: 40vw;
    top: 18vh;
  }

  .plant3 {
    width: 13vw;
    left: 5vw;
    top: -8vh;
  }

  .plant4 {
    width: 7vw;
    left: 19vw;
    top: 27vh;
  }

  .plant5 {
    width: 11vw;
    right: 15vw;
    top: -4vh;
  }

  .plant6 {
    width: 5vw;
    right: 25vw;
    top: 22vh;
  }

  .plant7 {
    width: 4vw;
    right: 48vw;
    top: 11vh;
  }

  .plant8 {
    width: 20vw;
    right: 10vw;
    bottom: 30vh;
  }

  .ufo {
    width: 5vw;
    left: 17vw;
    top: 50vh;
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

@keyframes fly {
  from {
    transform: rotate(35deg) translateY(2vh);
  }
  to {
    transform: rotate(35deg) translateY(-3vh);
  }
}
</style>
