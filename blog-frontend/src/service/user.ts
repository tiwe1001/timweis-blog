import axios from 'axios';

const API_PATH = 'http://localhost:3000/api/users';

export async function getUserList(): Promise<User[]> {
    try {
    const response =  await axios.get(API_PATH);
    return response.data;
    } catch (error) {
        console.error('Error loading user data: ', error);
        return [];
    }
}

export async function loginUser(username: string, password: string) {
    const response = await axios.post(API_PATH + '/auth/login', {
        username, password
    });

    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token)

    return response.data;
}

export async function updateUser(userId: number, username: string, email: string, userPseudonym: string) {
    const response = await axios.post(API_PATH + '/updateUser', {
        userId, username, email, userPseudonym
    });
    return response.data;
}

export interface User {
    userId: number;
    username: string;
    email: string;
    admin: boolean;
    createdAt: string;
}