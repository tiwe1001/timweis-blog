import axios from 'axios';

const API_PATH = 'http://localhost:3000/api/posts';

export async function getPostList(): Promise<Post[]> {
    try {
        const response = await axios.get(API_PATH);
        return response.data;
    } catch (error) {
        console.error('Error loading post data: ', error);
        return [];
    }
}

export interface Post {
    postId: number;
    userId: number;
    username: string;
    userPseudonym: string;
    title: string;
    content: string;
    createdAt: string;
}