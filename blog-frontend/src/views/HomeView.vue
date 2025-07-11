<template>
	<v-container>
		<v-row class="justify-center align-center" style="height: 60px;">
			<NavbarComponent></NavbarComponent>
		</v-row>

		<CreatePostComponent @post-created="fetchData"></CreatePostComponent>
		<PostsComponent :posts="posts"></PostsComponent>
	</v-container>
</template>

<script setup lang="ts">
import { Post } from '@/service/post';
import { useUserStore } from '@/store/user';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import * as PostService from '@/service/post';
import imgLogo from '@/assets/logo-transparent.png';
import NavbarComponent from '@/components/NavbarComponent.vue';
import CreatePostComponent from '@/components/CreatePostComponent.vue';
import PostsComponent from '@/components/PostsComponent.vue';

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

onMounted(() => {
	fetchData();
});
</script>

<style lang="css" scoped>

</style>