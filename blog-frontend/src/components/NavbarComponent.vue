<template>
    <div>
        <img class="logo" :src="imgLogo" />
        <div class="search">
            <input class="search-input" placeholder="Search" type="text" />
         </div>

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
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router';
import imgLogo from '@/assets/logo-transparent.png';

const userStore = useUserStore();
const router = useRouter();

function handleLogout() {
	userStore.clearUser();
	localStorage.removeItem('accessToken');
	router.push('/login');
}

</script>

<style lang="css" scoped>
.logo {
	position: absolute;
	top: 0;
	left: 0;
	width: 60px;
	height: 60px;
}

.search-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.search {
    display: flex;
    align-items: center;
}

.search-input {
    border: 1px solid rgb(177, 177, 177);
    padding: 3px;
    padding-left: 15px;
    width: 150px;
    border-radius: 20px;
}
</style>