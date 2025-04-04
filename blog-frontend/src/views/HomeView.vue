<template>
  <div class="home">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as UserService from '@/service/user';
import * as PostService from '@/service/post';

async function loadUsers() {
  const users = await UserService.getUserList();
  console.log(users);
}
loadUsers();

async function loadPosts() {
  const posts = await PostService.getPostList();
  console.log(posts);
}
loadPosts();

export default defineComponent({
  name: 'HomeView',

});
</script>
