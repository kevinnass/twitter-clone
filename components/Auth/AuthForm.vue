<template>
    <div>
       <div class="pt-5 ml-7 w space-y-6">

        <UIInput v-model="data.username" label="Username" type="text" placeholder="@username"></UIInput>

        <UIInput v-model="data.password" label="Password" type="password" placeholder="*******"></UIInput>

        <div>
            <button class="bg-blue-500 rounded-full font-semibold w-24 h-8" @click="handleLogin()">Login</button>
        </div>
       </div>
    </div>
</template>

<script setup>

const data = reactive({
    username: '',
    password: '',
    loading: false,
})

async function handleLogin() {
    const { login } = useAuth();

    data.loading = true;
    try {
        login({
            username: data.username, 
            password: data.password
        });
    } catch (e) {
        console.log(e.message);
    } finally {
        data.loading = false;
    }
}
</script>