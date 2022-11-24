<script setup lang="ts">
import GouMinErAvatar from "@/components/images/GouMinErAvatar.vue";
import FaDaiCiaAvatar from "@/components/images/FaDaCiaAvatar.vue";
import KaiXinGouAvatar from "@/components/images/KaiXinGouAvatar.vue";
import ShiTouShenAvatar from "@/components/images/ShiTouShenAvatar.vue";
import JiraLogo from "@/components/images/JiraLogo.vue";
import Role from "@/constants/Role";
import { computed } from "vue";

const props = defineProps({
  flip: {
    type: Boolean,
    required: false,
    default: false,
  },
  role: {
    type: String,
    required: true,
  },
  logo: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const roleClass = computed(() => {
  const flip = props.flip ? "flip" : "";
  switch (props.role) {
    case Role.GouMinEr:
    case Role.FaDaCia:
    case Role.KaiXinGou:
    case Role.ShiTouShen:
      return `${props.role} ${flip}`.trim();
    default:
      return "d-none";
  }
});
</script>

<template>
  <div :class="roleClass" class="chat-box row flex-nowrap">
    <div class="avatar col-auto">
      <GouMinErAvatar v-if="role === Role.GouMinEr"></GouMinErAvatar>
      <KaiXinGouAvatar v-else-if="role === Role.KaiXinGou"></KaiXinGouAvatar>
      <ShiTouShenAvatar v-else-if="role === Role.ShiTouShen"></ShiTouShenAvatar>
      <FaDaiCiaAvatar v-else-if="role === Role.FaDaCia"></FaDaiCiaAvatar>
    </div>
    <div class="message col-auto">
      <div class="logo text-center p-2" v-if="logo">
        <JiraLogo></JiraLogo>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.chat-box {
  width: 100%;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  align-items: flex-start;
}
.chat-box ~ .chat-box {
  padding-top: 1.25rem;
}

.chat-box.flip {
  flex-direction: row-reverse;
}

.chat-box > .message {
  background: rgba(255, 255, 255, 0.1);
  border-width: 2px;
  border-style: solid;
  border-radius: 0px 20px 20px 20px;
  overflow-x: hidden;
  padding: 0.5rem;
  max-width: 73%;
}

.chat-box.flip > .message {
  border-radius: 20px 0px 20px 20px;
}

.chat-box.GouMinEr > .message {
  border-color: #00ffbd;
}

.chat-box.FaDaCia > .message {
  border-color: #ff4069;
}

.chat-box.KaiXinGou > .message {
  border-color: #ffad21;
}

.chat-box.ShiTouShen > .message {
  border-color: #13d1ff;
}

@media (min-width: 768px) {
  .chat-box > .message {
    max-width: 80%;
  }
}

@media (min-width: 1024px) {
  .chat-box > .message {
    max-width: 88%;
  }
}
</style>
