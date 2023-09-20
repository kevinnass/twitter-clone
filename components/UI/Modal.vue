<template>
  <div>
    <div
      v-if="props.isOpen"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div class="flex items-start justify-between">
            <button
              class="ml-auto mr-2 border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            >
              <span class="text-black text-3xl h-6 w-6 block" @click="closeModal()">
                ×
              </span>
            </button>
          </div>
          <!--header-->

          <!--body-->
          <div class="relative p-4 flex-auto">
            <slot></slot>
          </div>
          <!--body-->
        </div>
      </div>
    </div>
    <div v-if="props.isOpen" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script setup>
const showModal = ref(false);

const emits = defineEmits(["onClose"]);

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true,
    required: true,
  },
});

function closeModal() {
  localStorage.setItem("postTweetModal", "false");
  emits("onClose");
}
</script>
