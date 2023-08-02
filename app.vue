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
            <SidebarLeft />
          </div>

          <!-- Main Content -->
          <main class="col-span-12 border-x md:col-span-8 xl:col-span-6">
            <router-view />
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
      <!-- <UIModal></UIModal> -->
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false);

const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();

onBeforeMount(() => {
  initAuth();
});
</script>
