<template>
  <div>
    <MainSection title="Home" :loading="loading">

      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
      </div>

      <TweetListFeed :tweets="homeTweets" />

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

onBeforeMount(async () => {
  loading.value = true;
  try {
    const tweets = await getHomeTweets();
    homeTweets.value = tweets;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  };
})

</script>

<style></style>