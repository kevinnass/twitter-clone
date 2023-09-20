<template>
  <div>
    <div v-if="isEmptyArray">
      <p class="text-center text-gray-600 mt-24">No tweets 😭.</p>
    </div>

    <div
      v-else
      v-for="tweet in props.tweets"
      :key="tweet.id"
      @click.native="redirect(tweet)"
      class="pb-4 border-b hover:bg-gray-50 dark:hover:bg-dim-300 cursor-pointer"
      :class="[twitterBorderColor, defaultTransition]"
    >
      <TweetItem compact :tweet="tweet" @reply-tweet="handleReplyTweet" />
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();
const emits = defineEmits(["replyTweet"]);

const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});

const isEmptyArray = computed(() => props.tweets.length === 0);

function handleReplyTweet(tweets) {
  emits("replyTweet", tweets);
}

function redirect(tweet) {
  navigateTo(`status/${tweet.id}`);
}
</script>
