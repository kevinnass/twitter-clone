<template>
    <div>
        <MainSection title="Tweet" :loading="loading">

        <Head>
            <Title>Tweets</Title>
        </Head>
        <h1>{{ id }}</h1>
        </MainSection>
    </div>
</template>

<script>
import useTweets from '@/composables/useTweets'

export default {
    data() {
        return {
            id: null,
            tweet: null,
            loading: false,
        };
    },
    async mounted() {
        this.id = this.$route.params.id;
        const { getTweetById } = useTweets();
        this.loading = true;
        try {
            const response = await getTweetById(this.id);
            this.tweet = response;
        } catch (e) {
            console.log(e);
        } finally {
            this.loading = false;
        }
    }
};
</script>