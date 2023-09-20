<template>
  <div>
    <TweetItem class="border-b" v-if="props.tweet" :tweet="props.tweet" />

    <TweetForm
      class="border-b"
      :reply-to="props.tweet"
      placeholder="Tweet your reply !"
      @on-success="handleFormSuccess"
      :user="props.user"
    />

    <TweetListFeed :tweets="replies" />
  </div>
</template>

<script setup>
const props = defineProps({
  tweet: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
});

function handleFormSuccess(tweet) {
  console.log(tweet);
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}

const replies = computed(() => props.tweet?.replies || []);
</script>
