<template>
  <v-app>
    <v-main>
      <v-btn>test</v-btn>
      <router-view/>
    </v-main>
    <footer-view></footer-view>
  </v-app>
</template>

<script setup lang="ts">
import FooterView from '@/views/FooterView.vue';
</script>

