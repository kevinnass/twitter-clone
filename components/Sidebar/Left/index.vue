<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <IconTwitter />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-3 dark:text-white">
      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconHome></IconHome>
        </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconHashtag></IconHashtag>
        </template>
        <template v-slot:name> Explore </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconBell></IconBell>
        </template>
        <template v-slot:name> Notifications </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconMessage></IconMessage>
        </template>
        <template v-slot:name> Messages </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconBookMark></IconBookMark>
        </template>
        <template v-slot:name> Bookmark </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconFile />
        </template>
        <template v-slot:name> List </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconProfile />
        </template>
        <template v-slot:name> Profile </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconDots />
        </template>
        <template v-slot:name> More </template>
      </SidebarLeftTab>

      <div class="hidden xl:block">
        <UIButton @on-click="openModal" liquid size="lg">
          <span> Tweet </span>
        </UIButton>
      </div>

      <div class="block xl:hidden">
        <UIButton @on-click="openModal">
          <div class="w-6 h-6 font-bold">
            <IconPencil class="" />
          </div>
        </UIButton>
      </div>
    </div>

    <div
      class="flex flex-row items-center mt-6 bg-gray-100 justify-center px-2 py-2 mx-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-200 dark:hover:bg-dim-800"
      :class="defaultTransition"
      @click="emits('onLogout')"
    >
      <div class="flex flex-row w-2/3 justify-between">
        <img :src="props.user.profileImage" class="w-10 h-10 rounded-full" />
        <div class="flex-col hidden ml-2 xl:block">
          <h1 class="text-sm font-bold text-gray-800 dark:text-white">
            {{ user.name }}
          </h1>
          <p class="text-sm text-gray-400">
            {{ user.handle }}
          </p>
        </div>
      </div>

      <div class="hidden ml-auto xl:block">
        <div class="w-6 h-6">
          <IconDots />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["onTweet", "onLogout"]);
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const openModal = () => {
  localStorage.setItem("postTweetModal", "true");
  emits("onTweet");
};
</script>
