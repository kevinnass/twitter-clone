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
const emits = defineEmits(['onSuccess']); 

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
    placeholder: {
        type: String,
        default: "What's happening",
    },
    replyTo: {
        type: Object,
        default: null,
    }
})

async function handleFormSubmit(data) {
    loading.value = true;
    try {
        const response = await postTweet({
            text: data.text,
            mediaFiles: data.mediaFiles,
            replyTo: props.replyTo?.id,
        });
        emits('onSuccess', response.tweet);
    } catch (e) {
        console.log(e);
    } finally {
        loading.value = false;
    }
}
</script>