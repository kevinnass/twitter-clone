<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
      :class="defaultTransition">
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
        <template v-slot:name>
          Home
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconHashtag></IconHashtag>
        </template>
        <template v-slot:name>
          Explore
        </template>
      </SidebarLeftTab>

		  <SidebarLeftTab active>
        <template v-slot:icon>
          <IconBell></IconBell>
        </template>
        <template v-slot:name>
          Notifications
        </template>
      </SidebarLeftTab>
		
      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconMessage></IconMessage>
        </template>
        <template v-slot:name>
          Messages
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconBookMark></IconBookMark>
        </template>
        <template v-slot:name>
          Bookmark
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconFile />
        </template>
        <template v-slot:name>
          List
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconProfile />
        </template>
        <template v-slot:name>
          Profile
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <IconDots />
        </template>
        <template v-slot:name>
          More
        </template>
      </SidebarLeftTab>

      <div class="hidden xl:block">
        <UIButton liquid size="lg">
          <span>
            Tweet
          </span>
        </UIButton>
      </div>
      
      <div class="block xl:hidden">
        <UIButton>
          <div class="w-6 h-6 font-bold">
            <IconPencil class="" />
          </div>
        </UIButton>
      </div>

    </div>

    

  </div>
</template>

<script setup>
// import { HomeIcon } from "@heroicons/vue/24/solid";

const { defaultTransition } = useTailwindConfig();
</script>