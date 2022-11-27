<script setup lang="ts">
import NextStepBtn from "@/components/NextStepBtn.vue";
import StepBar from "@/components/StepBar.vue";
import StepList from "@/components/StepList.vue";
import { useStore as usePopupStore } from "../store/popupMessage";

const popupStore = usePopupStore();

const fallbackCopyTextToClipboard = (text: string, callback?: Function) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    // NOTHING TODO
  } finally {
    document.body.removeChild(textArea);
  }
  if (callback) {
    callback();
  }
};

const copyTextToClipboard = (text: string, callback?: Function) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, callback);
    return;
  }
  navigator.clipboard.writeText(text).then(
    () => {
      if (callback) {
        callback();
      }
    },
    () => {
      fallbackCopyTextToClipboard(text, callback);
    }
  );
};

const shareLink = () => {
  const url = window.location.href.replace(/#[\w\W]+$/, "");
  if (navigator.share) {
    navigator.share({
      text: `快來敏捷宇宙探險了解 Scrum 精神！ Scrum ${url}`,
      url,
    });
  } else {
    copyTextToClipboard(
      `快來敏捷宇宙探險了解 Scrum 精神！ Scrum ${url}`,
      () => {
        popupStore.dispatch("show", {
          title: "複製成功",
          message: "已複製連結，趕快貼給你的朋友吧！",
          btnLabel: "確認",
          icon: "success",
        });
      }
    );
  }
};
</script>

<template>
  <main class="finish-page">
    <div class="h-100 row flex-column flex-nowrap">
      <div class="col-auto">
        <StepBar :current-step="8"></StepBar>
      </div>
      <div class="col pt-3 overflow-hidden">
        <div
          class="h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"
        >
          <div class="col-auto">
            <StepList :current-step="8"></StepList>
          </div>
          <div class="col overflow-auto position-relative">
            <img class="plant" src="../assets/largePlant8.svg" />
            <img class="ufo" src="../assets/UFO.svg" />
            <div class="content-block">
              <div class="pt-md-5">
                恭喜通過 Scrum 新手村任務！<br />
                正式加入敏捷宇宙，分享連結給你所有的朋朋吧～
              </div>
              <NextStepBtn
                btn-label="分享連結"
                @click="shareLink()"
              ></NextStepBtn>
            </div>
          </div>
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
  top: 4vmax;
  bottom: 80vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 15vmin;
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
  width: 60vmin;
  animation: rotation 120s linear;
  animation-iteration-count: infinite;
  filter: drop-shadow(0px 0px 1.5em #5c3af4c8);
}

@media (min-width: 768px) {
  .content-region {
    height: 80%;
  }

  .ufo {
    width: 10vmin;
  }
  .plant {
    bottom: 7vh;
    width: 40vmin;
  }
}

@media (min-width: 1440px) {
  .content-region {
    height: 80%;
  }

  .ufo {
    top: 5vmin;
    width: 7vmin;
  }
  .plant {
    bottom: 10vh;
    width: 33vmin;
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
