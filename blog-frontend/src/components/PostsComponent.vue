<template>
    <div v-for="post in props.posts?.slice(0,10)" :key="post.postId" class="post-container pa-3 ma-5 ml-15 mr-15">
        <div>
            <div class="d-flex">
                <img class="profile-picture mr-2" :src="imgProfilePicture"/>
                <div class="mt-1 d-flex">
                    <p>{{ post.userPseudonym }}</p>
                    <p style="color: gray;">{{ '&nbsp;@' + post.username }}</p>
                    <p style="color: gray;">{{ '&nbsp;· ' + post.createdAt.slice(0,10) + '&nbsp;' + post.createdAt.slice(11,16) + '&nbsp;Uhr'}}</p>
                </div>
            </div>
            <p class="post-title ml-5 mr-5">{{ post.title }}</p>
        </div>
        <div class="post-content ml-5 mr-5">
            {{ post.content }}
        </div>
        <div class="d-flex mt-4">
            <v-icon class="ml-5" size="16px">mdi-thumb-up-outline</v-icon>
            <p class="react-icons ml-1">27</p>
            <v-icon class="ml-4" size="16px">mdi-thumb-down-outline</v-icon>
            <p class="react-icons ml-1">3</p>
            <v-icon class="ml-4" size="16px">mdi-comment-outline</v-icon>
            <p class="react-icons ml-1">4</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Post } from '@/service/post';
import { watch, defineProps } from 'vue';
import imgProfilePicture from '@/assets/profile-picture.png';

const props = defineProps<{
    posts?: Post[];
}>();

</script>

<style lang="css" scoped>
.post-container {
    padding-bottom: 10px;
    border: 1px solid lightgray;
    border-radius: 15px;
}

.post-container:hover {
    background-color: rgba(255, 255, 255, 0.03);
    cursor: pointer;
}

.profile-picture {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
}

.post-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1px;
}

.post-date {
    color: lightgray;
    font-size: 10px;
    font-weight: lighter;
}

.post-content {
    margin-top: 15px;
    font-size: 15px;
}

.react-icons {
    font-size: 14px;
    margin-top: -3px;
    margin-bottom: 0px;
}
</style>