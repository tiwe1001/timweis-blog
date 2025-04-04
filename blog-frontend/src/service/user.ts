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

export interface User {
    userId: number;
    username: string;
    email: string;
    admin: boolean;
    createdAt: string;
}