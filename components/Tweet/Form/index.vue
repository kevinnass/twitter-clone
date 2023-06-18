<template>
    <div>
        
        <div v-if="loading" class="flex items-center justify-center mt-6">
            <UISpinner />
        </div>

        <div v-else>
            <TweetFormInput :user="props.user" :placeholder="props.placeholder " @onSubmit="handleFormSubmit"/>
        </div>

    </div>
</template>

<script setup>

const loading = ref(false);
const { postTweet } = useTweets();

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
    placeholder: {
        type: String,
        default: "What's happening",
    }
})

async function handleFormSubmit(data) {
    loading.value = true;
    try {
        postTweet({
            text: data.text,
            mediaFiles: data.mediaFiles,
        });
        // alert("response: " + data.text);
    } catch (e) {
        console.log(e);
    } finally {
        alert("finish ohhh");
        loading.value = false;
    }
}
</script>