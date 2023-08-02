<template>
    <div>
        <MainSection title="Tweet" :loading="loading">

        <Head>
            <Title>Tweets</Title>
        </Head>

        <TweetDetails :user="user" :tweet="tweet" />

        </MainSection>
    </div>
</template>

<script>
import useTweets from '@/composables/useTweets';
import useAuth from '~~/composables/useAuth';

export default {
    data() {
        return {
            id: null,
            tweet: null,
            loading: false,
            user: null,
        };
    },
    watch: {
        id() {

        }
    },
    async mounted() {
        this.id = this.$route.params.id;
        const { getTweetById } = useTweets();
        const { useAuthUser } = useAuth();
        this.user = useAuthUser();

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