<template>
  <div class="flex items-center ml-6 justify-around w-5/6">
    <TweetItemActionsIcon color="blue" @on-click="emits('onCommentClick')">
      <template v-slot:icon="{ classes }">
        <IconChat :class="`w-${size - 1} h-${size - 1}`" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ props.tweet.repliesCount }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green">
      <template v-slot:icon="{ classes }">
        <IconRetweet :class="`w-${size} h-${size}`" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="red">
      <template v-slot:icon="{ classes }">
        <IconLike :class="`w-${size} h-${size} ${classes}`" />
      </template>

      <template v-slot:default v-if="showStats">
        <span>
          {{ generateRandomNumber() }}
        </span>
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="blue">
      <template v-slot:icon="{ classes }">
        <IconShare :class="`w-${size} h-${size}`" />
      </template>
    </TweetItemActionsIcon>
  </div>
</template>

<script setup>
const props = defineProps({
  tweet: {
    type: String,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["onCommentClick"]);

const showStats = computed(() => props.compact);

const size = computed(() => (props.compact ? "5" : "6"));

function generateRandomNumber() {
  return Math.floor(Math.random() * 20);
}
</script>
