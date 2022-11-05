<script setup lang="ts">
import IconDailyScrum from "@/components/icons/IconDailyScrum.vue";
import IconSprintReview from "@/components/icons/IconSprintReview.vue";
import IconSprintRetrospective from "@/components/icons/IconSprintRetrospective.vue";
import ScrumEvent from "@/constants/ScrumEvent";
import { computed } from "vue";

const props = defineProps({
  event: {
    type: String,
    required: true,
  },
});

const titleLabel = computed(() => {
  switch (props.event) {
    case ScrumEvent.DailyScrum:
      return "每日站立會議 (Daily Scrum)";
    case ScrumEvent.SprintReview:
      return "短衝檢視會議 (Sprint Review)";
    case ScrumEvent.SprintRetrospective:
      return "短衝自省會議 (Sprint Retrospective)";
    default:
      return "";
  }
});

const roleClass = computed(() => {
  switch (props.event) {
    case ScrumEvent.DailyScrum:
    case ScrumEvent.SprintReview:
    case ScrumEvent.SprintRetrospective:
      return props.event;
    default:
      return "d-none";
  }
});
</script>

<template>
  <div :class="roleClass" class="scrum-event-box col-12 col-md">
    <div class="container">
      <div class="avatar">
        <IconDailyScrum v-if="event === ScrumEvent.DailyScrum"></IconDailyScrum>
        <IconSprintReview
          v-else-if="event === ScrumEvent.SprintReview"
        ></IconSprintReview>
        <IconSprintRetrospective
          v-else-if="event === ScrumEvent.SprintRetrospective"
        ></IconSprintRetrospective>
      </div>
      <div
        class="title text-center"
        v-if="titleLabel.length > 0"
        v-text="titleLabel"
      ></div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.scrum-event-box {
  padding-top: 45px;
}

.scrum-event-box .avatar {
  text-align: center;
}

.scrum-event-box .avatar > * {
  transform: translateY(-50%);
  margin-bottom: -25px;
}

.scrum-event-box .container {
  width: 100%;
  height: 100%;
  border-width: 3px;
  border-style: solid;
  border-radius: 10px;
  padding: 0 1.125rem 1.125rem;
  font-size: 14px;
  font-weight: 400;
}

.scrum-event-box .title {
  padding-bottom: 1.125rem;
  font-size: 16px;
  font-weight: 700;
}

.scrum-event-box.DailyScrum > .container {
  border-color: #00ffbd;
}

.scrum-event-box.DailyScrum > .container > .title {
  color: #00ffbd;
}

.scrum-event-box.SprintReview > .container {
  border-color: #13d1ff;
}

.scrum-event-box.SprintReview > .container > .title {
  color: #13d1ff;
}

.scrum-event-box.SprintRetrospective > .container {
  border-color: #ffad21;
}

.scrum-event-box.SprintRetrospective > .container > .title {
  color: #ffad21;
}
</style>
