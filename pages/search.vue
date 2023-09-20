<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Search</Title>
      </Head>

      <TweetListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>

<script setup>
const loading = ref(false);
const searchQuery = useRoute().query.q;
const { getHomeTweets } = useTweets();
const searchTweets = ref([]);

watch(
  () => useRoute().fullPath,
  () => getTweets()
);

async function getTweets() {
  loading.value = true;
  try {
    const tweets = await getHomeTweets({
      query: searchQuery,
    });
    console.log(searchQuery);
    searchTweets.value = tweets;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
}

onBeforeMount(async () => {
  loading.value = true;
  try {
    const tweets = await getHomeTweets({
      query: searchQuery,
    });
    console.log(searchQuery);
    searchTweets.value = tweets;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
});
</script>
