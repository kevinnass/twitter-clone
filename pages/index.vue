<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" @on-success="handleFormSuccess" />
      </div>

      <TweetListFeed @reply-tweet="handleReplyTweet" :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();

const loading = ref(false);

const { useAuthUser } = useAuth();
const user = useAuthUser();

const { getHomeTweets } = useTweets();

const homeTweets = ref([]);

const emits = defineEmits(["replyTweet"]);

function handleReplyTweet(tweets) {
  emits("replyTweet", tweets);
}

onBeforeMount(async () => {
  loading.value = true;
  try {
    const tweets = await getHomeTweets();
    homeTweets.value = tweets;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
});

async function handleFormSuccess(tweet) {
  console.log(tweet);
  loading.value = true;
  try {
    const tweets = await getHomeTweets();
    homeTweets.value = tweets;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}
</script>

<style></style>
