<template>
    <div>
        <TweetItemHeader :tweet="props.tweet"/>

        <div :class="tweetBodyWrapper">
            <p :class="textSize" class="flex-shrink ml-2 font-medium text-gray-800 w-auto dark:text-white">
                {{  props.tweet.text }}
            </p>

            <div v-for="image in props.tweet.mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl" :class="twitterBorderColor">
                <img class="w-full rounded-2xl" :src="image.url">
            </div>

        </div>

        <div :class="border" class="mt-2 flex">
            <TweetItemActions :tweet="props.tweet" :compact="props.compact" />
        </div>

    </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();

const props = defineProps({
    tweet: {
        type: Object,
        required: true,
    },
    compact: {
        type: Boolean,
        default: false,
    }
});

const tweetBodyWrapper = computed(() => props.compact ? 'ml-16' : 'ml-2 mt-4');

const border = computed(() => props.compact ? '' : 'mt-2 mb-2' );

const textSize = computed(() => props.compact ? 'text-base' : 'text-xl');

</script>