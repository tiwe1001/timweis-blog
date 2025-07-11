<template>  
<v-card class="d-flex flex-column align-center justify-center mx-auto" width="600px">
    <v-icon class="close-icon" @click="closeLoginDialog">
        mdi-close
    </v-icon>

    <h1 class="mt-4 mb-4">{{ userStore.username }}</h1>

    <v-divider></v-divider>

    <v-form class="d-flex flex-column align-center justify-center" @submit.prevent="updateUserAcountData(editUsername, editEmail, editUserPseudonym)">
        <v-text-field
            v-model="editUsername"
            variant="outlined"
            width="250px"
            label="Username">
        </v-text-field>

        <v-text-field
            v-model="editEmail"
            variant="outlined"
            width="250px"
            label="E-Mail">
        </v-text-field>

        <v-text-field
            v-model="editUserPseudonym"
            variant="outlined"
            width="250px"
            label="Pseudonym">
        </v-text-field>

        <v-btn class="login-button mt-5 mb-5" type="submit">
            Save Changes
        </v-btn>
    </v-form>
</v-card>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
import * as UserService from '@/service/user';
import { defineEmits, ref } from 'vue';

const userStore = useUserStore();
const editUsername = ref(userStore.username);
const editEmail = ref(userStore.email);
const editUserPseudonym = ref(userStore.userPseudonym);
const emit = defineEmits(['close']);

function closeLoginDialog() {
    emit('close');
}

async function updateUserAcountData(username: string, email: string, userPseudonym: string) {
    try {
        await UserService.updateUser(userStore.userId, username, email, userPseudonym);

        userStore.setUser(
            userStore.accessToken,
            userStore.userId,
            editUsername.value,
            editUserPseudonym.value,
            editEmail.value,
            userStore.isAdmin
        );

        console.log('User data updated successfull. ');
        closeLoginDialog();
    } catch (error) {
        console.error('User data not updated!', error);
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