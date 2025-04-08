<template>
    <v-card class="d-flex flex-column align-center justify-center mx-auto" width="400px">
        <v-icon class="close-icon" @click="closeLoginDialog">
            mdi-close
        </v-icon>

        <h1 class="mt-4 mb-4">Login</h1>

        <v-divider></v-divider>

        <v-text-field
            variant="outlined"
            width="250px"
            label="Username">
        </v-text-field>

        <v-text-field
            variant="outlined"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            width="250px"
            label="Password"
            @click:append-inner="toggleVisibility">
        </v-text-field>

        <v-btn class="login-button mt-5 mb-5" @click="handleLogin()">
            LOGIN
        </v-btn>
    </v-card>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import * as UserService from '@/service/user';
import { useUserStore } from '@/store/user';
import router from '@/router';

const userStore = useUserStore();

const emit = defineEmits(['close']);
const visible = ref(false);

function toggleVisibility() {
  visible.value = !visible.value;
}

function closeLoginDialog() {
    emit('close');
}

const handleLogin = async () => {
    try {
        const data = await UserService.loginUser('admin', 'test123');
        console.log('login successfull: ', data);

        localStorage.setItem('accessToken', data.accessToken);
        userStore.setUser(data.accessToken, data.user.userId, data.user.username, data.user.email, data.user.isAdmin);

        router.push({ name: 'home' });
    } catch (error) {
        console.error(error);
    }
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