<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white w-full dark:bg-dim-900">
      <div v-if="isAuthLoading">
        <LoadingPage />
      </div>

      <div v-else-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- Left sidebar -->
          <div
            class="hidden border-red-500 borde borde-2 md:block xs-col-span-1 xl:col-span-2"
          >
            <div class="sticky top-0"></div>
            <SidebarLeft
              :user="user"
              @on-tweet="openModal"
              @on-logout="handleUserLogout"
            />
          </div>

          <!-- Main Content -->
          <main class="col-span-12 border-x md:col-span-8 xl:col-span-6">
            <router-view @reply-tweet="handleReplyTweet" />
          </main>

          <!-- Right sidebar -->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <AuthPage v-else />
      <UIModal :isOpen="useModal" @on-close="handleModalClose">
        <TweetForm
          :user="user"
          :replyTo="replyTweet"
          showReply
          @on-success="handleFormSuccess"
        />
      </UIModal>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false);
const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();
const useModal = ref(false);
const { closePostTweetModal, setReplyTo, usePostTweetModal } = useTweets();
const emitter = useEmitter();
var replyTweet = null;

function handleReplyTweet() {
  replyTweet = setReplyTo(replyTweet);
  console.log(replyTweet);
  localStorage.setItem("postTweetModal", "true");
  usePostTweetModal(useModal);
}

emitter.$on("toggleDarkMode", () => {
  darkMode.value = !darkMode.value;
});

function handleModalClose() {
  closePostTweetModal();
  usePostTweetModal(useModal);
}

function openModal() {
  useModal.value = true;
}

function handleUserLogout() {
  logout();
}

function handleFormSuccess() {
  localStorage.setItem("postTweetModal", "false");
  closePostTweetModal();
  usePostTweetModal(useModal);
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}

onBeforeMount(() => {
  initAuth();
});
</script>
