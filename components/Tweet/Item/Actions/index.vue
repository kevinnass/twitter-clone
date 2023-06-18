<template>
    <div class="flex items-center ml-6 justify-around w-5/6">

        <TweetItemActionsIcon color="blue">
            <template v-slot:icon="{ classes }">
                <IconChat class="w-4 h-4" :class="classes" />
            </template>

            <template v-slot:default>
                {{ props.tweet.repliesCount }}
            </template>
        </TweetItemActionsIcon>


        <TweetItemActionsIcon color="green">
            <template v-slot:icon="{ classes }">
                <IconRetweet class="w-5 h-5" :class="classes" />
            </template>

            <template v-slot:default>
                {{ generateRandomNumber() }}
            </template>
        </TweetItemActionsIcon>


        <TweetItemActionsIcon color="red">
            <template v-slot:icon="{ classes }">
                <IconLike class="w-5 h-5" :class="classes" />
            </template>

            <template v-slot:default>
                {{ generateRandomNumber() }}
            </template>
        </TweetItemActionsIcon>


        <TweetItemActionsIcon color="blue">
            <template v-slot:icon="{ classes }">
                <IconShare class="w-5 h-5" :class="classes" />
            </template>
        </TweetItemActionsIcon>

    </div>
</template>

<script setup>
   
const props = defineProps({
    tweet: {
        type: String,
        required: true,
    }
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 20);
}
</script>