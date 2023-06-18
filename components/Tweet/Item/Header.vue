<template>
    <div class="flex p-4">
        <div>
            <img :src="author.profileImage" alt="" class="inline-block w-10 h-10 rounded-full"/>
        </div>

        <div class="ml-4">
            <span class="font-medium text-gray-800 dark:text-white"> {{ author.name }} </span>

            <span class=" text-sm font-medium text-gray-500">
                <nuxt-link to="#"> {{ author.handle }} </nuxt-link>
                . {{ props.tweet.postAtHuman }}
            </span>

            <p v-if="props.tweet.replyTo" class="text-sm"> 
                <nuxt-link class="text-blue-400" :to="replyToTweetUrl">
                    <span class="text-gray-500">replying to</span>
                    {{ props.tweet.replyTo.author.handle }} 
                </nuxt-link>
            </p>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    tweet: {
        type: Object,
        require: true,
    }
});

const author = props.tweet.author;

const replyToTweetUrl = computed(() => `/status/${props.tweet.replyTo.id}`)
</script>