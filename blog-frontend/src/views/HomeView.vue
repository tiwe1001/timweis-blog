<template>
	<v-container>
		<v-row style="height: 60px;">
			<v-list class="bg-transparent position-absolute top-0 right-0">
				<v-tooltip location="bottom" text="Account">
					<template v-slot:activator="{ props }">
						<v-icon v-bind="props">mdi-account</v-icon>
					</template>
				</v-tooltip>
				<v-tooltip location="bottom" text="Settings">
					<template v-slot:activator="{ props }">
						<v-icon v-bind="props" class="ml-3">mdi-cog</v-icon>
					</template>
				</v-tooltip>
				<v-tooltip location="bottom" text="Logout">
					<template v-slot:activator="{ props }">
						<v-icon v-bind="props" class="mr-3 ml-3" @click="handleLogout">mdi-logout</v-icon>
					</template>
				</v-tooltip>
		</v-list>
		</v-row>
		<div v-for="post in posts" :key="post.postId" class="ma-3 ml-15 mr-15" style="background-color:blue;">
			<p>{{ post.title }}</p>
			{{ post.content }}
		</div>
	</v-container>
</template>

<script setup lang="ts">
import { Post } from '@/service/post';
import { useUserStore } from '@/store/user';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import * as PostService from '@/service/post';

const userStore = useUserStore();
const router = useRouter();
const posts = ref<Post[]>();

const fetchData = async () => {
	try {
		posts.value = await PostService.getPostList();
	} catch (error) {
		console.error('Failed loading posts. ', error);
	}
}

function handleLogout() {
	userStore.clearUser();
	localStorage.removeItem('accessToken');
	router.push('/login');
}

onMounted(() => {
	fetchData();
});
</script>