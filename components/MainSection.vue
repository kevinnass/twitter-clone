<template>
  <div class="border-" :class="twitterBorderColor">

		<div class="sticky border-b top-0 px-4 bg-white/80 backdrop-blur-md py-3 dark:border-dim-900/80">
			<h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">
				{{ props.title }}
			</h2>
		</div>

		<div v-if="loading" class="flex items-center justify-center p-4">
			<UISpinner></UISpinner>
		</div>

		<div v-else class="">
			<slot></slot>
		</div>

  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	loading: {
		type: Boolean,
		required: true,
	}
})
</script>

<style></style>