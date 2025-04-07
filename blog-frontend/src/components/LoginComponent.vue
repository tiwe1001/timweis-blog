<template>
    <v-card class="d-flex flex-column align-center justify-center mx-auto" width="400px">
        <v-icon class="close-icon" @click="closeLoginDialog">mdi-close</v-icon>
        <h1 class="mt-4 mb-4">Login</h1>
        <v-divider></v-divider>
        <v-text-field variant="outlined" width="250px" label="Username"></v-text-field>
        <v-text-field variant="outlined" width="250px" label="Password"></v-text-field>
        <v-btn class="login-button mt-5 mb-5">LOGIN</v-btn>
    </v-card>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const emit = defineEmits(['close']);

function closeLoginDialog() {
    emit('close');
}
</script>

<style lang="css" scoped>
.v-card {
    background-color: #010101;
    border-radius: 20px !important;
}

::v-deep .v-text-field .v-field__outline {
  border-radius: 12px !important;
}

.login-button {
    font-weight: bold;
    font-size: 20px;
    min-width: 200px;
    border-radius: 20px;
    color: #010101;
    background-color: white;
}

.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>