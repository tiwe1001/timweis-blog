<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <footer-view></footer-view>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import FooterView from '@/views/FooterView.vue';
import { useUserStore } from '@/store/user';

onMounted(() => {
  const userStore = useUserStore();
	const token = localStorage.getItem('accessToken');

  if (token && !userStore.accessToken) {
    userStore.accessToken = token;
  }
});
</script>

