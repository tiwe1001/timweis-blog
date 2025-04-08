<template>
    <h1>EINGELOGGT</h1>
    <v-btn color="error" @click="handleLogout">Logout</v-btn>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

function handleLogout() {
	userStore.clearUser();
	localStorage.removeItem('accessToken');
	router.push('/login');
}
</script>