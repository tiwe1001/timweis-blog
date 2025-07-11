import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
	accessToken: localStorage.getItem('accessToken') || '',
	userId: Number(localStorage.getItem('userId')) || 0,
	username: localStorage.getItem('username') || '',
	userPseudonym: localStorage.getItem('userPseudonym') || '',
	email: localStorage.getItem('email') || '',
	isAdmin: localStorage.getItem('isAdmin') === 'true',
	}),
	actions: {
		setUser(token: string, userId: number, username: string, userPseudonym: string, email: string, isAdmin: boolean) {
			this.accessToken = token;
			this.userId = userId;
			this.username = username;
			this.userPseudonym = userPseudonym;
			this.email = email;
			this.isAdmin = isAdmin;

			localStorage.setItem('accessToken', token);
			localStorage.setItem('userId', userId.toString());
			localStorage.setItem('username', username);
			localStorage.setItem('userPseudonym', userPseudonym);
			localStorage.setItem('email', email);
			localStorage.setItem('isAdmin', isAdmin.toString());
		},
		clearUser() {
			this.accessToken = '';
			this.userId = 0;
			this.username = '';
			this.userPseudonym = '';
			this.email = '';
			this.isAdmin = false;

			localStorage.removeItem('accessToken');
			localStorage.removeItem('userId');
			localStorage.removeItem('username');
			localStorage.removeItem('userPseudonym');
			localStorage.removeItem('email');
			localStorage.removeItem('isAdmin');
		},
	},
});