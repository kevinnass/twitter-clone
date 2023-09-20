<template>
  <div class="flex flex-col">
    <!-- Search bar -->
    <div class="relative m-2">
      <div class="absolute flex h-full pl-4 text-gray-600 cursor-pointer items-center">
        <div class="w-6 h-6">
          <IconSearch @click="handleSearch" />
        </div>
      </div>
      <input
        v-model="search"
        class="flex text-black items-center w-full pl-12 text-sm font-normal dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 focus:dark:bg-dim-900 focus:outline-none focus:border focus-within:border-blue-200 h-9"
        type="text"
        placeholder="Search tweet"
      />
    </div>
    <!-- Search bar -->

    <!-- Card des #TT -->
    <SidebarRightPreviewCard title="what's happening">
      <SidebarRightPreviewCardItem v-for="whatHappening in whatHappeningItems">
        <div>
          <h2 class="font-bold text-gray-800 dark:text-white">
            {{ whatHappening.title }}
          </h2>
          <p>{{ whatHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Card de qui follow -->
    <SidebarRightPreviewCard title="who to follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between p-2">
          <div class="flex flex-row">
            <img class="w-10 h-10 rounded-full mt-1" :src="whoToFollow.image" alt="" />
            <div class="flex flex-col ml-3">
              <h2 class="font-bold text-gray-800 dark:text-white">
                {{ whoToFollow.name }}
              </h2>
              <p>{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex items-center h-full">
            <button
              class="px-4 py-2 text-xs font-bold text-white dark:text-black bg-black rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a
            href="#"
            class="hover:underline hover:text-blue-400"
            @click="handleDarkMode()"
            >Dark mode</a
          >
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline hover:text-blue-400">Privacy Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline hover:text-blue-400">Cookie Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline hover:text-blue-400">Accessability</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline hover:text-blue-400">Ads info</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline hover:text-blue-400">More</a>
        </li>
        <li class="inline-block mx-2">© 2022 Kévin, Inc.</li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
const search = ref("");
const emitter = useEmitter();
const whatHappeningItems = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "#codinfIsFun",
    count: "8.8k Tweets",
  },
]);
const whoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
]);

function handleDarkMode() {
  emitter.$emit("toggleDarkMode");
}

function handleSearch() {
  useRouter().push({
    path: "/search",
    query: {
      q: search.value,
    },
  });
}
</script>
