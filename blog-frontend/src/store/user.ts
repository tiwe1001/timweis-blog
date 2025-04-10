import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		accessToken: '',
		userId: 0,
		username: '',
		userPseudonym: '',
		email: '',
		isAdmin: false,
	}),
	actions: {
		setUser(token: string, userId: number, username: string, userPseudonym: string, email: string, isAdmin: boolean) {
			this.accessToken = token;
			this.userId = userId;
			this.username = username;
			this.userPseudonym = userPseudonym;
			this.email = email;
			this.isAdmin = isAdmin;
		},
		clearUser() {
			this.accessToken = '';
			this.userId = 0;
			this.username = '';
			this.userPseudonym = '';
			this.email = '';
			this.isAdmin = false;
		},
	},
});