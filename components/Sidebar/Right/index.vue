<template>
  <div class="flex flex-col">

  <!-- Card des #TT -->
	<SidebarRightPreviewCard title="what's happening">

		<SidebarRightPreviewCardItem v-for="whatHappening in whatHappeningItems">
				<div>
					<h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatHappening.title }}</h2>
					<p>{{ whatHappening.count }}</p>
			</div>
			</SidebarRightPreviewCardItem>

  </SidebarRightPreviewCard>


  <!-- Card de qui follow -->
  <SidebarRightPreviewCard title="who to follow">
		<SidebarRightPreviewCardItem  v-for="whoToFollow in whoToFollowItems">
			<div class="flex flex-row justify-between p-2">
				<div class="flex flex-row">
					<img class="w-10 h-10 rounded-full mt-1" :src="whoToFollow.image" alt=""/>
					<div class="flex flex-col ml-3 mt-">
						<h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whoToFollow.name }}</h2>
						<p>{{ whoToFollow.handle }}</p>
					</div>
				</div>
				<div class="flex items-center h-full">
					<button class="px-4 py-2 text-xs font-bold text-white dark:text-black bg-black rounded-full">Follow</button>
				</div>
			</div>
		</SidebarRightPreviewCardItem>
	</SidebarRightPreviewCard>

  </div>
</template>

<script setup>

const whatHappeningItems = ref([
  {
    title: 'SpaceX',
    count: '18.8k Tweets',
  },
  {
    title: '#codinfIsFun',
    count: '8.8k Tweets',
  },
  {
    title: '#artforall',
    count: '1.8k Tweets',
  },
])

const whoToFollowItems = ref([
	{
		name: 'Joe Biden',
		handle: '@JoeBiden',
		image: 'https://picsum.photos/200/200'
	},
	{
		name: 'Joe Biden',
		handle: '@JoeBiden',
		image: 'https://picsum.photos/200/200'
	},
	{
		name: 'Joe Biden',
		handle: '@JoeBiden',
		image: 'https://picsum.photos/200/200'
	},
])
</script>