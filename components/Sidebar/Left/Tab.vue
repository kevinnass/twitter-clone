<template>
    <nuxt-link to="#" 
        class="flex items-center p-3 rounded-full w-min hover:bg-gray-200" 
        :class="defaultTransition">
        <div class="">
            <slot name="icon"></slot>
        </div>

        <div class="hidden ml-4 font-semibold xl:block" :class="textClasses">
            <slot name="name"></slot>
        </div>
    </nuxt-link>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const textClasses = computed(() => props.active ? 'font-semibold': 'font-normal');
</script>