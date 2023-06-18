<template>
    <div>
        <TweetItemHeader :tweet="props.tweet"/>

        <div class="ml-16">
            <p class="flex-shrink ml-2 font-medium text-gray-800 w-auto dark:text-white">
                {{  props.tweet.text }}
            </p>

            <div v-for="image in props.tweet.mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl" :class="twitterBorderColor">
                <img class="w-full rounded-2xl" :src="image.url">
            </div>

        </div>

        <div class="mt-2 flex">
            <TweetItemActions :tweet="props.tweet" />
        </div>

    </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()

const props = defineProps({
    tweet: {
        type: Object,
        required: true,
    }
})
</script>