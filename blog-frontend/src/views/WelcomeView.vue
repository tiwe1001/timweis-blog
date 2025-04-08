<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="8">
                <div class="image-container">
                    <img class="logo" :src="imgLogo" />
                    <img class="circleA" :src="imgCircleA" />
                    <img class="circleB" :src="imgCircleB" />
                    <img class="circleC" :src="imgCircleC" />
                </div>
            </v-col>
            <v-col class="d-flex flex-column align-center justify-center" cols="12" md="4">
                <h1>{{ welcomeData.headline }}</h1>
                <h2 class="mb-4">{{ welcomeData.registerDesc }}</h2>
                <v-btn class="register-button mb-10">{{ welcomeData.registerBtn }}</v-btn>
        
                <h1 class="el-or">{{ welcomeData.inBetween }}</h1>

                <h2 class="mt-10 mb-4">{{ welcomeData.loginDesc }}</h2>
                <v-btn
                    class="login-button"
                    @click="loginDialog = !loginDialog">
                    {{ welcomeData.loginBtn }}
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
  
    <v-dialog v-model="loginDialog" opacity="0.2">
        <LoginComponent @close="loginDialog = false"></LoginComponent>
    </v-dialog>
</template> 

<script setup lang="ts">
import { ref, watch } from 'vue';
import imgLogo from '@/assets/logo-transparent.png';
import imgCircleA from '@/assets/circle-1.png';
import imgCircleB from '@/assets/circle-2.png';
import imgCircleC from '@/assets/circle-3.png';
import LoginComponent from '@/components/LoginComponent.vue';
import { useRoute, useRouter } from 'vue-router';

const welcomeData = {
    headline: 'T - BLOG',
    inBetween: 'OR',
    registerDesc: 'REGISTER NOW!',
    registerBtn: 'SIGN UP',
    loginDesc: 'Already have an Account?',
    loginBtn: 'LOGIN',
};

const loginDialog = ref(false);
const route = useRoute();
const router = useRouter();

watch(
  () => loginDialog.value,
  (newPath) => {
    if (loginDialog.value === true) router.push('/login');
    else router.push('/');
  },
  { immediate: true }
);

watch(
  () => route.path,
  (newPath) => {
    loginDialog.value = newPath === '/login';
  },
  { immediate: true } // Sofort beim Laden der Seite
);
</script>

<style lang="css" scoped>
.register-button,
.login-button {
    font-weight: bold;
    font-size: 20px;
    min-width: 200px;
    border-radius: 20px;
}

.register-button {
    color: #010101;
    background-color: rgb(202, 202, 202);
}

.login-button {
    color: white;
    background-color: #010101;
    border: 1px solid white;
}

.el-or {
    font-size: 50px;
    font-weight: bolder;
}

.image-container {
    position: relative;
	inset: 0;
	width: 100%;
	height: 100%;
}

.logo {
    display: block;
    width: 100%;
}

.circleA {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: animCircleA 15s linear infinite;
	animation-play-state: running;
}

.circleB {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: animCircleB 15s linear infinite;
	animation-play-state: running;
}

.circleC {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: animCircleC 15s linear infinite;
	animation-play-state: running;
}

@keyframes animCircleA {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes animCircleB {
    from {
        transform: rotate(120deg);
    }
    to {
        transform: rotate(480deg);
    }
}

@keyframes animCircleC {
    from {
        transform: rotate(255deg);
    }
    to {
        transform: rotate(615deg);
    }
}
</style>