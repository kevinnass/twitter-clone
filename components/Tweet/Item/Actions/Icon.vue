<template>
    <div class="flex items-center text-gray-400 cursor-pointer group">

        <div :class="`p-2 group-hover:bg-${props.color}-200 group-hover:text-${props.color}-400 rounded-full dark:group-hover:bg-opacity-20 ${defaultTransition}`">
            <slot name="icon" class="w-4 h-4" />
        </div>

        <span :class="`ml-1 text-sm group-hover:text-${props.color}-400`">
            <slot name="default" />
        </span>

    </div>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
    color: {
        type: String,
        required: true,
    },
})

</script>