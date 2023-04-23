<template>
	<div>
		<label for="" v-if="props.label" class="block pl-3 ml-px text-sm font-medium text-gray-700">{{  props.label }}</label>
		<div class="mt-1">
			<input 
				class="block px-4 w-56 border-black h-10 rounded-full shadow- border-2 focus:ring-blue-500 focus:border-blue-500 text-sm" 
				@input=" event => emits('update:modelValue', event.target.value)"
				:type="props.type" 
				:value="props.modelValue"
				:placeholder="props.placeholder" 
			/>
		</div>
	</div>
</template>

<script setup>
const emits = defineEmits(['update:modelValue']);

const props = defineProps({
	modelValue: { type: String, required: true },
	type: { type: String, required: true },
	label: { type: String, default: null },
	placeholder: { type: String, default: null },
});

</script>

<style scoped>

input:focus {
    outline: none;
}

</style>