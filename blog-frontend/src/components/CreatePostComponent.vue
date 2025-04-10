<template>
    <v-container>
    <div class="mt-3 ml-15 mr-15">
        <div v-if="newPostIsActive">
            <v-text-field v-model="newPostTitle" label="Title" bg-color="#010101"></v-text-field>
            <v-textarea v-model="newPostContent" label="Content" bg-color="#010101" color="white" rows="1" auto-grow></v-textarea>
            <div class="d-flex positon-relative justify-end">
                <v-btn class="mr-3" @click="showCreateNewPost()">Cancel</v-btn>
                <v-btn @click="createPost(newPostTitle, newPostContent);">Post</v-btn>
            </div>
        </div>
        <div v-else>
            <v-btn @click="showCreateNewPost()">new post</v-btn>
        </div>
    </div>
</v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as PostService from '@/service/post';

const newPostIsActive = ref(false);
const newPostTitle = ref('');
const newPostContent = ref('');

function showCreateNewPost() {
    newPostIsActive.value = !newPostIsActive.value;

    newPostTitle.value = '';
    newPostContent.value = '';
}

async function createPost(title: string, content: string) {
    console.log('TBI: ', title, ' --- ' , content);

    // endpoint to save ne dpost in database
    /*
    try {
        await PostService.createPost(title, content);
        showCreateNewPost();
    } catch (error) {
        console.error('Failed to create a new post: ', error);
    }
    */
}
</script>

<style lang="css" scoped>
</style>